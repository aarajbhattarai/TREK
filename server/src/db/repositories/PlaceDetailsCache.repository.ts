import type { PlaceDetailsCache } from '../entities/PlaceDetailsCache.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class PlaceDetailsCacheRepository extends EntityRepository<PlaceDetailsCache> {}
