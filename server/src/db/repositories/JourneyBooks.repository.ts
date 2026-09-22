import type { JourneyBooks } from '../entities/JourneyBooks.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class JourneyBooksRepository extends EntityRepository<JourneyBooks> {}
