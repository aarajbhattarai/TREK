/**
 * Boot-sweep request-context regression guard (task-6-review-parity.md
 * Critical C1; task-6-fix-brief.md item 7).
 *
 * `journey-thumbs.job.ts`'s `onApplicationBootstrap` used to call
 * `void this.sweep()` directly, bypassing `CronRegistrarService`'s
 * request-context wrapper entirely — the one place every SCHEDULED tick
 * gets it. Once `sweepOrphanThumbs` went repository-backed
 * (`AddonsService.isAddonEnabled`), that boot-time call threw
 * `cannotUseGlobalContext` on EVERY production boot, silently, because the
 * job's own try/catch swallowed it into a log line about the sweep itself.
 * The smoke boot reproduced it twice. Every `onApplicationBootstrap` boot
 * sweep across the seven job providers listed in the parity review now
 * routes through `CronRegistrarService.runOnBoot` instead.
 *
 * Under `NODE_ENV=test`, `CronRegistrarService.isEnabled()` is false
 * (SCHED-GATE), so `onApplicationBootstrap` never fires these sweeps
 * automatically in this suite — deliberately, so tests stay timer- and
 * network-free. This test instead triggers each job's real boot-sweep
 * entrypoint directly through the SAME, production-wired
 * `CronRegistrarService.runOnBoot` (its `orm` is `app.get(MikroORM)` —
 * pinned by orm-request-context-seams.test.ts), which is exactly what
 * `onApplicationBootstrap` itself would call in production. It then asserts
 * the captured log contains zero `cannotUseGlobalContext` / "global
 * EntityManager" lines — the regression guard the smoke boot would
 * otherwise be the only thing catching.
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
import { buildApp } from '../../src/bootstrap';
import { CronRegistrarService } from '../../src/nest/scheduling/cron-registrar.service';
import { JourneyThumbsJob } from '../../src/nest/memories/journey-thumbs.job';
import { PlacePhotoCacheJob } from '../../src/nest/place-photos/place-photo-cache.job';
import { TrekPhotoCacheJob } from '../../src/nest/memories/trek-photo-cache.job';
import { ReminderJobsService } from '../../src/nest/notifications/reminder-jobs.service';
import { DocSyncJob } from '../../src/nest/doc-sync/doc-sync.job';
import { AirtrailSyncJob } from '../../src/nest/integrations/airtrail-sync.job';
import { DawarichSyncJob } from '../../src/nest/integrations/dawarich-sync.job';

describe('Every onApplicationBootstrap boot sweep runs inside a request context', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await buildApp();
  });

  afterAll(async () => {
    await app.close();
    testDb.close();
  });

  it('BOOT-SWEEP-001: the seven boot-sweep entrypoints, invoked through the real production-wired CronRegistrarService.runOnBoot, never log cannotUseGlobalContext / "global EntityManager"', async () => {
    const errSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    try {
      const registrar = app.get(CronRegistrarService);

      await registrar.runOnBoot('journey-thumbs-boot', () => app.get(JourneyThumbsJob).sweep());
      await registrar.runOnBoot('place-photo-cache-boot', () => app.get(PlacePhotoCacheJob).sweep());
      await registrar.runOnBoot('trek-photo-cache-boot', () => app.get(TrekPhotoCacheJob).tick());
      await registrar.runOnBoot('reminder-jobs-boot', async () => {
        await app.get(ReminderJobsService).tripTick();
        await app.get(ReminderJobsService).todoTick();
      });
      await registrar.runOnBoot('docsync-boot', () => app.get(DocSyncJob).tick());
      await registrar.runOnBoot('airtrail-sync-boot', () => app.get(AirtrailSyncJob).tick());
      await registrar.runOnBoot('dawarich-sync-boot', () => app.get(DawarichSyncJob).tick());

      const suspicious = errSpy.mock.calls
        .map((args) => args.map(String).join(' '))
        .filter((line) => /cannotUseGlobalContext|global EntityManager/i.test(line));
      expect(suspicious).toEqual([]);
    } finally {
      errSpy.mockRestore();
    }
  });
});
