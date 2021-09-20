import { ElementMetadata } from './element.metadata';
import { AttributeValueDataType, ELEMENT_META_KEY } from './constants';

/**
 * Decorator that helps to register a class as custom web element.
 * @param {String} name The element name.
 * @param {String} [tpl] The template.
 * @param {Boolean} [shadow=false] True if shadow dom is needed.
 */
export function element(name, tpl, shadow = false) {
  return target => {
    if (window.customElements.get(name)) {
      throw new Error(`Already an element is registered with the name ${name}`);
    }

    window.customElements.define(name, target);

    const metadata = getMeta(target);
    metadata.name = name;
    metadata.tpl = tpl;
    metadata.shadow = shadow;

    setMeta(target, metadata);
  };
}

/**
 * Decorator that marks the applied property as an input.
 * @param {Boolean} [attribute=false] True if the property has to be in sync with attribute.
 */
export function input(
  attribute = false,
  dataType = AttributeValueDataType.STRING,
) {
  return (target, property) => {
    const metadata = getMeta(target.constructor),
      { inputs } = metadata;

    if (inputs.has(property)) {
      throw new Error(
        `Input decorator is already applied for the property ${property}`,
      );
    }

    inputs.add({ property, attribute, dataType });
    setMeta(target.constructor, metadata);
  };
}

/**
 * Decorator that helps to query and return DOM element(s) on accessing the applied property.
 * @param {String} selector The CSS selector.
 */
export function query(selector) {
  return (target, property) => {
    const metadata = getMeta(target.constructor),
      { accessors } = metadata;

    if (accessors.has(property)) {
      throw new Error(
        `Already a CSS selector is assigned for the property ${property}`,
      );
    }

    accessors.set(property, { selector });
    setMeta(target.constructor, metadata);
  };
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
      throw new Error(
        `Already a CSS selector is assigned for the property ${property}`,
      );
    }

    accessors.set(property, { selector, all: true });
    setMeta(target.constructor, metadata);
  };
}

/**
 * Decorator that helps to bind a DOM event with a function.
 * @param {String} eventName The event name.
 * @param {String} element The css selector. If the value is "self" then it represents the same element.
 */
export function handle(eventName, element = 'self', all = false) {
  return function (target, handler) {
    const metadata = getMeta(target.constructor),
      { handlers } = metadata;

    if (!handlers.has(element)) {
      handlers.set(element, new Set());
    }

    handlers.get(element).add({ eventName, handler, all });
    setMeta(target.constructor, metadata);
  };
}

function getMeta(target) {
  return target[ELEMENT_META_KEY] || new ElementMetadata();
}

function setMeta(target, meta) {
  target[ELEMENT_META_KEY] = meta;
}
