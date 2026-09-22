import { describe, it, expect, vi } from 'vitest';

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

// The free functions became methods with the airtrail fold; same SQL, same
// behaviour, one instance over the same db handle.
const svc = new AirtrailService(
  new DatabaseService(db),
  new AuditService(new DatabaseService(db)),
  new AirtrailClient(),
);
const getConnectionSettings = (...args: Parameters<AirtrailService['getConnectionSettings']>) => svc.getConnectionSettings(...args);
const isAirtrailWriteEnabled = (...args: Parameters<AirtrailService['isAirtrailWriteEnabled']>) => svc.isAirtrailWriteEnabled(...args);
const saveSettings = (...args: Parameters<AirtrailService['saveSettings']>) => svc.saveSettings(...args);

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
