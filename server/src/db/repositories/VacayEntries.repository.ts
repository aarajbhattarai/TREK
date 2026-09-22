import type { VacayEntries } from '../entities/VacayEntries.entity';
import { TrekRepository } from './_shared/trek-repository';

export class VacayEntriesRepository extends TrekRepository<VacayEntries> {}
