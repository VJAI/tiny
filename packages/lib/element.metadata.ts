/**
 * Encapsulates all the metadata information of an element.
 */
export class ElementMetadata {
  /**
   * The name of the registered element.
   * @type {String}
   */
  name = null;

  /**
   * The template.
   * @type {String}
   */
  tpl = null;

  /**
   * True if shadow dom is enabled.
   * @type {Boolean}
   */
  shadow = false;

  /**
   * The DOM accessors dictionary.
   * @type {Map}
   */
  accessors = new Map();

  /**
   * The event handlers dictionary.
   * @type {Map}
   */
  handlers = new Map();

  /**
   * The array of input properties.
   * @type {Set}
   */
  inputs = new Set();

  /**
   * The property bindings.
   * @type {Map}
   */
  bindings = new Map();
}
