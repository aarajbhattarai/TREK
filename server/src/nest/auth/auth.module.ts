import { RateLimitModule } from '../common/rate-limit.module';
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppSettings } from '../../db/entities/AppSettings.entity';
import { Users } from '../../db/entities/Users.entity';
import { WebauthnCredentials } from '../../db/entities/WebauthnCredentials.entity';
import { WebauthnChallenges } from '../../db/entities/WebauthnChallenges.entity';
import { InviteTokens } from '../../db/entities/InviteTokens.entity';
import { TokensModule } from '../tokens/tokens.module';
import { AuthPublicController } from './auth-public.controller';
import { AuthController } from './auth.controller';
import { PasskeyController } from './passkey.controller';
import { AuthService } from './auth.service';
import { UserProfileService } from './user-profile.service';
import { RegistrationInvitesService } from './registration-invites.service';
import { PasskeyService } from './passkey.service';
import { AuthMcp } from './auth.mcp';
import { UserCleanupService } from './user-cleanup.service';
import { WebauthnConfigService } from './webauthn-config.service';
import { AppConfigModule } from '../app-config/app-config.module';
import { BudgetModule } from '../budget/budget.module';
import { AuditModule } from '../audit/audit.module';
import { MailerModule } from '../notifications/mailer/mailer.module';
import { PermissionsModule } from '../permissions/permissions.module';
import { TripMembershipModule } from '../trip-membership/trip-membership.module';
import { EphemeralTokenModule } from './ephemeral-token.module';
import { MulterModule } from '@nestjs/platform-express';
import { StorageModule } from '../storage/storage.module';
import { StorageService } from '../storage/storage.service';
import { buildStorageUploadOptions } from '../storage/storage-upload.factory';
import { AVATAR_FILE_FILTER, MAX_AVATAR_SIZE } from './auth.controller';
import { AllowedFileTypesModule } from '../files/allowed-file-types.module';

/**
 * Auth module — public flows (login/register/reset/mfa-verify/logout) and the
 * authenticated account/MFA/token endpoints. The OIDC sub-mount (/api/auth/oidc)
 * is a separate, not-yet-migrated route, so the strangler lists the auth
 * sub-paths explicitly rather than claiming all of /api/auth.
 *
 * PermissionsModule feeds getAppConfig's permissions block; MailerModule sends
 * the password-reset mail. It is a leaf module of its own precisely so this
 * import does not become AuthModule -> NotificationsModule -> AuthModule.
 *
 * AtlasModule is deliberately absent. getTravelStats was the only reason for it
 * and now belongs to AtlasService; the direction is reversed, so AtlasModule
 * imports AuthModule and atlas.mcp.ts can inject AuthService instead of routing
 * through auth.bridge. BudgetModule went the same way: it stopped importing
 * AuthModule when BudgetMcp's demo guard moved off AuthService, so this module
 * imports it and UserCleanupService injects BudgetService (which retired
 * budget.bridge). AuthService is
 * exported for the in-container consumers (the domain *.mcp.ts demo guards,
 * OidcService, PasskeyEnabledGuard); PasskeyService for AdminService's passkey
 * reset; UserCleanupService for the two account-deletion paths (AdminService)
 * and the guest deletion in TripsService; everything outside the container goes
 * through auth.bridge.ts.
 */
@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [StorageModule],
      inject: [StorageService],
      useFactory: (storage: StorageService) =>
        buildStorageUploadOptions(storage, {
          category: 'avatars',
          maxSize: MAX_AVATAR_SIZE,
          fileFilter: AVATAR_FILE_FILTER,
        }),
    }),
    StorageModule,
    AllowedFileTypesModule,
    EphemeralTokenModule, RateLimitModule, AuditModule, PermissionsModule, TripMembershipModule, MailerModule, AppConfigModule, TokensModule, BudgetModule,
    // AppSettings/Users: AuthService/UserProfileService each pass their own
    // AppSettingsRepository/UsersRepository to instance-api-keys.ts's
    // resolveApiKey/readInstanceApiKey/writeInstanceApiKey now (Plan 3a Task
    // 5). WebauthnCredentials/WebauthnChallenges: PasskeyService (Plan 3b
    // Task 3). InviteTokens: RegistrationInvitesService (Plan 3b Tasks 0/3)
    // — everything else either service still reads/writes is raw SQL
    // through DatabaseService (AuthService's own conversion is a later
    // task).
    MikroOrmModule.forFeature([AppSettings, Users, WebauthnCredentials, WebauthnChallenges, InviteTokens])],
  controllers: [AuthPublicController, AuthController, PasskeyController],
  providers: [AuthService, UserProfileService, RegistrationInvitesService, PasskeyService, UserCleanupService, WebauthnConfigService, AuthMcp],
  exports: [AuthService, RegistrationInvitesService, PasskeyService, UserCleanupService],
})
export class AuthModule {}
