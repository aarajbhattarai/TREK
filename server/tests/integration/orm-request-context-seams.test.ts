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
 * params and `PluginSupervisor`'s `resolveOrm` thunk with the SAME MikroORM
 * instance `app.get(MikroORM)` resolves — so a future refactor that quietly
 * drops one of those three constructor arguments fails here, not silently in
 * production.
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
import { buildApp } from '../../src/bootstrap';
import { CronRegistrarService } from '../../src/nest/scheduling/cron-registrar.service';
import { PluginRuntimeService } from '../../src/nest/plugins/plugin-runtime.service';

describe('ORM request-context seams populated in production', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await buildApp();
  });

  afterAll(async () => {
    await app.close();
    testDb.close();
  });

  it('SEAM-001: CronRegistrarService, PluginRuntimeService and PluginSupervisor.resolveOrm() all resolve the SAME MikroORM app.get(MikroORM) does', () => {
    const orm = app.get(MikroORM);

    const cronRegistrar = app.get(CronRegistrarService) as unknown as { orm?: MikroORM };
    expect(cronRegistrar.orm).toBe(orm);

    const runtime = app.get(PluginRuntimeService) as unknown as {
      orm?: MikroORM;
      supervisor: { resolveOrm?: () => unknown };
    };
    expect(runtime.orm).toBe(orm);
    expect(runtime.supervisor.resolveOrm?.()).toBe(orm);
  });
});
