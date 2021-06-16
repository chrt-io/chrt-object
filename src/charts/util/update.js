export default function update() {
  if(this.parentNode && this.parentNode.scales.x[this.scales.x] && this.parentNode.scales.y[this.scales.y]) {
    this.draw();
  }
  return this;
}
