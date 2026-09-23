import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TripMembersController } from './trip-members.controller';
import { TripMembersService } from './trip-members.service';
import { DatabaseModule } from '../database/database.module';
import { PermissionsModule } from '../permissions/permissions.module';
import { RealtimeModule } from '../realtime/realtime.module';
import { AuditModule } from '../audit/audit.module';
import { AuthModule } from '../auth/auth.module';
import { BudgetModule } from '../budget/budget.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { Trips } from '../../db/entities/Trips.entity';
import { TripMembers } from '../../db/entities/TripMembers.entity';
import { Users } from '../../db/entities/Users.entity';

/**
 * The member/guest roster of a trip.
 *
 * A sink module: it imports auth (for the plugin-data erasure a deleted guest
 * triggers) and budget (for the expense re-split that goes with it), and nothing
 * imports it back except trips. That is what keeps it legal — trip-membership/
 * next door cannot do the same, because AuthModule imports *that* one, so giving
 * it these dependencies would close the cycle.
 *
 * `MikroOrmModule.forFeature([Trips, TripMembers, Users])` (Plan 3c Task 6):
 * `DatabaseModule` stays too — `TripMembersService` still holds one documented
 * raw-SQL survivor (`getTripForViewer`, pending Task 7) and the still-`DatabaseService`
 * -routed `canAccessTrip` delegation, the same carve-out `DaysService`/every other
 * converted domain in this program keeps.
 */
@Module({
  imports: [
    NotificationsModule, DatabaseModule, PermissionsModule, RealtimeModule, AuditModule, AuthModule, BudgetModule,
    MikroOrmModule.forFeature([Trips, TripMembers, Users]),
  ],
  controllers: [TripMembersController],
  providers: [TripMembersService],
  exports: [TripMembersService],
})
export class TripMembersModule {}
