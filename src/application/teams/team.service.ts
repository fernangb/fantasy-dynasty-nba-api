import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Team } from 'src/domain/teams/entities/team.entity';
import InMemoryTeamRepository from 'src/infra/database/teams/repositories/in-memory-team.repository';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamOutput } from './dto/team-output.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamService {
  constructor(
    @Inject(InMemoryTeamRepository)
    private readonly teamRepository: InMemoryTeamRepository,
  ) {}

  async create(createTeamDto: CreateTeamDto): Promise<TeamOutput> {
    const findTeamByName = await this.teamRepository.findByName(
      createTeamDto.name,
    );

    if (findTeamByName)
      throw new BadRequestException('This name already exists');

    const findTeamByInitials = await this.teamRepository.findByInitials(
      createTeamDto.initials,
    );

    if (findTeamByInitials)
      throw new BadRequestException('This initials already exists');

    const team = new Team({
      name: createTeamDto.name,
      initials: createTeamDto.initials,
    });

    await this.teamRepository.create(team);

    return {
      id: team.id,
      name: team.name,
      initials: team.initials,
    };
  }

  async findAll(): Promise<TeamOutput[]> {
    return this.teamRepository.findAll();
  }

  async findOne(id: string): Promise<TeamOutput> {
    return this.teamRepository.findById(id);
  }

  async update(id: string, updateTeamDto: UpdateTeamDto) {
    const findTeam = await this.teamRepository.findById(id);

    if (!findTeam) throw new BadRequestException('This team does not exists');

    const team = new Team({
      id,
      name: updateTeamDto.name,
      initials: updateTeamDto.initials,
    });

    await this.teamRepository.update(team);

    return {
      id: team.id,
      name: team.name,
      initials: team.initials,
    };
  }

  async remove(id: string) {
    await this.teamRepository.delete(id);
  }
}
