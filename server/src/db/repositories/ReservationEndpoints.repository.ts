import type { ReservationEndpoints } from '../entities/ReservationEndpoints.entity';
import { Reservations } from '../entities/Reservations.entity';
import { type AssertRowKeys } from './_shared/rows';
import { TrekRepository } from './_shared/trek-repository';

/** A `reservation_endpoints` row exactly as `r.*`/`SELECT *` read it (every scalar column). */
export interface ReservationEndpointRow {
  id: number;
  reservation_id: number;
  role: string;
  sequence: number;
  name: string;
  code: string | null;
  lat: number;
  lng: number;
  timezone: string | null;
  local_time: string | null;
  local_date: string | null;
  created_at: string | null;
}

const _reservationEndpointRowKeys: AssertRowKeys<ReservationEndpointRow, ReservationEndpoints> = true;

/**
 * TP58's `SELECT *` shape — every scalar column of `Reservations`. Declared
 * here, not on `Reservations.repository.ts` (which has its own, differently
 * named row type for the same shape, RS35's `ReservationAllColumnsRow`):
 * Task 4 owns that file for Plan 3d Task 6's tree window, so the
 * reservations-copy read/write (TP58/TP59) live on this repository instead
 * — see {@link ReservationEndpointsRepository.listAllForTrip}.
 */
export interface ReservationCopySourceRow {
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

const _reservationCopySourceRowKeys: AssertRowKeys<ReservationCopySourceRow, Reservations> = true;

/** Kysely typing for TP58 — this repository is templated on `ReservationEndpoints`, which has no relation to walk to `reservations`' own scalar columns, so the read goes through Kysely directly (program rule 23). */
interface ReservationsCopyKyselyDB {
  reservations: ReservationCopySourceRow;
}

export class ReservationEndpointsRepository extends TrekRepository<ReservationEndpoints> {
  /**
   * RS3 (`ReservationsService.loadEndpointsByTrip`) — `SELECT e.* FROM
   * reservation_endpoints e JOIN reservations r ON e.reservation_id = r.id
   * WHERE r.trip_id = ? ORDER BY e.reservation_id, e.sequence`. The
   * per-reservation grouping into a `Map` stays in the service (JS, not SQL).
   */
  async listForTrip(trip_id: number): Promise<ReservationEndpointRow[]> {
    return this.qb('e')
      .join('e.reservation', 'r')
      .select(['e.*'])
      .where({ 'r.trip': trip_id })
      .orderBy({ 'e.reservation': 'asc', 'e.sequence': 'asc' })
      .execute<ReservationEndpointRow[]>('all', false);
  }

  /**
   * RR2 (`ReservationsReadService.loadEndpoints`) — `SELECT * FROM
   * reservation_endpoints WHERE reservation_id = ? ORDER BY sequence`.
   */
  async listForReservation(reservation_id: number): Promise<ReservationEndpointRow[]> {
    return this.qb('e')
      .select(['e.*'])
      .where({ reservation: reservation_id })
      .orderBy({ sequence: 'asc' })
      .execute<ReservationEndpointRow[]>('all', false);
  }

  /** RS16 (`ReservationsService.saveEndpoints`'s replace-all) — `DELETE FROM reservation_endpoints WHERE reservation_id = ?`. */
  async deleteForReservation(reservation_id: number): Promise<void> {
    await this.nativeDelete({ reservation: reservation_id });
  }

  /**
   * RS17 — `INSERT INTO reservation_endpoints (reservation_id, role,
   * sequence, name, code, lat, lng, timezone, local_time, local_date) VALUES
   * (?×10)`, one row per call (the legacy `prepare` + per-row `run`). The
   * lat/lng-null skip and the `sequence ?? i` (index AFTER the filter) stay
   * in the service — this writes exactly the row it is handed.
   */
  async insertEndpoint(input: {
    reservation_id: number;
    role: string;
    sequence: number;
    name: string;
    code: string | null;
    lat: number;
    lng: number;
    timezone: string | null;
    local_time: string | null;
    local_date: string | null;
  }): Promise<number> {
    return await this.insert({
      reservation: input.reservation_id,
      role: input.role,
      sequence: input.sequence,
      name: input.name,
      code: input.code,
      lat: input.lat,
      lng: input.lng,
      timezone: input.timezone,
      local_time: input.local_time,
      local_date: input.local_date,
    });
  }

  /** DY17 (`DaysService.restampReservationDates`) — `SELECT id, local_date FROM reservation_endpoints WHERE reservation_id = ?`. */
  async listIdAndDate(reservation_id: number): Promise<{ id: number; local_date: string | null }[]> {
    return this.qb('e')
      .select(['e.id', 'e.local_date'])
      .where({ reservation: reservation_id })
      .execute<{ id: number; local_date: string | null }[]>('all', false);
  }

  /** DY18 — `UPDATE reservation_endpoints SET local_date = ? WHERE id = ?`. */
  async setLocalDate(id: number, local_date: string): Promise<void> {
    await this.nativeUpdate({ id }, { local_date });
  }

  // ---------------------------------------------------------------------------
  // Plan 3d Task 6 (`trips.service.ts::copy`) — additive. Endpoints/travelers/
  // day-positions are never copied with a reservation (R7, `copy` never
  // copied them — kept); these two methods reach the PARENT `reservations`
  // table only, for TP58/TP59, because Task 4 owns `Reservations
  // .repository.ts` for this same tree window ("a needed method in the
  // other's repository is requested via the report, not written").
  // ---------------------------------------------------------------------------

  /**
   * TP58 (`trips.service.ts::copy`'s reservations read) — `SELECT * FROM
   * reservations WHERE trip_id = ?`, no `ORDER BY` (matching the legacy
   * statement; the copy loop's own id-remap doesn't depend on read order).
   */
  async listAllForTrip(trip_id: number): Promise<ReservationCopySourceRow[]> {
    return await this.kysely<ReservationsCopyKyselyDB>()
      .selectFrom('reservations')
      .selectAll()
      .where('trip_id', '=', trip_id)
      .execute();
  }

  /**
   * TP59 (`trips.service.ts::copy`'s reservation INSERT) — `INSERT INTO
   * reservations (trip_id, day_id, end_day_id, place_id, assignment_id,
   * accommodation_id, title, reservation_time, reservation_end_time,
   * location, confirmation_number, notes, url, status, type, metadata,
   * day_plan_position, needs_review, ingest_state) VALUES (?×19)`. The
   * `external_*`/`sync_enabled`/`created_at` columns are deliberately
   * omitted (the legacy statement's own column list never named them — a
   * copy must not inherit the source's external sync identity).
   *
   * `this.getEntityManager().insert(Reservations, …)`, not `this.insert()`:
   * this repository is templated on `ReservationEndpoints`, so `this.insert`
   * would write THAT table. `getEntityManager()` is `TrekRepository`'s own
   * validated override (its class docstring), so this still fails closed
   * outside a request context/open transaction exactly like every other
   * write in this file — the escape hatch is safe, not a bypass.
   *
   * `accommodation_id` arrives ALREADY formatted as the legacy `'<id>.0'`
   * TEXT shape (`trips.service.ts`'s own `legacyAccommodationIdText`, the
   * program's Plan 3d Task 3 `"14.0"` finding): a plain JS number written
   * here would be inlined as a SQL literal (rule 22) and stored as `'14'`,
   * not the shape the legacy raw-bound statement produced.
   */
  async insertReservationCopy(input: {
    trip_id: number;
    day_id: number | null;
    end_day_id: number | null;
    place_id: number | null;
    assignment_id: number | null;
    accommodation_id: string | null;
    title: string;
    reservation_time: string | null;
    reservation_end_time: string | null;
    location: string | null;
    confirmation_number: string | null;
    notes: string | null;
    url: string | null;
    status: string | null;
    type: string | null;
    metadata: string | null;
    day_plan_position: number | null;
    needs_review: number;
    ingest_state: string;
  }): Promise<number> {
    return await this.getEntityManager().insert(Reservations, {
      trip: input.trip_id,
      day: input.day_id,
      endDay: input.end_day_id,
      place: input.place_id,
      assignment: input.assignment_id,
      accommodation_id: input.accommodation_id,
      title: input.title,
      reservation_time: input.reservation_time,
      reservation_end_time: input.reservation_end_time,
      location: input.location,
      confirmation_number: input.confirmation_number,
      notes: input.notes,
      url: input.url,
      status: input.status,
      type: input.type,
      metadata: input.metadata,
      day_plan_position: input.day_plan_position,
      needs_review: input.needs_review,
      ingest_state: input.ingest_state,
    });
  }
}
