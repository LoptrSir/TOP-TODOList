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

/*why this doesn't this work. when applying the style to each individual element does?... <.task-name-label,.notes-label, .priority-label,.due-date-label { display: flex;align-items: center;}> */

/* style2.css */
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

.new.task::placeholder {
    opacity: 0.5;
}

.new:focus {
    border-bottom-width: 3px;
}

.new:focus::placeholder {
    opacity: 0.6;
}

.new.task {
    width: 50%;
    margin-bottom: 0;
}

.active-list {
    font-weight: bold;
    font-size: 1.3rem;
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

.list-title {
    margin: 0 1em 0;
    /* maintain spacing if long list name */
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
    /* text-overflow: ellipsis; MUST be adjusted in JS for effect*/
    /* max-width: calc(100% - 300px);*/
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
}`, "",{"version":3,"sources":["webpack://./src/style2.css"],"names":[],"mappings":"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","sourcesContent":["/* TOP TODO List */\n/* TODO styling */\n\n/*why this doesn't this work. when applying the style to each individual element does?... <.task-name-label,.notes-label, .priority-label,.due-date-label { display: flex;align-items: center;}> */\n\n/* style2.css */\n:root {\n    --clr-primary: rgb(211, 149, 240);\n    --clr-light: #f4f4f4;\n    --clr-dark: #333;\n    --clr-warning: rgb(140, 11, 247);\n}\n\n*,\n*::before,\n*::after {\n    font-family: inherit;\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Work Sans', sans-serif;\n    font-weight: 300;\n    font-size: 1.5rem;\n    background-color: var(--clr-primary);\n    color: var(--clr-light);\n    display: grid;\n    grid:\n        'header header header header'auto \"...... lists active ......\"auto / 1fr minmax(100px, 300px) minmax(250px, 500px) 1fr;\n}\n\n.title {\n    grid-area: header;\n    text-align: center;\n    font-size: calc(3vw + 2rem);\n    font-weight: 900;\n    color: rgba(0, 0, 0, 0.2);\n    margin: -0.1em 0 0.5em\n}\n\n.all-lists {\n    grid-area: lists;\n}\n\n.master-list {\n    font-size: 1.2rem;\n    line-height: 1.7;\n    list-style: circle;\n    padding-left: 1.1em;\n}\n\n.list-name {\n    cursor: pointer;\n\n}\n\nli {\n    list-style: none;\n    position: relative;\n}\n\nli::before {\n    /* style of visible bullet point*/\n    content: '\\2022';\n    display: inline-block;\n}\n\nli:hover::before {\n    transform: scale(1.3);\n}\n\n.list-name:hover {\n    opacity: 0.7;\n}\n\nform {\n    display: flex;\n}\n\n/* default set of parameters for most buttons */\n.btn {\n    cursor: pointer;\n    background: 0;\n    border: 0;\n    padding: 0;\n    color: inherit;\n}\n\n.btn.create {\n    font-size: 1.5rem;\n    grid-area: active;\n    font-weight: 900;\n    margin-right: 0.25em;\n    transition: opacity 250ms ease-in;\n}\n\n#btn-create-task {\n    color: var(--clr-primary);\n}\n\n.task-body form {\n    display: flex;\n    justify-content: space-between;\n}\n\n.task-btn {\n    align-items: center;\n    order: 3;\n    grid-area: active;\n    margin: .25em .25em .25em .25em;\n}\n\n.btn:hover {\n    opacity: 0.4;\n}\n\n.btn.delete {\n    font-weight: 700;\n    letter-spacing: 1px;\n    font-size: 1rem;\n}\n\n.btn.delete:hover {\n    color: var(--clr-warning);\n}\n\n.new {\n    grid-area: active;\n    background: transparent;\n    border: 0;\n    color: inherit;\n    border-bottom: 1px solid currentColor;\n    font-size: 1rem;\n    transition: border-bottom 150ms ease-in;\n    outline: none;\n    padding: .25em;\n    order: 2;\n    /* applying flex to <form> allows order: 2 to display button first but maintain second position when using tab.  Why does this not impact the add task button? */\n}\n\n.new.task::placeholder {\n    opacity: 0.5;\n}\n\n.new:focus {\n    border-bottom-width: 3px;\n}\n\n.new:focus::placeholder {\n    opacity: 0.6;\n}\n\n.new.task {\n    width: 50%;\n    margin-bottom: 0;\n}\n\n.active-list {\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n\n.task-list {\n    --spacer: 1.5rem;\n    grid-area: active;\n    background: var(--clr-light);\n    color: var(--clr-dark);\n    align-self: start;\n    /* prevents My Lists from controlling size of Task List */\n}\n\n.task-header {\n    padding: var(--spacer);\n    background: #e4e4e4;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.list-title {\n    margin: 0 1em 0;\n    /* maintain spacing if long list name */\n}\n\n.task-count {\n    margin: 0;\n    font-size: 1rem;\n}\n\n.task-body {\n    padding: var(--spacer);\n    position: relative;\n}\n\n.task-temp {\n    display: flex;\n}\n\n.task-name-label {\n    position: relative;\n    align-items: center;\n    cursor: pointer;\n    margin-bottom: .15em;\n    margin-right: auto;\n    display: flex;\n    overflow: hidden;\n    white-space: nowrap;\n    /* text-overflow: ellipsis; MUST be adjusted in JS for effect*/\n    /* max-width: calc(100% - 300px);*/\n    flex: 0 0 33%;\n    /* resolves max-width not having a min size with window resize */\n}\n\n.task-note-label {\n    flex: 0 0 35%;\n    color: purple;\n    font-size: .6em;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.task-name-label:hover, .task-note-label:hover {\n    overflow: visible;\n    white-space: normal;\n    text-overflow: clip;\n    max-width: none;\n}\n\n.task-priority-label {\n    flex: 0 0 10%;\n    color: green;\n    font-size: .6em;\n}\n\n.task-due-date-label {\n    flex: 0 0 20%;\n    color: brown;\n    font-size: .6em;\n}\n\n[type='checkbox'] {\n    opacity: 0;\n    position: absolute;\n}\n\n/* visible checkbox radio button */\n.custom-checkbox {\n    --size: 0.75em;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    margin-right: var(--size);\n    cursor: pointer;\n    border: 2px solid currentColor;\n    border-radius: 50%;\n    transform: scale(1);\n    transition: transform 200ms ease-in-out;\n    flex-shrink: 0;\n    /* prevents shrinking with long task name */\n}\n\n/* .task-name-label:hover .custom-checkbox { */\n/* changing from the above allows whole line to hover*/\n.task-temp:hover .custom-checkbox {\n    transform: scale(1.2);\n    color: var(--clr-primary);\n}\n\n[type=\"checkbox\"]:checked+.task-name-label .custom-checkbox {\n    background: var(--clr-primary);\n    border-color: var(--clr-primary);\n    box-shadow: inset 0 0 0px 3px white;\n}\n\n[type='checkbox']:checked+.task-name-label {\n    opacity: 0.5;\n}\n\n/* manages 'task complete' strike through*/\n.task-name-label::after {\n    content: '';\n    position: absolute;\n    left: 1.5em;\n    right: 0;\n    height: 3px;\n    background: currentColor;\n    transform: scaleX(0);\n    transform-origin: center;\n    transition: transform 200ms ease-in-out;\n}\n\n[type='checkbox']:checked+.task-name-label::after {\n    transform: scaleX(1);\n    transform-origin: initial;\n}\n\n.delete-buttons {\n    display: flex;\n    justify-content: space-evenly;\n    position: absolute;\n    width: 100%;\n    left: 0;\n    bottom: -30px;\n    color: var(--clr-light);\n}"],"sourceRoot":""}]);
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
/* harmony export */   handleTaskPriorityButton: () => (/* binding */ handleTaskPriorityButton)
/* harmony export */ });
/* harmony import */ var _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalDeclarations.js */ "./src/globalDeclarations.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");
/* harmony import */ var _functions2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions2.js */ "./src/functions2.js");
//TOP TODO List
//Event Listener Functions

//eventListeners2.js

//Imports




let lists = _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.lists;



console.log("EL2 sli:", _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId);

// Event Listener Functions
function handleListsContainer(e) {
  if (e.target.tagName.toLowerCase() === "li") {
    _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value = e.target.dataset.listId;
    console.log("EL F hlc sli:", _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId);
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
  // console.log('EL newListFormNAME:', list);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.newListInput.value = null;
  lists.push(list);
  console.log("EL newListFormNAME:", list);
  console.log("EL newListFormARRAY:", lists);
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
  const dueDate = _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskDueDateInput.value;
  console.log("EL nTF date value:", dueDate);
  if (!(0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.isValidDate)(dueDate)) {
    alert("Please enter valid mm/dd/yy");
    _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskDueDateInput.value = null;
    return;
  }
  const task = (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.createTask)(taskName, taskNote, taskPriority, dueDate);
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

function handleClearCompleteTasksButton (e) {
  const selectedList = lists.find((list) => list.id === _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value);
  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
  (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.saveAndRender)();
};

function handleDeleteListButton (e) {
  console.log("EL dlb pre:", lists);
  // lists = lists.filter((list) => list.id !== selectedListId.value);
  //*****using splice instead of filter edits to origin lists in globalDeclarations instead of local lists declared after import.*****
  lists.splice(lists.findIndex(list => list.id === _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value), 1);
  console.log("EL dlb:", lists);
  console.log("EL dlb sli:", _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId);
  _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value = null;
  console.log("EL dlb sli null:", _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId);
  console.log("EL dlb null:", lists);
  (0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.saveAndRender)();
};

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
/* harmony export */   hideTaskDetails: () => (/* binding */ hideTaskDetails),
/* harmony export */   isValidDate: () => (/* binding */ isValidDate),
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
//Functions

//functions2.js

//Imports




//Functions
function createList(name) {
  console.log("F createList:", name);
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
  console.log("F save lists pre:", _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.lists);
  localStorage.setItem(_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_LIST_KEY, JSON.stringify(_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.lists));
  console.log("F save lists:", _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.lists);
  console.log("F save sli null:", _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId);
  localStorage.setItem(_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE_SELECTED_LIST_ID_KEY, _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId);
  console.log("F save sli null post:", _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId);
}

function render() {
  clearElement(_globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.listsContainer);
  renderLists();
  const selectedList = _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.lists.find((list) => list.id === _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value);
  if (_localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId.value == null) {
    _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskDisplayContainer.style.display = "none";
  } else {
    console.log("F render sl:", selectedList);
    _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskDisplayContainer.style.display = "block";
    _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.listTitleElement.innerText = selectedList.name;
    renderTaskCount(selectedList);
    clearElement(_globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskContainer);
    renderTasks(selectedList);
  }
}

//clearElement avoids duplication of previously displayed items
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
    console.log("F rl sli:", _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.selectedListId);
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
//Local Storage:

//localStorage.js

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
/* harmony import */ var _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalDeclarations.js */ "./src/globalDeclarations.js");
/* harmony import */ var _eventListeners2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners2.js */ "./src/eventListeners2.js");
/* harmony import */ var _functions2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions2.js */ "./src/functions2.js");
//TOP TODO List
//ToDo List

//To Work On:
//Filter Tasks: priority, dueDate, date added. Filter secondary by non dominate selection.
//Task: note, priority, and due date will not align-items: center without over riding ellipsis on note.
//Task functionality: add a single edit button to the entire task OR have edits on hover of each element?
//Priority:Color priority based on option selected. (place popup window in a better location. later)
//Calendar: Get dueDate displaying margin-right.
//To ponder at a future date:
//.task-list: Explore spacing of task elements to the container instead of the body.
//Add Dark/Light display option.


//website2.js







function setupEventListeners() {
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.listsContainer.addEventListener("click", _eventListeners2_js__WEBPACK_IMPORTED_MODULE_1__.handleListsContainer);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskContainer.addEventListener("click", _eventListeners2_js__WEBPACK_IMPORTED_MODULE_1__.handleTaskContainer);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.newListForm.addEventListener("click", _eventListeners2_js__WEBPACK_IMPORTED_MODULE_1__.handleNewListForm);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.newTaskButton.addEventListener("click", _eventListeners2_js__WEBPACK_IMPORTED_MODULE_1__.handleNewTaskForm);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskNoteButton.addEventListener("click", _eventListeners2_js__WEBPACK_IMPORTED_MODULE_1__.handleTaskNoteButton);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskPriorityButton.addEventListener("click", _eventListeners2_js__WEBPACK_IMPORTED_MODULE_1__.handleTaskPriorityButton);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.taskDueDateButton.addEventListener("click", _eventListeners2_js__WEBPACK_IMPORTED_MODULE_1__.handleTaskDueDateButton);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.clearCompleteTasksButton.addEventListener("click", _eventListeners2_js__WEBPACK_IMPORTED_MODULE_1__.handleClearCompleteTasksButton);
  _globalDeclarations_js__WEBPACK_IMPORTED_MODULE_0__.deleteListButton.addEventListener("click",_eventListeners2_js__WEBPACK_IMPORTED_MODULE_1__.handleDeleteListButton);
}
setupEventListeners();

function website() {
(0,_functions2_js__WEBPACK_IMPORTED_MODULE_2__.render)();
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7O0FBRUEsNEpBQTRKLGNBQWMscUJBQXFCOztBQUUvTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx3RkFBd0YsY0FBYyxjQUFjLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxpT0FBaU8sY0FBYyxxQkFBcUIsaUNBQWlDLHdDQUF3QywyQkFBMkIsdUJBQXVCLHVDQUF1QyxHQUFHLDhCQUE4QiwyQkFBMkIsNkJBQTZCLEdBQUcsVUFBVSxnQkFBZ0IsMkNBQTJDLHVCQUF1Qix3QkFBd0IsMkNBQTJDLDhCQUE4QixvQkFBb0IsOElBQThJLEdBQUcsWUFBWSx3QkFBd0IseUJBQXlCLGtDQUFrQyx1QkFBdUIsZ0NBQWdDLCtCQUErQixnQkFBZ0IsdUJBQXVCLEdBQUcsa0JBQWtCLHdCQUF3Qix1QkFBdUIseUJBQXlCLDBCQUEwQixHQUFHLGdCQUFnQixzQkFBc0IsS0FBSyxRQUFRLHVCQUF1Qix5QkFBeUIsR0FBRyxnQkFBZ0IsZ0VBQWdFLDRCQUE0QixHQUFHLHNCQUFzQiw0QkFBNEIsR0FBRyxzQkFBc0IsbUJBQW1CLEdBQUcsVUFBVSxvQkFBb0IsR0FBRyw0REFBNEQsc0JBQXNCLG9CQUFvQixnQkFBZ0IsaUJBQWlCLHFCQUFxQixHQUFHLGlCQUFpQix3QkFBd0Isd0JBQXdCLHVCQUF1QiwyQkFBMkIsd0NBQXdDLEdBQUcsc0JBQXNCLGdDQUFnQyxHQUFHLHFCQUFxQixvQkFBb0IscUNBQXFDLEdBQUcsZUFBZSwwQkFBMEIsZUFBZSx3QkFBd0Isc0NBQXNDLEdBQUcsZ0JBQWdCLG1CQUFtQixHQUFHLGlCQUFpQix1QkFBdUIsMEJBQTBCLHNCQUFzQixHQUFHLHVCQUF1QixnQ0FBZ0MsR0FBRyxVQUFVLHdCQUF3Qiw4QkFBOEIsZ0JBQWdCLHFCQUFxQiw0Q0FBNEMsc0JBQXNCLDhDQUE4QyxvQkFBb0IscUJBQXFCLGVBQWUsMEtBQTBLLDRCQUE0QixtQkFBbUIsR0FBRyxnQkFBZ0IsK0JBQStCLEdBQUcsNkJBQTZCLG1CQUFtQixHQUFHLGVBQWUsaUJBQWlCLHVCQUF1QixHQUFHLGtCQUFrQix3QkFBd0Isd0JBQXdCLEdBQUcsZ0JBQWdCLHVCQUF1Qix3QkFBd0IsbUNBQW1DLDZCQUE2Qix3QkFBd0IsbUVBQW1FLGtCQUFrQiw2QkFBNkIsMEJBQTBCLG9CQUFvQiwwQkFBMEIscUNBQXFDLEdBQUcsaUJBQWlCLHNCQUFzQixpREFBaUQsaUJBQWlCLGdCQUFnQixzQkFBc0IsR0FBRyxnQkFBZ0IsNkJBQTZCLHlCQUF5QixHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxzQkFBc0IseUJBQXlCLDBCQUEwQixzQkFBc0IsMkJBQTJCLHlCQUF5QixvQkFBb0IsdUJBQXVCLDBCQUEwQixrQ0FBa0MsMEVBQTBFLHNCQUFzQiwwRUFBMEUsc0JBQXNCLG9CQUFvQixvQkFBb0Isc0JBQXNCLHVCQUF1QiwwQkFBMEIsOEJBQThCLEdBQUcsb0RBQW9ELHdCQUF3QiwwQkFBMEIsMEJBQTBCLHNCQUFzQixHQUFHLDBCQUEwQixvQkFBb0IsbUJBQW1CLHNCQUFzQixHQUFHLDBCQUEwQixvQkFBb0IsbUJBQW1CLHNCQUFzQixHQUFHLHVCQUF1QixpQkFBaUIseUJBQXlCLEdBQUcsMkRBQTJELHFCQUFxQiw0QkFBNEIseUJBQXlCLDBCQUEwQixnQ0FBZ0Msc0JBQXNCLHFDQUFxQyx5QkFBeUIsMEJBQTBCLDhDQUE4QyxxQkFBcUIscURBQXFELGlEQUFpRCxnR0FBZ0csNEJBQTRCLGdDQUFnQyxHQUFHLG1FQUFtRSxxQ0FBcUMsdUNBQXVDLDBDQUEwQyxHQUFHLGdEQUFnRCxtQkFBbUIsR0FBRywwRUFBMEUsa0JBQWtCLHlCQUF5QixrQkFBa0IsZUFBZSxrQkFBa0IsK0JBQStCLDJCQUEyQiwrQkFBK0IsOENBQThDLEdBQUcsdURBQXVELDJCQUEyQixnQ0FBZ0MsR0FBRyxxQkFBcUIsb0JBQW9CLG9DQUFvQyx5QkFBeUIsa0JBQWtCLGNBQWMsb0JBQW9CLDhCQUE4QixHQUFHLG1CQUFtQjtBQUN4alI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUN6VDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFQTs7QUFFQTs7QUFRaUM7O0FBS047QUFDM0IsWUFBWSxtREFBWTs7QUFZQzs7QUFFekIsd0JBQXdCLDREQUFjOztBQUV0QztBQUNPO0FBQ1A7QUFDQSxJQUFJLDREQUFjO0FBQ2xCLGlDQUFpQyw0REFBYztBQUMvQyxJQUFJLDZEQUFhO0FBQ2pCO0FBQ0E7O0FBRU87QUFDUDtBQUNBLDBEQUEwRCw0REFBYztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQUk7QUFDUixJQUFJLCtEQUFlO0FBQ25CO0FBQ0E7O0FBRU87QUFDUDtBQUNBLG1CQUFtQixnRUFBWTtBQUMvQjtBQUNBLGVBQWUsMERBQVU7QUFDekI7QUFDQSxFQUFFLGdFQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2REFBYTtBQUNmOztBQUVPO0FBQ1A7QUFDQSxtQkFBbUIsZ0VBQVk7QUFDL0IsRUFBRSwrREFBZTtBQUNqQjtBQUNBLG1CQUFtQixpRUFBYTtBQUNoQztBQUNBLElBQUksdUVBQW1CO0FBQ3ZCO0FBQ0Esa0JBQWtCLG9FQUFnQjtBQUNsQztBQUNBLE9BQU8sMkRBQVc7QUFDbEI7QUFDQSxJQUFJLG9FQUFnQjtBQUNwQjtBQUNBO0FBQ0EsZUFBZSwwREFBVTtBQUN6QixFQUFFLGdFQUFZO0FBQ2QsRUFBRSxpRUFBYTtBQUNmLEVBQUUsb0VBQWdCO0FBQ2xCLEVBQUUseUVBQXlCLENBQUMsdUVBQW1CO0FBQy9DLHdEQUF3RCw0REFBYztBQUN0RTtBQUNBLEVBQUUsNkRBQWE7QUFDZjs7QUFFTztBQUNQO0FBQ0EsRUFBRSxnRUFBZ0IsQ0FBQyxpRUFBYTtBQUNoQzs7QUFFTztBQUNQO0FBQ0EsRUFBRSxnRUFBZ0IsQ0FBQyx1RUFBbUI7QUFDdEM7O0FBRU87QUFDUDtBQUNBLEVBQUUsZ0VBQWdCLENBQUMsb0VBQWdCO0FBQ25DOztBQUVPO0FBQ1Asd0RBQXdELDREQUFjO0FBQ3RFO0FBQ0EsRUFBRSw2REFBYTtBQUNmOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDREQUFjO0FBQ2pFO0FBQ0EsNkJBQTZCLDREQUFjO0FBQzNDLEVBQUUsNERBQWM7QUFDaEIsa0NBQWtDLDREQUFjO0FBQ2hEO0FBQ0EsRUFBRSw2REFBYTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0hBO0FBQ0E7O0FBRUE7O0FBRUE7QUFXaUM7O0FBT047O0FBRTNCO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLEVBQUUsaUVBQWE7QUFDZixFQUFFLHVFQUFtQjtBQUNyQixFQUFFLG9FQUFnQjtBQUNsQjs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQLG1DQUFtQyxtREFBSztBQUN4Qyx1QkFBdUIsb0VBQXNCLGlCQUFpQixtREFBSztBQUNuRSwrQkFBK0IsbURBQUs7QUFDcEMsa0NBQWtDLDREQUFjO0FBQ2hELHVCQUF1QixnRkFBa0MsRUFBRSw0REFBYztBQUN6RSx1Q0FBdUMsNERBQWM7QUFDckQ7O0FBRU87QUFDUCxlQUFlLGtFQUFjO0FBQzdCO0FBQ0EsdUJBQXVCLG1EQUFLLDRCQUE0Qiw0REFBYztBQUN0RSxNQUFNLDREQUFjO0FBQ3BCLElBQUksd0VBQW9CO0FBQ3hCLElBQUk7QUFDSjtBQUNBLElBQUksd0VBQW9CO0FBQ3hCLElBQUksb0VBQWdCO0FBQ3BCO0FBQ0EsaUJBQWlCLGlFQUFhO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG1EQUFLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNERBQWM7QUFDM0Msb0JBQW9CLDREQUFjO0FBQ2xDO0FBQ0E7QUFDQSxJQUFJLGtFQUFjO0FBQ2xCLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvRUFBZ0IsZ0JBQWdCLHFCQUFxQixFQUFFLFlBQVk7QUFDckU7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QyxnRUFBWTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFhO0FBQ2pCLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6S0E7QUFDQTs7QUFFQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQmlDO0FBQ2xCOztBQUV0QixxREFBTzs7QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOztBQUVBOztBQUVBO0FBQ087QUFDQTtBQUNBO0FBQ0Esc0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQVlpQzs7QUFFc0I7O0FBRWQ7O0FBRXpDO0FBQ0EsRUFBRSxrRUFBYywyQkFBMkIscUVBQW1DO0FBQzlFLEVBQUUsaUVBQWEsMkJBQTJCLG9FQUFrQztBQUM1RSxFQUFFLCtEQUFXLDJCQUEyQixrRUFBZ0M7QUFDeEUsRUFBRSxpRUFBYSwyQkFBMkIsa0VBQWdDO0FBQzFFLEVBQUUsa0VBQWMsMkJBQTJCLHFFQUFtQztBQUM5RSxFQUFFLHNFQUFrQiwyQkFBMkIseUVBQXVDO0FBQ3RGLEVBQUUscUVBQWlCLDJCQUEyQix3RUFBc0M7QUFDcEYsRUFBRSw0RUFBd0IsMkJBQTJCLCtFQUE2QztBQUNsRyxFQUFFLG9FQUFnQiwwQkFBMEIsdUVBQXFDO0FBQ2pGO0FBQ0E7O0FBRU87QUFDUCxzREFBTTtBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vc3JjL3N0eWxlMi5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9zcmMvc3R5bGUyLmNzcz9kYTJiIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vc3JjL2V2ZW50TGlzdGVuZXJzMi5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zMi5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9zcmMvZ2xvYmFsRGVjbGFyYXRpb25zLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL3NyYy93ZWJzaXRlMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVE9QIFRPRE8gTGlzdCAqL1xuLyogVE9ETyBzdHlsaW5nICovXG5cbi8qd2h5IHRoaXMgZG9lc24ndCB0aGlzIHdvcmsuIHdoZW4gYXBwbHlpbmcgdGhlIHN0eWxlIHRvIGVhY2ggaW5kaXZpZHVhbCBlbGVtZW50IGRvZXM/Li4uIDwudGFzay1uYW1lLWxhYmVsLC5ub3Rlcy1sYWJlbCwgLnByaW9yaXR5LWxhYmVsLC5kdWUtZGF0ZS1sYWJlbCB7IGRpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjt9PiAqL1xuXG4vKiBzdHlsZTIuY3NzICovXG46cm9vdCB7XG4gICAgLS1jbHItcHJpbWFyeTogcmdiKDIxMSwgMTQ5LCAyNDApO1xuICAgIC0tY2xyLWxpZ2h0OiAjZjRmNGY0O1xuICAgIC0tY2xyLWRhcms6ICMzMzM7XG4gICAgLS1jbHItd2FybmluZzogcmdiKDE0MCwgMTEsIDI0Nyk7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQ6XG4gICAgICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXInYXV0byBcIi4uLi4uLiBsaXN0cyBhY3RpdmUgLi4uLi4uXCJhdXRvIC8gMWZyIG1pbm1heCgxMDBweCwgMzAwcHgpIG1pbm1heCgyNTBweCwgNTAwcHgpIDFmcjtcbn1cblxuLnRpdGxlIHtcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBjYWxjKDN2dyArIDJyZW0pO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW46IC0wLjFlbSAwIDAuNWVtXG59XG5cbi5hbGwtbGlzdHMge1xuICAgIGdyaWQtYXJlYTogbGlzdHM7XG59XG5cbi5tYXN0ZXItbGlzdCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjFlbTtcbn1cblxuLmxpc3QtbmFtZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG5cbmxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxubGk6OmJlZm9yZSB7XG4gICAgLyogc3R5bGUgb2YgdmlzaWJsZSBidWxsZXQgcG9pbnQqL1xuICAgIGNvbnRlbnQ6ICdcXFxcMjAyMic7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5saTpob3Zlcjo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbi5saXN0LW5hbWU6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxuZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLyogZGVmYXVsdCBzZXQgb2YgcGFyYW1ldGVycyBmb3IgbW9zdCBidXR0b25zICovXG4uYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmJ0bi5jcmVhdGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGdyaWQtYXJlYTogYWN0aXZlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1ZW07XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xufVxuXG4jYnRuLWNyZWF0ZS10YXNrIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xufVxuXG4udGFzay1ib2R5IGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGFzay1idG4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3JkZXI6IDM7XG4gICAgZ3JpZC1hcmVhOiBhY3RpdmU7XG4gICAgbWFyZ2luOiAuMjVlbSAuMjVlbSAuMjVlbSAuMjVlbTtcbn1cblxuLmJ0bjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC40O1xufVxuXG4uYnRuLmRlbGV0ZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmJ0bi5kZWxldGU6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jbHItd2FybmluZyk7XG59XG5cbi5uZXcge1xuICAgIGdyaWQtYXJlYTogYWN0aXZlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDE1MG1zIGVhc2UtaW47XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAuMjVlbTtcbiAgICBvcmRlcjogMjtcbiAgICAvKiBhcHBseWluZyBmbGV4IHRvIDxmb3JtPiBhbGxvd3Mgb3JkZXI6IDIgdG8gZGlzcGxheSBidXR0b24gZmlyc3QgYnV0IG1haW50YWluIHNlY29uZCBwb3NpdGlvbiB3aGVuIHVzaW5nIHRhYi4gIFdoeSBkb2VzIHRoaXMgbm90IGltcGFjdCB0aGUgYWRkIHRhc2sgYnV0dG9uPyAqL1xufVxuXG4ubmV3LnRhc2s6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59XG5cbi5uZXc6Zm9jdXMge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcbn1cblxuLm5ldzpmb2N1czo6cGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuLm5ldy50YXNrIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5hY3RpdmUtbGlzdCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbi50YXNrLWxpc3Qge1xuICAgIC0tc3BhY2VyOiAxLjVyZW07XG4gICAgZ3JpZC1hcmVhOiBhY3RpdmU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWxpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWRhcmspO1xuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgIC8qIHByZXZlbnRzIE15IExpc3RzIGZyb20gY29udHJvbGxpbmcgc2l6ZSBvZiBUYXNrIExpc3QgKi9cbn1cblxuLnRhc2staGVhZGVyIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xuICAgIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxpc3QtdGl0bGUge1xuICAgIG1hcmdpbjogMCAxZW0gMDtcbiAgICAvKiBtYWludGFpbiBzcGFjaW5nIGlmIGxvbmcgbGlzdCBuYW1lICovXG59XG5cbi50YXNrLWNvdW50IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4udGFzay1ib2R5IHtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRhc2stdGVtcCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnRhc2stbmFtZS1sYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1ib3R0b206IC4xNWVtO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAvKiB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgTVVTVCBiZSBhZGp1c3RlZCBpbiBKUyBmb3IgZWZmZWN0Ki9cbiAgICAvKiBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTsqL1xuICAgIGZsZXg6IDAgMCAzMyU7XG4gICAgLyogcmVzb2x2ZXMgbWF4LXdpZHRoIG5vdCBoYXZpbmcgYSBtaW4gc2l6ZSB3aXRoIHdpbmRvdyByZXNpemUgKi9cbn1cblxuLnRhc2stbm90ZS1sYWJlbCB7XG4gICAgZmxleDogMCAwIDM1JTtcbiAgICBjb2xvcjogcHVycGxlO1xuICAgIGZvbnQtc2l6ZTogLjZlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50YXNrLW5hbWUtbGFiZWw6aG92ZXIsIC50YXNrLW5vdGUtbGFiZWw6aG92ZXIge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgdGV4dC1vdmVyZmxvdzogY2xpcDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG59XG5cbi50YXNrLXByaW9yaXR5LWxhYmVsIHtcbiAgICBmbGV4OiAwIDAgMTAlO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LXNpemU6IC42ZW07XG59XG5cbi50YXNrLWR1ZS1kYXRlLWxhYmVsIHtcbiAgICBmbGV4OiAwIDAgMjAlO1xuICAgIGNvbG9yOiBicm93bjtcbiAgICBmb250LXNpemU6IC42ZW07XG59XG5cblt0eXBlPSdjaGVja2JveCddIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLyogdmlzaWJsZSBjaGVja2JveCByYWRpbyBidXR0b24gKi9cbi5jdXN0b20tY2hlY2tib3gge1xuICAgIC0tc2l6ZTogMC43NWVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIC8qIHByZXZlbnRzIHNocmlua2luZyB3aXRoIGxvbmcgdGFzayBuYW1lICovXG59XG5cbi8qIC50YXNrLW5hbWUtbGFiZWw6aG92ZXIgLmN1c3RvbS1jaGVja2JveCB7ICovXG4vKiBjaGFuZ2luZyBmcm9tIHRoZSBhYm92ZSBhbGxvd3Mgd2hvbGUgbGluZSB0byBob3ZlciovXG4udGFzay10ZW1wOmhvdmVyIC5jdXN0b20tY2hlY2tib3gge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xufVxuXG5bdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQrLnRhc2stbmFtZS1sYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCAzcHggd2hpdGU7XG59XG5cblt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQrLnRhc2stbmFtZS1sYWJlbCB7XG4gICAgb3BhY2l0eTogMC41O1xufVxuXG4vKiBtYW5hZ2VzICd0YXNrIGNvbXBsZXRlJyBzdHJpa2UgdGhyb3VnaCovXG4udGFzay1uYW1lLWxhYmVsOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEuNWVtO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG5bdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkKy50YXNrLW5hbWUtbGFiZWw6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBpbml0aWFsO1xufVxuXG4uZGVsZXRlLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAtMzBweDtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZTIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFrQjtBQUNsQixpQkFBaUI7O0FBRWpCLGtNQUFrTTs7QUFFbE0sZUFBZTtBQUNmO0lBQ0ksaUNBQWlDO0lBQ2pDLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDOztBQUVBOzs7SUFHSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiOzhIQUMwSDtBQUM5SDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsK0NBQStDO0FBQy9DO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsaUJBQWlCO0lBQ2pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxjQUFjO0lBQ2QscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZix1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLGNBQWM7SUFDZCxRQUFRO0lBQ1IsZ0tBQWdLO0FBQ3BLOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIseURBQXlEO0FBQzdEOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQiw4REFBOEQ7SUFDOUQsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixnRUFBZ0U7QUFDcEU7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBLGtDQUFrQztBQUNsQztJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHVDQUF1QztJQUN2QyxjQUFjO0lBQ2QsMkNBQTJDO0FBQy9DOztBQUVBLDhDQUE4QztBQUM5QyxzREFBc0Q7QUFDdEQ7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLDBDQUEwQztBQUMxQztJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUT1AgVE9ETyBMaXN0ICovXFxuLyogVE9ETyBzdHlsaW5nICovXFxuXFxuLyp3aHkgdGhpcyBkb2Vzbid0IHRoaXMgd29yay4gd2hlbiBhcHBseWluZyB0aGUgc3R5bGUgdG8gZWFjaCBpbmRpdmlkdWFsIGVsZW1lbnQgZG9lcz8uLi4gPC50YXNrLW5hbWUtbGFiZWwsLm5vdGVzLWxhYmVsLCAucHJpb3JpdHktbGFiZWwsLmR1ZS1kYXRlLWxhYmVsIHsgZGlzcGxheTogZmxleDthbGlnbi1pdGVtczogY2VudGVyO30+ICovXFxuXFxuLyogc3R5bGUyLmNzcyAqL1xcbjpyb290IHtcXG4gICAgLS1jbHItcHJpbWFyeTogcmdiKDIxMSwgMTQ5LCAyNDApO1xcbiAgICAtLWNsci1saWdodDogI2Y0ZjRmNDtcXG4gICAgLS1jbHItZGFyazogIzMzMztcXG4gICAgLS1jbHItd2FybmluZzogcmdiKDE0MCwgMTEsIDI0Nyk7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gICAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6XFxuICAgICAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyJ2F1dG8gXFxcIi4uLi4uLiBsaXN0cyBhY3RpdmUgLi4uLi4uXFxcImF1dG8gLyAxZnIgbWlubWF4KDEwMHB4LCAzMDBweCkgbWlubWF4KDI1MHB4LCA1MDBweCkgMWZyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IGNhbGMoM3Z3ICsgMnJlbSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIG1hcmdpbjogLTAuMWVtIDAgMC41ZW1cXG59XFxuXFxuLmFsbC1saXN0cyB7XFxuICAgIGdyaWQtYXJlYTogbGlzdHM7XFxufVxcblxcbi5tYXN0ZXItbGlzdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBsaW5lLWhlaWdodDogMS43O1xcbiAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxuICAgIHBhZGRpbmctbGVmdDogMS4xZW07XFxufVxcblxcbi5saXN0LW5hbWUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufVxcblxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5saTo6YmVmb3JlIHtcXG4gICAgLyogc3R5bGUgb2YgdmlzaWJsZSBidWxsZXQgcG9pbnQqL1xcbiAgICBjb250ZW50OiAnXFxcXDIwMjInO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbmxpOmhvdmVyOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcblxcbi5saXN0LW5hbWU6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4vKiBkZWZhdWx0IHNldCBvZiBwYXJhbWV0ZXJzIGZvciBtb3N0IGJ1dHRvbnMgKi9cXG4uYnRuIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYnRuLmNyZWF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBncmlkLWFyZWE6IGFjdGl2ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1ZW07XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbjtcXG59XFxuXFxuI2J0bi1jcmVhdGUtdGFzayB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcbi50YXNrLWJvZHkgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stYnRuIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgb3JkZXI6IDM7XFxuICAgIGdyaWQtYXJlYTogYWN0aXZlO1xcbiAgICBtYXJnaW46IC4yNWVtIC4yNWVtIC4yNWVtIC4yNWVtO1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC40O1xcbn1cXG5cXG4uYnRuLmRlbGV0ZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmJ0bi5kZWxldGU6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXdhcm5pbmcpO1xcbn1cXG5cXG4ubmV3IHtcXG4gICAgZ3JpZC1hcmVhOiBhY3RpdmU7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMTUwbXMgZWFzZS1pbjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogLjI1ZW07XFxuICAgIG9yZGVyOiAyO1xcbiAgICAvKiBhcHBseWluZyBmbGV4IHRvIDxmb3JtPiBhbGxvd3Mgb3JkZXI6IDIgdG8gZGlzcGxheSBidXR0b24gZmlyc3QgYnV0IG1haW50YWluIHNlY29uZCBwb3NpdGlvbiB3aGVuIHVzaW5nIHRhYi4gIFdoeSBkb2VzIHRoaXMgbm90IGltcGFjdCB0aGUgYWRkIHRhc2sgYnV0dG9uPyAqL1xcbn1cXG5cXG4ubmV3LnRhc2s6OnBsYWNlaG9sZGVyIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4ubmV3OmZvY3VzIHtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xcbn1cXG5cXG4ubmV3OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgIG9wYWNpdHk6IDAuNjtcXG59XFxuXFxuLm5ldy50YXNrIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLmFjdGl2ZS1saXN0IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gICAgLS1zcGFjZXI6IDEuNXJlbTtcXG4gICAgZ3JpZC1hcmVhOiBhY3RpdmU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItZGFyayk7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICAvKiBwcmV2ZW50cyBNeSBMaXN0cyBmcm9tIGNvbnRyb2xsaW5nIHNpemUgb2YgVGFzayBMaXN0ICovXFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxuICAgIGJhY2tncm91bmQ6ICNlNGU0ZTQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmxpc3QtdGl0bGUge1xcbiAgICBtYXJnaW46IDAgMWVtIDA7XFxuICAgIC8qIG1haW50YWluIHNwYWNpbmcgaWYgbG9uZyBsaXN0IG5hbWUgKi9cXG59XFxuXFxuLnRhc2stY291bnQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnRhc2stYm9keSB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2stdGVtcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrLW5hbWUtbGFiZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogLjE1ZW07XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgLyogdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IE1VU1QgYmUgYWRqdXN0ZWQgaW4gSlMgZm9yIGVmZmVjdCovXFxuICAgIC8qIG1heC13aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpOyovXFxuICAgIGZsZXg6IDAgMCAzMyU7XFxuICAgIC8qIHJlc29sdmVzIG1heC13aWR0aCBub3QgaGF2aW5nIGEgbWluIHNpemUgd2l0aCB3aW5kb3cgcmVzaXplICovXFxufVxcblxcbi50YXNrLW5vdGUtbGFiZWwge1xcbiAgICBmbGV4OiAwIDAgMzUlO1xcbiAgICBjb2xvcjogcHVycGxlO1xcbiAgICBmb250LXNpemU6IC42ZW07XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4udGFzay1uYW1lLWxhYmVsOmhvdmVyLCAudGFzay1ub3RlLWxhYmVsOmhvdmVyIHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIHRleHQtb3ZlcmZsb3c6IGNsaXA7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHktbGFiZWwge1xcbiAgICBmbGV4OiAwIDAgMTAlO1xcbiAgICBjb2xvcjogZ3JlZW47XFxuICAgIGZvbnQtc2l6ZTogLjZlbTtcXG59XFxuXFxuLnRhc2stZHVlLWRhdGUtbGFiZWwge1xcbiAgICBmbGV4OiAwIDAgMjAlO1xcbiAgICBjb2xvcjogYnJvd247XFxuICAgIGZvbnQtc2l6ZTogLjZlbTtcXG59XFxuXFxuW3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi8qIHZpc2libGUgY2hlY2tib3ggcmFkaW8gYnV0dG9uICovXFxuLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIC0tc2l6ZTogMC43NWVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgLyogcHJldmVudHMgc2hyaW5raW5nIHdpdGggbG9uZyB0YXNrIG5hbWUgKi9cXG59XFxuXFxuLyogLnRhc2stbmFtZS1sYWJlbDpob3ZlciAuY3VzdG9tLWNoZWNrYm94IHsgKi9cXG4vKiBjaGFuZ2luZyBmcm9tIHRoZSBhYm92ZSBhbGxvd3Mgd2hvbGUgbGluZSB0byBob3ZlciovXFxuLnRhc2stdGVtcDpob3ZlciAuY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbn1cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkKy50YXNrLW5hbWUtbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggM3B4IHdoaXRlO1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkKy50YXNrLW5hbWUtbGFiZWwge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi8qIG1hbmFnZXMgJ3Rhc2sgY29tcGxldGUnIHN0cmlrZSB0aHJvdWdoKi9cXG4udGFzay1uYW1lLWxhYmVsOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEuNWVtO1xcbiAgICByaWdodDogMDtcXG4gICAgaGVpZ2h0OiAzcHg7XFxuICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkKy50YXNrLW5hbWUtbGFiZWw6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGluaXRpYWw7XFxufVxcblxcbi5kZWxldGUtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IC0zMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9UT1AgVE9ETyBMaXN0XG4vL0V2ZW50IExpc3RlbmVyIEZ1bmN0aW9uc1xuXG4vL2V2ZW50TGlzdGVuZXJzMi5qc1xuXG4vL0ltcG9ydHNcblxuaW1wb3J0IHtcbiAgbmV3TGlzdElucHV0LFxuICBuZXdUYXNrSW5wdXQsXG4gIHRhc2tOb3RlSW5wdXQsXG4gIHRhc2tQcmlvcml0eU9wdGlvbnMsXG4gIHRhc2tEdWVEYXRlSW5wdXQsXG59IGZyb20gXCIuL2dsb2JhbERlY2xhcmF0aW9ucy5qc1wiO1xuXG5pbXBvcnQge1xuICBsaXN0cyBhcyBkZWZhdWx0TGlzdHMsXG4gIHNlbGVjdGVkTGlzdElkLFxufSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2UuanNcIjtcbmxldCBsaXN0cyA9IGRlZmF1bHRMaXN0cztcblxuaW1wb3J0IHtcbiAgY3JlYXRlTGlzdCxcbiAgY3JlYXRlVGFzayxcbiAgaGlkZVRhc2tEZXRhaWxzLFxuICByZXNldFByaW9yaXR5UmFkaW9CdXR0b25zLFxuICB0b2dnbGVJbnB1dEZpZWxkLFxuICBpc1ZhbGlkRGF0ZSxcbiAgc2F2ZUFuZFJlbmRlcixcbiAgc2F2ZSxcbiAgcmVuZGVyVGFza0NvdW50LFxufSBmcm9tIFwiLi9mdW5jdGlvbnMyLmpzXCI7XG5cbmNvbnNvbGUubG9nKFwiRUwyIHNsaTpcIiwgc2VsZWN0ZWRMaXN0SWQpO1xuXG4vLyBFdmVudCBMaXN0ZW5lciBGdW5jdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVMaXN0c0NvbnRhaW5lcihlKSB7XG4gIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGlcIikge1xuICAgIHNlbGVjdGVkTGlzdElkLnZhbHVlID0gZS50YXJnZXQuZGF0YXNldC5saXN0SWQ7XG4gICAgY29uc29sZS5sb2coXCJFTCBGIGhsYyBzbGk6XCIsIHNlbGVjdGVkTGlzdElkKTtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRhc2tDb250YWluZXIoZSkge1xuICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIpIHtcbiAgICBjb25zdCBzZWxlY3RlZExpc3QgPSBsaXN0cy5maW5kKChsaXN0KSA9PiBsaXN0LmlkID09PSBzZWxlY3RlZExpc3RJZC52YWx1ZSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gc2VsZWN0ZWRMaXN0LnRhc2tzLmZpbmQoXG4gICAgICAodGFzaykgPT4gdGFzay5pZCA9PT0gZS50YXJnZXQuaWRcbiAgICApO1xuICAgIHNlbGVjdGVkVGFzay5jb21wbGV0ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgc2F2ZSgpO1xuICAgIHJlbmRlclRhc2tDb3VudChzZWxlY3RlZExpc3QpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVOZXdMaXN0Rm9ybShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbGlzdE5hbWUgPSBuZXdMaXN0SW5wdXQudmFsdWU7XG4gIGlmIChsaXN0TmFtZSA9PSBudWxsIHx8IGxpc3ROYW1lID09IFwiXCIpIHJldHVybjtcbiAgY29uc3QgbGlzdCA9IGNyZWF0ZUxpc3QobGlzdE5hbWUpO1xuICAvLyBjb25zb2xlLmxvZygnRUwgbmV3TGlzdEZvcm1OQU1FOicsIGxpc3QpO1xuICBuZXdMaXN0SW5wdXQudmFsdWUgPSBudWxsO1xuICBsaXN0cy5wdXNoKGxpc3QpO1xuICBjb25zb2xlLmxvZyhcIkVMIG5ld0xpc3RGb3JtTkFNRTpcIiwgbGlzdCk7XG4gIGNvbnNvbGUubG9nKFwiRUwgbmV3TGlzdEZvcm1BUlJBWTpcIiwgbGlzdHMpO1xuICBzYXZlQW5kUmVuZGVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVOZXdUYXNrRm9ybShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdGFza05hbWUgPSBuZXdUYXNrSW5wdXQudmFsdWU7XG4gIGhpZGVUYXNrRGV0YWlscygpO1xuICBpZiAodGFza05hbWUgPT0gbnVsbCB8fCB0YXNrTmFtZSA9PSBcIlwiKSByZXR1cm47XG4gIGNvbnN0IHRhc2tOb3RlID0gdGFza05vdGVJbnB1dC52YWx1ZTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID1cbiAgICB0YXNrUHJpb3JpdHlPcHRpb25zLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJyk/LnZhbHVlIHx8XG4gICAgXCJcIjtcbiAgY29uc3QgZHVlRGF0ZSA9IHRhc2tEdWVEYXRlSW5wdXQudmFsdWU7XG4gIGNvbnNvbGUubG9nKFwiRUwgblRGIGRhdGUgdmFsdWU6XCIsIGR1ZURhdGUpO1xuICBpZiAoIWlzVmFsaWREYXRlKGR1ZURhdGUpKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgdmFsaWQgbW0vZGQveXlcIik7XG4gICAgdGFza0R1ZURhdGVJbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tOYW1lLCB0YXNrTm90ZSwgdGFza1ByaW9yaXR5LCBkdWVEYXRlKTtcbiAgbmV3VGFza0lucHV0LnZhbHVlID0gbnVsbDtcbiAgdGFza05vdGVJbnB1dC52YWx1ZSA9IG51bGw7XG4gIHRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPSBudWxsO1xuICByZXNldFByaW9yaXR5UmFkaW9CdXR0b25zKHRhc2tQcmlvcml0eU9wdGlvbnMpO1xuICBjb25zdCBzZWxlY3RlZExpc3QgPSBsaXN0cy5maW5kKChsaXN0KSA9PiBsaXN0LmlkID09PSBzZWxlY3RlZExpc3RJZC52YWx1ZSk7XG4gIHNlbGVjdGVkTGlzdC50YXNrcy5wdXNoKHRhc2spO1xuICBzYXZlQW5kUmVuZGVyKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVUYXNrTm90ZUJ1dHRvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdG9nZ2xlSW5wdXRGaWVsZCh0YXNrTm90ZUlucHV0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRhc2tQcmlvcml0eUJ1dHRvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgdG9nZ2xlSW5wdXRGaWVsZCh0YXNrUHJpb3JpdHlPcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRhc2tEdWVEYXRlQnV0dG9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB0b2dnbGVJbnB1dEZpZWxkKHRhc2tEdWVEYXRlSW5wdXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2xlYXJDb21wbGV0ZVRhc2tzQnV0dG9uIChlKSB7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQoKGxpc3QpID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkLnZhbHVlKTtcbiAgc2VsZWN0ZWRMaXN0LnRhc2tzID0gc2VsZWN0ZWRMaXN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGUpO1xuICBzYXZlQW5kUmVuZGVyKCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRGVsZXRlTGlzdEJ1dHRvbiAoZSkge1xuICBjb25zb2xlLmxvZyhcIkVMIGRsYiBwcmU6XCIsIGxpc3RzKTtcbiAgLy8gbGlzdHMgPSBsaXN0cy5maWx0ZXIoKGxpc3QpID0+IGxpc3QuaWQgIT09IHNlbGVjdGVkTGlzdElkLnZhbHVlKTtcbiAgLy8qKioqKnVzaW5nIHNwbGljZSBpbnN0ZWFkIG9mIGZpbHRlciBlZGl0cyB0byBvcmlnaW4gbGlzdHMgaW4gZ2xvYmFsRGVjbGFyYXRpb25zIGluc3RlYWQgb2YgbG9jYWwgbGlzdHMgZGVjbGFyZWQgYWZ0ZXIgaW1wb3J0LioqKioqXG4gIGxpc3RzLnNwbGljZShsaXN0cy5maW5kSW5kZXgobGlzdCA9PiBsaXN0LmlkID09PSBzZWxlY3RlZExpc3RJZC52YWx1ZSksIDEpO1xuICBjb25zb2xlLmxvZyhcIkVMIGRsYjpcIiwgbGlzdHMpO1xuICBjb25zb2xlLmxvZyhcIkVMIGRsYiBzbGk6XCIsIHNlbGVjdGVkTGlzdElkKTtcbiAgc2VsZWN0ZWRMaXN0SWQudmFsdWUgPSBudWxsO1xuICBjb25zb2xlLmxvZyhcIkVMIGRsYiBzbGkgbnVsbDpcIiwgc2VsZWN0ZWRMaXN0SWQpO1xuICBjb25zb2xlLmxvZyhcIkVMIGRsYiBudWxsOlwiLCBsaXN0cyk7XG4gIHNhdmVBbmRSZW5kZXIoKTtcbn07IiwiLy9UT1AgVE9ETyBMaXN0XG4vL0Z1bmN0aW9uc1xuXG4vL2Z1bmN0aW9uczIuanNcblxuLy9JbXBvcnRzXG5pbXBvcnQge1xuICBsaXN0c0NvbnRhaW5lcixcbiAgdGFza0Rpc3BsYXlDb250YWluZXIsXG4gIGxpc3RUaXRsZUVsZW1lbnQsXG4gIHRhc2tDb3VudEVsZW1lbnQsXG4gIHRhc2tDb250YWluZXIsXG4gIHRhc2tUZW1wbGF0ZSxcbiAgdGFza05vdGVJbnB1dCxcbiAgdGFza1ByaW9yaXR5T3B0aW9ucyxcbiAgdGFza0R1ZURhdGVJbnB1dCxcbn0gZnJvbSBcIi4vZ2xvYmFsRGVjbGFyYXRpb25zLmpzXCI7XG5cbmltcG9ydCB7XG4gIExPQ0FMX1NUT1JBR0VfTElTVF9LRVksXG4gIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfTElTVF9JRF9LRVksXG4gIGxpc3RzLFxuICBzZWxlY3RlZExpc3RJZCxcbn0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlLmpzXCI7XG5cbi8vRnVuY3Rpb25zXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdChuYW1lKSB7XG4gIGNvbnNvbGUubG9nKFwiRiBjcmVhdGVMaXN0OlwiLCBuYW1lKTtcbiAgcmV0dXJuIHtcbiAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgdGFza3M6IFtdLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lLCBub3RlLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICByZXR1cm4ge1xuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgbmFtZTogbmFtZSxcbiAgICBub3RlOiBub3RlIHx8IFwiXCIsXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5IHx8IFwiXCIsXG4gICAgZHVlRGF0ZTogZHVlRGF0ZSB8fCBcIlwiLFxuICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVUYXNrRGV0YWlscygpIHtcbiAgdGFza05vdGVJbnB1dC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHRhc2tQcmlvcml0eU9wdGlvbnMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB0YXNrRHVlRGF0ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0UHJpb3JpdHlSYWRpb0J1dHRvbnMoY29udGFpbmVyKSB7XG4gIGNvbnN0IHJhZGlvQnV0dG9ucyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKTtcbiAgcmFkaW9CdXR0b25zLmZvckVhY2goKHJhZGlvQnV0dG9uKSA9PiB7XG4gICAgcmFkaW9CdXR0b24uY2hlY2tlZCA9IGZhbHNlO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUlucHV0RmllbGQoaW5wdXRGaWVsZCkge1xuICBpZiAoaW5wdXRGaWVsZC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICBpbnB1dEZpZWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dEZpZWxkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgaW5wdXRGaWVsZC5mb2N1cygpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRGF0ZShkYXRlU3RyaW5nKSB7XG4gIGlmIChkYXRlU3RyaW5nID09PSBcIlwiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY29uc3QgZGF0ZVBhdHRlcm4gPSAvXigwWzEtOV18MVswLTJdKVxcLygwWzEtOV18WzEyXVxcZHwzWzAxXSlcXC9cXGR7Mn0kLztcbiAgaWYgKCFkYXRlUGF0dGVybi50ZXN0KGRhdGVTdHJpbmcpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IFttb250aCwgZGF5LCB5ZWFyXSA9IGRhdGVTdHJpbmcuc3BsaXQoXCIvXCIpLm1hcChOdW1iZXIpO1xuICBpZiAobW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICBpZiAoZGF5IDwgMSB8fCBkYXkgPiBkYXlzSW5Nb250aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoeWVhciA8IDAgfHwgeWVhciA+IDk5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUFuZFJlbmRlcigpIHtcbiAgc2F2ZSgpO1xuICByZW5kZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmUoKSB7XG4gIGNvbnNvbGUubG9nKFwiRiBzYXZlIGxpc3RzIHByZTpcIiwgbGlzdHMpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZLCBKU09OLnN0cmluZ2lmeShsaXN0cykpO1xuICBjb25zb2xlLmxvZyhcIkYgc2F2ZSBsaXN0czpcIiwgbGlzdHMpO1xuICBjb25zb2xlLmxvZyhcIkYgc2F2ZSBzbGkgbnVsbDpcIiwgc2VsZWN0ZWRMaXN0SWQpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0xJU1RfSURfS0VZLCBzZWxlY3RlZExpc3RJZCk7XG4gIGNvbnNvbGUubG9nKFwiRiBzYXZlIHNsaSBudWxsIHBvc3Q6XCIsIHNlbGVjdGVkTGlzdElkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgY2xlYXJFbGVtZW50KGxpc3RzQ29udGFpbmVyKTtcbiAgcmVuZGVyTGlzdHMoKTtcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gbGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gc2VsZWN0ZWRMaXN0SWQudmFsdWUpO1xuICBpZiAoc2VsZWN0ZWRMaXN0SWQudmFsdWUgPT0gbnVsbCkge1xuICAgIHRhc2tEaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIkYgcmVuZGVyIHNsOlwiLCBzZWxlY3RlZExpc3QpO1xuICAgIHRhc2tEaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgbGlzdFRpdGxlRWxlbWVudC5pbm5lclRleHQgPSBzZWxlY3RlZExpc3QubmFtZTtcbiAgICByZW5kZXJUYXNrQ291bnQoc2VsZWN0ZWRMaXN0KTtcbiAgICBjbGVhckVsZW1lbnQodGFza0NvbnRhaW5lcik7XG4gICAgcmVuZGVyVGFza3Moc2VsZWN0ZWRMaXN0KTtcbiAgfVxufVxuXG4vL2NsZWFyRWxlbWVudCBhdm9pZHMgZHVwbGljYXRpb24gb2YgcHJldmlvdXNseSBkaXNwbGF5ZWQgaXRlbXNcbmZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdHMoKSB7XG4gIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaXN0RWxlbWVudC5kYXRhc2V0Lmxpc3RJZCA9IGxpc3QuaWQ7XG4gICAgbGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxpc3QtbmFtZVwiKTtcbiAgICBsaXN0RWxlbWVudC5pbm5lclRleHQgPSBsaXN0Lm5hbWU7XG4gICAgY29uc29sZS5sb2coXCJGIHJsIHNsaTpcIiwgc2VsZWN0ZWRMaXN0SWQpO1xuICAgIGlmIChsaXN0LmlkID09PSBzZWxlY3RlZExpc3RJZC52YWx1ZSkge1xuICAgICAgbGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1saXN0XCIpO1xuICAgIH1cbiAgICBsaXN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0RWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza0NvdW50KHNlbGVjdGVkTGlzdCkge1xuICBjb25zdCBpbmNvbXBsZXRlVGFza0NvdW50ID0gc2VsZWN0ZWRMaXN0LnRhc2tzLmZpbHRlcihcbiAgICAodGFzaykgPT4gIXRhc2suY29tcGxldGVcbiAgKS5sZW5ndGg7XG4gIGNvbnN0IHRhc2tTdHJpbmcgPSBpbmNvbXBsZXRlVGFza0NvdW50ID09PSAxID8gXCJ0YXNrXCIgOiBcInRhc2tzXCI7XG4gIHRhc2tDb3VudEVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7aW5jb21wbGV0ZVRhc2tDb3VudH0gJHt0YXNrU3RyaW5nfSByZW1haW5pbmdgO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrcyhzZWxlY3RlZExpc3QpIHtcbiAgc2VsZWN0ZWRMaXN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGFza1RlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGNoZWNrYm94LmlkID0gdGFzay5pZDtcbiAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jb21wbGV0ZTtcbiAgICBjb25zdCB0YXNrTmFtZUxhYmVsID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLW5hbWUtbGFiZWxcIik7XG4gICAgY29uc3QgdGFza05vdGVMYWJlbCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1ub3RlLWxhYmVsXCIpO1xuICAgIGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXByaW9yaXR5LWxhYmVsXCIpO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlTGFiZWwgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZHVlLWRhdGUtbGFiZWxcIik7XG4gICAgdGFza05hbWVMYWJlbC5odG1sRm9yID0gdGFzay5pZDtcbiAgICB0YXNrTm90ZUxhYmVsLmh0bWxGb3IgPSB0YXNrLmlkO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsLmh0bWxGb3IgPSB0YXNrLmlkO1xuICAgIHRhc2tEdWVEYXRlTGFiZWwuaHRtbEZvciA9IHRhc2suaWQ7XG4gICAgdGFza05hbWVMYWJlbC5hcHBlbmQodGFzay5uYW1lKTtcbiAgICB0YXNrTm90ZUxhYmVsLmFwcGVuZCh0YXNrLm5vdGUpO1xuICAgIHRhc2tQcmlvcml0eUxhYmVsLmFwcGVuZCh0YXNrLnByaW9yaXR5KTtcbiAgICB0YXNrRHVlRGF0ZUxhYmVsLmFwcGVuZCh0YXNrLmR1ZURhdGUpO1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICB9KTtcbn1cbiIsIi8vVE9QIFRPRE8gTGlzdFxuLy9HbG9iYWwgRGVjbGFyYXRpb25zXG5cbi8vZ2xvYmFsRGVjbGFyYXRpb25zLmpzXG5leHBvcnQgY29uc3QgbGlzdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbGlzdHNdXCIpO1xuZXhwb3J0IGNvbnN0IG5ld0xpc3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1saXN0LWZvcm1dXCIpO1xuZXhwb3J0IGNvbnN0IG5ld0xpc3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctbGlzdC1pbnB1dF1cIik7XG5leHBvcnQgY29uc3QgdGFza0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFzay1kaXNwbGF5LWNvbnRhaW5lcl1cIik7XG5leHBvcnQgY29uc3QgbGlzdFRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1saXN0LXRpdGxlXVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrQ291bnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2stY291bnRdXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFza3NdXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10ZW1wbGF0ZVwiKTtcbmV4cG9ydCBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10YXNrLWJ1dHRvbl1cIik7XG5leHBvcnQgY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10YXNrLWlucHV0XVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrTm90ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrLW5vdGVzLWJ1dHRvbl1cIik7XG5leHBvcnQgY29uc3QgdGFza05vdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrLW5vdGUtaW5wdXRdXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrLXByaW9yaXR5LWJ1dHRvbl1cIik7XG5leHBvcnQgY29uc3QgdGFza1ByaW9yaXR5T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1wcmlvcml0eS1vcHRpb25zXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tEdWVEYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2stZHVlLWRhdGUtYnV0dG9uXVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2stZHVlLWRhdGUtaW5wdXRdXCIpO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUxpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGVsZXRlLWxpc3QtYnV0dG9uXVwiKTtcbmV4cG9ydCBjb25zdCBjbGVhckNvbXBsZXRlVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2xlYXItY29tcGxldGUtdGFza3MtYnV0dG9uXVwiKTtcbiIsImltcG9ydCB7IHdlYnNpdGUgfSBmcm9tICcuL3dlYnNpdGUyLmpzJztcbmltcG9ydCAnLi9zdHlsZTIuY3NzJztcblxud2Vic2l0ZSgpO1xuXG5jb25zb2xlLmxvZygnV1AgZW50cnkgaW5kZXguanMnKTsiLCIvL1RPUCBUT0RPIExpc3Rcbi8vTG9jYWwgU3RvcmFnZTpcblxuLy9sb2NhbFN0b3JhZ2UuanNcblxuLy8gTG9jYWwgU3RvcmFnZSBFbGVtZW50c1xuZXhwb3J0IGNvbnN0IExPQ0FMX1NUT1JBR0VfTElTVF9LRVkgPSBcInRhc2subGlzdHNcIjtcbmV4cG9ydCBjb25zdCBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0xJU1RfSURfS0VZID0gXCJ0YXNrLnNlbGVjdGVkTGlzdElkXCI7XG5leHBvcnQgbGV0IGxpc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZKSkgfHwgW107XG5leHBvcnQgbGV0IHNlbGVjdGVkTGlzdElkID0ge3ZhbHVlIDpsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0xJU1RfSURfS0VZKX07XG4iLCIvL1RPUCBUT0RPIExpc3Rcbi8vVG9EbyBMaXN0XG5cbi8vVG8gV29yayBPbjpcbi8vRmlsdGVyIFRhc2tzOiBwcmlvcml0eSwgZHVlRGF0ZSwgZGF0ZSBhZGRlZC4gRmlsdGVyIHNlY29uZGFyeSBieSBub24gZG9taW5hdGUgc2VsZWN0aW9uLlxuLy9UYXNrOiBub3RlLCBwcmlvcml0eSwgYW5kIGR1ZSBkYXRlIHdpbGwgbm90IGFsaWduLWl0ZW1zOiBjZW50ZXIgd2l0aG91dCBvdmVyIHJpZGluZyBlbGxpcHNpcyBvbiBub3RlLlxuLy9UYXNrIGZ1bmN0aW9uYWxpdHk6IGFkZCBhIHNpbmdsZSBlZGl0IGJ1dHRvbiB0byB0aGUgZW50aXJlIHRhc2sgT1IgaGF2ZSBlZGl0cyBvbiBob3ZlciBvZiBlYWNoIGVsZW1lbnQ/XG4vL1ByaW9yaXR5OkNvbG9yIHByaW9yaXR5IGJhc2VkIG9uIG9wdGlvbiBzZWxlY3RlZC4gKHBsYWNlIHBvcHVwIHdpbmRvdyBpbiBhIGJldHRlciBsb2NhdGlvbi4gbGF0ZXIpXG4vL0NhbGVuZGFyOiBHZXQgZHVlRGF0ZSBkaXNwbGF5aW5nIG1hcmdpbi1yaWdodC5cbi8vVG8gcG9uZGVyIGF0IGEgZnV0dXJlIGRhdGU6XG4vLy50YXNrLWxpc3Q6IEV4cGxvcmUgc3BhY2luZyBvZiB0YXNrIGVsZW1lbnRzIHRvIHRoZSBjb250YWluZXIgaW5zdGVhZCBvZiB0aGUgYm9keS5cbi8vQWRkIERhcmsvTGlnaHQgZGlzcGxheSBvcHRpb24uXG5cblxuLy93ZWJzaXRlMi5qc1xuXG5pbXBvcnQge1xuICBsaXN0c0NvbnRhaW5lcixcbiAgbmV3TGlzdEZvcm0sXG4gIHRhc2tDb250YWluZXIsXG4gIG5ld1Rhc2tCdXR0b24sXG4gIHRhc2tOb3RlQnV0dG9uLFxuICB0YXNrUHJpb3JpdHlCdXR0b24sXG4gIHRhc2tEdWVEYXRlQnV0dG9uLFxuICBkZWxldGVMaXN0QnV0dG9uLFxuICBjbGVhckNvbXBsZXRlVGFza3NCdXR0b24sXG59IGZyb20gXCIuL2dsb2JhbERlY2xhcmF0aW9ucy5qc1wiO1xuXG5pbXBvcnQgKiBhcyBldmVudExpc3RlbmVycyBmcm9tIFwiLi9ldmVudExpc3RlbmVyczIuanNcIjtcblxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vZnVuY3Rpb25zMi5qc1wiO1xuXG5mdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKCkge1xuICBsaXN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRMaXN0ZW5lcnMuaGFuZGxlTGlzdHNDb250YWluZXIpO1xuICB0YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5oYW5kbGVUYXNrQ29udGFpbmVyKTtcbiAgbmV3TGlzdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmhhbmRsZU5ld0xpc3RGb3JtKTtcbiAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRMaXN0ZW5lcnMuaGFuZGxlTmV3VGFza0Zvcm0pO1xuICB0YXNrTm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRMaXN0ZW5lcnMuaGFuZGxlVGFza05vdGVCdXR0b24pO1xuICB0YXNrUHJpb3JpdHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmhhbmRsZVRhc2tQcmlvcml0eUJ1dHRvbik7XG4gIHRhc2tEdWVEYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5oYW5kbGVUYXNrRHVlRGF0ZUJ1dHRvbik7XG4gIGNsZWFyQ29tcGxldGVUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRMaXN0ZW5lcnMuaGFuZGxlQ2xlYXJDb21wbGV0ZVRhc2tzQnV0dG9uKTtcbiAgZGVsZXRlTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixldmVudExpc3RlbmVycy5oYW5kbGVEZWxldGVMaXN0QnV0dG9uKTtcbn1cbnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHdlYnNpdGUoKSB7XG5yZW5kZXIoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==