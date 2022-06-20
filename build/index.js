(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit({
  attributes,
  setAttributes,
  className,
  onSelect
}) {
  const {
    status,
    border,
    borderWidth,
    borderRadius,
    icon,
    iconStyle,
    close,
    backgroundColor,
    iconColor,
    borderColor,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  } = attributes;
  const blockClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, status, border, iconStyle, {
    [`pt__${paddingTop}`]: paddingTop ? paddingTop : undefined,
    [`pb__${paddingBottom}`]: paddingBottom ? paddingBottom : undefined,
    [`pl__${paddingLeft}`]: paddingLeft ? paddingLeft : undefined,
    [`pr__${paddingRight}`]: paddingRight ? paddingRight : undefined,
    'hide-icon': icon,
    'hide-close': close
  });
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])({
    className: blockClasses,
    style: {
      borderRadius: borderRadius ? borderRadius + 'px' : undefined,
      borderWidth: borderWidth ? borderWidth + 'px' : undefined,
      background: backgroundColor,
      borderColor: borderColor
    }
  });
  const iconStyles = {
    borderColor: iconStyle === 'icon-outline' ? iconColor : undefined,
    fill: iconStyle === 'icon-outline' ? iconColor : undefined,
    backgroundColor: iconStyle === 'icon-fill' ? iconColor : undefined
  };
  const closeStyles = {
    fill: iconColor
  };
  const ANSWER_TEMPLATE = [['core/paragraph', {
    fontSize: 'xs',
    paddingLeft: '5',
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["_x"])('Type to write your message…', 'content placeholder')
  }]];
  const statusOptions = [{
    value: "status-welcome",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Welcome', 'ainoblocks')
  }, {
    value: "status-info",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Info', 'ainoblocks')
  }, {
    value: "status-help",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Help', 'ainoblocks')
  }, {
    value: "status-success",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Success', 'ainoblocks')
  }, {
    value: "status-warning",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Warning', 'ainoblocks')
  }, {
    value: "status-error",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Error', 'ainoblocks')
  }];
  const statusWelcome = status === 'status-welcome';
  const statusInfo = status === 'status-info';
  const statusHelp = status === 'status-help';
  const statusSuccess = status === 'status-success';
  const statusWarning = status === 'status-warning';
  const statusError = status === 'status-error';
  const ShowCloseBtn = close === false;
  const iconStyleOptions = [{
    value: "icon-fill",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Fill', 'ainoblocks')
  }, {
    value: "icon-outline",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Outline', 'ainoblocks')
  }];
  const borderOptions = [{
    value: "no-border",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('none', 'ainoblocks')
  }, {
    value: "border-all",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('all', 'ainoblocks')
  }, {
    value: "border-top",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('top', 'ainoblocks')
  }, {
    value: "border-right",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('right', 'ainoblocks')
  }, {
    value: "border-bottom",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('bottom', 'ainoblocks')
  }, {
    value: "border-left",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('left', 'ainoblocks')
  }];
  const borderRadiusOptions = [{
    value: "none",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Not set', 'ainoblocks')
  }, {
    value: "xxs",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('SSX', 'ainoblocks')
  }, {
    value: "xs",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('XS', 'ainoblocks')
  }, {
    value: "s",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('S', 'ainoblocks')
  }, {
    value: "m",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('M', 'ainoblocks')
  }, {
    value: "l",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('L', 'ainoblocks')
  }, {
    value: "xl",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('XL', 'ainoblocks')
  }, {
    value: "xxl",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('XXL', 'ainoblocks')
  }, {
    value: "xxxl",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('3XL', 'ainoblocks')
  }, {
    value: "xxxxl",
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('4XL', 'ainoblocks')
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('notification Block Settings', 'ainoblocks'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Status', 'ainoblocks'),
    value: status,
    options: statusOptions,
    onChange: status => setAttributes({
      status
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Close Button', 'ainoblocks'),
    checked: !!close,
    onChange: () => setAttributes({
      close: !close
    }),
    help: !!close ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The Close button is hidden.', 'ainoblocks') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Toggle to hide Close button.', 'ainoblocks')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon', 'ainoblocks'),
    checked: !!icon,
    onChange: () => setAttributes({
      icon: !icon
    }),
    help: !!icon ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('The icon is hidden.', 'ainoblocks') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Toggle to hide icon.', 'ainoblocks')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon Style', 'ainoblocks'),
    value: iconStyle,
    options: iconStyleOptions,
    onChange: iconStyle => setAttributes({
      iconStyle
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PanelColorSettings"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Color', 'ainoblocks'),
    initialOpen: false,
    colorSettings: [{
      value: backgroundColor,
      onChange: backgroundColor => {
        setAttributes({
          backgroundColor
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Background Color', 'ainoblocks')
    }, {
      value: iconColor,
      onChange: iconColor => {
        setAttributes({
          iconColor
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Icon Color', 'ainoblocks')
    }, {
      value: borderColor,
      onChange: borderColor => {
        setAttributes({
          borderColor
        });
      },
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Color', 'ainoblocks')
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border', 'ainoblocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border', 'ainoblocks'),
    value: border,
    options: borderOptions,
    onChange: border => setAttributes({
      border
    })
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Width', 'ainoblocks'),
    value: borderWidth,
    onChange: borderWidth => setAttributes({
      borderWidth
    }),
    min: 1,
    max: 20,
    allowReset: true,
    resetFallbackValue: 0
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border Radius', 'ainoblocks'),
    value: borderRadius,
    options: borderRadiusOptions,
    onChange: borderRadius => setAttributes({
      borderRadius
    })
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Spacing', 'ainoblocks'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Padding Top', 'ainoblocks'),
    value: paddingTop,
    onChange: paddingTop => setAttributes({
      paddingTop
    }),
    min: 0,
    max: 19,
    allowReset: true,
    resetFallbackValue: 0
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Padding Bottom', 'ainoblocks'),
    value: paddingBottom,
    onChange: paddingBottom => setAttributes({
      paddingBottom
    }),
    min: 0,
    max: 19,
    allowReset: true,
    resetFallbackValue: 0
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Padding Left', 'ainoblocks'),
    value: paddingLeft,
    onChange: paddingLeft => setAttributes({
      paddingLeft
    }),
    min: 0,
    max: 19,
    allowReset: true,
    resetFallbackValue: 0
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Padding Right', 'ainoblocks'),
    value: paddingRight,
    onChange: paddingRight => setAttributes({
      paddingRight
    }),
    min: 0,
    max: 19,
    allowReset: true,
    resetFallbackValue: 0
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: `content-wrapper`
  }, ShowCloseBtn && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: `close-btn`,
    style: closeStyles
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 12"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M10.243 3.172l-2.829 2.828 2.829 2.829-1.414 1.414-2.829-2.829-2.828 2.829-1.414-1.414 2.828-2.83-2.828-2.827 1.414-1.414 2.828 2.827 2.828-2.827z"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: `icon`,
    style: iconStyles
  }, statusWelcome && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M7 13l0.082 0.232c0.828 2.217 2.714 3.768 4.918 3.768s4.090-1.551 4.918-3.768l0.082-0.232h2c-1.092 3.276-3.808 5.6-7 5.6-3.086 0-5.726-2.172-6.885-5.276l-0.115-0.324h2zM17 6c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM7 6c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"
  })), statusHelp && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M12 17c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM12 5c2.21 0 4 1.79 4 4 0 0.88-0.36 1.68-0.93 2.25l-0.9 0.92c-0.72 0.73-1.17 1.33-1.17 2.83h-2v-0.5c0-1.1 0.45-2.1 1.17-2.83l1.24-1.26c0.37-0.36 0.59-0.86 0.59-1.41 0-1.1-0.9-2-2-2s-2 0.9-2 2h-2c0-2.21 1.79-4 4-4z"
  })), statusSuccess && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M16.59 7.58l-6.59 6.59-2.59-2.58-1.41 1.41 4 4 8-8z"
  })), statusInfo && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M13 9v10h-2v-10h2zM12 5c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"
  })), statusError && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M16.243 6.343l1.414 1.414-4.243 4.243 4.243 4.242-1.414 1.414-4.242-4.243-4.243 4.243-1.414-1.414 4.243-4.242-4.243-4.243 1.414-1.414 4.243 4.243z"
  })), statusWarning && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M12 17c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM13 5v10h-2v-10h2z"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
    template: ANSWER_TEMPLATE
  }))));
}

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
const {
  Path,
  SVG
} = wp.components;
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SVG, {
  className: "components-ainoblocks-svg",
  "aria-hidden": true,
  role: "img",
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#ffc75e",
  d: "M12 1c4.418 0 8 3.582 8 8v4l3 5h-22l3-5v-4c0-4.418 3.582-8 8-8z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#795200",
  d: "M17 18c0 2.761-2.239 5-5 5s-5-2.239-5-5h10z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#d2880f",
  d: "M12 13c2.761 0 5 2.239 5 5h-10c0-2.761 2.239-5 5-5z"
})));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('ainoblocks/notification-block', {
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
  const {
    status,
    border,
    borderWidth,
    borderRadius,
    icon,
    iconStyle,
    close,
    backgroundColor,
    iconColor,
    borderColor,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  } = attributes;
  const statusWelcome = status === 'status-welcome';
  const statusInfo = status === 'status-info';
  const statusHelp = status === 'status-help';
  const statusSuccess = status === 'status-success';
  const statusWarning = status === 'status-warning';
  const statusError = status === 'status-error';
  const ShowCloseBtn = close === false;
  const blockClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classnames__WEBPACK_IMPORTED_MODULE_2___default.a, status, border, iconStyle, {
    [`pt__${paddingTop}`]: paddingTop ? paddingTop : undefined,
    [`pb__${paddingBottom}`]: paddingBottom ? paddingBottom : undefined,
    [`pl__${paddingLeft}`]: paddingLeft ? paddingLeft : undefined,
    [`pr__${paddingRight}`]: paddingRight ? paddingRight : undefined,
    'hide-icon': icon,
    'hide-close': close
  });
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["useBlockProps"].save({
    className: blockClasses,
    style: {
      borderRadius: borderRadius ? borderRadius + 'px' : undefined,
      borderWidth: borderWidth ? borderWidth + 'px' : undefined,
      background: backgroundColor,
      borderColor: borderColor
    }
  });
  const iconStyles = {
    borderColor: iconStyle === 'icon-outline' ? iconColor : undefined,
    fill: iconStyle === 'icon-outline' ? iconColor : undefined,
    backgroundColor: iconStyle === 'icon-fill' ? iconColor : undefined
  };
  const closeStyles = {
    fill: iconColor
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
    'x-data': '{ open: true }',
    '@click': 'open = !open',
    ':class': `{'close': ! open }`
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "content-wrapper"
  }, ShowCloseBtn && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    className: `close-btn`,
    style: closeStyles
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 12"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M10.243 3.172l-2.829 2.828 2.829 2.829-1.414 1.414-2.829-2.829-2.828 2.829-1.414-1.414 2.828-2.83-2.828-2.827 1.414-1.414 2.828 2.827 2.828-2.827z"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: `icon`,
    style: iconStyles
  }, statusWelcome && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M7 13l0.082 0.232c0.828 2.217 2.714 3.768 4.918 3.768s4.090-1.551 4.918-3.768l0.082-0.232h2c-1.092 3.276-3.808 5.6-7 5.6-3.086 0-5.726-2.172-6.885-5.276l-0.115-0.324h2zM17 6c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM7 6c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"
  })), statusHelp && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M12 17c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM12 5c2.21 0 4 1.79 4 4 0 0.88-0.36 1.68-0.93 2.25l-0.9 0.92c-0.72 0.73-1.17 1.33-1.17 2.83h-2v-0.5c0-1.1 0.45-2.1 1.17-2.83l1.24-1.26c0.37-0.36 0.59-0.86 0.59-1.41 0-1.1-0.9-2-2-2s-2 0.9-2 2h-2c0-2.21 1.79-4 4-4z"
  })), statusSuccess && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M16.59 7.58l-6.59 6.59-2.59-2.58-1.41 1.41 4 4 8-8z"
  })), statusInfo && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M13 9v10h-2v-10h2zM12 5c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1z"
  })), statusError && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M16.243 6.343l1.414 1.414-4.243 4.243 4.243 4.242-1.414 1.414-4.242-4.243-4.243 4.243-1.414-1.414 4.243-4.242-4.243-4.243 1.414-1.414 4.243 4.243z"
  })), statusWarning && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SVG"], {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Path"], {
    d: "M12 17c0.552 0 1 0.448 1 1s-0.448 1-1 1c-0.552 0-1-0.448-1-1s0.448-1 1-1zM13 5v10h-2v-10h2z"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"].Content, null)));
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ellenbauer/Local Sites/ainodev/app/public/wp-content/plugins/notification-block/src/index.js */"./src/index.js");


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map