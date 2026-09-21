import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createTestDb, resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { createUser } from '../../../helpers/factories';
import { Users } from '../../../../src/db/entities/Users.entity';
import { currentTimestamp, dateAdd, dateOf } from '../../../../src/db/dialect/sql-functions';

const testDb = createTestDb();
let t: TestOrm;

beforeAll(async () => { t = await createTestOrm(testDb); });
beforeEach(() => { resetTestDb(testDb); t.clear(); });
afterAll(async () => { await t.close(); testDb.close(); });

describe('sql-functions (sqlite)', () => {
  it('SQLF-001: dateOf yields the calendar date of a stored timestamp', async () => {
    const { user } = createUser(testDb);
    testDb.prepare("UPDATE users SET created_at = '2026-09-21 13:05:09' WHERE id = ?").run(user.id);
    const row = await t.em.createQueryBuilder(Users, 'u')
      .select([dateOf('u.created_at').as('d')])
      .where({ id: user.id })
      .execute('get', false);
    expect(row).toEqual({ d: '2026-09-21' });
  });

  it('SQLF-002: dateAdd shifts by whole days', async () => {
    const { user } = createUser(testDb);
    testDb.prepare("UPDATE users SET created_at = '2026-09-21 13:05:09' WHERE id = ?").run(user.id);
    const row = await t.em.createQueryBuilder(Users, 'u')
      .select([dateAdd('u.created_at', 10).as('d')])
      .where({ id: user.id })
      .execute('get', false);
    expect(row).toEqual({ d: '2026-10-01' });
  });

  it('SQLF-003: currentTimestamp is the DB clock in the wire format', async () => {
    createUser(testDb);
    const row = await t.em.createQueryBuilder(Users, 'u')
      .select([currentTimestamp().as('now')])
      .limit(1)
      .execute('get', false);
    expect(String((row as { now: string }).now)).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
  });

  it('SQLF-004: dateOf rejects anything that is not a plain column reference', () => {
    expect(() => dateOf('u.created_at); DROP TABLE users; --')).toThrow(/not a column reference/);
    expect(() => dateOf('u.created_at.extra')).toThrow(/not a column reference/);
    expect(() => dateOf('')).toThrow(/not a column reference/);
  });

  it('SQLF-005: dateAdd rejects a non-integer day count', () => {
    expect(() => dateAdd('u.created_at', 1.5)).toThrow(/integer day count/);
    expect(() => dateAdd('u.created_at', Number.NaN)).toThrow(/integer day count/);
  });

  it('SQLF-006: dateAdd shifts backwards for a negative day count', async () => {
    const { user } = createUser(testDb);
    testDb.prepare("UPDATE users SET created_at = '2026-09-21 13:05:09' WHERE id = ?").run(user.id);
    const row = await t.em.createQueryBuilder(Users, 'u')
      .select([dateAdd('u.created_at', -10).as('d')])
      .where({ id: user.id })
      .execute('get', false);
    expect(row).toEqual({ d: '2026-09-11' });
  });
});
