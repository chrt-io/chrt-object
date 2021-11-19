export function getStrokeStyle(style, strokeWidth, strokeLength = 4) {
  let strokeStyle = null;
  switch (style) {
    case 'dashed':
      strokeStyle = `${strokeWidth * strokeLength} ${strokeWidth * strokeLength}`;
      break;
    case 'dotted':
      strokeStyle = `${strokeWidth} ${strokeWidth}`;
      break;
    case 'solid':
    default:
      strokeStyle = null;
  }
  return strokeStyle;
}
