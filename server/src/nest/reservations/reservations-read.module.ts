import { Module } from '@nestjs/common';
import { ReservationsReadService } from './reservations-read.service';

/**
 * A leaf on purpose (the trip-membership precedent): AirtrailCoreModule needs
 * the single-reservation hydration reads without dragging ReservationsModule
 * in — which would re-close the cycle that airtrail.bridge used to dodge.
 */
@Module({
  providers: [ReservationsReadService],
  exports: [ReservationsReadService],
})
export class ReservationsReadModule {}
