import type { Trips } from '../entities/Trips.entity';
import { currentTimestamp } from '../dialect/sql-functions';
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

/**
 * `TRIP_SELECT`'s output row (inventory §11a) — every `TripRawRow` column
 * plus the four computed/joined columns the projection adds. `feed_token`
 * is always `null` here (SQL-side blanking via `NULL AS feed_token`/its
 * Kysely equivalent, never a JS strip) — see `TripsRepository
 * .tripSelectQuery`'s docstring.
 */
export interface TripSelectRow extends Omit<TripRawRow, 'feed_token'> {
  feed_token: null;
  day_count: number;
  place_count: number;
  is_owner: number;
  owner_username: string;
  shared_count: number;
}

/** The narrow `trips`/`users`/`days`/`places`/`trip_members` shape `tripSelectQuery` needs (`this.kysely()`'s typed `DB` argument). */
interface TripSelectKyselyDB {
  trips: {
    // `number | string`, not a bare `number`: the raw-bind seam (D4's T5
    // escape hatch) — `findForViewer`'s `WHERE t.id = ?` accepts the route's
    // unconverted id with no coercion, the same seam every QB-based method
    // in this file documents. Widening the TYPE (not spelling `sql\`...\``,
    // which `no-restricted-syntax` bans in `src/db/repositories/**`) is what
    // lets `.where('t.id', '=', trip_id)` accept a `string` here.
    id: number | string;
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
  };
  users: { id: number; username: string };
  trip_members: { id: number; trip_id: number; user_id: number };
  days: { id: number; trip_id: number };
  places: { id: number; trip_id: number };
}

// Task 7 review L4, absorbed here (Task 8 touches the same file): the 13
// hand-listed columns of `TripSelectKyselyDB['trips']` above are a second,
// independently-typed copy of `Trips`'s own scalar columns (Kysely's typed
// `DB` argument can't be derived from the entity metadata the way `qb()`'s
// generics are) — this fails `tsc` the moment a column is added to or
// removed from `Trips` without updating this interface to match, instead of
// silently drifting (the same drift guard `_tripRawRowKeys`/`_dayRowKeys`/…
// already give every hand-written row interface in this program).
const _tripSelectKyselyDbKeys: AssertRowKeys<TripSelectKyselyDB['trips'], Trips> = true;

/** TP21's output row (inventory §11c) — `relevance` is the computed sort key, never sent to the client (the controller destructures `{id, title, start_date, end_date}` only). */
export interface ActiveTripRow {
  id: number;
  title: string;
  start_date: string | null;
  end_date: string | null;
  relevance: number;
}

/** The narrow `trips`/`trip_members` shape `activeTrip` needs. */
interface ActiveTripKyselyDB {
  trips: { id: number; title: string; start_date: string | null; end_date: string | null; user_id: number; is_archived: number | null };
  trip_members: { id: number; trip_id: number; user_id: number };
}

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

  // ---------------------------------------------------------------------------
  // Plan 3c Task 7 (`TripsService`) — `TRIP_SELECT` (inventory §11a) becomes
  // ONE builder here (`tripSelectQuery`), expressed through `this.kysely()`
  // (a typed one-table-plus-joins DB interface, the same escape hatch
  // `DayAssignmentsRepository.reanchorToDay`/`DayAssignmentsRepository
  // .listForTimeSort` use): three correlated scalar `COUNT(*)` subqueries a
  // QueryBuilder select list cannot express, a `CASE WHEN` projected column,
  // and `NULL AS feed_token` placed AFTER `t.*` (via `.selectAll('t')` then
  // a later `.select()` of the literal) so the duplicate key wins in the row
  // object exactly the way the legacy statement's column order does — not by
  // hand-listing every `trips` column (§18.5: that loses the "blanked once,
  // survives a schema change" guarantee the legacy comment describes).
  // Verified directly with `.compile()` against a real in-memory DB before
  // wiring in (task report, TRIP_SELECT SQL captures) — a fully seeded trip
  // (owner, member, stranger; day/place counts; `feed_token` set in the DB)
  // produces `feed_token: null`, `is_owner`, `owner_username`, all four
  // counts, byte-identical in shape to a raw run of the legacy statement.
  // ---------------------------------------------------------------------------

  /**
   * `this.kysely()`'s typed `DB` argument for every `TRIP_SELECT`-shaped
   * query below — narrowed to the columns those queries read or join
   * through, per `WebauthnChallengesRepository.claimChallenge`'s docstring
   * (entity-metadata inference is not what a hand-written statement wants).
   */
  private tripSelectQuery(user_id: number) {
    return this.kysely<TripSelectKyselyDB>()
      .selectFrom('trips as t')
      .innerJoin('users as u', 'u.id', 't.user_id')
      .selectAll('t')
      .select((eb) => [
        eb.val<string | null>(null).as('feed_token'),
        eb.selectFrom('days as d').select((eb2) => eb2.fn.countAll<number>().as('c')).whereRef('d.trip_id', '=', 't.id').as('day_count'),
        eb.selectFrom('places as p').select((eb2) => eb2.fn.countAll<number>().as('c')).whereRef('p.trip_id', '=', 't.id').as('place_count'),
        eb.case().when('t.user_id', '=', user_id).then(1).else(0).end().as('is_owner'),
        'u.username as owner_username',
        eb.selectFrom('trip_members as tm').select((eb2) => eb2.fn.countAll<number>().as('c')).whereRef('tm.trip_id', '=', 't.id').as('shared_count'),
      ]);
  }

  /**
   * TP20 (`trips.service.ts::get`) — `TRIP_SELECT` scoped to one trip AND
   * the access predicate (`t.user_id = :userId OR m.user_id IS NOT NULL`),
   * i.e. "the trip if this viewer may see it, else nothing". Also serves
   * TP19 (`create`'s post-insert re-select) and TP29 (`updateTrip`'s
   * post-write re-select): both call sites are only ever reached after the
   * acting user has already passed an access check for this exact trip
   * (creator = owner; `updateTrip`'s callers all gate on `canAccessTrip`/
   * `requireTripEdit` first), so the access predicate here is always
   * trivially satisfied in those two contexts and the result is identical
   * to the legacy's unscoped `WHERE t.id = :tripId` re-select. Also serves
   * `TripMembersService.getTripForViewer` (TM1, Task 6 review's "for Task
   * 7" note) — same reasoning: every caller already holds access.
   *
   * Raw-bind (`number | string`, D4's T5 escape hatch — `TripSelectKyselyDB`'s
   * `trips.id` is typed `number | string` for exactly this): the legacy
   * statement bound the route's unconverted `tripId` with no `Number()`/
   * `toRowId` conversion, matching `findAccessible`'s documented seam.
   */
  async findForViewer(trip_id: number | string, user_id: number): Promise<TripSelectRow | undefined> {
    const row = await this.tripSelectQuery(user_id)
      .leftJoin('trip_members as m', (join) => join.onRef('m.trip_id', '=', 't.id').on('m.user_id', '=', user_id))
      .where('t.id', '=', trip_id)
      .where((eb) => eb.or([eb('t.user_id', '=', user_id), eb('m.user_id', 'is not', null)]))
      .executeTakeFirst();
    return row as TripSelectRow | undefined;
  }

  /**
   * TP16/TP17 (`trips.service.ts::list`) — `TRIP_SELECT` + the access join,
   * optionally filtered by `is_archived`, `ORDER BY t.created_at DESC`.
   * `archived === null` reproduces TP16 (no filter); any other value (0 or
   * 1, the controller's own coercion) reproduces TP17.
   */
  async listForUser(user_id: number, archived: number | null): Promise<TripSelectRow[]> {
    let query = this.tripSelectQuery(user_id)
      .leftJoin('trip_members as m', (join) => join.onRef('m.trip_id', '=', 't.id').on('m.user_id', '=', user_id))
      .where((eb) => eb.or([eb('t.user_id', '=', user_id), eb('m.user_id', 'is not', null)]));
    if (archived !== null) query = query.where('t.is_archived', '=', archived);
    const rows = await query.orderBy('t.created_at', 'desc').execute();
    return rows as TripSelectRow[];
  }

  /**
   * TP21 (`trips.service.ts::activeTrip`) — the triple `CASE WHEN …
   * relevance` projection and the double-`CASE WHEN` `ORDER BY` (one ASC,
   * one DESC). The legacy statement's `ORDER BY` items reference the
   * `relevance` SELECT-list alias (`CASE WHEN relevance < 2 …`, `CASE WHEN
   * relevance = 2 …`); reproduced here by recomputing the equivalent
   * boolean expression inline at each of the four sites (the `.select()`
   * and three `.orderBy()` calls below) rather than referencing the alias,
   * since Kysely's typed `ORDER BY` can't name a computed SELECT alias and
   * `sql`-tagged templates are banned in `src/db/repositories/**` — and a
   * shared private helper can't be typed across these four callbacks either
   * (`leftJoin`'s alias widens each callback's own `ExpressionBuilder`
   * table-set in a way a separate generic method signature can't match
   * structurally). Semantically identical to the legacy statement — SQLite
   * evaluates both forms to the same three-way ordering, verified directly
   * against `.compile()`/real rows before wiring in (task report,
   * TRIP_SELECT SQL captures): `running` = `relevance = 0`, `upcoming` =
   * `relevance = 1`, `running OR upcoming` = `relevance < 2`.
   */
  async activeTrip(user_id: number, today: string): Promise<ActiveTripRow | undefined> {
    const row = await this.kysely<ActiveTripKyselyDB>()
      .selectFrom('trips as t')
      .leftJoin('trip_members as m', (join) => join.onRef('m.trip_id', '=', 't.id').on('m.user_id', '=', user_id))
      .select(['t.id', 't.title', 't.start_date', 't.end_date'])
      .select((eb) => [
        eb.case()
          .when(eb.and([eb('t.start_date', 'is not', null), eb('t.end_date', 'is not', null), eb('t.start_date', '<=', today), eb('t.end_date', '>=', today)]))
          .then(0)
          .when(eb.and([eb('t.start_date', 'is not', null), eb('t.start_date', '>=', today)]))
          .then(1)
          .else(2)
          .end()
          .as('relevance'),
      ])
      .where((eb) => eb.or([eb('t.user_id', '=', user_id), eb('m.user_id', 'is not', null)]))
      .where('t.is_archived', '=', 0)
      .orderBy((eb) =>
        eb.case()
          .when(eb.and([eb('t.start_date', 'is not', null), eb('t.end_date', 'is not', null), eb('t.start_date', '<=', today), eb('t.end_date', '>=', today)]))
          .then(0)
          .when(eb.and([eb('t.start_date', 'is not', null), eb('t.start_date', '>=', today)]))
          .then(1)
          .else(2)
          .end(), 'asc')
      .orderBy((eb) =>
        eb.case()
          .when(eb.or([
            eb.and([eb('t.start_date', 'is not', null), eb('t.end_date', 'is not', null), eb('t.start_date', '<=', today), eb('t.end_date', '>=', today)]),
            eb.and([eb('t.start_date', 'is not', null), eb('t.start_date', '>=', today)]),
          ]))
          .then(eb.ref('t.start_date'))
          .end(), 'asc')
      .orderBy((eb) =>
        eb.case()
          .when(eb.not(eb.or([
            eb.and([eb('t.start_date', 'is not', null), eb('t.end_date', 'is not', null), eb('t.start_date', '<=', today), eb('t.end_date', '>=', today)]),
            eb.and([eb('t.start_date', 'is not', null), eb('t.start_date', '>=', today)]),
          ])))
          .then(eb.ref('t.start_date'))
          .end(), 'desc')
      .limit(1)
      .executeTakeFirst();
    return row as ActiveTripRow | undefined;
  }

  /**
   * TP18 (`trips.service.ts::create`'s INSERT) — the column set of the
   * legacy statement, written verbatim (the `||`/clamp defaults are the
   * service's own, decided before this call, per the program's D2 split).
   * Returns `em.insert()`'s PK (R6's `lastInsertRowid` replacement).
   */
  async insertTrip(input: {
    user_id: number;
    title: string;
    description: string | null;
    start_date: string | null;
    end_date: string | null;
    currency: string;
    reminder_days: number;
  }): Promise<number> {
    return await this.insert({
      user: input.user_id,
      title: input.title,
      description: input.description,
      start_date: input.start_date,
      end_date: input.end_date,
      currency: input.currency,
      reminder_days: input.reminder_days,
    });
  }

  // ---------------------------------------------------------------------------
  // Plan 3c Task 8 (`TripsService.copy`) — additive.
  // ---------------------------------------------------------------------------

  /**
   * TP37 (`trips.service.ts::copy`'s INSERT) — `INSERT INTO trips (user_id,
   * title, description, start_date, end_date, currency, cover_image,
   * is_archived, reminder_days) VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?)`. A
   * DIFFERENT column set from `insertTrip` (TP18, `create`'s own INSERT):
   * this one also writes `cover_image` (verbatim from the source row) and
   * `is_archived` as a hard-coded literal `0` — a copy is never archived,
   * regardless of the source's own flag, so `is_archived` takes no
   * parameter at all here, matching the legacy statement's own `0` literal
   * rather than a bound value. The `title || src.title` fallback and the
   * `reminder_days ?? 3` default are the SERVICE's own decisions (already
   * resolved before this call), same split as `insertTrip`.
   */
  async insertTripCopy(input: {
    user_id: number;
    title: string;
    description: string | null;
    start_date: string | null;
    end_date: string | null;
    currency: string | null;
    cover_image: string | null;
    reminder_days: number;
  }): Promise<number> {
    return await this.insert({
      user: input.user_id,
      title: input.title,
      description: input.description,
      start_date: input.start_date,
      end_date: input.end_date,
      currency: input.currency,
      cover_image: input.cover_image,
      is_archived: 0,
      reminder_days: input.reminder_days,
    });
  }

  /**
   * TP25 (`trips.service.ts::updateTrip`) — `UPDATE trips SET title=?,
   * description=?, start_date=?, end_date=?, currency=?, is_archived=?,
   * cover_image=?, reminder_days=?, updated_at=CURRENT_TIMESTAMP WHERE
   * id=?`. The `||`/`!== undefined` pre-image fallbacks are the SERVICE's
   * own (R5/§18.6 — this write stays OUTSIDE the days-regeneration
   * transaction, unchanged); this takes the final, already-decided values
   * and writes them verbatim, `updated_at` stamped unconditionally like the
   * legacy statement. Named `updateTripRow` (not `updateTrip`, the
   * deliverable list's own name) to keep it unambiguous next to
   * `TripsService.updateTrip`, which calls it.
   *
   * `is_archived: number | null` (Task 7 security review L1, absorbed here
   * — not `number`): the caller's own pre-image fallback
   * (`data.is_archived !== undefined ? … : trip.is_archived`) can legitimately
   * be `null` (a stored `NULL` the request never touched), and the legacy
   * statement bound that value through unfolded — a `number`-only signature
   * here would tempt a caller to paper over that with its own `?? 0`, the
   * exact regression the review found.
   */
  async updateTripRow(id: number, data: {
    title: string;
    description: string | null;
    start_date: string | null;
    end_date: string | null;
    currency: string;
    is_archived: number | null;
    cover_image: string | null;
    reminder_days: number;
  }): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate({ id }, { ...data, updated_at: currentTimestamp(platform) });
  }

  /** TP35 (`trips.service.ts::updateCoverImage`) — `UPDATE trips SET cover_image=?, updated_at=CURRENT_TIMESTAMP WHERE id=?`. */
  async setCoverImage(id: number, cover_image: string): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.nativeUpdate({ id }, { cover_image, updated_at: currentTimestamp(platform) });
  }

  /** TP34 (`trips.service.ts::remove`) — `DELETE FROM trips WHERE id = ?` (security-sensitive: cascades the whole trip). */
  async deleteById(id: number): Promise<void> {
    await this.nativeDelete({ id });
  }
}
