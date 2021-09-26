'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ElementMetadata = void 0;
/**
 * Encapsulates all the metadata information of an element.
 */
class ElementMetadata {
  constructor() {
    /**
     * The name of the registered element.
     */
    this.name = null;
    /**
     * The template.
     */
    this.tpl = null;
    /**
     * True if shadow dom is enabled.
     */
    this.shadow = false;
    /**
     * The DOM accessors dictionary.
     */
    this.accessors = new Map();
    /**
     * The event handlers dictionary.
     */
    this.handlers = new Map();
    /**
     * The array of input properties.
     */
    this.inputs = new Set();
  }
}
exports.ElementMetadata = ElementMetadata;
//# sourceMappingURL=element.metadata.js.map
