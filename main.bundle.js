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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  background: radial-gradient(circle, white 0%, #fc466b 100%);\n  display: grid;\n  height: 100vh;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr .7fr 2fr;\n  grid-template-areas: \"h1 annual-cost\" \"booking booking\" \"card-grid card-grid\";\n  border-radius: 3px; }\n\nh1, .annual-cost {\n  background-color: #00ff91;\n  grid-area: h1;\n  padding-left: 1.8vw;\n  padding-top: 2.5vh;\n  border-radius: 8px; }\n\n.annual-cost {\n  background-color: blue;\n  grid-area: annual-cost;\n  color: blanchedalmond; }\n\n.booking {\n  background-color: #99cd32;\n  grid-area: booking;\n  padding: 2vh;\n  border-radius: 20px; }\n  .booking .date {\n    padding-left: 2vw; }\n    .booking .date .book-trip {\n      height: 5vh;\n      border-radius: 2px; }\n\n.card-grid {\n  background-color: turquoise;\n  grid-area: card-grid;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 10px;\n  padding: 1rem;\n  margin-top: 2vh;\n  border-radius: 20px; }\n\n.card {\n  background-color: blanchedalmond;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n  .card img {\n    height: 5em; }\n\n.user-sign-in-box {\n  align-items: center;\n  justify-content: space-between;\n  z-index: 1;\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: 20vh;\n  height: 30vw;\n  background: #d215dc;\n  margin: auto;\n  top: 25%;\n  border: 4px solid rgba(128, 4, 4, 0.605);\n  display: flex;\n  flex-direction: column;\n  padding: 5%;\n  border-radius: 75px; }\n\n.hidden {\n  display: none !important; }\n\n#overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  cursor: crosshair; }\n", "",{"version":3,"sources":["webpack://./src/css/base.scss","webpack://./src/css/_SASSVariables.scss"],"names":[],"mappings":"AACA;EACI,2DCF2F;EDG3F,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,gCAAgC;EAChC,6EAA6E;EAC7E,kBAAkB,EAAA;;AAGtB;EACI,yBAAkC;EAClC,aAAa;EACb,mBAAmB;EACnB,kBAAkB;ECZlB,kBDamB,EAAA;;AAGvB;EAEI,sBAAsB;EACtB,sBAAsB;EACtB,qBCtBwB,EAAA;;ADyB5B;EACI,yBAAmC;EACnC,kBAAkB;EAClB,YAAY;EC1BZ,mBD2BoB,EAAA;EAJxB;IAOQ,iBAAiB,EAAA;IAPzB;MASY,WAAW;MChCnB,kBDiC2B,EAAA;;AAK/B;EACI,2BAA2B;EAC3B,oBAAoB;EACpB,aAAa;EACb,kCAAkC;EAClC,cAAc;EACd,aAAa;EACb,eAAe;EC7Cf,mBD8CoB,EAAA;;AAGxB;EACI,gCCpDwB;EDqDxB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB,EAAA;EALvB;IAOQ,WAAW,EAAA;;AAInB;EACI,mBAAmB;EACnB,8BAA8B;EAC9B,UAAU;EACV,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,mBAA6B;EAC7B,YAAY;EACZ,QAAQ;EACR,wCAAwC;EACxC,aAAa;EACb,sBAAsB;EACtB,WAAW;EC3EX,mBD4EoB,EAAA;;AAGxB;EACI,wBAAwB,EAAA;;AAG5B;EACI,eAAe;EACf,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;EACpC,iBAAiB,EAAA","sourcesContent":["@import 'SASSVariables';\nbody {\n    background: $primary-background;\n    display: grid;\n    height: 100vh;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr .7fr 2fr;\n    grid-template-areas: \"h1 annual-cost\" \"booking booking\" \"card-grid card-grid\";\n    border-radius: 3px;\n}\n\nh1 {\n    background-color: rgb(0, 255, 145);\n    grid-area: h1;\n    padding-left: 1.8vw;\n    padding-top: 2.5vh;\n    @include border(8px)\n}\n\n.annual-cost {\n    @extend h1;\n    background-color: blue;\n    grid-area: annual-cost;\n    color: $creamyColor;\n}\n\n.booking {\n    background-color: hsl(80, 61%, 50%);\n    grid-area: booking;\n    padding: 2vh;\n    @include border(20px);\n    //is this too many layers? the elements seem very small so I thought it might be better for readability\n    .date {\n        padding-left: 2vw;\n        .book-trip {\n            height: 5vh;\n            @include border(2px);\n        }\n    }\n}\n\n.card-grid {\n    background-color: turquoise;\n    grid-area: card-grid;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-gap: 10px;\n    padding: 1rem;\n    margin-top: 2vh;\n    @include border(20px)\n}\n\n.card {\n    background-color: $creamyColor;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    img {\n        height: 5em;\n    }\n}\n\n.user-sign-in-box {\n    align-items: center;\n    justify-content: space-between;\n    z-index: 1;\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 20vh;\n    height: 30vw;\n    background: rgb(210, 21, 220);\n    margin: auto;\n    top: 25%;\n    border: 4px solid rgba(128, 4, 4, 0.605);\n    display: flex;\n    flex-direction: column;\n    padding: 5%;\n    @include border(75px)\n}\n\n.hidden {\n    display: none !important;\n}\n\n#overlay {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    cursor: crosshair;\n}","$primary-background: radial-gradient(circle, rgb(255, 255, 255) 0%, rgba(252, 70, 107, 1) 100%);\n$creamyColor: blanchedalmond;\n@mixin border($corner-radius) {\n    border-radius: $corner-radius;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/APICalls.js":
/*!*************************!*\
  !*** ./src/APICalls.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOMUpdates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMUpdates.js */ "./src/DOMUpdates.js");
 
 let apiCalls = {
     loadData(type) {
         return fetch(`http://localhost:3001/api/v1/${type}`)
             .then(response => response.json())
             .catch(_DOMUpdates_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayErrorMessage())
     },

     postData(objToPost) {
         return fetch(`http://localhost:3001/api/v1/trips`, {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(objToPost)
             })
             .then(response => response.json())
             .catch(_DOMUpdates_js__WEBPACK_IMPORTED_MODULE_0__["default"].displayErrorMessage())
     }

 }

 /* harmony default export */ __webpack_exports__["default"] = (apiCalls);

/***/ }),

/***/ "./src/DOMUpdates.js":
/*!***************************!*\
  !*** ./src/DOMUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const cardGrid = document.querySelector('.card-grid')

const domUpdates = {

    clearCardGrid() {
        cardGrid.innerHTML = ''
    },
    displayTripCards(userObj) {
        this.clearCardGrid()
        userObj.userTrips.forEach(trip => {

            const destinationObj = userObj.userDestinations.find(destination =>
                destination.id === trip.destinationID
            )

            cardGrid.innerHTML += `<article class='card'>
        <p class='destination-name'>${destinationObj.destination}</p>
        <img id='pic-destination' src=${destinationObj.image} alt=${destinationObj.alt}>
        <div class='trip-info'>
            <p class='date'>${trip.date}</p>
            <p class='status'>${trip.status}</p>
        </div>
    </article>`
        })
    },
    makeDestinationDropDown(destinationsData, destinationDropDownData) {
        destinationsData.forEach(destination => destinationDropDownData.insertAdjacentHTML('afterbegin', `<option id = '${destination.destinationID} class='destination-select value = "${destination.destination}">${destination.destination}</option>`))
    },
    displayErrorMessage() {
        cardGrid.innerHTML = '<p>These are not the Cards you are Looking For</p>'
    },
    emptyFieldsError() {
        document.querySelector('.empty-fields-error-message').innerText = `You need to enter all Fields!`
    },
    displayTripCost(tripCostData) {
        const tripCost = document.querySelector('.trip-cost')
        tripCost.innerHTML = `This trip costs ${tripCostData}$`
    },
    displayAnnualCost(costData, nameData) {
        const annualCost = document.querySelector('.annual-cost')
        const formattedCost = this.numberWithCommas(costData)
        annualCost.innerHTML = `You have spent $${formattedCost} this year ${nameData}`
    },
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

}
/* harmony default export */ __webpack_exports__["default"] = (domUpdates);

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/images/turing-logo.png":
/*!************************************!*\
  !*** ./src/images/turing-logo.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/turing-logo.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _APICalls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./APICalls.js */ "./src/APICalls.js");
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/turing-logo.png */ "./src/images/turing-logo.png");
/* harmony import */ var _trip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip.js */ "./src/trip.js");
/* harmony import */ var _trip_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_trip_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.js */ "./src/user.js");
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_user_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _DOMUpdates_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DOMUpdates.js */ "./src/DOMUpdates.js");







const signInButton = document.querySelector('.sign-in-button')
const destinationDropDown = document.querySelector('#destination-select-drop-down')
const bookButton = document.querySelector('.book-trip')

signInButton.addEventListener('click', attemptSignIn)
bookButton.addEventListener('click', bookTrip)

let allTripsData, currentUser, allDestinations

function attemptSignIn() {
    const passwordAttempt = document.querySelector('#password-input').value
    const userNameAttempt = document.querySelector('#username-input').value
    const nameCutOff = 8
    const userIDCutOff = userNameAttempt.slice(8)
    const userName = userNameAttempt.slice(0, nameCutOff)
    const userID = parseInt(userIDCutOff)
    if (userName === 'traveler' && passwordAttempt === 'travel2020') {
        getIntialData(userID)
    } else {
        signInButton.insertAdjacentHTML('afterbegin', `<p>Wrong Password Gets You Less Space!!</p>`)
    }
}

function getIntialData(userID) {
    const fetchedTravelers = _APICalls_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadData(`travelers/${userID}`)
    const fetchedTrips = _APICalls_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadData('trips')
    const fetchedDestinations = _APICalls_js__WEBPACK_IMPORTED_MODULE_1__["default"].loadData('destinations')
    Promise.all([fetchedTravelers, fetchedTrips, fetchedDestinations])
        .then(values => {
            hideHTMLElement('user-sign-in-box')
            hideHTMLElement('overlay')
            makeDestinations(values[2])
            makeTrips(values[1])
            makeUser(values[0])
        }).catch(_DOMUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].displayErrorMessage())
}

function makeUser(userObj) {
    currentUser = new _user_js__WEBPACK_IMPORTED_MODULE_4___default.a(userObj, allTripsData)
    const cost = currentUser.calculateSumCostOfYear(allTripsData, allDestinations)
    const name = currentUser.name
    _DOMUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].displayAnnualCost(cost, name)
    currentUser.getDestinations(allDestinations)

    _DOMUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].displayTripCards(currentUser)
}

function makeDestinations(desinationObj) {
    allDestinations = desinationObj.destinations

    _DOMUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].makeDestinationDropDown(allDestinations, destinationDropDown)
}

function makeTrips(fetchedData) {
    allTripsData = fetchedData.trips

}

function bookTrip() {
    const dateInput = document.querySelector('#date-input')
    const durationInput = document.querySelector('#duration-input')
    const travelersInput = document.querySelector('#travelers-input')

    if (!destinationDropDown.value || !travelersInput.value || !dateInput.value || !durationInput.value) {
        _DOMUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].emptyFieldsError()
    } else {
        const newUserTripObj = new _trip_js__WEBPACK_IMPORTED_MODULE_3___default.a({
            id: makeTripID(),
            userID: currentUser.id,
            destinationID: getDestinationID(destinationDropDown.value),
            travelers: travelersInput.value,
            date: formatDate(dateInput.value),
            duration: durationInput.value,
            status: 'pending',
            suggestedActivities: []
        })

        const tripCost = newUserTripObj.calculateTripCost(allDestinations)

        _DOMUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].displayTripCost(tripCost)

        _APICalls_js__WEBPACK_IMPORTED_MODULE_1__["default"].postData(newUserTripObj)
            .then(_DOMUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].clearCardGrid())
            .then(getIntialData(currentUser.id))
    }
}

function getDestinationID(nameOfPlace) {
    const trip = allDestinations.find(destination => destination.destination === nameOfPlace)
    return trip.id
}

function makeTripID() {
    return allTripsData.sort((tripA, tripB) => tripB.id - tripA.id)[0].id + 1
}

function formatDate(date) {
    const dateInfo = date.split('-');
    return dateInfo.join('/');
}

function hideHTMLElement(element) {

    const elementToHide = document.getElementById(element);

    elementToHide.classList.add('hidden')

}

/***/ }),

/***/ "./src/trip.js":
/*!*********************!*\
  !*** ./src/trip.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Trip {
    constructor(tripInfo) {
        this.id = tripInfo.id
        this.userID = tripInfo.userID
        this.destinationID = tripInfo.destinationID
        this.travelers = tripInfo.travelers
        this.date = tripInfo.date
        this.duration = tripInfo.duration
        this.status = tripInfo.status
        this.suggestedActivities = tripInfo.suggestedActivities
    }
    calculateTripCost(destinationData) {

        const destinationObj = destinationData.find(destination => destination.id === this.destinationID)

        const flightCost = (destinationObj.estimatedFlightCostPerPerson * 2) * this.travelers

        const hotelCost = this.duration * destinationObj.estimatedLodgingCostPerDay


        return Math.round((hotelCost + flightCost) * 1.1)
    }
}
module.exports = Trip

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class User {
    constructor(userData, tripsData, destinatonData) {
        this.name = userData.name
        this.type = userData.travelerType
        this.id = userData.id
        this.userTrips = tripsData.filter(trip => trip.userID === this.id)
        this.userDestinations
    }

    calculateSumCostOfYear(tripLog, destinationLog) {
        let rawCost = tripLog.reduce((acc, trip) => {
            if (trip.userID === this.id && this.checkIfTripHappenedThisYear(trip.date)) {
                let destinationObj = destinationLog.find(destination => destination.id === trip.destinationID)

                acc += (trip.duration * destinationObj.estimatedLodgingCostPerDay) + this.calculateFlightCost(destinationObj, trip)

                return acc
            }
            return acc
        }, 0)
        return parseInt((rawCost * 1.1).toFixed())
    }

    checkIfTripHappenedThisYear(tripDate) {
        const todayUTC = new Date().getFullYear()
        const tripUTC = new Date(tripDate).getFullYear()
        return (tripUTC === (todayUTC - 1))
    }

    calculateFlightCost(destination, trip) {
        return (destination.estimatedFlightCostPerPerson * 2) * trip.travelers
    }

    getDestinations(destinationData) {
        this.userDestinations = destinationData.reduce((acc, destination) => {
            this.userTrips.forEach(trip => {
                if (trip.destinationID === destination.id) {
                    acc.push(destination)
                    return acc
                }
                return acc
            })
            return acc
        }, [])
    }
}
module.exports = User

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FQSUNhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ET01VcGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy90dXJpbmctbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90cmlwLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFF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c0RBQVU7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxDOzs7Ozs7Ozs7OztBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHFCOzs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHFCIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgd2hpdGUgMCUsICNmYzQ2NmIgMTAwJSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIC43ZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImgxIGFubnVhbC1jb3N0XFxcIiBcXFwiYm9va2luZyBib29raW5nXFxcIiBcXFwiY2FyZC1ncmlkIGNhcmQtZ3JpZFxcXCI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG5cXG5oMSwgLmFubnVhbC1jb3N0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGZmOTE7XFxuICBncmlkLWFyZWE6IGgxO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjh2dztcXG4gIHBhZGRpbmctdG9wOiAyLjV2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDsgfVxcblxcbi5hbm51YWwtY29zdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgZ3JpZC1hcmVhOiBhbm51YWwtY29zdDtcXG4gIGNvbG9yOiBibGFuY2hlZGFsbW9uZDsgfVxcblxcbi5ib29raW5nIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OWNkMzI7XFxuICBncmlkLWFyZWE6IGJvb2tpbmc7XFxuICBwYWRkaW5nOiAydmg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4OyB9XFxuICAuYm9va2luZyAuZGF0ZSB7XFxuICAgIHBhZGRpbmctbGVmdDogMnZ3OyB9XFxuICAgIC5ib29raW5nIC5kYXRlIC5ib29rLXRyaXAge1xcbiAgICAgIGhlaWdodDogNXZoO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxcblxcbi5jYXJkLWdyaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHVycXVvaXNlO1xcbiAgZ3JpZC1hcmVhOiBjYXJkLWdyaWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IH1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuY2FyZCBpbWcge1xcbiAgICBoZWlnaHQ6IDVlbTsgfVxcblxcbi51c2VyLXNpZ24taW4tYm94IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB6LWluZGV4OiAxO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDIwdmg7XFxuICBoZWlnaHQ6IDMwdnc7XFxuICBiYWNrZ3JvdW5kOiAjZDIxNWRjO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdG9wOiAyNSU7XFxuICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDEyOCwgNCwgNCwgMC42MDUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDc1cHg7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbiNvdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fU0FTU1ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0ksMkRDRjJGO0VERzNGLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyw2RUFBNkU7RUFDN0Usa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0kseUJBQWtDO0VBQ2xDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VDWmxCLGtCRGFtQixFQUFBOztBQUd2QjtFQUVJLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIscUJDdEJ3QixFQUFBOztBRHlCNUI7RUFDSSx5QkFBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLFlBQVk7RUMxQlosbUJEMkJvQixFQUFBO0VBSnhCO0lBT1EsaUJBQWlCLEVBQUE7SUFQekI7TUFTWSxXQUFXO01DaENuQixrQkRpQzJCLEVBQUE7O0FBSy9CO0VBQ0ksMkJBQTJCO0VBQzNCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQzdDZixtQkQ4Q29CLEVBQUE7O0FBR3hCO0VBQ0ksZ0NDcER3QjtFRHFEeEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7RUFMdkI7SUFPUSxXQUFXLEVBQUE7O0FBSW5CO0VBQ0ksbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBNkI7RUFDN0IsWUFBWTtFQUNaLFFBQVE7RUFDUix3Q0FBd0M7RUFDeEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VDM0VYLG1CRDRFb0IsRUFBQTs7QUFHeEI7RUFDSSx3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0NBQW9DO0VBQ3BDLGlCQUFpQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ1NBU1NWYXJpYWJsZXMnO1xcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1iYWNrZ3JvdW5kO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIC43ZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaDEgYW5udWFsLWNvc3RcXFwiIFxcXCJib29raW5nIGJvb2tpbmdcXFwiIFxcXCJjYXJkLWdyaWQgY2FyZC1ncmlkXFxcIjtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5oMSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAyNTUsIDE0NSk7XFxuICAgIGdyaWQtYXJlYTogaDE7XFxuICAgIHBhZGRpbmctbGVmdDogMS44dnc7XFxuICAgIHBhZGRpbmctdG9wOiAyLjV2aDtcXG4gICAgQGluY2x1ZGUgYm9yZGVyKDhweClcXG59XFxuXFxuLmFubnVhbC1jb3N0IHtcXG4gICAgQGV4dGVuZCBoMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgZ3JpZC1hcmVhOiBhbm51YWwtY29zdDtcXG4gICAgY29sb3I6ICRjcmVhbXlDb2xvcjtcXG59XFxuXFxuLmJvb2tpbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woODAsIDYxJSwgNTAlKTtcXG4gICAgZ3JpZC1hcmVhOiBib29raW5nO1xcbiAgICBwYWRkaW5nOiAydmg7XFxuICAgIEBpbmNsdWRlIGJvcmRlcigyMHB4KTtcXG4gICAgLy9pcyB0aGlzIHRvbyBtYW55IGxheWVycz8gdGhlIGVsZW1lbnRzIHNlZW0gdmVyeSBzbWFsbCBzbyBJIHRob3VnaHQgaXQgbWlnaHQgYmUgYmV0dGVyIGZvciByZWFkYWJpbGl0eVxcbiAgICAuZGF0ZSB7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJ2dztcXG4gICAgICAgIC5ib29rLXRyaXAge1xcbiAgICAgICAgICAgIGhlaWdodDogNXZoO1xcbiAgICAgICAgICAgIEBpbmNsdWRlIGJvcmRlcigycHgpO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi5jYXJkLWdyaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0dXJxdW9pc2U7XFxuICAgIGdyaWQtYXJlYTogY2FyZC1ncmlkO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMnZoO1xcbiAgICBAaW5jbHVkZSBib3JkZXIoMjBweClcXG59XFxuXFxuLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY3JlYW15Q29sb3I7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBpbWcge1xcbiAgICAgICAgaGVpZ2h0OiA1ZW07XFxuICAgIH1cXG59XFxuXFxuLnVzZXItc2lnbi1pbi1ib3gge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiAyMHZoO1xcbiAgICBoZWlnaHQ6IDMwdnc7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMTAsIDIxLCAyMjApO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHRvcDogMjUlO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDEyOCwgNCwgNCwgMC42MDUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgQGluY2x1ZGUgYm9yZGVyKDc1cHgpXFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVwiLFwiJHByaW1hcnktYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgcmdiKDI1NSwgMjU1LCAyNTUpIDAlLCByZ2JhKDI1MiwgNzAsIDEwNywgMSkgMTAwJSk7XFxuJGNyZWFteUNvbG9yOiBibGFuY2hlZGFsbW9uZDtcXG5AbWl4aW4gYm9yZGVyKCRjb3JuZXItcmFkaXVzKSB7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRjb3JuZXItcmFkaXVzO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiIGltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vRE9NVXBkYXRlcy5qcydcbiBsZXQgYXBpQ2FsbHMgPSB7XG4gICAgIGxvYWREYXRhKHR5cGUpIHtcbiAgICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS8ke3R5cGV9YClcbiAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgLmNhdGNoKGRvbVVwZGF0ZXMuZGlzcGxheUVycm9yTWVzc2FnZSgpKVxuICAgICB9LFxuXG4gICAgIHBvc3REYXRhKG9ialRvUG9zdCkge1xuICAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzYCwge1xuICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShvYmpUb1Bvc3QpXG4gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgLmNhdGNoKGRvbVVwZGF0ZXMuZGlzcGxheUVycm9yTWVzc2FnZSgpKVxuICAgICB9XG5cbiB9XG5cbiBleHBvcnQgZGVmYXVsdCBhcGlDYWxscyIsImNvbnN0IGNhcmRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtZ3JpZCcpXG5cbmNvbnN0IGRvbVVwZGF0ZXMgPSB7XG5cbiAgICBjbGVhckNhcmRHcmlkKCkge1xuICAgICAgICBjYXJkR3JpZC5pbm5lckhUTUwgPSAnJ1xuICAgIH0sXG4gICAgZGlzcGxheVRyaXBDYXJkcyh1c2VyT2JqKSB7XG4gICAgICAgIHRoaXMuY2xlYXJDYXJkR3JpZCgpXG4gICAgICAgIHVzZXJPYmoudXNlclRyaXBzLmZvckVhY2godHJpcCA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uT2JqID0gdXNlck9iai51c2VyRGVzdGluYXRpb25zLmZpbmQoZGVzdGluYXRpb24gPT5cbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGNhcmRHcmlkLmlubmVySFRNTCArPSBgPGFydGljbGUgY2xhc3M9J2NhcmQnPlxuICAgICAgICA8cCBjbGFzcz0nZGVzdGluYXRpb24tbmFtZSc+JHtkZXN0aW5hdGlvbk9iai5kZXN0aW5hdGlvbn08L3A+XG4gICAgICAgIDxpbWcgaWQ9J3BpYy1kZXN0aW5hdGlvbicgc3JjPSR7ZGVzdGluYXRpb25PYmouaW1hZ2V9IGFsdD0ke2Rlc3RpbmF0aW9uT2JqLmFsdH0+XG4gICAgICAgIDxkaXYgY2xhc3M9J3RyaXAtaW5mbyc+XG4gICAgICAgICAgICA8cCBjbGFzcz0nZGF0ZSc+JHt0cmlwLmRhdGV9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9J3N0YXR1cyc+JHt0cmlwLnN0YXR1c308L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvYXJ0aWNsZT5gXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBtYWtlRGVzdGluYXRpb25Ecm9wRG93bihkZXN0aW5hdGlvbnNEYXRhLCBkZXN0aW5hdGlvbkRyb3BEb3duRGF0YSkge1xuICAgICAgICBkZXN0aW5hdGlvbnNEYXRhLmZvckVhY2goZGVzdGluYXRpb24gPT4gZGVzdGluYXRpb25Ecm9wRG93bkRhdGEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDxvcHRpb24gaWQgPSAnJHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbklEfSBjbGFzcz0nZGVzdGluYXRpb24tc2VsZWN0IHZhbHVlID0gXCIke2Rlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufVwiPiR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9vcHRpb24+YCkpXG4gICAgfSxcbiAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKCkge1xuICAgICAgICBjYXJkR3JpZC5pbm5lckhUTUwgPSAnPHA+VGhlc2UgYXJlIG5vdCB0aGUgQ2FyZHMgeW91IGFyZSBMb29raW5nIEZvcjwvcD4nXG4gICAgfSxcbiAgICBlbXB0eUZpZWxkc0Vycm9yKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW1wdHktZmllbGRzLWVycm9yLW1lc3NhZ2UnKS5pbm5lclRleHQgPSBgWW91IG5lZWQgdG8gZW50ZXIgYWxsIEZpZWxkcyFgXG4gICAgfSxcbiAgICBkaXNwbGF5VHJpcENvc3QodHJpcENvc3REYXRhKSB7XG4gICAgICAgIGNvbnN0IHRyaXBDb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyaXAtY29zdCcpXG4gICAgICAgIHRyaXBDb3N0LmlubmVySFRNTCA9IGBUaGlzIHRyaXAgY29zdHMgJHt0cmlwQ29zdERhdGF9JGBcbiAgICB9LFxuICAgIGRpc3BsYXlBbm51YWxDb3N0KGNvc3REYXRhLCBuYW1lRGF0YSkge1xuICAgICAgICBjb25zdCBhbm51YWxDb3N0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFubnVhbC1jb3N0JylcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkQ29zdCA9IHRoaXMubnVtYmVyV2l0aENvbW1hcyhjb3N0RGF0YSlcbiAgICAgICAgYW5udWFsQ29zdC5pbm5lckhUTUwgPSBgWW91IGhhdmUgc3BlbnQgJCR7Zm9ybWF0dGVkQ29zdH0gdGhpcyB5ZWFyICR7bmFtZURhdGF9YFxuICAgIH0sXG4gICAgbnVtYmVyV2l0aENvbW1hcyh4KSB7XG4gICAgICAgIHJldHVybiB4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlczsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy90dXJpbmctbG9nby5wbmdcIjsiLCJpbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgYXBpQ2FsbHMgZnJvbSAnLi9BUElDYWxscy5qcyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3R1cmluZy1sb2dvLnBuZyc7XG5pbXBvcnQgVHJpcCBmcm9tICcuL3RyaXAuanMnXG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXIuanMnXG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL0RPTVVwZGF0ZXMuanMnXG5cbmNvbnN0IHNpZ25JbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWduLWluLWJ1dHRvbicpXG5jb25zdCBkZXN0aW5hdGlvbkRyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc3RpbmF0aW9uLXNlbGVjdC1kcm9wLWRvd24nKVxuY29uc3QgYm9va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXRyaXAnKVxuXG5zaWduSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdHRlbXB0U2lnbkluKVxuYm9va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvb2tUcmlwKVxuXG5sZXQgYWxsVHJpcHNEYXRhLCBjdXJyZW50VXNlciwgYWxsRGVzdGluYXRpb25zXG5cbmZ1bmN0aW9uIGF0dGVtcHRTaWduSW4oKSB7XG4gICAgY29uc3QgcGFzc3dvcmRBdHRlbXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkLWlucHV0JykudmFsdWVcbiAgICBjb25zdCB1c2VyTmFtZUF0dGVtcHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcm5hbWUtaW5wdXQnKS52YWx1ZVxuICAgIGNvbnN0IG5hbWVDdXRPZmYgPSA4XG4gICAgY29uc3QgdXNlcklEQ3V0T2ZmID0gdXNlck5hbWVBdHRlbXB0LnNsaWNlKDgpXG4gICAgY29uc3QgdXNlck5hbWUgPSB1c2VyTmFtZUF0dGVtcHQuc2xpY2UoMCwgbmFtZUN1dE9mZilcbiAgICBjb25zdCB1c2VySUQgPSBwYXJzZUludCh1c2VySURDdXRPZmYpXG4gICAgaWYgKHVzZXJOYW1lID09PSAndHJhdmVsZXInICYmIHBhc3N3b3JkQXR0ZW1wdCA9PT0gJ3RyYXZlbDIwMjAnKSB7XG4gICAgICAgIGdldEludGlhbERhdGEodXNlcklEKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZ25JbkJ1dHRvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgPHA+V3JvbmcgUGFzc3dvcmQgR2V0cyBZb3UgTGVzcyBTcGFjZSEhPC9wPmApXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnRpYWxEYXRhKHVzZXJJRCkge1xuICAgIGNvbnN0IGZldGNoZWRUcmF2ZWxlcnMgPSBhcGlDYWxscy5sb2FkRGF0YShgdHJhdmVsZXJzLyR7dXNlcklEfWApXG4gICAgY29uc3QgZmV0Y2hlZFRyaXBzID0gYXBpQ2FsbHMubG9hZERhdGEoJ3RyaXBzJylcbiAgICBjb25zdCBmZXRjaGVkRGVzdGluYXRpb25zID0gYXBpQ2FsbHMubG9hZERhdGEoJ2Rlc3RpbmF0aW9ucycpXG4gICAgUHJvbWlzZS5hbGwoW2ZldGNoZWRUcmF2ZWxlcnMsIGZldGNoZWRUcmlwcywgZmV0Y2hlZERlc3RpbmF0aW9uc10pXG4gICAgICAgIC50aGVuKHZhbHVlcyA9PiB7XG4gICAgICAgICAgICBoaWRlSFRNTEVsZW1lbnQoJ3VzZXItc2lnbi1pbi1ib3gnKVxuICAgICAgICAgICAgaGlkZUhUTUxFbGVtZW50KCdvdmVybGF5JylcbiAgICAgICAgICAgIG1ha2VEZXN0aW5hdGlvbnModmFsdWVzWzJdKVxuICAgICAgICAgICAgbWFrZVRyaXBzKHZhbHVlc1sxXSlcbiAgICAgICAgICAgIG1ha2VVc2VyKHZhbHVlc1swXSlcbiAgICAgICAgfSkuY2F0Y2goZG9tVXBkYXRlcy5kaXNwbGF5RXJyb3JNZXNzYWdlKCkpXG59XG5cbmZ1bmN0aW9uIG1ha2VVc2VyKHVzZXJPYmopIHtcbiAgICBjdXJyZW50VXNlciA9IG5ldyBVc2VyKHVzZXJPYmosIGFsbFRyaXBzRGF0YSlcbiAgICBjb25zdCBjb3N0ID0gY3VycmVudFVzZXIuY2FsY3VsYXRlU3VtQ29zdE9mWWVhcihhbGxUcmlwc0RhdGEsIGFsbERlc3RpbmF0aW9ucylcbiAgICBjb25zdCBuYW1lID0gY3VycmVudFVzZXIubmFtZVxuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUFubnVhbENvc3QoY29zdCwgbmFtZSlcbiAgICBjdXJyZW50VXNlci5nZXREZXN0aW5hdGlvbnMoYWxsRGVzdGluYXRpb25zKVxuXG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5VHJpcENhcmRzKGN1cnJlbnRVc2VyKVxufVxuXG5mdW5jdGlvbiBtYWtlRGVzdGluYXRpb25zKGRlc2luYXRpb25PYmopIHtcbiAgICBhbGxEZXN0aW5hdGlvbnMgPSBkZXNpbmF0aW9uT2JqLmRlc3RpbmF0aW9uc1xuXG4gICAgZG9tVXBkYXRlcy5tYWtlRGVzdGluYXRpb25Ecm9wRG93bihhbGxEZXN0aW5hdGlvbnMsIGRlc3RpbmF0aW9uRHJvcERvd24pXG59XG5cbmZ1bmN0aW9uIG1ha2VUcmlwcyhmZXRjaGVkRGF0YSkge1xuICAgIGFsbFRyaXBzRGF0YSA9IGZldGNoZWREYXRhLnRyaXBzXG5cbn1cblxuZnVuY3Rpb24gYm9va1RyaXAoKSB7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUtaW5wdXQnKVxuICAgIGNvbnN0IGR1cmF0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVyYXRpb24taW5wdXQnKVxuICAgIGNvbnN0IHRyYXZlbGVyc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RyYXZlbGVycy1pbnB1dCcpXG5cbiAgICBpZiAoIWRlc3RpbmF0aW9uRHJvcERvd24udmFsdWUgfHwgIXRyYXZlbGVyc0lucHV0LnZhbHVlIHx8ICFkYXRlSW5wdXQudmFsdWUgfHwgIWR1cmF0aW9uSW5wdXQudmFsdWUpIHtcbiAgICAgICAgZG9tVXBkYXRlcy5lbXB0eUZpZWxkc0Vycm9yKClcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdVc2VyVHJpcE9iaiA9IG5ldyBUcmlwKHtcbiAgICAgICAgICAgIGlkOiBtYWtlVHJpcElEKCksXG4gICAgICAgICAgICB1c2VySUQ6IGN1cnJlbnRVc2VyLmlkLFxuICAgICAgICAgICAgZGVzdGluYXRpb25JRDogZ2V0RGVzdGluYXRpb25JRChkZXN0aW5hdGlvbkRyb3BEb3duLnZhbHVlKSxcbiAgICAgICAgICAgIHRyYXZlbGVyczogdHJhdmVsZXJzSW5wdXQudmFsdWUsXG4gICAgICAgICAgICBkYXRlOiBmb3JtYXREYXRlKGRhdGVJbnB1dC52YWx1ZSksXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb25JbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICAgICAgICAgICAgc3VnZ2VzdGVkQWN0aXZpdGllczogW11cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB0cmlwQ29zdCA9IG5ld1VzZXJUcmlwT2JqLmNhbGN1bGF0ZVRyaXBDb3N0KGFsbERlc3RpbmF0aW9ucylcblxuICAgICAgICBkb21VcGRhdGVzLmRpc3BsYXlUcmlwQ29zdCh0cmlwQ29zdClcblxuICAgICAgICBhcGlDYWxscy5wb3N0RGF0YShuZXdVc2VyVHJpcE9iailcbiAgICAgICAgICAgIC50aGVuKGRvbVVwZGF0ZXMuY2xlYXJDYXJkR3JpZCgpKVxuICAgICAgICAgICAgLnRoZW4oZ2V0SW50aWFsRGF0YShjdXJyZW50VXNlci5pZCkpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREZXN0aW5hdGlvbklEKG5hbWVPZlBsYWNlKSB7XG4gICAgY29uc3QgdHJpcCA9IGFsbERlc3RpbmF0aW9ucy5maW5kKGRlc3RpbmF0aW9uID0+IGRlc3RpbmF0aW9uLmRlc3RpbmF0aW9uID09PSBuYW1lT2ZQbGFjZSlcbiAgICByZXR1cm4gdHJpcC5pZFxufVxuXG5mdW5jdGlvbiBtYWtlVHJpcElEKCkge1xuICAgIHJldHVybiBhbGxUcmlwc0RhdGEuc29ydCgodHJpcEEsIHRyaXBCKSA9PiB0cmlwQi5pZCAtIHRyaXBBLmlkKVswXS5pZCArIDFcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgY29uc3QgZGF0ZUluZm8gPSBkYXRlLnNwbGl0KCctJyk7XG4gICAgcmV0dXJuIGRhdGVJbmZvLmpvaW4oJy8nKTtcbn1cblxuZnVuY3Rpb24gaGlkZUhUTUxFbGVtZW50KGVsZW1lbnQpIHtcblxuICAgIGNvbnN0IGVsZW1lbnRUb0hpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KTtcblxuICAgIGVsZW1lbnRUb0hpZGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcblxufSIsImNsYXNzIFRyaXAge1xuICAgIGNvbnN0cnVjdG9yKHRyaXBJbmZvKSB7XG4gICAgICAgIHRoaXMuaWQgPSB0cmlwSW5mby5pZFxuICAgICAgICB0aGlzLnVzZXJJRCA9IHRyaXBJbmZvLnVzZXJJRFxuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uSUQgPSB0cmlwSW5mby5kZXN0aW5hdGlvbklEXG4gICAgICAgIHRoaXMudHJhdmVsZXJzID0gdHJpcEluZm8udHJhdmVsZXJzXG4gICAgICAgIHRoaXMuZGF0ZSA9IHRyaXBJbmZvLmRhdGVcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHRyaXBJbmZvLmR1cmF0aW9uXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdHJpcEluZm8uc3RhdHVzXG4gICAgICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IHRyaXBJbmZvLnN1Z2dlc3RlZEFjdGl2aXRpZXNcbiAgICB9XG4gICAgY2FsY3VsYXRlVHJpcENvc3QoZGVzdGluYXRpb25EYXRhKSB7XG5cbiAgICAgICAgY29uc3QgZGVzdGluYXRpb25PYmogPSBkZXN0aW5hdGlvbkRhdGEuZmluZChkZXN0aW5hdGlvbiA9PiBkZXN0aW5hdGlvbi5pZCA9PT0gdGhpcy5kZXN0aW5hdGlvbklEKVxuXG4gICAgICAgIGNvbnN0IGZsaWdodENvc3QgPSAoZGVzdGluYXRpb25PYmouZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiAqIDIpICogdGhpcy50cmF2ZWxlcnNcblxuICAgICAgICBjb25zdCBob3RlbENvc3QgPSB0aGlzLmR1cmF0aW9uICogZGVzdGluYXRpb25PYmouZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXlcblxuXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKChob3RlbENvc3QgKyBmbGlnaHRDb3N0KSAqIDEuMSlcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFRyaXAiLCJjbGFzcyBVc2VyIHtcbiAgICBjb25zdHJ1Y3Rvcih1c2VyRGF0YSwgdHJpcHNEYXRhLCBkZXN0aW5hdG9uRGF0YSkge1xuICAgICAgICB0aGlzLm5hbWUgPSB1c2VyRGF0YS5uYW1lXG4gICAgICAgIHRoaXMudHlwZSA9IHVzZXJEYXRhLnRyYXZlbGVyVHlwZVxuICAgICAgICB0aGlzLmlkID0gdXNlckRhdGEuaWRcbiAgICAgICAgdGhpcy51c2VyVHJpcHMgPSB0cmlwc0RhdGEuZmlsdGVyKHRyaXAgPT4gdHJpcC51c2VySUQgPT09IHRoaXMuaWQpXG4gICAgICAgIHRoaXMudXNlckRlc3RpbmF0aW9uc1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVN1bUNvc3RPZlllYXIodHJpcExvZywgZGVzdGluYXRpb25Mb2cpIHtcbiAgICAgICAgbGV0IHJhd0Nvc3QgPSB0cmlwTG9nLnJlZHVjZSgoYWNjLCB0cmlwKSA9PiB7XG4gICAgICAgICAgICBpZiAodHJpcC51c2VySUQgPT09IHRoaXMuaWQgJiYgdGhpcy5jaGVja0lmVHJpcEhhcHBlbmVkVGhpc1llYXIodHJpcC5kYXRlKSkge1xuICAgICAgICAgICAgICAgIGxldCBkZXN0aW5hdGlvbk9iaiA9IGRlc3RpbmF0aW9uTG9nLmZpbmQoZGVzdGluYXRpb24gPT4gZGVzdGluYXRpb24uaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRClcblxuICAgICAgICAgICAgICAgIGFjYyArPSAodHJpcC5kdXJhdGlvbiAqIGRlc3RpbmF0aW9uT2JqLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5KSArIHRoaXMuY2FsY3VsYXRlRmxpZ2h0Q29zdChkZXN0aW5hdGlvbk9iaiwgdHJpcClcblxuICAgICAgICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2NcbiAgICAgICAgfSwgMClcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KChyYXdDb3N0ICogMS4xKS50b0ZpeGVkKCkpXG4gICAgfVxuXG4gICAgY2hlY2tJZlRyaXBIYXBwZW5lZFRoaXNZZWFyKHRyaXBEYXRlKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5VVRDID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpXG4gICAgICAgIGNvbnN0IHRyaXBVVEMgPSBuZXcgRGF0ZSh0cmlwRGF0ZSkuZ2V0RnVsbFllYXIoKVxuICAgICAgICByZXR1cm4gKHRyaXBVVEMgPT09ICh0b2RheVVUQyAtIDEpKVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZUZsaWdodENvc3QoZGVzdGluYXRpb24sIHRyaXApIHtcbiAgICAgICAgcmV0dXJuIChkZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uICogMikgKiB0cmlwLnRyYXZlbGVyc1xuICAgIH1cblxuICAgIGdldERlc3RpbmF0aW9ucyhkZXN0aW5hdGlvbkRhdGEpIHtcbiAgICAgICAgdGhpcy51c2VyRGVzdGluYXRpb25zID0gZGVzdGluYXRpb25EYXRhLnJlZHVjZSgoYWNjLCBkZXN0aW5hdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyVHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHJpcC5kZXN0aW5hdGlvbklEID09PSBkZXN0aW5hdGlvbi5pZCkge1xuICAgICAgICAgICAgICAgICAgICBhY2MucHVzaChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIGFjY1xuICAgICAgICB9LCBbXSlcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFVzZXIiXSwic291cmNlUm9vdCI6IiJ9