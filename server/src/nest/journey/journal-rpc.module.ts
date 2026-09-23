import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AllowedFileTypesModule } from '../files/allowed-file-types.module';
import { MemoriesModule } from '../memories/memories.module';
import { PluginGuardsModule } from '../plugins/host/plugin-guards.module';
import { StorageModule } from '../storage/storage.module';
import { JourneyDomainModule } from './journey-domain.module';
import { JournalRpc } from './journal.rpc';
import { Users } from '../../db/entities/Users.entity';

/**
 * The journal plugin surface, in its own container.
 *
 * JournalRpc used to sit in JourneyDomainModule, and it cannot stay there now
 * that it writes photo bytes: that needs StorageService and, for the EXIF
 * backfill, PhotoCaptureBackfillService out of MemoriesModule. JourneyDomainModule
 * exists precisely so places, assignments and the plugin host can reach a few
 * journey functions WITHOUT dragging MemoriesModule and both photo providers into
 * their graphs (see the comment there), so the dependency goes here instead and
 * only the plugin host pays for it.
 *
 * JourneyDomainModule is re-exported so importing this one is a superset of
 * importing that one, and nothing that already depended on it has to change.
 *
 * `MikroOrmModule.forFeature([Users])` — Plan 3g Task 3: `JournalRpc`'s
 * demo-mode gate (JR1) now injects `UsersRepository.getEmail`, and
 * `@InjectRepository` resolves from THIS module's own `forFeature` graph,
 * not `AuthModule`'s (which this module does not import).
 */
@Module({
  imports: [JourneyDomainModule, StorageModule, AllowedFileTypesModule, MemoriesModule, PluginGuardsModule, MikroOrmModule.forFeature([Users])],
  providers: [JournalRpc],
  exports: [JourneyDomainModule],
})
export class JournalRpcModule {}
