import { wrap, type EntityDTO } from '@mikro-orm/core';

/**
 * The plain row a service (and, through it, the API) sees.
 *
 * `toObject()` drops the ORM machinery — `Ref` wrappers, hidden relations,
 * collections that were never loaded — and leaves the column-named scalars,
 * which is exactly the `SELECT *` row the legacy code returned. Repositories
 * return this, never a live entity, so a service cannot lazy-load or mutate
 * state behind the repository's back.
 */
export function toRow<T extends object>(entity: T): EntityDTO<T> {
  return wrap(entity).toObject() as EntityDTO<T>;
}
