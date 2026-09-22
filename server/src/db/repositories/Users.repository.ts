import type { Users } from '../entities/Users.entity';
import { EntityRepository } from '@mikro-orm/sql';

/**
 * The three third-party keys that belong to the instance rather than to a
 * person (see `nest/settings/instance-api-keys.ts`). A closed union, never a
 * dynamic column string — `getApiKeyColumn` dispatches through MikroORM's
 * typed `fields` option, which only accepts a real property of `Users`, so a
 * name outside this union fails `tsc` rather than reaching a query.
 *
 * This repository is the union's source of truth; `instance-api-keys.ts`
 * imports it rather than keeping its own copy (Task 5 wires that import).
 */
export type InstanceApiKeyName = 'maps_api_key' | 'unsplash_api_key' | 'amap_api_key';

export class UsersRepository extends EntityRepository<Users> {
  /** `SELECT email FROM users WHERE id = ?` */
  async getEmail(userId: number): Promise<string | null> {
    const row = await this.findOne({ id: userId }, { fields: ['email'] });
    return row?.email ?? null;
  }

  /**
   * One of the three instance-API-key columns, selected by `name`:
   * `SELECT <name> FROM users WHERE id = ?`. `name` is the typed union above,
   * not an interpolated column — MikroORM's `fields` option only accepts a
   * real property of `Users`, so this can never select an arbitrary column.
   */
  async getApiKeyColumn(userId: number, name: InstanceApiKeyName): Promise<string | null> {
    const row = await this.findOne({ id: userId }, { fields: [name] });
    return row ? (row[name] ?? null) : null;
  }
}
