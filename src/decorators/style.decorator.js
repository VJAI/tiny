import { getMeta, setMeta } from './meta.service';
import { Binding } from './binding';

/**
 * Binding that affects the styles.
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

  constructor(prop, selector, name, defaultValue) {
    super('style', prop, selector);
    this.name = name;
    this.defaultValue = defaultValue;
  }

  apply(element, value) {
    const v = value || this.defaultValue;

    if (!v || typeof v !== 'object' && typeof v !== 'string') {
      return;
    }

    element.addStyle(typeof v === 'object' ? v : { [this.name || this.prop]: v }, this.selector);
  }
}

/**
 * Decorator that affects the style(s) of an element.
 * @param {String} selector The element selector.
 * @param {String} [name] The style name.
 * @param {String} [defaultValue] The default value.
 */
export function style(selector, name, defaultValue) {
  return (target, property) => {
    const metadata = getMeta(target.constructor),
      { bindings } = metadata;

    if (!bindings.has(property)) {
      bindings.set(property, new Set());
    }

    bindings.get(property).add(new StyleBinding(property, name, defaultValue, selector));
    setMeta(target.constructor, metadata);
  }
}
