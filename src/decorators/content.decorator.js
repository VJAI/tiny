import { Binding } from './binding';
import { addBinding } from './meta.service';

/**
 * Binding that affects the html content of an element.
 */
class ContentBinding extends Binding {

  /**
   * The default value.
   * @type {String}
   */
  defaultValue = null;

  constructor(prop, selector, defaultValue) {
    super('content', prop, selector);
    this.defaultValue = defaultValue;
  }

  apply(element, value) {
    element.updateHtml(value || this.defaultValue || '', this.selector);
  }
}

/**
 * Decorator that updates the html content of an element.
 * @param {String} selector The element selector.
 * @param {String} [defaultValue] The default value.
 */
export function content(selector, defaultValue) {
  return (target, property) => addBinding(property, new ContentBinding(target, property, selector, defaultValue));
}
