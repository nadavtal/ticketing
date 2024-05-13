/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./api/build-client.js":
/*!*****************************!*\
  !*** ./api/build-client.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ req })=>{\n    if (true) {\n        // We are on the server\n        return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n            baseURL: \"http://www.future-feature.com/\",\n            // 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',\n            headers: req.headers\n        });\n    } else {}\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvYnVpbGQtY2xpZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLGlFQUFlLENBQUMsRUFBRUMsR0FBRyxFQUFFO0lBQ3JCLElBQUksSUFBa0IsRUFBYTtRQUNqQyx1QkFBdUI7UUFFdkIsT0FBT0Qsb0RBQVksQ0FBQztZQUNsQkcsU0FBUztZQUdQLHFFQUFxRTtZQUN2RUMsU0FBU0gsSUFBSUcsT0FBTztRQUN0QjtJQUNGLE9BQU8sRUFLTjtBQUNILEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9hcGkvYnVpbGQtY2xpZW50LmpzP2M2ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGRlZmF1bHQgKHsgcmVxIH0pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gV2UgYXJlIG9uIHRoZSBzZXJ2ZXJcblxuICAgIHJldHVybiBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVSTDogJ2h0dHA6Ly93d3cuZnV0dXJlLWZlYXR1cmUuY29tLycsXG5cblxuICAgICAgICAvLyAnaHR0cDovL2luZ3Jlc3MtbmdpbngtY29udHJvbGxlci5pbmdyZXNzLW5naW54LnN2Yy5jbHVzdGVyLmxvY2FsJyxcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIFdlIG11c3QgYmUgb24gdGhlIGJyb3dzZXJcbiAgICByZXR1cm4gYXhpb3MuY3JlYXRlKHtcbiAgICAgIGJhc2VVcmw6ICcvJyxcbiAgICB9KTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInJlcSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiYmFzZVVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/build-client.js\n");

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ currentUser })=>{\n    const links = [\n        {\n            label: \"Cesium\",\n            href: \"/cesium\"\n        },\n        {\n            label: \"3d\",\n            href: \"/playground\"\n        },\n        !currentUser && {\n            label: \"Sign Up\",\n            href: \"/auth/signup\"\n        },\n        !currentUser && {\n            label: \"Sign In\",\n            href: \"/auth/signin\"\n        },\n        currentUser && {\n            label: \"Sign Out\",\n            href: \"/auth/signout\"\n        }\n    ].filter((linkConfig)=>linkConfig).map(({ label, href })=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"nav-item\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"nav-link\",\n                href: href,\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, undefined)\n        }, href, false, {\n            fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\header.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-dark bg-dark\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"navbar-brand\",\n                href: \"/\",\n                children: \"Future Feature\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"d-flex justify-content-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"nav d-flex align-items-center\",\n                    children: links\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\header.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\header.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\header.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFFN0IsaUVBQWUsQ0FBQyxFQUFFQyxXQUFXLEVBQUU7SUFDN0IsTUFBTUMsUUFBUTtRQUNaO1lBQUVDLE9BQU87WUFBVUMsTUFBTTtRQUFVO1FBQ25DO1lBQUVELE9BQU87WUFBTUMsTUFBTTtRQUFjO1FBQ25DLENBQUNILGVBQWU7WUFBRUUsT0FBTztZQUFXQyxNQUFNO1FBQWU7UUFDekQsQ0FBQ0gsZUFBZTtZQUFFRSxPQUFPO1lBQVdDLE1BQU07UUFBZTtRQUN6REgsZUFBZTtZQUFFRSxPQUFPO1lBQVlDLE1BQU07UUFBZ0I7S0FDM0QsQ0FDRUMsTUFBTSxDQUFDLENBQUNDLGFBQWVBLFlBQ3ZCQyxHQUFHLENBQUMsQ0FBQyxFQUFFSixLQUFLLEVBQUVDLElBQUksRUFBRTtRQUNuQixxQkFDRSw4REFBQ0k7WUFBY0MsV0FBVTtzQkFDdkIsNEVBQUNULGtEQUFJQTtnQkFBQ1MsV0FBVTtnQkFBV0wsTUFBTUE7MEJBQzlCRDs7Ozs7O1dBRklDOzs7OztJQU1iO0lBRUYscUJBQ0UsOERBQUNNO1FBQUlELFdBQVU7OzBCQUNiLDhEQUFDVCxrREFBSUE7Z0JBQUNTLFdBQVU7Z0JBQWVMLE1BQUs7MEJBQUk7Ozs7OzswQkFJeEMsOERBQUNPO2dCQUFJRixXQUFVOzBCQUNiLDRFQUFDRztvQkFBR0gsV0FBVTs4QkFBaUNQOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2RCxHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9oZWFkZXIuanM/YzA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjdXJyZW50VXNlciB9KSA9PiB7XG4gIGNvbnN0IGxpbmtzID0gW1xuICAgIHsgbGFiZWw6ICdDZXNpdW0nLCBocmVmOiAnL2Nlc2l1bScgfSxcbiAgICB7IGxhYmVsOiAnM2QnLCBocmVmOiAnL3BsYXlncm91bmQnIH0sXG4gICAgIWN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTaWduIFVwJywgaHJlZjogJy9hdXRoL3NpZ251cCcgfSxcbiAgICAhY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NpZ24gSW4nLCBocmVmOiAnL2F1dGgvc2lnbmluJyB9LFxuICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTaWduIE91dCcsIGhyZWY6ICcvYXV0aC9zaWdub3V0JyB9LFxuICBdXG4gICAgLmZpbHRlcigobGlua0NvbmZpZykgPT4gbGlua0NvbmZpZylcbiAgICAubWFwKCh7IGxhYmVsLCBocmVmIH0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSBrZXk9e2hyZWZ9IGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPXtocmVmfT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRhcmsgYmctZGFya1wiPlxuICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgRnV0dXJlIEZlYXR1cmVcbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj57bGlua3N9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiY3VycmVudFVzZXIiLCJsaW5rcyIsImxhYmVsIiwiaHJlZiIsImZpbHRlciIsImxpbmtDb25maWciLCJtYXAiLCJsaSIsImNsYXNzTmFtZSIsIm5hdiIsImRpdiIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var cesium_Build_Cesium_Widgets_widgets_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cesium/Build/Cesium/Widgets/widgets.css */ \"./node_modules/cesium/Build/Cesium/Widgets/widgets.css\");\n/* harmony import */ var cesium_Build_Cesium_Widgets_widgets_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cesium_Build_Cesium_Widgets_widgets_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.scss */ \"./app.scss\");\n/* harmony import */ var _app_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state/store */ \"./state/store.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_build_client__WEBPACK_IMPORTED_MODULE_2__, react_redux__WEBPACK_IMPORTED_MODULE_6__, _state_store__WEBPACK_IMPORTED_MODULE_7__]);\n([_api_build_client__WEBPACK_IMPORTED_MODULE_2__, react_redux__WEBPACK_IMPORTED_MODULE_6__, _state_store__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst AppComponent = ({ Component, pageProps, currentUser })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {\n        store: _state_store__WEBPACK_IMPORTED_MODULE_7__.store,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                currentUser: currentUser\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"page\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    currentUser: currentUser,\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\pages\\\\_app.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 10,\n        columnNumber: 10\n    }, undefined);\n};\nAppComponent.getInitialProps = async (appContext)=>{\n    const client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(appContext.ctx);\n    // console.log('client', client)\n    // const { data } = await client.get('/api/users/currentuser');\n    // console.log('data', data);\n    let pageProps = {};\n    if (appContext.Component.getInitialProps) {\n        pageProps = await appContext.Component.getInitialProps(appContext.ctx, client);\n    }\n    return {\n        pageProps\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppComponent);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ0k7QUFDSjtBQUNNO0FBQzVCO0FBQ29CO0FBQ0Q7QUFFdkMsTUFBTUksZUFBZSxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUU7SUFDekQscUJBQU8sOERBQUNMLGlEQUFRQTtRQUFDQyxPQUFPQSwrQ0FBS0E7OzBCQUV6Qiw4REFBQ0YsMERBQU1BO2dCQUFDTSxhQUFhQTs7Ozs7OzBCQUVyQiw4REFBQ0M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNKO29CQUFVRSxhQUFhQTtvQkFBYyxHQUFHRCxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkxRDtBQUVBRixhQUFhTSxlQUFlLEdBQUcsT0FBT0M7SUFDcEMsTUFBTUMsU0FBU1osNkRBQVdBLENBQUNXLFdBQVdFLEdBQUc7SUFDekMsZ0NBQWdDO0lBQ2hDLCtEQUErRDtJQUMvRCw2QkFBNkI7SUFDN0IsSUFBSVAsWUFBWSxDQUFDO0lBQ2pCLElBQUlLLFdBQVdOLFNBQVMsQ0FBQ0ssZUFBZSxFQUFFO1FBQ3hDSixZQUFZLE1BQU1LLFdBQVdOLFNBQVMsQ0FBQ0ssZUFBZSxDQUNwREMsV0FBV0UsR0FBRyxFQUNkRDtJQUdKO0lBRUEsT0FBTztRQUNMTjtJQUVGO0FBQ0Y7QUFFQSxpRUFBZUYsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcbmltcG9ydCBidWlsZENsaWVudCBmcm9tICcuLi9hcGkvYnVpbGQtY2xpZW50JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0ICdjZXNpdW0vQnVpbGQvQ2VzaXVtL1dpZGdldHMvd2lkZ2V0cy5jc3MnXG5pbXBvcnQgJy4uL2FwcC5zY3NzJ1xuaW1wb3J0ICB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9zdGF0ZS9zdG9yZVwiO1xuXG5jb25zdCBBcHBDb21wb25lbnQgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgY3VycmVudFVzZXIgfSkgPT4ge1xuICByZXR1cm4gPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gIFxuICAgICAgPEhlYWRlciBjdXJyZW50VXNlcj17Y3VycmVudFVzZXJ9IC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxuICAgICAgICA8Q29tcG9uZW50IGN1cnJlbnRVc2VyPXtjdXJyZW50VXNlcn0gey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvZGl2PlxuICBcbiAgPC9Qcm92aWRlcj47XG59O1xuXG5BcHBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGFwcENvbnRleHQpID0+IHtcbiAgY29uc3QgY2xpZW50ID0gYnVpbGRDbGllbnQoYXBwQ29udGV4dC5jdHgpO1xuICAvLyBjb25zb2xlLmxvZygnY2xpZW50JywgY2xpZW50KVxuICAvLyBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5nZXQoJy9hcGkvdXNlcnMvY3VycmVudHVzZXInKTtcbiAgLy8gY29uc29sZS5sb2coJ2RhdGEnLCBkYXRhKTtcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuICBpZiAoYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgcGFnZVByb3BzID0gYXdhaXQgYXBwQ29udGV4dC5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgYXBwQ29udGV4dC5jdHgsXG4gICAgICBjbGllbnQsXG4gICAgICAvLyBkYXRhLmN1cnJlbnRVc2VyXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcGFnZVByb3BzLFxuICAgIC8vIC4uLmRhdGEsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJIZWFkZXIiLCJQcm92aWRlciIsInN0b3JlIiwiQXBwQ29tcG9uZW50IiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3VycmVudFVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJhcHBDb250ZXh0IiwiY2xpZW50IiwiY3R4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./state/models/modelsSlice.js":
/*!*************************************!*\
  !*** ./state/models/modelsSlice.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setModelsUrls: () => (/* binding */ setModelsUrls)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst modelsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"models\",\n    initialState: {\n        modelUrls: []\n    },\n    reducers: {\n        setModelsUrls: (state, action)=>{\n            console.log(action);\n            state.modelUrls = action.payload;\n        }\n    }\n});\nconst { setModelsUrls } = modelsSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modelsSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0ZS9tb2RlbHMvbW9kZWxzU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLGNBQWNELDZEQUFXQSxDQUFDO0lBQzVCRSxNQUFNO0lBQ05DLGNBQWM7UUFDWkMsV0FBVyxFQUFFO0lBQ2Y7SUFDQUMsVUFBVTtRQUNSQyxlQUFlLENBQUNDLE9BQU9DO1lBQ3JCQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pELE1BQU1ILFNBQVMsR0FBR0ksT0FBT0csT0FBTztRQUNsQztJQUNGO0FBQ0Y7QUFDTyxNQUFNLEVBQUVMLGFBQWEsRUFBRSxHQUFHTCxZQUFZVyxPQUFPLENBQUM7QUFDckQsaUVBQWVYLFlBQVlZLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3N0YXRlL21vZGVscy9tb2RlbHNTbGljZS5qcz84NWMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxyXG5cclxuY29uc3QgbW9kZWxzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnbW9kZWxzJyxcclxuICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICBtb2RlbFVybHM6IFtdLFxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgIHNldE1vZGVsc1VybHM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKVxyXG4gICAgICAgIHN0YXRlLm1vZGVsVXJscyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcbiAgZXhwb3J0IGNvbnN0IHsgc2V0TW9kZWxzVXJscyB9ID0gbW9kZWxzU2xpY2UuYWN0aW9ucztcclxuICBleHBvcnQgZGVmYXVsdCBtb2RlbHNTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsIm1vZGVsc1NsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsIm1vZGVsVXJscyIsInJlZHVjZXJzIiwic2V0TW9kZWxzVXJscyIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./state/models/modelsSlice.js\n");

/***/ }),

/***/ "./state/shapes/shapesSlice.js":
/*!*************************************!*\
  !*** ./state/shapes/shapesSlice.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setIconsUrls: () => (/* binding */ setIconsUrls),\n/* harmony export */   setSelectedShape: () => (/* binding */ setSelectedShape)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst shapesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"shapes\",\n    initialState: {\n        selectedShape: null,\n        iconsUrls: []\n    },\n    reducers: {\n        setSelectedShape: (state, action)=>{\n            // console.log(action)\n            state.selectedShape = action.payload;\n        },\n        setIconsUrls: (state, action)=>{\n            state.iconsUrls = action.payload;\n        }\n    }\n});\nconst { setSelectedShape, setIconsUrls } = shapesSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shapesSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0ZS9zaGFwZXMvc2hhcGVzU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxjQUFjRCw2REFBV0EsQ0FBQztJQUM1QkUsTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLGVBQWU7UUFDZkMsV0FBVyxFQUFFO0lBQ2Y7SUFDQUMsVUFBVTtRQUNSQyxrQkFBa0IsQ0FBQ0MsT0FBT0M7WUFDeEIsc0JBQXNCO1lBQ3RCRCxNQUFNSixhQUFhLEdBQUdLLE9BQU9DLE9BQU87UUFDdEM7UUFDQUMsY0FBYyxDQUFDSCxPQUFPQztZQUNwQkQsTUFBTUgsU0FBUyxHQUFHSSxPQUFPQyxPQUFPO1FBQ2xDO0lBQ0Y7QUFDRjtBQUNPLE1BQU0sRUFBRUgsZ0JBQWdCLEVBQUVJLFlBQVksRUFBRSxHQUFHVixZQUFZVyxPQUFPLENBQUM7QUFDdEUsaUVBQWVYLFlBQVlZLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3N0YXRlL3NoYXBlcy9zaGFwZXNTbGljZS5qcz8yODNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxyXG5cclxuY29uc3Qgc2hhcGVzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnc2hhcGVzJyxcclxuICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICBzZWxlY3RlZFNoYXBlOiBudWxsLFxyXG4gICAgICBpY29uc1VybHM6IFtdLFxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgIHNldFNlbGVjdGVkU2hhcGU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uKVxyXG4gICAgICAgIHN0YXRlLnNlbGVjdGVkU2hhcGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgfSxcclxuICAgICAgc2V0SWNvbnNVcmxzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN0YXRlLmljb25zVXJscyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuICBleHBvcnQgY29uc3QgeyBzZXRTZWxlY3RlZFNoYXBlLCBzZXRJY29uc1VybHMgfSA9IHNoYXBlc1NsaWNlLmFjdGlvbnM7XHJcbiAgZXhwb3J0IGRlZmF1bHQgc2hhcGVzU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJzaGFwZXNTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJzZWxlY3RlZFNoYXBlIiwiaWNvbnNVcmxzIiwicmVkdWNlcnMiLCJzZXRTZWxlY3RlZFNoYXBlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0SWNvbnNVcmxzIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./state/shapes/shapesSlice.js\n");

/***/ }),

/***/ "./state/store.js":
/*!************************!*\
  !*** ./state/store.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _models_modelsSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/modelsSlice */ \"./state/models/modelsSlice.js\");\n/* harmony import */ var _shapes_shapesSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes/shapesSlice */ \"./state/shapes/shapesSlice.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _models_modelsSlice__WEBPACK_IMPORTED_MODULE_1__, _shapes_shapesSlice__WEBPACK_IMPORTED_MODULE_2__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _models_modelsSlice__WEBPACK_IMPORTED_MODULE_1__, _shapes_shapesSlice__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        models: _models_modelsSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        shapes: _shapes_shapesSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    }\n}) // Can still subscribe to the store\n // store.subscribe(() => console.log(store.getState()))\n // {value: 1}\n;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0ZS9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThEO0FBQ2Q7QUFDQTtBQUd6QyxNQUFNSSxRQUFRSCxnRUFBY0EsQ0FBQztJQUNsQ0ksU0FBUztRQUNQQyxRQUFRSiwyREFBYUE7UUFDckJLLFFBQVFKLDJEQUFhQTtJQUN2QjtBQUNGLEdBRUEsbUNBQW1DO0NBQ25DLHVEQUF1RDtDQUd2RCxhQUFhO0NBTlgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zdGF0ZS9zdG9yZS5qcz80YjI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcbmltcG9ydCBtb2RlbHNSZWR1Y2VyIGZyb20gJy4vbW9kZWxzL21vZGVsc1NsaWNlJ1xyXG5pbXBvcnQgc2hhcGVzUmVkdWNlciBmcm9tICcuL3NoYXBlcy9zaGFwZXNTbGljZSdcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgbW9kZWxzOiBtb2RlbHNSZWR1Y2VyLFxyXG4gICAgc2hhcGVzOiBzaGFwZXNSZWR1Y2VyXHJcbiAgfVxyXG59KVxyXG5cclxuLy8gQ2FuIHN0aWxsIHN1YnNjcmliZSB0byB0aGUgc3RvcmVcclxuLy8gc3RvcmUuc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpKVxyXG5cclxuXHJcbi8vIHt2YWx1ZTogMX0iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjb25maWd1cmVTdG9yZSIsIm1vZGVsc1JlZHVjZXIiLCJzaGFwZXNSZWR1Y2VyIiwic3RvcmUiLCJyZWR1Y2VyIiwibW9kZWxzIiwic2hhcGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./state/store.js\n");

/***/ }),

/***/ "./app.scss":
/*!******************!*\
  !*** ./app.scss ***!
  \******************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/cesium","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();