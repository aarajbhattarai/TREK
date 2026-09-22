import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';

// Avoid any real DNS/network from the SSRF guard during saveSettings.
vi.mock('../../../src/utils/ssrfGuard', () => ({
  checkSsrf: vi.fn(async () => ({ allowed: true, isPrivate: false })),
  safeFetch: vi.fn(),
}));

import { db } from '../../../src/db/database';
import { createUser } from '../../helpers/factories';
import { AirtrailService } from '../../../src/nest/integrations/airtrail.service';
import { AirtrailClient } from '../../../src/nest/integrations/airtrail.client';
import { DatabaseService } from '../../../src/nest/database/database.service';
import { AuditService } from '../../../src/nest/database/../audit/audit.service';
import { createTestOrm, type TestOrm } from '../../helpers/test-orm';
import { AuditLog } from '../../../src/db/entities/AuditLog.entity';
import { Users } from '../../../src/db/entities/Users.entity';

// The free functions became methods with the airtrail fold; same SQL, same
// behaviour, one instance over the same db handle.
let svc: AirtrailService;
let getConnectionSettings: (...args: Parameters<AirtrailService['getConnectionSettings']>) => ReturnType<AirtrailService['getConnectionSettings']>;
let isAirtrailWriteEnabled: (...args: Parameters<AirtrailService['isAirtrailWriteEnabled']>) => ReturnType<AirtrailService['isAirtrailWriteEnabled']>;
let saveSettings: (...args: Parameters<AirtrailService['saveSettings']>) => ReturnType<AirtrailService['saveSettings']>;
let t: TestOrm;

beforeAll(async () => {
  t = await createTestOrm(db);
  svc = new AirtrailService(
    new DatabaseService(db),
    new AuditService(t.repo(AuditLog), t.repo(Users)),
    new AirtrailClient(),
  );
  getConnectionSettings = (...args) => svc.getConnectionSettings(...args);
  isAirtrailWriteEnabled = (...args) => svc.isAirtrailWriteEnabled(...args);
  saveSettings = (...args) => svc.saveSettings(...args);
});

afterAll(async () => {
  await t.close();
});

describe('airtrail writeback opt-in persistence (#1240)', () => {
  it('defaults the writeback opt-in to off for a new user', async () => {
    const { user } = createUser(db);
    expect(await isAirtrailWriteEnabled(user.id)).toBe(false);
    expect((await getConnectionSettings(user.id)).writeEnabled).toBe(false);
  });

  it('persists the opt-in and lets it be toggled back off without dropping the key', async () => {
    const { user } = createUser(db);

    await saveSettings(user.id, 'https://at.example.com', 'secret-key', false, true, null);
    expect(await isAirtrailWriteEnabled(user.id)).toBe(true);
    const on = await getConnectionSettings(user.id);
    expect(on.writeEnabled).toBe(true);
    expect(on.connected).toBe(true); // key stored

    // No key supplied keeps the stored key; only the opt-in flips back off.
    await saveSettings(user.id, 'https://at.example.com', undefined, false, false, null);
    expect(await isAirtrailWriteEnabled(user.id)).toBe(false);
    expect((await getConnectionSettings(user.id)).connected).toBe(true);
  });
});
