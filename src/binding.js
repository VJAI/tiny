/**
 * Represents a directive binding.
 */
export default class Binding {

  /**
   * The name of the directive.
   * @type {string}
   */
  name = null;

  /**
   * The state value.
   * @type {string}
   */
  value = null;

  /**
   * Ctor.
   * @param {string} name
   * @param {string} value
   */
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}
