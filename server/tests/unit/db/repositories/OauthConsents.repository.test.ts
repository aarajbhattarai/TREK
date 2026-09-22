import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createUser } from '../../../helpers/factories';
import { OauthConsents } from '../../../../src/db/entities/OauthConsents.entity';
import type { OauthConsentsRepository } from '../../../../src/db/repositories/OauthConsents.repository';
import { UnitOfWork } from '../../../../src/nest/database/unit-of-work';
import { withRequestContext } from '../../../../src/nest/database/request-context';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let consents: OauthConsentsRepository;
let uow: UnitOfWork;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  consents = t.repo(OauthConsents);
  uow = new UnitOfWork(t.em);
});
beforeEach(() => { resetTestDb(testDb); t.clear(); testDb.exec('DELETE FROM oauth_consents'); testDb.exec('DELETE FROM oauth_clients'); });
afterAll(async () => { await t.close(); testDb.close(); });

function seedClient(userId: number, clientId: string): void {
  testDb.prepare(
    `INSERT INTO oauth_clients (id, user_id, name, client_id, client_secret_hash, redirect_uris, allowed_scopes) VALUES (?, ?, ?, ?, ?, '[]', '[]')`,
  ).run(`row-${clientId}`, userId, 'C', clientId, 'hash');
}

describe('OauthConsentsRepository', () => {
  describe('findScopes (OA11)', () => {
    it('OAUTHCONSENTREPO-001: null when no consent has been granted', async () => {
      const { user } = createUser(testDb);
      seedClient(user.id, 'proto-1');
      expect(await consents.findScopes('proto-1', user.id)).toBeNull();
    });

    it('OAUTHCONSENTREPO-002: returns the stored scopes JSON text', async () => {
      const { user } = createUser(testDb);
      seedClient(user.id, 'proto-2');
      testDb.prepare(`INSERT INTO oauth_consents (client_id, user_id, scopes) VALUES (?, ?, ?)`).run('proto-2', user.id, '["trips:read"]');
      expect(await consents.findScopes('proto-2', user.id)).toEqual({ scopes: '["trips:read"]' });
    });
  });

  describe('upsertGrant (OA12)', () => {
    it('OAUTHCONSENTREPO-003: inserts a new row exactly as the legacy INSERT would', async () => {
      const { user } = createUser(testDb);
      seedClient(user.id, 'proto-3');
      await consents.upsertGrant('proto-3', user.id, '["a"]');
      const row = testDb.prepare('SELECT client_id, user_id, scopes FROM oauth_consents WHERE client_id = ? AND user_id = ?').get('proto-3', user.id);
      expect(row).toEqual({ client_id: 'proto-3', user_id: user.id, scopes: '["a"]' });
    });

    it('OAUTHCONSENTREPO-004: on an existing (client, user) it replaces the row in place — no duplicate, matching ON CONFLICT(client_id, user_id) DO UPDATE', async () => {
      const { user } = createUser(testDb);
      seedClient(user.id, 'proto-4');
      await consents.upsertGrant('proto-4', user.id, '["a"]');
      await consents.upsertGrant('proto-4', user.id, '["a","b"]');
      const rows = testDb.prepare('SELECT scopes FROM oauth_consents WHERE client_id = ? AND user_id = ?').all('proto-4', user.id);
      expect(rows).toHaveLength(1);
      expect((rows[0] as { scopes: string }).scopes).toBe('["a","b"]');
    });

    it('OAUTHCONSENTREPO-005: updated_at is bumped on every call, insert or merge alike (unconditional, matching INSERT OR REPLACE)', async () => {
      const { user } = createUser(testDb);
      seedClient(user.id, 'proto-5');
      await consents.upsertGrant('proto-5', user.id, '["a"]');
      const first = testDb.prepare('SELECT updated_at FROM oauth_consents WHERE client_id = ? AND user_id = ?').get('proto-5', user.id) as { updated_at: string };
      testDb.exec(`UPDATE oauth_consents SET updated_at = '2000-01-01 00:00:00' WHERE client_id = 'proto-5'`);
      await consents.upsertGrant('proto-5', user.id, '["a","b"]');
      const second = testDb.prepare('SELECT updated_at FROM oauth_consents WHERE client_id = ? AND user_id = ?').get('proto-5', user.id) as { updated_at: string };
      expect(second.updated_at).not.toBe('2000-01-01 00:00:00');
      expect(first.updated_at).toBeTruthy();
    });

    it('OAUTHCONSENTREPO-006: the same client scoped by different users stores two separate rows, not a collision', async () => {
      const { user: a } = createUser(testDb);
      const { user: b } = createUser(testDb);
      seedClient(a.id, 'proto-6');
      await consents.upsertGrant('proto-6', a.id, '["a"]');
      await consents.upsertGrant('proto-6', b.id, '["b"]');
      expect(await consents.findScopes('proto-6', a.id)).toEqual({ scopes: '["a"]' });
      expect(await consents.findScopes('proto-6', b.id)).toEqual({ scopes: '["b"]' });
    });
  });

  describe('identity-map isolation (program RULING, D-shape)', () => {
    it('OAUTHCONSENTREPO-007: findScopes leaves no managed entity behind — a raw write to the same row on the same transaction connection survives the transaction\'s closing flush', async () => {
      const { user } = createUser(testDb);
      seedClient(user.id, 'proto-7');
      testDb.prepare(`INSERT INTO oauth_consents (client_id, user_id, scopes) VALUES (?, ?, ?)`).run('proto-7', user.id, '["a"]');

      await withRequestContext(t.orm, async () => {
        await uow.transactional(async () => {
          // Projection: the only read shape this repository has.
          await consents.findScopes('proto-7', user.id);
          // A write bypassing the ORM entirely, on the SAME single SQLite
          // connection the open transaction holds (D3/D6) — the shape any
          // nativeUpdate write from elsewhere in the same request takes. If
          // findScopes had left a managed entity in the identity map (the
          // B1 mechanism), the transaction's closing flush would try to
          // write the READ snapshot back over this change.
          testDb.prepare('UPDATE oauth_consents SET scopes = ? WHERE client_id = ? AND user_id = ?').run('["a","b"]', 'proto-7', user.id);
        });
      });

      const row = testDb.prepare('SELECT scopes FROM oauth_consents WHERE client_id = ? AND user_id = ?').get('proto-7', user.id) as { scopes: string };
      expect(row.scopes).toBe('["a","b"]');
    });
  });
});
