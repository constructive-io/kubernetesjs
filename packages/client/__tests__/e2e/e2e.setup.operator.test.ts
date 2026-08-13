import { KubernetesClient } from "@kubernetesjs/ops";
import { getOperatorVersions } from "@kubernetesjs/manifests";
import { SetupClient } from "../../src/setup";
import type { ClusterSetupConfig, OperatorConfig } from "../../src/types";

// Runs e2e install for a single operator using env var:
//   OPERATOR=<name>
// Requires kubectl proxy on :8001 (CI sets it up) or K8S_API env

jest.setTimeout(15 * 60 * 1000); // generous for CI

const K8S_API = process.env.K8S_API || "http://127.0.0.1:8001";

// Versions are not declared here. They come from the manifests package, which
// is the only place a version is written — a hardcoded copy is a third place
// for them to disagree, and it already had: this fixture pinned cert-manager
// v1.17.0 and knative v1.15.0 long after the package had moved on, so the e2e
// suite was installing versions the package no longer shipped.
// Operators the suite pins rather than taking the newest of.
//
// The manifests package may carry several versions of an operator so different
// consumers can each install the one they run. "Newest" is then the wrong
// default for a test: adding a version downstream would silently change what
// this suite installs, and a suite whose subject moves without anyone choosing
// it is not testing what its name says.
const PINNED_VERSIONS: Record<string, string> = {};

function versionFor(name: string): string {
  const versions = getOperatorVersions(name);
  if (!versions.length) throw new Error(`Unknown operator '${name}'`);

  const pinned = PINNED_VERSIONS[name];
  if (pinned) {
    if (!versions.includes(pinned)) {
      throw new Error(
        `${name} is pinned to ${pinned}, which the manifests package no longer carries (has: ${versions.join(', ')})`
      );
    }
    return pinned;
  }
  return versions[versions.length - 1];
}

const DEFAULT_NAMESPACES: Record<string, string> = {
  "cert-manager": "cert-manager",
  "knative-serving": "knative-serving",
  "cloudnative-pg": "cnpg-system",
  "kube-prometheus-stack": "monitoring",
  "minio-operator": "minio-operator",
};

// Minimal operator dependency map for tests. Extend over time as needed.
// Example: knative-serving and cloudnative-pg both require cert-manager present.
const OPERATOR_DEPENDENCIES: Record<string, string[]> = {
  "knative-serving": ["cert-manager"],
  "cloudnative-pg": ["cert-manager"],
};

function buildOperator(name: string): OperatorConfig {
  const version = versionFor(name);
  const namespace = DEFAULT_NAMESPACES[name] || name;
  return { name, enabled: true, version, namespace } as OperatorConfig;
}

// Resolve requested operators into a de-duplicated, dependency-ordered list
function resolveOperatorOrder(requested: string[]): string[] {
  const seen = new Set<string>();
  const order: string[] = [];

  const addWithDeps = (name: string) => {
    if (seen.has(name)) return;
    const deps = OPERATOR_DEPENDENCIES[name] || [];
    for (const d of deps) addWithDeps(d);
    seen.add(name);
    order.push(name);
  };

  for (const r of requested) addWithDeps(r);
  return order;
}

describe("SetupClient E2E (matrix): install operators", () => {
  const api = new KubernetesClient({ restEndpoint: K8S_API } as any);
  const setup = new SetupClient(api as any);

  // Allow single or comma/space-separated list via OPERATOR or OPERATORS
  const rawOps = process.env.OPERATORS || process.env.OPERATOR;

  if (!rawOps) {
    // Make intent clear in local runs
    it("skips because OPERATOR env not set", () => {
      console.warn("OPERATOR env not set; skipping e2e.setup.operator.test");
    });
    return;
  }

  const requested = String(rawOps)
    .split(/[\s,]+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const resolvedNames = resolveOperatorOrder(requested);
  const operators: OperatorConfig[] = resolvedNames.map(buildOperator);

  const cfg: ClusterSetupConfig = {
    apiVersion: "kubernetesjs.dev/v1",
    kind: "ClusterSetup",
    metadata: { name: `e2e-${requested[0]}`, namespace: "interweb-system" },
    spec: {
      operators,
      networking: { ingressClass: "kourier", domain: "127.0.0.1.nip.io" },
    },
  };

  const label = operators.map((o) => `${o.name}@${o.version}`).join(", ");
  it(`installs operators: ${label}`, async () => {
    const connected = await setup.checkConnection();
    if (!connected) {
      console.warn("Kubernetes cluster not reachable; skipping test.");
      return;
    }

    // Apply operators
    await setup.installOperators(cfg);

    // Verify namespaces exist for each operator
    for (const op of operators) {
      const ns = DEFAULT_NAMESPACES[op.name] || op.namespace || op.name;
      const res = await api.listCoreV1Namespace({ query: {} as any });
      const namespaces = res?.items || [];
      const got = namespaces.find((n: any) => n?.metadata?.name === ns);
      expect(got?.metadata?.name).toBe(ns);
    }
  });
});
