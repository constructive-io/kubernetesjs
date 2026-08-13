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
  return OPERATOR_MAP[operatorId].versions as string[];
}

export function getOperatorResources(operatorId: string, version?: string): KubernetesResource[] {
  // Without a version, the generated objects: typed, already in memory, and
  // what every existing caller expects.
  if (!version) return OPERATOR_MAP[operatorId].resources as KubernetesResource[];

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
  for (const file of getOperatorManifestPaths(operatorId, version)) {
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
  const versions = getOperatorVersions(operatorId);
  if (!versions || versions.length === 0) {
    throw new Error(`Unknown operator '${operatorId}'`);
  }

  const resolved = version ?? versions[versions.length - 1];
  if (!versions.includes(resolved)) {
    throw new Error(
      `Operator '${operatorId}' has no version '${resolved}' (has: ${versions.join(', ')})`
    );
  }

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
