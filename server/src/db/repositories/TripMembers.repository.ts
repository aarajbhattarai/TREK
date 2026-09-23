import type { TripMembers } from '../entities/TripMembers.entity';
import { Trips } from '../entities/Trips.entity';
import { TrekRepository } from './_shared/trek-repository';

export class TripMembersRepository extends TrekRepository<TripMembers> {
  /**
   * The user ids a trip may refer to: its members plus the owner. Byte-for-byte
   * the legacy `DatabaseService.rosterUserIds`'s statement in intent —
   * `SELECT user_id FROM trip_members WHERE trip_id = ? UNION SELECT user_id
   * FROM trips WHERE id = ?` — as two reads merged through a `Set` (which
   * already dedupes, the same guarantee `UNION` gives) rather than one `UNION`
   * statement: the two `SELECT`s read different tables with no FK between
   * them, so a single-entity `QueryBuilder` (rooted on `TripMembers`) cannot
   * express the second half without losing rows on a trip that has no
   * members yet — an inner join from `trip_members` would produce zero rows
   * for exactly the case (an owner-only trip) the legacy statement's second
   * `SELECT` exists to cover. `trips` has no `TripMembersRepository` field to
   * reach it through, so this repository asks the `EntityManager` for
   * `TripsRepository` the same way `DatabaseService`/the guards resolve a
   * repository outside their own entity — one `EntityManager`, two
   * repositories, two independent reads.
   */
  async rosterUserIds(trip_id: number | string): Promise<Set<number>> {
    // Raw conditions (D4's T5 escape hatch), not `.where({ 'm.trip': trip_id })`:
    // MikroORM's typed filter rejects a `string` against the relation's
    // branded id type, and coercing to `Number(trip_id)` first would change
    // the raw-bind id-shape parity `TripsRepository`'s docstring describes.
    // `m.trip_id`/`t.id` are the physical column names.
    const members = await this.qb('m')
      .select(['m.user'])
      .where('m.trip_id = ?', [trip_id])
      .execute<{ user_id: number }[]>('all', false);

    const trips = this.getEntityManager().getRepository(Trips);
    const owner = await trips
      .qb('t')
      .select(['t.user'])
      .where('t.id = ?', [trip_id])
      .execute<{ user_id: number } | undefined>('get', false);

    const ids = new Set(members.map((m) => m.user_id));
    if (owner) ids.add(owner.user_id);
    return ids;
  }
}
