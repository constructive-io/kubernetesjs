import { getOperatorResources, getOperatorVersions } from "@kubernetesjs/manifests";

describe("manifests: metadata coverage", () => {
  const operatorNamespaceMap = {
    "cert-manager": "cert-manager",
    "knative-serving": "knative-serving",
    "cloudnative-pg": "cnpg-system",
    "kube-prometheus-stack": "monitoring",
    // Added with the operators themselves: a manifest set that ships
    // without a Namespace is a manifest set that cannot be applied
    // standalone, and this is the assertion that catches it.
    traefik: "traefik",
  };

  // Every version, not one. This used to call getOperatorResources(operator)
  // with no version, which returned whichever version was vendored last — so
  // the assertion silently stopped covering the versions it no longer chose,
  // and covering knative-serving at all became a matter of pull order.
  it("exports namespaces for supported operators, at every carried version", () => {
    for (const operator of Object.keys(operatorNamespaceMap)) {
      const versions = getOperatorVersions(operator);
      expect(versions.length).toBeGreaterThan(0);

      for (const version of versions) {
        const manifests = getOperatorResources(operator, version);
        const ns = manifests.find((m) => m.kind === "Namespace");
        expect(ns).toBeTruthy();
        expect((ns?.metadata as any).name).toBe(
          operatorNamespaceMap[operator as keyof typeof operatorNamespaceMap]
        );
      }
    }
  });
});
