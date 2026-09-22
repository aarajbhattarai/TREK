import type { JourneyEntries } from '../entities/JourneyEntries.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class JourneyEntriesRepository extends EntityRepository<JourneyEntries> {}
