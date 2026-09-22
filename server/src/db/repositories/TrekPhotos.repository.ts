import type { TrekPhotos } from '../entities/TrekPhotos.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class TrekPhotosRepository extends EntityRepository<TrekPhotos> {}
