import { getMeta, setMeta } from './meta.service';

/**
 * Decorator that marks the applied property as an input.
 * @param {Boolean} [attribute=false] True if the property has to be in sync with attribute.
 */
export function input(attribute = false) {
  return (target, property) => {
    const metadata = getMeta(target.constructor),
      { inputs } = metadata;

    if (inputs.has(property)) {
      throw new Error(`Input decorator is already applied for the property ${property}`);
    }

    inputs.add({ property, attribute });
    setMeta(target.constructor, metadata);
  }
}
