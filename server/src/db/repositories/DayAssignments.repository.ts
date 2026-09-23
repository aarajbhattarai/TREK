import type { Platform } from '@mikro-orm/core';
import type { DayAssignments } from '../entities/DayAssignments.entity';
import { coalesce, columnIncrementedBy, columnRef } from '../dialect/sql-functions';
import { type AssertRowKeys } from './_shared/rows';
import { TrekRepository } from './_shared/trek-repository';

/**
 * The DY1/DY3/AS1/AS3 assignment-with-place projection row (Plan 3c Task 2's
 * report is the contract for Task 3, which consumes this unchanged):
 *
 * ```sql
 * SELECT da.*, p.id as place_id, p.name as place_name, p.description as place_description,
 *   p.lat, p.lng, p.address, p.category_id, p.price, p.currency as place_currency,
 *   COALESCE(da.assignment_time, p.place_time) as place_time,
 *   COALESCE(da.assignment_end_time, p.end_time) as end_time,
 *   p.duration_minutes, p.notes as place_notes,
 *   p.image_url, p.transport_mode, p.google_place_id, p.google_ftid, p.osm_id, p.amap_poi_id,
 *   p.website, p.phone, p.stop_type, p.fill_percent,
 *   c.name as category_name, c.color as category_color, c.icon as category_icon
 * FROM day_assignments da
 * JOIN places p ON da.place_id = p.id
 * LEFT JOIN categories c ON p.category_id = c.id
 * WHERE <da.id = ? | da.day_id = ? | da.day_id IN (...)>
 * [ORDER BY da.order_index ASC, da.created_at ASC]
 * ```
 *
 * `da.*` selects every scalar column of `DayAssignments` (`place_id` among
 * them, the physical FK column) and then `p.id as place_id` selects it again
 * under the same output key — the legacy statement did this too, and
 * better-sqlite3's row object keeps the LAST column with a given name, so
 * `place_id` on the wire is always `p.id`, not `da.place_id` (they agree by
 * the JOIN condition regardless). Nullability here is the physical column's,
 * not `AssignmentRow`'s (types.ts) narrower claims (rule 16) — a place with
 * no category genuinely nulls `category_name`/`category_color`/
 * `category_icon` through the LEFT JOIN even though `Categories.name` itself
 * is NOT NULL.
 */
export interface AssignmentWithPlaceRow {
  id: number;
  day_id: number;
  place_id: number;
  order_index: number | null;
  notes: string | null;
  reservation_status: string | null;
  reservation_notes: string | null;
  reservation_datetime: string | null;
  assignment_time: string | null;
  assignment_end_time: string | null;
  end_day: number;
  leg_transport_mode: string | null;
  incoming_leg_transport_mode: string | null;
  accommodation_id: number | null;
  created_at: string | null;
  place_name: string;
  place_description: string | null;
  lat: number | null;
  lng: number | null;
  address: string | null;
  category_id: number | null;
  price: number | null;
  place_currency: string | null;
  place_time: string | null;
  end_time: string | null;
  duration_minutes: number | null;
  place_notes: string | null;
  image_url: string | null;
  transport_mode: string | null;
  google_place_id: string | null;
  google_ftid: string | null;
  osm_id: string | null;
  amap_poi_id: string | null;
  website: string | null;
  phone: string | null;
  stop_type: string | null;
  fill_percent: number | null;
  category_name: string | null;
  category_color: string | null;
  category_icon: string | null;
}

/**
 * `day_assignments`'s shape as DY24's `em.getKysely()` call needs it (an
 * explicit `TDB` type argument, per `WebauthnChallengesRepository
 * .claimChallenge`'s docstring — entity-metadata inference is not what a
 * hand-written statement wants), narrowed to the columns `reanchorToDay`
 * reads or writes.
 */
interface DayAssignmentsKyselyDB {
  day_assignments: {
    id: number;
    day_id: number;
    order_index: number | null;
    accommodation_id: number | null;
  };
}

/**
 * A `day_assignments` row exactly as `AS12` (`AssignmentsService
 * .getAssignmentForTrip`) re-selects it — every scalar column of the entity
 * (`da.*`), scoped by a two-hop join to `days` for the trip check (Task 3).
 */
export interface DayAssignmentRow {
  id: number;
  day_id: number;
  place_id: number;
  order_index: number | null;
  notes: string | null;
  reservation_status: string | null;
  reservation_notes: string | null;
  reservation_datetime: string | null;
  created_at: string | null;
  assignment_time: string | null;
  assignment_end_time: string | null;
  leg_transport_mode: string | null;
  incoming_leg_transport_mode: string | null;
  end_day: number;
  accommodation_id: number | null;
}

const _dayAssignmentRowKeys: AssertRowKeys<DayAssignmentRow, DayAssignments> = true;

/** AS18's stop, exactly as `AssignmentsService.sortDayByTime`/`chronoOrder` read it. */
export interface DayStopRow {
  id: number;
  order_index: number | null;
  effective_time: string | null;
  located: number;
}

/**
 * `day_assignments`/`places`/`day_accommodations`'s shape for AS16
 * (`effectiveStart`) and AS18 (`listForTimeSort`), Kysely-typed the same way
 * `DayAssignmentsKyselyDB` is above. There is no MikroORM relation from
 * `DayAssignments` to `DayAccommodations` — `accommodation_id` is a plain
 * `p.integer()` column on this entity, not a `manyToOne` (`day_accommodations`
 * is Plan 3d's table; adding the relation means touching
 * `src/db/entities/DayAssignments.entity.ts`, out of this task's scope) — so
 * the QueryBuilder's relation-path `.join()` cannot express the LEFT JOIN at
 * all, not just the correlated-subquery shape DY24 hit. Kysely joining the
 * physical table name directly is the sanctioned next step down D3's
 * escape-hatch order (`find/findOne → nativeUpdate → qb() → em.getKysely()`).
 */
interface AssignmentTimeSortKyselyDB {
  day_assignments: {
    id: number;
    day_id: number;
    place_id: number;
    order_index: number | null;
    assignment_time: string | null;
    accommodation_id: number | null;
    created_at: string | null;
  };
  places: {
    id: number;
    place_time: string | null;
    lat: number | null;
    lng: number | null;
  };
  day_accommodations: {
    id: number;
    check_in: string | null;
  };
}

export class DayAssignmentsRepository extends TrekRepository<DayAssignments> {
  /** The DY1/DY3/AS1/AS3 projection's SELECT list, shared by all three query shapes below. */
  private assignmentWithPlaceSelect(platform: Platform) {
    return [
      'da.*',
      'p.id as place_id',
      'p.name as place_name',
      'p.description as place_description',
      'p.lat',
      'p.lng',
      'p.address',
      // `category_id` is `persist(false)` on `Places` — a bare `'p.category_id'`
      // string selects nothing (not a real property name), and `'p.category'`
      // (the owning relation) is ALSO the joined alias here (`c`), so MikroORM
      // absorbs the select into the join and returns `c__id`, not `category_id`
      // (`McpTokensRepository.listAllWithUsername`'s `t.user`/`user_id`
      // docstring is the same trap, one join away from this one). `columnRef`
      // selects the literal physical column, keyed `category_id`.
      columnRef(platform, 'p.category_id'),
      'p.price',
      'p.currency as place_currency',
      coalesce(platform, 'da.assignment_time', 'p.place_time').as('place_time'),
      coalesce(platform, 'da.assignment_end_time', 'p.end_time').as('end_time'),
      'p.duration_minutes',
      'p.notes as place_notes',
      'p.image_url',
      'p.transport_mode',
      'p.google_place_id',
      'p.google_ftid',
      'p.osm_id',
      'p.amap_poi_id',
      'p.website',
      'p.phone',
      'p.stop_type',
      'p.fill_percent',
      'c.name as category_name',
      'c.color as category_color',
      'c.icon as category_icon',
    ] as const;
  }

  /**
   * AS1 (`assignments.service.ts::getAssignmentWithPlace`, Task 3): the
   * projection filtered to one assignment, no ORDER BY (a single row).
   */
  async findWithPlaceAndCategory(id: number): Promise<AssignmentWithPlaceRow | null> {
    const platform = this.getEntityManager().getPlatform();
    const row = await this.qb('da')
      .join('da.place', 'p')
      .leftJoin('p.category', 'c')
      .select(this.assignmentWithPlaceSelect(platform))
      .where({ 'da.id': id })
      .execute<AssignmentWithPlaceRow | undefined>('get', false);
    return row ?? null;
  }

  /**
   * DY1 (`days.service.ts::getAssignmentsForDay`) and AS3
   * (`assignments.service.ts::listDayAssignments`, Task 3): the projection
   * for one day, `ORDER BY da.order_index ASC, da.created_at ASC`.
   */
  async listForDay(day_id: number): Promise<AssignmentWithPlaceRow[]> {
    const platform = this.getEntityManager().getPlatform();
    return await this.qb('da')
      .join('da.place', 'p')
      .leftJoin('p.category', 'c')
      .select(this.assignmentWithPlaceSelect(platform))
      .where({ 'da.day': day_id })
      .orderBy({ 'da.order_index': 'asc', 'da.created_at': 'asc' })
      .execute<AssignmentWithPlaceRow[]>('all', false);
  }

  /**
   * DY3 (`days.service.ts::list`): the same projection for several days at
   * once (`WHERE da.day_id IN (...)`), same ORDER BY. Empty-array
   * short-circuit before any query, as the legacy dynamic-`IN` builder did.
   */
  async listWithPlaceAndCategory(day_ids: number[]): Promise<AssignmentWithPlaceRow[]> {
    if (day_ids.length === 0) return [];
    const platform = this.getEntityManager().getPlatform();
    return await this.qb('da')
      .join('da.place', 'p')
      .leftJoin('p.category', 'c')
      .select(this.assignmentWithPlaceSelect(platform))
      .where({ 'da.day': { $in: day_ids } })
      .orderBy({ 'da.order_index': 'asc', 'da.created_at': 'asc' })
      .execute<AssignmentWithPlaceRow[]>('all', false);
  }

  /**
   * DY24 (`days.service.ts::resyncAccommodationDays`'s `moveStayStop`,
   * inventory §18.2) — a correlated scalar subquery in an UPDATE SET clause
   * the QueryBuilder cannot express:
   *
   * ```sql
   * UPDATE day_assignments
   * SET day_id = :dayId,
   *     order_index = COALESCE((SELECT MAX(order_index) FROM day_assignments WHERE day_id = :dayId), -1) + 1
   * WHERE accommodation_id = :accId
   * ```
   *
   * `this.kysely()` (`_shared/trek-repository.ts`), not
   * `this.getEntityManager().getKysely()` directly — see
   * `WebauthnChallengesRepository.claimChallenge`'s docstring for why.
   * Proven to join the caller's ambient `uow.transactional` block by
   * rollback, not by doc comment (ROLLBACK proof in the repository test and
   * the task report): a call inside a transaction that then throws leaves
   * the row un-moved; inside one that commits, the row is moved.
   */
  async reanchorToDay(accommodation_id: number, day_id: number): Promise<void> {
    await this.kysely<DayAssignmentsKyselyDB>()
      .updateTable('day_assignments')
      .set((eb) => ({
        day_id,
        order_index: eb(
          eb.fn.coalesce(
            eb
              .selectFrom('day_assignments as da2')
              .select((eb2) => eb2.fn.max('da2.order_index').as('m'))
              .where('da2.day_id', '=', day_id),
            eb.val(-1),
          ),
          '+',
          eb.val(1),
        ),
      }))
      .where('accommodation_id', '=', accommodation_id)
      .execute();
  }

  // ---------------------------------------------------------------------------
  // Plan 3c Task 3 (`AssignmentsService`) — appended after Task 2's own
  // methods above, per this task's file-ownership rule.
  // ---------------------------------------------------------------------------

  /**
   * AS9 (`assignmentExistsInDay`) — `SELECT da.id FROM day_assignments da
   * JOIN days d ON da.day_id = d.id WHERE da.id = ? AND da.day_id = ? AND
   * d.trip_id = ?`. Raw-bind (`number | string`, D4's T5 escape hatch,
   * `TripsRepository.findAccessible`'s precedent): the legacy guard binds
   * the route's raw params straight into the statement with no `Number()`/
   * `toRowId` conversion of its own, so this must accept and bind exactly
   * what it's handed, not coerce it first.
   */
  async existsInDay(id: number | string, day_id: number | string, trip_id: number | string): Promise<boolean> {
    const row = await this.qb('da')
      .join('da.day', 'd')
      .select(['da.id'])
      .where('da.id = ? AND da.day_id = ? AND d.trip_id = ?', [id, day_id, trip_id])
      .execute<{ id: number } | undefined>('get', false);
    return !!row;
  }

  /**
   * AS12 (`getAssignmentForTrip`) — `SELECT da.* FROM day_assignments da
   * JOIN days d ON da.day_id = d.id WHERE da.id = ? AND d.trip_id = ?`.
   * Same raw-bind seam as `existsInDay` above — every real caller
   * (`AssignmentOpsController`, `AssignmentsMcp`, `ItineraryRpc`) hands this
   * the route/tool id verbatim, and `ItineraryRpc.unassign` reads
   * `existing.day_id` off the result, so this is a genuine re-select, not
   * only an existence guard.
   */
  async findInTrip(id: number | string, trip_id: number | string): Promise<DayAssignmentRow | undefined> {
    const row = await this.qb('da')
      .join('da.day', 'd')
      .select(['da.*'])
      .where('da.id = ? AND d.trip_id = ?', [id, trip_id])
      .execute<DayAssignmentRow | undefined>('get', false);
    return row ?? undefined;
  }

  /**
   * AS6 (`createAssignment`'s append-position read) — `SELECT
   * MAX(order_index) as max FROM day_assignments WHERE day_id = ?`, read as
   * the highest row by an ordered `limit(1)` (`DaysRepository.maxDayNumber`'s
   * precedent — SQLite sorts `NULL` last under `DESC`, so an all-NULL or
   * empty table folds the same way `MAX()` ignoring every `NULL` does).
   * Returns the raw nullable value, NOT folded to `0`/`-1` here: the
   * service's explicit `maxOrder !== null ? maxOrder : -1` check (AS6's
   * ruling) needs to tell "no rows" from a stored `0` order_index, which a
   * `?? -1` fold would collapse identically — unlike `DaysRepository
   * .maxDayNumber`, this repository method must NOT pre-fold the null case.
   */
  async maxOrderIndex(day_id: number): Promise<number | null> {
    const row = await this.qb('da')
      .select('da.order_index')
      .where({ day: day_id })
      .orderBy({ order_index: 'desc' })
      .limit(1)
      .execute<{ order_index: number | null } | undefined>('get', false);
    return row?.order_index ?? null;
  }

  /**
   * AS7 — `UPDATE day_assignments SET order_index = order_index + 1 WHERE
   * day_id = ? AND order_index >= ?`, a column-from-column update
   * (`InviteTokensRepository.incrementUsedCount`'s `columnIncrementedBy`
   * precedent — `nativeUpdate`'s `EntityData` shape doesn't accept a raw
   * fragment value, so this goes through `qb().update()` instead).
   */
  async shiftOrderFrom(day_id: number, from: number): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.qb()
      .update({ order_index: columnIncrementedBy(platform, 'order_index', 1) })
      .where({ day: day_id, order_index: { $gte: from } })
      .execute('run');
  }

  /**
   * AS8 — `INSERT INTO day_assignments (day_id, place_id, order_index,
   * notes, accommodation_id) VALUES (?, ?, ?, ?, ?)`. The caller passes
   * already-decided values (the `notes || null`/`accommodationId ?? null`
   * coercions and the clamped `orderIndex` stay in the service, the same
   * split `DaysRepository.createDay`'s docstring describes) — `em.insert()`
   * returns the generated PK (R6's `lastInsertRowid` replacement).
   */
  async insertAssignment(input: {
    day_id: number;
    place_id: number;
    order_index: number;
    notes: string | null;
    accommodation_id: number | null;
  }): Promise<number> {
    return await this.insert({
      day: input.day_id,
      place: input.place_id,
      order_index: input.order_index,
      notes: input.notes,
      accommodation_id: input.accommodation_id,
    });
  }

  /** AS10 — `DELETE FROM day_assignments WHERE id = ?`. */
  async deleteById(id: number): Promise<void> {
    await this.nativeDelete({ id });
  }

  /**
   * AS11 (`reorderAssignments`, day-scoped: `UPDATE day_assignments SET
   * order_index = ? WHERE id = ? AND day_id = ?`) and AS19
   * (`sortDayByTime`'s per-row write, NOT day-scoped: `UPDATE
   * day_assignments SET order_index = ? WHERE id = ?`) — one method, both
   * signatures, per the inventory's ruling ("keep both signatures"):
   * `day_id` omitted (`undefined`) reproduces AS19's unscoped statement.
   */
  async setOrderIndex(id: number, day_id: number | undefined, order_index: number): Promise<void> {
    const where = day_id !== undefined ? { id, day: day_id } : { id };
    await this.nativeUpdate(where, { order_index });
  }

  /** AS13 (`moveAssignment`'s source-day read) — `SELECT day_id FROM day_assignments WHERE id = ?`. */
  async getDayId(id: number): Promise<number | undefined> {
    const platform = this.getEntityManager().getPlatform();
    // `day_id` is `persist(false)` (the physical FK mirror of the `day`
    // relation) — a bare `'da.day_id'` select hits the same trap
    // `assignmentWithPlaceSelect`'s `category_id` comment documents;
    // `columnRef` selects the literal physical column instead.
    const row = await this.qb('da')
      .select([columnRef(platform, 'da.day_id').as('day_id')])
      .where({ id })
      .execute<{ day_id: number } | undefined>('get', false);
    return row?.day_id;
  }

  /** AS14 — `UPDATE day_assignments SET day_id = ?, order_index = ? WHERE id = ?`. */
  async moveToDay(id: number, day_id: number, order_index: number): Promise<void> {
    await this.nativeUpdate({ id }, { day: day_id, order_index });
  }

  /**
   * AS16 (`updateTime`'s pre-write read) — `SELECT da.day_id,
   * COALESCE(da.assignment_time, p.place_time, acc.check_in) AS start FROM
   * day_assignments da JOIN places p ON da.place_id = p.id LEFT JOIN
   * day_accommodations acc ON acc.id = da.accommodation_id WHERE da.id = ?`.
   * Kysely (see `AssignmentTimeSortKyselyDB`'s docstring for why: no ORM
   * relation to `day_accommodations` exists to `.join()` through).
   */
  async effectiveStart(id: number): Promise<{ day_id: number; start: string | null } | undefined> {
    const row = await this.kysely<AssignmentTimeSortKyselyDB>()
      .selectFrom('day_assignments as da')
      .innerJoin('places as p', 'p.id', 'da.place_id')
      .leftJoin('day_accommodations as acc', 'acc.id', 'da.accommodation_id')
      .select((eb) => ['da.day_id as day_id', eb.fn.coalesce('da.assignment_time', 'p.place_time', 'acc.check_in').as('start')])
      .where('da.id', '=', id)
      .executeTakeFirst();
    return row as { day_id: number; start: string | null } | undefined;
  }

  /**
   * AS17 — `UPDATE day_assignments SET assignment_time = ?, assignment_end_time = ? WHERE id = ?`.
   * The falsy-clears-to-null coercion (`placeTime || null`) stays in the
   * service (AS17's ruling); this writes the already-decided values.
   */
  async setTimes(id: number, assignment_time: string | null, assignment_end_time: string | null): Promise<void> {
    await this.nativeUpdate({ id }, { assignment_time, assignment_end_time });
  }

  /**
   * AS18 (`sortDayByTime`'s day-wide read) — `SELECT da.id, da.order_index,
   * COALESCE(da.assignment_time, p.place_time, acc.check_in) as
   * effective_time, (p.lat IS NOT NULL AND p.lng IS NOT NULL) as located
   * FROM day_assignments da JOIN places p ON da.place_id = p.id LEFT JOIN
   * day_accommodations acc ON acc.id = da.accommodation_id WHERE da.day_id
   * = ? ORDER BY da.order_index ASC, da.created_at ASC, da.id ASC`. Same
   * Kysely escape hatch as `effectiveStart`. The computed boolean column is
   * expressed with the expression builder's own comparison/`.and()`
   * combinators — never the banned `sql` tag — and SQLite returns it as the
   * same `0`/`1` integer the legacy raw statement did.
   */
  async listForTimeSort(day_id: number): Promise<DayStopRow[]> {
    const rows = await this.kysely<AssignmentTimeSortKyselyDB>()
      .selectFrom('day_assignments as da')
      .innerJoin('places as p', 'p.id', 'da.place_id')
      .leftJoin('day_accommodations as acc', 'acc.id', 'da.accommodation_id')
      .select((eb) => [
        'da.id as id',
        'da.order_index as order_index',
        eb.fn.coalesce('da.assignment_time', 'p.place_time', 'acc.check_in').as('effective_time'),
        eb.and([eb('p.lat', 'is not', null), eb('p.lng', 'is not', null)]).as('located'),
      ])
      .where('da.day_id', '=', day_id)
      .orderBy('da.order_index', 'asc')
      .orderBy('da.created_at', 'asc')
      .orderBy('da.id', 'asc')
      .execute();
    return rows as unknown as DayStopRow[];
  }

  /** AS24 — `UPDATE day_assignments SET end_day = ? WHERE id = ?`. */
  async setEndDay(id: number, end_day: number): Promise<void> {
    await this.nativeUpdate({ id }, { end_day });
  }

  /** AS25 — `UPDATE day_assignments SET notes = ? WHERE id = ?`. */
  async setNotes(id: number, notes: string | null): Promise<void> {
    await this.nativeUpdate({ id }, { notes });
  }

  /** AS26 — `UPDATE day_assignments SET leg_transport_mode = ? WHERE id = ?`. */
  async setLegMode(id: number, mode: string | null): Promise<void> {
    await this.nativeUpdate({ id }, { leg_transport_mode: mode });
  }

  /** AS27 — `UPDATE day_assignments SET incoming_leg_transport_mode = ? WHERE id = ?`. */
  async setIncomingLegMode(id: number, mode: string | null): Promise<void> {
    await this.nativeUpdate({ id }, { incoming_leg_transport_mode: mode });
  }
}
