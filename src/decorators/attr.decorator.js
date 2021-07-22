import { Binding } from './binding';
import { addBinding } from './meta.service';
import { isVoid } from '../util';

/**
 * Binding that applies attributes to an element.
 */
class AttrBinding extends Binding {

  /**
   * The name of the attribute.
   * @type {String}
   */
  name = null;

  /**
   * The default value.
   * @type {any}
   */
  defaultValue = null;

  get attributeName() {
    return this.name || this.prop;
  }

  constructor(prop, selector, name, defaultValue) {
    super('attr', prop, selector);
    this.name = name;
    this.defaultValue = defaultValue;
  }

  apply(element, value) {
    const val = isVoid(value) ? this.defaultValue : value;
    element.setAttr(!isVoid(val) && typeof val === 'object' ? val : { [this.name || this.prop]: val }, this.selector);
  }
}

/**
 * Decorator that is applied to update the attribute.
 * @param {String} selector The css selector.
 * @param {String} [name] The attribute name.
 * @param {*} [defaultValue] The default value of the attribute.
 */
export function attr(selector, name, defaultValue) {
  return (target, property) => addBinding(property, new AttrBinding(target, property, selector, name, defaultValue));
}
