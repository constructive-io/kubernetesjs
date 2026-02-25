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

### Kubeconfig Support

Parsing `~/.kube/config` (or `$KUBECONFIG`) to extract cluster endpoints, contexts, and user credentials. This would enable:

```typescript
// Future API
const client = new KubernetesClient(
  KubernetesClient.fromKubeConfig({ context: 'my-cluster' })
);
```

**Challenge**: Requires a YAML parser. Options include adding `js-yaml` as an optional peer dependency, or implementing minimal YAML parsing for the kubeconfig subset.

### TLS / CA Certificate Handling

Native support for custom CA certificates without relying on `NODE_EXTRA_CA_CERTS`. This would require creating a custom `fetch` agent with TLS options:

```typescript
// Future API
const client = new KubernetesClient({
  restEndpoint: 'https://my-cluster:6443',
  token: myToken,
  tls: {
    caFile: '/path/to/ca.crt',
    // or caData: Buffer.from('...')
    insecureSkipVerify: false,  // for dev only
  }
});
```

### Client Certificate Auth (mTLS)

```typescript
// Future API
const client = new KubernetesClient({
  restEndpoint: 'https://my-cluster:6443',
  tls: {
    certFile: '/path/to/client.crt',
    keyFile: '/path/to/client.key',
    caFile: '/path/to/ca.crt',
  }
});
```

### Token File Watching

Automatic re-reading of the SA token file on each request (or periodically), supporting Kubernetes bound service account token rotation:

```typescript
// Future API
const client = new KubernetesClient({
  restEndpoint: 'https://...',
  tokenFile: '/var/run/secrets/kubernetes.io/serviceaccount/token',
  // Token is re-read from file before each request
});
```

### Exec-Based Credential Plugins

Support for external credential commands (used by GKE, EKS, AKS):

```typescript
// Future API
const client = new KubernetesClient({
  restEndpoint: 'https://...',
  exec: {
    command: 'gke-gcloud-auth-plugin',
    apiVersion: 'client.authentication.k8s.io/v1beta1',
  }
});
```

### OIDC / Auth Provider Plugins

OpenID Connect token authentication for identity-based access.

### Impersonation

```typescript
// Future API
const client = new KubernetesClient({
  restEndpoint: 'https://...',
  token: adminToken,
  impersonate: {
    user: 'jane@example.com',
    groups: ['developers'],
  }
});
```
