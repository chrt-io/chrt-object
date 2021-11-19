// This tutorial helped a lot: https://javascript.plainenglish.io/mocking-imported-constants-methods-in-javascript-with-jest-b78f52f7dd84

import chrtObject, { utils } from '~/index';

import * as util from '~/charts/util';
const {hasData} = require('../../src/helpers/misc.js');

jest.mock('../../src/helpers/misc.js');

describe('Test render', () => {

  beforeEach(() => {
    // Resets the overwritten return values via
    // "hasData.mockReturnValue" in the test cases
    jest.resetAllMocks();
  });

  it('Should test create a SVG g attribute', () => {
    // hasData.mockReturnValue(true)

    const chrtObj = new chrtObject();
    chrtObj.node(utils.createSVG())

    expect(chrtObj.g).not.toBeDefined();

    chrtObj.render();


    expect(chrtObj.g).toBeDefined();
    expect(chrtObj.g instanceof SVGElement).toBe(true);
  });

  it('Should not create a new g when called twice', () => {
    // hasData.mockReturnValue(true)

    const chrtObj = new chrtObject();
    chrtObj.node(utils.createSVG())

    chrtObj.render();
    const g = chrtObj.root.innerHTML;

    chrtObj.render();

    expect(chrtObj.root.innerHTML).toEqual(g);
  });

  it('Test with hasData(true)', () => {
    hasData.mockReturnValue(true)

    const chrtObj = new chrtObject();
    chrtObj.node(utils.createSVG())
    const id = 'ID123';
    chrtObj.id(id)

    chrtObj.render();

    // console.log(chrtObj.currentNode.innerHTML)

    expect(chrtObj.g.getAttribute('id')).toEqual(id);
  });

  it('Test with parent', () => {
    hasData.mockReturnValue(true)

    const parentObj = new chrtObject();
    const parentId = 'ParentID123';
    parentObj.id(parentId)
    parentObj.node(utils.createSVG())
    parentObj.render();

    const chrtObj = new chrtObject();
    const id = 'ID123';
    chrtObj.id(id)
    chrtObj.node(utils.createSVG())

    chrtObj.render(parentObj);

    expect(parentObj.currentNode.innerHTML).toEqual('<g id="ParentID123"><g id="ID123"></g></g>');
  });

  it('Test with parent with type stack', () => {
    hasData.mockReturnValue(true)

    const parentObj = new chrtObject();
    parentObj.type = 'stack';
    const parentId = 'ParentID123';
    parentObj.id(parentId)
    parentObj.node(utils.createSVG())
    parentObj.render();

    const chrtObj = new chrtObject();
    const id = 'ID123';
    chrtObj.id(id)
    chrtObj.node(utils.createSVG())

    chrtObj.render(parentObj);

    expect(parentObj.currentNode.innerHTML).toEqual('<g id="ParentID123"><g id="ID123"></g></g>');
  });

  /*
  it('Should test data when hasData return false', () => {
    const chrtObj = new chrtObject().data([0,1,2,3,4]);

    //const result = util.data();
    expect(util.data.call(chrtObj)).toMatchObject(chrtObj);
  });

  it('Should test data when hasData return true', () => {
    hasData.mockReturnValue(true)

    const chrtObj = new chrtObject().data([0,1,2,3,4]);
    expect(chrtObj._data).toBeDefined();
  });

  it('Should test data if function creates an accessor', () => {
    hasData.mockReturnValue(true)

    const chrtObj = new chrtObject();
    util.data.call(chrtObj, d => d);
    expect(chrtObj._accessor).toBeDefined();
  });

  it('Should test data (numbers) + accessor', () => {
    hasData.mockReturnValue(true)

    const chrtObj = new chrtObject();
    util.data.call(chrtObj, [0,1,2,3,4,5], d => ({x:d,y:d}));
    expect(chrtObj.data()).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 4 },
      { x: 5, y: 5 }
    ]);
  });

  it('Should test data (objects) + accessor', () => {
    hasData.mockReturnValue(true)

    const chrtObj = new chrtObject();
    util.data.call(chrtObj, [0,1,2,3,4,5].map(d => ({x:d,y:d})), d => ({x:d.x,y:d.y}));
    expect(chrtObj.data()).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 4 },
      { x: 5, y: 5 }
    ]);
  });
  */
});
