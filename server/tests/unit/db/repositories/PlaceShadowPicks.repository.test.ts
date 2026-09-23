/**
 * PlaceShadowPicksRepository (Plan 3c Task 1, PS2–PS8): every statement
 * `PlaceShadowService` used to issue raw, on real rows. `place_shadow_picks`
 * has no other repository test file before this one.
 */
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { PlaceShadowPicks } from '../../../../src/db/entities/PlaceShadowPicks.entity';
import type { PlaceShadowPicksRepository, NewPlaceShadowPickRow } from '../../../../src/db/repositories/PlaceShadowPicks.repository';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let picks: PlaceShadowPicksRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  picks = t.repo(PlaceShadowPicks);
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

function row(overrides: Partial<NewPlaceShadowPickRow> = {}): NewPlaceShadowPickRow {
  return {
    query: 'louvre',
    lang: null,
    bias_lat: null,
    bias_lng: null,
    source: 'nominatim',
    live_rank: 0,
    live_count: 5,
    picked_name: 'Louvre Museum',
    picked_lat: 48.8606,
    picked_lng: 2.3376,
    picked_place_id: null,
    ...overrides,
  };
}

function rawRow(id: number): unknown {
  return testDb.prepare('SELECT * FROM place_shadow_picks WHERE id = ?').get(id);
}

describe('PlaceShadowPicksRepository.insertPick', () => {
  it('PSPICKREPO-001: inserts exactly the given columns, nullable ones included', async () => {
    await picks.insertPick(row());
    const stored = testDb.prepare('SELECT * FROM place_shadow_picks').get() as { id: number };
    expect(rawRow(stored.id)).toMatchObject({ query: 'louvre', source: 'nominatim', live_rank: 0, live_count: 5, lang: null });
  });
});

describe('PlaceShadowPicksRepository.page', () => {
  it('PSPICKREPO-002: pages by id, oldest first, fetching size + 1 rows for the probe', async () => {
    await picks.insertPick(row({ query: 'a' }));
    await picks.insertPick(row({ query: 'b' }));
    await picks.insertPick(row({ query: 'c' }));

    const page = await picks.page(0, 2);
    expect(page).toHaveLength(3); // size + 1 probe row
    expect(page.map((r) => r.query)).toEqual(['a', 'b', 'c']);
  });

  it('PSPICKREPO-003: after excludes everything at or below that id', async () => {
    await picks.insertPick(row({ query: 'a' }));
    const firstId = (testDb.prepare('SELECT id FROM place_shadow_picks').get() as { id: number }).id;
    await picks.insertPick(row({ query: 'b' }));
    const page = await picks.page(firstId, 5);
    expect(page.map((r) => r.query)).toEqual(['b']);
  });
});

describe('PlaceShadowPicksRepository.totals / countBySource / countByLiveRank', () => {
  it('PSPICKREPO-004: totals on an empty table reports 0/null/null', async () => {
    expect(await picks.totals()).toEqual({ total: 0, oldest: null, newest: null });
  });

  it('PSPICKREPO-005: totals reports COUNT/MIN/MAX across every row', async () => {
    await picks.insertPick(row());
    await picks.insertPick(row());
    testDb.prepare("UPDATE place_shadow_picks SET created_at = '2026-01-01 00:00:00' WHERE id = (SELECT MIN(id) FROM place_shadow_picks)").run();
    testDb.prepare("UPDATE place_shadow_picks SET created_at = '2026-06-01 00:00:00' WHERE id = (SELECT MAX(id) FROM place_shadow_picks)").run();
    const totals = await picks.totals();
    expect(totals).toEqual({ total: 2, oldest: '2026-01-01 00:00:00', newest: '2026-06-01 00:00:00' });
  });

  it('PSPICKREPO-006: countBySource groups and orders by count DESC', async () => {
    await picks.insertPick(row({ source: 'nominatim' }));
    await picks.insertPick(row({ source: 'nominatim' }));
    await picks.insertPick(row({ source: 'google' }));
    expect(await picks.countBySource()).toEqual([
      { source: 'nominatim', count: 2 },
      { source: 'google', count: 1 },
    ]);
  });

  it('PSPICKREPO-007: countByLiveRank groups with no ORDER BY (caller buckets)', async () => {
    await picks.insertPick(row({ live_rank: 0 }));
    await picks.insertPick(row({ live_rank: 0 }));
    await picks.insertPick(row({ live_rank: 3 }));
    const rows = await picks.countByLiveRank();
    expect(rows).toEqual(expect.arrayContaining([{ live_rank: 0, count: 2 }, { live_rank: 3, count: 1 }]));
    expect(rows).toHaveLength(2);
  });
});

describe('PlaceShadowPicksRepository.deleteAll / purgeOlderThan', () => {
  it('PSPICKREPO-008: deleteAll wipes every row and returns the affected count', async () => {
    await picks.insertPick(row());
    await picks.insertPick(row());
    expect(await picks.deleteAll()).toBe(2);
    expect(await picks.totals()).toEqual({ total: 0, oldest: null, newest: null });
  });

  it('PSPICKREPO-009: purgeOlderThan removes exactly the rows older than the cutoff, proving the deleted set on a seeded table', async () => {
    await picks.insertPick(row({ query: 'old' }));
    await picks.insertPick(row({ query: 'new' }));
    const [oldRow, newRow] = testDb.prepare('SELECT id, query FROM place_shadow_picks ORDER BY id ASC').all() as { id: number; query: string }[];
    testDb.prepare("UPDATE place_shadow_picks SET created_at = datetime('now', '-200 days') WHERE id = ?").run(oldRow.id);
    testDb.prepare("UPDATE place_shadow_picks SET created_at = datetime('now', '-1 days') WHERE id = ?").run(newRow.id);

    const removed = await picks.purgeOlderThan(180);
    expect(removed).toBe(1);
    const survivors = testDb.prepare('SELECT query FROM place_shadow_picks').all() as { query: string }[];
    expect(survivors.map((r) => r.query)).toEqual(['new']);
  });

  it('PSPICKREPO-010: purgeOlderThan(0) removes rows created before right now, leaving nothing newer than the boundary', async () => {
    await picks.insertPick(row());
    const { id } = testDb.prepare('SELECT id FROM place_shadow_picks').get() as { id: number };
    testDb.prepare("UPDATE place_shadow_picks SET created_at = datetime('now', '-1 seconds') WHERE id = ?").run(id);
    expect(await picks.purgeOlderThan(0)).toBe(1);
  });
});

// D-shape (Task 1 brief item): `page`/`totals`/`countBySource`/`countByLiveRank`
// all go through `find`/`qb().execute()`, neither of which hydrates a
// long-lived entity here — proven anyway for `page` (the one `find()`-based
// read), the honest "not required, proven regardless" shape.
describe('PlaceShadowPicksRepository — D-shape', () => {
  it('PSPICKREPO-011: a row inserted after an unrelated identity-map read is visible in the FIRST wider projection (page)', async () => {
    await t.repo(PlaceShadowPicks).find({}); // populate the identity map with an unrelated (empty) read
    await picks.insertPick(row({ query: 'fresh' }));
    const page = await picks.page(0, 10);
    expect(page.map((r) => r.query)).toEqual(['fresh']);
  });
});
