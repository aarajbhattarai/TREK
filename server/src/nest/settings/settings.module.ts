import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AdminDefaultUserSettingsController, SettingsController } from './settings.controller';
import { AuthModule } from '../auth/auth.module';
import { AuditModule } from '../audit/audit.module';
import { SettingsService } from './settings.service';
import { SettingsMcp } from './settings.mcp';
import { AppConfigModule } from '../app-config/app-config.module';
import { AppSettings } from '../../db/entities/AppSettings.entity';
import { Settings } from '../../db/entities/Settings.entity';
import { Users } from '../../db/entities/Users.entity';

/** Exports SettingsService for in-container consumers (admin, share, llm-parse). */
@Module({
  // AuthModule for the admin gate on the defaults routes, and for the
  // AuthService that SettingsMcp's demo gate injects. MikroOrmModule.forFeature
  // registers AppSettingsRepository/SettingsRepository for the
  // @InjectRepository(...) constructor params below (Plan 3a Task 0/5) — the
  // forFeature + @InjectRepository wiring pattern every later domain copies.
  // `Users` is registered too even though nothing here uses
  // `@InjectRepository(Users)`: `instance-api-keys.ts`'s repository-backed
  // functions resolve `UsersRepository` off the ACTIVE MikroORM request
  // context instead (see that file's own docstring for why — its callers
  // span ~6 domains outside this module's DI graph), so this entry is here
  // for parity with the brief/inventory's documented wiring, not because a
  // provider in this module needs the token.
  imports: [AppConfigModule, AuthModule, AuditModule, MikroOrmModule.forFeature([AppSettings, Settings, Users])],
  controllers: [SettingsController, AdminDefaultUserSettingsController],
  providers: [SettingsService, SettingsMcp],
  exports: [SettingsService],
})
export class SettingsModule {}
