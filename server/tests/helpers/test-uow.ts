import { Module, type DynamicModule } from '@nestjs/common';
import type Database from 'better-sqlite3';
import { UnitOfWork } from '../../src/nest/database/unit-of-work';
import { createTestOrm } from './test-orm';

const perHandle = new WeakMap<Database.Database, Promise<UnitOfWork>>();

/**
 * The `UnitOfWork` a hand-constructed service needs, bound to the suite's own
 * better-sqlite3 handle.
 *
 * `UnitOfWork.transactional` opens the transaction through MikroORM on that same
 * handle, so the legacy raw statements a service still issues inside the
 * callback run inside it — the arrangement the Phase 1 sweep relies on. Memoised
 * per handle: one ORM per test file, however many services the file builds.
 */
export function createTestUnitOfWork(db: Database.Database): Promise<UnitOfWork> {
  // `=== undefined` rather than a truthiness test: a Promise is always truthy,
  // which is exactly what no-misused-promises/checksConditionals rejects.
  const existing = perHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = createTestOrm(db).then((t) => new UnitOfWork(t.em));
  perHandle.set(db, pending);
  return pending;
}

/**
 * The same `UnitOfWork`, as a **global** Nest module.
 *
 * A `Test.createTestingModule({ providers: [...] })` entry only reaches the root
 * testing module, so a service resolved inside its own feature module (the
 * `PermissionsService` in `PermissionsModule`, say) still finds no `UnitOfWork`.
 * `OrmModule` is `@Global()` in the app graph for exactly that reason, and the
 * partial containers the e2e suites build need the same shape.
 */
@Module({})
export class TestUnitOfWorkModule {
  static async forRoot(db: Database.Database): Promise<DynamicModule> {
    const uow = await createTestUnitOfWork(db);
    return {
      module: TestUnitOfWorkModule,
      global: true,
      providers: [{ provide: UnitOfWork, useValue: uow }],
      exports: [UnitOfWork],
    };
  }
}
