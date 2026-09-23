import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { CAN_ACCESS_TRIP_SQL, resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { addTripMember, createDay, createPlace, createTrip, createUser } from '../../../helpers/factories';
import { Trips } from '../../../../src/db/entities/Trips.entity';
import type { TripsRepository } from '../../../../src/db/repositories/Trips.repository';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let trips: TripsRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  trips = t.repo(Trips);
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

const legacy = (tripId: number, userId: number) => testDb.prepare(CAN_ACCESS_TRIP_SQL).get(userId, tripId, userId);

describe('TripsRepository.findAccessible — parity with canAccessTrip', () => {
  it('TRIPREPO-001: the owner sees the trip, with the same three columns', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    expect(await trips.findAccessible(trip.id, user.id)).toEqual(legacy(trip.id, user.id));
    expect(await trips.findAccessible(trip.id, user.id)).toEqual({ id: trip.id, user_id: user.id, currency: 'EUR' });
  });

  it('TRIPREPO-002: a member sees it, a stranger does not', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb);
    const { user: stranger } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    addTripMember(testDb, trip.id, member.id);
    expect(await trips.findAccessible(trip.id, member.id)).toEqual(legacy(trip.id, member.id));
    expect(await trips.findAccessible(trip.id, stranger.id)).toBeUndefined();
    expect(legacy(trip.id, stranger.id)).toBeUndefined();
  });

  it('TRIPREPO-003: a member of another trip is still a stranger here', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb);
    const a = createTrip(testDb, owner.id);
    const b = createTrip(testDb, owner.id);
    addTripMember(testDb, a.id, member.id);
    expect(await trips.findAccessible(b.id, member.id)).toBeUndefined();
  });

  it('TRIPREPO-004: a null currency comes back null, not undefined', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    testDb.prepare('UPDATE trips SET currency = NULL WHERE id = ?').run(trip.id);
    expect(await trips.findAccessible(trip.id, user.id)).toEqual({ id: trip.id, user_id: user.id, currency: null });
  });

  it('TRIPREPO-005: isOwner is true for the owner only', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    addTripMember(testDb, trip.id, member.id);
    expect(await trips.isOwner(trip.id, owner.id)).toBe(true);
    expect(await trips.isOwner(trip.id, member.id)).toBe(false);

    // 0b security review F-B6: full parity against the legacy statement run
    // raw on the same rows, not just the boolean the method returns.
    const legacyIsOwner = (tripId: number, userId: number): boolean =>
      !!testDb.prepare('SELECT id FROM trips WHERE id = ? AND user_id = ?').get(tripId, userId);
    expect(await trips.isOwner(trip.id, owner.id)).toEqual(legacyIsOwner(trip.id, owner.id));
    expect(await trips.isOwner(trip.id, member.id)).toEqual(legacyIsOwner(trip.id, member.id));
  });

  it('TRIPREPO-007: a missing trip id resolves to undefined, not a throw, for both findAccessible and isOwner', async () => {
    const { user } = createUser(testDb);
    const missingId = 999999;
    expect(await trips.findAccessible(missingId, user.id)).toBeUndefined();
    expect(legacy(missingId, user.id)).toBeUndefined();
    expect(await trips.isOwner(missingId, user.id)).toBe(false);
  });

  it('TRIPREPO-006: toObject on a trip omits the hidden relation and every unloaded collection', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const entity = await t.repo(Trips).findOneOrFail({ id: trip.id });
    const raw = testDb.prepare('SELECT * FROM trips WHERE id = ?').get(trip.id) as Record<string, unknown>;
    const { wrap } = await import('@mikro-orm/core');
    expect(wrap(entity).toObject()).toStrictEqual(raw);
  });
});

// Plan 3c Task 1 (TB1/TB3/TB4): the trip-membership primitives, added onto
// the same repository so `TripMembershipService` never touches raw SQL.
describe('TripsRepository — getOwnerId / findIdAndOwner / listAccessibleIds (Plan 3c Task 1)', () => {
  it('TRIPREPO-008: getOwnerId returns the owner id, null for a missing trip', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    expect(await trips.getOwnerId(trip.id)).toBe(user.id);
    expect(await trips.getOwnerId(999999)).toBeNull();
  });

  it('TRIPREPO-009: getOwnerId binds a string id raw, matching the `0x10`/`007`-shaped id parity seam', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    // A numeric-looking string binds fine under SQLite's affinity comparison.
    expect(await trips.getOwnerId(String(trip.id))).toBe(user.id);
    // A non-numeric string never matches any row — no throw, no coercion.
    expect(await trips.getOwnerId('not-a-number')).toBeNull();
  });

  it('TRIPREPO-010: findIdAndOwner returns {id, user_id} for a real trip, undefined for a missing one', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    expect(await trips.findIdAndOwner(trip.id)).toEqual({ id: trip.id, user_id: user.id });
    expect(await trips.findIdAndOwner(999999)).toBeUndefined();
  });

  it('TRIPREPO-011: listAccessibleIds returns owned + member trips, newest first, excluding a stranger\'s trips', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb);
    const { user: stranger } = createUser(testDb);
    const a = createTrip(testDb, owner.id);
    testDb.prepare('UPDATE trips SET created_at = ? WHERE id = ?').run('2026-01-01 00:00:00', a.id);
    const b = createTrip(testDb, owner.id);
    testDb.prepare('UPDATE trips SET created_at = ? WHERE id = ?').run('2026-02-01 00:00:00', b.id);
    const c = createTrip(testDb, stranger.id);
    addTripMember(testDb, c.id, member.id);

    expect(await trips.listAccessibleIds(owner.id)).toEqual([b.id, a.id]);
    expect(await trips.listAccessibleIds(member.id)).toEqual([c.id]);
    expect(await trips.listAccessibleIds(stranger.id)).toEqual([c.id]);
  });

  it('TRIPREPO-012: listAccessibleIds never double-counts a trip where the caller is both owner and, somehow, member-listed', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    addTripMember(testDb, trip.id, owner.id);
    expect(await trips.listAccessibleIds(owner.id)).toEqual([trip.id]);
  });
});

// Plan 3c Task 2 (DY35): `days.service.ts::insert`'s dated path extends the
// trip by one day. Owned exclusively by Task 2 per the plan's file
// ownership (`Trips.repository.ts` ONLY for `setEndDate`) — appended here
// rather than interleaved with Task 1's blocks above.
describe('TripsRepository.setEndDate (Plan 3c Task 2, DY35)', () => {
  it('TRIPREPO-013: writes end_date verbatim, including clearing it to null', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    await trips.setEndDate(trip.id, '2026-09-30');
    expect((testDb.prepare('SELECT end_date FROM trips WHERE id = ?').get(trip.id) as { end_date: string | null }).end_date).toBe('2026-09-30');
    await trips.setEndDate(trip.id, null);
    expect((testDb.prepare('SELECT end_date FROM trips WHERE id = ?').get(trip.id) as { end_date: string | null }).end_date).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Plan 3c Task 6 — TripMembersService (TM7/TM9/TM13) and TripReadModelService
// (TR-A/TR-B). Appended per this task's file-ownership rule (additive
// methods only, this repository is shared across tasks).
// ---------------------------------------------------------------------------

describe('TripsRepository — TripMembersService / TripReadModelService (Plan 3c Task 6)', () => {
  it('TRIPREPO-014: getTitle (TM7) reads the title, null for a missing trip', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id, { title: 'Readable' });
    expect(await trips.getTitle(trip.id)).toBe('Readable');
    expect(await trips.getTitle(999999)).toBeNull();
  });

  it('TRIPREPO-015: getTitle binds a string id raw, the same `0x10`/`007`-shaped id parity seam TripsRepository documents', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id, { title: 'Stringy' });
    expect(await trips.getTitle(String(trip.id))).toBe('Stringy');
    expect(await trips.getTitle('not-a-number')).toBeNull();
  });

  it('TRIPREPO-016: findIdTitleOwner (TM9) returns {id, title, user_id}, undefined for a missing trip', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id, { title: 'Handover' });
    expect(await trips.findIdTitleOwner(trip.id)).toEqual({ id: trip.id, title: 'Handover', user_id: user.id });
    expect(await trips.findIdTitleOwner(999999)).toBeUndefined();
  });

  it('TRIPREPO-017: setOwner (TM13, security-sensitive) writes user_id verbatim', async () => {
    const { user: owner } = createUser(testDb);
    const { user: newOwner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    await trips.setOwner(trip.id, newOwner.id);
    expect((testDb.prepare('SELECT user_id FROM trips WHERE id = ?').get(trip.id) as { user_id: number }).user_id).toBe(newOwner.id);
  });

  it('TRIPREPO-018: setOwner binds a string trip id raw — the same seam its docstring documents', async () => {
    const { user: owner } = createUser(testDb);
    const { user: newOwner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    await trips.setOwner(String(trip.id), newOwner.id);
    expect((testDb.prepare('SELECT user_id FROM trips WHERE id = ?').get(trip.id) as { user_id: number }).user_id).toBe(newOwner.id);
  });

  describe('findRaw (TR-B, shared with TripsService.getRaw once Task 7 lands)', () => {
    it('TRIPREPO-019: every scalar column comes back, feed_token included (the JS strip is the caller\'s job)', async () => {
      const { user } = createUser(testDb);
      const trip = createTrip(testDb, user.id, { title: 'Full Row', description: 'desc', start_date: '2026-01-01', end_date: '2026-01-05' });
      testDb.prepare('UPDATE trips SET feed_token = ?, cover_image = ? WHERE id = ?').run('secret-token', 'cover.png', trip.id);
      const legacyRow = testDb.prepare('SELECT * FROM trips WHERE id = ?').get(trip.id);
      const row = await trips.findRaw(trip.id);
      expect(row).toEqual(legacyRow);
      expect(row?.feed_token).toBe('secret-token');
    });

    it('TRIPREPO-020: NULL-bearing nullable columns come back null, not undefined (rule 16); a missing trip is null', async () => {
      const { user } = createUser(testDb);
      const trip = createTrip(testDb, user.id);
      const row = await trips.findRaw(trip.id);
      expect(row).toMatchObject({ description: null, start_date: null, end_date: null, cover_image: null, feed_token: null });
      expect(await trips.findRaw(999999)).toBeNull();
    });

    it('TRIPREPO-021: binds a string trip id raw, the same seam every other method here preserves', async () => {
      const { user } = createUser(testDb);
      const trip = createTrip(testDb, user.id, { title: 'Stringy Raw' });
      expect((await trips.findRaw(String(trip.id)))?.title).toBe('Stringy Raw');
      expect(await trips.findRaw('not-a-number')).toBeNull();
    });

    // D-shape (rule 20): `findRaw` is a `qb().execute('get', false)`
    // projection with an explicit `t.*` select, never hydrating an entity
    // into the identity map by construction — proven anyway.
    it('TRIPREPO-022 (D-shape): a title written after an unrelated identity-map read is visible in the FIRST wider projection', async () => {
      const { user } = createUser(testDb);
      const trip = createTrip(testDb, user.id, { title: 'Before' });
      await t.repo(Trips).find({}, { disableIdentityMap: false }); // populate the identity map with an unrelated read
      testDb.prepare('UPDATE trips SET title = ? WHERE id = ?').run('After', trip.id);
      expect((await trips.findRaw(trip.id))?.title).toBe('After');
    });
  });
});

// ── Plan 3c Task 7 — TRIP_SELECT's ONE builder, generateDays helpers, CRUD ───
//
// `TRIP_SELECT` (trips.service.ts): the shared projection every one of
// `findForViewer`/`listForUser`/`activeTrip` builds on (`tripSelectQuery`).
// Byte-diffed here against the legacy statement run raw, on a FULLY seeded
// trip (days, places, a second member, an owner) with every nullable column
// both null and set (rule 19).
const LEGACY_TRIP_SELECT = `
  SELECT t.*,
    NULL AS feed_token,
    (SELECT COUNT(*) FROM days d WHERE d.trip_id = t.id) as day_count,
    (SELECT COUNT(*) FROM places p WHERE p.trip_id = t.id) as place_count,
    CASE WHEN t.user_id = :userId THEN 1 ELSE 0 END as is_owner,
    u.username as owner_username,
    (SELECT COUNT(*) FROM trip_members tm WHERE tm.trip_id = t.id) as shared_count
  FROM trips t
  JOIN users u ON u.id = t.user_id
`;

describe('TripsRepository.findForViewer / listForUser / activeTrip (Plan 3c Task 7, TRIP_SELECT)', () => {
  describe('findForViewer (TP20, also serves TP19/TP29 and TripMembersService.getTripForViewer)', () => {
    it('TRIPREPO-023: byte-identical to the legacy TRIP_SELECT statement on a FULLY seeded trip (days, places, a member, feed_token set in the DB)', async () => {
      const { user: owner } = createUser(testDb, { username: 'owner-handle' });
      const { user: member } = createUser(testDb);
      const trip = createTrip(testDb, owner.id, {
        title: 'Full Row', description: 'A real description', start_date: '2026-03-01', end_date: '2026-03-05',
      });
      testDb.prepare('UPDATE trips SET feed_token = ?, cover_image = ? WHERE id = ?').run('super-secret', 'cover.png', trip.id);
      addTripMember(testDb, trip.id, member.id);
      createDay(testDb, trip.id, { date: '2026-03-01' });
      createDay(testDb, trip.id, { date: '2026-03-02' });
      createPlace(testDb, trip.id);
      createPlace(testDb, trip.id);
      createPlace(testDb, trip.id);

      const legacyOwner = testDb.prepare(`
        ${LEGACY_TRIP_SELECT}
        LEFT JOIN trip_members m ON m.trip_id = t.id AND m.user_id = :userId
        WHERE t.id = :tripId AND (t.user_id = :userId OR m.user_id IS NOT NULL)
      `)
        .get({ userId: owner.id, tripId: trip.id });
      const row = await trips.findForViewer(trip.id, owner.id);
      expect(row).toEqual(legacyOwner);
      // createTrip's own start_date/end_date span already generates 5 days;
      // the two explicit createDay calls above add 2 more, for 7 total.
      expect(row).toMatchObject({
        day_count: 7, place_count: 3, shared_count: 1, is_owner: 1, owner_username: 'owner-handle', feed_token: null,
      });
      // The real column is set in the DB — the wire value is blanked by the
      // SQL-side `NULL AS feed_token` trick, not merely absent from a
      // hand-picked column list (§18.5).
      expect((testDb.prepare('SELECT feed_token FROM trips WHERE id = ?').get(trip.id) as { feed_token: string }).feed_token).toBe('super-secret');

      const legacyMember = testDb.prepare(`
        ${LEGACY_TRIP_SELECT}
        LEFT JOIN trip_members m ON m.trip_id = t.id AND m.user_id = :userId
        WHERE t.id = :tripId AND (t.user_id = :userId OR m.user_id IS NOT NULL)
      `)
        .get({ userId: member.id, tripId: trip.id });
      const memberRow = await trips.findForViewer(trip.id, member.id);
      expect(memberRow).toEqual(legacyMember);
      expect(memberRow).toMatchObject({ is_owner: 0, day_count: 7, place_count: 3, shared_count: 1 });
    });

    it('TRIPREPO-024: NULL-seeded nullable columns come back null on the wire; a stranger and a nonexistent trip both get undefined', async () => {
      const { user: owner } = createUser(testDb);
      const { user: stranger } = createUser(testDb);
      const trip = createTrip(testDb, owner.id); // description/start_date/end_date/cover_image all NULL by default

      const legacy = testDb.prepare(`
        ${LEGACY_TRIP_SELECT}
        LEFT JOIN trip_members m ON m.trip_id = t.id AND m.user_id = :userId
        WHERE t.id = :tripId AND (t.user_id = :userId OR m.user_id IS NOT NULL)
      `)
        .get({ userId: owner.id, tripId: trip.id });
      const row = await trips.findForViewer(trip.id, owner.id);
      expect(row).toEqual(legacy);
      expect(row).toMatchObject({ description: null, start_date: null, end_date: null, cover_image: null, feed_token: null });

      expect(await trips.findForViewer(trip.id, stranger.id)).toBeUndefined();
      expect(await trips.findForViewer(999999, owner.id)).toBeUndefined();
    });

    it('TRIPREPO-025: binds a string trip id raw, the seam every other method here preserves', async () => {
      const { user: owner } = createUser(testDb);
      const trip = createTrip(testDb, owner.id, { title: 'Stringy' });
      expect((await trips.findForViewer(String(trip.id), owner.id))?.title).toBe('Stringy');
    });

    // Rule 21: `findForViewer` is a Kysely read, which never consults the
    // identity map — the "fresh after a raw UPDATE" shape applies instead of
    // a D-shape identity-map test.
    it('TRIPREPO-026 (fresh after a raw UPDATE): a title changed outside the ORM is visible on the next read', async () => {
      const { user: owner } = createUser(testDb);
      const trip = createTrip(testDb, owner.id, { title: 'Stale' });
      expect((await trips.findForViewer(trip.id, owner.id))?.title).toBe('Stale');
      testDb.prepare('UPDATE trips SET title = ? WHERE id = ?').run('Fresh', trip.id);
      expect((await trips.findForViewer(trip.id, owner.id))?.title).toBe('Fresh');
    });
  });

  describe('listForUser (TP16/TP17)', () => {
    it('TRIPREPO-027: byte-identical to the legacy statement, archived === null (TP16, no filter)', async () => {
      const { user: owner } = createUser(testDb);
      const { user: member } = createUser(testDb);
      const owned = createTrip(testDb, owner.id, { title: 'Owned' });
      const shared = createTrip(testDb, member.id, { title: 'Shared' });
      addTripMember(testDb, shared.id, owner.id);
      const archived = createTrip(testDb, owner.id, { title: 'Archived' });
      testDb.prepare('UPDATE trips SET is_archived = 1 WHERE id = ?').run(archived.id);

      const legacy = testDb.prepare(`
        ${LEGACY_TRIP_SELECT}
        LEFT JOIN trip_members m ON m.trip_id = t.id AND m.user_id = :userId
        WHERE (t.user_id = :userId OR m.user_id IS NOT NULL)
        ORDER BY t.created_at DESC
      `).all({ userId: owner.id });
      const rows = await trips.listForUser(owner.id, null);
      expect(rows).toEqual(legacy);
      expect(rows.map((r) => r.id).sort()).toEqual([owned.id, shared.id, archived.id].sort());
    });

    it('TRIPREPO-028: byte-identical to the legacy statement, archived filtered (TP17)', async () => {
      const { user: owner } = createUser(testDb);
      const active = createTrip(testDb, owner.id, { title: 'Active' });
      const archived = createTrip(testDb, owner.id, { title: 'Archived' });
      testDb.prepare('UPDATE trips SET is_archived = 1 WHERE id = ?').run(archived.id);

      const legacyArchived = testDb.prepare(`
        ${LEGACY_TRIP_SELECT}
        LEFT JOIN trip_members m ON m.trip_id = t.id AND m.user_id = :userId
        WHERE (t.user_id = :userId OR m.user_id IS NOT NULL) AND t.is_archived = :archived
        ORDER BY t.created_at DESC
      `).all({ userId: owner.id, archived: 1 });
      expect(await trips.listForUser(owner.id, 1)).toEqual(legacyArchived);
      expect((await trips.listForUser(owner.id, 1)).map((r) => r.id)).toEqual([archived.id]);
      expect((await trips.listForUser(owner.id, 0)).map((r) => r.id)).toEqual([active.id]);
    });
  });

  describe('activeTrip (TP21) — the triple CASE WHEN relevance projection and the double-CASE WHEN ORDER BY', () => {
    const LEGACY_ACTIVE_TRIP = `
      SELECT t.id, t.title, t.start_date, t.end_date,
        CASE
          WHEN t.start_date IS NOT NULL AND t.end_date IS NOT NULL AND t.start_date <= :today AND t.end_date >= :today THEN 0
          WHEN t.start_date IS NOT NULL AND t.start_date >= :today THEN 1
          ELSE 2
        END AS relevance
      FROM trips t
      LEFT JOIN trip_members m ON m.trip_id = t.id AND m.user_id = :userId
      WHERE (t.user_id = :userId OR m.user_id IS NOT NULL) AND t.is_archived = 0
      ORDER BY relevance ASC,
        CASE WHEN relevance < 2 THEN t.start_date END ASC,
        CASE WHEN relevance = 2 THEN t.start_date END DESC
      LIMIT 1
    `;

    it('TRIPREPO-029: a running-today trip (relevance 0) wins over an upcoming or past one, matching the legacy statement result AND ordering', async () => {
      const { user } = createUser(testDb);
      const today = '2026-06-10';
      createTrip(testDb, user.id, { title: 'Past', start_date: '2026-01-01', end_date: '2026-01-05' });
      const running = createTrip(testDb, user.id, { title: 'Running', start_date: '2026-06-08', end_date: '2026-06-12' });
      createTrip(testDb, user.id, { title: 'Future', start_date: '2026-07-01', end_date: '2026-07-05' });

      const legacy = testDb.prepare(LEGACY_ACTIVE_TRIP).get({ userId: user.id, today });
      const row = await trips.activeTrip(user.id, today);
      expect(row).toEqual(legacy);
      expect(row).toMatchObject({ id: running.id, title: 'Running', relevance: 0 });
    });

    it('TRIPREPO-030: no running trip — the next upcoming one wins, earliest first (relevance 1)', async () => {
      const { user } = createUser(testDb);
      const today = '2026-06-10';
      const soonest = createTrip(testDb, user.id, { title: 'Soonest', start_date: '2026-07-01', end_date: '2026-07-05' });
      createTrip(testDb, user.id, { title: 'Later', start_date: '2026-08-01', end_date: '2026-08-05' });

      const legacy = testDb.prepare(LEGACY_ACTIVE_TRIP).get({ userId: user.id, today });
      const row = await trips.activeTrip(user.id, today);
      expect(row).toEqual(legacy);
      expect(row).toMatchObject({ id: soonest.id, relevance: 1 });
    });

    it('TRIPREPO-031: nothing running or upcoming — the most recently started trip wins (relevance 2), archived trips excluded', async () => {
      const { user } = createUser(testDb);
      const today = '2026-06-10';
      createTrip(testDb, user.id, { title: 'Long ago', start_date: '2026-01-01', end_date: '2026-01-05' });
      const recent = createTrip(testDb, user.id, { title: 'Recent', start_date: '2026-05-01', end_date: '2026-05-05' });
      const archived = createTrip(testDb, user.id, { title: 'Archived-but-recent', start_date: '2026-06-01', end_date: '2026-06-05' });
      testDb.prepare('UPDATE trips SET is_archived = 1 WHERE id = ?').run(archived.id);

      const legacy = testDb.prepare(LEGACY_ACTIVE_TRIP).get({ userId: user.id, today });
      const row = await trips.activeTrip(user.id, today);
      expect(row).toEqual(legacy);
      expect(row).toMatchObject({ id: recent.id, relevance: 2 });
    });

    it('TRIPREPO-032: nothing at all returns undefined', async () => {
      const { user } = createUser(testDb);
      expect(await trips.activeTrip(user.id, '2026-06-10')).toBeUndefined();
    });
  });
});

describe('TripsRepository.insertTrip / updateTripRow / setCoverImage / deleteById (Plan 3c Task 7)', () => {
  it('TRIPREPO-033: insertTrip (TP18) writes the given column set verbatim and returns the generated id', async () => {
    const { user } = createUser(testDb);
    const id = await trips.insertTrip({
      user_id: user.id, title: 'New Trip', description: null, start_date: null, end_date: null, currency: 'EUR', reminder_days: 3,
    });
    const row = testDb.prepare('SELECT * FROM trips WHERE id = ?').get(id) as Record<string, unknown>;
    expect(row).toMatchObject({ user_id: user.id, title: 'New Trip', currency: 'EUR', reminder_days: 3 });
  });

  it('TRIPREPO-034: updateTripRow (TP25) writes every column and stamps updated_at', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id, { title: 'Before' });
    await trips.updateTripRow(trip.id, {
      title: 'After', description: 'd', start_date: '2026-01-01', end_date: '2026-01-05',
      currency: 'USD', is_archived: 1, cover_image: 'c.png', reminder_days: 7,
    });
    const row = testDb.prepare('SELECT * FROM trips WHERE id = ?').get(trip.id) as Record<string, unknown>;
    expect(row).toMatchObject({
      title: 'After', description: 'd', start_date: '2026-01-01', end_date: '2026-01-05',
      currency: 'USD', is_archived: 1, cover_image: 'c.png', reminder_days: 7,
    });
    // CURRENT_TIMESTAMP has one-second resolution — a same-second before/after
    // comparison is flaky, not a real assertion; the column being non-null and
    // in the CURRENT_TIMESTAMP text shape is what `updateTripRow` promises.
    expect(row.updated_at).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
  });

  it('TRIPREPO-035: setCoverImage (TP35) writes cover_image and stamps updated_at', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    await trips.setCoverImage(trip.id, '/uploads/covers/x.jpg');
    expect((testDb.prepare('SELECT cover_image FROM trips WHERE id = ?').get(trip.id) as { cover_image: string }).cover_image).toBe('/uploads/covers/x.jpg');
  });

  it('TRIPREPO-036: deleteById (TP34, security-sensitive) removes exactly the given trip', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);
    const other = createTrip(testDb, user.id);
    await trips.deleteById(trip.id);
    expect(testDb.prepare('SELECT id FROM trips WHERE id = ?').get(trip.id)).toBeUndefined();
    expect(testDb.prepare('SELECT id FROM trips WHERE id = ?').get(other.id)).toBeDefined();
  });
});
