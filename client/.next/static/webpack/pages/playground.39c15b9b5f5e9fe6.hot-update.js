"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/playground",{

/***/ "./components/Models.js":
/*!******************************!*\
  !*** ./components/Models.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FileInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileInput */ \"./components/FileInput.js\");\n/* harmony import */ var _state_models_modelsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/models/modelsSlice */ \"./state/models/modelsSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.legacy-esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Models = (param)=>{\n    let { shapes, onClick } = param;\n    _s();\n    const modelsUrls = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.models.modelUrls);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    console.log(modelsUrls);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Models\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\Models.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FileInput__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onChange: (file, extension, fileUrl)=>{\n                    console.log(file, extension, fileUrl);\n                    if (extension === \"glb\") {\n                        dispatch((0,_state_models_modelsSlice__WEBPACK_IMPORTED_MODULE_2__.setModelsUrls)([\n                            ...modelsUrls,\n                            fileUrl\n                        ]));\n                    }\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\Models.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\Models.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Models, \"Oyvy60FRDPwHDrrTSdhocJ6stAg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Models;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Models);\nvar _c;\n$RefreshReg$(_c, \"Models\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vZGVscy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNvQztBQUN3QjtBQUNMO0FBRXZELE1BQU1JLFNBQVM7UUFBQyxFQUNaQyxNQUFNLEVBQ05DLE9BQU8sRUFDVjs7SUFDRyxNQUFNQyxhQUFhTCx3REFBV0EsQ0FBQyxDQUFDTSxRQUFVQSxNQUFNQyxNQUFNLENBQUNDLFNBQVM7SUFDaEUsTUFBTUMsV0FBV1Isd0RBQVdBO0lBQzVCUyxRQUFRQyxHQUFHLENBQUNOO0lBQ2QscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDaEIsa0RBQVNBO2dCQUNSaUIsVUFBVSxDQUFDQyxNQUFNQyxXQUFXQztvQkFDMUJSLFFBQVFDLEdBQUcsQ0FBQ0ssTUFBTUMsV0FBV0M7b0JBQzdCLElBQUlELGNBQWMsT0FBTzt3QkFDdkJSLFNBQVNWLHdFQUFhQSxDQUFDOytCQUFJTTs0QkFBWWE7eUJBQVE7b0JBQ2pEO2dCQUNGOzs7Ozs7Ozs7Ozs7QUFJVjtHQXBCTWhCOztRQUlpQkYsb0RBQVdBO1FBQ2JDLG9EQUFXQTs7O0tBTDFCQztBQXNCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vZGVscy5qcz9mN2FhIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgRmlsZUlucHV0IGZyb20gXCIuL0ZpbGVJbnB1dFwiO1xyXG5pbXBvcnQgeyBzZXRNb2RlbHNVcmxzIH0gZnJvbSBcIi4uL3N0YXRlL21vZGVscy9tb2RlbHNTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuIFxyXG5jb25zdCBNb2RlbHMgPSAoe1xyXG4gICAgc2hhcGVzLFxyXG4gICAgb25DbGlja1xyXG59KSA9PiB7XHJcbiAgICBjb25zdCBtb2RlbHNVcmxzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5tb2RlbHMubW9kZWxVcmxzKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnNvbGUubG9nKG1vZGVsc1VybHMpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgPGgxPk1vZGVsczwvaDE+XHJcbiAgICAgICAgPEZpbGVJbnB1dCBcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZmlsZSwgZXh0ZW5zaW9uLCBmaWxlVXJsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGUsIGV4dGVuc2lvbiwgZmlsZVVybClcclxuICAgICAgICAgICAgaWYgKGV4dGVuc2lvbiA9PT0gXCJnbGJcIikge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKHNldE1vZGVsc1VybHMoWy4uLm1vZGVsc1VybHMsIGZpbGVVcmxdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGVscztcclxuIl0sIm5hbWVzIjpbIkZpbGVJbnB1dCIsInNldE1vZGVsc1VybHMiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiTW9kZWxzIiwic2hhcGVzIiwib25DbGljayIsIm1vZGVsc1VybHMiLCJzdGF0ZSIsIm1vZGVscyIsIm1vZGVsVXJscyIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwib25DaGFuZ2UiLCJmaWxlIiwiZXh0ZW5zaW9uIiwiZmlsZVVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Models.js\n"));

/***/ })

});