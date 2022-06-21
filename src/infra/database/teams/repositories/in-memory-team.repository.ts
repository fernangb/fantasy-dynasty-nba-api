import RepositoryInterface from 'src/domain/@shared/repositories/repository.interface';
import { Team } from 'src/domain/teams/entities/team.entity';

export default class InMemoryTeamRepository
  implements RepositoryInterface<Team>
{
  private teams: Team[];

  constructor() {
    this.teams = [];
  }

  async create(entity: Team): Promise<void> {
    this.teams.push(entity);
  }

  async findAll(): Promise<Team[]> {
    return this.teams;
  }

  async findById(id: string): Promise<Team> {
    return this.teams.find((team) => team.id === id);
  }

  async update(entity: Team): Promise<void> {
    const teamIndex = this.teams.findIndex((team) => team.id === entity.id);

    if (teamIndex !== -1) {
      const updatedItem = new Team({
        id: entity.id,
        name: entity.name,
        initials: entity.initials,
      });
      this.teams[teamIndex] = updatedItem;
    }
  }

  async delete(id: string): Promise<void> {
    const teamIndex = this.teams.findIndex((team) => team.id === id);

    if (teamIndex !== -1) this.teams.splice(teamIndex, 1);
  }

  async findByName(name: string): Promise<Team> {
    return this.teams.find((team) => team.name === name);
  }

  async findByInitials(initials: string): Promise<Team> {
    return this.teams.find((team) => team.initials === initials);
  }
}
