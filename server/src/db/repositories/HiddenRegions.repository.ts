import type { HiddenRegions } from '../entities/HiddenRegions.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class HiddenRegionsRepository extends EntityRepository<HiddenRegions> {}
