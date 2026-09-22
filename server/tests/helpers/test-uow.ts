import { Module, type DynamicModule } from '@nestjs/common';
import type Database from 'better-sqlite3';
import { UnitOfWork } from '../../src/nest/database/unit-of-work';
import { createTestOrm, type TestOrm } from './test-orm';
import { AppSettings } from '../../src/db/entities/AppSettings.entity';
import type { AppSettingsRepository } from '../../src/db/repositories/AppSettings.repository';

const perHandle = new WeakMap<Database.Database, Promise<UnitOfWork>>();
const appSettingsPerHandle = new WeakMap<Database.Database, Promise<AppSettingsRepository>>();
// ONE MikroORM per handle, shared by createTestUnitOfWork and
// createTestAppSettingsRepo (task-2-review.md I2): each used to call
// createTestOrm(db) independently, which opened a SECOND MikroORM.init over the
// same better-sqlite3 handle — two identity maps, two Kysely clients, and
// (the functional bug) `UnitOfWork.transactional` opening its transaction on
// ORM A's EntityManager while a repository built from ORM B resolved a
// DIFFERENT EntityManager, so `TransactionContext` never saw it: a repository
// write inside `uow.transactional(...)` silently ran outside the transaction.
// Both functions below now derive from this single `t.em`, so a repository
// resolved from `t.repo(X)` and a `UnitOfWork` built from `t.em` share the same
// context-resolving EntityManager, exactly like Nest's real DI graph.
const ormPerHandle = new WeakMap<Database.Database, Promise<TestOrm>>();
/**
 * Exported so a caller that needs the raw `MikroORM` instance itself — not a
 * repository or a `UnitOfWork` derived from it — can still share it: e.g.
 * `plugin-host.ts`'s `createPluginRuntime` passes `(await sharedTestOrm(db)).orm`
 * to `PluginRuntimeService` so `PluginSupervisor`'s D6 request-context wrapper
 * (task-2-review.md C3) forks from the SAME `em` `PermissionsService`'s
 * repository resolves through — a wrapper built from a different ORM instance
 * would fork a context a repository bound to this one never sees.
 */
export function sharedTestOrm(db: Database.Database): Promise<TestOrm> {
  const existing = ormPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = createTestOrm(db);
  ormPerHandle.set(db, pending);
  return pending;
}

/**
 * The `UnitOfWork` a hand-constructed service needs, bound to the suite's own
 * better-sqlite3 handle.
 *
 * `UnitOfWork.transactional` opens the transaction through MikroORM on that same
 * handle, so the legacy raw statements a service still issues inside the
 * callback run inside it — the arrangement the Phase 1 sweep relies on. Memoised
 * per handle via `sharedTestOrm`: one ORM per test file, however many services
 * the file builds — and the SAME one `createTestAppSettingsRepo` below draws
 * from, so a repository and this `UnitOfWork` resolve the same transaction.
 */
export function createTestUnitOfWork(db: Database.Database): Promise<UnitOfWork> {
  // `=== undefined` rather than a truthiness test: a Promise is always truthy,
  // which is exactly what no-misused-promises/checksConditionals rejects.
  const existing = perHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => new UnitOfWork(t.em));
  perHandle.set(db, pending);
  return pending;
}

/**
 * The `AppSettingsRepository` a hand-constructed service needs (`PermissionsService`,
 * mirroring `SettingsService`'s own `t.repo(AppSettings)` in its unit test), bound to
 * the suite's own better-sqlite3 handle the same way `createTestUnitOfWork` is.
 *
 * Memoised per handle via the same `sharedTestOrm` `createTestUnitOfWork` uses —
 * not a second `createTestOrm` call — so this repository and that `UnitOfWork`
 * resolve through the identical `EntityManager` and a `uow.transactional(...)`
 * write this repository makes is actually inside the open transaction.
 */
export function createTestAppSettingsRepo(db: Database.Database): Promise<AppSettingsRepository> {
  const existing = appSettingsPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(AppSettings) as AppSettingsRepository);
  appSettingsPerHandle.set(db, pending);
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
