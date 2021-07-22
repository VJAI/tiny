import { Binding } from './binding';
import { addBinding } from './meta.service';
import { isVoid } from '../util';

/**
 * Binding that applies styles to an element.
 */
class StyleBinding extends Binding {

  /**
   * The name of the style.
   * @type {String}
   */
  name = null;

  /**
   * The default value.
   * @type {any}
   */
  defaultValue = null;

  get styleName() {
    return this.name || this.prop;
  }

  constructor(prop, selector, name, defaultValue) {
    super('style', prop, selector);
    this.name = name;
    this.defaultValue = defaultValue;
  }

  apply(element, value) {
    const val = isVoid(value) ? this.defaultValue : value;
    element.addStyle(!isVoid(val) && typeof val === 'object' ? val : { [this.name || this.prop]: val }, this.selector);
  }
}

/**
 * Decorator that affects the style(s) of an element.
 * @param {String} selector The element selector.
 * @param {String} [name] The style name.
 * @param {String} [defaultValue] The default value.
 */
export function style(selector, name, defaultValue) {
  return (target, property) => addBinding(property, new StyleBinding(target, property, selector, name, defaultValue));
}
