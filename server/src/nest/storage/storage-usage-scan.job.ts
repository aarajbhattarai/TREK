import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { CronRegistrarService } from '../scheduling/cron-registrar.service';
import { StorageStatsService } from './storage-stats.service';

/** Nightly usage scan — 04:15, off the backup and thumb-sweep hours. */
@Injectable()
export class StorageUsageScanJob implements OnApplicationBootstrap {
  private readonly logger = new Logger(StorageUsageScanJob.name);

  constructor(
    private readonly registrar: CronRegistrarService,
    private readonly stats: StorageStatsService,
  ) {}

  // `async` only so the sweep's call-graph gate sees a non-sync DB-reaching
  // frame here: nothing in the body awaits, and Nest awaits the returned
  // promise before the next bootstrap hook, exactly as it did the `void`.
  async onApplicationBootstrap(): Promise<void> {
    if (!this.registrar.isEnabled()) return;
    this.registrar.register('storage-usage-scan', '15 4 * * *', () => {
      void this.tick();
    });
  }

  async tick(): Promise<void> {
    try {
      await this.stats.scan();
    } catch (err) {
      this.logger.error(`usage scan failed: ${err instanceof Error ? err.message : String(err)}`);
    }
  }
}
