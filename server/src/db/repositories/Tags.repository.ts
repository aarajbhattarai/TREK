import type { Tags } from '../entities/Tags.entity';
import { findOwnedByUser, listForOwner } from './_shared/owned-lookup';
import { toRow, type AssertRowKeys } from './_shared/rows';
import { TrekRepository } from './_shared/trek-repository';

/** A `tags` row as the API emits it. */
export interface TagRow {
  id: number;
  user_id: number;
  name: string;
  color: string | null;
  created_at: string | null;
}

const _tagRowKeys: AssertRowKeys<TagRow, Tags> = true;

/**
 * One tag attached to one place, from `QueryHelpersService.loadTagsByPlaceIds`
 * (QH1). `user_id` is present only on the non-compact projection — `listForPlaces`
 * selects a narrower column set when `compact` is set, so a compact row never
 * carries the key at all (matching the legacy's destructuring, which drops it
 * rather than nulling it).
 */
export interface TagForPlaceRow {
  place_id: number;
  id: number;
  user_id?: number;
  name: string;
  color: string | null;
  created_at: string | null;
}

export class TagsRepository extends TrekRepository<Tags> {
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
   * `disableIdentityMap: true` by the base class's default (`_shared/
   * trek-repository.ts`, Plan 3b interlude B), per `findOwnedByUser`'s own
   * docstring — this is a "rows out" read, converted via `toRow` and
   * discarded.
   */
  async findByIdAndUser(id: number, userId: number): Promise<TagRow | null> {
    const tag = await findOwnedByUser<Tags, 'user'>(this, id, 'user', userId);
    return tag ? (toRow(tag) as TagRow) : null;
  }

  /**
   * The column set of the legacy INSERT:
   * `INSERT INTO tags (user_id, name, color) VALUES (?, ?, ?)`. The
   * `#10b981` defaulting stays in `TagsService` (D4's defaults rule) — this
   * writes exactly what it is given.
   *
   * `this.insert` (Plan 3b interlude B, finishing F2's sweep), never
   * `create()` + `persist().flush()`, same reasoning as
   * `CategoriesRepository.createCategory`: `flush()` commits the *whole*
   * unit of work of the request's `EntityManager`, not just this row.
   * Followed by a read-back (`findOne({ id })`, `disableIdentityMap: true`
   * by the base class's default): the returned row carries the generated
   * `id` and the `defaultRaw` `created_at` the same way a legacy
   * INSERT-then-reselect pair did.
   */
  async createTag(input: { user_id: number; name: string; color: string }): Promise<TagRow> {
    const id = await this.insert({
      user: input.user_id,
      name: input.name,
      color: input.color,
    });
    const inserted = await this.findOne({ id });
    if (!inserted) {
      throw new Error('createTag: read-back after insert found no row');
    }
    return toRow(inserted) as TagRow;
  }

  /**
   * `UPDATE tags SET name = COALESCE(?, name), color = COALESCE(?, color)
   * WHERE id = ?`, re-selected — no `user_id` filter, matching the legacy
   * statement exactly. `nativeUpdate` only writes the keys present on
   * `changes` (the entity-API equivalent of `COALESCE` against a bind
   * parameter), so `TagsService` omits a field entirely, rather than
   * passing it as `undefined`, to leave it untouched — reproducing the
   * legacy `|| null` coalesce-away-empty-string behaviour. Returns `null`
   * when no row matches `id`, mirroring the legacy re-select's `undefined`.
   *
   * **Converted from `findOne({ refresh: true })` + `assign` + `flush()`
   * to `nativeUpdate` + a typed partial (Plan 3b interlude B, per
   * `task-1-rereview.md`'s ruling on `CategoriesRepository.patch`, applied
   * here identically): "convert them, don't complete the sweep on the
   * read."** `nativeUpdate` writes the given columns directly, with no ORM
   * change-set diff against an in-memory snapshot — that removes the whole
   * class of staleness `refresh: true` existed to guard against (Task 3
   * review, Important 1: an untouched column reading stale, a patch
   * silently dropped because it happened to match a stale in-memory value,
   * and a patch after `remove()` fabricating a row), not just the one B1
   * shape the rest of the program's `disableIdentityMap: true` ruling
   * closes. When `changes` is non-empty, `nativeUpdate`'s own affected-row
   * count IS the existence check (0 ⇒ `null`, no separate read); when
   * `changes` is empty, a plain existence read (`disableIdentityMap: true`
   * by the base class's default, like every other read in this repository
   * now) stands in for it. Either way the return value is a fresh read, not
   * the entity `assign` used to mutate in place.
   */
  async patch(id: number, changes: { name?: string; color?: string }): Promise<TagRow | null> {
    if (Object.keys(changes).length > 0) {
      const affected = await this.nativeUpdate({ id }, changes);
      if (affected === 0) return null;
    } else {
      const existing = await this.findOne({ id }, { fields: ['id'] });
      if (!existing) return null;
    }
    const tag = await this.findOne({ id });
    return tag ? (toRow(tag) as TagRow) : null;
  }

  /** `DELETE FROM tags WHERE id = ?`. Returns the affected row count. */
  async remove(id: number): Promise<number> {
    return this.nativeDelete({ id });
  }

  /**
   * `SELECT t.*, pt.place_id FROM tags t JOIN place_tags pt ON t.id = pt.tag_id
   *  WHERE pt.place_id IN (${…})` (`query-helpers.service.ts:41-45`, QH1) —
   * ONE method, TWO projections (Plan 3c Task 1 ruling): `compact` selects
   * `{id, name, color, created_at, place_id}`; the non-compact path selects
   * every `tags` column except the join key (`{id, user_id, name, color,
   * created_at, place_id}`), exactly the legacy's `t.*` minus `place_id`.
   *
   * Joined through `t.place_tags_inverse` (the inverse side of `Places.place_tags`,
   * a many-to-many over the `place_tags` pivot table): selecting the joined
   * place's own `id` as `place_id` is the same value the legacy's `pt.place_id`
   * read off the pivot row directly (the pivot's `place_id` column IS the
   * places row it points at), so this is not an approximation.
   *
   * Empty `placeIds` short-circuits before any query, matching the legacy
   * service method.
   */
  async listForPlaces(placeIds: number[], options?: { compact?: boolean }): Promise<TagForPlaceRow[]> {
    if (placeIds.length === 0) return [];
    if (options?.compact) {
      return this.qb('t')
        .join('t.place_tags_inverse', 'p')
        .select(['t.id', 't.name', 't.color', 't.created_at', 'p.id as place_id'])
        .where({ 'p.id': { $in: placeIds } })
        .execute<TagForPlaceRow[]>('all', false);
    }
    return this.qb('t')
      .join('t.place_tags_inverse', 'p')
      .select(['t.id', 't.user', 't.name', 't.color', 't.created_at', 'p.id as place_id'])
      .where({ 'p.id': { $in: placeIds } })
      .execute<TagForPlaceRow[]>('all', false);
  }
}
