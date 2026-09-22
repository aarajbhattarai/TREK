import type { PhotoProviderFields } from '../entities/PhotoProviderFields.entity';
import { toRow, type AssertRowKeys } from './_shared/rows';
import { EntityRepository } from '@mikro-orm/sql';

/** A `photo_provider_fields` row as the API emits it. */
export interface PhotoProviderFieldRow {
  id: number;
  provider_id: string;
  field_key: string;
  label: string;
  input_type: string;
  placeholder: string | null;
  hint: string | null;
  required: number | null;
  secret: number | null;
  settings_key: string | null;
  payload_key: string | null;
  sort_order: number | null;
}

const _photoProviderFieldRowKeys: AssertRowKeys<PhotoProviderFieldRow, PhotoProviderFields> = true;

export class PhotoProviderFieldsRepository extends EntityRepository<PhotoProviderFields> {
  /**
   * `SELECT provider_id, field_key, label, input_type, placeholder, hint,
   * required, secret, settings_key, payload_key, sort_order FROM
   * photo_provider_fields ORDER BY sort_order, id` — `provider_id` is the
   * `persist(false)` twin of the `provider` relation (Days.trip_id
   * precedent): reading it back after `find()` needs no extra populate, only
   * a `create()`/twin write would.
   */
  async listAllOrdered(): Promise<PhotoProviderFieldRow[]> {
    const rows = await this.find({}, { orderBy: { sort_order: 'asc', id: 'asc' } });
    return rows.map((row) => toRow(row) as PhotoProviderFieldRow);
  }
}
