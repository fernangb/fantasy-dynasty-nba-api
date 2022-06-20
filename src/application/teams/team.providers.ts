/* eslint-disable @typescript-eslint/no-namespace */

import InMemoryTeamRepository from 'src/infra/teams/repositories/in-memory/in-memory-team.repository';
import CreateTeamUseCase from 'src/use-cases/teams/create-team.use-case';
import ListTeamsUseCase from 'src/use-cases/teams/list-teams.use-case';

export namespace TEAM_PROVIDERS {
  export namespace REPOSITORIES {
    export const IN_MEMORY_TEAM_REPOSITORY = {
      provide: 'InMemoryTeamRepository',
      useClass: InMemoryTeamRepository,
    };
  }

  export namespace USE_CASES {
    export const CREATE_TEAM_USE_CASE = {
      provide: CreateTeamUseCase.UseCase,
      useClass: InMemoryTeamRepository,
      useFactory: (teamRepository: InMemoryTeamRepository) => {
        return new CreateTeamUseCase.UseCase(teamRepository);
      },
      inject: [REPOSITORIES.IN_MEMORY_TEAM_REPOSITORY.provide],
    };

    export const LIST_CATEGORIES_USE_CASE = {
      provide: ListTeamsUseCase.UseCase,
      useFactory: (teamRepository: InMemoryTeamRepository) => {
        return new ListTeamsUseCase.UseCase(teamRepository);
      },
      inject: [REPOSITORIES.IN_MEMORY_TEAM_REPOSITORY.provide],
    };
  }
}
