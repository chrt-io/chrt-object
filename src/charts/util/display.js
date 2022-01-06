import attr from './attr';
import node from './node';

export default function display(value) {
  return attr.call(this, 'display', value)
}

export function show() {
  return display.call(this, true)
}

export function hide() {
  return display.call(this, false)
}

export function cssDisplay(value) {
  const DOMNode = node.call(this)
  if(!DOMNode) {
    return this;
  }

  this._display = this._display || DOMNode.style.display || 'block';
  DOMNode.style.display = value ? this._display : 'none';

  return this;
}
