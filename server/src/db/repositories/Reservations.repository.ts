import type { Reservations } from '../entities/Reservations.entity';
import { DayAssignments } from '../entities/DayAssignments.entity';
import { Days } from '../entities/Days.entity';
import { columnRef, concatKysely, dayDistance, substringKysely } from '../dialect/sql-functions';
import { TrekRepository } from './_shared/trek-repository';

/**
 * RS18/RR1's shared joined projection — `SELECT r.*, d.day_number, p.name as
 * place_name, r.assignment_id, ap.place_id as accommodation_place_id,
 * acc_p.name as accommodation_name, ap.start_day_id as
 * accommodation_start_day_id, ap.end_day_id as accommodation_end_day_id FROM
 * reservations r LEFT JOIN days d ON r.day_id = d.id LEFT JOIN places p ON
 * r.place_id = p.id LEFT JOIN day_accommodations ap ON r.accommodation_id =
 * ap.id LEFT JOIN places acc_p ON ap.place_id = acc_p.id`. The service
 * folds `accommodation_id` (`Math.trunc(Number(x))`), `day_positions`,
 * `endpoints` and `travelers` on afterward (unchanged from the legacy split).
 */
export interface ReservationJoinRow {
  id: number;
  trip_id: number;
  day_id: number | null;
  end_day_id: number | null;
  place_id: number | null;
  assignment_id: number | null;
  title: string;
  accommodation_id: string | null;
  reservation_time: string | null;
  reservation_end_time: string | null;
  location: string | null;
  confirmation_number: string | null;
  notes: string | null;
  status: string | null;
  type: string | null;
  created_at: string | null;
  metadata: string | null;
  day_plan_position: number | null;
  needs_review: number;
  external_source: string | null;
  external_id: string | null;
  external_owner_user_id: number | null;
  external_synced_at: string | null;
  sync_enabled: number | null;
  external_hash: string | null;
  url: string | null;
  ingest_state: string;
  day_number: number | null;
  place_name: string | null;
  accommodation_place_id: number | null;
  accommodation_name: string | null;
  accommodation_start_day_id: number | null;
  accommodation_end_day_id: number | null;
}

/**
 * Kysely typing for the RS18/RR1 join (`joinedQuery` below) — `reservations
 * .accommodation_id` is a bare `p.text().nullable()` column with no FK to
 * `day_accommodations` (§18.1 of the inventory), so the QueryBuilder's
 * relation-path `.join()` cannot express `LEFT JOIN day_accommodations ap ON
 * r.accommodation_id = ap.id` at all — the same escape hatch
 * `DayAssignmentsRepository.effectiveStart`/`TripsRepository.tripSelectQuery`
 * use. `id`/`trip_id` stay `number | string` (raw-bind, D4's T5 seam): a
 * Kysely `.where(col, '=', value)` call is a TYPED condition regardless of
 * how loosely its value is typed (program rule 23 bans a raw SQL-text
 * condition string, not a loosely-typed bound value), so this join keeps the
 * legacy statement's exact raw-bind flexibility.
 */
interface ReservationJoinKyselyDB {
  reservations: {
    id: number | string;
    trip_id: number | string;
    day_id: number | null;
    end_day_id: number | null;
    place_id: number | null;
    assignment_id: number | null;
    title: string;
    accommodation_id: string | null;
    reservation_time: string | null;
    reservation_end_time: string | null;
    location: string | null;
    confirmation_number: string | null;
    notes: string | null;
    status: string | null;
    type: string | null;
    created_at: string | null;
    metadata: string | null;
    day_plan_position: number | null;
    needs_review: number;
    external_source: string | null;
    external_id: string | null;
    external_owner_user_id: number | null;
    external_synced_at: string | null;
    sync_enabled: number | null;
    external_hash: string | null;
    url: string | null;
    ingest_state: string;
  };
  days: { id: number; day_number: number };
  places: { id: number; name: string };
  day_accommodations: { id: number; place_id: number | null; start_day_id: number; end_day_id: number };
}

/**
 * Kysely typing for `restampLinkedReservation` (DY23). `accommodation_id:
 * string | number | null` — R2's ruling: the legacy statement binds `accId`
 * (a plain JS `number`, `stay.id`) straight into the `:accId` named param
 * compared against the TEXT column, so this method's caller passes the SAME
 * number, unconverted, and the interface is widened only so that bind
 * type-checks (SQLite applies its own TEXT-affinity conversion at compare
 * time regardless of which JS type bound the value — see the method's own
 * docstring).
 */
interface ReservationRestampKyselyDB {
  reservations: {
    id: number;
    accommodation_id: string | number | null;
    type: string | null;
    day_id: number | null;
    reservation_time: string | null;
  };
}

export class ReservationsRepository extends TrekRepository<Reservations> {
  private joinedQuery() {
    return this.kysely<ReservationJoinKyselyDB>()
      .selectFrom('reservations as r')
      .leftJoin('days as d', 'd.id', 'r.day_id')
      .leftJoin('places as p', 'p.id', 'r.place_id')
      .leftJoin('day_accommodations as ap', 'ap.id', 'r.accommodation_id')
      .leftJoin('places as acc_p', 'acc_p.id', 'ap.place_id')
      .selectAll('r')
      .select([
        'd.day_number as day_number',
        'p.name as place_name',
        'ap.place_id as accommodation_place_id',
        'acc_p.name as accommodation_name',
        'ap.start_day_id as accommodation_start_day_id',
        'ap.end_day_id as accommodation_end_day_id',
      ]);
  }

  /**
   * RS18 (`ReservationsService.list`) — the joined projection for a whole
   * trip, `ORDER BY r.reservation_time ASC, r.created_at ASC`.
   */
  async listForTrip(trip_id: number | string): Promise<ReservationJoinRow[]> {
    const rows = await this.joinedQuery()
      .where('r.trip_id', '=', trip_id)
      .orderBy('r.reservation_time', 'asc')
      .orderBy('r.created_at', 'asc')
      .execute();
    return rows as ReservationJoinRow[];
  }

  /**
   * RR1 (`ReservationsReadService.getReservationWithJoins`) — the SAME
   * projection for one reservation, no `ORDER BY` (a single row).
   */
  async findWithJoins(id: number | string): Promise<ReservationJoinRow | undefined> {
    const row = await this.joinedQuery().where('r.id', '=', id).executeTakeFirst();
    return row as ReservationJoinRow | undefined;
  }

  /**
   * RS35 (`ReservationsService.getReservation`) — `SELECT * FROM
   * reservations WHERE id = ? AND trip_id = ?`, the trip-scoping guard every
   * write path re-reads through. `id`/`trip_id: number` (rule 21 — the
   * SERVICE parses both ONCE via `toRowId` before calling this, and every
   * later write in the same method reuses that same parsed value, never a
   * second, independent conversion).
   */
  async findInTrip(id: number, trip_id: number): Promise<ReservationAllColumnsRow | undefined> {
    return this.qb('r')
      .select(['r.*'])
      .where({ id, trip: trip_id })
      .execute<ReservationAllColumnsRow | undefined>('get', false);
  }

  /** RS45 (`ReservationsService.remove`'s pre-image read) — `SELECT id, title, type, accommodation_id FROM reservations WHERE id = ? AND trip_id = ?`. */
  async findHeaderInTrip(id: number, trip_id: number): Promise<{ id: number; title: string; type: string | null; accommodation_id: string | null } | undefined> {
    return this.qb('r')
      .select(['r.id', 'r.title', 'r.type', 'r.accommodation_id'])
      .where({ id, trip: trip_id })
      .execute<{ id: number; title: string; type: string | null; accommodation_id: string | null } | undefined>('get', false);
  }

  /**
   * RS12 (`ReservationsService.resyncReservationDays`) — `SELECT id,
   * reservation_time, reservation_end_time, day_id, end_day_id FROM
   * reservations WHERE trip_id = ? AND (type != 'hotel' OR accommodation_id
   * IS NULL) AND reservation_time IS NOT NULL`.
   */
  async listResyncCandidates(trip_id: number): Promise<{
    id: number; reservation_time: string | null; reservation_end_time: string | null;
    day_id: number | null; end_day_id: number | null;
  }[]> {
    const platform = this.getEntityManager().getPlatform();
    return this.qb('r')
      .select(['r.id', 'r.reservation_time', 'r.reservation_end_time', columnRef(platform, 'r.day_id').as('day_id'), columnRef(platform, 'r.end_day_id').as('end_day_id')])
      .where({
        trip: trip_id,
        $or: [{ type: { $ne: 'hotel' } }, { accommodation_id: null }],
        reservation_time: { $ne: null },
      })
      .execute<{ id: number; reservation_time: string | null; reservation_end_time: string | null; day_id: number | null; end_day_id: number | null }[]>('all', false);
  }

  /** RS13 (`resyncReservationDays`'s per-row write) — `UPDATE reservations SET day_id = ?, end_day_id = ? WHERE id = ?`. */
  async setDays(id: number, day_id: number | null, end_day_id: number | null): Promise<void> {
    await this.nativeUpdate({ id }, { day: day_id, endDay: end_day_id });
  }

  /**
   * RS28 (`ReservationsService.createInTx`) — `INSERT INTO reservations
   * (trip_id, day_id, end_day_id, place_id, assignment_id, title,
   * reservation_time, reservation_end_time, location, confirmation_number,
   * notes, url, status, type, accommodation_id, metadata, needs_review)
   * VALUES (?×17)`. `sync_enabled`/`ingest_state`/`day_plan_position`
   * deliberately NOT named, so the column's own DB-level `DEFAULT` applies
   * (`sync_enabled INTEGER DEFAULT 1`, `Migration20200101021800_…`;
   * `ingest_state` `.default('live')`) — the caller has already resolved
   * every value (the `|| null` coercions, `resolvedOrNull`, the numeric
   * `accommodation_id` stringified for the TEXT column, R2).
   */
  async insertReservation(input: {
    trip_id: number;
    day_id: number | null;
    end_day_id: number | null;
    place_id: number | null;
    assignment_id: number | null;
    title: string;
    reservation_time: string | null;
    reservation_end_time: string | null;
    location: string | null;
    confirmation_number: string | null;
    notes: string | null;
    url: string | null;
    status: string;
    type: string;
    accommodation_id: string | null;
    metadata: string | null;
    needs_review: number;
  }): Promise<number> {
    return await this.insert({
      trip: input.trip_id,
      day: input.day_id,
      endDay: input.end_day_id,
      place: input.place_id,
      assignment: input.assignment_id,
      title: input.title,
      reservation_time: input.reservation_time,
      reservation_end_time: input.reservation_end_time,
      location: input.location,
      confirmation_number: input.confirmation_number,
      notes: input.notes,
      url: input.url,
      status: input.status,
      type: input.type,
      accommodation_id: input.accommodation_id,
      metadata: input.metadata,
      needs_review: input.needs_review,
    });
  }

  /**
   * RS41 (`ReservationsService.updateInTx`) — the 16-column `UPDATE
   * reservations SET … WHERE id = ?`. The `PlacesRepository.updatePlace`/PL11
   * precedent: the four legacy `COALESCE(?, col)` keep-if-null columns
   * (`title`, `status`, `type`, `needs_review`) are resolved to their FINAL
   * value by the SERVICE first (it already holds the pre-image via the
   * `current` parameter every caller passes), so this writes exactly what it
   * is handed — no SQL-side COALESCE. `id: number` (rule 21 — the SAME
   * `toRowId`-parsed value `findInTrip`'s gate read used).
   */
  async updateReservation(id: number, write: {
    title: string;
    reservation_time: string | null;
    reservation_end_time: string | null;
    location: string | null;
    confirmation_number: string | null;
    notes: string | null;
    url: string | null;
    day_id: number | null;
    end_day_id: number | null;
    place_id: number | null;
    assignment_id: number | null;
    status: string;
    type: string;
    accommodation_id: string | null;
    metadata: string | null;
    needs_review: number;
  }): Promise<void> {
    await this.nativeUpdate({ id }, {
      title: write.title,
      reservation_time: write.reservation_time,
      reservation_end_time: write.reservation_end_time,
      location: write.location,
      confirmation_number: write.confirmation_number,
      notes: write.notes,
      url: write.url,
      day: write.day_id,
      endDay: write.end_day_id,
      place: write.place_id,
      assignment: write.assignment_id,
      status: write.status,
      type: write.type,
      accommodation_id: write.accommodation_id,
      metadata: write.metadata,
      needs_review: write.needs_review,
    });
  }

  /**
   * RS33 (`updatePositions`'s legacy/global branch) — `UPDATE reservations
   * SET day_plan_position = ? WHERE id = ? AND trip_id = ?`. `position:
   * number | null`, never `undefined` (R8 — the SERVICE maps an absent
   * `day_plan_position` to `null` explicitly before calling, so
   * `nativeUpdate` always WRITES the column instead of silently skipping it).
   */
  async setDayPlanPosition(id: number, trip_id: number, position: number | null): Promise<void> {
    await this.nativeUpdate({ id, trip: trip_id }, { day_plan_position: position });
  }

  /** RS50 (`remove`) — `DELETE FROM reservations WHERE id = ?`, unscoped (the caller already proved trip access via `findHeaderInTrip`). */
  async deleteById(id: number): Promise<void> {
    await this.nativeDelete({ id });
  }

  /** DY14 (`DaysService.restampReservationDates`) — `SELECT id, day_id, end_day_id, reservation_time, reservation_end_time FROM reservations WHERE trip_id = ?`. */
  async listForRestamp(trip_id: number): Promise<{
    id: number; day_id: number | null; end_day_id: number | null;
    reservation_time: string | null; reservation_end_time: string | null;
  }[]> {
    const platform = this.getEntityManager().getPlatform();
    return this.qb('r')
      .select(['r.id', columnRef(platform, 'r.day_id').as('day_id'), columnRef(platform, 'r.end_day_id').as('end_day_id'), 'r.reservation_time', 'r.reservation_end_time'])
      .where({ trip: trip_id })
      .execute<{ id: number; day_id: number | null; end_day_id: number | null; reservation_time: string | null; reservation_end_time: string | null }[]>('all', false);
  }

  /** DY15 — `UPDATE reservations SET reservation_time = ? WHERE id = ?`. */
  async setReservationTime(id: number, reservation_time: string): Promise<void> {
    await this.nativeUpdate({ id }, { reservation_time });
  }

  /** DY16 — `UPDATE reservations SET reservation_end_time = ? WHERE id = ?`. */
  async setReservationEndTime(id: number, reservation_end_time: string): Promise<void> {
    await this.nativeUpdate({ id }, { reservation_end_time });
  }

  /**
   * DY23 (`DaysService.resyncAccommodationDays`) — the named-param `UPDATE
   * reservations SET day_id = :dayId, reservation_time = CASE WHEN
   * reservation_time IS NULL THEN :date ELSE :date || SUBSTR(reservation_time,
   * 11) END WHERE accommodation_id = :accId AND type = 'hotel'`. Kysely (the
   * `CASE WHEN … ELSE … || SUBSTR(...)` shape has no typed-filter
   * equivalent — the T6 tier per the inventory's own ruling), through
   * `concatKysely`/`substringKysely` (`sql-functions.ts`'s Kysely-expression
   * twins of `concat`/`substring` — the MikroORM `RawQueryFragment` forms
   * render as a literal `?` token inside a Kysely statement and throw at
   * execution, Task 0 review H1). `accommodation_id` (TEXT) compared against
   * `accId` (a bound NUMBER, exactly as the legacy statement bound it — R2,
   * never stringified here, so the SAME SQLite TEXT-affinity conversion the
   * legacy statement triggered still applies, including its own miss on a
   * `"14.0"`-shaped row — parity, not a fix).
   */
  async restampLinkedReservation(accommodation_id: number, day_id: number, date: string): Promise<void> {
    const platform = this.getEntityManager().getPlatform();
    await this.kysely<ReservationRestampKyselyDB>()
      .updateTable('reservations')
      .set((eb) => ({
        day_id,
        reservation_time: eb
          .case()
          .when('reservation_time', 'is', null)
          .then(eb.val(date))
          .else(concatKysely(platform, eb, { value: date }, { expression: substringKysely(platform, eb, 'reservation_time', 11) }))
          .end(),
      }))
      .where('accommodation_id', '=', accommodation_id)
      .where('type', '=', 'hotel')
      .execute();
  }

  /**
   * RS22's dispatch (`ReservationsService.referencesOutsideTrip`'s
   * `assignment_id` branch) — `SELECT d.trip_id FROM day_assignments da JOIN
   * days d ON da.day_id = d.id WHERE da.id = ?`. Reached through
   * `DayAssignmentsRepository`'s own relation join (`da.day` — the same
   * cross-repository-read shape `DaysRepository.isEmptyDay`/
   * `TripMembersRepository.rosterUserIds` already use for a table this
   * repository does not own), never a new method on that file
   * (`DayAssignmentsRepository`/`DaysRepository` are Task 1's
   * additive-method territory per the file-ownership split).
   */
  async getAssignmentTripId(assignment_id: number): Promise<number | undefined> {
    const platform = this.getEntityManager().getPlatform();
    const dayAssignments = this.getEntityManager().getRepository(DayAssignments);
    const row = await dayAssignments
      .qb('da')
      .join('da.day', 'd')
      .select([columnRef(platform, 'd.trip_id').as('trip_id')])
      .where({ id: assignment_id })
      .execute<{ trip_id: number } | undefined>('get', false);
    return row?.trip_id;
  }

  /**
   * RS11 (`resolveDayIdFromTime`'s nearest-day fallback) — `SELECT id FROM
   * days WHERE trip_id = ? ORDER BY ABS(JULIANDAY(date) - JULIANDAY(?)) ASC,
   * date ASC LIMIT 1`. `dayDistance`, through `DaysRepository`'s own QB (the
   * same cross-repository-read shape as `getAssignmentTripId` above —
   * `DaysRepository` stays Task 1's additive-method territory; no new
   * method is added there).
   */
  async findNearestDayId(trip_id: number, iso_date: string): Promise<number | undefined> {
    const platform = this.getEntityManager().getPlatform();
    const days = this.getEntityManager().getRepository(Days);
    const row = await days
      .qb('d')
      .select(['d.id'])
      .where({ trip: trip_id })
      .orderBy([{ [dayDistance(platform, 'd.date', iso_date)]: 'asc' }, { date: 'asc' }])
      .limit(1)
      .execute<{ id: number } | undefined>('get', false);
    return row?.id;
  }
}

/** `SELECT *` — every scalar column of `Reservations`, RS35's shape. */
export interface ReservationAllColumnsRow {
  id: number;
  trip_id: number;
  day_id: number | null;
  end_day_id: number | null;
  place_id: number | null;
  assignment_id: number | null;
  title: string;
  accommodation_id: string | null;
  reservation_time: string | null;
  reservation_end_time: string | null;
  location: string | null;
  confirmation_number: string | null;
  notes: string | null;
  status: string | null;
  type: string | null;
  created_at: string | null;
  metadata: string | null;
  day_plan_position: number | null;
  needs_review: number;
  external_source: string | null;
  external_id: string | null;
  external_owner_user_id: number | null;
  external_synced_at: string | null;
  sync_enabled: number | null;
  external_hash: string | null;
  url: string | null;
  ingest_state: string;
}
