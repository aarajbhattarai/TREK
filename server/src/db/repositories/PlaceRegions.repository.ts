import type { PlaceRegions } from '../entities/PlaceRegions.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PlaceRegionsRepository extends EntityRepository<PlaceRegions> {}
