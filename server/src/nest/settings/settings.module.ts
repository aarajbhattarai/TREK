import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AdminDefaultUserSettingsController, SettingsController } from './settings.controller';
import { AuthModule } from '../auth/auth.module';
import { AuditModule } from '../audit/audit.module';
import { SettingsService } from './settings.service';
import { SettingsMcp } from './settings.mcp';
import { AppConfigModule } from '../app-config/app-config.module';
import { AppSettings } from '../../db/entities/AppSettings.entity';

/** Exports SettingsService for in-container consumers (admin, share, llm-parse). */
@Module({
  // AuthModule for the admin gate on the defaults routes, and for the
  // AuthService that SettingsMcp's demo gate injects. MikroOrmModule.forFeature
  // registers AppSettingsRepository for @InjectRepository(AppSettings) below —
  // the forFeature + @InjectRepository wiring pattern every later domain copies.
  imports: [AppConfigModule, AuthModule, AuditModule, MikroOrmModule.forFeature([AppSettings])],
  controllers: [SettingsController, AdminDefaultUserSettingsController],
  providers: [SettingsService, SettingsMcp],
  exports: [SettingsService],
})
export class SettingsModule {}
