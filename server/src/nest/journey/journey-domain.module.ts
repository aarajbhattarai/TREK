import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { RealtimeModule } from '../realtime/realtime.module';
import { TrekPhotosModule } from '../photos/trek-photos.module';
import { JourneyDomainService } from './journey-domain.service';
import { PluginGuardsModule } from '../plugins/host/plugin-guards.module';
import { JourneyShareService } from './journey-share.service';
import { SettingsModule } from '../settings/settings.module';
import { Journeys } from '../../db/entities/Journeys.entity';
import { JourneyContributors } from '../../db/entities/JourneyContributors.entity';
import { JourneyTrips } from '../../db/entities/JourneyTrips.entity';
import { JourneyEntries } from '../../db/entities/JourneyEntries.entity';
import { Trips } from '../../db/entities/Trips.entity';

/**
 * Leaf module holding the journey domain itself, without the controllers.
 *
 * Places, assignments and the plugin host each need a handful of journey
 * functions; importing the full JourneyModule for that would drag MemoriesModule
 * (and with it both photo providers) into their graphs. This carries the two
 * services and nothing else - same shape as TrekPhotosModule.
 *
 * JournalRpc moved out to JournalRpcModule when it started writing photo bytes:
 * that needs StorageService and MemoriesModule, and pulling those in here would
 * undo the whole point of this module.
 *
 * RealtimeModule is imported explicitly even though it is @Global, so a
 * single-domain e2e TestingModule can still resolve the broadcast.
 *
 * SettingsModule is the one addition to that shape: the public journey payload
 * carries the owner's CARTO tile key, and resolving that (per-user value, admin
 * instance default, managed-instance key, all decrypted) is SettingsService's
 * job rather than a second copy of its SQL here.
 *
 * `MikroOrmModule.forFeature([Journeys, JourneyContributors, JourneyTrips,
 * JourneyEntries, Trips])` registers `JourneysRepository`/
 * `JourneyContributorsRepository`/`JourneyTripsRepository`/
 * `JourneyEntriesRepository`/`TripsRepository` for `JourneyDomainService`'s
 * `@InjectRepository` constructor params (Plan 3g Task 1, Part A — the FIRST
 * `forFeature` array this module declares; no other module injects a
 * `Journey*Repository` directly, every downstream consumer reaches this
 * cluster only through `JourneyDomainService`/`JourneyShareService`, per the
 * program's own boot-gate note for this task). `Trips` is included the same
 * way `days.module.ts`/`memories.module.ts` each register it locally for
 * their own `@InjectRepository(Trips)` param — every module that constructs
 * a service needing a repository lists that entity in its own `forFeature`.
 */
@Module({
  imports: [
    RealtimeModule,
    TrekPhotosModule,
    PluginGuardsModule,
    SettingsModule,
    MikroOrmModule.forFeature([Journeys, JourneyContributors, JourneyTrips, JourneyEntries, Trips]),
  ],
  providers: [JourneyDomainService, JourneyShareService],
  exports: [JourneyDomainService, JourneyShareService],
})
export class JourneyDomainModule {}
