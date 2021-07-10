import { isNull } from '~/helpers';
export default function attribute(name, fn, accessor = (value) => value) {
  if(isNull(name)) {
    console.warn('name missing: attr method requires a name for the attribute')
    return this;
  }
  if(!isNull(name) && typeof fn === 'undefined') {
    // this.name()
    return this.attrs?.[name] || (() => {});
  }
  if (typeof fn === 'function') {
    // something will go here
    this.attrs[name] = accessor(fn);
  } else {
    // fn is a Boolean, String, Number or any other type but function
    this.attrs[name] = () => accessor(fn);
  }
  return this;
}
