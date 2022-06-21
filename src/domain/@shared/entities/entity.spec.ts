import Entity from './entity';

describe('Entity Unit Tests', () => {
  it('should create an id', () => {
    const id = '1';
    const entity = new Entity(id);

    expect(entity.id).toBe(id);
  });

  it('should create an id if is not provided', () => {
    const entity = new Entity();

    expect(entity.id).toBeDefined();
  });
});
