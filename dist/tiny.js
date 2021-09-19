(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(14);

var iterableToArrayLimit = __webpack_require__(15);

var unsupportedIterableToArray = __webpack_require__(8);

var nonIterableRest = __webpack_require__(16);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(17);

var iterableToArray = __webpack_require__(18);

var unsupportedIterableToArray = __webpack_require__(8);

var nonIterableSpread = __webpack_require__(19);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(9);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(7);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(4)["default"];

var assertThisInitialized = __webpack_require__(3);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(6);

var setPrototypeOf = __webpack_require__(7);

var isNativeFunction = __webpack_require__(20);

var construct = __webpack_require__(21);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(9);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(7);

var isNativeReflectConstruct = __webpack_require__(22);

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "TinyElement", function() { return /* reexport */ element_TinyElement; });
__webpack_require__.d(__webpack_exports__, "element", function() { return /* reexport */ decorators_element; });
__webpack_require__.d(__webpack_exports__, "input", function() { return /* reexport */ input; });
__webpack_require__.d(__webpack_exports__, "query", function() { return /* reexport */ query; });
__webpack_require__.d(__webpack_exports__, "queryAll", function() { return /* reexport */ queryAll; });
__webpack_require__.d(__webpack_exports__, "handle", function() { return /* reexport */ handle; });
__webpack_require__.d(__webpack_exports__, "ELEMENT_META_KEY", function() { return /* reexport */ ELEMENT_META_KEY; });
__webpack_require__.d(__webpack_exports__, "AttributeValueDataType", function() { return /* reexport */ AttributeValueDataType; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(4);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(1);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(2);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(5);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(10);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(3);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(11);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(12);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(13);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(0);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/constants.js
var ELEMENT_META_KEY = '__ELEMENT_INFO__';
var AttributeValueDataType = {
  STRING: 'string',
  NUMBER: 'number',
  BOOLEAN: 'boolean'
};
// CONCATENATED MODULE: ./src/element.metadata.js



/**
 * Encapsulates all the metadata information of an element.
 */
var element_metadata_ElementMetadata = function ElementMetadata() {
  classCallCheck_default()(this, ElementMetadata);

  defineProperty_default()(this, "name", null);

  defineProperty_default()(this, "tpl", null);

  defineProperty_default()(this, "shadow", false);

  defineProperty_default()(this, "accessors", new Map());

  defineProperty_default()(this, "handlers", new Map());

  defineProperty_default()(this, "inputs", new Set());

  defineProperty_default()(this, "bindings", new Map());
};
// CONCATENATED MODULE: ./src/util.js
function isVoid(val) {
  return val === null || val === undefined;
} // https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-and-arrays-by-string-path

function readValue(o, s) {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties

  s = s.replace(/^\./, ''); // strip a leading dot

  var a = s.split('.');

  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];

    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }

  return o;
}
// CONCATENATED MODULE: ./src/element.js












function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Represents the base class for all Tiny elements.
 * Simplifies developing components using native browser technologies.
 */

var element_TinyElement = /*#__PURE__*/function (_HTMLElement) {
  inherits_default()(TinyElement, _HTMLElement);

  var _super = _createSuper(TinyElement);

  /**
   * @ctor
   */
  function TinyElement() {
    var _this;

    classCallCheck_default()(this, TinyElement);

    _this = _super.call(this);

    defineProperty_default()(assertThisInitialized_default()(_this), "_initialized", false);

    defineProperty_default()(assertThisInitialized_default()(_this), "_rendered", false);

    defineProperty_default()(assertThisInitialized_default()(_this), "_metadata", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "_changes", new Map());

    defineProperty_default()(assertThisInitialized_default()(_this), "_props", new Map());

    defineProperty_default()(assertThisInitialized_default()(_this), "_bindings", new Map());

    defineProperty_default()(assertThisInitialized_default()(_this), "_shadowRoot", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "_updateTimer", null);

    _this._metadata = _this.constructor[ELEMENT_META_KEY];
    return _this;
  }
  /**
   * Read accessors from metadata and re-define `getters` for applied props.
   */


  createClass_default()(TinyElement, [{
    key: "metadata",
    get:
    /**
     * True if the component is initialized.
     * @type {Boolean}
     */

    /**
     * True if the component is rendered.
     * @type {Boolean}
     */

    /**
     * The metadata of the component.
     * @type {ElementMetadata}
     */

    /**
     * The input properties changes dictionary.
     * @type {Map}
     */

    /**
     * The input props values.
     * @type {Map}
     */

    /**
     * The property binding values.
     * @type {Map}
     */

    /**
     * Shadow root.
     */

    /**
     * TODO: Come-up with a better strategy!
     */

    /**
     * Returns the element metadata.
     * @returns {ElementMetadata}
     */
    function get() {
      return this._metadata;
    }
    /**
     * @returns {Map}
     */

  }, {
    key: "changes",
    get: function get() {
      return this._changes;
    }
    /**
     * Returns true if there are changes.
     * @returns {Boolean}
     */

  }, {
    key: "hasChanges",
    get: function get() {
      return this.changes.size > 0;
    }
  }, {
    key: "_applyAccessors",
    value: function _applyAccessors() {
      var _this2 = this;

      toConsumableArray_default()(this.metadata.accessors).forEach(function (_ref) {
        var _ref2 = slicedToArray_default()(_ref, 2),
            prop = _ref2[0],
            _ref2$ = _ref2[1],
            selector = _ref2$.selector,
            all = _ref2$.all;

        Object.defineProperty(_this2, prop, {
          get: function get() {
            return all ? this.$$(selector) : this.$(selector);
          }
        });
      });
    }
    /**
     * Read inputs from metadata and re-define `getters` and `setters` for applied props.
     */

  }, {
    key: "_applyInputs",
    value: function _applyInputs() {
      var _this3 = this;

      toConsumableArray_default()(this.metadata.inputs).forEach(function (_ref3) {
        var property = _ref3.property,
            attribute = _ref3.attribute,
            datatype = _ref3.datatype;

        var attrValue = _this3.getAttr(property);

        if (datatype === AttributeValueDataType.NUMBER && attrValue) {
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
          value = _this3[property] !== undefined ? _this3[property] : attrValue;

          if (!isVoid(value) && value !== attrValue) {
            _this3.setAttr(defineProperty_default()({}, property, value));
          }
        } else {
          value = _this3[property];
        }

        _this3._pushChange(property, value);

        _this3._props.set(property, value);

        Object.defineProperty(_this3, property, {
          get: function get() {
            return this._props.get(property);
          },
          set: function set(value) {
            if (attribute) {
              if (value) {
                this.setAttr(defineProperty_default()({}, property, !isVoid(value) ? value.toString() : value));
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

  }, {
    key: "_setHandlersScope",
    value: function _setHandlersScope() {
      var _this4 = this;

      toConsumableArray_default()(this.metadata.handlers).forEach(function (_ref4) {
        var _ref5 = slicedToArray_default()(_ref4, 2),
            handlers = _ref5[1];

        toConsumableArray_default()(handlers).forEach(function (handler) {
          _this4[handler.handler] = _this4[handler.handler].bind(_this4);
        });
      });
    }
    /**
     * Read non-window event handlers from metadata and subscribe events.
     */

  }, {
    key: "_applyNonWindowHandlers",
    value: function _applyNonWindowHandlers() {
      var _this5 = this;

      toConsumableArray_default()(this.metadata.handlers).filter(function (_ref6) {
        var _ref7 = slicedToArray_default()(_ref6, 1),
            element = _ref7[0];

        return element !== 'window';
      }).forEach(function (_ref8) {
        var _ref9 = slicedToArray_default()(_ref8, 2),
            element = _ref9[0],
            handlers = _ref9[1];

        toConsumableArray_default()(handlers).forEach(function (_ref10) {
          var eventName = _ref10.eventName,
              all = _ref10.all,
              handler = _ref10.handler;
          var els;

          if (element === 'self') {
            els = [_this5];
          } else if (all) {
            els = _this5.$$(element);
          } else {
            els = [_this5.$(element)];
          }

          els.forEach(function (el) {
            _this5.on(eventName, _this5[handler], el);
          });
        });
      });
    }
    /**
     * Read window event handlers from metadata and subscribe events.
     */

  }, {
    key: "_applyWindowHandlers",
    value: function _applyWindowHandlers() {
      var _this6 = this;

      toConsumableArray_default()(this.metadata.handlers).filter(function (_ref11) {
        var _ref12 = slicedToArray_default()(_ref11, 1),
            element = _ref12[0];

        return element === 'window';
      }).forEach(function (_ref13) {
        var _ref14 = slicedToArray_default()(_ref13, 2),
            handlers = _ref14[1];

        handlers.forEach(function (_ref15) {
          var eventName = _ref15.eventName,
              handler = _ref15.handler;
          return _this6.on(eventName, _this6[handler], window);
        });
      });
    }
    /**
     * Push the changed property and it's value.
     * @param {string} prop The property name.
     * @param {*} value The property value.
     */

  }, {
    key: "_pushChange",
    value: function _pushChange(prop, value) {
      if (!this._changes.has(prop)) {
        this._changes.set(prop, {
          oldValue: this[prop],
          newValue: value
        });

        return;
      }

      var _this$_changes$get = this._changes.get(prop),
          oldValue = _this$_changes$get.oldValue,
          newValue = _this$_changes$get.newValue;
      /*if (oldValue === newValue) {
        this._changes.delete(prop);
        return;
      }*/


      this._changes.set(prop, {
        oldValue: oldValue,
        newValue: value
      });
    }
    /**
     * Triggers update.
     */

  }, {
    key: "_triggerUpdate",
    value: function _triggerUpdate() {
      var _this7 = this;

      if (this._updateTimer) {
        return;
      }

      this._updateTimer = setTimeout(function () {
        return _this7.refresh();
      }, 0);
    }
    /**
     * Returns the passed element or based on selector.
     * @param {*} el
     */

  }, {
    key: "_element",
    value: function _element(el) {
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

  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
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

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this8 = this;

      var _this$_metadata$handl = this._metadata.handlers,
          handlers = _this$_metadata$handl === void 0 ? {} : _this$_metadata$handl;
      Object.entries(handlers).filter(function (_ref16) {
        var _ref17 = slicedToArray_default()(_ref16, 1),
            element = _ref17[0];

        return element === 'window';
      }).forEach(function (_ref18) {
        var _ref19 = slicedToArray_default()(_ref18, 2),
            handlers = _ref19[1];

        handlers.forEach(function (_ref20) {
          var eventName = _ref20.eventName,
              handler = _ref20.handler;
          return _this8.off(eventName, _this8[handler].bind(_this8), window);
        });
      });
      this.onDisconnected();
    }
    /**
     * Create new element and returns it.
     * @param {String} name The name of the element.
     * @param {Object} options The element options.
     * @returns {HTMLElement}
     */

  }, {
    key: "create",
    value: function create(name, options) {
      var _this9 = this;

      var el = document.createElement(name),
          _ref21 = options || {},
          id = _ref21.id,
          cls = _ref21.cls,
          props = _ref21.props,
          attrs = _ref21.attrs,
          styles = _ref21.styles,
          events = _ref21.events,
          parent = _ref21.parent,
          html = _ref21.html,
          children = _ref21.children;

      id && (el.id = id);
      Array.isArray(cls) && this.addClass(cls, el);
      typeof_default()(props) === 'object' && Object.entries(props).forEach(function (_ref22) {
        var _ref23 = slicedToArray_default()(_ref22, 2),
            key = _ref23[0],
            value = _ref23[1];

        return el[key] = value;
      });
      typeof_default()(attrs) === 'object' && Object.entries(attrs).forEach(function (_ref24) {
        var _ref25 = slicedToArray_default()(_ref24, 2),
            key = _ref25[0],
            value = _ref25[1];

        return el.setAttribute(key, value);
      });
      typeof_default()(styles) === 'object' && this.addStyle(styles, el);
      typeof_default()(events) === 'object' && Object.entries(events).forEach(function (_ref26) {
        var _ref27 = slicedToArray_default()(_ref26, 2),
            key = _ref27[0],
            value = _ref27[1];

        return _this9.on(key, value, el);
      });
      typeof html === 'string' && this.updateHtml(html, el);
      parent && this.addChildren([el], parent);
      Array.isArray(children) && children.forEach(function (_ref28) {
        var name = _ref28.name,
            options = _ref28.options;
        return _this9.create(name, _objectSpread(_objectSpread({}, options), {}, {
          parent: el
        }));
      });
      return el;
    }
    /**
     * Queries and returns the element that matches the passed CSS selector.
     * @param {String} selector The CSS selector.
     * @param {HTMLElement|String} [el=this] The element.
     * @returns {HTMLElement}
     */

  }, {
    key: "$",
    value: function $(selector) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
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

  }, {
    key: "$$",
    value: function $$(selector) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
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

  }, {
    key: "addClass",
    value: function addClass(classes) {
      var _el$classList;

      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      el = this._element(el);

      if (!el) {
        return this;
      }

      (_el$classList = el.classList).add.apply(_el$classList, toConsumableArray_default()(Array.isArray(classes) ? classes : [classes]));

      return this;
    }
    /**
     * Removes single or multiple classes.
     * @param {String|Array<String>} classes
     * @param {HTMLElement|String} [el=this] The element.
     * @returns {TinyElement}
     */

  }, {
    key: "removeClass",
    value: function removeClass(classes) {
      var _el$classList2;

      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      el = this._element(el);

      if (!el) {
        return this;
      }

      (_el$classList2 = el.classList).remove.apply(_el$classList2, toConsumableArray_default()(Array.isArray(classes) ? classes : [classes]));

      return this;
    }
    /**
     * Clear all classes.
     * @param {HTMLElement|String} [el=this] The element.
     * @returns {TinyElement}
     */

  }, {
    key: "clearClasses",
    value: function clearClasses() {
      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
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

  }, {
    key: "toggleClass",
    value: function toggleClass(sourceCls, targetCls) {
      var el = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
      this.removeClass(sourceCls, el).addClass(targetCls, el);
      return this;
    }
    /**
     * Returns the attribute value of the element.
     * @param {String} name The attribute name.
     * @param {HTMLElement|String} [el=this] The element.
     * @returns {String}
     */

  }, {
    key: "getAttr",
    value: function getAttr(name) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
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

  }, {
    key: "setAttr",
    value: function setAttr(obj) {
      var _this10 = this;

      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      el = this._element(el);

      if (!el) {
        return this;
      }

      Object.entries(obj).forEach(function (_ref29) {
        var _ref30 = slicedToArray_default()(_ref29, 2),
            key = _ref30[0],
            value = _ref30[1];

        return value === null ? _this10.removeAttr(key) : el.setAttribute(key, value);
      });
      return this;
    }
    /**
     * Removes the passed attributes from the element.
     * @param {String|Array<String>} attrs The attribute(s).
     * @param {HTMLElement|String} [el=this] The element.
     * @returns {TinyElement}
     */

  }, {
    key: "removeAttr",
    value: function removeAttr(attrs) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      el = this._element(el);

      if (!el) {
        return this;
      }

      (Array.isArray(attrs) ? attrs : [attrs]).forEach(function (attr) {
        return el.removeAttribute(attr);
      });
    }
    /**
     * Returns the value of the data attribute.
     * @param {string} name The data attribute name.
     * @param {HTMLElement|String} [el=this] The element.
     * @returns {String}
     */

  }, {
    key: "getData",
    value: function getData(name) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      return this.getAttr("data-".concat(name), el);
    }
    /**
     * Sets object of data attributes.
     * @param {Object} obj
     * @param {HTMLElement|String} [el=this] The element.
     * @returns {TinyElement}
     */

  }, {
    key: "setData",
    value: function setData(obj) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      this.setAttr(Object.entries(obj).reduce(function (acc, _ref31) {
        var _ref32 = slicedToArray_default()(_ref31, 2),
            key = _ref32[0],
            value = _ref32[1];

        acc["data-".concat(key)] = value;
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

  }, {
    key: "getStyle",
    value: function getStyle(name) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
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

  }, {
    key: "addStyle",
    value: function addStyle(styles) {
      var _this11 = this;

      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      el = this._element(el);

      if (!el) {
        return this;
      }

      Object.entries(styles).forEach(function (_ref33) {
        var _ref34 = slicedToArray_default()(_ref33, 2),
            k = _ref34[0],
            v = _ref34[1];

        if (k.startsWith('--')) {
          el.style.setProperty(k, v);
        } else if (v === null) {
          _this11.removeStyles(k, el);
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

  }, {
    key: "clearStyles",
    value: function clearStyles() {
      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
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

  }, {
    key: "removeStyles",
    value: function removeStyles(styles) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      el = this._element(el);

      if (!el) {
        return this;
      }

      (Array.isArray(styles) ? styles : [styles]).forEach(function (style) {
        return el.style[style] = null;
      });
      return this;
    }
    /**
     * Returns the child from the passed index.
     * @param {Number} index The index.
     * @param {HTMLElement|String} parent The parent element.
     */

  }, {
    key: "getChild",
    value: function getChild(index) {
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
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

  }, {
    key: "addChildren",
    value: function addChildren(children) {
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      parent = this._element(parent);

      if (!parent || !children) {
        return this;
      }

      toConsumableArray_default()(children instanceof HTMLElement ? [children] : children).forEach(function (child) {
        return parent.appendChild(child);
      });

      this._applyNonWindowHandlers();

      return this;
    }
    /**
     * Removes all the children.
     * @param {HTMLElement|String} [el=this] The element.
     * @returns {TinyElement}
     */

  }, {
    key: "removeChildren",
    value: function removeChildren() {
      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
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

  }, {
    key: "updateHtml",
    value: function updateHtml(html) {
      var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
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

  }, {
    key: "show",
    value: function show() {
      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
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

  }, {
    key: "hide",
    value: function hide() {
      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
      el = this._element(el);

      if (!el) {
        return this;
      }

      this.addStyle({
        display: 'none'
      }, el);
      return this;
    }
    /**
     * Subscribes to the event.
     * @param {String} eventName Event name.
     * @param {Function} handler Event handler.
     * @param {HTMLElement|String} [el=this] The element.
     * @returns {TinyElement}
     */

  }, {
    key: "on",
    value: function on(eventName, handler) {
      var el = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
      el = this._element(el);

      if (!el) {
        return this;
      }

      var elEventHandlers = el['__event_handlers__'] = el['__event_handlers__'] || new Map();

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

  }, {
    key: "off",
    value: function off(eventName, handler) {
      var el = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
      el = this._element(el);

      if (!el) {
        return this;
      }

      el.removeEventListener(eventName, handler);
      var elEventHandlers = el['__event_handlers__'] = el['__event_handlers__'] || new Map();

      if (!elEventHandlers.has(eventName)) {
        return this;
      }

      elEventHandlers.get(eventName)["delete"](handler);
      return this;
    }
    /**
     * Renders the element.
     * @returns {TinyElement}
     */

  }, {
    key: "render",
    value: function render() {
      if (!this._metadata.tpl) {
        return;
      }

      var template = document.createElement('template');
      template.innerHTML = this._metadata.tpl;
      var shadow = this._metadata.shadow;

      if (shadow) {
        this._shadowRoot = this.attachShadow({
          mode: 'closed'
        });

        this._shadowRoot.appendChild(template.content.cloneNode(true));
      } else {
        this.appendChild(template.content.cloneNode(true));
      }
    }
    /**
     * Refresh the UI.
     */

  }, {
    key: "refresh",
    value: function refresh() {
      this.onChanges(this.changes);
      this.runDecorators();
      this.changes.clear();
      this._updateTimer && window.clearTimeout(this._updateTimer);
      this._updateTimer = null;
    }
    /**
     * Runs the decorators to update the DOM.
     */

  }, {
    key: "runDecorators",
    value: function runDecorators() {
      var _this12 = this;

      var bindings = this._metadata.bindings;

      toConsumableArray_default()(bindings).filter(function (_ref35) {
        var _ref36 = slicedToArray_default()(_ref35, 2),
            propertyBindings = _ref36[1];

        return toConsumableArray_default()(propertyBindings).filter(function (b) {
          return b.type === 'input';
        }).length === 1;
      }).forEach(function (_ref37) {
        var _ref38 = slicedToArray_default()(_ref37, 2),
            property = _ref38[0],
            propertyBindings = _ref38[1];

        if (_this12.changes.has(property)) {
          toConsumableArray_default()(propertyBindings).forEach(function (propertyBinding) {
            return propertyBinding.type !== 'input' && propertyBinding.apply(_this12, _this12[property]);
          });
        }
      });
    }
    /**
     * Invoked after the element is connected to DOM.
     */

  }, {
    key: "onConnected",
    value: function onConnected() {}
    /**
     * Invoked after the element is disconnected to DOM.
     */

  }, {
    key: "onDisconnected",
    value: function onDisconnected() {}
    /**
     * Should be overwritten by sub-components to update the decorators/DOM.
     */

  }, {
    key: "onChanges",
    value: function onChanges(changes) {}
  }]);

  return TinyElement;
}( /*#__PURE__*/wrapNativeSuper_default()(HTMLElement));
// CONCATENATED MODULE: ./src/decorators.js


/**
 * Decorator that helps to register a class as custom web element.
 * @param {String} name The element name.
 * @param {String} [tpl] The template.
 * @param {Boolean} [shadow=false] True if shadow dom is needed.
 */

function decorators_element(name, tpl) {
  var shadow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return function (target) {
    if (window.customElements.get(name)) {
      throw new Error("Already an element is registered with the name ".concat(name));
    }

    window.customElements.define(name, target);
    var metadata = getMeta(target);
    metadata.name = name;
    metadata.tpl = tpl;
    metadata.shadow = shadow;
    setMeta(target, metadata);
  };
}
/**
 * Decorator that marks the applied property as an input.
 * @param {Boolean} [attribute=false] True if the property has to be in sync with attribute.
 */

function input() {
  var attribute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var dataType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : AttributeValueDataType.STRING;
  return function (target, property) {
    var metadata = getMeta(target.constructor),
        inputs = metadata.inputs;

    if (inputs.has(property)) {
      throw new Error("Input decorator is already applied for the property ".concat(property));
    }

    inputs.add({
      property: property,
      attribute: attribute,
      dataType: dataType
    });
    setMeta(target.constructor, metadata);
  };
}
/**
 * Decorator that helps to query and return DOM element(s) on accessing the applied property.
 * @param {String} selector The CSS selector.
 */

function query(selector) {
  return function (target, property) {
    var metadata = getMeta(target.constructor),
        accessors = metadata.accessors;

    if (accessors.has(property)) {
      throw new Error("Already a CSS selector is assigned for the property ".concat(property));
    }

    accessors.set(property, {
      selector: selector
    });
    setMeta(target.constructor, metadata);
  };
}
/**
 * Decorator that helps to query and return DOM element(s) on accessing the applied property.
 * @param {String} selector The CSS selector.
 */

function queryAll(selector) {
  return function (target, property) {
    var metadata = getMeta(target.constructor),
        accessors = metadata.accessors;

    if (accessors.has(property)) {
      throw new Error("Already a CSS selector is assigned for the property ".concat(property));
    }

    accessors.set(property, {
      selector: selector,
      all: true
    });
    setMeta(target.constructor, metadata);
  };
}
/**
 * Decorator that helps to bind a DOM event with a function.
 * @param {String} eventName The event name.
 * @param {String} element The css selector. If the value is "self" then it represents the same element.
 */

function handle(eventName) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'self';
  var all = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return function (target, handler) {
    var metadata = getMeta(target.constructor),
        handlers = metadata.handlers;

    if (!handlers.has(element)) {
      handlers.set(element, new Set());
    }

    handlers.get(element).add({
      eventName: eventName,
      handler: handler,
      all: all
    });
    setMeta(target.constructor, metadata);
  };
}

function getMeta(target) {
  return target[ELEMENT_META_KEY] || new element_metadata_ElementMetadata();
}

function setMeta(target, meta) {
  target[ELEMENT_META_KEY] = meta;
}
// CONCATENATED MODULE: ./src/index.js




/***/ })
/******/ ]);
});