import { Bus, Car, Plane, Sailboat, Ship, Train, type LucideIcon } from 'lucide-react'
import { formatDurationShort } from './roadtripModel'
import { formatClockTime } from '../../utils/formatters'
import { TRANSPORT_TYPES } from '../../utils/dayMerge'
import type { CarrierTerminal, RouteSegment } from '@trek/shared/roadtrip'
import type { Reservation, TranslationFn } from '../../types'

/**
 * How a ride and its two terminals, and a hire car's two desks, read on the rail and in
 * the phone chain (#2428), and which of the bookings under a stop open there.
 *
 * One module for both shells, because the two would otherwise carry the same icon table
 * and the same three sentences each, and the duplication budget does not stretch to that.
 * The icons are the booking panel's for the same types, so a flight looks like a flight
 * wherever the trip shows it.
 */
const CARRIER_ICON: Record<string, LucideIcon> = {
  flight: Plane,
  train: Train,
  ferry: Sailboat,
  cruise: Ship,
  bus: Bus,
  car: Car,
}

export function carrierIcon(type: string): LucideIcon {
  return CARRIER_ICON[type] ?? Plane
}

/**
 * The line under a terminal's name: the timetable's clock at it, in the reader's own
 * clock format. Nothing when the booking names no time.
 */
export function terminalLine(carrier: CarrierTerminal, t: TranslationFn, is12h: boolean): string | null {
  if (!carrier.at) return null
  const time = formatClockTime(carrier.at, is12h)
  return t(`roadtrip.ride.${carrier.role}`, { time })
}

/**
 * What the ride's pill says: the booking, then how long it takes when the timetable gives
 * both ends. A ride with no minutes is still the booking, and says so without a duration.
 * A ride leg met without its booking is just the minutes.
 */
export function rideText(carrier: Pick<CarrierTerminal, 'title'> | undefined, seg: RouteSegment | undefined): string {
  const seconds = seg && Number.isFinite(seg.duration) ? seg.duration : 0
  const duration = seg?.durationText || (seconds > 0 ? formatDurationShort(seconds) : '')
  if (!carrier) return duration
  return duration ? `${carrier.title} · ${duration}` : carrier.title
}

/**
 * Whether a booking chip opens for this reader. A transport has a detail view anybody
 * may look at; a table or a ticket has only its editor, the split the planner page makes
 * when it opens one. Without the right to edit bookings the chip stays a plain chip,
 * the way the place inspector's booking strip stays inert (#2012).
 */
export function bookingOpens(booking: Pick<Reservation, 'type'>, canEditBookings: boolean): boolean {
  return TRANSPORT_TYPES.has(booking.type) || canEditBookings
}
