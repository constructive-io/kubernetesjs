# Authentication & Client Configuration

This document covers how `kubernetesjs` handles authentication, endpoint detection, and client configuration. It also compares the approach with Go's `client-go` and outlines future work.

## Quick Reference

```typescript
import { KubernetesClient } from 'kubernetesjs';

// Auto-detect: in-cluster if available, else kubectl proxy at localhost:8001
const client = new KubernetesClient(KubernetesClient.getDefaultConfig());

// Explicit in-cluster (throws if not in a pod)
const client = new KubernetesClient(KubernetesClient.getInClusterConfig());

// Explicit token
const client = new KubernetesClient({
  restEndpoint: 'https://my-cluster:6443',
  token: myBearerToken,
});

// kubectl proxy (backward-compatible, no auth needed)
const client = new KubernetesClient({ restEndpoint: 'http://127.0.0.1:8001' });
```

## Constructor Options

```typescript
interface APIClientOptions {
  restEndpoint: string;                    // Required: Kubernetes API URL
  token?: string;                          // Bearer token (SA, OIDC, etc.)
  headers?: Record<string, string>;        // Default headers for every request
  timeout?: number;                        // Default timeout in ms (default: 10000)
}
```

All fields except `restEndpoint` are optional and backward-compatible.

### Header Merge Order

When a request is made, headers are merged with this priority (highest wins):

1. **Per-request headers** (passed via `opts.headers` on individual API calls)
2. **Auth header** (auto-injected `Authorization: Bearer <token>` if `token` is set)
3. **Default headers** (from `options.headers` in constructor)

This means per-request headers can override the default token if needed.

## Static Helpers

These are defined on `APIClient` and inherited by `KubernetesClient`, so you can call them as `KubernetesClient.methodName()`.

### `detectEndpoint(fallback?)`

Detects the Kubernetes API endpoint from environment variables.

**Priority:**
1. `KUBERNETES_API_URL` — explicit override (custom env var for flexibility)
2. `KUBERNETES_SERVICE_HOST` + `KUBERNETES_SERVICE_PORT` — standard in-cluster env vars set by Kubernetes
3. `fallback` — defaults to `http://127.0.0.1:8001` (kubectl proxy)

```typescript
const endpoint = KubernetesClient.detectEndpoint();
// In-cluster: "https://10.96.0.1:443"
// Local dev:  "http://127.0.0.1:8001"
```

### `readServiceAccountToken(path?)`

Reads the mounted service account bearer token from the filesystem. Returns `undefined` if the file doesn't exist or isn't readable.

**Default path:** `/var/run/secrets/kubernetes.io/serviceaccount/token`

```typescript
const token = KubernetesClient.readServiceAccountToken();
if (token) {
  console.log('Running in-cluster with SA token');
}
```

> **Node.js only** — uses `require('node:fs')`. Returns `undefined` in browser environments.

### `getServiceAccountCAPath()`

Returns the path to the service account CA certificate if it exists at the standard mount point (`/var/run/secrets/kubernetes.io/serviceaccount/ca.crt`), or `undefined` if not found.

Use this to set `NODE_EXTRA_CA_CERTS` before starting your application so that `fetch()` trusts the cluster's API server certificate:

```bash
NODE_EXTRA_CA_CERTS=/var/run/secrets/kubernetes.io/serviceaccount/ca.crt node app.js
```

### `getInClusterConfig()`

Builds a complete `APIClientOptions` for in-cluster usage. Reads the SA token and detects the endpoint from environment variables.

**Equivalent to client-go's `rest.InClusterConfig()`.**

Throws if:
- The SA token file is not found
- `KUBERNETES_SERVICE_HOST` is not set

```typescript
try {
  const config = KubernetesClient.getInClusterConfig();
  const client = new KubernetesClient(config);
} catch (err) {
  console.error('Not running in-cluster:', err.message);
}
```

### `getDefaultConfig(fallbackEndpoint?)`

Tries in-cluster config first, falls back to kubectl proxy.

**Equivalent to client-go's `BuildConfigFromFlags("", "")`.**

```typescript
// Always works — in-cluster or local dev
const client = new KubernetesClient(KubernetesClient.getDefaultConfig());
```

## Environment Variables

| Variable | Used By | Description |
|---|---|---|
| `KUBERNETES_API_URL` | `detectEndpoint()` | Explicit API server URL override |
| `KUBERNETES_SERVICE_HOST` | `detectEndpoint()` | In-cluster API server host (set by K8s) |
| `KUBERNETES_SERVICE_PORT` | `detectEndpoint()` | In-cluster API server port (set by K8s, default: 443) |
| `NODE_EXTRA_CA_CERTS` | Node.js TLS | Path to CA cert for HTTPS verification |

## In-Cluster Usage

When running inside a Kubernetes pod, the kubelet automatically mounts:

| File | Path | Purpose |
|---|---|---|
| SA Token | `/var/run/secrets/kubernetes.io/serviceaccount/token` | Bearer token for API auth |
| CA Cert | `/var/run/secrets/kubernetes.io/serviceaccount/ca.crt` | Cluster CA for TLS verification |
| Namespace | `/var/run/secrets/kubernetes.io/serviceaccount/namespace` | Pod's namespace |

And sets environment variables:
- `KUBERNETES_SERVICE_HOST` — API server IP
- `KUBERNETES_SERVICE_PORT` — API server port (usually 443)

### Minimal In-Cluster Example

```dockerfile
FROM node:20-alpine
ENV NODE_EXTRA_CA_CERTS=/var/run/secrets/kubernetes.io/serviceaccount/ca.crt
COPY . /app
CMD ["node", "/app/index.js"]
```

```typescript
import { KubernetesClient } from 'kubernetesjs';

const client = new KubernetesClient(KubernetesClient.getInClusterConfig());
const pods = await client.listCoreV1NamespacedPod({ path: { namespace: 'default' } });
```

### RBAC Requirements

The pod's service account needs appropriate RBAC permissions:

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: my-app-role
rules:
  - apiGroups: [""]
    resources: ["pods", "services", "namespaces"]
    verbs: ["get", "list", "watch", "create", "update", "delete"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: my-app-binding
subjects:
  - kind: ServiceAccount
    name: default
    namespace: my-namespace
roleRef:
  kind: ClusterRole
  name: my-app-role
  apiGroup: rbac.authorization.k8s.io
```

## Comparison with client-go

| Feature | client-go | kubernetesjs | Status |
|---|---|---|---|
| In-cluster config (SA token + env detection) | `rest.InClusterConfig()` | `getInClusterConfig()` | Supported |
| Auto-detect (in-cluster → fallback) | `BuildConfigFromFlags("","")` | `getDefaultConfig()` | Supported |
| Bearer token auth | `BearerToken` field | `token` option | Supported |
| Custom headers | Transport wrappers | `headers` option | Supported |
| SA token file path | `BearerTokenFile` | `readServiceAccountToken(path)` | Supported |
| CA certificate | `TLSClientConfig.CAFile` | `NODE_EXTRA_CA_CERTS` env var | Partial |
| Kubeconfig parsing (`~/.kube/config`) | `clientcmd` package | — | Planned |
| Multiple kubeconfig merge (`KUBECONFIG`) | `ClientConfigLoadingRules` | — | Planned |
| Context switching | `--context` flag | — | Planned |
| Client certificate auth (mTLS) | `TLSClientConfig.CertFile/KeyFile` | — | Planned |
| Exec-based credential plugins | `ExecProvider` | — | Planned |
| OIDC / auth provider plugins | `AuthProvider` | — | Planned |
| Token file watching (auto-refresh) | `BearerTokenFile` + transport | — | Planned |
| Basic auth (username/password) | `Username`/`Password` | — | Not planned |
| Impersonation headers | `Impersonate` config | — | Planned |
| HTTP proxy support | `ProxyURL` / env vars | — | Planned |
| Connection backoff | `KUBE_CLIENT_BACKOFF_*` env vars | — | Planned |

### How client-go Handles Auth Internally

client-go uses a layered transport system with `http.RoundTripper` wrappers:

1. **Config loading**: `rest.Config` is built from kubeconfig or in-cluster detection
2. **Transport wrapping**: `HTTPWrappersForConfig` wraps a base transport with:
   - `BearerAuthWithRefreshRoundTripper` — reads token, re-reads `BearerTokenFile` on each request
   - `BasicAuthRoundTripper` — adds `Authorization: Basic` header
   - `ImpersonatingRoundTripper` — adds `Impersonate-*` headers
   - `UserAgentRoundTripper` — adds `User-Agent` header
3. **TLS**: Custom `tls.Config` with cluster CA, client certs, SNI, minimum TLS 1.2

The `InClusterConfig()` flow specifically:
1. Check `KUBERNETES_SERVICE_HOST` and `KUBERNETES_SERVICE_PORT` — if missing, return `ErrNotInCluster`
2. Read token from `/var/run/secrets/kubernetes.io/serviceaccount/token`
3. Read CA cert from `/var/run/secrets/kubernetes.io/serviceaccount/ca.crt` (non-fatal if missing)
4. Return `rest.Config` with `Host`, `BearerToken`, `BearerTokenFile`, and `TLSClientConfig.CAFile`

## Future Work

The following sections describe features that client-go provides which we plan to port to kubernetesjs. Each section includes the client-go reference, proposed TypeScript API, and implementation notes.

### Priority 1: Kubeconfig Support

**client-go reference**: `clientcmd.LoadFromFile()`, `ClientConfigLoadingRules`, `DirectClientConfig`

Parsing `~/.kube/config` (or `$KUBECONFIG`) to extract cluster endpoints, contexts, and user credentials.

**Kubeconfig YAML structure** (all fields we need to parse):

```yaml
apiVersion: v1
kind: Config
current-context: my-context
clusters:
- name: my-cluster
  cluster:
    server: https://api.example.com:6443
    certificate-authority: /path/to/ca.crt      # or inline:
    certificate-authority-data: <base64-pem>
    insecure-skip-tls-verify: false
    tls-server-name: custom-sni.example.com
    proxy-url: socks5://proxy:1080
users:
- name: my-user
  user:
    token: static-bearer-token
    tokenFile: /path/to/token
    client-certificate: /path/to/cert.crt       # or inline:
    client-certificate-data: <base64-pem>
    client-key: /path/to/key.pem                 # or inline:
    client-key-data: <base64-pem>
    username: basic-auth-user
    password: basic-auth-pass
    exec:                                        # exec-based plugin
      command: gke-gcloud-auth-plugin
      args: ["--flag"]
      env: [{name: "FOO", value: "bar"}]
      apiVersion: client.authentication.k8s.io/v1
      provideClusterInfo: true
      installHint: "Install via: gcloud components install gke-gcloud-auth-plugin"
    auth-provider:                               # OIDC/OAuth2
      name: oidc
      config:
        idp-issuer-url: https://accounts.google.com
        client-id: my-client-id
contexts:
- name: my-context
  context:
    cluster: my-cluster
    user: my-user
    namespace: default
```

**Proposed API**:

```typescript
// Load from default location (~/.kube/config or $KUBECONFIG)
const client = new KubernetesClient(KubernetesClient.fromKubeConfig());

// Load from specific file with context override
const client = new KubernetesClient(
  KubernetesClient.fromKubeConfig({
    kubeconfig: '/path/to/config',
    context: 'staging-cluster',
  })
);
```

**client-go merge rules** (to implement):
- `KUBECONFIG` can list multiple files separated by `:` (Unix) or `;` (Windows)
- Map entries (clusters, users, contexts): **first file wins**
- Scalar values (current-context): **last file wins**
- Relative paths resolved against each file's directory
- If no kubeconfig found, fall back to in-cluster config

**Implementation notes**:
- Requires a YAML parser — options: `js-yaml` as optional peer dep, or minimal JSON-subset parser for kubeconfig
- Should support both file paths and inline data (`-data` fields are base64-encoded PEM)
- The `KUBECONFIG` env var handling should match client-go exactly

### Priority 2: TLS / CA Certificate Handling

**client-go reference**: `TLSClientConfig`, `transport.TLSConfigFor()`

client-go builds a `tls.Config` with:
- `RootCAs` from `CAFile`/`CAData` for server verification
- Minimum TLS 1.2
- Optional `InsecureSkipVerify` for dev
- SNI via `ServerName`

**Proposed API**:

```typescript
const client = new KubernetesClient({
  restEndpoint: 'https://my-cluster:6443',
  token: myToken,
  tls: {
    caFile: '/path/to/ca.crt',
    caData: '<base64-pem>',            // inline CA (overrides caFile)
    insecureSkipVerify: false,          // for dev only
    serverName: 'custom-sni.example.com',
  }
});
```

**Implementation notes**:
- Node.js `fetch` (undici) supports custom `dispatcher` with TLS options as of Node 18.x
- For the `ca` option, use `node:tls` to create a custom agent
- `NODE_EXTRA_CA_CERTS` remains the simplest approach for in-cluster; native TLS config is for advanced use cases
- Browser environments don't support custom CA certs — document this limitation

### Priority 3: Token File Watching

**client-go reference**: `BearerTokenFile` field, `BearerAuthWithRefreshRoundTripper`

In client-go, when `BearerTokenFile` is set, the token is re-read from disk on every request. This supports Kubernetes bound service account tokens which rotate automatically (default expiry: 1 hour).

**Proposed API**:

```typescript
const client = new KubernetesClient({
  restEndpoint: 'https://...',
  tokenFile: '/var/run/secrets/kubernetes.io/serviceaccount/token',
  // Token is re-read from file before each request
});
```

**Implementation notes**:
- Read token on each `request()` call (like client-go's round tripper)
- Cache the token + file mtime to avoid unnecessary reads
- Fall back to static `token` if `tokenFile` read fails after initial success
- `tokenFile` takes precedence over `token` (matching client-go behavior)

### Priority 4: Client Certificate Auth (mTLS)

**client-go reference**: `TLSClientConfig.CertFile/CertData/KeyFile/KeyData`

Used when kubeconfig specifies `client-certificate` and `client-key`.

```typescript
const client = new KubernetesClient({
  restEndpoint: 'https://my-cluster:6443',
  tls: {
    certFile: '/path/to/client.crt',
    certData: '<base64-pem>',
    keyFile: '/path/to/client.key',
    keyData: '<base64-pem>',
    caFile: '/path/to/ca.crt',
  }
});
```

**Implementation notes**:
- Requires `node:https` Agent with `cert`/`key`/`ca` options
- Inline data (`-Data` fields) takes precedence over file paths (matching client-go)
- Certificate rotation: client-go uses `GetClientCertificate` callback to reload certs, with a 5-minute refresh interval

### Priority 5: Exec-Based Credential Plugins

**client-go reference**: `ExecProvider`, `exec.Authenticator`

This is how GKE, EKS, and AKS authenticate — an external command produces credentials.

**Protocol**:
1. Client executes the command with `KUBERNETES_EXEC_INFO` env var containing a JSON `ExecCredential` object
2. Plugin outputs a JSON `ExecCredential` with `status.token` or `status.clientCertificateData`/`status.clientKeyData`
3. Client caches credentials until `status.expirationTimestamp`

**ExecCredential format**:

```json
{
  "apiVersion": "client.authentication.k8s.io/v1",
  "kind": "ExecCredential",
  "spec": {
    "interactive": false,
    "cluster": {
      "server": "https://...",
      "certificateAuthorityData": "...",
      "config": null
    }
  },
  "status": {
    "token": "the-bearer-token",
    "expirationTimestamp": "2024-01-01T00:00:00Z"
  }
}
```

**Proposed API**:

```typescript
const client = new KubernetesClient({
  restEndpoint: 'https://...',
  exec: {
    command: 'gke-gcloud-auth-plugin',
    args: ['--flag'],
    env: [{ name: 'FOO', value: 'bar' }],
    apiVersion: 'client.authentication.k8s.io/v1',
    provideClusterInfo: true,
    installHint: 'Install via: gcloud components install gke-gcloud-auth-plugin',
  }
});
```

**Implementation notes**:
- Use `node:child_process.execFile` (not `exec`, to prevent shell injection)
- Cache credentials based on `expirationTimestamp`
- Show `installHint` when command is not found
- `provideClusterInfo: true` passes cluster server + CA data to the plugin via `KUBERNETES_EXEC_INFO`

### Priority 6: Watch / Streaming Connections

**client-go reference**: `Watcher`, `Reflector`, `SharedInformer`

client-go's watch system:
1. Makes HTTP GET with `?watch=true` query param
2. API server streams line-delimited JSON `WatchEvent` objects
3. Each event has `type` (ADDED/MODIFIED/DELETED/BOOKMARK/ERROR) and `object`
4. On disconnect, reconnects using `resourceVersion` to resume
5. `SharedInformer` provides a local cache with event handlers

**Proposed API**:

```typescript
// Low-level watch (returns async iterator)
const watcher = await client.watchCoreV1NamespacedPod({
  path: { namespace: 'default' },
  query: { resourceVersion: '12345' },
});

for await (const event of watcher) {
  console.log(event.type, event.object.metadata.name);
  // event.type: 'ADDED' | 'MODIFIED' | 'DELETED' | 'BOOKMARK' | 'ERROR'
}

// High-level informer (future)
const informer = client.inform('v1', 'pods', 'default');
informer.on('add', (pod) => { ... });
informer.on('update', (oldPod, newPod) => { ... });
informer.on('delete', (pod) => { ... });
await informer.start();
```

**Implementation notes**:
- Use `fetch` with streaming response body (`response.body` is a `ReadableStream`)
- Parse line-delimited JSON using a `TransformStream` or manual line splitting
- Track `resourceVersion` from each event for reconnection
- Watch requests should NOT be rate-limited (matching client-go)
- Implement reconnection with exponential backoff
- `SharedInformer` pattern: single watch connection + local cache + event distribution

### Priority 7: Impersonation

**client-go reference**: `Impersonate` in `rest.Config`

```typescript
const client = new KubernetesClient({
  restEndpoint: 'https://...',
  token: adminToken,
  impersonate: {
    user: 'jane@example.com',
    uid: '12345',
    groups: ['developers', 'qa'],
    extra: { 'scopes': ['view', 'edit'] },
  }
});
```

Injects headers: `Impersonate-User`, `Impersonate-Uid`, `Impersonate-Group`, `Impersonate-Extra-<key>`.

### Priority 8: Rate Limiting & Retry

**client-go reference**: `QPS`/`Burst` fields, `BackoffManager`, `Retry-After` handling

client-go defaults: QPS=5, Burst=10. Uses token bucket rate limiter. Retries on 429 and 5xx with `Retry-After` header respect.

**Proposed API**:

```typescript
const client = new KubernetesClient({
  restEndpoint: 'https://...',
  rateLimiter: {
    qps: 5,
    burst: 10,
  },
  retry: {
    maxRetries: 3,
    retryOn: [429, 500, 502, 503, 504],
    respectRetryAfter: true,
  }
});
```

### Priority 9: Connection Pooling & HTTP/2

**client-go reference**: `http.Transport` settings

client-go defaults:
- `MaxIdleConnsPerHost`: 25
- `IdleConnTimeout`: 90s (Go default)
- HTTP/2 enabled by default via ALPN `["h2", "http/1.1"]`

In Node.js, `fetch` (undici) handles connection pooling internally. HTTP/2 support depends on the Node.js version and server configuration. These settings would be exposed via the custom dispatcher/agent.

### Priority 10: Patch Helpers

**client-go reference**: `types.JSONPatchType`, `types.MergePatchType`, `types.StrategicMergePatchType`, `types.ApplyPatchType`

Kubernetes supports four patch strategies:
- **JSON Patch** (`application/json-patch+json`) — RFC 6902 operations array
- **Merge Patch** (`application/merge-patch+json`) — partial JSON merge
- **Strategic Merge Patch** (`application/strategic-merge-patch+json`) — K8s-aware list merging
- **Server-Side Apply** (`application/apply-patch+yaml`) — field ownership management

Currently kubernetesjs uses `Content-Type: application/json` for PATCH. We should support setting the patch type:

```typescript
await client.patchCoreV1NamespacedPod({
  path: { namespace: 'default', name: 'my-pod' },
  body: [{ op: 'replace', path: '/metadata/labels/app', value: 'new-value' }],
}, { patchType: 'json' });

// Server-side apply
await client.patchCoreV1NamespacedDeployment({
  path: { namespace: 'default', name: 'my-deploy' },
  body: deploymentManifest,
  query: { fieldManager: 'my-controller', force: true },
}, { patchType: 'apply' });
```

### Not Planned

- **Basic auth** (`username`/`password`) — deprecated in Kubernetes, removed from most distributions
- **OIDC auth provider plugin** — deprecated in client-go in favor of exec-based plugins
