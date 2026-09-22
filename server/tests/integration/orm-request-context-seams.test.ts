/**
 * ORM request-context seam ratchet (task-6-fix-brief.md item 2;
 * task-6-review-template.md's Important 4 / M-E). task-6-fix-brief.md item 1
 * made the three D6 choke points — CronRegistrarService.register/runOnBoot,
 * PluginSupervisor.onMessage's dispatch, TrekWsAdapter.bindMessageHandlers —
 * THROW when their ORM/thunk is absent, and every unit suite (WSAD-040,
 * CRONREG-010, CTX-PLUGIN-001) asserts that throw. None of those tests can
 * tell a genuinely wired production seam apart from a hand-built double that
 * happens to pass no ORM — they'd pass either way. This is the one test that
 * pins production wiring itself: that `buildApp()` actually populates
 * `CronRegistrarService`'s and `PluginRuntimeService`'s `@Optional()` ORM
 * params, `PluginSupervisor`'s `resolveOrm` thunk AND `TrekWsAdapter`'s `orm`
 * constructor argument with the SAME MikroORM instance `app.get(MikroORM)`
 * resolves — so a future refactor that quietly drops one of those FOUR
 * constructor arguments fails here, not silently in production.
 *
 * task-6-rereview.md I3: the fourth seam (`TrekWsAdapter`) had no ratchet at
 * all — `bootstrap.ts`'s `new TrekWsAdapter(boundHttpServer, orm)` could lose
 * its second argument and only WSAD-040 (which builds its own adapter, not
 * production's) would still pass, while every real WS frame would start
 * throwing synchronously inside a `ws` `'message'` listener — an
 * uncaughtException with no host-side net, i.e. process death, not one failed
 * request. `TrekWsAdapter`'s `orm` is a plain constructor param on a class
 * `bootstrap.ts` builds with `new` (never through Nest DI), so it is reached
 * the same way this file already reaches `PluginSupervisor.resolveOrm()` —
 * through the concrete object the app graph is actually holding, here
 * `NestApplication`'s own `private readonly config: ApplicationConfig`
 * (`app.useWebSocketAdapter` calls `this.config.setIoAdapter(adapter)`; see
 * `@nestjs/core`'s `nest-application.js`/`.d.ts` — the field is `config`, NOT
 * `applicationConfig`, despite the class's own name).
 */
import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import type { INestApplication } from '@nestjs/common';

vi.mock('../../src/db/database', async () => {
  const { createSnapshotTestDb, buildDbMock } = await import('../helpers/db-mock');
  return buildDbMock(createSnapshotTestDb());
});
vi.mock('../../src/config', () => ({
  JWT_SECRET: 'test-jwt-secret-for-trek-testing-only',
  ENCRYPTION_KEY: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6a7b8c9d0e1f2a3b4c5d6a7b8c9d0e1f2',
  updateJwtSecret: () => {},
  SESSION_DURATION: '24h',
  SESSION_DURATION_MS: 86400000,
  SESSION_DURATION_SECONDS: 86400,
  DEFAULT_LANGUAGE: 'en',
}));
vi.mock('../../src/websocket', () => ({ broadcast: vi.fn(), broadcastToUser: vi.fn(), getOnlineUserIds: vi.fn(() => []) }));

import { db as testDb } from '../../src/db/database';
import { MikroORM } from '@mikro-orm/core';
import request from 'supertest';
import type { Application } from 'express';
import { buildApp } from '../../src/bootstrap';
import { CronRegistrarService } from '../../src/nest/scheduling/cron-registrar.service';
import { PluginRuntimeService } from '../../src/nest/plugins/plugin-runtime.service';
import { StorageService } from '../../src/nest/storage/storage.service';
import { Users } from '../../src/db/entities/Users.entity';
import { createUser } from '../helpers/factories';
import { generateToken } from '../helpers/auth';

describe('ORM request-context seams populated in production', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await buildApp();
  });

  afterAll(async () => {
    await app.close();
    testDb.close();
  });

  it('SEAM-001: CronRegistrarService, PluginRuntimeService, PluginSupervisor.resolveOrm() and TrekWsAdapter all resolve the SAME MikroORM app.get(MikroORM) does', () => {
    const orm = app.get(MikroORM);

    const cronRegistrar = app.get(CronRegistrarService) as unknown as { orm?: MikroORM };
    expect(cronRegistrar.orm).toBe(orm);

    const runtime = app.get(PluginRuntimeService) as unknown as {
      orm?: MikroORM;
      supervisor: { resolveOrm?: () => unknown };
    };
    expect(runtime.orm).toBe(orm);
    expect(runtime.supervisor.resolveOrm?.()).toBe(orm);

    // task-6-rereview.md I3 — the fourth seam, with no ratchet before this test.
    const wsAdapter = (app as unknown as { config: { getIoAdapter(): { orm?: MikroORM } } }).config.getIoAdapter();
    expect(wsAdapter.orm).toBe(orm);
  });

  /**
   * SEAM-002 (Plan 3b Task 0): `applyPlatformUploads`'s `orm` parameter is a
   * NEW seam — `bootstrap.ts:117` now passes `app.get(MikroORM)` into it, and
   * unlike the four seams SEAM-001 pins, nothing keeps that reference on an
   * introspectable field (it's captured in `platform.routes.ts`'s closure
   * around the registered `/uploads/photos/:filename` handler). So this is a
   * behavioural identity proof instead of a structural one: drive the REAL
   * pre-init route through the REAL booted app, force a repository read at
   * the earliest point inside the handler, and confirm it resolves against
   * the exact `MikroORM` this app booted with — the same one every other row
   * in this file checks — by reading back a user this same test just created
   * through the SAME connection (a foreign/unwired ORM instance would not
   * see that row at all).
   */
  it('SEAM-002: the pre-init /uploads/photos/* route (applyPlatformUploads, bootstrap.ts) forks a request context off the SAME MikroORM app.get(MikroORM) does', async () => {
    const orm = app.get(MikroORM);
    const { user } = createUser(testDb);
    const storage = app.get(StorageService);
    let found: unknown;
    let caught: unknown;
    const spy = vi.spyOn(storage, 'exists').mockImplementation(async () => {
      try {
        found = await orm.em.getRepository(Users).findOne({ id: user.id });
      } catch (e) {
        caught = e;
      }
      return true;
    });
    try {
      const httpApp = app.getHttpAdapter().getInstance() as Application;
      // The file need not exist: storage.exists is stubbed above, and the
      // identity proof is the repository read, not the HTTP response body.
      await request(httpApp)
        .get('/uploads/photos/seam-002-does-not-need-to-exist.jpg')
        .set('Authorization', `Bearer ${generateToken(user.id)}`);
      expect(caught).toBeUndefined();
      expect(found).toBeTruthy();
    } finally {
      spy.mockRestore();
    }
  });
});
