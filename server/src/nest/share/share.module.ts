import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TripShareController, SharedController } from './share.controller';
import { ShareService } from './share.service';
import { ShareMcp } from './share.mcp';
import { SettingsModule } from '../settings/settings.module';
import { PermissionsModule } from '../permissions/permissions.module';
import { QueryHelpersModule } from '../query-helpers/query-helpers.module';
import { PlacePhotosModule } from '../place-photos/place-photos.module';
import { StorageModule } from '../storage/storage.module';
import { AuthModule } from '../auth/auth.module';
import { McpSharedModule } from '../mcp-shared/mcp-shared.module';
import { Reservations } from '../../db/entities/Reservations.entity';

// `MikroOrmModule.forFeature([Reservations])` registers `ReservationsRepository`
// for `ShareService`'s `@InjectRepository` constructor param (Plan 3d Task 4 —
// its four reads on `reservations`/`reservation_endpoints`/
// `reservation_day_positions`/`day_accommodations` convert onto the same
// repository `ReservationsModule` owns, without importing that module itself:
// this file stays a leaf the way `PublicApiModule`'s own `Trips`-only
// `forFeature` already does for the same reason).
@Module({
  imports: [McpSharedModule, SettingsModule, PermissionsModule, QueryHelpersModule, AuthModule, PlacePhotosModule, StorageModule, MikroOrmModule.forFeature([Reservations])],
  controllers: [TripShareController, SharedController],
  providers: [ShareService, ShareMcp],
})
export class ShareModule {}
