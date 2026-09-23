/**
 * Parity guards for the Plan 3c Task 0a async sweep.
 *
 * `canAccessTrip`, `isOwner`, `rosterUserIds` and `getPlaceWithTags`
 * (`src/db/database.ts` + their `DatabaseService` delegations) went from
 * synchronous to `async` in that task, with every caller updated to `await`
 * them. These four tests each drive a REAL guarded route through the real
 * `buildApp()` DI graph — one per primitive — as owner / member / non-member
 * / anonymous, and pin the legacy status + body so a later task (0b: moving
 * the bodies onto `TripsRepository`) cannot silently change behaviour.
 */
import { describe, it, expect, vi, beforeAll, beforeEach, afterAll } from 'vitest';
import request from 'supertest';
import type { Application } from 'express';
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
vi.mock('../../src/websocket', () => ({ broadcast: vi.fn(), broadcastToUser: vi.fn() }));

import { db as testDb } from '../../src/db/database';
import { buildApp } from '../../src/bootstrap';
import { resetTestDb, resetRateLimits } from '../helpers/test-db';
import { createUser, createTrip, createDay, createPlace, addTripMember, createDayAssignment } from '../helpers/factories';
import { authCookie, generateToken } from '../helpers/auth';
import { closeMcpSessions } from '../../src/mcp/index';

let nestApp: INestApplication;
let app: Application;

beforeAll(async () => {
  nestApp = await buildApp();
  app = nestApp.getHttpAdapter().getInstance();
});
beforeEach(() => {
  resetTestDb(testDb);
  resetRateLimits(nestApp);
});
afterAll(async () => {
  closeMcpSessions();
  await nestApp.close();
  testDb.close();
});

// ─────────────────────────────────────────────────────────────────────────
// canAccessTrip — TripAccessGuard, exercised by GET /api/trips/:tripId/days
// ─────────────────────────────────────────────────────────────────────────

describe('canAccessTrip (async) — TripAccessGuard on GET /api/trips/:tripId/days', () => {
  it('PRIM-CAT-001 — owner: 200 with the trip days', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id, { start_date: '2026-06-01', end_date: '2026-06-02' });

    const res = await request(app).get(`/api/trips/${trip.id}/days`).set('Cookie', authCookie(owner.id));
    expect(res.status).toBe(200);
    expect(res.body.days).toHaveLength(2);
  });

  it('PRIM-CAT-002 — member: 200 with the trip days', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb);
    const trip = createTrip(testDb, owner.id, { start_date: '2026-06-01', end_date: '2026-06-01' });
    addTripMember(testDb, trip.id, member.id);

    const res = await request(app).get(`/api/trips/${trip.id}/days`).set('Cookie', authCookie(member.id));
    expect(res.status).toBe(200);
    expect(res.body.days).toHaveLength(1);
  });

  it('PRIM-CAT-003 — non-member: 404 { error: "Trip not found" } — never 403 (never confirms the id exists)', async () => {
    const { user: owner } = createUser(testDb);
    const { user: stranger } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);

    const res = await request(app).get(`/api/trips/${trip.id}/days`).set('Cookie', authCookie(stranger.id));
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'Trip not found' });
  });

  it('PRIM-CAT-004 — anonymous: 401', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);

    const res = await request(app).get(`/api/trips/${trip.id}/days`);
    expect(res.status).toBe(401);
  });
});

// ─────────────────────────────────────────────────────────────────────────
// isOwner — the delete_trip MCP tool (its only caller anywhere)
// ─────────────────────────────────────────────────────────────────────────

describe('isOwner (async) — the delete_trip MCP tool', () => {
  async function mcpSession(userId: number): Promise<string> {
    const res = await request(app)
      .post('/mcp')
      .set('Authorization', `Bearer ${generateToken(userId)}`)
      .set('Accept', 'application/json, text/event-stream')
      .send({ jsonrpc: '2.0', method: 'initialize', id: 1, params: { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'test', version: '1' } } });
    expect(res.status).toBe(200);
    const sessionId = res.headers['mcp-session-id'];
    expect(sessionId).toBeTruthy();
    return sessionId as string;
  }

  function deleteTripBody(tripId: number) {
    return { jsonrpc: '2.0', method: 'tools/call', id: 2, params: { name: 'delete_trip', arguments: { tripId } } };
  }

  /** /mcp answers as SSE; the JSON-RPC payload rides a `data:` line. */
  function toolResult(text: string): { isError?: boolean; content?: { type: string; text: string }[] } {
    const line = text.split('\n').find((l) => l.startsWith('data:'));
    if (!line) throw new Error(`no SSE data frame in: ${text.slice(0, 200)}`);
    return (JSON.parse(line.slice('data:'.length).trim()) as { result?: { isError?: boolean; content?: { type: string; text: string }[] } }).result ?? {};
  }

  beforeEach(() => {
    testDb.prepare("UPDATE addons SET enabled = 1 WHERE id = 'mcp'").run();
  });

  it('PRIM-ISOWN-001 — owner: 200, deletes the trip', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    const sessionId = await mcpSession(owner.id);

    const res = await request(app)
      .post('/mcp')
      .set('Authorization', `Bearer ${generateToken(owner.id)}`)
      .set('mcp-session-id', sessionId)
      .set('Accept', 'application/json, text/event-stream')
      .send(deleteTripBody(trip.id));

    expect(res.status).toBe(200);
    const result = toolResult(res.text);
    expect(result.isError).toBeFalsy();
    expect(JSON.parse(result.content?.[0]?.text ?? '{}')).toEqual({ success: true, tripId: trip.id });
    expect(testDb.prepare('SELECT id FROM trips WHERE id = ?').get(trip.id)).toBeUndefined();
  });

  it('PRIM-ISOWN-002 — member (not owner): refused with the same "no access" message as a stranger, trip untouched', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    addTripMember(testDb, trip.id, member.id);
    const sessionId = await mcpSession(member.id);

    const res = await request(app)
      .post('/mcp')
      .set('Authorization', `Bearer ${generateToken(member.id)}`)
      .set('mcp-session-id', sessionId)
      .set('Accept', 'application/json, text/event-stream')
      .send(deleteTripBody(trip.id));

    expect(res.status).toBe(200);
    const result = toolResult(res.text);
    expect(result.isError).toBe(true);
    expect(result.content?.[0]?.text).toBe('Trip not found or access denied.');
    expect(testDb.prepare('SELECT id FROM trips WHERE id = ?').get(trip.id)).toBeDefined();
  });

  it('PRIM-ISOWN-003 — non-member/stranger: the identical refusal isOwner gives a member, trip untouched', async () => {
    const { user: owner } = createUser(testDb);
    const { user: stranger } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    const sessionId = await mcpSession(stranger.id);

    const res = await request(app)
      .post('/mcp')
      .set('Authorization', `Bearer ${generateToken(stranger.id)}`)
      .set('mcp-session-id', sessionId)
      .set('Accept', 'application/json, text/event-stream')
      .send(deleteTripBody(trip.id));

    expect(res.status).toBe(200);
    const result = toolResult(res.text);
    expect(result.isError).toBe(true);
    expect(result.content?.[0]?.text).toBe('Trip not found or access denied.');
    expect(testDb.prepare('SELECT id FROM trips WHERE id = ?').get(trip.id)).toBeDefined();
  });

  it('PRIM-ISOWN-004 — anonymous: 401, no session established', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);

    const res = await request(app).post('/mcp').send(deleteTripBody(trip.id));
    expect(res.status).toBe(401);
  });
});

// ─────────────────────────────────────────────────────────────────────────
// rosterUserIds — PUT /api/trips/:tripId/assignments/:id/participants
// ─────────────────────────────────────────────────────────────────────────

describe('rosterUserIds (async) — PUT .../assignments/:id/participants', () => {
  it('PRIM-ROSTER-001 — owner: 200, off-roster ids are dropped silently (no 400)', async () => {
    const { user: owner } = createUser(testDb);
    const { user: outsider } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const assignment = createDayAssignment(testDb, day.id, place.id);

    const res = await request(app)
      .put(`/api/trips/${trip.id}/assignments/${assignment.id}/participants`)
      .set('Cookie', authCookie(owner.id))
      .send({ user_ids: [owner.id, outsider.id] });

    expect(res.status).toBe(200);
    expect(res.body.participants.map((p: { user_id: number }) => p.user_id).sort()).toEqual([owner.id]);
  });

  it('PRIM-ROSTER-002 — member with edit rights: 200, keeps only roster ids (owner + member)', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb);
    const { user: outsider } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    addTripMember(testDb, trip.id, member.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const assignment = createDayAssignment(testDb, day.id, place.id);

    const res = await request(app)
      .put(`/api/trips/${trip.id}/assignments/${assignment.id}/participants`)
      .set('Cookie', authCookie(member.id))
      .send({ user_ids: [owner.id, member.id, outsider.id] });

    expect(res.status).toBe(200);
    expect(res.body.participants.map((p: { user_id: number }) => p.user_id).sort((a: number, b: number) => a - b)).toEqual([owner.id, member.id].sort((a, b) => a - b));
  });

  it('PRIM-ROSTER-003 — non-member: 404 { error: "Trip not found" }, guard refuses before rosterUserIds runs', async () => {
    const { user: owner } = createUser(testDb);
    const { user: stranger } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const assignment = createDayAssignment(testDb, day.id, place.id);

    const res = await request(app)
      .put(`/api/trips/${trip.id}/assignments/${assignment.id}/participants`)
      .set('Cookie', authCookie(stranger.id))
      .send({ user_ids: [owner.id] });

    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'Trip not found' });
  });

  it('PRIM-ROSTER-004 — anonymous: 401', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    const day = createDay(testDb, trip.id);
    const place = createPlace(testDb, trip.id);
    const assignment = createDayAssignment(testDb, day.id, place.id);

    const res = await request(app)
      .put(`/api/trips/${trip.id}/assignments/${assignment.id}/participants`)
      .send({ user_ids: [owner.id] });

    expect(res.status).toBe(401);
  });
});

// ─────────────────────────────────────────────────────────────────────────
// getPlaceWithTags — GET /api/trips/:tripId/places/:id
// ─────────────────────────────────────────────────────────────────────────

describe('getPlaceWithTags (async) — GET /api/trips/:tripId/places/:id', () => {
  it('PRIM-GPWT-001 — owner: 200 with the hydrated place (category/tags/ratings shape)', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    const place = createPlace(testDb, trip.id, { name: 'Eiffel Tower' });

    const res = await request(app).get(`/api/trips/${trip.id}/places/${place.id}`).set('Cookie', authCookie(owner.id));
    expect(res.status).toBe(200);
    // The mocked db/database module's getPlaceWithTags stand-in (tests/helpers/db-mock.ts)
    // only carries category + tags, not the ratings aggregate — matched here, not the
    // production shape (§4 of the test-db.ts header explains the mock/real split).
    expect(res.body.place).toMatchObject({
      id: place.id,
      name: 'Eiffel Tower',
      tags: [],
    });
    expect(res.body.place).toHaveProperty('category');
  });

  it('PRIM-GPWT-002 — member: 200 with the same hydrated place', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    addTripMember(testDb, trip.id, member.id);
    const place = createPlace(testDb, trip.id);

    const res = await request(app).get(`/api/trips/${trip.id}/places/${place.id}`).set('Cookie', authCookie(member.id));
    expect(res.status).toBe(200);
    expect(res.body.place.id).toBe(place.id);
  });

  it('PRIM-GPWT-003 — non-member: 404 { error: "Trip not found" } from the guard, before getPlaceWithTags runs', async () => {
    const { user: owner } = createUser(testDb);
    const { user: stranger } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    const place = createPlace(testDb, trip.id);

    const res = await request(app).get(`/api/trips/${trip.id}/places/${place.id}`).set('Cookie', authCookie(stranger.id));
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'Trip not found' });
  });

  it('PRIM-GPWT-004 — anonymous: 401', async () => {
    const { user: owner } = createUser(testDb);
    const trip = createTrip(testDb, owner.id);
    const place = createPlace(testDb, trip.id);

    const res = await request(app).get(`/api/trips/${trip.id}/places/${place.id}`);
    expect(res.status).toBe(401);
  });
});
