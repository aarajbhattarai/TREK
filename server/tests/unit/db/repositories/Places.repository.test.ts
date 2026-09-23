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

/**
 * The legacy `getPlaceWithTags` (`db/database.ts:146-197` at base), run raw
 * on the same rows — 0b security review F-B6: a `toMatchObject`/partial
 * assertion cannot see a renamed key (B1's `u__id`) or a dropped one (B2's
 * flat `category_name`/`category_color`/`category_icon`); this reproduces
 * the legacy function's exact three-statement composition and the test below
 * does a full `toEqual` against it, key for key.
 */
function legacyGetPlaceWithTags(placeId: number): unknown {
  const place = testDb
    .prepare('SELECT p.*, c.name as category_name, c.color as category_color, c.icon as category_icon FROM places p LEFT JOIN categories c ON p.category_id = c.id WHERE p.id = ?')
    .get(placeId) as (Record<string, unknown> & { category_id: number | null; category_name: string | null; category_color: string | null; category_icon: string | null }) | undefined;
  if (!place) return null;
  const tags = testDb.prepare('SELECT t.* FROM tags t JOIN place_tags pt ON t.id = pt.tag_id WHERE pt.place_id = ?').all(placeId);
  const ratings = testDb
    .prepare('SELECT pr.user_id, u.username, u.avatar, pr.rating FROM place_ratings pr JOIN users u ON pr.user_id = u.id WHERE pr.place_id = ? ORDER BY pr.created_at')
    .all(placeId) as { user_id: number; username: string; avatar: string | null; rating: number }[];
  return {
    ...place,
    category: place.category_id
      ? { id: place.category_id, name: place.category_name, color: place.category_color, icon: place.category_icon }
      : null,
    tags,
    ratings,
    rating_avg: ratings.length > 0 ? ratings.reduce((s, r) => s + r.rating, 0) / ratings.length : null,
    rating_count: ratings.length,
  };
}

describe('PlacesRepository.findWithTagsAndRatings — parity with the legacy getPlaceWithTags', () => {
  it('PLACEREPO-011 (0b security review F-B6): full key-for-key parity with the legacy statement, on a place with a category, two tags and two ratings', async () => {
    const { user: owner } = createUser(testDb);
    const { user: voterA } = createUser(testDb, { username: 'parity_voter_a' });
    const { user: voterB } = createUser(testDb, { username: 'parity_voter_b' });
    const trip = createTrip(testDb, owner.id);
    const category = createCategory(testDb, { name: 'Parks', color: '#00aa00', icon: '🌳' });
    const place = createPlace(testDb, trip.id, { category_id: category.id, name: 'Parity Park' });
    const tagA = createTag(testDb, owner.id, { name: 'Green' });
    const tagB = createTag(testDb, owner.id, { name: 'Quiet' });
    testDb.prepare('INSERT INTO place_tags (place_id, tag_id) VALUES (?, ?)').run(place.id, tagA.id);
    testDb.prepare('INSERT INTO place_tags (place_id, tag_id) VALUES (?, ?)').run(place.id, tagB.id);
    testDb.prepare("INSERT INTO place_ratings (place_id, user_id, rating, created_at) VALUES (?, ?, ?, datetime('now', '-2 minutes'))").run(place.id, voterA.id, 5);
    testDb.prepare("INSERT INTO place_ratings (place_id, user_id, rating, created_at) VALUES (?, ?, ?, datetime('now', '-1 minutes'))").run(place.id, voterB.id, 3);

    const result = await places.findWithTagsAndRatings(place.id);
    const legacy = legacyGetPlaceWithTags(place.id) as Record<string, unknown>;

    // Sort both sides' tags/ratings arrays the same way before the full
    // toEqual — the repository's join order and the legacy statement's join
    // order are not contractually identical for the tags half (no ORDER BY
    // in either), only the ratings half is `ORDER BY pr.created_at` on both.
    const sortByField = <T extends Record<string, unknown>>(arr: T[], field: string): T[] =>
      [...arr].sort((a, b) => String(a[field]).localeCompare(String(b[field])));
    const normalize = (row: Record<string, unknown>): Record<string, unknown> => ({
      ...row,
      tags: sortByField(row.tags as Record<string, unknown>[], 'id'),
    });

    expect(normalize(result as unknown as Record<string, unknown>)).toEqual(normalize(legacy));
  });
});

describe('PlacesRepository.findWithTagsAndRatings — parity with the legacy getPlaceWithTags (per-case)', () => {
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
    // Task 0b review M1: 4-and-2 averages to 3, which `Math.round(3)` also
    // equals — the brief's own named mutation (wrapping the average in
    // `Math.round(...)`) survived undetected. 4-and-3 averages to 3.5,
    // which `Math.round` would corrupt to 3 or 4 — mutation-proved.
    testDb
      .prepare("INSERT INTO place_ratings (place_id, user_id, rating, created_at) VALUES (?, ?, ?, datetime('now', '-1 minutes'))")
      .run(place.id, voterB.id, 3);

    const result = await places.findWithTagsAndRatings(place.id);
    expect(result?.ratings).toHaveLength(2);
    expect(result?.ratings.map((r) => r.username)).toEqual(['voter_a', 'voter_b']);
    expect(result?.rating_avg).toBe(3.5);
    expect(result?.rating_count).toBe(2);
  });

  // Task 0b review B1 (HIGH, live regression): `ratings[].user_id` was
  // emitted as `u__id` at runtime (a `join('pr.user','u')` + `.select(['pr.user',
  // …])` interaction — TypeScript's declared `PlaceRatingRow.user_id` never
  // existed on the actual row). The client's `StarRating.tsx` keys off
  // `ratings.find(r => r.user_id === currentUserId)`, so this is the direct
  // regression proof neither PLACEREPO-004 (keys off `username`) nor any
  // other suite caught.
  it('PLACEREPO-007 (0b review B1): a rating row carries a real user_id key, not u__id', async () => {
    const { user: owner } = createUser(testDb);
    const { user: voter } = createUser(testDb, { username: 'keyed_voter' });
    const trip = createTrip(testDb, owner.id);
    const place = createPlace(testDb, trip.id);
    testDb.prepare('INSERT INTO place_ratings (place_id, user_id, rating) VALUES (?, ?, ?)').run(place.id, voter.id, 5);

    const result = await places.findWithTagsAndRatings(place.id);
    expect(result?.ratings[0]).toEqual({ user_id: voter.id, username: 'keyed_voter', avatar: null, rating: 5 });
    expect(result?.ratings[0]).not.toHaveProperty('u__id');
  });

  // Task 0b review B2 (HIGH, live regression): `category_name`/
  // `category_color`/`category_icon` rode along on the legacy
  // `getPlaceWithTags`'s runtime object (`{...place, category: ...}` over
  // the raw `SELECT p.*, c.name as category_name, …` row) even though the
  // declared `PlaceWithTags` interface never mentioned them — several live
  // client call sites read them flat (map popups, dashboard, shared-trip
  // page), so a repository that strips them via `const { category_name,
  // ..., ...placeRest } = place` silently breaks those, even though every
  // OTHER assertion in this file (which reads through `result?.category`)
  // stays green.
  it('PLACEREPO-008 (0b review B2): the flat category_name/category_color/category_icon columns ride along on the row, alongside the nested category object', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    const category = createCategory(testDb, { name: 'Cafes', color: '#654321', icon: '☕' });
    const place = createPlace(testDb, trip.id, { category_id: category.id });

    const result = await places.findWithTagsAndRatings(place.id) as unknown as Record<string, unknown>;
    expect(result.category_name).toBe('Cafes');
    expect(result.category_color).toBe('#654321');
    expect(result.category_icon).toBe('☕');
    expect(result.category).toEqual({ id: category.id, name: 'Cafes', color: '#654321', icon: '☕' });
  });

  it('PLACEREPO-009: a missing place id resolves to null, not a throw', async () => {
    expect(await places.findWithTagsAndRatings(999999)).toBeNull();
  });

  it('PLACEREPO-010: a non-numeric-looking id resolves to null, the same raw-bind seam TripsRepository documents', async () => {
    expect(await places.findWithTagsAndRatings('abc')).toBeNull();
  });
});

// Plan 3c Task 1, PP6 ruling (option 2): the `places`-owned half of
// `PlacePhotoCacheService.isReferenced`'s legacy `UNION ALL … LIMIT 1`.
describe('PlacesRepository.existsByGoogleIdOrImageUrl', () => {
  it('EXISTSGOOGLEORIMAGE-001: true when a place carries the google_place_id', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const place = createPlace(testDb, trip.id);
    testDb.prepare('UPDATE places SET google_place_id = ? WHERE id = ?').run('ChIJ-gpid', place.id);
    expect(await places.existsByGoogleIdOrImageUrl('ChIJ-gpid', '/api/maps/place-photo/ChIJ-gpid/bytes')).toBe(true);
  });

  it('EXISTSGOOGLEORIMAGE-002: true when a place carries the proxy image_url instead (coords: pseudo-ids never have a google_place_id)', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const place = createPlace(testDb, trip.id);
    const proxyUrl = '/api/maps/place-photo/coords%3A1%3A2/bytes';
    testDb.prepare('UPDATE places SET image_url = ? WHERE id = ?').run(proxyUrl, place.id);
    expect(await places.existsByGoogleIdOrImageUrl('coords:1:2', proxyUrl)).toBe(true);
  });

  it('EXISTSGOOGLEORIMAGE-003: false when nothing references either value', async () => {
    expect(await places.existsByGoogleIdOrImageUrl('never-seen', '/api/maps/place-photo/never-seen/bytes')).toBe(false);
  });
});
