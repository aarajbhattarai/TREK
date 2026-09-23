import type { Trips } from '../entities/Trips.entity';
import { TrekRepository } from './_shared/trek-repository';

/** What a trip-scoped request learns about the trip once access is verified. */
export interface TripAccess {
  id: number;
  user_id: number;
  currency: string | null;
}

export class TripsRepository extends TrekRepository<Trips> {
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
    const row = await this.qb('t')
      .select(['t.id', 't.user', 't.currency'])
      .leftJoin('t.trip_members_collection', 'm', { 'm.user': user_id })
      // Raw condition (D4's T5 escape hatch), not `.where({ 't.id': trip_id })`:
      // MikroORM's typed filter rejects a `string` against `t.id`'s branded
      // `number` type, and coercing to `Number(trip_id)` first would be
      // exactly the parity break the class docstring above describes.
      // `t.id`/`t.user_id` are the physical column names (not translated
      // through the entity's `trip`/`user` property aliasing the way a typed
      // filter object is), so the raw text names them directly.
      .where('t.id = ?', [trip_id])
      .andWhere({ $or: [{ 't.user': user_id }, { 'm.user': { $ne: null } }] })
      // `mapResults: false` leaves the driver's row alone: the keys are the
      // column names, which is why the result type is spelled out here rather
      // than inferred from the entity's properties.
      .execute<{ id: number; user_id: number; currency: string | null } | undefined>('get', false);
    if (!row) return undefined;
    return { id: row.id, user_id: row.user_id, currency: row.currency ?? null };
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
}
