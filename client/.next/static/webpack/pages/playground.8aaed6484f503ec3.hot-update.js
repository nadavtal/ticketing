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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst RFModel = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s((param, ref)=>{\n    let { modelUrl, scale = 1, position = [\n        0,\n        0,\n        0\n    ], rotation = [\n        0,\n        0,\n        0\n    ], onClick, onPointerDown, onPointerUp, visible = true, viewedProductTitle } = param;\n    _s();\n    const { nodes, materials } = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useGLTF)(modelUrl);\n    console.log(nodes);\n    const material = new three__WEBPACK_IMPORTED_MODULE_3__.MeshBasicMaterial({\n        color: 0xffffff,\n        transparent: true,\n        opacity: 0.1\n    });\n    const createPointsFromNodes = (nodes)=>{\n        console.log(\"createPointsFromNodes\", nodes);\n        const points = [];\n        for(const name in nodes){\n            const node = nodes[name];\n            console.log(node);\n            if (node instanceof three__WEBPACK_IMPORTED_MODULE_3__.Mesh) {\n                points.push(node.position);\n            }\n        }\n        return points;\n    };\n    createPointsFromNodes(nodes);\n    const autoScalModel = (nodes, maxSize)=>{\n        // Create an empty bounding box\n        const bbox = new three__WEBPACK_IMPORTED_MODULE_3__.Box3();\n        // Calculate the bounding box for each node\n        for(const name in nodes){\n            const node = nodes[name];\n            if (node instanceof three__WEBPACK_IMPORTED_MODULE_3__.Mesh) {\n                bbox.expandByObject(node);\n            }\n        }\n        const size = bbox.getSize(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3());\n        const maxDimension = Math.max(size.x, size.y, size.z);\n        const scaleFactor = 5 / maxDimension;\n        return scaleFactor;\n    };\n    const scaleFactor = autoScalModel(nodes, 5);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n        ref: ref,\n        onClick: onClick,\n        onPointerDown: onPointerDown,\n        // onPointerUp={onPointerUp}\n        dispose: null,\n        scale: [\n            scaleFactor,\n            scaleFactor,\n            scaleFactor\n        ],\n        position: position,\n        rotation: rotation,\n        visible: visible,\n        children: Object.keys(nodes).map((key, index)=>{\n            const node = nodes[key];\n            if (!node.name.includes(\"bbox\")) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                // onClick={(e) => console.log(node)}\n                // onPointerOver={() => console.log(node.userData)}\n                geometry: node.geometry,\n                material: node.material,\n                castShadow: true,\n                receiveShadow: true\n            }, index, false, {\n                fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\RFModel.js\",\n                lineNumber: 76,\n                columnNumber: 15\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\RFModel.js\",\n        lineNumber: 61,\n        columnNumber: 7\n    }, undefined);\n}, \"3EbVibAGuOW6XeBFAk0EenvHzHI=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useGLTF\n    ];\n})), \"3EbVibAGuOW6XeBFAk0EenvHzHI=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useGLTF\n    ];\n});\n_c1 = RFModel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RFModel);\nvar _c, _c1;\n$RefreshReg$(_c, \"RFModel$forwardRef\");\n$RefreshReg$(_c1, \"RFModel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JGTW9kZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBDO0FBQ0U7QUFDbUI7QUFDL0QsTUFBTU8sd0JBQVVOLEdBQUFBLGlEQUFVQSxTQUN4QixRQVlFTztRQVhBLEVBQ0VDLFFBQVEsRUFDUkMsUUFBUSxDQUFDLEVBQ1RDLFdBQVc7UUFBQztRQUFHO1FBQUc7S0FBRSxFQUNwQkMsV0FBVztRQUFDO1FBQUc7UUFBRztLQUFFLEVBQ3BCQyxPQUFPLEVBQ1BDLGFBQWEsRUFDYkMsV0FBVyxFQUNYQyxVQUFVLElBQUksRUFDZEMsa0JBQWtCLEVBQ25COztJQUdELE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUUsR0FBR2pCLDBEQUFPQSxDQUFDTztJQUNyQ1csUUFBUUMsR0FBRyxDQUFDSDtJQUVaLE1BQU1JLFdBQVcsSUFBSWxCLG9EQUFpQkEsQ0FBQztRQUNyQ21CLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxTQUFTO0lBQ1g7SUFFQSxNQUFNQyx3QkFBd0IsQ0FBQ1I7UUFDN0JFLFFBQVFDLEdBQUcsQ0FBQyx5QkFBeUJIO1FBQ3JDLE1BQU1TLFNBQVMsRUFBRTtRQUNqQixJQUFLLE1BQU1DLFFBQVFWLE1BQU87WUFFeEIsTUFBTVcsT0FBT1gsS0FBSyxDQUFDVSxLQUFLO1lBRXhCUixRQUFRQyxHQUFHLENBQUNRO1lBQ1osSUFBSUEsZ0JBQWdCdkIsdUNBQUlBLEVBQUU7Z0JBQ3hCcUIsT0FBT0csSUFBSSxDQUFDRCxLQUFLbEIsUUFBUTtZQUMzQjtRQUNGO1FBQ0EsT0FBT2dCO0lBQ1Q7SUFDQUQsc0JBQXNCUjtJQUN0QixNQUFNYSxnQkFBZ0IsQ0FBQ2IsT0FBT2M7UUFDNUIsK0JBQStCO1FBQy9CLE1BQU1DLE9BQU8sSUFBSTlCLHVDQUFJQTtRQUNyQiwyQ0FBMkM7UUFDM0MsSUFBSyxNQUFNeUIsUUFBUVYsTUFBTztZQUN4QixNQUFNVyxPQUFPWCxLQUFLLENBQUNVLEtBQUs7WUFDeEIsSUFBSUMsZ0JBQWdCdkIsdUNBQUlBLEVBQUU7Z0JBQ3hCMkIsS0FBS0MsY0FBYyxDQUFDTDtZQUN0QjtRQUNGO1FBRUEsTUFBTU0sT0FBT0YsS0FBS0csT0FBTyxDQUFDLElBQUkvQiwwQ0FBT0E7UUFDckMsTUFBTWdDLGVBQWVDLEtBQUtDLEdBQUcsQ0FBQ0osS0FBS0ssQ0FBQyxFQUFFTCxLQUFLTSxDQUFDLEVBQUVOLEtBQUtPLENBQUM7UUFDcEQsTUFBTUMsY0FBYyxJQUFJTjtRQUN4QixPQUFPTTtJQUNUO0lBQ0EsTUFBTUEsY0FBY1osY0FBY2IsT0FBTztJQUN6QyxxQkFDRSw4REFBQzBCO1FBQ0NwQyxLQUFLQTtRQUNMSyxTQUFTQTtRQUNUQyxlQUFlQTtRQUNmLDRCQUE0QjtRQUM1QitCLFNBQVM7UUFDVG5DLE9BQU87WUFBQ2lDO1lBQWFBO1lBQWFBO1NBQVk7UUFDOUNoQyxVQUFVQTtRQUNWQyxVQUFVQTtRQUNWSSxTQUFTQTtrQkFFUjhCLE9BQU9DLElBQUksQ0FBQzdCLE9BQU84QixHQUFHLENBQUMsQ0FBQ0MsS0FBS0M7WUFDNUIsTUFBTXJCLE9BQU9YLEtBQUssQ0FBQytCLElBQUk7WUFDdkIsSUFBSSxDQUFDcEIsS0FBS0QsSUFBSSxDQUFDdUIsUUFBUSxDQUFDLFNBQ3RCLHFCQUNFLDhEQUFDQztnQkFFQyxxQ0FBcUM7Z0JBQ3JDLG1EQUFtRDtnQkFDbkRDLFVBQVV4QixLQUFLd0IsUUFBUTtnQkFDdkIvQixVQUFVTyxLQUFLUCxRQUFRO2dCQUN2QmdDLFVBQVU7Z0JBQ1ZDLGFBQWE7ZUFOUkw7Ozs7O1FBU2I7Ozs7OztBQUdOOztRQXRFK0JoRCxzREFBT0E7Ozs7UUFBUEEsc0RBQU9BOzs7O0FBeUV4QywrREFBZUssT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JGTW9kZWwuanM/NjdkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VHTFRGIH0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XHJcbmltcG9ydCB7IEJveDMsIE1lc2hCYXNpY01hdGVyaWFsLCBWZWN0b3IzLCBNZXNoIH0gZnJvbSBcInRocmVlXCI7XHJcbmNvbnN0IFJGTW9kZWwgPSBmb3J3YXJkUmVmKFxyXG4gIChcclxuICAgIHtcclxuICAgICAgbW9kZWxVcmwsXHJcbiAgICAgIHNjYWxlID0gMSxcclxuICAgICAgcG9zaXRpb24gPSBbMCwgMCwgMF0sXHJcbiAgICAgIHJvdGF0aW9uID0gWzAsIDAsIDBdLFxyXG4gICAgICBvbkNsaWNrLFxyXG4gICAgICBvblBvaW50ZXJEb3duLFxyXG4gICAgICBvblBvaW50ZXJVcCxcclxuICAgICAgdmlzaWJsZSA9IHRydWUsXHJcbiAgICAgIHZpZXdlZFByb2R1Y3RUaXRsZSxcclxuICAgIH0sXHJcbiAgICByZWZcclxuICApID0+IHtcclxuICAgIGNvbnN0IHsgbm9kZXMsIG1hdGVyaWFscyB9ID0gdXNlR0xURihtb2RlbFVybCk7XHJcbiAgICBjb25zb2xlLmxvZyhub2Rlcyk7XHJcblxyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICBjb2xvcjogMHhmZmZmZmYsXHJcbiAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICBvcGFjaXR5OiAwLjEsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVQb2ludHNGcm9tTm9kZXMgPSAobm9kZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVQb2ludHNGcm9tTm9kZXNcIiwgbm9kZXMpXHJcbiAgICAgIGNvbnN0IHBvaW50cyA9IFtdO1xyXG4gICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gbm9kZXMpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW25hbWVdO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhub2RlKVxyXG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgcG9pbnRzLnB1c2gobm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwb2ludHM7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVQb2ludHNGcm9tTm9kZXMobm9kZXMpXHJcbiAgICBjb25zdCBhdXRvU2NhbE1vZGVsID0gKG5vZGVzLCBtYXhTaXplKSA9PiB7XHJcbiAgICAgIC8vIENyZWF0ZSBhbiBlbXB0eSBib3VuZGluZyBib3hcclxuICAgICAgY29uc3QgYmJveCA9IG5ldyBCb3gzKCk7XHJcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgYm91bmRpbmcgYm94IGZvciBlYWNoIG5vZGVcclxuICAgICAgZm9yIChjb25zdCBuYW1lIGluIG5vZGVzKSB7XHJcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW25hbWVdO1xyXG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgYmJveC5leHBhbmRCeU9iamVjdChub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNpemUgPSBiYm94LmdldFNpemUobmV3IFZlY3RvcjMoKSk7XHJcbiAgICAgIGNvbnN0IG1heERpbWVuc2lvbiA9IE1hdGgubWF4KHNpemUueCwgc2l6ZS55LCBzaXplLnopO1xyXG4gICAgICBjb25zdCBzY2FsZUZhY3RvciA9IDUgLyBtYXhEaW1lbnNpb247XHJcbiAgICAgIHJldHVybiBzY2FsZUZhY3RvcjtcclxuICAgIH07XHJcbiAgICBjb25zdCBzY2FsZUZhY3RvciA9IGF1dG9TY2FsTW9kZWwobm9kZXMsIDUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGdyb3VwXHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICBvblBvaW50ZXJEb3duPXtvblBvaW50ZXJEb3dufVxyXG4gICAgICAgIC8vIG9uUG9pbnRlclVwPXtvblBvaW50ZXJVcH1cclxuICAgICAgICBkaXNwb3NlPXtudWxsfVxyXG4gICAgICAgIHNjYWxlPXtbc2NhbGVGYWN0b3IsIHNjYWxlRmFjdG9yLCBzY2FsZUZhY3Rvcl19XHJcbiAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxyXG4gICAgICAgIHJvdGF0aW9uPXtyb3RhdGlvbn1cclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICA+XHJcbiAgICAgICAge09iamVjdC5rZXlzKG5vZGVzKS5tYXAoKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1trZXldO1xyXG4gICAgICAgICAgaWYgKCFub2RlLm5hbWUuaW5jbHVkZXMoXCJiYm94XCIpKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxtZXNoXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17KGUpID0+IGNvbnNvbGUubG9nKG5vZGUpfVxyXG4gICAgICAgICAgICAgICAgLy8gb25Qb2ludGVyT3Zlcj17KCkgPT4gY29uc29sZS5sb2cobm9kZS51c2VyRGF0YSl9XHJcbiAgICAgICAgICAgICAgICBnZW9tZXRyeT17bm9kZS5nZW9tZXRyeX1cclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsPXtub2RlLm1hdGVyaWFsfVxyXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvd1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZVNoYWRvd1xyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZ3JvdXA+XHJcbiAgICApO1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJGTW9kZWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcndhcmRSZWYiLCJ1c2VHTFRGIiwiQm94MyIsIk1lc2hCYXNpY01hdGVyaWFsIiwiVmVjdG9yMyIsIk1lc2giLCJSRk1vZGVsIiwicmVmIiwibW9kZWxVcmwiLCJzY2FsZSIsInBvc2l0aW9uIiwicm90YXRpb24iLCJvbkNsaWNrIiwib25Qb2ludGVyRG93biIsIm9uUG9pbnRlclVwIiwidmlzaWJsZSIsInZpZXdlZFByb2R1Y3RUaXRsZSIsIm5vZGVzIiwibWF0ZXJpYWxzIiwiY29uc29sZSIsImxvZyIsIm1hdGVyaWFsIiwiY29sb3IiLCJ0cmFuc3BhcmVudCIsIm9wYWNpdHkiLCJjcmVhdGVQb2ludHNGcm9tTm9kZXMiLCJwb2ludHMiLCJuYW1lIiwibm9kZSIsInB1c2giLCJhdXRvU2NhbE1vZGVsIiwibWF4U2l6ZSIsImJib3giLCJleHBhbmRCeU9iamVjdCIsInNpemUiLCJnZXRTaXplIiwibWF4RGltZW5zaW9uIiwiTWF0aCIsIm1heCIsIngiLCJ5IiwieiIsInNjYWxlRmFjdG9yIiwiZ3JvdXAiLCJkaXNwb3NlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImluZGV4IiwiaW5jbHVkZXMiLCJtZXNoIiwiZ2VvbWV0cnkiLCJjYXN0U2hhZG93IiwicmVjZWl2ZVNoYWRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RFModel.js\n"));

/***/ })

});