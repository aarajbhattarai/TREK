/**
 * VacaySharesRepository.listOutgoing/listIncoming — VC81/VC82 parity (L6,
 * task-7-review.md item 11). One seeded world: two owners sharing with a
 * common recipient (one hidden, one not), plus an unrelated share that must
 * not leak across owners/recipients.
 */
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createUser } from '../../../helpers/factories';
import { createTestVacaySharesRepo } from '../../../helpers/vacay-repos';
import type { VacaySharesRepository } from '../../../../src/db/repositories/VacayShares.repository';

const testDb = createSnapshotTestDb();
let repo: VacaySharesRepository;

beforeAll(async () => {
  repo = await createTestVacaySharesRepo(testDb);
});
beforeEach(() => {
  resetTestDb(testDb);
});
afterAll(() => testDb.close());

const LEGACY_LIST_OUTGOING = `SELECT s.id, s.user_id, u.username FROM vacay_shares s JOIN users u ON s.user_id = u.id WHERE s.owner_id = ? ORDER BY s.id`;
const LEGACY_LIST_INCOMING = `SELECT s.id, s.owner_id, s.hidden, u.username FROM vacay_shares s JOIN users u ON s.owner_id = u.id WHERE s.user_id = ? ORDER BY s.id`;

function insertShare(ownerId: number, userId: number, hidden = 0): number {
  return Number(
    testDb.prepare('INSERT INTO vacay_shares (owner_id, user_id, hidden) VALUES (?, ?, ?)').run(ownerId, userId, hidden).lastInsertRowid,
  );
}

describe('VacaySharesRepository — VC81/VC82 parity with the legacy statements', () => {
  it('VC81 listOutgoing: byte-identical to the legacy statement, ordered by id, usernames only (emails withheld)', async () => {
    const { user: ownerA } = createUser(testDb, { username: 'owner-a' });
    const { user: recipient1 } = createUser(testDb, { username: 'recipient-1' });
    const { user: recipient2 } = createUser(testDb, { username: 'recipient-2' });
    const { user: ownerB } = createUser(testDb, { username: 'owner-b' });
    insertShare(ownerA.id, recipient2.id);
    insertShare(ownerA.id, recipient1.id);
    insertShare(ownerB.id, recipient1.id); // a different owner — must not appear for ownerA

    const legacy = testDb.prepare(LEGACY_LIST_OUTGOING).all(ownerA.id);
    const rows = await repo.listOutgoing(ownerA.id);

    expect(rows).toEqual(legacy);
    expect(rows.map((r) => r.username)).toEqual(['recipient-2', 'recipient-1']);
  });

  it('VC81 listOutgoing: an owner with no outgoing shares returns [], matching the legacy statement', async () => {
    const { user: owner } = createUser(testDb);
    expect(await repo.listOutgoing(owner.id)).toEqual(testDb.prepare(LEGACY_LIST_OUTGOING).all(owner.id));
  });

  it('VC82/VC91 listIncoming: byte-identical to the legacy statement, ordered by id, carrying owner username and the hidden flag', async () => {
    const { user: recipient } = createUser(testDb, { username: 'recipient' });
    const { user: ownerA } = createUser(testDb, { username: 'owner-a' });
    const { user: ownerB } = createUser(testDb, { username: 'owner-b' });
    const { user: elsewhere } = createUser(testDb, { username: 'elsewhere' });
    insertShare(ownerB.id, recipient.id, 1); // hidden
    insertShare(ownerA.id, recipient.id, 0);
    insertShare(ownerA.id, elsewhere.id, 0); // a different recipient — must not appear for `recipient`

    const legacy = testDb.prepare(LEGACY_LIST_INCOMING).all(recipient.id);
    const rows = await repo.listIncoming(recipient.id);

    expect(rows).toEqual(legacy);
    expect(rows.map((r) => ({ username: r.username, hidden: r.hidden }))).toEqual([
      { username: 'owner-b', hidden: 1 },
      { username: 'owner-a', hidden: 0 },
    ]);
  });

  it('VC82/VC91 listIncoming: a recipient with no incoming shares returns [], matching the legacy statement', async () => {
    const { user: recipient } = createUser(testDb);
    expect(await repo.listIncoming(recipient.id)).toEqual(testDb.prepare(LEGACY_LIST_INCOMING).all(recipient.id));
  });
});
