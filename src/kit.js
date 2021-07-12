import 'reflect-metadata';
import { ELEMENT_META_KEY } from './constants';
import { buildCssString } from './util';

export default class KitElement extends HTMLElement {

  _initialized = false;

  _rendered = false;

  _metadata = null;

  _changes = new Map();

  _props = new Map();

  _shadowRoot = null;

  _updateTimer = null;

  get metadata() {
    return this._metadata;
  }

  get changes() {
    return this._changes;
  }

  get hasChanges() {
    return this.changes.size > 0;
  }

  constructor() {
    super();
    this._metadata = Reflect.getMetadata(ELEMENT_META_KEY, this.constructor);
  }

  connectedCallback() {
    this.render();
    this._rendered = true;

    const {
      accessors = {},
      trackers = [],
      handlers = {}
    } = this._metadata;

    if (!this._initialized) {
      Object.entries(accessors).forEach(([prop, { selector }]) => {
        Object.defineProperty(this, prop, {
          get() {
            return this.$(selector);
          }
        });
      });

      trackers.forEach(({property, attribute}) => {
        const value = this[property] || this.getAttr(property);
        this._pushChange(property, value);
        this._props.set(property, value);
        Object.defineProperty(this, property, {
          get() {
            return this._props.get(property);
          },
          set(value) {
            attribute && this.setAttr({ property: value });
            this._pushChange(property, value);
            this._props.set(property, value);
            this._triggerUpdate();
          }
        });
      });

      Object.entries(handlers).filter(([element]) => element !== 'window').forEach(([element, handlers]) => {
        handlers.forEach(({ eventName, handler }) => {
          const el = element === 'self' ? this : this.$(element);
          this.on(eventName, this[handler].bind(this), el);
        });
      });

      this._initialized = true;
    }

    Object.entries(handlers).filter(([element]) => element === 'window').forEach(([, handlers]) => {
      handlers.forEach(({ eventName, handler }) => this.on(eventName, this[handler].bind(this), window));
    });


    this.refresh();
    this.onConnected();
  }

  disconnectedCallback() {
    const {
      handlers = {}
    } = this._metadata;

    Object.entries(handlers).filter(([element]) => element === 'window').forEach(([, handlers]) => {
      handlers.forEach(({ eventName, handler }) => this.off(eventName, this[handler].bind(this), window));
    });

    this.onDisconnected();
  }

  create(name) {
    return document.createElement(name);
  }

  $(selector) {
    return this._metadata.shadow ? this._shadowRoot.querySelector(selector) : this.querySelector(selector);
  }

  $$(selector) {
    return this._metadata.shadow ? this._shadowRoot.querySelectorAll(selector) : this.querySelectorAll(selector);
  }

  getAttr(name, el = this) {
    return el.getAttribute(name) ? el.getAttribute(name) : undefined;
  }

  setAttr(obj, el = this) {
    Object.entries(obj).forEach(([key, value]) => el.setAttribute(key, value));
    return this;
  }

  getData(name, el = this) {
    return this.getAttr(`data-${name}`, el);
  }

  setData(obj, el = this) {
    this.setAttr(Object.entries(obj).reduce((acc, [key, value]) => {
      acc[`data-${key}`] = value;
      return acc;
    }, {}), el);
    return this;
  }

  addClass(classes, el = this) {
    el.classList.add(...classes);
    return this;
  }

  removeClass(classes, el = this) {
    el.classList.remove(...classes);
    return this;
  }

  toggleClass(sourceCls, targetCls, el = this) {
    this.removeClass(sourceCls, el);
    this.addClass(targetCls, el);
  }

  addStyle(styles, el = this) {
    el.style.cssText = buildCssString(styles);
    return this;
  }

  removeStyles(styles, el = this) {
    styles.forEach(style => el.style[style] = null);
    return this;
  }

  addChildren(children, parent = this) {
    children.forEach(child => parent.appendChild(child));
    return this;
  }

  removeChildren(el = this) {
    while (el.firstChild) {
      el.removeChild(el.lastChild);
    }

    return this;
  }

  updateHtml(html, el = this) {
    el.innerHTML = html;
    return this;
  }

  show(el = this) {
    el.removeStyles(['display']);
    return this;
  }

  hide(el = this) {
    el.addStyle({ display: 'none' });
    return this;
  }

  render() {
    if (!this._metadata.tpl) {
      return;
    }

    const { shadow } = this._metadata;

    const template = document.createElement('template');
    template.innerHTML = this._metadata.tpl;

    if (shadow) {
      this._shadowRoot = this.attachShadow({ mode: 'closed' });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
    } else {
      this.appendChild(template.content.cloneNode(true));
    }
  }

  on(eventName, handler, el = this) {
    el.addEventListener(eventName, handler);
    return this;
  }

  off(eventName, handler, el = this) {
    el.removeEventListener(eventName, handler);
    return this;
  }

  onConnected() { }

  onDisconnected() { }

  refresh() {
    this._refreshChanges();
    this.changes.clear();
    this._updateTimer && window.clearTimeout(this._updateTimer);
    this._updateTimer = null;
  }

  _pushChange(prop, value) {
    if (!this._changes.has(prop)) {
      this._changes.set(prop, { oldValue: this[prop], newValue: value });
      return;
    }

    const { oldValue, newValue } = this._changes.get(prop);
    if (oldValue === newValue) {
      console.log(this, prop, oldValue, newValue);
      //this._changes.delete(prop);
      //return;
    }

    this._changes.set(prop, { oldValue, newValue: value });
  }

  _refreshChanges() { }

  _triggerUpdate() {
    if (this._updateTimer) {
      return;
    }

    this._updateTimer = setTimeout(() => this.refresh(), 0);
  }
}
