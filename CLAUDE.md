# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KubernetesJS is a monorepo providing a fully-typed, zero-dependency TypeScript client for the entire Kubernetes API, plus React hooks, CLIs, and operational tooling. Code is generated from the Kubernetes OpenAPI spec using `schema-sdk`.

## Build & Development Commands

```bash
# Install dependencies
pnpm install

# Build all packages (excludes ops-dashboard)
pnpm build

# Build everything including apps
pnpm build:all

# Lint all packages (uses eslint --fix)
pnpm lint

# Build a specific package
pnpm --filter kubernetesjs build
pnpm --filter @kubernetesjs/react build

# Run tests in a specific package
cd packages/kubernetesjs && pnpm test
cd packages/kubernetesjs && pnpm test:watch

# Run a single test file
cd packages/kubernetesjs && npx jest path/to/test.ts

# Regenerate TypeScript client from Kubernetes OpenAPI spec
cd packages/kubernetesjs && pnpm codegen
cd packages/react && pnpm codegen

# Kubernetes API proxy (required for integration tests and local dev)
kubectl proxy --port=8001 --accept-hosts='^.*$' --address='0.0.0.0'
```

## Monorepo Structure

- **pnpm workspaces** with `packages/*` and `apps/*`
- **Lerna** for independent versioning and publishing
- **makage** as the build tool (generates CJS + ESM dual output to `dist/`)

| Package | npm name | Description |
|---|---|---|
| `packages/kubernetesjs` | `kubernetesjs` | Core zero-dependency K8s client |
| `packages/react` | `@kubernetesjs/react` | React hooks with TanStack Query |
| `packages/cli` | `@kubernetesjs/cli` | CLI tool (`k8s` / `kubernetes` commands) |
| `packages/client` | `@kubernetesjs/client` | Enhanced client wrapper |
| `packages/ops` | `@kubernetesjs/ops` | Ops library |
| `packages/ops-cli` | `@kubernetesjs/ops-cli` | High-level ops CLI |
| `packages/manifests` | `@kubernetesjs/manifests` | Curated operator manifests |
| `apps/ops-dashboard` | private | Next.js dashboard UI |

## Architecture

### Code Generation Pipeline

The core `kubernetesjs` and `@kubernetesjs/react` packages have their source generated from the Kubernetes OpenAPI spec (`swagger.json`). The codegen scripts in `packages/*/scripts/codegen.ts` use `schema-sdk` to produce `src/index.ts`. **Do not manually edit generated `src/index.ts` files in these packages** — modify the codegen scripts or `swagger.json` instead.

Key codegen configuration:
- Excludes beta APIs (`v1beta1`, `v2beta1`) and flowcontrol resources
- Uses `namingStrategy.renameMap` to resolve type name conflicts (e.g., `EndpointPort`, `ServiceReference`)
- Patches `IntOrString` to a proper `oneOf` union type

### Client Architecture

`KubernetesClient` takes `{ restEndpoint: string }` and provides typed methods for all K8s API operations (list, get, create, update, patch, delete, watch). The core package has zero runtime dependencies by design.

### React Integration

`@kubernetesjs/react` wraps the client in a React Context (`KubernetesProvider`) with TanStack Query for caching/fetching. Generated hooks follow the pattern `use{OperationName}Query` / `use{OperationName}Mutation`.

### Workspace Dependencies

Packages reference each other via `workspace:^` in package.json. The core `kubernetesjs` package is depended on by `react`, `cli`, `client`, `ops`, and `manifests`.

## Code Style

- **ESLint** with `@typescript-eslint`, `simple-import-sort`, `unused-imports`, and Prettier integration
- **Prettier**: double quotes, trailing commas (es5), 2-space indent, semicolons
- **ESLint enforces**: single quotes in JS/TS source (note: Prettier uses double quotes — ESLint rule takes precedence in `.ts` files)
- `no-explicit-any` is off; `strictNullChecks` is off in tsconfig
- Unused vars with prefix `_` or matching `React|res|next` are allowed

## CI

GitHub Actions runs `pnpm build` and `pnpm lint` on push/PR to `main` and `release/*` branches (Node 20, pnpm 10.12.2).

## Publishing

```bash
pnpm install && pnpm -r build && pnpm -r test
pnpm lerna version          # independent versioning with conventional commits
pnpm lerna publish from-package
```
