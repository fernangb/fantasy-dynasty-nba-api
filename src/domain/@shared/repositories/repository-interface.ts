export default interface RepositoryInterface<Entity> {
  create(props: Entity): Promise<void>;
  findAll(): Promise<Entity[]>;
  findById(id: string): Promise<Entity>;
  update(props: Entity): Promise<void>;
  delete(id: string): Promise<void>;
}
