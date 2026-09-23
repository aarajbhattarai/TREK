import { DatabaseService } from '../../src/nest/database/database.service';
import { RealtimeService } from '../../src/nest/realtime/realtime.service';
import { MailerService } from '../../src/nest/notifications/mailer/mailer.service';
import { NotificationPreferencesService } from '../../src/nest/notifications/notification-preferences.service';
import { NotificationsService } from '../../src/nest/notifications/notifications.service';
import { NtfyService } from '../../src/nest/notifications/transports/ntfy.service';
import { WebhookService } from '../../src/nest/notifications/transports/webhook.service';
import { createTestUnitOfWork, createTestAppSettingsRepo, createTestSettingsRepo, createTestUsersRepo } from './test-uow';
import { createTestNotificationsRepo, createTestNotificationChannelPreferencesRepo } from './notifications-repos';

/**
 * A NotificationsService wired the way Nest wires it.
 *
 * The domain takes six providers since the fold, and eight places used to build
 * it by hand — every added constructor parameter was an eight-file diff. One
 * helper keeps that at one.
 *
 * Plan 3f Task 3: `NotificationsService`/`NotificationPreferencesService` no
 * longer take a `DatabaseService` — both now take repositories, resolved
 * through `notifications-repos.ts`/`test-uow.ts`'s `sharedTestOrm`-memoised
 * factories, bound to `dbs.connection` the same way every other converted
 * domain's test helper does. The helper's own OUTER signature (`dbs`,
 * `realtime`) is unchanged, so every caller that only goes through this
 * function (`mcp-test-controllers.ts`, `plugin-host.ts`, both test-only) needs
 * no edit of its own.
 *
 * Plan 3f Task 4: `MailerService`/`WebhookService`/`NtfyService` no longer
 * take a `DatabaseService` either — `MailerService` takes
 * `UsersRepository`/`SettingsRepository`/`AppSettingsRepository`,
 * `WebhookService`/`NtfyService` take `SettingsRepository`/
 * `AppSettingsRepository`, all resolved through the same memoised
 * `test-uow.ts` factories bound to `dbs.connection`.
 */
export async function makeNotificationsService(dbs: DatabaseService, realtime = new RealtimeService()): Promise<NotificationsService> {
  const usersRepo = await createTestUsersRepo(dbs.connection);
  const settingsRepo = await createTestSettingsRepo(dbs.connection);
  const appSettings = await createTestAppSettingsRepo(dbs.connection);
  const mailer = new MailerService(usersRepo, settingsRepo, appSettings);
  const uow = await createTestUnitOfWork(dbs.connection);
  const channelPrefsRepo = await createTestNotificationChannelPreferencesRepo(dbs.connection);
  const notificationsRepo = await createTestNotificationsRepo(dbs.connection);
  return new NotificationsService(
    realtime,
    mailer,
    new WebhookService(settingsRepo, appSettings),
    new NtfyService(settingsRepo, appSettings),
    new NotificationPreferencesService(mailer, uow, appSettings, channelPrefsRepo),
    uow,
    notificationsRepo,
  );
}

/** The preferences half on its own, over the same connection. */
export async function makeNotificationPreferencesService(dbs: DatabaseService): Promise<NotificationPreferencesService> {
  const usersRepo = await createTestUsersRepo(dbs.connection);
  const settingsRepo = await createTestSettingsRepo(dbs.connection);
  const appSettings = await createTestAppSettingsRepo(dbs.connection);
  const channelPrefsRepo = await createTestNotificationChannelPreferencesRepo(dbs.connection);
  return new NotificationPreferencesService(new MailerService(usersRepo, settingsRepo, appSettings), await createTestUnitOfWork(dbs.connection), appSettings, channelPrefsRepo);
}

/**
 * A send that records instead of delivering.
 *
 * For the six services that took NotificationsService as a constructor
 * parameter when their fire-and-forget sends stopped being lazy imports. Most
 * suites do not care that a notification went out, only that the write around
 * it succeeded — but the parameter is required, and `tests/` is outside
 * `tsconfig`'s `include`, so leaving it off would not fail to compile. It would
 * land as `undefined` and throw inside the send.
 */
export function notificationsStub(send: NotificationSend = async () => {}): NotificationsService {
  return { send } as unknown as NotificationsService;
}

type NotificationSend = (payload: Parameters<NotificationsService['send']>[0]) => Promise<void>;
