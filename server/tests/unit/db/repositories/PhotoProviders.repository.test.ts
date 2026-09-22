import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { PhotoProviders } from '../../../../src/db/entities/PhotoProviders.entity';
import type { PhotoProvidersRepository } from '../../../../src/db/repositories/PhotoProviders.repository';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let photoProviders: PhotoProvidersRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  photoProviders = t.repo(PhotoProviders) as PhotoProvidersRepository;
});
beforeEach(() => {
  resetTestDb(testDb);
  // photo_provider_fields FK-references photo_providers, so clear the child
  // first — resetTestDb keeps both tables (test-db.ts's KEEP_TABLES).
  testDb.exec('DELETE FROM photo_provider_fields');
  testDb.exec('DELETE FROM photo_providers');
  t.clear();
});
afterAll(async () => {
  await t.close();
  testDb.close();
});

function rawRow(id: string): unknown {
  return testDb.prepare('SELECT * FROM photo_providers WHERE id = ?').get(id);
}

function insertProvider(row: {
  id: string;
  name: string;
  description?: string | null;
  icon?: string | null;
  enabled: 0 | 1;
  sort_order?: number;
}): void {
  testDb
    .prepare('INSERT INTO photo_providers (id, name, description, icon, enabled, sort_order) VALUES (?, ?, ?, ?, ?, ?)')
    .run(row.id, row.name, row.description ?? null, row.icon ?? null, row.enabled, row.sort_order ?? 0);
}

describe('PhotoProvidersRepository.listEnabled', () => {
  it('ADDONSPPREPO-001: returns only enabled providers, ordered by sort_order then id', async () => {
    insertProvider({ id: 'synology', name: 'Synology', enabled: 1, sort_order: 0 });
    insertProvider({ id: 'immich', name: 'Immich', enabled: 1, sort_order: 0 });
    insertProvider({ id: 'off', name: 'Off', enabled: 0, sort_order: -1 });

    const rows = await photoProviders.listEnabled();
    // Same sort_order (0) for both enabled rows — id breaks the tie.
    expect(rows.map((r) => r.id)).toEqual(['immich', 'synology']);
  });

  it('ADDONSPPREPO-002: the enabled column comes back as the raw stored integer, not a coerced boolean', async () => {
    insertProvider({ id: 'immich', name: 'Immich', enabled: 1 });
    const [row] = await photoProviders.listEnabled();
    expect(row.enabled).toBe(1);
    expect(typeof row.enabled).toBe('number');
  });

  it('ADDONSPPREPO-003: an empty table returns an empty array', async () => {
    expect(await photoProviders.listEnabled()).toEqual([]);
  });

  it('ADDONSPPREPO-004: carries the full row shape (id, name, description, icon, enabled, sort_order)', async () => {
    insertProvider({ id: 'immich', name: 'Immich', description: 'Self-hosted photos', icon: 'image', enabled: 1, sort_order: 4 });
    const [row] = await photoProviders.listEnabled();
    expect(row).toEqual({
      id: 'immich',
      name: 'Immich',
      description: 'Self-hosted photos',
      icon: 'image',
      enabled: 1,
      sort_order: 4,
    });
    expect(rawRow('immich')).toMatchObject({ enabled: 1 });
  });
});
