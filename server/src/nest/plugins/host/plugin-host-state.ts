import { PluginDataDb } from './plugin-data.service';
import { DailyBudget, DEFAULT_DAILY_BUDGET } from './daily-budget';
import type { PluginCapabilityAuditRepository } from '../../../db/repositories/PluginCapabilityAudit.repository';

/**
 * Process-wide plugin host state, deliberately module-level (NOT a Nest
 * provider): the data-DB and budget maps must be the single shared instance
 * across host recreations (disable/re-enable builds a NEW rpc host — see the
 * `get data()` comment in plugin-rpc-host.factory.ts), and pluginBudgetUsage
 * is read by PluginsService, which the factory itself imports from — folding
 * this state into the injectable would create a provider cycle for no gain.
 *
 * It does NOT reach for the `db` singleton, though: the one read it needs is the
 * budget seed, so the caller passes its own injected `PluginCapabilityAuditRepository`
 * in (Plan 3j Task 3 — was a raw `better-sqlite3` connection before conversion).
 * That keeps the module-level state (which is the point) without a second route
 * to the database that no test can substitute.
 */

const dataDbs = new Map<string, PluginDataDb>();

export function getPluginDataDb(id: string): PluginDataDb {
  let d = dataDbs.get(id);
  // A cached handle can be CLOSED without being evicted: the supervisor's terminal
  // failure paths (activation timeout / load-error / crash auto-disable) call
  // rpcHost.dispose() → PluginDataDb.close() directly, never closePluginDataDb. A
  // plain admin re-enable would then reuse the closed handle and every db.* call
  // would throw 'database connection is not open'. Recreate when the handle is shut.
  if (!d || !d.isOpen()) {
    d = new PluginDataDb(id);
    dataDbs.set(id, d);
  }
  return d;
}

export function closePluginDataDb(id: string): void {
  dataDbs.get(id)?.close();
  dataDbs.delete(id);
  budgets.delete(id);
}

// Per-plugin daily broker budgets (ai/notify). Lazily created + seeded from the
// local capability audit — which already records every ai/notify call today — so a
// restart continues the same UTC day instead of resetting the budget. In-memory,
// nothing persisted or phoned home.
const budgets = new Map<string, DailyBudget>();

export async function budgetFor(id: string, audit: PluginCapabilityAuditRepository): Promise<DailyBudget> {
  let b = budgets.get(id);
  if (!b) {
    const now = Date.now();
    const since = new Date(now).toISOString().slice(0, 10) + 'T00:00:00';
    const rows = await audit.budgetSeed(id, since);
    let ai = 0, notify = 0;
    for (const r of rows) {
      if (r.method === 'notify.send') notify += r.n;
      else ai += r.n; // ai.complete + ai.extract
    }
    b = new DailyBudget(DEFAULT_DAILY_BUDGET, now, { ai, notify });
    budgets.set(id, b);
  }
  return b;
}

/** Today's broker usage for one plugin (admin view). Seeds the counter if unseen. */
export async function pluginBudgetUsage(id: string, audit: PluginCapabilityAuditRepository): Promise<ReturnType<DailyBudget['used']>> {
  return (await budgetFor(id, audit)).used(Date.now());
}
