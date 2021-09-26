import { ElementMetadata } from './element.metadata';
import { AttributeValueDataType, ELEMENT_META_KEY } from './constants';
/**
 * Decorator that helps to register a class as custom web element.
 * @param name The element name.
 * @param [tpl] The template.
 * @param [shadow=false] True if shadow dom is needed.
 */
export function element(name, tpl, shadow) {
  if (shadow === void 0) {
    shadow = false;
  }
  return function (target) {
    window.customElements.define(name, target);
    setMeta(
      target,
      Object.assign(getMeta(target), { name: name, tpl: tpl, shadow: shadow })
    );
  };
}
/**
 * Decorator that marks the applied property as an input.
 * @param [attribute=false] True if the property has to be in sync with attribute.
 * @param [dataType = AttributeValueDataType.STRING] The data type of the attribute.
 */
export function input(attribute, dataType) {
  if (attribute === void 0) {
    attribute = false;
  }
  if (dataType === void 0) {
    dataType = AttributeValueDataType.STRING;
  }
  return function (target, property) {
    return getMeta(target.constructor).inputs.add({
      property: property,
      attribute: attribute,
      dataType: dataType
    });
  };
}
/**
 * Decorator that helps to query and return DOM element(s) on accessing the applied property.
 * @param selector The CSS selector.
 */
export function query(selector) {
  return function (target, property) {
    return getMeta(target.constructor).accessors.set(property, {
      selector: selector
    });
  };
}
/**
 * Decorator that helps to query and return DOM element(s) on accessing the applied property.
 * @param selector The CSS selector.
 */
export function queryAll(selector) {
  return function (target, property) {
    return getMeta(target.constructor).accessors.set(property, {
      selector: selector,
      all: true
    });
  };
}
/**
 * Decorator that helps to bind a DOM event with a function.
 * @param eventName The event name.
 * @param element The css selector. If the value is "self" then it represents the same element.
 * @param all Bind event handler to all elements matching the selector.
 */
export function handle(eventName, element, all) {
  if (element === void 0) {
    element = 'self';
  }
  if (all === void 0) {
    all = false;
  }
  return function (target, handler) {
    var metadata = getMeta(target.constructor),
      handlers = metadata.handlers;
    !handlers.has(element) && handlers.set(element, new Set());
    handlers
      .get(element)
      .add({ eventName: eventName, handler: handler, all: all });
  };
}
function getMeta(target) {
  return target[ELEMENT_META_KEY] || new ElementMetadata();
}
function setMeta(target, meta) {
  target[ELEMENT_META_KEY] = meta;
}
//# sourceMappingURL=decorators.js.map
