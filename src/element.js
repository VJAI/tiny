import 'reflect-metadata';
import { ELEMENT_META_KEY, AttributeValueDataType } from './constants';
import { ElementMetadata } from './element.metadata';
import { isVoid } from './util';

/**
 * Represents the base class for all Tiny elements.
 * Simplifies developing components using native browser technologies.
 */
export class TinyElement extends HTMLElement {

  /**
   * True if the component is initialized.
   * @type {Boolean}
   */
  _initialized = false;

  /**
   * True if the component is rendered.
   * @type {Boolean}
   */
  _rendered = false;

  /**
   * The metadata of the component.
   * @type {ElementMetadata}
   */
  _metadata = null;

  /**
   * The input properties changes dictionary.
   * @type {Map}
   */
  _changes = new Map();

  /**
   * The input props values.
   * @type {Map}
   */
  _props = new Map();

  /**
   * The property binding values.
   * @type {Map}
   */
  _bindings = new Map();

  /**
   * Shadow root.
   */
  _shadowRoot = null;

  /**
   * TODO: Come-up with a better strategy!
   */
  _updateTimer = null;

  /**
   * Returns the element metadata.
   * @returns {ElementMetadata}
   */
  get metadata() {
    return this._metadata;
  }

  /**
   * @returns {Map}
   */
  get changes() {
    return this._changes;
  }

  /**
   * Returns true if there are changes.
   * @returns {Boolean}
   */
  get hasChanges() {
    return this.changes.size > 0;
  }

  /**
   * @ctor
   */
  constructor() {
    super();
    this._metadata = Reflect.getMetadata(ELEMENT_META_KEY, this.constructor);
  }

  /**
   * Read accessors from metadata and re-define `getters` for applied props.
   */
  _applyAccessors() {
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
  _applyInputs() {
    [...this.metadata.inputs].forEach(({property, attribute, datatype}) => {
      let attrValue = this.getAttr(property);

      if (datatype === AttributeValueDataType.NUMBER && attrValue) {
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
      Object.defineProperty(this, property, {
        get() {
          return this._props.get(property);
        },
        set(value) {
          if (attribute) {
            if (value) {
              this.setAttr({ [property]: !isVoid(value) ? value.toString() : value });
            } else {
              this.removeAttr(property);
            }
          }

          this._pushChange(property, value);
          this._props.set(property, value);
          this._initialized && this._triggerUpdate();
        }
      });
    });
  }

  /**
   * Set event handlers scope to `this`.
   */
  _setHandlersScope() {
    [...this.metadata.handlers].forEach(([, handlers]) => { [...handlers].forEach(handler => {
      this[handler.handler] = this[handler.handler].bind(this);
    })});
  }

  /**
   * Read non-window event handlers from metadata and subscribe events.
   */
  _applyNonWindowHandlers() {
    [...this.metadata.handlers].filter(([element]) => element !== 'window').forEach(([element, handlers]) => {
      [...handlers].forEach(({ eventName, all, handler }) => {
        let els;

        if (element === 'self') {
          els = [this];
        } else if (all) {
          els = this.$$(element);
        } else {
          els = [this.$(element)];
        }

        els.forEach(el => {
          this.on(eventName, this[handler], el);
        });
      });
    });
  }

  /**
   * Read window event handlers from metadata and subscribe events.
   */
  _applyWindowHandlers() {
    [...this.metadata.handlers].filter(([element]) => element === 'window').forEach(([, handlers]) => {
      handlers.forEach(({ eventName, handler }) => this.on(eventName, this[handler], window));
    });
  }

  /**
   * Push the changed property and it's value.
   * @param {string} prop The property name.
   * @param {*} value The property value.
   */
  _pushChange(prop, value) {
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
  _triggerUpdate() {
    if (this._updateTimer) {
      return;
    }

    this._updateTimer = setTimeout(() => this.refresh(), 0);
  }

  /**
   * Returns the passed element or based on selector.
   * @param {*} el
   */
  _element(el) {
    if (el === 'window' || el === window) {
      return el;
    }

    if (arguments.length === 0 || el === 'self') {
      return this;
    }

    if (el instanceof HTMLElement) {
      return el;
    }

    return this.$(el);
  }

  /**
   * Life-cycle handler which is invoked whenever the element is connected to DOM.
   */
  connectedCallback() {
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
  disconnectedCallback() {
    const {
      handlers = {}
    } = this._metadata;

    Object.entries(handlers).filter(([element]) => element === 'window').forEach(([, handlers]) => {
      handlers.forEach(({ eventName, handler }) => this.off(eventName, this[handler].bind(this), window));
    });

    this.onDisconnected();
  }

  /**
   * Create new element and returns it.
   * @param {String} name The name of the element.
   * @param {Object} options The element options.
   * @returns {HTMLElement}
   */
  create(name, options) {
    const el = document.createElement(name),
      {
        id,
        cls,
        props,
        attrs,
        styles,
        events,
        parent,
        html,
        children
      } = options || {};

    id && (el.id = id);
    Array.isArray(cls) && this.addClass(cls, el);
    typeof props === 'object' && Object.entries(props).forEach(([key, value]) => el[key] = value);
    typeof attrs === 'object' && Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    typeof styles === 'object' && this.addStyle(styles, el);
    typeof events === 'object' && Object.entries(events).forEach(([key, value]) => this.on(key, value, el));
    typeof html === 'string' && this.updateHtml(html, el);
    parent && this.addChildren([el], parent);
    Array.isArray(children) && children.forEach(({ name, options }) => this.create(name, {...options, parent: el }));

    return el;
  }

  /**
   * Queries and returns the element that matches the passed CSS selector.
   * @param {String} selector The CSS selector.
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {HTMLElement}
   */
  $(selector, el = this) {
    el = this._element(el);

    if (!el) {
      return this;
    }

    if (el === this) {
      return this._metadata.shadow ? this._shadowRoot.querySelector(selector) : this.querySelector(selector);
    }

    if (el instanceof TinyElement) {
      return el.$(selector);
    }

    return el.querySelector(selector);
  }

  /**
   * Queries and returns the elements that matches the passed CSS selector.
   * @param {String} selector The CSS selector.
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {HTMLCollection}
   */
  $$(selector, el = this) {
    el = this._element(el);

    if (!el) {
      return this;
    }

    if (el === this) {
      return this._metadata.shadow ? this._shadowRoot.querySelectorAll(selector) : this.querySelectorAll(selector);
    }

    if (el instanceof TinyElement) {
      return el.$$(selector);
    }

    return el.querySelectorAll(selector);
  }

  /**
   * Adds single or multiple CSS classes.
   * @param {String|Array<String>} classes The CSS classes.
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  addClass(classes, el = this) {
    el = this._element(el);

    if (!el) {
      return this;
    }

    el.classList.add(...(Array.isArray(classes) ? classes : [classes]));
    return this;
  }

  /**
   * Removes single or multiple classes.
   * @param {String|Array<String>} classes
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  removeClass(classes, el = this) {
    el = this._element(el);

    if (!el) {
      return this;
    }

    el.classList.remove(...(Array.isArray(classes) ? classes : [classes]));
    return this;
  }

  /**
   * Clear all classes.
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  clearClasses(el = this) {
    el = this._element(el);

    if (!el) {
      return this;
    }

    el.className = '';
    return this;
  }

  /**
   * Toggles source css classes with the target.
   * @param {String|Array<String>} sourceCls Source css class(es).
   * @param {String|Array<String>} targetCls Target css class(es).
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  toggleClass(sourceCls, targetCls, el = this) {
    this.removeClass(sourceCls, el).addClass(targetCls, el);
    return this;
  }

  /**
   * Returns the attribute value of the element.
   * @param {String} name The attribute name.
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {String}
   */
  getAttr(name, el = this) {
    el = this._element(el);

    if (!el) {
      return;
    }

    return el.getAttribute(name);
  }

  /**
   * Sets attributes for element from the passed object.
   * @param {Object} obj The attributes map.
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  setAttr(obj, el = this) {
    el = this._element(el);

    if (!el) {
      return this;
    }

    Object.entries(obj).forEach(([key, value]) => value === null ? this.removeAttr(key) : el.setAttribute(key, value));
    return this;
  }

  /**
   * Removes the passed attributes from the element.
   * @param {String|Array<String>} attrs The attribute(s).
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  removeAttr(attrs, el = this) {
    el = this._element(el);

    if (!el) {
      return this;
    }

    (Array.isArray(attrs) ? attrs : [attrs]).forEach(attr => el.removeAttribute(attr));
  }

  /**
   * Returns the value of the data attribute.
   * @param {string} name The data attribute name.
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {String}
   */
  getData(name, el = this) {
    return this.getAttr(`data-${name}`, el);
  }

  /**
   * Sets object of data attributes.
   * @param {Object} obj
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  setData(obj, el = this) {
    this.setAttr(Object.entries(obj).reduce((acc, [key, value]) => {
      acc[`data-${key}`] = value;
      return acc;
    }, {}), el);
    return this;
  }

  /**
   * Returns the passed style's value.
   * @param {String} name The style name.
   * @param {HTMLElement|String} el The element.
   * @returns {String}
   */
  getStyle(name, el = this) {
    el = this._element(el);

    if (!el) {
      return;
    }

    return el.style[name];
  }

  /**
   * Add passed styles.
   * @param {Object} styles The styles object.
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  addStyle(styles, el = this) {
    el = this._element(el);

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
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  clearStyles(el = this) {
    el = this._element(el);

    if (!el) {
      return this;
    }

    delete el.style;
    return this;
  }

  /**
   * Removes the passed style(s).
   * @param {String|Array<String>} styles Style(s).
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  removeStyles(styles, el = this) {
    el = this._element(el);

    if (!el) {
      return this;
    }

    (Array.isArray(styles) ? styles : [styles]).forEach(style => el.style[style] = null);
    return this;
  }

  /**
   * Returns the child from the passed index.
   * @param {Number} index The index.
   * @param {HTMLElement|String} parent The parent element.
   */
  getChild(index, parent = this) {
    parent = this._element(parent);

    if (!parent) {
      return this;
    }

    return parent.children[index];
  }

  /**
   * Inserts the passed elements as children.
   * @param {HTMLElement|Array<HTMLElement>|HTMLCollection} children The elements to be added.
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  addChildren(children, parent = this) {
    parent = this._element(parent);

    if (!parent || !children) {
      return this;
    }

    [...(children instanceof HTMLElement ? [children] : children)].forEach(child => parent.appendChild(child));
    this._applyNonWindowHandlers();
    return this;
  }

  /**
   * Removes all the children.
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  removeChildren(el = this) {
    el = this._element(el);

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
   * @param {String} html The html.
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  updateHtml(html, el = this) {
    el = this._element(el);

    if (!el) {
      return this;
    }

    el.innerHTML = html;
    return this;
  }

  /**
   * Shows the element.
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  show(el = this) {
    el = this._element(el);

    if (!el) {
      return this;
    }

    this.removeStyles('display', el);
    return this;
  }

  /**
   * Hides the element.
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  hide(el = this) {
    el = this._element(el);

    if (!el) {
      return this;
    }

    this.addStyle({ display: 'none' }, el);
    return this;
  }

  /**
   * Subscribes to the event.
   * @param {String} eventName Event name.
   * @param {Function} handler Event handler.
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  on(eventName, handler, el = this) {
    el = this._element(el);

    if (!el) {
      return this;
    }

    const elEventHandlers = el['__event_handlers__'] = el['__event_handlers__'] || new Map();
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
   * @param {String} eventName Event name.
   * @param {Function} handler Event handler.
   * @param {HTMLElement|String} [el=this] The element.
   * @returns {TinyElement}
   */
  off(eventName, handler, el = this) {
    el = this._element(el);

    if (!el) {
      return this;
    }

    el.removeEventListener(eventName, handler);

    const elEventHandlers = el['__event_handlers__'] = el['__event_handlers__'] || new Map();
    if (!elEventHandlers.has(eventName)) {
      return this;
    }

    elEventHandlers.get(eventName).delete(handler);

    return this;
  }

  /**
   * Renders the element.
   * @returns {TinyElement}
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
    this.runDecorators();
    this.changes.clear();
    this._updateTimer && window.clearTimeout(this._updateTimer);
    this._updateTimer = null;
  }

  /**
   * Runs the decorators to update the DOM.
   */
  runDecorators() {
    const { bindings } = this._metadata;
    [...bindings].filter(([, propertyBindings]) => [...propertyBindings].filter(b => b.type === 'input').length === 1).forEach(([property, propertyBindings]) => {
      if (this.changes.has(property)) {
        [...propertyBindings].forEach(propertyBinding => propertyBinding.type !== 'input' && propertyBinding.apply(this, this[property]));
      }
    });
  }

  /**
   * Invoked after the element is connected to DOM.
   */
  onConnected() { }

  /**
   * Invoked after the element is disconnected to DOM.
   */
  onDisconnected() { }

  /**
   * Should be overwritten by sub-components to update the decorators/DOM.
   */
  onChanges(changes) { }
}
