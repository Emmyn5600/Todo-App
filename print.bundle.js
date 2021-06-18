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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayData)\n/* harmony export */ });\nfunction displayData(todo) {\n\tconst list = document.getElementById('content');\n\tconst item = document.querySelector(`[data-key='${todo._id}']`);\n\tif (todo.deleted) {\n\t\titem.remove();\n\t\treturn;\n\t}\n\n\n\tconst isChecked = todo._checked ? 'done' : '';\n\tconst node = document.createElement('li');\n\tnode.setAttribute('class', `todo-item ${isChecked}`);\n\tnode.setAttribute('data-key', todo._id);\n\tif (todo._project === \"Defualt\") {\n\t\tnode.innerHTML = `\n<span>Project: ${todo._project}</span>\n<span>Title:${todo._title}</span><br>\n<span>${todo._description}</span><br>\n<span>${todo._duedate}</span><br>\n<label for = \"${todo._id}\" class = 'js-tick'>Checkbox</label>\n<input id = \"${todo._id}\" type = \"checkbox\" ><br>\n<button class=\"delete-todo js-delete-todo\">Delete</button>\n`;\n\t}\n\telse {\n\t\tnode.innerHTML = `\n<span>Project: ${todo._project}</span>\n<span>Title:${todo._title}</span><br>\n<span>${todo._description}</span><br>\n<span>${todo._duedate}</span><br>\n<label for = \"${todo._id}\" class = 'js-tick'>Checkbox</label>\n<input id = \"${todo._id}\" type = \"checkbox\" ><br>\n<button class=\"delete-todo js-delete-todo\">Delete</button>`\n\n\t}\n\tif (item) {\n\t\tlist.replaceChild(node, item);\n\t}\n\telse {\n\t\tlist.append(node);\n\t}\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/print.js?");

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