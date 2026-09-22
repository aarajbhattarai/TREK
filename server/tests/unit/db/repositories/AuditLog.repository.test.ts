import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createUser } from '../../../helpers/factories';
import { AuditLog } from '../../../../src/db/entities/AuditLog.entity';
import type { AuditLogRepository } from '../../../../src/db/repositories/AuditLog.repository';
import { DB_TIMESTAMP_RE } from '../../../../src/db/types';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let auditLog: AuditLogRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  auditLog = t.repo(AuditLog) as AuditLogRepository;
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

describe('AuditLogRepository', () => {
  it('AUDITREPO-001: insert writes the legacy column set, matching the SELECT * row exactly', async () => {
    const { user } = createUser(testDb);
    await auditLog.insertEntry({ user_id: user.id, action: 'trip.create', resource: 'trip', details: '{"title":"Rome"}', ip: '1.2.3.4' });
    const row = testDb.prepare('SELECT * FROM audit_log').get() as { id: number; created_at: string };
    expect(row).toStrictEqual({
      id: row.id,
      created_at: row.created_at,
      user_id: user.id,
      action: 'trip.create',
      resource: 'trip',
      details: '{"title":"Rome"}',
      ip: '1.2.3.4',
    });
  });

  it('AUDITREPO-002: created_at is left to the column default, as text, in the YYYY-MM-DD HH:MM:SS shape', async () => {
    const { user } = createUser(testDb);
    await auditLog.insertEntry({ user_id: user.id, action: 'user.login', resource: null, details: null, ip: null });
    const stored = testDb.prepare('SELECT created_at, typeof(created_at) AS kind FROM audit_log').get() as { created_at: string; kind: string };
    expect(stored.kind).toBe('text');
    expect(stored.created_at).toMatch(DB_TIMESTAMP_RE);
  });

  it('AUDITREPO-003: a null user writes a null user_id twin, not a foreign-key value', async () => {
    await auditLog.insertEntry({ user_id: null, action: 'user.login', resource: null, details: null, ip: null });
    const row = testDb.prepare('SELECT user_id FROM audit_log').get() as { user_id: number | null };
    expect(row.user_id).toBeNull();
  });

  it('AUDITREPO-004: null resource/details/ip are stored as NULL, not the string "null"', async () => {
    const { user } = createUser(testDb);
    await auditLog.insertEntry({ user_id: user.id, action: 'user.login', resource: null, details: null, ip: null });
    const row = testDb.prepare('SELECT resource, details, ip FROM audit_log').get();
    expect(row).toEqual({ resource: null, details: null, ip: null });
  });

  it('AUDITREPO-005: resolves without returning a value — no id or row is read back', async () => {
    const { user } = createUser(testDb);
    await expect(
      auditLog.insertEntry({ user_id: user.id, action: 'user.login', resource: null, details: null, ip: null }),
    ).resolves.toBeUndefined();
  });
});
