import { v4 as uuidv4 } from 'uuid';

export default class Entity<Props = any> {
  private _id: string;

  constructor(public readonly props: Props, id?: string) {
    this._id = id ?? uuidv4();
  }

  get id(): string {
    return this._id;
  }

  toJSON(): Required<{ id: string } & Props> {
    return {
      id: this.id,
      ...this.props,
    } as Required<{ id: string } & Props>;
  }
}
