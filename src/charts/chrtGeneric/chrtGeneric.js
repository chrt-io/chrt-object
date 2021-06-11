import { hasData, isNull } from '~/helpers';
import { accessor, render, update, curve, add, attr } from '../util';
import { data, node, parent } from '~/util';

export default function chrtGeneric() {
  // console.log('chrtGeneric', this)
  this._id = null;
  this.objects = [];
  this.fields = {
    x: null,
    y: null,
  };
  this.scales = {
    x: 'x',
    y: 'y',
  }
  this._classNames = [];

  this._accessor = (d, i) => ({
    x: !isNull(d) && Object.prototype.hasOwnProperty.call(d, 'x') ? d.x : i,
    y: isNull(d) ? null : (Object.prototype.hasOwnProperty.call(d, 'y') ? d.y : d)
  });

  this.interpolationFunction = null;

  // list of getter/setter function for custom attributes
  this.attrs = [];

  this.id = (id) => {
    // console.log('chrtGeneric.id', id, this._id);
    if(isNull(id)) {
      return this._id;
    }
    this._id = id || this._id;

    if(this.g) {
      this.g.setAttribute('id', this._id);
    }
    return this;
  }

  this.class = (className) => {
    if(isNull(className)) {
      return this._classNames;
    }
    const classNames = className.split(' ');
    this._classNames = [...this._classNames.filter(d => d !== className), ...classNames];

    if(this.g) {
      classNames.forEach(d => this.g.classList.add(d));
    }
    return this;
  }

  this.hasData = () => {
    return hasData(this);
  }

  const setScale = (scale, scaleName) => {
    if(!isNull(scaleName)) {
      this.scales[scale] = scaleName;
    }
  }

  this.x = (scale = 'x') => {
    if(isNull(scale)) {
      return this.scales.x;
    }
    setScale('x', scale)
    return this;
  };
  this.y = (scale = 'y') => {
    if(isNull(scale)) {
      return this.scale.y;
    }
    setScale('y', scale)
    return this;
  }

  return this;
}

function chrt() {
  return new chrtGeneric();
}

chrtGeneric.prototype = Object.create(chrt.prototype);

// chrtGeneric.prototype = chrt.prototype = Object.assign(chrt.prototype, {
chrtGeneric.prototype = Object.assign(chrtGeneric.prototype, {
  node,
  data,
  add,
  parent,
  accessor,
  render,
  update,
  curve,
  attr,
});
