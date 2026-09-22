import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { createSnapshotTestDb } from '../../../helpers/db-mock';
import { resetTestDb } from '../../../helpers/test-db';
import { createTestOrm, type TestOrm } from '../../../helpers/test-orm';
import { PhotoProviderFields } from '../../../../src/db/entities/PhotoProviderFields.entity';
import type { PhotoProviderFieldsRepository } from '../../../../src/db/repositories/PhotoProviderFields.repository';

const testDb = createSnapshotTestDb();
let t: TestOrm;
let fields: PhotoProviderFieldsRepository;

beforeAll(async () => {
  t = await createTestOrm(testDb);
  fields = t.repo(PhotoProviderFields) as PhotoProviderFieldsRepository;
});
beforeEach(() => {
  resetTestDb(testDb);
  testDb.exec('DELETE FROM photo_provider_fields');
  testDb.exec('DELETE FROM photo_providers');
  t.clear();
});
afterAll(async () => {
  await t.close();
  testDb.close();
});

function insertProvider(id: string): void {
  testDb.prepare("INSERT INTO photo_providers (id, name, icon, enabled, sort_order) VALUES (?, ?, 'Image', 1, 0)").run(id, id);
}

function insertField(row: {
  provider_id: string;
  field_key: string;
  label: string;
  input_type?: string;
  placeholder?: string | null;
  hint?: string | null;
  required?: 0 | 1;
  secret?: 0 | 1;
  settings_key?: string | null;
  payload_key?: string | null;
  sort_order?: number;
}): void {
  testDb
    .prepare(
      `INSERT INTO photo_provider_fields
         (provider_id, field_key, label, input_type, placeholder, hint, required, secret, settings_key, payload_key, sort_order)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .run(
      row.provider_id,
      row.field_key,
      row.label,
      row.input_type ?? 'text',
      row.placeholder ?? null,
      row.hint ?? null,
      row.required ?? 0,
      row.secret ?? 0,
      row.settings_key ?? null,
      row.payload_key ?? null,
      row.sort_order ?? 0,
    );
}

describe('PhotoProviderFieldsRepository.listAllOrdered', () => {
  it('ADDONSPPFREPO-001: returns every field, ordered by sort_order then id, across all providers', async () => {
    insertProvider('immich');
    insertProvider('synology');
    insertField({ provider_id: 'synology', field_key: 'url', label: 'URL', sort_order: 1 });
    insertField({ provider_id: 'immich', field_key: 'url', label: 'URL', sort_order: 0 });
    insertField({ provider_id: 'immich', field_key: 'token', label: 'Token', sort_order: 0 });

    const rows = await fields.listAllOrdered();
    // Two rows share sort_order 0 — insertion order (ascending id) breaks the tie.
    expect(rows.map((r) => [r.provider_id, r.field_key])).toEqual([
      ['immich', 'url'],
      ['immich', 'token'],
      ['synology', 'url'],
    ]);
  });

  it('ADDONSPPFREPO-002: the provider_id twin reads back from find(), same as trip_id on Days', async () => {
    insertProvider('immich');
    insertField({ provider_id: 'immich', field_key: 'url', label: 'URL' });
    const [row] = await fields.listAllOrdered();
    expect(row.provider_id).toBe('immich');
  });

  it('ADDONSPPFREPO-003: required/secret come back as the raw stored integer, matching the entity type (not a coerced boolean)', async () => {
    insertProvider('immich');
    insertField({ provider_id: 'immich', field_key: 'token', label: 'Token', required: 1, secret: 1 });
    const [row] = await fields.listAllOrdered();
    expect(row.required).toBe(1);
    expect(row.secret).toBe(1);
    expect(typeof row.required).toBe('number');
  });

  it('ADDONSPPFREPO-004: nullable columns (placeholder, hint, settings_key, payload_key) come back null when unset', async () => {
    insertProvider('immich');
    insertField({ provider_id: 'immich', field_key: 'k', label: 'L' });
    const [row] = await fields.listAllOrdered();
    expect(row.placeholder).toBeNull();
    expect(row.hint).toBeNull();
    expect(row.settings_key).toBeNull();
    expect(row.payload_key).toBeNull();
  });

  it('ADDONSPPFREPO-005: an empty table returns an empty array', async () => {
    expect(await fields.listAllOrdered()).toEqual([]);
  });
});
