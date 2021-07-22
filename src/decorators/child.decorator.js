import { Binding } from './binding';
import { addBinding } from './meta.service';

/**
 * Binding that affects the children of an element.
 */
class ChildBinding extends Binding {

  constructor(prop, selector) {
    super('child', prop, selector);
  }

  apply(element, value) {
    element.removeChildren(this.selector).addChildren(value, this.selector);
  }
}

/**
 * Decorator that is applied to update the children.
 * @param {String} selector The css selector.
 */
export function child(selector) {
  return (target, property) => addBinding(property, new ChildBinding(target, property, selector));
}
