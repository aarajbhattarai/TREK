import type { UserNoticeDismissals } from '../entities/UserNoticeDismissals.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class UserNoticeDismissalsRepository extends EntityRepository<UserNoticeDismissals> {}
