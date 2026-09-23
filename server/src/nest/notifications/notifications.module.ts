import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AdminNotificationPreferencesController, NotificationsController } from './notifications.controller';
import { NotificationsMcp } from './notifications.mcp';
import { NotificationsService } from './notifications.service';
import { NotificationPreferencesService } from './notification-preferences.service';
import { ReminderJobsService } from './reminder-jobs.service';
import { StorageHealthNotifierService } from './storage-health-notifier.service';
import { NtfyService } from './transports/ntfy.service';
import { WebhookService } from './transports/webhook.service';
import { MailerModule } from './mailer/mailer.module';
import { AuthModule } from '../auth/auth.module';
import { SchedulingModule } from '../scheduling/scheduling.module';
import { StorageModule } from '../storage/storage.module';
import { Notifications } from '../../db/entities/Notifications.entity';
import { NotificationChannelPreferences } from '../../db/entities/NotificationChannelPreferences.entity';
import { AppSettings } from '../../db/entities/AppSettings.entity';

/** Notifications domain (L6 leaf module). Registered in AppModule.
 *  AuthModule feeds NotificationsMcp's demo gate; MailerModule carries SMTP,
 *  which lives outside this module so AuthService can send the password-reset
 *  mail without AuthModule and NotificationsModule importing each other.
 *  StorageModule feeds StorageHealthNotifierService, which bridges replica
 *  failures into admin notifications — this direction has no cycle (Storage
 *  imports only AppConfig+Audit+Scheduling).
 *  NotificationsService and NotificationPreferencesService are exported for
 *  in-container consumers (AdminController's dev test send and preferences tab,
 *  the plugin RPC surface, HostSurfaceRpc).
 *  MikroOrmModule.forFeature([Notifications, NotificationChannelPreferences,
 *  AppSettings]) (Plan 3f Task 3) registers NotificationsRepository/
 *  NotificationChannelPreferencesRepository/AppSettingsRepository for
 *  NotificationsService/NotificationPreferencesService's @InjectRepository
 *  constructor params — the TodoModule/PermissionsModule precedent. Only
 *  this module needs the registration: NotificationsService/
 *  NotificationPreferencesService are providers here alone, every other
 *  module injects the exported singleton rather than declaring its own. */
@Module({
  imports: [MikroOrmModule.forFeature([Notifications, NotificationChannelPreferences, AppSettings]), AuthModule, MailerModule, SchedulingModule, StorageModule],
  controllers: [NotificationsController, AdminNotificationPreferencesController],
  providers: [
    NotificationsService,
    NotificationPreferencesService,
    WebhookService,
    NtfyService,
    NotificationsMcp,
    ReminderJobsService,
    StorageHealthNotifierService,
  ],
  exports: [NotificationsService, NotificationPreferencesService],
})
export class NotificationsModule {}
