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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `#content {\n  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n#header {\n   display: flex;\n   flex-direction: row;\n   align-items: center;\n   justify-content: space-between;\n   padding-left: 20px;\n   padding-right: 60px;\n   border: 1px solid rgb(93, 119, 84);\n   border-radius: 10px;\n   margin: 2px;\n   background-color: rgb(223, 246, 214);\n}\n\nimg {\n  height: 140px;\n  width: 200px;\n}\n\nli {\n  display: inline;\n  float: none;\n  height: 42px;\n  margin: 0;\n  padding: 0 20px 20px;\n  width: 100%;\n  font-size: 25px;\n}\n\nli a {\n  color: #053f23;\n  padding: 10px;\n  border-radius: 5px;\n}\nli a:hover {\n  background-color: rgb(204, 248, 187);\n}\n\n#home{\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(230, 247, 223);\n  border: 1px solid rgb(93, 119, 84);\n  border-radius: 10px;\n  margin: 2px;\n  padding-left: 20px;\n  padding-top: 20px;\n  padding-right: 20px;\n}\n\nh2 {\n  color:#083a1e;\n}\n\n.salad {\n  height: 250px;\n  width: 450px;\n}\n\n.div  {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.describe {\n  text-align: center;\n}\n\n#menu {\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(238, 247, 235);\n  border: 1px solid rgb(93, 119, 84);\n  border-radius: 10px;\n  margin: 5px;\n}\n\n#contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgb(205, 240, 193);\n  border: 1px solid rgb(93, 119, 84);\n  border-radius: 10px;\n  margin: 30px;\n}\n\n.breakfast,.chicken,.green,.salmon {\n  display: flex;\n  padding: 20px;\n  align-items: center;\n  font-size: larger;\n  gap: 30px;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ components)\n/* harmony export */ });\n/* harmony import */ var _images_mainPhoto_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/mainPhoto.jpeg */ \"./src/images/mainPhoto.jpeg\");\n/* harmony import */ var _images_breakfastSalad_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/breakfastSalad.jpeg */ \"./src/images/breakfastSalad.jpeg\");\n/* harmony import */ var _images_chickenSalad_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/chickenSalad.jpeg */ \"./src/images/chickenSalad.jpeg\");\n/* harmony import */ var _images_greenSalad_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/greenSalad.jpeg */ \"./src/images/greenSalad.jpeg\");\n/* harmony import */ var _images_salmonSalad_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/salmonSalad.jpeg */ \"./src/images/salmonSalad.jpeg\");\n\n\n\n\n\n\nfunction components() {\n  const main = document.createElement(\"div\");\n  main.setAttribute(\"id\", \"main\");\n\n  //home\n  const home = document.createElement(\"div\");\n  home.setAttribute(\"id\", \"home\");\n\n  const div = document.createElement(\"div\");\n  div.classList.add(\"div\");\n\n  const photo = new Image();\n  photo.classList.add(\"salad\");\n  photo.src = _images_mainPhoto_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n\n  const title = document.createElement(\"h2\");\n  title.innerHTML = \"HEALTHY AND TASTY FOOD\";\n\n  const discribe = document.createElement(\"h4\");\n  discribe.classList.add(\"describe\");\n  discribe.innerHTML =\n    \"Order from out our latest salad menu, designed by our expert chefs.\";\n\n  div.appendChild(photo);\n  div.appendChild(title);\n\n  home.appendChild(div);\n  home.appendChild(discribe);\n\n  //menu\n\n  const menu = document.createElement(\"div\");\n  menu.setAttribute(\"id\", \"menu\");\n\n  // first salad\n  const breakfast = document.createElement(\"div\");\n  breakfast.classList.add(\"breakfast\");\n\n  const bSalad = new Image();\n  bSalad.classList.add(\"bSaladPhoto\");\n  bSalad.src = _images_breakfastSalad_jpeg__WEBPACK_IMPORTED_MODULE_1__;\n\n  const bSaladDescribe = document.createElement(\"h6\");\n  bSaladDescribe.classList.add(\"bSalad\");\n  bSaladDescribe.innerHTML =\n    \"You’ll feel so good after starting your day with this combo of protein, healthy fat and veggies.\";\n\n  const breakfastPrice = document.createElement(\"h5\");\n  breakfastPrice.classList.add(\"breakfastPrice\");\n  breakfastPrice.innerHTML = \"6.50\";\n\n  breakfast.appendChild(bSalad);\n  breakfast.appendChild(bSaladDescribe);\n  breakfast.appendChild(breakfastPrice);\n\n  // second salad\n  const chicken = document.createElement(\"div\");\n  chicken.classList.add(\"chicken\");\n\n  const chSalad = new Image();\n  chSalad.classList.add(\"chSalad\");\n  chSalad.src = _images_chickenSalad_jpeg__WEBPACK_IMPORTED_MODULE_2__;\n\n  const chSaladDescribe = document.createElement(\"h6\");\n  chSaladDescribe.classList.add(\"chSalad\");\n  chSaladDescribe.innerHTML =\n    \"This colourful salad supplies lean protein and is packed with nutrients.\";\n\n  const chickenPrice = document.createElement(\"h5\");\n  chickenPrice.classList.add(\"chickenPrice\");\n  chickenPrice.innerHTML = \"9.50\";\n\n  chicken.appendChild(chSalad);\n  chicken.appendChild(chSaladDescribe);\n  chicken.appendChild(chickenPrice);\n\n  // third salad\n  const green = document.createElement(\"div\");\n  green.classList.add(\"green\");\n\n  const gSalad = new Image();\n  gSalad.classList.add(\"gSalad\");\n  gSalad.src = _images_greenSalad_jpeg__WEBPACK_IMPORTED_MODULE_3__;\n\n  const gSaladDescribe = document.createElement(\"h6\");\n  gSaladDescribe.classList.add(\"gSalad\");\n  gSaladDescribe.innerHTML =\n    \"Enjoy this salad as a generous dinner or as a light lunch or supper.\";\n\n  const greenPrice = document.createElement(\"h5\");\n  greenPrice.classList.add(\"greenPrice\");\n  greenPrice.innerHTML = \"8.00\";\n\n  green.appendChild(gSalad);\n  green.appendChild(gSaladDescribe);\n  green.appendChild(greenPrice);\n\n  // fourth salad\n  const salmon = document.createElement(\"div\");\n  salmon.classList.add(\"salmon\");\n\n  const sSalad = new Image();\n  sSalad.classList.add(\"sSalad\");\n  sSalad.src = _images_salmonSalad_jpeg__WEBPACK_IMPORTED_MODULE_4__;\n\n  const sSaladDescribe = document.createElement(\"h6\");\n  sSaladDescribe.classList.add(\"sSalad\");\n  sSaladDescribe.innerHTML =\n    \"This Salmon Salad is fresh, protein packed, and exactly what you want for lunch.\";\n\n  const salmonPrice = document.createElement(\"h5\");\n  salmonPrice.classList.add(\"salmonPrice\");\n  salmonPrice.innerHTML = \"10.00\";\n\n  salmon.appendChild(sSalad);\n  salmon.appendChild(sSaladDescribe);\n  salmon.appendChild(salmonPrice);\n\n  menu.appendChild(breakfast);\n  menu.appendChild(chicken);\n  menu.appendChild(green);\n  menu.appendChild(salmon);\n\n  //contact\n  const contact = document.createElement(\"div\");\n  contact.setAttribute(\"id\", \"contact\");\n\n  const tel = document.createElement(\"h2\");\n  tel.classList.add(\"telephone\");\n  tel.innerHTML = \"(480) 565-7878\";\n\n  const adress = document.createElement(\"h5\");\n  adress.classList.add(\"adress\");\n  adress.innerHTML = \"4140 PARKER RD.ALLENTOWN, NEW MEXICO 56674\";\n\n  const workingHour = document.createElement(\"div\");\n\n  const weekdays = document.createElement(\"p\");\n  weekdays.classList.add(\"week\");\n  weekdays.innerHTML = \"Thursday-Friday: 8am-7pm\";\n\n  const weekend = document.createElement(\"p\");\n  weekend.classList.add(\"weekend\");\n  weekend.innerHTML = \"Saturday-Sunday: 8am-10pm\";\n\n  const dayOff = document.createElement(\"p\");\n  dayOff.classList.add(\"dayOff\");\n  dayOff.innerHTML = \"Closed Monday\";\n\n  workingHour.appendChild(weekdays);\n  workingHour.appendChild(weekend);\n  workingHour.appendChild(dayOff);\n\n  contact.appendChild(tel);\n  contact.appendChild(adress);\n  contact.appendChild(workingHour);\n\n  // main\n  main.appendChild(home);\n  main.appendChild(menu);\n  main.appendChild(contact);\n\n  return main;\n}\n\ndocument.body.appendChild(components());\n\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./src/components.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ \"./src/components.js\");\n\n\n\nfunction header() {\n  const container = document.createElement(\"div\");\n  container.setAttribute(\"id\", \"content\");\n\n  const header = document.createElement(\"div\");\n  header.setAttribute(\"id\", \"header\");\n\n  //div with logo and navigation\n  const logo = document.createElement(\"div\");\n  logo.setAttribute(\"id\", \"logo\");\n\n  const img = new Image();\n  img.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n  img.alt = \"logo\";\n\n  logo.appendChild(img);\n\n  const list = document.createElement(\"div\");\n  list.setAttribute(\"id\", \"list\");\n\n  //navigation\n  const navList = document.createElement(\"ul\");\n\n  const liHome = document.createElement(\"li\");\n  const linkHome = document.createElement(\"a\");\n  linkHome.innerHTML = \"Home\";\n  linkHome.href = \"#home\";\n  liHome.appendChild(linkHome);\n\n  const liMenu = document.createElement(\"li\");\n  const linkMenu = document.createElement(\"a\");\n  linkMenu.innerHTML = \"Menu\";\n  linkMenu.href = \"#menu\";\n  liMenu.appendChild(linkMenu);\n\n  const liContact = document.createElement(\"li\");\n  const linkContact = document.createElement(\"a\");\n  linkContact.innerHTML = \"Contact\";\n  linkContact.href = \"#contact\";\n  liContact.appendChild(linkContact);\n\n  navList.appendChild(liHome);\n  navList.appendChild(liMenu);\n  navList.appendChild(liContact);\n  list.appendChild(navList);\n\n  header.appendChild(logo);\n  header.appendChild(navList);\n\n  container.appendChild(header);\n  container.appendChild(main);\n  console.log(container);\n\n  return container;\n}\ndocument.body.appendChild(header());\n\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ \"./src/components.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./src/index.js?");

/***/ }),

/***/ "./src/images/breakfastSalad.jpeg":
/*!****************************************!*\
  !*** ./src/images/breakfastSalad.jpeg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d024240d327ed7c24a87.jpeg\";\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./src/images/breakfastSalad.jpeg?");

/***/ }),

/***/ "./src/images/chickenSalad.jpeg":
/*!**************************************!*\
  !*** ./src/images/chickenSalad.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"68e2f99818cac636271a.jpeg\";\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./src/images/chickenSalad.jpeg?");

/***/ }),

/***/ "./src/images/greenSalad.jpeg":
/*!************************************!*\
  !*** ./src/images/greenSalad.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a797ff1e895c5dc1913c.jpeg\";\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./src/images/greenSalad.jpeg?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0c6c87f22d5390fa173c.png\";\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./src/images/logo.png?");

/***/ }),

/***/ "./src/images/mainPhoto.jpeg":
/*!***********************************!*\
  !*** ./src/images/mainPhoto.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8b0fc4c6b625eabf398b.jpeg\";\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./src/images/mainPhoto.jpeg?");

/***/ }),

/***/ "./src/images/salmonSalad.jpeg":
/*!*************************************!*\
  !*** ./src/images/salmonSalad.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f6bdba9694ae97b58d10.jpeg\";\n\n//# sourceURL=webpack://restaurant-page-withwebpack/./src/images/salmonSalad.jpeg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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