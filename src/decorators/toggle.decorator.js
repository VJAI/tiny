import { Binding } from './binding';
import { addBinding } from './meta.service';

/**
 * Binding that toggles the CSS classes.
 */
class ToggleBinding extends Binding {

  /**
   * CSS classes.
   * @type {String|Array<String>}
   */
  classes1 = null;

  /**
   * CSS classes.
   * @type {String|Array<String>}
   */
  classes2 = null;

  constructor(prop, selector, classes1, classes2) {
    super('toggle', prop, selector);
    this.classes1 = classes1;
    this.classes2 = classes2;
  }

  apply(element, value) {
    let classes = [this.classes2, this.classes1];
    !value && classes.reverse();
    element.toggleClass(...classes, this.selector);
  }
}

/**
 * Decorator that toggles the CSS classes based on the value of the applied property.
 * @param {String} selector The element selector.
 * @param {String|Array<String>} classes1 The CSS classes set 1.
 * @param {String|Array<String>} [classes2] The CSS classes set 2.
 */
export function toggle(selector, classes1, classes2) {
  return (target, property) => addBinding(property, new ToggleBinding(target, property, selector, classes1, classes2));
}
