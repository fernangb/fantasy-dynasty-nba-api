/* eslint-disable @typescript-eslint/no-namespace */
import { Team } from 'src/domain/teams/entities/team.entity';
import InMemoryTeamRepository from 'src/infra/teams/repositories/in-memory/in-memory-team.repository';
import { default as DefaultUseCase } from '../../domain/@shared/use-cases/use-case';
import { TeamOutput, TeamOutputMapper } from './dto/team-output.dto';

export namespace CreateTeamUseCase {
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private teamRepository: InMemoryTeamRepository) {}

    async execute(input: Input): Promise<Output> {
      const entity = new Team(input);
      await this.teamRepository.create(entity);
      return TeamOutputMapper.toOutput(entity);
    }
  }

  export type Input = {
    name: string;
    initials: string;
  };

  export type Output = TeamOutput;
}

export default CreateTeamUseCase;
