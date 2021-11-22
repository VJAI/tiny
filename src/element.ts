import { ELEMENT_META_KEY, AttributeValueDataType } from './constants';
import { isVoid, readValue } from './util';
import { ElementMetadata } from './element.metadata';

/**
 * Represents a key / value structure like object.
 */
export interface KeyValue {
  [key: string]: any;
}

/**
 * Represents event names and handlers map.
 */
export interface EventMap {
  [key: string]: (evt: any) => void;
}

/**
 * Represents a DOM event handler.
 */
export type EventHandler<K extends keyof HTMLElementEventMap> = (
  this: HTMLElement,
  ev: HTMLElementEventMap[K]
) => any;

/**
 * Element creation parameters.
 */
export interface TinyElementCreateOptions {
  /**
   * Element id.
   */
  id?: string;

  /**
   * CSS class(es).
   */
  cls?: string | Array<string>;

  /**
   * Properties.
   */
  props?: KeyValue;

  /**
   * DOM attributes.
   */
  attrs?: KeyValue;

  /**
   * Styles.
   */
  styles?: KeyValue;

  /**
   * Events.
   */
  events?: EventMap;

  /**
   * Parent element.
   */
  parent?: string | TinyElement | HTMLElement;

  /**
   * Inner HTML.
   */
  html?: string;

  /**
   * Children.
   */
  children?: Array<{ name: string; options: TinyElementCreateOptions }>;
}

/**
 * Type that represents the element changes map.
 */
export type ElementChanges = Map<string, { oldValue: any; newValue: any }>;

/**
 * Represents an UI element.
 */
export type UIElement = string | TinyElement | HTMLElement;

/**
 * Simple base class for all Tiny elements.
 * Simplifies developing components using native browser technologies.
 */
export abstract class TinyElement extends HTMLElement {
  /**
   * The metadata of the component.
   */
  private readonly _metadata: ElementMetadata = null;

  /**
   * True if the component is initialized.
   */
  private _initialized: boolean = false;

  /**
   * True if the component is rendered.
   */
  private _rendered: boolean = false;

  /**
   * The input properties changes dictionary.
   */
  private _changes = new Map<string, { oldValue: any; newValue: any }>();

  /**
   * The input props values.
   */
  private _props = new Map<string, any>();

  /**
   * Shadow root.
   */
  private _shadowRoot: ShadowRoot = null;

  /**
   * The DOM Update timer.
   */
  private _updateTimer: any = null;

  /**
   * Returns the element metadata.
   */
  get metadata() {
    return this._metadata;
  }

  /**
   * Returns the changes.
   */
  get changes() {
    return this._changes;
  }

  /**
   * Returns true if there are changes.
   */
  get hasChanges() {
    return this.changes.size > 0;
  }

  /**
   * constructor.
   */
  protected constructor() {
    super();
    this._metadata = this.constructor[ELEMENT_META_KEY];
  }

  /**
   * Reads accessors from metadata and re-define `getters` for applied props.
   */
  private _applyAccessors() {
    [...this.metadata.accessors].forEach(
      ([prop, { selector, parent, all }]) => {
        Object.defineProperty(this, prop, {
          get() {
            return all ? this.$$(selector, parent) : this.$(selector, parent);
          }
        });
      }
    );
  }

  /**
   * Reads inputs from metadata and re-define `getters` and `setters` for applied props.
   */
  private _applyInputs() {
    [...this.metadata.inputs].forEach(({ property, attribute, dataType }) => {
      let value;

      if (attribute) {
        let attrValue: any = this.getAttr(property);

        if (attrValue !== null) {
          if (
            dataType === AttributeValueDataType.NUMBER &&
            !isNaN(parseFloat(attrValue))
          ) {
            attrValue = parseFloat(attrValue);
          } else if (dataType === AttributeValueDataType.BOOLEAN) {
            attrValue = attrValue === 'true' || attrValue === '';
          }

          value = attrValue;
        } else {
          value = this[property];
        }

        if (!isVoid(value) && value !== attrValue) {
          this.setAttr({ [property]: value });
        }
      } else {
        value = this[property];
      }

      this._pushChange(property, value);
      this._props.set(property, value);
      const target = this;
      Object.defineProperty(this, property, {
        get() {
          return target._props.get(property);
        },
        set(value) {
          if (attribute) {
            if (value) {
              target.setAttr({
                [property]: !isVoid(value) ? value.toString() : value
              });
            } else {
              target.removeAttr(property);
            }
          }

          target._pushChange(property, value);
          target._props.set(property, value);
          target._initialized && target._triggerUpdate();
        }
      });
    });
  }

  /**
   * Sets event handlers scope to `this`.
   */
  private _setHandlersScope() {
    [...this.metadata.handlers].forEach(([, handlers]) =>
      [...handlers].forEach(
        handler => (this[handler.handler] = this[handler.handler].bind(this))
      )
    );
  }

  /**
   * Reads non-window event handlers from metadata and subscribe to events.
   */
  private _applyNonWindowHandlers() {
    [...this.metadata.handlers]
      .filter(([element]) => element !== 'window')
      .forEach(([element, handlers]) => {
        [...handlers].forEach(({ eventName, all, handler }) => {
          let els;

          if (element === 'self') {
            els = [this];
          } else if (all) {
            els = this.$$(element);
          } else {
            els = [this.$(element)];
          }

          els.forEach(el => this.on(eventName, this[handler], el));
        });
      });
  }

  /**
   * Reads window event handlers from metadata and subscribe events.
   */
  private _applyWindowHandlers() {
    [...this.metadata.handlers]
      .filter(([element]) => element === 'window')
      .forEach(([, handlers]) =>
        handlers.forEach(({ eventName, handler }) =>
          this.on(eventName, this[handler], window)
        )
      );
  }

  /**
   * Pushes the changed property and it's value.
   * @param prop The property name.
   * @param value The property value.
   */
  private _pushChange(prop: string, value: any) {
    if (!this._changes.has(prop)) {
      this._changes.set(prop, { oldValue: this[prop], newValue: value });
      return;
    }

    const { oldValue, newValue } = this._changes.get(prop);
    if (oldValue === newValue && this._initialized) {
      this._changes.delete(prop);
      return;
    }

    this._changes.set(prop, { oldValue, newValue: value });
  }

  /**
   * Triggers update.
   */
  private _triggerUpdate() {
    if (this._updateTimer) {
      return;
    }

    this._updateTimer = setTimeout(() => this.refresh(), 0);
  }

  /**
   * Returns the passed element or based on selector.
   * @param el The element.
   */
  private _element(el: UIElement | Window): UIElement | Window {
    if (el === 'window' || el === window) {
      return el;
    }

    if (arguments.length === 0 || el === 'self') {
      return this;
    }

    if (el === '$$body') {
      return document.body;
    }

    if (typeof el === 'string' && el.startsWith('$$this.')) {
      return <HTMLElement>readValue(this, el.substr('$$this.'.length));
    }

    if (el instanceof HTMLElement) {
      return el;
    }

    return this.$(el as string);
  }

  /**
   * Life-cycle handler which is invoked whenever the element is connected to DOM.
   */
  protected connectedCallback() {
    if (!this._rendered) {
      this.render();
      this._rendered = true;
    }

    if (!this._initialized) {
      this._applyAccessors();
      this._applyInputs();
      this._setHandlersScope();
      this._applyNonWindowHandlers();
      this._initialized = true;
    }

    this._applyWindowHandlers();
    this.onConnected();
    this.refresh();
  }

  /**
   * Life-cycle handler invoked whenever the element is disconnected from DOM.
   */
  protected disconnectedCallback() {
    [...this.metadata.handlers]
      .filter(([element]) => element === 'window')
      .forEach(([, handlers]) =>
        handlers.forEach(({ eventName, handler }) =>
          this.off(eventName, this[handler].bind(this), window)
        )
      );

    this.onDisconnected();
  }

  /**
   * Invoked after the element is connected to DOM.
   */
  protected onConnected() {}

  /**
   * Invoked after the element is disconnected to DOM.
   */
  protected onDisconnected() {}

  /**
   * Should be overwritten by sub-components to update the decorators/DOM.
   */
  protected onChanges(changes: ElementChanges) {}

  /**
   * Renders the element.
   */
  protected render() {
    if (!this._metadata.tpl) {
      return;
    }

    const template = document.createElement('template');
    template.innerHTML = this._metadata.tpl;

    const { shadow } = this._metadata;

    if (shadow) {
      this._shadowRoot = this.attachShadow({ mode: 'closed' });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
    } else {
      this.appendChild(template.content.cloneNode(true));
    }
  }

  /**
   * Refresh the UI.
   */
  protected refresh() {
    this.onChanges(this.changes);
    this.changes.clear();
    this._updateTimer && window.clearTimeout(this._updateTimer);
    this._updateTimer = null;
  }

  /**
   * Create new element and returns it.
   * @param name The name of the element.
   * @param [options] The element options.
   */
  create<T extends HTMLElement>(
    name: string,
    options?: TinyElementCreateOptions
  ): T {
    const el = document.createElement(name),
      { id, cls, props, attrs, styles, events, parent, html, children } =
        options || {};

    id && (el.id = id);
    Array.isArray(cls) && this.addClass(cls, el);
    typeof props === 'object' &&
      Object.entries(props).forEach(([key, value]) => (el[key] = value));
    typeof attrs === 'object' &&
      Object.entries(attrs).forEach(([key, value]) =>
        el.setAttribute(key, value)
      );
    typeof styles === 'object' && this.addStyle(styles, el);
    typeof events === 'object' &&
      Object.entries(events).forEach(([key, value]) => this.on(key, value, el));
    typeof html === 'string' && this.updateHtml(html, el);
    parent && this.addChildren([el], parent);
    Array.isArray(children) &&
      children.forEach(({ name, options }) =>
        this.create(name, { ...options, parent: el })
      );

    return el as T;
  }

  /**
   * Queries and returns the first element that matches the passed CSS selector.
   * @param selector The CSS selector.
   * @param [element] The parent to query.
   */
  $<T extends HTMLElement>(selector: string, element: UIElement = this): T {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return <any>this;
    }

    if (el === this) {
      return this._metadata.shadow
        ? this._shadowRoot.querySelector(selector)
        : this.querySelector(selector);
    }

    if (el instanceof TinyElement) {
      return el.$(selector);
    }

    return el.querySelector(selector) as T;
  }

  /**
   * Queries and returns all the elements that matches the passed CSS selector.
   * @param selector The CSS selector.
   * @param [element] The parent to query.
   */
  $$<T extends HTMLElement>(
    selector: string,
    element: UIElement = this
  ): NodeListOf<T> {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return null;
    }

    if (el === this) {
      return this._metadata.shadow
        ? this._shadowRoot.querySelectorAll(selector)
        : this.querySelectorAll(selector);
    }

    if (el instanceof TinyElement) {
      return el.$$(selector);
    }

    return el.querySelectorAll(selector);
  }

  /**
   * Returns true if the element has the passed CSS class name.
   * @param cls The CSS class.
   * @param element The element.
   */
  hasClass(cls: string, element: UIElement = this): boolean {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return false;
    }

    return el.classList.contains(cls);
  }

  /**
   * Adds single or multiple CSS classes.
   * @param classes The CSS classes.
   * @param [element] The element.
   */
  addClass(
    classes: string | Array<string>,
    element: UIElement = this
  ): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    el.classList.add(...(Array.isArray(classes) ? classes : [classes]));
    return this;
  }

  /**
   * Removes single or multiple CSS classes from the element.
   * @param classes Single or array of css class names.
   * @param [element] The element.
   */
  removeClass(
    classes: string | Array<string>,
    element: UIElement = this
  ): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    el.classList.remove(...(Array.isArray(classes) ? classes : [classes]));
    return this;
  }

  /**
   * Clears all CSS classes.
   * @param [element] The element.
   */
  clearClasses(element: UIElement = this): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    el.className = '';
    return this;
  }

  /**
   * Toggles CSS classes.
   * @param cls CSS classes.
   * @param [element] The element.
   * @param [state] Passing the boolean flag decides to add or remove classes.
   */
  toggleClass(
    cls: string | Array<string>,
    element: UIElement = this,
    state?: boolean
  ): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    if (isVoid(state)) {
      const classes = typeof cls === 'string' ? [cls] : cls;
      classes.forEach(c =>
        this.hasClass(c, el) ? this.removeClass(c, el) : this.addClass(c, el)
      );
      return this;
    }

    state ? this.addClass(cls, el) : this.removeClass(cls, el);
    return this;
  }

  /**
   * Replaces source css classes with the target css classes.
   * @param sourceCls Source css class(es).
   * @param targetCls Target css class(es).
   * @param [element] The element.
   */
  replaceClass(
    sourceCls: string | Array<string>,
    targetCls: string | Array<string>,
    element: UIElement = this
  ): TinyElement {
    this.removeClass(sourceCls, element).addClass(targetCls, element);
    return this;
  }

  /**
   * Returns the attribute value of the element.
   * @param name The attribute name.
   * @param [element] The element.
   */
  getAttr(name: string, element: UIElement = this): string {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return '';
    }

    return el.getAttribute(name);
  }

  /**
   * Sets attributes for element from the passed object.
   * @param obj The attributes map.
   * @param [element] The element.
   */
  setAttr(obj: KeyValue, element: UIElement = this): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    Object.entries(obj).forEach(([key, value]) =>
      isVoid(value) ? this.removeAttr(key) : el.setAttribute(key, value)
    );
    return this;
  }

  /**
   * Removes the passed attributes from the element.
   * @param attrs The attribute(s).
   * @param [element] The element.
   */
  removeAttr(
    attrs: string | Array<string>,
    element: UIElement = this
  ): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    (Array.isArray(attrs) ? attrs : [attrs]).forEach(attr =>
      el.removeAttribute(attr)
    );

    return this;
  }

  /**
   * Returns the value of the data attribute.
   * @param name The data attribute name.
   * @param [el] The element.
   */
  getData(name: string, el: UIElement = this): string {
    return this.getAttr(`data-${name}`, el);
  }

  /**
   * Sets object of data attributes.
   * @param obj The data dictionary.
   * @param [el] The element.
   */
  setData(obj: KeyValue, el: UIElement = this): TinyElement {
    this.setAttr(
      Object.entries(obj).reduce((acc, [key, value]) => {
        acc[`data-${key}`] = value;
        return acc;
      }, {}),
      el
    );
    return this;
  }

  /**
   * Returns the passed style's value.
   * @param name The style name.
   * @param [element] The element.
   */
  getStyle(name: string, element: UIElement = this): string {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return '';
    }

    return el.style[name];
  }

  /**
   * Returns true if the element has the passed style.
   * @param style Style name.
   * @param [element] The element.
   */
  hasStyle(style: string, element: UIElement = this): boolean {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return false;
    }

    return el.getAttribute('style').indexOf(`${style}:`) != -1;
  }

  /**
   * Add passed styles.
   * @param styles The styles object.
   * @param [element] The element.
   */
  addStyle(styles: KeyValue, element: UIElement = this): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    Object.entries(styles).forEach(([k, v]) => {
      if (k.startsWith('--')) {
        el.style.setProperty(k, v);
      } else if (v === null) {
        this.removeStyles(k, el);
      } else {
        el.style[k] = v;
      }
    });
    return this;
  }

  /**
   * Clears the styles of an element.
   * @param [element] The element.
   */
  clearStyles(element: UIElement = this): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    el.style.cssText = '';
    return this;
  }

  /**
   * Removes the passed style(s).
   * @param styles Style(s).
   * @param [element] The element.
   */
  removeStyles(
    styles: string | Array<string>,
    element: UIElement = this
  ): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    (Array.isArray(styles) ? styles : [styles]).forEach(
      style => (el.style[style] = null)
    );
    return this;
  }

  /**
   * Returns the child from the passed index.
   * @param index The index.
   * @param [parent] The parent element.
   */
  getChild(index: number, parent: UIElement = this): HTMLElement {
    const el = this._element(parent) as HTMLElement;

    if (!el) {
      return this;
    }

    return <HTMLElement>el.children[index];
  }

  /**
   * Inserts the passed elements as children.
   * @param children The elements to be added.
   * @param [parent] The element.
   * @param [prepend] True to prepend the element.
   */
  addChildren(
    children:
      | HTMLElement
      | Array<HTMLElement>
      | HTMLCollection
      | Array<DocumentFragment>,
    parent: UIElement = this,
    prepend: boolean = false
  ): TinyElement {
    const el = this._element(parent) as HTMLElement;

    if (!el || !children) {
      return this;
    }

    [...(children instanceof HTMLElement ? [children] : children)].forEach(
      child => {
        const e =
          child instanceof HTMLTemplateElement
            ? child.content.cloneNode(true)
            : child;
        e && (prepend ? el.prepend(e) : el.appendChild(e));
      }
    );

    this._applyNonWindowHandlers();
    return this;
  }

  /**
   * Removes all the children.
   * @param [element] The element.
   */
  removeChildren(element: UIElement = this): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    while (el.firstChild) {
      el.removeChild(el.lastChild);
    }

    return this;
  }

  /**
   * Updates html of the element.
   * @param html The html.
   * @param [element] The element.
   */
  updateHtml(html: string, element: UIElement = this): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    el.innerHTML = !isVoid(html) ? html : '';
    return this;
  }

  /**
   * Shows the element.
   * @param [element] The element.
   */
  show(element: UIElement = this): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    this.removeStyles('display', el);
    return this;
  }

  /**
   * Hides the element.
   * @param [element] The element.
   */
  hide(element: UIElement = this): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    this.addStyle({ display: 'none' }, el);
    return this;
  }

  /**
   * Enables / disables component based on passed flag.
   * @param [element] The element.
   * @param [enable] Passing true will enable the control.
   */
  enable(element: UIElement = this, enable = true): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    if (enable) {
      this.removeAttr('disabled', el);
    } else {
      this.setAttr({ disabled: true }, el);
    }

    return this;
  }

  /**
   * Subscribes to the event.
   * @param eventName Event name.
   * @param handler Event handler.
   * @param [element] The element.
   */
  on<K extends keyof HTMLElementEventMap>(
    eventName,
    handler: EventHandler<K>,
    element: UIElement | Window = this
  ): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    const elEventHandlers = (el['__event_handlers__'] =
      el['__event_handlers__'] || new Map());
    if (!elEventHandlers.has(eventName)) {
      elEventHandlers.set(eventName, new Set());
    }

    if (elEventHandlers.get(eventName).has(handler)) {
      return this;
    }

    el.addEventListener(eventName, handler);
    elEventHandlers.get(eventName).add(handler);

    return this;
  }

  /**
   * Un-subscribes from the event.
   * @param eventName Event name.
   * @param handler Event handler.
   * @param [element] The element.
   */
  off<K extends keyof HTMLElementEventMap>(
    eventName,
    handler: EventHandler<K>,
    element: UIElement | Window = this
  ): TinyElement {
    const el = this._element(element) as HTMLElement;

    if (!el) {
      return this;
    }

    el.removeEventListener(eventName, handler);

    const elEventHandlers = (el['__event_handlers__'] =
      el['__event_handlers__'] || new Map());
    if (!elEventHandlers.has(eventName)) {
      return this;
    }

    elEventHandlers.get(eventName).delete(handler);

    return this;
  }
}
