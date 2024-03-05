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

/* .new.task::placeholder {
    opacity: 0.5;
} */

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
}`, "",{"version":3,"sources":["webpack://./src/style2.css"],"names":[],"mappings":"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","sourcesContent":["/* TOP TODO List */\n/* TODO styling */\n\n/*why this doesn't this work. when applying the style to each individual element does?... <.task-name-label,.notes-label, .priority-label,.due-date-label { display: flex;align-items: center;}> */\n\n/* style2.css */\n:root {\n    --clr-primary: rgb(211, 149, 240);\n    --clr-light: #f4f4f4;\n    --clr-dark: #333;\n    --clr-warning: rgb(140, 11, 247);\n}\n\n*,\n*::before,\n*::after {\n    font-family: inherit;\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    font-family: 'Work Sans', sans-serif;\n    font-weight: 300;\n    font-size: 1.5rem;\n    background-color: var(--clr-primary);\n    color: var(--clr-light);\n    display: grid;\n    grid:\n        'header header header header'auto \"...... lists active ......\"auto / 1fr minmax(100px, 300px) minmax(250px, 500px) 1fr;\n}\n\n.title {\n    grid-area: header;\n    text-align: center;\n    font-size: calc(3vw + 2rem);\n    font-weight: 900;\n    color: rgba(0, 0, 0, 0.2);\n    margin: -0.1em 0 0.5em\n}\n\n.all-lists {\n    grid-area: lists;\n}\n\n.master-list {\n    font-size: 1.2rem;\n    line-height: 1.7;\n    list-style: circle;\n    padding-left: 1.1em;\n}\n\n.list-name {\n    cursor: pointer;\n\n}\n\nli {\n    list-style: none;\n    position: relative;\n}\n\nli::before {\n    /* style of visible bullet point*/\n    content: '\\2022';\n    display: inline-block;\n}\n\nli:hover::before {\n    transform: scale(1.3);\n}\n\n.list-name:hover {\n    opacity: 0.7;\n}\n\nform {\n    display: flex;\n}\n\n/* default set of parameters for most buttons */\n.btn {\n    cursor: pointer;\n    background: 0;\n    border: 0;\n    padding: 0;\n    color: inherit;\n}\n\n.btn.create {\n    font-size: 1.5rem;\n    grid-area: active;\n    font-weight: 900;\n    margin-right: 0.25em;\n    transition: opacity 250ms ease-in;\n}\n\n#btn-create-task {\n    color: var(--clr-primary);\n}\n\n.task-body form {\n    display: flex;\n    justify-content: space-between;\n}\n\n.task-btn {\n    align-items: center;\n    order: 3;\n    grid-area: active;\n    margin: .25em .25em .25em .25em;\n}\n\n.btn:hover {\n    opacity: 0.4;\n}\n\n.btn.delete {\n    font-weight: 700;\n    letter-spacing: 1px;\n    font-size: 1rem;\n}\n\n.btn.delete:hover {\n    color: var(--clr-warning);\n}\n\n.new {\n    grid-area: active;\n    background: transparent;\n    border: 0;\n    color: inherit;\n    border-bottom: 1px solid currentColor;\n    font-size: 1rem;\n    transition: border-bottom 150ms ease-in;\n    outline: none;\n    padding: .25em;\n    order: 2;\n    /* applying flex to <form> allows order: 2 to display button first but maintain second position when using tab.  Why does this not impact the add task button? */\n}\n\n/* .new.task::placeholder {\n    opacity: 0.5;\n} */\n\n.new::placeholder {\n    opacity: 0.5;\n    color: black;\n}\n\n.new:focus {\n    border-bottom-width: 3px;\n}\n\n.new:focus::placeholder {\n    opacity: 0.3;\n}\n\n.new.task {\n    width: 50%;\n    margin-bottom: 0;\n}\n\n.active-list {\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n\n.task-list {\n    --spacer: 1.5rem;\n    grid-area: active;\n    background: var(--clr-light);\n    color: var(--clr-dark);\n    align-self: start;\n    /* prevents My Lists from controlling size of Task List */\n}\n\n.task-header {\n    padding: var(--spacer);\n    background: #e4e4e4;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.list-title {\n    margin: 0 1em 0;\n    /* maintain spacing if long list name */\n}\n\n.task-count {\n    margin: 0;\n    font-size: 1rem;\n}\n\n.task-body {\n    padding: var(--spacer);\n    position: relative;\n}\n\n.task-temp {\n    display: flex;\n}\n\n.task-name-label {\n    position: relative;\n    align-items: center;\n    cursor: pointer;\n    margin-bottom: .15em;\n    margin-right: auto;\n    display: flex;\n    overflow: hidden;\n    white-space: nowrap;\n    /* text-overflow: ellipsis; MUST be adjusted in JS for effect*/\n    /* max-width: calc(100% - 300px);*/\n    flex: 0 0 33%;\n    /* resolves max-width not having a min size with window resize */\n}\n\n.task-note-label {\n    flex: 0 0 35%;\n    color: purple;\n    font-size: .6em;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.task-name-label:hover, .task-note-label:hover {\n    overflow: visible;\n    white-space: normal;\n    text-overflow: clip;\n    max-width: none;\n}\n\n.task-priority-label {\n    flex: 0 0 10%;\n    color: green;\n    font-size: .6em;\n}\n\n.task-due-date-label {\n    flex: 0 0 20%;\n    color: brown;\n    font-size: .6em;\n}\n\n[type='checkbox'] {\n    opacity: 0;\n    position: absolute;\n}\n\n/* visible checkbox radio button */\n.custom-checkbox {\n    --size: 0.75em;\n    display: inline-block;\n    width: var(--size);\n    height: var(--size);\n    margin-right: var(--size);\n    cursor: pointer;\n    border: 2px solid currentColor;\n    border-radius: 50%;\n    transform: scale(1);\n    transition: transform 200ms ease-in-out;\n    flex-shrink: 0;\n    /* prevents shrinking with long task name */\n}\n\n/* .task-name-label:hover .custom-checkbox { */\n/* changing from the above allows whole line to hover*/\n.task-temp:hover .custom-checkbox {\n    transform: scale(1.2);\n    color: var(--clr-primary);\n}\n\n[type=\"checkbox\"]:checked+.task-name-label .custom-checkbox {\n    background: var(--clr-primary);\n    border-color: var(--clr-primary);\n    box-shadow: inset 0 0 0px 3px white;\n}\n\n[type='checkbox']:checked+.task-name-label {\n    opacity: 0.5;\n}\n\n/* manages 'task complete' strike through*/\n.task-name-label::after {\n    content: '';\n    position: absolute;\n    left: 1.5em;\n    right: 0;\n    height: 3px;\n    background: currentColor;\n    transform: scaleX(0);\n    transform-origin: center;\n    transition: transform 200ms ease-in-out;\n}\n\n[type='checkbox']:checked+.task-name-label::after {\n    transform: scaleX(1);\n    transform-origin: initial;\n}\n\n.delete-buttons {\n    display: flex;\n    justify-content: space-evenly;\n    position: absolute;\n    width: 100%;\n    left: 0;\n    bottom: -30px;\n    color: var(--clr-light);\n}"],"sourceRoot":""}]);
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

//Add LoptrSir footer.

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

function myFooter() {
  const footer = document.createElement("footer");
  footer.style.backgroundColor = "#333";
  footer.style.fontSize = "1rem";
  footer.style.color = "#f8afe5";
  footer.style.padding = "3px";
  footer.style.textAlign = "center";
  footer.style.position = "fixed";
  footer.style.width = "100%";
  footer.style.bottom = "0";
  footer.innerHTML = "LoptrSir";
  return footer;
}

  const footerDiv = document.querySelector(".footer");
  footerDiv.appendChild(myFooter());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxhQUFhLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZ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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJpQztBQUNsQjs7QUFFdEIscURBQU87O0FBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7QUFFQTs7QUFFQTtBQUNPO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDdCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFZaUM7O0FBRXNCOztBQUVkOztBQUV6QztBQUNBLEVBQUUsa0VBQWMsMkJBQTJCLHFFQUFtQztBQUM5RSxFQUFFLGlFQUFhLDJCQUEyQixvRUFBa0M7QUFDNUUsRUFBRSwrREFBVywyQkFBMkIsa0VBQWdDO0FBQ3hFLEVBQUUsaUVBQWEsMkJBQTJCLGtFQUFnQztBQUMxRSxFQUFFLGtFQUFjLDJCQUEyQixxRUFBbUM7QUFDOUUsRUFBRSxzRUFBa0IsMkJBQTJCLHlFQUF1QztBQUN0RixFQUFFLHFFQUFpQiwyQkFBMkIsd0VBQXNDO0FBQ3BGLEVBQUUsNEVBQXdCLDJCQUEyQiwrRUFBNkM7QUFDbEcsRUFBRSxvRUFBZ0IsMEJBQTBCLHVFQUFxQztBQUNqRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUCxzREFBTTtBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vc3JjL3N0eWxlMi5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9zcmMvc3R5bGUyLmNzcz9kYTJiIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vc3JjL2V2ZW50TGlzdGVuZXJzMi5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9zcmMvZnVuY3Rpb25zMi5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9zcmMvZ2xvYmFsRGVjbGFyYXRpb25zLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL3NyYy93ZWJzaXRlMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogVE9QIFRPRE8gTGlzdCAqL1xuLyogVE9ETyBzdHlsaW5nICovXG5cbi8qd2h5IHRoaXMgZG9lc24ndCB0aGlzIHdvcmsuIHdoZW4gYXBwbHlpbmcgdGhlIHN0eWxlIHRvIGVhY2ggaW5kaXZpZHVhbCBlbGVtZW50IGRvZXM/Li4uIDwudGFzay1uYW1lLWxhYmVsLC5ub3Rlcy1sYWJlbCwgLnByaW9yaXR5LWxhYmVsLC5kdWUtZGF0ZS1sYWJlbCB7IGRpc3BsYXk6IGZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjt9PiAqL1xuXG4vKiBzdHlsZTIuY3NzICovXG46cm9vdCB7XG4gICAgLS1jbHItcHJpbWFyeTogcmdiKDIxMSwgMTQ5LCAyNDApO1xuICAgIC0tY2xyLWxpZ2h0OiAjZjRmNGY0O1xuICAgIC0tY2xyLWRhcms6ICMzMzM7XG4gICAgLS1jbHItd2FybmluZzogcmdiKDE0MCwgMTEsIDI0Nyk7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQ6XG4gICAgICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXInYXV0byBcIi4uLi4uLiBsaXN0cyBhY3RpdmUgLi4uLi4uXCJhdXRvIC8gMWZyIG1pbm1heCgxMDBweCwgMzAwcHgpIG1pbm1heCgyNTBweCwgNTAwcHgpIDFmcjtcbn1cblxuLnRpdGxlIHtcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBjYWxjKDN2dyArIDJyZW0pO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBtYXJnaW46IC0wLjFlbSAwIDAuNWVtXG59XG5cbi5hbGwtbGlzdHMge1xuICAgIGdyaWQtYXJlYTogbGlzdHM7XG59XG5cbi5tYXN0ZXItbGlzdCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICBsaXN0LXN0eWxlOiBjaXJjbGU7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjFlbTtcbn1cblxuLmxpc3QtbmFtZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG59XG5cbmxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxubGk6OmJlZm9yZSB7XG4gICAgLyogc3R5bGUgb2YgdmlzaWJsZSBidWxsZXQgcG9pbnQqL1xuICAgIGNvbnRlbnQ6ICdcXFxcMjAyMic7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5saTpob3Zlcjo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbi5saXN0LW5hbWU6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxuZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLyogZGVmYXVsdCBzZXQgb2YgcGFyYW1ldGVycyBmb3IgbW9zdCBidXR0b25zICovXG4uYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmJ0bi5jcmVhdGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGdyaWQtYXJlYTogYWN0aXZlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1ZW07XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xufVxuXG4jYnRuLWNyZWF0ZS10YXNrIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xufVxuXG4udGFzay1ib2R5IGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGFzay1idG4ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3JkZXI6IDM7XG4gICAgZ3JpZC1hcmVhOiBhY3RpdmU7XG4gICAgbWFyZ2luOiAuMjVlbSAuMjVlbSAuMjVlbSAuMjVlbTtcbn1cblxuLmJ0bjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC40O1xufVxuXG4uYnRuLmRlbGV0ZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmJ0bi5kZWxldGU6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jbHItd2FybmluZyk7XG59XG5cbi5uZXcge1xuICAgIGdyaWQtYXJlYTogYWN0aXZlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDE1MG1zIGVhc2UtaW47XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAuMjVlbTtcbiAgICBvcmRlcjogMjtcbiAgICAvKiBhcHBseWluZyBmbGV4IHRvIDxmb3JtPiBhbGxvd3Mgb3JkZXI6IDIgdG8gZGlzcGxheSBidXR0b24gZmlyc3QgYnV0IG1haW50YWluIHNlY29uZCBwb3NpdGlvbiB3aGVuIHVzaW5nIHRhYi4gIFdoeSBkb2VzIHRoaXMgbm90IGltcGFjdCB0aGUgYWRkIHRhc2sgYnV0dG9uPyAqL1xufVxuXG4vKiAubmV3LnRhc2s6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwLjU7XG59ICovXG5cbi5uZXc6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4ubmV3OmZvY3VzIHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XG59XG5cbi5uZXc6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwLjM7XG59XG5cbi5uZXcudGFzayB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYWN0aXZlLWxpc3Qge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4udGFzay1saXN0IHtcbiAgICAtLXNwYWNlcjogMS41cmVtO1xuICAgIGdyaWQtYXJlYTogYWN0aXZlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XG4gICAgY29sb3I6IHZhcigtLWNsci1kYXJrKTtcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgICAvKiBwcmV2ZW50cyBNeSBMaXN0cyBmcm9tIGNvbnRyb2xsaW5nIHNpemUgb2YgVGFzayBMaXN0ICovXG59XG5cbi50YXNrLWhlYWRlciB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcbiAgICBiYWNrZ3JvdW5kOiAjZTRlNGU0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5saXN0LXRpdGxlIHtcbiAgICBtYXJnaW46IDAgMWVtIDA7XG4gICAgLyogbWFpbnRhaW4gc3BhY2luZyBpZiBsb25nIGxpc3QgbmFtZSAqL1xufVxuXG4udGFzay1jb3VudCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnRhc2stYm9keSB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50YXNrLXRlbXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50YXNrLW5hbWUtbGFiZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAuMTVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgLyogdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IE1VU1QgYmUgYWRqdXN0ZWQgaW4gSlMgZm9yIGVmZmVjdCovXG4gICAgLyogbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7Ki9cbiAgICBmbGV4OiAwIDAgMzMlO1xuICAgIC8qIHJlc29sdmVzIG1heC13aWR0aCBub3QgaGF2aW5nIGEgbWluIHNpemUgd2l0aCB3aW5kb3cgcmVzaXplICovXG59XG5cbi50YXNrLW5vdGUtbGFiZWwge1xuICAgIGZsZXg6IDAgMCAzNSU7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgICBmb250LXNpemU6IC42ZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGFzay1uYW1lLWxhYmVsOmhvdmVyLCAudGFzay1ub3RlLWxhYmVsOmhvdmVyIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG4gICAgbWF4LXdpZHRoOiBub25lO1xufVxuXG4udGFzay1wcmlvcml0eS1sYWJlbCB7XG4gICAgZmxleDogMCAwIDEwJTtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC1zaXplOiAuNmVtO1xufVxuXG4udGFzay1kdWUtZGF0ZS1sYWJlbCB7XG4gICAgZmxleDogMCAwIDIwJTtcbiAgICBjb2xvcjogYnJvd247XG4gICAgZm9udC1zaXplOiAuNmVtO1xufVxuXG5bdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi8qIHZpc2libGUgY2hlY2tib3ggcmFkaW8gYnV0dG9uICovXG4uY3VzdG9tLWNoZWNrYm94IHtcbiAgICAtLXNpemU6IDAuNzVlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IHZhcigtLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XG4gICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zaXplKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICAvKiBwcmV2ZW50cyBzaHJpbmtpbmcgd2l0aCBsb25nIHRhc2sgbmFtZSAqL1xufVxuXG4vKiAudGFzay1uYW1lLWxhYmVsOmhvdmVyIC5jdXN0b20tY2hlY2tib3ggeyAqL1xuLyogY2hhbmdpbmcgZnJvbSB0aGUgYWJvdmUgYWxsb3dzIHdob2xlIGxpbmUgdG8gaG92ZXIqL1xuLnRhc2stdGVtcDpob3ZlciAuY3VzdG9tLWNoZWNrYm94IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcbn1cblxuW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkKy50YXNrLW5hbWUtbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwcHggM3B4IHdoaXRlO1xufVxuXG5bdHlwZT0nY2hlY2tib3gnXTpjaGVja2VkKy50YXNrLW5hbWUtbGFiZWwge1xuICAgIG9wYWNpdHk6IDAuNTtcbn1cblxuLyogbWFuYWdlcyAndGFzayBjb21wbGV0ZScgc3RyaWtlIHRocm91Z2gqL1xuLnRhc2stbmFtZS1sYWJlbDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxLjVlbTtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbn1cblxuW3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCsudGFzay1uYW1lLWxhYmVsOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogaW5pdGlhbDtcbn1cblxuLmRlbGV0ZS1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogLTMwcHg7XG4gICAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBa0I7QUFDbEIsaUJBQWlCOztBQUVqQixrTUFBa007O0FBRWxNLGVBQWU7QUFDZjtJQUNJLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGdDQUFnQztBQUNwQzs7QUFFQTs7O0lBR0ksb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYjs4SEFDMEg7QUFDOUg7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFF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b0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4Qix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRPUCBUT0RPIExpc3QgKi9cXG4vKiBUT0RPIHN0eWxpbmcgKi9cXG5cXG4vKndoeSB0aGlzIGRvZXNuJ3QgdGhpcyB3b3JrLiB3aGVuIGFwcGx5aW5nIHRoZSBzdHlsZSB0byBlYWNoIGluZGl2aWR1YWwgZWxlbWVudCBkb2VzPy4uLiA8LnRhc2stbmFtZS1sYWJlbCwubm90ZXMtbGFiZWwsIC5wcmlvcml0eS1sYWJlbCwuZHVlLWRhdGUtbGFiZWwgeyBkaXNwbGF5OiBmbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7fT4gKi9cXG5cXG4vKiBzdHlsZTIuY3NzICovXFxuOnJvb3Qge1xcbiAgICAtLWNsci1wcmltYXJ5OiByZ2IoMjExLCAxNDksIDI0MCk7XFxuICAgIC0tY2xyLWxpZ2h0OiAjZjRmNGY0O1xcbiAgICAtLWNsci1kYXJrOiAjMzMzO1xcbiAgICAtLWNsci13YXJuaW5nOiByZ2IoMTQwLCAxMSwgMjQ3KTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDpcXG4gICAgICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXInYXV0byBcXFwiLi4uLi4uIGxpc3RzIGFjdGl2ZSAuLi4uLi5cXFwiYXV0byAvIDFmciBtaW5tYXgoMTAwcHgsIDMwMHB4KSBtaW5tYXgoMjUwcHgsIDUwMHB4KSAxZnI7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygzdncgKyAycmVtKTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgbWFyZ2luOiAtMC4xZW0gMCAwLjVlbVxcbn1cXG5cXG4uYWxsLWxpc3RzIHtcXG4gICAgZ3JpZC1hcmVhOiBsaXN0cztcXG59XFxuXFxuLm1hc3Rlci1saXN0IHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICAgIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxLjFlbTtcXG59XFxuXFxuLmxpc3QtbmFtZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmxpOjpiZWZvcmUge1xcbiAgICAvKiBzdHlsZSBvZiB2aXNpYmxlIGJ1bGxldCBwb2ludCovXFxuICAgIGNvbnRlbnQ6ICdcXFxcMjAyMic7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxubGk6aG92ZXI6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuLmxpc3QtbmFtZTpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIGRlZmF1bHQgc2V0IG9mIHBhcmFtZXRlcnMgZm9yIG1vc3QgYnV0dG9ucyAqL1xcbi5idG4ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5idG4uY3JlYXRlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGdyaWQtYXJlYTogYWN0aXZlO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4jYnRuLWNyZWF0ZS10YXNrIHtcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG59XFxuXFxuLnRhc2stYm9keSBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay1idG4ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvcmRlcjogMztcXG4gICAgZ3JpZC1hcmVhOiBhY3RpdmU7XFxuICAgIG1hcmdpbjogLjI1ZW0gLjI1ZW0gLjI1ZW0gLjI1ZW07XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxufVxcblxcbi5idG4uZGVsZXRlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYnRuLmRlbGV0ZTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItd2FybmluZyk7XFxufVxcblxcbi5uZXcge1xcbiAgICBncmlkLWFyZWE6IGFjdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAxNTBtcyBlYXNlLWluO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAuMjVlbTtcXG4gICAgb3JkZXI6IDI7XFxuICAgIC8qIGFwcGx5aW5nIGZsZXggdG8gPGZvcm0+IGFsbG93cyBvcmRlcjogMiB0byBkaXNwbGF5IGJ1dHRvbiBmaXJzdCBidXQgbWFpbnRhaW4gc2Vjb25kIHBvc2l0aW9uIHdoZW4gdXNpbmcgdGFiLiAgV2h5IGRvZXMgdGhpcyBub3QgaW1wYWN0IHRoZSBhZGQgdGFzayBidXR0b24/ICovXFxufVxcblxcbi8qIC5uZXcudGFzazo6cGxhY2Vob2xkZXIge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufSAqL1xcblxcbi5uZXc6OnBsYWNlaG9sZGVyIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5uZXc6Zm9jdXMge1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XFxufVxcblxcbi5uZXc6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgb3BhY2l0eTogMC4zO1xcbn1cXG5cXG4ubmV3LnRhc2sge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4uYWN0aXZlLWxpc3Qge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgICAtLXNwYWNlcjogMS41cmVtO1xcbiAgICBncmlkLWFyZWE6IGFjdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLWNsci1kYXJrKTtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgIC8qIHByZXZlbnRzIE15IExpc3RzIGZyb20gY29udHJvbGxpbmcgc2l6ZSBvZiBUYXNrIExpc3QgKi9cXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG4gICAgYmFja2dyb3VuZDogI2U0ZTRlNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubGlzdC10aXRsZSB7XFxuICAgIG1hcmdpbjogMCAxZW0gMDtcXG4gICAgLyogbWFpbnRhaW4gc3BhY2luZyBpZiBsb25nIGxpc3QgbmFtZSAqL1xcbn1cXG5cXG4udGFzay1jb3VudCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4udGFzay1ib2R5IHtcXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzay10ZW1wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2stbmFtZS1sYWJlbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAuMTVlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAvKiB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgTVVTVCBiZSBhZGp1c3RlZCBpbiBKUyBmb3IgZWZmZWN0Ki9cXG4gICAgLyogbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7Ki9cXG4gICAgZmxleDogMCAwIDMzJTtcXG4gICAgLyogcmVzb2x2ZXMgbWF4LXdpZHRoIG5vdCBoYXZpbmcgYSBtaW4gc2l6ZSB3aXRoIHdpbmRvdyByZXNpemUgKi9cXG59XFxuXFxuLnRhc2stbm90ZS1sYWJlbCB7XFxuICAgIGZsZXg6IDAgMCAzNSU7XFxuICAgIGNvbG9yOiBwdXJwbGU7XFxuICAgIGZvbnQtc2l6ZTogLjZlbTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi50YXNrLW5hbWUtbGFiZWw6aG92ZXIsIC50YXNrLW5vdGUtbGFiZWw6aG92ZXIge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgdGV4dC1vdmVyZmxvdzogY2xpcDtcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcbn1cXG5cXG4udGFzay1wcmlvcml0eS1sYWJlbCB7XFxuICAgIGZsZXg6IDAgMCAxMCU7XFxuICAgIGNvbG9yOiBncmVlbjtcXG4gICAgZm9udC1zaXplOiAuNmVtO1xcbn1cXG5cXG4udGFzay1kdWUtZGF0ZS1sYWJlbCB7XFxuICAgIGZsZXg6IDAgMCAyMCU7XFxuICAgIGNvbG9yOiBicm93bjtcXG4gICAgZm9udC1zaXplOiAuNmVtO1xcbn1cXG5cXG5bdHlwZT0nY2hlY2tib3gnXSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLyogdmlzaWJsZSBjaGVja2JveCByYWRpbyBidXR0b24gKi9cXG4uY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgLS1zaXplOiAwLjc1ZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNpemUpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICAvKiBwcmV2ZW50cyBzaHJpbmtpbmcgd2l0aCBsb25nIHRhc2sgbmFtZSAqL1xcbn1cXG5cXG4vKiAudGFzay1uYW1lLWxhYmVsOmhvdmVyIC5jdXN0b20tY2hlY2tib3ggeyAqL1xcbi8qIGNoYW5naW5nIGZyb20gdGhlIGFib3ZlIGFsbG93cyB3aG9sZSBsaW5lIHRvIGhvdmVyKi9cXG4udGFzay10ZW1wOmhvdmVyIC5jdXN0b20tY2hlY2tib3gge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxufVxcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQrLnRhc2stbmFtZS1sYWJlbCAuY3VzdG9tLWNoZWNrYm94IHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2xyLXByaW1hcnkpO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCAzcHggd2hpdGU7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQrLnRhc2stbmFtZS1sYWJlbCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLyogbWFuYWdlcyAndGFzayBjb21wbGV0ZScgc3RyaWtlIHRocm91Z2gqL1xcbi50YXNrLW5hbWUtbGFiZWw6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMS41ZW07XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBoZWlnaHQ6IDNweDtcXG4gICAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcblt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQrLnRhc2stbmFtZS1sYWJlbDo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogaW5pdGlhbDtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogLTMwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZTIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZTIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL1RPUCBUT0RPIExpc3Rcbi8vRXZlbnQgTGlzdGVuZXIgRnVuY3Rpb25zXG5cbi8vZXZlbnRMaXN0ZW5lcnMyLmpzXG5cbi8vSW1wb3J0c1xuXG5pbXBvcnQge1xuICBuZXdMaXN0SW5wdXQsXG4gIG5ld1Rhc2tJbnB1dCxcbiAgdGFza05vdGVJbnB1dCxcbiAgdGFza1ByaW9yaXR5T3B0aW9ucyxcbiAgdGFza0R1ZURhdGVJbnB1dCxcbn0gZnJvbSBcIi4vZ2xvYmFsRGVjbGFyYXRpb25zLmpzXCI7XG5cbmltcG9ydCB7XG4gIGxpc3RzIGFzIGRlZmF1bHRMaXN0cyxcbiAgc2VsZWN0ZWRMaXN0SWQsXG59IGZyb20gXCIuL2xvY2FsU3RvcmFnZS5qc1wiO1xubGV0IGxpc3RzID0gZGVmYXVsdExpc3RzO1xuXG5pbXBvcnQge1xuICBjcmVhdGVMaXN0LFxuICBjcmVhdGVUYXNrLFxuICBoaWRlVGFza0RldGFpbHMsXG4gIHJlc2V0UHJpb3JpdHlSYWRpb0J1dHRvbnMsXG4gIHRvZ2dsZUlucHV0RmllbGQsXG4gIGlzVmFsaWREYXRlLFxuICBzYXZlQW5kUmVuZGVyLFxuICBzYXZlLFxuICByZW5kZXJUYXNrQ291bnQsXG59IGZyb20gXCIuL2Z1bmN0aW9uczIuanNcIjtcblxuY29uc29sZS5sb2coXCJFTDIgc2xpOlwiLCBzZWxlY3RlZExpc3RJZCk7XG5cbi8vIEV2ZW50IExpc3RlbmVyIEZ1bmN0aW9uc1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUxpc3RzQ29udGFpbmVyKGUpIHtcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJsaVwiKSB7XG4gICAgc2VsZWN0ZWRMaXN0SWQudmFsdWUgPSBlLnRhcmdldC5kYXRhc2V0Lmxpc3RJZDtcbiAgICBjb25zb2xlLmxvZyhcIkVMIEYgaGxjIHNsaTpcIiwgc2VsZWN0ZWRMaXN0SWQpO1xuICAgIHNhdmVBbmRSZW5kZXIoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVGFza0NvbnRhaW5lcihlKSB7XG4gIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIikge1xuICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQoKGxpc3QpID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkLnZhbHVlKTtcbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBzZWxlY3RlZExpc3QudGFza3MuZmluZChcbiAgICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSBlLnRhcmdldC5pZFxuICAgICk7XG4gICAgc2VsZWN0ZWRUYXNrLmNvbXBsZXRlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICBzYXZlKCk7XG4gICAgcmVuZGVyVGFza0NvdW50KHNlbGVjdGVkTGlzdCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU5ld0xpc3RGb3JtKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBsaXN0TmFtZSA9IG5ld0xpc3RJbnB1dC52YWx1ZTtcbiAgaWYgKGxpc3ROYW1lID09IG51bGwgfHwgbGlzdE5hbWUgPT0gXCJcIikgcmV0dXJuO1xuICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdChsaXN0TmFtZSk7XG4gIC8vIGNvbnNvbGUubG9nKCdFTCBuZXdMaXN0Rm9ybU5BTUU6JywgbGlzdCk7XG4gIG5ld0xpc3RJbnB1dC52YWx1ZSA9IG51bGw7XG4gIGxpc3RzLnB1c2gobGlzdCk7XG4gIGNvbnNvbGUubG9nKFwiRUwgbmV3TGlzdEZvcm1OQU1FOlwiLCBsaXN0KTtcbiAgY29uc29sZS5sb2coXCJFTCBuZXdMaXN0Rm9ybUFSUkFZOlwiLCBsaXN0cyk7XG4gIHNhdmVBbmRSZW5kZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU5ld1Rhc2tGb3JtKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0YXNrTmFtZSA9IG5ld1Rhc2tJbnB1dC52YWx1ZTtcbiAgaGlkZVRhc2tEZXRhaWxzKCk7XG4gIGlmICh0YXNrTmFtZSA9PSBudWxsIHx8IHRhc2tOYW1lID09IFwiXCIpIHJldHVybjtcbiAgY29uc3QgdGFza05vdGUgPSB0YXNrTm90ZUlucHV0LnZhbHVlO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPVxuICAgIHRhc2tQcmlvcml0eU9wdGlvbnMucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKT8udmFsdWUgfHxcbiAgICBcIlwiO1xuICBjb25zdCBkdWVEYXRlID0gdGFza0R1ZURhdGVJbnB1dC52YWx1ZTtcbiAgY29uc29sZS5sb2coXCJFTCBuVEYgZGF0ZSB2YWx1ZTpcIiwgZHVlRGF0ZSk7XG4gIGlmICghaXNWYWxpZERhdGUoZHVlRGF0ZSkpIHtcbiAgICBhbGVydChcIlBsZWFzZSBlbnRlciB2YWxpZCBtbS9kZC95eVwiKTtcbiAgICB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlID0gbnVsbDtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2sodGFza05hbWUsIHRhc2tOb3RlLCB0YXNrUHJpb3JpdHksIGR1ZURhdGUpO1xuICBuZXdUYXNrSW5wdXQudmFsdWUgPSBudWxsO1xuICB0YXNrTm90ZUlucHV0LnZhbHVlID0gbnVsbDtcbiAgdGFza0R1ZURhdGVJbnB1dC52YWx1ZSA9IG51bGw7XG4gIHJlc2V0UHJpb3JpdHlSYWRpb0J1dHRvbnModGFza1ByaW9yaXR5T3B0aW9ucyk7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQoKGxpc3QpID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkLnZhbHVlKTtcbiAgc2VsZWN0ZWRMaXN0LnRhc2tzLnB1c2godGFzayk7XG4gIHNhdmVBbmRSZW5kZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRhc2tOb3RlQnV0dG9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB0b2dnbGVJbnB1dEZpZWxkKHRhc2tOb3RlSW5wdXQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVGFza1ByaW9yaXR5QnV0dG9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB0b2dnbGVJbnB1dEZpZWxkKHRhc2tQcmlvcml0eU9wdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVGFza0R1ZURhdGVCdXR0b24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZ2dsZUlucHV0RmllbGQodGFza0R1ZURhdGVJbnB1dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDbGVhckNvbXBsZXRlVGFza3NCdXR0b24gKGUpIHtcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gbGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gc2VsZWN0ZWRMaXN0SWQudmFsdWUpO1xuICBzZWxlY3RlZExpc3QudGFza3MgPSBzZWxlY3RlZExpc3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZSk7XG4gIHNhdmVBbmRSZW5kZXIoKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVEZWxldGVMaXN0QnV0dG9uIChlKSB7XG4gIGNvbnNvbGUubG9nKFwiRUwgZGxiIHByZTpcIiwgbGlzdHMpO1xuICAvLyBsaXN0cyA9IGxpc3RzLmZpbHRlcigobGlzdCkgPT4gbGlzdC5pZCAhPT0gc2VsZWN0ZWRMaXN0SWQudmFsdWUpO1xuICAvLyoqKioqdXNpbmcgc3BsaWNlIGluc3RlYWQgb2YgZmlsdGVyIGVkaXRzIHRvIG9yaWdpbiBsaXN0cyBpbiBnbG9iYWxEZWNsYXJhdGlvbnMgaW5zdGVhZCBvZiBsb2NhbCBsaXN0cyBkZWNsYXJlZCBhZnRlciBpbXBvcnQuKioqKipcbiAgbGlzdHMuc3BsaWNlKGxpc3RzLmZpbmRJbmRleChsaXN0ID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkLnZhbHVlKSwgMSk7XG4gIGNvbnNvbGUubG9nKFwiRUwgZGxiOlwiLCBsaXN0cyk7XG4gIGNvbnNvbGUubG9nKFwiRUwgZGxiIHNsaTpcIiwgc2VsZWN0ZWRMaXN0SWQpO1xuICBzZWxlY3RlZExpc3RJZC52YWx1ZSA9IG51bGw7XG4gIGNvbnNvbGUubG9nKFwiRUwgZGxiIHNsaSBudWxsOlwiLCBzZWxlY3RlZExpc3RJZCk7XG4gIGNvbnNvbGUubG9nKFwiRUwgZGxiIG51bGw6XCIsIGxpc3RzKTtcbiAgc2F2ZUFuZFJlbmRlcigpO1xufTsiLCIvL1RPUCBUT0RPIExpc3Rcbi8vRnVuY3Rpb25zXG5cbi8vZnVuY3Rpb25zMi5qc1xuXG4vL0ltcG9ydHNcbmltcG9ydCB7XG4gIGxpc3RzQ29udGFpbmVyLFxuICB0YXNrRGlzcGxheUNvbnRhaW5lcixcbiAgbGlzdFRpdGxlRWxlbWVudCxcbiAgdGFza0NvdW50RWxlbWVudCxcbiAgdGFza0NvbnRhaW5lcixcbiAgdGFza1RlbXBsYXRlLFxuICB0YXNrTm90ZUlucHV0LFxuICB0YXNrUHJpb3JpdHlPcHRpb25zLFxuICB0YXNrRHVlRGF0ZUlucHV0LFxufSBmcm9tIFwiLi9nbG9iYWxEZWNsYXJhdGlvbnMuanNcIjtcblxuaW1wb3J0IHtcbiAgTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSxcbiAgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9MSVNUX0lEX0tFWSxcbiAgbGlzdHMsXG4gIHNlbGVjdGVkTGlzdElkLFxufSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2UuanNcIjtcblxuLy9GdW5jdGlvbnNcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KG5hbWUpIHtcbiAgY29uc29sZS5sb2coXCJGIGNyZWF0ZUxpc3Q6XCIsIG5hbWUpO1xuICByZXR1cm4ge1xuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgbmFtZTogbmFtZSxcbiAgICB0YXNrczogW10sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKG5hbWUsIG5vdGUsIHByaW9yaXR5LCBkdWVEYXRlKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIG5vdGU6IG5vdGUgfHwgXCJcIixcbiAgICBwcmlvcml0eTogcHJpb3JpdHkgfHwgXCJcIixcbiAgICBkdWVEYXRlOiBkdWVEYXRlIHx8IFwiXCIsXG4gICAgY29tcGxldGU6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZVRhc2tEZXRhaWxzKCkge1xuICB0YXNrTm90ZUlucHV0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgdGFza1ByaW9yaXR5T3B0aW9ucy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHRhc2tEdWVEYXRlSW5wdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRQcmlvcml0eVJhZGlvQnV0dG9ucyhjb250YWluZXIpIHtcbiAgY29uc3QgcmFkaW9CdXR0b25zID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuICByYWRpb0J1dHRvbnMuZm9yRWFjaCgocmFkaW9CdXR0b24pID0+IHtcbiAgICByYWRpb0J1dHRvbi5jaGVja2VkID0gZmFsc2U7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlSW5wdXRGaWVsZChpbnB1dEZpZWxkKSB7XG4gIGlmIChpbnB1dEZpZWxkLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgIGlucHV0RmllbGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9IGVsc2Uge1xuICAgIGlucHV0RmllbGQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBpbnB1dEZpZWxkLmZvY3VzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWREYXRlKGRhdGVTdHJpbmcpIHtcbiAgaWYgKGRhdGVTdHJpbmcgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBkYXRlUGF0dGVybiA9IC9eKDBbMS05XXwxWzAtMl0pXFwvKDBbMS05XXxbMTJdXFxkfDNbMDFdKVxcL1xcZHsyfSQvO1xuICBpZiAoIWRhdGVQYXR0ZXJuLnRlc3QoZGF0ZVN0cmluZykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgW21vbnRoLCBkYXksIHllYXJdID0gZGF0ZVN0cmluZy5zcGxpdChcIi9cIikubWFwKE51bWJlcik7XG4gIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XG4gIGlmIChkYXkgPCAxIHx8IGRheSA+IGRheXNJbk1vbnRoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh5ZWFyIDwgMCB8fCB5ZWFyID4gOTkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlQW5kUmVuZGVyKCkge1xuICBzYXZlKCk7XG4gIHJlbmRlcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZSgpIHtcbiAgY29uc29sZS5sb2coXCJGIHNhdmUgbGlzdHMgcHJlOlwiLCBsaXN0cyk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfTElTVF9LRVksIEpTT04uc3RyaW5naWZ5KGxpc3RzKSk7XG4gIGNvbnNvbGUubG9nKFwiRiBzYXZlIGxpc3RzOlwiLCBsaXN0cyk7XG4gIGNvbnNvbGUubG9nKFwiRiBzYXZlIHNsaSBudWxsOlwiLCBzZWxlY3RlZExpc3RJZCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfU0VMRUNURURfTElTVF9JRF9LRVksIHNlbGVjdGVkTGlzdElkKTtcbiAgY29uc29sZS5sb2coXCJGIHNhdmUgc2xpIG51bGwgcG9zdDpcIiwgc2VsZWN0ZWRMaXN0SWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKCkge1xuICBjbGVhckVsZW1lbnQobGlzdHNDb250YWluZXIpO1xuICByZW5kZXJMaXN0cygpO1xuICBjb25zdCBzZWxlY3RlZExpc3QgPSBsaXN0cy5maW5kKChsaXN0KSA9PiBsaXN0LmlkID09PSBzZWxlY3RlZExpc3RJZC52YWx1ZSk7XG4gIGlmIChzZWxlY3RlZExpc3RJZC52YWx1ZSA9PSBudWxsKSB7XG4gICAgdGFza0Rpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKFwiRiByZW5kZXIgc2w6XCIsIHNlbGVjdGVkTGlzdCk7XG4gICAgdGFza0Rpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBsaXN0VGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IHNlbGVjdGVkTGlzdC5uYW1lO1xuICAgIHJlbmRlclRhc2tDb3VudChzZWxlY3RlZExpc3QpO1xuICAgIGNsZWFyRWxlbWVudCh0YXNrQ29udGFpbmVyKTtcbiAgICByZW5kZXJUYXNrcyhzZWxlY3RlZExpc3QpO1xuICB9XG59XG5cbi8vY2xlYXJFbGVtZW50IGF2b2lkcyBkdXBsaWNhdGlvbiBvZiBwcmV2aW91c2x5IGRpc3BsYXllZCBpdGVtc1xuZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0cygpIHtcbiAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgIGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpc3RFbGVtZW50LmRhdGFzZXQubGlzdElkID0gbGlzdC5pZDtcbiAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGlzdC1uYW1lXCIpO1xuICAgIGxpc3RFbGVtZW50LmlubmVyVGV4dCA9IGxpc3QubmFtZTtcbiAgICBjb25zb2xlLmxvZyhcIkYgcmwgc2xpOlwiLCBzZWxlY3RlZExpc3RJZCk7XG4gICAgaWYgKGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkLnZhbHVlKSB7XG4gICAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWxpc3RcIik7XG4gICAgfVxuICAgIGxpc3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RFbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUYXNrQ291bnQoc2VsZWN0ZWRMaXN0KSB7XG4gIGNvbnN0IGluY29tcGxldGVUYXNrQ291bnQgPSBzZWxlY3RlZExpc3QudGFza3MuZmlsdGVyKFxuICAgICh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZVxuICApLmxlbmd0aDtcbiAgY29uc3QgdGFza1N0cmluZyA9IGluY29tcGxldGVUYXNrQ291bnQgPT09IDEgPyBcInRhc2tcIiA6IFwidGFza3NcIjtcbiAgdGFza0NvdW50RWxlbWVudC5pbm5lclRleHQgPSBgJHtpbmNvbXBsZXRlVGFza0NvdW50fSAke3Rhc2tTdHJpbmd9IHJlbWFpbmluZ2A7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tzKHNlbGVjdGVkTGlzdCkge1xuICBzZWxlY3RlZExpc3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0YXNrVGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgY29uc3QgY2hlY2tib3ggPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgY2hlY2tib3guaWQgPSB0YXNrLmlkO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNvbXBsZXRlO1xuICAgIGNvbnN0IHRhc2tOYW1lTGFiZWwgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbmFtZS1sYWJlbFwiKTtcbiAgICBjb25zdCB0YXNrTm90ZUxhYmVsID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLW5vdGUtbGFiZWxcIik7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5TGFiZWwgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stcHJpb3JpdHktbGFiZWxcIik7XG4gICAgY29uc3QgdGFza0R1ZURhdGVMYWJlbCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kdWUtZGF0ZS1sYWJlbFwiKTtcbiAgICB0YXNrTmFtZUxhYmVsLmh0bWxGb3IgPSB0YXNrLmlkO1xuICAgIHRhc2tOb3RlTGFiZWwuaHRtbEZvciA9IHRhc2suaWQ7XG4gICAgdGFza1ByaW9yaXR5TGFiZWwuaHRtbEZvciA9IHRhc2suaWQ7XG4gICAgdGFza0R1ZURhdGVMYWJlbC5odG1sRm9yID0gdGFzay5pZDtcbiAgICB0YXNrTmFtZUxhYmVsLmFwcGVuZCh0YXNrLm5hbWUpO1xuICAgIHRhc2tOb3RlTGFiZWwuYXBwZW5kKHRhc2subm90ZSk7XG4gICAgdGFza1ByaW9yaXR5TGFiZWwuYXBwZW5kKHRhc2sucHJpb3JpdHkpO1xuICAgIHRhc2tEdWVEYXRlTGFiZWwuYXBwZW5kKHRhc2suZHVlRGF0ZSk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XG4gIH0pO1xufVxuIiwiLy9UT1AgVE9ETyBMaXN0XG4vL0dsb2JhbCBEZWNsYXJhdGlvbnMgXG5cbi8vZ2xvYmFsRGVjbGFyYXRpb25zLmpzXG5leHBvcnQgY29uc3QgbGlzdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbGlzdHNdXCIpO1xuZXhwb3J0IGNvbnN0IG5ld0xpc3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1saXN0LWZvcm1dXCIpO1xuZXhwb3J0IGNvbnN0IG5ld0xpc3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctbGlzdC1pbnB1dF1cIik7XG5leHBvcnQgY29uc3QgdGFza0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFzay1kaXNwbGF5LWNvbnRhaW5lcl1cIik7XG5leHBvcnQgY29uc3QgbGlzdFRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1saXN0LXRpdGxlXVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrQ291bnRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2stY291bnRdXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFza3NdXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10ZW1wbGF0ZVwiKTtcbmV4cG9ydCBjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10YXNrLWJ1dHRvbl1cIik7XG5leHBvcnQgY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10YXNrLWlucHV0XVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrTm90ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrLW5vdGVzLWJ1dHRvbl1cIik7XG5leHBvcnQgY29uc3QgdGFza05vdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrLW5vdGUtaW5wdXRdXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tQcmlvcml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrLXByaW9yaXR5LWJ1dHRvbl1cIik7XG5leHBvcnQgY29uc3QgdGFza1ByaW9yaXR5T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1wcmlvcml0eS1vcHRpb25zXCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tEdWVEYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2stZHVlLWRhdGUtYnV0dG9uXVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2stZHVlLWRhdGUtaW5wdXRdXCIpO1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUxpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGVsZXRlLWxpc3QtYnV0dG9uXVwiKTtcbmV4cG9ydCBjb25zdCBjbGVhckNvbXBsZXRlVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2xlYXItY29tcGxldGUtdGFza3MtYnV0dG9uXVwiKTtcbiIsImltcG9ydCB7IHdlYnNpdGUgfSBmcm9tICcuL3dlYnNpdGUyLmpzJztcbmltcG9ydCAnLi9zdHlsZTIuY3NzJztcblxud2Vic2l0ZSgpO1xuXG5jb25zb2xlLmxvZygnV1AgZW50cnkgaW5kZXguanMnKTsiLCIvL1RPUCBUT0RPIExpc3Rcbi8vTG9jYWwgU3RvcmFnZTpcblxuLy9sb2NhbFN0b3JhZ2UuanNcblxuLy8gTG9jYWwgU3RvcmFnZSBFbGVtZW50c1xuZXhwb3J0IGNvbnN0IExPQ0FMX1NUT1JBR0VfTElTVF9LRVkgPSBcInRhc2subGlzdHNcIjtcbmV4cG9ydCBjb25zdCBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0xJU1RfSURfS0VZID0gXCJ0YXNrLnNlbGVjdGVkTGlzdElkXCI7XG5leHBvcnQgbGV0IGxpc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZKSkgfHwgW107XG5leHBvcnQgbGV0IHNlbGVjdGVkTGlzdElkID0ge3ZhbHVlIDpsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0xJU1RfSURfS0VZKX07XG4iLCIvL1RPUCBUT0RPIExpc3Rcbi8vVG9EbyBMaXN0XG5cbi8vQWRkIExvcHRyU2lyIGZvb3Rlci5cblxuLy9UbyBXb3JrIE9uOlxuLy9GaWx0ZXIgVGFza3M6IHByaW9yaXR5LCBkdWVEYXRlLCBkYXRlIGFkZGVkLiBGaWx0ZXIgc2Vjb25kYXJ5IGJ5IG5vbiBkb21pbmF0ZSBzZWxlY3Rpb24uXG4vL1Rhc2s6IG5vdGUsIHByaW9yaXR5LCBhbmQgZHVlIGRhdGUgd2lsbCBub3QgYWxpZ24taXRlbXM6IGNlbnRlciB3aXRob3V0IG92ZXIgcmlkaW5nIGVsbGlwc2lzIG9uIG5vdGUuXG4vL1Rhc2sgZnVuY3Rpb25hbGl0eTogYWRkIGEgc2luZ2xlIGVkaXQgYnV0dG9uIHRvIHRoZSBlbnRpcmUgdGFzayBPUiBoYXZlIGVkaXRzIG9uIGhvdmVyIG9mIGVhY2ggZWxlbWVudD9cbi8vUHJpb3JpdHk6Q29sb3IgcHJpb3JpdHkgYmFzZWQgb24gb3B0aW9uIHNlbGVjdGVkLiAocGxhY2UgcG9wdXAgd2luZG93IGluIGEgYmV0dGVyIGxvY2F0aW9uLiBsYXRlcilcbi8vQ2FsZW5kYXI6IEdldCBkdWVEYXRlIGRpc3BsYXlpbmcgbWFyZ2luLXJpZ2h0LlxuLy9UbyBwb25kZXIgYXQgYSBmdXR1cmUgZGF0ZTpcbi8vLnRhc2stbGlzdDogRXhwbG9yZSBzcGFjaW5nIG9mIHRhc2sgZWxlbWVudHMgdG8gdGhlIGNvbnRhaW5lciBpbnN0ZWFkIG9mIHRoZSBib2R5LlxuLy9BZGQgRGFyay9MaWdodCBkaXNwbGF5IG9wdGlvbi5cblxuXG4vL3dlYnNpdGUyLmpzXG5cbmltcG9ydCB7XG4gIGxpc3RzQ29udGFpbmVyLFxuICBuZXdMaXN0Rm9ybSxcbiAgdGFza0NvbnRhaW5lcixcbiAgbmV3VGFza0J1dHRvbixcbiAgdGFza05vdGVCdXR0b24sXG4gIHRhc2tQcmlvcml0eUJ1dHRvbixcbiAgdGFza0R1ZURhdGVCdXR0b24sXG4gIGRlbGV0ZUxpc3RCdXR0b24sXG4gIGNsZWFyQ29tcGxldGVUYXNrc0J1dHRvbixcbn0gZnJvbSBcIi4vZ2xvYmFsRGVjbGFyYXRpb25zLmpzXCI7XG5cbmltcG9ydCAqIGFzIGV2ZW50TGlzdGVuZXJzIGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzMi5qc1wiO1xuXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9mdW5jdGlvbnMyLmpzXCI7XG5cbmZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGxpc3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5oYW5kbGVMaXN0c0NvbnRhaW5lcik7XG4gIHRhc2tDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmhhbmRsZVRhc2tDb250YWluZXIpO1xuICBuZXdMaXN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRMaXN0ZW5lcnMuaGFuZGxlTmV3TGlzdEZvcm0pO1xuICBuZXdUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5oYW5kbGVOZXdUYXNrRm9ybSk7XG4gIHRhc2tOb3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5oYW5kbGVUYXNrTm90ZUJ1dHRvbik7XG4gIHRhc2tQcmlvcml0eUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZXZlbnRMaXN0ZW5lcnMuaGFuZGxlVGFza1ByaW9yaXR5QnV0dG9uKTtcbiAgdGFza0R1ZURhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50TGlzdGVuZXJzLmhhbmRsZVRhc2tEdWVEYXRlQnV0dG9uKTtcbiAgY2xlYXJDb21wbGV0ZVRhc2tzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldmVudExpc3RlbmVycy5oYW5kbGVDbGVhckNvbXBsZXRlVGFza3NCdXR0b24pO1xuICBkZWxldGVMaXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGV2ZW50TGlzdGVuZXJzLmhhbmRsZURlbGV0ZUxpc3RCdXR0b24pO1xufVxuc2V0dXBFdmVudExpc3RlbmVycygpO1xuXG5mdW5jdGlvbiBteUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzMzM1wiO1xuICBmb290ZXIuc3R5bGUuZm9udFNpemUgPSBcIjFyZW1cIjtcbiAgZm9vdGVyLnN0eWxlLmNvbG9yID0gXCIjZjhhZmU1XCI7XG4gIGZvb3Rlci5zdHlsZS5wYWRkaW5nID0gXCIzcHhcIjtcbiAgZm9vdGVyLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGZvb3Rlci5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgZm9vdGVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gIGZvb3Rlci5zdHlsZS5ib3R0b20gPSBcIjBcIjtcbiAgZm9vdGVyLmlubmVySFRNTCA9IFwiTG9wdHJTaXJcIjtcbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3RlclwiKTtcbiAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKG15Rm9vdGVyKCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gd2Vic2l0ZSgpIHtcbnJlbmRlcigpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9