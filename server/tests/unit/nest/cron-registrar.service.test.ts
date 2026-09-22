/**
 * CronRegistrarService — the shared cron gate every job provider schedules
 * through. Proves the NODE_ENV=test gate refuses to schedule, the timezone is
 * resolved at register() time ('app' vs 'none'), re-registering a name replaces
 * the old job, unregister is idempotent, and onApplicationShutdown stops
 * everything the registrar owns.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

const h = vi.hoisted(() => ({
  jobs: [] as Array<{
    cronTime: string;
    timeZone?: string;
    start?: boolean;
    onTick: () => unknown;
    stopped: boolean;
    stop(): void;
  }>,
}));
vi.mock('cron', () => ({
  CronJob: {
    from: (opts: { cronTime: string; timeZone?: string; start?: boolean; onTick: () => unknown }) => {
      const job = {
        ...opts,
        stopped: false,
        stop() {
          this.stopped = true;
        },
      };
      h.jobs.push(job);
      return job;
    },
  },
}));

import { SchedulerRegistry } from '@nestjs/schedule';
import { CronRegistrarService } from '../../../src/nest/scheduling/cron-registrar.service';
import type { RuntimeEnvService } from '../../../src/nest/app-config/runtime-env.service';
import { createSnapshotTestDb } from '../../helpers/db-mock';
import { createTestOrm, type TestOrm } from '../../helpers/test-orm';
import { Users } from '../../../src/db/entities/Users.entity';

function makeRegistrar(isTest: boolean) {
  const registry = new SchedulerRegistry();
  const runtimeEnv = { isTest: () => isTest } as RuntimeEnvService;
  return { registrar: new CronRegistrarService(registry, runtimeEnv), registry };
}

describe('CronRegistrarService', () => {
  const originalTz = process.env.TZ;

  beforeEach(() => {
    h.jobs.length = 0;
    delete process.env.TZ;
  });

  afterEach(() => {
    if (originalTz === undefined) delete process.env.TZ;
    else process.env.TZ = originalTz;
  });

  it('CRONREG-001 — refuses to schedule under the test gate (register returns false, nothing created)', () => {
    const { registrar, registry } = makeRegistrar(true);
    expect(registrar.isEnabled()).toBe(false);
    expect(registrar.register('job', '0 * * * *', () => {})).toBe(false);
    expect(h.jobs).toHaveLength(0);
    expect(registry.getCronJobs().size).toBe(0);
    expect(registrar.jobCount).toBe(0);
  });

  it('CRONREG-002 — schedules a started job with tz UTC when TZ is unset', () => {
    const { registrar, registry } = makeRegistrar(false);
    expect(registrar.register('job', '0 3 * * *', () => {})).toBe(true);
    expect(h.jobs).toHaveLength(1);
    expect(h.jobs[0].cronTime).toBe('0 3 * * *');
    expect(h.jobs[0].start).toBe(true);
    expect(h.jobs[0].timeZone).toBe('UTC');
    expect(registry.getCronJobs().size).toBe(1);
    expect(registrar.jobCount).toBe(1);
  });

  it('CRONREG-003 — resolves the app timezone from the env at register() time', () => {
    const { registrar } = makeRegistrar(false);
    process.env.TZ = 'Europe/Zurich';
    registrar.register('job', '0 9 * * *', () => {});
    expect(h.jobs[0].timeZone).toBe('Europe/Zurich');

    // A re-register picks up a changed TZ — the read is per call, never cached.
    process.env.TZ = 'America/New_York';
    registrar.register('job', '0 9 * * *', () => {});
    expect(h.jobs[1].timeZone).toBe('America/New_York');
  });

  it("CRONREG-004 — timezone: 'none' schedules in the server-local zone even when TZ is set", () => {
    const { registrar } = makeRegistrar(false);
    process.env.TZ = 'Europe/Zurich';
    registrar.register('job', '0 * * * *', () => {}, { timezone: 'none' });
    expect(h.jobs[0].timeZone).toBeUndefined();
  });

  it('CRONREG-005 — re-registering a name stops the old job and replaces it', () => {
    const { registrar, registry } = makeRegistrar(false);
    registrar.register('job', '0 2 * * *', () => {});
    registrar.register('job', '0 4 * * *', () => {});
    expect(h.jobs[0].stopped).toBe(true);
    expect(h.jobs[1].stopped).toBe(false);
    expect(registry.getCronJobs().size).toBe(1);
    expect(registrar.jobCount).toBe(1);
    expect(registry.getCronJob('job').cronTime).toBe('0 4 * * *');
  });

  it('CRONREG-006 — unregister stops and drops the job, and is a no-op for unknown names', () => {
    const { registrar, registry } = makeRegistrar(false);
    registrar.register('job', '0 2 * * *', () => {});
    registrar.unregister('job');
    expect(h.jobs[0].stopped).toBe(true);
    expect(registry.getCronJobs().size).toBe(0);
    expect(registrar.jobCount).toBe(0);
    expect(() => registrar.unregister('job')).not.toThrow();
    expect(() => registrar.unregister('never-existed')).not.toThrow();
  });

  it('CRONREG-007 — onApplicationShutdown stops every job the registrar owns', () => {
    const { registrar, registry } = makeRegistrar(false);
    registrar.register('a', '0 2 * * *', () => {});
    registrar.register('b', '0 4 * * *', () => {});
    registrar.onApplicationShutdown();
    expect(h.jobs.every(j => j.stopped)).toBe(true);
    expect(registry.getCronJobs().size).toBe(0);
    expect(registrar.jobCount).toBe(0);
  });

  it("CRONREG-009 — shutdown tolerates the orchestrator having already cleared the registry", () => {
    // @nestjs/schedule v6 deletes every registry cron job in its own
    // beforeApplicationShutdown, which runs before our onApplicationShutdown.
    const { registrar, registry } = makeRegistrar(false);
    registrar.register('job', '0 2 * * *', () => {});
    registry.deleteCronJob('job'); // the orchestrator's pass
    expect(() => registrar.onApplicationShutdown()).not.toThrow();
    expect(registrar.jobCount).toBe(0);
  });

  it('CRONREG-008 — the disabled path still clears an already-registered name (restart parity)', () => {
    // A dynamic job (auto-backup) restarts by re-registering; if settings turn
    // it off the register call must still drop the old schedule.
    const registry = new SchedulerRegistry();
    let testMode = false;
    const registrar = new CronRegistrarService(registry, { isTest: () => testMode } as RuntimeEnvService);
    registrar.register('job', '0 2 * * *', () => {});
    testMode = true;
    expect(registrar.register('job', '0 4 * * *', () => {})).toBe(false);
    expect(h.jobs[0].stopped).toBe(true);
    expect(registry.getCronJobs().size).toBe(0);
    expect(registrar.jobCount).toBe(0);
  });

  describe('D6 request context (task-2-review.md C3 ruling)', () => {
    // Global context disallowed on purpose — the production setting, like
    // tests/unit/nest/database/request-context.test.ts — so a repository read
    // with no wrapper around it genuinely throws, the way it would outside any
    // HTTP request in production.
    const testDb = createSnapshotTestDb();
    let t: TestOrm;

    beforeEach(async () => {
      t = await createTestOrm(testDb, { allowGlobalContext: false });
    });

    afterEach(async () => {
      await t.close();
    });

    it('CRONREG-010 — without MikroORM injected, a repository read inside onTick throws cannotUseGlobalContext', async () => {
      const registry = new SchedulerRegistry();
      const registrar = new CronRegistrarService(registry, { isTest: () => false } as RuntimeEnvService); // no orm arg
      let caught: unknown;
      registrar.register('job', '0 2 * * *', async () => {
        try {
          await t.orm.em.find(Users, {});
        } catch (e) {
          caught = e;
        }
      });
      await h.jobs[0].onTick();
      expect(caught).toBeInstanceOf(Error);
      expect(String((caught as Error).message)).toMatch(/global (EntityManager|context)/i);
    });

    it('CRONREG-011 — with MikroORM injected, the SAME repository read inside onTick succeeds — the wrapper is load-bearing', async () => {
      const registry = new SchedulerRegistry();
      const registrar = new CronRegistrarService(registry, { isTest: () => false } as RuntimeEnvService, t.orm);
      let result: unknown;
      let caught: unknown;
      registrar.register('job', '0 2 * * *', async () => {
        try {
          result = await t.orm.em.find(Users, {});
        } catch (e) {
          caught = e;
        }
      });
      await h.jobs[0].onTick();
      expect(caught).toBeUndefined();
      expect(Array.isArray(result)).toBe(true);
    });
  });
});
