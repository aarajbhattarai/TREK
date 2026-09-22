import type { Notifications } from '../entities/Notifications.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class NotificationsRepository extends EntityRepository<Notifications> {}
