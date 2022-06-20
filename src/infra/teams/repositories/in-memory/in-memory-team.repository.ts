import { InMemoryRepository } from 'src/domain/@shared/repositories/in-memory-repository';
import { Team } from 'src/domain/teams/entities/team.entity';

export default class InMemoryTeamRepository extends InMemoryRepository<Team> {}
