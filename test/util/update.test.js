import * as chrt from 'chrt';
import chrtObject from '~/charts/chrtObject';
import * as util from '~/charts/util';

const {hasData} = require('../../src/helpers/misc.js');

jest.mock('../../src/helpers/misc.js');

describe('Test render', () => {

  beforeEach(() => {
    // Resets the overwritten return values via
    // "hasData.mockReturnValue" in the test cases
    jest.resetAllMocks();
  });

  it('Should test draw when parentNode and scales are defined', () => {
    hasData.mockReturnValue(true)

    const mockElement = document.createElement('div');
    const chart = chrt.Chrt()
      .node(mockElement)

    const chrtObj = new chrtObject();
    const draw = jest.fn();
    chrtObj.draw = draw;

    chart.add(chrtObj);

    expect(draw).toHaveBeenCalled();
  });

});
