module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nav__ = __webpack_require__("./components/nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logo__ = __webpack_require__("./components/logo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_link__);
var _jsxFileName = '/home/shu/ReactJS/Bad-Name/components/header.js';






/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'header',
    {
      className: 'jsx-3701768065',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-3701768065' + ' ' + 'left',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_next_link___default.a,
        { prefetch: true, href: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'a',
          {
            className: 'jsx-3701768065',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            {
              className: 'jsx-3701768065' + ' ' + 'logo',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__logo__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'span',
            {
              className: 'jsx-3701768065' + ' ' + 'title',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            },
            'Play'
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3701768065' + ' ' + 'nav',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__nav__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-3701768065' + ' ' + 'right',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_next_link___default.a,
        { prefetch: true, href: '/login', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'a',
          {
            className: 'jsx-3701768065' + ' ' + 'login',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          'login'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '3701768065',
      css: 'header.jsx-3701768065{background:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:14px;}.logo.jsx-3701768065{margin:4px 5px 2px 4px;display:inline-block;}.left.jsx-3701768065{-webkit-flex:9;-ms-flex:9;flex:9;}.right.jsx-3701768065{-webkit-flex:1;-ms-flex:1;flex:1;text-align:right;}.title.jsx-3701768065{font-weight:bold;display:inline-block;font-size:14px;text-decoration:none;padding:8px 10px 8px 4px;color:red;vertical-align:top;}a.login.jsx-3701768065{padding:10px;display:inline-block;font-size:11px;text-transform:uppercase;text-decoration:none;color:#000;}.login.jsx-3701768065:hover{color:#fff;}.nav.jsx-3701768065{display:inline-block;vertical-align:top;}@media (max-width:750px){.title.jsx-3701768065{font-size:16px;padding-bottom:0;}a.login.jsx-3701768065{padding:24px 10px 23px;}.nav.jsx-3701768065{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCZ0IsQUFHMEIsQUFLTSxBQUloQixBQUdBLEFBSVUsQUFTSixBQVFGLEFBR1UsQUFLSixBQUlRLEFBR1QsV0FkbEIsRUFSdUIsQ0F1QnJCLENBUG1CLEVBekNOLEFBZ0JRLElBb0JGLEVBL0JFLEFBd0NyQixTQUhBLENBakNGLEFBR21CLENBY0YsSUFUQSxFQW9CakIsSUEvQkEsS0FxQjJCLENBZDNCLEdBS3VCLHFCQUNJLEFBU0osaUJBM0JOLElBNEJKLElBVEQsT0FsQlosQUE0QkEsR0FUcUIsbUJBQ3JCIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NodS9SZWFjdEpTL0JhZC1OYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdiBmcm9tICcuL25hdidcbmltcG9ydCBMb2dvIGZyb20gJy4vbG9nbydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICA8TGluayBwcmVmZXRjaCBocmVmPVwiL1wiPlxuICAgICAgIDxhPlxuICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5QbGF5PC9zcGFuPlxuICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgIDxOYXYgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9XCIvbG9naW5cIj48YSBjbGFzc05hbWU9XCJsb2dpblwiPmxvZ2luPC9hPjwvTGluaz5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICAubG9nbyB7XG4gICAgICAgIG1hcmdpbjogNHB4IDVweCAycHggNHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAubGVmdCB7XG4gICAgICAgIGZsZXg6IDk7XG4gICAgICB9XG4gICAgICAucmlnaHQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTBweCA4cHggNHB4O1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgfVxuICAgICAgYS5sb2dpbiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgfVxuICAgICAgLmxvZ2luOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICAubmF2IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIGEubG9naW4ge1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHggMTBweCAyM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXYge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbiAgKVxuIl19 */\n/*@ sourceURL=components/header.js */'
    })
  );
});

/***/ }),

/***/ "./components/login-form.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/shu/ReactJS/Bad-Name/components/login-form.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-419539011" + " " + "base",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "h4",
      {
        className: "jsx-419539011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 3
        }
      },
      "Login"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", {
      className: "jsx-419539011",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "p",
      {
        className: "jsx-419539011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      "username: ",
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", { type: "text", className: "jsx-419539011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "p",
      {
        className: "jsx-419539011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      "password: ",
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", { type: "password", className: "jsx-419539011",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "button",
      {
        className: "jsx-419539011" + " " + "draw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      "Login"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "419539011",
      css: "button.jsx-419539011{background:none;border:0;box-sizing:border-box;margin:1em;padding:1em 2em;box-shadow:inset 0 0 0 2px #f45e61;color:#f45e61;font-size:inherit;font-weight:700;}@import url('https://fonts.googleapis.com/css?family=Crimson+Text');.base.jsx-419539011{font-family:'Crimson Text',serif;width:50%;margin-top:100px;margin-left:auto;margin-right:auto;height:80vh;text-align:center;}h4.jsx-419539011{text-align:center;}p.jsx-419539011{background:#eee;padding:10px;margin-bottom:2px;text-align:center;-webkit-transition:100ms ease-in background;transition:100ms ease-in background;}p.jsx-419539011:hover{background:#ccc;box-shadow:0px 0px 1px #000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW4tZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZ0IsQUFJeUIsQUFXbUQsQUFFakMsQUFTaEIsQUFHRixBQU9BLGdCQS9CUCxBQXlCSSxBQU9rQixFQVZqQyxPQXJCd0IsSUF5QkosSUFiUixVQUVWLElBYlcsQUF5Qk8sQUFNcEIsV0E5QmtCLEVBWUMsS0FhbUIsU0F4QkQsR0FZakIsa0JBQ04sWUFDTSxFQWJKLGNBQ0ksRUFhcEIsZ0JBWmtCLElBc0JsQixZQXJCQSIsImZpbGUiOiJjb21wb25lbnRzL2xvZ2luLWZvcm0uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2h1L1JlYWN0SlMvQmFkLU5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYmFzZVwiPlxuICAgIDxoND5Mb2dpbjwvaDQ+XG4gICAgPGhyIC8+XG4gICAgPHA+XG4gICAgICB1c2VybmFtZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICBwYXNzd29yZDogPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gICAgPC9wPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZHJhd1wiPkxvZ2luPC9idXR0b24+XG5cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luOiAxZW07XG4gICAgICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjZjQ1ZTYxO1xuICAgICAgICBjb2xvcjogI2Y0NWU2MTtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgfVxuICAgICAgLmJhc2Uge1xuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNyaW1zb24rVGV4dCcpO1xuXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ3JpbXNvbiBUZXh0Jywgc2VyaWY7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbi10b3A6MTAwcHhcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBoNCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogMTAwbXMgZWFzZS1pbiBiYWNrZ3JvdW5kO1xuICAgICAgfVxuICAgICAgcDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4ICMwMDAwMDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG4iXX0= */\n/*@ sourceURL=components/login-form.js */"
    })
  );
});

/***/ }),

/***/ "./components/logo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/shu/ReactJS/Bad-Name/components/logo.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "span",
    {
      className: "jsx-1744604710",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2
      }
    },
    "ehex391",
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "1744604710",
      css: "span.jsx-1744604710{border:1px solid #fff;display:inline-block;color:#fff;font-weight:bold;font-size:11px;padding:5px 8px;-webkit-transition:all 0.3s ease;transition:all 0.3s ease;-webkit-transition-delay:1s;transition-delay:1s;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9nby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHZ0IsQUFHK0Isc0JBQ0QscUJBQ1YsV0FDTSxpQkFDRixlQUNDLGdCQUNTLDBEQUNMLGdEQUN0QiIsImZpbGUiOiJjb21wb25lbnRzL2xvZ28uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2h1L1JlYWN0SlMvQmFkLU5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxzcGFuPlxuICAgIGVoZXgzOTFcbiAgICA8c3R5bGUganN4PntgXG4gICAgICBzcGFuIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMXM7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3NwYW4+XG4pO1xuIl19 */\n/*@ sourceURL=components/logo.js */"
    })
  );
});

/***/ }),

/***/ "./components/meta.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "/home/shu/ReactJS/Bad-Name/components/meta.js";




/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-2281518272",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1", className: "jsx-2281518272",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", { charSet: "utf-8", className: "jsx-2281518272",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", { rel: "shortcut icon", href: "", className: "jsx-2281518272",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "2281518272",
      css: "body{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif;background:#eee;}*{margin:0;padding:0;box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTdUIsQUFHdUssQUFJckosU0FDQyxVQUNZLHNCQUN4QiwyR0FOa0IsZ0JBQ2xCIiwiZmlsZSI6ImNvbXBvbmVudHMvbWV0YS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaHUvUmVhY3RKUy9CYWQtTmFtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIlwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBib2R5IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBcIlJvYm90b1wiLCBcIk94eWdlblwiLCBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgfVxuICAgICAgKiB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=components/meta.js */"
    })
  );
});

/***/ }),

/***/ "./components/nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/home/shu/ReactJS/Bad-Name/components/nav.js";



// Add pop-overs to each link explaining more.
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "ul",
    {
      className: "jsx-1868084099",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      Item,
      { href: "/", __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      "Home"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      Item,
      { href: "/news", __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      "News"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      Item,
      { href: "/classes", __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      "classes"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      Item,
      { href: "/forum", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      "Forum"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      Item,
      { href: "/weapons", __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      "Weapons"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      Item,
      { href: "/skills", __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      "Skills"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      Item,
      { href: "", __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      "Docs"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      Item,
      { href: "/about", __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      "about"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      Item,
      { href: "/support", __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      "support"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      Item,
      { href: "https://github.com/Attidd/ehex391", __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      "Contribute"
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "1868084099",
      css: "ul.jsx-1868084099{list-style-type:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNnQixBQUc4QixxQkFDdkIiLCJmaWxlIjoiY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvc2h1L1JlYWN0SlMvQmFkLU5hbWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4vLyBBZGQgcG9wLW92ZXJzIHRvIGVhY2ggbGluayBleHBsYWluaW5nIG1vcmUuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDx1bD5cbiAgICA8SXRlbSBocmVmPVwiL1wiPkhvbWU8L0l0ZW0+XG4gICAgPEl0ZW0gaHJlZj1cIi9uZXdzXCI+TmV3czwvSXRlbT5cbiAgICA8SXRlbSBocmVmPVwiL2NsYXNzZXNcIj5jbGFzc2VzPC9JdGVtPlxuICAgIDxJdGVtIGhyZWY9XCIvZm9ydW1cIj5Gb3J1bTwvSXRlbT5cbiAgICA8SXRlbSBocmVmPVwiL3dlYXBvbnNcIj5XZWFwb25zPC9JdGVtPlxuICAgIDxJdGVtIGhyZWY9XCIvc2tpbGxzXCI+U2tpbGxzPC9JdGVtPlxuICAgIDxJdGVtIGhyZWY9XCJcIj5Eb2NzPC9JdGVtPlxuICAgIDxJdGVtIGhyZWY9XCIvYWJvdXRcIj5hYm91dDwvSXRlbT5cbiAgICA8SXRlbSBocmVmPVwiL3N1cHBvcnRcIj5zdXBwb3J0PC9JdGVtPlxuICAgIDxJdGVtIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vQXR0aWRkL2VoZXgzOTFcIj5Db250cmlidXRlPC9JdGVtPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC91bD5cbilcblxuY29uc3QgSXRlbSA9ICh7IGhyZWYsIGNoaWxkcmVuIH0pID0+IChcbiAgPGxpPlxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e2hyZWZ9PlxuICAgICAgPGE+eyBjaGlsZHJlbiB9PC9hPlxuICAgIDwvTGluaz5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgbGk6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiDii65cIjtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgIH1cbiAgICAgIGxpOmxhc3QtY2hpbGQ6YWZ0ZXIgeyBjb250ZW50OiBcIlwiOyB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogICNENEFGMzc7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzXG4gICAgICB9XG4gICAgICBhOmhvdmVyICB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2xpPlxuKVxuIl19 */\n/*@ sourceURL=components/nav.js */"
    })
  );
});

var Item = function Item(_ref) {
  var href = _ref.href,
      children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "li",
    {
      className: "jsx-2551428973",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
      { prefetch: true, href: href, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "a",
        {
          className: "jsx-2551428973",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          }
        },
        children
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "2551428973",
      css: "li.jsx-2551428973{display:inline-block;}li.jsx-2551428973:after{content:\" \u22EE\";color:red;}li.jsx-2551428973:last-child.jsx-2551428973:after{content:\"\";}a.jsx-2551428973{display:inline-block;padding:10px;font-size:11px;text-transform:uppercase;text-decoration:none;color:#D4AF37;-webkit-transition:all 0.3s;transition:all 0.3s;}a.jsx-2551428973:hover{color:black;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCZ0IsQUFHOEIsQUFHUixBQUdpQixBQUdULEFBU1QsV0FabUIsQ0FhZCxDQWZQLFFBSFosQUFTZSxFQUxmLE1BZUEsS0FUaUIsZUFDVSx5QkFDSixxQkFDTixjQUVsQixnREFBQyIsImZpbGUiOiJjb21wb25lbnRzL25hdi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaHUvUmVhY3RKUy9CYWQtTmFtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbi8vIEFkZCBwb3Atb3ZlcnMgdG8gZWFjaCBsaW5rIGV4cGxhaW5pbmcgbW9yZS5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPHVsPlxuICAgIDxJdGVtIGhyZWY9XCIvXCI+SG9tZTwvSXRlbT5cbiAgICA8SXRlbSBocmVmPVwiL25ld3NcIj5OZXdzPC9JdGVtPlxuICAgIDxJdGVtIGhyZWY9XCIvY2xhc3Nlc1wiPmNsYXNzZXM8L0l0ZW0+XG4gICAgPEl0ZW0gaHJlZj1cIi9mb3J1bVwiPkZvcnVtPC9JdGVtPlxuICAgIDxJdGVtIGhyZWY9XCIvd2VhcG9uc1wiPldlYXBvbnM8L0l0ZW0+XG4gICAgPEl0ZW0gaHJlZj1cIi9za2lsbHNcIj5Ta2lsbHM8L0l0ZW0+XG4gICAgPEl0ZW0gaHJlZj1cIlwiPkRvY3M8L0l0ZW0+XG4gICAgPEl0ZW0gaHJlZj1cIi9hYm91dFwiPmFib3V0PC9JdGVtPlxuICAgIDxJdGVtIGhyZWY9XCIvc3VwcG9ydFwiPnN1cHBvcnQ8L0l0ZW0+XG4gICAgPEl0ZW0gaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BdHRpZGQvZWhleDM5MVwiPkNvbnRyaWJ1dGU8L0l0ZW0+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L3VsPlxuKVxuXG5jb25zdCBJdGVtID0gKHsgaHJlZiwgY2hpbGRyZW4gfSkgPT4gKFxuICA8bGk+XG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj17aHJlZn0+XG4gICAgICA8YT57IGNoaWxkcmVuIH08L2E+XG4gICAgPC9MaW5rPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICBsaTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiIOKLrlwiO1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgfVxuICAgICAgbGk6bGFzdC1jaGlsZDphZnRlciB7IGNvbnRlbnQ6IFwiXCI7IH1cblxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAgI0Q0QUYzNztcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3NcbiAgICAgIH1cbiAgICAgIGE6aG92ZXIgIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG4pXG4iXX0= */\n/*@ sourceURL=components/nav.js */"
    })
  );
};

/***/ }),

/***/ "./components/page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header__ = __webpack_require__("./components/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__meta__ = __webpack_require__("./components/meta.js");
var _jsxFileName = '/home/shu/ReactJS/Bad-Name/components/page.js';





/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      className: 'jsx-3140648418' + ' ' + 'main',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__meta__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__header__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-3140648418' + ' ' + 'page',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      children
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: '3140648418',
      css: '.main.jsx-3140648418{margin:auto;}.page.jsx-3140648418{padding:3px 10px;}@media (max-width:750px){.main.jsx-3140648418{padding:0;width:auto;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZZ0IsQUFHcUIsQUFJSyxBQUlMLFVBQ0MsRUFSZixLQUlBLElBS0UiLCJmaWxlIjoiY29tcG9uZW50cy9wYWdlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NodS9SZWFjdEpTL0JhZC1OYW1lIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCBNZXRhIGZyb20gJy4vbWV0YSc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgPE1ldGEgLz5cbiAgICA8SGVhZGVyIC8+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLm1haW4ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG4gICAgICAucGFnZSB7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNkM2QzZDM7XG4gICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgIC5tYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=components/page.js */'
    })
  );
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_page__ = __webpack_require__("./components/page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__("./pages/login.js");
var _jsxFileName = '/home/shu/ReactJS/Bad-Name/pages/index.js';




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2__components_page__["a" /* default */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      },
      ' ',
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        }
      }),
      ' '
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      {
        className: 'jsx-31920517' + ' ' + 'hello',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'p',
        {
          className: 'jsx-31920517',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        'This is just the beginning.'
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: '31920517',
        css: '.hello.jsx-31920517{font:15px Helvetica,Arial,sans-serif;background:#eee;padding:10px;text-align:center;-webkit-transition:100ms ease-in background;transition:100ms ease-in background;}.hello.jsx-31920517:hover{background:#ccc;box-shadow:0px 0px 1px #000000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nQixBQUdnRCxBQU92QixnQkFDZSxxQkFQZixVQVNsQixNQVJlLGFBQ0ssa0JBQ2tCLGdGQUN0QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaHUvUmVhY3RKUy9CYWQtTmFtZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZSc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi9sb2dpbic7XG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgICA8UGFnZT4gPExvZ2luIC8+IDwvUGFnZT5cbiAgPGRpdiBjbGFzc05hbWU9J2hlbGxvJz5cbiAgICA8cD5UaGlzIGlzIGp1c3QgdGhlIGJlZ2lubmluZy48L3A+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmhlbGxvIHtcbiAgICAgICAgZm9udDogMTVweCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IDEwMG1zIGVhc2UtaW4gYmFja2dyb3VuZDtcbiAgICAgIH1cbiAgICAgIC5oZWxsbzpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4ICMwMDAwMDA7XG5cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=pages/index.js */'
      })
    )
  );
});

/***/ }),

/***/ "./pages/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_form__ = __webpack_require__("./components/login-form.js");
var _jsxFileName = '/home/shu/ReactJS/Bad-Name/pages/login.js';



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_login_form__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    })
  );
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map