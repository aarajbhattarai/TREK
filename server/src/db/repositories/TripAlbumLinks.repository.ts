import type { TripAlbumLinks } from '../entities/TripAlbumLinks.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class TripAlbumLinksRepository extends EntityRepository<TripAlbumLinks> {}
