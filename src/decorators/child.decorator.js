import { getMeta, setMeta } from './meta.service';
import { Binding } from './binding';

/**
 * Binding that affects the children of an element.
 */
class ChildBinding extends Binding {

  constructor(prop, selector) {
    super('child', prop, selector);
  }

  apply(element, value) {
    element.removeChildren(this.selector);

    if (!value || typeof value !== 'object' && !Array.isArray(value)) {
      return;
    }

    element.addChildren(Array.isArray(value) ? value : [value], this.selector);
  }
}

/**
 * Decorator that is applied to update the children.
 * @param {String} selector The css selector.
 */
export function child(selector) {
  return (target, property) => {
    const metadata = getMeta(target.constructor),
      { bindings } = metadata;

    if (!bindings.has(property)) {
      bindings.set(property, new Set());
    }

    bindings.get(property).add(new ChildBinding(property, selector));
    setMeta(target.constructor, metadata);
  }
}
