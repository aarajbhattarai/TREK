import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { QueryHelpersService } from './query-helpers.service';
import { Tags } from '../../db/entities/Tags.entity';
import { PlaceRatings } from '../../db/entities/PlaceRatings.entity';
import { AssignmentParticipants } from '../../db/entities/AssignmentParticipants.entity';

/** Shared batch loaders for the list endpoints. No controller or MCP surface of
 *  its own — assignments, days, places and share import it for the loaders.
 *  Deliberately NOT @Global so e2e TestingModules resolve it transitively
 *  through each consumer's explicit import, same as PermissionsModule.
 *
 *  MikroOrmModule.forFeature registers TagsRepository/PlaceRatingsRepository/
 *  AssignmentParticipantsRepository for QueryHelpersService's
 *  @InjectRepository constructor (Plan 3c Task 1). */
@Module({
  imports: [MikroOrmModule.forFeature([Tags, PlaceRatings, AssignmentParticipants])],
  providers: [QueryHelpersService],
  exports: [QueryHelpersService],
})
export class QueryHelpersModule {}
