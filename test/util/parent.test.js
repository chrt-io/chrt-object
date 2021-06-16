import * as chrt from 'chrt';
import chrtGeneric from '~/charts/chrtGeneric';
import * as util from '~/charts/util';

describe('Test update', () => {

  it('Should have parentNode defined', () => {

    const mockElement = document.createElement('div');
    const chart = chrt.Chrt()
      .node(mockElement)

    const chrtObj = new chrtGeneric();
    const draw = jest.fn();
    chrtObj.draw = draw;

    chart.add(chrtObj);

    const parentNode = chrtObj.parent()

    // console.log('parentNode', parentNode);

    expect(parentNode).toBeDefined();

    expect(parentNode.type).toEqual('chrt');
  });

});
