import type { DocumentProviders } from '../entities/DocumentProviders.entity';
import { type AssertRowKeys } from './_shared/rows';
import { TrekRepository } from './_shared/trek-repository';

/** DSCTRL2's wider catalog row — id/name/description/icon, no `enabled`/`sort_order` (those only gate/order the read, they are never returned to the client). */
export interface DocumentProviderCatalogRow {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
}

/** A bare `document_providers` row (every scalar column). */
export interface DocumentProviderRow {
  id: string | null;
  name: string;
  description: string | null;
  icon: string | null;
  enabled: number | null;
  sort_order: number | null;
}

const _providerRowKeys: AssertRowKeys<DocumentProviderRow, DocumentProviders> = true;

/**
 * `document_providers` — the read-only catalog of document-store adapters
 * this build ships (Paperless, Papra, Nextcloud, OpenCloud, Synology Drive).
 * Nothing in doc-sync's OWN statements writes to this table — only
 * `admin.service.ts`'s future Plan 3i work toggles `enabled` — so every
 * method here is a getter, shaped for 3i's eventual reuse per the plan's
 * "For the user" cross-reference note. Three distinct read shapes (DSC1's
 * bare id list, DSC3's single name lookup, DSCTRL2's wider catalog row) stay
 * three methods rather than one generic "list providers" — R2's own ruling:
 * different column sets, different callers, never silently unified.
 */
export class DocumentProvidersRepository extends TrekRepository<DocumentProviders> {
  /**
   * DSC1 (`DocSyncConfigService.enabledProviderIds`) — `SELECT id FROM
   * document_providers WHERE enabled = 1 ORDER BY sort_order`. Only the
   * providers an instance admin switched on may be configured.
   */
  async listEnabledIds(): Promise<string[]> {
    const rows = await this.find({ enabled: 1 }, { fields: ['id'], orderBy: { sort_order: 'asc' } });
    return rows.map((r) => r.id as string);
  }

  /**
   * DSC3 (`DocSyncConfigService.providerName`, private) — `SELECT name FROM
   * document_providers WHERE id = ?`. Whatever the enabled flag says — a
   * binding outlives the admin switching its provider off, and the client
   * still needs its name.
   */
  async findName(id: string): Promise<string | undefined> {
    const row = await this.findOne({ id }, { fields: ['name'] });
    return row?.name;
  }

  /**
   * DSCTRL2 (`DocSyncController.providers`) — `SELECT id, name, description,
   * icon FROM document_providers WHERE enabled = 1 ORDER BY sort_order`. A
   * wider column list than DSC1 (adds `description`/`icon` for the form the
   * client renders) — kept as its own method per R2, not folded into
   * `listEnabledIds`.
   */
  async listEnabledCatalog(): Promise<DocumentProviderCatalogRow[]> {
    const rows = await this.find(
      { enabled: 1 },
      { fields: ['id', 'name', 'description', 'icon'], orderBy: { sort_order: 'asc' } },
    );
    return rows.map((r) => ({ id: r.id as string, name: r.name, description: r.description ?? null, icon: r.icon ?? null }));
  }
}
