import type { JourneyPhotos } from '../entities/JourneyPhotos.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class JourneyPhotosRepository extends EntityRepository<JourneyPhotos> {}
