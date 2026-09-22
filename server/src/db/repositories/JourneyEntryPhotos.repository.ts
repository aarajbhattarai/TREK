import type { JourneyEntryPhotos } from '../entities/JourneyEntryPhotos.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class JourneyEntryPhotosRepository extends EntityRepository<JourneyEntryPhotos> {}
