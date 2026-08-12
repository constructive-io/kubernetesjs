import { getOperatorResources } from "@kubernetesjs/manifests";

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

  it("exports namespaces for supported operators", () => {
    for (const operator of Object.keys(operatorNamespaceMap)) {
      const manifests = getOperatorResources(operator);
      const ns = manifests.find((m) => m.kind === "Namespace");
      expect(ns).toBeTruthy();
      expect((ns?.metadata as any).name).toBe(
        operatorNamespaceMap[operator as keyof typeof operatorNamespaceMap]
      );
    }
  });
});
