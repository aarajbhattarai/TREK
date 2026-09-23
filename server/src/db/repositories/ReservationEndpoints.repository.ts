import type { ReservationEndpoints } from '../entities/ReservationEndpoints.entity';
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
}
