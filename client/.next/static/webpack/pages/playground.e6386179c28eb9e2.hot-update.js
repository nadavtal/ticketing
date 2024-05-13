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

/***/ "./components/RFModel.js":
/*!*******************************!*\
  !*** ./components/RFModel.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst RFModel = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s((param, ref)=>{\n    let { modelUrl, scale = 1, position = [\n        0,\n        0,\n        0\n    ], rotation = [\n        0,\n        0,\n        0\n    ], onClick, onPointerDown, onPointerUp, visible = true, viewedProductTitle } = param;\n    _s();\n    const { nodes, materials } = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useGLTF)(modelUrl);\n    console.log(nodes);\n    console.log(modelUrl);\n    const material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshBasicMaterial({\n        color: 0xffffff,\n        transparent: true,\n        opacity: 0.1\n    });\n    // Calculate the bounding box of the model\n    const bbox = new THREE.Box3().setFromObject(nodes);\n    const size = bbox.getSize(new THREE.Vector3());\n    const maxDimension = Math.max(size.x, size.y, size.z);\n    // Calculate the scale factor\n    const scaleFactor = 1 / maxDimension;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n        ref: ref,\n        onClick: onClick,\n        onPointerDown: onPointerDown,\n        // onPointerUp={onPointerUp}\n        dispose: null,\n        scale: [\n            scaleFactor,\n            scaleFactor,\n            scaleFactor\n        ],\n        position: position,\n        rotation: rotation,\n        visible: visible,\n        children: Object.keys(nodes).map((key, index)=>{\n            const node = nodes[key];\n            if (!node.name.includes(\"bbox\")) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                // onClick={(e) => console.log(node)}\n                // onPointerOver={() => console.log(node.userData)}\n                geometry: node.geometry,\n                material: node.material,\n                castShadow: true,\n                receiveShadow: true\n            }, index, false, {\n                fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\RFModel.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\RFModel.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n}, \"3EbVibAGuOW6XeBFAk0EenvHzHI=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useGLTF\n    ];\n})), \"3EbVibAGuOW6XeBFAk0EenvHzHI=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useGLTF\n    ];\n});\n_c1 = RFModel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RFModel);\nvar _c, _c1;\n$RefreshReg$(_c, \"RFModel$forwardRef\");\n$RefreshReg$(_c1, \"RFModel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JGTW9kZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBQ0U7QUFDRjtBQUMxQyxNQUFNSSx3QkFBVUgsR0FBQUEsaURBQVVBLFNBQUMsUUFVeEJJO1FBVnlCLEVBQzFCQyxRQUFRLEVBQ1JDLFFBQVEsQ0FBQyxFQUNUQyxXQUFXO1FBQUM7UUFBRztRQUFHO0tBQUUsRUFDcEJDLFdBQVc7UUFBQztRQUFHO1FBQUc7S0FBRSxFQUNwQkMsT0FBTyxFQUNQQyxhQUFhLEVBQ2JDLFdBQVcsRUFDWEMsVUFBVSxJQUFJLEVBQ2RDLGtCQUFrQixFQUNuQjs7SUFDQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFLEdBQUdkLDBEQUFPQSxDQUFDSTtJQUNyQ1csUUFBUUMsR0FBRyxDQUFDSDtJQUNaRSxRQUFRQyxHQUFHLENBQUNaO0lBQ1osTUFBTWEsV0FBVyxJQUFJaEIsb0RBQWlCQSxDQUFDO1FBQ3JDaUIsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLFNBQVM7SUFDWDtJQUNBLDBDQUEwQztJQUM1QyxNQUFNQyxPQUFPLElBQUlDLE1BQU1DLElBQUksR0FBR0MsYUFBYSxDQUFDWDtJQUM1QyxNQUFNWSxPQUFPSixLQUFLSyxPQUFPLENBQUMsSUFBSUosTUFBTUssT0FBTztJQUMzQyxNQUFNQyxlQUFlQyxLQUFLQyxHQUFHLENBQUNMLEtBQUtNLENBQUMsRUFBRU4sS0FBS08sQ0FBQyxFQUFFUCxLQUFLUSxDQUFDO0lBQ3BELDZCQUE2QjtJQUM3QixNQUFNQyxjQUFjLElBQUlOO0lBQ3RCLHFCQUNFLDhEQUFDTztRQUNDaEMsS0FBS0E7UUFDTEssU0FBU0E7UUFDVEMsZUFBZUE7UUFDZiw0QkFBNEI7UUFDNUIyQixTQUFTO1FBQ1QvQixPQUFPO1lBQUM2QjtZQUFhQTtZQUFhQTtTQUFZO1FBQzlDNUIsVUFBVUE7UUFDVkMsVUFBVUE7UUFDVkksU0FBU0E7a0JBRVIwQixPQUFPQyxJQUFJLENBQUN6QixPQUFPMEIsR0FBRyxDQUFDLENBQUNDLEtBQUtDO1lBQzVCLE1BQU1DLE9BQU83QixLQUFLLENBQUMyQixJQUFJO1lBQ3ZCLElBQUksQ0FBQ0UsS0FBS0MsSUFBSSxDQUFDQyxRQUFRLENBQUMsU0FDdEIscUJBQ0UsOERBQUNDO2dCQUVDLHFDQUFxQztnQkFDckMsbURBQW1EO2dCQUNuREMsVUFBVUosS0FBS0ksUUFBUTtnQkFDdkI3QixVQUFVeUIsS0FBS3pCLFFBQVE7Z0JBQ3ZCOEIsVUFBVTtnQkFDVkMsYUFBYTtlQU5SUDs7Ozs7UUFTYjs7Ozs7O0FBR047O1FBM0MrQnpDLHNEQUFPQTs7OztRQUFQQSxzREFBT0E7Ozs7QUE2Q3RDLCtEQUFlRSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUkZNb2RlbC5qcz82N2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUdMVEYgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcclxuaW1wb3J0IHsgTWVzaEJhc2ljTWF0ZXJpYWwgfSBmcm9tIFwidGhyZWVcIjtcclxuY29uc3QgUkZNb2RlbCA9IGZvcndhcmRSZWYoKHsgXHJcbiAgbW9kZWxVcmwsIFxyXG4gIHNjYWxlID0gMSxcclxuICBwb3NpdGlvbiA9IFswLCAwLCAwXSxcclxuICByb3RhdGlvbiA9IFswLCAwLCAwXSxcclxuICBvbkNsaWNrLFxyXG4gIG9uUG9pbnRlckRvd24sXHJcbiAgb25Qb2ludGVyVXAsXHJcbiAgdmlzaWJsZSA9IHRydWUsXHJcbiAgdmlld2VkUHJvZHVjdFRpdGxlXHJcbn0sIHJlZikgPT4ge1xyXG4gIGNvbnN0IHsgbm9kZXMsIG1hdGVyaWFscyB9ID0gdXNlR0xURihtb2RlbFVybCk7XHJcbiAgY29uc29sZS5sb2cobm9kZXMpXHJcbiAgY29uc29sZS5sb2cobW9kZWxVcmwpXHJcbiAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgY29sb3I6IDB4ZmZmZmZmLFxyXG4gICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICBvcGFjaXR5OiAwLjEsXHJcbiAgfSk7XHJcbiAgLy8gQ2FsY3VsYXRlIHRoZSBib3VuZGluZyBib3ggb2YgdGhlIG1vZGVsXHJcbmNvbnN0IGJib3ggPSBuZXcgVEhSRUUuQm94MygpLnNldEZyb21PYmplY3Qobm9kZXMpO1xyXG5jb25zdCBzaXplID0gYmJveC5nZXRTaXplKG5ldyBUSFJFRS5WZWN0b3IzKCkpO1xyXG5jb25zdCBtYXhEaW1lbnNpb24gPSBNYXRoLm1heChzaXplLngsIHNpemUueSwgc2l6ZS56KTtcclxuLy8gQ2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3JcclxuY29uc3Qgc2NhbGVGYWN0b3IgPSAxIC8gbWF4RGltZW5zaW9uO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Z3JvdXBcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgIG9uUG9pbnRlckRvd249e29uUG9pbnRlckRvd259XHJcbiAgICAgIC8vIG9uUG9pbnRlclVwPXtvblBvaW50ZXJVcH1cclxuICAgICAgZGlzcG9zZT17bnVsbH1cclxuICAgICAgc2NhbGU9e1tzY2FsZUZhY3Rvciwgc2NhbGVGYWN0b3IsIHNjYWxlRmFjdG9yXX1cclxuICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxyXG4gICAgICByb3RhdGlvbj17cm90YXRpb259XHJcbiAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICA+XHJcbiAgICAgIHtPYmplY3Qua2V5cyhub2RlcykubWFwKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2tleV07XHJcbiAgICAgICAgaWYgKCFub2RlLm5hbWUuaW5jbHVkZXMoXCJiYm94XCIpKVxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG1lc2hcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIC8vIG9uQ2xpY2s9eyhlKSA9PiBjb25zb2xlLmxvZyhub2RlKX1cclxuICAgICAgICAgICAgICAvLyBvblBvaW50ZXJPdmVyPXsoKSA9PiBjb25zb2xlLmxvZyhub2RlLnVzZXJEYXRhKX1cclxuICAgICAgICAgICAgICBnZW9tZXRyeT17bm9kZS5nZW9tZXRyeX1cclxuICAgICAgICAgICAgICBtYXRlcmlhbD17bm9kZS5tYXRlcmlhbCB9XHJcbiAgICAgICAgICAgICAgY2FzdFNoYWRvd1xyXG4gICAgICAgICAgICAgIHJlY2VpdmVTaGFkb3dcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9ncm91cD5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJGTW9kZWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJ1c2VHTFRGIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJSRk1vZGVsIiwicmVmIiwibW9kZWxVcmwiLCJzY2FsZSIsInBvc2l0aW9uIiwicm90YXRpb24iLCJvbkNsaWNrIiwib25Qb2ludGVyRG93biIsIm9uUG9pbnRlclVwIiwidmlzaWJsZSIsInZpZXdlZFByb2R1Y3RUaXRsZSIsIm5vZGVzIiwibWF0ZXJpYWxzIiwiY29uc29sZSIsImxvZyIsIm1hdGVyaWFsIiwiY29sb3IiLCJ0cmFuc3BhcmVudCIsIm9wYWNpdHkiLCJiYm94IiwiVEhSRUUiLCJCb3gzIiwic2V0RnJvbU9iamVjdCIsInNpemUiLCJnZXRTaXplIiwiVmVjdG9yMyIsIm1heERpbWVuc2lvbiIsIk1hdGgiLCJtYXgiLCJ4IiwieSIsInoiLCJzY2FsZUZhY3RvciIsImdyb3VwIiwiZGlzcG9zZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJpbmRleCIsIm5vZGUiLCJuYW1lIiwiaW5jbHVkZXMiLCJtZXNoIiwiZ2VvbWV0cnkiLCJjYXN0U2hhZG93IiwicmVjZWl2ZVNoYWRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RFModel.js\n"));

/***/ })

});