import type { Categories } from '../entities/Categories.entity';
import { toRow, type AssertRowKeys } from './_shared/rows';
import { EntityRepository } from '@mikro-orm/sql';

/** A `categories` row as the API emits it. */
export interface CategoryRow {
  id: number;
  name: string;
  color: string | null;
  icon: string | null;
  user_id: number | null;
  created_at: string | null;
}

const _categoryRowKeys: AssertRowKeys<CategoryRow, Categories> = true;

export class CategoriesRepository extends EntityRepository<Categories> {
  /** `SELECT * FROM categories ORDER BY name ASC` */
  async list(): Promise<CategoryRow[]> {
    const categories = await this.find({}, { orderBy: { name: 'asc' }, disableIdentityMap: true });
    return categories.map((category) => toRow(category) as CategoryRow);
  }

  /**
   * `SELECT * FROM categories WHERE id = ?` — no owner filter. `user_id`
   * being nullable makes a row *look* ownable, but this legacy statement
   * never scoped by it: any id answers regardless of who created the row.
   * Plain PK `findOne`, not `findOwnedOrGlobal` — that helper had no caller
   * across categories or tags (neither site actually filters "owner or
   * global") and was deleted rather than kept as dead code (Task 0
   * re-review, R6; see `_shared/owned-lookup.ts`'s docstring).
   *
   * `disableIdentityMap: true` (Plan 3b Task 1 fix round, supersedes Plan
   * 3a's I1 "`refresh: true` on every PK-only `findOne`" — see
   * `Users.repository.ts`'s class-level docstring and
   * `.superpowers/sdd/2026-09-22-orm-phase3b/task-1-review.md` B1): this is
   * a "rows out" read, converted via `toRow` and discarded — the entity is
   * loaded in a throwaway forked context and never lands in the request's
   * identity map, so a raw write to this row earlier in the same request is
   * always seen, and there is nothing here for a later `flush()` to find
   * dirty.
   */
  async findById(id: number): Promise<CategoryRow | null> {
    const category = await this.findOne({ id }, { disableIdentityMap: true });
    return category ? (toRow(category) as CategoryRow) : null;
  }

  /**
   * The column set of the legacy INSERT:
   * `INSERT INTO categories (name, color, icon, user_id) VALUES (?, ?, ?, ?)`.
   * The `#6366f1`/`📍` defaulting stays in `CategoriesService` (D4's defaults
   * rule) — this writes exactly what it is given.
   *
   * Named `createCategory`, not `create`: `EntityRepository#create` is a
   * synchronous, non-persisting factory with an incompatible signature —
   * shadowing it would fail to compile, the same collision Task 1 hit
   * naming a method `insert`.
   *
   * Followed by `em.refresh` before `toRow` (D4's create rule): the insert's
   * `RETURNING` clause already carries the generated `id` and the
   * `defaultRaw` `created_at`, but calling `refresh` documents the
   * one-extra-SELECT parity with the legacy statement pair (INSERT, then a
   * re-select by id) rather than leaning on driver-specific RETURNING
   * behaviour.
   */
  async createCategory(input: { name: string; color: string; icon: string; user_id: number }): Promise<CategoryRow> {
    const category = this.create({
      name: input.name,
      color: input.color,
      icon: input.icon,
      user: input.user_id,
    });
    await this.getEntityManager().persist(category).flush();
    await this.getEntityManager().refresh(category);
    return toRow(category) as CategoryRow;
  }

  /**
   * `UPDATE categories SET name = COALESCE(?, name), color = COALESCE(?,
   * color), icon = COALESCE(?, icon) WHERE id = ?`, re-selected. `assign`
   * only touches the keys present on `changes` — the entity-API equivalent
   * of `COALESCE` against a bind parameter — so the caller must omit a field
   * entirely (not pass it as `undefined`) to leave it untouched, which is
   * how `CategoriesService` reproduces the legacy `|| null`
   * coalesce-away-empty-string behaviour. Returns `null` when no row matches
   * `id`, mirroring the legacy re-select's `undefined`.
   *
   * The lookup `findOne({ id }, { refresh: true })` is PK-only, so without
   * `refresh: true` MikroORM would answer it from the identity map instead
   * of the DB (Task 3 review, Important 1): a category loaded earlier in
   * this request (list/findById/an earlier patch) would stay pinned to that
   * stale snapshot, so (a) an untouched column could read stale even though
   * the DB has since changed underneath it, (b) `assign` could diff a patch
   * against a stale value that happens to match the new one and emit no
   * UPDATE at all — reporting success while silently dropping the write —
   * and (c) a `remove()` earlier in the same request (a `nativeDelete`,
   * which does not clear the identity map) would let `patch` fabricate a
   * row for an id that no longer exists instead of returning `null`.
   * `refresh: true` forces a real re-query every time, closing all three.
   *
   * No re-`findOne`/`refresh` after `flush`: `assign` already mutated the
   * managed (and now guaranteed-fresh) entity in place, and no column here
   * is DB-computed on UPDATE (unlike `created_at` on insert), so the
   * in-memory entity already holds exactly what was written.
   *
   * **Excluded from the Plan 3b Task 1 fix round's `disableIdentityMap: true`
   * ruling, deliberately** — see `TagsRepository.patch`'s docstring for the
   * full reasoning: this is not a "rows out" read, the entity must stay
   * MANAGED for `assign`+`flush`, and `disableIdentityMap: true` would
   * silently stop the write from persisting (a detached entity is outside
   * `flush()`'s unit of work). `refresh: true` stays for the identity-map
   * freshness reason above; there is no B1-shaped staleness risk because
   * this is the only read of this row left un-`disableIdentityMap`-ed in the
   * repository.
   */
  async patch(id: number, changes: { name?: string; color?: string; icon?: string }): Promise<CategoryRow | null> {
    const category = await this.findOne({ id }, { refresh: true });
    if (!category) return null;
    this.assign(category, changes);
    await this.getEntityManager().flush();
    return toRow(category) as CategoryRow;
  }

  /** `DELETE FROM categories WHERE id = ?`. Returns the affected row count. */
  async remove(id: number): Promise<number> {
    return this.nativeDelete({ id });
  }
}
