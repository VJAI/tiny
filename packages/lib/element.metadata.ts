import { AttributeValueDataType } from './constants';

/**
 * Encapsulates all the metadata information of an element.
 */
export class ElementMetadata {
  /**
   * The name of the registered element.
   */
  name: string = null;

  /**
   * The template.
   */
  tpl: string = null;

  /**
   * True if shadow dom is enabled.
   */
  shadow: boolean = false;

  /**
   * The DOM accessors dictionary.
   */
  accessors = new Map<string, { selector: string; all: boolean }>();

  /**
   * The event handlers dictionary.
   */
  handlers = new Map<
    string,
    Set<{ eventName: string; handler: string; all: boolean }>
  >();

  /**
   * The array of input properties.
   */
  inputs = new Set<{
    property: string;
    attribute: boolean;
    dataType: AttributeValueDataType;
  }>();
}
