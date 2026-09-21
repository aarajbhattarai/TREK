import type { EntityClass, EntityRepository, GetRepository } from '@mikro-orm/core';
import { MikroORM, type EntityManager } from '@mikro-orm/sqlite';
import type Database from 'better-sqlite3';
import { ALL_ENTITIES } from '../../src/db/entities';
import { createBoundSqliteDriver } from '../../src/db/orm-driver';

export interface TestOrm {
  orm: MikroORM;
  /** A fork of the global EntityManager; `clear()` empties its identity map. */
  em: EntityManager;
  repo<T extends object>(entity: EntityClass<T>): GetRepository<T, EntityRepository<T>>;
  clear(): void;
  /** Closes the ORM only — the better-sqlite3 handle stays open for the caller. */
  close(): Promise<void>;
}

/**
 * An ORM over a test database the caller already opened (usually
 * `createTestDb()`), so factories can keep inserting with raw SQL through the
 * same handle and the ORM sees those rows.
 *
 * `allowGlobalContext` defaults to true here and only here: a test builds a
 * service with `t.repo(X)` and calls it without an HTTP request around it.
 * Production keeps the default (false), which is what `withRequestContext` in
 * `src/nest/database/request-context.ts` is for.
 *
 * `close()` on the underlying MikroORM connection ignores the `force` flag and
 * always tears down its Kysely client — what actually keeps the handle open
 * is `NonClosingSqliteDriver` in `../../src/db/orm-driver.ts`, which
 * `createBoundSqliteDriver` hands MikroORM in place of Kysely's stock
 * `SqliteDriver`; its `destroy()` is a no-op, so this `close()` never reaches
 * the handle at all.
 */
export async function createTestOrm(
  db: Database.Database,
  options: { allowGlobalContext?: boolean } = {},
): Promise<TestOrm> {
  const orm = await MikroORM.init({
    entities: [...ALL_ENTITIES],
    driver: createBoundSqliteDriver(() => db),
    dbName: ':memory:',
    allowGlobalContext: options.allowGlobalContext ?? true,
    discovery: { warnWhenNoEntities: false },
  });
  const em = orm.em.fork();
  return {
    orm,
    em,
    repo: (entity) => em.getRepository(entity),
    clear: () => em.clear(),
    close: async () => {
      // The `force` flag is irrelevant here — MikroORM's connection.close()
      // always destroys its Kysely client either way. It's the driver's
      // `destroy()` being a no-op (see the docstring above) that keeps the
      // handle open, not this call site.
      await orm.close(false);
    },
  };
}
