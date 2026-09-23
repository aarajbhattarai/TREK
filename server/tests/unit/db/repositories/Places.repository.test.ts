/**
 * PlacesRepository.findWithTagsAndRatings (Plan 3c Task 0b): the legacy
 * `getPlaceWithTags`'s three statements (place+category, tags, ratings),
 * merged the same way. Real rows on the real test DB, including the
 * non-empty tags/ratings shape neither `trip-access-primitives.test.ts`'s
 * PRIM-GPWT-00x (empty tags/ratings only) nor any other suite exercises.
 */
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createCategory, createPlace, createTag, createTrip, createUser } from '../../../helpers/factories';
import { Places } from '../../../../src/db/entities/Places.entity';
import type { PlacesRepository } from '../../../../src/db/repositories/Places.repository';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let places: PlacesRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  places = t.repo(Places);
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

describe('PlacesRepository.findWithTagsAndRatings — parity with the legacy getPlaceWithTags', () => {
  it('PLACEREPO-001: no category, no tags, no ratings — null category, empty arrays, null average', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    // category_id: null override defeats createPlace's default-first-category fallback.
    testDb.prepare('DELETE FROM categories').run();
    const place = createPlace(testDb, trip.id, { name: 'Uncategorized Spot' });

    const result = await places.findWithTagsAndRatings(place.id);
    expect(result).toMatchObject({
      id: place.id,
      name: 'Uncategorized Spot',
      category: null,
      tags: [],
      ratings: [],
      rating_avg: null,
      rating_count: 0,
    });
  });

  it('PLACEREPO-002: a category joins in by name/color/icon, not just its id', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    const category = createCategory(testDb, { name: 'Museums', color: '#123456', icon: '🏛️' });
    const place = createPlace(testDb, trip.id, { category_id: category.id });

    const result = await places.findWithTagsAndRatings(place.id);
    expect(result?.category).toEqual({ id: category.id, name: 'Museums', color: '#123456', icon: '🏛️' });
  });

  it('PLACEREPO-003: tags attach through place_tags, each one the full tags row', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    const place = createPlace(testDb, trip.id);
    const tagA = createTag(testDb, owner.id, { name: 'Must see' });
    const tagB = createTag(testDb, owner.id, { name: 'Rainy day' });
    testDb.prepare('INSERT INTO place_tags (place_id, tag_id) VALUES (?, ?)').run(place.id, tagA.id);
    testDb.prepare('INSERT INTO place_tags (place_id, tag_id) VALUES (?, ?)').run(place.id, tagB.id);

    const result = await places.findWithTagsAndRatings(place.id);
    expect(result?.tags).toHaveLength(2);
    expect(result?.tags.map((tg) => tg.name).sort()).toEqual(['Must see', 'Rainy day']);
  });

  it('PLACEREPO-004: ratings hydrate with the voter\'s username/avatar, in created_at order, and average correctly', async () => {
    const { user: owner } = createUser(testDb);
    const { user: voterA } = createUser(testDb, { username: 'voter_a' });
    const { user: voterB } = createUser(testDb, { username: 'voter_b' });
    const trip = createTrip(testDb, owner.id);
    const place = createPlace(testDb, trip.id);
    testDb
      .prepare("INSERT INTO place_ratings (place_id, user_id, rating, created_at) VALUES (?, ?, ?, datetime('now', '-2 minutes'))")
      .run(place.id, voterA.id, 4);
    testDb
      .prepare("INSERT INTO place_ratings (place_id, user_id, rating, created_at) VALUES (?, ?, ?, datetime('now', '-1 minutes'))")
      .run(place.id, voterB.id, 2);

    const result = await places.findWithTagsAndRatings(place.id);
    expect(result?.ratings).toHaveLength(2);
    expect(result?.ratings.map((r) => r.username)).toEqual(['voter_a', 'voter_b']);
    expect(result?.rating_avg).toBe(3);
    expect(result?.rating_count).toBe(2);
  });

  it('PLACEREPO-005: a missing place id resolves to null, not a throw', async () => {
    expect(await places.findWithTagsAndRatings(999999)).toBeNull();
  });

  it('PLACEREPO-006: a non-numeric-looking id resolves to null, the same raw-bind seam TripsRepository documents', async () => {
    expect(await places.findWithTagsAndRatings('abc')).toBeNull();
  });
});
