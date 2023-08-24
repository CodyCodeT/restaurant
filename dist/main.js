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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize.js */ \"./src/initialize.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\n(0,_initialize_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_main_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst butMain = document.querySelector('#main');\nbutMain.addEventListener('click', _main_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\nconst butMenu = document.querySelector('#menu')\nbutMenu.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\nconst butContact = document.querySelector('#contact')\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/initialize.js":
/*!***************************!*\
  !*** ./src/initialize.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initialize)\n/* harmony export */ });\n\nfunction initialize() {\n  const content = document.getElementById(\"content\");\n  const header = document.createElement(\"h1\");\n  const menu = document.createElement(\"div\");\n  const butMain = document.createElement(\"button\");\n  const butMenu = document.createElement(\"button\");\n  const butContact = document.createElement(\"button\");\n  const view = document.createElement('div')\n  butMain.textContent = 'Main'\n  butMenu.textContent = 'Menu'\n  butContact.textContent = 'Contact'\n  butMain.id = 'main'\n  butMenu.id = 'menu'\n  butContact.id = 'contact'\n  view.id = 'view'\n  content.appendChild(header);\n  content.appendChild(menu);\n  content.appendChild(view)\n  menu.appendChild(butMain);\n  menu.appendChild(butMenu);\n  menu.appendChild(butContact);\n\n  header.textContent = \"Restaurant\";\n}\n\n\n//# sourceURL=webpack://restaurant/./src/initialize.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ main)\n/* harmony export */ });\nfunction main () {\n    const view = document.querySelector('#view')\n    view.innerHTML = ''\n    \n    const content = document.querySelector('#content')\n    view.textContent = 'We believe in perfection at restaurant, only the finest foods and ingredients for the finest customers'\n    content.appendChild(view)\n    \n}\n\n//# sourceURL=webpack://restaurant/./src/main.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu() {\n  const view = document.querySelector(\"#view\");\n  view.innerHTML = \"\";\n  let menuItems = [];\n  const createItem = function (name, description) {\n    this.name = name;\n    this.description = description;\n    menuItems.push(this);\n  };\n  const pretzel = new createItem(\n    \"Pretzel\",\n    \"A soft baked pretzel served fresh with cream cheese\"\n  );\n  const friedChicken = new createItem(\n    \"Fried Chicken\",\n    \"Chicken fried and served with mashed potatoes and country gravy, comes with today's vegetable\"\n  );\n  const balsalmicChicken = new createItem(\n    \"Balsalmic Chicken\",\n    \"Balsalmic Chicken made with fresh roma tomatoes, and homemade fettuccine with a garlic butter sauce\"\n  );\n  const sausageStroganoff = new createItem(\n    \"Sausage Stroganoff\",\n    \"Sausage, fresh mushrooms, egg noodles, and a hearty sauce served with a fresh roll\"\n  );\n  for (let i = 0; i < menuItems.length; i++) {\n    const item = document.createElement(\"div\");\n    const name = document.createElement(\"h2\");\n    const description = document.createElement(\"p\");\n    name.textContent = `${menuItems[i].name}`;\n    description.textContent = `${menuItems[i].description}`;\n    view.appendChild(item);\n    item.appendChild(name);\n    item.appendChild(description);\n  }\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/******/ 			// no module.id needed
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