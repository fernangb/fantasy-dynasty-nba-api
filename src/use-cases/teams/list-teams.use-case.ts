/* eslint-disable @typescript-eslint/no-namespace */
import { Team } from 'src/domain/teams/entities/team.entity';
import InMemoryTeamRepository from 'src/infra/teams/repositories/in-memory/in-memory-team.repository';
import { default as DefaultUseCase } from '../../domain/@shared/use-cases/use-case';
import { TeamOutput, TeamOutputMapper } from './dto/team-output.dto';

export namespace ListTeamsUseCase {
  export class UseCase implements DefaultUseCase<Input, Output> {
    constructor(private teamRepository: InMemoryTeamRepository) {}

    async execute(input: Input): Promise<Output> {
      const searchResult = await this.teamRepository.findAll();
      return this.toOutput(searchResult);
    }

    private toOutput(searchResult: Team[]): Output {
      const items = searchResult.map((i) => {
        return TeamOutputMapper.toOutput(i);
      });
      return items;
    }
  }

  export type Input = {};

  export type Output = TeamOutput[];
}

export default ListTeamsUseCase;
