import type { VacayYears } from '../entities/VacayYears.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class VacayYearsRepository extends EntityRepository<VacayYears> {}
