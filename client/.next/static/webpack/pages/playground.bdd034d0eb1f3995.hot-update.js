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

/***/ "./components/IconCreater.js":
/*!***********************************!*\
  !*** ./components/IconCreater.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Points_Points__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Points/Points */ \"./components/Points/Points.js\");\n/* harmony import */ var svg_path_commander__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svg-path-commander */ \"./node_modules/svg-path-commander/dist/svg-path-commander.mjs\");\n/* harmony import */ var three_examples_jsm_loaders_SVGLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/loaders/SVGLoader.js */ \"./node_modules/three/examples/jsm/loaders/SVGLoader.js\");\n/* harmony import */ var svg_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! svg-parser */ \"./node_modules/svg-parser/dist/svg-parser.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst IconCreater = (param)=>{\n    let { file, iconFile, url, scene } = param;\n    _s();\n    const [positions, setPositions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const groupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const positionsArrays = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    //   const font = useLoader(FontLoader, './public/fonts/Montserrat Black_Italic.json');\n    // useEffect(() => {\n    //   if (url) {\n    //       fetch(url)\n    //       .then(response => response.text())\n    //       .then(svgString => {\n    //           const parsedSvg = parse(svgString);\n    //           // Now you can work with the parsed SVG\n    //           // console.log(parsedSvg)\n    //           const paths = parsedSvg.children[0].children.filter(child => child.tagName === 'path');\n    //           setPositions(createFloat32ArrayPositionsSvgPaths(paths))\n    //       });\n    //   }\n    //   return () => {\n    //   }\n    // }, [url])\n    // useEffect(() => {\n    //   console.log(file)\n    //   const reader = new FileReader();\n    //   reader.onloadend = () => {\n    //   const parsedSvg = parse(reader.result);\n    //   console.log(parsedSvg)\n    //   const paths = parsedSvg.children[0].children.filter(child => child.tagName === 'path');\n    //   console.log(paths);\n    //   setPositions(createFloat32ArrayPositionsSvgPaths(paths))\n    //   };\n    //   if (file) {\n    //    reader.readAsText(file);\n    //   }\n    //   return () => {\n    //   }\n    // }, [file])\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (url) loadIcon(url);\n        else setPositions(null);\n    }, [\n        url\n    ]);\n    function mergeFloat32Arrays(arrays) {\n        let totalLength = arrays.reduce((acc, val)=>acc + val.length, 0);\n        let result = new Float32Array(totalLength);\n        let offset = 0;\n        for (let array of arrays){\n            result.set(array, offset);\n            offset += array.length;\n        }\n        return result;\n    }\n    const loadIcon = (iconUrl)=>{\n        const loader = new three_examples_jsm_loaders_SVGLoader_js__WEBPACK_IMPORTED_MODULE_5__.SVGLoader();\n        loader.load(// resource URL\n        iconUrl, // called when the resource is loaded\n        function(data) {\n            const paths = data.paths;\n            const group = new three__WEBPACK_IMPORTED_MODULE_6__.Group();\n            console.log({\n                paths\n            });\n            // createPointsFromPaths(paths);\n            for(let i = 0; i < paths.length; i++){\n                const path = paths[i];\n                const material = new three__WEBPACK_IMPORTED_MODULE_6__.MeshBasicMaterial({\n                    color: path.color,\n                    side: three__WEBPACK_IMPORTED_MODULE_6__.DoubleSide,\n                    depthWrite: false\n                });\n                const shapes = three_examples_jsm_loaders_SVGLoader_js__WEBPACK_IMPORTED_MODULE_5__.SVGLoader.createShapes(path);\n                console.log({\n                    shapes\n                });\n                for(let j = 0; j < shapes.length; j++){\n                    const shape = shapes[j];\n                    // createPointsFromShape(shape);\n                    const geometry = new three__WEBPACK_IMPORTED_MODULE_6__.ShapeGeometry(shape);\n                    // console.log({geometry})\n                    geometry.attributes.position.array = normalize(geometry.attributes.position.array);\n                    // positionsArrays.current.push(geometry.attributes.position.array)\n                    const mesh = new three__WEBPACK_IMPORTED_MODULE_6__.Mesh(geometry, material);\n                    group.add(mesh);\n                }\n            }\n            groupRef.current = group;\n            // console.log(positionsArrays.current);\n            const merged = mergeFloat32Arrays(positionsArrays.current);\n            const normalizedArray = normalize(merged);\n            // console.log(merged)\n            setPositions(normalizedArray);\n            scene.add(group);\n        }, // called when loading is in progresses\n        function(xhr) {\n            console.log(xhr.loaded / xhr.total * 100 + \"% loaded\");\n        }, // called when loading has errors\n        function(error) {\n            console.log(\"An error happened\", error);\n        });\n    };\n    const createFloat32ArrayPositionsSvgPaths = (paths)=>{\n        // console.log(paths)\n        // console.log(shapes[selectedShape])\n        const pointsArray = [];\n        paths.forEach((path)=>{\n            const p = path.properties.d;\n            // console.log(p)\n            const normalizedPath = svg_path_commander__WEBPACK_IMPORTED_MODULE_3__[\"default\"].normalizePath(p);\n            //remove first element of array\n            // console.log(normalizedPath)\n            normalizedPath.forEach((stroke)=>{\n                stroke.shift();\n                // console.log(stroke)\n                for(let index = 0; index < stroke.length; index++){\n                    pointsArray.push(stroke[index]);\n                    if (index % 2 !== 0) {\n                        pointsArray.push(0);\n                    }\n                }\n            });\n        // const transform = {\n        //     translate: [15, 15, 15], // `[15, 15]` would apply a 2D translation, and only `15` for X axis translation\n        //     rotate: [15, 15, 15], // or only \"15\" for 2D rotation on Z axis\n        //     scale: [0.7, 0.75, 0.8], // or only \"0.7\" for 2D scale on all X, Y, Z axis\n        //     skew: [15, 15], // or only \"15\" for the X axis\n        //     origin: [15, 15, 15] // full `transform-origin` for a typical 3D transformation\n        // }\n        // const transformed3DPathString = new SVGPathCommander(normalizedPath).transform(transform);\n        // console.log(transformed3DPathString)\n        });\n        // console.log(pointsArray)\n        const normalizedArray = normalize(pointsArray);\n        const float32Array = new Float32Array(normalizedArray);\n        return float32Array;\n    };\n    const normalize = (array)=>{\n        const max = Math.max(...array);\n        const min = Math.min(...array);\n        return array.map((value)=>(value - min) / (max - min));\n    };\n    const createPointsFromShape = (shape)=>{\n        if (shape.curves.length > 0) {\n            positionsArrays.current.push(createPointsFromCurves(shape.curves, 30));\n        }\n        if (shape.holes.length > 0) {\n            shape.holes.forEach((hole, index)=>{\n                positionsArrays.current.push(createPointsFromCurves(hole.curves, 30));\n            });\n        }\n    };\n    const createPointsFromPaths = (paths)=>{\n        console.log({\n            paths\n        });\n        for(let i = 0; i < paths.length; i++){\n            const path = paths[i];\n            positionsArrays.current.push(createPointsFromCurves(path.currentPath.curves, 30));\n            path.subPaths.forEach((subPath)=>{\n                positionsArrays.current.push(createPointsFromCurves(subPath.curves, 30));\n            });\n        }\n    };\n    const createPointsFromCurves = (curves, divisions)=>{\n        const points = [];\n        curves.forEach((curve)=>{\n            const pointsFromCurve = createPointsFromCurve(curve, divisions);\n            points.push(...pointsFromCurve);\n        });\n        return points;\n    };\n    const createPointsFromCurve = function(curve) {\n        let divisions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;\n        switch(curve.type){\n            case \"EllipseCurve\":\n                return createPointsFromEllipseCurve(curve, divisions);\n            case \"LineCurve\":\n                return createPointsFromLineCurve(curve.v1, curve.v2, divisions);\n            default:\n                return [];\n        }\n    };\n    const createPointsFromEllipseCurve = function(curve) {\n        let divisions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;\n        const points = [];\n        for(let i = 0; i < divisions; i++){\n            const point = curve.getPoint(i / divisions);\n            points.push(point.x, point.y);\n        }\n        return points;\n    };\n    const createPointsFromLineCurve = function(startPoint, endPoint) {\n        let divisions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 10;\n        const points = [];\n        for(let i = 0; i < divisions; i++){\n            const point = startPoint.clone().lerp(endPoint, i / divisions);\n            points.push(point.x, point.y);\n        }\n        return points;\n    };\n    // console.log(positions)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: positions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Points_Points__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            //   selectedShape={selectedShape}\n            positions: positions\n        }, void 0, false, {\n            fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\IconCreater.js\",\n            lineNumber: 239,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(IconCreater, \"TNbwd9oTEcezgom8rY/rpSOV72c=\");\n_c = IconCreater;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconCreater);\nvar _c;\n$RefreshReg$(_c, \"IconCreater\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTUcsQ0FBQztRQUM5QjtRQUNBLE9BQU9aO0lBQ1Q7SUFDQSx5QkFBeUI7SUFDekIscUJBQ0U7a0JBQ0c1RSwyQkFDQyw4REFBQ2Qsc0RBQU1BO1lBQ0wsa0NBQWtDO1lBQ2xDYyxXQUFXQTs7Ozs7OztBQU1yQjtHQTFPTUw7S0FBQUE7QUE0T04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JY29uQ3JlYXRlci5qcz9jNTdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUG9pbnRzIGZyb20gXCIuL1BvaW50cy9Qb2ludHNcIjtcclxuaW1wb3J0IFNWR1BhdGhDb21tYW5kZXIgZnJvbSBcInN2Zy1wYXRoLWNvbW1hbmRlclwiO1xyXG5pbXBvcnQgeyBTVkdMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvU1ZHTG9hZGVyLmpzXCI7XHJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSBcInN2Zy1wYXJzZXJcIjtcclxuaW1wb3J0IHtcclxuICBEb3VibGVTaWRlLFxyXG4gIEdyb3VwLFxyXG4gIE1lc2gsXHJcbiAgTWVzaEJhc2ljTWF0ZXJpYWwsXHJcbiAgU2hhcGVHZW9tZXRyeSxcclxufSBmcm9tIFwidGhyZWVcIjtcclxuY29uc3QgSWNvbkNyZWF0ZXIgPSAoe1xyXG4gIGZpbGUsXHJcbiAgaWNvbkZpbGUsXHJcbiAgdXJsLFxyXG4gIHNjZW5lLFxyXG4gIC8vIHVybCA9ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2MvYzMvUHl0aG9uLWxvZ28tbm90ZXh0LnN2ZydcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtwb3NpdGlvbnMsIHNldFBvc2l0aW9uc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IGdyb3VwUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcG9zaXRpb25zQXJyYXlzID0gdXNlUmVmKFtdKTtcclxuICAvLyAgIGNvbnN0IGZvbnQgPSB1c2VMb2FkZXIoRm9udExvYWRlciwgJy4vcHVibGljL2ZvbnRzL01vbnRzZXJyYXQgQmxhY2tfSXRhbGljLmpzb24nKTtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgaWYgKHVybCkge1xyXG4gIC8vICAgICAgIGZldGNoKHVybClcclxuICAvLyAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbiAgLy8gICAgICAgLnRoZW4oc3ZnU3RyaW5nID0+IHtcclxuICAvLyAgICAgICAgICAgY29uc3QgcGFyc2VkU3ZnID0gcGFyc2Uoc3ZnU3RyaW5nKTtcclxuICAvLyAgICAgICAgICAgLy8gTm93IHlvdSBjYW4gd29yayB3aXRoIHRoZSBwYXJzZWQgU1ZHXHJcbiAgLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcnNlZFN2ZylcclxuICAvLyAgICAgICAgICAgY29uc3QgcGF0aHMgPSBwYXJzZWRTdmcuY2hpbGRyZW5bMF0uY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLnRhZ05hbWUgPT09ICdwYXRoJyk7XHJcblxyXG4gIC8vICAgICAgICAgICBzZXRQb3NpdGlvbnMoY3JlYXRlRmxvYXQzMkFycmF5UG9zaXRpb25zU3ZnUGF0aHMocGF0aHMpKVxyXG4gIC8vICAgICAgIH0pO1xyXG5cclxuICAvLyAgIH1cclxuXHJcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xyXG5cclxuICAvLyAgIH1cclxuICAvLyB9LCBbdXJsXSlcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coZmlsZSlcclxuICAvLyAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gIC8vICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuXHJcbiAgLy8gICBjb25zdCBwYXJzZWRTdmcgPSBwYXJzZShyZWFkZXIucmVzdWx0KTtcclxuICAvLyAgIGNvbnNvbGUubG9nKHBhcnNlZFN2ZylcclxuICAvLyAgIGNvbnN0IHBhdGhzID0gcGFyc2VkU3ZnLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC50YWdOYW1lID09PSAncGF0aCcpO1xyXG4gIC8vICAgY29uc29sZS5sb2cocGF0aHMpO1xyXG4gIC8vICAgc2V0UG9zaXRpb25zKGNyZWF0ZUZsb2F0MzJBcnJheVBvc2l0aW9uc1N2Z1BhdGhzKHBhdGhzKSlcclxuICAvLyAgIH07XHJcblxyXG4gIC8vICAgaWYgKGZpbGUpIHtcclxuICAvLyAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAvLyAgIH1cclxuXHJcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xyXG5cclxuICAvLyAgIH1cclxuICAvLyB9LCBbZmlsZV0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1cmwpIGxvYWRJY29uKHVybCk7XHJcbiAgICBlbHNlIHNldFBvc2l0aW9ucyhudWxsKTtcclxuICB9LCBbdXJsXSk7XHJcblxyXG4gIGZ1bmN0aW9uIG1lcmdlRmxvYXQzMkFycmF5cyhhcnJheXMpIHtcclxuICAgIGxldCB0b3RhbExlbmd0aCA9IGFycmF5cy5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MgKyB2YWwubGVuZ3RoLCAwKTtcclxuICAgIGxldCByZXN1bHQgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsTGVuZ3RoKTtcclxuICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgZm9yIChsZXQgYXJyYXkgb2YgYXJyYXlzKSB7XHJcbiAgICAgIHJlc3VsdC5zZXQoYXJyYXksIG9mZnNldCk7XHJcbiAgICAgIG9mZnNldCArPSBhcnJheS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBjb25zdCBsb2FkSWNvbiA9IChpY29uVXJsKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgU1ZHTG9hZGVyKCk7XHJcblxyXG4gICAgbG9hZGVyLmxvYWQoXHJcbiAgICAgIC8vIHJlc291cmNlIFVSTFxyXG4gICAgICBpY29uVXJsLFxyXG4gICAgICAvLyBjYWxsZWQgd2hlbiB0aGUgcmVzb3VyY2UgaXMgbG9hZGVkXHJcbiAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aHMgPSBkYXRhLnBhdGhzO1xyXG4gICAgICAgIGNvbnN0IGdyb3VwID0gbmV3IEdyb3VwKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coeyBwYXRocyB9KTtcclxuICAgICAgICAvLyBjcmVhdGVQb2ludHNGcm9tUGF0aHMocGF0aHMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IHBhdGggPSBwYXRoc1tpXTtcclxuICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IE1lc2hCYXNpY01hdGVyaWFsKHtcclxuICAgICAgICAgICAgY29sb3I6IHBhdGguY29sb3IsXHJcbiAgICAgICAgICAgIHNpZGU6IERvdWJsZVNpZGUsXHJcbiAgICAgICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc2hhcGVzID0gU1ZHTG9hZGVyLmNyZWF0ZVNoYXBlcyhwYXRoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHsgc2hhcGVzIH0pO1xyXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGFwZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBzaGFwZXNbal07XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZVBvaW50c0Zyb21TaGFwZShzaGFwZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFNoYXBlR2VvbWV0cnkoc2hhcGUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7Z2VvbWV0cnl9KVxyXG4gICAgICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5ID0gbm9ybWFsaXplKFxyXG4gICAgICAgICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gcG9zaXRpb25zQXJyYXlzLmN1cnJlbnQucHVzaChnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5KVxyXG4gICAgICAgICAgICBjb25zdCBtZXNoID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcbiAgICAgICAgICAgIGdyb3VwLmFkZChtZXNoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JvdXBSZWYuY3VycmVudCA9IGdyb3VwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBvc2l0aW9uc0FycmF5cy5jdXJyZW50KTtcclxuICAgICAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZsb2F0MzJBcnJheXMocG9zaXRpb25zQXJyYXlzLmN1cnJlbnQpO1xyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRBcnJheSA9IG5vcm1hbGl6ZShtZXJnZWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1lcmdlZClcclxuICAgICAgICBzZXRQb3NpdGlvbnMobm9ybWFsaXplZEFycmF5KTtcclxuICAgICAgICBzY2VuZS5hZGQoIGdyb3VwICk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIGNhbGxlZCB3aGVuIGxvYWRpbmcgaXMgaW4gcHJvZ3Jlc3Nlc1xyXG4gICAgICBmdW5jdGlvbiAoeGhyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coKHhoci5sb2FkZWQgLyB4aHIudG90YWwpICogMTAwICsgXCIlIGxvYWRlZFwiKTtcclxuICAgICAgfSxcclxuICAgICAgLy8gY2FsbGVkIHdoZW4gbG9hZGluZyBoYXMgZXJyb3JzXHJcbiAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQW4gZXJyb3IgaGFwcGVuZWRcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgY3JlYXRlRmxvYXQzMkFycmF5UG9zaXRpb25zU3ZnUGF0aHMgPSAocGF0aHMpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBhdGhzKVxyXG4gICAgLy8gY29uc29sZS5sb2coc2hhcGVzW3NlbGVjdGVkU2hhcGVdKVxyXG4gICAgY29uc3QgcG9pbnRzQXJyYXkgPSBbXTtcclxuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcclxuICAgICAgY29uc3QgcCA9IHBhdGgucHJvcGVydGllcy5kO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwKVxyXG4gICAgICBjb25zdCBub3JtYWxpemVkUGF0aCA9IFNWR1BhdGhDb21tYW5kZXIubm9ybWFsaXplUGF0aChwKTtcclxuICAgICAgLy9yZW1vdmUgZmlyc3QgZWxlbWVudCBvZiBhcnJheVxyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2cobm9ybWFsaXplZFBhdGgpXHJcbiAgICAgIG5vcm1hbGl6ZWRQYXRoLmZvckVhY2goKHN0cm9rZSkgPT4ge1xyXG4gICAgICAgIHN0cm9rZS5zaGlmdCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0cm9rZSlcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3Ryb2tlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgcG9pbnRzQXJyYXkucHVzaChzdHJva2VbaW5kZXhdKTtcclxuICAgICAgICAgIGlmIChpbmRleCAlIDIgIT09IDApIHtcclxuICAgICAgICAgICAgcG9pbnRzQXJyYXkucHVzaCgwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBjb25zdCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgIC8vICAgICB0cmFuc2xhdGU6IFsxNSwgMTUsIDE1XSwgLy8gYFsxNSwgMTVdYCB3b3VsZCBhcHBseSBhIDJEIHRyYW5zbGF0aW9uLCBhbmQgb25seSBgMTVgIGZvciBYIGF4aXMgdHJhbnNsYXRpb25cclxuICAgICAgLy8gICAgIHJvdGF0ZTogWzE1LCAxNSwgMTVdLCAvLyBvciBvbmx5IFwiMTVcIiBmb3IgMkQgcm90YXRpb24gb24gWiBheGlzXHJcbiAgICAgIC8vICAgICBzY2FsZTogWzAuNywgMC43NSwgMC44XSwgLy8gb3Igb25seSBcIjAuN1wiIGZvciAyRCBzY2FsZSBvbiBhbGwgWCwgWSwgWiBheGlzXHJcbiAgICAgIC8vICAgICBza2V3OiBbMTUsIDE1XSwgLy8gb3Igb25seSBcIjE1XCIgZm9yIHRoZSBYIGF4aXNcclxuICAgICAgLy8gICAgIG9yaWdpbjogWzE1LCAxNSwgMTVdIC8vIGZ1bGwgYHRyYW5zZm9ybS1vcmlnaW5gIGZvciBhIHR5cGljYWwgM0QgdHJhbnNmb3JtYXRpb25cclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBjb25zdCB0cmFuc2Zvcm1lZDNEUGF0aFN0cmluZyA9IG5ldyBTVkdQYXRoQ29tbWFuZGVyKG5vcm1hbGl6ZWRQYXRoKS50cmFuc2Zvcm0odHJhbnNmb3JtKTtcclxuICAgICAgLy8gY29uc29sZS5sb2codHJhbnNmb3JtZWQzRFBhdGhTdHJpbmcpXHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBvaW50c0FycmF5KVxyXG4gICAgY29uc3Qgbm9ybWFsaXplZEFycmF5ID0gbm9ybWFsaXplKHBvaW50c0FycmF5KTtcclxuICAgIGNvbnN0IGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkobm9ybWFsaXplZEFycmF5KTtcclxuICAgIHJldHVybiBmbG9hdDMyQXJyYXk7XHJcbiAgfTtcclxuICBjb25zdCBub3JtYWxpemUgPSAoYXJyYXkpID0+IHtcclxuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLmFycmF5KTtcclxuICAgIGNvbnN0IG1pbiA9IE1hdGgubWluKC4uLmFycmF5KTtcclxuXHJcbiAgICByZXR1cm4gYXJyYXkubWFwKCh2YWx1ZSkgPT4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKTtcclxuICB9O1xyXG4gIGNvbnN0IGNyZWF0ZVBvaW50c0Zyb21TaGFwZSA9IChzaGFwZSkgPT4ge1xyXG4gICAgaWYgKHNoYXBlLmN1cnZlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHBvc2l0aW9uc0FycmF5cy5jdXJyZW50LnB1c2goY3JlYXRlUG9pbnRzRnJvbUN1cnZlcyhzaGFwZS5jdXJ2ZXMsIDMwKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2hhcGUuaG9sZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBzaGFwZS5ob2xlcy5mb3JFYWNoKChob2xlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHBvc2l0aW9uc0FycmF5cy5jdXJyZW50LnB1c2goY3JlYXRlUG9pbnRzRnJvbUN1cnZlcyhob2xlLmN1cnZlcywgMzApKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBjcmVhdGVQb2ludHNGcm9tUGF0aHMgPSAocGF0aHMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHsgcGF0aHMgfSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBwYXRoc1tpXTtcclxuICAgICAgcG9zaXRpb25zQXJyYXlzLmN1cnJlbnQucHVzaChcclxuICAgICAgICBjcmVhdGVQb2ludHNGcm9tQ3VydmVzKHBhdGguY3VycmVudFBhdGguY3VydmVzLCAzMClcclxuICAgICAgKTtcclxuICAgICAgcGF0aC5zdWJQYXRocy5mb3JFYWNoKChzdWJQYXRoKSA9PiB7XHJcbiAgICAgICAgcG9zaXRpb25zQXJyYXlzLmN1cnJlbnQucHVzaChcclxuICAgICAgICAgIGNyZWF0ZVBvaW50c0Zyb21DdXJ2ZXMoc3ViUGF0aC5jdXJ2ZXMsIDMwKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBvaW50c0Zyb21DdXJ2ZXMgPSAoY3VydmVzLCBkaXZpc2lvbnMpID0+IHtcclxuICAgIGNvbnN0IHBvaW50cyA9IFtdO1xyXG4gICAgY3VydmVzLmZvckVhY2goKGN1cnZlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHBvaW50c0Zyb21DdXJ2ZSA9IGNyZWF0ZVBvaW50c0Zyb21DdXJ2ZShjdXJ2ZSwgZGl2aXNpb25zKTtcclxuICAgICAgcG9pbnRzLnB1c2goLi4ucG9pbnRzRnJvbUN1cnZlKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHBvaW50cztcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVQb2ludHNGcm9tQ3VydmUgPSAoY3VydmUsIGRpdmlzaW9ucyA9IDEwKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGN1cnZlLnR5cGUpIHtcclxuICAgICAgY2FzZSBcIkVsbGlwc2VDdXJ2ZVwiOlxyXG4gICAgICAgIHJldHVybiBjcmVhdGVQb2ludHNGcm9tRWxsaXBzZUN1cnZlKGN1cnZlLCBkaXZpc2lvbnMpO1xyXG4gICAgICBjYXNlIFwiTGluZUN1cnZlXCI6XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvaW50c0Zyb21MaW5lQ3VydmUoY3VydmUudjEsIGN1cnZlLnYyLCBkaXZpc2lvbnMpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGNyZWF0ZVBvaW50c0Zyb21FbGxpcHNlQ3VydmUgPSAoY3VydmUsIGRpdmlzaW9ucyA9IDEwKSA9PiB7XHJcbiAgICBjb25zdCBwb2ludHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGl2aXNpb25zOyBpKyspIHtcclxuICAgICAgY29uc3QgcG9pbnQgPSBjdXJ2ZS5nZXRQb2ludChpIC8gZGl2aXNpb25zKTtcclxuICAgICAgcG9pbnRzLnB1c2gocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9pbnRzO1xyXG4gIH07XHJcbiAgY29uc3QgY3JlYXRlUG9pbnRzRnJvbUxpbmVDdXJ2ZSA9IChzdGFydFBvaW50LCBlbmRQb2ludCwgZGl2aXNpb25zID0gMTApID0+IHtcclxuICAgIGNvbnN0IHBvaW50cyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXZpc2lvbnM7IGkrKykge1xyXG4gICAgICBjb25zdCBwb2ludCA9IHN0YXJ0UG9pbnQuY2xvbmUoKS5sZXJwKGVuZFBvaW50LCBpIC8gZGl2aXNpb25zKTtcclxuICAgICAgcG9pbnRzLnB1c2gocG9pbnQueCwgcG9pbnQueSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9pbnRzO1xyXG4gIH07XHJcbiAgLy8gY29uc29sZS5sb2cocG9zaXRpb25zKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cG9zaXRpb25zICYmIChcclxuICAgICAgICA8UG9pbnRzXHJcbiAgICAgICAgICAvLyAgIHNlbGVjdGVkU2hhcGU9e3NlbGVjdGVkU2hhcGV9XHJcbiAgICAgICAgICBwb3NpdGlvbnM9e3Bvc2l0aW9uc31cclxuICAgICAgICAgIC8vIHRhcmdldFBvc2l0aW9ucz17c2hhcGVzW3NlbGVjdGVkU2hhcGVdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbkNyZWF0ZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlBvaW50cyIsIlNWR1BhdGhDb21tYW5kZXIiLCJTVkdMb2FkZXIiLCJwYXJzZSIsIkRvdWJsZVNpZGUiLCJHcm91cCIsIk1lc2giLCJNZXNoQmFzaWNNYXRlcmlhbCIsIlNoYXBlR2VvbWV0cnkiLCJJY29uQ3JlYXRlciIsImZpbGUiLCJpY29uRmlsZSIsInVybCIsInNjZW5lIiwicG9zaXRpb25zIiwic2V0UG9zaXRpb25zIiwiZ3JvdXBSZWYiLCJwb3NpdGlvbnNBcnJheXMiLCJsb2FkSWNvbiIsIm1lcmdlRmxvYXQzMkFycmF5cyIsImFycmF5cyIsInRvdGFsTGVuZ3RoIiwicmVkdWNlIiwiYWNjIiwidmFsIiwibGVuZ3RoIiwicmVzdWx0IiwiRmxvYXQzMkFycmF5Iiwib2Zmc2V0IiwiYXJyYXkiLCJzZXQiLCJpY29uVXJsIiwibG9hZGVyIiwibG9hZCIsImRhdGEiLCJwYXRocyIsImdyb3VwIiwiY29uc29sZSIsImxvZyIsImkiLCJwYXRoIiwibWF0ZXJpYWwiLCJjb2xvciIsInNpZGUiLCJkZXB0aFdyaXRlIiwic2hhcGVzIiwiY3JlYXRlU2hhcGVzIiwiaiIsInNoYXBlIiwiZ2VvbWV0cnkiLCJhdHRyaWJ1dGVzIiwicG9zaXRpb24iLCJub3JtYWxpemUiLCJtZXNoIiwiYWRkIiwiY3VycmVudCIsIm1lcmdlZCIsIm5vcm1hbGl6ZWRBcnJheSIsInhociIsImxvYWRlZCIsInRvdGFsIiwiZXJyb3IiLCJjcmVhdGVGbG9hdDMyQXJyYXlQb3NpdGlvbnNTdmdQYXRocyIsInBvaW50c0FycmF5IiwiZm9yRWFjaCIsInAiLCJwcm9wZXJ0aWVzIiwiZCIsIm5vcm1hbGl6ZWRQYXRoIiwibm9ybWFsaXplUGF0aCIsInN0cm9rZSIsInNoaWZ0IiwiaW5kZXgiLCJwdXNoIiwiZmxvYXQzMkFycmF5IiwibWF4IiwiTWF0aCIsIm1pbiIsIm1hcCIsInZhbHVlIiwiY3JlYXRlUG9pbnRzRnJvbVNoYXBlIiwiY3VydmVzIiwiY3JlYXRlUG9pbnRzRnJvbUN1cnZlcyIsImhvbGVzIiwiaG9sZSIsImNyZWF0ZVBvaW50c0Zyb21QYXRocyIsImN1cnJlbnRQYXRoIiwic3ViUGF0aHMiLCJzdWJQYXRoIiwiZGl2aXNpb25zIiwicG9pbnRzIiwiY3VydmUiLCJwb2ludHNGcm9tQ3VydmUiLCJjcmVhdGVQb2ludHNGcm9tQ3VydmUiLCJ0eXBlIiwiY3JlYXRlUG9pbnRzRnJvbUVsbGlwc2VDdXJ2ZSIsImNyZWF0ZVBvaW50c0Zyb21MaW5lQ3VydmUiLCJ2MSIsInYyIiwicG9pbnQiLCJnZXRQb2ludCIsIngiLCJ5Iiwic3RhcnRQb2ludCIsImVuZFBvaW50IiwiY2xvbmUiLCJsZXJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/IconCreater.js\n"));

/***/ })

});