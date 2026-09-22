import type { Tags } from '../entities/Tags.entity';
import { findOwnedByUser, listForOwner } from './_shared/owned-lookup';
import { toRow, type AssertRowKeys } from './_shared/rows';
import { EntityRepository } from '@mikro-orm/sql';

/** A `tags` row as the API emits it. */
export interface TagRow {
  id: number;
  user_id: number;
  name: string;
  color: string | null;
  created_at: string | null;
}

const _tagRowKeys: AssertRowKeys<TagRow, Tags> = true;

export class TagsRepository extends EntityRepository<Tags> {
  /**
   * `SELECT * FROM tags WHERE user_id = ? ORDER BY name ASC`, via the shared
   * `listForOwner` helper (`tags.user_id` is `NOT NULL`, a strictly-owned
   * entity — see `_shared/owned-lookup.ts`).
   */
  async listByUser(userId: number): Promise<TagRow[]> {
    const tags = await listForOwner<Tags, 'user', 'name'>(this, 'user', userId, 'name');
    return tags.map((tag) => toRow(tag) as TagRow);
  }

  /**
   * `SELECT * FROM tags WHERE id = ? AND user_id = ?`, via the shared
   * `findOwnedByUser` helper — an ownership check (RPC/MCP writes re-verify
   * with this before mutating), not a re-select following this repository's
   * own write (`createTag`/`patch` refresh/return their own entity
   * directly).
   *
   * `refresh: true` (Task 0 review, I1 — the ruling every Plan 3 repository
   * follows for a PK-scoped read). For this unrestricted (no `fields`
   * option) findOne, MikroORM already re-queries and merges fresh data on
   * every call regardless of `refresh` — its identity-map-skip optimisation
   * only engages together with a `fields` restriction (the case
   * `AppSettingsRepository.getValue` actually needed it for). `refresh`
   * stays on this read to match the blanket ruling and to stay correct if a
   * future caller adds `fields` here. `findOwnedByUser`'s optional `options`
   * parameter (added here, not duplicated — Task 0's helper had no reads
   * that needed it yet) passes straight through to the underlying
   * `findOne`.
   */
  async findByIdAndUser(id: number, userId: number): Promise<TagRow | null> {
    const tag = await findOwnedByUser<Tags, 'user'>(this, id, 'user', userId, { refresh: true });
    return tag ? (toRow(tag) as TagRow) : null;
  }

  /**
   * The column set of the legacy INSERT:
   * `INSERT INTO tags (user_id, name, color) VALUES (?, ?, ?)`. The
   * `#10b981` defaulting stays in `TagsService` (D4's defaults rule) — this
   * writes exactly what it is given.
   *
   * Named `createTag`, not `create`: `EntityRepository#create` is a
   * synchronous, non-persisting factory with an incompatible signature —
   * shadowing it would fail to compile, the same collision Task 1 hit
   * naming a method `insert`.
   *
   * Followed by `em.refresh` before `toRow` (D4's create rule), same as
   * `CategoriesRepository.createCategory`.
   */
  async createTag(input: { user_id: number; name: string; color: string }): Promise<TagRow> {
    const tag = this.create({
      user: input.user_id,
      name: input.name,
      color: input.color,
    });
    await this.getEntityManager().persist(tag).flush();
    await this.getEntityManager().refresh(tag);
    return toRow(tag) as TagRow;
  }

  /**
   * `UPDATE tags SET name = COALESCE(?, name), color = COALESCE(?, color)
   * WHERE id = ?`, re-selected — no `user_id` filter, matching the legacy
   * statement exactly. `assign` only touches the keys present on `changes`
   * (the entity-API equivalent of `COALESCE` against a bind parameter), so
   * `TagsService` omits a field entirely, rather than passing it as
   * `undefined`, to leave it untouched — reproducing the legacy `|| null`
   * coalesce-away-empty-string behaviour. Returns `null` when no row matches
   * `id`, mirroring the legacy re-select's `undefined`.
   *
   * No re-`findOne`/`refresh` after `flush`, same reasoning as
   * `CategoriesRepository.patch`: `assign` already mutated the managed
   * entity in place, and no column here is DB-computed on UPDATE.
   */
  async patch(id: number, changes: { name?: string; color?: string }): Promise<TagRow | null> {
    const tag = await this.findOne({ id });
    if (!tag) return null;
    this.assign(tag, changes);
    await this.getEntityManager().flush();
    return toRow(tag) as TagRow;
  }

  /** `DELETE FROM tags WHERE id = ?`. Returns the affected row count. */
  async remove(id: number): Promise<number> {
    return this.nativeDelete({ id });
  }

  // `loadForPlaces` (a batch `findByPlaceIds`-style tag loader) is reserved
  // here for Plan 3c, which moves QueryHelpersService's tag batch loader
  // (`query-helpers.service.ts:42`, `SELECT t.*, pt.place_id FROM tags t …`)
  // onto TagsRepository (spec D4). Not implemented in Plan 3a Task 3 — no
  // throwing stub, just this reservation, so `nest/places`'s later migration
  // doesn't duplicate the method name.
}
