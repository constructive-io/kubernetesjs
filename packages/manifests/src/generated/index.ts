/** Auto-generated aggregator of operator objects*/
import type { KubernetesResource } from "@kubernetesjs/ops";
import CertManager from "./cert-manager";
import CloudnativePg from "./cloudnative-pg";
import KnativeServing from "./knative-serving";
import KubePrometheusStack from "./kube-prometheus-stack";
import MinioOperator from "./minio-operator";
import TektonPipelines from "./tekton-pipelines";
import Traefik from "./traefik";
export interface OperatorObjectModule {
  resources?: ReadonlyArray<KubernetesResource>;
}
export const OPERATOR_OBJECTS: Record<string, OperatorObjectModule> = {
  "cert-manager": CertManager,
  "cloudnative-pg": CloudnativePg,
  "knative-serving": KnativeServing,
  "kube-prometheus-stack": KubePrometheusStack,
  "minio-operator": MinioOperator,
  "tekton-pipelines": TektonPipelines,
  "traefik": Traefik
};
export const OPERATOR_IDS: ReadonlyArray<string> = ["cert-manager", "cloudnative-pg", "knative-serving", "kube-prometheus-stack", "minio-operator", "tekton-pipelines", "traefik"];
export const OPERATOR_VERSIONS = {
  "cert-manager": ["v1.17.0"],
  "cloudnative-pg": ["1.25.2"],
  "knative-serving": ["v1.22.1"],
  "kube-prometheus-stack": ["77.5.0"],
  "minio-operator": ["7.1.1"],
  "tekton-pipelines": ["v1.15.0"],
  traefik: ["34.4.1"]
};
export const OPERATOR_MAP: Record<string, {
  resources: ReadonlyArray<KubernetesResource>;
  versions: ReadonlyArray<string>;
}> = {
  "cert-manager": {
    versions: ["v1.17.0"],
    resources: CertManager.resources
  },
  "cloudnative-pg": {
    versions: ["1.25.2"],
    resources: CloudnativePg.resources
  },
  "knative-serving": {
    versions: ["v1.22.1"],
    resources: KnativeServing.resources
  },
  "kube-prometheus-stack": {
    versions: ["77.5.0"],
    resources: KubePrometheusStack.resources
  },
  "minio-operator": {
    versions: ["7.1.1"],
    resources: MinioOperator.resources
  },
  "tekton-pipelines": {
    versions: ["v1.15.0"],
    resources: TektonPipelines.resources
  },
  "traefik": {
    versions: ["34.4.1"],
    resources: Traefik.resources
  }
};
