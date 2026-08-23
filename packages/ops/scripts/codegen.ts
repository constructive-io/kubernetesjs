import { writeFileSync } from 'fs';
import { generateOpenApiClient, getDefaultSchemaSDKOptions } from 'schema-sdk';

import schema from './swagger.json';

const options = getDefaultSchemaSDKOptions({
  includePropertyComments: true,
  clientName: 'KubernetesClient',
  includeSwaggerUrl: true,
});
// Apply IntOrString patch once (mutating a cloned schema)
const patchedSchema = JSON.parse(JSON.stringify(schema)) as any;
const intOrString = patchedSchema?.definitions?.['io.k8s.apimachinery.pkg.util.intstr.IntOrString'];
if (intOrString && typeof intOrString === 'object') {
  delete intOrString.type;
  delete intOrString.format;
  intOrString.oneOf = [
    { type: 'string' },
    { type: 'integer', format: 'int32' },
  ];
}

// The vendored spec is a snapshot of one cluster's CRDs, so a field a newer
// operator release added is missing until the spec is refetched from a cluster
// running it. Traefik's IngressRoute gained `spec.ingressClassName` in
// traefik/traefik#12313; keep it regardless of the snapshot's Traefik version.
const ingressRouteSpec =
  patchedSchema?.definitions?.['io.traefik.v1alpha1.IngressRoute']?.properties?.spec;
if (ingressRouteSpec?.properties) {
  ingressRouteSpec.properties.ingressClassName = {
    description:
      'Defines the IngressClass cluster resource to use. It replaces the deprecated kubernetes.io/ingress.class annotation.',
    type: 'string',
  };
}

const code = generateOpenApiClient(
  {
    ...options,
    npmApiClient: 'kubernetesjs/client',
    opsIndex: {
      enabled: true,
      emptyGroupLabel: 'core',
    },
    operationNamingStrategy: {
      // aliases: {
      //   listCoreV1PodForAllNamespaces: 'getPods',
      // },
      // renameMap: {
      //   listCoreV1PodForAllNamespaces: 'listPods',
      // },
    },
    paths: {
      //exclude: ['*v1beta1*', '*v2beta1*'],
      excludeRequests: ['head', 'options'],
      excludeTags: [
        'storage_v1beta1',
      ],
    },
    includeTypeComments: true,
    includeMethodComments: true,
    includePropertyComments: false,
    mergedParams: false,
    namingStrategy: {
      useLastSegment: true,
      renameMap: {
        'io.k8s.api.discovery.v1.EndpointPort': 'DiscoveryEndpointPort',
        'io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.ServiceReference':
          'ApiExtServiceReference',
        'io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1.WebhookClientConfig':
          'ApiExtWebhookClientConfig',
        'io.k8s.api.admissionregistration.v1.ServiceReference':
          'AdmissionServiceReference',
      },
    },
  },
  patchedSchema as any
);
writeFileSync(
  __dirname + '/../src/index.ts',
  code
);
