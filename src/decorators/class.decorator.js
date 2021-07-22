import { Binding } from './binding';
import { addBinding } from './meta.service';

/**
 * Binding that applies CSS classes to an element.
 */
class ClassBinding extends Binding {

  constructor(prop, selector) {
    super('class', prop, selector);
  }

  apply(element, value) {
    element.clearClasses().addClass(value, this.selector);
  }
}

/**
 * Decorator that applies CSS classes to the element based on the applied property values.
 * @param {String} selector The css selector.
 */
export function cls(selector) {
  return (target, property) => addBinding(property, new ClassBinding(target, property, selector))
}
