import {getStrokeStyle} from '~/helpers/svg';

describe('Test svg helpers', () => {
  it('getStrokeStyle() should return null', () => {
    expect(getStrokeStyle()).toBeNull();
  })

  it('getStrokeStyle(solid) should return null', () => {
    expect(getStrokeStyle('solid')).toBeNull();
  })

  it('getStrokeStyle(dashed) should return a valid style', () => {
    expect(getStrokeStyle('dashed')).toEqual('4 4');
  })

  it('getStrokeStyle(dotted) should return a valid style', () => {
    expect(getStrokeStyle('dotted')).toEqual('1 1');
  })

  it('getStrokeStyle(dashed) with parameters should return a valid style', () => {
    expect(getStrokeStyle('dashed', 3, 6)).toEqual('18 18');
  })

  it('getStrokeStyle(dotted) with parameters should return a valid style', () => {
    expect(getStrokeStyle('dotted', 3, 6)).toEqual('3 3');
  })
})
