/**
 * 3h L3 (Plan 4 Task 8b-2 carry): AirTrail's stored API key must be at-rest
 * ciphertext, never plaintext — the same `enc:v1:` envelope doc-sync secrets
 * and storage secrets use (`apiKeyCrypto.ts`). `UsersRepository` never calls
 * the crypto itself (ATC1-5's own docstrings on `Users.repository.ts`
 * explicitly rule that out) — `AirtrailService#saveSettings` is production's
 * only caller of `maybe_encrypt_api_key` before `setAirtrailSettingsWithKey`
 * persists the result, so this test calls the crypto function directly, the
 * same way that service does, and reads the raw column back the way
 * `storage-secrets.test.ts`'s `encryptStorageSecrets` pin does for the S3
 * credential column — a stubbed crypto function would let a regression that
 * stores the key in plaintext pass every existing AirTrail test, none of
 * which reads the raw `users` row.
 */
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createUser } from '../../../helpers/factories';
import { Users } from '../../../../src/db/entities/Users.entity';
import type { UsersRepository } from '../../../../src/db/repositories/Users.repository';
import { decrypt_api_key, maybe_encrypt_api_key } from '../../../../src/nest/common/crypto/apiKeyCrypto';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let usersRepo: UsersRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  usersRepo = t.repo(Users);
});
beforeEach(() => {
  resetTestDb(testDb);
  t.clear();
});
afterAll(async () => {
  await t.close();
  testDb.close();
});

describe('AirTrail API key at-rest encryption (3h L3)', () => {
  it('setAirtrailSettingsWithKey stores enc:v1: ciphertext (never the plaintext key), and it round-trips through decrypt_api_key', async () => {
    const { user } = createUser(testDb);
    const plaintext = 'airtrail-plain-key-9f3c';

    await usersRepo.setAirtrailSettingsWithKey(user.id, 'https://airtrail.example', maybe_encrypt_api_key(plaintext) as string, 0, 1);

    const raw = testDb.prepare('SELECT airtrail_api_key FROM users WHERE id = ?').get(user.id) as { airtrail_api_key: string };
    expect(raw.airtrail_api_key.startsWith('enc:v1:')).toBe(true);
    expect(raw.airtrail_api_key).not.toBe(plaintext);
    expect(raw.airtrail_api_key).not.toContain(plaintext);

    const row = await usersRepo.getAirtrailConnRow(user.id);
    expect(decrypt_api_key(row!.airtrail_api_key)).toBe(plaintext);
  });

  it('clearAirtrailApiKey leaves no ciphertext or plaintext residue behind', async () => {
    const { user } = createUser(testDb);
    await usersRepo.setAirtrailSettingsWithKey(user.id, 'https://airtrail.example', maybe_encrypt_api_key('another-key') as string, 0, 1);

    await usersRepo.clearAirtrailApiKey(user.id);

    const raw = testDb.prepare('SELECT airtrail_api_key FROM users WHERE id = ?').get(user.id) as { airtrail_api_key: string | null };
    expect(raw.airtrail_api_key).toBeNull();
  });
});
