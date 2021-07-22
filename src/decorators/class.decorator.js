import { getMeta, setMeta } from './meta.service';
import { Binding } from './binding';

/**
 * Binding that affects the class of an element.
 */
class ClassBinding extends Binding {

  constructor(prop, selector) {
    super('class', prop, selector);
  }

  apply(element, value) {
    element.clearClasses();

    if (typeof value !== 'string' && !Array.isArray(value)) {
      return;
    }

    element.addClass(Array.isArray(value) ? value : [value], this.selector);
  }
}

/**
 * Decorator that is applied to update the CSS classes.
 * @param {String} selector The css selector.
 */
export function cls(selector) {
  return (target, property) => {
    const metadata = getMeta(target.constructor),
      { bindings } = metadata;

    if (!bindings.has(property)) {
      bindings.set(property, new Set());
    }

    bindings.get(property).add(new ClassBinding(property, selector));
    setMeta(target.constructor, metadata);
  }
}
