import { Inject, Injectable } from '@nestjs/common';
import CreateTeamUseCase from 'src/use-cases/teams/create-team.use-case';
import ListTeamsUseCase from 'src/use-cases/teams/list-teams.use-case';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamService {
  @Inject(CreateTeamUseCase.UseCase)
  private createUseCase: CreateTeamUseCase.UseCase;

  @Inject(ListTeamsUseCase.UseCase)
  private listUseCase: ListTeamsUseCase.UseCase;

  async create(createCategoryDto: CreateTeamUseCase.Input) {
    console.log(createCategoryDto);
    console.log(this.createUseCase);
    return this.createUseCase.execute(createCategoryDto);
  }

  async findAll() {
    return this.listUseCase.execute({});
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
