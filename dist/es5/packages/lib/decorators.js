'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.handle =
  exports.queryAll =
  exports.query =
  exports.input =
  exports.element =
    void 0;
var element_metadata_1 = require('./element.metadata');
var constants_1 = require('./constants');
/**
 * Decorator that helps to register a class as custom web element.
 * @param name The element name.
 * @param [tpl] The template.
 * @param [shadow=false] True if shadow dom is needed.
 */
function element(name, tpl, shadow) {
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
exports.element = element;
/**
 * Decorator that marks the applied property as an input.
 * @param [attribute=false] True if the property has to be in sync with attribute.
 * @param [dataType = AttributeValueDataType.STRING] The data type of the attribute.
 */
function input(attribute, dataType) {
  if (attribute === void 0) {
    attribute = false;
  }
  if (dataType === void 0) {
    dataType = constants_1.AttributeValueDataType.STRING;
  }
  return function (target, property) {
    return getMeta(target.constructor).inputs.add({
      property: property,
      attribute: attribute,
      dataType: dataType
    });
  };
}
exports.input = input;
/**
 * Decorator that helps to query and return DOM element(s) on accessing the applied property.
 * @param selector The CSS selector.
 */
function query(selector) {
  return function (target, property) {
    return getMeta(target.constructor).accessors.set(property, {
      selector: selector
    });
  };
}
exports.query = query;
/**
 * Decorator that helps to query and return DOM element(s) on accessing the applied property.
 * @param selector The CSS selector.
 */
function queryAll(selector) {
  return function (target, property) {
    return getMeta(target.constructor).accessors.set(property, {
      selector: selector,
      all: true
    });
  };
}
exports.queryAll = queryAll;
/**
 * Decorator that helps to bind a DOM event with a function.
 * @param eventName The event name.
 * @param element The css selector. If the value is "self" then it represents the same element.
 * @param all Bind event handler to all elements matching the selector.
 */
function handle(eventName, element, all) {
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
exports.handle = handle;
function getMeta(target) {
  return (
    target[constants_1.ELEMENT_META_KEY] ||
    new element_metadata_1.ElementMetadata()
  );
}
function setMeta(target, meta) {
  target[constants_1.ELEMENT_META_KEY] = meta;
}
//# sourceMappingURL=decorators.js.map
