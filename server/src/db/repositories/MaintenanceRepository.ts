import type { EntityManager } from '@mikro-orm/core';

/**
 * Plan 3i Task 3 — R1's raw-connection exception, named ahead of this plan by
 * the program brief's own rule 4 ("connection.execute() (only in
 * MaintenanceRepository/DemoRepository, with a comment)").
 *
 * Not a `TrekRepository<Entity>` — it backs no table and no entity of its
 * own. It exists purely as the one place two whole-database-file statements
 * (a `PRAGMA` and a `VACUUM INTO`) run against the ORM's own bound driver
 * connection instead of scattering raw `better-sqlite3` calls across
 * `backup.impl.ts`/`demo-reset.ts`. `find/findOne → create/assign/flush →
 * nativeUpdate/nativeDelete → em.upsert → qb() → em.getKysely()` all fail
 * for these two statements — neither is expressible against an entity at
 * all — so `connection.execute()` (the last tier in the program's query-API
 * order) is the correct tool, not a shortcut around it.
 *
 * Constructed directly (`new MaintenanceRepository(em)`), never through Nest
 * DI: its only two callers — `backup.impl.ts#createBackup` and
 * `demo/demo-reset.ts` (`resetDemoUser`/`saveBaseline`) — are plain function
 * modules, not Nest providers, and obtain the `EntityManager` via
 * `RequestContext.getEntityManager()` (the same static accessor MikroORM's
 * own per-request middleware and `CronRegistrarService`'s `wrappedTick`
 * populate) rather than constructor injection. No module registers this
 * class as a provider — nothing today asks Nest's DI container to resolve
 * it.
 */
export class MaintenanceRepository {
  constructor(private readonly em: EntityManager) {}

  /**
   * MikroORM's own validating `getContext()` — throws
   * `ValidationError.cannotUseGlobalContext()` outside a request context (the
   * production default), the same fail-closed ratchet `TrekRepository`
   * applies to every entity-bound repository. Called first by both methods
   * below, since raw `connection.execute()` has no such guard of its own.
   */
  private validateRequestContext(): void {
    this.em.getContext();
  }

  /**
   * `PRAGMA wal_checkpoint(TRUNCATE)` — rendered text pinned, identical to
   * the legacy `db.exec('PRAGMA wal_checkpoint(TRUNCATE)')` it replaces at
   * three call sites: `backup.impl.ts#createBackup` (BK1), `demo-reset.ts`'s
   * `resetDemoUser` (DMR3) and `saveBaseline` (DMR3's dup) — one shared
   * method, three callers, not three near-duplicate raw statements. Flushes
   * the WAL into the main db file before a snapshot/copy; every call site
   * treats it as best-effort (wrapped in a swallowing try/catch by the
   * caller), matching the legacy shape exactly.
   */
  async walCheckpoint(): Promise<void> {
    this.validateRequestContext();
    await this.em.getConnection().execute('PRAGMA wal_checkpoint(TRUNCATE)');
  }

  /**
   * `` VACUUM INTO '<path>' `` — rendered text pinned, identical to the
   * legacy `` db.exec(`VACUUM INTO '${dbSnap.replaceAll("'", "''")}'`) ``
   * (BK2, `backup.impl.ts#createBackup`): single quotes in `path` are
   * escaped by doubling, the same escaping the legacy statement used — a
   * consistent point-in-time snapshot under concurrent writers, with no
   * MikroORM/Kysely equivalent.
   */
  async vacuumInto(path: string): Promise<void> {
    this.validateRequestContext();
    const escaped = path.replaceAll("'", "''");
    await this.em.getConnection().execute(`VACUUM INTO '${escaped}'`);
  }
}
