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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_drinks_drinkVol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/drinks/drinkVol */ \"./src/modules/drinks/drinkVol.js\");\n// import usrPref from './usrPref';\n // Shorthand app variables;\n\nvar e = entry();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/drinks/drink.js":
/*!*************************************!*\
  !*** ./src/modules/drinks/drink.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar drink = {\n  name: 'Name',\n  ingredients: 'Ingredients',\n  ingredientsNeat: 'Ingredients Neat',\n  prepMethods: 'Prep Method(s)',\n  drinkware: 'Drinkware',\n  served: 'Served',\n  garnishes: 'Garnish(es)',\n  cogs: 'COGS',\n  initialVol: 'Initial Volume (oz)',\n  initialAbv: 'Initial ABV',\n  dilution: 'Dilution %',\n  finVol: 'Final Volume (oz)',\n  finAbv: 'Final ABV',\n  glassFilled: '% of Glass Filled'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (drink);\n\n//# sourceURL=webpack:///./src/modules/drinks/drink.js?");

/***/ }),

/***/ "./src/modules/drinks/drinkVol.js":
/*!****************************************!*\
  !*** ./src/modules/drinks/drinkVol.js ***!
  \****************************************/
/*! exports provided: drinkVol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drinkVol\", function() { return drinkVol; });\n/* harmony import */ var _usrPref__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../usrPref */ \"./src/usrPref.js\");\n/* harmony import */ var _drink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drink */ \"./src/modules/drinks/drink.js\");\n\n\nfunction drinkVol() {\n  var ingredients = e.get(_drink__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ingredients);\n  var unitRatio = {\n    oz: 1,\n    Dash: 0.0311,\n    Barspoon: 0.167,\n    Drop: 0.0016907,\n    Piece: 0\n  };\n  var vol = ingredients.reduce(function (sum, ingredient) {\n    var unit = ingredient.attr('Unit');\n    var amt = ingredient.attr('Amount');\n    return sum + unitRatio[unit] * amt;\n  }, 0);\n  return vol.toFixed(_usrPref__WEBPACK_IMPORTED_MODULE_0__[\"default\"].decPlaceAcc());\n} // Calculate initial volume;\n\nfunction drinkInitialVol() {\n  e.set(_drink__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialVol, drinkVol());\n} // Calculate final volume;\n\n\nfunction drinkFinVol() {\n  var initialVol = e.get(_drink__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialVol);\n  var dilution = e.get(drinkDilution) / 100;\n  e.set(_drink__WEBPACK_IMPORTED_MODULE_1__[\"default\"].finalVol, (initialVol * dilution + initialVol).toFixed(_usrPref__WEBPACK_IMPORTED_MODULE_0__[\"default\"].decPlaceAcc()));\n}\n\n//# sourceURL=webpack:///./src/modules/drinks/drinkVol.js?");

/***/ }),

/***/ "./src/usrPref.js":
/*!************************!*\
  !*** ./src/usrPref.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _this = undefined;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  bizName: function bizName() {\n    return libByName('Boozehound Settings').findByKey('Business Name').field('Value');\n  },\n  volUnits: function volUnits() {\n    return libByName(\"\".concat(_this.bizName, \" Settings\")).findByKey('Volume Units').field('Value');\n  },\n  massUnits: function massUnits() {\n    return libByName(\"\".concat(_this.bizName, \" Settings\")).findByKey('Mass Units').field('Value');\n  },\n  salesTaxRate: function salesTaxRate() {\n    return libByName(\"\".concat(_this.bizName, \" Settings\")).findByKey('Sales Tax Rate').field('Value');\n  },\n  decPlaceAcc: function decPlaceAcc() {\n    return libByName(\"\".concat(_this.bizName, \" Settings\")).findByKey('Decimal Place Accuracy').field('Value');\n  }\n});\n\n//# sourceURL=webpack:///./src/usrPref.js?");

/***/ })

/******/ });