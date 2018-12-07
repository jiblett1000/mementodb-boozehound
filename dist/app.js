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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: getInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_getInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getInstance */ \"./src/modules/getInstance.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getInstance\", function() { return _modules_getInstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n // MementoDB script called here;\n\n\n\n//# sourceURL=webpack://boozehound/./src/app.js?");

/***/ }),

/***/ "./src/modules/getInstance.js":
/*!************************************!*\
  !*** ./src/modules/getInstance.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libraries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libraries */ \"./src/modules/libraries.js\");\n\n\nfunction getInstance() {\n  // Match the current lib to generic library;\n  var libMatch = _libraries__WEBPACK_IMPORTED_MODULE_0__[\"instanceLibs\"].find(function (instance) {\n    return lib().title.includes(instance);\n  }); // Return the current library name minus the generic library to get the instance;\n\n  return lib().title.split(\" \".concat(libMatch))[0];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getInstance);\n\n//# sourceURL=webpack://boozehound/./src/modules/getInstance.js?");

/***/ }),

/***/ "./src/modules/libraries.js":
/*!**********************************!*\
  !*** ./src/modules/libraries.js ***!
  \**********************************/
/*! exports provided: instanceLibs, sharedLibs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"instanceLibs\", function() { return instanceLibs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sharedLibs\", function() { return sharedLibs; });\nvar instanceLibs = ['Settings', 'Drinks', 'Inventory', 'Things', 'POS Items', 'Orders', 'Drinkware'];\nvar sharedLibs = ['Boozehound Things', 'Boozehound Distributors', 'Boozehound Places', 'Boozehound People', 'Boozehound Drink Serving Methods', 'Boozehound Drink Prep Methods', 'Boozehound Thing Categories'];\n\n\n//# sourceURL=webpack://boozehound/./src/modules/libraries.js?");

/***/ })

/******/ });