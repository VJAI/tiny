import { ElementMetadata } from './element.metadata';
import { AttributeValueDataType, ELEMENT_META_KEY } from './constants';

/**
 * Decorator that helps to register a class as custom web element.
 * @param name The element name.
 * @param [tpl] The template.
 * @param [shadow=false] True if shadow dom is needed.
 */
export function element(
  name: string,
  tpl: string,
  shadow = false
): ClassDecorator {
  return (target: any) => {
    if (window.customElements.get(name)) {
      throw new Error(`Already an element is registered with the name ${name}`);
    }

    window.customElements.define(name, target);
    setMeta(target, Object.assign(getMeta(target), { name, tpl, shadow }));
  };
}

/**
 * Decorator that marks the applied property as an input.
 * @param [attribute=false] True if the property has to be in sync with attribute.
 * @param [dataType = AttributeValueDataType.STRING] The data type of the attribute.
 */
export function input(
  attribute = false,
  dataType = AttributeValueDataType.STRING
): PropertyDecorator {
  return (target: object, property: string | symbol) => {
    const metadata = getMeta(target.constructor),
      { inputs } = metadata;

    if (inputs.has(property)) {
      throw new Error(
        `Input decorator is already applied for the property ${
          property as string
        }`
      );
    }

    inputs.add({ property, attribute, dataType });
    setMeta(target.constructor, metadata);
  };
}

/**
 * Decorator that helps to query and return DOM element(s) on accessing the applied property.
 * @param selector The CSS selector.
 */
export function query(selector: string): PropertyDecorator {
  return (target: object, property: string | symbol) => {
    const metadata = getMeta(target.constructor),
      { accessors } = metadata;

    if (accessors.has(property)) {
      throw new Error(
        `Already a CSS selector is assigned for the property ${
          property as string
        }`
      );
    }

    accessors.set(property, { selector });
    setMeta(target.constructor, metadata);
  };
}

/**
 * Decorator that helps to query and return DOM element(s) on accessing the applied property.
 * @param selector The CSS selector.
 */
export function queryAll(selector: string): PropertyDecorator {
  return (target: object, property: string | symbol) => {
    const metadata = getMeta(target.constructor),
      { accessors } = metadata;

    if (accessors.has(property)) {
      throw new Error(
        `Already a CSS selector is assigned for the property ${
          property as string
        }`
      );
    }

    accessors.set(property, { selector, all: true });
    setMeta(target.constructor, metadata);
  };
}

/**
 * Decorator that helps to bind a DOM event with a function.
 * @param eventName The event name.
 * @param element The css selector. If the value is "self" then it represents the same element.
 * @param all Bind event handler to all elements matching the selector.
 */
export function handle(eventName: string, element = 'self', all = false) {
  return function (target: object, handler: string) {
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
