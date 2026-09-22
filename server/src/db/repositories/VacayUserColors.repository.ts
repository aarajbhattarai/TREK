import type { VacayUserColors } from '../entities/VacayUserColors.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class VacayUserColorsRepository extends EntityRepository<VacayUserColors> {}
