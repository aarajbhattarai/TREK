import type { JourneyBooks } from '../entities/JourneyBooks.entity';
import { TrekRepository } from './_shared/trek-repository';

export class JourneyBooksRepository extends TrekRepository<JourneyBooks> {}
