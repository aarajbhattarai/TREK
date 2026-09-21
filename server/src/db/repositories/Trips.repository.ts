import type { Trips } from '../entities/Trips.entity';
import { EntityRepository } from '@mikro-orm/sql';

/** What a trip-scoped request learns about the trip once access is verified. */
export interface TripAccess {
  id: number;
  user_id: number;
  currency: string | null;
}

export class TripsRepository extends EntityRepository<Trips> {
  /**
   * The trip if the user owns it or is a member of it, else undefined.
   *
   * Byte-for-byte the legacy `canAccessTrip` statement:
   *   SELECT t.id, t.user_id, t.currency FROM trips t
   *   LEFT JOIN trip_members m ON m.trip_id = t.id AND m.user_id = ?
   *   WHERE t.id = ? AND (t.user_id = ? OR m.user_id IS NOT NULL)
   */
  async findAccessible(trip_id: number, user_id: number): Promise<TripAccess | undefined> {
    const row = await this.qb('t')
      .select(['t.id', 't.user', 't.currency'])
      .leftJoin('t.trip_members_collection', 'm', { 'm.user': user_id })
      .where({ 't.id': trip_id })
      .andWhere({ $or: [{ 't.user': user_id }, { 'm.user': { $ne: null } }] })
      // `mapResults: false` leaves the driver's row alone: the keys are the
      // column names, which is why the result type is spelled out here rather
      // than inferred from the entity's properties.
      .execute<{ id: number; user_id: number; currency: string | null } | undefined>('get', false);
    if (!row) return undefined;
    return { id: row.id, user_id: row.user_id, currency: row.currency ?? null };
  }

  /** `SELECT id FROM trips WHERE id = ? AND user_id = ?` */
  async isOwner(trip_id: number, user_id: number): Promise<boolean> {
    return (await this.count({ id: trip_id, user: user_id })) > 0;
  }
}
