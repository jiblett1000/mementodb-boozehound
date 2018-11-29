var boozehound =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack://boozehound/(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _modules_usrPref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/usrPref */ \"./src/modules/usrPref.js\");\n/* harmony import */ var _modules_drinks_drink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/drinks/drink */ \"./src/modules/drinks/drink.js\");\n\n\nmodule.exports = {\n  main: function main() {\n    return message(bizName);\n  }\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack://boozehound/./src/app.js?");

/***/ }),

/***/ "./src/modules/drinks/drink.js":
/*!*************************************!*\
  !*** ./src/modules/drinks/drink.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Drink; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Drink =\n/*#__PURE__*/\nfunction () {\n  function Drink() {\n    _classCallCheck(this, Drink);\n\n    this.name = 'Name';\n    this.ingredients = 'Ingredients';\n    this.ingredientsNeat = 'Ingredients Neat';\n    this.prepMethods = 'Prep Method(s)';\n    this.drinkware = 'Drinkware';\n    this.served = 'Served';\n    this.garnishes = 'Garnish(es)';\n    this.cogs = 'COGS';\n    this.initialVol = 'Initial Volume (oz)';\n    this.initialAbv = 'Initial ABV';\n    this.dilution = 'Dilution %';\n    this.finVol = 'Final Volume (oz)';\n    this.finAbv = 'Final ABV';\n    this.glassFilled = '% of Glass Filled';\n  }\n\n  _createClass(Drink, [{\n    key: \"get\",\n    value: function get(field) {\n      return entry().field(this.field);\n    }\n  }, {\n    key: \"set\",\n    value: function (_set) {\n      function set(_x, _x2) {\n        return _set.apply(this, arguments);\n      }\n\n      set.toString = function () {\n        return _set.toString();\n      };\n\n      return set;\n    }(function (field, value) {\n      set(this.field, value);\n    })\n  }]);\n\n  return Drink;\n}();\n\n\n\n//# sourceURL=webpack://boozehound/./src/modules/drinks/drink.js?");

/***/ }),

/***/ "./src/modules/usrPref.js":
/*!********************************!*\
  !*** ./src/modules/usrPref.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Settings; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Settings = function Settings(bizName) {\n  _classCallCheck(this, Settings);\n\n  this.bizName = bizName || 'Boozehound';\n  this.volUnits = libByName(\"\".concat(this.bizName, \" Settings\")).findByKey('Volume Units').field('Value');\n  this.massUnits = libByName(\"\".concat(this.bizName, \" Settings\")).findByKey('Mass Units').field('Value');\n  this.salesTaxRate = libByName(\"\".concat(this.bizName, \" Settings\")).findByKey('Sales Tax Rate').field('Value');\n  this.decPlaceAcc = libByName(\"\".concat(this.bizName, \" Settings\")).findByKey('Decimal Place Accuracy').field('Value');\n};\n\n\n\n//# sourceURL=webpack://boozehound/./src/modules/usrPref.js?");

/***/ })

/******/ });