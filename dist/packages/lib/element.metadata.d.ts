import { AttributeValueDataType } from './constants';
/**
 * Encapsulates all the metadata information of an element.
 */
export declare class ElementMetadata {
  /**
   * The name of the registered element.
   */
  name: string;
  /**
   * The template.
   */
  tpl: string;
  /**
   * True if shadow dom is enabled.
   */
  shadow: boolean;
  /**
   * The DOM accessors dictionary.
   */
  accessors: Map<any, any>;
  /**
   * The event handlers dictionary.
   */
  handlers: Map<
    string,
    Set<{
      eventName: string;
      handler: string;
      all: boolean;
    }>
  >;
  /**
   * The array of input properties.
   */
  inputs: Set<{
    property: string;
    attribute: boolean;
    dataType: AttributeValueDataType;
  }>;
}
//# sourceMappingURL=element.metadata.d.ts.map
