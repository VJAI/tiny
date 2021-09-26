import { ElementMetadata } from './element.metadata';
export interface KeyValue {
  [key: string]: any;
}
export interface EventMap {
  [key: string]: () => void;
}
export interface TinyElementCreateOptions {
  id?: string;
  cls?: string | Array<string>;
  props?: KeyValue;
  attrs?: KeyValue;
  styles?: KeyValue;
  events?: EventMap;
  parent?: string | TinyElement | HTMLElement;
  html?: string;
  children?: Array<{
    name: string;
    options: TinyElementCreateOptions;
  }>;
}
/**
 * Represents the base class for all Tiny elements.
 * Simplifies developing components using native browser technologies.
 */
export declare abstract class TinyElement extends HTMLElement {
  /**
   * The metadata of the component.
   */
  private readonly _metadata;
  /**
   * True if the component is initialized.
   */
  private _initialized;
  /**
   * True if the component is rendered.
   */
  private _rendered;
  /**
   * The input properties changes dictionary.
   * @type {Map}
   */
  private _changes;
  /**
   * The input props values.
   * @type {Map}
   */
  private _props;
  /**
   * Shadow root.
   */
  private _shadowRoot;
  /**
   * The DOM Update timer.
   */
  private _updateTimer;
  /**
   * Returns the element metadata.
   */
  get metadata(): ElementMetadata;
  /**
   * Returns the changes.
   */
  get changes(): Map<
    string,
    {
      oldValue: any;
      newValue: any;
    }
  >;
  /**
   * Returns true if there are changes.
   */
  get hasChanges(): boolean;
  /**
   * constructor.
   */
  protected constructor();
  /**
   * Read accessors from metadata and re-define `getters` for applied props.
   */
  private _applyAccessors;
  /**
   * Read inputs from metadata and re-define `getters` and `setters` for applied props.
   */
  private _applyInputs;
  /**
   * Set event handlers scope to `this`.
   */
  private _setHandlersScope;
  /**
   * Read non-window event handlers from metadata and subscribe to events.
   */
  private _applyNonWindowHandlers;
  /**
   * Read window event handlers from metadata and subscribe events.
   */
  private _applyWindowHandlers;
  /**
   * Push the changed property and it's value.
   * @param prop The property name.
   * @param value The property value.
   */
  private _pushChange;
  /**
   * Triggers update.
   */
  private _triggerUpdate;
  /**
   * Returns the passed element or based on selector.
   * @param el
   */
  private _element;
  /**
   * Life-cycle handler which is invoked whenever the element is connected to DOM.
   */
  protected connectedCallback(): void;
  /**
   * Life-cycle handler invoked whenever the element is disconnected from DOM.
   */
  protected disconnectedCallback(): void;
  /**
   * Invoked after the element is connected to DOM.
   */
  protected onConnected(): void;
  /**
   * Invoked after the element is disconnected to DOM.
   */
  protected onDisconnected(): void;
  /**
   * Should be overwritten by sub-components to update the decorators/DOM.
   */
  protected onChanges(changes: any): void;
  /**
   * Create new element and returns it.
   * @param name The name of the element.
   * @param options The element options.
   * @returns {HTMLElement}
   */
  create(name: string, options: TinyElementCreateOptions): HTMLElement;
  /**
   * Queries and returns the first element that matches the passed CSS selector.
   * @param selector The CSS selector.
   * @param element The parent to query.
   */
  $(selector: string, element?: string | TinyElement | HTMLElement): any;
  /**
   * Queries and returns all the elements that matches the passed CSS selector.
   * @param selector The CSS selector.
   * @param element The parent to query.
   */
  $$(selector: string, element?: string | TinyElement | HTMLElement): any;
  /**
   * Adds single or multiple CSS classes.
   * @param classes The CSS classes.
   * @param element The element.
   */
  addClass(
    classes: string | Array<string>,
    element?: string | TinyElement | HTMLElement
  ): this;
  /**
   * Removes single or multiple CSS classes from the element.
   * @param classes Single or array of css class names.
   * @param element The element.
   */
  removeClass(
    classes: string | Array<string>,
    element?: string | TinyElement | HTMLElement
  ): this;
  /**
   * Clears all CSS classes.
   * @param element The element.
   */
  clearClasses(element?: string | TinyElement | HTMLElement): this;
  /**
   * Toggles source css classes with the target css classes.
   * @param sourceCls Source css class(es).
   * @param targetCls Target css class(es).
   * @param element The element.
   */
  toggleClass(
    sourceCls: string | Array<string>,
    targetCls: string | Array<string>,
    element?: string | TinyElement | HTMLElement
  ): this;
  /**
   * Returns the attribute value of the element.
   * @param name The attribute name.
   * @param element The element.
   */
  getAttr(name: string, element?: string | TinyElement | HTMLElement): any;
  /**
   * Sets attributes for element from the passed object.
   * @param obj The attributes map.
   * @param element The element.
   */
  setAttr(obj: KeyValue, element?: string | TinyElement | HTMLElement): this;
  /**
   * Removes the passed attributes from the element.
   * @param attrs The attribute(s).
   * @param element The element.
   */
  removeAttr(
    attrs: string | Array<string>,
    element?: string | TinyElement | HTMLElement
  ): this;
  /**
   * Returns the value of the data attribute.
   * @param name The data attribute name.
   * @param el The element.
   */
  getData(name: string, el?: string | TinyElement | HTMLElement): any;
  /**
   * Sets object of data attributes.
   * @param obj The data dictionary.
   * @param el The element.
   */
  setData(obj: KeyValue, el?: string | TinyElement | HTMLElement): this;
  /**
   * Returns the passed style's value.
   * @param {String} name The style name.
   * @param {HTMLElement|String} element The element.
   */
  getStyle(name: string, element?: string | TinyElement | HTMLElement): any;
  /**
   * Add passed styles.
   * @param styles The styles object.
   * @param element The element.
   */
  addStyle(
    styles: KeyValue,
    element?: string | TinyElement | HTMLElement
  ): this;
  /**
   * Clears the passed styles.
   * @param element The element.
   */
  clearStyles(element?: string | TinyElement | HTMLElement): this;
  /**
   * Removes the passed style(s).
   * @param styles Style(s).
   * @param element The element.
   */
  removeStyles(
    styles: string | Array<string>,
    element?: string | TinyElement | HTMLElement
  ): this;
  /**
   * Returns the child from the passed index.
   * @param index The index.
   * @param parent The parent element.
   */
  getChild(index: number, parent?: string | TinyElement | HTMLElement): any;
  /**
   * Inserts the passed elements as children.
   * @param children The elements to be added.
   * @param parent The element.
   */
  addChildren(
    children: HTMLElement | Array<HTMLElement> | HTMLCollection,
    parent?: string | TinyElement | HTMLElement
  ): this;
  /**
   * Removes all the children.
   * @param element The element.
   */
  removeChildren(element?: string | TinyElement | HTMLElement): this;
  /**
   * Updates html of the element.
   * @param html The html.
   * @param element The element.
   */
  updateHtml(html: string, element?: string | TinyElement | HTMLElement): this;
  /**
   * Shows the element.
   * @param element The element.
   */
  show(element?: string | TinyElement | HTMLElement): this;
  /**
   * Hides the element.
   * @param element The element.
   */
  hide(element?: string | TinyElement | HTMLElement): this;
  /**
   * Subscribes to the event.
   * @param eventName Event name.
   * @param handler Event handler.
   * @param element The element.
   */
  on(
    eventName: any,
    handler: any,
    element?: string | TinyElement | HTMLElement | Window
  ): this;
  /**
   * Un-subscribes from the event.
   * @param eventName Event name.
   * @param handler Event handler.
   * @param element The element.
   */
  off(
    eventName: any,
    handler: any,
    element?: string | TinyElement | HTMLElement | Window
  ): this;
  /**
   * Renders the element.
   */
  render(): void;
  /**
   * Refresh the UI.
   */
  refresh(): void;
}
//# sourceMappingURL=element.d.ts.map
