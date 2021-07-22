import { getMeta, setMeta } from './meta.service';
import { Binding } from './binding';

/**
 * Binding that affects the visibility of an element.
 */
class VisibleBinding extends Binding {

  constructor(prop, selector) {
    super('show', prop, selector);
  }

  apply(element, value) {
    if (value) {
      delete element.style;
      return;
    }

    element.addStyle({ display: 'none '});
  }
}

/**
 * Decorator that shows/hides element based on the property value.
 * @param {String} selector The element selector.
 */
export function show(selector) {
  return (target, property) => {
    const metadata = getMeta(target.constructor),
      { bindings } = metadata;

    if (!bindings.has(property)) {
      bindings.set(property, new Set());
    }

    bindings.get(property).add(new VisibleBinding(property, selector));
    setMeta(target.constructor, metadata);
  }
}
