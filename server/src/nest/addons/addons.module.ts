import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AddonsController } from './addons.controller';
import { AddonsService } from './addons.service';
import { AddonGuard } from './addon.guard';
import { AddonsMcp } from './addons.mcp';
import { Addons } from '../../db/entities/Addons.entity';
import { PhotoProviders } from '../../db/entities/PhotoProviders.entity';
import { PhotoProviderFields } from '../../db/entities/PhotoProviderFields.entity';
import { AppSettings } from '../../db/entities/AppSettings.entity';

/**
 * GET /api/addons — enabled add-ons + photo providers (was an inline handler in
 * server/src/app.ts). The addon sub-features (atlas, vacay) keep their own
 * modules; this only serves the EXACT /api/addons listing.
 *
 * Exports AddonsService — the owner of addon/feature-flag enablement reads
 * (isAddonEnabled + bag-tracking/collab-features flags, extracted from
 * adminService per finding `admin-1`) — for the in-container consumers.
 * Deliberately NOT @Global (permissions precedent): e2e TestingModules resolve
 * it transitively through each consumer's explicit import.
 *
 * AddonsMcp puts the same listing on the MCP surface, so a model can read which
 * add-ons this instance has switched on instead of guessing from the tools it
 * was handed.
 *
 * MikroOrmModule.forFeature registers AddonsRepository/PhotoProvidersRepository/
 * PhotoProviderFieldsRepository/AppSettingsRepository for AddonsService's
 * @InjectRepository constructor (Plan 3a Task 4) — the forFeature +
 * @InjectRepository wiring pattern Task 0 set up on SettingsModule.
 */
@Module({
  imports: [MikroOrmModule.forFeature([Addons, PhotoProviders, PhotoProviderFields, AppSettings])],
  controllers: [AddonsController],
  providers: [AddonsService, AddonGuard, AddonsMcp],
  exports: [AddonsService, AddonGuard],
})
export class AddonsModule {}
