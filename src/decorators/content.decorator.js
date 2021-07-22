import { getMeta, setMeta } from './meta.service';
import { Binding } from './binding';

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
  return (target, property) => {
    const metadata = getMeta(target.constructor),
      { bindings } = metadata;

    if (!bindings.has(property)) {
      bindings.set(property, new Set());
    }

    bindings.get(property).add(new ContentBinding(property, selector, defaultValue));
    setMeta(target.constructor, metadata);
  }
}
