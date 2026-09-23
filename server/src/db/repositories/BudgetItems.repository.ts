import type { BudgetItems } from '../entities/BudgetItems.entity';
import { columnRef } from '../dialect/sql-functions';
import { TrekRepository } from './_shared/trek-repository';

// ---------------------------------------------------------------------------
// Plan 3e Task 1 (`FilesService.findForeignLinkTarget`, R12) — additive,
// append-only per that task's own file-ownership rule (Task 2/budget owns
// every other method appended to this file).
// ---------------------------------------------------------------------------

export class BudgetItemsRepository extends TrekRepository<BudgetItems> {
  /**
   * FL4 (`FilesService.findForeignLinkTarget`'s budget-expense branch) —
   * `SELECT 1 FROM budget_items WHERE id = ? AND trip_id = ?`, re-expressed
   * as "what trip does this row belong to" (R12, the same shape as
   * `ReservationsRepository.findTripId`'s docstring). `trip_id` is a
   * `persist(false)` mirror of the `trip` relation — `columnRef`, not a bare
   * select (the program-wide trap).
   */
  async findTripId(id: number): Promise<number | undefined> {
    const platform = this.getEntityManager().getPlatform();
    const row = await this.qb('b')
      .select([columnRef(platform, 'b.trip_id').as('trip_id')])
      .where({ id })
      .execute<{ trip_id: number } | undefined>('get', false);
    return row?.trip_id;
  }
}
