import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AllowedFileTypesService } from './allowed-file-types.service';
import { AppSettings } from '../../db/entities/AppSettings.entity';

/**
 * A leaf so both upload paths can reach the extension list without importing
 * each other's domain. `MikroOrmModule.forFeature([AppSettings])` registers
 * `AppSettingsRepository` for `AllowedFileTypesService`'s `@InjectRepository`
 * (FL29 — the existing 3a repository, this table is not this plan's own).
 */
@Module({
  imports: [MikroOrmModule.forFeature([AppSettings])],
  providers: [AllowedFileTypesService],
  exports: [AllowedFileTypesService],
})
export class AllowedFileTypesModule {}
