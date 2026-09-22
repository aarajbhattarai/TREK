import type { AssignmentParticipants } from '../entities/AssignmentParticipants.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class AssignmentParticipantsRepository extends EntityRepository<AssignmentParticipants> {}
