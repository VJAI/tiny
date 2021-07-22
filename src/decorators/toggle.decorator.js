import { getMeta, setMeta } from './meta.service';
import { Binding } from './binding';

/**
 * Binding that toggles the classes.
 */
class ToggleBinding extends Binding {

  /**
   * CSS classes.
   * @type {String|Array<String>}
   */
  cls1 = null;

  /**
   * CSS classes.
   * @type {String|Array<String>}
   */
  cls2 = null;

  constructor(prop, selector, cls1, cls2) {
    super('toggle', prop, selector);
    this.cls1 = cls1;
    this.cls2 = cls2;
  }

  apply(element, value) {
    if (value) {
      element.toggleClass(this.cls2, this.cls1, this.selector);
    } else {
      element.toggleClass(this.cls1, this.cls2, this.selector);
    }
  }
}

/**
 * Decorator that toggles the CSS classes based on the value of the applied property.
 * @param {String} selector The element selector.
 * @param {String|Array<String>} cls1 The CSS classes set 1.
 * @param {String|Array<String>} [cls2] The CSS classes set 2.
 */
export function toggle(selector, cls1, cls2) {
  return (target, property) => {
    const metadata = getMeta(target.constructor),
      { bindings } = metadata;

    if (!bindings.has(property)) {
      bindings.set(property, new Set());
    }

    bindings.get(property).add(new ToggleBinding(property, selector, cls1, cls2));
    setMeta(target.constructor, metadata);
  }
}
