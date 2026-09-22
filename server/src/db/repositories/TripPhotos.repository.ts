import type { TripPhotos } from '../entities/TripPhotos.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class TripPhotosRepository extends EntityRepository<TripPhotos> {}
