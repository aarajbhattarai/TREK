/**
 * Doc-sync webhook request-context ratchet (Plan 3h Task 5, R9).
 *
 * `DocSyncWebhookController#schedule()`'s `setTimeout` callback runs fully
 * detached from the HTTP request that triggered it: `nudge()` already
 * answered `{received:true}` before the debounce window
 * (`WEBHOOK_NUDGE_DEBOUNCE_SECONDS`) elapses, so whatever request-scoped
 * `EntityManager` fork the triggering request held is long gone by the time
 * the timer body runs. Per 3f's own R3 precedent (measured: `AsyncLocalStorage`
 * survives a detached chain intact in this codebase today), the timer body
 * now forks its OWN fresh request context via `withRequestContext` — insurance,
 * not a fix for an observed failure.
 *
 * This test drives the REAL `DocSyncWebhookController.nudge()` (not a
 * hand-built double) through a real HTTP request against a compiled
 * `buildApp()` boot — `nudge()` itself needs the per-request `EntityManager`
 * fork Nest's own middleware provides, so only the schedule()`'s DETACHED
 * TIMER body (which runs from a genuinely bare context, after the response
 * has already gone out) is what this test's assertion is about — and asserts
 * that body never logs `cannotUseGlobalContext` — the same
 * regression class `boot-sweeps-request-context.test.ts` guards for the seven
 * cron boot sweeps and `storage-health-notifier-request-context.test.ts`
 * guards for Plan 3f's own R3 listener.
 */
import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import type { INestApplication } from '@nestjs/common';
import request from 'supertest';
import type { Server } from 'http';

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
import { createUser, createTrip } from '../helpers/factories';
import { WEBHOOK_NUDGE_DEBOUNCE_SECONDS } from '../../src/nest/doc-sync/doc-sync.constants';

describe('DocSyncWebhookController#schedule() runs its detached timer body inside its own request context', () => {
  let app: INestApplication;
  let server: Server;
  let token: string;

  beforeAll(async () => {
    app = await buildApp();
    server = app.getHttpServer();

    // The addon gate and the provider both have to be genuinely on: nudge()
    // returns before ever scheduling anything otherwise (isSwitchedOff's own
    // early-out), and this ratchet needs schedule() to actually fire.
    testDb.exec("UPDATE addons SET enabled = 1 WHERE id = 'documents'");
    testDb.exec("UPDATE document_providers SET enabled = 1 WHERE id = 'paperless'");

    const owner = createUser(testDb, { username: 'docsync-webhook-ctx', email: 'docsync-webhook-ctx@test.local' }).user;
    const trip = createTrip(testDb, owner.id, { title: 'Japan' });
    const connInfo = testDb
      .prepare(
        `INSERT INTO document_connections (trip_id, provider_id, owner_user_id, base_url, secrets, settings)
         VALUES (?, 'paperless', ?, 'https://paperless.example.com', NULL, '{}')`,
      )
      .run(trip.id, owner.id);
    token = 'webhook-ctx-ratchet-token';
    testDb
      .prepare(
        `INSERT INTO trip_document_links
           (trip_id, connection_id, provider_id, remote_scope_key, remote_label, direction, delete_policy,
            conflict_policy, sync_enabled, webhook_token, created_by)
         VALUES (?, ?, 'paperless', 'tag:1', 'Japan', 'both', 'unlink', 'manual', 1, ?, ?)`,
      )
      .run(trip.id, connInfo.lastInsertRowid, token, owner.id);
  });

  afterAll(async () => {
    await app.close();
    testDb.close();
  });

  it(
    'WEBHOOK-CTX-001: nudging from a bare (non-request) context never logs cannotUseGlobalContext once the debounce timer fires',
    async () => {
      const errSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      try {
        // A REAL HTTP request through the compiled app — not a hand-built
        // double, and not a direct method call either: `nudge()` itself
        // needs the per-request `EntityManager` fork Nest's own middleware
        // provides (its own `getLinkByToken` read would otherwise throw
        // `cannotUseGlobalContext` before ever reaching `schedule()` — this
        // is what a direct `app.get(...).nudge(...)` call, tried first,
        // actually surfaced: confirmation this test needs the real request
        // path, not a shortcut around it). Only the DETACHED TIMER body
        // that fires after this response is the "bare context" under test.
        const res = await request(server).post(`/api/docsync/webhook/${token}`).send({});
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ received: true });

        // Let the real debounce timer fire, then drain the microtasks its
        // async body queues (real timers here — the detached body is a
        // genuine `setTimeout`, not something fake timers can fast-forward
        // through a real HTTP-free integration boot safely).
        await new Promise((resolve) => setTimeout(resolve, (WEBHOOK_NUDGE_DEBOUNCE_SECONDS + 2) * 1000));

        const suspicious = errSpy.mock.calls
          .map((args) => args.map(String).join(' '))
          .filter((line) => /cannotUseGlobalContext|global EntityManager/i.test(line));
        expect(suspicious).toEqual([]);
      } finally {
        errSpy.mockRestore();
      }
    },
    20_000,
  );
});
