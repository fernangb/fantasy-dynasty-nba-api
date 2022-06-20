import { Team } from 'src/domain/teams/entities/team.entity';

export type TeamOutput = {
  id: string;
  name: string;
  initials: string;
};

export class TeamOutputMapper {
  static toOutput(entity: Team): TeamOutput {
    return entity.toJSON();
  }
}
