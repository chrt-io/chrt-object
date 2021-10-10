import chrtObject from '~/charts/chrtObject';
import * as util from '~/charts/util';

describe('Testing util functions', () => {
  test('Test add', async () => {
    const chrtObj = new chrtObject();

    expect(chrtObj.objects.length).toEqual(0);

    const obj = new chrtObject();
    util.add.call(chrtObj, obj);

    expect(chrtObj.objects.length).toEqual(1);

    const obj2 = new chrtObject();
    util.add.call(chrtObj, obj2, true);

    expect(chrtObj.objects.length).toEqual(2);
  });

  test('Test curve', async () => {
    const chrtObj = new chrtObject();

    expect(chrtObj.interpolationFunction).toBeNull();


    util.curve.call(chrtObj, 'linearInterpolation');


    expect(chrtObj.interpolationFunction).toEqual('linearInterpolation');

    expect(chrtObj.curve()).toEqual('linearInterpolation');
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
