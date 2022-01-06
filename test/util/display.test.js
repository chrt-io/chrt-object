import * as chrt from 'chrt';
import chrtObject, { cssDisplay } from '~/';

describe('Test display', () => {
  it('default display should be true', () => {
    const chrtObj = new chrtObject();
    expect(chrtObj.attr('display')()).toEqual(true);
  })

  it('after hide(), display should be false', () => {
    const chrtObj = new chrtObject();
    chrtObj.hide();
    expect(chrtObj.attr('display')()).toEqual(false);
  })

  it('after hide() and show(), display should be true', () => {
    const chrtObj = new chrtObject();
    chrtObj.hide();
    chrtObj.show();
    expect(chrtObj.attr('display')()).toEqual(true);
  })

  it('hide should set style to none', () => {
    const mockElement = document.createElement('div');
    const chart = chrt.Chrt()
      .node(mockElement)

    const chrtObj = new chrtObject();
    const draw = jest.fn();
    chrtObj.draw = draw;
    chart.add(chrtObj);
    chrtObj.hide();

    cssDisplay.call(chrtObj, chrtObj.attr('display')());

    expect(chart.node().querySelector(`#${chrtObj.id()}`).style.display).toEqual('none');
  });

  it('show should set style to block', () => {
    const mockElement = document.createElement('div');
    const chart = chrt.Chrt()
      .node(mockElement)

    const chrtObj = new chrtObject();
    const draw = jest.fn();
    chrtObj.draw = draw;
    chart.add(chrtObj);
    chrtObj.show();

    cssDisplay.call(chrtObj, chrtObj.attr('display')());

    expect(chart.node().querySelector(`#${chrtObj.id()}`).style.display).toEqual('block');
  });

});
