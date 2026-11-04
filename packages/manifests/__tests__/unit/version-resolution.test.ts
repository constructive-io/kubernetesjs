import {
  getOperatorResources,
  getOperatorManifestPaths,
  getOperatorVersions,
} from '../../src';

/**
 * The versionless default used to be "whichever version was vendored last".
 *
 * That is how adding Knative v1.22.1 alongside v1.15.0 moved every versionless
 * caller forward a minor-and-a-half with nothing in the diff naming the jump.
 * These assert the ambiguity is refused rather than guessed.
 */
describe('operator version resolution', () => {
  const multi = 'knative-serving';
  const single = 'cert-manager';

  it('knative-serving is the multi-version case these tests depend on', () => {
    // Guards the premise: if this drops to one version, the assertions below
    // stop testing anything and would keep passing.
    expect(getOperatorVersions(multi).length).toBeGreaterThan(1);
    expect(getOperatorVersions(single)).toHaveLength(1);
  });

  it('refuses a versionless call for a multi-version operator', () => {
    expect(() => getOperatorResources(multi)).toThrow(/carries 2 versions/);
    expect(() => getOperatorManifestPaths(multi)).toThrow(/pass one explicitly/);
  });

  it('names the available versions so the caller can pick', () => {
    for (const version of getOperatorVersions(multi)) {
      expect(() => getOperatorResources(multi)).toThrow(new RegExp(version.replace('.', '\\.')));
    }
  });

  it('still allows a versionless call for a single-version operator', () => {
    expect(getOperatorResources(single).length).toBeGreaterThan(0);
    expect(getOperatorManifestPaths(single).length).toBeGreaterThan(0);
  });

  it('returns the version that was actually asked for', () => {
    // The bug this whole path exists to prevent: asking for one version and
    // being handed another, while every log line still names the one you asked
    // for. Checked against the resources' own version label rather than the
    // filename, so a mislabelled vendored file cannot pass.
    for (const version of getOperatorVersions(multi)) {
      const labels = getOperatorResources(multi, version)
        .map((r) => (r.metadata as any)?.labels?.['app.kubernetes.io/version'])
        .filter(Boolean);

      expect(labels.length).toBeGreaterThan(0);
      for (const label of labels) {
        expect(`v${label}`).toBe(version);
      }
    }
  });

  it('rejects an unknown version instead of falling back', () => {
    expect(() => getOperatorResources(multi, 'v0.0.0')).toThrow(/has no version 'v0\.0\.0'/);
    expect(() => getOperatorManifestPaths(multi, 'v0.0.0')).toThrow(/has no version 'v0\.0\.0'/);
  });

  it('rejects an unknown operator by name', () => {
    expect(() => getOperatorVersions('nope')).toThrow(/Unknown operator 'nope'/);
    expect(() => getOperatorResources('nope')).toThrow(/Unknown operator 'nope'/);
  });
});
