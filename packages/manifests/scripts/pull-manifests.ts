#!/usr/bin/env ts-node
import { spawnSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as yaml from 'js-yaml';

type Source =
  | {
      type: 'urls';
      version: string;
      urls: string[];
      outputName?: string; // optional alternate filename per version
    }
  | {
      type: 'helm';
      version: string;
      repo: string; // e.g. https://charts.jetstack.io
      repoName: string; // e.g. jetstack
      chart: string; // e.g. cert-manager
      namespace?: string;
      values?: Record<string, any>;
      extraArgs?: string[];
    };

type OperatorConfig = {
  name: string;
  sources: Source[]; // multiple versions allowed
  combineUrls?: boolean; // for urls type: concatenate into single file (default true)
  // Vendor only CustomResourceDefinitions from this operator's output.
  //
  // For charts that mint secrets at template time. Cilium's
  // cilium-ca-secret.yaml emits a freshly generated CA certificate and private
  // key on every `helm template`, unconditionally — `tls.auto.enabled=false`
  // does not suppress it. Vendoring that output would commit a private key to
  // a public repository and publish it to npm, and would never be reproducible
  // since the key changes on every run.
  //
  // The CRDs carry no secrets and are all the generated client needs. Installing
  // such an operator stays a deploy-time action, where the CA is generated in
  // the target cluster and stays there.
  crdsOnly?: boolean;
};

// Configure supported operators and versions.
// Keep explicit URLs for reliability and reproducibility.
const OPERATORS: OperatorConfig[] = [
  {
    name: 'minio-operator',
    sources: [
      {
        type: 'helm',
        // Helm chart version for MinIO Operator (pinned for reproducibility)
        version: '7.1.1',
        repo: 'https://operator.min.io',
        repoName: 'minio-operator',
        chart: 'operator',
        namespace: 'minio-operator',
        // Prefer Helm values over post-render patching: set replicas and resources explicitly.
        values: {
          replicaCount: 1,
          resources: {
            requests: {
              cpu: '500m',
              memory: '256Mi',
              'ephemeral-storage': '500Mi',
            },
            limits: {
              cpu: '500m',
              memory: '512Mi',
              'ephemeral-storage': '1Gi',
            },
          },
        },
      },
    ],
  },
  {
    name: 'cloudnative-pg',
    sources: [
      {
        type: 'urls',
        version: '1.25.2',
        urls: [
          // Pinned to the tag rather than the release-1.25 branch: a branch can
          // change under a fixed filename, so the same version could pull
          // different content on two different days.
          'https://raw.githubusercontent.com/cloudnative-pg/cloudnative-pg/v1.25.2/releases/cnpg-1.25.2.yaml',
        ],
      },
    ],
  },
  {
    name: 'knative-serving',
    // Applied in three ordered parts, never merged: the CRDs have to be
    // established before serving-core's custom resources of those kinds exist.
    combineUrls: false,
    sources: [
      {
        type: 'urls',
        version: 'v1.22.1',
        urls: [
          'https://github.com/knative/serving/releases/download/knative-v1.22.1/serving-crds.yaml',
          'https://github.com/knative/serving/releases/download/knative-v1.22.1/serving-core.yaml',
          // knative-extensions, not knative: the old path redirects, so both
          // work and neither is obviously wrong — which is how two consumers
          // came to name different repos for the same file.
          'https://github.com/knative-extensions/net-kourier/releases/download/knative-v1.22.1/kourier.yaml',
        ],
      },
    ],
  },
  {
    // Held at v1.17.0 deliberately: this is the version deployed downstream, and
    // a client generated from newer CRDs would describe an API that is not
    // running. Bump both together or not at all.
    name: 'cert-manager',
    sources: [
      {
        type: 'helm',
        version: 'v1.17.0', // matches what constructive-cloud deploys — see note below
        repo: 'https://charts.jetstack.io',
        repoName: 'jetstack',
        chart: 'cert-manager',
        namespace: 'cert-manager',
        values: { installCRDs: true, global: { leaderElection: { namespace: 'cert-manager' } } },
      },
    ],
  },
  {
    name: 'kube-prometheus-stack',
    sources: [
      {
        type: 'helm',
        version: '77.5.0',
        repo: 'https://prometheus-community.github.io/helm-charts',
        repoName: 'prometheus-community',
        chart: 'kube-prometheus-stack',
        namespace: 'monitoring',
        values: {
          prometheus: {
            prometheusSpec: {
              retention: '7d',
              storageSpec: {
                volumeClaimTemplate: { spec: { resources: { requests: { storage: '10Gi' } } } },
              },
            },
          },
          grafana: {
            adminPassword: 'admin',
            persistence: { enabled: true, size: '5Gi' },
          },
        },
      },
    ],
  },
  // Cilium is deliberately absent.
  //
  // Its chart cannot be vendored safely or usefully. cilium-ca-secret.yaml
  // emits a freshly generated CA certificate and private key on every
  // `helm template` -- unconditionally; `tls.auto.enabled=false` does not
  // suppress it -- so vendoring the output would commit a private key to a
  // public repository and would never reproduce across runs. Filtering to CRDs
  // yields nothing either, because Cilium's operator registers its CRDs at
  // runtime rather than shipping them in the chart.
  //
  // So Cilium is installed into the cluster by the regenerate workflow, where
  // the operator creates the CRDs the client is generated from, and the CA is
  // generated in that cluster and stays there.
  {
    name: 'traefik',
    sources: [
      {
        type: 'helm',
        version: '34.4.1',
        repo: 'https://traefik.github.io/charts',
        repoName: 'traefik',
        chart: 'traefik',
        namespace: 'traefik',
      },
    ],
  },
  {
    name: 'tekton-pipelines',
    sources: [
      {
        type: 'urls',
        version: 'v1.15.0',
        urls: [
          // The GitHub release asset, not the GCS bucket: the bucket's
          // `previous/` layout does not carry every version.
          'https://github.com/tektoncd/pipeline/releases/download/v1.15.0/release.yaml',
        ],
      },
    ],
  }
];

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath: string, content: string) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
}

function fetchUrl(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          // Handle redirects
          return resolve(fetchUrl(res.headers.location));
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to fetch ${url}: ${res.statusCode}`));
          return;
        }
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve(data));
      })
      .on('error', reject);
  });
}

function helmTemplate(args: string[], cwd?: string): string {
  const { stdout, stderr, status, error } = spawnSync('helm', args, {
    encoding: 'utf8',
    cwd,
    // Large charts (e.g., kube-prometheus-stack with --include-crds) can exceed default buffer.
    maxBuffer: 64 * 1024 * 1024, // 64 MB
  });
  if (error) {
    throw new Error(`helm ${args.join(' ')} error: ${error.message}`);
  }
  if (status !== 0) {
    throw new Error(`helm ${args.join(' ')} failed: ${stderr || stdout}`);
  }
  return stdout;
}

function hasNamespaceDoc(yamlText: string, namespace: string): boolean {
  try {
    const docs = yaml.loadAll(yamlText) as any[];
    return docs.some((d) => d && d.kind === 'Namespace' && d.metadata?.name === namespace);
  } catch {
    // If parse fails, fall back to a string heuristic
    const pattern = new RegExp(`kind:\\s*Namespace[\\s\\S]*?name:\\s*${namespace}\\b`);
    return pattern.test(yamlText);
  }
}

function prependNamespaceDoc(yamlText: string, namespace: string): string {
  const nsDoc = [
    `# Added by pull-manifests.ts to ensure namespace exists`,
    `apiVersion: v1`,
    `kind: Namespace`,
    `metadata:`,
    `  name: ${namespace}`,
    `  labels:`,
    `    app.kubernetes.io/name: ${namespace}`,
    ``,
  ].join('\n');
  const rest = yamlText.trim();
  return `---\n${nsDoc}\n---\n${rest}\n`;
}

// function yamlDocsFrom(text: string): any[] {
//   try {
//     return (yaml.loadAll(text) as any[]).filter((d) => d && typeof d === 'object');
//   } catch {
//     return [];
//   }
// }

function docKey(d: any): string {
  const apiVersion = d?.apiVersion || 'core';
  const kind = d?.kind || '';
  const name = d?.metadata?.name || '';
  const ns = d?.metadata?.namespace || '';
  return `${apiVersion}|${kind}|${name}|${ns}`;
}

// function dumpDocs(docs: any[]): string {
//   return docs.map((d) => yaml.dump(d).trim()).join('\n---\n') + '\n';
// }

function toValuesArgs(values?: Record<string, any>): string[] {
  if (!values) return [];
  const args: string[] = [];
  const flatten = (obj: any, prefix = '') => {
    Object.entries(obj).forEach(([k, v]) => {
      const key = prefix ? `${prefix}.${k}` : k;
      if (typeof v === 'object' && v !== null && !Array.isArray(v)) flatten(v, key);
      else args.push('--set', `${key}=${Array.isArray(v) ? v.join(',') : String(v)}`);
    });
  };
  flatten(values);
  return args;
}

function normalizeVersion(v: string): string {
  return v.startsWith('v') ? v.slice(1) : v;
}

function pickLatest(versions: string[]): string {
  // naive semver compare (x.y.z), ignoring pre-releases
  const parse = (v: string) => normalizeVersion(v).split('.').map((n) => parseInt(n, 10) || 0);
  return versions.sort((a, b) => {
    const pa = parse(a), pb = parse(b);
    for (let i = 0; i < 3; i++) {
      if (pa[i] !== pb[i]) return pb[i] - pa[i];
    }
    return 0;
  })[0];
}

async function pullOperator(op: OperatorConfig, version?: string, outDir = path.resolve(__dirname, '..', 'operators')) {
  const sources = version ? op.sources.filter((s) => s.version === version) : op.sources;
  if (sources.length === 0) throw new Error(`No sources for ${op.name}${version ? `@${version}` : ''}`);

  for (const src of sources) {
    const targetDir = path.join(outDir, op.name);
    const versionTag = src.version;
    const fileName = `${versionTag}.yaml`;
    const targetFile = path.join(targetDir, fileName);

    if (src.type === 'urls') {
      // Fetch and combine raw YAML documents while de-duplicating by logical identity.
      // Preserve original formatting/comments by NOT re-serializing via js-yaml.
      const seen = new Set<string>();
      const outPieces: string[] = [];
      const partContents: string[] = [];

      for (const url of src.urls) {
        // eslint-disable-next-line no-await-in-loop
        const content = await fetchUrl(url);
        const docsRaw = content
          .split(/\n---\s*\n/gm) // split on standalone doc separators
          .map((s) => s.trim())
          .filter((s) => s.length > 0);

        const thisPart: string[] = [];
        let wroteHeaderForSource = false;
        for (const raw of docsRaw) {
          let key = '';
          try {
            const parsed = yaml.load(raw) as any;
            key = docKey(parsed);
          } catch {
            // If parse fails, keep a content hash as a fallback key
            key = `raw:${Buffer.from(raw).toString('base64').slice(0, 24)}`;
          }
          if (seen.has(key)) continue;
          seen.add(key);

          if (!wroteHeaderForSource) {
            outPieces.push(`# Source: ${url}`);
            wroteHeaderForSource = true;
          }
          outPieces.push(raw);
          thisPart.push(raw);
        }
        partContents.push(`# Source: ${url}\n` + thisPart.join('\n---\n') + '\n');
      }

      const combined = outPieces.join('\n---\n') + '\n';

      // combineUrls was declared but never read, so every URL source was
      // concatenated whether or not that was safe. It is not safe for Knative:
      // serving-crds.yaml must be applied and *established* before
      // serving-core.yaml, which contains custom resources of those very kinds.
      // Merged into one document set, a single-pass apply races the CRDs
      // against the resources that need them.
      //
      // With combineUrls false the parts are written separately and numbered,
      // so the order they must be applied in is the order they sort in — and a
      // consumer cannot get it wrong by reading the directory.
      // The combined file is always written: it is what codegen reads to
      // discover kinds, and type generation never applies anything so the
      // ordering problem does not arise there. It is the *apply* path that must
      // not use it.
      writeFile(targetFile, combined);

      if (op.combineUrls === false) {
        // Nested under the version, not beside it: the parts are one version
        // applied in sequence, and writing them as siblings of the versioned
        // files made the codegen read `01-serving-crds` as a version name.
        src.urls.forEach((url, i) => {
          const part = url.split('/').pop() || `part-${i}.yaml`;
          const partFile = path.join(
            targetDir,
            src.version,
            `${String(i + 1).padStart(2, '0')}-${part}`
          );
          writeFile(partFile, partContents[i]);
        });
      }
      // Also update unversioned latest pointer (copy) if this is highest version
  } else if (src.type === 'helm') {
      // Ensure repo
      helmTemplate(['repo', 'add', src.repoName, src.repo]);
      helmTemplate(['repo', 'update']);

      const args = [
        'template',
        op.name,
        `${src.repoName}/${src.chart}`,
        '--include-crds',
        '--version',
        src.version,
      ];
      if (src.namespace) args.push('-n', src.namespace, '--create-namespace');
      args.push(...toValuesArgs(src.values));
      if (src.extraArgs) args.push(...src.extraArgs);

      let rendered = helmTemplate(args).trim();
      // If a namespace was specified for the chart and the rendered output does not
      // include a Namespace resource for it, prepend one so apply can create the ns.
      if (src.namespace && !hasNamespaceDoc(rendered, src.namespace)) {
        rendered = prependNamespaceDoc(rendered, src.namespace);
      }

      // No post-render mutations: rely on Helm values overrides above.

      if (op.crdsOnly) {
        rendered = rendered
          .split(/\n---\s*\n/gm)
          .map((d) => d.trim())
          .filter((d) => {
            if (!d) return false;
            try {
              const parsed = yaml.load(d) as any;
              return parsed?.kind === 'CustomResourceDefinition';
            } catch {
              return false;
            }
          })
          .join('\n---\n');
      }

      writeFile(
        targetFile,
        `# Source: ${src.repoName}/${src.chart}@${src.version}\n${rendered}\n`
      );
    }
  }

  // Update unversioned file to latest version available
  const versions = op.sources.map((s) => s.version);
  const latest = pickLatest(versions);
  const latestFile = path.join(outDir, op.name, `${latest}.yaml`);
  const unversionedFile = path.join(outDir, `${op.name}.yaml`);
  if (fs.existsSync(latestFile)) {
    writeFile(unversionedFile, fs.readFileSync(latestFile, 'utf8'));
  }
}

function parseArgs(argv: string[]) {
  const args = { all: false, operator: undefined as string | undefined, version: undefined as string | undefined, out: undefined as string | undefined };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--all') args.all = true;
    else if (a === '--list') args.operator = '::list';
    else if (a === '--operator' && argv[i + 1]) args.operator = argv[++i];
    else if (a === '--version' && argv[i + 1]) args.version = argv[++i];
    else if (a === '--out' && argv[i + 1]) args.out = argv[++i];
  }
  return args;
}

async function main() {
  const { all, operator, version, out } = parseArgs(process.argv);
  if (operator === '::list') {
    console.log('Available operators and versions:');
    for (const o of OPERATORS) {
      console.log(`- ${o.name}: ${o.sources.map((s) => s.version).join(', ')}`);
    }
    process.exit(0);
  }

  const outDir = out ? path.resolve(out) : path.resolve(__dirname, '..', 'operators');
  ensureDir(outDir);

  if (all) {
    for (const op of OPERATORS) {
      await pullOperator(op, undefined, outDir);
    }
    console.log(`Pulled all operators into ${outDir}`);
    return;
  }

  if (!operator) {
    console.error('Usage: ts-node scripts/pull-manifests.ts --all | --operator <name> [--version <v>] [--out <dir>] | --list');
    process.exit(1);
  }

  const op = OPERATORS.find((o) => o.name === operator);
  if (!op) {
    console.error(`Unknown operator: ${operator}`);
    process.exit(1);
  }
  await pullOperator(op, version, outDir);
  console.log(`Pulled ${operator}${version ? '@' + version : ''} into ${path.join(outDir, operator)}`);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
