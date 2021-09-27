import { ELEMENT_META_KEY, AttributeValueDataType } from './constants';
import { isVoid } from './util';
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
  children?: Array<{ name: string; options: TinyElementCreateOptions }>;
}

/**
 * Represents the base class for all Tiny elements.
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
   * @type {Map}
   */
  private _changes = new Map<string, { oldValue: any; newValue: any }>();

  /**
   * The input props values.
   * @type {Map}
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
   * Read accessors from metadata and re-define `getters` for applied props.
   */
  private _applyAccessors() {
    [...this.metadata.accessors].forEach(([prop, { selector, all }]) => {
      Object.defineProperty(this, prop, {
        get() {
          return all ? this.$$(selector) : this.$(selector);
        }
      });
    });
  }

  /**
   * Read inputs from metadata and re-define `getters` and `setters` for applied props.
   */
  private _applyInputs() {
    [...this.metadata.inputs].forEach(({ property, attribute, dataType }) => {
      let attrValue: any = this.getAttr(property);

      if (dataType === AttributeValueDataType.NUMBER && attrValue) {
        attrValue = parseFloat(attrValue);
      } else {
        if (attrValue === 'true' || attrValue === '') {
          attrValue = true;
        } else if (attrValue === 'false') {
          attrValue = false;
        }
      }

      let value;

      if (attribute) {
        value = this[property] !== undefined ? this[property] : attrValue;

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
   * Set event handlers scope to `this`.
   */
  private _setHandlersScope() {
    [...this.metadata.handlers].forEach(([, handlers]) =>
      [...handlers].forEach(
        handler => (this[handler.handler] = this[handler.handler].bind(this))
      )
    );
  }

  /**
   * Read non-window event handlers from metadata and subscribe to events.
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
   * Read window event handlers from metadata and subscribe events.
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
   * Push the changed property and it's value.
   * @param prop The property name.
   * @param value The property value.
   */
  private _pushChange(prop: string, value: any) {
    if (!this._changes.has(prop)) {
      this._changes.set(prop, { oldValue: this[prop], newValue: value });
      return;
    }

    const { oldValue, newValue } = this._changes.get(prop);
    /*if (oldValue === newValue) {
     this._changes.delete(prop);
     return;
     }*/

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
   * @param el
   */
  private _element(el: string | Window | HTMLElement | TinyElement) {
    if (el === 'window' || el === window) {
      return el;
    }

    if (arguments.length === 0 || el === 'self') {
      return this;
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
  protected onChanges(changes) {}

  /**
   * Create new element and returns it.
   * @param name The name of the element.
   * @param options The element options.
   * @returns {HTMLElement}
   */
  create(name: string, options: TinyElementCreateOptions) {
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

    return el;
  }

  /**
   * Queries and returns the first element that matches the passed CSS selector.
   * @param selector The CSS selector.
   * @param element The parent to query.
   */
  $(selector: string, element: string | TinyElement | HTMLElement = this) {
    const el = this._element(element);

    if (!el) {
      return this;
    }

    if (el === this) {
      return this._metadata.shadow
        ? this._shadowRoot.querySelector(selector)
        : this.querySelector(selector);
    }

    if (el instanceof TinyElement) {
      return el.$(selector);
    }

    return el.querySelector(selector);
  }

  /**
   * Queries and returns all the elements that matches the passed CSS selector.
   * @param selector The CSS selector.
   * @param element The parent to query.
   */
  $$(selector: string, element: string | TinyElement | HTMLElement = this) {
    const el = this._element(element);

    if (!el) {
      return this;
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
   * Adds single or multiple CSS classes.
   * @param classes The CSS classes.
   * @param element The element.
   */
  addClass(
    classes: string | Array<string>,
    element: string | TinyElement | HTMLElement = this
  ) {
    const el = this._element(element);

    if (!el) {
      return this;
    }

    el.classList.add(...(Array.isArray(classes) ? classes : [classes]));
    return this;
  }

  /**
   * Removes single or multiple CSS classes from the element.
   * @param classes Single or array of css class names.
   * @param element The element.
   */
  removeClass(
    classes: string | Array<string>,
    element: string | TinyElement | HTMLElement = this
  ) {
    const el = this._element(element);

    if (!el) {
      return this;
    }

    el.classList.remove(...(Array.isArray(classes) ? classes : [classes]));
    return this;
  }

  /**
   * Clears all CSS classes.
   * @param element The element.
   */
  clearClasses(element: string | TinyElement | HTMLElement = this) {
    const el = this._element(element);

    if (!el) {
      return this;
    }

    el.className = '';
    return this;
  }

  /**
   * Toggles source css classes with the target css classes.
   * @param sourceCls Source css class(es).
   * @param targetCls Target css class(es).
   * @param element The element.
   */
  toggleClass(
    sourceCls: string | Array<string>,
    targetCls: string | Array<string>,
    element: string | TinyElement | HTMLElement = this
  ) {
    this.removeClass(sourceCls, element).addClass(targetCls, element);
    return this;
  }

  /**
   * Returns the attribute value of the element.
   * @param name The attribute name.
   * @param element The element.
   */
  getAttr(name: string, element: string | TinyElement | HTMLElement = this) {
    const el = this._element(element);

    if (!el) {
      return this;
    }

    return el.getAttribute(name);
  }

  /**
   * Sets attributes for element from the passed object.
   * @param obj The attributes map.
   * @param element The element.
   */
  setAttr(obj: KeyValue, element: string | TinyElement | HTMLElement = this) {
    const el = this._element(element);

    if (!el) {
      return this;
    }

    Object.entries(obj).forEach(([key, value]) =>
      value === null ? this.removeAttr(key) : el.setAttribute(key, value)
    );
    return this;
  }

  /**
   * Removes the passed attributes from the element.
   * @param attrs The attribute(s).
   * @param element The element.
   */
  removeAttr(
    attrs: string | Array<string>,
    element: string | TinyElement | HTMLElement = this
  ) {
    const el = this._element(element);

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
   * @param el The element.
   */
  getData(name: string, el: string | TinyElement | HTMLElement = this) {
    return this.getAttr(`data-${name}`, el);
  }

  /**
   * Sets object of data attributes.
   * @param obj The data dictionary.
   * @param el The element.
   */
  setData(obj: KeyValue, el: string | TinyElement | HTMLElement = this) {
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
   * @param {String} name The style name.
   * @param {HTMLElement|String} element The element.
   */
  getStyle(name: string, element: string | TinyElement | HTMLElement = this) {
    const el = this._element(element);

    if (!el) {
      return;
    }

    return el.style[name];
  }

  /**
   * Add passed styles.
   * @param styles The styles object.
   * @param element The element.
   */
  addStyle(
    styles: KeyValue,
    element: string | TinyElement | HTMLElement = this
  ) {
    const el = this._element(element);

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
   * Clears the passed styles.
   * @param element The element.
   */
  clearStyles(element: string | TinyElement | HTMLElement = this) {
    const el = this._element(element);

    if (!el) {
      return this;
    }

    delete el.style;
    return this;
  }

  /**
   * Removes the passed style(s).
   * @param styles Style(s).
   * @param element The element.
   */
  removeStyles(
    styles: string | Array<string>,
    element: string | TinyElement | HTMLElement = this
  ) {
    const el = this._element(element);

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
   * @param parent The parent element.
   */
  getChild(index: number, parent: string | TinyElement | HTMLElement = this) {
    const el = this._element(parent);

    if (!el) {
      return this;
    }

    return el.children[index];
  }

  /**
   * Inserts the passed elements as children.
   * @param children The elements to be added.
   * @param parent The element.
   */
  addChildren(
    children: HTMLElement | Array<HTMLElement> | HTMLCollection,
    parent: string | TinyElement | HTMLElement = this
  ) {
    const el = this._element(parent);

    if (!el || !children) {
      return this;
    }

    [...(children instanceof HTMLElement ? [children] : children)].forEach(
      child => el.appendChild(child)
    );
    this._applyNonWindowHandlers();
    return this;
  }

  /**
   * Removes all the children.
   * @param element The element.
   */
  removeChildren(element: string | TinyElement | HTMLElement = this) {
    const el = this._element(element);

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
   * @param element The element.
   */
  updateHtml(html: string, element: string | TinyElement | HTMLElement = this) {
    const el = this._element(element);

    if (!el) {
      return this;
    }

    el.innerHTML = html;
    return this;
  }

  /**
   * Shows the element.
   * @param element The element.
   */
  show(element: string | TinyElement | HTMLElement = this) {
    const el = this._element(element);

    if (!el) {
      return this;
    }

    this.removeStyles('display', el);
    return this;
  }

  /**
   * Hides the element.
   * @param element The element.
   */
  hide(element: string | TinyElement | HTMLElement = this) {
    const el = this._element(element);

    if (!el) {
      return this;
    }

    this.addStyle({ display: 'none' }, el);
    return this;
  }

  /**
   * Subscribes to the event.
   * @param eventName Event name.
   * @param handler Event handler.
   * @param element The element.
   */
  on(
    eventName,
    handler,
    element: string | TinyElement | HTMLElement | Window = this
  ) {
    const el = this._element(element);

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
   * @param element The element.
   */
  off(
    eventName,
    handler,
    element: string | TinyElement | HTMLElement | Window = this
  ) {
    const el = this._element(element);

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

  /**
   * Renders the element.
   */
  render() {
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
  refresh() {
    this.onChanges(this.changes);
    this.changes.clear();
    this._updateTimer && window.clearTimeout(this._updateTimer);
    this._updateTimer = null;
  }
}