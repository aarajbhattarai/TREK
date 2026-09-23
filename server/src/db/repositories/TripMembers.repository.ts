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

  /**
   * `SELECT user_id FROM trip_members WHERE trip_id = ? ORDER BY added_at ASC`
   * (`trip-membership.service.ts:29-31`, TB2) — the owner is excluded by
   * construction (the table has no row for the owner), matching the legacy
   * statement exactly. Raw-bind (D4's T5 escape hatch), the same
   * `number | string` seam `TripsRepository.findAccessible` documents.
   */
  async listUserIdsByTrip(trip_id: number | string): Promise<number[]> {
    const rows = await this.qb('m')
      .select(['m.user'])
      .where('m.trip_id = ?', [trip_id])
      .orderBy({ 'm.added_at': 'asc' })
      .execute<{ user_id: number }[]>('all', false);
    return rows.map((r) => r.user_id);
  }

  /**
   * `SELECT id FROM trip_members WHERE trip_id = ? AND user_id = ?`
   * (`trip-membership.service.ts:70`, TB5) — `joinTripAsMember`'s
   * already-a-member check, the second leg of the non-transactional
   * check-then-act sequence (§18.4: unchanged by this conversion). Both
   * callers (`TripMembershipService.joinTripAsMember`) always pass real
   * `number`s, so no raw-bind seam here.
   */
  async exists(trip_id: number, user_id: number): Promise<boolean> {
    const row = await this.qb('m')
      .select(['m.id'])
      .where({ trip: trip_id, user: user_id })
      .execute<{ id: number } | undefined>('get', false);
    return !!row;
  }

  /**
   * `INSERT INTO trip_members (trip_id, user_id, invited_by) VALUES (?, ?, ?)`
   * (`trip-membership.service.ts:72`, TB6) — the third leg of the same
   * non-transactional sequence as `exists` above; `invitedBy` may be `null`.
   */
  async addMember(trip_id: number, user_id: number, invitedBy: number | null): Promise<void> {
    await this.insert({ trip: trip_id, user: user_id, invited_by: invitedBy });
  }
}
