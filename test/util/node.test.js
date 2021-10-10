import * as chrt from 'chrt';
import chrtObject from '~/charts/chrtObject';
import * as util from '~/charts/util';

describe('Test node', () => {

  it('Testing node', () => {

    const chrtObj = new chrtObject();
    const root = util.createSVG();
    chrtObj.node(root)

    expect(chrtObj.root instanceof SVGElement).toBe(true);
    expect(chrtObj.currentNode instanceof SVGElement).toBe(true);

    chrtObj.render();

    const node = chrtObj.node();

    expect(node.outerHTML).toEqual(root.innerHTML);
  });

});
