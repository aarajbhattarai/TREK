import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createUser } from '../../../helpers/factories';
import { BucketList } from '../../../../src/db/entities/BucketList.entity';
import type { BucketListRepository } from '../../../../src/db/repositories/BucketList.repository';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let bucketList: BucketListRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  bucketList = t.repo(BucketList);
});
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

describe('BucketListRepository.listForPublicApi (Plan 4 Task 1, public-api.service.ts::listBucketList)', () => {
  it('BUCKETREPO-001: name/lat/lng/country_code/notes/target_date only, ordered by created_at DESC then id DESC, scoped to the caller', async () => {
    const { user } = createUser(testDb);
    const { user: other } = createUser(testDb, { username: 'other' });
    const insert = testDb.prepare(
      'INSERT INTO bucket_list (user_id, name, lat, lng, country_code, notes, target_date, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    );
    insert.run(user.id, 'Older', 1, 2, 'JP', 'note', null, '2026-01-01T00:00:00.000Z');
    insert.run(user.id, 'Newer', null, null, null, null, '2027-03-01', '2026-02-01T00:00:00.000Z');
    insert.run(other.id, 'Not mine', 9, 9, null, null, null, '2026-03-01T00:00:00.000Z');

    const legacy = testDb.prepare(
      'SELECT name, lat, lng, country_code, notes, target_date FROM bucket_list WHERE user_id = ? ORDER BY created_at DESC, id DESC',
    ).all(user.id);
    const rows = await bucketList.listForPublicApi(user.id);

    expect(rows).toEqual(legacy);
    expect(rows.map((r) => r.name)).toEqual(['Newer', 'Older']);
  });

  it('BUCKETREPO-002: same-instant rows tiebreak on id DESC (the second ORDER BY key)', async () => {
    const { user } = createUser(testDb);
    const insert = testDb.prepare(
      'INSERT INTO bucket_list (user_id, name, created_at) VALUES (?, ?, ?)',
    );
    insert.run(user.id, 'First inserted', '2026-01-01T00:00:00.000Z');
    insert.run(user.id, 'Second inserted', '2026-01-01T00:00:00.000Z');

    const rows = await bucketList.listForPublicApi(user.id);
    expect(rows.map((r) => r.name)).toEqual(['Second inserted', 'First inserted']);
  });

  it('BUCKETREPO-003: empty array for a user with nothing on their list', async () => {
    const { user } = createUser(testDb);
    expect(await bucketList.listForPublicApi(user.id)).toEqual([]);
  });
});
