import type { VacayPlans } from '../entities/VacayPlans.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class VacayPlansRepository extends EntityRepository<VacayPlans> {}
