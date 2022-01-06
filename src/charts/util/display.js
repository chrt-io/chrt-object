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
  const currentDisplay = DOMNode.style.display;
  this._display = typeof this._display !== 'undefined' ? this._display : DOMNode.style.display;

  if(!value) {
    DOMNode.style.display = 'none';
  } else {
    if(currentDisplay === 'none' && value) {
      DOMNode.style.display = this._display;
    }
  }

  return this;
}
