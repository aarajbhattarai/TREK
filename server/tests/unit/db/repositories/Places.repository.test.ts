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
import { createCategory, createDay, createDayAssignment, createPlace, createTag, createTrip, createUser } from '../../../helpers/factories';
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

// ---------------------------------------------------------------------------
// Plan 3c Task 4 — the new PlacesRepository methods.
// ---------------------------------------------------------------------------

describe('PlacesRepository.existsInTrip / findInTrip / reclaimInputs / deleteById (PL0/PL7/PL9/PL17/PL19/PL48/PL49/AS5)', () => {
  it('PLACEREPO-012: existsInTrip is true only for the matching id+trip pair', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const otherTrip = createTrip(testDb, user.id);
    const place = createPlace(testDb, trip.id);
    expect(await places.existsInTrip(place.id, trip.id)).toBe(true);
    expect(await places.existsInTrip(place.id, otherTrip.id)).toBe(false);
    expect(await places.existsInTrip(999999, trip.id)).toBe(false);
  });

  it('PLACEREPO-013 (D-shape): a name write after an unrelated identity-map read is visible in findInTrip\'s FIRST wider read', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const place = createPlace(testDb, trip.id, { name: 'Before' });
    // Populate the identity map with an unrelated, WIDER read first — `{ disableIdentityMap: false }`
    // explicitly (program rule 20: the base default leaves the identity map empty, making this vacuous).
    await t.repo(Places).find({ trip: trip.id }, { disableIdentityMap: false });
    testDb.prepare('UPDATE places SET name = ? WHERE id = ?').run('After', place.id);
    const row = await places.findInTrip(place.id, trip.id);
    expect(row?.name).toBe('After');
  });

  it('PLACEREPO-014: findInTrip returns every scalar column (PL9/PL48\'s SELECT *), undefined cross-trip', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const otherTrip = createTrip(testDb, user.id);
    const place = createPlace(testDb, trip.id, { name: 'Full Row' });
    const row = await places.findInTrip(place.id, trip.id);
    expect(row).toMatchObject({ id: place.id, trip_id: trip.id, name: 'Full Row' });
    expect(await places.findInTrip(place.id, otherTrip.id)).toBeUndefined();
  });

  it('PLACEREPO-015: reclaimInputs projects only google_place_id/image_url', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const place = createPlace(testDb, trip.id);
    testDb.prepare('UPDATE places SET google_place_id = ?, image_url = ? WHERE id = ?').run('gpid-1', '/uploads/places/x.jpg', place.id);
    expect(await places.reclaimInputs(place.id, trip.id)).toEqual({ google_place_id: 'gpid-1', image_url: '/uploads/places/x.jpg' });
    expect(await places.reclaimInputs(999999, trip.id)).toBeUndefined();
  });

  it('PLACEREPO-016: deleteById removes exactly that row', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const keep = createPlace(testDb, trip.id, { name: 'Keep' });
    const gone = createPlace(testDb, trip.id, { name: 'Gone' });
    await places.deleteById(gone.id);
    expect(testDb.prepare('SELECT id FROM places WHERE id = ?').get(gone.id)).toBeUndefined();
    expect(testDb.prepare('SELECT id FROM places WHERE id = ?').get(keep.id)).toBeDefined();
  });
});

describe('PlacesRepository.scopedIds (PL23) — input-order preservation', () => {
  it('PLACEREPO-017: returns only the trip\'s own ids, in the CALLER\'s input order, not row/id order', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const other = createTrip(testDb, user.id);
    const p1 = createPlace(testDb, trip.id);
    const p2 = createPlace(testDb, trip.id);
    const p3 = createPlace(testDb, trip.id);
    const foreign = createPlace(testDb, other.id);
    // Deliberately out of id order and interleaved with a foreign + missing id.
    const result = await places.scopedIds(trip.id, [p3.id, 999999, p1.id, foreign.id, p2.id]);
    expect(result).toEqual([p3.id, p1.id, p2.id]);
  });

  it('PLACEREPO-018: empty input short-circuits to []', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    expect(await places.scopedIds(trip.id, [])).toEqual([]);
  });
});

describe('PlacesRepository.insertPlace (PL4) / updatePlace (PL11)', () => {
  it('PLACEREPO-019: insertPlace writes every one of the 25 columns and returns the generated id', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const id = await places.insertPlace({
      trip_id: trip.id, name: 'Full Insert', description: 'd', lat: 0, lng: 0, address: 'a',
      category_id: null, price: 0, currency: 'USD', place_time: '09:00', end_time: '10:00',
      duration_minutes: 60, notes: 'n', image_url: '/uploads/places/x.jpg', google_place_id: 'g',
      google_ftid: 'f', osm_id: 'o', amap_poi_id: 'am', website: 'w', phone: 'p',
      transport_mode: 'walking', route_geometry: '[[1,2]]', route_color: '#fff', stop_type: 'fuel',
      fill_percent: 50,
    });
    const row = await places.findInTrip(id, trip.id);
    expect(row).toMatchObject({
      trip_id: trip.id, name: 'Full Insert', description: 'd', lat: 0, lng: 0, address: 'a',
      category_id: null, price: 0, currency: 'USD', place_time: '09:00', end_time: '10:00',
      duration_minutes: 60, notes: 'n', image_url: '/uploads/places/x.jpg', google_place_id: 'g',
      google_ftid: 'f', osm_id: 'o', amap_poi_id: 'am', website: 'w', phone: 'p',
      transport_mode: 'walking', route_geometry: '[[1,2]]', route_color: '#fff', stop_type: 'fuel',
      fill_percent: 50,
    });
  });

  it('PLACEREPO-020 (PL11 matrix): a written null vs a written value are byte-distinct on the same column', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const place = createPlace(testDb, trip.id, { name: 'Original' });
    const base = {
      name: 'Original', description: null, lat: null, lng: null, address: null, category_id: null,
      price: null, currency: null, place_time: null, end_time: null, duration_minutes: null,
      notes: null, image_url: null, google_place_id: null, google_ftid: null, osm_id: null,
      amap_poi_id: null, website: null, phone: null, transport_mode: null, route_color: null,
      stop_type: null, fill_percent: null,
    };
    // A non-COALESCE column (description) written explicitly null clears it.
    await places.updatePlace(place.id, { ...base, description: 'first' });
    expect((await places.findInTrip(place.id, trip.id))?.description).toBe('first');
    await places.updatePlace(place.id, { ...base, description: null });
    expect((await places.findInTrip(place.id, trip.id))?.description).toBeNull();
    // duration_minutes: 0 is a real value, distinct from null (the service's
    // `!== undefined` fallback — this repository test proves the write itself
    // stores 0 and null distinctly, not that either collapses to the other).
    await places.updatePlace(place.id, { ...base, duration_minutes: 0 });
    expect((await places.findInTrip(place.id, trip.id))?.duration_minutes).toBe(0);
    await places.updatePlace(place.id, { ...base, duration_minutes: null });
    expect((await places.findInTrip(place.id, trip.id))?.duration_minutes).toBeNull();
  });

  it('PLACEREPO-021: updatePlace stamps updated_at with the current time', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const place = createPlace(testDb, trip.id, { name: 'Stampable' });
    // Force a stale, second-resolution-distinguishable `updated_at` — this
    // write and the assertion below both happen within the same real
    // second, so comparing against `createPlace`'s own `CURRENT_TIMESTAMP`
    // default would be flaky (Object.is on two identical second-granularity
    // strings), not a proof of anything.
    testDb.prepare("UPDATE places SET updated_at = datetime('now', '-1 hour') WHERE id = ?").run(place.id);
    const before = (await places.findInTrip(place.id, trip.id))?.updated_at;
    await places.updatePlace(place.id, {
      name: 'Stamped', description: null, lat: null, lng: null, address: null, category_id: null,
      price: null, currency: null, place_time: null, end_time: null, duration_minutes: null,
      notes: null, image_url: null, google_place_id: null, google_ftid: null, osm_id: null,
      amap_poi_id: null, website: null, phone: null, transport_mode: null, route_color: null,
      stop_type: null, fill_percent: null,
    });
    const after = await places.findInTrip(place.id, trip.id);
    expect(after?.name).toBe('Stamped');
    expect(after?.updated_at).not.toBe(before);
  });
});

describe('PlacesRepository.findDuplicateByExternalId / findDuplicateByName / findDuplicateByCoords (PL25/PL26/PL27)', () => {
  it('PLACEREPO-022 (PL25): matches on any of the four provider-id columns, lowest id wins', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const first = createPlace(testDb, trip.id, { name: 'First' });
    testDb.prepare('UPDATE places SET osm_id = ? WHERE id = ?').run('node:123', first.id);
    const second = createPlace(testDb, trip.id, { name: 'Second' });
    testDb.prepare('UPDATE places SET google_ftid = ? WHERE id = ?').run('node:123', second.id);
    const hit = await places.findDuplicateByExternalId(String(trip.id), 'node:123');
    expect(hit?.id).toBe(first.id);
  });

  it('PLACEREPO-023 (PL26, rule 18 exception): lower(trim(name)) matches ASCII-folded names; a non-ASCII cased letter does NOT match — the documented legacy divergence, pinned not fixed', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const place = createPlace(testDb, trip.id, { name: '  Café Central  ' });
    // The service's own JS-lowered+trimmed value, matching `normalizePlaceName`'s
    // Unicode-aware fold — this side is honest, so it would match the row exactly.
    const jsLowered = '  café central  '.trim().toLowerCase();
    // SQLite's lower()/trim() is ASCII-only: it lowercases "C" but never touches
    // "É"/"é" — `Café Central` (stored) trims+lowers via SQL to `café central`.
    const hit = await places.findDuplicateByName(String(trip.id), jsLowered);
    expect(hit?.id).toBe(place.id);
    // A row stored with an upper-case accented letter (`CAFÉ`) does NOT match a
    // JS-lowered candidate (`café`) — SQLite's LOWER() never folds `É` to `é`,
    // reproducing the documented disagreement (places.service.ts's own PL26 docstring).
    const accented = createPlace(testDb, trip.id, { name: 'CAFÉ NORD' });
    const jsLoweredAccented = 'café nord'.toLowerCase();
    const miss = await places.findDuplicateByName(String(trip.id), jsLoweredAccented);
    expect(miss?.id).not.toBe(accented.id);
  });

  it('PLACEREPO-024 (PL27): matches within the coordinate tolerance box, on both lat and lng', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const place = createPlace(testDb, trip.id, { lat: 48.8566, lng: 2.3522 });
    const hit = await places.findDuplicateByCoords(String(trip.id), 48.8566 + 0.00005, 2.3522 - 0.00005, 0.0001);
    expect(hit?.id).toBe(place.id);
    const miss = await places.findDuplicateByCoords(String(trip.id), 48.9, 2.5, 0.0001);
    expect(miss).toBeUndefined();
  });
});

describe('PlacesRepository.listForGpx (PL29) and existsByImageUrl (PI1)', () => {
  it('PLACEREPO-025: projects the waypoint columns plus the flat category name, ordered by id', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const category = createCategory(testDb, { name: 'Trails' });
    const p1 = createPlace(testDb, trip.id, { name: 'A', category_id: category.id });
    // `createPlace` always falls back to the first available category when
    // no override is given (its own `?? defaultCat?.id ?? null` chain — an
    // explicit `category_id: null` override is ALSO nullish, so it falls
    // through the same way), and deleting the categories table would also
    // break p1's own join. Insert place B directly instead, to genuinely
    // pin `category_id = NULL` while `category` (p1's) still exists.
    const p2Id = testDb.prepare('INSERT INTO places (trip_id, name, category_id) VALUES (?, ?, NULL)').run(trip.id, 'B').lastInsertRowid;
    const p2 = { id: p2Id as number };
    const rows = await places.listForGpx(String(trip.id));
    expect(rows.map((r) => r.name)).toEqual(['A', 'B']);
    expect(rows[0]).toMatchObject({ name: 'A', category: 'Trails' });
    expect(rows[1]).toMatchObject({ name: 'B', category: null });
    void p1; void p2;
  });

  it('PLACEREPO-026 (PI1): existsByImageUrl is trip-agnostic — true for any place carrying the url', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const place = createPlace(testDb, trip.id);
    testDb.prepare('UPDATE places SET image_url = ? WHERE id = ?').run('/uploads/places/shared.jpg', place.id);
    expect(await places.existsByImageUrl('/uploads/places/shared.jpg')).toBe(true);
    expect(await places.existsByImageUrl('/uploads/places/nope.jpg')).toBe(false);
  });
});

describe('PlacesRepository.listForTrip (PL3) — filter fragments', () => {
  it('PLACEREPO-027: no filters — every trip place, DISTINCT, newest first', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const older = createPlace(testDb, trip.id, { name: 'Older' });
    testDb.prepare("UPDATE places SET created_at = datetime('now', '-1 hour') WHERE id = ?").run(older.id);
    const newer = createPlace(testDb, trip.id, { name: 'Newer' });
    const rows = await places.listForTrip(String(trip.id), {});
    expect(rows.map((r) => r.id)).toEqual([newer.id, older.id]);
  });

  it('PLACEREPO-028: searchPattern matches name/address/description (already-escaped, wrapped by the caller)', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const hit = createPlace(testDb, trip.id, { name: 'Eiffel Tower' });
    const miss = createPlace(testDb, trip.id, { name: 'Louvre' });
    const rows = await places.listForTrip(String(trip.id), { searchPattern: '%Eiffel%' });
    expect(rows.map((r) => r.id)).toEqual([hit.id]);
    void miss;
  });

  it('PLACEREPO-029: category filters to that category_id only', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const cat = createCategory(testDb, { name: 'Museums' });
    const inCat = createPlace(testDb, trip.id, { category_id: cat.id });
    const outCat = createPlace(testDb, trip.id);
    testDb.prepare('DELETE FROM categories WHERE id != ?').run(cat.id);
    const rows = await places.listForTrip(String(trip.id), { category: String(cat.id) });
    expect(rows.map((r) => r.id)).toEqual([inCat.id]);
    void outCat;
  });

  it('PLACEREPO-030: tag filters via the place_tags subquery', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const tag = createTag(testDb, user.id, { name: 'Must see' });
    const tagged = createPlace(testDb, trip.id, { name: 'Tagged' });
    const untagged = createPlace(testDb, trip.id, { name: 'Untagged' });
    testDb.prepare('INSERT INTO place_tags (place_id, tag_id) VALUES (?, ?)').run(tagged.id, tag.id);
    const rows = await places.listForTrip(String(trip.id), { tag: String(tag.id) });
    expect(rows.map((r) => r.id)).toEqual([tagged.id]);
    void untagged;
  });

  it('PLACEREPO-031: assignment=unassigned / assigned split the trip\'s places by day_assignments membership', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const day = createDay(testDb, trip.id);
    const assigned = createPlace(testDb, trip.id, { name: 'On a day' });
    const unassigned = createPlace(testDb, trip.id, { name: 'In the pool' });
    createDayAssignment(testDb, day.id, assigned.id);
    const assignedRows = await places.listForTrip(String(trip.id), { assignment: 'assigned' });
    expect(assignedRows.map((r) => r.id)).toEqual([assigned.id]);
    const unassignedRows = await places.listForTrip(String(trip.id), { assignment: 'unassigned' });
    expect(unassignedRows.map((r) => r.id)).toEqual([unassigned.id]);
  });

  it('PLACEREPO-032: search + category + tag + assignment combine with AND, all four fragments at once', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const cat = createCategory(testDb, { name: 'Parks' });
    const tag = createTag(testDb, user.id, { name: 'Green' });
    const day = createDay(testDb, trip.id);
    const winner = createPlace(testDb, trip.id, { name: 'Central Park', category_id: cat.id });
    testDb.prepare('INSERT INTO place_tags (place_id, tag_id) VALUES (?, ?)').run(winner.id, tag.id);
    createDayAssignment(testDb, day.id, winner.id);
    // A near-miss on every axis, to prove the AND actually excludes it.
    const other = createPlace(testDb, trip.id, { name: 'Central Park Annex', category_id: cat.id });
    testDb.prepare('INSERT INTO place_tags (place_id, tag_id) VALUES (?, ?)').run(other.id, tag.id);
    // `other` is left unassigned, so `assignment: 'assigned'` alone should exclude it.
    const rows = await places.listForTrip(String(trip.id), {
      searchPattern: '%Central Park%', category: String(cat.id), tag: String(tag.id), assignment: 'assigned',
    });
    expect(rows.map((r) => r.id)).toEqual([winner.id]);
  });
});
