import { hasData, isNull, add } from '../../helpers';
import { render, update, curve, attr, data, node, parent, show, hide } from '../util';

export default function chrtObject() {
  this._id = null;
  this.objects = [];
  this.type = 'chrt-object';
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
  attr.call(this, 'display', true);

  this.id = (id) => {
    // console.log('chrtObject.id', id, this._id);
    if(isNull(id)) {
      return this._id;
    }
    this._id = id || this._id;

    if(this.g) {
      this.g.setAttribute('id', this._id);
    }
    return this;
  }

  this.aria = (ariaLabel) => {
    if(isNull(ariaLabel)) {
      return this.ariaLabel;
    }
    this.ariaLabel = ariaLabel || this.ariaLabel;

    if(this.g && this.ariaLabel) {
      this.g.setAttribute('aria-label', this.ariaLabel);
    }
    return this;
  }

  this.class = (className) => {
    if(isNull(className)) {
      return this._classNames;
    }
    const classNames = (Array.isArray(className) ? className : className.split(' '))
                          .map(d => d.replace(/\s\s+/g, ' ').trim())
                          .filter(d => d !== '');

    this.original_classNames = this.original_classNames || this._classNames;

    this._classNames = [...new Set([...this.original_classNames, ...classNames])];

    if(this.g) {
      this.g.classList.remove(...this.g.classList)
      this.g.classList.add(...this._classNames);
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

  this.x = (scale) => {
    if(isNull(scale)) {
      return this.scales.x;
    }
    setScale('x', scale || 'x')
    return this;
  };
  this.y = (scale) => {
    if(isNull(scale)) {
      return this.scales.y;
    }
    setScale('y', scale || 'y')
    return this;
  }

  return this;
}

function chrt() {
  return new chrtObject();
}

chrtObject.prototype = Object.create(chrt.prototype);

// chrtObject.prototype = chrt.prototype = Object.assign(chrt.prototype, {
chrtObject.prototype = Object.assign(chrt.prototype, {
  node,
  data,
  add,
  snap: add,
  parent,
  render,
  update,
  curve,
  attr,
  show,
  hide,
});
