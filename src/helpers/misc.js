import {COMPONENTS_W_DATA} from '../constants';

export function isNull(value) {
  return value === null || value == null || typeof value === 'undefined';
}

export function uuid() {
  return (
    'c' +
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

export function hasData(obj) {
  return !isNull(obj.type) && COMPONENTS_W_DATA.indexOf(obj.type) > -1
}

export function isInfinity(value) {
  return !isFinite(value);
}

export function oppositeSigns(x, y) {
  return ((x ^ y) < 0);
}

export function getCoords(data) {
  if(!this?.fields) {
    return [];
  }
  return data.map(d => {
    const x = (isNull(d[this.fields.x]) || isInfinity(d[this.fields.x])) ? null : this.parentNode.scales.x[this.scales.x](d[this.fields.x]);
    const y = (isNull(d[this.fields.y]) || isInfinity(d[this.fields.y])) ? null : this.parentNode.scales.y[this.scales.y](d[this.fields.y]);

    return [
      isInfinity(x) ? 0 : x,
      isInfinity(y) ? 0 : y,
    ];
  })//.filter(d => !isNull(d[0]) && !isNull(d[1]))
}
