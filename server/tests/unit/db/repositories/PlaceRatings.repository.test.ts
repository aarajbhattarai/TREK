/**
 * PlaceRatingsRepository.listForPlaces (Plan 3c Task 1, QH2): the batch
 * ratings-by-place loader behind `QueryHelpersService.loadRatingsByPlaceIds`,
 * moved off `query-helpers.service.ts`. `place_ratings` is a Plan 3c-owned
 * table (inventory §14.6) with no repository test file before this one.
 */
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createPlace, createTrip, createUser } from '../../../helpers/factories';
import { PlaceRatings } from '../../../../src/db/entities/PlaceRatings.entity';
import type { PlaceRatingsRepository } from '../../../../src/db/repositories/PlaceRatings.repository';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let placeRatings: PlaceRatingsRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  placeRatings = t.repo(PlaceRatings);
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

function rate(placeId: number, userId: number, rating: number, createdAt: string): void {
  testDb.prepare('INSERT INTO place_ratings (place_id, user_id, rating, created_at) VALUES (?, ?, ?, ?)').run(placeId, userId, rating, createdAt);
}

async function withQueryCount<T>(fn: () => Promise<T>): Promise<{ value: T; queries: number }> {
  const connection = t.orm.em.getConnection();
  const spy = vi.spyOn(connection, 'execute');
  try {
    const value = await fn();
    return { value, queries: spy.mock.calls.length };
  } finally {
    spy.mockRestore();
  }
}

describe('PlaceRatingsRepository.listForPlaces', () => {
  it('PLACERATINGSREPO-001: an empty placeIds array short-circuits to [] without querying', async () => {
    const { value, queries } = await withQueryCount(() => placeRatings.listForPlaces([]));
    expect(value).toEqual([]);
    expect(queries).toBe(0);
  });

  it('PLACERATINGSREPO-002: joins the voter\'s username/avatar, ordered by created_at', async () => {
    const { user: owner } = createUser(testDb);
    const { user: voterA } = createUser(testDb, { username: 'alpha' });
    const { user: voterB } = createUser(testDb, { username: 'beta' });
    const trip = createTrip(testDb, owner.id);
    const place = createPlace(testDb, trip.id);
    rate(place.id, voterA.id, 4, '2026-01-01 00:00:00');
    rate(place.id, voterB.id, 2, '2026-01-02 00:00:00');

    const rows = await placeRatings.listForPlaces([place.id]);
    expect(rows).toEqual([
      { place_id: place.id, user_id: voterA.id, username: 'alpha', avatar: null, rating: 4 },
      { place_id: place.id, user_id: voterB.id, username: 'beta', avatar: null, rating: 2 },
    ]);
  });

  it('PLACERATINGSREPO-003: batches across several places, indexed by place_id in the caller', async () => {
    const { user: owner } = createUser(testDb);
    const { user: voter } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    const placeA = createPlace(testDb, trip.id, { name: 'A' });
    const placeB = createPlace(testDb, trip.id, { name: 'B' });
    rate(placeA.id, voter.id, 5, '2026-01-01 00:00:00');
    rate(placeB.id, voter.id, 1, '2026-01-01 00:00:00');

    const rows = await placeRatings.listForPlaces([placeA.id, placeB.id]);
    expect(rows.map((r) => r.place_id).sort()).toEqual([placeA.id, placeB.id].sort());
  });

  it('PLACERATINGSREPO-004: a place with no ratings contributes no rows', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const place = createPlace(testDb, trip.id);
    expect(await placeRatings.listForPlaces([place.id])).toEqual([]);
  });

  // D-shape (Task 1 brief item): `listForPlaces` is a `qb().execute('all',
  // false)` projection, which never hydrates an entity into the identity
  // map by construction (unlike `find`/`findOne`), so there is no staleness
  // hazard here to reproduce — this proves it anyway, the same honest
  // "not required, proven regardless" shape `Tags.repository.test.ts`'s
  // TAGREPO comments already use for a method that IS at risk.
  it('PLACERATINGSREPO-005 (D-shape): a rating written after an unrelated identity-map read is visible in the FIRST wider projection', async () => {
    const { user: owner } = createUser(testDb);
    const { user: voter } = createUser(testDb, { username: 'fresh-voter' });
    const trip = createTrip(testDb, owner.id);
    const place = createPlace(testDb, trip.id);
    await t.repo(PlaceRatings).find({}); // populate the identity map with an unrelated (empty) read
    rate(place.id, voter.id, 3, '2026-01-01 00:00:00');
    const rows = await placeRatings.listForPlaces([place.id]);
    expect(rows).toEqual([{ place_id: place.id, user_id: voter.id, username: 'fresh-voter', avatar: null, rating: 3 }]);
  });
});
