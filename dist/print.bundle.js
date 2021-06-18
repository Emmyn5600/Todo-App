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

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayData)\n/* harmony export */ });\nfunction displayData(todo) {\n  const list = document.getElementById('content');\n  const item = document.querySelector(`[data-key='${todo.id}']`);\n  if (todo.deleted) {\n    item.remove();\n    return;\n  }\n\n  const isChecked = todo.checked ? 'done' : '';\n  const node = document.createElement('li');\n  node.setAttribute('class', `todo-item ${isChecked}`);\n  node.setAttribute('data-key', todo.id);\n  if (todo.project === 'Defualt') {\n    node.innerHTML = `\n<span>Project: ${todo.project}</span>\n<span>Title:${todo.title}</span><br>\n<span>${todo.description}</span><br>\n<span>${todo.duedate}</span><br>\n<label for = \"${todo.id}\" class = 'js-tick'>Checkbox</label>\n<input id = \"${todo.id}\" type = \"checkbox\" ><br>\n<button class=\"delete-todo js-delete-todo\">Delete</button>\n`;\n  } else {\n    node.innerHTML = `\n<span>Project: ${todo.project}</span>\n<span>Title:${todo.title}</span><br>\n<span>${todo.description}</span><br>\n<span>${todo.duedate}</span><br>\n<label for = \"${todo.id}\" class = 'js-tick'>Checkbox</label>\n<input id = \"${todo.id}\" type = \"checkbox\" ><br>\n<button class=\"delete-todo js-delete-todo\">Delete</button>`;\n  }\n  if (item) {\n    list.replaceChild(node, item);\n  } else {\n    list.append(node);\n  }\n}\n\n\n//# sourceURL=webpack://todo-app/./src/print.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/print.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;