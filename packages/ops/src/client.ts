/**
 * The transport lives once, in the core `kubernetesjs` package. This module
 * only keeps the `@kubernetesjs/ops/client` entry point resolvable for
 * consumers that import the client types from it.
 */
export * from 'kubernetesjs/client';
