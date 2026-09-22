import type { VacayEntries } from '../entities/VacayEntries.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class VacayEntriesRepository extends EntityRepository<VacayEntries> {}
