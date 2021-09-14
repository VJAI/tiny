import { getMeta, setMeta } from './meta.service';

/**
 * Decorator that helps to query and return DOM element(s) on accessing the applied property.
 * @param {String} selector The CSS selector.
 */
export function query(selector) {
  return (target, property) => {
    const metadata = getMeta(target.constructor),
      { accessors } = metadata;

    if (accessors.has(property)) {
      throw new Error(`Already a CSS selector is assigned for the property ${property}`);
    }

    accessors.set(property, { selector });
    setMeta(target.constructor, metadata);
  }
}

/**
 * Decorator that helps to query and return DOM element(s) on accessing the applied property.
 * @param {String} selector The CSS selector.
 */
export function queryAll(selector) {
  return (target, property) => {
    const metadata = getMeta(target.constructor),
      { accessors } = metadata;

    if (accessors.has(property)) {
      throw new Error(`Already a CSS selector is assigned for the property ${property}`);
    }

    accessors.set(property, { selector, all: true });
    setMeta(target.constructor, metadata);
  }
}

