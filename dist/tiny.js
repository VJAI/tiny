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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
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

var arrayWithHoles = __webpack_require__(15);

var iterableToArrayLimit = __webpack_require__(16);

var unsupportedIterableToArray = __webpack_require__(8);

var nonIterableRest = __webpack_require__(17);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(18);

var iterableToArray = __webpack_require__(19);

var unsupportedIterableToArray = __webpack_require__(8);

var nonIterableSpread = __webpack_require__(20);

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
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24), __webpack_require__(25)))

/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(4)["default"];

var assertThisInitialized = __webpack_require__(3);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(6);

var setPrototypeOf = __webpack_require__(7);

var isNativeFunction = __webpack_require__(21);

var construct = __webpack_require__(22);

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
/* 15 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(9);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(7);

var isNativeReflectConstruct = __webpack_require__(23);

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
/* 23 */
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
/* 24 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "TinyElement", function() { return /* reexport */ element_TinyElement; });
__webpack_require__.d(__webpack_exports__, "element", function() { return /* reexport */ element_decorator_element; });
__webpack_require__.d(__webpack_exports__, "query", function() { return /* reexport */ query; });
__webpack_require__.d(__webpack_exports__, "queryAll", function() { return /* reexport */ queryAll; });
__webpack_require__.d(__webpack_exports__, "input", function() { return /* reexport */ input; });
__webpack_require__.d(__webpack_exports__, "handle", function() { return /* reexport */ handle; });

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
var createClass = __webpack_require__(11);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(3);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(12);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(13);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(6);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(14);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(0);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/reflect-metadata/Reflect.js
var reflect_metadata_Reflect = __webpack_require__(10);

// CONCATENATED MODULE: ./src/constants.js
var ELEMENT_META_KEY = 'ELEMENT_INFO';
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

    _this._metadata = Reflect.getMetadata(ELEMENT_META_KEY, _this.constructor);
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
     * Adds single or multiple classes.
     * @param {String|Array<String>} classes The css classes.
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
// CONCATENATED MODULE: ./src/decorators/meta.service.js



function getMeta(target) {
  return Reflect.getMetadata(ELEMENT_META_KEY, target) || new element_metadata_ElementMetadata();
}
function setMeta(target, meta) {
  Reflect.defineMetadata(ELEMENT_META_KEY, meta, target);
}
function addBinding(target, property, binding) {
  var meta = getMeta(target.constructor),
      _metadata = metadata,
      bindings = _metadata.bindings;
  !bindings.has(property) && bindings.set(property, new Set());
  bindings.get(property).add(binding);
  setMeta(meta);
}
// CONCATENATED MODULE: ./src/decorators/element.decorator.js

/**
 * Decorator that helps to register a class as custom web element.
 * @param {String} name The element name.
 * @param {String} [tpl] The template.
 * @param {Boolean} [shadow=false] True if shadow dom is needed.
 */

function element_decorator_element(name, tpl) {
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
// CONCATENATED MODULE: ./src/decorators/query.decorator.js

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
// CONCATENATED MODULE: ./src/decorators/input.decorator.js


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
// CONCATENATED MODULE: ./src/decorators/handle.decorator.js

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
// CONCATENATED MODULE: ./src/decorators/index.js




// CONCATENATED MODULE: ./src/index.js



/***/ })
/******/ ]);
});