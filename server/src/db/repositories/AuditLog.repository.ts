import type { AuditLog } from '../entities/AuditLog.entity';
import { type AssertRowKeys } from './_shared/rows';
import { EntityRepository } from '@mikro-orm/sql';

/**
 * An `audit_log` row as the API emits it (Plan 3i's `admin.service.ts`
 * projection reads it via a `LEFT JOIN users`, not this shape — this is the
 * bare table row).
 */
export interface AuditLogRow {
  id: number;
  created_at: string | null;
  user_id: number | null;
  action: string;
  resource: string | null;
  details: string | null;
  ip: string | null;
}

const _auditLogRowKeys: AssertRowKeys<AuditLogRow, AuditLog> = true;

/** The column set `insert` writes; `id`/`created_at` are generated. */
export interface NewAuditLogRow {
  user_id: number | null;
  action: string;
  resource: string | null;
  details: string | null;
  ip: string | null;
}

// Reserved for Plan 3i (`admin.service.ts`'s paginated read of the same
// table): `listPage(limit, offset): Promise<AuditLogPageRow[]>` (a `qb()`
// join to `Users` for `username`/`email`) and `count(): Promise<number>`.
// Not implemented here — see plan3a-sql-inventory.md §1.

export class AuditLogRepository extends EntityRepository<AuditLog> {
  /**
   * The column set of the legacy INSERT:
   * `INSERT INTO audit_log (user_id, action, resource, details, ip)
   * VALUES (?, ?, ?, ?, ?)`.
   *
   * Best-effort, fire-and-forget, exactly like the caller
   * (`AuditService.writeAudit`, wrapped in an outer try/catch that never
   * throws): no `refresh`, nothing read back — the generated `id` and
   * `created_at` (left to the column's `DEFAULT CURRENT_TIMESTAMP`) are
   * never used afterward.
   *
   * Named `insertEntry`, not `insert`: `EntityRepository` (`@mikro-orm/core`)
   * already declares a native `insert(data, options?): Promise<Primary<Entity>>`
   * (bypassing `create`/`persist`/`flush`), which is a `tsc`-verified
   * incompatible override for a `Promise<void>` method of the same name — the
   * same reason `Days.repository.ts`/`DayNotes.repository.ts` name their
   * inserts `createDay`/`createNote` rather than `create`.
   */
  async insertEntry(entry: NewAuditLogRow): Promise<void> {
    const row = this.create({
      user: entry.user_id,
      action: entry.action,
      resource: entry.resource,
      details: entry.details,
      ip: entry.ip,
    });
    await this.getEntityManager().persist(row).flush();
  }
}
