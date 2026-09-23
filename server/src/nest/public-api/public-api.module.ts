import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PublicApiController } from './public-api.controller';
import { PublicApiService } from './public-api.service';
import { ApiTokenGuard } from './api-token.guard';
import { TokensModule } from '../tokens/tokens.module';
import { TripMembershipModule } from '../trip-membership/trip-membership.module';
import { RateLimitModule } from '../common/rate-limit.module';
import { Trips } from '../../db/entities/Trips.entity';
import { Reservations } from '../../db/entities/Reservations.entity';

/**
 * Public API v1 — the versioned read-only surface for third-party integrations.
 *
 * Imports rather than re-implements: token verification comes from TokensModule,
 * trip access from TripMembershipModule and DatabaseService. This module owns the
 * payload shaping and nothing else, so there is no second place where "who may read
 * this trip" is decided.
 *
 * Deliberately a leaf. Pulling in a domain module for one table drags its whole
 * graph along: AtlasModule needs AuthModule, which boots the storage registry,
 * which reads app_settings on init. A read-only surface that cannot start without
 * half the application is one that breaks for reasons it has nothing to do with.
 *
 * That constraint is why `GET /api/v1/stats` is not declared here: its figures are
 * AtlasService's, so the route lives in `atlas/` instead and provides this guard
 * class itself. No module edge either way — which is the point.
 */
@Module({
  // `MikroOrmModule.forFeature([Trips, Reservations])` registers
  // `TripsRepository` (Plan 3d Task 5 — its trip reads convert onto the same
  // repository `TripsModule` owns) and `ReservationsRepository` (Plan 3d
  // Task 4's pickup — `reservationsByDay`/`buildAccommodations`/
  // `buildUnplannedPlaces`/`buildUnscheduledReservations`) for
  // `PublicApiService`'s `@InjectRepository` constructor params, without
  // pulling `TripsModule`/`ReservationsModule` themselves in, per this
  // module's leaf-module constraint above.
  imports: [TokensModule, TripMembershipModule, RateLimitModule, MikroOrmModule.forFeature([Trips, Reservations])],
  controllers: [PublicApiController],
  providers: [PublicApiService, ApiTokenGuard],
})
export class PublicApiModule {}
