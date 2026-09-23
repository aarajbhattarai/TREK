/**
 * Unit tests for the memories helpers and access checks — MEM-HELPERS-001 to 020.
 * Moved with the fold: the pure half is nest/memories/memories.helpers.ts, the
 * DB-backed half is MemoriesAccessService.
 * Covers mapDbError, getAlbumIdFromLink, pipeAsset error paths.
 */
import { describe, it, expect, vi, beforeAll, beforeEach, afterAll } from 'vitest';

// ── DB setup ─────────────────────────────────────────────────────────────────

const { testDb, dbMock } = vi.hoisted(() => {
  const Database = require('better-sqlite3');
  const db = new Database(':memory:');
  db.exec('PRAGMA journal_mode = WAL');
  db.exec('PRAGMA foreign_keys = ON');
  db.exec('PRAGMA busy_timeout = 5000');
  const mock = {
    db,
    closeDb: () => {},
    reinitialize: () => {},
    getPlaceWithTags: () => null,
    canAccessTrip: (tripId: any, userId: number) =>
      db.prepare(`
        SELECT t.id FROM trips t
        LEFT JOIN trip_members m ON m.trip_id = t.id AND m.user_id = ?
        WHERE t.id = ? AND (t.user_id = ? OR m.user_id IS NOT NULL)
      `).get(userId, tripId, userId),
    isOwner: (tripId: any, userId: number) =>
      !!db.prepare('SELECT id FROM trips WHERE id = ? AND user_id = ?').get(tripId, userId),
  };
  return { testDb: db, dbMock: mock };
});

vi.mock('../../../src/db/database', () => dbMock);
vi.mock('../../../src/config', () => ({
  JWT_SECRET: 'test-secret',
  ENCRYPTION_KEY: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6a7b8c9d0e1f2a3b4c5d6a7b8c9d0e1f2',
  updateJwtSecret: () => {},
}));

const { mockSafeFetch } = vi.hoisted(() => ({
  mockSafeFetch: vi.fn(),
}));

vi.mock('../../../src/utils/ssrfGuard', () => {
  class SsrfBlockedError extends Error {
    constructor(msg: string) { super(msg); this.name = 'SsrfBlockedError'; }
  }
  return {
    safeFetch: mockSafeFetch,
    SsrfBlockedError,
    checkSsrf: vi.fn(async () => ({ allowed: true, resolvedIp: '1.2.3.4' })),
  };
});

import { createTables } from '../../../src/db/schema';
import { runMigrations } from '../../../src/db/migrations';
import { resetTestDb } from '../../helpers/test-db';
import { createUser, createTrip } from '../../helpers/factories';
import { mapDbError, pipeAsset, type ServiceResult } from '../../../src/nest/memories/memories.helpers';
import { MemoriesAccessService } from '../../../src/nest/memories/memories-access.service';
import { DatabaseService } from '../../../src/nest/database/database.service';
import { Trips } from '../../../src/db/entities/Trips.entity';
import { sharedTestOrm } from '../../helpers/test-uow';

const access = new MemoriesAccessService(new DatabaseService(testDb));
// A typed forwarder, not a `.bind` alias: a bound alias is typed `any`, which
// hides a missing `await` from tsc and from all three lint rules.
const getAlbumIdFromLink = (...a: Parameters<MemoriesAccessService['getAlbumIdFromLink']>) => access.getAlbumIdFromLink(...a);
import { SsrfBlockedError } from '../../../src/utils/ssrfGuard';

beforeAll(async () => {
  createTables(testDb);
  runMigrations(testDb);
  // Plan 3c Task 0b: `access` (and `DatabaseService.prototype.canAccessTrip`
  // it holds a reference to) is constructed at module load, before any
  // `beforeAll` can resolve a real `EntityManager` — patched onto the
  // PROTOTYPE instead, which the already-constructed instance's method
  // lookup still resolves through (`canAccessTrip` is not an own property).
  const em = (await sharedTestOrm(testDb)).em;
  vi.spyOn(DatabaseService.prototype, 'canAccessTrip').mockImplementation(async (tripId, userId) =>
    em.getRepository(Trips).findAccessible(tripId, userId),
  );
});

beforeEach(() => {
  resetTestDb(testDb);
  mockSafeFetch.mockReset();
});

afterAll(() => {
  testDb.close();
});

// ── mapDbError ────────────────────────────────────────────────────────────────

describe('mapDbError', () => {
  it('MEM-HELPERS-001: returns 409 for unique constraint error', async () => {
    const err = new Error('UNIQUE constraint failed: users.email');
    const result = mapDbError(err, 'fallback');
    expect(result.success).toBe(false);
    expect(result.error.status).toBe(409);
    expect(result.error.message).toBe('Resource already exists');
  });

  it('MEM-HELPERS-002: returns 409 for generic constraint error', async () => {
    const err = new Error('constraint violation');
    const result = mapDbError(err, 'fallback');
    expect(result.success).toBe(false);
    expect(result.error.status).toBe(409);
  });

  it('MEM-HELPERS-003: returns 500 with original message for non-constraint error', async () => {
    const err = new Error('Something went wrong');
    const result = mapDbError(err, 'fallback');
    expect(result.success).toBe(false);
    expect(result.error.status).toBe(500);
    expect(result.error.message).toBe('Something went wrong');
  });

  it('MEM-HELPERS-004: returns 500 for generic DB error', async () => {
    const err = new Error('disk I/O error');
    const result = mapDbError(err, 'fallback');
    expect(result.error.status).toBe(500);
  });
});

// ── getAlbumIdFromLink ────────────────────────────────────────────────────────

/**
 * The failure arm of a ServiceResult. The assertions below used to read
 * `result.error` through a `.bind` alias that typed the whole thing `any`; the
 * typed forwarder narrows properly instead of casting.
 */
function failureOf(result: ServiceResult<unknown>): { message: string; status: number } {
  if (!('error' in result)) throw new Error('expected a failing ServiceResult');
  return result.error;
}

describe('getAlbumIdFromLink', () => {
  it('MEM-HELPERS-005: returns 404 when trip access is denied', async () => {
    const result = await getAlbumIdFromLink('9999', 'link-1', 1);
    expect(result.success).toBe(false);
    expect(failureOf(result).status).toBe(404);
  });

  it('MEM-HELPERS-006: returns 404 when album link is not found', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);

    const result = await getAlbumIdFromLink(String(trip.id), 'nonexistent-link', user.id);
    expect(result.success).toBe(false);
    expect(failureOf(result).status).toBe(404);
    expect(failureOf(result).message).toBe('Album link not found');
  });

  it('MEM-HELPERS-007: returns album_id when link exists', async () => {
    const { user } = createUser(testDb);
    const trip = createTrip(testDb, user.id);

    // Insert with auto-increment id (INTEGER PRIMARY KEY)
    const ins = testDb.prepare(
      'INSERT INTO trip_album_links (trip_id, user_id, provider, album_id, album_name) VALUES (?, ?, ?, ?, ?)'
    ).run(trip.id, user.id, 'immich', 'album-123', 'My Album');
    const linkId = ins.lastInsertRowid;

    const result = await getAlbumIdFromLink(String(trip.id), String(linkId), user.id);
    expect(result.success).toBe(true);
    expect((result as any).data).toBe('album-123');
  });
});

// ── pipeAsset ─────────────────────────────────────────────────────────────────

describe('pipeAsset', () => {
  function mockResponse(overrides: Record<string, any> = {}) {
    return {
      status: vi.fn().mockReturnThis(),
      set: vi.fn().mockReturnThis(),
      end: vi.fn(),
      json: vi.fn(),
      headersSent: false,
      ...overrides,
    } as any;
  }

  it('MEM-HELPERS-009: calls response.end() when resp.body is null', async () => {
    mockSafeFetch.mockResolvedValue({
      status: 200,
      headers: { get: vi.fn(() => null) },
      body: null,
    });
    const res = mockResponse();

    await pipeAsset('https://example.com/asset', res);

    expect(res.end).toHaveBeenCalled();
  });

  it('MEM-HELPERS-010: returns 400 when SsrfBlockedError is thrown', async () => {
    mockSafeFetch.mockRejectedValue(new SsrfBlockedError('SSRF blocked'));
    const res = mockResponse({ headersSent: false });

    await pipeAsset('https://internal.example.com/asset', res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ error: expect.any(String) }));
  });

  it('MEM-HELPERS-011: returns 500 for generic fetch error', async () => {
    mockSafeFetch.mockRejectedValue(new Error('Network error'));
    const res = mockResponse({ headersSent: false });

    await pipeAsset('https://example.com/asset', res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Failed to fetch asset' });
  });

  it('MEM-HELPERS-012: calls response.end() when headersSent is true on error', async () => {
    mockSafeFetch.mockRejectedValue(new Error('fail'));
    const res = mockResponse({ headersSent: true });

    await pipeAsset('https://example.com/asset', res);

    expect(res.end).toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  it('MEM-HELPERS-013: sets content-type header when present in response', async () => {
    mockSafeFetch.mockResolvedValue({
      status: 200,
      headers: {
        get: (h: string) => {
          if (h === 'content-type') return 'image/jpeg';
          return null;
        },
      },
      body: null,
    });
    const res = mockResponse();

    await pipeAsset('https://example.com/img.jpg', res);

    expect(res.set).toHaveBeenCalledWith('Content-Type', 'image/jpeg');
    expect(res.end).toHaveBeenCalled();
  });
});

// ── pipeAsset fetch options (#1611) ───────────────────────────────────────────

describe('pipeAsset fetch options (#1611)', () => {
  function mockResponse(overrides: Record<string, any> = {}) {
    return {
      status: vi.fn().mockReturnThis(),
      set: vi.fn().mockReturnThis(),
      end: vi.fn(),
      json: vi.fn(),
      headersSent: false,
      ...overrides,
    } as any;
  }

  it('MEM-HELPERS-021: forwards fetchOptions to safeFetch', async () => {
    mockSafeFetch.mockResolvedValue({
      status: 200,
      headers: { get: vi.fn(() => null) },
      body: null,
    });
    const res = mockResponse();

    await pipeAsset('https://example.com/asset', res, undefined, undefined, undefined, { rejectUnauthorized: false });

    expect(mockSafeFetch).toHaveBeenCalledWith(
      'https://example.com/asset',
      expect.anything(),
      { rejectUnauthorized: false },
    );
  });

  it('MEM-HELPERS-022: omitting fetchOptions leaves safeFetch options undefined', async () => {
    mockSafeFetch.mockResolvedValue({
      status: 200,
      headers: { get: vi.fn(() => null) },
      body: null,
    });
    const res = mockResponse();

    await pipeAsset('https://example.com/asset', res);

    expect(mockSafeFetch.mock.calls[0][2]).toBeUndefined();
  });

  it('MEM-HELPERS-023: logs the underlying error when responding 500', async () => {
    const boom = new Error('unable to verify the first certificate');
    mockSafeFetch.mockRejectedValue(boom);
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const res = mockResponse({ headersSent: false });

    await pipeAsset('https://example.com/asset', res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(errorSpy).toHaveBeenCalledWith(expect.any(String), boom);
    errorSpy.mockRestore();
  });
});

// ---------------------------------------------------------------------------
// The access checks
//
// These decide who may fetch someone else's provider photo, and they had no
// cases at all — they sat outside the measured tree. A provider asset is
// reachable through a trip *or* a journey, which is why neither check can live
// in the trips or the journey domain alone, and why both need pinning here.
// ---------------------------------------------------------------------------

/** A trek_photos row plus the trip_photos link that shares it. */
function shareInTrip(tripId: number, ownerId: number, assetId: string, provider = 'immich', shared = 1): number {
  const photoId = Number(testDb.prepare(
    'INSERT INTO trek_photos (provider, asset_id, owner_id) VALUES (?, ?, ?)'
  ).run(provider, assetId, ownerId).lastInsertRowid);
  testDb.prepare('INSERT INTO trip_photos (trip_id, photo_id, user_id, shared) VALUES (?, ?, ?, ?)')
    .run(tripId, photoId, ownerId, shared);
  return photoId;
}

function makeJourney(userId: number): number {
  return Number(testDb.prepare(
    "INSERT INTO journeys (user_id, title, status, created_at, updated_at) VALUES (?, 'J', 'draft', 0, 0)"
  ).run(userId).lastInsertRowid);
}

describe('canAccessUserPhoto', () => {
  it('MEM-ACCESS-001: the owner always passes, with no lookup needed', async () => {
    expect(await access.canAccessUserPhoto(7, 7, '1', 'asset-1', 'immich')).toBe(true);
  });

  it('MEM-ACCESS-002: a trip member sees an asset shared into that trip', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb, { username: 'member' });
    const trip = createTrip(testDb, owner.id);
    testDb.prepare('INSERT INTO trip_members (trip_id, user_id) VALUES (?, ?)').run(trip.id, member.id);
    shareInTrip(trip.id, owner.id, 'asset-shared');

    expect(await access.canAccessUserPhoto(member.id, owner.id, String(trip.id), 'asset-shared', 'immich')).toBe(true);
  });

  it('MEM-ACCESS-003: an unshared asset stays private even inside the same trip', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb, { username: 'member' });
    const trip = createTrip(testDb, owner.id);
    testDb.prepare('INSERT INTO trip_members (trip_id, user_id) VALUES (?, ?)').run(trip.id, member.id);
    shareInTrip(trip.id, owner.id, 'asset-private', 'immich', 0);

    expect(await access.canAccessUserPhoto(member.id, owner.id, String(trip.id), 'asset-private', 'immich')).toBe(false);
  });

  it('MEM-ACCESS-004: a stranger is refused even for a shared asset', async () => {
    const { user: owner } = createUser(testDb);
    const { user: stranger } = createUser(testDb, { username: 'stranger' });
    const trip = createTrip(testDb, owner.id);
    shareInTrip(trip.id, owner.id, 'asset-shared');

    expect(await access.canAccessUserPhoto(stranger.id, owner.id, String(trip.id), 'asset-shared', 'immich')).toBe(false);
  });

  it('MEM-ACCESS-005: the provider is part of the match — same asset id, other provider, no access', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb, { username: 'member' });
    const trip = createTrip(testDb, owner.id);
    testDb.prepare('INSERT INTO trip_members (trip_id, user_id) VALUES (?, ?)').run(trip.id, member.id);
    shareInTrip(trip.id, owner.id, 'same-id', 'immich');

    expect(await access.canAccessUserPhoto(member.id, owner.id, String(trip.id), 'same-id', 'synologyphotos')).toBe(false);
  });

  it('MEM-ACCESS-006: tripId "0" routes through journeys — a contributor passes', async () => {
    const { user: owner } = createUser(testDb);
    const { user: contributor } = createUser(testDb, { username: 'contrib' });
    const journeyId = makeJourney(owner.id);
    const photoId = Number(testDb.prepare(
      "INSERT INTO trek_photos (provider, asset_id, owner_id) VALUES ('immich', 'j-asset', ?)"
    ).run(owner.id).lastInsertRowid);
    testDb.prepare('INSERT INTO journey_photos (journey_id, photo_id, created_at) VALUES (?, ?, 0)').run(journeyId, photoId);
    testDb.prepare("INSERT INTO journey_contributors (journey_id, user_id, role, added_at) VALUES (?, ?, 'editor', 0)").run(journeyId, contributor.id);

    expect(await access.canAccessUserPhoto(contributor.id, owner.id, '0', 'j-asset', 'immich')).toBe(true);
  });

  it('MEM-ACCESS-007: tripId "0" refuses someone with no journey link', async () => {
    const { user: owner } = createUser(testDb);
    const { user: stranger } = createUser(testDb, { username: 'stranger' });
    const journeyId = makeJourney(owner.id);
    const photoId = Number(testDb.prepare(
      "INSERT INTO trek_photos (provider, asset_id, owner_id) VALUES ('immich', 'j-asset-2', ?)"
    ).run(owner.id).lastInsertRowid);
    testDb.prepare('INSERT INTO journey_photos (journey_id, photo_id, created_at) VALUES (?, ?, 0)').run(journeyId, photoId);

    expect(await access.canAccessUserPhoto(stranger.id, owner.id, '0', 'j-asset-2', 'immich')).toBe(false);
  });

  it('MEM-ACCESS-008: tripId "0" refuses an asset that is in no journey at all', async () => {
    const { user: owner } = createUser(testDb);
    const { user: other } = createUser(testDb, { username: 'other' });
    expect(await access.canAccessUserPhoto(other.id, owner.id, '0', 'not-in-any-journey', 'immich')).toBe(false);
  });
});

describe('canAccessTrekPhoto', () => {
  it('MEM-ACCESS-010: an unknown photo id is refused, not treated as public', async () => {
    expect(await access.canAccessTrekPhoto(1, 999999)).toBe(false);
  });

  it('MEM-ACCESS-011: the owner passes', async () => {
    const { user } = createUser(testDb);
    const photoId = Number(testDb.prepare(
      "INSERT INTO trek_photos (provider, asset_id, owner_id) VALUES ('immich', 'own', ?)"
    ).run(user.id).lastInsertRowid);

    expect(await access.canAccessTrekPhoto(user.id, photoId)).toBe(true);
  });

  it('MEM-ACCESS-012: a trip member passes for a shared photo, a stranger does not', async () => {
    const { user: owner } = createUser(testDb);
    const { user: member } = createUser(testDb, { username: 'member' });
    const { user: stranger } = createUser(testDb, { username: 'stranger' });
    const trip = createTrip(testDb, owner.id);
    testDb.prepare('INSERT INTO trip_members (trip_id, user_id) VALUES (?, ?)').run(trip.id, member.id);
    const photoId = shareInTrip(trip.id, owner.id, 'trek-shared');

    expect(await access.canAccessTrekPhoto(member.id, photoId)).toBe(true);
    expect(await access.canAccessTrekPhoto(stranger.id, photoId)).toBe(false);
  });

  it('MEM-ACCESS-013: the trip owner passes without a trip_members row', async () => {
    const { user: owner } = createUser(testDb);
    const { user: uploader } = createUser(testDb, { username: 'uploader' });
    const trip = createTrip(testDb, owner.id);
    const photoId = shareInTrip(trip.id, uploader.id, 'owner-path');

    expect(await access.canAccessTrekPhoto(owner.id, photoId)).toBe(true);
  });

  it('MEM-ACCESS-014: a journey contributor passes', async () => {
    const { user: owner } = createUser(testDb);
    const { user: contributor } = createUser(testDb, { username: 'contrib' });
    const journeyId = makeJourney(owner.id);
    const photoId = Number(testDb.prepare(
      "INSERT INTO trek_photos (provider, asset_id, owner_id) VALUES ('immich', 'j-trek', ?)"
    ).run(owner.id).lastInsertRowid);
    testDb.prepare('INSERT INTO journey_photos (journey_id, photo_id, created_at) VALUES (?, ?, 0)').run(journeyId, photoId);
    testDb.prepare("INSERT INTO journey_contributors (journey_id, user_id, role, added_at) VALUES (?, ?, 'editor', 0)").run(journeyId, contributor.id);

    expect(await access.canAccessTrekPhoto(contributor.id, photoId)).toBe(true);
  });

  it('MEM-ACCESS-015: an ownerless local upload is reachable only through its journey', async () => {
    const { user: owner } = createUser(testDb);
    const { user: outsider } = createUser(testDb, { username: 'outsider' });
    const journeyId = makeJourney(owner.id);
    const photoId = Number(testDb.prepare(
      "INSERT INTO trek_photos (provider, file_path) VALUES ('local', 'journey/x.jpg')"
    ).run().lastInsertRowid);
    testDb.prepare('INSERT INTO journey_photos (journey_id, photo_id, created_at) VALUES (?, ?, 0)').run(journeyId, photoId);

    expect(await access.canAccessTrekPhoto(owner.id, photoId)).toBe(true);
    expect(await access.canAccessTrekPhoto(outsider.id, photoId)).toBe(false);
  });

  it('MEM-ACCESS-016: an ownerless local upload in no journey is reachable by nobody', async () => {
    const { user } = createUser(testDb);
    const photoId = Number(testDb.prepare(
      "INSERT INTO trek_photos (provider, file_path) VALUES ('local', 'orphan.jpg')"
    ).run().lastInsertRowid);

    expect(await access.canAccessTrekPhoto(user.id, photoId)).toBe(false);
  });
});
