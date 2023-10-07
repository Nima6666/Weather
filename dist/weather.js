/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/day.jpg */ "./src/assets/day.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  font-family: "Calligraffitti", cursive;
  font-family: "Mooli", sans-serif;
  user-select: none;
}

body {
  background: antiquewhite;
  margin: 0px;
  height: 100vh;
  background: linear-gradient(rgba(124, 124, 124, 0.2), rgba(124, 124, 124, 0.2)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
}

#locationTime {
  top: 30px;
  left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
}

#currentTime {
  margin: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: larger;
}

#currentTime > #year {
  font-size: x-large;
}

.location {
  font-size: xx-large;
}

.content {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  color: aliceblue;
}

.temp {
  font-size: xx-large;
  font-weight: bolder;
}

.sliderBox {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 40px;
  display: flex;
  justify-content: flex-end;
}

#box {
  height: 40px;
  border-radius: 20px;
  width: 80px;
  background: rgb(132, 172, 109);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.5);
}

#txt {
  padding: 0px 12px 0px 12px;
}

#box:hover {
  cursor: pointer;
}

#slider {
  height: 32px;
  width: 32px;
  border: 1px solid gold;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);
  margin: 0px 5px 0px 5px;
  border-radius: 50%;
  background: green;
}

#today {
  padding: 30px;
  display: flex;
  flex-direction: row;
}

#today > div {
  flex: 1;
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  padding: 0px 10px 0px 10px;
}

#today > div > img {
  height: 50px;
  padding-right: 5px;
}

.title {
  font-size: larger;
  padding-bottom: 7px;
}

#forecastData {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);
}

#forecastData > * {
  flex: 1;
  width: 100%;
  display: flex;
  overflow: scroll;
}

#hourlyForecast {
  align-items: center;
}

#hourlyForecast > * {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.forTime {
  font-size: larger;
  font-weight: bolder;
}

.hour {
  width: 14.3vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .hour > div {
  width: 14.3vw;
} */
.hour > img {
  height: 80px;
}

#dailyForecast > div > .day {
  font-weight: bolder;
  font-size: larger;
}

#dailyForecast > div > .imm {
  display: flex;
  justify-content: center;
  align-items: center;
}

#dailyForecast > div > .imm > div > .max {
  font-size: larger;
}

#dailyForecast > * {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

form {
  position: absolute;
  width: 30vw;
  top: 50px;
  right: 35vw;
  z-index: 1;
  border: 1px solid black;
  display: flex;
}

form > input {
  width: 100%;
  height: 40px;
  padding-left: 20px;
  font-size: larger;
}

form > button {
  width: 20%;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sCAAA;EACA,gCAAA;EACA,iBAAA;AACF;;AACA;EACE,wBAAA;EACA,WAAA;EACA,aAAA;EACA,wHAAA;EAKA,sBAAA;EACA,4BAAA;AAFF;;AAKA;EACE,SAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,6BAAA;EACA,aAAA;AAFF;;AAKA;EACE,YAAA;EACA,OAAA;EACA,aAAA;EACA,sBAAA;EACA,iBAAA;AAFF;;AAKA;EACE,kBAAA;AAFF;;AAKA;EACE,mBAAA;AAFF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;AADF;;AAIA;EACE,mBAAA;EACA,mBAAA;AADF;;AAIA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;AADF;;AAIA;EACE,YAAA;EACA,mBAAA;EACA,WAAA;EACA,8BAAA;EACA,aAAA;EACA,2BAAA;EACA,8BAAA;EACA,mBAAA;EACA,gDAAA;AADF;;AAIA;EACE,0BAAA;AADF;;AAIA;EACE,eAAA;AADF;;AAIA;EACE,YAAA;EACA,WAAA;EACA,sBAAA;EACA,sCAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;AADF;;AAIA;EACE,aAAA;EACA,aAAA;EACA,mBAAA;AADF;;AAIA;EACE,OAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,0BAAA;AADF;;AAIA;EACE,YAAA;EACA,kBAAA;AADF;;AAIA;EACE,iBAAA;EACA,mBAAA;AADF;;AAIA;EACE,OAAA;EACA,aAAA;EACA,sBAAA;EACA,oCAAA;AADF;;AAIA;EACE,OAAA;EACA,WAAA;EACA,aAAA;EACA,gBAAA;AADF;;AAIA;EACE,mBAAA;AADF;;AAIA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AADF;;AAIA;EACE,iBAAA;EACA,mBAAA;AADF;;AAIA;EACE,aAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AADF;;AAIA;;GAAA;AAIA;EACE,YAAA;AAFF;;AAKA;EACE,mBAAA;EACA,iBAAA;AAFF;;AAKA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AAFF;;AAKA;EACE,iBAAA;AAFF;;AAKA;EACE,OAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;AAFF;;AAKA;EACE,kBAAA;EACA,WAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;EACA,uBAAA;EACA,aAAA;AAFF;;AAKA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;AAFF;;AAKA;EACE,UAAA;AAFF","sourcesContent":["* {\n  font-family: \"Calligraffitti\", cursive;\n  font-family: \"Mooli\", sans-serif;\n  user-select: none;\n}\nbody {\n  background: antiquewhite;\n  margin: 0px;\n  height: 100vh;\n  background: linear-gradient(\n      rgba(124, 124, 124, 0.2),\n      rgba(124, 124, 124, 0.2)\n    ),\n    url(\"./assets/day.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n#locationTime {\n  top: 30px;\n  left: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding: 20px;\n}\n\n#currentTime {\n  margin: 10px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  font-size: larger;\n}\n\n#currentTime > #year {\n  font-size: x-large;\n}\n\n.location {\n  font-size: xx-large;\n}\n.content {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: 100%;\n  color: aliceblue;\n}\n\n.temp {\n  font-size: xx-large;\n  font-weight: bolder;\n}\n\n.sliderBox {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  height: 40px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n#box {\n  height: 40px;\n  border-radius: 20px;\n  width: 80px;\n  background: rgb(132, 172, 109);\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.5);\n}\n\n#txt {\n  padding: 0px 12px 0px 12px;\n}\n\n#box:hover {\n  cursor: pointer;\n}\n\n#slider {\n  height: 32px;\n  width: 32px;\n  border: 1px solid gold;\n  box-shadow: 2px 2px rgba(0, 0, 0, 0.5);\n  margin: 0px 5px 0px 5px;\n  border-radius: 50%;\n  background: green;\n}\n\n#today {\n  padding: 30px;\n  display: flex;\n  flex-direction: row;\n}\n\n#today > div {\n  flex: 1;\n  display: flex;\n  height: 100px;\n  justify-content: center;\n  align-items: center;\n  padding: 0px 10px 0px 10px;\n}\n\n#today > div > img {\n  height: 50px;\n  padding-right: 5px;\n}\n\n.title {\n  font-size: larger;\n  padding-bottom: 7px;\n}\n\n#forecastData {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n#forecastData > * {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  overflow: scroll;\n}\n\n#hourlyForecast {\n  align-items: center;\n}\n\n#hourlyForecast > * {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.forTime {\n  font-size: larger;\n  font-weight: bolder;\n}\n\n.hour {\n  width: 14.3vw;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* .hour > div {\n  width: 14.3vw;\n} */\n\n.hour > img {\n  height: 80px;\n}\n\n#dailyForecast > div > .day {\n  font-weight: bolder;\n  font-size: larger;\n}\n\n#dailyForecast > div > .imm {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#dailyForecast > div > .imm > div > .max {\n  font-size: larger;\n}\n\n#dailyForecast > * {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\nform {\n  position: absolute;\n  width: 30vw;\n  top: 50px;\n  right: calc((100vw / 2) - 15vw);\n  z-index: 1;\n  border: 1px solid black;\n  display: flex;\n}\n\nform > input {\n  width: 100%;\n  height: 40px;\n  padding-left: 20px;\n  font-size: larger;\n}\n\nform > button {\n  width: 20%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/scripts/domMan.js":
/*!*******************************!*\
  !*** ./src/scripts/domMan.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domMain: () => (/* binding */ domMain),
/* harmony export */   getInfo: () => (/* binding */ getInfo)
/* harmony export */ });
/* harmony import */ var _assets_thermometer_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/thermometer.png */ "./src/assets/thermometer.png");
/* harmony import */ var _assets_rain_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/rain.png */ "./src/assets/rain.png");
/* harmony import */ var _assets_humidity_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/humidity.png */ "./src/assets/humidity.png");
/* harmony import */ var _assets_visibility_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/visibility.png */ "./src/assets/visibility.png");
/* harmony import */ var _assets_wind_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/wind.png */ "./src/assets/wind.png");






function updateTime(date) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "march",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December.",
  ];

  const dateRaw = date.split(" ")[0];
  const timeStr = date.split(" ")[1];

  const dateData = new Date(dateRaw);
  const dayOfWeek = daysOfWeek[dateData.getDay()];
  const monthOfYear = monthsOfYear[dateData.getMonth()];

  const year = dateRaw.split("-")[0];
  const tarik = dateRaw.split("-")[1];

  const [hour, minute] = timeStr.split(":");

  const formattedHour = hour % 12 || 12;

  const ampm = hour >= 12 ? "PM" : "AM";
  const timeNow = `${formattedHour}:${minute} ${ampm}`;

  return {
    timeNow,
    year,
    tarik,
    monthOfYear,
    dayOfWeek,
  };
}

// eslint-disable-next-line consistent-return
function recursiveUpdateHour(weather, currentHour, hours, count, index) {
  if (count < 0) {
    return;
  }

  if (currentHour > 23) {
    hours.push(weather[1].hour[index]);
    recursiveUpdateHour(weather, currentHour, hours, count - 1, index + 1);
  } else {
    hours.push(weather[0].hour[currentHour]);
    recursiveUpdateHour(weather, currentHour + 1, hours, count - 1, index);
  }
}

function updateForcast(weather) {
  const hours = [];

  const forecast = document.querySelector("#forecastData");

  const hourForecast = document.createElement("div");
  hourForecast.id = "hourlyForecast";
  const currentHour = new Date().getHours();
  recursiveUpdateHour(weather, currentHour, hours, 23, 0);
  forecast.appendChild(hourForecast);

  domMain.displayHouryForecast(hours);

  const dailyForecast = document.createElement("div");
  dailyForecast.id = "dailyForecast";
  forecast.appendChild(dailyForecast);

  domMain.displayDailyForecast(weather);
}

const getInfo = (() => {
  const locationTodayWeatherInfo = (currentWeather) => {
    const locationName = currentWeather.location.name;

    const locationCountry = currentWeather.location.country;

    const tempInDegC = `${currentWeather.current.temp_c}℃`;

    const tempInDegF = `${currentWeather.current.temp_f}°F`;

    const feelsLikeDegC = `${currentWeather.current.feelslike_c}℃`;

    const feelsLikeDegF = `${currentWeather.current.feelslike_f}°F`;

    const condition = currentWeather.current.condition.text;

    const visibility = `${currentWeather.current.vis_km} KM`;

    const humidityy = `${currentWeather.current.humidity}%`;

    const forcastToday = currentWeather.forecast.forecastday[0];

    const windSpeed = `${currentWeather.current.wind_kph} KM/PH`;

    const high = `${forcastToday.day.maxtemp_c} ℃`;

    const low = `${forcastToday.day.mintemp_c} ℃`;

    const chanceOfRain = `${forcastToday.day.daily_chance_of_rain}%`;

    return {
      locationName,
      locationCountry,
      tempInDegC,
      tempInDegF,
      feelsLikeDegC,
      feelsLikeDegF,
      condition,
      visibility,
      humidityy,
      windSpeed,
      chanceOfRain,
      high,
      low,
    };
  };

  return {
    locationTodayWeatherInfo,
  };
})();

// eslint-disable-next-line import/prefer-default-export
const domMain = (() => {
  const body = document.querySelector("body");

  const updateCurrTime = (date) => {
    if (document.querySelector("#currentTime")) {
      document
        .querySelector("time")
        .removeChild(document.querySelector("#currentTime"));
    }

    const curTime = document.createElement("div");
    curTime.id = "currentTime";
    curTime.innerHTML = "";
    const dateInfo = updateTime(date);

    curTime.innerHTML = `
        <div id="year">
          ${dateInfo.year}
        </div>
        <div id="cdate">
          ${dateInfo.monthOfYear} ${dateInfo.tarik} ${dateInfo.dayOfWeek}
        </div>
        <div id="ttime">
          ${dateInfo.timeNow}
        </div>
      `;

    document.querySelector("#time").appendChild(curTime);
  };

  const display = (currentWeather) => {
    const content = document.createElement("div");
    content.classList.value = "content";
    content.innerHTML = "";

    const weather = getInfo.locationTodayWeatherInfo(currentWeather);

    content.innerHTML = `
        <div id="locationTime">
          <div class="location">
            ${currentWeather.location.name}, ${currentWeather.location.country}
          </div>
          <div id ="time"></div>
          <div class="temp">${weather.tempInDegC}</div>
          <div>High-Low: ${weather.high} - ${weather.low}</div>
        </div>
        <div id="today">
          <div class="celcius">
            <img src="${_assets_thermometer_png__WEBPACK_IMPORTED_MODULE_0__}">
            <div>
              <div class="title">
                Feels Like
              </div>
              <div>
                ${weather.feelsLikeDegC}
              </div>
            </div>
          </div>

          <div class="condition">
            <img src=${currentWeather.current.condition.icon}>
            <div>
              <div class="title">
                Condition
              </div>
              <div>
                ${weather.condition}
              </div>
            </div>
          </div>

          <div>
            <img src="${_assets_rain_png__WEBPACK_IMPORTED_MODULE_1__}">
            <div>
              <div class="title">
                Precipitation
              </div>
              <div>
                ${weather.chanceOfRain}
              </div>
            </div>
          </div>

          <div>
            <img src="${_assets_visibility_png__WEBPACK_IMPORTED_MODULE_3__}">
            <div>
              <div class="title">
                Visibility
              </div>
              <div>
                ${weather.visibility}
              </div>
            </div>
          </div>
          <div>
            <img src="${_assets_humidity_png__WEBPACK_IMPORTED_MODULE_2__}">
            <div>
              <div class="title">
                Humidity
              </div>
              <div>
                ${weather.humidityy}
              </div>
            </div>
          </div>

          <div>
            <img src="${_assets_wind_png__WEBPACK_IMPORTED_MODULE_4__}">
            <div>
              <div class="title">
                Wind Speed
              </div>
              <div>
                ${weather.windSpeed}
              </div>
            </div>
          </div>

        </div>
        <div id="forecastData">
        
        </div>
        <div class="sliderBox">
          <div id="box">
            <div id="slider"></div>
            <div id="txt">C</div>
          </div>
        </div>
      `;
    body.appendChild(content);
    updateCurrTime(currentWeather.location.localtime);
    updateForcast(currentWeather.forecast.forecastday);
  };

  const displayHouryForecast = (hours) => {
    const hourForecast = document.querySelector("#hourlyForecast");
    let html = "";

    hours.forEach((hour) => {
      const [dishours, minute] = hour.time.split(" ")[1].split(":");

      let formattedHour = dishours % 12 || dishours;
      console.log(formattedHour);
      formattedHour = formattedHour == 0 ? 12 : formattedHour;
      const ampm = dishours >= 12 ? "pm" : "am";
      const displayTime = `${formattedHour}:${minute} ${ampm}`;

      html += `
              <div>
                <div class="forTime">${displayTime}</div>
                <div class="hour">
                  <img src=${hour.condition.icon}>
                  <div>${hour.temp_c} ℃</div>
                </div>
              </div>
      `;
    });

    hourForecast.innerHTML = html;
  };

  const displayDailyForecast = (weather) => {
    let html = "";

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const nDay = new Date().getDay();

    weather.forEach((day, index) => {
      html += `<div>
                <div class="day">${
                  daysOfWeek[nDay + index > 6 ? nDay + index - 7 : nDay + index]
                }</div>
                <div class="imm">
                  <div>
                    <div class="max">${day.day.maxtemp_c}℃</div>
                    <div class="min">${day.day.mintemp_c}℃</div> 
                  </div>
                  <img src=${day.day.condition.icon}>
                </div>
              </div>`;
    });

    document.querySelector("#dailyForecast").innerHTML = html;
  };

  return {
    display,
    displayHouryForecast,
    displayDailyForecast,
  };
})();


/***/ }),

/***/ "./src/scripts/weatherApi.js":
/*!***********************************!*\
  !*** ./src/scripts/weatherApi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domMan__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domMan */ "./src/scripts/domMan.js");
// eslint-disable-next-line import/prefer-default-export


async function weatherApi(lat, log) {
  try {
    const foreWeather = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=4f780fb9d0a940998b1133518232609&q=${lat},${log}&days=7`
    );
    const forcastWeather = await foreWeather.json();
    console.log(forcastWeather);
    _domMan__WEBPACK_IMPORTED_MODULE_0__.domMain.display(forcastWeather);
  } catch (err) {
    console.log(err);
  }
}
navigator.geolocation.getCurrentPosition((data) => {
  weatherApi(data.coords.latitude, data.coords.longitude);
});


/***/ }),

/***/ "./src/assets/day.jpg":
/*!****************************!*\
  !*** ./src/assets/day.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "day.jpg";

/***/ }),

/***/ "./src/assets/humidity.png":
/*!*********************************!*\
  !*** ./src/assets/humidity.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "humidity.png";

/***/ }),

/***/ "./src/assets/rain.png":
/*!*****************************!*\
  !*** ./src/assets/rain.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "rain.png";

/***/ }),

/***/ "./src/assets/thermometer.png":
/*!************************************!*\
  !*** ./src/assets/thermometer.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "thermometer.png";

/***/ }),

/***/ "./src/assets/visibility.png":
/*!***********************************!*\
  !*** ./src/assets/visibility.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "visibility.png";

/***/ }),

/***/ "./src/assets/wind.png":
/*!*****************************!*\
  !*** ./src/assets/wind.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "wind.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"weather": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
__webpack_require__(/*! ../style.css */ "./src/style.css");
__webpack_require__(/*! ./weatherApi */ "./src/scripts/weatherApi.js");

})();

/******/ })()
;
//# sourceMappingURL=weather.js.map