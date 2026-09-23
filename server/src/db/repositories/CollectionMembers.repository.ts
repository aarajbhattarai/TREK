import type { CollectionMembers } from '../entities/CollectionMembers.entity';
import { TrekRepository } from './_shared/trek-repository';

/** `buildMembers`'s owner row — `collections` joined to `users` (CL12). */
export interface CollectionOwnerMemberRow {
  user_id: number;
  username: string;
  email: string;
  avatar: string | null;
}

/** `buildMembers`'s accepted/pending member rows — `collection_members` joined to `users` (CL13). */
export interface CollectionMemberRow extends CollectionOwnerMemberRow {
  status: string;
  role: string;
}

interface CollectionOwnerKyselyDB {
  collections: { id: number; owner_id: number };
  users: { id: number; username: string; email: string; avatar: string | null };
}

interface CollectionMembersKyselyDB {
  collection_members: { collection_id: number; user_id: number; status: string; role: string };
  users: { id: number; username: string; email: string; avatar: string | null };
}

interface CollectionMemberUserIdsKyselyDB {
  collection_members: { collection_id: number; user_id: number; status: string };
}

/** `listCollections`'s incoming-invites read — a genuine statement missing
 *  its own CL number in the plan's inventory gather (jumped CL15 → CL16
 *  without capturing it): `SELECT cm.collection_id, c.name, u.id AS from_id,
 *  u.username AS from_username FROM collection_members cm JOIN collections c
 *  ON c.id=cm.collection_id JOIN users u ON u.id=c.owner_id WHERE
 *  cm.user_id=? AND cm.status='pending'`. */
export interface CollectionIncomingInviteRow {
  collection_id: number;
  name: string;
  from_id: number;
  from_username: string;
}

interface CollectionIncomingInvitesKyselyDB {
  collection_members: { collection_id: number; user_id: number; status: string };
  collections: { id: number; name: string; owner_id: number };
  users: { id: number; username: string };
}

/**
 * `collection_members` — Plan 3h Task 1's first cut (`roleOf`'s own member
 * lookup lives in `_shared/collection-role.ts` instead, R6). Task 2 extends
 * this repository with `sendInvite`/`acceptInvite`/etc.'s invite-lifecycle
 * methods (CL79-88) and the membership-lookup surface (CL69, `findMembership`).
 * Owns `buildMembers`'s two joined reads (CL12/CL13) and `deleteCollection`'s
 * snapshot-before-cascade reads (CL33/CL34).
 */
export class CollectionMembersRepository extends TrekRepository<CollectionMembers> {
  /** CL12 (`buildMembers`) — `SELECT u.id AS user_id, u.username, u.email, u.avatar FROM collections col JOIN users u ON u.id=col.owner_id WHERE col.id=?`. */
  async ownerRow(collectionId: number): Promise<CollectionOwnerMemberRow | undefined> {
    return await this.kysely<CollectionOwnerKyselyDB>()
      .selectFrom('collections as col')
      .innerJoin('users as u', 'u.id', 'col.owner_id')
      .select(['u.id as user_id', 'u.username', 'u.email', 'u.avatar'])
      .where('col.id', '=', collectionId)
      .executeTakeFirst();
  }

  /** CL13 (`buildMembers`) — `SELECT u.id AS user_id, u.username, u.email, u.avatar, cm.status, cm.role FROM collection_members cm JOIN users u ON u.id=cm.user_id WHERE cm.collection_id=? ORDER BY u.username`. */
  async memberRows(collectionId: number): Promise<CollectionMemberRow[]> {
    return await this.kysely<CollectionMembersKyselyDB>()
      .selectFrom('collection_members as cm')
      .innerJoin('users as u', 'u.id', 'cm.user_id')
      .select(['u.id as user_id', 'u.username', 'u.email', 'u.avatar', 'cm.status', 'cm.role'])
      .where('cm.collection_id', '=', collectionId)
      .orderBy('u.username')
      .execute();
  }

  /** CL33 (`deleteCollection`'s snapshot, taken BEFORE the cascading delete) — `SELECT user_id FROM collection_members WHERE collection_id=? AND status='accepted'`. Dup text also `collectionMemberIds`/`notifyCollectionUsers` (Task 2's own call sites). */
  async acceptedUserIds(collectionId: number): Promise<number[]> {
    const rows = await this.kysely<CollectionMemberUserIdsKyselyDB>()
      .selectFrom('collection_members')
      .select('user_id')
      .where('collection_id', '=', collectionId)
      .where('status', '=', 'accepted')
      .execute();
    return rows.map((r) => r.user_id);
  }

  /** CL34 (`deleteCollection`'s snapshot, taken BEFORE the cascading delete) — `SELECT user_id FROM collection_members WHERE collection_id=? AND status='pending'`. */
  async pendingUserIds(collectionId: number): Promise<number[]> {
    const rows = await this.kysely<CollectionMemberUserIdsKyselyDB>()
      .selectFrom('collection_members')
      .select('user_id')
      .where('collection_id', '=', collectionId)
      .where('status', '=', 'pending')
      .execute();
    return rows.map((r) => r.user_id);
  }

  /** `listCollections`'s incoming-invites read (see {@link CollectionIncomingInviteRow}'s docstring). */
  async pendingInvitesForUser(userId: number): Promise<CollectionIncomingInviteRow[]> {
    return await this.kysely<CollectionIncomingInvitesKyselyDB>()
      .selectFrom('collection_members as cm')
      .innerJoin('collections as c', 'c.id', 'cm.collection_id')
      .innerJoin('users as u', 'u.id', 'c.owner_id')
      .select(['cm.collection_id', 'c.name', 'u.id as from_id', 'u.username as from_username'])
      .where('cm.user_id', '=', userId)
      .where('cm.status', '=', 'pending')
      .execute();
  }
}
