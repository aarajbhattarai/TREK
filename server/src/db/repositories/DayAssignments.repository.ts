import type { DayAssignments } from '../entities/DayAssignments.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class DayAssignmentsRepository extends EntityRepository<DayAssignments> {}
