import CreateTeamUseCase from 'src/use-cases/teams/create-team.use-case';

export class CreateTeamDto implements CreateTeamUseCase.Input {
  name: string;
  initials: string;
}
