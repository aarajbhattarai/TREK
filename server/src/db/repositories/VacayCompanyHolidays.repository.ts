import type { VacayCompanyHolidays } from '../entities/VacayCompanyHolidays.entity';
import { TrekRepository } from './_shared/trek-repository';

export class VacayCompanyHolidaysRepository extends TrekRepository<VacayCompanyHolidays> {
  /**
   * VC29/VC67 — `SELECT date FROM vacay_company_holidays WHERE plan_id = ?`
   * (`updatePlan`'s clear-on-enable, narrower columns) and `SELECT date, note
   * FROM vacay_company_holidays WHERE plan_id = ?` (`dissolvePlan`'s
   * migration read, wider columns). One method returning both columns —
   * `updatePlan` destructures only `date` off the result, same rows either
   * way.
   */
  async listForPlan(planId: number): Promise<{ date: string; note: string | null }[]> {
    const rows = await this.find({ plan: planId }, { fields: ['date', 'note'] });
    return rows.map((row) => ({ date: row.date, note: row.note ?? null }));
  }

  /** VC93/VC112 — `SELECT date FROM vacay_company_holidays WHERE plan_id = ? AND date >= ? AND date < ? ORDER BY date` (`getSharedCalendars`) and `SELECT * FROM vacay_company_holidays WHERE plan_id = ? AND date >= ? AND date < ?` (`getEntries`, unordered, full row). Two distinct statements — two methods. */
  async listDatesForRange(planId: number, start: string, end: string): Promise<{ date: string }[]> {
    const rows = await this.find({ plan: planId, date: { $gte: start, $lt: end } }, { fields: ['date'], orderBy: { date: 'asc' } });
    return rows.map((row) => ({ date: row.date }));
  }

  /** VC112 — `SELECT * FROM vacay_company_holidays WHERE plan_id = ? AND date >= ? AND date < ?` (`getEntries`, full row, unordered). */
  async listForRange(planId: number, start: string, end: string): Promise<{ id: number; plan_id: number; date: string; note: string | null }[]> {
    const rows = await this.find({ plan: planId, date: { $gte: start, $lt: end } });
    return rows.map((row) => ({ id: row.id, plan_id: row.plan_id, date: row.date, note: row.note ?? null }));
  }

  /** VC24-sibling: VC25 — `DELETE FROM vacay_company_holidays WHERE plan_id = ? AND date = ?` (`applyHolidayCalendars`'s auto-clear). */
  async deleteForPlanAndDate(planId: number, date: string): Promise<void> {
    await this.nativeDelete({ plan: planId, date });
  }

  /** VC104 — `DELETE FROM vacay_company_holidays WHERE plan_id = ? AND date >= ? AND date < ?` (`deleteYear`, the intersection-of-member-windows range). */
  async deleteForRange(planId: number, start: string, end: string): Promise<void> {
    await this.nativeDelete({ plan: planId, date: { $gte: start, $lt: end } });
  }

  /** VC70/VC73 — `INSERT OR IGNORE INTO vacay_company_holidays (plan_id, date, note) VALUES (?, ?, ?)` (`dissolvePlan`'s two migration branches — identical statement). */
  async insertIgnore(planId: number, date: string, note: string): Promise<void> {
    await this.upsert({ plan: planId, date, note }, { onConflictFields: ['plan', 'date'], onConflictAction: 'ignore' });
  }

  /**
   * VC118 — `SELECT id FROM vacay_company_holidays WHERE plan_id = ? AND date
   * = ?` (`toggleCompanyHoliday`'s existing-row read). Named
   * `findByPlanAndDate`, not `find` — `EntityRepository#find` already exists
   * with an incompatible signature.
   */
  async findByPlanAndDate(planId: number, date: string): Promise<{ id: number } | null> {
    const row = await this.findOne({ plan: planId, date }, { fields: ['id'] });
    return row ? { id: row.id } : null;
  }

  /** VC119 — `DELETE FROM vacay_company_holidays WHERE id = ?` (`toggleCompanyHoliday`'s clear-on-repeat-click). */
  async deleteById(id: number): Promise<void> {
    await this.nativeDelete({ id });
  }

  /** VC120 — `INSERT INTO vacay_company_holidays (plan_id, date, note) VALUES (?, ?, ?)` (`toggleCompanyHoliday`'s new row). */
  async insertHoliday(planId: number, date: string, note: string): Promise<void> {
    await this.insert({ plan: planId, date, note });
  }
}
