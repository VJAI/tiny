import { Binding } from './binding';
import { addBinding } from './meta.service';
import { isVoid } from './util';

class FieldBinding extends Binding {

  /**
   * The default value.
   * @type {String}
   */
  defaultValue = null;

  constructor(prop, selector, defaultValue) {
    super('field', prop, selector);
    this.defaultValue = defaultValue;
  }

  apply(element, value) {
    element.value = isVoid(value) ? this.defaultValue : value;
  }
}

/**
 * Decorator that updates the form control's value.
 * @param {String} selector The element selector.
 * @param {String} [defaultValue] The default value.
 */
export function field(selector, defaultValue) {
  return (target, property) => addBinding(property, new FieldBinding(target, property, selector, defaultValue));
}
