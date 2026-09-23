import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MapsModule } from '../maps/maps.module';
import { PlacePhotosModule } from '../place-photos/place-photos.module';
import { RateLimitModule } from '../common/rate-limit.module';
import { PlaceEnrichmentController } from './place-enrichment.controller';
import { PlaceEnrichmentService } from './place-enrichment.service';
import { PlaceDetailsCache } from '../../db/entities/PlaceDetailsCache.entity';
import { AppSettings } from '../../db/entities/AppSettings.entity';

/**
 * Place enrichment (L4 leaf module). Registered in AppModule.
 *
 * Consumes MapsService for the provider primitives and PlacePhotoCacheService
 * for the picture bytes — both already single instances in the container, which
 * matters here: the photo cache's stampede guard and the maps concurrency limit
 * only hold if this module queues behind the same ones everything else uses.
 * Nothing outside the container consumes it, so there is no bridge.
 *
 * MikroOrmModule.forFeature registers PlaceDetailsCacheRepository/
 * AppSettingsRepository for PlaceEnrichmentService's @InjectRepository
 * constructor (Plan 3c Task 1).
 */
@Module({
  imports: [MapsModule, PlacePhotosModule, RateLimitModule, MikroOrmModule.forFeature([PlaceDetailsCache, AppSettings])],
  controllers: [PlaceEnrichmentController],
  providers: [PlaceEnrichmentService],
})
export class PlaceEnrichmentModule {}
