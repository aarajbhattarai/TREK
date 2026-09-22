import type { EntityRepository, FilterQuery, OrderDefinition } from '@mikro-orm/core';

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
 * `ownerField`/`orderField` are taken as parameters (`keyof T`) rather than
 * hard-coded so one helper serves every entity shaped this way; the `as
 * FilterQuery<T>`/`as Record<string, 'asc'>` casts are the one place that
 * type is asserted rather than inferred; the entity's own properties still
 * decide, at the call site, which literal `ownerField`/`orderField` values
 * are legal (`keyof T`).
 */

/**
 * List every row owned by `ownerId`, ordered by `orderField` ascending:
 * `SELECT * FROM <table> WHERE <ownerField> = ? ORDER BY <orderField> ASC`.
 */
export async function listForOwner<T extends object>(
  repo: EntityRepository<T>,
  ownerField: keyof T,
  ownerId: unknown,
  orderField: keyof T,
): Promise<T[]> {
  return repo.find({ [ownerField]: ownerId } as FilterQuery<T>, {
    orderBy: { [orderField]: 'asc' } as OrderDefinition<T>,
  });
}

/**
 * Find one row by id, strictly scoped to an owner:
 * `SELECT * FROM <table> WHERE id = ? AND <ownerField> = ?`.
 */
export async function findOwnedByUser<T extends object>(
  repo: EntityRepository<T>,
  id: unknown,
  ownerField: keyof T,
  ownerId: unknown,
): Promise<T | null> {
  return repo.findOne({ id, [ownerField]: ownerId } as FilterQuery<T>);
}

/**
 * Find one row by id, matching either a row `ownerId` owns or a row with no
 * owner at all (a nullable owner column used for globally-shared rows):
 * `SELECT * FROM <table> WHERE id = ? AND (<ownerField> = ? OR <ownerField>
 * IS NULL)`.
 */
export async function findOwnedOrGlobal<T extends object>(
  repo: EntityRepository<T>,
  id: unknown,
  ownerField: keyof T,
  ownerId: unknown,
): Promise<T | null> {
  return repo.findOne({
    id,
    $or: [{ [ownerField]: ownerId }, { [ownerField]: null }],
  } as unknown as FilterQuery<T>);
}
