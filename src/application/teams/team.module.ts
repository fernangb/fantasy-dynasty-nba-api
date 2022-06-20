import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { TEAM_PROVIDERS } from './team.providers';

@Module({
  controllers: [TeamController],
  providers: [
    TeamService,
    ...Object.values(TEAM_PROVIDERS.REPOSITORIES),
    ...Object.values(TEAM_PROVIDERS.USE_CASES),
  ],
})
export class TeamModule {}
