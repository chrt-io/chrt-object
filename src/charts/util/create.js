export function create(tag) {
  return document.createElement(tag);
}

export function createSVG(tag) {
  return document.createElementNS('http://www.w3.org/2000/svg', tag);
}
