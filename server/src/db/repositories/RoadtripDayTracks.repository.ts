import type { RoadtripDayTracks } from '../entities/RoadtripDayTracks.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class RoadtripDayTracksRepository extends EntityRepository<RoadtripDayTracks> {}
