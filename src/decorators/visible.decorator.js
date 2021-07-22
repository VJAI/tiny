import { Binding } from './binding';
import { addBinding } from './meta.service';

/**
 * Binding that affects the visibility of an element.
 */
class VisibleBinding extends Binding {

  constructor(prop, selector) {
    super('show', prop, selector);
  }

  apply(element, value) {
    element.addStyle({ display: value ? null : 'none '});
  }
}

/**
 * Decorator that shows/hides element based on the property value.
 * @param {String} selector The element selector.
 */
export function show(selector) {
  return (target, property) => addBinding(property, new VisibleBinding(target, property, selector));
}
