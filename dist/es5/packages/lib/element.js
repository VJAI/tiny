'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null'
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __read =
  (this && this.__read) ||
  function (o, n) {
    var m = typeof Symbol === 'function' && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
      r,
      ar = [],
      e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error: error };
    } finally {
      try {
        if (r && !r.done && (m = i['return'])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }
    return ar;
  };
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.TinyElement = void 0;
var constants_1 = require('./constants');
var util_1 = require('./util');
/**
 * Represents the base class for all Tiny elements.
 * Simplifies developing components using native browser technologies.
 */
var TinyElement = /** @class */ (function (_super) {
  __extends(TinyElement, _super);
  /**
   * constructor.
   */
  function TinyElement() {
    var _this = _super.call(this) || this;
    /**
     * The metadata of the component.
     */
    _this._metadata = null;
    /**
     * True if the component is initialized.
     */
    _this._initialized = false;
    /**
     * True if the component is rendered.
     */
    _this._rendered = false;
    /**
     * The input properties changes dictionary.
     * @type {Map}
     */
    _this._changes = new Map();
    /**
     * The input props values.
     * @type {Map}
     */
    _this._props = new Map();
    /**
     * Shadow root.
     */
    _this._shadowRoot = null;
    /**
     * The DOM Update timer.
     */
    _this._updateTimer = null;
    _this._metadata = _this.constructor[constants_1.ELEMENT_META_KEY];
    return _this;
  }
  Object.defineProperty(TinyElement.prototype, 'metadata', {
    /**
     * Returns the element metadata.
     */
    get: function () {
      return this._metadata;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TinyElement.prototype, 'changes', {
    /**
     * Returns the changes.
     */
    get: function () {
      return this._changes;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(TinyElement.prototype, 'hasChanges', {
    /**
     * Returns true if there are changes.
     */
    get: function () {
      return this.changes.size > 0;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * Read accessors from metadata and re-define `getters` for applied props.
   */
  TinyElement.prototype._applyAccessors = function () {
    var _this = this;
    __spreadArray([], __read(this.metadata.accessors), false).forEach(function (
      _a
    ) {
      var _b = __read(_a, 2),
        prop = _b[0],
        _c = _b[1],
        selector = _c.selector,
        all = _c.all;
      Object.defineProperty(_this, prop, {
        get: function () {
          return all ? this.$$(selector) : this.$(selector);
        }
      });
    });
  };
  /**
   * Read inputs from metadata and re-define `getters` and `setters` for applied props.
   */
  TinyElement.prototype._applyInputs = function () {
    var _this = this;
    __spreadArray([], __read(this.metadata.inputs), false).forEach(function (
      _a
    ) {
      var _b;
      var property = _a.property,
        attribute = _a.attribute,
        dataType = _a.dataType;
      var attrValue = _this.getAttr(property);
      if (dataType === constants_1.AttributeValueDataType.NUMBER && attrValue) {
        attrValue = parseFloat(attrValue);
      } else {
        if (attrValue === 'true' || attrValue === '') {
          attrValue = true;
        } else if (attrValue === 'false') {
          attrValue = false;
        }
      }
      var value;
      if (attribute) {
        value = _this[property] !== undefined ? _this[property] : attrValue;
        if (!(0, util_1.isVoid)(value) && value !== attrValue) {
          _this.setAttr(((_b = {}), (_b[property] = value), _b));
        }
      } else {
        value = _this[property];
      }
      _this._pushChange(property, value);
      _this._props.set(property, value);
      var target = _this;
      Object.defineProperty(_this, property, {
        get: function () {
          return target._props.get(property);
        },
        set: function (value) {
          var _a;
          if (attribute) {
            if (value) {
              target.setAttr(
                ((_a = {}),
                (_a[property] = !(0, util_1.isVoid)(value)
                  ? value.toString()
                  : value),
                _a)
              );
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
  };
  /**
   * Set event handlers scope to `this`.
   */
  TinyElement.prototype._setHandlersScope = function () {
    var _this = this;
    __spreadArray([], __read(this.metadata.handlers), false).forEach(function (
      _a
    ) {
      var _b = __read(_a, 2),
        handlers = _b[1];
      return __spreadArray([], __read(handlers), false).forEach(function (
        handler
      ) {
        return (_this[handler.handler] = _this[handler.handler].bind(_this));
      });
    });
  };
  /**
   * Read non-window event handlers from metadata and subscribe to events.
   */
  TinyElement.prototype._applyNonWindowHandlers = function () {
    var _this = this;
    __spreadArray([], __read(this.metadata.handlers), false)
      .filter(function (_a) {
        var _b = __read(_a, 1),
          element = _b[0];
        return element !== 'window';
      })
      .forEach(function (_a) {
        var _b = __read(_a, 2),
          element = _b[0],
          handlers = _b[1];
        __spreadArray([], __read(handlers), false).forEach(function (_a) {
          var eventName = _a.eventName,
            all = _a.all,
            handler = _a.handler;
          var els;
          if (element === 'self') {
            els = [_this];
          } else if (all) {
            els = _this.$$(element);
          } else {
            els = [_this.$(element)];
          }
          els.forEach(function (el) {
            return _this.on(eventName, _this[handler], el);
          });
        });
      });
  };
  /**
   * Read window event handlers from metadata and subscribe events.
   */
  TinyElement.prototype._applyWindowHandlers = function () {
    var _this = this;
    __spreadArray([], __read(this.metadata.handlers), false)
      .filter(function (_a) {
        var _b = __read(_a, 1),
          element = _b[0];
        return element === 'window';
      })
      .forEach(function (_a) {
        var _b = __read(_a, 2),
          handlers = _b[1];
        return handlers.forEach(function (_a) {
          var eventName = _a.eventName,
            handler = _a.handler;
          return _this.on(eventName, _this[handler], window);
        });
      });
  };
  /**
   * Push the changed property and it's value.
   * @param prop The property name.
   * @param value The property value.
   */
  TinyElement.prototype._pushChange = function (prop, value) {
    if (!this._changes.has(prop)) {
      this._changes.set(prop, { oldValue: this[prop], newValue: value });
      return;
    }
    var _a = this._changes.get(prop),
      oldValue = _a.oldValue,
      newValue = _a.newValue;
    /*if (oldValue === newValue) {
         this._changes.delete(prop);
         return;
         }*/
    this._changes.set(prop, { oldValue: oldValue, newValue: value });
  };
  /**
   * Triggers update.
   */
  TinyElement.prototype._triggerUpdate = function () {
    var _this = this;
    if (this._updateTimer) {
      return;
    }
    this._updateTimer = setTimeout(function () {
      return _this.refresh();
    }, 0);
  };
  /**
   * Returns the passed element or based on selector.
   * @param el
   */
  TinyElement.prototype._element = function (el) {
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
  };
  /**
   * Life-cycle handler which is invoked whenever the element is connected to DOM.
   */
  TinyElement.prototype.connectedCallback = function () {
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
  };
  /**
   * Life-cycle handler invoked whenever the element is disconnected from DOM.
   */
  TinyElement.prototype.disconnectedCallback = function () {
    var _this = this;
    __spreadArray([], __read(this.metadata.handlers), false)
      .filter(function (_a) {
        var _b = __read(_a, 1),
          element = _b[0];
        return element === 'window';
      })
      .forEach(function (_a) {
        var _b = __read(_a, 2),
          handlers = _b[1];
        return handlers.forEach(function (_a) {
          var eventName = _a.eventName,
            handler = _a.handler;
          return _this.off(eventName, _this[handler].bind(_this), window);
        });
      });
    this.onDisconnected();
  };
  /**
   * Invoked after the element is connected to DOM.
   */
  TinyElement.prototype.onConnected = function () {};
  /**
   * Invoked after the element is disconnected to DOM.
   */
  TinyElement.prototype.onDisconnected = function () {};
  /**
   * Should be overwritten by sub-components to update the decorators/DOM.
   */
  TinyElement.prototype.onChanges = function (changes) {};
  /**
   * Create new element and returns it.
   * @param name The name of the element.
   * @param options The element options.
   * @returns {HTMLElement}
   */
  TinyElement.prototype.create = function (name, options) {
    var _this = this;
    var el = document.createElement(name),
      _a = options || {},
      id = _a.id,
      cls = _a.cls,
      props = _a.props,
      attrs = _a.attrs,
      styles = _a.styles,
      events = _a.events,
      parent = _a.parent,
      html = _a.html,
      children = _a.children;
    id && (el.id = id);
    Array.isArray(cls) && this.addClass(cls, el);
    typeof props === 'object' &&
      Object.entries(props).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        return (el[key] = value);
      });
    typeof attrs === 'object' &&
      Object.entries(attrs).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        return el.setAttribute(key, value);
      });
    typeof styles === 'object' && this.addStyle(styles, el);
    typeof events === 'object' &&
      Object.entries(events).forEach(function (_a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        return _this.on(key, value, el);
      });
    typeof html === 'string' && this.updateHtml(html, el);
    parent && this.addChildren([el], parent);
    Array.isArray(children) &&
      children.forEach(function (_a) {
        var name = _a.name,
          options = _a.options;
        return _this.create(
          name,
          __assign(__assign({}, options), { parent: el })
        );
      });
    return el;
  };
  /**
   * Queries and returns the first element that matches the passed CSS selector.
   * @param selector The CSS selector.
   * @param element The parent to query.
   */
  TinyElement.prototype.$ = function (selector, element) {
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
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
  };
  /**
   * Queries and returns all the elements that matches the passed CSS selector.
   * @param selector The CSS selector.
   * @param element The parent to query.
   */
  TinyElement.prototype.$$ = function (selector, element) {
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
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
  };
  /**
   * Adds single or multiple CSS classes.
   * @param classes The CSS classes.
   * @param element The element.
   */
  TinyElement.prototype.addClass = function (classes, element) {
    var _a;
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return this;
    }
    (_a = el.classList).add.apply(
      _a,
      __spreadArray(
        [],
        __read(Array.isArray(classes) ? classes : [classes]),
        false
      )
    );
    return this;
  };
  /**
   * Removes single or multiple CSS classes from the element.
   * @param classes Single or array of css class names.
   * @param element The element.
   */
  TinyElement.prototype.removeClass = function (classes, element) {
    var _a;
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return this;
    }
    (_a = el.classList).remove.apply(
      _a,
      __spreadArray(
        [],
        __read(Array.isArray(classes) ? classes : [classes]),
        false
      )
    );
    return this;
  };
  /**
   * Clears all CSS classes.
   * @param element The element.
   */
  TinyElement.prototype.clearClasses = function (element) {
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return this;
    }
    el.className = '';
    return this;
  };
  /**
   * Toggles source css classes with the target css classes.
   * @param sourceCls Source css class(es).
   * @param targetCls Target css class(es).
   * @param element The element.
   */
  TinyElement.prototype.toggleClass = function (sourceCls, targetCls, element) {
    if (element === void 0) {
      element = this;
    }
    this.removeClass(sourceCls, element).addClass(targetCls, element);
    return this;
  };
  /**
   * Returns the attribute value of the element.
   * @param name The attribute name.
   * @param element The element.
   */
  TinyElement.prototype.getAttr = function (name, element) {
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return this;
    }
    return el.getAttribute(name);
  };
  /**
   * Sets attributes for element from the passed object.
   * @param obj The attributes map.
   * @param element The element.
   */
  TinyElement.prototype.setAttr = function (obj, element) {
    var _this = this;
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return this;
    }
    Object.entries(obj).forEach(function (_a) {
      var _b = __read(_a, 2),
        key = _b[0],
        value = _b[1];
      return value === null
        ? _this.removeAttr(key)
        : el.setAttribute(key, value);
    });
    return this;
  };
  /**
   * Removes the passed attributes from the element.
   * @param attrs The attribute(s).
   * @param element The element.
   */
  TinyElement.prototype.removeAttr = function (attrs, element) {
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return this;
    }
    (Array.isArray(attrs) ? attrs : [attrs]).forEach(function (attr) {
      return el.removeAttribute(attr);
    });
    return this;
  };
  /**
   * Returns the value of the data attribute.
   * @param name The data attribute name.
   * @param el The element.
   */
  TinyElement.prototype.getData = function (name, el) {
    if (el === void 0) {
      el = this;
    }
    return this.getAttr('data-' + name, el);
  };
  /**
   * Sets object of data attributes.
   * @param obj The data dictionary.
   * @param el The element.
   */
  TinyElement.prototype.setData = function (obj, el) {
    if (el === void 0) {
      el = this;
    }
    this.setAttr(
      Object.entries(obj).reduce(function (acc, _a) {
        var _b = __read(_a, 2),
          key = _b[0],
          value = _b[1];
        acc['data-' + key] = value;
        return acc;
      }, {}),
      el
    );
    return this;
  };
  /**
   * Returns the passed style's value.
   * @param {String} name The style name.
   * @param {HTMLElement|String} element The element.
   */
  TinyElement.prototype.getStyle = function (name, element) {
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return;
    }
    return el.style[name];
  };
  /**
   * Add passed styles.
   * @param styles The styles object.
   * @param element The element.
   */
  TinyElement.prototype.addStyle = function (styles, element) {
    var _this = this;
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return this;
    }
    Object.entries(styles).forEach(function (_a) {
      var _b = __read(_a, 2),
        k = _b[0],
        v = _b[1];
      if (k.startsWith('--')) {
        el.style.setProperty(k, v);
      } else if (v === null) {
        _this.removeStyles(k, el);
      } else {
        el.style[k] = v;
      }
    });
    return this;
  };
  /**
   * Clears the passed styles.
   * @param element The element.
   */
  TinyElement.prototype.clearStyles = function (element) {
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return this;
    }
    delete el.style;
    return this;
  };
  /**
   * Removes the passed style(s).
   * @param styles Style(s).
   * @param element The element.
   */
  TinyElement.prototype.removeStyles = function (styles, element) {
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return this;
    }
    (Array.isArray(styles) ? styles : [styles]).forEach(function (style) {
      return (el.style[style] = null);
    });
    return this;
  };
  /**
   * Returns the child from the passed index.
   * @param index The index.
   * @param parent The parent element.
   */
  TinyElement.prototype.getChild = function (index, parent) {
    if (parent === void 0) {
      parent = this;
    }
    var el = this._element(parent);
    if (!el) {
      return this;
    }
    return el.children[index];
  };
  /**
   * Inserts the passed elements as children.
   * @param children The elements to be added.
   * @param parent The element.
   */
  TinyElement.prototype.addChildren = function (children, parent) {
    if (parent === void 0) {
      parent = this;
    }
    var el = this._element(parent);
    if (!el || !children) {
      return this;
    }
    __spreadArray(
      [],
      __read(children instanceof HTMLElement ? [children] : children),
      false
    ).forEach(function (child) {
      return el.appendChild(child);
    });
    this._applyNonWindowHandlers();
    return this;
  };
  /**
   * Removes all the children.
   * @param element The element.
   */
  TinyElement.prototype.removeChildren = function (element) {
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return this;
    }
    while (el.firstChild) {
      el.removeChild(el.lastChild);
    }
    return this;
  };
  /**
   * Updates html of the element.
   * @param html The html.
   * @param element The element.
   */
  TinyElement.prototype.updateHtml = function (html, element) {
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return this;
    }
    el.innerHTML = html;
    return this;
  };
  /**
   * Shows the element.
   * @param element The element.
   */
  TinyElement.prototype.show = function (element) {
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return this;
    }
    this.removeStyles('display', el);
    return this;
  };
  /**
   * Hides the element.
   * @param element The element.
   */
  TinyElement.prototype.hide = function (element) {
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return this;
    }
    this.addStyle({ display: 'none' }, el);
    return this;
  };
  /**
   * Subscribes to the event.
   * @param eventName Event name.
   * @param handler Event handler.
   * @param element The element.
   */
  TinyElement.prototype.on = function (eventName, handler, element) {
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return this;
    }
    var elEventHandlers = (el['__event_handlers__'] =
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
  };
  /**
   * Un-subscribes from the event.
   * @param eventName Event name.
   * @param handler Event handler.
   * @param element The element.
   */
  TinyElement.prototype.off = function (eventName, handler, element) {
    if (element === void 0) {
      element = this;
    }
    var el = this._element(element);
    if (!el) {
      return this;
    }
    el.removeEventListener(eventName, handler);
    var elEventHandlers = (el['__event_handlers__'] =
      el['__event_handlers__'] || new Map());
    if (!elEventHandlers.has(eventName)) {
      return this;
    }
    elEventHandlers.get(eventName).delete(handler);
    return this;
  };
  /**
   * Renders the element.
   */
  TinyElement.prototype.render = function () {
    if (!this._metadata.tpl) {
      return;
    }
    var template = document.createElement('template');
    template.innerHTML = this._metadata.tpl;
    var shadow = this._metadata.shadow;
    if (shadow) {
      this._shadowRoot = this.attachShadow({ mode: 'closed' });
      this._shadowRoot.appendChild(template.content.cloneNode(true));
    } else {
      this.appendChild(template.content.cloneNode(true));
    }
  };
  /**
   * Refresh the UI.
   */
  TinyElement.prototype.refresh = function () {
    this.onChanges(this.changes);
    this.changes.clear();
    this._updateTimer && window.clearTimeout(this._updateTimer);
    this._updateTimer = null;
  };
  return TinyElement;
})(HTMLElement);
exports.TinyElement = TinyElement;
//# sourceMappingURL=element.js.map
