import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MapsController } from './maps.controller';
import { MapsService } from './maps.service';
import { MapsMcp } from './maps.mcp';
import { PlacePhotosModule } from '../place-photos/place-photos.module';
import { StorageModule } from '../storage/storage.module';
import { AppSettings } from '../../db/entities/AppSettings.entity';
import { Users } from '../../db/entities/Users.entity';

/**
 * Maps / geo domain (L3 leaf module). Registered in AppModule. Exports
 * MapsService for the in-container consumers (BookingImportModule's Nominatim
 * geocoding, PlacesModule's search_place tool and list-import enrichment).
 * Nothing outside the container consumes this domain, so there is no bridge.
 *
 * MikroOrmModule.forFeature([AppSettings, Users]): MapsService passes its own
 * AppSettingsRepository/UsersRepository to instance-api-keys.ts's
 * resolveApiKey now (Plan 3a Task 5) — every other read here is still raw SQL
 * through DatabaseService (maps is outside Plan 3a).
 */
@Module({
  imports: [PlacePhotosModule, StorageModule, MikroOrmModule.forFeature([AppSettings, Users])],
  controllers: [MapsController],
  providers: [MapsService, MapsMcp],
  exports: [MapsService],
})
export class MapsModule {}
