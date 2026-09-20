import { Collection, type Ref, defineEntity, p, EntityRepository } from '@mikro-orm/core';
import { CollectionPlaces } from './CollectionPlaces.js';
import { Places } from './Places.js';
import { Users } from './Users.js';

export class Tags {
  id?: number | null;
  user!: Ref<Users>;
  name!: string;
  color?: string | null = '#10b981';
  createdAt?: Date | null;
  collectionPlaceTagsInverse = new Collection<CollectionPlaces>(this);
  placeTagsInverse = new Collection<Places>(this);
}

export class TagsRepository extends EntityRepository<Tags> {}

export const TagsSchema = defineEntity({
  class: Tags,
  repository: () => TagsRepository,
  properties: {
    id: p.integer().primary().autoincrement(),
    user: () => p.manyToOne(Users).ref().deleteRule('cascade'),
    name: p.text(),
    color: p.text().nullable(),
    createdAt: p.datetime().nullable().onCreate(() => new Date()),
    collectionPlaceTagsInverse: () => p.manyToMany(CollectionPlaces).mappedBy('collectionPlaceTags'),
    placeTagsInverse: () => p.manyToMany(Places).mappedBy('placeTags'),
  },
});
