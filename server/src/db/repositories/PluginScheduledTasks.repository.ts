import type { PluginScheduledTasks } from '../entities/PluginScheduledTasks.entity';
import { TrekRepository } from './_shared/trek-repository';

/** PR4 — the sweep's own due-task projection. */
export interface DueScheduledTaskRow {
  id: number;
  plugin_id: string;
  name: string;
  payload: string;
  every_ms: number | null;
}

export class PluginScheduledTasksRepository extends TrekRepository<PluginScheduledTasks> {
  /**
   * PR4 — `` SELECT id, plugin_id, name, payload, every_ms FROM plugin_scheduled_tasks
   * WHERE due_at <= ? AND plugin_id IN (${ph}) ORDER BY due_at LIMIT 200 `` (`fireDueScheduled`'s
   * sweep window). `pluginIds` — never an empty array: the caller (`fireDueScheduled`)
   * already returns early when `supervisor.activeIds()` is empty, the same short-circuit
   * the legacy `IN (${ph})` string-building avoided running against.
   */
  async findDueForPlugins(now: number, pluginIds: string[], limit = 200): Promise<DueScheduledTaskRow[]> {
    const rows = await this.find(
      { due_at: { $lte: now }, plugin_id: { $in: pluginIds } },
      { fields: ['id', 'plugin_id', 'name', 'payload', 'every_ms'], orderBy: { due_at: 'asc' }, limit },
    );
    return rows.map((r) => ({ id: r.id, plugin_id: r.plugin_id, name: r.name, payload: r.payload, every_ms: r.every_ms ?? null }));
  }

  /**
   * PR5 — `UPDATE plugin_scheduled_tasks SET due_at = ? WHERE id = ?` — re-arm BEFORE
   * the fire (crash-safety ordering, preserved exactly by the caller).
   *
   * **Deviation, named (task-2-report.md), the SAME spirit as R-uninstall's egress-host
   * transaction — a second, small, deliberate correctness fix, not silent parity**: the
   * legacy statement had no `due_at` guard, but the legacy CALL SITE never needed one —
   * `better-sqlite3` is synchronous and the claim-then-act loop had no `await` between
   * the SELECT and this UPDATE, so two "concurrent" JS calls to `fireDueScheduled` could
   * never actually interleave at the DB level (the first ran to completion before the
   * second's own SELECT even started). Converting the SELECT and this UPDATE into
   * separately-awaited repository calls removes that accidental atomicity: two
   * overlapping ticks (a real possibility once a tick can run longer than the 30s
   * cadence) can both read the SAME due row before either claims it, delivering it
   * TWICE (proven by `RACE-SCHED-001` before this guard was added). Adding `due_at <=
   * now` here (the SAME condition the SELECT already used) makes the claim atomic and
   * idempotent per row: whichever pass's UPDATE lands first moves `due_at` forward, so
   * the LOSING pass's own `due_at <= now` no longer matches and its `nativeUpdate`
   * affects zero rows — the caller uses that to skip delivery rather than double-fire.
   */
  async rearm(id: number, dueAt: number, claimedFromDueAt: number): Promise<boolean> {
    const changed = await this.nativeUpdate({ id, due_at: { $lte: claimedFromDueAt } }, { due_at: dueAt });
    return changed > 0;
  }

  /** PR6 — `DELETE FROM plugin_scheduled_tasks WHERE id = ?` (a one-shot task, deleted before the fire). Same atomic-claim guard as `rearm` above, same reason. */
  async deleteById(id: number, claimedFromDueAt: number): Promise<boolean> {
    const changed = await this.nativeDelete({ id, due_at: { $lte: claimedFromDueAt } });
    return changed > 0;
  }

  /** PR37 (uninstall cascade) — `DELETE FROM plugin_scheduled_tasks WHERE plugin_id = ?`. */
  async deleteAllForPlugin(pluginId: string): Promise<void> {
    await this.nativeDelete({ plugin_id: pluginId });
  }
}
