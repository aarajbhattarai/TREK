import type { VacayShares } from '../entities/VacayShares.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class VacaySharesRepository extends EntityRepository<VacayShares> {}
