/**
 * PluginsFeedController (#plugins): the authenticated active-plugin feed. Focused
 * on the parts that re-validate hand-editable DB JSON: capability-derived fields
 * must never surface values the manifest parser would have rejected, and
 * routeProfiles must only appear for plugins whose hook:route-provider grant is
 * actually recorded — a declared-but-ungranted provider can never serve a route,
 * so offering its profiles in the picker would produce dead buttons.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

const { rows, pluginsEnabled } = vi.hoisted(() => ({
  rows: { value: [] as Array<Record<string, unknown>> },
  pluginsEnabled: vi.fn(() => true),
}));
vi.mock('../../../src/nest/plugins/kill-switch', () => ({ pluginsEnabled }));

import { PluginsFeedController } from '../../../src/nest/plugins/plugins-feed.controller';
import type { PluginsRepository } from '../../../src/db/repositories/Plugins.repository';

const row = (over: Record<string, unknown> = {}) => ({
  id: 'p1', name: 'P', type: 'integration', icon: null,
  capabilities: '{}', granted_permissions: '[]',
  ...over,
});

describe('PluginsFeedController', () => {
  // PFC1 (Plan 3j Task 5) — the feed read is now Plugins.repository.ts#findActiveFeedRows.
  const plugins = { findActiveFeedRows: vi.fn(async () => rows.value) } as unknown as PluginsRepository;
  const c = new PluginsFeedController(plugins);
  beforeEach(() => { pluginsEnabled.mockReturnValue(true); rows.value = []; });

  it('returns an empty feed when the runtime is disabled', async () => {
    pluginsEnabled.mockReturnValue(false);
    rows.value = [row()];
    expect(await c.list()).toEqual({ plugins: [] });
  });

  it('serves routeProfiles only alongside the recorded hook:route-provider grant', async () => {
    rows.value = [
      row({ id: 'granted', capabilities: JSON.stringify({ routeProfiles: [{ id: 'ev', label: 'EV' }] }), granted_permissions: JSON.stringify(['hook:route-provider']) }),
      row({ id: 'ungranted', capabilities: JSON.stringify({ routeProfiles: [{ id: 'ev', label: 'EV' }] }) }),
    ];
    const { plugins } = await c.list();
    expect(plugins.find(p => p.id === 'granted')?.routeProfiles).toEqual([{ id: 'ev', label: 'EV' }]);
    expect(plugins.find(p => p.id === 'ungranted')?.routeProfiles).toBeUndefined();
  });

  it('re-validates hand-edited routeProfiles rows (bad ids dropped, labels capped, max 3)', async () => {
    rows.value = [row({
      id: 'edited',
      capabilities: JSON.stringify({
        routeProfiles: [
          { id: '../up', label: 'bad id' },
          { id: 'ok', label: '  L  '.padEnd(60, 'x') },
          { id: 'a', label: 'A' }, { id: 'b', label: 'B' }, { id: 'c', label: 'C' },
        ],
      }),
      granted_permissions: JSON.stringify(['hook:route-provider']),
    })];
    const profiles = (await c.list()).plugins[0].routeProfiles!;
    expect(profiles.every(p => /^[a-z][a-z0-9-]{0,23}$/.test(p.id))).toBe(true);
    expect(profiles.length).toBeLessThanOrEqual(3);
    expect(profiles.every(p => p.label.length <= 40)).toBe(true);
  });

  it('flags geolocation only when the grant is recorded', async () => {
    rows.value = [
      row({ id: 'granted', granted_permissions: JSON.stringify(['geolocation:read']) }),
      row({ id: 'ungranted' }),
    ];
    const { plugins } = await c.list();
    expect(plugins.find(p => p.id === 'granted')?.geolocation).toBe(true);
    expect(plugins.find(p => p.id === 'ungranted')?.geolocation).toBeUndefined();
  });

  it('survives malformed JSON blobs without dropping the plugin', async () => {
    rows.value = [row({ capabilities: '{not json', granted_permissions: 'also not' })];
    const { plugins } = await c.list();
    expect(plugins).toHaveLength(1);
    expect(plugins[0].routeProfiles).toBeUndefined();
    expect(plugins[0].slot).toBe('sidebar');
  });
});
