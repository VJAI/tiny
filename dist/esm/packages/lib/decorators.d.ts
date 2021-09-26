import { AttributeValueDataType } from './constants';
/**
 * Decorator that helps to register a class as custom web element.
 * @param name The element name.
 * @param [tpl] The template.
 * @param [shadow=false] True if shadow dom is needed.
 */
export declare function element(
  name: string,
  tpl: string,
  shadow?: boolean
): ClassDecorator;
/**
 * Decorator that marks the applied property as an input.
 * @param [attribute=false] True if the property has to be in sync with attribute.
 * @param [dataType = AttributeValueDataType.STRING] The data type of the attribute.
 */
export declare function input(
  attribute?: boolean,
  dataType?: AttributeValueDataType
): PropertyDecorator;
/**
 * Decorator that helps to query and return DOM element(s) on accessing the applied property.
 * @param selector The CSS selector.
 */
export declare function query(selector: string): PropertyDecorator;
/**
 * Decorator that helps to query and return DOM element(s) on accessing the applied property.
 * @param selector The CSS selector.
 */
export declare function queryAll(selector: string): PropertyDecorator;
/**
 * Decorator that helps to bind a DOM event with a function.
 * @param eventName The event name.
 * @param element The css selector. If the value is "self" then it represents the same element.
 * @param all Bind event handler to all elements matching the selector.
 */
export declare function handle(
  eventName: string,
  element?: string,
  all?: boolean
): (target: object, handler: string) => void;
//# sourceMappingURL=decorators.d.ts.map
