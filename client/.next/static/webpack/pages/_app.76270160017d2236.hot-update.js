"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./state/models/modelsSlice.js":
/*!*************************************!*\
  !*** ./state/models/modelsSlice.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setModelsUrls: function() { return /* binding */ setModelsUrls; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.legacy-esm.js\");\n\nconst modelsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"models\",\n    initialState: {\n        modelUrls: []\n    },\n    reducers: {\n        setModelsUrls: (state, action)=>{\n            console.log(action);\n            state.modelUrls = action.payload;\n        }\n    }\n});\nconst { setModelsUrls } = modelsSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (modelsSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0ZS9tb2RlbHMvbW9kZWxzU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsY0FBY0QsNkRBQVdBLENBQUM7SUFDNUJFLE1BQU07SUFDTkMsY0FBYztRQUNaQyxXQUFXLEVBQUU7SUFDZjtJQUNBQyxVQUFVO1FBQ1JDLGVBQWUsQ0FBQ0MsT0FBT0M7WUFDckJDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWkQsTUFBTUgsU0FBUyxHQUFHSSxPQUFPRyxPQUFPO1FBQ2xDO0lBQ0Y7QUFDRjtBQUNPLE1BQU0sRUFBRUwsYUFBYSxFQUFFLEdBQUdMLFlBQVlXLE9BQU8sQ0FBQztBQUNyRCwrREFBZVgsWUFBWVksT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0YXRlL21vZGVscy9tb2RlbHNTbGljZS5qcz84NWMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxyXG5cclxuY29uc3QgbW9kZWxzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnbW9kZWxzJyxcclxuICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICBtb2RlbFVybHM6IFtdLFxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgIHNldE1vZGVsc1VybHM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKVxyXG4gICAgICAgIHN0YXRlLm1vZGVsVXJscyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0pXHJcbiAgZXhwb3J0IGNvbnN0IHsgc2V0TW9kZWxzVXJscyB9ID0gbW9kZWxzU2xpY2UuYWN0aW9ucztcclxuICBleHBvcnQgZGVmYXVsdCBtb2RlbHNTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsIm1vZGVsc1NsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsIm1vZGVsVXJscyIsInJlZHVjZXJzIiwic2V0TW9kZWxzVXJscyIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./state/models/modelsSlice.js\n"));

/***/ })

});