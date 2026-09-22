import type { VacayPlanMembers } from '../entities/VacayPlanMembers.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class VacayPlanMembersRepository extends EntityRepository<VacayPlanMembers> {}
