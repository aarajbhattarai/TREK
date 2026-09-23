import type { PackingCategoryAssignees } from '../entities/PackingCategoryAssignees.entity';
import { TrekRepository } from './_shared/trek-repository';

/** PK58/PK61's joined projection. */
export interface PackingCategoryAssigneeRow {
  category_name: string;
  user_id: number;
  username: string;
  avatar: string | null;
}

interface PackingCategoryAssigneesKyselyDB {
  packing_category_assignees: { id: number; trip_id: number; category_name: string; user_id: number };
  users: { id: number; username: string; display_name: string | null; avatar: string | null };
}

/**
 * `packing_category_assignees` — who is "on the hook" for a packing
 * category. A surrogate `id` PK plus a `(trip, category_name, user)`
 * unique index (§16), unlike `packing_item_contributors`'s genuine
 * composite PK — `upsertMany` with `onConflictAction: 'ignore'` on that
 * unique index is the `AssignmentParticipantsRepository.insertIgnore`
 * shape, not the composite-key `em.upsert` form
 * `PackingItemContributorsRepository` needs.
 */
export class PackingCategoryAssigneesRepository extends TrekRepository<PackingCategoryAssignees> {
  /**
   * PK58 (`getCategoryAssignees`) — `SELECT pca.category_name, pca.user_id,
   * COALESCE(u.display_name, u.username) AS username, u.avatar FROM
   * packing_category_assignees pca JOIN users u ON pca.user_id = u.id
   * WHERE pca.trip_id = ?`.
   */
  async listForTrip(trip_id: number | string): Promise<PackingCategoryAssigneeRow[]> {
    return await this.kysely<PackingCategoryAssigneesKyselyDB>()
      .selectFrom('packing_category_assignees as pca')
      .innerJoin('users as u', 'u.id', 'pca.user_id')
      .select(['pca.category_name', 'pca.user_id', (eb) => eb.fn.coalesce('u.display_name', 'u.username').as('username'), 'u.avatar'])
      .where('pca.trip_id', '=', trip_id as number)
      .execute();
  }

  /** PK59 (`updateCategoryAssignees`'s replace-all) — `DELETE FROM packing_category_assignees WHERE trip_id = ? AND category_name = ?`. */
  async deleteForCategory(trip_id: number | string, category_name: string): Promise<void> {
    await this.nativeDelete({ trip: trip_id as number, category_name });
  }

  /**
   * PK60 (`updateCategoryAssignees`) — `INSERT OR IGNORE INTO
   * packing_category_assignees (trip_id, category_name, user_id) VALUES
   * (?, ?, ?)`, the legacy `prepare(...).run(...)` loop. `upsertMany` with
   * `onConflictAction: 'ignore'` on the entity's real unique index
   * (`UNIQUE(trip_id, category_name, user_id)`,
   * `Migration20200101003700_create_packing_category_assignees.ts:9`),
   * named by entity property (`trip`/`user`, the
   * `AssignmentParticipantsRepository.insertIgnore` precedent). The caller
   * roster-scopes the ids before calling; the empty-array guard here is
   * defensive.
   */
  async insertIgnore(trip_id: number | string, category_name: string, user_ids: number[]): Promise<void> {
    if (user_ids.length === 0) return;
    await this.upsertMany(
      user_ids.map((user_id) => ({ trip: trip_id as number, category_name, user: user_id })),
      { onConflictFields: ['trip', 'category_name', 'user'], onConflictAction: 'ignore' },
    );
  }

  /** PK61 (`updateCategoryAssignees`'s post-write re-select) — `SELECT pca.user_id, COALESCE(u.display_name, u.username) AS username, u.avatar FROM packing_category_assignees pca JOIN users u ON pca.user_id = u.id WHERE pca.trip_id = ? AND pca.category_name = ?`. */
  async listForCategory(trip_id: number | string, category_name: string): Promise<Omit<PackingCategoryAssigneeRow, 'category_name'>[]> {
    return await this.kysely<PackingCategoryAssigneesKyselyDB>()
      .selectFrom('packing_category_assignees as pca')
      .innerJoin('users as u', 'u.id', 'pca.user_id')
      .select(['pca.user_id', (eb) => eb.fn.coalesce('u.display_name', 'u.username').as('username'), 'u.avatar'])
      .where('pca.trip_id', '=', trip_id as number)
      .where('pca.category_name', '=', category_name)
      .execute();
  }
}
