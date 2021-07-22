/**
 * The binding base class.
 * @abstract
 */
class Binding {

  /**
   * The binding name.
   * @type {String}
   */
  type = null;

  /**
   * The applied property name.
   * @type {String}
   */
  prop = null;

  /**
   * The DOM selector to which the binding should be applied.
   * @type {String}
   */
  selector = null;

  /**
   * @ctor
   */
  constructor(type, prop, selector) {
    this.type = type;
    this.prop = prop;
    this.selector = selector;
  }

  /**
   * Invoked when we need to update DOM.
   */
  apply(element, value) {
    throw new Error('Should be implemented by derived class');
  }
}
