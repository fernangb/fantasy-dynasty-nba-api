import Entity from 'src/domain/@shared/entities/entity';

interface TeamProps {
  id?: string;
  name: string;
  initials: string;
}

export class Team extends Entity {
  private _name: string;
  private _initials: string;

  constructor(props: TeamProps) {
    super(props.id);

    this._name = props.name;
    this._initials = props.initials ? props.initials.toUpperCase() : undefined;

    this.validate();
  }

  get name(): string {
    return this._name;
  }

  get initials(): string {
    return this._initials;
  }

  private validate() {
    if (this._name === null || this._name === undefined || this._name === '')
      throw new Error('Name is required');

    if (
      this._initials === null ||
      this._initials === undefined ||
      this._initials === ''
    )
      throw new Error('Initials is required');

    if (this._initials.length !== 3)
      throw new Error('Initials length is invalid');
  }
}
