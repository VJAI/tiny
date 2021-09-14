import { getMeta, setMeta } from './meta.service';

/**
 * Decorator that helps to bind a DOM event with a function.
 * @param {String} eventName The event name.
 * @param {String} element The css selector. If the value is "self" then it represents the same element.
 */
export function handle(eventName, element = 'self', all = false) {
  return function(target, handler) {
    const metadata = getMeta(target.constructor),
      { handlers } = metadata;

    if (!handlers.has(element)) {
      handlers.set(element, new Set());
    }

    handlers.get(element).add({ eventName, handler, all });
    setMeta(target.constructor, metadata);
  }
}
