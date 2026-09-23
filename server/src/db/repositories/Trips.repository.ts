import type { Trips } from '../entities/Trips.entity';
import type { AssertRowKeys } from './_shared/rows';
import { TrekRepository } from './_shared/trek-repository';

/** What a trip-scoped request learns about the trip once access is verified. */
export interface TripAccess {
  id: number;
  user_id: number;
  currency: string | null;
}

/**
 * `SELECT * FROM trips WHERE id = ?`, every scalar column — the row
 * `TripReadModelService.getTripSummary` (TR-B) and, once Task 7 lands,
 * `TripsService.getRaw` (TP22) both need, `feed_token` included: the
 * `withoutFeedToken()` JS strip that guards the credential stays in the
 * SERVICE (TR-B's ruling), so this repository method must hand the column
 * back intact for that strip to have something to delete.
 */
export interface TripRawRow {
  id: number;
  user_id: number;
  title: string;
  description: string | null;
  start_date: string | null;
  end_date: string | null;
  currency: string | null;
  cover_image: string | null;
  is_archived: number | null;
  reminder_days: number | null;
  feed_token: string | null;
  created_at: string | null;
  updated_at: string | null;
}

const _tripRawRowKeys: AssertRowKeys<TripRawRow, Trips> = true;

export class TripsRepository extends TrekRepository<Trips> {
  /**
   * The `LEFT JOIN trip_members m ON m.trip_id = t.id AND m.user_id = ?
   * WHERE (t.user_id = ? OR m.user_id IS NOT NULL)` half `findAccessible`
   * and `listAccessibleIds` (Plan 3c Task 1, TB3) share — one join builder,
   * per the task brief's ruling that the two must derive from the same
   * source rather than hand-keeping two copies in sync (the cross-plan note
   * in the inventory: TB3 and `TripsService.list`'s id half are "the same
   * query with different projections"). No explicit return-type annotation,
   * for the same inference reason `TrekRepository.kysely()` gives (the
   * QueryBuilder's fluent generic parameters do not survive being spelled
   * out via a separate type alias) — every caller chains `.select()`/
   * `.where()`/`.orderBy()` straight off this method's return value.
   */
  private accessibleTripsQuery(user_id: number) {
    return this.qb('t')
      .leftJoin('t.trip_members_collection', 'm', { 'm.user': user_id })
      .andWhere({ $or: [{ 't.user': user_id }, { 'm.user': { $ne: null } }] });
  }

  /**
   * The trip if the user owns it or is a member of it, else undefined.
   *
   * Byte-for-byte the legacy `canAccessTrip` statement:
   *   SELECT t.id, t.user_id, t.currency FROM trips t
   *   LEFT JOIN trip_members m ON m.trip_id = t.id AND m.user_id = ?
   *   WHERE t.id = ? AND (t.user_id = ? OR m.user_id IS NOT NULL)
   *
   * `trip_id: number | string` (Plan 3c Task 0b): the legacy free function
   * bound whatever `req.params.tripId` resolved to straight into the
   * statement with no `Number()`/`toRowId` conversion first — the raw-bind
   * seam. `TripAccessGuard` still does `Number(tripId)` before calling this
   * (unchanged), but `DatabaseService.canAccessTrip`/`isOwner` and every
   * other of the 41 in-cluster callers pass a `number | string` through
   * unconverted, so this method (and `isOwner` below) must accept and bind
   * that raw value rather than coerce it — a coercion here would silently
   * change the `'0x10'`/`'007'`-shaped id parity the boot matrix pins
   * (`Number('0x10') === 16`, a real trip id, where SQLite's own text/integer
   * affinity comparison of the unconverted string never matches one).
   */
  async findAccessible(trip_id: number | string, user_id: number): Promise<TripAccess | undefined> {
    const row = await this.accessibleTripsQuery(user_id)
      .select(['t.id', 't.user', 't.currency'])
      // Raw condition (D4's T5 escape hatch), not `.where({ 't.id': trip_id })`:
      // MikroORM's typed filter rejects a `string` against `t.id`'s branded
      // `number` type, and coercing to `Number(trip_id)` first would be
      // exactly the parity break the class docstring above describes.
      // `t.id`/`t.user_id` are the physical column names (not translated
      // through the entity's `trip`/`user` property aliasing the way a typed
      // filter object is), so the raw text names them directly.
      .andWhere('t.id = ?', [trip_id])
      // `mapResults: false` leaves the driver's row alone: the keys are the
      // column names, which is why the result type is spelled out here rather
      // than inferred from the entity's properties.
      .execute<{ id: number; user_id: number; currency: string | null } | undefined>('get', false);
    if (!row) return undefined;
    return { id: row.id, user_id: row.user_id, currency: row.currency ?? null };
  }

  /**
   * DY35 (`days.service.ts::insert`'s dated path) — `UPDATE trips SET
   * end_date = ? WHERE id = ?`: a dated insert extends the trip by one day.
   * Plan 3c Task 7 (`TripsService`) reuses this for its own `end_date`
   * writes rather than duplicating the statement.
   */
  async setEndDate(id: number, end_date: string | null): Promise<void> {
    await this.nativeUpdate({ id }, { end_date });
  }

  /** `SELECT id FROM trips WHERE id = ? AND user_id = ?` */
  async isOwner(trip_id: number | string, user_id: number): Promise<boolean> {
    const row = await this.qb('t')
      .select(['t.id'])
      .where('t.id = ?', [trip_id])
      .andWhere({ user: user_id })
      .execute<{ id: number } | undefined>('get', false);
    return !!row;
  }

  /**
   * `SELECT user_id FROM trips WHERE id = ?` (`trip-membership.service.ts:23`,
   * TB1) — `row ? row.user_id : null` stays the caller's decision to make
   * ("owner id for budget/MCP guards"); this returns exactly that shape.
   * Raw-bind (D4's T5 escape hatch), same `number | string` seam as
   * `findAccessible`/`isOwner` above.
   */
  async getOwnerId(trip_id: number | string): Promise<number | null> {
    const row = await this.qb('t')
      .select(['t.user'])
      .where('t.id = ?', [trip_id])
      .execute<{ user_id: number } | undefined>('get', false);
    return row ? row.user_id : null;
  }

  /**
   * `SELECT id, user_id FROM trips WHERE id = ?` (`trip-membership.service.ts:66`,
   * TB4) — `joinTripAsMember`'s first check-then-act read (§18.4: the
   * sequence stays non-transactional, unchanged by this conversion). The
   * only caller (`TripMembershipService.joinTripAsMember(tripId: number, …)`)
   * always passes a real `number`, so this takes one too — no raw-bind seam
   * to preserve here, unlike `findAccessible`/`isOwner`/`getOwnerId`.
   */
  async findIdAndOwner(trip_id: number): Promise<{ id: number; user_id: number } | undefined> {
    return this.qb('t')
      .select(['t.id', 't.user'])
      .where({ id: trip_id })
      .execute<{ id: number; user_id: number } | undefined>('get', false);
  }

  /**
   * `SELECT t.id FROM trips t LEFT JOIN trip_members m ON m.trip_id = t.id
   *  AND m.user_id = :userId WHERE (t.user_id = :userId OR m.user_id IS NOT NULL)
   *  ORDER BY t.created_at DESC` (`trip-membership.service.ts:40-46`, TB3) —
   * the id half of `TripsService.list(userId, null)`, sharing `findAccessible`'s
   * join builder per the task brief's ruling (this class's `accessibleTripsQuery`
   * above).
   */
  async listAccessibleIds(user_id: number): Promise<number[]> {
    const rows = await this.accessibleTripsQuery(user_id)
      .select(['t.id'])
      .orderBy({ 't.created_at': 'desc' })
      .execute<{ id: number }[]>('all', false);
    return rows.map((r) => r.id);
  }

  /**
   * `SELECT title FROM trips WHERE id = ?` (`trip-members.service.ts:156`,
   * TM7) — `addMember`'s notification-body read; the caller applies its own
   * `?? 'Untitled'` fallback (D4). Raw-bind (D4's T5 escape hatch), the same
   * `number | string` seam `findAccessible` documents.
   */
  async getTitle(trip_id: number | string): Promise<string | null> {
    const row = await this.qb('t')
      .select(['t.title'])
      .where('t.id = ?', [trip_id])
      .execute<{ title: string } | undefined>('get', false);
    return row?.title ?? null;
  }

  /**
   * `SELECT id, title, user_id FROM trips WHERE id = ?`
   * (`trip-members.service.ts:180`, TM9) — `transferOwnership`'s first
   * check-then-act read (miss → 404 `'Trip not found'`; wrong owner → 400
   * `'Only the owner can transfer ownership'`, both decided by the caller).
   * Raw-bind, the same seam as `getTitle` above.
   */
  async findIdTitleOwner(trip_id: number | string): Promise<{ id: number; title: string; user_id: number } | undefined> {
    return this.qb('t')
      .select(['t.id', 't.title', 't.user'])
      .where('t.id = ?', [trip_id])
      .execute<{ id: number; title: string; user_id: number } | undefined>('get', false);
  }

  /**
   * `UPDATE trips SET user_id = ? WHERE id = ?` (`trip-members.service.ts:196`,
   * TM13) — security-sensitive: the ownership handover itself, the first of
   * `transferOwnership`'s three transactional statements. `qb().update()`
   * rather than `nativeUpdate`: `nativeUpdate`'s typed `FilterQuery` rejects
   * a `string` against `id`'s branded `number` type the same way `find`'s
   * does, and `trip_id` here is still the route's unconverted string.
   */
  async setOwner(trip_id: number | string, user_id: number): Promise<void> {
    await this.qb('t')
      .update({ user: user_id })
      .where('t.id = ?', [trip_id])
      .execute('run');
  }

  /**
   * `SELECT * FROM trips WHERE id = ?` — `TripReadModelService.getTripSummary`'s
   * trip read (`trip-read-model.service.ts:52`, TR-B) and, once Task 7 lands,
   * `TripsService.getRaw` (TP22, `trips.service.ts:389`) — one method, two
   * sites, per the inventory's own note that they are the identical
   * statement. `feed_token` comes back intact; `withoutFeedToken()` stays a
   * JS strip in each CALLER (TR-B's ruling — this repository never blanks
   * it itself, unlike `TRIP_SELECT`'s `NULL AS feed_token` SQL-side trick).
   * `.select(['t.*'])` — MikroORM's QueryBuilder recognises the bare
   * `<alias>.*` marker (verified against `QueryBuilder.js`'s own
   * `prepareFields`, not assumed) and emits every column unprefixed, the
   * same `SELECT t.*` shape the legacy statement used. Raw-bind, the same
   * `number | string` seam `getTitle`/`findIdTitleOwner` above preserve.
   */
  async findRaw(trip_id: number | string): Promise<TripRawRow | null> {
    const row = await this.qb('t')
      .select(['t.*'])
      .where('t.id = ?', [trip_id])
      .execute<TripRawRow | undefined>('get', false);
    return row ?? null;
  }
}
