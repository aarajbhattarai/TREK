import type { TripFiles } from '../entities/TripFiles.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class TripFilesRepository extends EntityRepository<TripFiles> {}
