/**
 * B1 (Plan 4 final review): an install the retired positional runner migrated
 * to schema_version 205 boots on this release — the released chain (main), so steps 206–242 run on it, including the booked-night reseat.
 * The assertions live in tests/helpers/legacy-upgrade-suite.ts.
 */
import { db as legacyDb } from '../../src/db/database';
import { describeLegacyUpgrade } from '../helpers/legacy-upgrade-suite';

import { vi } from 'vitest';

vi.mock('../../src/db/database', async () => {
  const { buildDbMock } = await import('../helpers/db-mock');
  const { openLegacyFixture } = await import('../helpers/legacy-fixture');
  return buildDbMock(openLegacyFixture('legacy-v205'));
});
vi.mock('../../src/config', () => ({
  JWT_SECRET: 'test-jwt-secret-for-trek-testing-only',
  ENCRYPTION_KEY: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6a7b8c9d0e1f2a3b4c5d6a7b8c9d0e1f2',
  updateJwtSecret: () => {},
  SESSION_DURATION: '24h',
  SESSION_DURATION_MS: 86400000,
  SESSION_DURATION_SECONDS: 86400,
  DEFAULT_LANGUAGE: 'en',
}));
vi.mock('../../src/websocket', () => ({
  broadcast: vi.fn(),
  broadcastToUser: vi.fn(),
  getOnlineUserIds: vi.fn(() => []),
}));

describeLegacyUpgrade(
  { fixture: 'legacy-v205', version: 205, reseated: 1, nightOrderIndex: 1, id: 'LEGACYUP-205' },
  legacyDb,
);
