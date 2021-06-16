import chrtGeneric from '~/charts/chrtGeneric';
import * as util from '~/charts/util';

describe('Testing chrtGeneric', () => {
  test('Test id', async () => {
    const id = 'abc123';

    const obj = new chrtGeneric();
    obj.id(id)
    expect(obj.id()).toEqual(id)
  });

  test('Test id for <g>', async () => {
    const id = 'abc123';

    const obj = new chrtGeneric();
    obj.node(util.createSVG())
    obj.render();
    obj.id(id)

    const node = obj.node();
    expect(node instanceof SVGElement).toBe(true);
  });

  test('Test class', async () => {
    const className = 'abc123';

    const obj = new chrtGeneric();
    obj.node(util.createSVG())
    obj.render();
    obj.class(className)
    expect(obj.class()).toEqual([className])
  });

  test('Test multiple class', async () => {
    const className1 = 'abc123';
    const className2 = 'def456';

    const obj = new chrtGeneric();
    obj.class(className1)
    obj.class(className2)
    expect(obj.class()).toEqual([className1, className2])
  });

  test('Test hasData', async () => {
    const obj = new chrtGeneric();
    expect(obj.hasData()).toEqual(false)
  });

  test('Test this.x', async () => {
    const obj = new chrtGeneric();
    obj.x('x');

    expect(obj.scales.x).toBeDefined()
    expect(obj.x()).toEqual('x')
  });

  test('Test this.y', async () => {
    const obj = new chrtGeneric();
    obj.y('y');

    expect(obj.scales.x).toBeDefined()
    expect(obj.y()).toEqual('y')
  });
});
