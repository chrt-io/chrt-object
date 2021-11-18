import chrtObject from '~/charts/chrtObject';
import * as util from '~/charts/util';

describe('Testing chrtObject', () => {
  test('Test id', async () => {
    const id = 'abc123';

    const obj = new chrtObject();
    obj.id(id)
    expect(obj.id()).toEqual(id)
  });

  test('Test id for <g>', async () => {
    const id = 'abc123';

    const obj = new chrtObject();
    obj.node(util.createSVG())
    obj.render();
    obj.id(id)

    const node = obj.node();
    expect(node instanceof SVGElement).toBe(true);
  });

  test('Test class', async () => {
    const className = 'abc123';

    const obj = new chrtObject();
    obj.node(util.createSVG())
    obj.render();
    obj.class(className)
    expect(obj.class()).toEqual([className])
  });

  test('Test multiple class', async () => {
    const className1 = 'abc123';
    const className2 = 'def456';

    const obj = new chrtObject();
    obj.class(className1)
    obj.class(className2)
    expect(obj.class()).toEqual([className2])
  });

  test('Test string with multiple classes', async () => {
    const className1 = 'abc123';
    const className2 = 'def456';
    const className = `${className1} ${className2}`;

    const obj = new chrtObject();
    obj.class(className)
    expect(obj.class()).toEqual([className1, className2])
  });

  test('Test empty class name', async () => {
    const className1 = 'abc123';
    const className2 = '';

    const obj = new chrtObject();
    obj.class(className1)
    obj.class(className2)
    expect(obj.class()).toEqual([])
  });

  test('Test string with multiple classes and spaces', async () => {
    const className1 = 'abc123';
    const className2 = 'def456';
    const className = ` ${className1}     ${className2}   `;

    const obj = new chrtObject();
    obj.class(className)
    expect(obj.class()).toEqual([className1, className2])
  });

  test('Test hasData', async () => {
    const obj = new chrtObject();
    expect(obj.hasData()).toEqual(false)
  });

  test('Test this.x', async () => {
    const obj = new chrtObject();
    obj.x('x');

    expect(obj.scales.x).toBeDefined()
    expect(obj.x()).toEqual('x')
  });

  test('Test this.y', async () => {
    const obj = new chrtObject();
    obj.y('y');

    expect(obj.scales.x).toBeDefined()
    expect(obj.y()).toEqual('y')
  });
});
