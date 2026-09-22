import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createUser } from '../../../helpers/factories';
import { Users } from '../../../../src/db/entities/Users.entity';
import type { UsersRepository } from '../../../../src/db/repositories/Users.repository';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let users: UsersRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  users = t.repo(Users) as UsersRepository;
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

describe('UsersRepository', () => {
  it('USERSREPO-001: getEmail reads the stored email, matching SELECT email FROM users WHERE id = ?', async () => {
    const { user } = createUser(testDb, { email: 'someone@example.com' });
    expect(await users.getEmail(user.id)).toBe('someone@example.com');
    const raw = testDb.prepare('SELECT email FROM users WHERE id = ?').get(user.id) as { email: string };
    expect(await users.getEmail(user.id)).toBe(raw.email);
  });

  it('USERSREPO-002: getEmail returns null for a user id that does not exist', async () => {
    expect(await users.getEmail(999999)).toBeNull();
  });

  it('USERSREPO-003: getApiKeyColumn reads maps_api_key, matching SELECT maps_api_key FROM users WHERE id = ?', async () => {
    const { user } = createUser(testDb);
    testDb.prepare('UPDATE users SET maps_api_key = ? WHERE id = ?').run('encrypted-maps-key', user.id);
    expect(await users.getApiKeyColumn(user.id, 'maps_api_key')).toBe('encrypted-maps-key');
  });

  it('USERSREPO-004: getApiKeyColumn reads unsplash_api_key, not the other two columns', async () => {
    const { user } = createUser(testDb);
    testDb.prepare('UPDATE users SET maps_api_key = ?, unsplash_api_key = ?, amap_api_key = ? WHERE id = ?')
      .run('maps-value', 'unsplash-value', 'amap-value', user.id);
    expect(await users.getApiKeyColumn(user.id, 'unsplash_api_key')).toBe('unsplash-value');
  });

  it('USERSREPO-005: getApiKeyColumn reads amap_api_key', async () => {
    const { user } = createUser(testDb);
    testDb.prepare('UPDATE users SET amap_api_key = ? WHERE id = ?').run('amap-value', user.id);
    expect(await users.getApiKeyColumn(user.id, 'amap_api_key')).toBe('amap-value');
  });

  it('USERSREPO-006: getApiKeyColumn returns null for an unset column and for a missing user', async () => {
    const { user } = createUser(testDb);
    expect(await users.getApiKeyColumn(user.id, 'maps_api_key')).toBeNull();
    expect(await users.getApiKeyColumn(999999, 'maps_api_key')).toBeNull();
  });
});
