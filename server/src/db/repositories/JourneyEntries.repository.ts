import type { JourneyEntries } from '../entities/JourneyEntries.entity';
import { TrekRepository } from './_shared/trek-repository';

export class JourneyEntriesRepository extends TrekRepository<JourneyEntries> {}
