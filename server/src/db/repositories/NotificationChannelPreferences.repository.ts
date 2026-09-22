import type { NotificationChannelPreferences } from '../entities/NotificationChannelPreferences.entity';
import { EntityRepository } from '@mikro-orm/sql';

export class NotificationChannelPreferencesRepository extends EntityRepository<NotificationChannelPreferences> {}
