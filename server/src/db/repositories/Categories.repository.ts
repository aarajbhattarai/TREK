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
    const categories = await this.find({}, { orderBy: { name: 'asc' } });
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
   * `refresh: true` (Task 0 review, I1 — the ruling every Plan 3 repository
   * follows for a PK read). For this unrestricted (no `fields` option)
   * findOne, MikroORM already re-queries and merges fresh data on every call
   * regardless of `refresh` — its identity-map-skip optimisation only
   * engages together with a `fields` restriction (the case
   * `AppSettingsRepository.getValue` actually needed it for). `refresh`
   * stays on this read to match the blanket ruling and to stay correct if a
   * future caller adds `fields` here.
   */
  async findById(id: number): Promise<CategoryRow | null> {
    const category = await this.findOne({ id }, { refresh: true });
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
   * No re-`findOne`/`refresh` after `flush`: `assign` already mutated the
   * managed entity in place, and no column here is DB-computed on UPDATE
   * (unlike `created_at` on insert), so the in-memory entity already holds
   * exactly what was written.
   */
  async patch(id: number, changes: { name?: string; color?: string; icon?: string }): Promise<CategoryRow | null> {
    const category = await this.findOne({ id });
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
