"use strict";
(self["webpackChunktop_todolist"] = self["webpackChunktop_todolist"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style2.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style2.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* TOP TODO List */
/* TODO styling */

:root {
    --clr-primary: rgb(211, 149, 240);
    --clr-light: #f4f4f4;
    --clr-dark: #333;
    --clr-warning: rgb(140, 11, 247);
}

*,
*::before,
*::after {
    font-family: inherit;
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    background-color: var(--clr-primary);
    color: var(--clr-light);
    display: grid;
    grid:
        'header header header header'auto "...... lists active ......"auto / 1fr minmax(100px, 300px) minmax(250px, 500px) 1fr;
}

.title {
    grid-area: header;
    text-align: center;
    font-size: calc(3vw + 2rem);
    font-weight: 900;
    color: rgba(0, 0, 0, 0.2);
    margin: -0.1em 0 0.5em
}

.all-lists {
    grid-area: lists;
}

.master-list {
    font-size: 1.2rem;
    line-height: 1.7;
    list-style: circle;
    padding-left: 1.1em;
}

.list-name {
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.list-name:hover {
    overflow: visible;
    white-space: normal;
    text-overflow: clip;
    max-width: none;
}

li {
    list-style: none;
    position: relative;
}

li::before {
    /* style of visible bullet point*/
    content: '\\2022';
    display: inline-block;
}

li:hover::before {
    transform: scale(1.3);
}

.list-name:hover {
    opacity: 0.7;
}

form {
    display: flex;
}

/* default set of parameters for most buttons */
.btn {
    cursor: pointer;
    background: 0;
    border: 0;
    padding: 0;
    color: inherit;
}

.btn.create {
    font-size: 1.5rem;
    grid-area: active;
    font-weight: 900;
    margin-right: 0.25em;
    transition: opacity 250ms ease-in;
}

#btn-create-task {
    color: var(--clr-primary);
}

.btn:hover {
    opacity: 0.4;
}

.btn.delete {
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1rem;
}

.btn.delete:hover {
    color: var(--clr-warning);
}

.new {
    grid-area: active;
    background: transparent;
    border: 0;
    color: inherit;
    border-bottom: 1px solid currentColor;
    font-size: 1rem;
    transition: border-bottom 150ms ease-in;
    outline: none;
    padding: .25em;
    order: 2;
    /* applying flex to <form> allows order: 2 to display button first but maintain second position when using tab.  Why does this not impact the add task button? */
}

.new::placeholder {
    opacity: 0.5;
    color: black;
}

.new:focus {
    border-bottom-width: 3px;
}

.new:focus::placeholder {
    opacity: 0.3;
}

/* maintain spacing if long list name */
.new.task {
    width: 50%;
    margin-bottom: 0;
}

.active-list {
    font-weight: bold;
    font-size: 1.3rem;
}

.task-body form {
    display: flex;
    justify-content: space-between;
}

.task-btn {
    align-items: center;
    order: 3;
    grid-area: active;
    margin: .25em .25em .25em .25em;
}

.task-list {
    --spacer: 1.5rem;
    grid-area: active;
    background: var(--clr-light);
    color: var(--clr-dark);
    align-self: start;
    /* prevents My Lists from controlling size of Task List */
}

.task-header {
    padding: var(--spacer);
    background: #e4e4e4;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* maintain spacing if long list name */
.list-title {
    margin: 0 1em 0;
}

.task-count {
    margin: 0;
    font-size: 1rem;
}

.task-body {
    padding: var(--spacer);
    position: relative;
}

.task-temp {
    display: flex;
}

.task-name-label {
    position: relative;
    align-items: center;
    cursor: pointer;
    margin-bottom: .15em;
    margin-right: auto;
    display: flex;
    overflow: hidden;
    white-space: nowrap;
    font-size: .8em;
    /* text-overflow: ellipsis; MUST be adjusted in JS for effect*/
    flex: 0 0 33%;
    /* resolves max-width not having a min size with window resize */
}

.task-note-label {
    flex: 0 0 35%;
    color: purple;
    font-size: .6em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.task-name-label:hover, .task-note-label:hover {
    overflow: visible;
    white-space: normal;
    text-overflow: clip;
    max-width: none;
}

.task-priority-label {
    flex: 0 0 10%;
    color: green;
    font-size: .6em;
}

.task-due-date-label {
    flex: 0 0 20%;
    color: brown;
    font-size: .6em;
}

[type='checkbox'] {
    opacity: 0;
    position: absolute;
}

/* visible checkbox radio button */
.custom-checkbox {
    --size: 0.75em;
    display: inline-block;
    width: var(--size);
    height: var(--size);
    margin-right: var(--size);
    cursor: pointer;
    border: 2px solid currentColor;
    border-radius: 50%;
    transform: scale(1);
    transition: transform 200ms ease-in-out;
    flex-shrink: 0;
    /* prevents shrinking with long task name */
}

/* .task-name-label:hover .custom-checkbox { */
/* changing from the above allows whole line to hover*/
.task-temp:hover .custom-checkbox {
    transform: scale(1.2);
    color: var(--clr-primary);
}

[type="checkbox"]:checked+.task-name-label .custom-checkbox {
    background: var(--clr-primary);
    border-color: var(--clr-primary);
    box-shadow: inset 0 0 0px 3px white;
}

[type='checkbox']:checked+.task-name-label {
    opacity: 0.5;
}

/* manages 'task complete' strike through*/
.task-name-label::after {
    content: '';
    position: absolute;
    left: 1.5em;
    right: 0;
    height: 3px;
    background: currentColor;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 200ms ease-in-out;
}

[type='checkbox']:checked+.task-name-label::after {
    transform: scaleX(1);
    transform-origin: initial;
}

.delete-buttons {
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -30px;
    color: var(--clr-light);
}`, "",{"version":3,"sources":["webpack://./src/style2.css"],"names":[],"mappings":"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","sourcesContent":["/* TOP TODO List */\n/* TODO styling */\n\n:root {\n    --clr-primary: rgb(211, 149, 240);\n    --clr-light: #f4f4f4;\n    --clr-dark: #333;\n    --clr-warning: rgb(140, 11, 247);\n}\n\n*,\n*::before,\n*::after {\n    font-family: inherit;\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Work Sans', sans-serif;\n    font-weight: 300;\n    font-size: 1.5rem;\n    background-color: var(--clr-primary);\n    color: var(--clr-light);\n    display: grid;\n    grid:\n        'header header header header'auto \"...... lists active ......\"auto / 1fr minmax(100px, 300px) minmax(250px, 500px) 1fr;\n}\n\n.title {\n    grid-area: header;\n    text-align: center;\n    font-size: calc(3vw + 2rem);\n    font-weight: 900;\n    color: rgba(0, 0, 0, 0.2);\n    margin: -0.1em 0 0.5em\n}\n\n.all-lists {\n    grid-area: lists;\n}\n\n.master-list {\n    font-size: 1.2rem;\n    line-height: 1.7;\n    list-style: circle;\n    padding-left: 1.1em;\n}\n\n.list-name {\n    cursor: pointer;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.list-name:hover {\n    overflow: visible;\n    white-space: normal;\n    text-overflow: clip;\n    max-width: none;\n}\n\nli {\n    list-style: none;\n    position: relative;\n}\n\nli::before {\n    /* style of visible bullet point*/\n    content: '\\2022';\n    display: inline-block;\n}\n\nli:hover::before {\n    transform: scale(1.3);\n}\n\n.list-name:hover {\n    opacity: 0.7;\n}\n\nform {\n    display: flex;\n}\n\n/* default set of parameters for most buttons */\n.btn {\n    cursor: pointer;\n    background: 0;\n    border: 0;\n    padding: 0;\n    color: inherit;\n}\n\n.btn.create {\n    font-size: 1.5rem;\n    grid-area: active;\n    font-weight: 900;\n    margin-right: 0.25em;\n    transition: opacity 250ms ease-in;\n}\n\n#btn-create-task {\n    color: var(--clr-primary);\n}\n\n.btn:hover {\n    opacity: 0.4;\n}\n\n.btn.delete {\n    font-weight: 700;\n    letter-spacing: 1px;\n    font-size: 1rem;\n}\n\n.btn.delete:hover {\n    color: var(--clr-warning);\n}\n\n.new {\n    grid-area: active;\n    background: transparent;\n    border: 0;\n    color: inherit;\n    border-bottom: 1px solid currentColor;\n    font-size: 1rem;\n    transition: border-bottom 150ms ease-in;\n    outline: none;\n    padding: .25em;\n    order: 2;\n    /* applying flex to <form> allows order: 2 to display button first but maintain second position when using tab.  Why does this not impact the add task button? */\n}\n\n.new::placeholder {\n    opacity: 0.5;\n    color: black;\n}\n\n.new:focus {\n    border-bottom-width: 3px;\n}\n\n.new:focus::placeholder {\n    opacity: 0.3;\n}\n\n/* maintain spacing if long list name */\n.new.task {\n    width: 50%;\n    margin-bottom: 0;\n}\n\n.active-list {\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n\n.task-body form {\n    display: flex;\n    justify-content: space-between;\n}\n\n.task-btn {\n    align-items: center;\n    order: 3;\n    grid-area: active;\n    margin: .25em .25em .25em .25em;\n}\n\n.task-list {\n    --spacer: 1.5rem;\n    grid-area: active;\n    background: var(--clr-light);\n    color: var(--clr-dark);\n    align-self: start;\n    /* prevents My Lists from controlling size of Task List */\n}\n\n.task-header {\n    padding: var(--spacer);\n    background: #e4e4e4;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n/* maintain spacing if long list name */\n.list-title {\n    margin: 0 1em 0;\n}\n\n.task-count {\n    margin: 0;\n    font-size: 1rem;\n}\n\n.task-body {\n    padding: var(--spacer);\n    position: relative;\n}\n\n.task-temp {\n    display: flex;\n}\n\n.task-name-label {\n    position: relative;\n    align-items: center;\n    cursor: pointer;\n    margin-bottom: .15em;\n    margin-right: auto;\n    display: flex;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: .8em;\n    /* text-overflow: ellipsis; MUST be adjusted in JS for effect*/\n    flex: 0 0 33%;\n    /* resolves max-width not having a min size with window resize */\n}\n\n.task-note-label {\n    flex: 0 0 35%;\n    color: purple;\n    font-size: .6em;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.task-name-label:hover, .task-note-label:hover {\n    overflow: visible;\n    white-space: normal;\n    text-overflow: clip;\n    max-width: none;\n}\n\n.task-priority-label {\n    flex: 0 0 10%;\n    color: green;\n    font-size: .6em;\n}\n\n.task-due-date-label {\n    flex: 0 0 20%;\n    color: brown;\n    font-size: .6em;\n}\n\n[type='checkbox'] {\n    opacity: 0;\n    position: absolute;\n}\n\n/* visible checkbox radio button */\n.custom-checkbox {\n    --size: 0.75em;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    margin-right: var(--size);\n    cursor: pointer;\n    border: 2px solid currentColor;\n    border-radius: 50%;\n    transform: scale(1);\n    transition: transform 200ms ease-in-out;\n    flex-shrink: 0;\n    /* prevents shrinking with long task name */\n}\n\n/* .task-name-label:hover .custom-checkbox { */\n/* changing from the above allows whole line to hover*/\n.task-temp:hover .custom-checkbox {\n    transform: scale(1.2);\n    color: var(--clr-primary);\n}\n\n[type=\"checkbox\"]:checked+.task-name-label .custom-checkbox {\n    background: var(--clr-primary);\n    border-color: var(--clr-primary);\n    box-shadow: inset 0 0 0px 3px white;\n}\n\n[type='checkbox']:checked+.task-name-label {\n    opacity: 0.5;\n}\n\n/* manages 'task complete' strike through*/\n.task-name-label::after {\n    content: '';\n    position: absolute;\n    left: 1.5em;\n    right: 0;\n    height: 3px;\n    background: currentColor;\n    transform: scaleX(0);\n    transform-origin: center;\n    transition: transform 200ms ease-in-out;\n}\n\n[type='checkbox']:checked+.task-name-label::after {\n    transform: scaleX(1);\n    transform-origin: initial;\n}\n\n.delete-buttons {\n    display: flex;\n    justify-content: space-evenly;\n    position: absolute;\n    width: 100%;\n    left: 0;\n    bottom: -30px;\n    color: var(--clr-light);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style2.css":
/*!************************!*\
  !*** ./src/style2.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style2_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style2.css */ "./node_modules/css-loader/dist/cjs.js!./src/style2.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style2_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style2_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style2_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style2_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/eventListeners2.js":
/*!********************************!*\
  !*** ./src/eventListeners2.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleClearCompleteTasksButton: () => (/* binding */ handleClearCompleteTasksButton),
/* harmony export */   handleDeleteListButton: () => (/* binding */ handleDeleteListButton),
/* harmony export */   handleListsContainer: () => (/* binding */ handleListsContainer),
/* harmony export */   handleNewListForm: () => (/* binding */ handleNewListForm),
/* harmony export */   handleNewTaskForm: () => (/* binding */ handleNewTaskForm),
/* harmony export */   handleTaskContainer: () => (/* binding */ handleTaskContainer),
/* harmony export */   handleTaskDueDateButton: () => (/* binding */ handleTaskDueDateButton),
/* harmony export */   handleTaskNoteButton: () => (/* binding */ handleTaskNoteButton),
/* harmony export */   handleTaskPriorityButton: () => (/* binding */ handleTaskPriorityButton),
/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)
/* harmony export */ });
/* harmony import */ var _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalDeclarations.js */ "./src/globalDeclarations.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");
/* harmony import */ var _functions2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions2.js */ "./src/functions2.js");
//TOP TODO List
//Event Listener Functions

//Imports



let lists = _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.lists;



// Event Listener Functions
function setupEventListeners() {
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.listsContainer.addEventListener("click", handleListsContainer);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskContainer.addEventListener("click", handleTaskContainer);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.newListForm.addEventListener("click", handleNewListForm);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.newTaskButton.addEventListener("click", handleNewTaskForm);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskNoteButton.addEventListener("click", handleTaskNoteButton);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskPriorityButton.addEventListener("click", handleTaskPriorityButton);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskDueDateButton.addEventListener("click", handleTaskDueDateButton);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.clearCompleteTasksButton.addEventListener(
    "click",
    handleClearCompleteTasksButton
  );
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.deleteListButton.addEventListener("click", handleDeleteListButton);
}

function handleListsContainer(e) {
  if (e.target.tagName.toLowerCase() === "li") {
    _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value = e.target.dataset.listId;
    (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.saveAndRender)();
  }
}

function handleTaskContainer(e) {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedList = lists.find((list) => list.id === _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value);
    const selectedTask = selectedList.tasks.find(
      (task) => task.id === e.target.id
    );
    selectedTask.complete = e.target.checked;
    (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.save)();
    (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.renderTaskCount)(selectedList);
  }
}

function handleNewListForm(e) {
  e.preventDefault();
  const listName = _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.newListInput.value;
  if (listName == null || listName == "") return;
  const list = (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.createList)(listName);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.newListInput.value = null;
  lists.push(list);
  (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.saveAndRender)();
}

function handleNewTaskForm(e) {
  e.preventDefault();
  const taskName = _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.newTaskInput.value;
  (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.hideTaskDetails)();
  if (taskName == null || taskName == "") return;
  const taskNote = _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskNoteInput.value;
  const taskPriority =
    _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskPriorityOptions.querySelector('input[type="radio"]:checked')?.value ||
    "";
  const taskDueDate = _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskDueDateInput.value;
  if (!(0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.isValidDate)(taskDueDate)) {
    alert("Please enter valid mm/dd/yy");
    _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskDueDateInput.value = null;
    return;
  }
  const task = (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.createTask)(taskName, taskNote, taskPriority, taskDueDate);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.newTaskInput.value = null;
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskNoteInput.value = null;
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskDueDateInput.value = null;
  (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.resetPriorityRadioButtons)(_globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskPriorityOptions);
  const selectedList = lists.find((list) => list.id === _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value);
  selectedList.tasks.push(task);
  (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.saveAndRender)();
}

function handleTaskNoteButton(e) {
  e.preventDefault();
  (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.toggleInputField)(_globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskNoteInput);
}

function handleTaskPriorityButton(e) {
  e.preventDefault();
  (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.toggleInputField)(_globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskPriorityOptions);
}

function handleTaskDueDateButton(e) {
  e.preventDefault();
  (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.toggleInputField)(_globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskDueDateInput);
}

function handleClearCompleteTasksButton(e) {
  const selectedList = lists.find((list) => list.id === _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value);
  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
  (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.saveAndRender)();
}

function handleDeleteListButton(e) {
  // lists = lists.filter((list) => list.id !== selectedListId.value);
  //*****use splice edits original lists in globalDeclarations. filter works on local lists declared after import.*****
  lists.splice(
    lists.findIndex((list) => list.id === _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value),
    1
  );
  _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value = null;
  (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.saveAndRender)();
}


/***/ }),

/***/ "./src/functions2.js":
/*!***************************!*\
  !*** ./src/functions2.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createList: () => (/* binding */ createList),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   defaultDisplay: () => (/* binding */ defaultDisplay),
/* harmony export */   hideTaskDetails: () => (/* binding */ hideTaskDetails),
/* harmony export */   isValidDate: () => (/* binding */ isValidDate),
/* harmony export */   myFooter: () => (/* binding */ myFooter),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   renderTaskCount: () => (/* binding */ renderTaskCount),
/* harmony export */   resetPriorityRadioButtons: () => (/* binding */ resetPriorityRadioButtons),
/* harmony export */   save: () => (/* binding */ save),
/* harmony export */   saveAndRender: () => (/* binding */ saveAndRender),
/* harmony export */   toggleInputField: () => (/* binding */ toggleInputField)
/* harmony export */ });
/* harmony import */ var _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalDeclarations.js */ "./src/globalDeclarations.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");
//TOP TODO List

//Imports




//Functions
function defaultDisplay() {
  if (_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.lists.length === 0) {
    const defaultListName = "Example ToDo List";
    const defaultList = createList(defaultListName);
    defaultList.tasks.push(
      createTask("Default Task 1", "Make a note", "High", "02/29/24")
    );
    defaultList.tasks.push(createTask("Default Task 2", "This is a note."));
    defaultList.tasks.push(createTask("Default Task 3", "", "low"));
    _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.lists.push(defaultList);
    _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value = defaultList.id;
  }
}

function createList(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
}

function createTask(name, note, priority, dueDate) {
  return {
    id: Date.now().toString(),
    name: name,
    note: note || "",
    priority: priority || "",
    dueDate: dueDate || "",
    complete: false,
  };
}

function hideTaskDetails() {
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskNoteInput.style.display = "none";
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskPriorityOptions.style.display = "none";
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskDueDateInput.style.display = "none";
}

function resetPriorityRadioButtons(container) {
  const radioButtons = container.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radioButton) => {
    radioButton.checked = false;
  });
}

function toggleInputField(inputField) {
  if (inputField.style.display === "block") {
    inputField.style.display = "none";
  } else {
    inputField.style.display = "block";
    inputField.focus();
  }
}

function isValidDate(dateString) {
  if (dateString === "") {
    return true;
  }
  const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{2}$/;
  if (!datePattern.test(dateString)) {
    return false;
  }
  const [month, day, year] = dateString.split("/").map(Number);
  if (month < 1 || month > 12) {
    return false;
  }
  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) {
    return false;
  }
  if (year < 0 || year > 99) {
    return false;
  }
  return true;
}

function saveAndRender() {
  save();
  render();
}

function save() {
  localStorage.setItem(_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_LIST_KEY, JSON.stringify(_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.lists));
  localStorage.setItem(_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_SELECTED_LIST_ID_KEY, _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId);
}

function render() {
  clearElement(_globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.listsContainer);
  renderLists();
  const selectedList = _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.lists.find((list) => list.id === _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value);
  if (_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value == null) {
    _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskDisplayContainer.style.display = "none";
  } else {
    _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskDisplayContainer.style.display = "block";
    _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.listTitleElement.innerText = selectedList.name;
    renderTaskCount(selectedList);
    clearElement(_globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskContainer);
    renderTasks(selectedList);
  }
}

//clearElement() avoids duplication of previously displayed elements.
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function renderLists() {
  _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.lists.forEach((list) => {
    const listElement = document.createElement("li");
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerText = list.name;
    if (list.id === _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value) {
      listElement.classList.add("active-list");
    }
    _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.listsContainer.appendChild(listElement);
  });
}

function renderTaskCount(selectedList) {
  const incompleteTaskCount = selectedList.tasks.filter(
    (task) => !task.complete
  ).length;
  const taskString = incompleteTaskCount === 1 ? "task" : "tasks";
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
}

function renderTasks(selectedList) {
  selectedList.tasks.forEach((task) => {
    const taskElement = document.importNode(_globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskTemplate.content, true);
    const checkbox = taskElement.querySelector("input");
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const taskNameLabel = taskElement.querySelector(".task-name-label");
    const taskNoteLabel = taskElement.querySelector(".task-note-label");
    const taskPriorityLabel = taskElement.querySelector(".task-priority-label");
    const taskDueDateLabel = taskElement.querySelector(".task-due-date-label");
    taskNameLabel.htmlFor = task.id;
    taskNoteLabel.htmlFor = task.id;
    taskPriorityLabel.htmlFor = task.id;
    taskDueDateLabel.htmlFor = task.id;
    taskNameLabel.append(task.name);
    taskNoteLabel.append(task.note);
    taskPriorityLabel.append(task.priority);
    taskDueDateLabel.append(task.dueDate);
    _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskContainer.appendChild(taskElement);
  });
}

function myFooter() {
  const footer = document.querySelector(".footer");
  footer.style.backgroundColor = "#333";
  footer.style.fontSize = "1rem";
  footer.style.color = "#f8afe5";
  footer.style.padding = "3px";
  footer.style.textAlign = "center";
  footer.style.position = "fixed";
  footer.style.width = "100%";
  footer.style.bottom = "0";
  footer.innerHTML = "LoptrSir";
}


/***/ }),

/***/ "./src/globalDeclarations.js":
/*!***********************************!*\
  !*** ./src/globalDeclarations.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearCompleteTasksButton: () => (/* binding */ clearCompleteTasksButton),
/* harmony export */   deleteListButton: () => (/* binding */ deleteListButton),
/* harmony export */   listTitleElement: () => (/* binding */ listTitleElement),
/* harmony export */   listsContainer: () => (/* binding */ listsContainer),
/* harmony export */   newListForm: () => (/* binding */ newListForm),
/* harmony export */   newListInput: () => (/* binding */ newListInput),
/* harmony export */   newTaskButton: () => (/* binding */ newTaskButton),
/* harmony export */   newTaskInput: () => (/* binding */ newTaskInput),
/* harmony export */   taskContainer: () => (/* binding */ taskContainer),
/* harmony export */   taskCountElement: () => (/* binding */ taskCountElement),
/* harmony export */   taskDisplayContainer: () => (/* binding */ taskDisplayContainer),
/* harmony export */   taskDueDateButton: () => (/* binding */ taskDueDateButton),
/* harmony export */   taskDueDateInput: () => (/* binding */ taskDueDateInput),
/* harmony export */   taskNoteButton: () => (/* binding */ taskNoteButton),
/* harmony export */   taskNoteInput: () => (/* binding */ taskNoteInput),
/* harmony export */   taskPriorityButton: () => (/* binding */ taskPriorityButton),
/* harmony export */   taskPriorityOptions: () => (/* binding */ taskPriorityOptions),
/* harmony export */   taskTemplate: () => (/* binding */ taskTemplate)
/* harmony export */ });
//TOP TODO List
//Global Declarations 

//globalDeclarations.js
const listsContainer = document.querySelector("[data-lists]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");
const taskDisplayContainer = document.querySelector("[data-task-display-container]");
const listTitleElement = document.querySelector("[data-list-title]");
const taskCountElement = document.querySelector("[data-task-count]");
const taskContainer = document.querySelector("[data-tasks]");
const taskTemplate = document.getElementById("task-template");
const newTaskButton = document.querySelector("[data-new-task-button]");
const newTaskInput = document.querySelector("[data-new-task-input]");
const taskNoteButton = document.querySelector("[data-task-notes-button]");
const taskNoteInput = document.querySelector("[data-task-note-input]");
const taskPriorityButton = document.querySelector("[data-task-priority-button]");
const taskPriorityOptions = document.querySelector(".task-priority-options");
const taskDueDateButton = document.querySelector("[data-task-due-date-button]");
const taskDueDateInput = document.querySelector("[data-task-due-date-input]");
const deleteListButton = document.querySelector("[data-delete-list-button]");
const clearCompleteTasksButton = document.querySelector("[data-clear-complete-tasks-button]");


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website2.js */ "./src/website2.js");
/* harmony import */ var _style2_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style2.css */ "./src/style2.css");



(0,_website2_js__WEBPACK_IMPORTED_MODULE_0__.website)();

console.log('WP entry index.js');

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCAL_STORAGE_LIST_KEY: () => (/* binding */ LOCAL_STORAGE_LIST_KEY),
/* harmony export */   LOCAL_STORAGE_SELECTED_LIST_ID_KEY: () => (/* binding */ LOCAL_STORAGE_SELECTED_LIST_ID_KEY),
/* harmony export */   lists: () => (/* binding */ lists),
/* harmony export */   selectedListId: () => (/* binding */ selectedListId)
/* harmony export */ });
//TOP TODO List

// Local Storage Elements
const LOCAL_STORAGE_LIST_KEY = "task.lists";
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = {value :localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)};


/***/ }),

/***/ "./src/website2.js":
/*!*************************!*\
  !*** ./src/website2.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   website: () => (/* binding */ website)
/* harmony export */ });
/* harmony import */ var _eventListeners2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners2.js */ "./src/eventListeners2.js");
/* harmony import */ var _functions2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions2.js */ "./src/functions2.js");
//TOP TODO List
//ToDo List

//Features to add in future:
//Filter Tasks: priority, dueDate, date added. Filter secondary by non dominate selection.
//Task: note, priority, and due date will not align-items: center without over riding ellipsis on note.
//Task functionality: add a single edit button to the entire task OR have edits on hover of each element?
//Priority:Color priority based on option selected. (place popup window in a better location. later)
//Calendar: Get dueDate displaying margin-right.
//.task-list: Explore spacing of task elements to the container instead of the body.
//Add Dark/Light display option.


//Website



function website() {
  _eventListeners2_js__WEBPACK_IMPORTED_MODULE_0__.setupEventListeners();
  (0,_functions2_js__WEBPACK_IMPORTED_MODULE_1__.defaultDisplay)();
  (0,_functions2_js__WEBPACK_IMPORTED_MODULE_1__.render)();
  (0,_functions2_js__WEBPACK_IMPORTED_MODULE_1__.myFooter)();
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0ZBQXdGLGNBQWMsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLGFBQWEsTUFBTSxZQUFZ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O0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWE7QUFDakIsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTEE7QUFDQTs7QUFFQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQmlDO0FBQ2xCOztBQUV0QixxREFBTzs7QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7QUFFQTtBQUNPO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNON0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUN1RDtBQUNZOztBQUU1RDtBQUNQLEVBQUUsb0VBQWtDO0FBQ3BDLEVBQUUsOERBQWM7QUFDaEIsRUFBRSxzREFBTTtBQUNSLEVBQUUsd0RBQVE7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvbGlzdC8uL3NyYy9zdHlsZTIuY3NzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vc3JjL3N0eWxlMi5jc3M/ZGEyYiIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL3NyYy9ldmVudExpc3RlbmVyczIuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vc3JjL2Z1bmN0aW9uczIuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vc3JjL2dsb2JhbERlY2xhcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9zcmMvd2Vic2l0ZTIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFRPUCBUT0RPIExpc3QgKi9cbi8qIFRPRE8gc3R5bGluZyAqL1xuXG46cm9vdCB7XG4gICAgLS1jbHItcHJpbWFyeTogcmdiKDIxMSwgMTQ5LCAyNDApO1xuICAgIC0tY2xyLWxpZ2h0OiAjZjRmNGY0O1xuICAgIC0tY2xyLWRhcms6ICMzMzM7XG4gICAgLS1jbHItd2FybmluZzogcmdiKDE0MCwgMTEsIDI0Nyk7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQ6XG4gICAgICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXInYXV0byBcIi4uLi4uLiBsaXN0cyBhY3RpdmUgLi4uLi4uXCJhdXRvIC8gMWZyIG1pbm1heCgxMDBweCwgMzAwcHgpIG1pbm1heCgyNTBweCwgNTAwcHgpIDFmcjtcbn1cblxuLnRpdGxlIHtcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBjYWxjKDN2dyArIDJyZW0pO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW46IC0wLjFlbSAwIDAuNWVtXG59XG5cbi5hbGwtbGlzdHMge1xuICAgIGdyaWQtYXJlYTogbGlzdHM7XG59XG5cbi5tYXN0ZXItbGlzdCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjFlbTtcbn1cblxuLmxpc3QtbmFtZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmxpc3QtbmFtZTpob3ZlciB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xuICAgIG1heC13aWR0aDogbm9uZTtcbn1cblxubGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5saTo6YmVmb3JlIHtcbiAgICAvKiBzdHlsZSBvZiB2aXNpYmxlIGJ1bGxldCBwb2ludCovXG4gICAgY29udGVudDogJ1xcXFwyMDIyJztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmxpOmhvdmVyOjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcbn1cblxuLmxpc3QtbmFtZTpob3ZlciB7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4vKiBkZWZhdWx0IHNldCBvZiBwYXJhbWV0ZXJzIGZvciBtb3N0IGJ1dHRvbnMgKi9cbi5idG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uYnRuLmNyZWF0ZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZ3JpZC1hcmVhOiBhY3RpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW47XG59XG5cbiNidG4tY3JlYXRlLXRhc2sge1xuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG59XG5cbi5idG46aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNDtcbn1cblxuLmJ0bi5kZWxldGUge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5idG4uZGVsZXRlOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLXdhcm5pbmcpO1xufVxuXG4ubmV3IHtcbiAgICBncmlkLWFyZWE6IGFjdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAxNTBtcyBlYXNlLWluO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogLjI1ZW07XG4gICAgb3JkZXI6IDI7XG4gICAgLyogYXBwbHlpbmcgZmxleCB0byA8Zm9ybT4gYWxsb3dzIG9yZGVyOiAyIHRvIGRpc3BsYXkgYnV0dG9uIGZpcnN0IGJ1dCBtYWludGFpbiBzZWNvbmQgcG9zaXRpb24gd2hlbiB1c2luZyB0YWIuICBXaHkgZG9lcyB0aGlzIG5vdCBpbXBhY3QgdGhlIGFkZCB0YXNrIGJ1dHRvbj8gKi9cbn1cblxuLm5ldzo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5uZXc6Zm9jdXMge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcbn1cblxuLm5ldzpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDAuMztcbn1cblxuLyogbWFpbnRhaW4gc3BhY2luZyBpZiBsb25nIGxpc3QgbmFtZSAqL1xuLm5ldy50YXNrIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5hY3RpdmUtbGlzdCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi50YXNrLWJvZHkgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50YXNrLWJ0biB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvcmRlcjogMztcbiAgICBncmlkLWFyZWE6IGFjdGl2ZTtcbiAgICBtYXJnaW46IC4yNWVtIC4yNWVtIC4yNWVtIC4yNWVtO1xufVxuXG4udGFzay1saXN0IHtcbiAgICAtLXNwYWNlcjogMS41cmVtO1xuICAgIGdyaWQtYXJlYTogYWN0aXZlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWNsci1kYXJrKTtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICAvKiBwcmV2ZW50cyBNeSBMaXN0cyBmcm9tIGNvbnRyb2xsaW5nIHNpemUgb2YgVGFzayBMaXN0ICovXG59XG5cbi50YXNrLWhlYWRlciB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcbiAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi8qIG1haW50YWluIHNwYWNpbmcgaWYgbG9uZyBsaXN0IG5hbWUgKi9cbi5saXN0LXRpdGxlIHtcbiAgICBtYXJnaW46IDAgMWVtIDA7XG59XG5cbi50YXNrLWNvdW50IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGFzay1ib2R5IHtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRhc2stdGVtcCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnRhc2stbmFtZS1sYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1ib3R0b206IC4xNWVtO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgLyogdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IE1VU1QgYmUgYWRqdXN0ZWQgaW4gSlMgZm9yIGVmZmVjdCovXG4gICAgZmxleDogMCAwIDMzJTtcbiAgICAvKiByZXNvbHZlcyBtYXgtd2lkdGggbm90IGhhdmluZyBhIG1pbiBzaXplIHdpdGggd2luZG93IHJlc2l6ZSAqL1xufVxuXG4udGFzay1ub3RlLWxhYmVsIHtcbiAgICBmbGV4OiAwIDAgMzUlO1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gICAgZm9udC1zaXplOiAuNmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnRhc2stbmFtZS1sYWJlbDpob3ZlciwgLnRhc2stbm90ZS1sYWJlbDpob3ZlciB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xuICAgIG1heC13aWR0aDogbm9uZTtcbn1cblxuLnRhc2stcHJpb3JpdHktbGFiZWwge1xuICAgIGZsZXg6IDAgMCAxMCU7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtc2l6ZTogLjZlbTtcbn1cblxuLnRhc2stZHVlLWRhdGUtbGFiZWwge1xuICAgIGZsZXg6IDAgMCAyMCU7XG4gICAgY29sb3I6IGJyb3duO1xuICAgIGZvbnQtc2l6ZTogLjZlbTtcbn1cblxuW3R5cGU9J2NoZWNrYm94J10ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4vKiB2aXNpYmxlIGNoZWNrYm94IHJhZGlvIGJ1dHRvbiAqL1xuLmN1c3RvbS1jaGVja2JveCB7XG4gICAgLS1zaXplOiAwLjc1ZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiB2YXIoLS1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgLyogcHJldmVudHMgc2hyaW5raW5nIHdpdGggbG9uZyB0YXNrIG5hbWUgKi9cbn1cblxuLyogLnRhc2stbmFtZS1sYWJlbDpob3ZlciAuY3VzdG9tLWNoZWNrYm94IHsgKi9cbi8qIGNoYW5naW5nIGZyb20gdGhlIGFib3ZlIGFsbG93cyB3aG9sZSBsaW5lIHRvIGhvdmVyKi9cbi50YXNrLXRlbXA6aG92ZXIgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG59XG5cblt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCsudGFzay1uYW1lLWxhYmVsIC5jdXN0b20tY2hlY2tib3gge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IDNweCB3aGl0ZTtcbn1cblxuW3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCsudGFzay1uYW1lLWxhYmVsIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi8qIG1hbmFnZXMgJ3Rhc2sgY29tcGxldGUnIHN0cmlrZSB0aHJvdWdoKi9cbi50YXNrLW5hbWUtbGFiZWw6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMS41ZW07XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cblt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQrLnRhc2stbmFtZS1sYWJlbDo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGluaXRpYWw7XG59XG5cbi5kZWxldGUtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IC0zMHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlMi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCO0FBQ2xCLGlCQUFpQjs7QUFFakI7SUFDSSxpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBRUE7OztJQUdJLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2I7OEhBQzBIO0FBQzlIOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLCtDQUErQztBQUMvQztJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFD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M0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVE9QIFRPRE8gTGlzdCAqL1xcbi8qIFRPRE8gc3R5bGluZyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1jbHItcHJpbWFyeTogcmdiKDIxMSwgMTQ5LCAyNDApO1xcbiAgICAtLWNsci1saWdodDogI2Y0ZjRmNDtcXG4gICAgLS1jbHItZGFyazogIzMzMztcXG4gICAgLS1jbHItd2FybmluZzogcmdiKDE0MCwgMTEsIDI0Nyk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gICAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6XFxuICAgICAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyJ2F1dG8gXFxcIi4uLi4uLiBsaXN0cyBhY3RpdmUgLi4uLi4uXFxcImF1dG8gLyAxZnIgbWlubWF4KDEwMHB4LCAzMDBweCkgbWlubWF4KDI1MHB4LCA1MDBweCkgMWZyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoM3Z3ICsgMnJlbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIG1hcmdpbjogLTAuMWVtIDAgMC41ZW1cXG59XFxuXFxuLmFsbC1saXN0cyB7XFxuICAgIGdyaWQtYXJlYTogbGlzdHM7XFxufVxcblxcbi5tYXN0ZXItbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS43O1xcbiAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxuICAgIHBhZGRpbmctbGVmdDogMS4xZW07XFxufVxcblxcbi5saXN0LW5hbWUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ubGlzdC1uYW1lOmhvdmVyIHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGNsaXA7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxpOjpiZWZvcmUge1xcbiAgICAvKiBzdHlsZSBvZiB2aXNpYmxlIGJ1bGxldCBwb2ludCovXFxuICAgIGNvbnRlbnQ6ICdcXFxcMjAyMic7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxubGk6aG92ZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuLmxpc3QtbmFtZTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIGRlZmF1bHQgc2V0IG9mIHBhcmFtZXRlcnMgZm9yIG1vc3QgYnV0dG9ucyAqL1xcbi5idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5idG4uY3JlYXRlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGdyaWQtYXJlYTogYWN0aXZlO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4jYnRuLWNyZWF0ZS10YXNrIHtcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNDtcXG59XFxuXFxuLmJ0bi5kZWxldGUge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5idG4uZGVsZXRlOmhvdmVyIHtcXG4gICAgY29sb3I6IHZhcigtLWNsci13YXJuaW5nKTtcXG59XFxuXFxuLm5ldyB7XFxuICAgIGdyaWQtYXJlYTogYWN0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDE1MG1zIGVhc2UtaW47XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IC4yNWVtO1xcbiAgICBvcmRlcjogMjtcXG4gICAgLyogYXBwbHlpbmcgZmxleCB0byA8Zm9ybT4gYWxsb3dzIG9yZGVyOiAyIHRvIGRpc3BsYXkgYnV0dG9uIGZpcnN0IGJ1dCBtYWludGFpbiBzZWNvbmQgcG9zaXRpb24gd2hlbiB1c2luZyB0YWIuICBXaHkgZG9lcyB0aGlzIG5vdCBpbXBhY3QgdGhlIGFkZCB0YXNrIGJ1dHRvbj8gKi9cXG59XFxuXFxuLm5ldzo6cGxhY2Vob2xkZXIge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLm5ldzpmb2N1cyB7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcXG59XFxuXFxuLm5ldzpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi8qIG1haW50YWluIHNwYWNpbmcgaWYgbG9uZyBsaXN0IG5hbWUgKi9cXG4ubmV3LnRhc2sge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uYWN0aXZlLWxpc3Qge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50YXNrLWJvZHkgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stYnRuIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3JkZXI6IDM7XFxuICAgIGdyaWQtYXJlYTogYWN0aXZlO1xcbiAgICBtYXJnaW46IC4yNWVtIC4yNWVtIC4yNWVtIC4yNWVtO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gICAgLS1zcGFjZXI6IDEuNXJlbTtcXG4gICAgZ3JpZC1hcmVhOiBhY3RpdmU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICAvKiBwcmV2ZW50cyBNeSBMaXN0cyBmcm9tIGNvbnRyb2xsaW5nIHNpemUgb2YgVGFzayBMaXN0ICovXFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxuICAgIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLyogbWFpbnRhaW4gc3BhY2luZyBpZiBsb25nIGxpc3QgbmFtZSAqL1xcbi5saXN0LXRpdGxlIHtcXG4gICAgbWFyZ2luOiAwIDFlbSAwO1xcbn1cXG5cXG4udGFzay1jb3VudCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1ib2R5IHtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzay10ZW1wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stbmFtZS1sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuMTVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBmb250LXNpemU6IC44ZW07XFxuICAgIC8qIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyBNVVNUIGJlIGFkanVzdGVkIGluIEpTIGZvciBlZmZlY3QqL1xcbiAgICBmbGV4OiAwIDAgMzMlO1xcbiAgICAvKiByZXNvbHZlcyBtYXgtd2lkdGggbm90IGhhdmluZyBhIG1pbiBzaXplIHdpdGggd2luZG93IHJlc2l6ZSAqL1xcbn1cXG5cXG4udGFzay1ub3RlLWxhYmVsIHtcXG4gICAgZmxleDogMCAwIDM1JTtcXG4gICAgY29sb3I6IHB1cnBsZTtcXG4gICAgZm9udC1zaXplOiAuNmVtO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLnRhc2stbmFtZS1sYWJlbDpob3ZlciwgLnRhc2stbm90ZS1sYWJlbDpob3ZlciB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7XFxufVxcblxcbi50YXNrLXByaW9yaXR5LWxhYmVsIHtcXG4gICAgZmxleDogMCAwIDEwJTtcXG4gICAgY29sb3I6IGdyZWVuO1xcbiAgICBmb250LXNpemU6IC42ZW07XFxufVxcblxcbi50YXNrLWR1ZS1kYXRlLWxhYmVsIHtcXG4gICAgZmxleDogMCAwIDIwJTtcXG4gICAgY29sb3I6IGJyb3duO1xcbiAgICBmb250LXNpemU6IC42ZW07XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4vKiB2aXNpYmxlIGNoZWNrYm94IHJhZGlvIGJ1dHRvbiAqL1xcbi5jdXN0b20tY2hlY2tib3gge1xcbiAgICAtLXNpemU6IDAuNzVlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIC8qIHByZXZlbnRzIHNocmlua2luZyB3aXRoIGxvbmcgdGFzayBuYW1lICovXFxufVxcblxcbi8qIC50YXNrLW5hbWUtbGFiZWw6aG92ZXIgLmN1c3RvbS1jaGVja2JveCB7ICovXFxuLyogY2hhbmdpbmcgZnJvbSB0aGUgYWJvdmUgYWxsb3dzIHdob2xlIGxpbmUgdG8gaG92ZXIqL1xcbi50YXNrLXRlbXA6aG92ZXIgLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCsudGFzay1uYW1lLWxhYmVsIC5jdXN0b20tY2hlY2tib3gge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IDNweCB3aGl0ZTtcXG59XFxuXFxuW3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCsudGFzay1uYW1lLWxhYmVsIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4vKiBtYW5hZ2VzICd0YXNrIGNvbXBsZXRlJyBzdHJpa2UgdGhyb3VnaCovXFxuLnRhc2stbmFtZS1sYWJlbDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxLjVlbTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogM3B4O1xcbiAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuW3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCsudGFzay1uYW1lLWxhYmVsOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBpbml0aWFsO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgYm90dG9tOiAtMzBweDtcXG4gICAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlMi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlMi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vVE9QIFRPRE8gTGlzdFxuLy9FdmVudCBMaXN0ZW5lciBGdW5jdGlvbnNcblxuLy9JbXBvcnRzXG5pbXBvcnQge1xuICBuZXdMaXN0SW5wdXQsXG4gIG5ld1Rhc2tJbnB1dCxcbiAgdGFza05vdGVJbnB1dCxcbiAgdGFza1ByaW9yaXR5T3B0aW9ucyxcbiAgdGFza0R1ZURhdGVJbnB1dCxcbiAgbGlzdHNDb250YWluZXIsXG4gIG5ld0xpc3RGb3JtLFxuICB0YXNrQ29udGFpbmVyLFxuICBuZXdUYXNrQnV0dG9uLFxuICB0YXNrTm90ZUJ1dHRvbixcbiAgdGFza1ByaW9yaXR5QnV0dG9uLFxuICB0YXNrRHVlRGF0ZUJ1dHRvbixcbiAgZGVsZXRlTGlzdEJ1dHRvbixcbiAgY2xlYXJDb21wbGV0ZVRhc2tzQnV0dG9uLFxufSBmcm9tIFwiLi9nbG9iYWxEZWNsYXJhdGlvbnMuanNcIjtcblxuaW1wb3J0IHsgbGlzdHMgYXMgZGVmYXVsdExpc3RzLCBzZWxlY3RlZExpc3RJZCB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZS5qc1wiO1xubGV0IGxpc3RzID0gZGVmYXVsdExpc3RzO1xuXG5pbXBvcnQge1xuICBjcmVhdGVMaXN0LFxuICBjcmVhdGVUYXNrLFxuICBoaWRlVGFza0RldGFpbHMsXG4gIHJlc2V0UHJpb3JpdHlSYWRpb0J1dHRvbnMsXG4gIHRvZ2dsZUlucHV0RmllbGQsXG4gIGlzVmFsaWREYXRlLFxuICBzYXZlQW5kUmVuZGVyLFxuICBzYXZlLFxuICByZW5kZXJUYXNrQ291bnQsXG59IGZyb20gXCIuL2Z1bmN0aW9uczIuanNcIjtcblxuLy8gRXZlbnQgTGlzdGVuZXIgRnVuY3Rpb25zXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycygpIHtcbiAgbGlzdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUxpc3RzQ29udGFpbmVyKTtcbiAgdGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0NvbnRhaW5lcik7XG4gIG5ld0xpc3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVOZXdMaXN0Rm9ybSk7XG4gIG5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU5ld1Rhc2tGb3JtKTtcbiAgdGFza05vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRhc2tOb3RlQnV0dG9uKTtcbiAgdGFza1ByaW9yaXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVUYXNrUHJpb3JpdHlCdXR0b24pO1xuICB0YXNrRHVlRGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVGFza0R1ZURhdGVCdXR0b24pO1xuICBjbGVhckNvbXBsZXRlVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgaGFuZGxlQ2xlYXJDb21wbGV0ZVRhc2tzQnV0dG9uXG4gICk7XG4gIGRlbGV0ZUxpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZURlbGV0ZUxpc3RCdXR0b24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTGlzdHNDb250YWluZXIoZSkge1xuICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImxpXCIpIHtcbiAgICBzZWxlY3RlZExpc3RJZC52YWx1ZSA9IGUudGFyZ2V0LmRhdGFzZXQubGlzdElkO1xuICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVGFza0NvbnRhaW5lcihlKSB7XG4gIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIikge1xuICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQoKGxpc3QpID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkLnZhbHVlKTtcbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBzZWxlY3RlZExpc3QudGFza3MuZmluZChcbiAgICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSBlLnRhcmdldC5pZFxuICAgICk7XG4gICAgc2VsZWN0ZWRUYXNrLmNvbXBsZXRlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICBzYXZlKCk7XG4gICAgcmVuZGVyVGFza0NvdW50KHNlbGVjdGVkTGlzdCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU5ld0xpc3RGb3JtKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBsaXN0TmFtZSA9IG5ld0xpc3RJbnB1dC52YWx1ZTtcbiAgaWYgKGxpc3ROYW1lID09IG51bGwgfHwgbGlzdE5hbWUgPT0gXCJcIikgcmV0dXJuO1xuICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdChsaXN0TmFtZSk7XG4gIG5ld0xpc3RJbnB1dC52YWx1ZSA9IG51bGw7XG4gIGxpc3RzLnB1c2gobGlzdCk7XG4gIHNhdmVBbmRSZW5kZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU5ld1Rhc2tGb3JtKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0YXNrTmFtZSA9IG5ld1Rhc2tJbnB1dC52YWx1ZTtcbiAgaGlkZVRhc2tEZXRhaWxzKCk7XG4gIGlmICh0YXNrTmFtZSA9PSBudWxsIHx8IHRhc2tOYW1lID09IFwiXCIpIHJldHVybjtcbiAgY29uc3QgdGFza05vdGUgPSB0YXNrTm90ZUlucHV0LnZhbHVlO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPVxuICAgIHRhc2tQcmlvcml0eU9wdGlvbnMucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKT8udmFsdWUgfHxcbiAgICBcIlwiO1xuICBjb25zdCB0YXNrRHVlRGF0ZSA9IHRhc2tEdWVEYXRlSW5wdXQudmFsdWU7XG4gIGlmICghaXNWYWxpZERhdGUodGFza0R1ZURhdGUpKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgdmFsaWQgbW0vZGQveXlcIik7XG4gICAgdGFza0R1ZURhdGVJbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tOYW1lLCB0YXNrTm90ZSwgdGFza1ByaW9yaXR5LCB0YXNrRHVlRGF0ZSk7XG4gIG5ld1Rhc2tJbnB1dC52YWx1ZSA9IG51bGw7XG4gIHRhc2tOb3RlSW5wdXQudmFsdWUgPSBudWxsO1xuICB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlID0gbnVsbDtcbiAgcmVzZXRQcmlvcml0eVJhZGlvQnV0dG9ucyh0YXNrUHJpb3JpdHlPcHRpb25zKTtcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gbGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gc2VsZWN0ZWRMaXN0SWQudmFsdWUpO1xuICBzZWxlY3RlZExpc3QudGFza3MucHVzaCh0YXNrKTtcbiAgc2F2ZUFuZFJlbmRlcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVGFza05vdGVCdXR0b24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZ2dsZUlucHV0RmllbGQodGFza05vdGVJbnB1dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUYXNrUHJpb3JpdHlCdXR0b24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZ2dsZUlucHV0RmllbGQodGFza1ByaW9yaXR5T3B0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUYXNrRHVlRGF0ZUJ1dHRvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdG9nZ2xlSW5wdXRGaWVsZCh0YXNrRHVlRGF0ZUlucHV0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNsZWFyQ29tcGxldGVUYXNrc0J1dHRvbihlKSB7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQoKGxpc3QpID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkLnZhbHVlKTtcbiAgc2VsZWN0ZWRMaXN0LnRhc2tzID0gc2VsZWN0ZWRMaXN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGUpO1xuICBzYXZlQW5kUmVuZGVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVEZWxldGVMaXN0QnV0dG9uKGUpIHtcbiAgLy8gbGlzdHMgPSBsaXN0cy5maWx0ZXIoKGxpc3QpID0+IGxpc3QuaWQgIT09IHNlbGVjdGVkTGlzdElkLnZhbHVlKTtcbiAgLy8qKioqKnVzZSBzcGxpY2UgZWRpdHMgb3JpZ2luYWwgbGlzdHMgaW4gZ2xvYmFsRGVjbGFyYXRpb25zLiBmaWx0ZXIgd29ya3Mgb24gbG9jYWwgbGlzdHMgZGVjbGFyZWQgYWZ0ZXIgaW1wb3J0LioqKioqXG4gIGxpc3RzLnNwbGljZShcbiAgICBsaXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkLnZhbHVlKSxcbiAgICAxXG4gICk7XG4gIHNlbGVjdGVkTGlzdElkLnZhbHVlID0gbnVsbDtcbiAgc2F2ZUFuZFJlbmRlcigpO1xufVxuIiwiLy9UT1AgVE9ETyBMaXN0XG5cbi8vSW1wb3J0c1xuaW1wb3J0IHtcbiAgbGlzdHNDb250YWluZXIsXG4gIHRhc2tEaXNwbGF5Q29udGFpbmVyLFxuICBsaXN0VGl0bGVFbGVtZW50LFxuICB0YXNrQ291bnRFbGVtZW50LFxuICB0YXNrQ29udGFpbmVyLFxuICB0YXNrVGVtcGxhdGUsXG4gIHRhc2tOb3RlSW5wdXQsXG4gIHRhc2tQcmlvcml0eU9wdGlvbnMsXG4gIHRhc2tEdWVEYXRlSW5wdXQsXG59IGZyb20gXCIuL2dsb2JhbERlY2xhcmF0aW9ucy5qc1wiO1xuXG5pbXBvcnQge1xuICBMT0NBTF9TVE9SQUdFX0xJU1RfS0VZLFxuICBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0xJU1RfSURfS0VZLFxuICBsaXN0cyxcbiAgc2VsZWN0ZWRMaXN0SWQsXG59IGZyb20gXCIuL2xvY2FsU3RvcmFnZS5qc1wiO1xuXG4vL0Z1bmN0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHREaXNwbGF5KCkge1xuICBpZiAobGlzdHMubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZGVmYXVsdExpc3ROYW1lID0gXCJFeGFtcGxlIFRvRG8gTGlzdFwiO1xuICAgIGNvbnN0IGRlZmF1bHRMaXN0ID0gY3JlYXRlTGlzdChkZWZhdWx0TGlzdE5hbWUpO1xuICAgIGRlZmF1bHRMaXN0LnRhc2tzLnB1c2goXG4gICAgICBjcmVhdGVUYXNrKFwiRGVmYXVsdCBUYXNrIDFcIiwgXCJNYWtlIGEgbm90ZVwiLCBcIkhpZ2hcIiwgXCIwMi8yOS8yNFwiKVxuICAgICk7XG4gICAgZGVmYXVsdExpc3QudGFza3MucHVzaChjcmVhdGVUYXNrKFwiRGVmYXVsdCBUYXNrIDJcIiwgXCJUaGlzIGlzIGEgbm90ZS5cIikpO1xuICAgIGRlZmF1bHRMaXN0LnRhc2tzLnB1c2goY3JlYXRlVGFzayhcIkRlZmF1bHQgVGFzayAzXCIsIFwiXCIsIFwibG93XCIpKTtcbiAgICBsaXN0cy5wdXNoKGRlZmF1bHRMaXN0KTtcbiAgICBzZWxlY3RlZExpc3RJZC52YWx1ZSA9IGRlZmF1bHRMaXN0LmlkO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KG5hbWUpIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgdGFza3M6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lLCBub3RlLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICByZXR1cm4ge1xuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgbmFtZTogbmFtZSxcbiAgICBub3RlOiBub3RlIHx8IFwiXCIsXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5IHx8IFwiXCIsXG4gICAgZHVlRGF0ZTogZHVlRGF0ZSB8fCBcIlwiLFxuICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVUYXNrRGV0YWlscygpIHtcbiAgdGFza05vdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHRhc2tQcmlvcml0eU9wdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB0YXNrRHVlRGF0ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0UHJpb3JpdHlSYWRpb0J1dHRvbnMoY29udGFpbmVyKSB7XG4gIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcbiAgcmFkaW9CdXR0b25zLmZvckVhY2goKHJhZGlvQnV0dG9uKSA9PiB7XG4gICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IGZhbHNlO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUlucHV0RmllbGQoaW5wdXRGaWVsZCkge1xuICBpZiAoaW5wdXRGaWVsZC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICBpbnB1dEZpZWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dEZpZWxkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgaW5wdXRGaWVsZC5mb2N1cygpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRGF0ZShkYXRlU3RyaW5nKSB7XG4gIGlmIChkYXRlU3RyaW5nID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgZGF0ZVBhdHRlcm4gPSAvXigwWzEtOV18MVswLTJdKVxcLygwWzEtOV18WzEyXVxcZHwzWzAxXSlcXC9cXGR7Mn0kLztcbiAgaWYgKCFkYXRlUGF0dGVybi50ZXN0KGRhdGVTdHJpbmcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IFttb250aCwgZGF5LCB5ZWFyXSA9IGRhdGVTdHJpbmcuc3BsaXQoXCIvXCIpLm1hcChOdW1iZXIpO1xuICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICBpZiAoZGF5IDwgMSB8fCBkYXkgPiBkYXlzSW5Nb250aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoeWVhciA8IDAgfHwgeWVhciA+IDk5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUFuZFJlbmRlcigpIHtcbiAgc2F2ZSgpO1xuICByZW5kZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmUoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVF9LRVksIEpTT04uc3RyaW5naWZ5KGxpc3RzKSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfU0VMRUNURURfTElTVF9JRF9LRVksIHNlbGVjdGVkTGlzdElkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgY2xlYXJFbGVtZW50KGxpc3RzQ29udGFpbmVyKTtcbiAgcmVuZGVyTGlzdHMoKTtcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gbGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gc2VsZWN0ZWRMaXN0SWQudmFsdWUpO1xuICBpZiAoc2VsZWN0ZWRMaXN0SWQudmFsdWUgPT0gbnVsbCkge1xuICAgIHRhc2tEaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSBlbHNlIHtcbiAgICB0YXNrRGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGxpc3RUaXRsZUVsZW1lbnQuaW5uZXJUZXh0ID0gc2VsZWN0ZWRMaXN0Lm5hbWU7XG4gICAgcmVuZGVyVGFza0NvdW50KHNlbGVjdGVkTGlzdCk7XG4gICAgY2xlYXJFbGVtZW50KHRhc2tDb250YWluZXIpO1xuICAgIHJlbmRlclRhc2tzKHNlbGVjdGVkTGlzdCk7XG4gIH1cbn1cblxuLy9jbGVhckVsZW1lbnQoKSBhdm9pZHMgZHVwbGljYXRpb24gb2YgcHJldmlvdXNseSBkaXNwbGF5ZWQgZWxlbWVudHMuXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpc3RzKCkge1xuICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGlzdEVsZW1lbnQuZGF0YXNldC5saXN0SWQgPSBsaXN0LmlkO1xuICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsaXN0LW5hbWVcIik7XG4gICAgbGlzdEVsZW1lbnQuaW5uZXJUZXh0ID0gbGlzdC5uYW1lO1xuICAgIGlmIChsaXN0LmlkID09PSBzZWxlY3RlZExpc3RJZC52YWx1ZSkge1xuICAgICAgbGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1saXN0XCIpO1xuICAgIH1cbiAgICBsaXN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0RWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza0NvdW50KHNlbGVjdGVkTGlzdCkge1xuICBjb25zdCBpbmNvbXBsZXRlVGFza0NvdW50ID0gc2VsZWN0ZWRMaXN0LnRhc2tzLmZpbHRlcihcbiAgICAodGFzaykgPT4gIXRhc2suY29tcGxldGVcbiAgKS5sZW5ndGg7XG4gIGNvbnN0IHRhc2tTdHJpbmcgPSBpbmNvbXBsZXRlVGFza0NvdW50ID09PSAxID8gXCJ0YXNrXCIgOiBcInRhc2tzXCI7XG4gIHRhc2tDb3VudEVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7aW5jb21wbGV0ZVRhc2tDb3VudH0gJHt0YXNrU3RyaW5nfSByZW1haW5pbmdgO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrcyhzZWxlY3RlZExpc3QpIHtcbiAgc2VsZWN0ZWRMaXN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGFza1RlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LmlkID0gdGFzay5pZDtcbiAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZTtcbiAgICBjb25zdCB0YXNrTmFtZUxhYmVsID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLW5hbWUtbGFiZWxcIik7XG4gICAgY29uc3QgdGFza05vdGVMYWJlbCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1ub3RlLWxhYmVsXCIpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXByaW9yaXR5LWxhYmVsXCIpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlTGFiZWwgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZHVlLWRhdGUtbGFiZWxcIik7XG4gICAgdGFza05hbWVMYWJlbC5odG1sRm9yID0gdGFzay5pZDtcbiAgICB0YXNrTm90ZUxhYmVsLmh0bWxGb3IgPSB0YXNrLmlkO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsLmh0bWxGb3IgPSB0YXNrLmlkO1xuICAgIHRhc2tEdWVEYXRlTGFiZWwuaHRtbEZvciA9IHRhc2suaWQ7XG4gICAgdGFza05hbWVMYWJlbC5hcHBlbmQodGFzay5uYW1lKTtcbiAgICB0YXNrTm90ZUxhYmVsLmFwcGVuZCh0YXNrLm5vdGUpO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsLmFwcGVuZCh0YXNrLnByaW9yaXR5KTtcbiAgICB0YXNrRHVlRGF0ZUxhYmVsLmFwcGVuZCh0YXNrLmR1ZURhdGUpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG15Rm9vdGVyKCkge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3RlclwiKTtcbiAgZm9vdGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzMzM1wiO1xuICBmb290ZXIuc3R5bGUuZm9udFNpemUgPSBcIjFyZW1cIjtcbiAgZm9vdGVyLnN0eWxlLmNvbG9yID0gXCIjZjhhZmU1XCI7XG4gIGZvb3Rlci5zdHlsZS5wYWRkaW5nID0gXCIzcHhcIjtcbiAgZm9vdGVyLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGZvb3Rlci5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgZm9vdGVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gIGZvb3Rlci5zdHlsZS5ib3R0b20gPSBcIjBcIjtcbiAgZm9vdGVyLmlubmVySFRNTCA9IFwiTG9wdHJTaXJcIjtcbn1cbiIsIi8vVE9QIFRPRE8gTGlzdFxuLy9HbG9iYWwgRGVjbGFyYXRpb25zIFxuXG4vL2dsb2JhbERlY2xhcmF0aW9ucy5qc1xuZXhwb3J0IGNvbnN0IGxpc3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWxpc3RzXVwiKTtcbmV4cG9ydCBjb25zdCBuZXdMaXN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctbGlzdC1mb3JtXVwiKTtcbmV4cG9ydCBjb25zdCBuZXdMaXN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LWxpc3QtaW5wdXRdXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tEaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2stZGlzcGxheS1jb250YWluZXJdXCIpO1xuZXhwb3J0IGNvbnN0IGxpc3RUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbGlzdC10aXRsZV1cIik7XG5leHBvcnQgY29uc3QgdGFza0NvdW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrLWNvdW50XVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2tzXVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stdGVtcGxhdGVcIik7XG5leHBvcnQgY29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdGFzay1idXR0b25dXCIpO1xuZXhwb3J0IGNvbnN0IG5ld1Rhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdGFzay1pbnB1dF1cIik7XG5leHBvcnQgY29uc3QgdGFza05vdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFzay1ub3Rlcy1idXR0b25dXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tOb3RlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFzay1ub3RlLWlucHV0XVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrUHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFzay1wcmlvcml0eS1idXR0b25dXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tQcmlvcml0eU9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stcHJpb3JpdHktb3B0aW9uc1wiKTtcbmV4cG9ydCBjb25zdCB0YXNrRHVlRGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrLWR1ZS1kYXRlLWJ1dHRvbl1cIik7XG5leHBvcnQgY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrLWR1ZS1kYXRlLWlucHV0XVwiKTtcbmV4cG9ydCBjb25zdCBkZWxldGVMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWRlbGV0ZS1saXN0LWJ1dHRvbl1cIik7XG5leHBvcnQgY29uc3QgY2xlYXJDb21wbGV0ZVRhc2tzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNsZWFyLWNvbXBsZXRlLXRhc2tzLWJ1dHRvbl1cIik7XG4iLCJpbXBvcnQgeyB3ZWJzaXRlIH0gZnJvbSAnLi93ZWJzaXRlMi5qcyc7XG5pbXBvcnQgJy4vc3R5bGUyLmNzcyc7XG5cbndlYnNpdGUoKTtcblxuY29uc29sZS5sb2coJ1dQIGVudHJ5IGluZGV4LmpzJyk7IiwiLy9UT1AgVE9ETyBMaXN0XG5cbi8vIExvY2FsIFN0b3JhZ2UgRWxlbWVudHNcbmV4cG9ydCBjb25zdCBMT0NBTF9TVE9SQUdFX0xJU1RfS0VZID0gXCJ0YXNrLmxpc3RzXCI7XG5leHBvcnQgY29uc3QgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9MSVNUX0lEX0tFWSA9IFwidGFzay5zZWxlY3RlZExpc3RJZFwiO1xuZXhwb3J0IGxldCBsaXN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSkpIHx8IFtdO1xuZXhwb3J0IGxldCBzZWxlY3RlZExpc3RJZCA9IHt2YWx1ZSA6bG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9MSVNUX0lEX0tFWSl9O1xuIiwiLy9UT1AgVE9ETyBMaXN0XG4vL1RvRG8gTGlzdFxuXG4vL0ZlYXR1cmVzIHRvIGFkZCBpbiBmdXR1cmU6XG4vL0ZpbHRlciBUYXNrczogcHJpb3JpdHksIGR1ZURhdGUsIGRhdGUgYWRkZWQuIEZpbHRlciBzZWNvbmRhcnkgYnkgbm9uIGRvbWluYXRlIHNlbGVjdGlvbi5cbi8vVGFzazogbm90ZSwgcHJpb3JpdHksIGFuZCBkdWUgZGF0ZSB3aWxsIG5vdCBhbGlnbi1pdGVtczogY2VudGVyIHdpdGhvdXQgb3ZlciByaWRpbmcgZWxsaXBzaXMgb24gbm90ZS5cbi8vVGFzayBmdW5jdGlvbmFsaXR5OiBhZGQgYSBzaW5nbGUgZWRpdCBidXR0b24gdG8gdGhlIGVudGlyZSB0YXNrIE9SIGhhdmUgZWRpdHMgb24gaG92ZXIgb2YgZWFjaCBlbGVtZW50P1xuLy9Qcmlvcml0eTpDb2xvciBwcmlvcml0eSBiYXNlZCBvbiBvcHRpb24gc2VsZWN0ZWQuIChwbGFjZSBwb3B1cCB3aW5kb3cgaW4gYSBiZXR0ZXIgbG9jYXRpb24uIGxhdGVyKVxuLy9DYWxlbmRhcjogR2V0IGR1ZURhdGUgZGlzcGxheWluZyBtYXJnaW4tcmlnaHQuXG4vLy50YXNrLWxpc3Q6IEV4cGxvcmUgc3BhY2luZyBvZiB0YXNrIGVsZW1lbnRzIHRvIHRoZSBjb250YWluZXIgaW5zdGVhZCBvZiB0aGUgYm9keS5cbi8vQWRkIERhcmsvTGlnaHQgZGlzcGxheSBvcHRpb24uXG5cblxuLy9XZWJzaXRlXG5pbXBvcnQgKiBhcyBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyczIuanNcIjtcbmltcG9ydCB7IHJlbmRlciwgbXlGb290ZXIsIGRlZmF1bHREaXNwbGF5IH0gZnJvbSBcIi4vZnVuY3Rpb25zMi5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gd2Vic2l0ZSgpIHtcbiAgZXZlbnRMaXN0ZW5lcnMuc2V0dXBFdmVudExpc3RlbmVycygpO1xuICBkZWZhdWx0RGlzcGxheSgpO1xuICByZW5kZXIoKTtcbiAgbXlGb290ZXIoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==