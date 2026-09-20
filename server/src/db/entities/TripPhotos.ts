import { type Opt, type Ref, defineEntity, p, EntityRepository } from '@mikro-orm/core';
import { TrekPhotos } from './TrekPhotos.js';
import { TripAlbumLinks } from './TripAlbumLinks.js';
import { Trips } from './Trips.js';
import { Users } from './Users.js';

export class TripPhotos {
  id?: number | null;
  trip!: Ref<Trips>;
  user!: Ref<Users>;
  photo!: Ref<TrekPhotos>;
  shared: number & Opt = 1;
  albumLink?: Ref<TripAlbumLinks> | null;
  addedAt?: Date | null;
}

export class TripPhotosRepository extends EntityRepository<TripPhotos> {}

export const TripPhotosSchema = defineEntity({
  class: TripPhotos,
  repository: () => TripPhotosRepository,
  properties: {
    id: p.integer().primary().autoincrement(),
    trip: () => p.manyToOne(Trips).ref().deleteRule('cascade').index('idx_trip_photos_trip'),
    user: () => p.manyToOne(Users).ref().deleteRule('cascade'),
    photo: () => p.manyToOne(TrekPhotos).ref().deleteRule('cascade').index('idx_trip_photos_photo'),
    shared: p.integer(),
    albumLink: () => p.manyToOne(TripAlbumLinks).ref().nullable(),
    addedAt: p.datetime().nullable().onCreate(() => new Date()),
  },
});
