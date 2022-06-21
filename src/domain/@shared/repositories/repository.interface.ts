export default interface RepositoryInterface<Entity> {
  create(entity: Entity): Promise<void>;
  findAll(): Promise<Entity[]>;
  findById(id: string): Promise<Entity>;
  update(entity: Entity): Promise<void>;
  delete(id: string): Promise<void>;
}
