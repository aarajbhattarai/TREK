import type { TripDocumentLinks } from '../entities/TripDocumentLinks.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class TripDocumentLinksRepository extends EntityRepository<TripDocumentLinks> {}
