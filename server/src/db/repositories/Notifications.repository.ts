import type { Notifications } from '../entities/Notifications.entity';
import { TrekRepository } from './_shared/trek-repository';

export class NotificationsRepository extends TrekRepository<Notifications> {}
