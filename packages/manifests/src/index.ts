import * as yaml from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';
import { createRequire } from 'module';
import { OPERATOR_OBJECTS, OperatorObjectModule, OPERATOR_VERSIONS, OPERATOR_MAP, OPERATOR_IDS } from './generated';
import { KubernetesResource } from '@kubernetesjs/ops';

// Optional metadata for UIs: display name, description, docs, and (optionally) canonical namespaces
export interface OperatorCatalogEntry {
  name: string;
  displayName: string;
  description: string;
  docsUrl?: string;
  namespaces?: string[];
}

export const OPERATOR_CATALOG: Record<string, OperatorCatalogEntry> = {
  'minio-operator': {
    name: 'minio-operator',
    displayName: 'MinIO Operator',
    description: 'Operator to manage MinIO tenants and S3-compatible object storage on Kubernetes',
    docsUrl: 'https://operator.min.io',
    namespaces: ['minio-operator'],
  },
  'cert-manager': {
    name: 'cert-manager',
    displayName: 'cert-manager',
    description: 'X.509 certificate management for Kubernetes',
    docsUrl: 'https://cert-manager.io/',
    namespaces: ['cert-manager'],
  },
  'knative-serving': {
    name: 'knative-serving',
    displayName: 'Knative Serving',
    description: 'Serverless workloads on Kubernetes',
    docsUrl: 'https://knative.dev/docs/serving/',
    namespaces: ['knative-serving', 'kourier-system'],
  },
  'cloudnative-pg': {
    name: 'cloudnative-pg',
    displayName: 'CloudNativePG',
    description: 'PostgreSQL operator for Kubernetes',
    docsUrl: 'https://cloudnative-pg.io/',
    namespaces: ['cnpg-system'],
  },
  'kube-prometheus-stack': {
    name: 'kube-prometheus-stack',
    displayName: 'Prometheus Stack',
    description: 'Monitoring stack with Prometheus, Grafana, Alertmanager',
    docsUrl: 'https://prometheus.io/',
    namespaces: ['monitoring'],
  },
};

export function getOperatorIds(): string[] {
  return OPERATOR_IDS as string[];
}

export function getOperatorInfo(operatorId: string): OperatorCatalogEntry {
  return OPERATOR_CATALOG[operatorId];
}

export function getOperatorVersions(operatorId: string): string[] {
  const entry = OPERATOR_MAP[operatorId];
  if (!entry) {
    throw new Error(
      `Unknown operator '${operatorId}' (have: ${(OPERATOR_IDS as string[]).join(', ')})`
    );
  }
  return entry.versions as string[];
}

/**
 * Which version a caller meant, or an error explaining why that is unanswerable.
 *
 * An operator carrying one version has an unambiguous default. An operator
 * carrying several does not, and picking one for the caller is how this package
 * shipped its worst bug: `getOperatorResources` returned whichever version was
 * vendored last, so adding Knative v1.22.1 alongside v1.15.0 silently moved
 * every versionless caller a minor-and-a-half forward. Nothing in that diff
 * named the jump, and the e2e that pinned v1.15.0 logged v1.15.0 while applying
 * v1.22.1 — which took days to see precisely because the default looked stable.
 *
 * So a default that moves under callers is not offered. Adding a second version
 * to an operator is now a compile-clean, run-time-loud change: every versionless
 * caller of that operator fails on the next run with the list of versions to
 * choose from, rather than quietly installing a different one.
 */
function resolveOperatorVersion(operatorId: string, version: string | undefined): string {
  const versions = getOperatorVersions(operatorId);
  if (versions.length === 0) {
    throw new Error(`Operator '${operatorId}' carries no versions`);
  }

  if (version !== undefined) {
    if (!versions.includes(version)) {
      throw new Error(
        `Operator '${operatorId}' has no version '${version}' (has: ${versions.join(', ')})`
      );
    }
    return version;
  }

  if (versions.length > 1) {
    throw new Error(
      `Operator '${operatorId}' carries ${versions.length} versions ` +
      `(${versions.join(', ')}) — pass one explicitly.\n` +
      `There is no safe default here: it would be whichever version was vendored ` +
      `last, which moves the moment a version is added and gives no signal at the ` +
      `call site that it moved.`
    );
  }
  return versions[0];
}

export function getOperatorResources(operatorId: string, version?: string): KubernetesResource[] {
  // The generated objects are typed and already in memory, so they stay the fast
  // path — but only where they are unambiguous. For a single-version operator
  // the generated set and that version are the same thing by construction; for a
  // multi-version one they are whatever codegen emitted last, which is exactly
  // the ambiguity resolveOperatorVersion refuses.
  const resolved = resolveOperatorVersion(operatorId, version);
  if (getOperatorVersions(operatorId).length === 1) {
    return OPERATOR_MAP[operatorId].resources as KubernetesResource[];
  }

  // With one, parse that version's vendored YAML rather than returning the
  // generated default and hoping they match. They did not: the generated set is
  // whatever codegen emitted last, so an operator carrying two versions served
  // the same resources for both — a caller asking for one version quietly got
  // the other, while every log line still named the version it had asked for.
  //
  // Read rather than embedded because embedding every version's docs would
  // multiply the generated output by the number of versions, and the YAML is
  // already shipped for getOperatorManifestPaths.
  const docs: KubernetesResource[] = [];
  for (const file of getOperatorManifestPaths(operatorId, resolved)) {
    const parsed = yaml.loadAll(fs.readFileSync(file, 'utf-8'));
    for (const doc of parsed) {
      if (doc && typeof doc === 'object') docs.push(doc as KubernetesResource);
    }
  }
  return docs;
}

/**
 * Absolute paths to an operator's vendored manifests, in the order they must be
 * applied.
 *
 * For consumers that shell out to `kubectl apply -f` rather than going through
 * a client — which is most bring-up tooling. The alternative is fetching the
 * same YAML from GitHub releases at run time, which is exactly the
 * non-determinism this package exists to remove: those downloads are rate
 * limited per IP and fail mid-transfer rather than cleanly.
 *
 * Order matters and is encoded in the filenames. Knative ships as three
 * numbered parts because its CRDs must be established before serving-core
 * creates custom resources of those kinds; returning them sorted means a caller
 * cannot get that wrong by accident.
 */
export function getOperatorManifestPaths(operatorId: string, version?: string): string[] {
  const resolved = resolveOperatorVersion(operatorId, version);

  const root = path.join(operatorsRoot(), operatorId);
  const asDir = path.join(root, resolved);
  if (fs.existsSync(asDir) && fs.statSync(asDir).isDirectory()) {
    return fs
      .readdirSync(asDir)
      .filter((f) => f.endsWith('.yaml'))
      .sort((a, b) => a.localeCompare(b))
      .map((f) => path.join(asDir, f));
  }

  const asFile = `${asDir}.yaml`;
  if (fs.existsSync(asFile)) return [asFile];

  throw new Error(
    `No vendored manifests for '${operatorId}@${resolved}' (looked in ${asDir} and ${asFile})`
  );
}

/**
 * Where the vendored manifests live.
 *
 * Walked rather than counted: this resolves correctly from `src`, from `dist`,
 * and from `dist/esm`, whose depths differ. A fixed number of `..` segments is
 * right for one of those and wrong for the others, and wrong only shows up at
 * run time in a consumer.
 */
function operatorsRoot(): string {
  let dir = __dirname;
  for (let i = 0; i < 6; i++) {
    const candidate = path.join(dir, 'operators');
    if (fs.existsSync(candidate)) return candidate;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  throw new Error(
    `Vendored manifests not found (looked for an 'operators' directory above ${__dirname})`
  );
}

// Re-export generated operator artifacts at the root for convenience
export { OPERATOR_IDS, OPERATOR_VERSIONS, OPERATOR_MAP, OPERATOR_OBJECTS };
