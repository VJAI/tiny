import { getMeta, setMeta } from './meta.service';
import { Binding } from './binding';

/**
 * Binding that affects the attributes.
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

  constructor(prop, selector, name, defaultValue) {
    super('attr', prop, selector);
    this.name = name;
    this.defaultValue = defaultValue;
  }

  apply(element, value) {
    const v = value || this.defaultValue;

    if (!v || typeof v !== 'object' && typeof v !== 'string') {
      return;
    }

    element.setAttr(typeof v === 'object' ? v : { [this.name || this.prop]: v }, this.selector);
  }
}

/**
 * Decorator that is applied to update the attribute.
 * @param {String} selector The css selector.
 * @param {String} [name] The attribute name.
 * @param {*} [defaultValue] The default value of the attribute.
 */
export function attr(selector, name, defaultValue) {
  return (target, property) => {
    const metadata = getMeta(target.constructor),
      { bindings } = metadata;

    if (!bindings.has(property)) {
      bindings.set(property, new Set());
    }

    bindings.get(property).add(new AttrBinding(property, selector, name, defaultValue));
    setMeta(target.constructor, metadata);
  }
}
