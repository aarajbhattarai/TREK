import type { CollabNotes } from '../entities/CollabNotes.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class CollabNotesRepository extends EntityRepository<CollabNotes> {}
