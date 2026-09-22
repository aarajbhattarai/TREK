import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AdminOidcController, OidcController } from './oidc.controller';
import { AuditModule } from '../audit/audit.module';
import { OidcService } from './oidc.service';
import { AuthModule } from '../auth/auth.module';
import { TripMembershipModule } from '../trip-membership/trip-membership.module';
import { Users } from '../../db/entities/Users.entity';
import { InviteTokens } from '../../db/entities/InviteTokens.entity';
import { AppSettings } from '../../db/entities/AppSettings.entity';

@Module({
  imports: [AuthModule, TripMembershipModule, AuditModule, MikroOrmModule.forFeature([Users, InviteTokens, AppSettings])],
  controllers: [OidcController, AdminOidcController],
  providers: [OidcService],
})
export class OidcModule {}
