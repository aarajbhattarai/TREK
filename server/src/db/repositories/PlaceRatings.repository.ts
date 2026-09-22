import type { PlaceRatings } from '../entities/PlaceRatings.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PlaceRatingsRepository extends EntityRepository<PlaceRatings> {}
