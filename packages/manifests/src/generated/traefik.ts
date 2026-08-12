/** Auto-generated typed resources for operator: traefik*/
import type { KubernetesResource } from "@kubernetesjs/ops";
export const Namespace_Traefik: KubernetesResource = {
  apiVersion: "v1",
  kind: "Namespace",
  metadata: {
    labels: {
      "app.kubernetes.io/name": "traefik"
    },
    name: "traefik"
  }
};
export const CustomResourceDefinition_GatewayclassesGatewayNetworkingK8sIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "api-approved.kubernetes.io": "https://github.com/kubernetes-sigs/gateway-api/pull/3328",
      "gateway.networking.k8s.io/bundle-version": "v1.2.1",
      "gateway.networking.k8s.io/channel": "standard"
    },
    creationTimestamp: null,
    name: "gatewayclasses.gateway.networking.k8s.io"
  },
  spec: {
    group: "gateway.networking.k8s.io",
    names: {
      categories: ["gateway-api"],
      kind: "GatewayClass",
      listKind: "GatewayClassList",
      plural: "gatewayclasses",
      shortNames: ["gc"],
      singular: "gatewayclass"
    },
    scope: "Cluster",
    versions: [{
      additionalPrinterColumns: [{
        jsonPath: ".spec.controllerName",
        name: "Controller",
        type: "string"
      }, {
        jsonPath: ".status.conditions[?(@.type==\"Accepted\")].status",
        name: "Accepted",
        type: "string"
      }, {
        jsonPath: ".metadata.creationTimestamp",
        name: "Age",
        type: "date"
      }, {
        jsonPath: ".spec.description",
        name: "Description",
        priority: 1,
        type: "string"
      }],
      name: "v1",
      schema: {
        openAPIV3Schema: {
          description: "GatewayClass describes a class of Gateways available to the user for creating\nGateway resources.\n\nIt is recommended that this resource be used as a template for Gateways. This\nmeans that a Gateway is based on the state of the GatewayClass at the time it\nwas created and changes to the GatewayClass or associated parameters are not\npropagated down to existing Gateways. This recommendation is intended to\nlimit the blast radius of changes to GatewayClass or associated parameters.\nIf implementations choose to propagate GatewayClass changes to existing\nGateways, that MUST be clearly documented by the implementation.\n\nWhenever one or more Gateways are using a GatewayClass, implementations SHOULD\nadd the `gateway-exists-finalizer.gateway.networking.k8s.io` finalizer on the\nassociated GatewayClass. This ensures that a GatewayClass associated with a\nGateway is not deleted while in use.\n\nGatewayClass is a Cluster level resource.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "Spec defines the desired state of GatewayClass.",
              properties: {
                controllerName: {
                  description: "ControllerName is the name of the controller that is managing Gateways of\nthis class. The value of this field MUST be a domain prefixed path.\n\nExample: \"example.net/gateway-controller\".\n\nThis field is not mutable and cannot be empty.\n\nSupport: Core",
                  maxLength: 253,
                  minLength: 1,
                  pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*\\/[A-Za-z0-9\\/\\-._~%!$&'()*+,;=:]+$",
                  type: "string",
                  "x-kubernetes-validations": [{
                    message: "Value is immutable",
                    rule: "self == oldSelf"
                  }]
                },
                description: {
                  description: "Description helps describe a GatewayClass with more details.",
                  maxLength: 64,
                  type: "string"
                },
                parametersRef: {
                  description: "ParametersRef is a reference to a resource that contains the configuration\nparameters corresponding to the GatewayClass. This is optional if the\ncontroller does not require any additional configuration.\n\nParametersRef can reference a standard Kubernetes resource, i.e. ConfigMap,\nor an implementation-specific custom resource. The resource can be\ncluster-scoped or namespace-scoped.\n\nIf the referent cannot be found, refers to an unsupported kind, or when\nthe data within that resource is malformed, the GatewayClass SHOULD be\nrejected with the \"Accepted\" status condition set to \"False\" and an\n\"InvalidParameters\" reason.\n\nA Gateway for this GatewayClass may provide its own `parametersRef`. When both are specified,\nthe merging behavior is implementation specific.\nIt is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway.\n\nSupport: Implementation-specific",
                  properties: {
                    group: {
                      description: "Group is the group of the referent.",
                      maxLength: 253,
                      pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                      type: "string"
                    },
                    kind: {
                      description: "Kind is kind of the referent.",
                      maxLength: 63,
                      minLength: 1,
                      pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                      type: "string"
                    },
                    name: {
                      description: "Name is the name of the referent.",
                      maxLength: 253,
                      minLength: 1,
                      type: "string"
                    },
                    namespace: {
                      description: "Namespace is the namespace of the referent.\nThis field is required when referring to a Namespace-scoped resource and\nMUST be unset when referring to a Cluster-scoped resource.",
                      maxLength: 63,
                      minLength: 1,
                      pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                      type: "string"
                    }
                  },
                  required: ["group", "kind", "name"],
                  type: "object"
                }
              },
              required: ["controllerName"],
              type: "object"
            },
            status: {
              default: {
                conditions: [{
                  lastTransitionTime: "1970-01-01T00:00:00Z",
                  message: "Waiting for controller",
                  reason: "Pending",
                  status: "Unknown",
                  type: "Accepted"
                }]
              },
              description: "Status defines the current state of GatewayClass.\n\nImplementations MUST populate status on all GatewayClass resources which\nspecify their controller name.",
              properties: {
                conditions: {
                  default: [{
                    lastTransitionTime: "1970-01-01T00:00:00Z",
                    message: "Waiting for controller",
                    reason: "Pending",
                    status: "Unknown",
                    type: "Accepted"
                  }],
                  description: "Conditions is the current status from the controller for\nthis GatewayClass.\n\nControllers should prefer to publish conditions using values\nof GatewayClassConditionType for the type of each Condition.",
                  items: {
                    description: "Condition contains details for one aspect of the current state of this API Resource.",
                    properties: {
                      lastTransitionTime: {
                        description: "lastTransitionTime is the last time the condition transitioned from one status to another.\nThis should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.",
                        format: "date-time",
                        type: "string"
                      },
                      message: {
                        description: "message is a human readable message indicating details about the transition.\nThis may be an empty string.",
                        maxLength: 32768,
                        type: "string"
                      },
                      observedGeneration: {
                        description: "observedGeneration represents the .metadata.generation that the condition was set based upon.\nFor instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date\nwith respect to the current state of the instance.",
                        format: "int64",
                        minimum: 0,
                        type: "integer"
                      },
                      reason: {
                        description: "reason contains a programmatic identifier indicating the reason for the condition's last transition.\nProducers of specific condition types may define expected values and meanings for this field,\nand whether the values are considered a guaranteed API.\nThe value should be a CamelCase string.\nThis field may not be empty.",
                        maxLength: 1024,
                        minLength: 1,
                        pattern: "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$",
                        type: "string"
                      },
                      status: {
                        description: "status of the condition, one of True, False, Unknown.",
                        enum: ["True", "False", "Unknown"],
                        type: "string"
                      },
                      type: {
                        description: "type of condition in CamelCase or in foo.example.com/CamelCase.",
                        maxLength: 316,
                        pattern: "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$",
                        type: "string"
                      }
                    },
                    required: ["lastTransitionTime", "message", "reason", "status", "type"],
                    type: "object"
                  },
                  maxItems: 8,
                  type: "array",
                  "x-kubernetes-list-map-keys": ["type"],
                  "x-kubernetes-list-type": "map"
                }
              },
              type: "object"
            }
          },
          required: ["spec"],
          type: "object"
        }
      },
      served: true,
      storage: true,
      subresources: {
        status: {}
      }
    }, {
      additionalPrinterColumns: [{
        jsonPath: ".spec.controllerName",
        name: "Controller",
        type: "string"
      }, {
        jsonPath: ".status.conditions[?(@.type==\"Accepted\")].status",
        name: "Accepted",
        type: "string"
      }, {
        jsonPath: ".metadata.creationTimestamp",
        name: "Age",
        type: "date"
      }, {
        jsonPath: ".spec.description",
        name: "Description",
        priority: 1,
        type: "string"
      }],
      name: "v1beta1",
      schema: {
        openAPIV3Schema: {
          description: "GatewayClass describes a class of Gateways available to the user for creating\nGateway resources.\n\nIt is recommended that this resource be used as a template for Gateways. This\nmeans that a Gateway is based on the state of the GatewayClass at the time it\nwas created and changes to the GatewayClass or associated parameters are not\npropagated down to existing Gateways. This recommendation is intended to\nlimit the blast radius of changes to GatewayClass or associated parameters.\nIf implementations choose to propagate GatewayClass changes to existing\nGateways, that MUST be clearly documented by the implementation.\n\nWhenever one or more Gateways are using a GatewayClass, implementations SHOULD\nadd the `gateway-exists-finalizer.gateway.networking.k8s.io` finalizer on the\nassociated GatewayClass. This ensures that a GatewayClass associated with a\nGateway is not deleted while in use.\n\nGatewayClass is a Cluster level resource.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "Spec defines the desired state of GatewayClass.",
              properties: {
                controllerName: {
                  description: "ControllerName is the name of the controller that is managing Gateways of\nthis class. The value of this field MUST be a domain prefixed path.\n\nExample: \"example.net/gateway-controller\".\n\nThis field is not mutable and cannot be empty.\n\nSupport: Core",
                  maxLength: 253,
                  minLength: 1,
                  pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*\\/[A-Za-z0-9\\/\\-._~%!$&'()*+,;=:]+$",
                  type: "string",
                  "x-kubernetes-validations": [{
                    message: "Value is immutable",
                    rule: "self == oldSelf"
                  }]
                },
                description: {
                  description: "Description helps describe a GatewayClass with more details.",
                  maxLength: 64,
                  type: "string"
                },
                parametersRef: {
                  description: "ParametersRef is a reference to a resource that contains the configuration\nparameters corresponding to the GatewayClass. This is optional if the\ncontroller does not require any additional configuration.\n\nParametersRef can reference a standard Kubernetes resource, i.e. ConfigMap,\nor an implementation-specific custom resource. The resource can be\ncluster-scoped or namespace-scoped.\n\nIf the referent cannot be found, refers to an unsupported kind, or when\nthe data within that resource is malformed, the GatewayClass SHOULD be\nrejected with the \"Accepted\" status condition set to \"False\" and an\n\"InvalidParameters\" reason.\n\nA Gateway for this GatewayClass may provide its own `parametersRef`. When both are specified,\nthe merging behavior is implementation specific.\nIt is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway.\n\nSupport: Implementation-specific",
                  properties: {
                    group: {
                      description: "Group is the group of the referent.",
                      maxLength: 253,
                      pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                      type: "string"
                    },
                    kind: {
                      description: "Kind is kind of the referent.",
                      maxLength: 63,
                      minLength: 1,
                      pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                      type: "string"
                    },
                    name: {
                      description: "Name is the name of the referent.",
                      maxLength: 253,
                      minLength: 1,
                      type: "string"
                    },
                    namespace: {
                      description: "Namespace is the namespace of the referent.\nThis field is required when referring to a Namespace-scoped resource and\nMUST be unset when referring to a Cluster-scoped resource.",
                      maxLength: 63,
                      minLength: 1,
                      pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                      type: "string"
                    }
                  },
                  required: ["group", "kind", "name"],
                  type: "object"
                }
              },
              required: ["controllerName"],
              type: "object"
            },
            status: {
              default: {
                conditions: [{
                  lastTransitionTime: "1970-01-01T00:00:00Z",
                  message: "Waiting for controller",
                  reason: "Pending",
                  status: "Unknown",
                  type: "Accepted"
                }]
              },
              description: "Status defines the current state of GatewayClass.\n\nImplementations MUST populate status on all GatewayClass resources which\nspecify their controller name.",
              properties: {
                conditions: {
                  default: [{
                    lastTransitionTime: "1970-01-01T00:00:00Z",
                    message: "Waiting for controller",
                    reason: "Pending",
                    status: "Unknown",
                    type: "Accepted"
                  }],
                  description: "Conditions is the current status from the controller for\nthis GatewayClass.\n\nControllers should prefer to publish conditions using values\nof GatewayClassConditionType for the type of each Condition.",
                  items: {
                    description: "Condition contains details for one aspect of the current state of this API Resource.",
                    properties: {
                      lastTransitionTime: {
                        description: "lastTransitionTime is the last time the condition transitioned from one status to another.\nThis should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.",
                        format: "date-time",
                        type: "string"
                      },
                      message: {
                        description: "message is a human readable message indicating details about the transition.\nThis may be an empty string.",
                        maxLength: 32768,
                        type: "string"
                      },
                      observedGeneration: {
                        description: "observedGeneration represents the .metadata.generation that the condition was set based upon.\nFor instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date\nwith respect to the current state of the instance.",
                        format: "int64",
                        minimum: 0,
                        type: "integer"
                      },
                      reason: {
                        description: "reason contains a programmatic identifier indicating the reason for the condition's last transition.\nProducers of specific condition types may define expected values and meanings for this field,\nand whether the values are considered a guaranteed API.\nThe value should be a CamelCase string.\nThis field may not be empty.",
                        maxLength: 1024,
                        minLength: 1,
                        pattern: "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$",
                        type: "string"
                      },
                      status: {
                        description: "status of the condition, one of True, False, Unknown.",
                        enum: ["True", "False", "Unknown"],
                        type: "string"
                      },
                      type: {
                        description: "type of condition in CamelCase or in foo.example.com/CamelCase.",
                        maxLength: 316,
                        pattern: "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$",
                        type: "string"
                      }
                    },
                    required: ["lastTransitionTime", "message", "reason", "status", "type"],
                    type: "object"
                  },
                  maxItems: 8,
                  type: "array",
                  "x-kubernetes-list-map-keys": ["type"],
                  "x-kubernetes-list-type": "map"
                }
              },
              type: "object"
            }
          },
          required: ["spec"],
          type: "object"
        }
      },
      served: true,
      storage: false,
      subresources: {
        status: {}
      }
    }]
  },
  status: {
    acceptedNames: {
      kind: "",
      plural: ""
    },
    conditions: null,
    storedVersions: null
  }
};
export const CustomResourceDefinition_GatewaysGatewayNetworkingK8sIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "api-approved.kubernetes.io": "https://github.com/kubernetes-sigs/gateway-api/pull/3328",
      "gateway.networking.k8s.io/bundle-version": "v1.2.1",
      "gateway.networking.k8s.io/channel": "standard"
    },
    creationTimestamp: null,
    name: "gateways.gateway.networking.k8s.io"
  },
  spec: {
    group: "gateway.networking.k8s.io",
    names: {
      categories: ["gateway-api"],
      kind: "Gateway",
      listKind: "GatewayList",
      plural: "gateways",
      shortNames: ["gtw"],
      singular: "gateway"
    },
    scope: "Namespaced",
    versions: [{
      additionalPrinterColumns: [{
        jsonPath: ".spec.gatewayClassName",
        name: "Class",
        type: "string"
      }, {
        jsonPath: ".status.addresses[*].value",
        name: "Address",
        type: "string"
      }, {
        jsonPath: ".status.conditions[?(@.type==\"Programmed\")].status",
        name: "Programmed",
        type: "string"
      }, {
        jsonPath: ".metadata.creationTimestamp",
        name: "Age",
        type: "date"
      }],
      name: "v1",
      schema: {
        openAPIV3Schema: {
          description: "Gateway represents an instance of a service-traffic handling infrastructure\nby binding Listeners to a set of IP addresses.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "Spec defines the desired state of Gateway.",
              properties: {
                addresses: {
                  description: "Addresses requested for this Gateway. This is optional and behavior can\ndepend on the implementation. If a value is set in the spec and the\nrequested address is invalid or unavailable, the implementation MUST\nindicate this in the associated entry in GatewayStatus.Addresses.\n\nThe Addresses field represents a request for the address(es) on the\n\"outside of the Gateway\", that traffic bound for this Gateway will use.\nThis could be the IP address or hostname of an external load balancer or\nother networking infrastructure, or some other address that traffic will\nbe sent to.\n\nIf no Addresses are specified, the implementation MAY schedule the\nGateway in an implementation-specific manner, assigning an appropriate\nset of Addresses.\n\nThe implementation MUST bind all Listeners to every GatewayAddress that\nit assigns to the Gateway and add a corresponding entry in\nGatewayStatus.Addresses.\n\nSupport: Extended\n\n",
                  items: {
                    description: "GatewayAddress describes an address that can be bound to a Gateway.",
                    oneOf: [{
                      properties: {
                        type: {
                          enum: ["IPAddress"]
                        },
                        value: {
                          anyOf: [{
                            format: "ipv4"
                          }, {
                            format: "ipv6"
                          }]
                        }
                      }
                    }, {
                      properties: {
                        type: {
                          not: {
                            enum: ["IPAddress"]
                          }
                        }
                      }
                    }],
                    properties: {
                      type: {
                        default: "IPAddress",
                        description: "Type of the address.",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^Hostname|IPAddress|NamedAddress|[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*\\/[A-Za-z0-9\\/\\-._~%!$&'()*+,;=:]+$",
                        type: "string"
                      },
                      value: {
                        description: "Value of the address. The validity of the values will depend\non the type and support by the controller.\n\nExamples: `1.2.3.4`, `128::1`, `my-ip-address`.",
                        maxLength: 253,
                        minLength: 1,
                        type: "string"
                      }
                    },
                    required: ["value"],
                    type: "object",
                    "x-kubernetes-validations": [{
                      message: "Hostname value must only contain valid characters (matching ^(\\*\\.)?[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$)",
                      rule: "self.type == 'Hostname' ? self.value.matches(r\"\"\"^(\\*\\.)?[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$\"\"\"): true"
                    }]
                  },
                  maxItems: 16,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "IPAddress values must be unique",
                    rule: "self.all(a1, a1.type == 'IPAddress' ? self.exists_one(a2, a2.type == a1.type && a2.value == a1.value) : true )"
                  }, {
                    message: "Hostname values must be unique",
                    rule: "self.all(a1, a1.type == 'Hostname' ? self.exists_one(a2, a2.type == a1.type && a2.value == a1.value) : true )"
                  }]
                },
                gatewayClassName: {
                  description: "GatewayClassName used for this Gateway. This is the name of a\nGatewayClass resource.",
                  maxLength: 253,
                  minLength: 1,
                  type: "string"
                },
                infrastructure: {
                  description: "Infrastructure defines infrastructure level attributes about this Gateway instance.\n\nSupport: Extended",
                  properties: {
                    annotations: {
                      additionalProperties: {
                        description: "AnnotationValue is the value of an annotation in Gateway API. This is used\nfor validation of maps such as TLS options. This roughly matches Kubernetes\nannotation validation, although the length validation in that case is based\non the entire size of the annotations struct.",
                        maxLength: 4096,
                        minLength: 0,
                        type: "string"
                      },
                      description: "Annotations that SHOULD be applied to any resources created in response to this Gateway.\n\nFor implementations creating other Kubernetes objects, this should be the `metadata.annotations` field on resources.\nFor other implementations, this refers to any relevant (implementation specific) \"annotations\" concepts.\n\nAn implementation may chose to add additional implementation-specific annotations as they see fit.\n\nSupport: Extended",
                      maxProperties: 8,
                      type: "object",
                      "x-kubernetes-validations": [{
                        message: "Annotation keys must be in the form of an optional DNS subdomain prefix followed by a required name segment of up to 63 characters.",
                        rule: "self.all(key, key.matches(r\"\"\"^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?([A-Za-z0-9][-A-Za-z0-9_.]{0,61})?[A-Za-z0-9]$\"\"\"))"
                      }, {
                        message: "If specified, the annotation key's prefix must be a DNS subdomain not longer than 253 characters in total.",
                        rule: "self.all(key, key.split(\"/\")[0].size() < 253)"
                      }]
                    },
                    labels: {
                      additionalProperties: {
                        description: "LabelValue is the value of a label in the Gateway API. This is used for validation\nof maps such as Gateway infrastructure labels. This matches the Kubernetes\nlabel validation rules:\n* must be 63 characters or less (can be empty),\n* unless empty, must begin and end with an alphanumeric character ([a-z0-9A-Z]),\n* could contain dashes (-), underscores (_), dots (.), and alphanumerics between.\n\nValid values include:\n\n* MyValue\n* my.name\n* 123-my-value",
                        maxLength: 63,
                        minLength: 0,
                        pattern: "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$",
                        type: "string"
                      },
                      description: "Labels that SHOULD be applied to any resources created in response to this Gateway.\n\nFor implementations creating other Kubernetes objects, this should be the `metadata.labels` field on resources.\nFor other implementations, this refers to any relevant (implementation specific) \"labels\" concepts.\n\nAn implementation may chose to add additional implementation-specific labels as they see fit.\n\nIf an implementation maps these labels to Pods, or any other resource that would need to be recreated when labels\nchange, it SHOULD clearly warn about this behavior in documentation.\n\nSupport: Extended",
                      maxProperties: 8,
                      type: "object",
                      "x-kubernetes-validations": [{
                        message: "Label keys must be in the form of an optional DNS subdomain prefix followed by a required name segment of up to 63 characters.",
                        rule: "self.all(key, key.matches(r\"\"\"^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?([A-Za-z0-9][-A-Za-z0-9_.]{0,61})?[A-Za-z0-9]$\"\"\"))"
                      }, {
                        message: "If specified, the label key's prefix must be a DNS subdomain not longer than 253 characters in total.",
                        rule: "self.all(key, key.split(\"/\")[0].size() < 253)"
                      }]
                    },
                    parametersRef: {
                      description: "ParametersRef is a reference to a resource that contains the configuration\nparameters corresponding to the Gateway. This is optional if the\ncontroller does not require any additional configuration.\n\nThis follows the same semantics as GatewayClass's `parametersRef`, but on a per-Gateway basis\n\nThe Gateway's GatewayClass may provide its own `parametersRef`. When both are specified,\nthe merging behavior is implementation specific.\nIt is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway.\n\nSupport: Implementation-specific",
                      properties: {
                        group: {
                          description: "Group is the group of the referent.",
                          maxLength: 253,
                          pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                          type: "string"
                        },
                        kind: {
                          description: "Kind is kind of the referent.",
                          maxLength: 63,
                          minLength: 1,
                          pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                          type: "string"
                        },
                        name: {
                          description: "Name is the name of the referent.",
                          maxLength: 253,
                          minLength: 1,
                          type: "string"
                        }
                      },
                      required: ["group", "kind", "name"],
                      type: "object"
                    }
                  },
                  type: "object"
                },
                listeners: {
                  description: "Listeners associated with this Gateway. Listeners define\nlogical endpoints that are bound on this Gateway's addresses.\nAt least one Listener MUST be specified.\n\nEach Listener in a set of Listeners (for example, in a single Gateway)\nMUST be _distinct_, in that a traffic flow MUST be able to be assigned to\nexactly one listener. (This section uses \"set of Listeners\" rather than\n\"Listeners in a single Gateway\" because implementations MAY merge configuration\nfrom multiple Gateways onto a single data plane, and these rules _also_\napply in that case).\n\nPractically, this means that each listener in a set MUST have a unique\ncombination of Port, Protocol, and, if supported by the protocol, Hostname.\n\nSome combinations of port, protocol, and TLS settings are considered\nCore support and MUST be supported by implementations based on their\ntargeted conformance profile:\n\nHTTP Profile\n\n1. HTTPRoute, Port: 80, Protocol: HTTP\n2. HTTPRoute, Port: 443, Protocol: HTTPS, TLS Mode: Terminate, TLS keypair provided\n\nTLS Profile\n\n1. TLSRoute, Port: 443, Protocol: TLS, TLS Mode: Passthrough\n\n\"Distinct\" Listeners have the following property:\n\nThe implementation can match inbound requests to a single distinct\nListener. When multiple Listeners share values for fields (for\nexample, two Listeners with the same Port value), the implementation\ncan match requests to only one of the Listeners using other\nListener fields.\n\nFor example, the following Listener scenarios are distinct:\n\n1. Multiple Listeners with the same Port that all use the \"HTTP\"\n   Protocol that all have unique Hostname values.\n2. Multiple Listeners with the same Port that use either the \"HTTPS\" or\n   \"TLS\" Protocol that all have unique Hostname values.\n3. A mixture of \"TCP\" and \"UDP\" Protocol Listeners, where no Listener\n   with the same Protocol has the same Port value.\n\nSome fields in the Listener struct have possible values that affect\nwhether the Listener is distinct. Hostname is particularly relevant\nfor HTTP or HTTPS protocols.\n\nWhen using the Hostname value to select between same-Port, same-Protocol\nListeners, the Hostname value must be different on each Listener for the\nListener to be distinct.\n\nWhen the Listeners are distinct based on Hostname, inbound request\nhostnames MUST match from the most specific to least specific Hostname\nvalues to choose the correct Listener and its associated set of Routes.\n\nExact matches must be processed before wildcard matches, and wildcard\nmatches must be processed before fallback (empty Hostname value)\nmatches. For example, `\"foo.example.com\"` takes precedence over\n`\"*.example.com\"`, and `\"*.example.com\"` takes precedence over `\"\"`.\n\nAdditionally, if there are multiple wildcard entries, more specific\nwildcard entries must be processed before less specific wildcard entries.\nFor example, `\"*.foo.example.com\"` takes precedence over `\"*.example.com\"`.\nThe precise definition here is that the higher the number of dots in the\nhostname to the right of the wildcard character, the higher the precedence.\n\nThe wildcard character will match any number of characters _and dots_ to\nthe left, however, so `\"*.example.com\"` will match both\n`\"foo.bar.example.com\"` _and_ `\"bar.example.com\"`.\n\nIf a set of Listeners contains Listeners that are not distinct, then those\nListeners are Conflicted, and the implementation MUST set the \"Conflicted\"\ncondition in the Listener Status to \"True\".\n\nImplementations MAY choose to accept a Gateway with some Conflicted\nListeners only if they only accept the partial Listener set that contains\nno Conflicted Listeners. To put this another way, implementations may\naccept a partial Listener set only if they throw out *all* the conflicting\nListeners. No picking one of the conflicting listeners as the winner.\nThis also means that the Gateway must have at least one non-conflicting\nListener in this case, otherwise it violates the requirement that at\nleast one Listener must be present.\n\nThe implementation MUST set a \"ListenersNotValid\" condition on the\nGateway Status when the Gateway contains Conflicted Listeners whether or\nnot they accept the Gateway. That Condition SHOULD clearly\nindicate in the Message which Listeners are conflicted, and which are\nAccepted. Additionally, the Listener status for those listeners SHOULD\nindicate which Listeners are conflicted and not Accepted.\n\nA Gateway's Listeners are considered \"compatible\" if:\n\n1. They are distinct.\n2. The implementation can serve them in compliance with the Addresses\n   requirement that all Listeners are available on all assigned\n   addresses.\n\nCompatible combinations in Extended support are expected to vary across\nimplementations. A combination that is compatible for one implementation\nmay not be compatible for another.\n\nFor example, an implementation that cannot serve both TCP and UDP listeners\non the same address, or cannot mix HTTPS and generic TLS listens on the same port\nwould not consider those cases compatible, even though they are distinct.\n\nNote that requests SHOULD match at most one Listener. For example, if\nListeners are defined for \"foo.example.com\" and \"*.example.com\", a\nrequest to \"foo.example.com\" SHOULD only be routed using routes attached\nto the \"foo.example.com\" Listener (and not the \"*.example.com\" Listener).\nThis concept is known as \"Listener Isolation\". Implementations that do\nnot support Listener Isolation MUST clearly document this.\n\nImplementations MAY merge separate Gateways onto a single set of\nAddresses if all Listeners across all Gateways are compatible.\n\nSupport: Core",
                  items: {
                    description: "Listener embodies the concept of a logical endpoint where a Gateway accepts\nnetwork connections.",
                    properties: {
                      allowedRoutes: {
                        default: {
                          namespaces: {
                            from: "Same"
                          }
                        },
                        description: "AllowedRoutes defines the types of routes that MAY be attached to a\nListener and the trusted namespaces where those Route resources MAY be\npresent.\n\nAlthough a client request may match multiple route rules, only one rule\nmay ultimately receive the request. Matching precedence MUST be\ndetermined in order of the following criteria:\n\n* The most specific match as defined by the Route type.\n* The oldest Route based on creation timestamp. For example, a Route with\n  a creation timestamp of \"2020-09-08 01:02:03\" is given precedence over\n  a Route with a creation timestamp of \"2020-09-08 01:02:04\".\n* If everything else is equivalent, the Route appearing first in\n  alphabetical order (namespace/name) should be given precedence. For\n  example, foo/bar is given precedence over foo/baz.\n\nAll valid rules within a Route attached to this Listener should be\nimplemented. Invalid Route rules can be ignored (sometimes that will mean\nthe full Route). If a Route rule transitions from valid to invalid,\nsupport for that Route rule should be dropped to ensure consistency. For\nexample, even if a filter specified by a Route rule is invalid, the rest\nof the rules within that Route should still be supported.\n\nSupport: Core",
                        properties: {
                          kinds: {
                            description: "Kinds specifies the groups and kinds of Routes that are allowed to bind\nto this Gateway Listener. When unspecified or empty, the kinds of Routes\nselected are determined using the Listener protocol.\n\nA RouteGroupKind MUST correspond to kinds of Routes that are compatible\nwith the application protocol specified in the Listener's Protocol field.\nIf an implementation does not support or recognize this resource type, it\nMUST set the \"ResolvedRefs\" condition to False for this Listener with the\n\"InvalidRouteKinds\" reason.\n\nSupport: Core",
                            items: {
                              description: "RouteGroupKind indicates the group and kind of a Route resource.",
                              properties: {
                                group: {
                                  default: "gateway.networking.k8s.io",
                                  description: "Group is the group of the Route.",
                                  maxLength: 253,
                                  pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                  type: "string"
                                },
                                kind: {
                                  description: "Kind is the kind of the Route.",
                                  maxLength: 63,
                                  minLength: 1,
                                  pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                  type: "string"
                                }
                              },
                              required: ["kind"],
                              type: "object"
                            },
                            maxItems: 8,
                            type: "array"
                          },
                          namespaces: {
                            default: {
                              from: "Same"
                            },
                            description: "Namespaces indicates namespaces from which Routes may be attached to this\nListener. This is restricted to the namespace of this Gateway by default.\n\nSupport: Core",
                            properties: {
                              from: {
                                default: "Same",
                                description: "From indicates where Routes will be selected for this Gateway. Possible\nvalues are:\n\n* All: Routes in all namespaces may be used by this Gateway.\n* Selector: Routes in namespaces selected by the selector may be used by\n  this Gateway.\n* Same: Only Routes in the same namespace may be used by this Gateway.\n\nSupport: Core",
                                enum: ["All", "Selector", "Same"],
                                type: "string"
                              },
                              selector: {
                                description: "Selector must be specified when From is set to \"Selector\". In that case,\nonly Routes in Namespaces matching this Selector will be selected by this\nGateway. This field is ignored for other values of \"From\".\n\nSupport: Core",
                                properties: {
                                  matchExpressions: {
                                    description: "matchExpressions is a list of label selector requirements. The requirements are ANDed.",
                                    items: {
                                      description: "A label selector requirement is a selector that contains values, a key, and an operator that\nrelates the key and values.",
                                      properties: {
                                        key: {
                                          description: "key is the label key that the selector applies to.",
                                          type: "string"
                                        },
                                        operator: {
                                          description: "operator represents a key's relationship to a set of values.\nValid operators are In, NotIn, Exists and DoesNotExist.",
                                          type: "string"
                                        },
                                        values: {
                                          description: "values is an array of string values. If the operator is In or NotIn,\nthe values array must be non-empty. If the operator is Exists or DoesNotExist,\nthe values array must be empty. This array is replaced during a strategic\nmerge patch.",
                                          items: {
                                            type: "string"
                                          },
                                          type: "array",
                                          "x-kubernetes-list-type": "atomic"
                                        }
                                      },
                                      required: ["key", "operator"],
                                      type: "object"
                                    },
                                    type: "array",
                                    "x-kubernetes-list-type": "atomic"
                                  },
                                  matchLabels: {
                                    additionalProperties: {
                                      type: "string"
                                    },
                                    description: "matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels\nmap is equivalent to an element of matchExpressions, whose key field is \"key\", the\noperator is \"In\", and the values array contains only \"value\". The requirements are ANDed.",
                                    type: "object"
                                  }
                                },
                                type: "object",
                                "x-kubernetes-map-type": "atomic"
                              }
                            },
                            type: "object"
                          }
                        },
                        type: "object"
                      },
                      hostname: {
                        description: "Hostname specifies the virtual hostname to match for protocol types that\ndefine this concept. When unspecified, all hostnames are matched. This\nfield is ignored for protocols that don't require hostname based\nmatching.\n\nImplementations MUST apply Hostname matching appropriately for each of\nthe following protocols:\n\n* TLS: The Listener Hostname MUST match the SNI.\n* HTTP: The Listener Hostname MUST match the Host header of the request.\n* HTTPS: The Listener Hostname SHOULD match at both the TLS and HTTP\n  protocol layers as described above. If an implementation does not\n  ensure that both the SNI and Host header match the Listener hostname,\n  it MUST clearly document that.\n\nFor HTTPRoute and TLSRoute resources, there is an interaction with the\n`spec.hostnames` array. When both listener and route specify hostnames,\nthere MUST be an intersection between the values for a Route to be\naccepted. For more information, refer to the Route specific Hostnames\ndocumentation.\n\nHostnames that are prefixed with a wildcard label (`*.`) are interpreted\nas a suffix match. That means that a match for `*.example.com` would match\nboth `test.example.com`, and `foo.test.example.com`, but not `example.com`.\n\nSupport: Core",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^(\\*\\.)?[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                        type: "string"
                      },
                      name: {
                        description: "Name is the name of the Listener. This name MUST be unique within a\nGateway.\n\nSupport: Core",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                        type: "string"
                      },
                      port: {
                        description: "Port is the network port. Multiple listeners may use the\nsame port, subject to the Listener compatibility rules.\n\nSupport: Core",
                        format: "int32",
                        maximum: 65535,
                        minimum: 1,
                        type: "integer"
                      },
                      protocol: {
                        description: "Protocol specifies the network protocol this listener expects to receive.\n\nSupport: Core",
                        maxLength: 255,
                        minLength: 1,
                        pattern: "^[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?$|[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*\\/[A-Za-z0-9]+$",
                        type: "string"
                      },
                      tls: {
                        description: "TLS is the TLS configuration for the Listener. This field is required if\nthe Protocol field is \"HTTPS\" or \"TLS\". It is invalid to set this field\nif the Protocol field is \"HTTP\", \"TCP\", or \"UDP\".\n\nThe association of SNIs to Certificate defined in GatewayTLSConfig is\ndefined based on the Hostname field for this listener.\n\nThe GatewayClass MUST use the longest matching SNI out of all\navailable certificates for any TLS handshake.\n\nSupport: Core",
                        properties: {
                          certificateRefs: {
                            description: "CertificateRefs contains a series of references to Kubernetes objects that\ncontains TLS certificates and private keys. These certificates are used to\nestablish a TLS handshake for requests that match the hostname of the\nassociated listener.\n\nA single CertificateRef to a Kubernetes Secret has \"Core\" support.\nImplementations MAY choose to support attaching multiple certificates to\na Listener, but this behavior is implementation-specific.\n\nReferences to a resource in different namespace are invalid UNLESS there\nis a ReferenceGrant in the target namespace that allows the certificate\nto be attached. If a ReferenceGrant does not allow this reference, the\n\"ResolvedRefs\" condition MUST be set to False for this listener with the\n\"RefNotPermitted\" reason.\n\nThis field is required to have at least one element when the mode is set\nto \"Terminate\" (default) and is optional otherwise.\n\nCertificateRefs can reference to standard Kubernetes resources, i.e.\nSecret, or implementation-specific custom resources.\n\nSupport: Core - A single reference to a Kubernetes Secret of type kubernetes.io/tls\n\nSupport: Implementation-specific (More than one reference or other resource types)",
                            items: {
                              description: "SecretObjectReference identifies an API object including its namespace,\ndefaulting to Secret.\n\nThe API object must be valid in the cluster; the Group and Kind must\nbe registered in the cluster for this reference to be valid.\n\nReferences to objects with invalid Group and Kind are not valid, and must\nbe rejected by the implementation, with appropriate Conditions set\non the containing object.",
                              properties: {
                                group: {
                                  default: "",
                                  description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                                  maxLength: 253,
                                  pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                  type: "string"
                                },
                                kind: {
                                  default: "Secret",
                                  description: "Kind is kind of the referent. For example \"Secret\".",
                                  maxLength: 63,
                                  minLength: 1,
                                  pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                  type: "string"
                                },
                                name: {
                                  description: "Name is the name of the referent.",
                                  maxLength: 253,
                                  minLength: 1,
                                  type: "string"
                                },
                                namespace: {
                                  description: "Namespace is the namespace of the referenced object. When unspecified, the local\nnamespace is inferred.\n\nNote that when a namespace different than the local namespace is specified,\na ReferenceGrant object is required in the referent namespace to allow that\nnamespace's owner to accept the reference. See the ReferenceGrant\ndocumentation for details.\n\nSupport: Core",
                                  maxLength: 63,
                                  minLength: 1,
                                  pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                                  type: "string"
                                }
                              },
                              required: ["name"],
                              type: "object"
                            },
                            maxItems: 64,
                            type: "array"
                          },
                          mode: {
                            default: "Terminate",
                            description: "Mode defines the TLS behavior for the TLS session initiated by the client.\nThere are two possible modes:\n\n- Terminate: The TLS session between the downstream client and the\n  Gateway is terminated at the Gateway. This mode requires certificates\n  to be specified in some way, such as populating the certificateRefs\n  field.\n- Passthrough: The TLS session is NOT terminated by the Gateway. This\n  implies that the Gateway can't decipher the TLS stream except for\n  the ClientHello message of the TLS protocol. The certificateRefs field\n  is ignored in this mode.\n\nSupport: Core",
                            enum: ["Terminate", "Passthrough"],
                            type: "string"
                          },
                          options: {
                            additionalProperties: {
                              description: "AnnotationValue is the value of an annotation in Gateway API. This is used\nfor validation of maps such as TLS options. This roughly matches Kubernetes\nannotation validation, although the length validation in that case is based\non the entire size of the annotations struct.",
                              maxLength: 4096,
                              minLength: 0,
                              type: "string"
                            },
                            description: "Options are a list of key/value pairs to enable extended TLS\nconfiguration for each implementation. For example, configuring the\nminimum TLS version or supported cipher suites.\n\nA set of common keys MAY be defined by the API in the future. To avoid\nany ambiguity, implementation-specific definitions MUST use\ndomain-prefixed names, such as `example.com/my-custom-option`.\nUn-prefixed names are reserved for key names defined by Gateway API.\n\nSupport: Implementation-specific",
                            maxProperties: 16,
                            type: "object"
                          }
                        },
                        type: "object",
                        "x-kubernetes-validations": [{
                          message: "certificateRefs or options must be specified when mode is Terminate",
                          rule: "self.mode == 'Terminate' ? size(self.certificateRefs) > 0 || size(self.options) > 0 : true"
                        }]
                      }
                    },
                    required: ["name", "port", "protocol"],
                    type: "object"
                  },
                  maxItems: 64,
                  minItems: 1,
                  type: "array",
                  "x-kubernetes-list-map-keys": ["name"],
                  "x-kubernetes-list-type": "map",
                  "x-kubernetes-validations": [{
                    message: "tls must not be specified for protocols ['HTTP', 'TCP', 'UDP']",
                    rule: "self.all(l, l.protocol in ['HTTP', 'TCP', 'UDP'] ? !has(l.tls) : true)"
                  }, {
                    message: "tls mode must be Terminate for protocol HTTPS",
                    rule: "self.all(l, (l.protocol == 'HTTPS' && has(l.tls)) ? (l.tls.mode == '' || l.tls.mode == 'Terminate') : true)"
                  }, {
                    message: "hostname must not be specified for protocols ['TCP', 'UDP']",
                    rule: "self.all(l, l.protocol in ['TCP', 'UDP']  ? (!has(l.hostname) || l.hostname == '') : true)"
                  }, {
                    message: "Listener name must be unique within the Gateway",
                    rule: "self.all(l1, self.exists_one(l2, l1.name == l2.name))"
                  }, {
                    message: "Combination of port, protocol and hostname must be unique for each listener",
                    rule: "self.all(l1, self.exists_one(l2, l1.port == l2.port && l1.protocol == l2.protocol && (has(l1.hostname) && has(l2.hostname) ? l1.hostname == l2.hostname : !has(l1.hostname) && !has(l2.hostname))))"
                  }]
                }
              },
              required: ["gatewayClassName", "listeners"],
              type: "object"
            },
            status: {
              default: {
                conditions: [{
                  lastTransitionTime: "1970-01-01T00:00:00Z",
                  message: "Waiting for controller",
                  reason: "Pending",
                  status: "Unknown",
                  type: "Accepted"
                }, {
                  lastTransitionTime: "1970-01-01T00:00:00Z",
                  message: "Waiting for controller",
                  reason: "Pending",
                  status: "Unknown",
                  type: "Programmed"
                }]
              },
              description: "Status defines the current state of Gateway.",
              properties: {
                addresses: {
                  description: "Addresses lists the network addresses that have been bound to the\nGateway.\n\nThis list may differ from the addresses provided in the spec under some\nconditions:\n\n  * no addresses are specified, all addresses are dynamically assigned\n  * a combination of specified and dynamic addresses are assigned\n  * a specified address was unusable (e.g. already in use)\n\n",
                  items: {
                    description: "GatewayStatusAddress describes a network address that is bound to a Gateway.",
                    oneOf: [{
                      properties: {
                        type: {
                          enum: ["IPAddress"]
                        },
                        value: {
                          anyOf: [{
                            format: "ipv4"
                          }, {
                            format: "ipv6"
                          }]
                        }
                      }
                    }, {
                      properties: {
                        type: {
                          not: {
                            enum: ["IPAddress"]
                          }
                        }
                      }
                    }],
                    properties: {
                      type: {
                        default: "IPAddress",
                        description: "Type of the address.",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^Hostname|IPAddress|NamedAddress|[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*\\/[A-Za-z0-9\\/\\-._~%!$&'()*+,;=:]+$",
                        type: "string"
                      },
                      value: {
                        description: "Value of the address. The validity of the values will depend\non the type and support by the controller.\n\nExamples: `1.2.3.4`, `128::1`, `my-ip-address`.",
                        maxLength: 253,
                        minLength: 1,
                        type: "string"
                      }
                    },
                    required: ["value"],
                    type: "object",
                    "x-kubernetes-validations": [{
                      message: "Hostname value must only contain valid characters (matching ^(\\*\\.)?[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$)",
                      rule: "self.type == 'Hostname' ? self.value.matches(r\"\"\"^(\\*\\.)?[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$\"\"\"): true"
                    }]
                  },
                  maxItems: 16,
                  type: "array"
                },
                conditions: {
                  default: [{
                    lastTransitionTime: "1970-01-01T00:00:00Z",
                    message: "Waiting for controller",
                    reason: "Pending",
                    status: "Unknown",
                    type: "Accepted"
                  }, {
                    lastTransitionTime: "1970-01-01T00:00:00Z",
                    message: "Waiting for controller",
                    reason: "Pending",
                    status: "Unknown",
                    type: "Programmed"
                  }],
                  description: "Conditions describe the current conditions of the Gateway.\n\nImplementations should prefer to express Gateway conditions\nusing the `GatewayConditionType` and `GatewayConditionReason`\nconstants so that operators and tools can converge on a common\nvocabulary to describe Gateway state.\n\nKnown condition types are:\n\n* \"Accepted\"\n* \"Programmed\"\n* \"Ready\"",
                  items: {
                    description: "Condition contains details for one aspect of the current state of this API Resource.",
                    properties: {
                      lastTransitionTime: {
                        description: "lastTransitionTime is the last time the condition transitioned from one status to another.\nThis should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.",
                        format: "date-time",
                        type: "string"
                      },
                      message: {
                        description: "message is a human readable message indicating details about the transition.\nThis may be an empty string.",
                        maxLength: 32768,
                        type: "string"
                      },
                      observedGeneration: {
                        description: "observedGeneration represents the .metadata.generation that the condition was set based upon.\nFor instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date\nwith respect to the current state of the instance.",
                        format: "int64",
                        minimum: 0,
                        type: "integer"
                      },
                      reason: {
                        description: "reason contains a programmatic identifier indicating the reason for the condition's last transition.\nProducers of specific condition types may define expected values and meanings for this field,\nand whether the values are considered a guaranteed API.\nThe value should be a CamelCase string.\nThis field may not be empty.",
                        maxLength: 1024,
                        minLength: 1,
                        pattern: "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$",
                        type: "string"
                      },
                      status: {
                        description: "status of the condition, one of True, False, Unknown.",
                        enum: ["True", "False", "Unknown"],
                        type: "string"
                      },
                      type: {
                        description: "type of condition in CamelCase or in foo.example.com/CamelCase.",
                        maxLength: 316,
                        pattern: "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$",
                        type: "string"
                      }
                    },
                    required: ["lastTransitionTime", "message", "reason", "status", "type"],
                    type: "object"
                  },
                  maxItems: 8,
                  type: "array",
                  "x-kubernetes-list-map-keys": ["type"],
                  "x-kubernetes-list-type": "map"
                },
                listeners: {
                  description: "Listeners provide status for each unique listener port defined in the Spec.",
                  items: {
                    description: "ListenerStatus is the status associated with a Listener.",
                    properties: {
                      attachedRoutes: {
                        description: "AttachedRoutes represents the total number of Routes that have been\nsuccessfully attached to this Listener.\n\nSuccessful attachment of a Route to a Listener is based solely on the\ncombination of the AllowedRoutes field on the corresponding Listener\nand the Route's ParentRefs field. A Route is successfully attached to\na Listener when it is selected by the Listener's AllowedRoutes field\nAND the Route has a valid ParentRef selecting the whole Gateway\nresource or a specific Listener as a parent resource (more detail on\nattachment semantics can be found in the documentation on the various\nRoute kinds ParentRefs fields). Listener or Route status does not impact\nsuccessful attachment, i.e. the AttachedRoutes field count MUST be set\nfor Listeners with condition Accepted: false and MUST count successfully\nattached Routes that may themselves have Accepted: false conditions.\n\nUses for this field include troubleshooting Route attachment and\nmeasuring blast radius/impact of changes to a Listener.",
                        format: "int32",
                        type: "integer"
                      },
                      conditions: {
                        description: "Conditions describe the current condition of this listener.",
                        items: {
                          description: "Condition contains details for one aspect of the current state of this API Resource.",
                          properties: {
                            lastTransitionTime: {
                              description: "lastTransitionTime is the last time the condition transitioned from one status to another.\nThis should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.",
                              format: "date-time",
                              type: "string"
                            },
                            message: {
                              description: "message is a human readable message indicating details about the transition.\nThis may be an empty string.",
                              maxLength: 32768,
                              type: "string"
                            },
                            observedGeneration: {
                              description: "observedGeneration represents the .metadata.generation that the condition was set based upon.\nFor instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date\nwith respect to the current state of the instance.",
                              format: "int64",
                              minimum: 0,
                              type: "integer"
                            },
                            reason: {
                              description: "reason contains a programmatic identifier indicating the reason for the condition's last transition.\nProducers of specific condition types may define expected values and meanings for this field,\nand whether the values are considered a guaranteed API.\nThe value should be a CamelCase string.\nThis field may not be empty.",
                              maxLength: 1024,
                              minLength: 1,
                              pattern: "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$",
                              type: "string"
                            },
                            status: {
                              description: "status of the condition, one of True, False, Unknown.",
                              enum: ["True", "False", "Unknown"],
                              type: "string"
                            },
                            type: {
                              description: "type of condition in CamelCase or in foo.example.com/CamelCase.",
                              maxLength: 316,
                              pattern: "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$",
                              type: "string"
                            }
                          },
                          required: ["lastTransitionTime", "message", "reason", "status", "type"],
                          type: "object"
                        },
                        maxItems: 8,
                        type: "array",
                        "x-kubernetes-list-map-keys": ["type"],
                        "x-kubernetes-list-type": "map"
                      },
                      name: {
                        description: "Name is the name of the Listener that this status corresponds to.",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                        type: "string"
                      },
                      supportedKinds: {
                        description: "SupportedKinds is the list indicating the Kinds supported by this\nlistener. This MUST represent the kinds an implementation supports for\nthat Listener configuration.\n\nIf kinds are specified in Spec that are not supported, they MUST NOT\nappear in this list and an implementation MUST set the \"ResolvedRefs\"\ncondition to \"False\" with the \"InvalidRouteKinds\" reason. If both valid\nand invalid Route kinds are specified, the implementation MUST\nreference the valid Route kinds that have been specified.",
                        items: {
                          description: "RouteGroupKind indicates the group and kind of a Route resource.",
                          properties: {
                            group: {
                              default: "gateway.networking.k8s.io",
                              description: "Group is the group of the Route.",
                              maxLength: 253,
                              pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                              type: "string"
                            },
                            kind: {
                              description: "Kind is the kind of the Route.",
                              maxLength: 63,
                              minLength: 1,
                              pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                              type: "string"
                            }
                          },
                          required: ["kind"],
                          type: "object"
                        },
                        maxItems: 8,
                        type: "array"
                      }
                    },
                    required: ["attachedRoutes", "conditions", "name", "supportedKinds"],
                    type: "object"
                  },
                  maxItems: 64,
                  type: "array",
                  "x-kubernetes-list-map-keys": ["name"],
                  "x-kubernetes-list-type": "map"
                }
              },
              type: "object"
            }
          },
          required: ["spec"],
          type: "object"
        }
      },
      served: true,
      storage: true,
      subresources: {
        status: {}
      }
    }, {
      additionalPrinterColumns: [{
        jsonPath: ".spec.gatewayClassName",
        name: "Class",
        type: "string"
      }, {
        jsonPath: ".status.addresses[*].value",
        name: "Address",
        type: "string"
      }, {
        jsonPath: ".status.conditions[?(@.type==\"Programmed\")].status",
        name: "Programmed",
        type: "string"
      }, {
        jsonPath: ".metadata.creationTimestamp",
        name: "Age",
        type: "date"
      }],
      name: "v1beta1",
      schema: {
        openAPIV3Schema: {
          description: "Gateway represents an instance of a service-traffic handling infrastructure\nby binding Listeners to a set of IP addresses.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "Spec defines the desired state of Gateway.",
              properties: {
                addresses: {
                  description: "Addresses requested for this Gateway. This is optional and behavior can\ndepend on the implementation. If a value is set in the spec and the\nrequested address is invalid or unavailable, the implementation MUST\nindicate this in the associated entry in GatewayStatus.Addresses.\n\nThe Addresses field represents a request for the address(es) on the\n\"outside of the Gateway\", that traffic bound for this Gateway will use.\nThis could be the IP address or hostname of an external load balancer or\nother networking infrastructure, or some other address that traffic will\nbe sent to.\n\nIf no Addresses are specified, the implementation MAY schedule the\nGateway in an implementation-specific manner, assigning an appropriate\nset of Addresses.\n\nThe implementation MUST bind all Listeners to every GatewayAddress that\nit assigns to the Gateway and add a corresponding entry in\nGatewayStatus.Addresses.\n\nSupport: Extended\n\n",
                  items: {
                    description: "GatewayAddress describes an address that can be bound to a Gateway.",
                    oneOf: [{
                      properties: {
                        type: {
                          enum: ["IPAddress"]
                        },
                        value: {
                          anyOf: [{
                            format: "ipv4"
                          }, {
                            format: "ipv6"
                          }]
                        }
                      }
                    }, {
                      properties: {
                        type: {
                          not: {
                            enum: ["IPAddress"]
                          }
                        }
                      }
                    }],
                    properties: {
                      type: {
                        default: "IPAddress",
                        description: "Type of the address.",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^Hostname|IPAddress|NamedAddress|[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*\\/[A-Za-z0-9\\/\\-._~%!$&'()*+,;=:]+$",
                        type: "string"
                      },
                      value: {
                        description: "Value of the address. The validity of the values will depend\non the type and support by the controller.\n\nExamples: `1.2.3.4`, `128::1`, `my-ip-address`.",
                        maxLength: 253,
                        minLength: 1,
                        type: "string"
                      }
                    },
                    required: ["value"],
                    type: "object",
                    "x-kubernetes-validations": [{
                      message: "Hostname value must only contain valid characters (matching ^(\\*\\.)?[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$)",
                      rule: "self.type == 'Hostname' ? self.value.matches(r\"\"\"^(\\*\\.)?[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$\"\"\"): true"
                    }]
                  },
                  maxItems: 16,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "IPAddress values must be unique",
                    rule: "self.all(a1, a1.type == 'IPAddress' ? self.exists_one(a2, a2.type == a1.type && a2.value == a1.value) : true )"
                  }, {
                    message: "Hostname values must be unique",
                    rule: "self.all(a1, a1.type == 'Hostname' ? self.exists_one(a2, a2.type == a1.type && a2.value == a1.value) : true )"
                  }]
                },
                gatewayClassName: {
                  description: "GatewayClassName used for this Gateway. This is the name of a\nGatewayClass resource.",
                  maxLength: 253,
                  minLength: 1,
                  type: "string"
                },
                infrastructure: {
                  description: "Infrastructure defines infrastructure level attributes about this Gateway instance.\n\nSupport: Extended",
                  properties: {
                    annotations: {
                      additionalProperties: {
                        description: "AnnotationValue is the value of an annotation in Gateway API. This is used\nfor validation of maps such as TLS options. This roughly matches Kubernetes\nannotation validation, although the length validation in that case is based\non the entire size of the annotations struct.",
                        maxLength: 4096,
                        minLength: 0,
                        type: "string"
                      },
                      description: "Annotations that SHOULD be applied to any resources created in response to this Gateway.\n\nFor implementations creating other Kubernetes objects, this should be the `metadata.annotations` field on resources.\nFor other implementations, this refers to any relevant (implementation specific) \"annotations\" concepts.\n\nAn implementation may chose to add additional implementation-specific annotations as they see fit.\n\nSupport: Extended",
                      maxProperties: 8,
                      type: "object",
                      "x-kubernetes-validations": [{
                        message: "Annotation keys must be in the form of an optional DNS subdomain prefix followed by a required name segment of up to 63 characters.",
                        rule: "self.all(key, key.matches(r\"\"\"^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?([A-Za-z0-9][-A-Za-z0-9_.]{0,61})?[A-Za-z0-9]$\"\"\"))"
                      }, {
                        message: "If specified, the annotation key's prefix must be a DNS subdomain not longer than 253 characters in total.",
                        rule: "self.all(key, key.split(\"/\")[0].size() < 253)"
                      }]
                    },
                    labels: {
                      additionalProperties: {
                        description: "LabelValue is the value of a label in the Gateway API. This is used for validation\nof maps such as Gateway infrastructure labels. This matches the Kubernetes\nlabel validation rules:\n* must be 63 characters or less (can be empty),\n* unless empty, must begin and end with an alphanumeric character ([a-z0-9A-Z]),\n* could contain dashes (-), underscores (_), dots (.), and alphanumerics between.\n\nValid values include:\n\n* MyValue\n* my.name\n* 123-my-value",
                        maxLength: 63,
                        minLength: 0,
                        pattern: "^(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])?$",
                        type: "string"
                      },
                      description: "Labels that SHOULD be applied to any resources created in response to this Gateway.\n\nFor implementations creating other Kubernetes objects, this should be the `metadata.labels` field on resources.\nFor other implementations, this refers to any relevant (implementation specific) \"labels\" concepts.\n\nAn implementation may chose to add additional implementation-specific labels as they see fit.\n\nIf an implementation maps these labels to Pods, or any other resource that would need to be recreated when labels\nchange, it SHOULD clearly warn about this behavior in documentation.\n\nSupport: Extended",
                      maxProperties: 8,
                      type: "object",
                      "x-kubernetes-validations": [{
                        message: "Label keys must be in the form of an optional DNS subdomain prefix followed by a required name segment of up to 63 characters.",
                        rule: "self.all(key, key.matches(r\"\"\"^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?([A-Za-z0-9][-A-Za-z0-9_.]{0,61})?[A-Za-z0-9]$\"\"\"))"
                      }, {
                        message: "If specified, the label key's prefix must be a DNS subdomain not longer than 253 characters in total.",
                        rule: "self.all(key, key.split(\"/\")[0].size() < 253)"
                      }]
                    },
                    parametersRef: {
                      description: "ParametersRef is a reference to a resource that contains the configuration\nparameters corresponding to the Gateway. This is optional if the\ncontroller does not require any additional configuration.\n\nThis follows the same semantics as GatewayClass's `parametersRef`, but on a per-Gateway basis\n\nThe Gateway's GatewayClass may provide its own `parametersRef`. When both are specified,\nthe merging behavior is implementation specific.\nIt is generally recommended that GatewayClass provides defaults that can be overridden by a Gateway.\n\nSupport: Implementation-specific",
                      properties: {
                        group: {
                          description: "Group is the group of the referent.",
                          maxLength: 253,
                          pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                          type: "string"
                        },
                        kind: {
                          description: "Kind is kind of the referent.",
                          maxLength: 63,
                          minLength: 1,
                          pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                          type: "string"
                        },
                        name: {
                          description: "Name is the name of the referent.",
                          maxLength: 253,
                          minLength: 1,
                          type: "string"
                        }
                      },
                      required: ["group", "kind", "name"],
                      type: "object"
                    }
                  },
                  type: "object"
                },
                listeners: {
                  description: "Listeners associated with this Gateway. Listeners define\nlogical endpoints that are bound on this Gateway's addresses.\nAt least one Listener MUST be specified.\n\nEach Listener in a set of Listeners (for example, in a single Gateway)\nMUST be _distinct_, in that a traffic flow MUST be able to be assigned to\nexactly one listener. (This section uses \"set of Listeners\" rather than\n\"Listeners in a single Gateway\" because implementations MAY merge configuration\nfrom multiple Gateways onto a single data plane, and these rules _also_\napply in that case).\n\nPractically, this means that each listener in a set MUST have a unique\ncombination of Port, Protocol, and, if supported by the protocol, Hostname.\n\nSome combinations of port, protocol, and TLS settings are considered\nCore support and MUST be supported by implementations based on their\ntargeted conformance profile:\n\nHTTP Profile\n\n1. HTTPRoute, Port: 80, Protocol: HTTP\n2. HTTPRoute, Port: 443, Protocol: HTTPS, TLS Mode: Terminate, TLS keypair provided\n\nTLS Profile\n\n1. TLSRoute, Port: 443, Protocol: TLS, TLS Mode: Passthrough\n\n\"Distinct\" Listeners have the following property:\n\nThe implementation can match inbound requests to a single distinct\nListener. When multiple Listeners share values for fields (for\nexample, two Listeners with the same Port value), the implementation\ncan match requests to only one of the Listeners using other\nListener fields.\n\nFor example, the following Listener scenarios are distinct:\n\n1. Multiple Listeners with the same Port that all use the \"HTTP\"\n   Protocol that all have unique Hostname values.\n2. Multiple Listeners with the same Port that use either the \"HTTPS\" or\n   \"TLS\" Protocol that all have unique Hostname values.\n3. A mixture of \"TCP\" and \"UDP\" Protocol Listeners, where no Listener\n   with the same Protocol has the same Port value.\n\nSome fields in the Listener struct have possible values that affect\nwhether the Listener is distinct. Hostname is particularly relevant\nfor HTTP or HTTPS protocols.\n\nWhen using the Hostname value to select between same-Port, same-Protocol\nListeners, the Hostname value must be different on each Listener for the\nListener to be distinct.\n\nWhen the Listeners are distinct based on Hostname, inbound request\nhostnames MUST match from the most specific to least specific Hostname\nvalues to choose the correct Listener and its associated set of Routes.\n\nExact matches must be processed before wildcard matches, and wildcard\nmatches must be processed before fallback (empty Hostname value)\nmatches. For example, `\"foo.example.com\"` takes precedence over\n`\"*.example.com\"`, and `\"*.example.com\"` takes precedence over `\"\"`.\n\nAdditionally, if there are multiple wildcard entries, more specific\nwildcard entries must be processed before less specific wildcard entries.\nFor example, `\"*.foo.example.com\"` takes precedence over `\"*.example.com\"`.\nThe precise definition here is that the higher the number of dots in the\nhostname to the right of the wildcard character, the higher the precedence.\n\nThe wildcard character will match any number of characters _and dots_ to\nthe left, however, so `\"*.example.com\"` will match both\n`\"foo.bar.example.com\"` _and_ `\"bar.example.com\"`.\n\nIf a set of Listeners contains Listeners that are not distinct, then those\nListeners are Conflicted, and the implementation MUST set the \"Conflicted\"\ncondition in the Listener Status to \"True\".\n\nImplementations MAY choose to accept a Gateway with some Conflicted\nListeners only if they only accept the partial Listener set that contains\nno Conflicted Listeners. To put this another way, implementations may\naccept a partial Listener set only if they throw out *all* the conflicting\nListeners. No picking one of the conflicting listeners as the winner.\nThis also means that the Gateway must have at least one non-conflicting\nListener in this case, otherwise it violates the requirement that at\nleast one Listener must be present.\n\nThe implementation MUST set a \"ListenersNotValid\" condition on the\nGateway Status when the Gateway contains Conflicted Listeners whether or\nnot they accept the Gateway. That Condition SHOULD clearly\nindicate in the Message which Listeners are conflicted, and which are\nAccepted. Additionally, the Listener status for those listeners SHOULD\nindicate which Listeners are conflicted and not Accepted.\n\nA Gateway's Listeners are considered \"compatible\" if:\n\n1. They are distinct.\n2. The implementation can serve them in compliance with the Addresses\n   requirement that all Listeners are available on all assigned\n   addresses.\n\nCompatible combinations in Extended support are expected to vary across\nimplementations. A combination that is compatible for one implementation\nmay not be compatible for another.\n\nFor example, an implementation that cannot serve both TCP and UDP listeners\non the same address, or cannot mix HTTPS and generic TLS listens on the same port\nwould not consider those cases compatible, even though they are distinct.\n\nNote that requests SHOULD match at most one Listener. For example, if\nListeners are defined for \"foo.example.com\" and \"*.example.com\", a\nrequest to \"foo.example.com\" SHOULD only be routed using routes attached\nto the \"foo.example.com\" Listener (and not the \"*.example.com\" Listener).\nThis concept is known as \"Listener Isolation\". Implementations that do\nnot support Listener Isolation MUST clearly document this.\n\nImplementations MAY merge separate Gateways onto a single set of\nAddresses if all Listeners across all Gateways are compatible.\n\nSupport: Core",
                  items: {
                    description: "Listener embodies the concept of a logical endpoint where a Gateway accepts\nnetwork connections.",
                    properties: {
                      allowedRoutes: {
                        default: {
                          namespaces: {
                            from: "Same"
                          }
                        },
                        description: "AllowedRoutes defines the types of routes that MAY be attached to a\nListener and the trusted namespaces where those Route resources MAY be\npresent.\n\nAlthough a client request may match multiple route rules, only one rule\nmay ultimately receive the request. Matching precedence MUST be\ndetermined in order of the following criteria:\n\n* The most specific match as defined by the Route type.\n* The oldest Route based on creation timestamp. For example, a Route with\n  a creation timestamp of \"2020-09-08 01:02:03\" is given precedence over\n  a Route with a creation timestamp of \"2020-09-08 01:02:04\".\n* If everything else is equivalent, the Route appearing first in\n  alphabetical order (namespace/name) should be given precedence. For\n  example, foo/bar is given precedence over foo/baz.\n\nAll valid rules within a Route attached to this Listener should be\nimplemented. Invalid Route rules can be ignored (sometimes that will mean\nthe full Route). If a Route rule transitions from valid to invalid,\nsupport for that Route rule should be dropped to ensure consistency. For\nexample, even if a filter specified by a Route rule is invalid, the rest\nof the rules within that Route should still be supported.\n\nSupport: Core",
                        properties: {
                          kinds: {
                            description: "Kinds specifies the groups and kinds of Routes that are allowed to bind\nto this Gateway Listener. When unspecified or empty, the kinds of Routes\nselected are determined using the Listener protocol.\n\nA RouteGroupKind MUST correspond to kinds of Routes that are compatible\nwith the application protocol specified in the Listener's Protocol field.\nIf an implementation does not support or recognize this resource type, it\nMUST set the \"ResolvedRefs\" condition to False for this Listener with the\n\"InvalidRouteKinds\" reason.\n\nSupport: Core",
                            items: {
                              description: "RouteGroupKind indicates the group and kind of a Route resource.",
                              properties: {
                                group: {
                                  default: "gateway.networking.k8s.io",
                                  description: "Group is the group of the Route.",
                                  maxLength: 253,
                                  pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                  type: "string"
                                },
                                kind: {
                                  description: "Kind is the kind of the Route.",
                                  maxLength: 63,
                                  minLength: 1,
                                  pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                  type: "string"
                                }
                              },
                              required: ["kind"],
                              type: "object"
                            },
                            maxItems: 8,
                            type: "array"
                          },
                          namespaces: {
                            default: {
                              from: "Same"
                            },
                            description: "Namespaces indicates namespaces from which Routes may be attached to this\nListener. This is restricted to the namespace of this Gateway by default.\n\nSupport: Core",
                            properties: {
                              from: {
                                default: "Same",
                                description: "From indicates where Routes will be selected for this Gateway. Possible\nvalues are:\n\n* All: Routes in all namespaces may be used by this Gateway.\n* Selector: Routes in namespaces selected by the selector may be used by\n  this Gateway.\n* Same: Only Routes in the same namespace may be used by this Gateway.\n\nSupport: Core",
                                enum: ["All", "Selector", "Same"],
                                type: "string"
                              },
                              selector: {
                                description: "Selector must be specified when From is set to \"Selector\". In that case,\nonly Routes in Namespaces matching this Selector will be selected by this\nGateway. This field is ignored for other values of \"From\".\n\nSupport: Core",
                                properties: {
                                  matchExpressions: {
                                    description: "matchExpressions is a list of label selector requirements. The requirements are ANDed.",
                                    items: {
                                      description: "A label selector requirement is a selector that contains values, a key, and an operator that\nrelates the key and values.",
                                      properties: {
                                        key: {
                                          description: "key is the label key that the selector applies to.",
                                          type: "string"
                                        },
                                        operator: {
                                          description: "operator represents a key's relationship to a set of values.\nValid operators are In, NotIn, Exists and DoesNotExist.",
                                          type: "string"
                                        },
                                        values: {
                                          description: "values is an array of string values. If the operator is In or NotIn,\nthe values array must be non-empty. If the operator is Exists or DoesNotExist,\nthe values array must be empty. This array is replaced during a strategic\nmerge patch.",
                                          items: {
                                            type: "string"
                                          },
                                          type: "array",
                                          "x-kubernetes-list-type": "atomic"
                                        }
                                      },
                                      required: ["key", "operator"],
                                      type: "object"
                                    },
                                    type: "array",
                                    "x-kubernetes-list-type": "atomic"
                                  },
                                  matchLabels: {
                                    additionalProperties: {
                                      type: "string"
                                    },
                                    description: "matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels\nmap is equivalent to an element of matchExpressions, whose key field is \"key\", the\noperator is \"In\", and the values array contains only \"value\". The requirements are ANDed.",
                                    type: "object"
                                  }
                                },
                                type: "object",
                                "x-kubernetes-map-type": "atomic"
                              }
                            },
                            type: "object"
                          }
                        },
                        type: "object"
                      },
                      hostname: {
                        description: "Hostname specifies the virtual hostname to match for protocol types that\ndefine this concept. When unspecified, all hostnames are matched. This\nfield is ignored for protocols that don't require hostname based\nmatching.\n\nImplementations MUST apply Hostname matching appropriately for each of\nthe following protocols:\n\n* TLS: The Listener Hostname MUST match the SNI.\n* HTTP: The Listener Hostname MUST match the Host header of the request.\n* HTTPS: The Listener Hostname SHOULD match at both the TLS and HTTP\n  protocol layers as described above. If an implementation does not\n  ensure that both the SNI and Host header match the Listener hostname,\n  it MUST clearly document that.\n\nFor HTTPRoute and TLSRoute resources, there is an interaction with the\n`spec.hostnames` array. When both listener and route specify hostnames,\nthere MUST be an intersection between the values for a Route to be\naccepted. For more information, refer to the Route specific Hostnames\ndocumentation.\n\nHostnames that are prefixed with a wildcard label (`*.`) are interpreted\nas a suffix match. That means that a match for `*.example.com` would match\nboth `test.example.com`, and `foo.test.example.com`, but not `example.com`.\n\nSupport: Core",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^(\\*\\.)?[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                        type: "string"
                      },
                      name: {
                        description: "Name is the name of the Listener. This name MUST be unique within a\nGateway.\n\nSupport: Core",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                        type: "string"
                      },
                      port: {
                        description: "Port is the network port. Multiple listeners may use the\nsame port, subject to the Listener compatibility rules.\n\nSupport: Core",
                        format: "int32",
                        maximum: 65535,
                        minimum: 1,
                        type: "integer"
                      },
                      protocol: {
                        description: "Protocol specifies the network protocol this listener expects to receive.\n\nSupport: Core",
                        maxLength: 255,
                        minLength: 1,
                        pattern: "^[a-zA-Z0-9]([-a-zA-Z0-9]*[a-zA-Z0-9])?$|[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*\\/[A-Za-z0-9]+$",
                        type: "string"
                      },
                      tls: {
                        description: "TLS is the TLS configuration for the Listener. This field is required if\nthe Protocol field is \"HTTPS\" or \"TLS\". It is invalid to set this field\nif the Protocol field is \"HTTP\", \"TCP\", or \"UDP\".\n\nThe association of SNIs to Certificate defined in GatewayTLSConfig is\ndefined based on the Hostname field for this listener.\n\nThe GatewayClass MUST use the longest matching SNI out of all\navailable certificates for any TLS handshake.\n\nSupport: Core",
                        properties: {
                          certificateRefs: {
                            description: "CertificateRefs contains a series of references to Kubernetes objects that\ncontains TLS certificates and private keys. These certificates are used to\nestablish a TLS handshake for requests that match the hostname of the\nassociated listener.\n\nA single CertificateRef to a Kubernetes Secret has \"Core\" support.\nImplementations MAY choose to support attaching multiple certificates to\na Listener, but this behavior is implementation-specific.\n\nReferences to a resource in different namespace are invalid UNLESS there\nis a ReferenceGrant in the target namespace that allows the certificate\nto be attached. If a ReferenceGrant does not allow this reference, the\n\"ResolvedRefs\" condition MUST be set to False for this listener with the\n\"RefNotPermitted\" reason.\n\nThis field is required to have at least one element when the mode is set\nto \"Terminate\" (default) and is optional otherwise.\n\nCertificateRefs can reference to standard Kubernetes resources, i.e.\nSecret, or implementation-specific custom resources.\n\nSupport: Core - A single reference to a Kubernetes Secret of type kubernetes.io/tls\n\nSupport: Implementation-specific (More than one reference or other resource types)",
                            items: {
                              description: "SecretObjectReference identifies an API object including its namespace,\ndefaulting to Secret.\n\nThe API object must be valid in the cluster; the Group and Kind must\nbe registered in the cluster for this reference to be valid.\n\nReferences to objects with invalid Group and Kind are not valid, and must\nbe rejected by the implementation, with appropriate Conditions set\non the containing object.",
                              properties: {
                                group: {
                                  default: "",
                                  description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                                  maxLength: 253,
                                  pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                  type: "string"
                                },
                                kind: {
                                  default: "Secret",
                                  description: "Kind is kind of the referent. For example \"Secret\".",
                                  maxLength: 63,
                                  minLength: 1,
                                  pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                  type: "string"
                                },
                                name: {
                                  description: "Name is the name of the referent.",
                                  maxLength: 253,
                                  minLength: 1,
                                  type: "string"
                                },
                                namespace: {
                                  description: "Namespace is the namespace of the referenced object. When unspecified, the local\nnamespace is inferred.\n\nNote that when a namespace different than the local namespace is specified,\na ReferenceGrant object is required in the referent namespace to allow that\nnamespace's owner to accept the reference. See the ReferenceGrant\ndocumentation for details.\n\nSupport: Core",
                                  maxLength: 63,
                                  minLength: 1,
                                  pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                                  type: "string"
                                }
                              },
                              required: ["name"],
                              type: "object"
                            },
                            maxItems: 64,
                            type: "array"
                          },
                          mode: {
                            default: "Terminate",
                            description: "Mode defines the TLS behavior for the TLS session initiated by the client.\nThere are two possible modes:\n\n- Terminate: The TLS session between the downstream client and the\n  Gateway is terminated at the Gateway. This mode requires certificates\n  to be specified in some way, such as populating the certificateRefs\n  field.\n- Passthrough: The TLS session is NOT terminated by the Gateway. This\n  implies that the Gateway can't decipher the TLS stream except for\n  the ClientHello message of the TLS protocol. The certificateRefs field\n  is ignored in this mode.\n\nSupport: Core",
                            enum: ["Terminate", "Passthrough"],
                            type: "string"
                          },
                          options: {
                            additionalProperties: {
                              description: "AnnotationValue is the value of an annotation in Gateway API. This is used\nfor validation of maps such as TLS options. This roughly matches Kubernetes\nannotation validation, although the length validation in that case is based\non the entire size of the annotations struct.",
                              maxLength: 4096,
                              minLength: 0,
                              type: "string"
                            },
                            description: "Options are a list of key/value pairs to enable extended TLS\nconfiguration for each implementation. For example, configuring the\nminimum TLS version or supported cipher suites.\n\nA set of common keys MAY be defined by the API in the future. To avoid\nany ambiguity, implementation-specific definitions MUST use\ndomain-prefixed names, such as `example.com/my-custom-option`.\nUn-prefixed names are reserved for key names defined by Gateway API.\n\nSupport: Implementation-specific",
                            maxProperties: 16,
                            type: "object"
                          }
                        },
                        type: "object",
                        "x-kubernetes-validations": [{
                          message: "certificateRefs or options must be specified when mode is Terminate",
                          rule: "self.mode == 'Terminate' ? size(self.certificateRefs) > 0 || size(self.options) > 0 : true"
                        }]
                      }
                    },
                    required: ["name", "port", "protocol"],
                    type: "object"
                  },
                  maxItems: 64,
                  minItems: 1,
                  type: "array",
                  "x-kubernetes-list-map-keys": ["name"],
                  "x-kubernetes-list-type": "map",
                  "x-kubernetes-validations": [{
                    message: "tls must not be specified for protocols ['HTTP', 'TCP', 'UDP']",
                    rule: "self.all(l, l.protocol in ['HTTP', 'TCP', 'UDP'] ? !has(l.tls) : true)"
                  }, {
                    message: "tls mode must be Terminate for protocol HTTPS",
                    rule: "self.all(l, (l.protocol == 'HTTPS' && has(l.tls)) ? (l.tls.mode == '' || l.tls.mode == 'Terminate') : true)"
                  }, {
                    message: "hostname must not be specified for protocols ['TCP', 'UDP']",
                    rule: "self.all(l, l.protocol in ['TCP', 'UDP']  ? (!has(l.hostname) || l.hostname == '') : true)"
                  }, {
                    message: "Listener name must be unique within the Gateway",
                    rule: "self.all(l1, self.exists_one(l2, l1.name == l2.name))"
                  }, {
                    message: "Combination of port, protocol and hostname must be unique for each listener",
                    rule: "self.all(l1, self.exists_one(l2, l1.port == l2.port && l1.protocol == l2.protocol && (has(l1.hostname) && has(l2.hostname) ? l1.hostname == l2.hostname : !has(l1.hostname) && !has(l2.hostname))))"
                  }]
                }
              },
              required: ["gatewayClassName", "listeners"],
              type: "object"
            },
            status: {
              default: {
                conditions: [{
                  lastTransitionTime: "1970-01-01T00:00:00Z",
                  message: "Waiting for controller",
                  reason: "Pending",
                  status: "Unknown",
                  type: "Accepted"
                }, {
                  lastTransitionTime: "1970-01-01T00:00:00Z",
                  message: "Waiting for controller",
                  reason: "Pending",
                  status: "Unknown",
                  type: "Programmed"
                }]
              },
              description: "Status defines the current state of Gateway.",
              properties: {
                addresses: {
                  description: "Addresses lists the network addresses that have been bound to the\nGateway.\n\nThis list may differ from the addresses provided in the spec under some\nconditions:\n\n  * no addresses are specified, all addresses are dynamically assigned\n  * a combination of specified and dynamic addresses are assigned\n  * a specified address was unusable (e.g. already in use)\n\n",
                  items: {
                    description: "GatewayStatusAddress describes a network address that is bound to a Gateway.",
                    oneOf: [{
                      properties: {
                        type: {
                          enum: ["IPAddress"]
                        },
                        value: {
                          anyOf: [{
                            format: "ipv4"
                          }, {
                            format: "ipv6"
                          }]
                        }
                      }
                    }, {
                      properties: {
                        type: {
                          not: {
                            enum: ["IPAddress"]
                          }
                        }
                      }
                    }],
                    properties: {
                      type: {
                        default: "IPAddress",
                        description: "Type of the address.",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^Hostname|IPAddress|NamedAddress|[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*\\/[A-Za-z0-9\\/\\-._~%!$&'()*+,;=:]+$",
                        type: "string"
                      },
                      value: {
                        description: "Value of the address. The validity of the values will depend\non the type and support by the controller.\n\nExamples: `1.2.3.4`, `128::1`, `my-ip-address`.",
                        maxLength: 253,
                        minLength: 1,
                        type: "string"
                      }
                    },
                    required: ["value"],
                    type: "object",
                    "x-kubernetes-validations": [{
                      message: "Hostname value must only contain valid characters (matching ^(\\*\\.)?[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$)",
                      rule: "self.type == 'Hostname' ? self.value.matches(r\"\"\"^(\\*\\.)?[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$\"\"\"): true"
                    }]
                  },
                  maxItems: 16,
                  type: "array"
                },
                conditions: {
                  default: [{
                    lastTransitionTime: "1970-01-01T00:00:00Z",
                    message: "Waiting for controller",
                    reason: "Pending",
                    status: "Unknown",
                    type: "Accepted"
                  }, {
                    lastTransitionTime: "1970-01-01T00:00:00Z",
                    message: "Waiting for controller",
                    reason: "Pending",
                    status: "Unknown",
                    type: "Programmed"
                  }],
                  description: "Conditions describe the current conditions of the Gateway.\n\nImplementations should prefer to express Gateway conditions\nusing the `GatewayConditionType` and `GatewayConditionReason`\nconstants so that operators and tools can converge on a common\nvocabulary to describe Gateway state.\n\nKnown condition types are:\n\n* \"Accepted\"\n* \"Programmed\"\n* \"Ready\"",
                  items: {
                    description: "Condition contains details for one aspect of the current state of this API Resource.",
                    properties: {
                      lastTransitionTime: {
                        description: "lastTransitionTime is the last time the condition transitioned from one status to another.\nThis should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.",
                        format: "date-time",
                        type: "string"
                      },
                      message: {
                        description: "message is a human readable message indicating details about the transition.\nThis may be an empty string.",
                        maxLength: 32768,
                        type: "string"
                      },
                      observedGeneration: {
                        description: "observedGeneration represents the .metadata.generation that the condition was set based upon.\nFor instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date\nwith respect to the current state of the instance.",
                        format: "int64",
                        minimum: 0,
                        type: "integer"
                      },
                      reason: {
                        description: "reason contains a programmatic identifier indicating the reason for the condition's last transition.\nProducers of specific condition types may define expected values and meanings for this field,\nand whether the values are considered a guaranteed API.\nThe value should be a CamelCase string.\nThis field may not be empty.",
                        maxLength: 1024,
                        minLength: 1,
                        pattern: "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$",
                        type: "string"
                      },
                      status: {
                        description: "status of the condition, one of True, False, Unknown.",
                        enum: ["True", "False", "Unknown"],
                        type: "string"
                      },
                      type: {
                        description: "type of condition in CamelCase or in foo.example.com/CamelCase.",
                        maxLength: 316,
                        pattern: "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$",
                        type: "string"
                      }
                    },
                    required: ["lastTransitionTime", "message", "reason", "status", "type"],
                    type: "object"
                  },
                  maxItems: 8,
                  type: "array",
                  "x-kubernetes-list-map-keys": ["type"],
                  "x-kubernetes-list-type": "map"
                },
                listeners: {
                  description: "Listeners provide status for each unique listener port defined in the Spec.",
                  items: {
                    description: "ListenerStatus is the status associated with a Listener.",
                    properties: {
                      attachedRoutes: {
                        description: "AttachedRoutes represents the total number of Routes that have been\nsuccessfully attached to this Listener.\n\nSuccessful attachment of a Route to a Listener is based solely on the\ncombination of the AllowedRoutes field on the corresponding Listener\nand the Route's ParentRefs field. A Route is successfully attached to\na Listener when it is selected by the Listener's AllowedRoutes field\nAND the Route has a valid ParentRef selecting the whole Gateway\nresource or a specific Listener as a parent resource (more detail on\nattachment semantics can be found in the documentation on the various\nRoute kinds ParentRefs fields). Listener or Route status does not impact\nsuccessful attachment, i.e. the AttachedRoutes field count MUST be set\nfor Listeners with condition Accepted: false and MUST count successfully\nattached Routes that may themselves have Accepted: false conditions.\n\nUses for this field include troubleshooting Route attachment and\nmeasuring blast radius/impact of changes to a Listener.",
                        format: "int32",
                        type: "integer"
                      },
                      conditions: {
                        description: "Conditions describe the current condition of this listener.",
                        items: {
                          description: "Condition contains details for one aspect of the current state of this API Resource.",
                          properties: {
                            lastTransitionTime: {
                              description: "lastTransitionTime is the last time the condition transitioned from one status to another.\nThis should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.",
                              format: "date-time",
                              type: "string"
                            },
                            message: {
                              description: "message is a human readable message indicating details about the transition.\nThis may be an empty string.",
                              maxLength: 32768,
                              type: "string"
                            },
                            observedGeneration: {
                              description: "observedGeneration represents the .metadata.generation that the condition was set based upon.\nFor instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date\nwith respect to the current state of the instance.",
                              format: "int64",
                              minimum: 0,
                              type: "integer"
                            },
                            reason: {
                              description: "reason contains a programmatic identifier indicating the reason for the condition's last transition.\nProducers of specific condition types may define expected values and meanings for this field,\nand whether the values are considered a guaranteed API.\nThe value should be a CamelCase string.\nThis field may not be empty.",
                              maxLength: 1024,
                              minLength: 1,
                              pattern: "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$",
                              type: "string"
                            },
                            status: {
                              description: "status of the condition, one of True, False, Unknown.",
                              enum: ["True", "False", "Unknown"],
                              type: "string"
                            },
                            type: {
                              description: "type of condition in CamelCase or in foo.example.com/CamelCase.",
                              maxLength: 316,
                              pattern: "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$",
                              type: "string"
                            }
                          },
                          required: ["lastTransitionTime", "message", "reason", "status", "type"],
                          type: "object"
                        },
                        maxItems: 8,
                        type: "array",
                        "x-kubernetes-list-map-keys": ["type"],
                        "x-kubernetes-list-type": "map"
                      },
                      name: {
                        description: "Name is the name of the Listener that this status corresponds to.",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                        type: "string"
                      },
                      supportedKinds: {
                        description: "SupportedKinds is the list indicating the Kinds supported by this\nlistener. This MUST represent the kinds an implementation supports for\nthat Listener configuration.\n\nIf kinds are specified in Spec that are not supported, they MUST NOT\nappear in this list and an implementation MUST set the \"ResolvedRefs\"\ncondition to \"False\" with the \"InvalidRouteKinds\" reason. If both valid\nand invalid Route kinds are specified, the implementation MUST\nreference the valid Route kinds that have been specified.",
                        items: {
                          description: "RouteGroupKind indicates the group and kind of a Route resource.",
                          properties: {
                            group: {
                              default: "gateway.networking.k8s.io",
                              description: "Group is the group of the Route.",
                              maxLength: 253,
                              pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                              type: "string"
                            },
                            kind: {
                              description: "Kind is the kind of the Route.",
                              maxLength: 63,
                              minLength: 1,
                              pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                              type: "string"
                            }
                          },
                          required: ["kind"],
                          type: "object"
                        },
                        maxItems: 8,
                        type: "array"
                      }
                    },
                    required: ["attachedRoutes", "conditions", "name", "supportedKinds"],
                    type: "object"
                  },
                  maxItems: 64,
                  type: "array",
                  "x-kubernetes-list-map-keys": ["name"],
                  "x-kubernetes-list-type": "map"
                }
              },
              type: "object"
            }
          },
          required: ["spec"],
          type: "object"
        }
      },
      served: true,
      storage: false,
      subresources: {
        status: {}
      }
    }]
  },
  status: {
    acceptedNames: {
      kind: "",
      plural: ""
    },
    conditions: null,
    storedVersions: null
  }
};
export const CustomResourceDefinition_GrpcroutesGatewayNetworkingK8sIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "api-approved.kubernetes.io": "https://github.com/kubernetes-sigs/gateway-api/pull/3328",
      "gateway.networking.k8s.io/bundle-version": "v1.2.1",
      "gateway.networking.k8s.io/channel": "standard"
    },
    creationTimestamp: null,
    name: "grpcroutes.gateway.networking.k8s.io"
  },
  spec: {
    group: "gateway.networking.k8s.io",
    names: {
      categories: ["gateway-api"],
      kind: "GRPCRoute",
      listKind: "GRPCRouteList",
      plural: "grpcroutes",
      singular: "grpcroute"
    },
    scope: "Namespaced",
    versions: [{
      additionalPrinterColumns: [{
        jsonPath: ".spec.hostnames",
        name: "Hostnames",
        type: "string"
      }, {
        jsonPath: ".metadata.creationTimestamp",
        name: "Age",
        type: "date"
      }],
      name: "v1",
      schema: {
        openAPIV3Schema: {
          description: "GRPCRoute provides a way to route gRPC requests. This includes the capability\nto match requests by hostname, gRPC service, gRPC method, or HTTP/2 header.\nFilters can be used to specify additional processing steps. Backends specify\nwhere matching requests will be routed.\n\nGRPCRoute falls under extended support within the Gateway API. Within the\nfollowing specification, the word \"MUST\" indicates that an implementation\nsupporting GRPCRoute must conform to the indicated requirement, but an\nimplementation not supporting this route type need not follow the requirement\nunless explicitly indicated.\n\nImplementations supporting `GRPCRoute` with the `HTTPS` `ProtocolType` MUST\naccept HTTP/2 connections without an initial upgrade from HTTP/1.1, i.e. via\nALPN. If the implementation does not support this, then it MUST set the\n\"Accepted\" condition to \"False\" for the affected listener with a reason of\n\"UnsupportedProtocol\".  Implementations MAY also accept HTTP/2 connections\nwith an upgrade from HTTP/1.\n\nImplementations supporting `GRPCRoute` with the `HTTP` `ProtocolType` MUST\nsupport HTTP/2 over cleartext TCP (h2c,\nhttps://www.rfc-editor.org/rfc/rfc7540#section-3.1) without an initial\nupgrade from HTTP/1.1, i.e. with prior knowledge\n(https://www.rfc-editor.org/rfc/rfc7540#section-3.4). If the implementation\ndoes not support this, then it MUST set the \"Accepted\" condition to \"False\"\nfor the affected listener with a reason of \"UnsupportedProtocol\".\nImplementations MAY also accept HTTP/2 connections with an upgrade from\nHTTP/1, i.e. without prior knowledge.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "Spec defines the desired state of GRPCRoute.",
              properties: {
                hostnames: {
                  description: "Hostnames defines a set of hostnames to match against the GRPC\nHost header to select a GRPCRoute to process the request. This matches\nthe RFC 1123 definition of a hostname with 2 notable exceptions:\n\n1. IPs are not allowed.\n2. A hostname may be prefixed with a wildcard label (`*.`). The wildcard\n   label MUST appear by itself as the first label.\n\nIf a hostname is specified by both the Listener and GRPCRoute, there\nMUST be at least one intersecting hostname for the GRPCRoute to be\nattached to the Listener. For example:\n\n* A Listener with `test.example.com` as the hostname matches GRPCRoutes\n  that have either not specified any hostnames, or have specified at\n  least one of `test.example.com` or `*.example.com`.\n* A Listener with `*.example.com` as the hostname matches GRPCRoutes\n  that have either not specified any hostnames or have specified at least\n  one hostname that matches the Listener hostname. For example,\n  `test.example.com` and `*.example.com` would both match. On the other\n  hand, `example.com` and `test.example.net` would not match.\n\nHostnames that are prefixed with a wildcard label (`*.`) are interpreted\nas a suffix match. That means that a match for `*.example.com` would match\nboth `test.example.com`, and `foo.test.example.com`, but not `example.com`.\n\nIf both the Listener and GRPCRoute have specified hostnames, any\nGRPCRoute hostnames that do not match the Listener hostname MUST be\nignored. For example, if a Listener specified `*.example.com`, and the\nGRPCRoute specified `test.example.com` and `test.example.net`,\n`test.example.net` MUST NOT be considered for a match.\n\nIf both the Listener and GRPCRoute have specified hostnames, and none\nmatch with the criteria above, then the GRPCRoute MUST NOT be accepted by\nthe implementation. The implementation MUST raise an 'Accepted' Condition\nwith a status of `False` in the corresponding RouteParentStatus.\n\nIf a Route (A) of type HTTPRoute or GRPCRoute is attached to a\nListener and that listener already has another Route (B) of the other\ntype attached and the intersection of the hostnames of A and B is\nnon-empty, then the implementation MUST accept exactly one of these two\nroutes, determined by the following criteria, in order:\n\n* The oldest Route based on creation timestamp.\n* The Route appearing first in alphabetical order by\n  \"{namespace}/{name}\".\n\nThe rejected Route MUST raise an 'Accepted' condition with a status of\n'False' in the corresponding RouteParentStatus.\n\nSupport: Core",
                  items: {
                    description: "Hostname is the fully qualified domain name of a network host. This matches\nthe RFC 1123 definition of a hostname with 2 notable exceptions:\n\n 1. IPs are not allowed.\n 2. A hostname may be prefixed with a wildcard label (`*.`). The wildcard\n    label must appear by itself as the first label.\n\nHostname can be \"precise\" which is a domain name without the terminating\ndot of a network host (e.g. \"foo.example.com\") or \"wildcard\", which is a\ndomain name prefixed with a single wildcard label (e.g. `*.example.com`).\n\nNote that as per RFC1035 and RFC1123, a *label* must consist of lower case\nalphanumeric characters or '-', and must start and end with an alphanumeric\ncharacter. No other punctuation is allowed.",
                    maxLength: 253,
                    minLength: 1,
                    pattern: "^(\\*\\.)?[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                    type: "string"
                  },
                  maxItems: 16,
                  type: "array"
                },
                parentRefs: {
                  description: "ParentRefs references the resources (usually Gateways) that a Route wants\nto be attached to. Note that the referenced parent resource needs to\nallow this for the attachment to be complete. For Gateways, that means\nthe Gateway needs to allow attachment from Routes of this kind and\nnamespace. For Services, that means the Service must either be in the same\nnamespace for a \"producer\" route, or the mesh implementation must support\nand allow \"consumer\" routes for the referenced Service. ReferenceGrant is\nnot applicable for governing ParentRefs to Services - it is not possible to\ncreate a \"producer\" route for a Service in a different namespace from the\nRoute.\n\nThere are two kinds of parent resources with \"Core\" support:\n\n* Gateway (Gateway conformance profile)\n* Service (Mesh conformance profile, ClusterIP Services only)\n\nThis API may be extended in the future to support additional kinds of parent\nresources.\n\nParentRefs must be _distinct_. This means either that:\n\n* They select different objects.  If this is the case, then parentRef\n  entries are distinct. In terms of fields, this means that the\n  multi-part key defined by `group`, `kind`, `namespace`, and `name` must\n  be unique across all parentRef entries in the Route.\n* They do not select different objects, but for each optional field used,\n  each ParentRef that selects the same object must set the same set of\n  optional fields to different values. If one ParentRef sets a\n  combination of optional fields, all must set the same combination.\n\nSome examples:\n\n* If one ParentRef sets `sectionName`, all ParentRefs referencing the\n  same object must also set `sectionName`.\n* If one ParentRef sets `port`, all ParentRefs referencing the same\n  object must also set `port`.\n* If one ParentRef sets `sectionName` and `port`, all ParentRefs\n  referencing the same object must also set `sectionName` and `port`.\n\nIt is possible to separately reference multiple distinct objects that may\nbe collapsed by an implementation. For example, some implementations may\nchoose to merge compatible Gateway Listeners together. If that is the\ncase, the list of routes attached to those resources should also be\nmerged.\n\nNote that for ParentRefs that cross namespace boundaries, there are specific\nrules. Cross-namespace references are only valid if they are explicitly\nallowed by something in the namespace they are referring to. For example,\nGateway has the AllowedRoutes field, and ReferenceGrant provides a\ngeneric way to enable other kinds of cross-namespace reference.\n\n\n\n\n\n\n",
                  items: {
                    description: "ParentReference identifies an API object (usually a Gateway) that can be considered\na parent of this resource (usually a route). There are two kinds of parent resources\nwith \"Core\" support:\n\n* Gateway (Gateway conformance profile)\n* Service (Mesh conformance profile, ClusterIP Services only)\n\nThis API may be extended in the future to support additional kinds of parent\nresources.\n\nThe API object must be valid in the cluster; the Group and Kind must\nbe registered in the cluster for this reference to be valid.",
                    properties: {
                      group: {
                        default: "gateway.networking.k8s.io",
                        description: "Group is the group of the referent.\nWhen unspecified, \"gateway.networking.k8s.io\" is inferred.\nTo set the core API group (such as for a \"Service\" kind referent),\nGroup must be explicitly set to \"\" (empty string).\n\nSupport: Core",
                        maxLength: 253,
                        pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                        type: "string"
                      },
                      kind: {
                        default: "Gateway",
                        description: "Kind is kind of the referent.\n\nThere are two kinds of parent resources with \"Core\" support:\n\n* Gateway (Gateway conformance profile)\n* Service (Mesh conformance profile, ClusterIP Services only)\n\nSupport for other resources is Implementation-Specific.",
                        maxLength: 63,
                        minLength: 1,
                        pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                        type: "string"
                      },
                      name: {
                        description: "Name is the name of the referent.\n\nSupport: Core",
                        maxLength: 253,
                        minLength: 1,
                        type: "string"
                      },
                      namespace: {
                        description: "Namespace is the namespace of the referent. When unspecified, this refers\nto the local namespace of the Route.\n\nNote that there are specific rules for ParentRefs which cross namespace\nboundaries. Cross-namespace references are only valid if they are explicitly\nallowed by something in the namespace they are referring to. For example:\nGateway has the AllowedRoutes field, and ReferenceGrant provides a\ngeneric way to enable any other kind of cross-namespace reference.\n\n\n\nSupport: Core",
                        maxLength: 63,
                        minLength: 1,
                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                        type: "string"
                      },
                      port: {
                        description: "Port is the network port this Route targets. It can be interpreted\ndifferently based on the type of parent resource.\n\nWhen the parent resource is a Gateway, this targets all listeners\nlistening on the specified port that also support this kind of Route(and\nselect this Route). It's not recommended to set `Port` unless the\nnetworking behaviors specified in a Route must apply to a specific port\nas opposed to a listener(s) whose port(s) may be changed. When both Port\nand SectionName are specified, the name and port of the selected listener\nmust match both specified values.\n\n\n\nImplementations MAY choose to support other parent resources.\nImplementations supporting other types of parent resources MUST clearly\ndocument how/if Port is interpreted.\n\nFor the purpose of status, an attachment is considered successful as\nlong as the parent resource accepts it partially. For example, Gateway\nlisteners can restrict which Routes can attach to them by Route kind,\nnamespace, or hostname. If 1 of 2 Gateway listeners accept attachment\nfrom the referencing Route, the Route MUST be considered successfully\nattached. If no Gateway listeners accept attachment from this Route,\nthe Route MUST be considered detached from the Gateway.\n\nSupport: Extended",
                        format: "int32",
                        maximum: 65535,
                        minimum: 1,
                        type: "integer"
                      },
                      sectionName: {
                        description: "SectionName is the name of a section within the target resource. In the\nfollowing resources, SectionName is interpreted as the following:\n\n* Gateway: Listener name. When both Port (experimental) and SectionName\nare specified, the name and port of the selected listener must match\nboth specified values.\n* Service: Port name. When both Port (experimental) and SectionName\nare specified, the name and port of the selected listener must match\nboth specified values.\n\nImplementations MAY choose to support attaching Routes to other resources.\nIf that is the case, they MUST clearly document how SectionName is\ninterpreted.\n\nWhen unspecified (empty string), this will reference the entire resource.\nFor the purpose of status, an attachment is considered successful if at\nleast one section in the parent resource accepts it. For example, Gateway\nlisteners can restrict which Routes can attach to them by Route kind,\nnamespace, or hostname. If 1 of 2 Gateway listeners accept attachment from\nthe referencing Route, the Route MUST be considered successfully\nattached. If no Gateway listeners accept attachment from this Route, the\nRoute MUST be considered detached from the Gateway.\n\nSupport: Core",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                        type: "string"
                      }
                    },
                    required: ["name"],
                    type: "object"
                  },
                  maxItems: 32,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "sectionName must be specified when parentRefs includes 2 or more references to the same parent",
                    rule: "self.all(p1, self.all(p2, p1.group == p2.group && p1.kind == p2.kind && p1.name == p2.name && (((!has(p1.__namespace__) || p1.__namespace__ == '') && (!has(p2.__namespace__) || p2.__namespace__ == '')) || (has(p1.__namespace__) && has(p2.__namespace__) && p1.__namespace__ == p2.__namespace__ )) ? ((!has(p1.sectionName) || p1.sectionName == '') == (!has(p2.sectionName) || p2.sectionName == '')) : true))"
                  }, {
                    message: "sectionName must be unique when parentRefs includes 2 or more references to the same parent",
                    rule: "self.all(p1, self.exists_one(p2, p1.group == p2.group && p1.kind == p2.kind && p1.name == p2.name && (((!has(p1.__namespace__) || p1.__namespace__ == '') && (!has(p2.__namespace__) || p2.__namespace__ == '')) || (has(p1.__namespace__) && has(p2.__namespace__) && p1.__namespace__ == p2.__namespace__ )) && (((!has(p1.sectionName) || p1.sectionName == '') && (!has(p2.sectionName) || p2.sectionName == '')) || (has(p1.sectionName) && has(p2.sectionName) && p1.sectionName == p2.sectionName))))"
                  }]
                },
                rules: {
                  description: "Rules are a list of GRPC matchers, filters and actions.\n\n",
                  items: {
                    description: "GRPCRouteRule defines the semantics for matching a gRPC request based on\nconditions (matches), processing it (filters), and forwarding the request to\nan API object (backendRefs).",
                    properties: {
                      backendRefs: {
                        description: "BackendRefs defines the backend(s) where matching requests should be\nsent.\n\nFailure behavior here depends on how many BackendRefs are specified and\nhow many are invalid.\n\nIf *all* entries in BackendRefs are invalid, and there are also no filters\nspecified in this route rule, *all* traffic which matches this rule MUST\nreceive an `UNAVAILABLE` status.\n\nSee the GRPCBackendRef definition for the rules about what makes a single\nGRPCBackendRef invalid.\n\nWhen a GRPCBackendRef is invalid, `UNAVAILABLE` statuses MUST be returned for\nrequests that would have otherwise been routed to an invalid backend. If\nmultiple backends are specified, and some are invalid, the proportion of\nrequests that would otherwise have been routed to an invalid backend\nMUST receive an `UNAVAILABLE` status.\n\nFor example, if two backends are specified with equal weights, and one is\ninvalid, 50 percent of traffic MUST receive an `UNAVAILABLE` status.\nImplementations may choose how that 50 percent is determined.\n\nSupport: Core for Kubernetes Service\n\nSupport: Implementation-specific for any other resource\n\nSupport for weight: Core",
                        items: {
                          description: "GRPCBackendRef defines how a GRPCRoute forwards a gRPC request.\n\nNote that when a namespace different than the local namespace is specified, a\nReferenceGrant object is required in the referent namespace to allow that\nnamespace's owner to accept the reference. See the ReferenceGrant\ndocumentation for details.\n\n<gateway:experimental:description>\n\nWhen the BackendRef points to a Kubernetes Service, implementations SHOULD\nhonor the appProtocol field if it is set for the target Service Port.\n\nImplementations supporting appProtocol SHOULD recognize the Kubernetes\nStandard Application Protocols defined in KEP-3726.\n\nIf a Service appProtocol isn't specified, an implementation MAY infer the\nbackend protocol through its own means. Implementations MAY infer the\nprotocol from the Route type referring to the backend Service.\n\nIf a Route is not able to send traffic to the backend using the specified\nprotocol then the backend is considered invalid. Implementations MUST set the\n\"ResolvedRefs\" condition to \"False\" with the \"UnsupportedProtocol\" reason.\n\n</gateway:experimental:description>",
                          properties: {
                            filters: {
                              description: "Filters defined at this level MUST be executed if and only if the\nrequest is being forwarded to the backend defined here.\n\nSupport: Implementation-specific (For broader support of filters, use the\nFilters field in GRPCRouteRule.)",
                              items: {
                                description: "GRPCRouteFilter defines processing steps that must be completed during the\nrequest or response lifecycle. GRPCRouteFilters are meant as an extension\npoint to express processing that may be done in Gateway implementations. Some\nexamples include request or response modification, implementing\nauthentication strategies, rate-limiting, and traffic shaping. API\nguarantee/conformance is defined based on the type of the filter.",
                                properties: {
                                  extensionRef: {
                                    description: "ExtensionRef is an optional, implementation-specific extension to the\n\"filter\" behavior.  For example, resource \"myroutefilter\" in group\n\"networking.example.net\"). ExtensionRef MUST NOT be used for core and\nextended filters.\n\nSupport: Implementation-specific\n\nThis filter can be used multiple times within the same rule.",
                                    properties: {
                                      group: {
                                        description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                                        maxLength: 253,
                                        pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                        type: "string"
                                      },
                                      kind: {
                                        description: "Kind is kind of the referent. For example \"HTTPRoute\" or \"Service\".",
                                        maxLength: 63,
                                        minLength: 1,
                                        pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                        type: "string"
                                      },
                                      name: {
                                        description: "Name is the name of the referent.",
                                        maxLength: 253,
                                        minLength: 1,
                                        type: "string"
                                      }
                                    },
                                    required: ["group", "kind", "name"],
                                    type: "object"
                                  },
                                  requestHeaderModifier: {
                                    description: "RequestHeaderModifier defines a schema for a filter that modifies request\nheaders.\n\nSupport: Core",
                                    properties: {
                                      add: {
                                        description: "Add adds the given header(s) (name, value) to the request\nbefore the action. It appends to any existing values associated\nwith the header name.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  add:\n  - name: \"my-header\"\n    value: \"bar,baz\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: foo,bar,baz",
                                        items: {
                                          description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                          properties: {
                                            name: {
                                              description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                              maxLength: 256,
                                              minLength: 1,
                                              pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                              type: "string"
                                            },
                                            value: {
                                              description: "Value is the value of HTTP Header to be matched.",
                                              maxLength: 4096,
                                              minLength: 1,
                                              type: "string"
                                            }
                                          },
                                          required: ["name", "value"],
                                          type: "object"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-map-keys": ["name"],
                                        "x-kubernetes-list-type": "map"
                                      },
                                      remove: {
                                        description: "Remove the given header(s) from the HTTP request before the action. The\nvalue of Remove is a list of HTTP header names. Note that the header\nnames are case-insensitive (see\nhttps://datatracker.ietf.org/doc/html/rfc2616#section-4.2).\n\nInput:\n  GET /foo HTTP/1.1\n  my-header1: foo\n  my-header2: bar\n  my-header3: baz\n\nConfig:\n  remove: [\"my-header1\", \"my-header3\"]\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header2: bar",
                                        items: {
                                          type: "string"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-type": "set"
                                      },
                                      set: {
                                        description: "Set overwrites the request with the given header (name, value)\nbefore the action.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  set:\n  - name: \"my-header\"\n    value: \"bar\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: bar",
                                        items: {
                                          description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                          properties: {
                                            name: {
                                              description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                              maxLength: 256,
                                              minLength: 1,
                                              pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                              type: "string"
                                            },
                                            value: {
                                              description: "Value is the value of HTTP Header to be matched.",
                                              maxLength: 4096,
                                              minLength: 1,
                                              type: "string"
                                            }
                                          },
                                          required: ["name", "value"],
                                          type: "object"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-map-keys": ["name"],
                                        "x-kubernetes-list-type": "map"
                                      }
                                    },
                                    type: "object"
                                  },
                                  requestMirror: {
                                    description: "RequestMirror defines a schema for a filter that mirrors requests.\nRequests are sent to the specified destination, but responses from\nthat destination are ignored.\n\nThis filter can be used multiple times within the same rule. Note that\nnot all implementations will be able to support mirroring to multiple\nbackends.\n\nSupport: Extended\n\n",
                                    properties: {
                                      backendRef: {
                                        description: "BackendRef references a resource where mirrored requests are sent.\n\nMirrored requests must be sent only to a single destination endpoint\nwithin this BackendRef, irrespective of how many endpoints are present\nwithin this BackendRef.\n\nIf the referent cannot be found, this BackendRef is invalid and must be\ndropped from the Gateway. The controller must ensure the \"ResolvedRefs\"\ncondition on the Route status is set to `status: False` and not configure\nthis backend in the underlying implementation.\n\nIf there is a cross-namespace reference to an *existing* object\nthat is not allowed by a ReferenceGrant, the controller must ensure the\n\"ResolvedRefs\"  condition on the Route is set to `status: False`,\nwith the \"RefNotPermitted\" reason and not configure this backend in the\nunderlying implementation.\n\nIn either error case, the Message of the `ResolvedRefs` Condition\nshould be used to provide more detail about the problem.\n\nSupport: Extended for Kubernetes Service\n\nSupport: Implementation-specific for any other resource",
                                        properties: {
                                          group: {
                                            default: "",
                                            description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                                            maxLength: 253,
                                            pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                            type: "string"
                                          },
                                          kind: {
                                            default: "Service",
                                            description: "Kind is the Kubernetes resource kind of the referent. For example\n\"Service\".\n\nDefaults to \"Service\" when not specified.\n\nExternalName services can refer to CNAME DNS records that may live\noutside of the cluster and as such are difficult to reason about in\nterms of conformance. They also may not be safe to forward to (see\nCVE-2021-25740 for more information). Implementations SHOULD NOT\nsupport ExternalName Services.\n\nSupport: Core (Services with a type other than ExternalName)\n\nSupport: Implementation-specific (Services with type ExternalName)",
                                            maxLength: 63,
                                            minLength: 1,
                                            pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                            type: "string"
                                          },
                                          name: {
                                            description: "Name is the name of the referent.",
                                            maxLength: 253,
                                            minLength: 1,
                                            type: "string"
                                          },
                                          namespace: {
                                            description: "Namespace is the namespace of the backend. When unspecified, the local\nnamespace is inferred.\n\nNote that when a namespace different than the local namespace is specified,\na ReferenceGrant object is required in the referent namespace to allow that\nnamespace's owner to accept the reference. See the ReferenceGrant\ndocumentation for details.\n\nSupport: Core",
                                            maxLength: 63,
                                            minLength: 1,
                                            pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                                            type: "string"
                                          },
                                          port: {
                                            description: "Port specifies the destination port number to use for this resource.\nPort is required when the referent is a Kubernetes Service. In this\ncase, the port number is the service port number, not the target port.\nFor other resources, destination port might be derived from the referent\nresource or this field.",
                                            format: "int32",
                                            maximum: 65535,
                                            minimum: 1,
                                            type: "integer"
                                          }
                                        },
                                        required: ["name"],
                                        type: "object",
                                        "x-kubernetes-validations": [{
                                          message: "Must have port for Service reference",
                                          rule: "(size(self.group) == 0 && self.kind == 'Service') ? has(self.port) : true"
                                        }]
                                      }
                                    },
                                    required: ["backendRef"],
                                    type: "object"
                                  },
                                  responseHeaderModifier: {
                                    description: "ResponseHeaderModifier defines a schema for a filter that modifies response\nheaders.\n\nSupport: Extended",
                                    properties: {
                                      add: {
                                        description: "Add adds the given header(s) (name, value) to the request\nbefore the action. It appends to any existing values associated\nwith the header name.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  add:\n  - name: \"my-header\"\n    value: \"bar,baz\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: foo,bar,baz",
                                        items: {
                                          description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                          properties: {
                                            name: {
                                              description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                              maxLength: 256,
                                              minLength: 1,
                                              pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                              type: "string"
                                            },
                                            value: {
                                              description: "Value is the value of HTTP Header to be matched.",
                                              maxLength: 4096,
                                              minLength: 1,
                                              type: "string"
                                            }
                                          },
                                          required: ["name", "value"],
                                          type: "object"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-map-keys": ["name"],
                                        "x-kubernetes-list-type": "map"
                                      },
                                      remove: {
                                        description: "Remove the given header(s) from the HTTP request before the action. The\nvalue of Remove is a list of HTTP header names. Note that the header\nnames are case-insensitive (see\nhttps://datatracker.ietf.org/doc/html/rfc2616#section-4.2).\n\nInput:\n  GET /foo HTTP/1.1\n  my-header1: foo\n  my-header2: bar\n  my-header3: baz\n\nConfig:\n  remove: [\"my-header1\", \"my-header3\"]\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header2: bar",
                                        items: {
                                          type: "string"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-type": "set"
                                      },
                                      set: {
                                        description: "Set overwrites the request with the given header (name, value)\nbefore the action.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  set:\n  - name: \"my-header\"\n    value: \"bar\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: bar",
                                        items: {
                                          description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                          properties: {
                                            name: {
                                              description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                              maxLength: 256,
                                              minLength: 1,
                                              pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                              type: "string"
                                            },
                                            value: {
                                              description: "Value is the value of HTTP Header to be matched.",
                                              maxLength: 4096,
                                              minLength: 1,
                                              type: "string"
                                            }
                                          },
                                          required: ["name", "value"],
                                          type: "object"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-map-keys": ["name"],
                                        "x-kubernetes-list-type": "map"
                                      }
                                    },
                                    type: "object"
                                  },
                                  type: {
                                    description: "Type identifies the type of filter to apply. As with other API fields,\ntypes are classified into three conformance levels:\n\n- Core: Filter types and their corresponding configuration defined by\n  \"Support: Core\" in this package, e.g. \"RequestHeaderModifier\". All\n  implementations supporting GRPCRoute MUST support core filters.\n\n- Extended: Filter types and their corresponding configuration defined by\n  \"Support: Extended\" in this package, e.g. \"RequestMirror\". Implementers\n  are encouraged to support extended filters.\n\n- Implementation-specific: Filters that are defined and supported by specific vendors.\n  In the future, filters showing convergence in behavior across multiple\n  implementations will be considered for inclusion in extended or core\n  conformance levels. Filter-specific configuration for such filters\n  is specified using the ExtensionRef field. `Type` MUST be set to\n  \"ExtensionRef\" for custom filters.\n\nImplementers are encouraged to define custom implementation types to\nextend the core API with implementation-specific behavior.\n\nIf a reference to a custom filter type cannot be resolved, the filter\nMUST NOT be skipped. Instead, requests that would have been processed by\nthat filter MUST receive a HTTP error response.\n\n",
                                    enum: ["ResponseHeaderModifier", "RequestHeaderModifier", "RequestMirror", "ExtensionRef"],
                                    type: "string"
                                  }
                                },
                                required: ["type"],
                                type: "object",
                                "x-kubernetes-validations": [{
                                  message: "filter.requestHeaderModifier must be nil if the filter.type is not RequestHeaderModifier",
                                  rule: "!(has(self.requestHeaderModifier) && self.type != 'RequestHeaderModifier')"
                                }, {
                                  message: "filter.requestHeaderModifier must be specified for RequestHeaderModifier filter.type",
                                  rule: "!(!has(self.requestHeaderModifier) && self.type == 'RequestHeaderModifier')"
                                }, {
                                  message: "filter.responseHeaderModifier must be nil if the filter.type is not ResponseHeaderModifier",
                                  rule: "!(has(self.responseHeaderModifier) && self.type != 'ResponseHeaderModifier')"
                                }, {
                                  message: "filter.responseHeaderModifier must be specified for ResponseHeaderModifier filter.type",
                                  rule: "!(!has(self.responseHeaderModifier) && self.type == 'ResponseHeaderModifier')"
                                }, {
                                  message: "filter.requestMirror must be nil if the filter.type is not RequestMirror",
                                  rule: "!(has(self.requestMirror) && self.type != 'RequestMirror')"
                                }, {
                                  message: "filter.requestMirror must be specified for RequestMirror filter.type",
                                  rule: "!(!has(self.requestMirror) && self.type == 'RequestMirror')"
                                }, {
                                  message: "filter.extensionRef must be nil if the filter.type is not ExtensionRef",
                                  rule: "!(has(self.extensionRef) && self.type != 'ExtensionRef')"
                                }, {
                                  message: "filter.extensionRef must be specified for ExtensionRef filter.type",
                                  rule: "!(!has(self.extensionRef) && self.type == 'ExtensionRef')"
                                }]
                              },
                              maxItems: 16,
                              type: "array",
                              "x-kubernetes-validations": [{
                                message: "RequestHeaderModifier filter cannot be repeated",
                                rule: "self.filter(f, f.type == 'RequestHeaderModifier').size() <= 1"
                              }, {
                                message: "ResponseHeaderModifier filter cannot be repeated",
                                rule: "self.filter(f, f.type == 'ResponseHeaderModifier').size() <= 1"
                              }]
                            },
                            group: {
                              default: "",
                              description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                              maxLength: 253,
                              pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                              type: "string"
                            },
                            kind: {
                              default: "Service",
                              description: "Kind is the Kubernetes resource kind of the referent. For example\n\"Service\".\n\nDefaults to \"Service\" when not specified.\n\nExternalName services can refer to CNAME DNS records that may live\noutside of the cluster and as such are difficult to reason about in\nterms of conformance. They also may not be safe to forward to (see\nCVE-2021-25740 for more information). Implementations SHOULD NOT\nsupport ExternalName Services.\n\nSupport: Core (Services with a type other than ExternalName)\n\nSupport: Implementation-specific (Services with type ExternalName)",
                              maxLength: 63,
                              minLength: 1,
                              pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                              type: "string"
                            },
                            name: {
                              description: "Name is the name of the referent.",
                              maxLength: 253,
                              minLength: 1,
                              type: "string"
                            },
                            namespace: {
                              description: "Namespace is the namespace of the backend. When unspecified, the local\nnamespace is inferred.\n\nNote that when a namespace different than the local namespace is specified,\na ReferenceGrant object is required in the referent namespace to allow that\nnamespace's owner to accept the reference. See the ReferenceGrant\ndocumentation for details.\n\nSupport: Core",
                              maxLength: 63,
                              minLength: 1,
                              pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                              type: "string"
                            },
                            port: {
                              description: "Port specifies the destination port number to use for this resource.\nPort is required when the referent is a Kubernetes Service. In this\ncase, the port number is the service port number, not the target port.\nFor other resources, destination port might be derived from the referent\nresource or this field.",
                              format: "int32",
                              maximum: 65535,
                              minimum: 1,
                              type: "integer"
                            },
                            weight: {
                              default: 1,
                              description: "Weight specifies the proportion of requests forwarded to the referenced\nbackend. This is computed as weight/(sum of all weights in this\nBackendRefs list). For non-zero values, there may be some epsilon from\nthe exact proportion defined here depending on the precision an\nimplementation supports. Weight is not a percentage and the sum of\nweights does not need to equal 100.\n\nIf only one backend is specified and it has a weight greater than 0, 100%\nof the traffic is forwarded to that backend. If weight is set to 0, no\ntraffic should be forwarded for this entry. If unspecified, weight\ndefaults to 1.\n\nSupport for this field varies based on the context where used.",
                              format: "int32",
                              maximum: 1000000,
                              minimum: 0,
                              type: "integer"
                            }
                          },
                          required: ["name"],
                          type: "object",
                          "x-kubernetes-validations": [{
                            message: "Must have port for Service reference",
                            rule: "(size(self.group) == 0 && self.kind == 'Service') ? has(self.port) : true"
                          }]
                        },
                        maxItems: 16,
                        type: "array"
                      },
                      filters: {
                        description: "Filters define the filters that are applied to requests that match\nthis rule.\n\nThe effects of ordering of multiple behaviors are currently unspecified.\nThis can change in the future based on feedback during the alpha stage.\n\nConformance-levels at this level are defined based on the type of filter:\n\n- ALL core filters MUST be supported by all implementations that support\n  GRPCRoute.\n- Implementers are encouraged to support extended filters.\n- Implementation-specific custom filters have no API guarantees across\n  implementations.\n\nSpecifying the same filter multiple times is not supported unless explicitly\nindicated in the filter.\n\nIf an implementation can not support a combination of filters, it must clearly\ndocument that limitation. In cases where incompatible or unsupported\nfilters are specified and cause the `Accepted` condition to be set to status\n`False`, implementations may use the `IncompatibleFilters` reason to specify\nthis configuration error.\n\nSupport: Core",
                        items: {
                          description: "GRPCRouteFilter defines processing steps that must be completed during the\nrequest or response lifecycle. GRPCRouteFilters are meant as an extension\npoint to express processing that may be done in Gateway implementations. Some\nexamples include request or response modification, implementing\nauthentication strategies, rate-limiting, and traffic shaping. API\nguarantee/conformance is defined based on the type of the filter.",
                          properties: {
                            extensionRef: {
                              description: "ExtensionRef is an optional, implementation-specific extension to the\n\"filter\" behavior.  For example, resource \"myroutefilter\" in group\n\"networking.example.net\"). ExtensionRef MUST NOT be used for core and\nextended filters.\n\nSupport: Implementation-specific\n\nThis filter can be used multiple times within the same rule.",
                              properties: {
                                group: {
                                  description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                                  maxLength: 253,
                                  pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                  type: "string"
                                },
                                kind: {
                                  description: "Kind is kind of the referent. For example \"HTTPRoute\" or \"Service\".",
                                  maxLength: 63,
                                  minLength: 1,
                                  pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                  type: "string"
                                },
                                name: {
                                  description: "Name is the name of the referent.",
                                  maxLength: 253,
                                  minLength: 1,
                                  type: "string"
                                }
                              },
                              required: ["group", "kind", "name"],
                              type: "object"
                            },
                            requestHeaderModifier: {
                              description: "RequestHeaderModifier defines a schema for a filter that modifies request\nheaders.\n\nSupport: Core",
                              properties: {
                                add: {
                                  description: "Add adds the given header(s) (name, value) to the request\nbefore the action. It appends to any existing values associated\nwith the header name.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  add:\n  - name: \"my-header\"\n    value: \"bar,baz\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: foo,bar,baz",
                                  items: {
                                    description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                    properties: {
                                      name: {
                                        description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                        maxLength: 256,
                                        minLength: 1,
                                        pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                        type: "string"
                                      },
                                      value: {
                                        description: "Value is the value of HTTP Header to be matched.",
                                        maxLength: 4096,
                                        minLength: 1,
                                        type: "string"
                                      }
                                    },
                                    required: ["name", "value"],
                                    type: "object"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-map-keys": ["name"],
                                  "x-kubernetes-list-type": "map"
                                },
                                remove: {
                                  description: "Remove the given header(s) from the HTTP request before the action. The\nvalue of Remove is a list of HTTP header names. Note that the header\nnames are case-insensitive (see\nhttps://datatracker.ietf.org/doc/html/rfc2616#section-4.2).\n\nInput:\n  GET /foo HTTP/1.1\n  my-header1: foo\n  my-header2: bar\n  my-header3: baz\n\nConfig:\n  remove: [\"my-header1\", \"my-header3\"]\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header2: bar",
                                  items: {
                                    type: "string"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-type": "set"
                                },
                                set: {
                                  description: "Set overwrites the request with the given header (name, value)\nbefore the action.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  set:\n  - name: \"my-header\"\n    value: \"bar\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: bar",
                                  items: {
                                    description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                    properties: {
                                      name: {
                                        description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                        maxLength: 256,
                                        minLength: 1,
                                        pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                        type: "string"
                                      },
                                      value: {
                                        description: "Value is the value of HTTP Header to be matched.",
                                        maxLength: 4096,
                                        minLength: 1,
                                        type: "string"
                                      }
                                    },
                                    required: ["name", "value"],
                                    type: "object"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-map-keys": ["name"],
                                  "x-kubernetes-list-type": "map"
                                }
                              },
                              type: "object"
                            },
                            requestMirror: {
                              description: "RequestMirror defines a schema for a filter that mirrors requests.\nRequests are sent to the specified destination, but responses from\nthat destination are ignored.\n\nThis filter can be used multiple times within the same rule. Note that\nnot all implementations will be able to support mirroring to multiple\nbackends.\n\nSupport: Extended\n\n",
                              properties: {
                                backendRef: {
                                  description: "BackendRef references a resource where mirrored requests are sent.\n\nMirrored requests must be sent only to a single destination endpoint\nwithin this BackendRef, irrespective of how many endpoints are present\nwithin this BackendRef.\n\nIf the referent cannot be found, this BackendRef is invalid and must be\ndropped from the Gateway. The controller must ensure the \"ResolvedRefs\"\ncondition on the Route status is set to `status: False` and not configure\nthis backend in the underlying implementation.\n\nIf there is a cross-namespace reference to an *existing* object\nthat is not allowed by a ReferenceGrant, the controller must ensure the\n\"ResolvedRefs\"  condition on the Route is set to `status: False`,\nwith the \"RefNotPermitted\" reason and not configure this backend in the\nunderlying implementation.\n\nIn either error case, the Message of the `ResolvedRefs` Condition\nshould be used to provide more detail about the problem.\n\nSupport: Extended for Kubernetes Service\n\nSupport: Implementation-specific for any other resource",
                                  properties: {
                                    group: {
                                      default: "",
                                      description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                                      maxLength: 253,
                                      pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                      type: "string"
                                    },
                                    kind: {
                                      default: "Service",
                                      description: "Kind is the Kubernetes resource kind of the referent. For example\n\"Service\".\n\nDefaults to \"Service\" when not specified.\n\nExternalName services can refer to CNAME DNS records that may live\noutside of the cluster and as such are difficult to reason about in\nterms of conformance. They also may not be safe to forward to (see\nCVE-2021-25740 for more information). Implementations SHOULD NOT\nsupport ExternalName Services.\n\nSupport: Core (Services with a type other than ExternalName)\n\nSupport: Implementation-specific (Services with type ExternalName)",
                                      maxLength: 63,
                                      minLength: 1,
                                      pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                      type: "string"
                                    },
                                    name: {
                                      description: "Name is the name of the referent.",
                                      maxLength: 253,
                                      minLength: 1,
                                      type: "string"
                                    },
                                    namespace: {
                                      description: "Namespace is the namespace of the backend. When unspecified, the local\nnamespace is inferred.\n\nNote that when a namespace different than the local namespace is specified,\na ReferenceGrant object is required in the referent namespace to allow that\nnamespace's owner to accept the reference. See the ReferenceGrant\ndocumentation for details.\n\nSupport: Core",
                                      maxLength: 63,
                                      minLength: 1,
                                      pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                                      type: "string"
                                    },
                                    port: {
                                      description: "Port specifies the destination port number to use for this resource.\nPort is required when the referent is a Kubernetes Service. In this\ncase, the port number is the service port number, not the target port.\nFor other resources, destination port might be derived from the referent\nresource or this field.",
                                      format: "int32",
                                      maximum: 65535,
                                      minimum: 1,
                                      type: "integer"
                                    }
                                  },
                                  required: ["name"],
                                  type: "object",
                                  "x-kubernetes-validations": [{
                                    message: "Must have port for Service reference",
                                    rule: "(size(self.group) == 0 && self.kind == 'Service') ? has(self.port) : true"
                                  }]
                                }
                              },
                              required: ["backendRef"],
                              type: "object"
                            },
                            responseHeaderModifier: {
                              description: "ResponseHeaderModifier defines a schema for a filter that modifies response\nheaders.\n\nSupport: Extended",
                              properties: {
                                add: {
                                  description: "Add adds the given header(s) (name, value) to the request\nbefore the action. It appends to any existing values associated\nwith the header name.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  add:\n  - name: \"my-header\"\n    value: \"bar,baz\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: foo,bar,baz",
                                  items: {
                                    description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                    properties: {
                                      name: {
                                        description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                        maxLength: 256,
                                        minLength: 1,
                                        pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                        type: "string"
                                      },
                                      value: {
                                        description: "Value is the value of HTTP Header to be matched.",
                                        maxLength: 4096,
                                        minLength: 1,
                                        type: "string"
                                      }
                                    },
                                    required: ["name", "value"],
                                    type: "object"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-map-keys": ["name"],
                                  "x-kubernetes-list-type": "map"
                                },
                                remove: {
                                  description: "Remove the given header(s) from the HTTP request before the action. The\nvalue of Remove is a list of HTTP header names. Note that the header\nnames are case-insensitive (see\nhttps://datatracker.ietf.org/doc/html/rfc2616#section-4.2).\n\nInput:\n  GET /foo HTTP/1.1\n  my-header1: foo\n  my-header2: bar\n  my-header3: baz\n\nConfig:\n  remove: [\"my-header1\", \"my-header3\"]\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header2: bar",
                                  items: {
                                    type: "string"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-type": "set"
                                },
                                set: {
                                  description: "Set overwrites the request with the given header (name, value)\nbefore the action.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  set:\n  - name: \"my-header\"\n    value: \"bar\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: bar",
                                  items: {
                                    description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                    properties: {
                                      name: {
                                        description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                        maxLength: 256,
                                        minLength: 1,
                                        pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                        type: "string"
                                      },
                                      value: {
                                        description: "Value is the value of HTTP Header to be matched.",
                                        maxLength: 4096,
                                        minLength: 1,
                                        type: "string"
                                      }
                                    },
                                    required: ["name", "value"],
                                    type: "object"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-map-keys": ["name"],
                                  "x-kubernetes-list-type": "map"
                                }
                              },
                              type: "object"
                            },
                            type: {
                              description: "Type identifies the type of filter to apply. As with other API fields,\ntypes are classified into three conformance levels:\n\n- Core: Filter types and their corresponding configuration defined by\n  \"Support: Core\" in this package, e.g. \"RequestHeaderModifier\". All\n  implementations supporting GRPCRoute MUST support core filters.\n\n- Extended: Filter types and their corresponding configuration defined by\n  \"Support: Extended\" in this package, e.g. \"RequestMirror\". Implementers\n  are encouraged to support extended filters.\n\n- Implementation-specific: Filters that are defined and supported by specific vendors.\n  In the future, filters showing convergence in behavior across multiple\n  implementations will be considered for inclusion in extended or core\n  conformance levels. Filter-specific configuration for such filters\n  is specified using the ExtensionRef field. `Type` MUST be set to\n  \"ExtensionRef\" for custom filters.\n\nImplementers are encouraged to define custom implementation types to\nextend the core API with implementation-specific behavior.\n\nIf a reference to a custom filter type cannot be resolved, the filter\nMUST NOT be skipped. Instead, requests that would have been processed by\nthat filter MUST receive a HTTP error response.\n\n",
                              enum: ["ResponseHeaderModifier", "RequestHeaderModifier", "RequestMirror", "ExtensionRef"],
                              type: "string"
                            }
                          },
                          required: ["type"],
                          type: "object",
                          "x-kubernetes-validations": [{
                            message: "filter.requestHeaderModifier must be nil if the filter.type is not RequestHeaderModifier",
                            rule: "!(has(self.requestHeaderModifier) && self.type != 'RequestHeaderModifier')"
                          }, {
                            message: "filter.requestHeaderModifier must be specified for RequestHeaderModifier filter.type",
                            rule: "!(!has(self.requestHeaderModifier) && self.type == 'RequestHeaderModifier')"
                          }, {
                            message: "filter.responseHeaderModifier must be nil if the filter.type is not ResponseHeaderModifier",
                            rule: "!(has(self.responseHeaderModifier) && self.type != 'ResponseHeaderModifier')"
                          }, {
                            message: "filter.responseHeaderModifier must be specified for ResponseHeaderModifier filter.type",
                            rule: "!(!has(self.responseHeaderModifier) && self.type == 'ResponseHeaderModifier')"
                          }, {
                            message: "filter.requestMirror must be nil if the filter.type is not RequestMirror",
                            rule: "!(has(self.requestMirror) && self.type != 'RequestMirror')"
                          }, {
                            message: "filter.requestMirror must be specified for RequestMirror filter.type",
                            rule: "!(!has(self.requestMirror) && self.type == 'RequestMirror')"
                          }, {
                            message: "filter.extensionRef must be nil if the filter.type is not ExtensionRef",
                            rule: "!(has(self.extensionRef) && self.type != 'ExtensionRef')"
                          }, {
                            message: "filter.extensionRef must be specified for ExtensionRef filter.type",
                            rule: "!(!has(self.extensionRef) && self.type == 'ExtensionRef')"
                          }]
                        },
                        maxItems: 16,
                        type: "array",
                        "x-kubernetes-validations": [{
                          message: "RequestHeaderModifier filter cannot be repeated",
                          rule: "self.filter(f, f.type == 'RequestHeaderModifier').size() <= 1"
                        }, {
                          message: "ResponseHeaderModifier filter cannot be repeated",
                          rule: "self.filter(f, f.type == 'ResponseHeaderModifier').size() <= 1"
                        }]
                      },
                      matches: {
                        description: "Matches define conditions used for matching the rule against incoming\ngRPC requests. Each match is independent, i.e. this rule will be matched\nif **any** one of the matches is satisfied.\n\nFor example, take the following matches configuration:\n\n```\nmatches:\n- method:\n    service: foo.bar\n  headers:\n    values:\n      version: 2\n- method:\n    service: foo.bar.v2\n```\n\nFor a request to match against this rule, it MUST satisfy\nEITHER of the two conditions:\n\n- service of foo.bar AND contains the header `version: 2`\n- service of foo.bar.v2\n\nSee the documentation for GRPCRouteMatch on how to specify multiple\nmatch conditions to be ANDed together.\n\nIf no matches are specified, the implementation MUST match every gRPC request.\n\nProxy or Load Balancer routing configuration generated from GRPCRoutes\nMUST prioritize rules based on the following criteria, continuing on\nties. Merging MUST not be done between GRPCRoutes and HTTPRoutes.\nPrecedence MUST be given to the rule with the largest number of:\n\n* Characters in a matching non-wildcard hostname.\n* Characters in a matching hostname.\n* Characters in a matching service.\n* Characters in a matching method.\n* Header matches.\n\nIf ties still exist across multiple Routes, matching precedence MUST be\ndetermined in order of the following criteria, continuing on ties:\n\n* The oldest Route based on creation timestamp.\n* The Route appearing first in alphabetical order by\n  \"{namespace}/{name}\".\n\nIf ties still exist within the Route that has been given precedence,\nmatching precedence MUST be granted to the first matching rule meeting\nthe above criteria.",
                        items: {
                          description: "GRPCRouteMatch defines the predicate used to match requests to a given\naction. Multiple match types are ANDed together, i.e. the match will\nevaluate to true only if all conditions are satisfied.\n\nFor example, the match below will match a gRPC request only if its service\nis `foo` AND it contains the `version: v1` header:\n\n```\nmatches:\n  - method:\n    type: Exact\n    service: \"foo\"\n    headers:\n  - name: \"version\"\n    value \"v1\"\n\n```",
                          properties: {
                            headers: {
                              description: "Headers specifies gRPC request header matchers. Multiple match values are\nANDed together, meaning, a request MUST match all the specified headers\nto select the route.",
                              items: {
                                description: "GRPCHeaderMatch describes how to select a gRPC route by matching gRPC request\nheaders.",
                                properties: {
                                  name: {
                                    description: "Name is the name of the gRPC Header to be matched.\n\nIf multiple entries specify equivalent header names, only the first\nentry with an equivalent name MUST be considered for a match. Subsequent\nentries with an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                    maxLength: 256,
                                    minLength: 1,
                                    pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                    type: "string"
                                  },
                                  type: {
                                    default: "Exact",
                                    description: "Type specifies how to match against the value of the header.",
                                    enum: ["Exact", "RegularExpression"],
                                    type: "string"
                                  },
                                  value: {
                                    description: "Value is the value of the gRPC Header to be matched.",
                                    maxLength: 4096,
                                    minLength: 1,
                                    type: "string"
                                  }
                                },
                                required: ["name", "value"],
                                type: "object"
                              },
                              maxItems: 16,
                              type: "array",
                              "x-kubernetes-list-map-keys": ["name"],
                              "x-kubernetes-list-type": "map"
                            },
                            method: {
                              description: "Method specifies a gRPC request service/method matcher. If this field is\nnot specified, all services and methods will match.",
                              properties: {
                                method: {
                                  description: "Value of the method to match against. If left empty or omitted, will\nmatch all services.\n\nAt least one of Service and Method MUST be a non-empty string.",
                                  maxLength: 1024,
                                  type: "string"
                                },
                                service: {
                                  description: "Value of the service to match against. If left empty or omitted, will\nmatch any service.\n\nAt least one of Service and Method MUST be a non-empty string.",
                                  maxLength: 1024,
                                  type: "string"
                                },
                                type: {
                                  default: "Exact",
                                  description: "Type specifies how to match against the service and/or method.\nSupport: Core (Exact with service and method specified)\n\nSupport: Implementation-specific (Exact with method specified but no service specified)\n\nSupport: Implementation-specific (RegularExpression)",
                                  enum: ["Exact", "RegularExpression"],
                                  type: "string"
                                }
                              },
                              type: "object",
                              "x-kubernetes-validations": [{
                                message: "One or both of 'service' or 'method' must be specified",
                                rule: "has(self.type) ? has(self.service) || has(self.method) : true"
                              }, {
                                message: "service must only contain valid characters (matching ^(?i)\\.?[a-z_][a-z_0-9]*(\\.[a-z_][a-z_0-9]*)*$)",
                                rule: "(!has(self.type) || self.type == 'Exact') && has(self.service) ? self.service.matches(r\"\"\"^(?i)\\.?[a-z_][a-z_0-9]*(\\.[a-z_][a-z_0-9]*)*$\"\"\"): true"
                              }, {
                                message: "method must only contain valid characters (matching ^[A-Za-z_][A-Za-z_0-9]*$)",
                                rule: "(!has(self.type) || self.type == 'Exact') && has(self.method) ? self.method.matches(r\"\"\"^[A-Za-z_][A-Za-z_0-9]*$\"\"\"): true"
                              }]
                            }
                          },
                          type: "object"
                        },
                        maxItems: 8,
                        type: "array"
                      }
                    },
                    type: "object"
                  },
                  maxItems: 16,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "While 16 rules and 64 matches per rule are allowed, the total number of matches across all rules in a route must be less than 128",
                    rule: "(self.size() > 0 ? (has(self[0].matches) ? self[0].matches.size() : 0) : 0) + (self.size() > 1 ? (has(self[1].matches) ? self[1].matches.size() : 0) : 0) + (self.size() > 2 ? (has(self[2].matches) ? self[2].matches.size() : 0) : 0) + (self.size() > 3 ? (has(self[3].matches) ? self[3].matches.size() : 0) : 0) + (self.size() > 4 ? (has(self[4].matches) ? self[4].matches.size() : 0) : 0) + (self.size() > 5 ? (has(self[5].matches) ? self[5].matches.size() : 0) : 0) + (self.size() > 6 ? (has(self[6].matches) ? self[6].matches.size() : 0) : 0) + (self.size() > 7 ? (has(self[7].matches) ? self[7].matches.size() : 0) : 0) + (self.size() > 8 ? (has(self[8].matches) ? self[8].matches.size() : 0) : 0) + (self.size() > 9 ? (has(self[9].matches) ? self[9].matches.size() : 0) : 0) + (self.size() > 10 ? (has(self[10].matches) ? self[10].matches.size() : 0) : 0) + (self.size() > 11 ? (has(self[11].matches) ? self[11].matches.size() : 0) : 0) + (self.size() > 12 ? (has(self[12].matches) ? self[12].matches.size() : 0) : 0) + (self.size() > 13 ? (has(self[13].matches) ? self[13].matches.size() : 0) : 0) + (self.size() > 14 ? (has(self[14].matches) ? self[14].matches.size() : 0) : 0) + (self.size() > 15 ? (has(self[15].matches) ? self[15].matches.size() : 0) : 0) <= 128"
                  }]
                }
              },
              type: "object"
            },
            status: {
              description: "Status defines the current state of GRPCRoute.",
              properties: {
                parents: {
                  description: "Parents is a list of parent resources (usually Gateways) that are\nassociated with the route, and the status of the route with respect to\neach parent. When this route attaches to a parent, the controller that\nmanages the parent must add an entry to this list when the controller\nfirst sees the route and should update the entry as appropriate when the\nroute or gateway is modified.\n\nNote that parent references that cannot be resolved by an implementation\nof this API will not be added to this list. Implementations of this API\ncan only populate Route status for the Gateways/parent resources they are\nresponsible for.\n\nA maximum of 32 Gateways will be represented in this list. An empty list\nmeans the route has not been attached to any Gateway.",
                  items: {
                    description: "RouteParentStatus describes the status of a route with respect to an\nassociated Parent.",
                    properties: {
                      conditions: {
                        description: "Conditions describes the status of the route with respect to the Gateway.\nNote that the route's availability is also subject to the Gateway's own\nstatus conditions and listener status.\n\nIf the Route's ParentRef specifies an existing Gateway that supports\nRoutes of this kind AND that Gateway's controller has sufficient access,\nthen that Gateway's controller MUST set the \"Accepted\" condition on the\nRoute, to indicate whether the route has been accepted or rejected by the\nGateway, and why.\n\nA Route MUST be considered \"Accepted\" if at least one of the Route's\nrules is implemented by the Gateway.\n\nThere are a number of cases where the \"Accepted\" condition may not be set\ndue to lack of controller visibility, that includes when:\n\n* The Route refers to a non-existent parent.\n* The Route is of a type that the controller does not support.\n* The Route is in a namespace the controller does not have access to.",
                        items: {
                          description: "Condition contains details for one aspect of the current state of this API Resource.",
                          properties: {
                            lastTransitionTime: {
                              description: "lastTransitionTime is the last time the condition transitioned from one status to another.\nThis should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.",
                              format: "date-time",
                              type: "string"
                            },
                            message: {
                              description: "message is a human readable message indicating details about the transition.\nThis may be an empty string.",
                              maxLength: 32768,
                              type: "string"
                            },
                            observedGeneration: {
                              description: "observedGeneration represents the .metadata.generation that the condition was set based upon.\nFor instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date\nwith respect to the current state of the instance.",
                              format: "int64",
                              minimum: 0,
                              type: "integer"
                            },
                            reason: {
                              description: "reason contains a programmatic identifier indicating the reason for the condition's last transition.\nProducers of specific condition types may define expected values and meanings for this field,\nand whether the values are considered a guaranteed API.\nThe value should be a CamelCase string.\nThis field may not be empty.",
                              maxLength: 1024,
                              minLength: 1,
                              pattern: "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$",
                              type: "string"
                            },
                            status: {
                              description: "status of the condition, one of True, False, Unknown.",
                              enum: ["True", "False", "Unknown"],
                              type: "string"
                            },
                            type: {
                              description: "type of condition in CamelCase or in foo.example.com/CamelCase.",
                              maxLength: 316,
                              pattern: "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$",
                              type: "string"
                            }
                          },
                          required: ["lastTransitionTime", "message", "reason", "status", "type"],
                          type: "object"
                        },
                        maxItems: 8,
                        minItems: 1,
                        type: "array",
                        "x-kubernetes-list-map-keys": ["type"],
                        "x-kubernetes-list-type": "map"
                      },
                      controllerName: {
                        description: "ControllerName is a domain/path string that indicates the name of the\ncontroller that wrote this status. This corresponds with the\ncontrollerName field on GatewayClass.\n\nExample: \"example.net/gateway-controller\".\n\nThe format of this field is DOMAIN \"/\" PATH, where DOMAIN and PATH are\nvalid Kubernetes names\n(https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).\n\nControllers MUST populate this field when writing status. Controllers should ensure that\nentries to status populated with their ControllerName are cleaned up when they are no\nlonger necessary.",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*\\/[A-Za-z0-9\\/\\-._~%!$&'()*+,;=:]+$",
                        type: "string"
                      },
                      parentRef: {
                        description: "ParentRef corresponds with a ParentRef in the spec that this\nRouteParentStatus struct describes the status of.",
                        properties: {
                          group: {
                            default: "gateway.networking.k8s.io",
                            description: "Group is the group of the referent.\nWhen unspecified, \"gateway.networking.k8s.io\" is inferred.\nTo set the core API group (such as for a \"Service\" kind referent),\nGroup must be explicitly set to \"\" (empty string).\n\nSupport: Core",
                            maxLength: 253,
                            pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                            type: "string"
                          },
                          kind: {
                            default: "Gateway",
                            description: "Kind is kind of the referent.\n\nThere are two kinds of parent resources with \"Core\" support:\n\n* Gateway (Gateway conformance profile)\n* Service (Mesh conformance profile, ClusterIP Services only)\n\nSupport for other resources is Implementation-Specific.",
                            maxLength: 63,
                            minLength: 1,
                            pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                            type: "string"
                          },
                          name: {
                            description: "Name is the name of the referent.\n\nSupport: Core",
                            maxLength: 253,
                            minLength: 1,
                            type: "string"
                          },
                          namespace: {
                            description: "Namespace is the namespace of the referent. When unspecified, this refers\nto the local namespace of the Route.\n\nNote that there are specific rules for ParentRefs which cross namespace\nboundaries. Cross-namespace references are only valid if they are explicitly\nallowed by something in the namespace they are referring to. For example:\nGateway has the AllowedRoutes field, and ReferenceGrant provides a\ngeneric way to enable any other kind of cross-namespace reference.\n\n\n\nSupport: Core",
                            maxLength: 63,
                            minLength: 1,
                            pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                            type: "string"
                          },
                          port: {
                            description: "Port is the network port this Route targets. It can be interpreted\ndifferently based on the type of parent resource.\n\nWhen the parent resource is a Gateway, this targets all listeners\nlistening on the specified port that also support this kind of Route(and\nselect this Route). It's not recommended to set `Port` unless the\nnetworking behaviors specified in a Route must apply to a specific port\nas opposed to a listener(s) whose port(s) may be changed. When both Port\nand SectionName are specified, the name and port of the selected listener\nmust match both specified values.\n\n\n\nImplementations MAY choose to support other parent resources.\nImplementations supporting other types of parent resources MUST clearly\ndocument how/if Port is interpreted.\n\nFor the purpose of status, an attachment is considered successful as\nlong as the parent resource accepts it partially. For example, Gateway\nlisteners can restrict which Routes can attach to them by Route kind,\nnamespace, or hostname. If 1 of 2 Gateway listeners accept attachment\nfrom the referencing Route, the Route MUST be considered successfully\nattached. If no Gateway listeners accept attachment from this Route,\nthe Route MUST be considered detached from the Gateway.\n\nSupport: Extended",
                            format: "int32",
                            maximum: 65535,
                            minimum: 1,
                            type: "integer"
                          },
                          sectionName: {
                            description: "SectionName is the name of a section within the target resource. In the\nfollowing resources, SectionName is interpreted as the following:\n\n* Gateway: Listener name. When both Port (experimental) and SectionName\nare specified, the name and port of the selected listener must match\nboth specified values.\n* Service: Port name. When both Port (experimental) and SectionName\nare specified, the name and port of the selected listener must match\nboth specified values.\n\nImplementations MAY choose to support attaching Routes to other resources.\nIf that is the case, they MUST clearly document how SectionName is\ninterpreted.\n\nWhen unspecified (empty string), this will reference the entire resource.\nFor the purpose of status, an attachment is considered successful if at\nleast one section in the parent resource accepts it. For example, Gateway\nlisteners can restrict which Routes can attach to them by Route kind,\nnamespace, or hostname. If 1 of 2 Gateway listeners accept attachment from\nthe referencing Route, the Route MUST be considered successfully\nattached. If no Gateway listeners accept attachment from this Route, the\nRoute MUST be considered detached from the Gateway.\n\nSupport: Core",
                            maxLength: 253,
                            minLength: 1,
                            pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                            type: "string"
                          }
                        },
                        required: ["name"],
                        type: "object"
                      }
                    },
                    required: ["controllerName", "parentRef"],
                    type: "object"
                  },
                  maxItems: 32,
                  type: "array"
                }
              },
              required: ["parents"],
              type: "object"
            }
          },
          type: "object"
        }
      },
      served: true,
      storage: true,
      subresources: {
        status: {}
      }
    }]
  },
  status: {
    acceptedNames: {
      kind: "",
      plural: ""
    },
    conditions: null,
    storedVersions: null
  }
};
export const CustomResourceDefinition_HttproutesGatewayNetworkingK8sIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "api-approved.kubernetes.io": "https://github.com/kubernetes-sigs/gateway-api/pull/3328",
      "gateway.networking.k8s.io/bundle-version": "v1.2.1",
      "gateway.networking.k8s.io/channel": "standard"
    },
    creationTimestamp: null,
    name: "httproutes.gateway.networking.k8s.io"
  },
  spec: {
    group: "gateway.networking.k8s.io",
    names: {
      categories: ["gateway-api"],
      kind: "HTTPRoute",
      listKind: "HTTPRouteList",
      plural: "httproutes",
      singular: "httproute"
    },
    scope: "Namespaced",
    versions: [{
      additionalPrinterColumns: [{
        jsonPath: ".spec.hostnames",
        name: "Hostnames",
        type: "string"
      }, {
        jsonPath: ".metadata.creationTimestamp",
        name: "Age",
        type: "date"
      }],
      name: "v1",
      schema: {
        openAPIV3Schema: {
          description: "HTTPRoute provides a way to route HTTP requests. This includes the capability\nto match requests by hostname, path, header, or query param. Filters can be\nused to specify additional processing steps. Backends specify where matching\nrequests should be routed.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "Spec defines the desired state of HTTPRoute.",
              properties: {
                hostnames: {
                  description: "Hostnames defines a set of hostnames that should match against the HTTP Host\nheader to select a HTTPRoute used to process the request. Implementations\nMUST ignore any port value specified in the HTTP Host header while\nperforming a match and (absent of any applicable header modification\nconfiguration) MUST forward this header unmodified to the backend.\n\nValid values for Hostnames are determined by RFC 1123 definition of a\nhostname with 2 notable exceptions:\n\n1. IPs are not allowed.\n2. A hostname may be prefixed with a wildcard label (`*.`). The wildcard\n   label must appear by itself as the first label.\n\nIf a hostname is specified by both the Listener and HTTPRoute, there\nmust be at least one intersecting hostname for the HTTPRoute to be\nattached to the Listener. For example:\n\n* A Listener with `test.example.com` as the hostname matches HTTPRoutes\n  that have either not specified any hostnames, or have specified at\n  least one of `test.example.com` or `*.example.com`.\n* A Listener with `*.example.com` as the hostname matches HTTPRoutes\n  that have either not specified any hostnames or have specified at least\n  one hostname that matches the Listener hostname. For example,\n  `*.example.com`, `test.example.com`, and `foo.test.example.com` would\n  all match. On the other hand, `example.com` and `test.example.net` would\n  not match.\n\nHostnames that are prefixed with a wildcard label (`*.`) are interpreted\nas a suffix match. That means that a match for `*.example.com` would match\nboth `test.example.com`, and `foo.test.example.com`, but not `example.com`.\n\nIf both the Listener and HTTPRoute have specified hostnames, any\nHTTPRoute hostnames that do not match the Listener hostname MUST be\nignored. For example, if a Listener specified `*.example.com`, and the\nHTTPRoute specified `test.example.com` and `test.example.net`,\n`test.example.net` must not be considered for a match.\n\nIf both the Listener and HTTPRoute have specified hostnames, and none\nmatch with the criteria above, then the HTTPRoute is not accepted. The\nimplementation must raise an 'Accepted' Condition with a status of\n`False` in the corresponding RouteParentStatus.\n\nIn the event that multiple HTTPRoutes specify intersecting hostnames (e.g.\noverlapping wildcard matching and exact matching hostnames), precedence must\nbe given to rules from the HTTPRoute with the largest number of:\n\n* Characters in a matching non-wildcard hostname.\n* Characters in a matching hostname.\n\nIf ties exist across multiple Routes, the matching precedence rules for\nHTTPRouteMatches takes over.\n\nSupport: Core",
                  items: {
                    description: "Hostname is the fully qualified domain name of a network host. This matches\nthe RFC 1123 definition of a hostname with 2 notable exceptions:\n\n 1. IPs are not allowed.\n 2. A hostname may be prefixed with a wildcard label (`*.`). The wildcard\n    label must appear by itself as the first label.\n\nHostname can be \"precise\" which is a domain name without the terminating\ndot of a network host (e.g. \"foo.example.com\") or \"wildcard\", which is a\ndomain name prefixed with a single wildcard label (e.g. `*.example.com`).\n\nNote that as per RFC1035 and RFC1123, a *label* must consist of lower case\nalphanumeric characters or '-', and must start and end with an alphanumeric\ncharacter. No other punctuation is allowed.",
                    maxLength: 253,
                    minLength: 1,
                    pattern: "^(\\*\\.)?[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                    type: "string"
                  },
                  maxItems: 16,
                  type: "array"
                },
                parentRefs: {
                  description: "ParentRefs references the resources (usually Gateways) that a Route wants\nto be attached to. Note that the referenced parent resource needs to\nallow this for the attachment to be complete. For Gateways, that means\nthe Gateway needs to allow attachment from Routes of this kind and\nnamespace. For Services, that means the Service must either be in the same\nnamespace for a \"producer\" route, or the mesh implementation must support\nand allow \"consumer\" routes for the referenced Service. ReferenceGrant is\nnot applicable for governing ParentRefs to Services - it is not possible to\ncreate a \"producer\" route for a Service in a different namespace from the\nRoute.\n\nThere are two kinds of parent resources with \"Core\" support:\n\n* Gateway (Gateway conformance profile)\n* Service (Mesh conformance profile, ClusterIP Services only)\n\nThis API may be extended in the future to support additional kinds of parent\nresources.\n\nParentRefs must be _distinct_. This means either that:\n\n* They select different objects.  If this is the case, then parentRef\n  entries are distinct. In terms of fields, this means that the\n  multi-part key defined by `group`, `kind`, `namespace`, and `name` must\n  be unique across all parentRef entries in the Route.\n* They do not select different objects, but for each optional field used,\n  each ParentRef that selects the same object must set the same set of\n  optional fields to different values. If one ParentRef sets a\n  combination of optional fields, all must set the same combination.\n\nSome examples:\n\n* If one ParentRef sets `sectionName`, all ParentRefs referencing the\n  same object must also set `sectionName`.\n* If one ParentRef sets `port`, all ParentRefs referencing the same\n  object must also set `port`.\n* If one ParentRef sets `sectionName` and `port`, all ParentRefs\n  referencing the same object must also set `sectionName` and `port`.\n\nIt is possible to separately reference multiple distinct objects that may\nbe collapsed by an implementation. For example, some implementations may\nchoose to merge compatible Gateway Listeners together. If that is the\ncase, the list of routes attached to those resources should also be\nmerged.\n\nNote that for ParentRefs that cross namespace boundaries, there are specific\nrules. Cross-namespace references are only valid if they are explicitly\nallowed by something in the namespace they are referring to. For example,\nGateway has the AllowedRoutes field, and ReferenceGrant provides a\ngeneric way to enable other kinds of cross-namespace reference.\n\n\n\n\n\n\n",
                  items: {
                    description: "ParentReference identifies an API object (usually a Gateway) that can be considered\na parent of this resource (usually a route). There are two kinds of parent resources\nwith \"Core\" support:\n\n* Gateway (Gateway conformance profile)\n* Service (Mesh conformance profile, ClusterIP Services only)\n\nThis API may be extended in the future to support additional kinds of parent\nresources.\n\nThe API object must be valid in the cluster; the Group and Kind must\nbe registered in the cluster for this reference to be valid.",
                    properties: {
                      group: {
                        default: "gateway.networking.k8s.io",
                        description: "Group is the group of the referent.\nWhen unspecified, \"gateway.networking.k8s.io\" is inferred.\nTo set the core API group (such as for a \"Service\" kind referent),\nGroup must be explicitly set to \"\" (empty string).\n\nSupport: Core",
                        maxLength: 253,
                        pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                        type: "string"
                      },
                      kind: {
                        default: "Gateway",
                        description: "Kind is kind of the referent.\n\nThere are two kinds of parent resources with \"Core\" support:\n\n* Gateway (Gateway conformance profile)\n* Service (Mesh conformance profile, ClusterIP Services only)\n\nSupport for other resources is Implementation-Specific.",
                        maxLength: 63,
                        minLength: 1,
                        pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                        type: "string"
                      },
                      name: {
                        description: "Name is the name of the referent.\n\nSupport: Core",
                        maxLength: 253,
                        minLength: 1,
                        type: "string"
                      },
                      namespace: {
                        description: "Namespace is the namespace of the referent. When unspecified, this refers\nto the local namespace of the Route.\n\nNote that there are specific rules for ParentRefs which cross namespace\nboundaries. Cross-namespace references are only valid if they are explicitly\nallowed by something in the namespace they are referring to. For example:\nGateway has the AllowedRoutes field, and ReferenceGrant provides a\ngeneric way to enable any other kind of cross-namespace reference.\n\n\n\nSupport: Core",
                        maxLength: 63,
                        minLength: 1,
                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                        type: "string"
                      },
                      port: {
                        description: "Port is the network port this Route targets. It can be interpreted\ndifferently based on the type of parent resource.\n\nWhen the parent resource is a Gateway, this targets all listeners\nlistening on the specified port that also support this kind of Route(and\nselect this Route). It's not recommended to set `Port` unless the\nnetworking behaviors specified in a Route must apply to a specific port\nas opposed to a listener(s) whose port(s) may be changed. When both Port\nand SectionName are specified, the name and port of the selected listener\nmust match both specified values.\n\n\n\nImplementations MAY choose to support other parent resources.\nImplementations supporting other types of parent resources MUST clearly\ndocument how/if Port is interpreted.\n\nFor the purpose of status, an attachment is considered successful as\nlong as the parent resource accepts it partially. For example, Gateway\nlisteners can restrict which Routes can attach to them by Route kind,\nnamespace, or hostname. If 1 of 2 Gateway listeners accept attachment\nfrom the referencing Route, the Route MUST be considered successfully\nattached. If no Gateway listeners accept attachment from this Route,\nthe Route MUST be considered detached from the Gateway.\n\nSupport: Extended",
                        format: "int32",
                        maximum: 65535,
                        minimum: 1,
                        type: "integer"
                      },
                      sectionName: {
                        description: "SectionName is the name of a section within the target resource. In the\nfollowing resources, SectionName is interpreted as the following:\n\n* Gateway: Listener name. When both Port (experimental) and SectionName\nare specified, the name and port of the selected listener must match\nboth specified values.\n* Service: Port name. When both Port (experimental) and SectionName\nare specified, the name and port of the selected listener must match\nboth specified values.\n\nImplementations MAY choose to support attaching Routes to other resources.\nIf that is the case, they MUST clearly document how SectionName is\ninterpreted.\n\nWhen unspecified (empty string), this will reference the entire resource.\nFor the purpose of status, an attachment is considered successful if at\nleast one section in the parent resource accepts it. For example, Gateway\nlisteners can restrict which Routes can attach to them by Route kind,\nnamespace, or hostname. If 1 of 2 Gateway listeners accept attachment from\nthe referencing Route, the Route MUST be considered successfully\nattached. If no Gateway listeners accept attachment from this Route, the\nRoute MUST be considered detached from the Gateway.\n\nSupport: Core",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                        type: "string"
                      }
                    },
                    required: ["name"],
                    type: "object"
                  },
                  maxItems: 32,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "sectionName must be specified when parentRefs includes 2 or more references to the same parent",
                    rule: "self.all(p1, self.all(p2, p1.group == p2.group && p1.kind == p2.kind && p1.name == p2.name && (((!has(p1.__namespace__) || p1.__namespace__ == '') && (!has(p2.__namespace__) || p2.__namespace__ == '')) || (has(p1.__namespace__) && has(p2.__namespace__) && p1.__namespace__ == p2.__namespace__ )) ? ((!has(p1.sectionName) || p1.sectionName == '') == (!has(p2.sectionName) || p2.sectionName == '')) : true))"
                  }, {
                    message: "sectionName must be unique when parentRefs includes 2 or more references to the same parent",
                    rule: "self.all(p1, self.exists_one(p2, p1.group == p2.group && p1.kind == p2.kind && p1.name == p2.name && (((!has(p1.__namespace__) || p1.__namespace__ == '') && (!has(p2.__namespace__) || p2.__namespace__ == '')) || (has(p1.__namespace__) && has(p2.__namespace__) && p1.__namespace__ == p2.__namespace__ )) && (((!has(p1.sectionName) || p1.sectionName == '') && (!has(p2.sectionName) || p2.sectionName == '')) || (has(p1.sectionName) && has(p2.sectionName) && p1.sectionName == p2.sectionName))))"
                  }]
                },
                rules: {
                  default: [{
                    matches: [{
                      path: {
                        type: "PathPrefix",
                        value: "/"
                      }
                    }]
                  }],
                  description: "Rules are a list of HTTP matchers, filters and actions.\n\n",
                  items: {
                    description: "HTTPRouteRule defines semantics for matching an HTTP request based on\nconditions (matches), processing it (filters), and forwarding the request to\nan API object (backendRefs).",
                    properties: {
                      backendRefs: {
                        description: "BackendRefs defines the backend(s) where matching requests should be\nsent.\n\nFailure behavior here depends on how many BackendRefs are specified and\nhow many are invalid.\n\nIf *all* entries in BackendRefs are invalid, and there are also no filters\nspecified in this route rule, *all* traffic which matches this rule MUST\nreceive a 500 status code.\n\nSee the HTTPBackendRef definition for the rules about what makes a single\nHTTPBackendRef invalid.\n\nWhen a HTTPBackendRef is invalid, 500 status codes MUST be returned for\nrequests that would have otherwise been routed to an invalid backend. If\nmultiple backends are specified, and some are invalid, the proportion of\nrequests that would otherwise have been routed to an invalid backend\nMUST receive a 500 status code.\n\nFor example, if two backends are specified with equal weights, and one is\ninvalid, 50 percent of traffic must receive a 500. Implementations may\nchoose how that 50 percent is determined.\n\nWhen a HTTPBackendRef refers to a Service that has no ready endpoints,\nimplementations SHOULD return a 503 for requests to that backend instead.\nIf an implementation chooses to do this, all of the above rules for 500 responses\nMUST also apply for responses that return a 503.\n\nSupport: Core for Kubernetes Service\n\nSupport: Extended for Kubernetes ServiceImport\n\nSupport: Implementation-specific for any other resource\n\nSupport for weight: Core",
                        items: {
                          description: "HTTPBackendRef defines how a HTTPRoute forwards a HTTP request.\n\nNote that when a namespace different than the local namespace is specified, a\nReferenceGrant object is required in the referent namespace to allow that\nnamespace's owner to accept the reference. See the ReferenceGrant\ndocumentation for details.\n\n<gateway:experimental:description>\n\nWhen the BackendRef points to a Kubernetes Service, implementations SHOULD\nhonor the appProtocol field if it is set for the target Service Port.\n\nImplementations supporting appProtocol SHOULD recognize the Kubernetes\nStandard Application Protocols defined in KEP-3726.\n\nIf a Service appProtocol isn't specified, an implementation MAY infer the\nbackend protocol through its own means. Implementations MAY infer the\nprotocol from the Route type referring to the backend Service.\n\nIf a Route is not able to send traffic to the backend using the specified\nprotocol then the backend is considered invalid. Implementations MUST set the\n\"ResolvedRefs\" condition to \"False\" with the \"UnsupportedProtocol\" reason.\n\n</gateway:experimental:description>",
                          properties: {
                            filters: {
                              description: "Filters defined at this level should be executed if and only if the\nrequest is being forwarded to the backend defined here.\n\nSupport: Implementation-specific (For broader support of filters, use the\nFilters field in HTTPRouteRule.)",
                              items: {
                                description: "HTTPRouteFilter defines processing steps that must be completed during the\nrequest or response lifecycle. HTTPRouteFilters are meant as an extension\npoint to express processing that may be done in Gateway implementations. Some\nexamples include request or response modification, implementing\nauthentication strategies, rate-limiting, and traffic shaping. API\nguarantee/conformance is defined based on the type of the filter.",
                                properties: {
                                  extensionRef: {
                                    description: "ExtensionRef is an optional, implementation-specific extension to the\n\"filter\" behavior.  For example, resource \"myroutefilter\" in group\n\"networking.example.net\"). ExtensionRef MUST NOT be used for core and\nextended filters.\n\nThis filter can be used multiple times within the same rule.\n\nSupport: Implementation-specific",
                                    properties: {
                                      group: {
                                        description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                                        maxLength: 253,
                                        pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                        type: "string"
                                      },
                                      kind: {
                                        description: "Kind is kind of the referent. For example \"HTTPRoute\" or \"Service\".",
                                        maxLength: 63,
                                        minLength: 1,
                                        pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                        type: "string"
                                      },
                                      name: {
                                        description: "Name is the name of the referent.",
                                        maxLength: 253,
                                        minLength: 1,
                                        type: "string"
                                      }
                                    },
                                    required: ["group", "kind", "name"],
                                    type: "object"
                                  },
                                  requestHeaderModifier: {
                                    description: "RequestHeaderModifier defines a schema for a filter that modifies request\nheaders.\n\nSupport: Core",
                                    properties: {
                                      add: {
                                        description: "Add adds the given header(s) (name, value) to the request\nbefore the action. It appends to any existing values associated\nwith the header name.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  add:\n  - name: \"my-header\"\n    value: \"bar,baz\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: foo,bar,baz",
                                        items: {
                                          description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                          properties: {
                                            name: {
                                              description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                              maxLength: 256,
                                              minLength: 1,
                                              pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                              type: "string"
                                            },
                                            value: {
                                              description: "Value is the value of HTTP Header to be matched.",
                                              maxLength: 4096,
                                              minLength: 1,
                                              type: "string"
                                            }
                                          },
                                          required: ["name", "value"],
                                          type: "object"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-map-keys": ["name"],
                                        "x-kubernetes-list-type": "map"
                                      },
                                      remove: {
                                        description: "Remove the given header(s) from the HTTP request before the action. The\nvalue of Remove is a list of HTTP header names. Note that the header\nnames are case-insensitive (see\nhttps://datatracker.ietf.org/doc/html/rfc2616#section-4.2).\n\nInput:\n  GET /foo HTTP/1.1\n  my-header1: foo\n  my-header2: bar\n  my-header3: baz\n\nConfig:\n  remove: [\"my-header1\", \"my-header3\"]\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header2: bar",
                                        items: {
                                          type: "string"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-type": "set"
                                      },
                                      set: {
                                        description: "Set overwrites the request with the given header (name, value)\nbefore the action.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  set:\n  - name: \"my-header\"\n    value: \"bar\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: bar",
                                        items: {
                                          description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                          properties: {
                                            name: {
                                              description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                              maxLength: 256,
                                              minLength: 1,
                                              pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                              type: "string"
                                            },
                                            value: {
                                              description: "Value is the value of HTTP Header to be matched.",
                                              maxLength: 4096,
                                              minLength: 1,
                                              type: "string"
                                            }
                                          },
                                          required: ["name", "value"],
                                          type: "object"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-map-keys": ["name"],
                                        "x-kubernetes-list-type": "map"
                                      }
                                    },
                                    type: "object"
                                  },
                                  requestMirror: {
                                    description: "RequestMirror defines a schema for a filter that mirrors requests.\nRequests are sent to the specified destination, but responses from\nthat destination are ignored.\n\nThis filter can be used multiple times within the same rule. Note that\nnot all implementations will be able to support mirroring to multiple\nbackends.\n\nSupport: Extended\n\n",
                                    properties: {
                                      backendRef: {
                                        description: "BackendRef references a resource where mirrored requests are sent.\n\nMirrored requests must be sent only to a single destination endpoint\nwithin this BackendRef, irrespective of how many endpoints are present\nwithin this BackendRef.\n\nIf the referent cannot be found, this BackendRef is invalid and must be\ndropped from the Gateway. The controller must ensure the \"ResolvedRefs\"\ncondition on the Route status is set to `status: False` and not configure\nthis backend in the underlying implementation.\n\nIf there is a cross-namespace reference to an *existing* object\nthat is not allowed by a ReferenceGrant, the controller must ensure the\n\"ResolvedRefs\"  condition on the Route is set to `status: False`,\nwith the \"RefNotPermitted\" reason and not configure this backend in the\nunderlying implementation.\n\nIn either error case, the Message of the `ResolvedRefs` Condition\nshould be used to provide more detail about the problem.\n\nSupport: Extended for Kubernetes Service\n\nSupport: Implementation-specific for any other resource",
                                        properties: {
                                          group: {
                                            default: "",
                                            description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                                            maxLength: 253,
                                            pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                            type: "string"
                                          },
                                          kind: {
                                            default: "Service",
                                            description: "Kind is the Kubernetes resource kind of the referent. For example\n\"Service\".\n\nDefaults to \"Service\" when not specified.\n\nExternalName services can refer to CNAME DNS records that may live\noutside of the cluster and as such are difficult to reason about in\nterms of conformance. They also may not be safe to forward to (see\nCVE-2021-25740 for more information). Implementations SHOULD NOT\nsupport ExternalName Services.\n\nSupport: Core (Services with a type other than ExternalName)\n\nSupport: Implementation-specific (Services with type ExternalName)",
                                            maxLength: 63,
                                            minLength: 1,
                                            pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                            type: "string"
                                          },
                                          name: {
                                            description: "Name is the name of the referent.",
                                            maxLength: 253,
                                            minLength: 1,
                                            type: "string"
                                          },
                                          namespace: {
                                            description: "Namespace is the namespace of the backend. When unspecified, the local\nnamespace is inferred.\n\nNote that when a namespace different than the local namespace is specified,\na ReferenceGrant object is required in the referent namespace to allow that\nnamespace's owner to accept the reference. See the ReferenceGrant\ndocumentation for details.\n\nSupport: Core",
                                            maxLength: 63,
                                            minLength: 1,
                                            pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                                            type: "string"
                                          },
                                          port: {
                                            description: "Port specifies the destination port number to use for this resource.\nPort is required when the referent is a Kubernetes Service. In this\ncase, the port number is the service port number, not the target port.\nFor other resources, destination port might be derived from the referent\nresource or this field.",
                                            format: "int32",
                                            maximum: 65535,
                                            minimum: 1,
                                            type: "integer"
                                          }
                                        },
                                        required: ["name"],
                                        type: "object",
                                        "x-kubernetes-validations": [{
                                          message: "Must have port for Service reference",
                                          rule: "(size(self.group) == 0 && self.kind == 'Service') ? has(self.port) : true"
                                        }]
                                      }
                                    },
                                    required: ["backendRef"],
                                    type: "object"
                                  },
                                  requestRedirect: {
                                    description: "RequestRedirect defines a schema for a filter that responds to the\nrequest with an HTTP redirection.\n\nSupport: Core",
                                    properties: {
                                      hostname: {
                                        description: "Hostname is the hostname to be used in the value of the `Location`\nheader in the response.\nWhen empty, the hostname in the `Host` header of the request is used.\n\nSupport: Core",
                                        maxLength: 253,
                                        minLength: 1,
                                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                        type: "string"
                                      },
                                      path: {
                                        description: "Path defines parameters used to modify the path of the incoming request.\nThe modified path is then used to construct the `Location` header. When\nempty, the request path is used as-is.\n\nSupport: Extended",
                                        properties: {
                                          replaceFullPath: {
                                            description: "ReplaceFullPath specifies the value with which to replace the full path\nof a request during a rewrite or redirect.",
                                            maxLength: 1024,
                                            type: "string"
                                          },
                                          replacePrefixMatch: {
                                            description: "ReplacePrefixMatch specifies the value with which to replace the prefix\nmatch of a request during a rewrite or redirect. For example, a request\nto \"/foo/bar\" with a prefix match of \"/foo\" and a ReplacePrefixMatch\nof \"/xyz\" would be modified to \"/xyz/bar\".\n\nNote that this matches the behavior of the PathPrefix match type. This\nmatches full path elements. A path element refers to the list of labels\nin the path split by the `/` separator. When specified, a trailing `/` is\nignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all\nmatch the prefix `/abc`, but the path `/abcd` would not.\n\nReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.\nUsing any other HTTPRouteMatch type on the same HTTPRouteRule will result in\nthe implementation setting the Accepted Condition for the Route to `status: False`.\n\nRequest Path | Prefix Match | Replace Prefix | Modified Path",
                                            maxLength: 1024,
                                            type: "string"
                                          },
                                          type: {
                                            description: "Type defines the type of path modifier. Additional types may be\nadded in a future release of the API.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.",
                                            enum: ["ReplaceFullPath", "ReplacePrefixMatch"],
                                            type: "string"
                                          }
                                        },
                                        required: ["type"],
                                        type: "object",
                                        "x-kubernetes-validations": [{
                                          message: "replaceFullPath must be specified when type is set to 'ReplaceFullPath'",
                                          rule: "self.type == 'ReplaceFullPath' ? has(self.replaceFullPath) : true"
                                        }, {
                                          message: "type must be 'ReplaceFullPath' when replaceFullPath is set",
                                          rule: "has(self.replaceFullPath) ? self.type == 'ReplaceFullPath' : true"
                                        }, {
                                          message: "replacePrefixMatch must be specified when type is set to 'ReplacePrefixMatch'",
                                          rule: "self.type == 'ReplacePrefixMatch' ? has(self.replacePrefixMatch) : true"
                                        }, {
                                          message: "type must be 'ReplacePrefixMatch' when replacePrefixMatch is set",
                                          rule: "has(self.replacePrefixMatch) ? self.type == 'ReplacePrefixMatch' : true"
                                        }]
                                      },
                                      port: {
                                        description: "Port is the port to be used in the value of the `Location`\nheader in the response.\n\nIf no port is specified, the redirect port MUST be derived using the\nfollowing rules:\n\n* If redirect scheme is not-empty, the redirect port MUST be the well-known\n  port associated with the redirect scheme. Specifically \"http\" to port 80\n  and \"https\" to port 443. If the redirect scheme does not have a\n  well-known port, the listener port of the Gateway SHOULD be used.\n* If redirect scheme is empty, the redirect port MUST be the Gateway\n  Listener port.\n\nImplementations SHOULD NOT add the port number in the 'Location'\nheader in the following cases:\n\n* A Location header that will use HTTP (whether that is determined via\n  the Listener protocol or the Scheme field) _and_ use port 80.\n* A Location header that will use HTTPS (whether that is determined via\n  the Listener protocol or the Scheme field) _and_ use port 443.\n\nSupport: Extended",
                                        format: "int32",
                                        maximum: 65535,
                                        minimum: 1,
                                        type: "integer"
                                      },
                                      scheme: {
                                        description: "Scheme is the scheme to be used in the value of the `Location` header in\nthe response. When empty, the scheme of the request is used.\n\nScheme redirects can affect the port of the redirect, for more information,\nrefer to the documentation for the port field of this filter.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.\n\nSupport: Extended",
                                        enum: ["http", "https"],
                                        type: "string"
                                      },
                                      statusCode: {
                                        default: 302,
                                        description: "StatusCode is the HTTP status code to be used in response.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.\n\nSupport: Core",
                                        enum: [301, 302],
                                        type: "integer"
                                      }
                                    },
                                    type: "object"
                                  },
                                  responseHeaderModifier: {
                                    description: "ResponseHeaderModifier defines a schema for a filter that modifies response\nheaders.\n\nSupport: Extended",
                                    properties: {
                                      add: {
                                        description: "Add adds the given header(s) (name, value) to the request\nbefore the action. It appends to any existing values associated\nwith the header name.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  add:\n  - name: \"my-header\"\n    value: \"bar,baz\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: foo,bar,baz",
                                        items: {
                                          description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                          properties: {
                                            name: {
                                              description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                              maxLength: 256,
                                              minLength: 1,
                                              pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                              type: "string"
                                            },
                                            value: {
                                              description: "Value is the value of HTTP Header to be matched.",
                                              maxLength: 4096,
                                              minLength: 1,
                                              type: "string"
                                            }
                                          },
                                          required: ["name", "value"],
                                          type: "object"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-map-keys": ["name"],
                                        "x-kubernetes-list-type": "map"
                                      },
                                      remove: {
                                        description: "Remove the given header(s) from the HTTP request before the action. The\nvalue of Remove is a list of HTTP header names. Note that the header\nnames are case-insensitive (see\nhttps://datatracker.ietf.org/doc/html/rfc2616#section-4.2).\n\nInput:\n  GET /foo HTTP/1.1\n  my-header1: foo\n  my-header2: bar\n  my-header3: baz\n\nConfig:\n  remove: [\"my-header1\", \"my-header3\"]\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header2: bar",
                                        items: {
                                          type: "string"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-type": "set"
                                      },
                                      set: {
                                        description: "Set overwrites the request with the given header (name, value)\nbefore the action.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  set:\n  - name: \"my-header\"\n    value: \"bar\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: bar",
                                        items: {
                                          description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                          properties: {
                                            name: {
                                              description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                              maxLength: 256,
                                              minLength: 1,
                                              pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                              type: "string"
                                            },
                                            value: {
                                              description: "Value is the value of HTTP Header to be matched.",
                                              maxLength: 4096,
                                              minLength: 1,
                                              type: "string"
                                            }
                                          },
                                          required: ["name", "value"],
                                          type: "object"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-map-keys": ["name"],
                                        "x-kubernetes-list-type": "map"
                                      }
                                    },
                                    type: "object"
                                  },
                                  type: {
                                    description: "Type identifies the type of filter to apply. As with other API fields,\ntypes are classified into three conformance levels:\n\n- Core: Filter types and their corresponding configuration defined by\n  \"Support: Core\" in this package, e.g. \"RequestHeaderModifier\". All\n  implementations must support core filters.\n\n- Extended: Filter types and their corresponding configuration defined by\n  \"Support: Extended\" in this package, e.g. \"RequestMirror\". Implementers\n  are encouraged to support extended filters.\n\n- Implementation-specific: Filters that are defined and supported by\n  specific vendors.\n  In the future, filters showing convergence in behavior across multiple\n  implementations will be considered for inclusion in extended or core\n  conformance levels. Filter-specific configuration for such filters\n  is specified using the ExtensionRef field. `Type` should be set to\n  \"ExtensionRef\" for custom filters.\n\nImplementers are encouraged to define custom implementation types to\nextend the core API with implementation-specific behavior.\n\nIf a reference to a custom filter type cannot be resolved, the filter\nMUST NOT be skipped. Instead, requests that would have been processed by\nthat filter MUST receive a HTTP error response.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.",
                                    enum: ["RequestHeaderModifier", "ResponseHeaderModifier", "RequestMirror", "RequestRedirect", "URLRewrite", "ExtensionRef"],
                                    type: "string"
                                  },
                                  urlRewrite: {
                                    description: "URLRewrite defines a schema for a filter that modifies a request during forwarding.\n\nSupport: Extended",
                                    properties: {
                                      hostname: {
                                        description: "Hostname is the value to be used to replace the Host header value during\nforwarding.\n\nSupport: Extended",
                                        maxLength: 253,
                                        minLength: 1,
                                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                        type: "string"
                                      },
                                      path: {
                                        description: "Path defines a path rewrite.\n\nSupport: Extended",
                                        properties: {
                                          replaceFullPath: {
                                            description: "ReplaceFullPath specifies the value with which to replace the full path\nof a request during a rewrite or redirect.",
                                            maxLength: 1024,
                                            type: "string"
                                          },
                                          replacePrefixMatch: {
                                            description: "ReplacePrefixMatch specifies the value with which to replace the prefix\nmatch of a request during a rewrite or redirect. For example, a request\nto \"/foo/bar\" with a prefix match of \"/foo\" and a ReplacePrefixMatch\nof \"/xyz\" would be modified to \"/xyz/bar\".\n\nNote that this matches the behavior of the PathPrefix match type. This\nmatches full path elements. A path element refers to the list of labels\nin the path split by the `/` separator. When specified, a trailing `/` is\nignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all\nmatch the prefix `/abc`, but the path `/abcd` would not.\n\nReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.\nUsing any other HTTPRouteMatch type on the same HTTPRouteRule will result in\nthe implementation setting the Accepted Condition for the Route to `status: False`.\n\nRequest Path | Prefix Match | Replace Prefix | Modified Path",
                                            maxLength: 1024,
                                            type: "string"
                                          },
                                          type: {
                                            description: "Type defines the type of path modifier. Additional types may be\nadded in a future release of the API.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.",
                                            enum: ["ReplaceFullPath", "ReplacePrefixMatch"],
                                            type: "string"
                                          }
                                        },
                                        required: ["type"],
                                        type: "object",
                                        "x-kubernetes-validations": [{
                                          message: "replaceFullPath must be specified when type is set to 'ReplaceFullPath'",
                                          rule: "self.type == 'ReplaceFullPath' ? has(self.replaceFullPath) : true"
                                        }, {
                                          message: "type must be 'ReplaceFullPath' when replaceFullPath is set",
                                          rule: "has(self.replaceFullPath) ? self.type == 'ReplaceFullPath' : true"
                                        }, {
                                          message: "replacePrefixMatch must be specified when type is set to 'ReplacePrefixMatch'",
                                          rule: "self.type == 'ReplacePrefixMatch' ? has(self.replacePrefixMatch) : true"
                                        }, {
                                          message: "type must be 'ReplacePrefixMatch' when replacePrefixMatch is set",
                                          rule: "has(self.replacePrefixMatch) ? self.type == 'ReplacePrefixMatch' : true"
                                        }]
                                      }
                                    },
                                    type: "object"
                                  }
                                },
                                required: ["type"],
                                type: "object",
                                "x-kubernetes-validations": [{
                                  message: "filter.requestHeaderModifier must be nil if the filter.type is not RequestHeaderModifier",
                                  rule: "!(has(self.requestHeaderModifier) && self.type != 'RequestHeaderModifier')"
                                }, {
                                  message: "filter.requestHeaderModifier must be specified for RequestHeaderModifier filter.type",
                                  rule: "!(!has(self.requestHeaderModifier) && self.type == 'RequestHeaderModifier')"
                                }, {
                                  message: "filter.responseHeaderModifier must be nil if the filter.type is not ResponseHeaderModifier",
                                  rule: "!(has(self.responseHeaderModifier) && self.type != 'ResponseHeaderModifier')"
                                }, {
                                  message: "filter.responseHeaderModifier must be specified for ResponseHeaderModifier filter.type",
                                  rule: "!(!has(self.responseHeaderModifier) && self.type == 'ResponseHeaderModifier')"
                                }, {
                                  message: "filter.requestMirror must be nil if the filter.type is not RequestMirror",
                                  rule: "!(has(self.requestMirror) && self.type != 'RequestMirror')"
                                }, {
                                  message: "filter.requestMirror must be specified for RequestMirror filter.type",
                                  rule: "!(!has(self.requestMirror) && self.type == 'RequestMirror')"
                                }, {
                                  message: "filter.requestRedirect must be nil if the filter.type is not RequestRedirect",
                                  rule: "!(has(self.requestRedirect) && self.type != 'RequestRedirect')"
                                }, {
                                  message: "filter.requestRedirect must be specified for RequestRedirect filter.type",
                                  rule: "!(!has(self.requestRedirect) && self.type == 'RequestRedirect')"
                                }, {
                                  message: "filter.urlRewrite must be nil if the filter.type is not URLRewrite",
                                  rule: "!(has(self.urlRewrite) && self.type != 'URLRewrite')"
                                }, {
                                  message: "filter.urlRewrite must be specified for URLRewrite filter.type",
                                  rule: "!(!has(self.urlRewrite) && self.type == 'URLRewrite')"
                                }, {
                                  message: "filter.extensionRef must be nil if the filter.type is not ExtensionRef",
                                  rule: "!(has(self.extensionRef) && self.type != 'ExtensionRef')"
                                }, {
                                  message: "filter.extensionRef must be specified for ExtensionRef filter.type",
                                  rule: "!(!has(self.extensionRef) && self.type == 'ExtensionRef')"
                                }]
                              },
                              maxItems: 16,
                              type: "array",
                              "x-kubernetes-validations": [{
                                message: "May specify either httpRouteFilterRequestRedirect or httpRouteFilterRequestRewrite, but not both",
                                rule: "!(self.exists(f, f.type == 'RequestRedirect') && self.exists(f, f.type == 'URLRewrite'))"
                              }, {
                                message: "May specify either httpRouteFilterRequestRedirect or httpRouteFilterRequestRewrite, but not both",
                                rule: "!(self.exists(f, f.type == 'RequestRedirect') && self.exists(f, f.type == 'URLRewrite'))"
                              }, {
                                message: "RequestHeaderModifier filter cannot be repeated",
                                rule: "self.filter(f, f.type == 'RequestHeaderModifier').size() <= 1"
                              }, {
                                message: "ResponseHeaderModifier filter cannot be repeated",
                                rule: "self.filter(f, f.type == 'ResponseHeaderModifier').size() <= 1"
                              }, {
                                message: "RequestRedirect filter cannot be repeated",
                                rule: "self.filter(f, f.type == 'RequestRedirect').size() <= 1"
                              }, {
                                message: "URLRewrite filter cannot be repeated",
                                rule: "self.filter(f, f.type == 'URLRewrite').size() <= 1"
                              }]
                            },
                            group: {
                              default: "",
                              description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                              maxLength: 253,
                              pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                              type: "string"
                            },
                            kind: {
                              default: "Service",
                              description: "Kind is the Kubernetes resource kind of the referent. For example\n\"Service\".\n\nDefaults to \"Service\" when not specified.\n\nExternalName services can refer to CNAME DNS records that may live\noutside of the cluster and as such are difficult to reason about in\nterms of conformance. They also may not be safe to forward to (see\nCVE-2021-25740 for more information). Implementations SHOULD NOT\nsupport ExternalName Services.\n\nSupport: Core (Services with a type other than ExternalName)\n\nSupport: Implementation-specific (Services with type ExternalName)",
                              maxLength: 63,
                              minLength: 1,
                              pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                              type: "string"
                            },
                            name: {
                              description: "Name is the name of the referent.",
                              maxLength: 253,
                              minLength: 1,
                              type: "string"
                            },
                            namespace: {
                              description: "Namespace is the namespace of the backend. When unspecified, the local\nnamespace is inferred.\n\nNote that when a namespace different than the local namespace is specified,\na ReferenceGrant object is required in the referent namespace to allow that\nnamespace's owner to accept the reference. See the ReferenceGrant\ndocumentation for details.\n\nSupport: Core",
                              maxLength: 63,
                              minLength: 1,
                              pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                              type: "string"
                            },
                            port: {
                              description: "Port specifies the destination port number to use for this resource.\nPort is required when the referent is a Kubernetes Service. In this\ncase, the port number is the service port number, not the target port.\nFor other resources, destination port might be derived from the referent\nresource or this field.",
                              format: "int32",
                              maximum: 65535,
                              minimum: 1,
                              type: "integer"
                            },
                            weight: {
                              default: 1,
                              description: "Weight specifies the proportion of requests forwarded to the referenced\nbackend. This is computed as weight/(sum of all weights in this\nBackendRefs list). For non-zero values, there may be some epsilon from\nthe exact proportion defined here depending on the precision an\nimplementation supports. Weight is not a percentage and the sum of\nweights does not need to equal 100.\n\nIf only one backend is specified and it has a weight greater than 0, 100%\nof the traffic is forwarded to that backend. If weight is set to 0, no\ntraffic should be forwarded for this entry. If unspecified, weight\ndefaults to 1.\n\nSupport for this field varies based on the context where used.",
                              format: "int32",
                              maximum: 1000000,
                              minimum: 0,
                              type: "integer"
                            }
                          },
                          required: ["name"],
                          type: "object",
                          "x-kubernetes-validations": [{
                            message: "Must have port for Service reference",
                            rule: "(size(self.group) == 0 && self.kind == 'Service') ? has(self.port) : true"
                          }]
                        },
                        maxItems: 16,
                        type: "array"
                      },
                      filters: {
                        description: "Filters define the filters that are applied to requests that match\nthis rule.\n\nWherever possible, implementations SHOULD implement filters in the order\nthey are specified.\n\nImplementations MAY choose to implement this ordering strictly, rejecting\nany combination or order of filters that can not be supported. If implementations\nchoose a strict interpretation of filter ordering, they MUST clearly document\nthat behavior.\n\nTo reject an invalid combination or order of filters, implementations SHOULD\nconsider the Route Rules with this configuration invalid. If all Route Rules\nin a Route are invalid, the entire Route would be considered invalid. If only\na portion of Route Rules are invalid, implementations MUST set the\n\"PartiallyInvalid\" condition for the Route.\n\nConformance-levels at this level are defined based on the type of filter:\n\n- ALL core filters MUST be supported by all implementations.\n- Implementers are encouraged to support extended filters.\n- Implementation-specific custom filters have no API guarantees across\n  implementations.\n\nSpecifying the same filter multiple times is not supported unless explicitly\nindicated in the filter.\n\nAll filters are expected to be compatible with each other except for the\nURLRewrite and RequestRedirect filters, which may not be combined. If an\nimplementation can not support other combinations of filters, they must clearly\ndocument that limitation. In cases where incompatible or unsupported\nfilters are specified and cause the `Accepted` condition to be set to status\n`False`, implementations may use the `IncompatibleFilters` reason to specify\nthis configuration error.\n\nSupport: Core",
                        items: {
                          description: "HTTPRouteFilter defines processing steps that must be completed during the\nrequest or response lifecycle. HTTPRouteFilters are meant as an extension\npoint to express processing that may be done in Gateway implementations. Some\nexamples include request or response modification, implementing\nauthentication strategies, rate-limiting, and traffic shaping. API\nguarantee/conformance is defined based on the type of the filter.",
                          properties: {
                            extensionRef: {
                              description: "ExtensionRef is an optional, implementation-specific extension to the\n\"filter\" behavior.  For example, resource \"myroutefilter\" in group\n\"networking.example.net\"). ExtensionRef MUST NOT be used for core and\nextended filters.\n\nThis filter can be used multiple times within the same rule.\n\nSupport: Implementation-specific",
                              properties: {
                                group: {
                                  description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                                  maxLength: 253,
                                  pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                  type: "string"
                                },
                                kind: {
                                  description: "Kind is kind of the referent. For example \"HTTPRoute\" or \"Service\".",
                                  maxLength: 63,
                                  minLength: 1,
                                  pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                  type: "string"
                                },
                                name: {
                                  description: "Name is the name of the referent.",
                                  maxLength: 253,
                                  minLength: 1,
                                  type: "string"
                                }
                              },
                              required: ["group", "kind", "name"],
                              type: "object"
                            },
                            requestHeaderModifier: {
                              description: "RequestHeaderModifier defines a schema for a filter that modifies request\nheaders.\n\nSupport: Core",
                              properties: {
                                add: {
                                  description: "Add adds the given header(s) (name, value) to the request\nbefore the action. It appends to any existing values associated\nwith the header name.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  add:\n  - name: \"my-header\"\n    value: \"bar,baz\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: foo,bar,baz",
                                  items: {
                                    description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                    properties: {
                                      name: {
                                        description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                        maxLength: 256,
                                        minLength: 1,
                                        pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                        type: "string"
                                      },
                                      value: {
                                        description: "Value is the value of HTTP Header to be matched.",
                                        maxLength: 4096,
                                        minLength: 1,
                                        type: "string"
                                      }
                                    },
                                    required: ["name", "value"],
                                    type: "object"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-map-keys": ["name"],
                                  "x-kubernetes-list-type": "map"
                                },
                                remove: {
                                  description: "Remove the given header(s) from the HTTP request before the action. The\nvalue of Remove is a list of HTTP header names. Note that the header\nnames are case-insensitive (see\nhttps://datatracker.ietf.org/doc/html/rfc2616#section-4.2).\n\nInput:\n  GET /foo HTTP/1.1\n  my-header1: foo\n  my-header2: bar\n  my-header3: baz\n\nConfig:\n  remove: [\"my-header1\", \"my-header3\"]\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header2: bar",
                                  items: {
                                    type: "string"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-type": "set"
                                },
                                set: {
                                  description: "Set overwrites the request with the given header (name, value)\nbefore the action.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  set:\n  - name: \"my-header\"\n    value: \"bar\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: bar",
                                  items: {
                                    description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                    properties: {
                                      name: {
                                        description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                        maxLength: 256,
                                        minLength: 1,
                                        pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                        type: "string"
                                      },
                                      value: {
                                        description: "Value is the value of HTTP Header to be matched.",
                                        maxLength: 4096,
                                        minLength: 1,
                                        type: "string"
                                      }
                                    },
                                    required: ["name", "value"],
                                    type: "object"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-map-keys": ["name"],
                                  "x-kubernetes-list-type": "map"
                                }
                              },
                              type: "object"
                            },
                            requestMirror: {
                              description: "RequestMirror defines a schema for a filter that mirrors requests.\nRequests are sent to the specified destination, but responses from\nthat destination are ignored.\n\nThis filter can be used multiple times within the same rule. Note that\nnot all implementations will be able to support mirroring to multiple\nbackends.\n\nSupport: Extended\n\n",
                              properties: {
                                backendRef: {
                                  description: "BackendRef references a resource where mirrored requests are sent.\n\nMirrored requests must be sent only to a single destination endpoint\nwithin this BackendRef, irrespective of how many endpoints are present\nwithin this BackendRef.\n\nIf the referent cannot be found, this BackendRef is invalid and must be\ndropped from the Gateway. The controller must ensure the \"ResolvedRefs\"\ncondition on the Route status is set to `status: False` and not configure\nthis backend in the underlying implementation.\n\nIf there is a cross-namespace reference to an *existing* object\nthat is not allowed by a ReferenceGrant, the controller must ensure the\n\"ResolvedRefs\"  condition on the Route is set to `status: False`,\nwith the \"RefNotPermitted\" reason and not configure this backend in the\nunderlying implementation.\n\nIn either error case, the Message of the `ResolvedRefs` Condition\nshould be used to provide more detail about the problem.\n\nSupport: Extended for Kubernetes Service\n\nSupport: Implementation-specific for any other resource",
                                  properties: {
                                    group: {
                                      default: "",
                                      description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                                      maxLength: 253,
                                      pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                      type: "string"
                                    },
                                    kind: {
                                      default: "Service",
                                      description: "Kind is the Kubernetes resource kind of the referent. For example\n\"Service\".\n\nDefaults to \"Service\" when not specified.\n\nExternalName services can refer to CNAME DNS records that may live\noutside of the cluster and as such are difficult to reason about in\nterms of conformance. They also may not be safe to forward to (see\nCVE-2021-25740 for more information). Implementations SHOULD NOT\nsupport ExternalName Services.\n\nSupport: Core (Services with a type other than ExternalName)\n\nSupport: Implementation-specific (Services with type ExternalName)",
                                      maxLength: 63,
                                      minLength: 1,
                                      pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                      type: "string"
                                    },
                                    name: {
                                      description: "Name is the name of the referent.",
                                      maxLength: 253,
                                      minLength: 1,
                                      type: "string"
                                    },
                                    namespace: {
                                      description: "Namespace is the namespace of the backend. When unspecified, the local\nnamespace is inferred.\n\nNote that when a namespace different than the local namespace is specified,\na ReferenceGrant object is required in the referent namespace to allow that\nnamespace's owner to accept the reference. See the ReferenceGrant\ndocumentation for details.\n\nSupport: Core",
                                      maxLength: 63,
                                      minLength: 1,
                                      pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                                      type: "string"
                                    },
                                    port: {
                                      description: "Port specifies the destination port number to use for this resource.\nPort is required when the referent is a Kubernetes Service. In this\ncase, the port number is the service port number, not the target port.\nFor other resources, destination port might be derived from the referent\nresource or this field.",
                                      format: "int32",
                                      maximum: 65535,
                                      minimum: 1,
                                      type: "integer"
                                    }
                                  },
                                  required: ["name"],
                                  type: "object",
                                  "x-kubernetes-validations": [{
                                    message: "Must have port for Service reference",
                                    rule: "(size(self.group) == 0 && self.kind == 'Service') ? has(self.port) : true"
                                  }]
                                }
                              },
                              required: ["backendRef"],
                              type: "object"
                            },
                            requestRedirect: {
                              description: "RequestRedirect defines a schema for a filter that responds to the\nrequest with an HTTP redirection.\n\nSupport: Core",
                              properties: {
                                hostname: {
                                  description: "Hostname is the hostname to be used in the value of the `Location`\nheader in the response.\nWhen empty, the hostname in the `Host` header of the request is used.\n\nSupport: Core",
                                  maxLength: 253,
                                  minLength: 1,
                                  pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                  type: "string"
                                },
                                path: {
                                  description: "Path defines parameters used to modify the path of the incoming request.\nThe modified path is then used to construct the `Location` header. When\nempty, the request path is used as-is.\n\nSupport: Extended",
                                  properties: {
                                    replaceFullPath: {
                                      description: "ReplaceFullPath specifies the value with which to replace the full path\nof a request during a rewrite or redirect.",
                                      maxLength: 1024,
                                      type: "string"
                                    },
                                    replacePrefixMatch: {
                                      description: "ReplacePrefixMatch specifies the value with which to replace the prefix\nmatch of a request during a rewrite or redirect. For example, a request\nto \"/foo/bar\" with a prefix match of \"/foo\" and a ReplacePrefixMatch\nof \"/xyz\" would be modified to \"/xyz/bar\".\n\nNote that this matches the behavior of the PathPrefix match type. This\nmatches full path elements. A path element refers to the list of labels\nin the path split by the `/` separator. When specified, a trailing `/` is\nignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all\nmatch the prefix `/abc`, but the path `/abcd` would not.\n\nReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.\nUsing any other HTTPRouteMatch type on the same HTTPRouteRule will result in\nthe implementation setting the Accepted Condition for the Route to `status: False`.\n\nRequest Path | Prefix Match | Replace Prefix | Modified Path",
                                      maxLength: 1024,
                                      type: "string"
                                    },
                                    type: {
                                      description: "Type defines the type of path modifier. Additional types may be\nadded in a future release of the API.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.",
                                      enum: ["ReplaceFullPath", "ReplacePrefixMatch"],
                                      type: "string"
                                    }
                                  },
                                  required: ["type"],
                                  type: "object",
                                  "x-kubernetes-validations": [{
                                    message: "replaceFullPath must be specified when type is set to 'ReplaceFullPath'",
                                    rule: "self.type == 'ReplaceFullPath' ? has(self.replaceFullPath) : true"
                                  }, {
                                    message: "type must be 'ReplaceFullPath' when replaceFullPath is set",
                                    rule: "has(self.replaceFullPath) ? self.type == 'ReplaceFullPath' : true"
                                  }, {
                                    message: "replacePrefixMatch must be specified when type is set to 'ReplacePrefixMatch'",
                                    rule: "self.type == 'ReplacePrefixMatch' ? has(self.replacePrefixMatch) : true"
                                  }, {
                                    message: "type must be 'ReplacePrefixMatch' when replacePrefixMatch is set",
                                    rule: "has(self.replacePrefixMatch) ? self.type == 'ReplacePrefixMatch' : true"
                                  }]
                                },
                                port: {
                                  description: "Port is the port to be used in the value of the `Location`\nheader in the response.\n\nIf no port is specified, the redirect port MUST be derived using the\nfollowing rules:\n\n* If redirect scheme is not-empty, the redirect port MUST be the well-known\n  port associated with the redirect scheme. Specifically \"http\" to port 80\n  and \"https\" to port 443. If the redirect scheme does not have a\n  well-known port, the listener port of the Gateway SHOULD be used.\n* If redirect scheme is empty, the redirect port MUST be the Gateway\n  Listener port.\n\nImplementations SHOULD NOT add the port number in the 'Location'\nheader in the following cases:\n\n* A Location header that will use HTTP (whether that is determined via\n  the Listener protocol or the Scheme field) _and_ use port 80.\n* A Location header that will use HTTPS (whether that is determined via\n  the Listener protocol or the Scheme field) _and_ use port 443.\n\nSupport: Extended",
                                  format: "int32",
                                  maximum: 65535,
                                  minimum: 1,
                                  type: "integer"
                                },
                                scheme: {
                                  description: "Scheme is the scheme to be used in the value of the `Location` header in\nthe response. When empty, the scheme of the request is used.\n\nScheme redirects can affect the port of the redirect, for more information,\nrefer to the documentation for the port field of this filter.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.\n\nSupport: Extended",
                                  enum: ["http", "https"],
                                  type: "string"
                                },
                                statusCode: {
                                  default: 302,
                                  description: "StatusCode is the HTTP status code to be used in response.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.\n\nSupport: Core",
                                  enum: [301, 302],
                                  type: "integer"
                                }
                              },
                              type: "object"
                            },
                            responseHeaderModifier: {
                              description: "ResponseHeaderModifier defines a schema for a filter that modifies response\nheaders.\n\nSupport: Extended",
                              properties: {
                                add: {
                                  description: "Add adds the given header(s) (name, value) to the request\nbefore the action. It appends to any existing values associated\nwith the header name.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  add:\n  - name: \"my-header\"\n    value: \"bar,baz\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: foo,bar,baz",
                                  items: {
                                    description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                    properties: {
                                      name: {
                                        description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                        maxLength: 256,
                                        minLength: 1,
                                        pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                        type: "string"
                                      },
                                      value: {
                                        description: "Value is the value of HTTP Header to be matched.",
                                        maxLength: 4096,
                                        minLength: 1,
                                        type: "string"
                                      }
                                    },
                                    required: ["name", "value"],
                                    type: "object"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-map-keys": ["name"],
                                  "x-kubernetes-list-type": "map"
                                },
                                remove: {
                                  description: "Remove the given header(s) from the HTTP request before the action. The\nvalue of Remove is a list of HTTP header names. Note that the header\nnames are case-insensitive (see\nhttps://datatracker.ietf.org/doc/html/rfc2616#section-4.2).\n\nInput:\n  GET /foo HTTP/1.1\n  my-header1: foo\n  my-header2: bar\n  my-header3: baz\n\nConfig:\n  remove: [\"my-header1\", \"my-header3\"]\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header2: bar",
                                  items: {
                                    type: "string"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-type": "set"
                                },
                                set: {
                                  description: "Set overwrites the request with the given header (name, value)\nbefore the action.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  set:\n  - name: \"my-header\"\n    value: \"bar\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: bar",
                                  items: {
                                    description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                    properties: {
                                      name: {
                                        description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                        maxLength: 256,
                                        minLength: 1,
                                        pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                        type: "string"
                                      },
                                      value: {
                                        description: "Value is the value of HTTP Header to be matched.",
                                        maxLength: 4096,
                                        minLength: 1,
                                        type: "string"
                                      }
                                    },
                                    required: ["name", "value"],
                                    type: "object"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-map-keys": ["name"],
                                  "x-kubernetes-list-type": "map"
                                }
                              },
                              type: "object"
                            },
                            type: {
                              description: "Type identifies the type of filter to apply. As with other API fields,\ntypes are classified into three conformance levels:\n\n- Core: Filter types and their corresponding configuration defined by\n  \"Support: Core\" in this package, e.g. \"RequestHeaderModifier\". All\n  implementations must support core filters.\n\n- Extended: Filter types and their corresponding configuration defined by\n  \"Support: Extended\" in this package, e.g. \"RequestMirror\". Implementers\n  are encouraged to support extended filters.\n\n- Implementation-specific: Filters that are defined and supported by\n  specific vendors.\n  In the future, filters showing convergence in behavior across multiple\n  implementations will be considered for inclusion in extended or core\n  conformance levels. Filter-specific configuration for such filters\n  is specified using the ExtensionRef field. `Type` should be set to\n  \"ExtensionRef\" for custom filters.\n\nImplementers are encouraged to define custom implementation types to\nextend the core API with implementation-specific behavior.\n\nIf a reference to a custom filter type cannot be resolved, the filter\nMUST NOT be skipped. Instead, requests that would have been processed by\nthat filter MUST receive a HTTP error response.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.",
                              enum: ["RequestHeaderModifier", "ResponseHeaderModifier", "RequestMirror", "RequestRedirect", "URLRewrite", "ExtensionRef"],
                              type: "string"
                            },
                            urlRewrite: {
                              description: "URLRewrite defines a schema for a filter that modifies a request during forwarding.\n\nSupport: Extended",
                              properties: {
                                hostname: {
                                  description: "Hostname is the value to be used to replace the Host header value during\nforwarding.\n\nSupport: Extended",
                                  maxLength: 253,
                                  minLength: 1,
                                  pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                  type: "string"
                                },
                                path: {
                                  description: "Path defines a path rewrite.\n\nSupport: Extended",
                                  properties: {
                                    replaceFullPath: {
                                      description: "ReplaceFullPath specifies the value with which to replace the full path\nof a request during a rewrite or redirect.",
                                      maxLength: 1024,
                                      type: "string"
                                    },
                                    replacePrefixMatch: {
                                      description: "ReplacePrefixMatch specifies the value with which to replace the prefix\nmatch of a request during a rewrite or redirect. For example, a request\nto \"/foo/bar\" with a prefix match of \"/foo\" and a ReplacePrefixMatch\nof \"/xyz\" would be modified to \"/xyz/bar\".\n\nNote that this matches the behavior of the PathPrefix match type. This\nmatches full path elements. A path element refers to the list of labels\nin the path split by the `/` separator. When specified, a trailing `/` is\nignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all\nmatch the prefix `/abc`, but the path `/abcd` would not.\n\nReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.\nUsing any other HTTPRouteMatch type on the same HTTPRouteRule will result in\nthe implementation setting the Accepted Condition for the Route to `status: False`.\n\nRequest Path | Prefix Match | Replace Prefix | Modified Path",
                                      maxLength: 1024,
                                      type: "string"
                                    },
                                    type: {
                                      description: "Type defines the type of path modifier. Additional types may be\nadded in a future release of the API.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.",
                                      enum: ["ReplaceFullPath", "ReplacePrefixMatch"],
                                      type: "string"
                                    }
                                  },
                                  required: ["type"],
                                  type: "object",
                                  "x-kubernetes-validations": [{
                                    message: "replaceFullPath must be specified when type is set to 'ReplaceFullPath'",
                                    rule: "self.type == 'ReplaceFullPath' ? has(self.replaceFullPath) : true"
                                  }, {
                                    message: "type must be 'ReplaceFullPath' when replaceFullPath is set",
                                    rule: "has(self.replaceFullPath) ? self.type == 'ReplaceFullPath' : true"
                                  }, {
                                    message: "replacePrefixMatch must be specified when type is set to 'ReplacePrefixMatch'",
                                    rule: "self.type == 'ReplacePrefixMatch' ? has(self.replacePrefixMatch) : true"
                                  }, {
                                    message: "type must be 'ReplacePrefixMatch' when replacePrefixMatch is set",
                                    rule: "has(self.replacePrefixMatch) ? self.type == 'ReplacePrefixMatch' : true"
                                  }]
                                }
                              },
                              type: "object"
                            }
                          },
                          required: ["type"],
                          type: "object",
                          "x-kubernetes-validations": [{
                            message: "filter.requestHeaderModifier must be nil if the filter.type is not RequestHeaderModifier",
                            rule: "!(has(self.requestHeaderModifier) && self.type != 'RequestHeaderModifier')"
                          }, {
                            message: "filter.requestHeaderModifier must be specified for RequestHeaderModifier filter.type",
                            rule: "!(!has(self.requestHeaderModifier) && self.type == 'RequestHeaderModifier')"
                          }, {
                            message: "filter.responseHeaderModifier must be nil if the filter.type is not ResponseHeaderModifier",
                            rule: "!(has(self.responseHeaderModifier) && self.type != 'ResponseHeaderModifier')"
                          }, {
                            message: "filter.responseHeaderModifier must be specified for ResponseHeaderModifier filter.type",
                            rule: "!(!has(self.responseHeaderModifier) && self.type == 'ResponseHeaderModifier')"
                          }, {
                            message: "filter.requestMirror must be nil if the filter.type is not RequestMirror",
                            rule: "!(has(self.requestMirror) && self.type != 'RequestMirror')"
                          }, {
                            message: "filter.requestMirror must be specified for RequestMirror filter.type",
                            rule: "!(!has(self.requestMirror) && self.type == 'RequestMirror')"
                          }, {
                            message: "filter.requestRedirect must be nil if the filter.type is not RequestRedirect",
                            rule: "!(has(self.requestRedirect) && self.type != 'RequestRedirect')"
                          }, {
                            message: "filter.requestRedirect must be specified for RequestRedirect filter.type",
                            rule: "!(!has(self.requestRedirect) && self.type == 'RequestRedirect')"
                          }, {
                            message: "filter.urlRewrite must be nil if the filter.type is not URLRewrite",
                            rule: "!(has(self.urlRewrite) && self.type != 'URLRewrite')"
                          }, {
                            message: "filter.urlRewrite must be specified for URLRewrite filter.type",
                            rule: "!(!has(self.urlRewrite) && self.type == 'URLRewrite')"
                          }, {
                            message: "filter.extensionRef must be nil if the filter.type is not ExtensionRef",
                            rule: "!(has(self.extensionRef) && self.type != 'ExtensionRef')"
                          }, {
                            message: "filter.extensionRef must be specified for ExtensionRef filter.type",
                            rule: "!(!has(self.extensionRef) && self.type == 'ExtensionRef')"
                          }]
                        },
                        maxItems: 16,
                        type: "array",
                        "x-kubernetes-validations": [{
                          message: "May specify either httpRouteFilterRequestRedirect or httpRouteFilterRequestRewrite, but not both",
                          rule: "!(self.exists(f, f.type == 'RequestRedirect') && self.exists(f, f.type == 'URLRewrite'))"
                        }, {
                          message: "RequestHeaderModifier filter cannot be repeated",
                          rule: "self.filter(f, f.type == 'RequestHeaderModifier').size() <= 1"
                        }, {
                          message: "ResponseHeaderModifier filter cannot be repeated",
                          rule: "self.filter(f, f.type == 'ResponseHeaderModifier').size() <= 1"
                        }, {
                          message: "RequestRedirect filter cannot be repeated",
                          rule: "self.filter(f, f.type == 'RequestRedirect').size() <= 1"
                        }, {
                          message: "URLRewrite filter cannot be repeated",
                          rule: "self.filter(f, f.type == 'URLRewrite').size() <= 1"
                        }]
                      },
                      matches: {
                        default: [{
                          path: {
                            type: "PathPrefix",
                            value: "/"
                          }
                        }],
                        description: "Matches define conditions used for matching the rule against incoming\nHTTP requests. Each match is independent, i.e. this rule will be matched\nif **any** one of the matches is satisfied.\n\nFor example, take the following matches configuration:\n\n```\nmatches:\n- path:\n    value: \"/foo\"\n  headers:\n  - name: \"version\"\n    value: \"v2\"\n- path:\n    value: \"/v2/foo\"\n```\n\nFor a request to match against this rule, a request must satisfy\nEITHER of the two conditions:\n\n- path prefixed with `/foo` AND contains the header `version: v2`\n- path prefix of `/v2/foo`\n\nSee the documentation for HTTPRouteMatch on how to specify multiple\nmatch conditions that should be ANDed together.\n\nIf no matches are specified, the default is a prefix\npath match on \"/\", which has the effect of matching every\nHTTP request.\n\nProxy or Load Balancer routing configuration generated from HTTPRoutes\nMUST prioritize matches based on the following criteria, continuing on\nties. Across all rules specified on applicable Routes, precedence must be\ngiven to the match having:\n\n* \"Exact\" path match.\n* \"Prefix\" path match with largest number of characters.\n* Method match.\n* Largest number of header matches.\n* Largest number of query param matches.\n\nNote: The precedence of RegularExpression path matches are implementation-specific.\n\nIf ties still exist across multiple Routes, matching precedence MUST be\ndetermined in order of the following criteria, continuing on ties:\n\n* The oldest Route based on creation timestamp.\n* The Route appearing first in alphabetical order by\n  \"{namespace}/{name}\".\n\nIf ties still exist within an HTTPRoute, matching precedence MUST be granted\nto the FIRST matching rule (in list order) with a match meeting the above\ncriteria.\n\nWhen no rules matching a request have been successfully attached to the\nparent a request is coming from, a HTTP 404 status code MUST be returned.",
                        items: {
                          description: "HTTPRouteMatch defines the predicate used to match requests to a given\naction. Multiple match types are ANDed together, i.e. the match will\nevaluate to true only if all conditions are satisfied.\n\nFor example, the match below will match a HTTP request only if its path\nstarts with `/foo` AND it contains the `version: v1` header:\n\n```\nmatch:\n\n\tpath:\n\t  value: \"/foo\"\n\theaders:\n\t- name: \"version\"\n\t  value \"v1\"\n\n```",
                          properties: {
                            headers: {
                              description: "Headers specifies HTTP request header matchers. Multiple match values are\nANDed together, meaning, a request must match all the specified headers\nto select the route.",
                              items: {
                                description: "HTTPHeaderMatch describes how to select a HTTP route by matching HTTP request\nheaders.",
                                properties: {
                                  name: {
                                    description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, only the first\nentry with an equivalent name MUST be considered for a match. Subsequent\nentries with an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.\n\nWhen a header is repeated in an HTTP request, it is\nimplementation-specific behavior as to how this is represented.\nGenerally, proxies should follow the guidance from the RFC:\nhttps://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.2 regarding\nprocessing a repeated header, with special handling for \"Set-Cookie\".",
                                    maxLength: 256,
                                    minLength: 1,
                                    pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                    type: "string"
                                  },
                                  type: {
                                    default: "Exact",
                                    description: "Type specifies how to match against the value of the header.\n\nSupport: Core (Exact)\n\nSupport: Implementation-specific (RegularExpression)\n\nSince RegularExpression HeaderMatchType has implementation-specific\nconformance, implementations can support POSIX, PCRE or any other dialects\nof regular expressions. Please read the implementation's documentation to\ndetermine the supported dialect.",
                                    enum: ["Exact", "RegularExpression"],
                                    type: "string"
                                  },
                                  value: {
                                    description: "Value is the value of HTTP Header to be matched.",
                                    maxLength: 4096,
                                    minLength: 1,
                                    type: "string"
                                  }
                                },
                                required: ["name", "value"],
                                type: "object"
                              },
                              maxItems: 16,
                              type: "array",
                              "x-kubernetes-list-map-keys": ["name"],
                              "x-kubernetes-list-type": "map"
                            },
                            method: {
                              description: "Method specifies HTTP method matcher.\nWhen specified, this route will be matched only if the request has the\nspecified method.\n\nSupport: Extended",
                              enum: ["GET", "HEAD", "POST", "PUT", "DELETE", "CONNECT", "OPTIONS", "TRACE", "PATCH"],
                              type: "string"
                            },
                            path: {
                              default: {
                                type: "PathPrefix",
                                value: "/"
                              },
                              description: "Path specifies a HTTP request path matcher. If this field is not\nspecified, a default prefix match on the \"/\" path is provided.",
                              properties: {
                                type: {
                                  default: "PathPrefix",
                                  description: "Type specifies how to match against the path Value.\n\nSupport: Core (Exact, PathPrefix)\n\nSupport: Implementation-specific (RegularExpression)",
                                  enum: ["Exact", "PathPrefix", "RegularExpression"],
                                  type: "string"
                                },
                                value: {
                                  default: "/",
                                  description: "Value of the HTTP path to match against.",
                                  maxLength: 1024,
                                  type: "string"
                                }
                              },
                              type: "object",
                              "x-kubernetes-validations": [{
                                message: "value must be an absolute path and start with '/' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? self.value.startsWith('/') : true"
                              }, {
                                message: "must not contain '//' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.contains('//') : true"
                              }, {
                                message: "must not contain '/./' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.contains('/./') : true"
                              }, {
                                message: "must not contain '/../' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.contains('/../') : true"
                              }, {
                                message: "must not contain '%2f' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.contains('%2f') : true"
                              }, {
                                message: "must not contain '%2F' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.contains('%2F') : true"
                              }, {
                                message: "must not contain '#' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.contains('#') : true"
                              }, {
                                message: "must not end with '/..' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.endsWith('/..') : true"
                              }, {
                                message: "must not end with '/.' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.endsWith('/.') : true"
                              }, {
                                message: "type must be one of ['Exact', 'PathPrefix', 'RegularExpression']",
                                rule: "self.type in ['Exact','PathPrefix'] || self.type == 'RegularExpression'"
                              }, {
                                message: "must only contain valid characters (matching ^(?:[-A-Za-z0-9/._~!$&'()*+,;=:@]|[%][0-9a-fA-F]{2})+$) for types ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? self.value.matches(r\"\"\"^(?:[-A-Za-z0-9/._~!$&'()*+,;=:@]|[%][0-9a-fA-F]{2})+$\"\"\") : true"
                              }]
                            },
                            queryParams: {
                              description: "QueryParams specifies HTTP query parameter matchers. Multiple match\nvalues are ANDed together, meaning, a request must match all the\nspecified query parameters to select the route.\n\nSupport: Extended",
                              items: {
                                description: "HTTPQueryParamMatch describes how to select a HTTP route by matching HTTP\nquery parameters.",
                                properties: {
                                  name: {
                                    description: "Name is the name of the HTTP query param to be matched. This must be an\nexact string match. (See\nhttps://tools.ietf.org/html/rfc7230#section-2.7.3).\n\nIf multiple entries specify equivalent query param names, only the first\nentry with an equivalent name MUST be considered for a match. Subsequent\nentries with an equivalent query param name MUST be ignored.\n\nIf a query param is repeated in an HTTP request, the behavior is\npurposely left undefined, since different data planes have different\ncapabilities. However, it is *recommended* that implementations should\nmatch against the first value of the param if the data plane supports it,\nas this behavior is expected in other load balancing contexts outside of\nthe Gateway API.\n\nUsers SHOULD NOT route traffic based on repeated query params to guard\nthemselves against potential differences in the implementations.",
                                    maxLength: 256,
                                    minLength: 1,
                                    pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                    type: "string"
                                  },
                                  type: {
                                    default: "Exact",
                                    description: "Type specifies how to match against the value of the query parameter.\n\nSupport: Extended (Exact)\n\nSupport: Implementation-specific (RegularExpression)\n\nSince RegularExpression QueryParamMatchType has Implementation-specific\nconformance, implementations can support POSIX, PCRE or any other\ndialects of regular expressions. Please read the implementation's\ndocumentation to determine the supported dialect.",
                                    enum: ["Exact", "RegularExpression"],
                                    type: "string"
                                  },
                                  value: {
                                    description: "Value is the value of HTTP query param to be matched.",
                                    maxLength: 1024,
                                    minLength: 1,
                                    type: "string"
                                  }
                                },
                                required: ["name", "value"],
                                type: "object"
                              },
                              maxItems: 16,
                              type: "array",
                              "x-kubernetes-list-map-keys": ["name"],
                              "x-kubernetes-list-type": "map"
                            }
                          },
                          type: "object"
                        },
                        maxItems: 64,
                        type: "array"
                      },
                      timeouts: {
                        description: "Timeouts defines the timeouts that can be configured for an HTTP request.\n\nSupport: Extended",
                        properties: {
                          backendRequest: {
                            description: "BackendRequest specifies a timeout for an individual request from the gateway\nto a backend. This covers the time from when the request first starts being\nsent from the gateway to when the full response has been received from the backend.\n\nSetting a timeout to the zero duration (e.g. \"0s\") SHOULD disable the timeout\ncompletely. Implementations that cannot completely disable the timeout MUST\ninstead interpret the zero duration as the longest possible value to which\nthe timeout can be set.\n\nAn entire client HTTP transaction with a gateway, covered by the Request timeout,\nmay result in more than one call from the gateway to the destination backend,\nfor example, if automatic retries are supported.\n\nThe value of BackendRequest must be a Gateway API Duration string as defined by\nGEP-2257.  When this field is unspecified, its behavior is implementation-specific;\nwhen specified, the value of BackendRequest must be no more than the value of the\nRequest timeout (since the Request timeout encompasses the BackendRequest timeout).\n\nSupport: Extended",
                            pattern: "^([0-9]{1,5}(h|m|s|ms)){1,4}$",
                            type: "string"
                          },
                          request: {
                            description: "Request specifies the maximum duration for a gateway to respond to an HTTP request.\nIf the gateway has not been able to respond before this deadline is met, the gateway\nMUST return a timeout error.\n\nFor example, setting the `rules.timeouts.request` field to the value `10s` in an\n`HTTPRoute` will cause a timeout if a client request is taking longer than 10 seconds\nto complete.\n\nSetting a timeout to the zero duration (e.g. \"0s\") SHOULD disable the timeout\ncompletely. Implementations that cannot completely disable the timeout MUST\ninstead interpret the zero duration as the longest possible value to which\nthe timeout can be set.\n\nThis timeout is intended to cover as close to the whole request-response transaction\nas possible although an implementation MAY choose to start the timeout after the entire\nrequest stream has been received instead of immediately after the transaction is\ninitiated by the client.\n\nThe value of Request is a Gateway API Duration string as defined by GEP-2257. When this\nfield is unspecified, request timeout behavior is implementation-specific.\n\nSupport: Extended",
                            pattern: "^([0-9]{1,5}(h|m|s|ms)){1,4}$",
                            type: "string"
                          }
                        },
                        type: "object",
                        "x-kubernetes-validations": [{
                          message: "backendRequest timeout cannot be longer than request timeout",
                          rule: "!(has(self.request) && has(self.backendRequest) && duration(self.request) != duration('0s') && duration(self.backendRequest) > duration(self.request))"
                        }]
                      }
                    },
                    type: "object",
                    "x-kubernetes-validations": [{
                      message: "RequestRedirect filter must not be used together with backendRefs",
                      rule: "(has(self.backendRefs) && size(self.backendRefs) > 0) ? (!has(self.filters) || self.filters.all(f, !has(f.requestRedirect))): true"
                    }, {
                      message: "When using RequestRedirect filter with path.replacePrefixMatch, exactly one PathPrefix match must be specified",
                      rule: "(has(self.filters) && self.filters.exists_one(f, has(f.requestRedirect) && has(f.requestRedirect.path) && f.requestRedirect.path.type == 'ReplacePrefixMatch' && has(f.requestRedirect.path.replacePrefixMatch))) ? ((size(self.matches) != 1 || !has(self.matches[0].path) || self.matches[0].path.type != 'PathPrefix') ? false : true) : true"
                    }, {
                      message: "When using URLRewrite filter with path.replacePrefixMatch, exactly one PathPrefix match must be specified",
                      rule: "(has(self.filters) && self.filters.exists_one(f, has(f.urlRewrite) && has(f.urlRewrite.path) && f.urlRewrite.path.type == 'ReplacePrefixMatch' && has(f.urlRewrite.path.replacePrefixMatch))) ? ((size(self.matches) != 1 || !has(self.matches[0].path) || self.matches[0].path.type != 'PathPrefix') ? false : true) : true"
                    }, {
                      message: "Within backendRefs, when using RequestRedirect filter with path.replacePrefixMatch, exactly one PathPrefix match must be specified",
                      rule: "(has(self.backendRefs) && self.backendRefs.exists_one(b, (has(b.filters) && b.filters.exists_one(f, has(f.requestRedirect) && has(f.requestRedirect.path) && f.requestRedirect.path.type == 'ReplacePrefixMatch' && has(f.requestRedirect.path.replacePrefixMatch))) )) ? ((size(self.matches) != 1 || !has(self.matches[0].path) || self.matches[0].path.type != 'PathPrefix') ? false : true) : true"
                    }, {
                      message: "Within backendRefs, When using URLRewrite filter with path.replacePrefixMatch, exactly one PathPrefix match must be specified",
                      rule: "(has(self.backendRefs) && self.backendRefs.exists_one(b, (has(b.filters) && b.filters.exists_one(f, has(f.urlRewrite) && has(f.urlRewrite.path) && f.urlRewrite.path.type == 'ReplacePrefixMatch' && has(f.urlRewrite.path.replacePrefixMatch))) )) ? ((size(self.matches) != 1 || !has(self.matches[0].path) || self.matches[0].path.type != 'PathPrefix') ? false : true) : true"
                    }]
                  },
                  maxItems: 16,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "While 16 rules and 64 matches per rule are allowed, the total number of matches across all rules in a route must be less than 128",
                    rule: "(self.size() > 0 ? self[0].matches.size() : 0) + (self.size() > 1 ? self[1].matches.size() : 0) + (self.size() > 2 ? self[2].matches.size() : 0) + (self.size() > 3 ? self[3].matches.size() : 0) + (self.size() > 4 ? self[4].matches.size() : 0) + (self.size() > 5 ? self[5].matches.size() : 0) + (self.size() > 6 ? self[6].matches.size() : 0) + (self.size() > 7 ? self[7].matches.size() : 0) + (self.size() > 8 ? self[8].matches.size() : 0) + (self.size() > 9 ? self[9].matches.size() : 0) + (self.size() > 10 ? self[10].matches.size() : 0) + (self.size() > 11 ? self[11].matches.size() : 0) + (self.size() > 12 ? self[12].matches.size() : 0) + (self.size() > 13 ? self[13].matches.size() : 0) + (self.size() > 14 ? self[14].matches.size() : 0) + (self.size() > 15 ? self[15].matches.size() : 0) <= 128"
                  }]
                }
              },
              type: "object"
            },
            status: {
              description: "Status defines the current state of HTTPRoute.",
              properties: {
                parents: {
                  description: "Parents is a list of parent resources (usually Gateways) that are\nassociated with the route, and the status of the route with respect to\neach parent. When this route attaches to a parent, the controller that\nmanages the parent must add an entry to this list when the controller\nfirst sees the route and should update the entry as appropriate when the\nroute or gateway is modified.\n\nNote that parent references that cannot be resolved by an implementation\nof this API will not be added to this list. Implementations of this API\ncan only populate Route status for the Gateways/parent resources they are\nresponsible for.\n\nA maximum of 32 Gateways will be represented in this list. An empty list\nmeans the route has not been attached to any Gateway.",
                  items: {
                    description: "RouteParentStatus describes the status of a route with respect to an\nassociated Parent.",
                    properties: {
                      conditions: {
                        description: "Conditions describes the status of the route with respect to the Gateway.\nNote that the route's availability is also subject to the Gateway's own\nstatus conditions and listener status.\n\nIf the Route's ParentRef specifies an existing Gateway that supports\nRoutes of this kind AND that Gateway's controller has sufficient access,\nthen that Gateway's controller MUST set the \"Accepted\" condition on the\nRoute, to indicate whether the route has been accepted or rejected by the\nGateway, and why.\n\nA Route MUST be considered \"Accepted\" if at least one of the Route's\nrules is implemented by the Gateway.\n\nThere are a number of cases where the \"Accepted\" condition may not be set\ndue to lack of controller visibility, that includes when:\n\n* The Route refers to a non-existent parent.\n* The Route is of a type that the controller does not support.\n* The Route is in a namespace the controller does not have access to.",
                        items: {
                          description: "Condition contains details for one aspect of the current state of this API Resource.",
                          properties: {
                            lastTransitionTime: {
                              description: "lastTransitionTime is the last time the condition transitioned from one status to another.\nThis should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.",
                              format: "date-time",
                              type: "string"
                            },
                            message: {
                              description: "message is a human readable message indicating details about the transition.\nThis may be an empty string.",
                              maxLength: 32768,
                              type: "string"
                            },
                            observedGeneration: {
                              description: "observedGeneration represents the .metadata.generation that the condition was set based upon.\nFor instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date\nwith respect to the current state of the instance.",
                              format: "int64",
                              minimum: 0,
                              type: "integer"
                            },
                            reason: {
                              description: "reason contains a programmatic identifier indicating the reason for the condition's last transition.\nProducers of specific condition types may define expected values and meanings for this field,\nand whether the values are considered a guaranteed API.\nThe value should be a CamelCase string.\nThis field may not be empty.",
                              maxLength: 1024,
                              minLength: 1,
                              pattern: "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$",
                              type: "string"
                            },
                            status: {
                              description: "status of the condition, one of True, False, Unknown.",
                              enum: ["True", "False", "Unknown"],
                              type: "string"
                            },
                            type: {
                              description: "type of condition in CamelCase or in foo.example.com/CamelCase.",
                              maxLength: 316,
                              pattern: "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$",
                              type: "string"
                            }
                          },
                          required: ["lastTransitionTime", "message", "reason", "status", "type"],
                          type: "object"
                        },
                        maxItems: 8,
                        minItems: 1,
                        type: "array",
                        "x-kubernetes-list-map-keys": ["type"],
                        "x-kubernetes-list-type": "map"
                      },
                      controllerName: {
                        description: "ControllerName is a domain/path string that indicates the name of the\ncontroller that wrote this status. This corresponds with the\ncontrollerName field on GatewayClass.\n\nExample: \"example.net/gateway-controller\".\n\nThe format of this field is DOMAIN \"/\" PATH, where DOMAIN and PATH are\nvalid Kubernetes names\n(https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).\n\nControllers MUST populate this field when writing status. Controllers should ensure that\nentries to status populated with their ControllerName are cleaned up when they are no\nlonger necessary.",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*\\/[A-Za-z0-9\\/\\-._~%!$&'()*+,;=:]+$",
                        type: "string"
                      },
                      parentRef: {
                        description: "ParentRef corresponds with a ParentRef in the spec that this\nRouteParentStatus struct describes the status of.",
                        properties: {
                          group: {
                            default: "gateway.networking.k8s.io",
                            description: "Group is the group of the referent.\nWhen unspecified, \"gateway.networking.k8s.io\" is inferred.\nTo set the core API group (such as for a \"Service\" kind referent),\nGroup must be explicitly set to \"\" (empty string).\n\nSupport: Core",
                            maxLength: 253,
                            pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                            type: "string"
                          },
                          kind: {
                            default: "Gateway",
                            description: "Kind is kind of the referent.\n\nThere are two kinds of parent resources with \"Core\" support:\n\n* Gateway (Gateway conformance profile)\n* Service (Mesh conformance profile, ClusterIP Services only)\n\nSupport for other resources is Implementation-Specific.",
                            maxLength: 63,
                            minLength: 1,
                            pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                            type: "string"
                          },
                          name: {
                            description: "Name is the name of the referent.\n\nSupport: Core",
                            maxLength: 253,
                            minLength: 1,
                            type: "string"
                          },
                          namespace: {
                            description: "Namespace is the namespace of the referent. When unspecified, this refers\nto the local namespace of the Route.\n\nNote that there are specific rules for ParentRefs which cross namespace\nboundaries. Cross-namespace references are only valid if they are explicitly\nallowed by something in the namespace they are referring to. For example:\nGateway has the AllowedRoutes field, and ReferenceGrant provides a\ngeneric way to enable any other kind of cross-namespace reference.\n\n\n\nSupport: Core",
                            maxLength: 63,
                            minLength: 1,
                            pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                            type: "string"
                          },
                          port: {
                            description: "Port is the network port this Route targets. It can be interpreted\ndifferently based on the type of parent resource.\n\nWhen the parent resource is a Gateway, this targets all listeners\nlistening on the specified port that also support this kind of Route(and\nselect this Route). It's not recommended to set `Port` unless the\nnetworking behaviors specified in a Route must apply to a specific port\nas opposed to a listener(s) whose port(s) may be changed. When both Port\nand SectionName are specified, the name and port of the selected listener\nmust match both specified values.\n\n\n\nImplementations MAY choose to support other parent resources.\nImplementations supporting other types of parent resources MUST clearly\ndocument how/if Port is interpreted.\n\nFor the purpose of status, an attachment is considered successful as\nlong as the parent resource accepts it partially. For example, Gateway\nlisteners can restrict which Routes can attach to them by Route kind,\nnamespace, or hostname. If 1 of 2 Gateway listeners accept attachment\nfrom the referencing Route, the Route MUST be considered successfully\nattached. If no Gateway listeners accept attachment from this Route,\nthe Route MUST be considered detached from the Gateway.\n\nSupport: Extended",
                            format: "int32",
                            maximum: 65535,
                            minimum: 1,
                            type: "integer"
                          },
                          sectionName: {
                            description: "SectionName is the name of a section within the target resource. In the\nfollowing resources, SectionName is interpreted as the following:\n\n* Gateway: Listener name. When both Port (experimental) and SectionName\nare specified, the name and port of the selected listener must match\nboth specified values.\n* Service: Port name. When both Port (experimental) and SectionName\nare specified, the name and port of the selected listener must match\nboth specified values.\n\nImplementations MAY choose to support attaching Routes to other resources.\nIf that is the case, they MUST clearly document how SectionName is\ninterpreted.\n\nWhen unspecified (empty string), this will reference the entire resource.\nFor the purpose of status, an attachment is considered successful if at\nleast one section in the parent resource accepts it. For example, Gateway\nlisteners can restrict which Routes can attach to them by Route kind,\nnamespace, or hostname. If 1 of 2 Gateway listeners accept attachment from\nthe referencing Route, the Route MUST be considered successfully\nattached. If no Gateway listeners accept attachment from this Route, the\nRoute MUST be considered detached from the Gateway.\n\nSupport: Core",
                            maxLength: 253,
                            minLength: 1,
                            pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                            type: "string"
                          }
                        },
                        required: ["name"],
                        type: "object"
                      }
                    },
                    required: ["controllerName", "parentRef"],
                    type: "object"
                  },
                  maxItems: 32,
                  type: "array"
                }
              },
              required: ["parents"],
              type: "object"
            }
          },
          required: ["spec"],
          type: "object"
        }
      },
      served: true,
      storage: true,
      subresources: {
        status: {}
      }
    }, {
      additionalPrinterColumns: [{
        jsonPath: ".spec.hostnames",
        name: "Hostnames",
        type: "string"
      }, {
        jsonPath: ".metadata.creationTimestamp",
        name: "Age",
        type: "date"
      }],
      name: "v1beta1",
      schema: {
        openAPIV3Schema: {
          description: "HTTPRoute provides a way to route HTTP requests. This includes the capability\nto match requests by hostname, path, header, or query param. Filters can be\nused to specify additional processing steps. Backends specify where matching\nrequests should be routed.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "Spec defines the desired state of HTTPRoute.",
              properties: {
                hostnames: {
                  description: "Hostnames defines a set of hostnames that should match against the HTTP Host\nheader to select a HTTPRoute used to process the request. Implementations\nMUST ignore any port value specified in the HTTP Host header while\nperforming a match and (absent of any applicable header modification\nconfiguration) MUST forward this header unmodified to the backend.\n\nValid values for Hostnames are determined by RFC 1123 definition of a\nhostname with 2 notable exceptions:\n\n1. IPs are not allowed.\n2. A hostname may be prefixed with a wildcard label (`*.`). The wildcard\n   label must appear by itself as the first label.\n\nIf a hostname is specified by both the Listener and HTTPRoute, there\nmust be at least one intersecting hostname for the HTTPRoute to be\nattached to the Listener. For example:\n\n* A Listener with `test.example.com` as the hostname matches HTTPRoutes\n  that have either not specified any hostnames, or have specified at\n  least one of `test.example.com` or `*.example.com`.\n* A Listener with `*.example.com` as the hostname matches HTTPRoutes\n  that have either not specified any hostnames or have specified at least\n  one hostname that matches the Listener hostname. For example,\n  `*.example.com`, `test.example.com`, and `foo.test.example.com` would\n  all match. On the other hand, `example.com` and `test.example.net` would\n  not match.\n\nHostnames that are prefixed with a wildcard label (`*.`) are interpreted\nas a suffix match. That means that a match for `*.example.com` would match\nboth `test.example.com`, and `foo.test.example.com`, but not `example.com`.\n\nIf both the Listener and HTTPRoute have specified hostnames, any\nHTTPRoute hostnames that do not match the Listener hostname MUST be\nignored. For example, if a Listener specified `*.example.com`, and the\nHTTPRoute specified `test.example.com` and `test.example.net`,\n`test.example.net` must not be considered for a match.\n\nIf both the Listener and HTTPRoute have specified hostnames, and none\nmatch with the criteria above, then the HTTPRoute is not accepted. The\nimplementation must raise an 'Accepted' Condition with a status of\n`False` in the corresponding RouteParentStatus.\n\nIn the event that multiple HTTPRoutes specify intersecting hostnames (e.g.\noverlapping wildcard matching and exact matching hostnames), precedence must\nbe given to rules from the HTTPRoute with the largest number of:\n\n* Characters in a matching non-wildcard hostname.\n* Characters in a matching hostname.\n\nIf ties exist across multiple Routes, the matching precedence rules for\nHTTPRouteMatches takes over.\n\nSupport: Core",
                  items: {
                    description: "Hostname is the fully qualified domain name of a network host. This matches\nthe RFC 1123 definition of a hostname with 2 notable exceptions:\n\n 1. IPs are not allowed.\n 2. A hostname may be prefixed with a wildcard label (`*.`). The wildcard\n    label must appear by itself as the first label.\n\nHostname can be \"precise\" which is a domain name without the terminating\ndot of a network host (e.g. \"foo.example.com\") or \"wildcard\", which is a\ndomain name prefixed with a single wildcard label (e.g. `*.example.com`).\n\nNote that as per RFC1035 and RFC1123, a *label* must consist of lower case\nalphanumeric characters or '-', and must start and end with an alphanumeric\ncharacter. No other punctuation is allowed.",
                    maxLength: 253,
                    minLength: 1,
                    pattern: "^(\\*\\.)?[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                    type: "string"
                  },
                  maxItems: 16,
                  type: "array"
                },
                parentRefs: {
                  description: "ParentRefs references the resources (usually Gateways) that a Route wants\nto be attached to. Note that the referenced parent resource needs to\nallow this for the attachment to be complete. For Gateways, that means\nthe Gateway needs to allow attachment from Routes of this kind and\nnamespace. For Services, that means the Service must either be in the same\nnamespace for a \"producer\" route, or the mesh implementation must support\nand allow \"consumer\" routes for the referenced Service. ReferenceGrant is\nnot applicable for governing ParentRefs to Services - it is not possible to\ncreate a \"producer\" route for a Service in a different namespace from the\nRoute.\n\nThere are two kinds of parent resources with \"Core\" support:\n\n* Gateway (Gateway conformance profile)\n* Service (Mesh conformance profile, ClusterIP Services only)\n\nThis API may be extended in the future to support additional kinds of parent\nresources.\n\nParentRefs must be _distinct_. This means either that:\n\n* They select different objects.  If this is the case, then parentRef\n  entries are distinct. In terms of fields, this means that the\n  multi-part key defined by `group`, `kind`, `namespace`, and `name` must\n  be unique across all parentRef entries in the Route.\n* They do not select different objects, but for each optional field used,\n  each ParentRef that selects the same object must set the same set of\n  optional fields to different values. If one ParentRef sets a\n  combination of optional fields, all must set the same combination.\n\nSome examples:\n\n* If one ParentRef sets `sectionName`, all ParentRefs referencing the\n  same object must also set `sectionName`.\n* If one ParentRef sets `port`, all ParentRefs referencing the same\n  object must also set `port`.\n* If one ParentRef sets `sectionName` and `port`, all ParentRefs\n  referencing the same object must also set `sectionName` and `port`.\n\nIt is possible to separately reference multiple distinct objects that may\nbe collapsed by an implementation. For example, some implementations may\nchoose to merge compatible Gateway Listeners together. If that is the\ncase, the list of routes attached to those resources should also be\nmerged.\n\nNote that for ParentRefs that cross namespace boundaries, there are specific\nrules. Cross-namespace references are only valid if they are explicitly\nallowed by something in the namespace they are referring to. For example,\nGateway has the AllowedRoutes field, and ReferenceGrant provides a\ngeneric way to enable other kinds of cross-namespace reference.\n\n\n\n\n\n\n",
                  items: {
                    description: "ParentReference identifies an API object (usually a Gateway) that can be considered\na parent of this resource (usually a route). There are two kinds of parent resources\nwith \"Core\" support:\n\n* Gateway (Gateway conformance profile)\n* Service (Mesh conformance profile, ClusterIP Services only)\n\nThis API may be extended in the future to support additional kinds of parent\nresources.\n\nThe API object must be valid in the cluster; the Group and Kind must\nbe registered in the cluster for this reference to be valid.",
                    properties: {
                      group: {
                        default: "gateway.networking.k8s.io",
                        description: "Group is the group of the referent.\nWhen unspecified, \"gateway.networking.k8s.io\" is inferred.\nTo set the core API group (such as for a \"Service\" kind referent),\nGroup must be explicitly set to \"\" (empty string).\n\nSupport: Core",
                        maxLength: 253,
                        pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                        type: "string"
                      },
                      kind: {
                        default: "Gateway",
                        description: "Kind is kind of the referent.\n\nThere are two kinds of parent resources with \"Core\" support:\n\n* Gateway (Gateway conformance profile)\n* Service (Mesh conformance profile, ClusterIP Services only)\n\nSupport for other resources is Implementation-Specific.",
                        maxLength: 63,
                        minLength: 1,
                        pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                        type: "string"
                      },
                      name: {
                        description: "Name is the name of the referent.\n\nSupport: Core",
                        maxLength: 253,
                        minLength: 1,
                        type: "string"
                      },
                      namespace: {
                        description: "Namespace is the namespace of the referent. When unspecified, this refers\nto the local namespace of the Route.\n\nNote that there are specific rules for ParentRefs which cross namespace\nboundaries. Cross-namespace references are only valid if they are explicitly\nallowed by something in the namespace they are referring to. For example:\nGateway has the AllowedRoutes field, and ReferenceGrant provides a\ngeneric way to enable any other kind of cross-namespace reference.\n\n\n\nSupport: Core",
                        maxLength: 63,
                        minLength: 1,
                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                        type: "string"
                      },
                      port: {
                        description: "Port is the network port this Route targets. It can be interpreted\ndifferently based on the type of parent resource.\n\nWhen the parent resource is a Gateway, this targets all listeners\nlistening on the specified port that also support this kind of Route(and\nselect this Route). It's not recommended to set `Port` unless the\nnetworking behaviors specified in a Route must apply to a specific port\nas opposed to a listener(s) whose port(s) may be changed. When both Port\nand SectionName are specified, the name and port of the selected listener\nmust match both specified values.\n\n\n\nImplementations MAY choose to support other parent resources.\nImplementations supporting other types of parent resources MUST clearly\ndocument how/if Port is interpreted.\n\nFor the purpose of status, an attachment is considered successful as\nlong as the parent resource accepts it partially. For example, Gateway\nlisteners can restrict which Routes can attach to them by Route kind,\nnamespace, or hostname. If 1 of 2 Gateway listeners accept attachment\nfrom the referencing Route, the Route MUST be considered successfully\nattached. If no Gateway listeners accept attachment from this Route,\nthe Route MUST be considered detached from the Gateway.\n\nSupport: Extended",
                        format: "int32",
                        maximum: 65535,
                        minimum: 1,
                        type: "integer"
                      },
                      sectionName: {
                        description: "SectionName is the name of a section within the target resource. In the\nfollowing resources, SectionName is interpreted as the following:\n\n* Gateway: Listener name. When both Port (experimental) and SectionName\nare specified, the name and port of the selected listener must match\nboth specified values.\n* Service: Port name. When both Port (experimental) and SectionName\nare specified, the name and port of the selected listener must match\nboth specified values.\n\nImplementations MAY choose to support attaching Routes to other resources.\nIf that is the case, they MUST clearly document how SectionName is\ninterpreted.\n\nWhen unspecified (empty string), this will reference the entire resource.\nFor the purpose of status, an attachment is considered successful if at\nleast one section in the parent resource accepts it. For example, Gateway\nlisteners can restrict which Routes can attach to them by Route kind,\nnamespace, or hostname. If 1 of 2 Gateway listeners accept attachment from\nthe referencing Route, the Route MUST be considered successfully\nattached. If no Gateway listeners accept attachment from this Route, the\nRoute MUST be considered detached from the Gateway.\n\nSupport: Core",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                        type: "string"
                      }
                    },
                    required: ["name"],
                    type: "object"
                  },
                  maxItems: 32,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "sectionName must be specified when parentRefs includes 2 or more references to the same parent",
                    rule: "self.all(p1, self.all(p2, p1.group == p2.group && p1.kind == p2.kind && p1.name == p2.name && (((!has(p1.__namespace__) || p1.__namespace__ == '') && (!has(p2.__namespace__) || p2.__namespace__ == '')) || (has(p1.__namespace__) && has(p2.__namespace__) && p1.__namespace__ == p2.__namespace__ )) ? ((!has(p1.sectionName) || p1.sectionName == '') == (!has(p2.sectionName) || p2.sectionName == '')) : true))"
                  }, {
                    message: "sectionName must be unique when parentRefs includes 2 or more references to the same parent",
                    rule: "self.all(p1, self.exists_one(p2, p1.group == p2.group && p1.kind == p2.kind && p1.name == p2.name && (((!has(p1.__namespace__) || p1.__namespace__ == '') && (!has(p2.__namespace__) || p2.__namespace__ == '')) || (has(p1.__namespace__) && has(p2.__namespace__) && p1.__namespace__ == p2.__namespace__ )) && (((!has(p1.sectionName) || p1.sectionName == '') && (!has(p2.sectionName) || p2.sectionName == '')) || (has(p1.sectionName) && has(p2.sectionName) && p1.sectionName == p2.sectionName))))"
                  }]
                },
                rules: {
                  default: [{
                    matches: [{
                      path: {
                        type: "PathPrefix",
                        value: "/"
                      }
                    }]
                  }],
                  description: "Rules are a list of HTTP matchers, filters and actions.\n\n",
                  items: {
                    description: "HTTPRouteRule defines semantics for matching an HTTP request based on\nconditions (matches), processing it (filters), and forwarding the request to\nan API object (backendRefs).",
                    properties: {
                      backendRefs: {
                        description: "BackendRefs defines the backend(s) where matching requests should be\nsent.\n\nFailure behavior here depends on how many BackendRefs are specified and\nhow many are invalid.\n\nIf *all* entries in BackendRefs are invalid, and there are also no filters\nspecified in this route rule, *all* traffic which matches this rule MUST\nreceive a 500 status code.\n\nSee the HTTPBackendRef definition for the rules about what makes a single\nHTTPBackendRef invalid.\n\nWhen a HTTPBackendRef is invalid, 500 status codes MUST be returned for\nrequests that would have otherwise been routed to an invalid backend. If\nmultiple backends are specified, and some are invalid, the proportion of\nrequests that would otherwise have been routed to an invalid backend\nMUST receive a 500 status code.\n\nFor example, if two backends are specified with equal weights, and one is\ninvalid, 50 percent of traffic must receive a 500. Implementations may\nchoose how that 50 percent is determined.\n\nWhen a HTTPBackendRef refers to a Service that has no ready endpoints,\nimplementations SHOULD return a 503 for requests to that backend instead.\nIf an implementation chooses to do this, all of the above rules for 500 responses\nMUST also apply for responses that return a 503.\n\nSupport: Core for Kubernetes Service\n\nSupport: Extended for Kubernetes ServiceImport\n\nSupport: Implementation-specific for any other resource\n\nSupport for weight: Core",
                        items: {
                          description: "HTTPBackendRef defines how a HTTPRoute forwards a HTTP request.\n\nNote that when a namespace different than the local namespace is specified, a\nReferenceGrant object is required in the referent namespace to allow that\nnamespace's owner to accept the reference. See the ReferenceGrant\ndocumentation for details.\n\n<gateway:experimental:description>\n\nWhen the BackendRef points to a Kubernetes Service, implementations SHOULD\nhonor the appProtocol field if it is set for the target Service Port.\n\nImplementations supporting appProtocol SHOULD recognize the Kubernetes\nStandard Application Protocols defined in KEP-3726.\n\nIf a Service appProtocol isn't specified, an implementation MAY infer the\nbackend protocol through its own means. Implementations MAY infer the\nprotocol from the Route type referring to the backend Service.\n\nIf a Route is not able to send traffic to the backend using the specified\nprotocol then the backend is considered invalid. Implementations MUST set the\n\"ResolvedRefs\" condition to \"False\" with the \"UnsupportedProtocol\" reason.\n\n</gateway:experimental:description>",
                          properties: {
                            filters: {
                              description: "Filters defined at this level should be executed if and only if the\nrequest is being forwarded to the backend defined here.\n\nSupport: Implementation-specific (For broader support of filters, use the\nFilters field in HTTPRouteRule.)",
                              items: {
                                description: "HTTPRouteFilter defines processing steps that must be completed during the\nrequest or response lifecycle. HTTPRouteFilters are meant as an extension\npoint to express processing that may be done in Gateway implementations. Some\nexamples include request or response modification, implementing\nauthentication strategies, rate-limiting, and traffic shaping. API\nguarantee/conformance is defined based on the type of the filter.",
                                properties: {
                                  extensionRef: {
                                    description: "ExtensionRef is an optional, implementation-specific extension to the\n\"filter\" behavior.  For example, resource \"myroutefilter\" in group\n\"networking.example.net\"). ExtensionRef MUST NOT be used for core and\nextended filters.\n\nThis filter can be used multiple times within the same rule.\n\nSupport: Implementation-specific",
                                    properties: {
                                      group: {
                                        description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                                        maxLength: 253,
                                        pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                        type: "string"
                                      },
                                      kind: {
                                        description: "Kind is kind of the referent. For example \"HTTPRoute\" or \"Service\".",
                                        maxLength: 63,
                                        minLength: 1,
                                        pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                        type: "string"
                                      },
                                      name: {
                                        description: "Name is the name of the referent.",
                                        maxLength: 253,
                                        minLength: 1,
                                        type: "string"
                                      }
                                    },
                                    required: ["group", "kind", "name"],
                                    type: "object"
                                  },
                                  requestHeaderModifier: {
                                    description: "RequestHeaderModifier defines a schema for a filter that modifies request\nheaders.\n\nSupport: Core",
                                    properties: {
                                      add: {
                                        description: "Add adds the given header(s) (name, value) to the request\nbefore the action. It appends to any existing values associated\nwith the header name.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  add:\n  - name: \"my-header\"\n    value: \"bar,baz\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: foo,bar,baz",
                                        items: {
                                          description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                          properties: {
                                            name: {
                                              description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                              maxLength: 256,
                                              minLength: 1,
                                              pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                              type: "string"
                                            },
                                            value: {
                                              description: "Value is the value of HTTP Header to be matched.",
                                              maxLength: 4096,
                                              minLength: 1,
                                              type: "string"
                                            }
                                          },
                                          required: ["name", "value"],
                                          type: "object"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-map-keys": ["name"],
                                        "x-kubernetes-list-type": "map"
                                      },
                                      remove: {
                                        description: "Remove the given header(s) from the HTTP request before the action. The\nvalue of Remove is a list of HTTP header names. Note that the header\nnames are case-insensitive (see\nhttps://datatracker.ietf.org/doc/html/rfc2616#section-4.2).\n\nInput:\n  GET /foo HTTP/1.1\n  my-header1: foo\n  my-header2: bar\n  my-header3: baz\n\nConfig:\n  remove: [\"my-header1\", \"my-header3\"]\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header2: bar",
                                        items: {
                                          type: "string"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-type": "set"
                                      },
                                      set: {
                                        description: "Set overwrites the request with the given header (name, value)\nbefore the action.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  set:\n  - name: \"my-header\"\n    value: \"bar\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: bar",
                                        items: {
                                          description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                          properties: {
                                            name: {
                                              description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                              maxLength: 256,
                                              minLength: 1,
                                              pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                              type: "string"
                                            },
                                            value: {
                                              description: "Value is the value of HTTP Header to be matched.",
                                              maxLength: 4096,
                                              minLength: 1,
                                              type: "string"
                                            }
                                          },
                                          required: ["name", "value"],
                                          type: "object"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-map-keys": ["name"],
                                        "x-kubernetes-list-type": "map"
                                      }
                                    },
                                    type: "object"
                                  },
                                  requestMirror: {
                                    description: "RequestMirror defines a schema for a filter that mirrors requests.\nRequests are sent to the specified destination, but responses from\nthat destination are ignored.\n\nThis filter can be used multiple times within the same rule. Note that\nnot all implementations will be able to support mirroring to multiple\nbackends.\n\nSupport: Extended\n\n",
                                    properties: {
                                      backendRef: {
                                        description: "BackendRef references a resource where mirrored requests are sent.\n\nMirrored requests must be sent only to a single destination endpoint\nwithin this BackendRef, irrespective of how many endpoints are present\nwithin this BackendRef.\n\nIf the referent cannot be found, this BackendRef is invalid and must be\ndropped from the Gateway. The controller must ensure the \"ResolvedRefs\"\ncondition on the Route status is set to `status: False` and not configure\nthis backend in the underlying implementation.\n\nIf there is a cross-namespace reference to an *existing* object\nthat is not allowed by a ReferenceGrant, the controller must ensure the\n\"ResolvedRefs\"  condition on the Route is set to `status: False`,\nwith the \"RefNotPermitted\" reason and not configure this backend in the\nunderlying implementation.\n\nIn either error case, the Message of the `ResolvedRefs` Condition\nshould be used to provide more detail about the problem.\n\nSupport: Extended for Kubernetes Service\n\nSupport: Implementation-specific for any other resource",
                                        properties: {
                                          group: {
                                            default: "",
                                            description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                                            maxLength: 253,
                                            pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                            type: "string"
                                          },
                                          kind: {
                                            default: "Service",
                                            description: "Kind is the Kubernetes resource kind of the referent. For example\n\"Service\".\n\nDefaults to \"Service\" when not specified.\n\nExternalName services can refer to CNAME DNS records that may live\noutside of the cluster and as such are difficult to reason about in\nterms of conformance. They also may not be safe to forward to (see\nCVE-2021-25740 for more information). Implementations SHOULD NOT\nsupport ExternalName Services.\n\nSupport: Core (Services with a type other than ExternalName)\n\nSupport: Implementation-specific (Services with type ExternalName)",
                                            maxLength: 63,
                                            minLength: 1,
                                            pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                            type: "string"
                                          },
                                          name: {
                                            description: "Name is the name of the referent.",
                                            maxLength: 253,
                                            minLength: 1,
                                            type: "string"
                                          },
                                          namespace: {
                                            description: "Namespace is the namespace of the backend. When unspecified, the local\nnamespace is inferred.\n\nNote that when a namespace different than the local namespace is specified,\na ReferenceGrant object is required in the referent namespace to allow that\nnamespace's owner to accept the reference. See the ReferenceGrant\ndocumentation for details.\n\nSupport: Core",
                                            maxLength: 63,
                                            minLength: 1,
                                            pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                                            type: "string"
                                          },
                                          port: {
                                            description: "Port specifies the destination port number to use for this resource.\nPort is required when the referent is a Kubernetes Service. In this\ncase, the port number is the service port number, not the target port.\nFor other resources, destination port might be derived from the referent\nresource or this field.",
                                            format: "int32",
                                            maximum: 65535,
                                            minimum: 1,
                                            type: "integer"
                                          }
                                        },
                                        required: ["name"],
                                        type: "object",
                                        "x-kubernetes-validations": [{
                                          message: "Must have port for Service reference",
                                          rule: "(size(self.group) == 0 && self.kind == 'Service') ? has(self.port) : true"
                                        }]
                                      }
                                    },
                                    required: ["backendRef"],
                                    type: "object"
                                  },
                                  requestRedirect: {
                                    description: "RequestRedirect defines a schema for a filter that responds to the\nrequest with an HTTP redirection.\n\nSupport: Core",
                                    properties: {
                                      hostname: {
                                        description: "Hostname is the hostname to be used in the value of the `Location`\nheader in the response.\nWhen empty, the hostname in the `Host` header of the request is used.\n\nSupport: Core",
                                        maxLength: 253,
                                        minLength: 1,
                                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                        type: "string"
                                      },
                                      path: {
                                        description: "Path defines parameters used to modify the path of the incoming request.\nThe modified path is then used to construct the `Location` header. When\nempty, the request path is used as-is.\n\nSupport: Extended",
                                        properties: {
                                          replaceFullPath: {
                                            description: "ReplaceFullPath specifies the value with which to replace the full path\nof a request during a rewrite or redirect.",
                                            maxLength: 1024,
                                            type: "string"
                                          },
                                          replacePrefixMatch: {
                                            description: "ReplacePrefixMatch specifies the value with which to replace the prefix\nmatch of a request during a rewrite or redirect. For example, a request\nto \"/foo/bar\" with a prefix match of \"/foo\" and a ReplacePrefixMatch\nof \"/xyz\" would be modified to \"/xyz/bar\".\n\nNote that this matches the behavior of the PathPrefix match type. This\nmatches full path elements. A path element refers to the list of labels\nin the path split by the `/` separator. When specified, a trailing `/` is\nignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all\nmatch the prefix `/abc`, but the path `/abcd` would not.\n\nReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.\nUsing any other HTTPRouteMatch type on the same HTTPRouteRule will result in\nthe implementation setting the Accepted Condition for the Route to `status: False`.\n\nRequest Path | Prefix Match | Replace Prefix | Modified Path",
                                            maxLength: 1024,
                                            type: "string"
                                          },
                                          type: {
                                            description: "Type defines the type of path modifier. Additional types may be\nadded in a future release of the API.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.",
                                            enum: ["ReplaceFullPath", "ReplacePrefixMatch"],
                                            type: "string"
                                          }
                                        },
                                        required: ["type"],
                                        type: "object",
                                        "x-kubernetes-validations": [{
                                          message: "replaceFullPath must be specified when type is set to 'ReplaceFullPath'",
                                          rule: "self.type == 'ReplaceFullPath' ? has(self.replaceFullPath) : true"
                                        }, {
                                          message: "type must be 'ReplaceFullPath' when replaceFullPath is set",
                                          rule: "has(self.replaceFullPath) ? self.type == 'ReplaceFullPath' : true"
                                        }, {
                                          message: "replacePrefixMatch must be specified when type is set to 'ReplacePrefixMatch'",
                                          rule: "self.type == 'ReplacePrefixMatch' ? has(self.replacePrefixMatch) : true"
                                        }, {
                                          message: "type must be 'ReplacePrefixMatch' when replacePrefixMatch is set",
                                          rule: "has(self.replacePrefixMatch) ? self.type == 'ReplacePrefixMatch' : true"
                                        }]
                                      },
                                      port: {
                                        description: "Port is the port to be used in the value of the `Location`\nheader in the response.\n\nIf no port is specified, the redirect port MUST be derived using the\nfollowing rules:\n\n* If redirect scheme is not-empty, the redirect port MUST be the well-known\n  port associated with the redirect scheme. Specifically \"http\" to port 80\n  and \"https\" to port 443. If the redirect scheme does not have a\n  well-known port, the listener port of the Gateway SHOULD be used.\n* If redirect scheme is empty, the redirect port MUST be the Gateway\n  Listener port.\n\nImplementations SHOULD NOT add the port number in the 'Location'\nheader in the following cases:\n\n* A Location header that will use HTTP (whether that is determined via\n  the Listener protocol or the Scheme field) _and_ use port 80.\n* A Location header that will use HTTPS (whether that is determined via\n  the Listener protocol or the Scheme field) _and_ use port 443.\n\nSupport: Extended",
                                        format: "int32",
                                        maximum: 65535,
                                        minimum: 1,
                                        type: "integer"
                                      },
                                      scheme: {
                                        description: "Scheme is the scheme to be used in the value of the `Location` header in\nthe response. When empty, the scheme of the request is used.\n\nScheme redirects can affect the port of the redirect, for more information,\nrefer to the documentation for the port field of this filter.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.\n\nSupport: Extended",
                                        enum: ["http", "https"],
                                        type: "string"
                                      },
                                      statusCode: {
                                        default: 302,
                                        description: "StatusCode is the HTTP status code to be used in response.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.\n\nSupport: Core",
                                        enum: [301, 302],
                                        type: "integer"
                                      }
                                    },
                                    type: "object"
                                  },
                                  responseHeaderModifier: {
                                    description: "ResponseHeaderModifier defines a schema for a filter that modifies response\nheaders.\n\nSupport: Extended",
                                    properties: {
                                      add: {
                                        description: "Add adds the given header(s) (name, value) to the request\nbefore the action. It appends to any existing values associated\nwith the header name.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  add:\n  - name: \"my-header\"\n    value: \"bar,baz\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: foo,bar,baz",
                                        items: {
                                          description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                          properties: {
                                            name: {
                                              description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                              maxLength: 256,
                                              minLength: 1,
                                              pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                              type: "string"
                                            },
                                            value: {
                                              description: "Value is the value of HTTP Header to be matched.",
                                              maxLength: 4096,
                                              minLength: 1,
                                              type: "string"
                                            }
                                          },
                                          required: ["name", "value"],
                                          type: "object"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-map-keys": ["name"],
                                        "x-kubernetes-list-type": "map"
                                      },
                                      remove: {
                                        description: "Remove the given header(s) from the HTTP request before the action. The\nvalue of Remove is a list of HTTP header names. Note that the header\nnames are case-insensitive (see\nhttps://datatracker.ietf.org/doc/html/rfc2616#section-4.2).\n\nInput:\n  GET /foo HTTP/1.1\n  my-header1: foo\n  my-header2: bar\n  my-header3: baz\n\nConfig:\n  remove: [\"my-header1\", \"my-header3\"]\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header2: bar",
                                        items: {
                                          type: "string"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-type": "set"
                                      },
                                      set: {
                                        description: "Set overwrites the request with the given header (name, value)\nbefore the action.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  set:\n  - name: \"my-header\"\n    value: \"bar\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: bar",
                                        items: {
                                          description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                          properties: {
                                            name: {
                                              description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                              maxLength: 256,
                                              minLength: 1,
                                              pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                              type: "string"
                                            },
                                            value: {
                                              description: "Value is the value of HTTP Header to be matched.",
                                              maxLength: 4096,
                                              minLength: 1,
                                              type: "string"
                                            }
                                          },
                                          required: ["name", "value"],
                                          type: "object"
                                        },
                                        maxItems: 16,
                                        type: "array",
                                        "x-kubernetes-list-map-keys": ["name"],
                                        "x-kubernetes-list-type": "map"
                                      }
                                    },
                                    type: "object"
                                  },
                                  type: {
                                    description: "Type identifies the type of filter to apply. As with other API fields,\ntypes are classified into three conformance levels:\n\n- Core: Filter types and their corresponding configuration defined by\n  \"Support: Core\" in this package, e.g. \"RequestHeaderModifier\". All\n  implementations must support core filters.\n\n- Extended: Filter types and their corresponding configuration defined by\n  \"Support: Extended\" in this package, e.g. \"RequestMirror\". Implementers\n  are encouraged to support extended filters.\n\n- Implementation-specific: Filters that are defined and supported by\n  specific vendors.\n  In the future, filters showing convergence in behavior across multiple\n  implementations will be considered for inclusion in extended or core\n  conformance levels. Filter-specific configuration for such filters\n  is specified using the ExtensionRef field. `Type` should be set to\n  \"ExtensionRef\" for custom filters.\n\nImplementers are encouraged to define custom implementation types to\nextend the core API with implementation-specific behavior.\n\nIf a reference to a custom filter type cannot be resolved, the filter\nMUST NOT be skipped. Instead, requests that would have been processed by\nthat filter MUST receive a HTTP error response.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.",
                                    enum: ["RequestHeaderModifier", "ResponseHeaderModifier", "RequestMirror", "RequestRedirect", "URLRewrite", "ExtensionRef"],
                                    type: "string"
                                  },
                                  urlRewrite: {
                                    description: "URLRewrite defines a schema for a filter that modifies a request during forwarding.\n\nSupport: Extended",
                                    properties: {
                                      hostname: {
                                        description: "Hostname is the value to be used to replace the Host header value during\nforwarding.\n\nSupport: Extended",
                                        maxLength: 253,
                                        minLength: 1,
                                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                        type: "string"
                                      },
                                      path: {
                                        description: "Path defines a path rewrite.\n\nSupport: Extended",
                                        properties: {
                                          replaceFullPath: {
                                            description: "ReplaceFullPath specifies the value with which to replace the full path\nof a request during a rewrite or redirect.",
                                            maxLength: 1024,
                                            type: "string"
                                          },
                                          replacePrefixMatch: {
                                            description: "ReplacePrefixMatch specifies the value with which to replace the prefix\nmatch of a request during a rewrite or redirect. For example, a request\nto \"/foo/bar\" with a prefix match of \"/foo\" and a ReplacePrefixMatch\nof \"/xyz\" would be modified to \"/xyz/bar\".\n\nNote that this matches the behavior of the PathPrefix match type. This\nmatches full path elements. A path element refers to the list of labels\nin the path split by the `/` separator. When specified, a trailing `/` is\nignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all\nmatch the prefix `/abc`, but the path `/abcd` would not.\n\nReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.\nUsing any other HTTPRouteMatch type on the same HTTPRouteRule will result in\nthe implementation setting the Accepted Condition for the Route to `status: False`.\n\nRequest Path | Prefix Match | Replace Prefix | Modified Path",
                                            maxLength: 1024,
                                            type: "string"
                                          },
                                          type: {
                                            description: "Type defines the type of path modifier. Additional types may be\nadded in a future release of the API.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.",
                                            enum: ["ReplaceFullPath", "ReplacePrefixMatch"],
                                            type: "string"
                                          }
                                        },
                                        required: ["type"],
                                        type: "object",
                                        "x-kubernetes-validations": [{
                                          message: "replaceFullPath must be specified when type is set to 'ReplaceFullPath'",
                                          rule: "self.type == 'ReplaceFullPath' ? has(self.replaceFullPath) : true"
                                        }, {
                                          message: "type must be 'ReplaceFullPath' when replaceFullPath is set",
                                          rule: "has(self.replaceFullPath) ? self.type == 'ReplaceFullPath' : true"
                                        }, {
                                          message: "replacePrefixMatch must be specified when type is set to 'ReplacePrefixMatch'",
                                          rule: "self.type == 'ReplacePrefixMatch' ? has(self.replacePrefixMatch) : true"
                                        }, {
                                          message: "type must be 'ReplacePrefixMatch' when replacePrefixMatch is set",
                                          rule: "has(self.replacePrefixMatch) ? self.type == 'ReplacePrefixMatch' : true"
                                        }]
                                      }
                                    },
                                    type: "object"
                                  }
                                },
                                required: ["type"],
                                type: "object",
                                "x-kubernetes-validations": [{
                                  message: "filter.requestHeaderModifier must be nil if the filter.type is not RequestHeaderModifier",
                                  rule: "!(has(self.requestHeaderModifier) && self.type != 'RequestHeaderModifier')"
                                }, {
                                  message: "filter.requestHeaderModifier must be specified for RequestHeaderModifier filter.type",
                                  rule: "!(!has(self.requestHeaderModifier) && self.type == 'RequestHeaderModifier')"
                                }, {
                                  message: "filter.responseHeaderModifier must be nil if the filter.type is not ResponseHeaderModifier",
                                  rule: "!(has(self.responseHeaderModifier) && self.type != 'ResponseHeaderModifier')"
                                }, {
                                  message: "filter.responseHeaderModifier must be specified for ResponseHeaderModifier filter.type",
                                  rule: "!(!has(self.responseHeaderModifier) && self.type == 'ResponseHeaderModifier')"
                                }, {
                                  message: "filter.requestMirror must be nil if the filter.type is not RequestMirror",
                                  rule: "!(has(self.requestMirror) && self.type != 'RequestMirror')"
                                }, {
                                  message: "filter.requestMirror must be specified for RequestMirror filter.type",
                                  rule: "!(!has(self.requestMirror) && self.type == 'RequestMirror')"
                                }, {
                                  message: "filter.requestRedirect must be nil if the filter.type is not RequestRedirect",
                                  rule: "!(has(self.requestRedirect) && self.type != 'RequestRedirect')"
                                }, {
                                  message: "filter.requestRedirect must be specified for RequestRedirect filter.type",
                                  rule: "!(!has(self.requestRedirect) && self.type == 'RequestRedirect')"
                                }, {
                                  message: "filter.urlRewrite must be nil if the filter.type is not URLRewrite",
                                  rule: "!(has(self.urlRewrite) && self.type != 'URLRewrite')"
                                }, {
                                  message: "filter.urlRewrite must be specified for URLRewrite filter.type",
                                  rule: "!(!has(self.urlRewrite) && self.type == 'URLRewrite')"
                                }, {
                                  message: "filter.extensionRef must be nil if the filter.type is not ExtensionRef",
                                  rule: "!(has(self.extensionRef) && self.type != 'ExtensionRef')"
                                }, {
                                  message: "filter.extensionRef must be specified for ExtensionRef filter.type",
                                  rule: "!(!has(self.extensionRef) && self.type == 'ExtensionRef')"
                                }]
                              },
                              maxItems: 16,
                              type: "array",
                              "x-kubernetes-validations": [{
                                message: "May specify either httpRouteFilterRequestRedirect or httpRouteFilterRequestRewrite, but not both",
                                rule: "!(self.exists(f, f.type == 'RequestRedirect') && self.exists(f, f.type == 'URLRewrite'))"
                              }, {
                                message: "May specify either httpRouteFilterRequestRedirect or httpRouteFilterRequestRewrite, but not both",
                                rule: "!(self.exists(f, f.type == 'RequestRedirect') && self.exists(f, f.type == 'URLRewrite'))"
                              }, {
                                message: "RequestHeaderModifier filter cannot be repeated",
                                rule: "self.filter(f, f.type == 'RequestHeaderModifier').size() <= 1"
                              }, {
                                message: "ResponseHeaderModifier filter cannot be repeated",
                                rule: "self.filter(f, f.type == 'ResponseHeaderModifier').size() <= 1"
                              }, {
                                message: "RequestRedirect filter cannot be repeated",
                                rule: "self.filter(f, f.type == 'RequestRedirect').size() <= 1"
                              }, {
                                message: "URLRewrite filter cannot be repeated",
                                rule: "self.filter(f, f.type == 'URLRewrite').size() <= 1"
                              }]
                            },
                            group: {
                              default: "",
                              description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                              maxLength: 253,
                              pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                              type: "string"
                            },
                            kind: {
                              default: "Service",
                              description: "Kind is the Kubernetes resource kind of the referent. For example\n\"Service\".\n\nDefaults to \"Service\" when not specified.\n\nExternalName services can refer to CNAME DNS records that may live\noutside of the cluster and as such are difficult to reason about in\nterms of conformance. They also may not be safe to forward to (see\nCVE-2021-25740 for more information). Implementations SHOULD NOT\nsupport ExternalName Services.\n\nSupport: Core (Services with a type other than ExternalName)\n\nSupport: Implementation-specific (Services with type ExternalName)",
                              maxLength: 63,
                              minLength: 1,
                              pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                              type: "string"
                            },
                            name: {
                              description: "Name is the name of the referent.",
                              maxLength: 253,
                              minLength: 1,
                              type: "string"
                            },
                            namespace: {
                              description: "Namespace is the namespace of the backend. When unspecified, the local\nnamespace is inferred.\n\nNote that when a namespace different than the local namespace is specified,\na ReferenceGrant object is required in the referent namespace to allow that\nnamespace's owner to accept the reference. See the ReferenceGrant\ndocumentation for details.\n\nSupport: Core",
                              maxLength: 63,
                              minLength: 1,
                              pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                              type: "string"
                            },
                            port: {
                              description: "Port specifies the destination port number to use for this resource.\nPort is required when the referent is a Kubernetes Service. In this\ncase, the port number is the service port number, not the target port.\nFor other resources, destination port might be derived from the referent\nresource or this field.",
                              format: "int32",
                              maximum: 65535,
                              minimum: 1,
                              type: "integer"
                            },
                            weight: {
                              default: 1,
                              description: "Weight specifies the proportion of requests forwarded to the referenced\nbackend. This is computed as weight/(sum of all weights in this\nBackendRefs list). For non-zero values, there may be some epsilon from\nthe exact proportion defined here depending on the precision an\nimplementation supports. Weight is not a percentage and the sum of\nweights does not need to equal 100.\n\nIf only one backend is specified and it has a weight greater than 0, 100%\nof the traffic is forwarded to that backend. If weight is set to 0, no\ntraffic should be forwarded for this entry. If unspecified, weight\ndefaults to 1.\n\nSupport for this field varies based on the context where used.",
                              format: "int32",
                              maximum: 1000000,
                              minimum: 0,
                              type: "integer"
                            }
                          },
                          required: ["name"],
                          type: "object",
                          "x-kubernetes-validations": [{
                            message: "Must have port for Service reference",
                            rule: "(size(self.group) == 0 && self.kind == 'Service') ? has(self.port) : true"
                          }]
                        },
                        maxItems: 16,
                        type: "array"
                      },
                      filters: {
                        description: "Filters define the filters that are applied to requests that match\nthis rule.\n\nWherever possible, implementations SHOULD implement filters in the order\nthey are specified.\n\nImplementations MAY choose to implement this ordering strictly, rejecting\nany combination or order of filters that can not be supported. If implementations\nchoose a strict interpretation of filter ordering, they MUST clearly document\nthat behavior.\n\nTo reject an invalid combination or order of filters, implementations SHOULD\nconsider the Route Rules with this configuration invalid. If all Route Rules\nin a Route are invalid, the entire Route would be considered invalid. If only\na portion of Route Rules are invalid, implementations MUST set the\n\"PartiallyInvalid\" condition for the Route.\n\nConformance-levels at this level are defined based on the type of filter:\n\n- ALL core filters MUST be supported by all implementations.\n- Implementers are encouraged to support extended filters.\n- Implementation-specific custom filters have no API guarantees across\n  implementations.\n\nSpecifying the same filter multiple times is not supported unless explicitly\nindicated in the filter.\n\nAll filters are expected to be compatible with each other except for the\nURLRewrite and RequestRedirect filters, which may not be combined. If an\nimplementation can not support other combinations of filters, they must clearly\ndocument that limitation. In cases where incompatible or unsupported\nfilters are specified and cause the `Accepted` condition to be set to status\n`False`, implementations may use the `IncompatibleFilters` reason to specify\nthis configuration error.\n\nSupport: Core",
                        items: {
                          description: "HTTPRouteFilter defines processing steps that must be completed during the\nrequest or response lifecycle. HTTPRouteFilters are meant as an extension\npoint to express processing that may be done in Gateway implementations. Some\nexamples include request or response modification, implementing\nauthentication strategies, rate-limiting, and traffic shaping. API\nguarantee/conformance is defined based on the type of the filter.",
                          properties: {
                            extensionRef: {
                              description: "ExtensionRef is an optional, implementation-specific extension to the\n\"filter\" behavior.  For example, resource \"myroutefilter\" in group\n\"networking.example.net\"). ExtensionRef MUST NOT be used for core and\nextended filters.\n\nThis filter can be used multiple times within the same rule.\n\nSupport: Implementation-specific",
                              properties: {
                                group: {
                                  description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                                  maxLength: 253,
                                  pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                  type: "string"
                                },
                                kind: {
                                  description: "Kind is kind of the referent. For example \"HTTPRoute\" or \"Service\".",
                                  maxLength: 63,
                                  minLength: 1,
                                  pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                  type: "string"
                                },
                                name: {
                                  description: "Name is the name of the referent.",
                                  maxLength: 253,
                                  minLength: 1,
                                  type: "string"
                                }
                              },
                              required: ["group", "kind", "name"],
                              type: "object"
                            },
                            requestHeaderModifier: {
                              description: "RequestHeaderModifier defines a schema for a filter that modifies request\nheaders.\n\nSupport: Core",
                              properties: {
                                add: {
                                  description: "Add adds the given header(s) (name, value) to the request\nbefore the action. It appends to any existing values associated\nwith the header name.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  add:\n  - name: \"my-header\"\n    value: \"bar,baz\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: foo,bar,baz",
                                  items: {
                                    description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                    properties: {
                                      name: {
                                        description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                        maxLength: 256,
                                        minLength: 1,
                                        pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                        type: "string"
                                      },
                                      value: {
                                        description: "Value is the value of HTTP Header to be matched.",
                                        maxLength: 4096,
                                        minLength: 1,
                                        type: "string"
                                      }
                                    },
                                    required: ["name", "value"],
                                    type: "object"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-map-keys": ["name"],
                                  "x-kubernetes-list-type": "map"
                                },
                                remove: {
                                  description: "Remove the given header(s) from the HTTP request before the action. The\nvalue of Remove is a list of HTTP header names. Note that the header\nnames are case-insensitive (see\nhttps://datatracker.ietf.org/doc/html/rfc2616#section-4.2).\n\nInput:\n  GET /foo HTTP/1.1\n  my-header1: foo\n  my-header2: bar\n  my-header3: baz\n\nConfig:\n  remove: [\"my-header1\", \"my-header3\"]\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header2: bar",
                                  items: {
                                    type: "string"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-type": "set"
                                },
                                set: {
                                  description: "Set overwrites the request with the given header (name, value)\nbefore the action.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  set:\n  - name: \"my-header\"\n    value: \"bar\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: bar",
                                  items: {
                                    description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                    properties: {
                                      name: {
                                        description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                        maxLength: 256,
                                        minLength: 1,
                                        pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                        type: "string"
                                      },
                                      value: {
                                        description: "Value is the value of HTTP Header to be matched.",
                                        maxLength: 4096,
                                        minLength: 1,
                                        type: "string"
                                      }
                                    },
                                    required: ["name", "value"],
                                    type: "object"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-map-keys": ["name"],
                                  "x-kubernetes-list-type": "map"
                                }
                              },
                              type: "object"
                            },
                            requestMirror: {
                              description: "RequestMirror defines a schema for a filter that mirrors requests.\nRequests are sent to the specified destination, but responses from\nthat destination are ignored.\n\nThis filter can be used multiple times within the same rule. Note that\nnot all implementations will be able to support mirroring to multiple\nbackends.\n\nSupport: Extended\n\n",
                              properties: {
                                backendRef: {
                                  description: "BackendRef references a resource where mirrored requests are sent.\n\nMirrored requests must be sent only to a single destination endpoint\nwithin this BackendRef, irrespective of how many endpoints are present\nwithin this BackendRef.\n\nIf the referent cannot be found, this BackendRef is invalid and must be\ndropped from the Gateway. The controller must ensure the \"ResolvedRefs\"\ncondition on the Route status is set to `status: False` and not configure\nthis backend in the underlying implementation.\n\nIf there is a cross-namespace reference to an *existing* object\nthat is not allowed by a ReferenceGrant, the controller must ensure the\n\"ResolvedRefs\"  condition on the Route is set to `status: False`,\nwith the \"RefNotPermitted\" reason and not configure this backend in the\nunderlying implementation.\n\nIn either error case, the Message of the `ResolvedRefs` Condition\nshould be used to provide more detail about the problem.\n\nSupport: Extended for Kubernetes Service\n\nSupport: Implementation-specific for any other resource",
                                  properties: {
                                    group: {
                                      default: "",
                                      description: "Group is the group of the referent. For example, \"gateway.networking.k8s.io\".\nWhen unspecified or empty string, core API group is inferred.",
                                      maxLength: 253,
                                      pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                      type: "string"
                                    },
                                    kind: {
                                      default: "Service",
                                      description: "Kind is the Kubernetes resource kind of the referent. For example\n\"Service\".\n\nDefaults to \"Service\" when not specified.\n\nExternalName services can refer to CNAME DNS records that may live\noutside of the cluster and as such are difficult to reason about in\nterms of conformance. They also may not be safe to forward to (see\nCVE-2021-25740 for more information). Implementations SHOULD NOT\nsupport ExternalName Services.\n\nSupport: Core (Services with a type other than ExternalName)\n\nSupport: Implementation-specific (Services with type ExternalName)",
                                      maxLength: 63,
                                      minLength: 1,
                                      pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                                      type: "string"
                                    },
                                    name: {
                                      description: "Name is the name of the referent.",
                                      maxLength: 253,
                                      minLength: 1,
                                      type: "string"
                                    },
                                    namespace: {
                                      description: "Namespace is the namespace of the backend. When unspecified, the local\nnamespace is inferred.\n\nNote that when a namespace different than the local namespace is specified,\na ReferenceGrant object is required in the referent namespace to allow that\nnamespace's owner to accept the reference. See the ReferenceGrant\ndocumentation for details.\n\nSupport: Core",
                                      maxLength: 63,
                                      minLength: 1,
                                      pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                                      type: "string"
                                    },
                                    port: {
                                      description: "Port specifies the destination port number to use for this resource.\nPort is required when the referent is a Kubernetes Service. In this\ncase, the port number is the service port number, not the target port.\nFor other resources, destination port might be derived from the referent\nresource or this field.",
                                      format: "int32",
                                      maximum: 65535,
                                      minimum: 1,
                                      type: "integer"
                                    }
                                  },
                                  required: ["name"],
                                  type: "object",
                                  "x-kubernetes-validations": [{
                                    message: "Must have port for Service reference",
                                    rule: "(size(self.group) == 0 && self.kind == 'Service') ? has(self.port) : true"
                                  }]
                                }
                              },
                              required: ["backendRef"],
                              type: "object"
                            },
                            requestRedirect: {
                              description: "RequestRedirect defines a schema for a filter that responds to the\nrequest with an HTTP redirection.\n\nSupport: Core",
                              properties: {
                                hostname: {
                                  description: "Hostname is the hostname to be used in the value of the `Location`\nheader in the response.\nWhen empty, the hostname in the `Host` header of the request is used.\n\nSupport: Core",
                                  maxLength: 253,
                                  minLength: 1,
                                  pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                  type: "string"
                                },
                                path: {
                                  description: "Path defines parameters used to modify the path of the incoming request.\nThe modified path is then used to construct the `Location` header. When\nempty, the request path is used as-is.\n\nSupport: Extended",
                                  properties: {
                                    replaceFullPath: {
                                      description: "ReplaceFullPath specifies the value with which to replace the full path\nof a request during a rewrite or redirect.",
                                      maxLength: 1024,
                                      type: "string"
                                    },
                                    replacePrefixMatch: {
                                      description: "ReplacePrefixMatch specifies the value with which to replace the prefix\nmatch of a request during a rewrite or redirect. For example, a request\nto \"/foo/bar\" with a prefix match of \"/foo\" and a ReplacePrefixMatch\nof \"/xyz\" would be modified to \"/xyz/bar\".\n\nNote that this matches the behavior of the PathPrefix match type. This\nmatches full path elements. A path element refers to the list of labels\nin the path split by the `/` separator. When specified, a trailing `/` is\nignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all\nmatch the prefix `/abc`, but the path `/abcd` would not.\n\nReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.\nUsing any other HTTPRouteMatch type on the same HTTPRouteRule will result in\nthe implementation setting the Accepted Condition for the Route to `status: False`.\n\nRequest Path | Prefix Match | Replace Prefix | Modified Path",
                                      maxLength: 1024,
                                      type: "string"
                                    },
                                    type: {
                                      description: "Type defines the type of path modifier. Additional types may be\nadded in a future release of the API.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.",
                                      enum: ["ReplaceFullPath", "ReplacePrefixMatch"],
                                      type: "string"
                                    }
                                  },
                                  required: ["type"],
                                  type: "object",
                                  "x-kubernetes-validations": [{
                                    message: "replaceFullPath must be specified when type is set to 'ReplaceFullPath'",
                                    rule: "self.type == 'ReplaceFullPath' ? has(self.replaceFullPath) : true"
                                  }, {
                                    message: "type must be 'ReplaceFullPath' when replaceFullPath is set",
                                    rule: "has(self.replaceFullPath) ? self.type == 'ReplaceFullPath' : true"
                                  }, {
                                    message: "replacePrefixMatch must be specified when type is set to 'ReplacePrefixMatch'",
                                    rule: "self.type == 'ReplacePrefixMatch' ? has(self.replacePrefixMatch) : true"
                                  }, {
                                    message: "type must be 'ReplacePrefixMatch' when replacePrefixMatch is set",
                                    rule: "has(self.replacePrefixMatch) ? self.type == 'ReplacePrefixMatch' : true"
                                  }]
                                },
                                port: {
                                  description: "Port is the port to be used in the value of the `Location`\nheader in the response.\n\nIf no port is specified, the redirect port MUST be derived using the\nfollowing rules:\n\n* If redirect scheme is not-empty, the redirect port MUST be the well-known\n  port associated with the redirect scheme. Specifically \"http\" to port 80\n  and \"https\" to port 443. If the redirect scheme does not have a\n  well-known port, the listener port of the Gateway SHOULD be used.\n* If redirect scheme is empty, the redirect port MUST be the Gateway\n  Listener port.\n\nImplementations SHOULD NOT add the port number in the 'Location'\nheader in the following cases:\n\n* A Location header that will use HTTP (whether that is determined via\n  the Listener protocol or the Scheme field) _and_ use port 80.\n* A Location header that will use HTTPS (whether that is determined via\n  the Listener protocol or the Scheme field) _and_ use port 443.\n\nSupport: Extended",
                                  format: "int32",
                                  maximum: 65535,
                                  minimum: 1,
                                  type: "integer"
                                },
                                scheme: {
                                  description: "Scheme is the scheme to be used in the value of the `Location` header in\nthe response. When empty, the scheme of the request is used.\n\nScheme redirects can affect the port of the redirect, for more information,\nrefer to the documentation for the port field of this filter.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.\n\nSupport: Extended",
                                  enum: ["http", "https"],
                                  type: "string"
                                },
                                statusCode: {
                                  default: 302,
                                  description: "StatusCode is the HTTP status code to be used in response.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.\n\nSupport: Core",
                                  enum: [301, 302],
                                  type: "integer"
                                }
                              },
                              type: "object"
                            },
                            responseHeaderModifier: {
                              description: "ResponseHeaderModifier defines a schema for a filter that modifies response\nheaders.\n\nSupport: Extended",
                              properties: {
                                add: {
                                  description: "Add adds the given header(s) (name, value) to the request\nbefore the action. It appends to any existing values associated\nwith the header name.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  add:\n  - name: \"my-header\"\n    value: \"bar,baz\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: foo,bar,baz",
                                  items: {
                                    description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                    properties: {
                                      name: {
                                        description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                        maxLength: 256,
                                        minLength: 1,
                                        pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                        type: "string"
                                      },
                                      value: {
                                        description: "Value is the value of HTTP Header to be matched.",
                                        maxLength: 4096,
                                        minLength: 1,
                                        type: "string"
                                      }
                                    },
                                    required: ["name", "value"],
                                    type: "object"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-map-keys": ["name"],
                                  "x-kubernetes-list-type": "map"
                                },
                                remove: {
                                  description: "Remove the given header(s) from the HTTP request before the action. The\nvalue of Remove is a list of HTTP header names. Note that the header\nnames are case-insensitive (see\nhttps://datatracker.ietf.org/doc/html/rfc2616#section-4.2).\n\nInput:\n  GET /foo HTTP/1.1\n  my-header1: foo\n  my-header2: bar\n  my-header3: baz\n\nConfig:\n  remove: [\"my-header1\", \"my-header3\"]\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header2: bar",
                                  items: {
                                    type: "string"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-type": "set"
                                },
                                set: {
                                  description: "Set overwrites the request with the given header (name, value)\nbefore the action.\n\nInput:\n  GET /foo HTTP/1.1\n  my-header: foo\n\nConfig:\n  set:\n  - name: \"my-header\"\n    value: \"bar\"\n\nOutput:\n  GET /foo HTTP/1.1\n  my-header: bar",
                                  items: {
                                    description: "HTTPHeader represents an HTTP Header name and value as defined by RFC 7230.",
                                    properties: {
                                      name: {
                                        description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, the first entry with\nan equivalent name MUST be considered for a match. Subsequent entries\nwith an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.",
                                        maxLength: 256,
                                        minLength: 1,
                                        pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                        type: "string"
                                      },
                                      value: {
                                        description: "Value is the value of HTTP Header to be matched.",
                                        maxLength: 4096,
                                        minLength: 1,
                                        type: "string"
                                      }
                                    },
                                    required: ["name", "value"],
                                    type: "object"
                                  },
                                  maxItems: 16,
                                  type: "array",
                                  "x-kubernetes-list-map-keys": ["name"],
                                  "x-kubernetes-list-type": "map"
                                }
                              },
                              type: "object"
                            },
                            type: {
                              description: "Type identifies the type of filter to apply. As with other API fields,\ntypes are classified into three conformance levels:\n\n- Core: Filter types and their corresponding configuration defined by\n  \"Support: Core\" in this package, e.g. \"RequestHeaderModifier\". All\n  implementations must support core filters.\n\n- Extended: Filter types and their corresponding configuration defined by\n  \"Support: Extended\" in this package, e.g. \"RequestMirror\". Implementers\n  are encouraged to support extended filters.\n\n- Implementation-specific: Filters that are defined and supported by\n  specific vendors.\n  In the future, filters showing convergence in behavior across multiple\n  implementations will be considered for inclusion in extended or core\n  conformance levels. Filter-specific configuration for such filters\n  is specified using the ExtensionRef field. `Type` should be set to\n  \"ExtensionRef\" for custom filters.\n\nImplementers are encouraged to define custom implementation types to\nextend the core API with implementation-specific behavior.\n\nIf a reference to a custom filter type cannot be resolved, the filter\nMUST NOT be skipped. Instead, requests that would have been processed by\nthat filter MUST receive a HTTP error response.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.",
                              enum: ["RequestHeaderModifier", "ResponseHeaderModifier", "RequestMirror", "RequestRedirect", "URLRewrite", "ExtensionRef"],
                              type: "string"
                            },
                            urlRewrite: {
                              description: "URLRewrite defines a schema for a filter that modifies a request during forwarding.\n\nSupport: Extended",
                              properties: {
                                hostname: {
                                  description: "Hostname is the value to be used to replace the Host header value during\nforwarding.\n\nSupport: Extended",
                                  maxLength: 253,
                                  minLength: 1,
                                  pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                                  type: "string"
                                },
                                path: {
                                  description: "Path defines a path rewrite.\n\nSupport: Extended",
                                  properties: {
                                    replaceFullPath: {
                                      description: "ReplaceFullPath specifies the value with which to replace the full path\nof a request during a rewrite or redirect.",
                                      maxLength: 1024,
                                      type: "string"
                                    },
                                    replacePrefixMatch: {
                                      description: "ReplacePrefixMatch specifies the value with which to replace the prefix\nmatch of a request during a rewrite or redirect. For example, a request\nto \"/foo/bar\" with a prefix match of \"/foo\" and a ReplacePrefixMatch\nof \"/xyz\" would be modified to \"/xyz/bar\".\n\nNote that this matches the behavior of the PathPrefix match type. This\nmatches full path elements. A path element refers to the list of labels\nin the path split by the `/` separator. When specified, a trailing `/` is\nignored. For example, the paths `/abc`, `/abc/`, and `/abc/def` would all\nmatch the prefix `/abc`, but the path `/abcd` would not.\n\nReplacePrefixMatch is only compatible with a `PathPrefix` HTTPRouteMatch.\nUsing any other HTTPRouteMatch type on the same HTTPRouteRule will result in\nthe implementation setting the Accepted Condition for the Route to `status: False`.\n\nRequest Path | Prefix Match | Replace Prefix | Modified Path",
                                      maxLength: 1024,
                                      type: "string"
                                    },
                                    type: {
                                      description: "Type defines the type of path modifier. Additional types may be\nadded in a future release of the API.\n\nNote that values may be added to this enum, implementations\nmust ensure that unknown values will not cause a crash.\n\nUnknown values here must result in the implementation setting the\nAccepted Condition for the Route to `status: False`, with a\nReason of `UnsupportedValue`.",
                                      enum: ["ReplaceFullPath", "ReplacePrefixMatch"],
                                      type: "string"
                                    }
                                  },
                                  required: ["type"],
                                  type: "object",
                                  "x-kubernetes-validations": [{
                                    message: "replaceFullPath must be specified when type is set to 'ReplaceFullPath'",
                                    rule: "self.type == 'ReplaceFullPath' ? has(self.replaceFullPath) : true"
                                  }, {
                                    message: "type must be 'ReplaceFullPath' when replaceFullPath is set",
                                    rule: "has(self.replaceFullPath) ? self.type == 'ReplaceFullPath' : true"
                                  }, {
                                    message: "replacePrefixMatch must be specified when type is set to 'ReplacePrefixMatch'",
                                    rule: "self.type == 'ReplacePrefixMatch' ? has(self.replacePrefixMatch) : true"
                                  }, {
                                    message: "type must be 'ReplacePrefixMatch' when replacePrefixMatch is set",
                                    rule: "has(self.replacePrefixMatch) ? self.type == 'ReplacePrefixMatch' : true"
                                  }]
                                }
                              },
                              type: "object"
                            }
                          },
                          required: ["type"],
                          type: "object",
                          "x-kubernetes-validations": [{
                            message: "filter.requestHeaderModifier must be nil if the filter.type is not RequestHeaderModifier",
                            rule: "!(has(self.requestHeaderModifier) && self.type != 'RequestHeaderModifier')"
                          }, {
                            message: "filter.requestHeaderModifier must be specified for RequestHeaderModifier filter.type",
                            rule: "!(!has(self.requestHeaderModifier) && self.type == 'RequestHeaderModifier')"
                          }, {
                            message: "filter.responseHeaderModifier must be nil if the filter.type is not ResponseHeaderModifier",
                            rule: "!(has(self.responseHeaderModifier) && self.type != 'ResponseHeaderModifier')"
                          }, {
                            message: "filter.responseHeaderModifier must be specified for ResponseHeaderModifier filter.type",
                            rule: "!(!has(self.responseHeaderModifier) && self.type == 'ResponseHeaderModifier')"
                          }, {
                            message: "filter.requestMirror must be nil if the filter.type is not RequestMirror",
                            rule: "!(has(self.requestMirror) && self.type != 'RequestMirror')"
                          }, {
                            message: "filter.requestMirror must be specified for RequestMirror filter.type",
                            rule: "!(!has(self.requestMirror) && self.type == 'RequestMirror')"
                          }, {
                            message: "filter.requestRedirect must be nil if the filter.type is not RequestRedirect",
                            rule: "!(has(self.requestRedirect) && self.type != 'RequestRedirect')"
                          }, {
                            message: "filter.requestRedirect must be specified for RequestRedirect filter.type",
                            rule: "!(!has(self.requestRedirect) && self.type == 'RequestRedirect')"
                          }, {
                            message: "filter.urlRewrite must be nil if the filter.type is not URLRewrite",
                            rule: "!(has(self.urlRewrite) && self.type != 'URLRewrite')"
                          }, {
                            message: "filter.urlRewrite must be specified for URLRewrite filter.type",
                            rule: "!(!has(self.urlRewrite) && self.type == 'URLRewrite')"
                          }, {
                            message: "filter.extensionRef must be nil if the filter.type is not ExtensionRef",
                            rule: "!(has(self.extensionRef) && self.type != 'ExtensionRef')"
                          }, {
                            message: "filter.extensionRef must be specified for ExtensionRef filter.type",
                            rule: "!(!has(self.extensionRef) && self.type == 'ExtensionRef')"
                          }]
                        },
                        maxItems: 16,
                        type: "array",
                        "x-kubernetes-validations": [{
                          message: "May specify either httpRouteFilterRequestRedirect or httpRouteFilterRequestRewrite, but not both",
                          rule: "!(self.exists(f, f.type == 'RequestRedirect') && self.exists(f, f.type == 'URLRewrite'))"
                        }, {
                          message: "RequestHeaderModifier filter cannot be repeated",
                          rule: "self.filter(f, f.type == 'RequestHeaderModifier').size() <= 1"
                        }, {
                          message: "ResponseHeaderModifier filter cannot be repeated",
                          rule: "self.filter(f, f.type == 'ResponseHeaderModifier').size() <= 1"
                        }, {
                          message: "RequestRedirect filter cannot be repeated",
                          rule: "self.filter(f, f.type == 'RequestRedirect').size() <= 1"
                        }, {
                          message: "URLRewrite filter cannot be repeated",
                          rule: "self.filter(f, f.type == 'URLRewrite').size() <= 1"
                        }]
                      },
                      matches: {
                        default: [{
                          path: {
                            type: "PathPrefix",
                            value: "/"
                          }
                        }],
                        description: "Matches define conditions used for matching the rule against incoming\nHTTP requests. Each match is independent, i.e. this rule will be matched\nif **any** one of the matches is satisfied.\n\nFor example, take the following matches configuration:\n\n```\nmatches:\n- path:\n    value: \"/foo\"\n  headers:\n  - name: \"version\"\n    value: \"v2\"\n- path:\n    value: \"/v2/foo\"\n```\n\nFor a request to match against this rule, a request must satisfy\nEITHER of the two conditions:\n\n- path prefixed with `/foo` AND contains the header `version: v2`\n- path prefix of `/v2/foo`\n\nSee the documentation for HTTPRouteMatch on how to specify multiple\nmatch conditions that should be ANDed together.\n\nIf no matches are specified, the default is a prefix\npath match on \"/\", which has the effect of matching every\nHTTP request.\n\nProxy or Load Balancer routing configuration generated from HTTPRoutes\nMUST prioritize matches based on the following criteria, continuing on\nties. Across all rules specified on applicable Routes, precedence must be\ngiven to the match having:\n\n* \"Exact\" path match.\n* \"Prefix\" path match with largest number of characters.\n* Method match.\n* Largest number of header matches.\n* Largest number of query param matches.\n\nNote: The precedence of RegularExpression path matches are implementation-specific.\n\nIf ties still exist across multiple Routes, matching precedence MUST be\ndetermined in order of the following criteria, continuing on ties:\n\n* The oldest Route based on creation timestamp.\n* The Route appearing first in alphabetical order by\n  \"{namespace}/{name}\".\n\nIf ties still exist within an HTTPRoute, matching precedence MUST be granted\nto the FIRST matching rule (in list order) with a match meeting the above\ncriteria.\n\nWhen no rules matching a request have been successfully attached to the\nparent a request is coming from, a HTTP 404 status code MUST be returned.",
                        items: {
                          description: "HTTPRouteMatch defines the predicate used to match requests to a given\naction. Multiple match types are ANDed together, i.e. the match will\nevaluate to true only if all conditions are satisfied.\n\nFor example, the match below will match a HTTP request only if its path\nstarts with `/foo` AND it contains the `version: v1` header:\n\n```\nmatch:\n\n\tpath:\n\t  value: \"/foo\"\n\theaders:\n\t- name: \"version\"\n\t  value \"v1\"\n\n```",
                          properties: {
                            headers: {
                              description: "Headers specifies HTTP request header matchers. Multiple match values are\nANDed together, meaning, a request must match all the specified headers\nto select the route.",
                              items: {
                                description: "HTTPHeaderMatch describes how to select a HTTP route by matching HTTP request\nheaders.",
                                properties: {
                                  name: {
                                    description: "Name is the name of the HTTP Header to be matched. Name matching MUST be\ncase insensitive. (See https://tools.ietf.org/html/rfc7230#section-3.2).\n\nIf multiple entries specify equivalent header names, only the first\nentry with an equivalent name MUST be considered for a match. Subsequent\nentries with an equivalent header name MUST be ignored. Due to the\ncase-insensitivity of header names, \"foo\" and \"Foo\" are considered\nequivalent.\n\nWhen a header is repeated in an HTTP request, it is\nimplementation-specific behavior as to how this is represented.\nGenerally, proxies should follow the guidance from the RFC:\nhttps://www.rfc-editor.org/rfc/rfc7230.html#section-3.2.2 regarding\nprocessing a repeated header, with special handling for \"Set-Cookie\".",
                                    maxLength: 256,
                                    minLength: 1,
                                    pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                    type: "string"
                                  },
                                  type: {
                                    default: "Exact",
                                    description: "Type specifies how to match against the value of the header.\n\nSupport: Core (Exact)\n\nSupport: Implementation-specific (RegularExpression)\n\nSince RegularExpression HeaderMatchType has implementation-specific\nconformance, implementations can support POSIX, PCRE or any other dialects\nof regular expressions. Please read the implementation's documentation to\ndetermine the supported dialect.",
                                    enum: ["Exact", "RegularExpression"],
                                    type: "string"
                                  },
                                  value: {
                                    description: "Value is the value of HTTP Header to be matched.",
                                    maxLength: 4096,
                                    minLength: 1,
                                    type: "string"
                                  }
                                },
                                required: ["name", "value"],
                                type: "object"
                              },
                              maxItems: 16,
                              type: "array",
                              "x-kubernetes-list-map-keys": ["name"],
                              "x-kubernetes-list-type": "map"
                            },
                            method: {
                              description: "Method specifies HTTP method matcher.\nWhen specified, this route will be matched only if the request has the\nspecified method.\n\nSupport: Extended",
                              enum: ["GET", "HEAD", "POST", "PUT", "DELETE", "CONNECT", "OPTIONS", "TRACE", "PATCH"],
                              type: "string"
                            },
                            path: {
                              default: {
                                type: "PathPrefix",
                                value: "/"
                              },
                              description: "Path specifies a HTTP request path matcher. If this field is not\nspecified, a default prefix match on the \"/\" path is provided.",
                              properties: {
                                type: {
                                  default: "PathPrefix",
                                  description: "Type specifies how to match against the path Value.\n\nSupport: Core (Exact, PathPrefix)\n\nSupport: Implementation-specific (RegularExpression)",
                                  enum: ["Exact", "PathPrefix", "RegularExpression"],
                                  type: "string"
                                },
                                value: {
                                  default: "/",
                                  description: "Value of the HTTP path to match against.",
                                  maxLength: 1024,
                                  type: "string"
                                }
                              },
                              type: "object",
                              "x-kubernetes-validations": [{
                                message: "value must be an absolute path and start with '/' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? self.value.startsWith('/') : true"
                              }, {
                                message: "must not contain '//' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.contains('//') : true"
                              }, {
                                message: "must not contain '/./' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.contains('/./') : true"
                              }, {
                                message: "must not contain '/../' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.contains('/../') : true"
                              }, {
                                message: "must not contain '%2f' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.contains('%2f') : true"
                              }, {
                                message: "must not contain '%2F' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.contains('%2F') : true"
                              }, {
                                message: "must not contain '#' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.contains('#') : true"
                              }, {
                                message: "must not end with '/..' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.endsWith('/..') : true"
                              }, {
                                message: "must not end with '/.' when type one of ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? !self.value.endsWith('/.') : true"
                              }, {
                                message: "type must be one of ['Exact', 'PathPrefix', 'RegularExpression']",
                                rule: "self.type in ['Exact','PathPrefix'] || self.type == 'RegularExpression'"
                              }, {
                                message: "must only contain valid characters (matching ^(?:[-A-Za-z0-9/._~!$&'()*+,;=:@]|[%][0-9a-fA-F]{2})+$) for types ['Exact', 'PathPrefix']",
                                rule: "(self.type in ['Exact','PathPrefix']) ? self.value.matches(r\"\"\"^(?:[-A-Za-z0-9/._~!$&'()*+,;=:@]|[%][0-9a-fA-F]{2})+$\"\"\") : true"
                              }]
                            },
                            queryParams: {
                              description: "QueryParams specifies HTTP query parameter matchers. Multiple match\nvalues are ANDed together, meaning, a request must match all the\nspecified query parameters to select the route.\n\nSupport: Extended",
                              items: {
                                description: "HTTPQueryParamMatch describes how to select a HTTP route by matching HTTP\nquery parameters.",
                                properties: {
                                  name: {
                                    description: "Name is the name of the HTTP query param to be matched. This must be an\nexact string match. (See\nhttps://tools.ietf.org/html/rfc7230#section-2.7.3).\n\nIf multiple entries specify equivalent query param names, only the first\nentry with an equivalent name MUST be considered for a match. Subsequent\nentries with an equivalent query param name MUST be ignored.\n\nIf a query param is repeated in an HTTP request, the behavior is\npurposely left undefined, since different data planes have different\ncapabilities. However, it is *recommended* that implementations should\nmatch against the first value of the param if the data plane supports it,\nas this behavior is expected in other load balancing contexts outside of\nthe Gateway API.\n\nUsers SHOULD NOT route traffic based on repeated query params to guard\nthemselves against potential differences in the implementations.",
                                    maxLength: 256,
                                    minLength: 1,
                                    pattern: "^[A-Za-z0-9!#$%&'*+\\-.^_\\x60|~]+$",
                                    type: "string"
                                  },
                                  type: {
                                    default: "Exact",
                                    description: "Type specifies how to match against the value of the query parameter.\n\nSupport: Extended (Exact)\n\nSupport: Implementation-specific (RegularExpression)\n\nSince RegularExpression QueryParamMatchType has Implementation-specific\nconformance, implementations can support POSIX, PCRE or any other\ndialects of regular expressions. Please read the implementation's\ndocumentation to determine the supported dialect.",
                                    enum: ["Exact", "RegularExpression"],
                                    type: "string"
                                  },
                                  value: {
                                    description: "Value is the value of HTTP query param to be matched.",
                                    maxLength: 1024,
                                    minLength: 1,
                                    type: "string"
                                  }
                                },
                                required: ["name", "value"],
                                type: "object"
                              },
                              maxItems: 16,
                              type: "array",
                              "x-kubernetes-list-map-keys": ["name"],
                              "x-kubernetes-list-type": "map"
                            }
                          },
                          type: "object"
                        },
                        maxItems: 64,
                        type: "array"
                      },
                      timeouts: {
                        description: "Timeouts defines the timeouts that can be configured for an HTTP request.\n\nSupport: Extended",
                        properties: {
                          backendRequest: {
                            description: "BackendRequest specifies a timeout for an individual request from the gateway\nto a backend. This covers the time from when the request first starts being\nsent from the gateway to when the full response has been received from the backend.\n\nSetting a timeout to the zero duration (e.g. \"0s\") SHOULD disable the timeout\ncompletely. Implementations that cannot completely disable the timeout MUST\ninstead interpret the zero duration as the longest possible value to which\nthe timeout can be set.\n\nAn entire client HTTP transaction with a gateway, covered by the Request timeout,\nmay result in more than one call from the gateway to the destination backend,\nfor example, if automatic retries are supported.\n\nThe value of BackendRequest must be a Gateway API Duration string as defined by\nGEP-2257.  When this field is unspecified, its behavior is implementation-specific;\nwhen specified, the value of BackendRequest must be no more than the value of the\nRequest timeout (since the Request timeout encompasses the BackendRequest timeout).\n\nSupport: Extended",
                            pattern: "^([0-9]{1,5}(h|m|s|ms)){1,4}$",
                            type: "string"
                          },
                          request: {
                            description: "Request specifies the maximum duration for a gateway to respond to an HTTP request.\nIf the gateway has not been able to respond before this deadline is met, the gateway\nMUST return a timeout error.\n\nFor example, setting the `rules.timeouts.request` field to the value `10s` in an\n`HTTPRoute` will cause a timeout if a client request is taking longer than 10 seconds\nto complete.\n\nSetting a timeout to the zero duration (e.g. \"0s\") SHOULD disable the timeout\ncompletely. Implementations that cannot completely disable the timeout MUST\ninstead interpret the zero duration as the longest possible value to which\nthe timeout can be set.\n\nThis timeout is intended to cover as close to the whole request-response transaction\nas possible although an implementation MAY choose to start the timeout after the entire\nrequest stream has been received instead of immediately after the transaction is\ninitiated by the client.\n\nThe value of Request is a Gateway API Duration string as defined by GEP-2257. When this\nfield is unspecified, request timeout behavior is implementation-specific.\n\nSupport: Extended",
                            pattern: "^([0-9]{1,5}(h|m|s|ms)){1,4}$",
                            type: "string"
                          }
                        },
                        type: "object",
                        "x-kubernetes-validations": [{
                          message: "backendRequest timeout cannot be longer than request timeout",
                          rule: "!(has(self.request) && has(self.backendRequest) && duration(self.request) != duration('0s') && duration(self.backendRequest) > duration(self.request))"
                        }]
                      }
                    },
                    type: "object",
                    "x-kubernetes-validations": [{
                      message: "RequestRedirect filter must not be used together with backendRefs",
                      rule: "(has(self.backendRefs) && size(self.backendRefs) > 0) ? (!has(self.filters) || self.filters.all(f, !has(f.requestRedirect))): true"
                    }, {
                      message: "When using RequestRedirect filter with path.replacePrefixMatch, exactly one PathPrefix match must be specified",
                      rule: "(has(self.filters) && self.filters.exists_one(f, has(f.requestRedirect) && has(f.requestRedirect.path) && f.requestRedirect.path.type == 'ReplacePrefixMatch' && has(f.requestRedirect.path.replacePrefixMatch))) ? ((size(self.matches) != 1 || !has(self.matches[0].path) || self.matches[0].path.type != 'PathPrefix') ? false : true) : true"
                    }, {
                      message: "When using URLRewrite filter with path.replacePrefixMatch, exactly one PathPrefix match must be specified",
                      rule: "(has(self.filters) && self.filters.exists_one(f, has(f.urlRewrite) && has(f.urlRewrite.path) && f.urlRewrite.path.type == 'ReplacePrefixMatch' && has(f.urlRewrite.path.replacePrefixMatch))) ? ((size(self.matches) != 1 || !has(self.matches[0].path) || self.matches[0].path.type != 'PathPrefix') ? false : true) : true"
                    }, {
                      message: "Within backendRefs, when using RequestRedirect filter with path.replacePrefixMatch, exactly one PathPrefix match must be specified",
                      rule: "(has(self.backendRefs) && self.backendRefs.exists_one(b, (has(b.filters) && b.filters.exists_one(f, has(f.requestRedirect) && has(f.requestRedirect.path) && f.requestRedirect.path.type == 'ReplacePrefixMatch' && has(f.requestRedirect.path.replacePrefixMatch))) )) ? ((size(self.matches) != 1 || !has(self.matches[0].path) || self.matches[0].path.type != 'PathPrefix') ? false : true) : true"
                    }, {
                      message: "Within backendRefs, When using URLRewrite filter with path.replacePrefixMatch, exactly one PathPrefix match must be specified",
                      rule: "(has(self.backendRefs) && self.backendRefs.exists_one(b, (has(b.filters) && b.filters.exists_one(f, has(f.urlRewrite) && has(f.urlRewrite.path) && f.urlRewrite.path.type == 'ReplacePrefixMatch' && has(f.urlRewrite.path.replacePrefixMatch))) )) ? ((size(self.matches) != 1 || !has(self.matches[0].path) || self.matches[0].path.type != 'PathPrefix') ? false : true) : true"
                    }]
                  },
                  maxItems: 16,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "While 16 rules and 64 matches per rule are allowed, the total number of matches across all rules in a route must be less than 128",
                    rule: "(self.size() > 0 ? self[0].matches.size() : 0) + (self.size() > 1 ? self[1].matches.size() : 0) + (self.size() > 2 ? self[2].matches.size() : 0) + (self.size() > 3 ? self[3].matches.size() : 0) + (self.size() > 4 ? self[4].matches.size() : 0) + (self.size() > 5 ? self[5].matches.size() : 0) + (self.size() > 6 ? self[6].matches.size() : 0) + (self.size() > 7 ? self[7].matches.size() : 0) + (self.size() > 8 ? self[8].matches.size() : 0) + (self.size() > 9 ? self[9].matches.size() : 0) + (self.size() > 10 ? self[10].matches.size() : 0) + (self.size() > 11 ? self[11].matches.size() : 0) + (self.size() > 12 ? self[12].matches.size() : 0) + (self.size() > 13 ? self[13].matches.size() : 0) + (self.size() > 14 ? self[14].matches.size() : 0) + (self.size() > 15 ? self[15].matches.size() : 0) <= 128"
                  }]
                }
              },
              type: "object"
            },
            status: {
              description: "Status defines the current state of HTTPRoute.",
              properties: {
                parents: {
                  description: "Parents is a list of parent resources (usually Gateways) that are\nassociated with the route, and the status of the route with respect to\neach parent. When this route attaches to a parent, the controller that\nmanages the parent must add an entry to this list when the controller\nfirst sees the route and should update the entry as appropriate when the\nroute or gateway is modified.\n\nNote that parent references that cannot be resolved by an implementation\nof this API will not be added to this list. Implementations of this API\ncan only populate Route status for the Gateways/parent resources they are\nresponsible for.\n\nA maximum of 32 Gateways will be represented in this list. An empty list\nmeans the route has not been attached to any Gateway.",
                  items: {
                    description: "RouteParentStatus describes the status of a route with respect to an\nassociated Parent.",
                    properties: {
                      conditions: {
                        description: "Conditions describes the status of the route with respect to the Gateway.\nNote that the route's availability is also subject to the Gateway's own\nstatus conditions and listener status.\n\nIf the Route's ParentRef specifies an existing Gateway that supports\nRoutes of this kind AND that Gateway's controller has sufficient access,\nthen that Gateway's controller MUST set the \"Accepted\" condition on the\nRoute, to indicate whether the route has been accepted or rejected by the\nGateway, and why.\n\nA Route MUST be considered \"Accepted\" if at least one of the Route's\nrules is implemented by the Gateway.\n\nThere are a number of cases where the \"Accepted\" condition may not be set\ndue to lack of controller visibility, that includes when:\n\n* The Route refers to a non-existent parent.\n* The Route is of a type that the controller does not support.\n* The Route is in a namespace the controller does not have access to.",
                        items: {
                          description: "Condition contains details for one aspect of the current state of this API Resource.",
                          properties: {
                            lastTransitionTime: {
                              description: "lastTransitionTime is the last time the condition transitioned from one status to another.\nThis should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.",
                              format: "date-time",
                              type: "string"
                            },
                            message: {
                              description: "message is a human readable message indicating details about the transition.\nThis may be an empty string.",
                              maxLength: 32768,
                              type: "string"
                            },
                            observedGeneration: {
                              description: "observedGeneration represents the .metadata.generation that the condition was set based upon.\nFor instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date\nwith respect to the current state of the instance.",
                              format: "int64",
                              minimum: 0,
                              type: "integer"
                            },
                            reason: {
                              description: "reason contains a programmatic identifier indicating the reason for the condition's last transition.\nProducers of specific condition types may define expected values and meanings for this field,\nand whether the values are considered a guaranteed API.\nThe value should be a CamelCase string.\nThis field may not be empty.",
                              maxLength: 1024,
                              minLength: 1,
                              pattern: "^[A-Za-z]([A-Za-z0-9_,:]*[A-Za-z0-9_])?$",
                              type: "string"
                            },
                            status: {
                              description: "status of the condition, one of True, False, Unknown.",
                              enum: ["True", "False", "Unknown"],
                              type: "string"
                            },
                            type: {
                              description: "type of condition in CamelCase or in foo.example.com/CamelCase.",
                              maxLength: 316,
                              pattern: "^([a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*/)?(([A-Za-z0-9][-A-Za-z0-9_.]*)?[A-Za-z0-9])$",
                              type: "string"
                            }
                          },
                          required: ["lastTransitionTime", "message", "reason", "status", "type"],
                          type: "object"
                        },
                        maxItems: 8,
                        minItems: 1,
                        type: "array",
                        "x-kubernetes-list-map-keys": ["type"],
                        "x-kubernetes-list-type": "map"
                      },
                      controllerName: {
                        description: "ControllerName is a domain/path string that indicates the name of the\ncontroller that wrote this status. This corresponds with the\ncontrollerName field on GatewayClass.\n\nExample: \"example.net/gateway-controller\".\n\nThe format of this field is DOMAIN \"/\" PATH, where DOMAIN and PATH are\nvalid Kubernetes names\n(https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).\n\nControllers MUST populate this field when writing status. Controllers should ensure that\nentries to status populated with their ControllerName are cleaned up when they are no\nlonger necessary.",
                        maxLength: 253,
                        minLength: 1,
                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*\\/[A-Za-z0-9\\/\\-._~%!$&'()*+,;=:]+$",
                        type: "string"
                      },
                      parentRef: {
                        description: "ParentRef corresponds with a ParentRef in the spec that this\nRouteParentStatus struct describes the status of.",
                        properties: {
                          group: {
                            default: "gateway.networking.k8s.io",
                            description: "Group is the group of the referent.\nWhen unspecified, \"gateway.networking.k8s.io\" is inferred.\nTo set the core API group (such as for a \"Service\" kind referent),\nGroup must be explicitly set to \"\" (empty string).\n\nSupport: Core",
                            maxLength: 253,
                            pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                            type: "string"
                          },
                          kind: {
                            default: "Gateway",
                            description: "Kind is kind of the referent.\n\nThere are two kinds of parent resources with \"Core\" support:\n\n* Gateway (Gateway conformance profile)\n* Service (Mesh conformance profile, ClusterIP Services only)\n\nSupport for other resources is Implementation-Specific.",
                            maxLength: 63,
                            minLength: 1,
                            pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                            type: "string"
                          },
                          name: {
                            description: "Name is the name of the referent.\n\nSupport: Core",
                            maxLength: 253,
                            minLength: 1,
                            type: "string"
                          },
                          namespace: {
                            description: "Namespace is the namespace of the referent. When unspecified, this refers\nto the local namespace of the Route.\n\nNote that there are specific rules for ParentRefs which cross namespace\nboundaries. Cross-namespace references are only valid if they are explicitly\nallowed by something in the namespace they are referring to. For example:\nGateway has the AllowedRoutes field, and ReferenceGrant provides a\ngeneric way to enable any other kind of cross-namespace reference.\n\n\n\nSupport: Core",
                            maxLength: 63,
                            minLength: 1,
                            pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                            type: "string"
                          },
                          port: {
                            description: "Port is the network port this Route targets. It can be interpreted\ndifferently based on the type of parent resource.\n\nWhen the parent resource is a Gateway, this targets all listeners\nlistening on the specified port that also support this kind of Route(and\nselect this Route). It's not recommended to set `Port` unless the\nnetworking behaviors specified in a Route must apply to a specific port\nas opposed to a listener(s) whose port(s) may be changed. When both Port\nand SectionName are specified, the name and port of the selected listener\nmust match both specified values.\n\n\n\nImplementations MAY choose to support other parent resources.\nImplementations supporting other types of parent resources MUST clearly\ndocument how/if Port is interpreted.\n\nFor the purpose of status, an attachment is considered successful as\nlong as the parent resource accepts it partially. For example, Gateway\nlisteners can restrict which Routes can attach to them by Route kind,\nnamespace, or hostname. If 1 of 2 Gateway listeners accept attachment\nfrom the referencing Route, the Route MUST be considered successfully\nattached. If no Gateway listeners accept attachment from this Route,\nthe Route MUST be considered detached from the Gateway.\n\nSupport: Extended",
                            format: "int32",
                            maximum: 65535,
                            minimum: 1,
                            type: "integer"
                          },
                          sectionName: {
                            description: "SectionName is the name of a section within the target resource. In the\nfollowing resources, SectionName is interpreted as the following:\n\n* Gateway: Listener name. When both Port (experimental) and SectionName\nare specified, the name and port of the selected listener must match\nboth specified values.\n* Service: Port name. When both Port (experimental) and SectionName\nare specified, the name and port of the selected listener must match\nboth specified values.\n\nImplementations MAY choose to support attaching Routes to other resources.\nIf that is the case, they MUST clearly document how SectionName is\ninterpreted.\n\nWhen unspecified (empty string), this will reference the entire resource.\nFor the purpose of status, an attachment is considered successful if at\nleast one section in the parent resource accepts it. For example, Gateway\nlisteners can restrict which Routes can attach to them by Route kind,\nnamespace, or hostname. If 1 of 2 Gateway listeners accept attachment from\nthe referencing Route, the Route MUST be considered successfully\nattached. If no Gateway listeners accept attachment from this Route, the\nRoute MUST be considered detached from the Gateway.\n\nSupport: Core",
                            maxLength: 253,
                            minLength: 1,
                            pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                            type: "string"
                          }
                        },
                        required: ["name"],
                        type: "object"
                      }
                    },
                    required: ["controllerName", "parentRef"],
                    type: "object"
                  },
                  maxItems: 32,
                  type: "array"
                }
              },
              required: ["parents"],
              type: "object"
            }
          },
          required: ["spec"],
          type: "object"
        }
      },
      served: true,
      storage: false,
      subresources: {
        status: {}
      }
    }]
  },
  status: {
    acceptedNames: {
      kind: "",
      plural: ""
    },
    conditions: null,
    storedVersions: null
  }
};
export const CustomResourceDefinition_ReferencegrantsGatewayNetworkingK8sIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "api-approved.kubernetes.io": "https://github.com/kubernetes-sigs/gateway-api/pull/3328",
      "gateway.networking.k8s.io/bundle-version": "v1.2.1",
      "gateway.networking.k8s.io/channel": "standard"
    },
    creationTimestamp: null,
    name: "referencegrants.gateway.networking.k8s.io"
  },
  spec: {
    group: "gateway.networking.k8s.io",
    names: {
      categories: ["gateway-api"],
      kind: "ReferenceGrant",
      listKind: "ReferenceGrantList",
      plural: "referencegrants",
      shortNames: ["refgrant"],
      singular: "referencegrant"
    },
    scope: "Namespaced",
    versions: [{
      additionalPrinterColumns: [{
        jsonPath: ".metadata.creationTimestamp",
        name: "Age",
        type: "date"
      }],
      name: "v1beta1",
      schema: {
        openAPIV3Schema: {
          description: "ReferenceGrant identifies kinds of resources in other namespaces that are\ntrusted to reference the specified kinds of resources in the same namespace\nas the policy.\n\nEach ReferenceGrant can be used to represent a unique trust relationship.\nAdditional Reference Grants can be used to add to the set of trusted\nsources of inbound references for the namespace they are defined within.\n\nAll cross-namespace references in Gateway API (with the exception of cross-namespace\nGateway-route attachment) require a ReferenceGrant.\n\nReferenceGrant is a form of runtime verification allowing users to assert\nwhich cross-namespace object references are permitted. Implementations that\nsupport ReferenceGrant MUST NOT permit cross-namespace references which have\nno grant, and MUST respond to the removal of a grant by revoking the access\nthat the grant allowed.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "Spec defines the desired state of ReferenceGrant.",
              properties: {
                from: {
                  description: "From describes the trusted namespaces and kinds that can reference the\nresources described in \"To\". Each entry in this list MUST be considered\nto be an additional place that references can be valid from, or to put\nthis another way, entries MUST be combined using OR.\n\nSupport: Core",
                  items: {
                    description: "ReferenceGrantFrom describes trusted namespaces and kinds.",
                    properties: {
                      group: {
                        description: "Group is the group of the referent.\nWhen empty, the Kubernetes core API group is inferred.\n\nSupport: Core",
                        maxLength: 253,
                        pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                        type: "string"
                      },
                      kind: {
                        description: "Kind is the kind of the referent. Although implementations may support\nadditional resources, the following types are part of the \"Core\"\nsupport level for this field.\n\nWhen used to permit a SecretObjectReference:\n\n* Gateway\n\nWhen used to permit a BackendObjectReference:\n\n* GRPCRoute\n* HTTPRoute\n* TCPRoute\n* TLSRoute\n* UDPRoute",
                        maxLength: 63,
                        minLength: 1,
                        pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                        type: "string"
                      },
                      namespace: {
                        description: "Namespace is the namespace of the referent.\n\nSupport: Core",
                        maxLength: 63,
                        minLength: 1,
                        pattern: "^[a-z0-9]([-a-z0-9]*[a-z0-9])?$",
                        type: "string"
                      }
                    },
                    required: ["group", "kind", "namespace"],
                    type: "object"
                  },
                  maxItems: 16,
                  minItems: 1,
                  type: "array"
                },
                to: {
                  description: "To describes the resources that may be referenced by the resources\ndescribed in \"From\". Each entry in this list MUST be considered to be an\nadditional place that references can be valid to, or to put this another\nway, entries MUST be combined using OR.\n\nSupport: Core",
                  items: {
                    description: "ReferenceGrantTo describes what Kinds are allowed as targets of the\nreferences.",
                    properties: {
                      group: {
                        description: "Group is the group of the referent.\nWhen empty, the Kubernetes core API group is inferred.\n\nSupport: Core",
                        maxLength: 253,
                        pattern: "^$|^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$",
                        type: "string"
                      },
                      kind: {
                        description: "Kind is the kind of the referent. Although implementations may support\nadditional resources, the following types are part of the \"Core\"\nsupport level for this field:\n\n* Secret when used to permit a SecretObjectReference\n* Service when used to permit a BackendObjectReference",
                        maxLength: 63,
                        minLength: 1,
                        pattern: "^[a-zA-Z]([-a-zA-Z0-9]*[a-zA-Z0-9])?$",
                        type: "string"
                      },
                      name: {
                        description: "Name is the name of the referent. When unspecified, this policy\nrefers to all resources of the specified Group and Kind in the local\nnamespace.",
                        maxLength: 253,
                        minLength: 1,
                        type: "string"
                      }
                    },
                    required: ["group", "kind"],
                    type: "object"
                  },
                  maxItems: 16,
                  minItems: 1,
                  type: "array"
                }
              },
              required: ["from", "to"],
              type: "object"
            }
          },
          type: "object"
        }
      },
      served: true,
      storage: true,
      subresources: {}
    }]
  },
  status: {
    acceptedNames: {
      kind: "",
      plural: ""
    },
    conditions: null,
    storedVersions: null
  }
};
export const CustomResourceDefinition_AccesscontrolpoliciesHubTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.17.1"
    },
    name: "accesscontrolpolicies.hub.traefik.io"
  },
  spec: {
    group: "hub.traefik.io",
    names: {
      kind: "AccessControlPolicy",
      listKind: "AccessControlPolicyList",
      plural: "accesscontrolpolicies",
      singular: "accesscontrolpolicy"
    },
    scope: "Cluster",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "AccessControlPolicy defines an access control policy.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "AccessControlPolicySpec configures an access control policy.",
              properties: {
                apiKey: {
                  description: "AccessControlPolicyAPIKey configure an APIKey control policy.",
                  properties: {
                    forwardHeaders: {
                      additionalProperties: {
                        type: "string"
                      },
                      description: "ForwardHeaders instructs the middleware to forward key metadata as header values upon successful authentication.",
                      type: "object"
                    },
                    keys: {
                      description: "Keys define the set of authorized keys to access a protected resource.",
                      items: {
                        description: "AccessControlPolicyAPIKeyKey defines an API key.",
                        properties: {
                          id: {
                            description: "ID is the unique identifier of the key.",
                            type: "string"
                          },
                          metadata: {
                            additionalProperties: {
                              type: "string"
                            },
                            description: "Metadata holds arbitrary metadata for this key, can be used by ForwardHeaders.",
                            type: "object"
                          },
                          value: {
                            description: "Value is the SHAKE-256 hash (using 64 bytes) of the API key.",
                            type: "string"
                          }
                        },
                        required: ["id", "value"],
                        type: "object"
                      },
                      type: "array"
                    },
                    keySource: {
                      description: "KeySource defines how to extract API keys from requests.",
                      properties: {
                        cookie: {
                          description: "Cookie is the name of a cookie.",
                          type: "string"
                        },
                        header: {
                          description: "Header is the name of a header.",
                          type: "string"
                        },
                        headerAuthScheme: {
                          description: "HeaderAuthScheme sets an optional auth scheme when Header is set to \"Authorization\".\nIf set, this scheme is removed from the token, and all requests not including it are dropped.",
                          type: "string"
                        },
                        query: {
                          description: "Query is the name of a query parameter.",
                          type: "string"
                        }
                      },
                      type: "object"
                    }
                  },
                  required: ["keySource"],
                  type: "object"
                },
                basicAuth: {
                  description: "AccessControlPolicyBasicAuth holds the HTTP basic authentication configuration.",
                  properties: {
                    forwardUsernameHeader: {
                      type: "string"
                    },
                    realm: {
                      type: "string"
                    },
                    stripAuthorizationHeader: {
                      type: "boolean"
                    },
                    users: {
                      items: {
                        type: "string"
                      },
                      type: "array"
                    }
                  },
                  type: "object"
                },
                jwt: {
                  description: "AccessControlPolicyJWT configures a JWT access control policy.",
                  properties: {
                    claims: {
                      type: "string"
                    },
                    forwardHeaders: {
                      additionalProperties: {
                        type: "string"
                      },
                      type: "object"
                    },
                    jwksFile: {
                      type: "string"
                    },
                    jwksUrl: {
                      type: "string"
                    },
                    publicKey: {
                      type: "string"
                    },
                    signingSecret: {
                      type: "string"
                    },
                    signingSecretBase64Encoded: {
                      type: "boolean"
                    },
                    stripAuthorizationHeader: {
                      type: "boolean"
                    },
                    tokenQueryKey: {
                      type: "string"
                    }
                  },
                  type: "object"
                },
                oAuthIntro: {
                  description: "AccessControlOAuthIntro configures an OAuth 2.0 Token Introspection access control policy.",
                  properties: {
                    claims: {
                      type: "string"
                    },
                    clientConfig: {
                      description: "AccessControlOAuthIntroClientConfig configures the OAuth 2.0 client for issuing token introspection requests.",
                      properties: {
                        headers: {
                          additionalProperties: {
                            type: "string"
                          },
                          description: "Headers to set when sending requests to the Authorization Server.",
                          type: "object"
                        },
                        maxRetries: {
                          default: 3,
                          description: "MaxRetries defines the number of retries for introspection requests.",
                          type: "integer"
                        },
                        timeoutSeconds: {
                          default: 5,
                          description: "TimeoutSeconds configures the maximum amount of seconds to wait before giving up on requests.",
                          type: "integer"
                        },
                        tls: {
                          description: "TLS configures TLS communication with the Authorization Server.",
                          properties: {
                            ca: {
                              description: "CA sets the CA bundle used to sign the Authorization Server certificate.",
                              type: "string"
                            },
                            insecureSkipVerify: {
                              description: "InsecureSkipVerify skips the Authorization Server certificate validation.\nFor testing purposes only, do not use in production.",
                              type: "boolean"
                            }
                          },
                          type: "object"
                        },
                        tokenTypeHint: {
                          description: "TokenTypeHint is a hint to pass to the Authorization Server.\nSee https://tools.ietf.org/html/rfc7662#section-2.1 for more information.",
                          type: "string"
                        },
                        url: {
                          description: "URL of the Authorization Server.",
                          type: "string"
                        }
                      },
                      required: ["url"],
                      type: "object"
                    },
                    forwardHeaders: {
                      additionalProperties: {
                        type: "string"
                      },
                      type: "object"
                    },
                    tokenSource: {
                      description: "TokenSource describes how to extract tokens from HTTP requests.\nIf multiple sources are set, the order is the following: header > query > cookie.",
                      properties: {
                        cookie: {
                          description: "Cookie is the name of a cookie.",
                          type: "string"
                        },
                        header: {
                          description: "Header is the name of a header.",
                          type: "string"
                        },
                        headerAuthScheme: {
                          description: "HeaderAuthScheme sets an optional auth scheme when Header is set to \"Authorization\".\nIf set, this scheme is removed from the token, and all requests not including it are dropped.",
                          type: "string"
                        },
                        query: {
                          description: "Query is the name of a query parameter.",
                          type: "string"
                        }
                      },
                      type: "object"
                    }
                  },
                  required: ["clientConfig", "tokenSource"],
                  type: "object"
                },
                oidc: {
                  description: "AccessControlPolicyOIDC holds the OIDC authentication configuration.",
                  properties: {
                    authParams: {
                      additionalProperties: {
                        type: "string"
                      },
                      type: "object"
                    },
                    claims: {
                      type: "string"
                    },
                    clientId: {
                      type: "string"
                    },
                    disableAuthRedirectionPaths: {
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    forwardHeaders: {
                      additionalProperties: {
                        type: "string"
                      },
                      type: "object"
                    },
                    issuer: {
                      type: "string"
                    },
                    logoutUrl: {
                      type: "string"
                    },
                    redirectUrl: {
                      type: "string"
                    },
                    scopes: {
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    secret: {
                      description: "SecretReference represents a Secret Reference. It has enough information to retrieve secret\nin any namespace",
                      properties: {
                        name: {
                          description: "name is unique within a namespace to reference a secret resource.",
                          type: "string"
                        },
                        namespace: {
                          description: "namespace defines the space within which the secret name must be unique.",
                          type: "string"
                        }
                      },
                      type: "object",
                      "x-kubernetes-map-type": "atomic"
                    },
                    session: {
                      description: "Session holds session configuration.",
                      properties: {
                        domain: {
                          type: "string"
                        },
                        path: {
                          type: "string"
                        },
                        refresh: {
                          type: "boolean"
                        },
                        sameSite: {
                          type: "string"
                        },
                        secure: {
                          type: "boolean"
                        }
                      },
                      type: "object"
                    },
                    stateCookie: {
                      description: "StateCookie holds state cookie configuration.",
                      properties: {
                        domain: {
                          type: "string"
                        },
                        path: {
                          type: "string"
                        },
                        sameSite: {
                          type: "string"
                        },
                        secure: {
                          type: "boolean"
                        }
                      },
                      type: "object"
                    }
                  },
                  type: "object"
                },
                oidcGoogle: {
                  description: "AccessControlPolicyOIDCGoogle holds the Google OIDC authentication configuration.",
                  properties: {
                    authParams: {
                      additionalProperties: {
                        type: "string"
                      },
                      type: "object"
                    },
                    clientId: {
                      type: "string"
                    },
                    emails: {
                      description: "Emails are the allowed emails to connect.",
                      items: {
                        type: "string"
                      },
                      minItems: 1,
                      type: "array"
                    },
                    forwardHeaders: {
                      additionalProperties: {
                        type: "string"
                      },
                      type: "object"
                    },
                    logoutUrl: {
                      type: "string"
                    },
                    redirectUrl: {
                      type: "string"
                    },
                    secret: {
                      description: "SecretReference represents a Secret Reference. It has enough information to retrieve secret\nin any namespace",
                      properties: {
                        name: {
                          description: "name is unique within a namespace to reference a secret resource.",
                          type: "string"
                        },
                        namespace: {
                          description: "namespace defines the space within which the secret name must be unique.",
                          type: "string"
                        }
                      },
                      type: "object",
                      "x-kubernetes-map-type": "atomic"
                    },
                    session: {
                      description: "Session holds session configuration.",
                      properties: {
                        domain: {
                          type: "string"
                        },
                        path: {
                          type: "string"
                        },
                        refresh: {
                          type: "boolean"
                        },
                        sameSite: {
                          type: "string"
                        },
                        secure: {
                          type: "boolean"
                        }
                      },
                      type: "object"
                    },
                    stateCookie: {
                      description: "StateCookie holds state cookie configuration.",
                      properties: {
                        domain: {
                          type: "string"
                        },
                        path: {
                          type: "string"
                        },
                        sameSite: {
                          type: "string"
                        },
                        secure: {
                          type: "boolean"
                        }
                      },
                      type: "object"
                    }
                  },
                  type: "object"
                }
              },
              type: "object"
            },
            status: {
              description: "The current status of this access control policy.",
              properties: {
                specHash: {
                  type: "string"
                },
                syncedAt: {
                  format: "date-time",
                  type: "string"
                },
                version: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_AiservicesHubTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.17.1"
    },
    name: "aiservices.hub.traefik.io"
  },
  spec: {
    group: "hub.traefik.io",
    names: {
      kind: "AIService",
      listKind: "AIServiceList",
      plural: "aiservices",
      singular: "aiservice"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "AIService is a Kubernetes-like Service to interact with a text-based LLM provider. It defines the parameters and credentials required to interact with various LLM providers.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "The desired behavior of this AIService.",
              properties: {
                anthropic: {
                  description: "Anthropic configures Anthropic backend.",
                  properties: {
                    model: {
                      type: "string"
                    },
                    params: {
                      description: "Params holds the LLM hyperparameters.",
                      properties: {
                        frequencyPenalty: {
                          type: "number"
                        },
                        maxTokens: {
                          type: "integer"
                        },
                        presencePenalty: {
                          type: "number"
                        },
                        temperature: {
                          type: "number"
                        },
                        topP: {
                          type: "number"
                        }
                      },
                      type: "object"
                    },
                    token: {
                      type: "string"
                    }
                  },
                  required: ["token"],
                  type: "object"
                },
                azureOpenai: {
                  description: "AzureOpenAI configures AzureOpenAI.",
                  properties: {
                    apiKey: {
                      type: "string"
                    },
                    baseUrl: {
                      type: "string"
                    },
                    deploymentName: {
                      type: "string"
                    },
                    model: {
                      type: "string"
                    },
                    params: {
                      description: "Params holds the LLM hyperparameters.",
                      properties: {
                        frequencyPenalty: {
                          type: "number"
                        },
                        maxTokens: {
                          type: "integer"
                        },
                        presencePenalty: {
                          type: "number"
                        },
                        temperature: {
                          type: "number"
                        },
                        topP: {
                          type: "number"
                        }
                      },
                      type: "object"
                    }
                  },
                  required: ["apiKey", "baseUrl", "deploymentName"],
                  type: "object"
                },
                bedrock: {
                  description: "Bedrock configures Bedrock backend.",
                  properties: {
                    model: {
                      type: "string"
                    },
                    params: {
                      description: "Params holds the LLM hyperparameters.",
                      properties: {
                        frequencyPenalty: {
                          type: "number"
                        },
                        maxTokens: {
                          type: "integer"
                        },
                        presencePenalty: {
                          type: "number"
                        },
                        temperature: {
                          type: "number"
                        },
                        topP: {
                          type: "number"
                        }
                      },
                      type: "object"
                    },
                    region: {
                      type: "string"
                    },
                    systemMessage: {
                      type: "boolean"
                    }
                  },
                  type: "object"
                },
                cohere: {
                  description: "Cohere configures Cohere backend.",
                  properties: {
                    model: {
                      type: "string"
                    },
                    params: {
                      description: "Params holds the LLM hyperparameters.",
                      properties: {
                        frequencyPenalty: {
                          type: "number"
                        },
                        maxTokens: {
                          type: "integer"
                        },
                        presencePenalty: {
                          type: "number"
                        },
                        temperature: {
                          type: "number"
                        },
                        topP: {
                          type: "number"
                        }
                      },
                      type: "object"
                    },
                    token: {
                      type: "string"
                    }
                  },
                  required: ["token"],
                  type: "object"
                },
                deepSeek: {
                  description: "DeepSeek configures DeepSeek.",
                  properties: {
                    baseUrl: {
                      type: "string"
                    },
                    model: {
                      type: "string"
                    },
                    params: {
                      description: "Params holds the LLM hyperparameters.",
                      properties: {
                        frequencyPenalty: {
                          type: "number"
                        },
                        maxTokens: {
                          type: "integer"
                        },
                        presencePenalty: {
                          type: "number"
                        },
                        temperature: {
                          type: "number"
                        },
                        topP: {
                          type: "number"
                        }
                      },
                      type: "object"
                    },
                    token: {
                      type: "string"
                    }
                  },
                  required: ["token"],
                  type: "object"
                },
                gemini: {
                  description: "Gemini configures Gemini backend.",
                  properties: {
                    apiKey: {
                      type: "string"
                    },
                    model: {
                      type: "string"
                    },
                    params: {
                      description: "Params holds the LLM hyperparameters.",
                      properties: {
                        frequencyPenalty: {
                          type: "number"
                        },
                        maxTokens: {
                          type: "integer"
                        },
                        presencePenalty: {
                          type: "number"
                        },
                        temperature: {
                          type: "number"
                        },
                        topP: {
                          type: "number"
                        }
                      },
                      type: "object"
                    }
                  },
                  required: ["apiKey"],
                  type: "object"
                },
                mistral: {
                  description: "Mistral configures Mistral AI backend.",
                  properties: {
                    apiKey: {
                      type: "string"
                    },
                    model: {
                      type: "string"
                    },
                    params: {
                      description: "Params holds the LLM hyperparameters.",
                      properties: {
                        frequencyPenalty: {
                          type: "number"
                        },
                        maxTokens: {
                          type: "integer"
                        },
                        presencePenalty: {
                          type: "number"
                        },
                        temperature: {
                          type: "number"
                        },
                        topP: {
                          type: "number"
                        }
                      },
                      type: "object"
                    }
                  },
                  required: ["apiKey"],
                  type: "object"
                },
                ollama: {
                  description: "Ollama configures Ollama backend.",
                  properties: {
                    baseUrl: {
                      type: "string"
                    },
                    model: {
                      type: "string"
                    },
                    params: {
                      description: "Params holds the LLM hyperparameters.",
                      properties: {
                        frequencyPenalty: {
                          type: "number"
                        },
                        maxTokens: {
                          type: "integer"
                        },
                        presencePenalty: {
                          type: "number"
                        },
                        temperature: {
                          type: "number"
                        },
                        topP: {
                          type: "number"
                        }
                      },
                      type: "object"
                    }
                  },
                  required: ["baseUrl"],
                  type: "object"
                },
                openai: {
                  description: "OpenAI configures OpenAI.",
                  properties: {
                    baseUrl: {
                      type: "string"
                    },
                    model: {
                      type: "string"
                    },
                    params: {
                      description: "Params holds the LLM hyperparameters.",
                      properties: {
                        frequencyPenalty: {
                          type: "number"
                        },
                        maxTokens: {
                          type: "integer"
                        },
                        presencePenalty: {
                          type: "number"
                        },
                        temperature: {
                          type: "number"
                        },
                        topP: {
                          type: "number"
                        }
                      },
                      type: "object"
                    },
                    token: {
                      type: "string"
                    }
                  },
                  required: ["token"],
                  type: "object"
                },
                qWen: {
                  description: "QWen configures QWen.",
                  properties: {
                    baseUrl: {
                      type: "string"
                    },
                    model: {
                      type: "string"
                    },
                    params: {
                      description: "Params holds the LLM hyperparameters.",
                      properties: {
                        frequencyPenalty: {
                          type: "number"
                        },
                        maxTokens: {
                          type: "integer"
                        },
                        presencePenalty: {
                          type: "number"
                        },
                        temperature: {
                          type: "number"
                        },
                        topP: {
                          type: "number"
                        }
                      },
                      type: "object"
                    },
                    token: {
                      type: "string"
                    }
                  },
                  required: ["token"],
                  type: "object"
                }
              },
              type: "object"
            }
          },
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_ApiaccessesHubTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.17.1"
    },
    name: "apiaccesses.hub.traefik.io"
  },
  spec: {
    group: "hub.traefik.io",
    names: {
      kind: "APIAccess",
      listKind: "APIAccessList",
      plural: "apiaccesses",
      singular: "apiaccess"
    },
    scope: "Namespaced",
    versions: [{
      deprecated: true,
      deprecationWarning: "APIAccess is deprecated in favor of APICatalogItems and ManagedSubscription",
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "APIAccess defines who can access to a set of APIs.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "The desired behavior of this APIAccess.",
              properties: {
                apiBundles: {
                  description: "APIBundles defines a set of APIBundle that will be accessible to the configured audience.\nMultiple APIAccesses can select the same APIBundles.",
                  items: {
                    description: "APIBundleReference references an APIBundle.",
                    properties: {
                      name: {
                        description: "Name of the APIBundle.",
                        maxLength: 253,
                        type: "string"
                      }
                    },
                    required: ["name"],
                    type: "object"
                  },
                  maxItems: 100,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "duplicated apiBundles",
                    rule: "self.all(x, self.exists_one(y, x.name == y.name))"
                  }]
                },
                apiPlan: {
                  description: "APIPlan defines which APIPlan will be used.",
                  properties: {
                    name: {
                      description: "Name of the APIPlan.",
                      maxLength: 253,
                      type: "string"
                    }
                  },
                  required: ["name"],
                  type: "object"
                },
                apis: {
                  description: "APIs defines a set of APIs that will be accessible to the configured audience.\nMultiple APIAccesses can select the same APIs.\nWhen combined with APISelector, this set of APIs is appended to the matching APIs.",
                  items: {
                    description: "APIReference references an API.",
                    properties: {
                      name: {
                        description: "Name of the API.",
                        maxLength: 253,
                        type: "string"
                      }
                    },
                    required: ["name"],
                    type: "object"
                  },
                  maxItems: 100,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "duplicated apis",
                    rule: "self.all(x, self.exists_one(y, x.name == y.name))"
                  }]
                },
                apiSelector: {
                  description: "APISelector selects the APIs that will be accessible to the configured audience.\nMultiple APIAccesses can select the same set of APIs.\nThis field is optional and follows standard label selector semantics.\nAn empty APISelector matches any API.",
                  properties: {
                    matchExpressions: {
                      description: "matchExpressions is a list of label selector requirements. The requirements are ANDed.",
                      items: {
                        description: "A label selector requirement is a selector that contains values, a key, and an operator that\nrelates the key and values.",
                        properties: {
                          key: {
                            description: "key is the label key that the selector applies to.",
                            type: "string"
                          },
                          operator: {
                            description: "operator represents a key's relationship to a set of values.\nValid operators are In, NotIn, Exists and DoesNotExist.",
                            type: "string"
                          },
                          values: {
                            description: "values is an array of string values. If the operator is In or NotIn,\nthe values array must be non-empty. If the operator is Exists or DoesNotExist,\nthe values array must be empty. This array is replaced during a strategic\nmerge patch.",
                            items: {
                              type: "string"
                            },
                            type: "array",
                            "x-kubernetes-list-type": "atomic"
                          }
                        },
                        required: ["key", "operator"],
                        type: "object"
                      },
                      type: "array",
                      "x-kubernetes-list-type": "atomic"
                    },
                    matchLabels: {
                      additionalProperties: {
                        type: "string"
                      },
                      description: "matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels\nmap is equivalent to an element of matchExpressions, whose key field is \"key\", the\noperator is \"In\", and the values array contains only \"value\". The requirements are ANDed.",
                      type: "object"
                    }
                  },
                  type: "object",
                  "x-kubernetes-map-type": "atomic"
                },
                everyone: {
                  description: "Everyone indicates that all users will have access to the selected APIs.",
                  type: "boolean"
                },
                groups: {
                  description: "Groups are the consumer groups that will gain access to the selected APIs.",
                  items: {
                    type: "string"
                  },
                  type: "array"
                },
                operationFilter: {
                  description: "OperationFilter specifies the allowed operations on APIs and APIVersions.\nIf not set, all operations are available.\nAn empty OperationFilter prohibits all operations.",
                  properties: {
                    include: {
                      description: "Include defines the names of OperationSets that will be accessible.",
                      items: {
                        type: "string"
                      },
                      maxItems: 100,
                      type: "array"
                    }
                  },
                  type: "object"
                },
                weight: {
                  description: "Weight specifies the evaluation order of the plan.",
                  type: "integer",
                  "x-kubernetes-validations": [{
                    message: "must be a positive number",
                    rule: "self >= 0"
                  }]
                }
              },
              type: "object",
              "x-kubernetes-validations": [{
                message: "groups and everyone are mutually exclusive",
                rule: "(has(self.everyone) && has(self.groups)) ? !(self.everyone && self.groups.size() > 0) : true"
              }]
            },
            status: {
              description: "The current status of this APIAccess.",
              properties: {
                hash: {
                  description: "Hash is a hash representing the APIAccess.",
                  type: "string"
                },
                syncedAt: {
                  format: "date-time",
                  type: "string"
                },
                version: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_ApibundlesHubTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.17.1"
    },
    name: "apibundles.hub.traefik.io"
  },
  spec: {
    group: "hub.traefik.io",
    names: {
      kind: "APIBundle",
      listKind: "APIBundleList",
      plural: "apibundles",
      singular: "apibundle"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "APIBundle defines a set of APIs.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "The desired behavior of this APIBundle.",
              properties: {
                apis: {
                  description: "APIs defines a set of APIs that will be accessible to the configured audience.\nMultiple APIBundles can select the same APIs.\nWhen combined with APISelector, this set of APIs is appended to the matching APIs.",
                  items: {
                    description: "APIReference references an API.",
                    properties: {
                      name: {
                        description: "Name of the API.",
                        maxLength: 253,
                        type: "string"
                      }
                    },
                    required: ["name"],
                    type: "object"
                  },
                  maxItems: 100,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "duplicated apis",
                    rule: "self.all(x, self.exists_one(y, x.name == y.name))"
                  }]
                },
                apiSelector: {
                  description: "APISelector selects the APIs that will be accessible to the configured audience.\nMultiple APIBundles can select the same set of APIs.\nThis field is optional and follows standard label selector semantics.\nAn empty APISelector matches any API.",
                  properties: {
                    matchExpressions: {
                      description: "matchExpressions is a list of label selector requirements. The requirements are ANDed.",
                      items: {
                        description: "A label selector requirement is a selector that contains values, a key, and an operator that\nrelates the key and values.",
                        properties: {
                          key: {
                            description: "key is the label key that the selector applies to.",
                            type: "string"
                          },
                          operator: {
                            description: "operator represents a key's relationship to a set of values.\nValid operators are In, NotIn, Exists and DoesNotExist.",
                            type: "string"
                          },
                          values: {
                            description: "values is an array of string values. If the operator is In or NotIn,\nthe values array must be non-empty. If the operator is Exists or DoesNotExist,\nthe values array must be empty. This array is replaced during a strategic\nmerge patch.",
                            items: {
                              type: "string"
                            },
                            type: "array",
                            "x-kubernetes-list-type": "atomic"
                          }
                        },
                        required: ["key", "operator"],
                        type: "object"
                      },
                      type: "array",
                      "x-kubernetes-list-type": "atomic"
                    },
                    matchLabels: {
                      additionalProperties: {
                        type: "string"
                      },
                      description: "matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels\nmap is equivalent to an element of matchExpressions, whose key field is \"key\", the\noperator is \"In\", and the values array contains only \"value\". The requirements are ANDed.",
                      type: "object"
                    }
                  },
                  type: "object",
                  "x-kubernetes-map-type": "atomic"
                },
                title: {
                  description: "Title is the human-readable name of the APIBundle that will be used on the portal.",
                  maxLength: 253,
                  type: "string"
                }
              },
              type: "object"
            },
            status: {
              description: "The current status of this APIBundle.",
              properties: {
                hash: {
                  description: "Hash is a hash representing the APIBundle.",
                  type: "string"
                },
                syncedAt: {
                  format: "date-time",
                  type: "string"
                },
                version: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_ApicatalogitemsHubTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.17.1"
    },
    name: "apicatalogitems.hub.traefik.io"
  },
  spec: {
    group: "hub.traefik.io",
    names: {
      kind: "APICatalogItem",
      listKind: "APICatalogItemList",
      plural: "apicatalogitems",
      singular: "apicatalogitem"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "APICatalogItem defines APIs that will be part of the API catalog on the portal.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "The desired behavior of this APICatalogItem.",
              properties: {
                apiBundles: {
                  description: "APIBundles defines a set of APIBundle that will be visible to the configured audience.\nMultiple APICatalogItem can select the same APIBundles.",
                  items: {
                    description: "APIBundleReference references an APIBundle.",
                    properties: {
                      name: {
                        description: "Name of the APIBundle.",
                        maxLength: 253,
                        type: "string"
                      }
                    },
                    required: ["name"],
                    type: "object"
                  },
                  maxItems: 100,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "duplicated apiBundles",
                    rule: "self.all(x, self.exists_one(y, x.name == y.name))"
                  }]
                },
                apiPlan: {
                  description: "APIPlan defines which APIPlan will be available.\nIf multiple APICatalogItem specify the same API with different APIPlan, the API consumer will be able to pick\na plan from this list.",
                  properties: {
                    name: {
                      description: "Name of the APIPlan.",
                      maxLength: 253,
                      type: "string"
                    }
                  },
                  required: ["name"],
                  type: "object"
                },
                apis: {
                  description: "APIs defines a set of APIs that will be visible to the configured audience.\nMultiple APICatalogItem can select the same APIs.\nWhen combined with APISelector, this set of APIs is appended to the matching APIs.",
                  items: {
                    description: "APIReference references an API.",
                    properties: {
                      name: {
                        description: "Name of the API.",
                        maxLength: 253,
                        type: "string"
                      }
                    },
                    required: ["name"],
                    type: "object"
                  },
                  maxItems: 100,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "duplicated apis",
                    rule: "self.all(x, self.exists_one(y, x.name == y.name))"
                  }]
                },
                apiSelector: {
                  description: "APISelector selects the APIs that will be visible to the configured audience.\nMultiple APICatalogItem can select the same set of APIs.\nThis field is optional and follows standard label selector semantics.\nAn empty APISelector matches any API.",
                  properties: {
                    matchExpressions: {
                      description: "matchExpressions is a list of label selector requirements. The requirements are ANDed.",
                      items: {
                        description: "A label selector requirement is a selector that contains values, a key, and an operator that\nrelates the key and values.",
                        properties: {
                          key: {
                            description: "key is the label key that the selector applies to.",
                            type: "string"
                          },
                          operator: {
                            description: "operator represents a key's relationship to a set of values.\nValid operators are In, NotIn, Exists and DoesNotExist.",
                            type: "string"
                          },
                          values: {
                            description: "values is an array of string values. If the operator is In or NotIn,\nthe values array must be non-empty. If the operator is Exists or DoesNotExist,\nthe values array must be empty. This array is replaced during a strategic\nmerge patch.",
                            items: {
                              type: "string"
                            },
                            type: "array",
                            "x-kubernetes-list-type": "atomic"
                          }
                        },
                        required: ["key", "operator"],
                        type: "object"
                      },
                      type: "array",
                      "x-kubernetes-list-type": "atomic"
                    },
                    matchLabels: {
                      additionalProperties: {
                        type: "string"
                      },
                      description: "matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels\nmap is equivalent to an element of matchExpressions, whose key field is \"key\", the\noperator is \"In\", and the values array contains only \"value\". The requirements are ANDed.",
                      type: "object"
                    }
                  },
                  type: "object",
                  "x-kubernetes-map-type": "atomic"
                },
                everyone: {
                  description: "Everyone indicates that all users will see these APIs.",
                  type: "boolean"
                },
                groups: {
                  description: "Groups are the consumer groups that will see the APIs.",
                  items: {
                    type: "string"
                  },
                  type: "array"
                },
                operationFilter: {
                  description: "OperationFilter specifies the visible operations on APIs and APIVersions.\nIf not set, all operations are available.\nAn empty OperationFilter prohibits all operations.",
                  properties: {
                    include: {
                      description: "Include defines the names of OperationSets that will be accessible.",
                      items: {
                        type: "string"
                      },
                      maxItems: 100,
                      type: "array"
                    }
                  },
                  type: "object"
                }
              },
              type: "object",
              "x-kubernetes-validations": [{
                message: "groups and everyone are mutually exclusive",
                rule: "(has(self.everyone) && has(self.groups)) ? !(self.everyone && self.groups.size() > 0) : true"
              }]
            },
            status: {
              description: "The current status of this APICatalogItem.",
              properties: {
                hash: {
                  description: "Hash is a hash representing the APICatalogItem.",
                  type: "string"
                },
                syncedAt: {
                  format: "date-time",
                  type: "string"
                },
                version: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_ApiplansHubTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.17.1"
    },
    name: "apiplans.hub.traefik.io"
  },
  spec: {
    group: "hub.traefik.io",
    names: {
      kind: "APIPlan",
      listKind: "APIPlanList",
      plural: "apiplans",
      singular: "apiplan"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "APIPlan defines API Plan policy.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "The desired behavior of this APIPlan.",
              properties: {
                description: {
                  description: "Description describes the plan.",
                  type: "string"
                },
                quota: {
                  description: "Quota defines the quota policy.",
                  properties: {
                    limit: {
                      description: "Limit is the maximum number of token in the bucket.",
                      type: "integer",
                      "x-kubernetes-validations": [{
                        message: "must be a positive number",
                        rule: "self >= 0"
                      }]
                    },
                    period: {
                      description: "Period is the unit of time for the Limit.",
                      format: "duration",
                      type: "string",
                      "x-kubernetes-validations": [{
                        message: "must be between 1s and 9999h",
                        rule: "self >= duration('1s') && self <= duration('9999h')"
                      }]
                    }
                  },
                  required: ["limit"],
                  type: "object"
                },
                rateLimit: {
                  description: "RateLimit defines the rate limit policy.",
                  properties: {
                    limit: {
                      description: "Limit is the maximum number of token in the bucket.",
                      type: "integer",
                      "x-kubernetes-validations": [{
                        message: "must be a positive number",
                        rule: "self >= 0"
                      }]
                    },
                    period: {
                      description: "Period is the unit of time for the Limit.",
                      format: "duration",
                      type: "string",
                      "x-kubernetes-validations": [{
                        message: "must be between 1s and 1h",
                        rule: "self >= duration('1s') && self <= duration('1h')"
                      }]
                    }
                  },
                  required: ["limit"],
                  type: "object"
                },
                title: {
                  description: "Title is the human-readable name of the plan.",
                  type: "string"
                }
              },
              required: ["title"],
              type: "object"
            },
            status: {
              description: "The current status of this APIPlan.",
              properties: {
                hash: {
                  description: "Hash is a hash representing the APIPlan.",
                  type: "string"
                },
                syncedAt: {
                  format: "date-time",
                  type: "string"
                },
                version: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_ApiportalsHubTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.17.1"
    },
    name: "apiportals.hub.traefik.io"
  },
  spec: {
    group: "hub.traefik.io",
    names: {
      kind: "APIPortal",
      listKind: "APIPortalList",
      plural: "apiportals",
      singular: "apiportal"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "APIPortal defines a developer portal for accessing the documentation of APIs.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "The desired behavior of this APIPortal.",
              properties: {
                description: {
                  description: "Description of the APIPortal.",
                  type: "string"
                },
                title: {
                  description: "Title is the public facing name of the APIPortal.",
                  type: "string"
                },
                trustedUrls: {
                  description: "TrustedURLs are the urls that are trusted by the OAuth 2.0 authorization server.",
                  items: {
                    type: "string"
                  },
                  maxItems: 1,
                  minItems: 1,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "must be a valid URLs",
                    rule: "self.all(x, isURL(x))"
                  }]
                },
                ui: {
                  description: "UI holds the UI customization options.",
                  properties: {
                    logoUrl: {
                      description: "LogoURL is the public URL of the logo.",
                      type: "string"
                    }
                  },
                  type: "object"
                }
              },
              required: ["trustedUrls"],
              type: "object"
            },
            status: {
              description: "The current status of this APIPortal.",
              properties: {
                hash: {
                  description: "Hash is a hash representing the APIPortal.",
                  type: "string"
                },
                oidc: {
                  description: "OIDC is the OIDC configuration for accessing the exposed APIPortal WebUI.",
                  properties: {
                    clientId: {
                      description: "ClientID is the OIDC ClientID for accessing the exposed APIPortal WebUI.",
                      type: "string"
                    },
                    companyClaim: {
                      description: "CompanyClaim is the name of the JWT claim containing the user company.",
                      type: "string"
                    },
                    emailClaim: {
                      description: "EmailClaim is the name of the JWT claim containing the user email.",
                      type: "string"
                    },
                    firstnameClaim: {
                      description: "FirstnameClaim is the name of the JWT claim containing the user firstname.",
                      type: "string"
                    },
                    generic: {
                      description: "Generic indicates whether or not the APIPortal authentication relies on Generic OIDC.",
                      type: "boolean"
                    },
                    groupsClaim: {
                      description: "GroupsClaim is the name of the JWT claim containing the user groups.",
                      type: "string"
                    },
                    issuer: {
                      description: "Issuer is the OIDC issuer for accessing the exposed APIPortal WebUI.",
                      type: "string"
                    },
                    lastnameClaim: {
                      description: "LastnameClaim is the name of the JWT claim containing the user lastname.",
                      type: "string"
                    },
                    scopes: {
                      description: "Scopes is the OIDC scopes for getting user attributes during the authentication to the exposed APIPortal WebUI.",
                      type: "string"
                    },
                    secretName: {
                      description: "SecretName is the name of the secret containing the OIDC ClientSecret for accessing the exposed APIPortal WebUI.",
                      type: "string"
                    },
                    syncedAttributes: {
                      description: "SyncedAttributes configure the user attributes to sync.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    userIdClaim: {
                      description: "UserIDClaim is the name of the JWT claim containing the user ID.",
                      type: "string"
                    }
                  },
                  type: "object"
                },
                syncedAt: {
                  format: "date-time",
                  type: "string"
                },
                version: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_ApiratelimitsHubTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.17.1"
    },
    name: "apiratelimits.hub.traefik.io"
  },
  spec: {
    group: "hub.traefik.io",
    names: {
      kind: "APIRateLimit",
      listKind: "APIRateLimitList",
      plural: "apiratelimits",
      singular: "apiratelimit"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "APIRateLimit defines how group of consumers are rate limited on a set of APIs.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "The desired behavior of this APIRateLimit.",
              properties: {
                apis: {
                  description: "APIs defines a set of APIs that will be rate limited.\nMultiple APIRateLimits can select the same APIs.\nWhen combined with APISelector, this set of APIs is appended to the matching APIs.",
                  items: {
                    description: "APIReference references an API.",
                    properties: {
                      name: {
                        description: "Name of the API.",
                        maxLength: 253,
                        type: "string"
                      }
                    },
                    required: ["name"],
                    type: "object"
                  },
                  maxItems: 100,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "duplicated apis",
                    rule: "self.all(x, self.exists_one(y, x.name == y.name))"
                  }]
                },
                apiSelector: {
                  description: "APISelector selects the APIs that will be rate limited.\nMultiple APIRateLimits can select the same set of APIs.\nThis field is optional and follows standard label selector semantics.\nAn empty APISelector matches any API.",
                  properties: {
                    matchExpressions: {
                      description: "matchExpressions is a list of label selector requirements. The requirements are ANDed.",
                      items: {
                        description: "A label selector requirement is a selector that contains values, a key, and an operator that\nrelates the key and values.",
                        properties: {
                          key: {
                            description: "key is the label key that the selector applies to.",
                            type: "string"
                          },
                          operator: {
                            description: "operator represents a key's relationship to a set of values.\nValid operators are In, NotIn, Exists and DoesNotExist.",
                            type: "string"
                          },
                          values: {
                            description: "values is an array of string values. If the operator is In or NotIn,\nthe values array must be non-empty. If the operator is Exists or DoesNotExist,\nthe values array must be empty. This array is replaced during a strategic\nmerge patch.",
                            items: {
                              type: "string"
                            },
                            type: "array",
                            "x-kubernetes-list-type": "atomic"
                          }
                        },
                        required: ["key", "operator"],
                        type: "object"
                      },
                      type: "array",
                      "x-kubernetes-list-type": "atomic"
                    },
                    matchLabels: {
                      additionalProperties: {
                        type: "string"
                      },
                      description: "matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels\nmap is equivalent to an element of matchExpressions, whose key field is \"key\", the\noperator is \"In\", and the values array contains only \"value\". The requirements are ANDed.",
                      type: "object"
                    }
                  },
                  type: "object",
                  "x-kubernetes-map-type": "atomic"
                },
                everyone: {
                  description: "Everyone indicates that all users will, by default, be rate limited with this configuration.\nIf an APIRateLimit explicitly target a group, the default rate limit will be ignored.",
                  type: "boolean"
                },
                groups: {
                  description: "Groups are the consumer groups that will be rate limited.\nMultiple APIRateLimits can target the same set of consumer groups, the most restrictive one applies.\nWhen a consumer belongs to multiple groups, the least restrictive APIRateLimit applies.",
                  items: {
                    type: "string"
                  },
                  type: "array"
                },
                limit: {
                  description: "Limit is the maximum number of token in the bucket.",
                  type: "integer",
                  "x-kubernetes-validations": [{
                    message: "must be a positive number",
                    rule: "self >= 0"
                  }]
                },
                period: {
                  description: "Period is the unit of time for the Limit.",
                  format: "duration",
                  type: "string",
                  "x-kubernetes-validations": [{
                    message: "must be between 1s and 1h",
                    rule: "self >= duration('1s') && self <= duration('1h')"
                  }]
                },
                strategy: {
                  description: "Strategy defines how the bucket state will be synchronized between the different Traefik Hub instances.\nIt can be, either \"local\" or \"distributed\".",
                  enum: ["local", "distributed"],
                  type: "string"
                }
              },
              required: ["limit"],
              type: "object",
              "x-kubernetes-validations": [{
                message: "groups and everyone are mutually exclusive",
                rule: "(has(self.everyone) && has(self.groups)) ? !(self.everyone && self.groups.size() > 0) : true"
              }]
            },
            status: {
              description: "The current status of this APIRateLimit.",
              properties: {
                hash: {
                  description: "Hash is a hash representing the APIRateLimit.",
                  type: "string"
                },
                syncedAt: {
                  format: "date-time",
                  type: "string"
                },
                version: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_ApisHubTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.17.1"
    },
    name: "apis.hub.traefik.io"
  },
  spec: {
    group: "hub.traefik.io",
    names: {
      kind: "API",
      listKind: "APIList",
      plural: "apis",
      singular: "api"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "API defines an HTTP interface that is exposed to external clients. It specifies the supported versions\nand provides instructions for accessing its documentation. Once instantiated, an API object is associated\nwith an Ingress, IngressRoute, or HTTPRoute resource, enabling the exposure of the described API to the outside world.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "APISpec describes the API.",
              properties: {
                cors: {
                  description: "Cors defines the Cross-Origin Resource Sharing configuration.",
                  properties: {
                    addVaryHeader: {
                      description: "AddVaryHeader defines whether the Vary header is automatically added/updated when the AllowOriginsList is set.",
                      type: "boolean"
                    },
                    allowCredentials: {
                      description: "AllowCredentials defines whether the request can include user credentials.",
                      type: "boolean"
                    },
                    allowHeadersList: {
                      description: "AllowHeadersList defines the Access-Control-Request-Headers values sent in preflight response.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    allowMethodsList: {
                      description: "AllowMethodsList defines the Access-Control-Request-Method values sent in preflight response.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    allowOriginListRegex: {
                      description: "AllowOriginListRegex is a list of allowable origins written following the Regular Expression syntax (https://golang.org/pkg/regexp/).",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    allowOriginsList: {
                      description: "AllowOriginsList is a list of allowable origins. Can also be a wildcard origin \"*\".",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    exposeHeadersList: {
                      description: "ExposeHeadersList defines the Access-Control-Expose-Headers values sent in preflight response.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    maxAge: {
                      description: "MaxAge defines the time that a preflight request may be cached.",
                      format: "int64",
                      type: "integer"
                    }
                  },
                  type: "object"
                },
                description: {
                  description: "Description explains what the API does.",
                  type: "string"
                },
                openApiSpec: {
                  description: "OpenAPISpec defines the API contract as an OpenAPI specification.",
                  properties: {
                    operationSets: {
                      description: "OperationSets defines the sets of operations to be referenced for granular filtering in APIAccesses.",
                      items: {
                        description: "OperationSet gives a name to a set of matching OpenAPI operations.\nThis set of operations can then be referenced for granular filtering in APIAccesses.",
                        properties: {
                          matchers: {
                            description: "Matchers defines a list of alternative rules for matching OpenAPI operations.",
                            items: {
                              description: "OperationMatcher defines criteria for matching an OpenAPI operation.",
                              minProperties: 1,
                              properties: {
                                methods: {
                                  description: "Methods specifies the HTTP methods to be included for selection.",
                                  items: {
                                    type: "string"
                                  },
                                  maxItems: 10,
                                  type: "array"
                                },
                                path: {
                                  description: "Path specifies the exact path of the operations to select.",
                                  maxLength: 255,
                                  type: "string",
                                  "x-kubernetes-validations": [{
                                    message: "must start with a '/'",
                                    rule: "self.startsWith('/')"
                                  }, {
                                    message: "cannot contains '../'",
                                    rule: "!self.matches(r\"\"\"(\\/\\.\\.\\/)|(\\/\\.\\.$)\"\"\")"
                                  }]
                                },
                                pathPrefix: {
                                  description: "PathPrefix specifies the path prefix of the operations to select.",
                                  maxLength: 255,
                                  type: "string",
                                  "x-kubernetes-validations": [{
                                    message: "must start with a '/'",
                                    rule: "self.startsWith('/')"
                                  }, {
                                    message: "cannot contains '../'",
                                    rule: "!self.matches(r\"\"\"(\\/\\.\\.\\/)|(\\/\\.\\.$)\"\"\")"
                                  }]
                                },
                                pathRegex: {
                                  description: "PathRegex specifies a regular expression pattern for matching operations based on their paths.",
                                  type: "string"
                                }
                              },
                              type: "object",
                              "x-kubernetes-validations": [{
                                message: "path, pathPrefix and pathRegex are mutually exclusive",
                                rule: "[has(self.path), has(self.pathPrefix), has(self.pathRegex)].filter(x, x).size() <= 1"
                              }]
                            },
                            maxItems: 100,
                            minItems: 1,
                            type: "array"
                          },
                          name: {
                            description: "Name is the name of the OperationSet to reference in APIAccesses.",
                            maxLength: 253,
                            type: "string"
                          }
                        },
                        required: ["matchers", "name"],
                        type: "object"
                      },
                      maxItems: 100,
                      type: "array"
                    },
                    override: {
                      description: "Override holds data used to override OpenAPI specification.",
                      properties: {
                        servers: {
                          items: {
                            properties: {
                              url: {
                                type: "string",
                                "x-kubernetes-validations": [{
                                  message: "must be a valid URL",
                                  rule: "isURL(self)"
                                }]
                              }
                            },
                            required: ["url"],
                            type: "object"
                          },
                          maxItems: 100,
                          minItems: 1,
                          type: "array"
                        }
                      },
                      required: ["servers"],
                      type: "object"
                    },
                    path: {
                      description: "Path specifies the endpoint path within the Kubernetes Service where the OpenAPI specification can be obtained.\nThe Service queried is determined by the associated Ingress, IngressRoute, or HTTPRoute resource to which the API is attached.\nIt's important to note that this option is incompatible if the Ingress or IngressRoute specifies multiple backend services.\nThe Path must be accessible via a GET request method and should serve a YAML or JSON document containing the OpenAPI specification.",
                      maxLength: 255,
                      type: "string",
                      "x-kubernetes-validations": [{
                        message: "must start with a '/'",
                        rule: "self.startsWith('/')"
                      }, {
                        message: "cannot contains '../'",
                        rule: "!self.matches(r\"\"\"(\\/\\.\\.\\/)|(\\/\\.\\.$)\"\"\")"
                      }]
                    },
                    url: {
                      description: "URL is a Traefik Hub agent accessible URL for obtaining the OpenAPI specification.\nThe URL must be accessible via a GET request method and should serve a YAML or JSON document containing the OpenAPI specification.",
                      type: "string",
                      "x-kubernetes-validations": [{
                        message: "must be a valid URL",
                        rule: "isURL(self)"
                      }]
                    },
                    validateRequestMethodAndPath: {
                      description: "ValidateRequestMethodAndPath validates that the path and method matches an operation defined in the OpenAPI specification.\nThis option overrides the default behavior configured in the static configuration.",
                      type: "boolean"
                    }
                  },
                  type: "object",
                  "x-kubernetes-validations": [{
                    message: "path or url must be defined",
                    rule: "has(self.path) || has(self.url)"
                  }]
                },
                title: {
                  description: "Title is the human-readable name of the API that will be used on the portal.",
                  maxLength: 253,
                  type: "string"
                },
                versions: {
                  description: "Versions are the different APIVersions available.",
                  items: {
                    description: "APIVersionRef references an APIVersion.",
                    properties: {
                      name: {
                        description: "Name of the APIVersion.",
                        maxLength: 253,
                        type: "string"
                      }
                    },
                    required: ["name"],
                    type: "object"
                  },
                  maxItems: 100,
                  minItems: 1,
                  type: "array"
                }
              },
              type: "object"
            },
            status: {
              description: "The current status of this API.",
              properties: {
                hash: {
                  description: "Hash is a hash representing the API.",
                  type: "string"
                },
                syncedAt: {
                  format: "date-time",
                  type: "string"
                },
                version: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_ApiversionsHubTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.17.1"
    },
    name: "apiversions.hub.traefik.io"
  },
  spec: {
    group: "hub.traefik.io",
    names: {
      kind: "APIVersion",
      listKind: "APIVersionList",
      plural: "apiversions",
      singular: "apiversion"
    },
    scope: "Namespaced",
    versions: [{
      additionalPrinterColumns: [{
        jsonPath: ".spec.title",
        name: "Title",
        type: "string"
      }, {
        jsonPath: ".spec.release",
        name: "Release",
        type: "string"
      }],
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "APIVersion defines a version of an API.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "The desired behavior of this APIVersion.",
              properties: {
                cors: {
                  description: "Cors defines the Cross-Origin Resource Sharing configuration.",
                  properties: {
                    addVaryHeader: {
                      description: "AddVaryHeader defines whether the Vary header is automatically added/updated when the AllowOriginsList is set.",
                      type: "boolean"
                    },
                    allowCredentials: {
                      description: "AllowCredentials defines whether the request can include user credentials.",
                      type: "boolean"
                    },
                    allowHeadersList: {
                      description: "AllowHeadersList defines the Access-Control-Request-Headers values sent in preflight response.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    allowMethodsList: {
                      description: "AllowMethodsList defines the Access-Control-Request-Method values sent in preflight response.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    allowOriginListRegex: {
                      description: "AllowOriginListRegex is a list of allowable origins written following the Regular Expression syntax (https://golang.org/pkg/regexp/).",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    allowOriginsList: {
                      description: "AllowOriginsList is a list of allowable origins. Can also be a wildcard origin \"*\".",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    exposeHeadersList: {
                      description: "ExposeHeadersList defines the Access-Control-Expose-Headers values sent in preflight response.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    maxAge: {
                      description: "MaxAge defines the time that a preflight request may be cached.",
                      format: "int64",
                      type: "integer"
                    }
                  },
                  type: "object"
                },
                description: {
                  description: "Description explains what the APIVersion does.",
                  type: "string"
                },
                openApiSpec: {
                  description: "OpenAPISpec defines the API contract as an OpenAPI specification.",
                  properties: {
                    operationSets: {
                      description: "OperationSets defines the sets of operations to be referenced for granular filtering in APIAccesses.",
                      items: {
                        description: "OperationSet gives a name to a set of matching OpenAPI operations.\nThis set of operations can then be referenced for granular filtering in APIAccesses.",
                        properties: {
                          matchers: {
                            description: "Matchers defines a list of alternative rules for matching OpenAPI operations.",
                            items: {
                              description: "OperationMatcher defines criteria for matching an OpenAPI operation.",
                              minProperties: 1,
                              properties: {
                                methods: {
                                  description: "Methods specifies the HTTP methods to be included for selection.",
                                  items: {
                                    type: "string"
                                  },
                                  maxItems: 10,
                                  type: "array"
                                },
                                path: {
                                  description: "Path specifies the exact path of the operations to select.",
                                  maxLength: 255,
                                  type: "string",
                                  "x-kubernetes-validations": [{
                                    message: "must start with a '/'",
                                    rule: "self.startsWith('/')"
                                  }, {
                                    message: "cannot contains '../'",
                                    rule: "!self.matches(r\"\"\"(\\/\\.\\.\\/)|(\\/\\.\\.$)\"\"\")"
                                  }]
                                },
                                pathPrefix: {
                                  description: "PathPrefix specifies the path prefix of the operations to select.",
                                  maxLength: 255,
                                  type: "string",
                                  "x-kubernetes-validations": [{
                                    message: "must start with a '/'",
                                    rule: "self.startsWith('/')"
                                  }, {
                                    message: "cannot contains '../'",
                                    rule: "!self.matches(r\"\"\"(\\/\\.\\.\\/)|(\\/\\.\\.$)\"\"\")"
                                  }]
                                },
                                pathRegex: {
                                  description: "PathRegex specifies a regular expression pattern for matching operations based on their paths.",
                                  type: "string"
                                }
                              },
                              type: "object",
                              "x-kubernetes-validations": [{
                                message: "path, pathPrefix and pathRegex are mutually exclusive",
                                rule: "[has(self.path), has(self.pathPrefix), has(self.pathRegex)].filter(x, x).size() <= 1"
                              }]
                            },
                            maxItems: 100,
                            minItems: 1,
                            type: "array"
                          },
                          name: {
                            description: "Name is the name of the OperationSet to reference in APIAccesses.",
                            maxLength: 253,
                            type: "string"
                          }
                        },
                        required: ["matchers", "name"],
                        type: "object"
                      },
                      maxItems: 100,
                      type: "array"
                    },
                    override: {
                      description: "Override holds data used to override OpenAPI specification.",
                      properties: {
                        servers: {
                          items: {
                            properties: {
                              url: {
                                type: "string",
                                "x-kubernetes-validations": [{
                                  message: "must be a valid URL",
                                  rule: "isURL(self)"
                                }]
                              }
                            },
                            required: ["url"],
                            type: "object"
                          },
                          maxItems: 100,
                          minItems: 1,
                          type: "array"
                        }
                      },
                      required: ["servers"],
                      type: "object"
                    },
                    path: {
                      description: "Path specifies the endpoint path within the Kubernetes Service where the OpenAPI specification can be obtained.\nThe Service queried is determined by the associated Ingress, IngressRoute, or HTTPRoute resource to which the API is attached.\nIt's important to note that this option is incompatible if the Ingress or IngressRoute specifies multiple backend services.\nThe Path must be accessible via a GET request method and should serve a YAML or JSON document containing the OpenAPI specification.",
                      maxLength: 255,
                      type: "string",
                      "x-kubernetes-validations": [{
                        message: "must start with a '/'",
                        rule: "self.startsWith('/')"
                      }, {
                        message: "cannot contains '../'",
                        rule: "!self.matches(r\"\"\"(\\/\\.\\.\\/)|(\\/\\.\\.$)\"\"\")"
                      }]
                    },
                    url: {
                      description: "URL is a Traefik Hub agent accessible URL for obtaining the OpenAPI specification.\nThe URL must be accessible via a GET request method and should serve a YAML or JSON document containing the OpenAPI specification.",
                      type: "string",
                      "x-kubernetes-validations": [{
                        message: "must be a valid URL",
                        rule: "isURL(self)"
                      }]
                    },
                    validateRequestMethodAndPath: {
                      description: "ValidateRequestMethodAndPath validates that the path and method matches an operation defined in the OpenAPI specification.\nThis option overrides the default behavior configured in the static configuration.",
                      type: "boolean"
                    }
                  },
                  type: "object",
                  "x-kubernetes-validations": [{
                    message: "path or url must be defined",
                    rule: "has(self.path) || has(self.url)"
                  }]
                },
                release: {
                  description: "Release is the version number of the API.\nThis value must follow the SemVer format: https://semver.org/",
                  maxLength: 100,
                  type: "string",
                  "x-kubernetes-validations": [{
                    message: "must be a valid semver version",
                    rule: "self.matches(r\"\"\"^v?(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$\"\"\")"
                  }]
                },
                title: {
                  description: "Title is the public facing name of the APIVersion.",
                  type: "string"
                }
              },
              required: ["release"],
              type: "object"
            },
            status: {
              description: "The current status of this APIVersion.",
              properties: {
                hash: {
                  description: "Hash is a hash representing the APIVersion.",
                  type: "string"
                },
                syncedAt: {
                  format: "date-time",
                  type: "string"
                },
                version: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          type: "object"
        }
      },
      served: true,
      storage: true,
      subresources: {}
    }]
  }
};
export const CustomResourceDefinition_ManagedsubscriptionsHubTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.17.1"
    },
    name: "managedsubscriptions.hub.traefik.io"
  },
  spec: {
    group: "hub.traefik.io",
    names: {
      kind: "ManagedSubscription",
      listKind: "ManagedSubscriptionList",
      plural: "managedsubscriptions",
      singular: "managedsubscription"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "ManagedSubscription defines a Subscription managed by the API manager as the result of a pre-negotiation with its\nAPI consumers. This subscription grant consuming access to a set of APIs to a set of Applications.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "The desired behavior of this ManagedSubscription.",
              properties: {
                apiBundles: {
                  description: "APIBundles defines a set of APIBundle that will be accessible.\nMultiple ManagedSubscriptions can select the same APIBundles.",
                  items: {
                    description: "APIBundleReference references an APIBundle.",
                    properties: {
                      name: {
                        description: "Name of the APIBundle.",
                        maxLength: 253,
                        type: "string"
                      }
                    },
                    required: ["name"],
                    type: "object"
                  },
                  maxItems: 100,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "duplicated apiBundles",
                    rule: "self.all(x, self.exists_one(y, x.name == y.name))"
                  }]
                },
                apiPlan: {
                  description: "APIPlan defines which APIPlan will be used.",
                  properties: {
                    name: {
                      description: "Name of the APIPlan.",
                      maxLength: 253,
                      type: "string"
                    }
                  },
                  required: ["name"],
                  type: "object"
                },
                apis: {
                  description: "APIs defines a set of APIs that will be accessible.\nMultiple ManagedSubscriptions can select the same APIs.\nWhen combined with APISelector, this set of APIs is appended to the matching APIs.",
                  items: {
                    description: "APIReference references an API.",
                    properties: {
                      name: {
                        description: "Name of the API.",
                        maxLength: 253,
                        type: "string"
                      }
                    },
                    required: ["name"],
                    type: "object"
                  },
                  maxItems: 100,
                  type: "array",
                  "x-kubernetes-validations": [{
                    message: "duplicated apis",
                    rule: "self.all(x, self.exists_one(y, x.name == y.name))"
                  }]
                },
                apiSelector: {
                  description: "APISelector selects the APIs that will be accessible.\nMultiple ManagedSubscriptions can select the same set of APIs.\nThis field is optional and follows standard label selector semantics.\nAn empty APISelector matches any API.",
                  properties: {
                    matchExpressions: {
                      description: "matchExpressions is a list of label selector requirements. The requirements are ANDed.",
                      items: {
                        description: "A label selector requirement is a selector that contains values, a key, and an operator that\nrelates the key and values.",
                        properties: {
                          key: {
                            description: "key is the label key that the selector applies to.",
                            type: "string"
                          },
                          operator: {
                            description: "operator represents a key's relationship to a set of values.\nValid operators are In, NotIn, Exists and DoesNotExist.",
                            type: "string"
                          },
                          values: {
                            description: "values is an array of string values. If the operator is In or NotIn,\nthe values array must be non-empty. If the operator is Exists or DoesNotExist,\nthe values array must be empty. This array is replaced during a strategic\nmerge patch.",
                            items: {
                              type: "string"
                            },
                            type: "array",
                            "x-kubernetes-list-type": "atomic"
                          }
                        },
                        required: ["key", "operator"],
                        type: "object"
                      },
                      type: "array",
                      "x-kubernetes-list-type": "atomic"
                    },
                    matchLabels: {
                      additionalProperties: {
                        type: "string"
                      },
                      description: "matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels\nmap is equivalent to an element of matchExpressions, whose key field is \"key\", the\noperator is \"In\", and the values array contains only \"value\". The requirements are ANDed.",
                      type: "object"
                    }
                  },
                  type: "object",
                  "x-kubernetes-map-type": "atomic"
                },
                applications: {
                  description: "Applications references the Applications that will gain access to the specified APIs.\nMultiple ManagedSubscriptions can select the same AppID.",
                  items: {
                    description: "ApplicationReference references an Application.",
                    properties: {
                      appId: {
                        description: "AppID is the public identifier of the application.\nIn the case of OIDC, it corresponds to the clientId.",
                        maxLength: 253,
                        type: "string"
                      }
                    },
                    required: ["appId"],
                    type: "object"
                  },
                  maxItems: 100,
                  minItems: 1,
                  type: "array"
                },
                claims: {
                  description: "Claims specifies an expression that validate claims in order to authorize the request.",
                  type: "string"
                },
                operationFilter: {
                  description: "OperationFilter specifies the allowed operations on APIs and APIVersions.\nIf not set, all operations are available.\nAn empty OperationFilter prohibits all operations.",
                  properties: {
                    include: {
                      description: "Include defines the names of OperationSets that will be accessible.",
                      items: {
                        type: "string"
                      },
                      maxItems: 100,
                      type: "array"
                    }
                  },
                  type: "object"
                },
                weight: {
                  description: "Weight specifies the evaluation order of the APIPlan.\nWhen multiple ManagedSubscriptions targets the same API and Application with different APIPlan,\nthe APIPlan with the highest weight will be enforced. If weights are equal, alphabetical order is used.",
                  type: "integer",
                  "x-kubernetes-validations": [{
                    message: "must be a positive number",
                    rule: "self >= 0"
                  }]
                }
              },
              required: ["apiPlan", "applications"],
              type: "object"
            },
            status: {
              description: "The current status of this ManagedSubscription.",
              properties: {
                hash: {
                  description: "Hash is a hash representing the ManagedSubscription.",
                  type: "string"
                },
                syncedAt: {
                  format: "date-time",
                  type: "string"
                },
                version: {
                  type: "string"
                }
              },
              type: "object"
            }
          },
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_IngressroutesTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.16.1"
    },
    name: "ingressroutes.traefik.io"
  },
  spec: {
    group: "traefik.io",
    names: {
      kind: "IngressRoute",
      listKind: "IngressRouteList",
      plural: "ingressroutes",
      singular: "ingressroute"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "IngressRoute is the CRD implementation of a Traefik HTTP Router.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "IngressRouteSpec defines the desired state of IngressRoute.",
              properties: {
                entryPoints: {
                  description: "EntryPoints defines the list of entry point names to bind to.\nEntry points have to be configured in the static configuration.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/entrypoints/\nDefault: all.",
                  items: {
                    type: "string"
                  },
                  type: "array"
                },
                routes: {
                  description: "Routes defines the list of routes.",
                  items: {
                    description: "Route holds the HTTP route configuration.",
                    properties: {
                      kind: {
                        description: "Kind defines the kind of the route.\nRule is the only supported kind.\nIf not defined, defaults to Rule.",
                        enum: ["Rule"],
                        type: "string"
                      },
                      match: {
                        description: "Match defines the router's rule.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/routers/#rule",
                        type: "string"
                      },
                      middlewares: {
                        description: "Middlewares defines the list of references to Middleware resources.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/providers/kubernetes-crd/#kind-middleware",
                        items: {
                          description: "MiddlewareRef is a reference to a Middleware resource.",
                          properties: {
                            name: {
                              description: "Name defines the name of the referenced Middleware resource.",
                              type: "string"
                            },
                            namespace: {
                              description: "Namespace defines the namespace of the referenced Middleware resource.",
                              type: "string"
                            }
                          },
                          required: ["name"],
                          type: "object"
                        },
                        type: "array"
                      },
                      observability: {
                        description: "Observability defines the observability configuration for a router.\nMore info: https://doc.traefik.io/traefik/v3.2/routing/routers/#observability",
                        properties: {
                          accessLogs: {
                            type: "boolean"
                          },
                          metrics: {
                            type: "boolean"
                          },
                          tracing: {
                            type: "boolean"
                          }
                        },
                        type: "object"
                      },
                      priority: {
                        description: "Priority defines the router's priority.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/routers/#priority",
                        type: "integer"
                      },
                      services: {
                        description: "Services defines the list of Service.\nIt can contain any combination of TraefikService and/or reference to a Kubernetes Service.",
                        items: {
                          description: "Service defines an upstream HTTP service to proxy traffic to.",
                          properties: {
                            healthCheck: {
                              description: "Healthcheck defines health checks for ExternalName services.",
                              properties: {
                                followRedirects: {
                                  description: "FollowRedirects defines whether redirects should be followed during the health check calls.\nDefault: true",
                                  type: "boolean"
                                },
                                headers: {
                                  additionalProperties: {
                                    type: "string"
                                  },
                                  description: "Headers defines custom headers to be sent to the health check endpoint.",
                                  type: "object"
                                },
                                hostname: {
                                  description: "Hostname defines the value of hostname in the Host header of the health check request.",
                                  type: "string"
                                },
                                interval: {
                                  anyOf: [{
                                    type: "integer"
                                  }, {
                                    type: "string"
                                  }],
                                  description: "Interval defines the frequency of the health check calls.\nDefault: 30s",
                                  "x-kubernetes-int-or-string": true
                                },
                                method: {
                                  description: "Method defines the healthcheck method.",
                                  type: "string"
                                },
                                mode: {
                                  description: "Mode defines the health check mode.\nIf defined to grpc, will use the gRPC health check protocol to probe the server.\nDefault: http",
                                  type: "string"
                                },
                                path: {
                                  description: "Path defines the server URL path for the health check endpoint.",
                                  type: "string"
                                },
                                port: {
                                  description: "Port defines the server URL port for the health check endpoint.",
                                  type: "integer"
                                },
                                scheme: {
                                  description: "Scheme replaces the server URL scheme for the health check endpoint.",
                                  type: "string"
                                },
                                status: {
                                  description: "Status defines the expected HTTP status code of the response to the health check request.",
                                  type: "integer"
                                },
                                timeout: {
                                  anyOf: [{
                                    type: "integer"
                                  }, {
                                    type: "string"
                                  }],
                                  description: "Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy.\nDefault: 5s",
                                  "x-kubernetes-int-or-string": true
                                }
                              },
                              type: "object"
                            },
                            kind: {
                              description: "Kind defines the kind of the Service.",
                              enum: ["Service", "TraefikService"],
                              type: "string"
                            },
                            name: {
                              description: "Name defines the name of the referenced Kubernetes Service or TraefikService.\nThe differentiation between the two is specified in the Kind field.",
                              type: "string"
                            },
                            namespace: {
                              description: "Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.",
                              type: "string"
                            },
                            nativeLB: {
                              description: "NativeLB controls, when creating the load-balancer,\nwhether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.\nThe Kubernetes Service itself does load-balance to the pods.\nBy default, NativeLB is false.",
                              type: "boolean"
                            },
                            nodePortLB: {
                              description: "NodePortLB controls, when creating the load-balancer,\nwhether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.\nIt allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.\nBy default, NodePortLB is false.",
                              type: "boolean"
                            },
                            passHostHeader: {
                              description: "PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.\nBy default, passHostHeader is true.",
                              type: "boolean"
                            },
                            port: {
                              anyOf: [{
                                type: "integer"
                              }, {
                                type: "string"
                              }],
                              description: "Port defines the port of a Kubernetes Service.\nThis can be a reference to a named port.",
                              "x-kubernetes-int-or-string": true
                            },
                            responseForwarding: {
                              description: "ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.",
                              properties: {
                                flushInterval: {
                                  description: "FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.\nA negative value means to flush immediately after each write to the client.\nThis configuration is ignored when ReverseProxy recognizes a response as a streaming response;\nfor such responses, writes are flushed to the client immediately.\nDefault: 100ms",
                                  type: "string"
                                }
                              },
                              type: "object"
                            },
                            scheme: {
                              description: "Scheme defines the scheme to use for the request to the upstream Kubernetes Service.\nIt defaults to https when Kubernetes Service port is 443, http otherwise.",
                              type: "string"
                            },
                            serversTransport: {
                              description: "ServersTransport defines the name of ServersTransport resource to use.\nIt allows to configure the transport between Traefik and your servers.\nCan only be used on a Kubernetes Service.",
                              type: "string"
                            },
                            sticky: {
                              description: "Sticky defines the sticky sessions configuration.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/services/#sticky-sessions",
                              properties: {
                                cookie: {
                                  description: "Cookie defines the sticky cookie configuration.",
                                  properties: {
                                    httpOnly: {
                                      description: "HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.",
                                      type: "boolean"
                                    },
                                    maxAge: {
                                      description: "MaxAge defines the number of seconds until the cookie expires.\nWhen set to a negative number, the cookie expires immediately.\nWhen set to zero, the cookie never expires.",
                                      type: "integer"
                                    },
                                    name: {
                                      description: "Name defines the Cookie name.",
                                      type: "string"
                                    },
                                    path: {
                                      description: "Path defines the path that must exist in the requested URL for the browser to send the Cookie header.\nWhen not provided the cookie will be sent on every request to the domain.\nMore info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value",
                                      type: "string"
                                    },
                                    sameSite: {
                                      description: "SameSite defines the same site policy.\nMore info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite",
                                      type: "string"
                                    },
                                    secure: {
                                      description: "Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).",
                                      type: "boolean"
                                    }
                                  },
                                  type: "object"
                                }
                              },
                              type: "object"
                            },
                            strategy: {
                              description: "Strategy defines the load balancing strategy between the servers.\nRoundRobin is the only supported value at the moment.",
                              type: "string"
                            },
                            weight: {
                              description: "Weight defines the weight and should only be specified when Name references a TraefikService object\n(and to be precise, one that embeds a Weighted Round Robin).",
                              type: "integer"
                            }
                          },
                          required: ["name"],
                          type: "object"
                        },
                        type: "array"
                      },
                      syntax: {
                        description: "Syntax defines the router's rule syntax.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/routers/#rulesyntax",
                        type: "string"
                      }
                    },
                    required: ["match"],
                    type: "object"
                  },
                  type: "array"
                },
                tls: {
                  description: "TLS defines the TLS configuration.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/routers/#tls",
                  properties: {
                    certResolver: {
                      description: "CertResolver defines the name of the certificate resolver to use.\nCert resolvers have to be configured in the static configuration.\nMore info: https://doc.traefik.io/traefik/v3.3/https/acme/#certificate-resolvers",
                      type: "string"
                    },
                    domains: {
                      description: "Domains defines the list of domains that will be used to issue certificates.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/routers/#domains",
                      items: {
                        description: "Domain holds a domain name with SANs.",
                        properties: {
                          main: {
                            description: "Main defines the main domain name.",
                            type: "string"
                          },
                          sans: {
                            description: "SANs defines the subject alternative domain names.",
                            items: {
                              type: "string"
                            },
                            type: "array"
                          }
                        },
                        type: "object"
                      },
                      type: "array"
                    },
                    options: {
                      description: "Options defines the reference to a TLSOption, that specifies the parameters of the TLS connection.\nIf not defined, the `default` TLSOption is used.\nMore info: https://doc.traefik.io/traefik/v3.3/https/tls/#tls-options",
                      properties: {
                        name: {
                          description: "Name defines the name of the referenced TLSOption.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/providers/kubernetes-crd/#kind-tlsoption",
                          type: "string"
                        },
                        namespace: {
                          description: "Namespace defines the namespace of the referenced TLSOption.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/providers/kubernetes-crd/#kind-tlsoption",
                          type: "string"
                        }
                      },
                      required: ["name"],
                      type: "object"
                    },
                    secretName: {
                      description: "SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.",
                      type: "string"
                    },
                    store: {
                      description: "Store defines the reference to the TLSStore, that will be used to store certificates.\nPlease note that only `default` TLSStore can be used.",
                      properties: {
                        name: {
                          description: "Name defines the name of the referenced TLSStore.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/providers/kubernetes-crd/#kind-tlsstore",
                          type: "string"
                        },
                        namespace: {
                          description: "Namespace defines the namespace of the referenced TLSStore.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/providers/kubernetes-crd/#kind-tlsstore",
                          type: "string"
                        }
                      },
                      required: ["name"],
                      type: "object"
                    }
                  },
                  type: "object"
                }
              },
              required: ["routes"],
              type: "object"
            }
          },
          required: ["metadata", "spec"],
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_IngressroutetcpsTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.16.1"
    },
    name: "ingressroutetcps.traefik.io"
  },
  spec: {
    group: "traefik.io",
    names: {
      kind: "IngressRouteTCP",
      listKind: "IngressRouteTCPList",
      plural: "ingressroutetcps",
      singular: "ingressroutetcp"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "IngressRouteTCP is the CRD implementation of a Traefik TCP Router.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "IngressRouteTCPSpec defines the desired state of IngressRouteTCP.",
              properties: {
                entryPoints: {
                  description: "EntryPoints defines the list of entry point names to bind to.\nEntry points have to be configured in the static configuration.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/entrypoints/\nDefault: all.",
                  items: {
                    type: "string"
                  },
                  type: "array"
                },
                routes: {
                  description: "Routes defines the list of routes.",
                  items: {
                    description: "RouteTCP holds the TCP route configuration.",
                    properties: {
                      match: {
                        description: "Match defines the router's rule.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/routers/#rule_1",
                        type: "string"
                      },
                      middlewares: {
                        description: "Middlewares defines the list of references to MiddlewareTCP resources.",
                        items: {
                          description: "ObjectReference is a generic reference to a Traefik resource.",
                          properties: {
                            name: {
                              description: "Name defines the name of the referenced Traefik resource.",
                              type: "string"
                            },
                            namespace: {
                              description: "Namespace defines the namespace of the referenced Traefik resource.",
                              type: "string"
                            }
                          },
                          required: ["name"],
                          type: "object"
                        },
                        type: "array"
                      },
                      priority: {
                        description: "Priority defines the router's priority.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/routers/#priority_1",
                        type: "integer"
                      },
                      services: {
                        description: "Services defines the list of TCP services.",
                        items: {
                          description: "ServiceTCP defines an upstream TCP service to proxy traffic to.",
                          properties: {
                            name: {
                              description: "Name defines the name of the referenced Kubernetes Service.",
                              type: "string"
                            },
                            namespace: {
                              description: "Namespace defines the namespace of the referenced Kubernetes Service.",
                              type: "string"
                            },
                            nativeLB: {
                              description: "NativeLB controls, when creating the load-balancer,\nwhether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.\nThe Kubernetes Service itself does load-balance to the pods.\nBy default, NativeLB is false.",
                              type: "boolean"
                            },
                            nodePortLB: {
                              description: "NodePortLB controls, when creating the load-balancer,\nwhether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.\nIt allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.\nBy default, NodePortLB is false.",
                              type: "boolean"
                            },
                            port: {
                              anyOf: [{
                                type: "integer"
                              }, {
                                type: "string"
                              }],
                              description: "Port defines the port of a Kubernetes Service.\nThis can be a reference to a named port.",
                              "x-kubernetes-int-or-string": true
                            },
                            proxyProtocol: {
                              description: "ProxyProtocol defines the PROXY protocol configuration.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/services/#proxy-protocol",
                              properties: {
                                version: {
                                  description: "Version defines the PROXY Protocol version to use.",
                                  type: "integer"
                                }
                              },
                              type: "object"
                            },
                            serversTransport: {
                              description: "ServersTransport defines the name of ServersTransportTCP resource to use.\nIt allows to configure the transport between Traefik and your servers.\nCan only be used on a Kubernetes Service.",
                              type: "string"
                            },
                            terminationDelay: {
                              description: "TerminationDelay defines the deadline that the proxy sets, after one of its connected peers indicates\nit has closed the writing capability of its connection, to close the reading capability as well,\nhence fully terminating the connection.\nIt is a duration in milliseconds, defaulting to 100.\nA negative value means an infinite deadline (i.e. the reading capability is never closed).\nDeprecated: TerminationDelay will not be supported in future APIVersions, please use ServersTransport to configure the TerminationDelay instead.",
                              type: "integer"
                            },
                            tls: {
                              description: "TLS determines whether to use TLS when dialing with the backend.",
                              type: "boolean"
                            },
                            weight: {
                              description: "Weight defines the weight used when balancing requests between multiple Kubernetes Service.",
                              type: "integer"
                            }
                          },
                          required: ["name", "port"],
                          type: "object"
                        },
                        type: "array"
                      },
                      syntax: {
                        description: "Syntax defines the router's rule syntax.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/routers/#rulesyntax_1",
                        type: "string"
                      }
                    },
                    required: ["match"],
                    type: "object"
                  },
                  type: "array"
                },
                tls: {
                  description: "TLS defines the TLS configuration on a layer 4 / TCP Route.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/routers/#tls_1",
                  properties: {
                    certResolver: {
                      description: "CertResolver defines the name of the certificate resolver to use.\nCert resolvers have to be configured in the static configuration.\nMore info: https://doc.traefik.io/traefik/v3.3/https/acme/#certificate-resolvers",
                      type: "string"
                    },
                    domains: {
                      description: "Domains defines the list of domains that will be used to issue certificates.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/routers/#domains",
                      items: {
                        description: "Domain holds a domain name with SANs.",
                        properties: {
                          main: {
                            description: "Main defines the main domain name.",
                            type: "string"
                          },
                          sans: {
                            description: "SANs defines the subject alternative domain names.",
                            items: {
                              type: "string"
                            },
                            type: "array"
                          }
                        },
                        type: "object"
                      },
                      type: "array"
                    },
                    options: {
                      description: "Options defines the reference to a TLSOption, that specifies the parameters of the TLS connection.\nIf not defined, the `default` TLSOption is used.\nMore info: https://doc.traefik.io/traefik/v3.3/https/tls/#tls-options",
                      properties: {
                        name: {
                          description: "Name defines the name of the referenced Traefik resource.",
                          type: "string"
                        },
                        namespace: {
                          description: "Namespace defines the namespace of the referenced Traefik resource.",
                          type: "string"
                        }
                      },
                      required: ["name"],
                      type: "object"
                    },
                    passthrough: {
                      description: "Passthrough defines whether a TLS router will terminate the TLS connection.",
                      type: "boolean"
                    },
                    secretName: {
                      description: "SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.",
                      type: "string"
                    },
                    store: {
                      description: "Store defines the reference to the TLSStore, that will be used to store certificates.\nPlease note that only `default` TLSStore can be used.",
                      properties: {
                        name: {
                          description: "Name defines the name of the referenced Traefik resource.",
                          type: "string"
                        },
                        namespace: {
                          description: "Namespace defines the namespace of the referenced Traefik resource.",
                          type: "string"
                        }
                      },
                      required: ["name"],
                      type: "object"
                    }
                  },
                  type: "object"
                }
              },
              required: ["routes"],
              type: "object"
            }
          },
          required: ["metadata", "spec"],
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_IngressrouteudpsTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.16.1"
    },
    name: "ingressrouteudps.traefik.io"
  },
  spec: {
    group: "traefik.io",
    names: {
      kind: "IngressRouteUDP",
      listKind: "IngressRouteUDPList",
      plural: "ingressrouteudps",
      singular: "ingressrouteudp"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "IngressRouteUDP is a CRD implementation of a Traefik UDP Router.",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "IngressRouteUDPSpec defines the desired state of a IngressRouteUDP.",
              properties: {
                entryPoints: {
                  description: "EntryPoints defines the list of entry point names to bind to.\nEntry points have to be configured in the static configuration.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/entrypoints/\nDefault: all.",
                  items: {
                    type: "string"
                  },
                  type: "array"
                },
                routes: {
                  description: "Routes defines the list of routes.",
                  items: {
                    description: "RouteUDP holds the UDP route configuration.",
                    properties: {
                      services: {
                        description: "Services defines the list of UDP services.",
                        items: {
                          description: "ServiceUDP defines an upstream UDP service to proxy traffic to.",
                          properties: {
                            name: {
                              description: "Name defines the name of the referenced Kubernetes Service.",
                              type: "string"
                            },
                            namespace: {
                              description: "Namespace defines the namespace of the referenced Kubernetes Service.",
                              type: "string"
                            },
                            nativeLB: {
                              description: "NativeLB controls, when creating the load-balancer,\nwhether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.\nThe Kubernetes Service itself does load-balance to the pods.\nBy default, NativeLB is false.",
                              type: "boolean"
                            },
                            nodePortLB: {
                              description: "NodePortLB controls, when creating the load-balancer,\nwhether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.\nIt allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.\nBy default, NodePortLB is false.",
                              type: "boolean"
                            },
                            port: {
                              anyOf: [{
                                type: "integer"
                              }, {
                                type: "string"
                              }],
                              description: "Port defines the port of a Kubernetes Service.\nThis can be a reference to a named port.",
                              "x-kubernetes-int-or-string": true
                            },
                            weight: {
                              description: "Weight defines the weight used when balancing requests between multiple Kubernetes Service.",
                              type: "integer"
                            }
                          },
                          required: ["name", "port"],
                          type: "object"
                        },
                        type: "array"
                      }
                    },
                    type: "object"
                  },
                  type: "array"
                }
              },
              required: ["routes"],
              type: "object"
            }
          },
          required: ["metadata", "spec"],
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_MiddlewaresTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.16.1"
    },
    name: "middlewares.traefik.io"
  },
  spec: {
    group: "traefik.io",
    names: {
      kind: "Middleware",
      listKind: "MiddlewareList",
      plural: "middlewares",
      singular: "middleware"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "Middleware is the CRD implementation of a Traefik Middleware.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/overview/",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "MiddlewareSpec defines the desired state of a Middleware.",
              properties: {
                addPrefix: {
                  description: "AddPrefix holds the add prefix middleware configuration.\nThis middleware updates the path of a request before forwarding it.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/addprefix/",
                  properties: {
                    prefix: {
                      description: "Prefix is the string to add before the current path in the requested URL.\nIt should include a leading slash (/).",
                      type: "string"
                    }
                  },
                  type: "object"
                },
                basicAuth: {
                  description: "BasicAuth holds the basic auth middleware configuration.\nThis middleware restricts access to your services to known users.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/basicauth/",
                  properties: {
                    headerField: {
                      description: "HeaderField defines a header field to store the authenticated user.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/basicauth/#headerfield",
                      type: "string"
                    },
                    realm: {
                      description: "Realm allows the protected resources on a server to be partitioned into a set of protection spaces, each with its own authentication scheme.\nDefault: traefik.",
                      type: "string"
                    },
                    removeHeader: {
                      description: "RemoveHeader sets the removeHeader option to true to remove the authorization header before forwarding the request to your service.\nDefault: false.",
                      type: "boolean"
                    },
                    secret: {
                      description: "Secret is the name of the referenced Kubernetes Secret containing user credentials.",
                      type: "string"
                    }
                  },
                  type: "object"
                },
                buffering: {
                  description: "Buffering holds the buffering middleware configuration.\nThis middleware retries or limits the size of requests that can be forwarded to backends.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/buffering/#maxrequestbodybytes",
                  properties: {
                    maxRequestBodyBytes: {
                      description: "MaxRequestBodyBytes defines the maximum allowed body size for the request (in bytes).\nIf the request exceeds the allowed size, it is not forwarded to the service, and the client gets a 413 (Request Entity Too Large) response.\nDefault: 0 (no maximum).",
                      format: "int64",
                      type: "integer"
                    },
                    maxResponseBodyBytes: {
                      description: "MaxResponseBodyBytes defines the maximum allowed response size from the service (in bytes).\nIf the response exceeds the allowed size, it is not forwarded to the client. The client gets a 500 (Internal Server Error) response instead.\nDefault: 0 (no maximum).",
                      format: "int64",
                      type: "integer"
                    },
                    memRequestBodyBytes: {
                      description: "MemRequestBodyBytes defines the threshold (in bytes) from which the request will be buffered on disk instead of in memory.\nDefault: 1048576 (1Mi).",
                      format: "int64",
                      type: "integer"
                    },
                    memResponseBodyBytes: {
                      description: "MemResponseBodyBytes defines the threshold (in bytes) from which the response will be buffered on disk instead of in memory.\nDefault: 1048576 (1Mi).",
                      format: "int64",
                      type: "integer"
                    },
                    retryExpression: {
                      description: "RetryExpression defines the retry conditions.\nIt is a logical combination of functions with operators AND (&&) and OR (||).\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/buffering/#retryexpression",
                      type: "string"
                    }
                  },
                  type: "object"
                },
                chain: {
                  description: "Chain holds the configuration of the chain middleware.\nThis middleware enables to define reusable combinations of other pieces of middleware.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/chain/",
                  properties: {
                    middlewares: {
                      description: "Middlewares is the list of MiddlewareRef which composes the chain.",
                      items: {
                        description: "MiddlewareRef is a reference to a Middleware resource.",
                        properties: {
                          name: {
                            description: "Name defines the name of the referenced Middleware resource.",
                            type: "string"
                          },
                          namespace: {
                            description: "Namespace defines the namespace of the referenced Middleware resource.",
                            type: "string"
                          }
                        },
                        required: ["name"],
                        type: "object"
                      },
                      type: "array"
                    }
                  },
                  type: "object"
                },
                circuitBreaker: {
                  description: "CircuitBreaker holds the circuit breaker configuration.",
                  properties: {
                    checkPeriod: {
                      anyOf: [{
                        type: "integer"
                      }, {
                        type: "string"
                      }],
                      description: "CheckPeriod is the interval between successive checks of the circuit breaker condition (when in standby state).",
                      "x-kubernetes-int-or-string": true
                    },
                    expression: {
                      description: "Expression is the condition that triggers the tripped state.",
                      type: "string"
                    },
                    fallbackDuration: {
                      anyOf: [{
                        type: "integer"
                      }, {
                        type: "string"
                      }],
                      description: "FallbackDuration is the duration for which the circuit breaker will wait before trying to recover (from a tripped state).",
                      "x-kubernetes-int-or-string": true
                    },
                    recoveryDuration: {
                      anyOf: [{
                        type: "integer"
                      }, {
                        type: "string"
                      }],
                      description: "RecoveryDuration is the duration for which the circuit breaker will try to recover (as soon as it is in recovering state).",
                      "x-kubernetes-int-or-string": true
                    },
                    responseCode: {
                      description: "ResponseCode is the status code that the circuit breaker will return while it is in the open state.",
                      type: "integer"
                    }
                  },
                  type: "object"
                },
                compress: {
                  description: "Compress holds the compress middleware configuration.\nThis middleware compresses responses before sending them to the client, using gzip, brotli, or zstd compression.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/compress/",
                  properties: {
                    defaultEncoding: {
                      description: "DefaultEncoding specifies the default encoding if the `Accept-Encoding` header is not in the request or contains a wildcard (`*`).",
                      type: "string"
                    },
                    encodings: {
                      description: "Encodings defines the list of supported compression algorithms.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    excludedContentTypes: {
                      description: "ExcludedContentTypes defines the list of content types to compare the Content-Type header of the incoming requests and responses before compressing.\n`application/grpc` is always excluded.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    includedContentTypes: {
                      description: "IncludedContentTypes defines the list of content types to compare the Content-Type header of the responses before compressing.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    minResponseBodyBytes: {
                      description: "MinResponseBodyBytes defines the minimum amount of bytes a response body must have to be compressed.\nDefault: 1024.",
                      type: "integer"
                    }
                  },
                  type: "object"
                },
                contentType: {
                  description: "ContentType holds the content-type middleware configuration.\nThis middleware exists to enable the correct behavior until at least the default one can be changed in a future version.",
                  properties: {
                    autoDetect: {
                      description: "AutoDetect specifies whether to let the `Content-Type` header, if it has not been set by the backend,\nbe automatically set to a value derived from the contents of the response.\nDeprecated: AutoDetect option is deprecated, Content-Type middleware is only meant to be used to enable the content-type detection, please remove any usage of this option.",
                      type: "boolean"
                    }
                  },
                  type: "object"
                },
                digestAuth: {
                  description: "DigestAuth holds the digest auth middleware configuration.\nThis middleware restricts access to your services to known users.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/digestauth/",
                  properties: {
                    headerField: {
                      description: "HeaderField defines a header field to store the authenticated user.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/basicauth/#headerfield",
                      type: "string"
                    },
                    realm: {
                      description: "Realm allows the protected resources on a server to be partitioned into a set of protection spaces, each with its own authentication scheme.\nDefault: traefik.",
                      type: "string"
                    },
                    removeHeader: {
                      description: "RemoveHeader defines whether to remove the authorization header before forwarding the request to the backend.",
                      type: "boolean"
                    },
                    secret: {
                      description: "Secret is the name of the referenced Kubernetes Secret containing user credentials.",
                      type: "string"
                    }
                  },
                  type: "object"
                },
                errors: {
                  description: "ErrorPage holds the custom error middleware configuration.\nThis middleware returns a custom page in lieu of the default, according to configured ranges of HTTP Status codes.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/errorpages/",
                  properties: {
                    query: {
                      description: "Query defines the URL for the error page (hosted by service).\nThe {status} variable can be used in order to insert the status code in the URL.",
                      type: "string"
                    },
                    service: {
                      description: "Service defines the reference to a Kubernetes Service that will serve the error page.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/errorpages/#service",
                      properties: {
                        healthCheck: {
                          description: "Healthcheck defines health checks for ExternalName services.",
                          properties: {
                            followRedirects: {
                              description: "FollowRedirects defines whether redirects should be followed during the health check calls.\nDefault: true",
                              type: "boolean"
                            },
                            headers: {
                              additionalProperties: {
                                type: "string"
                              },
                              description: "Headers defines custom headers to be sent to the health check endpoint.",
                              type: "object"
                            },
                            hostname: {
                              description: "Hostname defines the value of hostname in the Host header of the health check request.",
                              type: "string"
                            },
                            interval: {
                              anyOf: [{
                                type: "integer"
                              }, {
                                type: "string"
                              }],
                              description: "Interval defines the frequency of the health check calls.\nDefault: 30s",
                              "x-kubernetes-int-or-string": true
                            },
                            method: {
                              description: "Method defines the healthcheck method.",
                              type: "string"
                            },
                            mode: {
                              description: "Mode defines the health check mode.\nIf defined to grpc, will use the gRPC health check protocol to probe the server.\nDefault: http",
                              type: "string"
                            },
                            path: {
                              description: "Path defines the server URL path for the health check endpoint.",
                              type: "string"
                            },
                            port: {
                              description: "Port defines the server URL port for the health check endpoint.",
                              type: "integer"
                            },
                            scheme: {
                              description: "Scheme replaces the server URL scheme for the health check endpoint.",
                              type: "string"
                            },
                            status: {
                              description: "Status defines the expected HTTP status code of the response to the health check request.",
                              type: "integer"
                            },
                            timeout: {
                              anyOf: [{
                                type: "integer"
                              }, {
                                type: "string"
                              }],
                              description: "Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy.\nDefault: 5s",
                              "x-kubernetes-int-or-string": true
                            }
                          },
                          type: "object"
                        },
                        kind: {
                          description: "Kind defines the kind of the Service.",
                          enum: ["Service", "TraefikService"],
                          type: "string"
                        },
                        name: {
                          description: "Name defines the name of the referenced Kubernetes Service or TraefikService.\nThe differentiation between the two is specified in the Kind field.",
                          type: "string"
                        },
                        namespace: {
                          description: "Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.",
                          type: "string"
                        },
                        nativeLB: {
                          description: "NativeLB controls, when creating the load-balancer,\nwhether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.\nThe Kubernetes Service itself does load-balance to the pods.\nBy default, NativeLB is false.",
                          type: "boolean"
                        },
                        nodePortLB: {
                          description: "NodePortLB controls, when creating the load-balancer,\nwhether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.\nIt allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.\nBy default, NodePortLB is false.",
                          type: "boolean"
                        },
                        passHostHeader: {
                          description: "PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.\nBy default, passHostHeader is true.",
                          type: "boolean"
                        },
                        port: {
                          anyOf: [{
                            type: "integer"
                          }, {
                            type: "string"
                          }],
                          description: "Port defines the port of a Kubernetes Service.\nThis can be a reference to a named port.",
                          "x-kubernetes-int-or-string": true
                        },
                        responseForwarding: {
                          description: "ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.",
                          properties: {
                            flushInterval: {
                              description: "FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.\nA negative value means to flush immediately after each write to the client.\nThis configuration is ignored when ReverseProxy recognizes a response as a streaming response;\nfor such responses, writes are flushed to the client immediately.\nDefault: 100ms",
                              type: "string"
                            }
                          },
                          type: "object"
                        },
                        scheme: {
                          description: "Scheme defines the scheme to use for the request to the upstream Kubernetes Service.\nIt defaults to https when Kubernetes Service port is 443, http otherwise.",
                          type: "string"
                        },
                        serversTransport: {
                          description: "ServersTransport defines the name of ServersTransport resource to use.\nIt allows to configure the transport between Traefik and your servers.\nCan only be used on a Kubernetes Service.",
                          type: "string"
                        },
                        sticky: {
                          description: "Sticky defines the sticky sessions configuration.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/services/#sticky-sessions",
                          properties: {
                            cookie: {
                              description: "Cookie defines the sticky cookie configuration.",
                              properties: {
                                httpOnly: {
                                  description: "HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.",
                                  type: "boolean"
                                },
                                maxAge: {
                                  description: "MaxAge defines the number of seconds until the cookie expires.\nWhen set to a negative number, the cookie expires immediately.\nWhen set to zero, the cookie never expires.",
                                  type: "integer"
                                },
                                name: {
                                  description: "Name defines the Cookie name.",
                                  type: "string"
                                },
                                path: {
                                  description: "Path defines the path that must exist in the requested URL for the browser to send the Cookie header.\nWhen not provided the cookie will be sent on every request to the domain.\nMore info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value",
                                  type: "string"
                                },
                                sameSite: {
                                  description: "SameSite defines the same site policy.\nMore info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite",
                                  type: "string"
                                },
                                secure: {
                                  description: "Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).",
                                  type: "boolean"
                                }
                              },
                              type: "object"
                            }
                          },
                          type: "object"
                        },
                        strategy: {
                          description: "Strategy defines the load balancing strategy between the servers.\nRoundRobin is the only supported value at the moment.",
                          type: "string"
                        },
                        weight: {
                          description: "Weight defines the weight and should only be specified when Name references a TraefikService object\n(and to be precise, one that embeds a Weighted Round Robin).",
                          type: "integer"
                        }
                      },
                      required: ["name"],
                      type: "object"
                    },
                    status: {
                      description: "Status defines which status or range of statuses should result in an error page.\nIt can be either a status code as a number (500),\nas multiple comma-separated numbers (500,502),\nas ranges by separating two codes with a dash (500-599),\nor a combination of the two (404,418,500-599).",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    }
                  },
                  type: "object"
                },
                forwardAuth: {
                  description: "ForwardAuth holds the forward auth middleware configuration.\nThis middleware delegates the request authentication to a Service.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/forwardauth/",
                  properties: {
                    addAuthCookiesToResponse: {
                      description: "AddAuthCookiesToResponse defines the list of cookies to copy from the authentication server response to the response.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    address: {
                      description: "Address defines the authentication server address.",
                      type: "string"
                    },
                    authRequestHeaders: {
                      description: "AuthRequestHeaders defines the list of the headers to copy from the request to the authentication server.\nIf not set or empty then all request headers are passed.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    authResponseHeaders: {
                      description: "AuthResponseHeaders defines the list of headers to copy from the authentication server response and set on forwarded request, replacing any existing conflicting headers.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    authResponseHeadersRegex: {
                      description: "AuthResponseHeadersRegex defines the regex to match headers to copy from the authentication server response and set on forwarded request, after stripping all headers that match the regex.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/forwardauth/#authresponseheadersregex",
                      type: "string"
                    },
                    forwardBody: {
                      description: "ForwardBody defines whether to send the request body to the authentication server.",
                      type: "boolean"
                    },
                    headerField: {
                      description: "HeaderField defines a header field to store the authenticated user.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/forwardauth/#headerfield",
                      type: "string"
                    },
                    maxBodySize: {
                      description: "MaxBodySize defines the maximum body size in bytes allowed to be forwarded to the authentication server.",
                      format: "int64",
                      type: "integer"
                    },
                    preserveLocationHeader: {
                      description: "PreserveLocationHeader defines whether to forward the Location header to the client as is or prefix it with the domain name of the authentication server.",
                      type: "boolean"
                    },
                    tls: {
                      description: "TLS defines the configuration used to secure the connection to the authentication server.",
                      properties: {
                        caOptional: {
                          description: "Deprecated: TLS client authentication is a server side option (see https://github.com/golang/go/blob/740a490f71d026bb7d2d13cb8fa2d6d6e0572b70/src/crypto/tls/common.go#L634).",
                          type: "boolean"
                        },
                        caSecret: {
                          description: "CASecret is the name of the referenced Kubernetes Secret containing the CA to validate the server certificate.\nThe CA certificate is extracted from key `tls.ca` or `ca.crt`.",
                          type: "string"
                        },
                        certSecret: {
                          description: "CertSecret is the name of the referenced Kubernetes Secret containing the client certificate.\nThe client certificate is extracted from the keys `tls.crt` and `tls.key`.",
                          type: "string"
                        },
                        insecureSkipVerify: {
                          description: "InsecureSkipVerify defines whether the server certificates should be validated.",
                          type: "boolean"
                        }
                      },
                      type: "object"
                    },
                    trustForwardHeader: {
                      description: "TrustForwardHeader defines whether to trust (ie: forward) all X-Forwarded-* headers.",
                      type: "boolean"
                    }
                  },
                  type: "object"
                },
                grpcWeb: {
                  description: "GrpcWeb holds the gRPC web middleware configuration.\nThis middleware converts a gRPC web request to an HTTP/2 gRPC request.",
                  properties: {
                    allowOrigins: {
                      description: "AllowOrigins is a list of allowable origins.\nCan also be a wildcard origin \"*\".",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    }
                  },
                  type: "object"
                },
                headers: {
                  description: "Headers holds the headers middleware configuration.\nThis middleware manages the requests and responses headers.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/headers/#customrequestheaders",
                  properties: {
                    accessControlAllowCredentials: {
                      description: "AccessControlAllowCredentials defines whether the request can include user credentials.",
                      type: "boolean"
                    },
                    accessControlAllowHeaders: {
                      description: "AccessControlAllowHeaders defines the Access-Control-Request-Headers values sent in preflight response.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    accessControlAllowMethods: {
                      description: "AccessControlAllowMethods defines the Access-Control-Request-Method values sent in preflight response.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    accessControlAllowOriginList: {
                      description: "AccessControlAllowOriginList is a list of allowable origins. Can also be a wildcard origin \"*\".",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    accessControlAllowOriginListRegex: {
                      description: "AccessControlAllowOriginListRegex is a list of allowable origins written following the Regular Expression syntax (https://golang.org/pkg/regexp/).",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    accessControlExposeHeaders: {
                      description: "AccessControlExposeHeaders defines the Access-Control-Expose-Headers values sent in preflight response.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    accessControlMaxAge: {
                      description: "AccessControlMaxAge defines the time that a preflight request may be cached.",
                      format: "int64",
                      type: "integer"
                    },
                    addVaryHeader: {
                      description: "AddVaryHeader defines whether the Vary header is automatically added/updated when the AccessControlAllowOriginList is set.",
                      type: "boolean"
                    },
                    allowedHosts: {
                      description: "AllowedHosts defines the fully qualified list of allowed domain names.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    browserXssFilter: {
                      description: "BrowserXSSFilter defines whether to add the X-XSS-Protection header with the value 1; mode=block.",
                      type: "boolean"
                    },
                    contentSecurityPolicy: {
                      description: "ContentSecurityPolicy defines the Content-Security-Policy header value.",
                      type: "string"
                    },
                    contentSecurityPolicyReportOnly: {
                      description: "ContentSecurityPolicyReportOnly defines the Content-Security-Policy-Report-Only header value.",
                      type: "string"
                    },
                    contentTypeNosniff: {
                      description: "ContentTypeNosniff defines whether to add the X-Content-Type-Options header with the nosniff value.",
                      type: "boolean"
                    },
                    customBrowserXSSValue: {
                      description: "CustomBrowserXSSValue defines the X-XSS-Protection header value.\nThis overrides the BrowserXssFilter option.",
                      type: "string"
                    },
                    customFrameOptionsValue: {
                      description: "CustomFrameOptionsValue defines the X-Frame-Options header value.\nThis overrides the FrameDeny option.",
                      type: "string"
                    },
                    customRequestHeaders: {
                      additionalProperties: {
                        type: "string"
                      },
                      description: "CustomRequestHeaders defines the header names and values to apply to the request.",
                      type: "object"
                    },
                    customResponseHeaders: {
                      additionalProperties: {
                        type: "string"
                      },
                      description: "CustomResponseHeaders defines the header names and values to apply to the response.",
                      type: "object"
                    },
                    featurePolicy: {
                      description: "Deprecated: FeaturePolicy option is deprecated, please use PermissionsPolicy instead.",
                      type: "string"
                    },
                    forceSTSHeader: {
                      description: "ForceSTSHeader defines whether to add the STS header even when the connection is HTTP.",
                      type: "boolean"
                    },
                    frameDeny: {
                      description: "FrameDeny defines whether to add the X-Frame-Options header with the DENY value.",
                      type: "boolean"
                    },
                    hostsProxyHeaders: {
                      description: "HostsProxyHeaders defines the header keys that may hold a proxied hostname value for the request.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    isDevelopment: {
                      description: "IsDevelopment defines whether to mitigate the unwanted effects of the AllowedHosts, SSL, and STS options when developing.\nUsually testing takes place using HTTP, not HTTPS, and on localhost, not your production domain.\nIf you would like your development environment to mimic production with complete Host blocking, SSL redirects,\nand STS headers, leave this as false.",
                      type: "boolean"
                    },
                    permissionsPolicy: {
                      description: "PermissionsPolicy defines the Permissions-Policy header value.\nThis allows sites to control browser features.",
                      type: "string"
                    },
                    publicKey: {
                      description: "PublicKey is the public key that implements HPKP to prevent MITM attacks with forged certificates.",
                      type: "string"
                    },
                    referrerPolicy: {
                      description: "ReferrerPolicy defines the Referrer-Policy header value.\nThis allows sites to control whether browsers forward the Referer header to other sites.",
                      type: "string"
                    },
                    sslForceHost: {
                      description: "Deprecated: SSLForceHost option is deprecated, please use RedirectRegex instead.",
                      type: "boolean"
                    },
                    sslHost: {
                      description: "Deprecated: SSLHost option is deprecated, please use RedirectRegex instead.",
                      type: "string"
                    },
                    sslProxyHeaders: {
                      additionalProperties: {
                        type: "string"
                      },
                      description: "SSLProxyHeaders defines the header keys with associated values that would indicate a valid HTTPS request.\nIt can be useful when using other proxies (example: \"X-Forwarded-Proto\": \"https\").",
                      type: "object"
                    },
                    sslRedirect: {
                      description: "Deprecated: SSLRedirect option is deprecated, please use EntryPoint redirection or RedirectScheme instead.",
                      type: "boolean"
                    },
                    sslTemporaryRedirect: {
                      description: "Deprecated: SSLTemporaryRedirect option is deprecated, please use EntryPoint redirection or RedirectScheme instead.",
                      type: "boolean"
                    },
                    stsIncludeSubdomains: {
                      description: "STSIncludeSubdomains defines whether the includeSubDomains directive is appended to the Strict-Transport-Security header.",
                      type: "boolean"
                    },
                    stsPreload: {
                      description: "STSPreload defines whether the preload flag is appended to the Strict-Transport-Security header.",
                      type: "boolean"
                    },
                    stsSeconds: {
                      description: "STSSeconds defines the max-age of the Strict-Transport-Security header.\nIf set to 0, the header is not set.",
                      format: "int64",
                      type: "integer"
                    }
                  },
                  type: "object"
                },
                inFlightReq: {
                  description: "InFlightReq holds the in-flight request middleware configuration.\nThis middleware limits the number of requests being processed and served concurrently.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/inflightreq/",
                  properties: {
                    amount: {
                      description: "Amount defines the maximum amount of allowed simultaneous in-flight request.\nThe middleware responds with HTTP 429 Too Many Requests if there are already amount requests in progress (based on the same sourceCriterion strategy).",
                      format: "int64",
                      type: "integer"
                    },
                    sourceCriterion: {
                      description: "SourceCriterion defines what criterion is used to group requests as originating from a common source.\nIf several strategies are defined at the same time, an error will be raised.\nIf none are set, the default is to use the requestHost.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/inflightreq/#sourcecriterion",
                      properties: {
                        ipStrategy: {
                          description: "IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/ipallowlist/#ipstrategy",
                          properties: {
                            depth: {
                              description: "Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).",
                              type: "integer"
                            },
                            excludedIPs: {
                              description: "ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.",
                              items: {
                                type: "string"
                              },
                              type: "array"
                            },
                            ipv6Subnet: {
                              description: "IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.",
                              type: "integer"
                            }
                          },
                          type: "object"
                        },
                        requestHeaderName: {
                          description: "RequestHeaderName defines the name of the header used to group incoming requests.",
                          type: "string"
                        },
                        requestHost: {
                          description: "RequestHost defines whether to consider the request Host as the source.",
                          type: "boolean"
                        }
                      },
                      type: "object"
                    }
                  },
                  type: "object"
                },
                ipAllowList: {
                  description: "IPAllowList holds the IP allowlist middleware configuration.\nThis middleware limits allowed requests based on the client IP.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/ipallowlist/",
                  properties: {
                    ipStrategy: {
                      description: "IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/ipallowlist/#ipstrategy",
                      properties: {
                        depth: {
                          description: "Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).",
                          type: "integer"
                        },
                        excludedIPs: {
                          description: "ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.",
                          items: {
                            type: "string"
                          },
                          type: "array"
                        },
                        ipv6Subnet: {
                          description: "IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.",
                          type: "integer"
                        }
                      },
                      type: "object"
                    },
                    rejectStatusCode: {
                      description: "RejectStatusCode defines the HTTP status code used for refused requests.\nIf not set, the default is 403 (Forbidden).",
                      type: "integer"
                    },
                    sourceRange: {
                      description: "SourceRange defines the set of allowed IPs (or ranges of allowed IPs by using CIDR notation).",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    }
                  },
                  type: "object"
                },
                ipWhiteList: {
                  description: "Deprecated: please use IPAllowList instead.",
                  properties: {
                    ipStrategy: {
                      description: "IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/ipallowlist/#ipstrategy",
                      properties: {
                        depth: {
                          description: "Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).",
                          type: "integer"
                        },
                        excludedIPs: {
                          description: "ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.",
                          items: {
                            type: "string"
                          },
                          type: "array"
                        },
                        ipv6Subnet: {
                          description: "IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.",
                          type: "integer"
                        }
                      },
                      type: "object"
                    },
                    sourceRange: {
                      description: "SourceRange defines the set of allowed IPs (or ranges of allowed IPs by using CIDR notation). Required.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    }
                  },
                  type: "object"
                },
                passTLSClientCert: {
                  description: "PassTLSClientCert holds the pass TLS client cert middleware configuration.\nThis middleware adds the selected data from the passed client TLS certificate to a header.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/passtlsclientcert/",
                  properties: {
                    info: {
                      description: "Info selects the specific client certificate details you want to add to the X-Forwarded-Tls-Client-Cert-Info header.",
                      properties: {
                        issuer: {
                          description: "Issuer defines the client certificate issuer details to add to the X-Forwarded-Tls-Client-Cert-Info header.",
                          properties: {
                            commonName: {
                              description: "CommonName defines whether to add the organizationalUnit information into the issuer.",
                              type: "boolean"
                            },
                            country: {
                              description: "Country defines whether to add the country information into the issuer.",
                              type: "boolean"
                            },
                            domainComponent: {
                              description: "DomainComponent defines whether to add the domainComponent information into the issuer.",
                              type: "boolean"
                            },
                            locality: {
                              description: "Locality defines whether to add the locality information into the issuer.",
                              type: "boolean"
                            },
                            organization: {
                              description: "Organization defines whether to add the organization information into the issuer.",
                              type: "boolean"
                            },
                            province: {
                              description: "Province defines whether to add the province information into the issuer.",
                              type: "boolean"
                            },
                            serialNumber: {
                              description: "SerialNumber defines whether to add the serialNumber information into the issuer.",
                              type: "boolean"
                            }
                          },
                          type: "object"
                        },
                        notAfter: {
                          description: "NotAfter defines whether to add the Not After information from the Validity part.",
                          type: "boolean"
                        },
                        notBefore: {
                          description: "NotBefore defines whether to add the Not Before information from the Validity part.",
                          type: "boolean"
                        },
                        sans: {
                          description: "Sans defines whether to add the Subject Alternative Name information from the Subject Alternative Name part.",
                          type: "boolean"
                        },
                        serialNumber: {
                          description: "SerialNumber defines whether to add the client serialNumber information.",
                          type: "boolean"
                        },
                        subject: {
                          description: "Subject defines the client certificate subject details to add to the X-Forwarded-Tls-Client-Cert-Info header.",
                          properties: {
                            commonName: {
                              description: "CommonName defines whether to add the organizationalUnit information into the subject.",
                              type: "boolean"
                            },
                            country: {
                              description: "Country defines whether to add the country information into the subject.",
                              type: "boolean"
                            },
                            domainComponent: {
                              description: "DomainComponent defines whether to add the domainComponent information into the subject.",
                              type: "boolean"
                            },
                            locality: {
                              description: "Locality defines whether to add the locality information into the subject.",
                              type: "boolean"
                            },
                            organization: {
                              description: "Organization defines whether to add the organization information into the subject.",
                              type: "boolean"
                            },
                            organizationalUnit: {
                              description: "OrganizationalUnit defines whether to add the organizationalUnit information into the subject.",
                              type: "boolean"
                            },
                            province: {
                              description: "Province defines whether to add the province information into the subject.",
                              type: "boolean"
                            },
                            serialNumber: {
                              description: "SerialNumber defines whether to add the serialNumber information into the subject.",
                              type: "boolean"
                            }
                          },
                          type: "object"
                        }
                      },
                      type: "object"
                    },
                    pem: {
                      description: "PEM sets the X-Forwarded-Tls-Client-Cert header with the certificate.",
                      type: "boolean"
                    }
                  },
                  type: "object"
                },
                plugin: {
                  additionalProperties: {
                    "x-kubernetes-preserve-unknown-fields": true
                  },
                  description: "Plugin defines the middleware plugin configuration.\nMore info: https://doc.traefik.io/traefik/plugins/",
                  type: "object"
                },
                rateLimit: {
                  description: "RateLimit holds the rate limit configuration.\nThis middleware ensures that services will receive a fair amount of requests, and allows one to define what fair is.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/ratelimit/",
                  properties: {
                    average: {
                      description: "Average is the maximum rate, by default in requests/s, allowed for the given source.\nIt defaults to 0, which means no rate limiting.\nThe rate is actually defined by dividing Average by Period. So for a rate below 1req/s,\none needs to define a Period larger than a second.",
                      format: "int64",
                      type: "integer"
                    },
                    burst: {
                      description: "Burst is the maximum number of requests allowed to arrive in the same arbitrarily small period of time.\nIt defaults to 1.",
                      format: "int64",
                      type: "integer"
                    },
                    period: {
                      anyOf: [{
                        type: "integer"
                      }, {
                        type: "string"
                      }],
                      description: "Period, in combination with Average, defines the actual maximum rate, such as:\nr = Average / Period. It defaults to a second.",
                      "x-kubernetes-int-or-string": true
                    },
                    sourceCriterion: {
                      description: "SourceCriterion defines what criterion is used to group requests as originating from a common source.\nIf several strategies are defined at the same time, an error will be raised.\nIf none are set, the default is to use the request's remote address field (as an ipStrategy).",
                      properties: {
                        ipStrategy: {
                          description: "IPStrategy holds the IP strategy configuration used by Traefik to determine the client IP.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/ipallowlist/#ipstrategy",
                          properties: {
                            depth: {
                              description: "Depth tells Traefik to use the X-Forwarded-For header and take the IP located at the depth position (starting from the right).",
                              type: "integer"
                            },
                            excludedIPs: {
                              description: "ExcludedIPs configures Traefik to scan the X-Forwarded-For header and select the first IP not in the list.",
                              items: {
                                type: "string"
                              },
                              type: "array"
                            },
                            ipv6Subnet: {
                              description: "IPv6Subnet configures Traefik to consider all IPv6 addresses from the defined subnet as originating from the same IP. Applies to RemoteAddrStrategy and DepthStrategy.",
                              type: "integer"
                            }
                          },
                          type: "object"
                        },
                        requestHeaderName: {
                          description: "RequestHeaderName defines the name of the header used to group incoming requests.",
                          type: "string"
                        },
                        requestHost: {
                          description: "RequestHost defines whether to consider the request Host as the source.",
                          type: "boolean"
                        }
                      },
                      type: "object"
                    }
                  },
                  type: "object"
                },
                redirectRegex: {
                  description: "RedirectRegex holds the redirect regex middleware configuration.\nThis middleware redirects a request using regex matching and replacement.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/redirectregex/#regex",
                  properties: {
                    permanent: {
                      description: "Permanent defines whether the redirection is permanent (301).",
                      type: "boolean"
                    },
                    regex: {
                      description: "Regex defines the regex used to match and capture elements from the request URL.",
                      type: "string"
                    },
                    replacement: {
                      description: "Replacement defines how to modify the URL to have the new target URL.",
                      type: "string"
                    }
                  },
                  type: "object"
                },
                redirectScheme: {
                  description: "RedirectScheme holds the redirect scheme middleware configuration.\nThis middleware redirects requests from a scheme/port to another.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/redirectscheme/",
                  properties: {
                    permanent: {
                      description: "Permanent defines whether the redirection is permanent (301).",
                      type: "boolean"
                    },
                    port: {
                      description: "Port defines the port of the new URL.",
                      type: "string"
                    },
                    scheme: {
                      description: "Scheme defines the scheme of the new URL.",
                      type: "string"
                    }
                  },
                  type: "object"
                },
                replacePath: {
                  description: "ReplacePath holds the replace path middleware configuration.\nThis middleware replaces the path of the request URL and store the original path in an X-Replaced-Path header.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/replacepath/",
                  properties: {
                    path: {
                      description: "Path defines the path to use as replacement in the request URL.",
                      type: "string"
                    }
                  },
                  type: "object"
                },
                replacePathRegex: {
                  description: "ReplacePathRegex holds the replace path regex middleware configuration.\nThis middleware replaces the path of a URL using regex matching and replacement.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/replacepathregex/",
                  properties: {
                    regex: {
                      description: "Regex defines the regular expression used to match and capture the path from the request URL.",
                      type: "string"
                    },
                    replacement: {
                      description: "Replacement defines the replacement path format, which can include captured variables.",
                      type: "string"
                    }
                  },
                  type: "object"
                },
                retry: {
                  description: "Retry holds the retry middleware configuration.\nThis middleware reissues requests a given number of times to a backend server if that server does not reply.\nAs soon as the server answers, the middleware stops retrying, regardless of the response status.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/retry/",
                  properties: {
                    attempts: {
                      description: "Attempts defines how many times the request should be retried.",
                      type: "integer"
                    },
                    initialInterval: {
                      anyOf: [{
                        type: "integer"
                      }, {
                        type: "string"
                      }],
                      description: "InitialInterval defines the first wait time in the exponential backoff series.\nThe maximum interval is calculated as twice the initialInterval.\nIf unspecified, requests will be retried immediately.\nThe value of initialInterval should be provided in seconds or as a valid duration format,\nsee https://pkg.go.dev/time#ParseDuration.",
                      "x-kubernetes-int-or-string": true
                    }
                  },
                  type: "object"
                },
                stripPrefix: {
                  description: "StripPrefix holds the strip prefix middleware configuration.\nThis middleware removes the specified prefixes from the URL path.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/stripprefix/",
                  properties: {
                    forceSlash: {
                      description: "Deprecated: ForceSlash option is deprecated, please remove any usage of this option.\nForceSlash ensures that the resulting stripped path is not the empty string, by replacing it with / when necessary.\nDefault: true.",
                      type: "boolean"
                    },
                    prefixes: {
                      description: "Prefixes defines the prefixes to strip from the request URL.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    }
                  },
                  type: "object"
                },
                stripPrefixRegex: {
                  description: "StripPrefixRegex holds the strip prefix regex middleware configuration.\nThis middleware removes the matching prefixes from the URL path.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/http/stripprefixregex/",
                  properties: {
                    regex: {
                      description: "Regex defines the regular expression to match the path prefix from the request URL.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    }
                  },
                  type: "object"
                }
              },
              type: "object"
            }
          },
          required: ["metadata", "spec"],
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_MiddlewaretcpsTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.16.1"
    },
    name: "middlewaretcps.traefik.io"
  },
  spec: {
    group: "traefik.io",
    names: {
      kind: "MiddlewareTCP",
      listKind: "MiddlewareTCPList",
      plural: "middlewaretcps",
      singular: "middlewaretcp"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "MiddlewareTCP is the CRD implementation of a Traefik TCP middleware.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/overview/",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "MiddlewareTCPSpec defines the desired state of a MiddlewareTCP.",
              properties: {
                inFlightConn: {
                  description: "InFlightConn defines the InFlightConn middleware configuration.",
                  properties: {
                    amount: {
                      description: "Amount defines the maximum amount of allowed simultaneous connections.\nThe middleware closes the connection if there are already amount connections opened.",
                      format: "int64",
                      type: "integer"
                    }
                  },
                  type: "object"
                },
                ipAllowList: {
                  description: "IPAllowList defines the IPAllowList middleware configuration.\nThis middleware accepts/refuses connections based on the client IP.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/tcp/ipallowlist/",
                  properties: {
                    sourceRange: {
                      description: "SourceRange defines the allowed IPs (or ranges of allowed IPs by using CIDR notation).",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    }
                  },
                  type: "object"
                },
                ipWhiteList: {
                  description: "IPWhiteList defines the IPWhiteList middleware configuration.\nThis middleware accepts/refuses connections based on the client IP.\nDeprecated: please use IPAllowList instead.\nMore info: https://doc.traefik.io/traefik/v3.3/middlewares/tcp/ipwhitelist/",
                  properties: {
                    sourceRange: {
                      description: "SourceRange defines the allowed IPs (or ranges of allowed IPs by using CIDR notation).",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    }
                  },
                  type: "object"
                }
              },
              type: "object"
            }
          },
          required: ["metadata", "spec"],
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_ServerstransportsTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.16.1"
    },
    name: "serverstransports.traefik.io"
  },
  spec: {
    group: "traefik.io",
    names: {
      kind: "ServersTransport",
      listKind: "ServersTransportList",
      plural: "serverstransports",
      singular: "serverstransport"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "ServersTransport is the CRD implementation of a ServersTransport.\nIf no serversTransport is specified, the default@internal will be used.\nThe default@internal serversTransport is created from the static configuration.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/services/#serverstransport_1",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "ServersTransportSpec defines the desired state of a ServersTransport.",
              properties: {
                certificatesSecrets: {
                  description: "CertificatesSecrets defines a list of secret storing client certificates for mTLS.",
                  items: {
                    type: "string"
                  },
                  type: "array"
                },
                disableHTTP2: {
                  description: "DisableHTTP2 disables HTTP/2 for connections with backend servers.",
                  type: "boolean"
                },
                forwardingTimeouts: {
                  description: "ForwardingTimeouts defines the timeouts for requests forwarded to the backend servers.",
                  properties: {
                    dialTimeout: {
                      anyOf: [{
                        type: "integer"
                      }, {
                        type: "string"
                      }],
                      description: "DialTimeout is the amount of time to wait until a connection to a backend server can be established.",
                      "x-kubernetes-int-or-string": true
                    },
                    idleConnTimeout: {
                      anyOf: [{
                        type: "integer"
                      }, {
                        type: "string"
                      }],
                      description: "IdleConnTimeout is the maximum period for which an idle HTTP keep-alive connection will remain open before closing itself.",
                      "x-kubernetes-int-or-string": true
                    },
                    pingTimeout: {
                      anyOf: [{
                        type: "integer"
                      }, {
                        type: "string"
                      }],
                      description: "PingTimeout is the timeout after which the HTTP/2 connection will be closed if a response to ping is not received.",
                      "x-kubernetes-int-or-string": true
                    },
                    readIdleTimeout: {
                      anyOf: [{
                        type: "integer"
                      }, {
                        type: "string"
                      }],
                      description: "ReadIdleTimeout is the timeout after which a health check using ping frame will be carried out if no frame is received on the HTTP/2 connection.",
                      "x-kubernetes-int-or-string": true
                    },
                    responseHeaderTimeout: {
                      anyOf: [{
                        type: "integer"
                      }, {
                        type: "string"
                      }],
                      description: "ResponseHeaderTimeout is the amount of time to wait for a server's response headers after fully writing the request (including its body, if any).",
                      "x-kubernetes-int-or-string": true
                    }
                  },
                  type: "object"
                },
                insecureSkipVerify: {
                  description: "InsecureSkipVerify disables SSL certificate verification.",
                  type: "boolean"
                },
                maxIdleConnsPerHost: {
                  description: "MaxIdleConnsPerHost controls the maximum idle (keep-alive) to keep per-host.",
                  type: "integer"
                },
                peerCertURI: {
                  description: "PeerCertURI defines the peer cert URI used to match against SAN URI during the peer certificate verification.",
                  type: "string"
                },
                rootCAsSecrets: {
                  description: "RootCAsSecrets defines a list of CA secret used to validate self-signed certificate.",
                  items: {
                    type: "string"
                  },
                  type: "array"
                },
                serverName: {
                  description: "ServerName defines the server name used to contact the server.",
                  type: "string"
                },
                spiffe: {
                  description: "Spiffe defines the SPIFFE configuration.",
                  properties: {
                    ids: {
                      description: "IDs defines the allowed SPIFFE IDs (takes precedence over the SPIFFE TrustDomain).",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    trustDomain: {
                      description: "TrustDomain defines the allowed SPIFFE trust domain.",
                      type: "string"
                    }
                  },
                  type: "object"
                }
              },
              type: "object"
            }
          },
          required: ["metadata", "spec"],
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_ServerstransporttcpsTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.16.1"
    },
    name: "serverstransporttcps.traefik.io"
  },
  spec: {
    group: "traefik.io",
    names: {
      kind: "ServersTransportTCP",
      listKind: "ServersTransportTCPList",
      plural: "serverstransporttcps",
      singular: "serverstransporttcp"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "ServersTransportTCP is the CRD implementation of a TCPServersTransport.\nIf no tcpServersTransport is specified, a default one named default@internal will be used.\nThe default@internal tcpServersTransport can be configured in the static configuration.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/services/#serverstransport_3",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "ServersTransportTCPSpec defines the desired state of a ServersTransportTCP.",
              properties: {
                dialKeepAlive: {
                  anyOf: [{
                    type: "integer"
                  }, {
                    type: "string"
                  }],
                  description: "DialKeepAlive is the interval between keep-alive probes for an active network connection. If zero, keep-alive probes are sent with a default value (currently 15 seconds), if supported by the protocol and operating system. Network protocols or operating systems that do not support keep-alives ignore this field. If negative, keep-alive probes are disabled.",
                  "x-kubernetes-int-or-string": true
                },
                dialTimeout: {
                  anyOf: [{
                    type: "integer"
                  }, {
                    type: "string"
                  }],
                  description: "DialTimeout is the amount of time to wait until a connection to a backend server can be established.",
                  "x-kubernetes-int-or-string": true
                },
                terminationDelay: {
                  anyOf: [{
                    type: "integer"
                  }, {
                    type: "string"
                  }],
                  description: "TerminationDelay defines the delay to wait before fully terminating the connection, after one connected peer has closed its writing capability.",
                  "x-kubernetes-int-or-string": true
                },
                tls: {
                  description: "TLS defines the TLS configuration",
                  properties: {
                    certificatesSecrets: {
                      description: "CertificatesSecrets defines a list of secret storing client certificates for mTLS.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    insecureSkipVerify: {
                      description: "InsecureSkipVerify disables TLS certificate verification.",
                      type: "boolean"
                    },
                    peerCertURI: {
                      description: "MaxIdleConnsPerHost controls the maximum idle (keep-alive) to keep per-host.\nPeerCertURI defines the peer cert URI used to match against SAN URI during the peer certificate verification.",
                      type: "string"
                    },
                    rootCAsSecrets: {
                      description: "RootCAsSecrets defines a list of CA secret used to validate self-signed certificates.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    },
                    serverName: {
                      description: "ServerName defines the server name used to contact the server.",
                      type: "string"
                    },
                    spiffe: {
                      description: "Spiffe defines the SPIFFE configuration.",
                      properties: {
                        ids: {
                          description: "IDs defines the allowed SPIFFE IDs (takes precedence over the SPIFFE TrustDomain).",
                          items: {
                            type: "string"
                          },
                          type: "array"
                        },
                        trustDomain: {
                          description: "TrustDomain defines the allowed SPIFFE trust domain.",
                          type: "string"
                        }
                      },
                      type: "object"
                    }
                  },
                  type: "object"
                }
              },
              type: "object"
            }
          },
          required: ["metadata", "spec"],
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_TlsoptionsTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.16.1"
    },
    name: "tlsoptions.traefik.io"
  },
  spec: {
    group: "traefik.io",
    names: {
      kind: "TLSOption",
      listKind: "TLSOptionList",
      plural: "tlsoptions",
      singular: "tlsoption"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "TLSOption is the CRD implementation of a Traefik TLS Option, allowing to configure some parameters of the TLS connection.\nMore info: https://doc.traefik.io/traefik/v3.3/https/tls/#tls-options",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "TLSOptionSpec defines the desired state of a TLSOption.",
              properties: {
                alpnProtocols: {
                  description: "ALPNProtocols defines the list of supported application level protocols for the TLS handshake, in order of preference.\nMore info: https://doc.traefik.io/traefik/v3.3/https/tls/#alpn-protocols",
                  items: {
                    type: "string"
                  },
                  type: "array"
                },
                cipherSuites: {
                  description: "CipherSuites defines the list of supported cipher suites for TLS versions up to TLS 1.2.\nMore info: https://doc.traefik.io/traefik/v3.3/https/tls/#cipher-suites",
                  items: {
                    type: "string"
                  },
                  type: "array"
                },
                clientAuth: {
                  description: "ClientAuth defines the server's policy for TLS Client Authentication.",
                  properties: {
                    clientAuthType: {
                      description: "ClientAuthType defines the client authentication type to apply.",
                      enum: ["NoClientCert", "RequestClientCert", "RequireAnyClientCert", "VerifyClientCertIfGiven", "RequireAndVerifyClientCert"],
                      type: "string"
                    },
                    secretNames: {
                      description: "SecretNames defines the names of the referenced Kubernetes Secret storing certificate details.",
                      items: {
                        type: "string"
                      },
                      type: "array"
                    }
                  },
                  type: "object"
                },
                curvePreferences: {
                  description: "CurvePreferences defines the preferred elliptic curves in a specific order.\nMore info: https://doc.traefik.io/traefik/v3.3/https/tls/#curve-preferences",
                  items: {
                    type: "string"
                  },
                  type: "array"
                },
                maxVersion: {
                  description: "MaxVersion defines the maximum TLS version that Traefik will accept.\nPossible values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13.\nDefault: None.",
                  type: "string"
                },
                minVersion: {
                  description: "MinVersion defines the minimum TLS version that Traefik will accept.\nPossible values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13.\nDefault: VersionTLS10.",
                  type: "string"
                },
                preferServerCipherSuites: {
                  description: "PreferServerCipherSuites defines whether the server chooses a cipher suite among his own instead of among the client's.\nIt is enabled automatically when minVersion or maxVersion is set.\nDeprecated: https://github.com/golang/go/issues/45430",
                  type: "boolean"
                },
                sniStrict: {
                  description: "SniStrict defines whether Traefik allows connections from clients connections that do not specify a server_name extension.",
                  type: "boolean"
                }
              },
              type: "object"
            }
          },
          required: ["metadata", "spec"],
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_TlsstoresTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.16.1"
    },
    name: "tlsstores.traefik.io"
  },
  spec: {
    group: "traefik.io",
    names: {
      kind: "TLSStore",
      listKind: "TLSStoreList",
      plural: "tlsstores",
      singular: "tlsstore"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "TLSStore is the CRD implementation of a Traefik TLS Store.\nFor the time being, only the TLSStore named default is supported.\nThis means that you cannot have two stores that are named default in different Kubernetes namespaces.\nMore info: https://doc.traefik.io/traefik/v3.3/https/tls/#certificates-stores",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "TLSStoreSpec defines the desired state of a TLSStore.",
              properties: {
                certificates: {
                  description: "Certificates is a list of secret names, each secret holding a key/certificate pair to add to the store.",
                  items: {
                    description: "Certificate holds a secret name for the TLSStore resource.",
                    properties: {
                      secretName: {
                        description: "SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.",
                        type: "string"
                      }
                    },
                    required: ["secretName"],
                    type: "object"
                  },
                  type: "array"
                },
                defaultCertificate: {
                  description: "DefaultCertificate defines the default certificate configuration.",
                  properties: {
                    secretName: {
                      description: "SecretName is the name of the referenced Kubernetes Secret to specify the certificate details.",
                      type: "string"
                    }
                  },
                  required: ["secretName"],
                  type: "object"
                },
                defaultGeneratedCert: {
                  description: "DefaultGeneratedCert defines the default generated certificate configuration.",
                  properties: {
                    domain: {
                      description: "Domain is the domain definition for the DefaultCertificate.",
                      properties: {
                        main: {
                          description: "Main defines the main domain name.",
                          type: "string"
                        },
                        sans: {
                          description: "SANs defines the subject alternative domain names.",
                          items: {
                            type: "string"
                          },
                          type: "array"
                        }
                      },
                      type: "object"
                    },
                    resolver: {
                      description: "Resolver is the name of the resolver that will be used to issue the DefaultCertificate.",
                      type: "string"
                    }
                  },
                  type: "object"
                }
              },
              type: "object"
            }
          },
          required: ["metadata", "spec"],
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const CustomResourceDefinition_TraefikservicesTraefikIo: KubernetesResource = {
  apiVersion: "apiextensions.k8s.io/v1",
  kind: "CustomResourceDefinition",
  metadata: {
    annotations: {
      "controller-gen.kubebuilder.io/version": "v0.16.1"
    },
    name: "traefikservices.traefik.io"
  },
  spec: {
    group: "traefik.io",
    names: {
      kind: "TraefikService",
      listKind: "TraefikServiceList",
      plural: "traefikservices",
      singular: "traefikservice"
    },
    scope: "Namespaced",
    versions: [{
      name: "v1alpha1",
      schema: {
        openAPIV3Schema: {
          description: "TraefikService is the CRD implementation of a Traefik Service.\nTraefikService object allows to:\n- Apply weight to Services on load-balancing\n- Mirror traffic on services\nMore info: https://doc.traefik.io/traefik/v3.3/routing/providers/kubernetes-crd/#kind-traefikservice",
          properties: {
            apiVersion: {
              description: "APIVersion defines the versioned schema of this representation of an object.\nServers should convert recognized schemas to the latest internal value, and\nmay reject unrecognized values.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",
              type: "string"
            },
            kind: {
              description: "Kind is a string value representing the REST resource this object represents.\nServers may infer this from the endpoint the client submits requests to.\nCannot be updated.\nIn CamelCase.\nMore info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",
              type: "string"
            },
            metadata: {
              type: "object"
            },
            spec: {
              description: "TraefikServiceSpec defines the desired state of a TraefikService.",
              properties: {
                mirroring: {
                  description: "Mirroring defines the Mirroring service configuration.",
                  properties: {
                    healthCheck: {
                      description: "Healthcheck defines health checks for ExternalName services.",
                      properties: {
                        followRedirects: {
                          description: "FollowRedirects defines whether redirects should be followed during the health check calls.\nDefault: true",
                          type: "boolean"
                        },
                        headers: {
                          additionalProperties: {
                            type: "string"
                          },
                          description: "Headers defines custom headers to be sent to the health check endpoint.",
                          type: "object"
                        },
                        hostname: {
                          description: "Hostname defines the value of hostname in the Host header of the health check request.",
                          type: "string"
                        },
                        interval: {
                          anyOf: [{
                            type: "integer"
                          }, {
                            type: "string"
                          }],
                          description: "Interval defines the frequency of the health check calls.\nDefault: 30s",
                          "x-kubernetes-int-or-string": true
                        },
                        method: {
                          description: "Method defines the healthcheck method.",
                          type: "string"
                        },
                        mode: {
                          description: "Mode defines the health check mode.\nIf defined to grpc, will use the gRPC health check protocol to probe the server.\nDefault: http",
                          type: "string"
                        },
                        path: {
                          description: "Path defines the server URL path for the health check endpoint.",
                          type: "string"
                        },
                        port: {
                          description: "Port defines the server URL port for the health check endpoint.",
                          type: "integer"
                        },
                        scheme: {
                          description: "Scheme replaces the server URL scheme for the health check endpoint.",
                          type: "string"
                        },
                        status: {
                          description: "Status defines the expected HTTP status code of the response to the health check request.",
                          type: "integer"
                        },
                        timeout: {
                          anyOf: [{
                            type: "integer"
                          }, {
                            type: "string"
                          }],
                          description: "Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy.\nDefault: 5s",
                          "x-kubernetes-int-or-string": true
                        }
                      },
                      type: "object"
                    },
                    kind: {
                      description: "Kind defines the kind of the Service.",
                      enum: ["Service", "TraefikService"],
                      type: "string"
                    },
                    maxBodySize: {
                      description: "MaxBodySize defines the maximum size allowed for the body of the request.\nIf the body is larger, the request is not mirrored.\nDefault value is -1, which means unlimited size.",
                      format: "int64",
                      type: "integer"
                    },
                    mirrorBody: {
                      description: "MirrorBody defines whether the body of the request should be mirrored.\nDefault value is true.",
                      type: "boolean"
                    },
                    mirrors: {
                      description: "Mirrors defines the list of mirrors where Traefik will duplicate the traffic.",
                      items: {
                        description: "MirrorService holds the mirror configuration.",
                        properties: {
                          healthCheck: {
                            description: "Healthcheck defines health checks for ExternalName services.",
                            properties: {
                              followRedirects: {
                                description: "FollowRedirects defines whether redirects should be followed during the health check calls.\nDefault: true",
                                type: "boolean"
                              },
                              headers: {
                                additionalProperties: {
                                  type: "string"
                                },
                                description: "Headers defines custom headers to be sent to the health check endpoint.",
                                type: "object"
                              },
                              hostname: {
                                description: "Hostname defines the value of hostname in the Host header of the health check request.",
                                type: "string"
                              },
                              interval: {
                                anyOf: [{
                                  type: "integer"
                                }, {
                                  type: "string"
                                }],
                                description: "Interval defines the frequency of the health check calls.\nDefault: 30s",
                                "x-kubernetes-int-or-string": true
                              },
                              method: {
                                description: "Method defines the healthcheck method.",
                                type: "string"
                              },
                              mode: {
                                description: "Mode defines the health check mode.\nIf defined to grpc, will use the gRPC health check protocol to probe the server.\nDefault: http",
                                type: "string"
                              },
                              path: {
                                description: "Path defines the server URL path for the health check endpoint.",
                                type: "string"
                              },
                              port: {
                                description: "Port defines the server URL port for the health check endpoint.",
                                type: "integer"
                              },
                              scheme: {
                                description: "Scheme replaces the server URL scheme for the health check endpoint.",
                                type: "string"
                              },
                              status: {
                                description: "Status defines the expected HTTP status code of the response to the health check request.",
                                type: "integer"
                              },
                              timeout: {
                                anyOf: [{
                                  type: "integer"
                                }, {
                                  type: "string"
                                }],
                                description: "Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy.\nDefault: 5s",
                                "x-kubernetes-int-or-string": true
                              }
                            },
                            type: "object"
                          },
                          kind: {
                            description: "Kind defines the kind of the Service.",
                            enum: ["Service", "TraefikService"],
                            type: "string"
                          },
                          name: {
                            description: "Name defines the name of the referenced Kubernetes Service or TraefikService.\nThe differentiation between the two is specified in the Kind field.",
                            type: "string"
                          },
                          namespace: {
                            description: "Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.",
                            type: "string"
                          },
                          nativeLB: {
                            description: "NativeLB controls, when creating the load-balancer,\nwhether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.\nThe Kubernetes Service itself does load-balance to the pods.\nBy default, NativeLB is false.",
                            type: "boolean"
                          },
                          nodePortLB: {
                            description: "NodePortLB controls, when creating the load-balancer,\nwhether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.\nIt allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.\nBy default, NodePortLB is false.",
                            type: "boolean"
                          },
                          passHostHeader: {
                            description: "PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.\nBy default, passHostHeader is true.",
                            type: "boolean"
                          },
                          percent: {
                            description: "Percent defines the part of the traffic to mirror.\nSupported values: 0 to 100.",
                            type: "integer"
                          },
                          port: {
                            anyOf: [{
                              type: "integer"
                            }, {
                              type: "string"
                            }],
                            description: "Port defines the port of a Kubernetes Service.\nThis can be a reference to a named port.",
                            "x-kubernetes-int-or-string": true
                          },
                          responseForwarding: {
                            description: "ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.",
                            properties: {
                              flushInterval: {
                                description: "FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.\nA negative value means to flush immediately after each write to the client.\nThis configuration is ignored when ReverseProxy recognizes a response as a streaming response;\nfor such responses, writes are flushed to the client immediately.\nDefault: 100ms",
                                type: "string"
                              }
                            },
                            type: "object"
                          },
                          scheme: {
                            description: "Scheme defines the scheme to use for the request to the upstream Kubernetes Service.\nIt defaults to https when Kubernetes Service port is 443, http otherwise.",
                            type: "string"
                          },
                          serversTransport: {
                            description: "ServersTransport defines the name of ServersTransport resource to use.\nIt allows to configure the transport between Traefik and your servers.\nCan only be used on a Kubernetes Service.",
                            type: "string"
                          },
                          sticky: {
                            description: "Sticky defines the sticky sessions configuration.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/services/#sticky-sessions",
                            properties: {
                              cookie: {
                                description: "Cookie defines the sticky cookie configuration.",
                                properties: {
                                  httpOnly: {
                                    description: "HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.",
                                    type: "boolean"
                                  },
                                  maxAge: {
                                    description: "MaxAge defines the number of seconds until the cookie expires.\nWhen set to a negative number, the cookie expires immediately.\nWhen set to zero, the cookie never expires.",
                                    type: "integer"
                                  },
                                  name: {
                                    description: "Name defines the Cookie name.",
                                    type: "string"
                                  },
                                  path: {
                                    description: "Path defines the path that must exist in the requested URL for the browser to send the Cookie header.\nWhen not provided the cookie will be sent on every request to the domain.\nMore info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value",
                                    type: "string"
                                  },
                                  sameSite: {
                                    description: "SameSite defines the same site policy.\nMore info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite",
                                    type: "string"
                                  },
                                  secure: {
                                    description: "Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).",
                                    type: "boolean"
                                  }
                                },
                                type: "object"
                              }
                            },
                            type: "object"
                          },
                          strategy: {
                            description: "Strategy defines the load balancing strategy between the servers.\nRoundRobin is the only supported value at the moment.",
                            type: "string"
                          },
                          weight: {
                            description: "Weight defines the weight and should only be specified when Name references a TraefikService object\n(and to be precise, one that embeds a Weighted Round Robin).",
                            type: "integer"
                          }
                        },
                        required: ["name"],
                        type: "object"
                      },
                      type: "array"
                    },
                    name: {
                      description: "Name defines the name of the referenced Kubernetes Service or TraefikService.\nThe differentiation between the two is specified in the Kind field.",
                      type: "string"
                    },
                    namespace: {
                      description: "Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.",
                      type: "string"
                    },
                    nativeLB: {
                      description: "NativeLB controls, when creating the load-balancer,\nwhether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.\nThe Kubernetes Service itself does load-balance to the pods.\nBy default, NativeLB is false.",
                      type: "boolean"
                    },
                    nodePortLB: {
                      description: "NodePortLB controls, when creating the load-balancer,\nwhether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.\nIt allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.\nBy default, NodePortLB is false.",
                      type: "boolean"
                    },
                    passHostHeader: {
                      description: "PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.\nBy default, passHostHeader is true.",
                      type: "boolean"
                    },
                    port: {
                      anyOf: [{
                        type: "integer"
                      }, {
                        type: "string"
                      }],
                      description: "Port defines the port of a Kubernetes Service.\nThis can be a reference to a named port.",
                      "x-kubernetes-int-or-string": true
                    },
                    responseForwarding: {
                      description: "ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.",
                      properties: {
                        flushInterval: {
                          description: "FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.\nA negative value means to flush immediately after each write to the client.\nThis configuration is ignored when ReverseProxy recognizes a response as a streaming response;\nfor such responses, writes are flushed to the client immediately.\nDefault: 100ms",
                          type: "string"
                        }
                      },
                      type: "object"
                    },
                    scheme: {
                      description: "Scheme defines the scheme to use for the request to the upstream Kubernetes Service.\nIt defaults to https when Kubernetes Service port is 443, http otherwise.",
                      type: "string"
                    },
                    serversTransport: {
                      description: "ServersTransport defines the name of ServersTransport resource to use.\nIt allows to configure the transport between Traefik and your servers.\nCan only be used on a Kubernetes Service.",
                      type: "string"
                    },
                    sticky: {
                      description: "Sticky defines the sticky sessions configuration.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/services/#sticky-sessions",
                      properties: {
                        cookie: {
                          description: "Cookie defines the sticky cookie configuration.",
                          properties: {
                            httpOnly: {
                              description: "HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.",
                              type: "boolean"
                            },
                            maxAge: {
                              description: "MaxAge defines the number of seconds until the cookie expires.\nWhen set to a negative number, the cookie expires immediately.\nWhen set to zero, the cookie never expires.",
                              type: "integer"
                            },
                            name: {
                              description: "Name defines the Cookie name.",
                              type: "string"
                            },
                            path: {
                              description: "Path defines the path that must exist in the requested URL for the browser to send the Cookie header.\nWhen not provided the cookie will be sent on every request to the domain.\nMore info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value",
                              type: "string"
                            },
                            sameSite: {
                              description: "SameSite defines the same site policy.\nMore info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite",
                              type: "string"
                            },
                            secure: {
                              description: "Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).",
                              type: "boolean"
                            }
                          },
                          type: "object"
                        }
                      },
                      type: "object"
                    },
                    strategy: {
                      description: "Strategy defines the load balancing strategy between the servers.\nRoundRobin is the only supported value at the moment.",
                      type: "string"
                    },
                    weight: {
                      description: "Weight defines the weight and should only be specified when Name references a TraefikService object\n(and to be precise, one that embeds a Weighted Round Robin).",
                      type: "integer"
                    }
                  },
                  required: ["name"],
                  type: "object"
                },
                weighted: {
                  description: "Weighted defines the Weighted Round Robin configuration.",
                  properties: {
                    services: {
                      description: "Services defines the list of Kubernetes Service and/or TraefikService to load-balance, with weight.",
                      items: {
                        description: "Service defines an upstream HTTP service to proxy traffic to.",
                        properties: {
                          healthCheck: {
                            description: "Healthcheck defines health checks for ExternalName services.",
                            properties: {
                              followRedirects: {
                                description: "FollowRedirects defines whether redirects should be followed during the health check calls.\nDefault: true",
                                type: "boolean"
                              },
                              headers: {
                                additionalProperties: {
                                  type: "string"
                                },
                                description: "Headers defines custom headers to be sent to the health check endpoint.",
                                type: "object"
                              },
                              hostname: {
                                description: "Hostname defines the value of hostname in the Host header of the health check request.",
                                type: "string"
                              },
                              interval: {
                                anyOf: [{
                                  type: "integer"
                                }, {
                                  type: "string"
                                }],
                                description: "Interval defines the frequency of the health check calls.\nDefault: 30s",
                                "x-kubernetes-int-or-string": true
                              },
                              method: {
                                description: "Method defines the healthcheck method.",
                                type: "string"
                              },
                              mode: {
                                description: "Mode defines the health check mode.\nIf defined to grpc, will use the gRPC health check protocol to probe the server.\nDefault: http",
                                type: "string"
                              },
                              path: {
                                description: "Path defines the server URL path for the health check endpoint.",
                                type: "string"
                              },
                              port: {
                                description: "Port defines the server URL port for the health check endpoint.",
                                type: "integer"
                              },
                              scheme: {
                                description: "Scheme replaces the server URL scheme for the health check endpoint.",
                                type: "string"
                              },
                              status: {
                                description: "Status defines the expected HTTP status code of the response to the health check request.",
                                type: "integer"
                              },
                              timeout: {
                                anyOf: [{
                                  type: "integer"
                                }, {
                                  type: "string"
                                }],
                                description: "Timeout defines the maximum duration Traefik will wait for a health check request before considering the server unhealthy.\nDefault: 5s",
                                "x-kubernetes-int-or-string": true
                              }
                            },
                            type: "object"
                          },
                          kind: {
                            description: "Kind defines the kind of the Service.",
                            enum: ["Service", "TraefikService"],
                            type: "string"
                          },
                          name: {
                            description: "Name defines the name of the referenced Kubernetes Service or TraefikService.\nThe differentiation between the two is specified in the Kind field.",
                            type: "string"
                          },
                          namespace: {
                            description: "Namespace defines the namespace of the referenced Kubernetes Service or TraefikService.",
                            type: "string"
                          },
                          nativeLB: {
                            description: "NativeLB controls, when creating the load-balancer,\nwhether the LB's children are directly the pods IPs or if the only child is the Kubernetes Service clusterIP.\nThe Kubernetes Service itself does load-balance to the pods.\nBy default, NativeLB is false.",
                            type: "boolean"
                          },
                          nodePortLB: {
                            description: "NodePortLB controls, when creating the load-balancer,\nwhether the LB's children are directly the nodes internal IPs using the nodePort when the service type is NodePort.\nIt allows services to be reachable when Traefik runs externally from the Kubernetes cluster but within the same network of the nodes.\nBy default, NodePortLB is false.",
                            type: "boolean"
                          },
                          passHostHeader: {
                            description: "PassHostHeader defines whether the client Host header is forwarded to the upstream Kubernetes Service.\nBy default, passHostHeader is true.",
                            type: "boolean"
                          },
                          port: {
                            anyOf: [{
                              type: "integer"
                            }, {
                              type: "string"
                            }],
                            description: "Port defines the port of a Kubernetes Service.\nThis can be a reference to a named port.",
                            "x-kubernetes-int-or-string": true
                          },
                          responseForwarding: {
                            description: "ResponseForwarding defines how Traefik forwards the response from the upstream Kubernetes Service to the client.",
                            properties: {
                              flushInterval: {
                                description: "FlushInterval defines the interval, in milliseconds, in between flushes to the client while copying the response body.\nA negative value means to flush immediately after each write to the client.\nThis configuration is ignored when ReverseProxy recognizes a response as a streaming response;\nfor such responses, writes are flushed to the client immediately.\nDefault: 100ms",
                                type: "string"
                              }
                            },
                            type: "object"
                          },
                          scheme: {
                            description: "Scheme defines the scheme to use for the request to the upstream Kubernetes Service.\nIt defaults to https when Kubernetes Service port is 443, http otherwise.",
                            type: "string"
                          },
                          serversTransport: {
                            description: "ServersTransport defines the name of ServersTransport resource to use.\nIt allows to configure the transport between Traefik and your servers.\nCan only be used on a Kubernetes Service.",
                            type: "string"
                          },
                          sticky: {
                            description: "Sticky defines the sticky sessions configuration.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/services/#sticky-sessions",
                            properties: {
                              cookie: {
                                description: "Cookie defines the sticky cookie configuration.",
                                properties: {
                                  httpOnly: {
                                    description: "HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.",
                                    type: "boolean"
                                  },
                                  maxAge: {
                                    description: "MaxAge defines the number of seconds until the cookie expires.\nWhen set to a negative number, the cookie expires immediately.\nWhen set to zero, the cookie never expires.",
                                    type: "integer"
                                  },
                                  name: {
                                    description: "Name defines the Cookie name.",
                                    type: "string"
                                  },
                                  path: {
                                    description: "Path defines the path that must exist in the requested URL for the browser to send the Cookie header.\nWhen not provided the cookie will be sent on every request to the domain.\nMore info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value",
                                    type: "string"
                                  },
                                  sameSite: {
                                    description: "SameSite defines the same site policy.\nMore info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite",
                                    type: "string"
                                  },
                                  secure: {
                                    description: "Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).",
                                    type: "boolean"
                                  }
                                },
                                type: "object"
                              }
                            },
                            type: "object"
                          },
                          strategy: {
                            description: "Strategy defines the load balancing strategy between the servers.\nRoundRobin is the only supported value at the moment.",
                            type: "string"
                          },
                          weight: {
                            description: "Weight defines the weight and should only be specified when Name references a TraefikService object\n(and to be precise, one that embeds a Weighted Round Robin).",
                            type: "integer"
                          }
                        },
                        required: ["name"],
                        type: "object"
                      },
                      type: "array"
                    },
                    sticky: {
                      description: "Sticky defines whether sticky sessions are enabled.\nMore info: https://doc.traefik.io/traefik/v3.3/routing/providers/kubernetes-crd/#stickiness-and-load-balancing",
                      properties: {
                        cookie: {
                          description: "Cookie defines the sticky cookie configuration.",
                          properties: {
                            httpOnly: {
                              description: "HTTPOnly defines whether the cookie can be accessed by client-side APIs, such as JavaScript.",
                              type: "boolean"
                            },
                            maxAge: {
                              description: "MaxAge defines the number of seconds until the cookie expires.\nWhen set to a negative number, the cookie expires immediately.\nWhen set to zero, the cookie never expires.",
                              type: "integer"
                            },
                            name: {
                              description: "Name defines the Cookie name.",
                              type: "string"
                            },
                            path: {
                              description: "Path defines the path that must exist in the requested URL for the browser to send the Cookie header.\nWhen not provided the cookie will be sent on every request to the domain.\nMore info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#pathpath-value",
                              type: "string"
                            },
                            sameSite: {
                              description: "SameSite defines the same site policy.\nMore info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite",
                              type: "string"
                            },
                            secure: {
                              description: "Secure defines whether the cookie can only be transmitted over an encrypted connection (i.e. HTTPS).",
                              type: "boolean"
                            }
                          },
                          type: "object"
                        }
                      },
                      type: "object"
                    }
                  },
                  type: "object"
                }
              },
              type: "object"
            }
          },
          required: ["metadata", "spec"],
          type: "object"
        }
      },
      served: true,
      storage: true
    }]
  }
};
export const ServiceAccount_Traefik: KubernetesResource = {
  apiVersion: "v1",
  kind: "ServiceAccount",
  metadata: {
    annotations: null,
    labels: {
      "app.kubernetes.io/instance": "traefik-traefik",
      "app.kubernetes.io/managed-by": "Helm",
      "app.kubernetes.io/name": "traefik",
      "helm.sh/chart": "traefik-34.4.1"
    },
    name: "traefik",
    namespace: "traefik"
  },
  automountServiceAccountToken: false
};
export const ClusterRole_TraefikTraefik: KubernetesResource = {
  apiVersion: "rbac.authorization.k8s.io/v1",
  kind: "ClusterRole",
  metadata: {
    labels: {
      "app.kubernetes.io/instance": "traefik-traefik",
      "app.kubernetes.io/managed-by": "Helm",
      "app.kubernetes.io/name": "traefik",
      "helm.sh/chart": "traefik-34.4.1"
    },
    name: "traefik-traefik"
  },
  rules: [{
    apiGroups: [""],
    resources: ["nodes"],
    verbs: ["get", "list", "watch"]
  }, {
    apiGroups: [""],
    resources: ["services"],
    verbs: ["get", "list", "watch"]
  }, {
    apiGroups: ["discovery.k8s.io"],
    resources: ["endpointslices"],
    verbs: ["list", "watch"]
  }, {
    apiGroups: [""],
    resources: ["secrets"],
    verbs: ["get", "list", "watch"]
  }, {
    apiGroups: ["extensions", "networking.k8s.io"],
    resources: ["ingressclasses", "ingresses"],
    verbs: ["get", "list", "watch"]
  }, {
    apiGroups: ["extensions", "networking.k8s.io"],
    resources: ["ingresses/status"],
    verbs: ["update"]
  }, {
    apiGroups: ["traefik.io"],
    resources: ["ingressroutes", "ingressroutetcps", "ingressrouteudps", "middlewares", "middlewaretcps", "serverstransports", "serverstransporttcps", "tlsoptions", "tlsstores", "traefikservices"],
    verbs: ["get", "list", "watch"]
  }]
};
export const ClusterRoleBinding_TraefikTraefik: KubernetesResource = {
  apiVersion: "rbac.authorization.k8s.io/v1",
  kind: "ClusterRoleBinding",
  metadata: {
    labels: {
      "app.kubernetes.io/instance": "traefik-traefik",
      "app.kubernetes.io/managed-by": "Helm",
      "app.kubernetes.io/name": "traefik",
      "helm.sh/chart": "traefik-34.4.1"
    },
    name: "traefik-traefik"
  },
  roleRef: {
    apiGroup: "rbac.authorization.k8s.io",
    kind: "ClusterRole",
    name: "traefik-traefik"
  },
  subjects: [{
    kind: "ServiceAccount",
    name: "traefik",
    namespace: "traefik"
  }]
};
export const Service_Traefik: KubernetesResource = {
  apiVersion: "v1",
  kind: "Service",
  metadata: {
    annotations: null,
    labels: {
      "app.kubernetes.io/instance": "traefik-traefik",
      "app.kubernetes.io/managed-by": "Helm",
      "app.kubernetes.io/name": "traefik",
      "helm.sh/chart": "traefik-34.4.1"
    },
    name: "traefik",
    namespace: "traefik"
  },
  spec: {
    ports: [{
      name: "web",
      port: 80,
      protocol: "TCP",
      targetPort: "web"
    }, {
      name: "websecure",
      port: 443,
      protocol: "TCP",
      targetPort: "websecure"
    }],
    selector: {
      "app.kubernetes.io/instance": "traefik-traefik",
      "app.kubernetes.io/name": "traefik"
    },
    type: "LoadBalancer"
  }
};
export const Deployment_Traefik: KubernetesResource = {
  apiVersion: "apps/v1",
  kind: "Deployment",
  metadata: {
    annotations: null,
    labels: {
      "app.kubernetes.io/instance": "traefik-traefik",
      "app.kubernetes.io/managed-by": "Helm",
      "app.kubernetes.io/name": "traefik",
      "helm.sh/chart": "traefik-34.4.1"
    },
    name: "traefik",
    namespace: "traefik"
  },
  spec: {
    minReadySeconds: 0,
    replicas: 1,
    selector: {
      matchLabels: {
        "app.kubernetes.io/instance": "traefik-traefik",
        "app.kubernetes.io/name": "traefik"
      }
    },
    strategy: {
      rollingUpdate: {
        maxSurge: 1,
        maxUnavailable: 0
      },
      type: "RollingUpdate"
    },
    template: {
      metadata: {
        annotations: {
          "prometheus.io/path": "/metrics",
          "prometheus.io/port": "9100",
          "prometheus.io/scrape": "true"
        },
        labels: {
          "app.kubernetes.io/instance": "traefik-traefik",
          "app.kubernetes.io/managed-by": "Helm",
          "app.kubernetes.io/name": "traefik",
          "helm.sh/chart": "traefik-34.4.1"
        }
      },
      spec: {
        automountServiceAccountToken: true,
        containers: [{
          args: ["--global.checknewversion", "--global.sendanonymoususage", "--entryPoints.metrics.address=:9100/tcp", "--entryPoints.traefik.address=:8080/tcp", "--entryPoints.web.address=:8000/tcp", "--entryPoints.websecure.address=:8443/tcp", "--api.dashboard=true", "--ping=true", "--metrics.prometheus=true", "--metrics.prometheus.entrypoint=metrics", "--providers.kubernetescrd", "--providers.kubernetescrd.allowEmptyServices=true", "--providers.kubernetesingress", "--providers.kubernetesingress.allowEmptyServices=true", "--providers.kubernetesingress.ingressendpoint.publishedservice=traefik/traefik", "--entryPoints.websecure.http.tls=true", "--log.level=INFO"],
          env: [{
            name: "POD_NAME",
            valueFrom: {
              fieldRef: {
                fieldPath: "metadata.name"
              }
            }
          }, {
            name: "POD_NAMESPACE",
            valueFrom: {
              fieldRef: {
                fieldPath: "metadata.namespace"
              }
            }
          }],
          image: "docker.io/traefik:v3.3.4",
          imagePullPolicy: "IfNotPresent",
          lifecycle: null,
          livenessProbe: {
            failureThreshold: 3,
            httpGet: {
              path: "/ping",
              port: 8080,
              scheme: "HTTP"
            },
            initialDelaySeconds: 2,
            periodSeconds: 10,
            successThreshold: 1,
            timeoutSeconds: 2
          },
          name: "traefik",
          ports: [{
            containerPort: 9100,
            name: "metrics",
            protocol: "TCP"
          }, {
            containerPort: 8080,
            name: "traefik",
            protocol: "TCP"
          }, {
            containerPort: 8000,
            name: "web",
            protocol: "TCP"
          }, {
            containerPort: 8443,
            name: "websecure",
            protocol: "TCP"
          }],
          readinessProbe: {
            failureThreshold: 1,
            httpGet: {
              path: "/ping",
              port: 8080,
              scheme: "HTTP"
            },
            initialDelaySeconds: 2,
            periodSeconds: 10,
            successThreshold: 1,
            timeoutSeconds: 2
          },
          resources: null,
          securityContext: {
            allowPrivilegeEscalation: false,
            capabilities: {
              drop: ["ALL"]
            },
            readOnlyRootFilesystem: true
          },
          volumeMounts: [{
            mountPath: "/data",
            name: "data"
          }, {
            mountPath: "/tmp",
            name: "tmp"
          }]
        }],
        hostNetwork: false,
        securityContext: {
          runAsGroup: 65532,
          runAsNonRoot: true,
          runAsUser: 65532
        },
        serviceAccountName: "traefik",
        terminationGracePeriodSeconds: 60,
        volumes: [{
          emptyDir: {},
          name: "data"
        }, {
          emptyDir: {},
          name: "tmp"
        }]
      }
    }
  }
};
export const IngressClass_Traefik: KubernetesResource = {
  apiVersion: "networking.k8s.io/v1",
  kind: "IngressClass",
  metadata: {
    annotations: {
      "ingressclass.kubernetes.io/is-default-class": "true"
    },
    labels: {
      "app.kubernetes.io/instance": "traefik-traefik",
      "app.kubernetes.io/managed-by": "Helm",
      "app.kubernetes.io/name": "traefik",
      "helm.sh/chart": "traefik-34.4.1"
    },
    name: "traefik"
  },
  spec: {
    controller: "traefik.io/ingress-controller"
  }
};
export const resources: ReadonlyArray<KubernetesResource> = [Namespace_Traefik, CustomResourceDefinition_GatewayclassesGatewayNetworkingK8sIo, CustomResourceDefinition_GatewaysGatewayNetworkingK8sIo, CustomResourceDefinition_GrpcroutesGatewayNetworkingK8sIo, CustomResourceDefinition_HttproutesGatewayNetworkingK8sIo, CustomResourceDefinition_ReferencegrantsGatewayNetworkingK8sIo, CustomResourceDefinition_AccesscontrolpoliciesHubTraefikIo, CustomResourceDefinition_AiservicesHubTraefikIo, CustomResourceDefinition_ApiaccessesHubTraefikIo, CustomResourceDefinition_ApibundlesHubTraefikIo, CustomResourceDefinition_ApicatalogitemsHubTraefikIo, CustomResourceDefinition_ApiplansHubTraefikIo, CustomResourceDefinition_ApiportalsHubTraefikIo, CustomResourceDefinition_ApiratelimitsHubTraefikIo, CustomResourceDefinition_ApisHubTraefikIo, CustomResourceDefinition_ApiversionsHubTraefikIo, CustomResourceDefinition_ManagedsubscriptionsHubTraefikIo, CustomResourceDefinition_IngressroutesTraefikIo, CustomResourceDefinition_IngressroutetcpsTraefikIo, CustomResourceDefinition_IngressrouteudpsTraefikIo, CustomResourceDefinition_MiddlewaresTraefikIo, CustomResourceDefinition_MiddlewaretcpsTraefikIo, CustomResourceDefinition_ServerstransportsTraefikIo, CustomResourceDefinition_ServerstransporttcpsTraefikIo, CustomResourceDefinition_TlsoptionsTraefikIo, CustomResourceDefinition_TlsstoresTraefikIo, CustomResourceDefinition_TraefikservicesTraefikIo, ServiceAccount_Traefik, ClusterRole_TraefikTraefik, ClusterRoleBinding_TraefikTraefik, Service_Traefik, Deployment_Traefik, IngressClass_Traefik];
export default {
  resources: resources
};
