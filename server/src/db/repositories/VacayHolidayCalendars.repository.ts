import type { VacayHolidayCalendars } from '../entities/VacayHolidayCalendars.entity';
import { TrekRepository } from './_shared/trek-repository';

/**
 * Plan 3f Task 2 (`SchoolHolidaysService.deleteRegion`) appends EXACTLY this
 * one additive method — Task 5 (vacay) builds the rest of this repository
 * around it later, per the plan's own file-ownership rule for this shared
 * file (`.superpowers/sdd/2026-09-25-orm-phase3f/task-2-brief.md`); no other
 * method, no class-level change beyond this.
 */
export class VacayHolidayCalendarsRepository extends TrekRepository<VacayHolidayCalendars> {
  /**
   * SH14 (`deleteRegion`'s cross-domain integrity guard, the reverse
   * direction of vacay's own VC45) — `SELECT id FROM vacay_holiday_calendars
   * WHERE type = 'school_holiday' AND region = ? LIMIT 1`. `region` is a
   * plain `.text()` column with no FK/relation to `SchoolHolidayRegions` at
   * all (§14/§15.9 of the plan's inventory, verified against both entities
   * directly, not assumed) — it stores the synthesized `<country>-MANUAL-
   * <id>` code as a free-form string, matched by VALUE, so this stays a
   * plain `WHERE` filter on two scalar columns, never a joined relation.
   */
  async existsForSchoolRegion(region: string): Promise<boolean> {
    const row = await this.findOne({ type: 'school_holiday', region }, { fields: ['id'] });
    return row !== null;
  }
}
