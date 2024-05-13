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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Points_Points__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Points/Points */ \"./components/Points/Points.js\");\n/* harmony import */ var _utils_utils3d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/utils3d */ \"./utils/utils3d.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst RFModel = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s((param, ref)=>{\n    let { modelUrl, scale = 1, position = [\n        0,\n        0,\n        0\n    ], rotation = [\n        0,\n        0,\n        0\n    ], onClick, onPointerDown, onPointerUp, visible = true, viewedProductTitle } = param;\n    _s();\n    const { nodes, materials } = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useGLTF)(modelUrl);\n    console.log(nodes);\n    const material = new three__WEBPACK_IMPORTED_MODULE_5__.MeshBasicMaterial({\n        color: 0xffffff,\n        transparent: true,\n        opacity: 0.1\n    });\n    const createPointsFromNodes = (nodes)=>{\n        console.log(\"createPointsFromNodes\", nodes);\n        let points = [];\n        for(const name in nodes){\n            const node = nodes[name];\n            if (node instanceof three__WEBPACK_IMPORTED_MODULE_5__.Mesh) {\n                // console.log(node)\n                points = [\n                    ...points,\n                    ...node.geometry.attributes.position.array\n                ];\n            }\n        }\n        console.log(points);\n        const { min, max } = (0,_utils_utils3d__WEBPACK_IMPORTED_MODULE_3__.getMinMax)(points);\n        console.log(\"min\", min, \"max\", max);\n        // const normalized = normalize(points, min, max);\n        // console.log(\"points\", points.length)\n        return new Float32Array(normalized);\n    };\n    // createPointsFromNodes(nodes)\n    const autoScalModel = (nodesObject, maxSize)=>{\n        // Create an empty bounding box\n        const bbox = new three__WEBPACK_IMPORTED_MODULE_5__.Box3();\n        // Calculate the bounding box for each node\n        for(const name in nodesObject){\n            const node = nodesObject[name];\n            if (node instanceof three__WEBPACK_IMPORTED_MODULE_5__.Mesh) {\n                // bbox.expandByObject(node);\n                node.geometry.attributes.position.array = (0,_utils_utils3d__WEBPACK_IMPORTED_MODULE_3__.normalize)(node.geometry.attributes.position.array);\n            }\n        // if (node instanceof Group) {\n        //   for (const name in node.children) {\n        //     const childNode = nodes[name];\n        //     if (childNode instanceof Mesh) {\n        //       bbox.expandByObject(childNode);\n        //     }\n        //     // if (childNode instanceof Group) {\n        //     //   bbox.expandByObject(childNode);\n        //     // }\n        //   }\n        // }\n        }\n        // const size = bbox.getSize(new Vector3());\n        // const maxDimension = Math.max(size.x, size.y, size.z);\n        // const scaleFactor = maxSize / maxDimension;\n        // return scaleFactor;\n        return nodesObject;\n    };\n    // autoScalModel()\n    // const scaleFactor = autoScalModel(nodes, 1);\n    const scaleFactor = 1;\n    // console.log(\"scaleFactor\", scaleFactor)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n        ref: ref,\n        onClick: onClick,\n        onPointerDown: onPointerDown,\n        // onPointerUp={onPointerUp}\n        dispose: null,\n        scale: [\n            scaleFactor,\n            scaleFactor,\n            scaleFactor\n        ],\n        position: position,\n        rotation: rotation,\n        visible: visible,\n        children: [\n            Object.keys(autoScalModel(nodes)).map((key, index)=>{\n                const node = nodes[key];\n                if (!node.name.includes(\"bbox\")) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n                    // onClick={(e) => console.log(node)}\n                    // onPointerOver={() => console.log(node.userData)}\n                    geometry: node.geometry,\n                    material: node.material,\n                    castShadow: true,\n                    receiveShadow: true\n                }, index, false, {\n                    fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\RFModel.js\",\n                    lineNumber: 101,\n                    columnNumber: 15\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Points_Points__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                positions: createPointsFromNodes(nodes)\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\RFModel.js\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\RFModel.js\",\n        lineNumber: 86,\n        columnNumber: 7\n    }, undefined);\n}, \"3EbVibAGuOW6XeBFAk0EenvHzHI=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useGLTF\n    ];\n})), \"3EbVibAGuOW6XeBFAk0EenvHzHI=\", false, function() {\n    return [\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_4__.useGLTF\n    ];\n});\n_c1 = RFModel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RFModel);\nvar _c, _c1;\n$RefreshReg$(_c, \"RFModel$forwardRef\");\n$RefreshReg$(_c1, \"RFModel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3FCLFFBQVEsQ0FBQyxTQUN0QixxQkFDRSw4REFBQ0M7b0JBRUMscUNBQXFDO29CQUNyQyxtREFBbUQ7b0JBQ25EcEIsVUFBVUQsS0FBS0MsUUFBUTtvQkFDdkJSLFVBQVVPLEtBQUtQLFFBQVE7b0JBQ3ZCNkIsVUFBVTtvQkFDVkMsYUFBYTttQkFOUko7Ozs7O1lBVWI7MEJBQ0EsOERBQUM1QyxzREFBTUE7Z0JBQ0xpRCxXQUFXM0Isc0JBQXNCUjs7Ozs7Ozs7Ozs7O0FBS3pDOztRQWxHK0JwQixzREFBT0E7Ozs7UUFBUEEsc0RBQU9BOzs7O0FBcUd4QywrREFBZVMsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JGTW9kZWwuanM/NjdkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VHTFRGIH0gZnJvbSBcIkByZWFjdC10aHJlZS9kcmVpXCI7XHJcbmltcG9ydCB7IEJveDMsIE1lc2hCYXNpY01hdGVyaWFsLCBWZWN0b3IzLCBNZXNoLCBHcm91cCB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgUG9pbnRzIGZyb20gXCIuL1BvaW50cy9Qb2ludHNcIjtcclxuaW1wb3J0IHsgZ2V0TWluTWF4LCBub3JtYWxpemUgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMzZFwiO1xyXG5jb25zdCBSRk1vZGVsID0gZm9yd2FyZFJlZihcclxuICAoXHJcbiAgICB7XHJcbiAgICAgIG1vZGVsVXJsLFxyXG4gICAgICBzY2FsZSA9IDEsXHJcbiAgICAgIHBvc2l0aW9uID0gWzAsIDAsIDBdLFxyXG4gICAgICByb3RhdGlvbiA9IFswLCAwLCAwXSxcclxuICAgICAgb25DbGljayxcclxuICAgICAgb25Qb2ludGVyRG93bixcclxuICAgICAgb25Qb2ludGVyVXAsXHJcbiAgICAgIHZpc2libGUgPSB0cnVlLFxyXG4gICAgICB2aWV3ZWRQcm9kdWN0VGl0bGUsXHJcbiAgICB9LFxyXG4gICAgcmVmXHJcbiAgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vZGVzLCBtYXRlcmlhbHMgfSA9IHVzZUdMVEYobW9kZWxVcmwpO1xyXG4gICAgY29uc29sZS5sb2cobm9kZXMpO1xyXG5cclxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IE1lc2hCYXNpY01hdGVyaWFsKHtcclxuICAgICAgY29sb3I6IDB4ZmZmZmZmLFxyXG4gICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgb3BhY2l0eTogMC4xLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlUG9pbnRzRnJvbU5vZGVzID0gKG5vZGVzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlUG9pbnRzRnJvbU5vZGVzXCIsIG5vZGVzKVxyXG4gICAgICBsZXQgcG9pbnRzID0gW107XHJcbiAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBub2Rlcykge1xyXG5cclxuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbbmFtZV07XHJcblxyXG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgTWVzaCkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cobm9kZSlcclxuICAgICAgICAgIHBvaW50cyA9IFsuLi5wb2ludHMsIC4uLm5vZGUuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheV1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2cocG9pbnRzKVxyXG4gICAgICBjb25zdCB7IG1pbiwgbWF4IH0gPSBnZXRNaW5NYXgocG9pbnRzKTtcclxuICAgICAgY29uc29sZS5sb2coXCJtaW5cIiwgbWluLCBcIm1heFwiLCBtYXgpXHJcbiAgICAgIC8vIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemUocG9pbnRzLCBtaW4sIG1heCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9pbnRzXCIsIHBvaW50cy5sZW5ndGgpXHJcbiAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KG5vcm1hbGl6ZWQpO1xyXG4gICAgfVxyXG4gICAgLy8gY3JlYXRlUG9pbnRzRnJvbU5vZGVzKG5vZGVzKVxyXG4gICAgY29uc3QgYXV0b1NjYWxNb2RlbCA9IChub2Rlc09iamVjdCwgbWF4U2l6ZSkgPT4ge1xyXG4gICAgICAvLyBDcmVhdGUgYW4gZW1wdHkgYm91bmRpbmcgYm94XHJcbiAgICAgIGNvbnN0IGJib3ggPSBuZXcgQm94MygpO1xyXG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIGJvdW5kaW5nIGJveCBmb3IgZWFjaCBub2RlXHJcbiAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBub2Rlc09iamVjdCkge1xyXG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc09iamVjdFtuYW1lXTtcclxuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIE1lc2gpIHtcclxuICAgICAgICAgIC8vIGJib3guZXhwYW5kQnlPYmplY3Qobm9kZSk7XHJcbiAgICAgICAgICBub2RlLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXkgPSBub3JtYWxpemUoXHJcbiAgICAgICAgICAgIG5vZGUuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKG5vZGUgaW5zdGFuY2VvZiBHcm91cCkge1xyXG4gICAgICAgIC8vICAgZm9yIChjb25zdCBuYW1lIGluIG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgY2hpbGROb2RlID0gbm9kZXNbbmFtZV07XHJcbiAgICAgICAgLy8gICAgIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBNZXNoKSB7XHJcbiAgICAgICAgLy8gICAgICAgYmJveC5leHBhbmRCeU9iamVjdChjaGlsZE5vZGUpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIC8vIGlmIChjaGlsZE5vZGUgaW5zdGFuY2VvZiBHcm91cCkge1xyXG4gICAgICAgIC8vICAgICAvLyAgIGJib3guZXhwYW5kQnlPYmplY3QoY2hpbGROb2RlKTtcclxuICAgICAgICAvLyAgICAgLy8gfVxyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY29uc3Qgc2l6ZSA9IGJib3guZ2V0U2l6ZShuZXcgVmVjdG9yMygpKTtcclxuICAgICAgLy8gY29uc3QgbWF4RGltZW5zaW9uID0gTWF0aC5tYXgoc2l6ZS54LCBzaXplLnksIHNpemUueik7XHJcbiAgICAgIC8vIGNvbnN0IHNjYWxlRmFjdG9yID0gbWF4U2l6ZSAvIG1heERpbWVuc2lvbjtcclxuICAgICAgLy8gcmV0dXJuIHNjYWxlRmFjdG9yO1xyXG4gICAgICByZXR1cm4gbm9kZXNPYmplY3RcclxuICAgIH07XHJcbiAgICAvLyBhdXRvU2NhbE1vZGVsKClcclxuICAgIC8vIGNvbnN0IHNjYWxlRmFjdG9yID0gYXV0b1NjYWxNb2RlbChub2RlcywgMSk7XHJcbiAgICBjb25zdCBzY2FsZUZhY3RvciA9IDE7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInNjYWxlRmFjdG9yXCIsIHNjYWxlRmFjdG9yKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGdyb3VwXHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICBvblBvaW50ZXJEb3duPXtvblBvaW50ZXJEb3dufVxyXG4gICAgICAgIC8vIG9uUG9pbnRlclVwPXtvblBvaW50ZXJVcH1cclxuICAgICAgICBkaXNwb3NlPXtudWxsfVxyXG4gICAgICAgIHNjYWxlPXtbc2NhbGVGYWN0b3IsIHNjYWxlRmFjdG9yLCBzY2FsZUZhY3Rvcl19XHJcbiAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxyXG4gICAgICAgIHJvdGF0aW9uPXtyb3RhdGlvbn1cclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICA+XHJcbiAgICAgICAge09iamVjdC5rZXlzKGF1dG9TY2FsTW9kZWwobm9kZXMpKS5tYXAoKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1trZXldO1xyXG4gICAgICAgICAgaWYgKCFub2RlLm5hbWUuaW5jbHVkZXMoXCJiYm94XCIpKVxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxtZXNoXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17KGUpID0+IGNvbnNvbGUubG9nKG5vZGUpfVxyXG4gICAgICAgICAgICAgICAgLy8gb25Qb2ludGVyT3Zlcj17KCkgPT4gY29uc29sZS5sb2cobm9kZS51c2VyRGF0YSl9XHJcbiAgICAgICAgICAgICAgICBnZW9tZXRyeT17bm9kZS5nZW9tZXRyeX1cclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsPXtub2RlLm1hdGVyaWFsfVxyXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvd1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZVNoYWRvd1xyXG4gICAgICAgICAgICAgICAgLy8gdmlzaWJsZT17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8UG9pbnRzXHJcbiAgICAgICAgICBwb3NpdGlvbnM9e2NyZWF0ZVBvaW50c0Zyb21Ob2Rlcyhub2Rlcyl9XHJcbiAgICAgICAgICAvLyB0YXJnZXRQb3NpdGlvbnM9e3NoYXBlc1tzZWxlY3RlZFNoYXBlXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2dyb3VwPlxyXG4gICAgKTtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSRk1vZGVsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJmb3J3YXJkUmVmIiwidXNlR0xURiIsIkJveDMiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIlZlY3RvcjMiLCJNZXNoIiwiR3JvdXAiLCJQb2ludHMiLCJnZXRNaW5NYXgiLCJub3JtYWxpemUiLCJSRk1vZGVsIiwicmVmIiwibW9kZWxVcmwiLCJzY2FsZSIsInBvc2l0aW9uIiwicm90YXRpb24iLCJvbkNsaWNrIiwib25Qb2ludGVyRG93biIsIm9uUG9pbnRlclVwIiwidmlzaWJsZSIsInZpZXdlZFByb2R1Y3RUaXRsZSIsIm5vZGVzIiwibWF0ZXJpYWxzIiwiY29uc29sZSIsImxvZyIsIm1hdGVyaWFsIiwiY29sb3IiLCJ0cmFuc3BhcmVudCIsIm9wYWNpdHkiLCJjcmVhdGVQb2ludHNGcm9tTm9kZXMiLCJwb2ludHMiLCJuYW1lIiwibm9kZSIsImdlb21ldHJ5IiwiYXR0cmlidXRlcyIsImFycmF5IiwibWluIiwibWF4IiwiRmxvYXQzMkFycmF5Iiwibm9ybWFsaXplZCIsImF1dG9TY2FsTW9kZWwiLCJub2Rlc09iamVjdCIsIm1heFNpemUiLCJiYm94Iiwic2NhbGVGYWN0b3IiLCJncm91cCIsImRpc3Bvc2UiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiaW5kZXgiLCJpbmNsdWRlcyIsIm1lc2giLCJjYXN0U2hhZG93IiwicmVjZWl2ZVNoYWRvdyIsInBvc2l0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RFModel.js\n"));

/***/ })

});