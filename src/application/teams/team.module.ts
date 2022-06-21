import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import InMemoryTeamRepository from 'src/infra/database/teams/repositories/in-memory-team.repository';

@Module({
  controllers: [TeamController],
  providers: [TeamService, InMemoryTeamRepository],
})
export class TeamModule {}
