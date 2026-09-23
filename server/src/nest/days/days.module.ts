import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { DaysController } from './days.controller';
import { DaysService } from './days.service';
import { DaysMcp } from './days.mcp';
import { DaysRpc } from './days.rpc';
import { PluginGuardsModule } from '../plugins/host/plugin-guards.module';
import { RealtimeModule } from '../realtime/realtime.module';
import { PermissionsModule } from '../permissions/permissions.module';
import { QueryHelpersModule } from '../query-helpers/query-helpers.module';
import { PlacesModule } from '../places/places.module';
import { AuthModule } from '../auth/auth.module';
import { McpSharedModule } from '../mcp-shared/mcp-shared.module';
import { Days } from '../../db/entities/Days.entity';
import { DayAssignments } from '../../db/entities/DayAssignments.entity';
import { DayNotes } from '../../db/entities/DayNotes.entity';
import { Trips } from '../../db/entities/Trips.entity';

/**
 * Days (S6 — Phase 2 trip sub-domain), mounted at /api/trips/:tripId/days.
 * DaysMcp carries the decorator-registered MCP tools + resources. DaysService is
 * exported for in-container consumers (DaysRpc, AccommodationsService,
 * TripsService, the assignments/reservations MCP controllers).
 *
 * Day notes used to live here too, with their own full file set; they are their
 * own domain now (day-notes/).
 *
 * `MikroOrmModule.forFeature([Days, DayAssignments, DayNotes, Trips])`
 * registers `DaysRepository`/`DayAssignmentsRepository`/`DayNotesRepository`/
 * `TripsRepository` for `DaysService`'s `@InjectRepository` constructor
 * params (Plan 3c Task 2) — the same forFeature + `@InjectRepository`
 * wiring every converted domain copies (`trip-membership.module.ts`'s
 * precedent for pulling in a repository this module doesn't otherwise own).
 */
@Module({
  imports: [
    McpSharedModule,
    PermissionsModule,
    QueryHelpersModule,
    PlacesModule,
    AuthModule,
    RealtimeModule,
    PluginGuardsModule,
    MikroOrmModule.forFeature([Days, DayAssignments, DayNotes, Trips]),
  ],
  controllers: [DaysController],
  providers: [DaysService, DaysMcp, DaysRpc],
  exports: [DaysService],
})
export class DaysModule {}
