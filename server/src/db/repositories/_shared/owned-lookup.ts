import type { EntityRepository, FilterQuery, FilterValue, OrderDefinition } from '@mikro-orm/core';

/**
 * Shared lookup shapes for entities scoped to a user, some of which also
 * allow a globally-shared row (a nullable owner column).
 *
 * Built for `CategoriesRepository`/`TagsRepository` (Plan 3a Task 3), whose
 * `list`/`getById`/`getByIdAndUser` methods are the same two query shapes
 * over different tables: list-scoped-to-owner and find-one-by-id with an
 * ownership check that is either strict (`tags`, whose `user_id` column is
 * `NOT NULL`) or permissive (`categories`, whose `user_id` is nullable and
 * `NULL` rows are read as globally shared). Task 3 decides, per call site,
 * which shape a given legacy statement actually used — `categories.getById`
 * today has no ownership filter at all (`SELECT * FROM categories WHERE id
 * = ?`), so it stays a plain `findOne({ id })` rather than either helper
 * here; changing that would be a behaviour change, not a refactor.
 *
 * These helpers return live MikroORM entities, not rows — unlike every other
 * repository method in this codebase (D4: "repositories return rows, never a
 * live entity"). They are an internal building block for `CategoriesRepository`
 * /`TagsRepository`, which stay the actual public API and must run the result
 * through `toRow` before it leaves the repository.
 *
 * Typing (Task 0 review, I2): `T extends { id: unknown }` and `K extends
 * keyof T` tie `ownerField` to a real property of `T` and `ownerId` to
 * `FilterValue<T[K]>` — the same value shape MikroORM's own `FilterObject`
 * accepts for that property (`T[K]` directly is too strict for a relation
 * property: `Tags['user']` is `Ref<Users>`, but every call site here filters
 * it with the raw foreign-key id, which `FilterValue` allows and a bare
 * `T[K]` would not). `id`/`ownerId` are no longer `unknown` — a call for an
 * entity without an `id` column, or with an `ownerId` of the wrong shape, now
 * fails `tsc` instead of only failing at runtime; the `as FilterQuery<T>`/
 * `as OrderDefinition<T>` casts are the one place the shape is still
 * asserted rather than inferred, exactly at the computed-property-key
 * boundary TypeScript cannot check on its own.
 */

/**
 * List every row owned by `ownerId`, ordered by `orderField` ascending:
 * `SELECT * FROM <table> WHERE <ownerField> = ? ORDER BY <orderField> ASC`.
 */
export async function listForOwner<T extends { id: unknown }, K extends keyof T, OF extends keyof T>(
  repo: EntityRepository<T>,
  ownerField: K,
  ownerId: FilterValue<T[K]>,
  orderField: OF,
): Promise<T[]> {
  return repo.find({ [ownerField]: ownerId } as FilterQuery<T>, {
    orderBy: { [orderField]: 'asc' } as OrderDefinition<T>,
  });
}

/**
 * Find one row by id, strictly scoped to an owner:
 * `SELECT * FROM <table> WHERE id = ? AND <ownerField> = ?`.
 */
export async function findOwnedByUser<T extends { id: unknown }, K extends keyof T>(
  repo: EntityRepository<T>,
  id: T['id'],
  ownerField: K,
  ownerId: FilterValue<T[K]>,
): Promise<T | null> {
  return repo.findOne({ id, [ownerField]: ownerId } as FilterQuery<T>);
}

/**
 * Find one row by id, matching either a row `ownerId` owns or a row with no
 * owner at all (a nullable owner column used for globally-shared rows):
 * `SELECT * FROM <table> WHERE id = ? AND (<ownerField> = ? OR <ownerField>
 * IS NULL)`.
 */
export async function findOwnedOrGlobal<T extends { id: unknown }, K extends keyof T>(
  repo: EntityRepository<T>,
  id: T['id'],
  ownerField: K,
  ownerId: FilterValue<T[K]>,
): Promise<T | null> {
  return repo.findOne({
    id,
    $or: [{ [ownerField]: ownerId }, { [ownerField]: null }],
  } as unknown as FilterQuery<T>);
}
