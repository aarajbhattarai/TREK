import type { VacayUserYears } from '../entities/VacayUserYears.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class VacayUserYearsRepository extends EntityRepository<VacayUserYears> {}
