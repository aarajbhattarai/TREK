import { Module, type DynamicModule } from '@nestjs/common';
import type Database from 'better-sqlite3';
import { UnitOfWork } from '../../src/nest/database/unit-of-work';
import { createTestOrm, type TestOrm } from './test-orm';
import { AppSettings } from '../../src/db/entities/AppSettings.entity';
import type { AppSettingsRepository } from '../../src/db/repositories/AppSettings.repository';
import { Categories } from '../../src/db/entities/Categories.entity';
import type { CategoriesRepository } from '../../src/db/repositories/Categories.repository';
import { Tags } from '../../src/db/entities/Tags.entity';
import type { TagsRepository } from '../../src/db/repositories/Tags.repository';
import { Settings } from '../../src/db/entities/Settings.entity';
import type { SettingsRepository } from '../../src/db/repositories/Settings.repository';
import { Users } from '../../src/db/entities/Users.entity';
import type { UsersRepository } from '../../src/db/repositories/Users.repository';
import { WebauthnCredentials } from '../../src/db/entities/WebauthnCredentials.entity';
import type { WebauthnCredentialsRepository } from '../../src/db/repositories/WebauthnCredentials.repository';
import { WebauthnChallenges } from '../../src/db/entities/WebauthnChallenges.entity';
import type { WebauthnChallengesRepository } from '../../src/db/repositories/WebauthnChallenges.repository';
import { InviteTokens } from '../../src/db/entities/InviteTokens.entity';
import type { InviteTokensRepository } from '../../src/db/repositories/InviteTokens.repository';
import { McpTokens } from '../../src/db/entities/McpTokens.entity';
import type { McpTokensRepository } from '../../src/db/repositories/McpTokens.repository';
import { OauthTokens } from '../../src/db/entities/OauthTokens.entity';
import type { OauthTokensRepository } from '../../src/db/repositories/OauthTokens.repository';
import { PasswordResetTokens } from '../../src/db/entities/PasswordResetTokens.entity';
import type { PasswordResetTokensRepository } from '../../src/db/repositories/PasswordResetTokens.repository';

const perHandle = new WeakMap<Database.Database, Promise<UnitOfWork>>();
const appSettingsPerHandle = new WeakMap<Database.Database, Promise<AppSettingsRepository>>();
const categoriesPerHandle = new WeakMap<Database.Database, Promise<CategoriesRepository>>();
const tagsPerHandle = new WeakMap<Database.Database, Promise<TagsRepository>>();
const settingsPerHandle = new WeakMap<Database.Database, Promise<SettingsRepository>>();
const usersPerHandle = new WeakMap<Database.Database, Promise<UsersRepository>>();
// ONE MikroORM per handle, shared by createTestUnitOfWork and
// createTestAppSettingsRepo (task-2-review.md I2; reworded per
// task-1-2-rereview.md's I-A — the original wording here claimed a
// functional bug that measurement disproved): each used to call
// createTestOrm(db) independently, which opened a SECOND MikroORM.init over
// the same better-sqlite3 handle — two identity maps and two Kysely clients,
// neither ever closed. That is NOT the same as a repository write silently
// running outside a transaction: `TransactionContext.getEntityManager(name)`
// keys on the EntityManager's CONTEXT NAME ('default'), not on which ORM
// instance created it, so a repository built from ORM B still resolved ORM
// A's transactional fork correctly even under the old split wiring —
// transaction resolution worked either way. The reason to share one ORM per
// handle is simpler: it is the same EntityManager Nest's real DI graph would
// inject (one MikroORM per app, not one per consumer), and it stops leaking
// a second identity map and Kysely client per test file. Both functions below
// now derive from this single `t.em`, so a repository resolved from
// `t.repo(X)` and a `UnitOfWork` built from `t.em` share the same
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
  const pending = sharedTestOrm(db).then((t) => t.repo(AppSettings));
  appSettingsPerHandle.set(db, pending);
  return pending;
}

/**
 * The `CategoriesRepository` a hand-constructed `CategoriesService` needs
 * (Plan 3a Task 3), bound to the suite's own better-sqlite3 handle and
 * memoised via the same `sharedTestOrm` the other helpers here use — not a
 * second `createTestOrm` call (task-2-review.md I2's one-ORM-per-handle
 * ruling).
 */
export function createTestCategoriesRepo(db: Database.Database): Promise<CategoriesRepository> {
  const existing = categoriesPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(Categories));
  categoriesPerHandle.set(db, pending);
  return pending;
}

/**
 * The `TagsRepository` a hand-constructed `TagsService` needs (Plan 3a Task
 * 3), same memoisation as `createTestCategoriesRepo`.
 */
export function createTestTagsRepo(db: Database.Database): Promise<TagsRepository> {
  const existing = tagsPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(Tags));
  tagsPerHandle.set(db, pending);
  return pending;
}

/**
 * The `SettingsRepository` a hand-constructed `SettingsService` needs (Plan
 * 3a Task 5 — the per-user `settings` table repository), same memoisation as
 * `createTestAppSettingsRepo`/`createTestCategoriesRepo`.
 */
export function createTestSettingsRepo(db: Database.Database): Promise<SettingsRepository> {
  const existing = settingsPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(Settings));
  settingsPerHandle.set(db, pending);
  return pending;
}

/**
 * The `UsersRepository` a hand-constructed service passes into
 * `instance-api-keys.ts`'s `resolveApiKey` (and the other functions there
 * that take one) — an explicit parameter, not resolved off an ambient
 * MikroORM request context (Plan 3a Task 5; an earlier version of that file
 * tried the request-context approach and broke 185 unit tests across 12
 * files that build a service with no request context around it — see that
 * file's own docstring). Same memoisation as the others in this file.
 */
export function createTestUsersRepo(db: Database.Database): Promise<UsersRepository> {
  const existing = usersPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(Users));
  usersPerHandle.set(db, pending);
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

// ---------------------------------------------------------------------------
// Plan 3b Task 2 (TokenService) — appended after every Task 0/1/3a helper
// above, before Task 3's own block (which appends after this one, per each
// task's file-ownership rule). Same memoisation-per-handle pattern as every
// helper above.
// ---------------------------------------------------------------------------

const mcpTokensPerHandle = new WeakMap<Database.Database, Promise<McpTokensRepository>>();

/** The `McpTokensRepository` a hand-constructed `TokenService` needs (Plan 3b Task 2). */
export function createTestMcpTokensRepo(db: Database.Database): Promise<McpTokensRepository> {
  const existing = mcpTokensPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(McpTokens));
  mcpTokensPerHandle.set(db, pending);
  return pending;
}

// ---------------------------------------------------------------------------
// Plan 3b Task 3 (PasskeyService / RegistrationInvitesService) — appended at
// the end per the task's own file-ownership rule (Task 2 owns everything
// above this point in this file). Same memoisation-per-handle pattern as
// every helper above: one ORM per test file's better-sqlite3 handle, shared
// with whatever `UnitOfWork`/other repository that same file also builds.
// ---------------------------------------------------------------------------

const webauthnCredentialsPerHandle = new WeakMap<Database.Database, Promise<WebauthnCredentialsRepository>>();
const webauthnChallengesPerHandle = new WeakMap<Database.Database, Promise<WebauthnChallengesRepository>>();
const inviteTokensPerHandle = new WeakMap<Database.Database, Promise<InviteTokensRepository>>();

/** The `WebauthnCredentialsRepository` a hand-constructed `PasskeyService` needs. */
export function createTestWebauthnCredentialsRepo(db: Database.Database): Promise<WebauthnCredentialsRepository> {
  const existing = webauthnCredentialsPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(WebauthnCredentials));
  webauthnCredentialsPerHandle.set(db, pending);
  return pending;
}

/** The `WebauthnChallengesRepository` a hand-constructed `PasskeyService` needs. */
export function createTestWebauthnChallengesRepo(db: Database.Database): Promise<WebauthnChallengesRepository> {
  const existing = webauthnChallengesPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(WebauthnChallenges));
  webauthnChallengesPerHandle.set(db, pending);
  return pending;
}

/**
 * The `InviteTokensRepository` a hand-constructed `RegistrationInvitesService`
 * (or `AuthService`) needs — Task 0 built the class, this is the first test
 * helper for it.
 */
export function createTestInviteTokensRepo(db: Database.Database): Promise<InviteTokensRepository> {
  const existing = inviteTokensPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(InviteTokens));
  inviteTokensPerHandle.set(db, pending);
  return pending;
}

// ---------------------------------------------------------------------------
// Plan 3b Task 5 (AuthService / UserCleanupService) — appended at the end per
// the task's own file-ownership rule. Same memoisation-per-handle pattern as
// every helper above: one ORM per test file's better-sqlite3 handle, shared
// with whatever `UnitOfWork`/other repository that same file also builds —
// required per the Task 4 review ("append createTestOauthTokensRepo to
// test-uow.ts through the existing sharedTestOrm memoisation — a repository
// from a different ORM instance resolves a different fork and the
// transaction test lies").
// ---------------------------------------------------------------------------

const oauthTokensPerHandle = new WeakMap<Database.Database, Promise<OauthTokensRepository>>();
const passwordResetTokensPerHandle = new WeakMap<Database.Database, Promise<PasswordResetTokensRepository>>();

/** The `OauthTokensRepository` a hand-constructed `AuthService` needs (Plan 3b Task 4's `revokeAllForUser`, consumed by Task 5). */
export function createTestOauthTokensRepo(db: Database.Database): Promise<OauthTokensRepository> {
  const existing = oauthTokensPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(OauthTokens));
  oauthTokensPerHandle.set(db, pending);
  return pending;
}

/** The `PasswordResetTokensRepository` a hand-constructed `AuthService` needs (Plan 3b Task 5, new repository). */
export function createTestPasswordResetTokensRepo(db: Database.Database): Promise<PasswordResetTokensRepository> {
  const existing = passwordResetTokensPerHandle.get(db);
  if (existing !== undefined) return existing;
  const pending = sharedTestOrm(db).then((t) => t.repo(PasswordResetTokens));
  passwordResetTokensPerHandle.set(db, pending);
  return pending;
}
