import type { PluginSettingsFields } from '../entities/PluginSettingsFields.entity';
import { TrekRepository } from './_shared/trek-repository';

/** PR#499 — `notificationChannels`' secret-user-field scan, across ALL plugins. */
export interface PluginSecretFieldRow {
  plugin_id: string;
  field_key: string;
}

/** `plugins.service.ts#settingsFields`'s own full projection (mapped to `PluginSettingsField` in the service, which also resolves `default`/`options`). */
export interface PluginSettingsFieldRow {
  field_key: string;
  label: string | null;
  input_type: string;
  placeholder: string | null;
  hint: string | null;
  required: number;
  secret: number;
  options: string | null;
  default_value: string | null;
}

export class PluginSettingsFieldsRepository extends TrekRepository<PluginSettingsFields> {
  /** `notificationChannels`'s GDPR-export fold — `SELECT plugin_id, field_key FROM plugin_settings_fields WHERE scope = 'user' AND secret = 1`, across every plugin (no `plugin_id` filter — the caller groups by `plugin_id` itself). */
  async listSecretUserFields(): Promise<PluginSecretFieldRow[]> {
    return await this.find({ scope: 'user', secret: 1 }, { fields: ['plugin_id', 'field_key'] });
  }

  /** PS2 (`plugins.service.ts#instanceSettingsCount`) — `SELECT COUNT(*) AS n FROM plugin_settings_fields WHERE plugin_id = ? AND scope = 'instance'`. Caller wraps this in its own try/catch → 0. */
  async countForPluginScope(pluginId: string, scope: 'instance' | 'user'): Promise<number> {
    return await this.count({ plugin_id: pluginId, scope });
  }

  /**
   * `updateInstanceConfig`'s secret-key set / `getInstanceConfig`'s secret-key set /
   * `updateUserConfig`/`getUserConfig`'s `userSecretKeys` — `SELECT field_key FROM
   * plugin_settings_fields WHERE plugin_id = ? AND scope = ? AND secret = 1` (identical
   * text shape across both scopes; ONE method for all four call sites).
   */
  async listSecretFieldKeys(pluginId: string, scope: 'instance' | 'user'): Promise<string[]> {
    const rows = await this.find({ plugin_id: pluginId, scope, secret: 1 }, { fields: ['field_key'] });
    return rows.map((r) => r.field_key);
  }

  /**
   * `updateInstanceConfig`'s allowed-key set / `updateUserConfig`'s allowed-key set —
   * `SELECT field_key FROM plugin_settings_fields WHERE plugin_id = ? AND scope = ?`
   * (identical text shape across both scopes; ONE method for both call sites).
   */
  async listFieldKeys(pluginId: string, scope: 'instance' | 'user'): Promise<string[]> {
    const rows = await this.find({ plugin_id: pluginId, scope }, { fields: ['field_key'] });
    return rows.map((r) => r.field_key);
  }

  /**
   * `plugins.service.ts#settingsFields` (backs `userSettingsFields`/`instanceSettingsFields`) —
   * `SELECT field_key AS key, label, input_type, placeholder, hint, required, secret,
   * options, default_value FROM plugin_settings_fields WHERE plugin_id = ? AND scope = ?
   * ORDER BY sort_order, id`.
   */
  async listFields(pluginId: string, scope: 'instance' | 'user'): Promise<PluginSettingsFieldRow[]> {
    const rows = await this.find(
      { plugin_id: pluginId, scope },
      {
        fields: ['field_key', 'label', 'input_type', 'placeholder', 'hint', 'required', 'secret', 'options', 'default_value'],
        orderBy: [{ sort_order: 'asc' }, { id: 'asc' }],
      },
    );
    return rows.map((r) => ({
      field_key: r.field_key,
      label: r.label ?? null,
      input_type: r.input_type,
      placeholder: r.placeholder ?? null,
      hint: r.hint ?? null,
      required: r.required,
      secret: r.secret,
      options: r.options ?? null,
      default_value: r.default_value ?? null,
    }));
  }

  /** `assertRequiredFilled` — `SELECT field_key FROM plugin_settings_fields WHERE plugin_id = ? AND scope = ? AND required = 1 AND input_type != 'checkbox'`. */
  async listRequiredFieldKeys(pluginId: string, scope: 'instance' | 'user'): Promise<string[]> {
    const rows = await this.find(
      { plugin_id: pluginId, scope, required: 1, input_type: { $ne: 'checkbox' } },
      { fields: ['field_key'] },
    );
    return rows.map((r) => r.field_key);
  }

  /** PR34 (uninstall cascade) — `DELETE FROM plugin_settings_fields WHERE plugin_id = ?`. Unlike several of its cascade siblings, this one is NOT wrapped in try/catch by the caller — a slimmed test schema is expected to have this table. */
  async deleteAllForPlugin(pluginId: string): Promise<void> {
    await this.nativeDelete({ plugin_id: pluginId });
  }
}
