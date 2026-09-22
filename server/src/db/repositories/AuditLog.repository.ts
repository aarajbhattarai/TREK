import { AuditLog } from '../entities/AuditLog.entity';
import { type AssertRowKeys } from './_shared/rows';
import { TrekRepository } from './_shared/trek-repository';

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

/** The column set `insertEntry` writes; `id`/`created_at` are generated. */
export type NewAuditLogRow = Omit<AuditLogRow, 'id' | 'created_at'>;

// Reserved for Plan 3i (`admin.service.ts`'s paginated read of the same
// table): `listPage(limit, offset): Promise<AuditLogPageRow[]>` (a `qb()`
// join to `Users` for `username`/`email`) and `count(): Promise<number>`.
// Not implemented here — see plan3a-sql-inventory.md §1.

export class AuditLogRepository extends TrekRepository<AuditLog> {
  /**
   * The column set of the legacy INSERT:
   * `INSERT INTO audit_log (user_id, action, resource, details, ip)
   * VALUES (?, ?, ?, ?, ?)`.
   *
   * Best-effort, fire-and-forget, exactly like the caller
   * (`AuditService.writeAudit`, wrapped in an outer try/catch that never
   * throws): no `refresh`, nothing the caller reads — MikroORM appends
   * `RETURNING id, created_at` for the defaults, but `insertEntry` resolves
   * `void`.
   *
   * A native `em.insert()`, not `create()` + `flush()`: `flush()` commits
   * the *whole* unit of work of the request's `EntityManager`, not just this
   * row — with ~98 call sites for `writeAudit`, one of them firing before
   * every MCP tool handler runs, an unrelated pending change elsewhere in
   * the same request would be committed early by an audit write, and the
   * outer try/catch that makes this best-effort would swallow whatever that
   * flush raised. `em.insert()` fires a single native INSERT with no side
   * effects on the context/identity map — the same fire-and-forget
   * semantics as the legacy `dbs.run(INSERT …)` autocommit statement.
   *
   * Named `insertEntry`, not `insert`: `EntityRepository` (`@mikro-orm/core`)
   * already declares a native `insert(data, options?): Promise<Primary<Entity>>`
   * (bypassing `create`/`persist`/`flush`), which is a `tsc`-verified
   * incompatible override for a `Promise<void>` method of the same name — the
   * same reason `Days.repository.ts`/`DayNotes.repository.ts` name their
   * inserts `createDay`/`createNote` rather than `create`.
   */
  async insertEntry(entry: NewAuditLogRow): Promise<void> {
    await this.insert({
      user: entry.user_id,
      action: entry.action,
      resource: entry.resource,
      details: entry.details,
      ip: entry.ip,
    });
  }
}
