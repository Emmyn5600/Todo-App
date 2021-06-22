/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"label {\\n  color: red;\\n  text-align: center;\\n}\\n\\n#addProject {\\n  margin-left: 20px;\\n}\\n\\nh1 {\\n  color: brown;\\n  text-align: center;\\n  font-weight: 600;\\n  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\n}\\n\\n.projectname {\\n  display: flex;\\n}\\n\\n.form-todo {\\n  margin-bottom: 50px;\\n  width: 59%;\\n  color: #000;\\n  margin-left: 300px;\\n  font-size: 20px;\\n  text-align: left;\\n  border-radius: 10px;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", \\\"Liberation Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\";\\n  border: 1px solid #979797;\\n  background-color: #ffd8a0;\\n  padding: 1rem;\\n}\\n\\n#project-input,\\n#project,\\n#title,\\n#description,\\n#duedate {\\n  border-radius: 7px;\\n  margin-bottom: 10px;\\n  margin-top: 20px;\\n  border: 1px solid #979797;\\n  width: 40%;\\n  height: 30px;\\n}\\n\\n#addList,\\n#addProject {\\n  font-weight: 700;\\n  color: #000;\\n  text-align: center;\\n  border-radius: 6px;\\n  width: 170px;\\n  height: 40px;\\n  font-size: 15px;\\n  text-transform: uppercase;\\n  cursor: pointer;\\n  margin-bottom: 10px;\\n  background-color: #daf6e6;\\n}\\n\\n#content {\\n  background-color: #ffd8a0;\\n  list-style-type: none;\\n  display: flex;\\n  justify-content: space-around;\\n  height: 50%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todo-app/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todo-app/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todo-app/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://todo-app/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todo-app/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/addProject.js":
/*!***************************!*\
  !*** ./src/addProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setDisplayNone\": () => (/* binding */ setDisplayNone),\n/* harmony export */   \"storeProjectInLocalStorage\": () => (/* binding */ storeProjectInLocalStorage),\n/* harmony export */   \"storeTaskInLocalStorage\": () => (/* binding */ storeTaskInLocalStorage),\n/* harmony export */   \"removeProjectFromLocalStorage\": () => (/* binding */ removeProjectFromLocalStorage),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask)\n/* harmony export */ });\nconst setDisplayNone = (name, date, priority, button) => {\n\tname.style.display = 'none';\n\tdate.style.display = 'none';\n\tpriority.style.display = 'none';\n\tbutton.style.display = 'none';\n};\n\nconst storeProjectInLocalStorage = (project) => {\n\tlet projects;\n\tif (localStorage.getItem('projects') === null) {\n\t\tprojects = [];\n\t} else {\n\t\tprojects = JSON.parse(localStorage.getItem('projects'));\n\t}\n\tprojects.push(project);\n\tlocalStorage.setItem('projects', JSON.stringify(projects));\n};\nconst storeTaskInLocalStorage = (task, project) => {\n\tconst projects = JSON.parse(localStorage.getItem('projects'));\n\n\tprojects.forEach((proj) => {\n\t\tif (project.head_id === proj.head_id) {\n\t\t\tproj.tasks.push(task);\n\n\t\t\tlocalStorage.removeItem('projects');\n\t\t\tlocalStorage.setItem('projects', JSON.stringify(projects));\n\t\t}\n\t});\n};\n\nconst removeProjectFromLocalStorage = (project) => {\n\tconst projects = JSON.parse(localStorage.getItem('projects'));\n\n\tprojects.forEach((proj) => {\n\t\tif (project.head_id === proj.head_id) {\n\t\t\tconst index = projects.indexOf(proj);\n\t\t\tprojects.splice(index, 1);\n\t\t\tlocalStorage.removeItem('projects');\n\t\t\tlocalStorage.setItem('projects', JSON.stringify(projects));\n\t\t}\n\t});\n};\nconst deleteTask = function (project, task) {\n\tconst index = project.tasks.indexOf(task);\n\tproject.tasks.splice(index, 1);\n}\n\n\n//# sourceURL=webpack://todo-app/./src/addProject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProject */ \"./src/addProject.js\");\n\n\n\n\nconst proj = new _logic_js__WEBPACK_IMPORTED_MODULE_1__.Project();\nwindow.onload = function () {\n\tconst content = document.getElementById('content')\n\tconst nameInput = document.createElement('input');\n\tconst addButton = document.createElement('button');\n\tconst div = document.createElement('div');\n\taddButton.innerHTML = 'Add Project';\n\tnameInput.placeholder = 'Enter Project title';\n\tdiv.classList.add('pros');\n\tdiv.append(addButton, nameInput);\n\tcontent.appendChild(div);\n\taddButton.addEventListener('click', () => {\n\t\tif (nameInput.value === '') {\n\t\t\tconst errorMessage = document.createElement('div');\n\t\t\terrorMessage.innerText = \"Please add the title of the project\"\n\t\t\terrorMessage.classList.add('error');\n\t\t\tcontent.appendChild(errorMessage);\n\t\t\tsetTimeout(() => {\n\t\t\t\terrorMessage.innerText = '';\n\t\t\t}, 3000);\n\n\t\t}\n\t\telse {\n\t\t\tconst myProject = new _logic_js__WEBPACK_IMPORTED_MODULE_1__.Project(nameInput.value);\n\t\t\tproj.allProjects.push(myProject);\n\t\t\t(0,_addProject__WEBPACK_IMPORTED_MODULE_2__.storeProjectInLocalStorage)(myProject);\n\t\t\tconst myProjects = JSON.parse(localStorage.getItem('projects'));\n\t\t\tconst card = document.createElement('div');\n\t\t\tcard.classList.add('pro-card');\n\t\t\tconst cardBodyId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();\n\t\t\tproj.allProjects.forEach((project) => {\n\t\t\t\tcard.innerHTML = `\n<div class = 'card-title'>\n<h5>Project name: ${project.title}</h5>\n<button class = \"add-task\" data='${myProject.head_id}'>Add task</button>\n<button class = \"delete-task\" data= '${myProject.body_id}'> Delete Project</button>\n</div>\n<div class = 'card-body' data='${cardBodyId}'>\n</div>\n`;\n\n\t\t\t});\n\t\t\tcontent.appendChild(card);\n\t\t\tconst deleteBtn = document.querySelector(`[data = '${myProject.body_id}']`);\n\t\t\tnameInput.value = '';\n\t\t\tdeleteBtn.addEventListener('click', (e) => {\n\t\t\t\t(0,_addProject__WEBPACK_IMPORTED_MODULE_2__.removeProjectFromLocalStorage)(myProject);\n\t\t\t\te.target.parentElement.parentElement.remove();\n\n\t\t\t});\n\t\t\tconst addBtn = document.querySelector(`[data = '${myProject.head_id}']`);\n\t\t\taddBtn.addEventListener('click', () => {\n\t\t\t\tconst submitId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();\n\t\t\t\tconst inputId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();\n\t\t\t\tconst priorityId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();\n\t\t\t\tconst dateId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n\t\t\t\tconst cardBody = document.querySelector(`[data = '${cardBodyId}']`);\n\t\t\t\tcardBody.innerHTML = ` \n<form type = 'submit' >\n<input type = 'text' Placeholder = 'Enter a task' class = 'task-input' data = '${inputId}'>\n <input type='date' class='dateInput' data='${dateId}'> \n                <select name='priority' class='priority' data='${priorityId}'>\n                    <option value='low'>Low</option>\n                    <option value='high'>High</option>\n                </select> \n            <button type ='submit' class='submit-form' data='${submitId}'>Submit</button>\n </form>\n`;\n\t\t\t\tconst submitForm = document.querySelector(`[data = '${submitId}']`);\n\t\t\t\tconst taskInput = document.querySelector(`[data = '${inputId}']`);\n\t\t\t\tconst priority = document.querySelector(`[data = '${priorityId}']`);\n\t\t\t\tconst dateInput = document.querySelector(`[data='${dateId}']`);\n\t\t\t\tsubmitForm.addEventListener('click', (e) => {\n\t\t\t\t\te.preventDefault();\n\t\t\t\t\tif (taskInput.value === '' || dateInput.value === '') {\n\t\t\t\t\t\tconst errDiv = document.createElement('div');\n\t\t\t\t\t\terrDiv.innerText = 'Please fill all fields';\n\t\t\t\t\t\terrDiv.classList.add('error')\n\t\t\t\t\t\tcontent.appendChild(errDiv);\n\t\t\t\t\t\tsetTimeout(() => {\n\t\t\t\t\t\t\terrDiv.innerText = '';\n\t\t\t\t\t\t}, 3000);\n\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tconst myTask = new _logic_js__WEBPACK_IMPORTED_MODULE_1__.Todo(taskInput.value, dateInput.value, priority.value);\n\t\t\t\t\t\tmyProjects.forEach((proj) => {\n\t\t\t\t\t\t\tif (proj.head_id === myProject.head_id) {\n\t\t\t\t\t\t\t\t(0,_addProject__WEBPACK_IMPORTED_MODULE_2__.storeTaskInLocalStorage)(myTask, myProject);\n\t\t\t\t\t\t\t\t(0,_addProject__WEBPACK_IMPORTED_MODULE_2__.setDisplayNone)(taskInput, priority, submitForm, dateInput);\n\t\t\t\t\t\t\t\tconst myProjectWithTasks = JSON.parse(localStorage.getItem('projects'));\n\t\t\t\t\t\t\t\tconst itemId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n\t\t\t\t\t\t\t\tmyProjectWithTasks.forEach((myProj) => {\n\t\t\t\t\t\t\t\t\tif (myProj.head_id === myProject.head_id) {\n\t\t\t\t\t\t\t\t\t\tmyProj.tasks.forEach((task) => {\n\t\t\t\t\t\t\t\t\t\t\tcardBody.innerHTML += `\n                                    <div class='card-item' data=${itemId}>${task.name} | Due date: ${task.date} | priority: ${task.priority}<button class='btn btn-danger deleteBtn' data=${task.id}>Delete</button></div>\n                                `;\n\t\t\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t\t\t\tdocument.querySelectorAll('.deleteBtn').forEach((button) => {\n\t\t\t\t\t\t\t\t\t\t\tbutton.addEventListener('click', (e) => {\n\t\t\t\t\t\t\t\t\t\t\t\t(0,_addProject__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(myProject, myTask);\n\t\t\t\t\t\t\t\t\t\t\t\te.target.parentElement.remove();\n\t\t\t\t\t\t\t\t\t\t\t})\n\n\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t}\n\n\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\n\t\t\t\t})\n\n\t\t\t})\n\t\t}\n\n\t})\n\n\n};\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Todo\": () => (/* binding */ Todo),\n/* harmony export */   \"clearField\": () => (/* binding */ clearField),\n/* harmony export */   \"addOption\": () => (/* binding */ addOption),\n/* harmony export */   \"toggleDone\": () => (/* binding */ toggleDone),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"clearFieldPro\": () => (/* binding */ clearFieldPro)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\n\nconst proTitle = document.getElementById('project-input');\n\nclass Project {\n\tconstructor(title) {\n\t\tthis.title = title;\n\t\tthis.tasks = [];\n\t\tthis.head_id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)();\n\t\tthis.body_id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)();\n\t}\n\tallProjects = [{ name: 'Example project', tasks: [{ name: 'example task' }] }];\n}\n\nconst Todo = function (name, date, priority) {\n\tthis.name = name;\n\tthis.date = date;\n\tthis.priority = priority;\n\tthis.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)();\n};\n\n\nfunction clearField() {\n\ttitle.value = '';\n\tdescription.value = '';\n\tduedate.value = '';\n}\n\nfunction clearFieldPro() {\n\tproTitle.value = '';\n}\n\nconst addOption = function (pro) {\n\tconst selectOption = document.getElementById('project');\n\n\tconst opt = document.createElement('option');\n\topt.value = pro.title;\n\topt.innerHTML = pro.title;\n\tselectOption.append(opt);\n};\nconst toggleDone = function (key) {\n\tconst index = todoItems.findIndex((item) => item.id === Number(key));\n\ttodoItems[index].checked = !todoItems[index].checked;\n\tdisplayData(todoItems[index]);\n};\n\nconst deleteTodo = function (key) {\n\tconst index = todoItems.findIndex((item) => item.id === Number(key));\n\tconst todo = {\n\t\tdeleted: true,\n\t\t...todoItems[index],\n\t};\n\ttodoItems = todoItems.filter((item) => item.id !== Number(key));\n\tdisplayData(todo);\n};\n\n\n//# sourceURL=webpack://todo-app/./src/logic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;