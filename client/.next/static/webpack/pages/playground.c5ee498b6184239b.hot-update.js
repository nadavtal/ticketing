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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Points_Points__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Points/Points */ \"./components/Points/Points.js\");\n/* harmony import */ var _utils_utils3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils3d */ \"./utils/utils3d.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst RFModel = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s((param, ref)=>{\n    let { modelUrl, scale = 1, position = [\n        0,\n        0,\n        0\n    ], rotation = [\n        0,\n        0,\n        0\n    ], onClick, onPointerDown, onPointerUp, visible = true, viewedProductTitle } = param;\n    _s();\n    const { nodes, materials } = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useGLTF)(modelUrl);\n    console.log(nodes);\n    const material = new three__WEBPACK_IMPORTED_MODULE_5__.MeshBasicMaterial({\n        color: 0xffffff,\n        transparent: true,\n        opacity: 0.1\n    });\n    const createPointsFromNodes = (nodes)=>{\n        // console.log(\"createPointsFromNodes\", nodes)\n        let points = [];\n        for(const name in nodes){\n            const node = nodes[name];\n            if (node instanceof three__WEBPACK_IMPORTED_MODULE_5__.Mesh) {\n                // console.log(node)\n                points = [\n                    ...points,\n                    ...node.geometry.attributes.position.array\n                ];\n            }\n        }\n        // console.log(points)\n        const { min, max } = (0,_utils_utils3d__WEBPACK_IMPORTED_MODULE_3__.getMinMax)(points);\n        // console.log(\"min\", min, \"max\", max)\n        const normalized = (0,_utils_utils3d__WEBPACK_IMPORTED_MODULE_3__.normalize)(points, min, max);\n        console.log(\"points\", points.length);\n        return new Float32Array(normalized);\n    };\n    // createPointsFromNodes(nodes)\n    const autoScalModel = (nodesObject, maxSize)=>{\n        // Create an empty bounding box\n        const bbox = new three__WEBPACK_IMPORTED_MODULE_5__.Box3();\n        // Calculate the bounding box for each node\n        for(const name in nodesObject){\n            const node = nodesObject[name];\n            if (node instanceof three__WEBPACK_IMPORTED_MODULE_5__.Mesh) {\n                // bbox.expandByObject(node);\n                const { min, max } = (0,_utils_utils3d__WEBPACK_IMPORTED_MODULE_3__.getMinMax)(node.geometry.attributes.position.array);\n                node.geometry.attributes.position.array = (0,_utils_utils3d__WEBPACK_IMPORTED_MODULE_3__.normalize)(node.geometry.attributes.position.array, min, max);\n            }\n        // if (node instanceof Group) {\n        //   for (const name in node.children) {\n        //     const childNode = nodes[name];\n        //     if (childNode instanceof Mesh) {\n        //       bbox.expandByObject(childNode);\n        //     }\n        //     // if (childNode instanceof Group) {\n        //     //   bbox.expandByObject(childNode);\n        //     // }\n        //   }\n        // }\n        }\n        // const size = bbox.getSize(new Vector3());\n        // const maxDimension = Math.max(size.x, size.y, size.z);\n        // const scaleFactor = maxSize / maxDimension;\n        // return scaleFactor;\n        return nodesObject;\n    };\n    // autoScalModel()\n    // const scaleFactor = autoScalModel(nodes, 1);\n    const scaleFactor = 1;\n    // console.log(\"scaleFactor\", scaleFactor)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n        ref: ref,\n        onClick: onClick,\n        onPointerDown: onPointerDown,\n        // onPointerUp={onPointerUp}\n        dispose: null,\n        scale: [\n            scaleFactor,\n            scaleFactor,\n            scaleFactor\n        ],\n        position: position,\n        rotation: rotation,\n        visible: visible,\n        children: [\n            Object.keys(autoScalModel(nodes)).map((key, index)=>{\n                const node = nodes[key];\n                if (!node.name.includes(\"bbox\")) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                    // onClick={(e) => console.log(node)}\n                    // onPointerOver={() => console.log(node.userData)}\n                    geometry: node.geometry,\n                    material: node.material,\n                    castShadow: true,\n                    receiveShadow: true\n                }, index, false, {\n                    fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\RFModel.js\",\n                    lineNumber: 102,\n                    columnNumber: 15\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Points_Points__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                positions: createPointsFromNodes(nodes)\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\RFModel.js\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\RFModel.js\",\n        lineNumber: 87,\n        columnNumber: 7\n    }, undefined);\n}, \"3EbVibAGuOW6XeBFAk0EenvHzHI=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useGLTF\n    ];\n})), \"3EbVibAGuOW6XeBFAk0EenvHzHI=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useGLTF\n    ];\n});\n_c1 = RFModel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RFModel);\nvar _c, _c1;\n$RefreshReg$(_c, \"RFModel$forwardRef\");\n$RefreshReg$(_c1, \"RFModel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JGTW9kZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEM7QUFDRTtBQUMwQjtBQUNqQztBQUNtQjtBQUN4RCxNQUFNVyx3QkFBVVYsR0FBQUEsaURBQVVBLFNBQ3hCLFFBWUVXO1FBWEEsRUFDRUMsUUFBUSxFQUNSQyxRQUFRLENBQUMsRUFDVEMsV0FBVztRQUFDO1FBQUc7UUFBRztLQUFFLEVBQ3BCQyxXQUFXO1FBQUM7UUFBRztRQUFHO0tBQUUsRUFDcEJDLE9BQU8sRUFDUEMsYUFBYSxFQUNiQyxXQUFXLEVBQ1hDLFVBQVUsSUFBSSxFQUNkQyxrQkFBa0IsRUFDbkI7O0lBR0QsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRSxHQUFHckIsMERBQU9BLENBQUNXO0lBQ3JDVyxRQUFRQyxHQUFHLENBQUNIO0lBRVosTUFBTUksV0FBVyxJQUFJdEIsb0RBQWlCQSxDQUFDO1FBQ3JDdUIsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLFNBQVM7SUFDWDtJQUVBLE1BQU1DLHdCQUF3QixDQUFDUjtRQUM3Qiw4Q0FBOEM7UUFDOUMsSUFBSVMsU0FBUyxFQUFFO1FBQ2YsSUFBSyxNQUFNQyxRQUFRVixNQUFPO1lBRXhCLE1BQU1XLE9BQU9YLEtBQUssQ0FBQ1UsS0FBSztZQUV4QixJQUFJQyxnQkFBZ0IzQix1Q0FBSUEsRUFBRTtnQkFDeEIsb0JBQW9CO2dCQUNwQnlCLFNBQVM7dUJBQUlBO3VCQUFXRSxLQUFLQyxRQUFRLENBQUNDLFVBQVUsQ0FBQ3BCLFFBQVEsQ0FBQ3FCLEtBQUs7aUJBQUM7WUFDbEU7UUFDRjtRQUNBLHNCQUFzQjtRQUN0QixNQUFNLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLEdBQUc3Qix5REFBU0EsQ0FBQ3NCO1FBQy9CLHNDQUFzQztRQUN0QyxNQUFNUSxhQUFhN0IseURBQVNBLENBQUNxQixRQUFRTSxLQUFLQztRQUMxQ2QsUUFBUUMsR0FBRyxDQUFDLFVBQVVNLE9BQU9TLE1BQU07UUFDbkMsT0FBTyxJQUFJQyxhQUFhRjtJQUMxQjtJQUNBLCtCQUErQjtJQUMvQixNQUFNRyxnQkFBZ0IsQ0FBQ0MsYUFBYUM7UUFDbEMsK0JBQStCO1FBQy9CLE1BQU1DLE9BQU8sSUFBSTFDLHVDQUFJQTtRQUNyQiwyQ0FBMkM7UUFDM0MsSUFBSyxNQUFNNkIsUUFBUVcsWUFBYTtZQUM5QixNQUFNVixPQUFPVSxXQUFXLENBQUNYLEtBQUs7WUFDOUIsSUFBSUMsZ0JBQWdCM0IsdUNBQUlBLEVBQUU7Z0JBQ3hCLDZCQUE2QjtnQkFDN0IsTUFBTSxFQUFFK0IsR0FBRyxFQUFFQyxHQUFHLEVBQUUsR0FBRzdCLHlEQUFTQSxDQUFDd0IsS0FBS0MsUUFBUSxDQUFDQyxVQUFVLENBQUNwQixRQUFRLENBQUNxQixLQUFLO2dCQUN0RUgsS0FBS0MsUUFBUSxDQUFDQyxVQUFVLENBQUNwQixRQUFRLENBQUNxQixLQUFLLEdBQUcxQix5REFBU0EsQ0FDakR1QixLQUFLQyxRQUFRLENBQUNDLFVBQVUsQ0FBQ3BCLFFBQVEsQ0FBQ3FCLEtBQUssRUFBRUMsS0FBS0M7WUFFbEQ7UUFDQSwrQkFBK0I7UUFDL0Isd0NBQXdDO1FBQ3hDLHFDQUFxQztRQUNyQyx1Q0FBdUM7UUFDdkMsd0NBQXdDO1FBQ3hDLFFBQVE7UUFDUiwyQ0FBMkM7UUFDM0MsMkNBQTJDO1FBQzNDLFdBQVc7UUFDWCxNQUFNO1FBQ04sSUFBSTtRQUNOO1FBRUEsNENBQTRDO1FBQzVDLHlEQUF5RDtRQUN6RCw4Q0FBOEM7UUFDOUMsc0JBQXNCO1FBQ3RCLE9BQU9LO0lBQ1Q7SUFDQSxrQkFBa0I7SUFDbEIsK0NBQStDO0lBQy9DLE1BQU1HLGNBQWM7SUFDcEIsMENBQTBDO0lBQzFDLHFCQUNFLDhEQUFDQztRQUNDbkMsS0FBS0E7UUFDTEssU0FBU0E7UUFDVEMsZUFBZUE7UUFDZiw0QkFBNEI7UUFDNUI4QixTQUFTO1FBQ1RsQyxPQUFPO1lBQUNnQztZQUFhQTtZQUFhQTtTQUFZO1FBQzlDL0IsVUFBVUE7UUFDVkMsVUFBVUE7UUFDVkksU0FBU0E7O1lBRVI2QixPQUFPQyxJQUFJLENBQUNSLGNBQWNwQixRQUFRNkIsR0FBRyxDQUFDLENBQUNDLEtBQUtDO2dCQUMzQyxNQUFNcEIsT0FBT1gsS0FBSyxDQUFDOEIsSUFBSTtnQkFDdkIsSUFBSSxDQUFDbkIsS0FBS0QsSUFBSSxDQUFDc0IsUUFBUSxDQUFDLFNBQ3RCLHFCQUNFLDhEQUFDQztvQkFFQyxxQ0FBcUM7b0JBQ3JDLG1EQUFtRDtvQkFDbkRyQixVQUFVRCxLQUFLQyxRQUFRO29CQUN2QlIsVUFBVU8sS0FBS1AsUUFBUTtvQkFDdkI4QixVQUFVO29CQUNWQyxhQUFhO21CQU5SSjs7Ozs7WUFVYjswQkFDQSw4REFBQzdDLHNEQUFNQTtnQkFDTGtELFdBQVc1QixzQkFBc0JSOzs7Ozs7Ozs7Ozs7QUFLekM7O1FBbkcrQnBCLHNEQUFPQTs7OztRQUFQQSxzREFBT0E7Ozs7QUFzR3hDLCtEQUFlUyxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUkZNb2RlbC5qcz82N2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUdMVEYgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcclxuaW1wb3J0IHsgQm94MywgTWVzaEJhc2ljTWF0ZXJpYWwsIFZlY3RvcjMsIE1lc2gsIEdyb3VwIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCBQb2ludHMgZnJvbSBcIi4vUG9pbnRzL1BvaW50c1wiO1xyXG5pbXBvcnQgeyBnZXRNaW5NYXgsIG5vcm1hbGl6ZSB9IGZyb20gXCIuLi91dGlscy91dGlsczNkXCI7XHJcbmNvbnN0IFJGTW9kZWwgPSBmb3J3YXJkUmVmKFxyXG4gIChcclxuICAgIHtcclxuICAgICAgbW9kZWxVcmwsXHJcbiAgICAgIHNjYWxlID0gMSxcclxuICAgICAgcG9zaXRpb24gPSBbMCwgMCwgMF0sXHJcbiAgICAgIHJvdGF0aW9uID0gWzAsIDAsIDBdLFxyXG4gICAgICBvbkNsaWNrLFxyXG4gICAgICBvblBvaW50ZXJEb3duLFxyXG4gICAgICBvblBvaW50ZXJVcCxcclxuICAgICAgdmlzaWJsZSA9IHRydWUsXHJcbiAgICAgIHZpZXdlZFByb2R1Y3RUaXRsZSxcclxuICAgIH0sXHJcbiAgICByZWZcclxuICApID0+IHtcclxuICAgIGNvbnN0IHsgbm9kZXMsIG1hdGVyaWFscyB9ID0gdXNlR0xURihtb2RlbFVybCk7XHJcbiAgICBjb25zb2xlLmxvZyhub2Rlcyk7XHJcblxyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICBjb2xvcjogMHhmZmZmZmYsXHJcbiAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICBvcGFjaXR5OiAwLjEsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVQb2ludHNGcm9tTm9kZXMgPSAobm9kZXMpID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGVQb2ludHNGcm9tTm9kZXNcIiwgbm9kZXMpXHJcbiAgICAgIGxldCBwb2ludHMgPSBbXTtcclxuICAgICAgZm9yIChjb25zdCBuYW1lIGluIG5vZGVzKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tuYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBNZXNoKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhub2RlKVxyXG4gICAgICAgICAgcG9pbnRzID0gWy4uLnBvaW50cywgLi4ubm9kZS5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5XVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwb2ludHMpXHJcbiAgICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IGdldE1pbk1heChwb2ludHMpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm1pblwiLCBtaW4sIFwibWF4XCIsIG1heClcclxuICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IG5vcm1hbGl6ZShwb2ludHMsIG1pbiwgbWF4KTtcclxuICAgICAgY29uc29sZS5sb2coXCJwb2ludHNcIiwgcG9pbnRzLmxlbmd0aClcclxuICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkobm9ybWFsaXplZCk7XHJcbiAgICB9XHJcbiAgICAvLyBjcmVhdGVQb2ludHNGcm9tTm9kZXMobm9kZXMpXHJcbiAgICBjb25zdCBhdXRvU2NhbE1vZGVsID0gKG5vZGVzT2JqZWN0LCBtYXhTaXplKSA9PiB7XHJcbiAgICAgIC8vIENyZWF0ZSBhbiBlbXB0eSBib3VuZGluZyBib3hcclxuICAgICAgY29uc3QgYmJveCA9IG5ldyBCb3gzKCk7XHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgYm91bmRpbmcgYm94IGZvciBlYWNoIG5vZGVcclxuICAgICAgZm9yIChjb25zdCBuYW1lIGluIG5vZGVzT2JqZWN0KSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzT2JqZWN0W25hbWVdO1xyXG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgLy8gYmJveC5leHBhbmRCeU9iamVjdChub2RlKTtcclxuICAgICAgICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IGdldE1pbk1heChub2RlLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXkpO1xyXG4gICAgICAgICAgbm9kZS5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5ID0gbm9ybWFsaXplKFxyXG4gICAgICAgICAgICBub2RlLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXksIG1pbiwgbWF4XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAobm9kZSBpbnN0YW5jZW9mIEdyb3VwKSB7XHJcbiAgICAgICAgLy8gICBmb3IgKGNvbnN0IG5hbWUgaW4gbm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBjaGlsZE5vZGUgPSBub2Rlc1tuYW1lXTtcclxuICAgICAgICAvLyAgICAgaWYgKGNoaWxkTm9kZSBpbnN0YW5jZW9mIE1lc2gpIHtcclxuICAgICAgICAvLyAgICAgICBiYm94LmV4cGFuZEJ5T2JqZWN0KGNoaWxkTm9kZSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgLy8gaWYgKGNoaWxkTm9kZSBpbnN0YW5jZW9mIEdyb3VwKSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgYmJveC5leHBhbmRCeU9iamVjdChjaGlsZE5vZGUpO1xyXG4gICAgICAgIC8vICAgICAvLyB9XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBjb25zdCBzaXplID0gYmJveC5nZXRTaXplKG5ldyBWZWN0b3IzKCkpO1xyXG4gICAgICAvLyBjb25zdCBtYXhEaW1lbnNpb24gPSBNYXRoLm1heChzaXplLngsIHNpemUueSwgc2l6ZS56KTtcclxuICAgICAgLy8gY29uc3Qgc2NhbGVGYWN0b3IgPSBtYXhTaXplIC8gbWF4RGltZW5zaW9uO1xyXG4gICAgICAvLyByZXR1cm4gc2NhbGVGYWN0b3I7XHJcbiAgICAgIHJldHVybiBub2Rlc09iamVjdFxyXG4gICAgfTtcclxuICAgIC8vIGF1dG9TY2FsTW9kZWwoKVxyXG4gICAgLy8gY29uc3Qgc2NhbGVGYWN0b3IgPSBhdXRvU2NhbE1vZGVsKG5vZGVzLCAxKTtcclxuICAgIGNvbnN0IHNjYWxlRmFjdG9yID0gMTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwic2NhbGVGYWN0b3JcIiwgc2NhbGVGYWN0b3IpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Z3JvdXBcclxuICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgIG9uUG9pbnRlckRvd249e29uUG9pbnRlckRvd259XHJcbiAgICAgICAgLy8gb25Qb2ludGVyVXA9e29uUG9pbnRlclVwfVxyXG4gICAgICAgIGRpc3Bvc2U9e251bGx9XHJcbiAgICAgICAgc2NhbGU9e1tzY2FsZUZhY3Rvciwgc2NhbGVGYWN0b3IsIHNjYWxlRmFjdG9yXX1cclxuICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XHJcbiAgICAgICAgcm90YXRpb249e3JvdGF0aW9ufVxyXG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgID5cclxuICAgICAgICB7T2JqZWN0LmtleXMoYXV0b1NjYWxNb2RlbChub2RlcykpLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2tleV07XHJcbiAgICAgICAgICBpZiAoIW5vZGUubmFtZS5pbmNsdWRlcyhcImJib3hcIikpXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPG1lc2hcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoZSkgPT4gY29uc29sZS5sb2cobm9kZSl9XHJcbiAgICAgICAgICAgICAgICAvLyBvblBvaW50ZXJPdmVyPXsoKSA9PiBjb25zb2xlLmxvZyhub2RlLnVzZXJEYXRhKX1cclxuICAgICAgICAgICAgICAgIGdlb21ldHJ5PXtub2RlLmdlb21ldHJ5fVxyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw9e25vZGUubWF0ZXJpYWx9XHJcbiAgICAgICAgICAgICAgICBjYXN0U2hhZG93XHJcbiAgICAgICAgICAgICAgICByZWNlaXZlU2hhZG93XHJcbiAgICAgICAgICAgICAgICAvLyB2aXNpYmxlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxQb2ludHNcclxuICAgICAgICAgIHBvc2l0aW9ucz17Y3JlYXRlUG9pbnRzRnJvbU5vZGVzKG5vZGVzKX1cclxuICAgICAgICAgIC8vIHRhcmdldFBvc2l0aW9ucz17c2hhcGVzW3NlbGVjdGVkU2hhcGVdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZ3JvdXA+XHJcbiAgICApO1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJGTW9kZWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJ1c2VHTFRGIiwiQm94MyIsIk1lc2hCYXNpY01hdGVyaWFsIiwiVmVjdG9yMyIsIk1lc2giLCJHcm91cCIsIlBvaW50cyIsImdldE1pbk1heCIsIm5vcm1hbGl6ZSIsIlJGTW9kZWwiLCJyZWYiLCJtb2RlbFVybCIsInNjYWxlIiwicG9zaXRpb24iLCJyb3RhdGlvbiIsIm9uQ2xpY2siLCJvblBvaW50ZXJEb3duIiwib25Qb2ludGVyVXAiLCJ2aXNpYmxlIiwidmlld2VkUHJvZHVjdFRpdGxlIiwibm9kZXMiLCJtYXRlcmlhbHMiLCJjb25zb2xlIiwibG9nIiwibWF0ZXJpYWwiLCJjb2xvciIsInRyYW5zcGFyZW50Iiwib3BhY2l0eSIsImNyZWF0ZVBvaW50c0Zyb21Ob2RlcyIsInBvaW50cyIsIm5hbWUiLCJub2RlIiwiZ2VvbWV0cnkiLCJhdHRyaWJ1dGVzIiwiYXJyYXkiLCJtaW4iLCJtYXgiLCJub3JtYWxpemVkIiwibGVuZ3RoIiwiRmxvYXQzMkFycmF5IiwiYXV0b1NjYWxNb2RlbCIsIm5vZGVzT2JqZWN0IiwibWF4U2l6ZSIsImJib3giLCJzY2FsZUZhY3RvciIsImdyb3VwIiwiZGlzcG9zZSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJpbmRleCIsImluY2x1ZGVzIiwibWVzaCIsImNhc3RTaGFkb3ciLCJyZWNlaXZlU2hhZG93IiwicG9zaXRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RFModel.js\n"));

/***/ })

});