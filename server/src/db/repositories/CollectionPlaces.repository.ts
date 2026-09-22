import type { CollectionPlaces } from '../entities/CollectionPlaces.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class CollectionPlacesRepository extends EntityRepository<CollectionPlaces> {}
