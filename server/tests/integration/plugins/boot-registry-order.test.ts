/**
 * Boot-order regression (#plugins): the RPC registry must be scanned before the
 * runtime auto-activates the plugins an admin had enabled.
 *
 * The bug this pins: PluginRuntimeService booted enabled plugins from
 * onModuleInit, and Nest fires same-module onModuleInit hooks in providers-array
 * declaration order — where the runtime service is listed BEFORE
 * PluginRpcRegistryService. Each boot activation builds its PluginRpcHost
 * synchronously (bindInto snapshots the registry at construction), so every host
 * was bound from a STILL-EMPTY registry: the plugin's first RPC on activation
 * (typically ctx.db.migrate in onLoad) came back PERMISSION_DENIED and the plugin
 * landed in error state on every cold boot, until an admin deactivated and
 * reactivated it by hand. The fix moves the boot reconcile to
 * onApplicationBootstrap, which Nest guarantees runs after EVERY module's
 * onModuleInit — so this suite assembles a real Nest module mirroring the
 * production declaration order (runtime provider first, registry scan later) and
 * asserts the plugin still comes up clean.
 */
import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { Test } from '@nestjs/testing';
import type { TestingModule } from '@nestjs/testing';

const { testDb } = vi.hoisted(() => {
  const Database = require('better-sqlite3');
  const db = new Database(':memory:');
  db.exec(`CREATE TABLE plugins (
    id TEXT PRIMARY KEY, status TEXT, enabled INTEGER DEFAULT 0, version TEXT, api_version INTEGER DEFAULT 1, permissions TEXT DEFAULT '[]', operator_egress INTEGER DEFAULT 0, granted_permissions TEXT DEFAULT '',
    config TEXT DEFAULT '{}', dependencies TEXT DEFAULT '{}', capabilities TEXT DEFAULT '{}', last_error TEXT, updated_at TEXT,
    trek_range TEXT DEFAULT '>=3.0.0',
    source_repo TEXT, author_pubkey TEXT, update_block_code TEXT, update_block_detail TEXT, update_block_version TEXT);
    CREATE TABLE plugin_error_log (id INTEGER PRIMARY KEY AUTOINCREMENT, plugin_id TEXT, level TEXT, message TEXT, ts TEXT);
    CREATE TABLE plugin_settings_fields (id INTEGER PRIMARY KEY AUTOINCREMENT, plugin_id TEXT, field_key TEXT, scope TEXT, secret INTEGER, default_value TEXT);
    CREATE TABLE settings (user_id INTEGER, key TEXT, value TEXT);
    CREATE TABLE plugin_entity_metadata (id INTEGER PRIMARY KEY AUTOINCREMENT, plugin_id TEXT, entity_type TEXT, entity_id INTEGER, key TEXT, value TEXT, updated_at TEXT);
    CREATE TABLE plugin_user_config (plugin_id TEXT, user_id INTEGER, field_key TEXT, value TEXT, PRIMARY KEY (plugin_id, user_id, field_key));
    CREATE TABLE plugin_meta_migrations (plugin_id TEXT, migration_id TEXT, PRIMARY KEY (plugin_id, migration_id));
    CREATE TABLE plugin_capability_audit (id INTEGER PRIMARY KEY AUTOINCREMENT, plugin_id TEXT, acting_user_id INTEGER, method TEXT, resource TEXT, code TEXT, ts TEXT, prev_hash TEXT, hash TEXT);
    CREATE TABLE plugin_scheduled_tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, plugin_id TEXT NOT NULL, name TEXT NOT NULL, due_at INTEGER NOT NULL, payload TEXT NOT NULL DEFAULT 'null', every_ms INTEGER, created_at TEXT DEFAULT (datetime('now')), UNIQUE(plugin_id, name));
    CREATE TABLE plugin_user_erasure_queue (id INTEGER PRIMARY KEY AUTOINCREMENT, plugin_id TEXT NOT NULL, user_id INTEGER NOT NULL, created_at TEXT DEFAULT (datetime('now')), UNIQUE(plugin_id, user_id));
    CREATE TABLE addons (id TEXT PRIMARY KEY, enabled INTEGER DEFAULT 0);
    CREATE TABLE audit_log (
      id INTEGER PRIMARY KEY AUTOINCREMENT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      user_id INTEGER, action TEXT NOT NULL, resource TEXT, details TEXT, ip TEXT);`);
  return { testDb: db };
});
vi.mock('../../../src/db/database', () => ({ db: testDb, canAccessTrip: () => undefined }));
vi.mock('../../../src/websocket', () => ({ broadcast: vi.fn(), broadcastToUser: vi.fn() }));

import { db as dbConn } from '../../../src/db/database';
import { DatabaseService } from '../../../src/nest/database/database.service';
import { AuditService } from '../../../src/nest/audit/audit.service';
import { createTestAddonsService } from '../../helpers/test-addons';
import { AddonsService } from '../../../src/nest/addons/addons.service';
import { Addons } from '../../../src/db/entities/Addons.entity';
import { PhotoProviders } from '../../../src/db/entities/PhotoProviders.entity';
import { PhotoProviderFields } from '../../../src/db/entities/PhotoProviderFields.entity';
import { AppSettings } from '../../../src/db/entities/AppSettings.entity';
import { PluginRuntimeService } from '../../../src/nest/plugins/plugin-runtime.service';
import { PluginUserSettingsService } from '../../../src/nest/plugins/plugin-user-settings.service';
import { PluginRpcHostFactory } from '../../../src/nest/plugins/host/plugin-rpc-host.factory';
import { PluginRpcRegistry } from '../../../src/nest/plugins/host/rpc-kit/registry';
import type { PluginRpcRegistryService } from '../../../src/nest/plugins/host/rpc-kit/registry.service';
import { DbRpc } from '../../../src/nest/plugins/host/rpc/db.rpc';
import { createTestOrm, type TestOrm } from '../../helpers/test-orm';
import { AuditLog } from '../../../src/db/entities/AuditLog.entity';
import { Users } from '../../../src/db/entities/Users.entity';
import { Plugins } from '../../../src/db/entities/Plugins.entity';
import { PluginErrorLog } from '../../../src/db/entities/PluginErrorLog.entity';
import { PluginScheduledTasks } from '../../../src/db/entities/PluginScheduledTasks.entity';
import { PluginUserErasureQueue } from '../../../src/db/entities/PluginUserErasureQueue.entity';
import { PluginEgressHosts } from '../../../src/db/entities/PluginEgressHosts.entity';
import { PluginSettingsFields } from '../../../src/db/entities/PluginSettingsFields.entity';
import { PluginActions } from '../../../src/db/entities/PluginActions.entity';
import { PluginUserConfig } from '../../../src/db/entities/PluginUserConfig.entity';
import { PluginEntityMetadata } from '../../../src/db/entities/PluginEntityMetadata.entity';
import { PluginOauthTokens } from '../../../src/db/entities/PluginOauthTokens.entity';
import { PluginOauthState } from '../../../src/db/entities/PluginOauthState.entity';
import { PluginMetaMigrations } from '../../../src/db/entities/PluginMetaMigrations.entity';
import { PluginCapabilityAudit } from '../../../src/db/entities/PluginCapabilityAudit.entity';
import { Settings } from '../../../src/db/entities/Settings.entity';
import { NotificationChannelPreferences } from '../../../src/db/entities/NotificationChannelPreferences.entity';

let codeRoot: string;
let dataRoot: string;
let mod: TestingModule;
let t: TestOrm | undefined;

beforeAll(() => {
  codeRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'trekplug-boot-code-'));
  dataRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'trekplug-boot-data-'));
  process.env.TREK_PLUGINS_DIR = codeRoot;
  process.env.TREK_PLUGINS_DATA_DIR = dataRoot;
  process.env.TREK_PLUGINS_ENABLED = 'true';

  // The exact shape the bug bit: a plugin that runs its own-db migration as the
  // first thing its onLoad does — what every db-backed plugin's activation looks like.
  const dir = path.join(codeRoot, 'migrator', 'server');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, 'index.js'),
    `module.exports = { async onLoad(ctx) { await ctx.db.migrate('001', 'CREATE TABLE t (n INTEGER)'); } };`,
  );
  // The row a container recreate leaves behind: enabled, already consented to
  // db:own. Seeded 'inactive' (not the 'active' a real shutdown leaves) so the
  // poll below only terminates on a status the THIS-boot supervisor wrote.
  testDb
    .prepare("INSERT INTO plugins (id, status, enabled, permissions, granted_permissions, config) VALUES ('migrator','inactive',1,'[\"db:own\"]','[\"db:own\"]','{}')")
    .run();
});

afterAll(async () => {
  await mod?.close();
  await t?.close();
  delete process.env.TREK_PLUGINS_DIR;
  delete process.env.TREK_PLUGINS_DATA_DIR;
  delete process.env.TREK_PLUGINS_ENABLED;
  fs.rmSync(codeRoot, { recursive: true, force: true });
  fs.rmSync(dataRoot, { recursive: true, force: true });
});

describe('plugin boot vs registry scan ordering', () => {
  it('BOOT-REG-001 a plugin enabled before a restart activates cleanly even though the registry scan runs in a LATER provider\'s onModuleInit', async () => {
    const dbs = new DatabaseService(dbConn);
    const userSettings = new PluginUserSettingsService(dbs);
    // Empty at construction — exactly what PluginRpcRegistryService is before its
    // own onModuleInit scan has run.
    const registry = new PluginRpcRegistry();
    const hostFactory = new PluginRpcHostFactory(dbs, registry as unknown as PluginRpcRegistryService);
    t = await createTestOrm(dbConn);
    const auditLogRepo = t.repo(AuditLog);
    const usersRepo = t.repo(Users);
    const addonsService = await createTestAddonsService(dbConn, dbs);

    mod = await Test.createTestingModule({
      providers: [
        // Mirrors plugins-runtime.module.ts: the runtime service is DECLARED BEFORE
        // the provider that populates the registry, so Nest fires its onModuleInit
        // (if it had one) first. The boot reconcile must therefore not live there.
        {
          provide: PluginRuntimeService,
          // 8th arg (orm): task-6-fix-brief.md item 1 — PluginSupervisor.onMessage
          // now THROWS on a 'req' dispatch (e.g. this fixture's ctx.db.migrate in
          // onLoad) when resolveOrm returns undefined, instead of running it
          // unwrapped, so this hand-built double needs the same real ORM the
          // repositories above (auditLogRepo/usersRepo) already share.
          useFactory: () =>
            new PluginRuntimeService(
              dbs,
              new AuditService(auditLogRepo, usersRepo),
              addonsService,
              userSettings,
              (t as TestOrm).repo(Plugins),
              (t as TestOrm).repo(PluginErrorLog),
              (t as TestOrm).repo(PluginScheduledTasks),
              (t as TestOrm).repo(PluginUserErasureQueue),
              (t as TestOrm).repo(PluginEgressHosts),
              (t as TestOrm).repo(PluginSettingsFields),
              (t as TestOrm).repo(PluginActions),
              (t as TestOrm).repo(PluginUserConfig),
              (t as TestOrm).repo(PluginEntityMetadata),
              (t as TestOrm).repo(PluginOauthTokens),
              (t as TestOrm).repo(PluginOauthState),
              (t as TestOrm).repo(PluginMetaMigrations),
              (t as TestOrm).repo(PluginCapabilityAudit),
              (t as TestOrm).repo(Settings),
              (t as TestOrm).repo(NotificationChannelPreferences),
              undefined,
              hostFactory,
              undefined,
              t?.orm,
            ),
        },
        {
          provide: 'REGISTRY_SCAN',
          useFactory: () => ({
            onModuleInit() {
              registry.register(new DbRpc(userSettings));
            },
          }),
        },
      ],
    }).compile();
    await mod.init();

    // Boot activation is fire-and-forget; wait for the supervisor to settle the row.
    const runtime = mod.get(PluginRuntimeService);
    let row = { status: 'starting', last_error: null as string | null };
    for (let i = 0; i < 100; i++) {
      row = testDb.prepare("SELECT status, last_error FROM plugins WHERE id='migrator'").get() as typeof row;
      if (row.status === 'active' || row.status === 'error') break;
      await new Promise((r) => setTimeout(r, 50));
    }

    expect(row.last_error).toBeNull();
    expect(row.status).toBe('active');
    expect(runtime.isActive('migrator')).toBe(true);
  });

  /**
   * task-6-rereview.md I1: `onApplicationBootstrap`'s boot-activation loop
   * (`this.activate(id)` for every enabled plugin) reaches `assertActivatable`
   * → `disabledRequiredAddons` → `AddonsService.isAddonEnabled` —
   * repository-backed — with no request context wrapped around it. An
   * installed+enabled plugin declaring a non-empty `requiredAddons` for an
   * addon that IS enabled used to throw `cannotUseGlobalContext` here,
   * silently (double-swallowed: `activate(id).catch(...)` only reconciles
   * `PluginDependencyError`/`DependencyCycleError`, and the outer try/catch
   * around the whole discovery/boot block eats everything else) — the plugin
   * never left `'inactive'` and no log line named the failure at all.
   */
  it('BOOT-REG-002 an installed+enabled plugin declaring requiredAddons for an ENABLED addon activates cleanly at boot — the addon check runs inside a request context', async () => {
    const dir = path.join(codeRoot, 'addongated', 'server');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.js'), `module.exports = { async onLoad(ctx) {} };`);
    testDb.prepare("INSERT INTO addons (id, enabled) VALUES ('needsaddon_addon', 1)").run();
    testDb
      .prepare(
        "INSERT INTO plugins (id, status, enabled, permissions, granted_permissions, config, dependencies) VALUES ('addongated','inactive',1,'[]','[]','{}', ?)",
      )
      .run(JSON.stringify({ requiredAddons: ['needsaddon_addon'] }));

    // Self-contained ORM/collaborators — independent of test 1's `t`, which is
    // assigned inside ITS `it` body rather than a shared beforeAll. Global
    // context is disallowed on purpose here (unlike test 1's `t`, and unlike
    // createTestAddonsService's sharedTestOrm, both of which default to
    // allowGlobalContext: true — the test-only convenience that would let
    // AddonsService.isAddonEnabled succeed with NO request context and hide
    // exactly the bug this test exists to catch): this is what makes the
    // addon check below genuinely depend on the withRequestContext wrap
    // rather than passing either way.
    const t2 = await createTestOrm(dbConn, { allowGlobalContext: false });
    const errSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    let mod2: TestingModule | undefined;
    try {
      const dbs2 = new DatabaseService(dbConn);
      const userSettings2 = new PluginUserSettingsService(dbs2);
      const registry2 = new PluginRpcRegistry();
      // Registry already scanned — this test is about the addon check, not the
      // registry-ordering bug BOOT-REG-001 pins.
      registry2.register(new DbRpc(userSettings2));
      const hostFactory2 = new PluginRpcHostFactory(dbs2, registry2 as unknown as PluginRpcRegistryService);
      // Built directly on t2 (not createTestAddonsService's sharedTestOrm) so
      // its repositories share t2's allowGlobalContext: false ORM.
      const addonsService2 = new AddonsService(
        t2.repo(Addons),
        t2.repo(PhotoProviders),
        t2.repo(PhotoProviderFields),
        t2.repo(AppSettings),
        t2.repo(Users),
        dbs2,
      );
      const auditLogRepo2 = t2.repo(AuditLog);
      const usersRepo2 = t2.repo(Users);

      mod2 = await Test.createTestingModule({
        providers: [
          {
            provide: PluginRuntimeService,
            useFactory: () =>
              new PluginRuntimeService(
                dbs2,
                new AuditService(auditLogRepo2, usersRepo2),
                addonsService2,
                userSettings2,
                t2.repo(Plugins),
                t2.repo(PluginErrorLog),
                t2.repo(PluginScheduledTasks),
                t2.repo(PluginUserErasureQueue),
                t2.repo(PluginEgressHosts),
                t2.repo(PluginSettingsFields),
                t2.repo(PluginActions),
                t2.repo(PluginUserConfig),
                t2.repo(PluginEntityMetadata),
                t2.repo(PluginOauthTokens),
                t2.repo(PluginOauthState),
                t2.repo(PluginMetaMigrations),
                t2.repo(PluginCapabilityAudit),
                t2.repo(Settings),
                t2.repo(NotificationChannelPreferences),
                undefined,
                hostFactory2,
                undefined,
                t2.orm,
              ),
          },
        ],
      }).compile();
      await mod2.init();

      const runtime2 = mod2.get(PluginRuntimeService);
      let row = { status: 'starting', last_error: null as string | null };
      for (let i = 0; i < 100; i++) {
        row = testDb.prepare("SELECT status, last_error FROM plugins WHERE id='addongated'").get() as typeof row;
        if (row.status === 'active' || row.status === 'error') break;
        await new Promise((r) => setTimeout(r, 50));
      }

      expect(row.last_error).toBeNull();
      expect(row.status).toBe('active');
      expect(runtime2.isActive('addongated')).toBe(true);

      const suspicious = errSpy.mock.calls
        .map((args) => args.map(String).join(' '))
        .filter((line) => /cannotUseGlobalContext|global EntityManager/i.test(line));
      expect(suspicious).toEqual([]);
    } finally {
      errSpy.mockRestore();
      await mod2?.close();
      await t2.close();
    }
  });
});
