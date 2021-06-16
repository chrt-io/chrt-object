import chrtGeneric from '~/charts/chrtGeneric';
import * as util from '~/charts/util';

describe('Testing util functions', () => {
  test('Test add', async () => {
    const chrtObj = new chrtGeneric();

    expect(chrtObj.objects.length).toEqual(0);

    const obj = new chrtGeneric();
    util.add.call(chrtObj, obj);

    expect(chrtObj.objects.length).toEqual(1);

    const obj2 = new chrtGeneric();
    util.add.call(chrtObj, obj2, true);

    expect(chrtObj.objects.length).toEqual(2);
  });

  test('Test curve', async () => {
    const chrtObj = new chrtGeneric();

    expect(chrtObj.interpolationFunction).toBeNull();


    util.curve.call(chrtObj, 'linearInterpolation');


    expect(chrtObj.interpolationFunction).toEqual('linearInterpolation');

    expect(chrtObj.curve()).toEqual('linearInterpolation');
  });

  test('Test attr()', async () => {
    const chrtObj = new chrtGeneric();

    const id = 'abc123';
    chrtObj.id(id)

    const withId = {_id: id};
    expect(chrtObj.attr()).toMatchObject(chrtObj)
  });

  test('Test attr(\'name\')', async () => {
    const chrtObj = new chrtGeneric();
    const value = '0123456789';
    chrtObj.attr('name', value)
    const attr = chrtObj.attr('name')();
    expect(attr).toEqual(value)
  });

  test('Test attr(\'name\') and attr(\'name\', value)', async () => {
    const chrtObj = new chrtGeneric();
    const value = '0123456789';
    chrtObj.attr('name', value)
    const attr = chrtObj.attr('name')();
    expect(attr).toEqual(value)
  });

  test('Test attr(\'name\') and attr(\'name\', func)', async () => {
    const chrtObj = new chrtGeneric();
    const value = '012345678';
    const func = () => value;
    chrtObj.attr('name', func)
    const attr = chrtObj.attr('name')();
    expect(attr).toEqual(value)
  });
})

describe('Testing layout functions', () => {
  test('Test create', () => {
    const mockElement = util.create('div');
    expect(mockElement instanceof HTMLDivElement).toBe(true);
  });

  test('Test createSVG', () => {
    const mockPath = util.createSVG('path');
    expect(mockPath instanceof SVGElement).toBe(true);
  });
});
