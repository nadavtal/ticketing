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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Points_Points__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Points/Points */ \"./components/Points/Points.js\");\n/* harmony import */ var svg_path_commander__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svg-path-commander */ \"./node_modules/svg-path-commander/dist/svg-path-commander.mjs\");\n/* harmony import */ var three_examples_jsm_loaders_SVGLoader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/examples/jsm/loaders/SVGLoader.js */ \"./node_modules/three/examples/jsm/loaders/SVGLoader.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.legacy-esm.js\");\n/* harmony import */ var svg_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! svg-parser */ \"./node_modules/svg-parser/dist/svg-parser.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _utils_utils3d__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils3d */ \"./utils/utils3d.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst IconCreater = (param)=>{\n    let { scene } = param;\n    _s();\n    const [positions, setPositions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const groupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const positionsArrays = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const iconsUrls = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.shapes.iconsUrls);\n    //   const font = useLoader(FontLoader, './public/fonts/Montserrat Black_Italic.json');\n    // useEffect(() => {\n    //   if (url) {\n    //       fetch(url)\n    //       .then(response => response.text())\n    //       .then(svgString => {\n    //           const parsedSvg = parse(svgString);\n    //           // Now you can work with the parsed SVG\n    //           // console.log(parsedSvg)\n    //           const paths = parsedSvg.children[0].children.filter(child => child.tagName === 'path');\n    //           setPositions(createFloat32ArrayPositionsSvgPaths(paths))\n    //       });\n    //   }\n    //   return () => {\n    //   }\n    // }, [url])\n    // useEffect(() => {\n    //   console.log(file)\n    //   const reader = new FileReader();\n    //   reader.onloadend = () => {\n    //   const parsedSvg = parse(reader.result);\n    //   console.log(parsedSvg)\n    //   const paths = parsedSvg.children[0].children.filter(child => child.tagName === 'path');\n    //   console.log(paths);\n    //   setPositions(createFloat32ArrayPositionsSvgPaths(paths))\n    //   };\n    //   if (file) {\n    //    reader.readAsText(file);\n    //   }\n    //   return () => {\n    //   }\n    // }, [file])\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(iconsUrls);\n        if (iconsUrls.length > 0) loadIcon(iconsUrls[0]);\n        else setPositions(null);\n    }, [\n        iconsUrls\n    ]);\n    function mergeFloat32Arrays(arrays) {\n        let totalLength = arrays.reduce((acc, val)=>acc + val.length, 0);\n        let result = new Float32Array(totalLength);\n        let offset = 0;\n        for (let array of arrays){\n            result.set(array, offset);\n            offset += array.length;\n        }\n        return result;\n    }\n    const loadIcon = (iconUrl)=>{\n        const loader = new three_examples_jsm_loaders_SVGLoader_js__WEBPACK_IMPORTED_MODULE_7__.SVGLoader();\n        loader.load(// resource URL\n        iconUrl, // called when the resource is loaded\n        function(data) {\n            const paths = data.paths;\n            console.log({\n                paths\n            });\n            createPointsFromPaths(paths);\n            createModelFromPaths(paths);\n        }, // called when loading is in progresses\n        function(xhr) {\n            console.log(xhr.loaded / xhr.total * 100 + \"% loaded\");\n        }, // called when loading has errors\n        function(error) {\n            console.log(\"An error happened\", error);\n        });\n    };\n    const createFloat32ArrayPositionsSvgPaths = (paths)=>{\n        // console.log(paths)\n        // console.log(shapes[selectedShape])\n        const pointsArray = [];\n        paths.forEach((path)=>{\n            const p = path.properties.d;\n            // console.log(p)\n            const normalizedPath = svg_path_commander__WEBPACK_IMPORTED_MODULE_3__[\"default\"].normalizePath(p);\n            //remove first element of array\n            // console.log(normalizedPath)\n            normalizedPath.forEach((stroke)=>{\n                stroke.shift();\n                // console.log(stroke)\n                for(let index = 0; index < stroke.length; index++){\n                    pointsArray.push(stroke[index]);\n                    if (index % 2 !== 0) {\n                        pointsArray.push(0);\n                    }\n                }\n            });\n        // const transform = {\n        //     translate: [15, 15, 15], // `[15, 15]` would apply a 2D translation, and only `15` for X axis translation\n        //     rotate: [15, 15, 15], // or only \"15\" for 2D rotation on Z axis\n        //     scale: [0.7, 0.75, 0.8], // or only \"0.7\" for 2D scale on all X, Y, Z axis\n        //     skew: [15, 15], // or only \"15\" for the X axis\n        //     origin: [15, 15, 15] // full `transform-origin` for a typical 3D transformation\n        // }\n        // const transformed3DPathString = new SVGPathCommander(normalizedPath).transform(transform);\n        // console.log(transformed3DPathString)\n        });\n        // console.log(pointsArray)\n        const normalizedArray = (0,_utils_utils3d__WEBPACK_IMPORTED_MODULE_5__.normalize)(pointsArray);\n        const float32Array = new Float32Array(normalizedArray);\n        return float32Array;\n    };\n    const createPointsFromShape = (shape)=>{\n        if (shape.curves.length > 0) {\n            positionsArrays.current.push(createPointsFromCurves(shape.curves, 30));\n        }\n        if (shape.holes.length > 0) {\n            shape.holes.forEach((hole, index)=>{\n                positionsArrays.current.push(createPointsFromCurves(hole.curves, 30));\n            });\n        }\n    };\n    const createModelFromPaths = (paths)=>{\n        const group = new three__WEBPACK_IMPORTED_MODULE_8__.Group();\n        // console.log(positionsArrays.current);\n        scene.add(group);\n        for(let i = 0; i < paths.length; i++){\n            const path = paths[i];\n            const material = new three__WEBPACK_IMPORTED_MODULE_8__.MeshBasicMaterial({\n                color: path.color,\n                side: three__WEBPACK_IMPORTED_MODULE_8__.DoubleSide,\n                depthWrite: false\n            });\n            const shapes = three_examples_jsm_loaders_SVGLoader_js__WEBPACK_IMPORTED_MODULE_7__.SVGLoader.createShapes(path);\n            // console.log({ shapes });\n            for(let j = 0; j < shapes.length; j++){\n                const shape = shapes[j];\n                // createPointsFromShape(shape);\n                const geometry = new three__WEBPACK_IMPORTED_MODULE_8__.ShapeGeometry(shape);\n                const { min, max } = (0,_utils_utils3d__WEBPACK_IMPORTED_MODULE_5__.getMinMax)(geometry.attributes.position.array);\n                geometry.attributes.position.array = (0,_utils_utils3d__WEBPACK_IMPORTED_MODULE_5__.normalize)(geometry.attributes.position.array, min, max);\n                // positionsArrays.current.push(geometry.attributes.position.array)\n                const mesh = new three__WEBPACK_IMPORTED_MODULE_8__.Mesh(geometry, material);\n                group.add(mesh);\n            }\n        }\n        group.position.x = 2;\n        groupRef.current = group;\n    };\n    const createPointsFromPaths = (paths)=>{\n        console.log({\n            paths\n        });\n        for(let i = 0; i < paths.length; i++){\n            const path = paths[i];\n            positionsArrays.current.push(createPointsFromCurves(path.currentPath.curves, 30));\n            path.subPaths.forEach((subPath)=>{\n                positionsArrays.current.push(createPointsFromCurves(subPath.curves, 30));\n            });\n        }\n        const merged = mergeFloat32Arrays(positionsArrays.current);\n        const { min, max } = (0,_utils_utils3d__WEBPACK_IMPORTED_MODULE_5__.getMinMax)(merged);\n        const normalizedArray = (0,_utils_utils3d__WEBPACK_IMPORTED_MODULE_5__.normalize)(merged, min, max);\n        // console.log(merged)\n        setPositions(normalizedArray);\n    };\n    const createPointsFromCurves = (curves, divisions)=>{\n        const points = [];\n        curves.forEach((curve)=>{\n            const pointsFromCurve = createPointsFromCurve(curve, divisions);\n            points.push(...pointsFromCurve);\n        });\n        return points;\n    };\n    const createPointsFromCurve = function(curve) {\n        let divisions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;\n        const points = [];\n        for(let i = 0; i < divisions; i++){\n            const point = curve.getPoint(i / divisions);\n            points.push(point.x, point.y, 0);\n        }\n        return points;\n    };\n    // console.log(positions)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: positions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Points_Points__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            positions: positions\n        }, void 0, false, {\n            fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\IconCreater.js\",\n            lineNumber: 229,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(IconCreater, \"b7tuASPRJzUuoS777AL5BJeWmqI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = IconCreater;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconCreater);\nvar _c;\n$RefreshReg$(_c, \"IconCreater\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDc0M7Z0JBQ3JCdEUsZ0JBQWdCZ0QsT0FBTyxDQUFDTixJQUFJLENBQzFCTyx1QkFBdUJxQixRQUFRdkIsTUFBTSxFQUFFO1lBRTNDO1FBQ0Y7UUFDQSxNQUFNd0IsU0FBUy9ELG1CQUFtQlIsZ0JBQWdCZ0QsT0FBTztRQUN6RCxNQUFNLEVBQUVjLEdBQUcsRUFBRUMsR0FBRyxFQUFFLEdBQUd0RSx5REFBU0EsQ0FBQzhFO1FBQy9CLE1BQU01QixrQkFBa0JqRCx5REFBU0EsQ0FBQzZFLFFBQVFULEtBQUtDO1FBQy9DLHNCQUFzQjtRQUN0QmpFLGFBQWE2QztJQUNmO0lBRUEsTUFBTU0seUJBQXlCLENBQUNGLFFBQVF5QjtRQUN0QyxNQUFNQyxTQUFTLEVBQUU7UUFDakIxQixPQUFPZixPQUFPLENBQUMsQ0FBQzBDO1lBQ2QsTUFBTUMsa0JBQWtCQyxzQkFBc0JGLE9BQU9GO1lBQ3JEQyxPQUFPL0IsSUFBSSxJQUFJaUM7UUFDakI7UUFDQSxPQUFPRjtJQUNUO0lBRUEsTUFBTUcsd0JBQXdCLFNBQUNGO1lBQU9GLDZFQUFZO1FBQ2hELE1BQU1DLFNBQVMsRUFBRTtRQUNqQixJQUFLLElBQUluQixJQUFJLEdBQUdBLElBQUlrQixXQUFXbEIsSUFBSztZQUNsQyxNQUFNdUIsUUFBUUgsTUFBTUksUUFBUSxDQUFDeEIsSUFBSWtCO1lBQ2pDQyxPQUFPL0IsSUFBSSxDQUFDbUMsTUFBTVYsQ0FBQyxFQUFFVSxNQUFNRSxDQUFDLEVBQUU7UUFDaEM7UUFDQSxPQUFPTjtJQUNUO0lBRUEseUJBQXlCO0lBQ3pCLHFCQUNFO2tCQUNHNUUsMkJBQ0MsOERBQUNmLHNEQUFNQTtZQUNMZSxXQUFXQTs7Ozs7OztBQU1yQjtHQTdOTUY7O1FBT2NWLG9EQUFXQTs7O0tBUHpCVTtBQStOTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ljb25DcmVhdGVyLmpzP2M1N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQb2ludHMgZnJvbSBcIi4vUG9pbnRzL1BvaW50c1wiO1xyXG5pbXBvcnQgU1ZHUGF0aENvbW1hbmRlciBmcm9tIFwic3ZnLXBhdGgtY29tbWFuZGVyXCI7XHJcbmltcG9ydCB7IFNWR0xvYWRlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9TVkdMb2FkZXIuanNcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSBcInN2Zy1wYXJzZXJcIjtcclxuaW1wb3J0IHtcclxuICBEb3VibGVTaWRlLFxyXG4gIEdyb3VwLFxyXG4gIE1lc2gsXHJcbiAgTWVzaEJhc2ljTWF0ZXJpYWwsXHJcbiAgU2hhcGVHZW9tZXRyeSxcclxufSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgZ2V0TWluTWF4LCBub3JtYWxpemUgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHMzZFwiO1xyXG5jb25zdCBJY29uQ3JlYXRlciA9ICh7XHJcbiAgc2NlbmUsXHJcbiAgLy8gdXJsID0gJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYy9jMy9QeXRob24tbG9nby1ub3RleHQuc3ZnJ1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW3Bvc2l0aW9ucywgc2V0UG9zaXRpb25zXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgZ3JvdXBSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBwb3NpdGlvbnNBcnJheXMgPSB1c2VSZWYoW10pO1xyXG4gIGNvbnN0IGljb25zVXJscyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2hhcGVzLmljb25zVXJscyk7XHJcbiAgLy8gICBjb25zdCBmb250ID0gdXNlTG9hZGVyKEZvbnRMb2FkZXIsICcuL3B1YmxpYy9mb250cy9Nb250c2VycmF0IEJsYWNrX0l0YWxpYy5qc29uJyk7XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmICh1cmwpIHtcclxuICAvLyAgICAgICBmZXRjaCh1cmwpXHJcbiAgLy8gICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gIC8vICAgICAgIC50aGVuKHN2Z1N0cmluZyA9PiB7XHJcbiAgLy8gICAgICAgICAgIGNvbnN0IHBhcnNlZFN2ZyA9IHBhcnNlKHN2Z1N0cmluZyk7XHJcbiAgLy8gICAgICAgICAgIC8vIE5vdyB5b3UgY2FuIHdvcmsgd2l0aCB0aGUgcGFyc2VkIFNWR1xyXG4gIC8vICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYXJzZWRTdmcpXHJcbiAgLy8gICAgICAgICAgIGNvbnN0IHBhdGhzID0gcGFyc2VkU3ZnLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC50YWdOYW1lID09PSAncGF0aCcpO1xyXG5cclxuICAvLyAgICAgICAgICAgc2V0UG9zaXRpb25zKGNyZWF0ZUZsb2F0MzJBcnJheVBvc2l0aW9uc1N2Z1BhdGhzKHBhdGhzKSlcclxuICAvLyAgICAgICB9KTtcclxuXHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgcmV0dXJuICgpID0+IHtcclxuXHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW3VybF0pXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGZpbGUpXHJcbiAgLy8gICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAvLyAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcblxyXG4gIC8vICAgY29uc3QgcGFyc2VkU3ZnID0gcGFyc2UocmVhZGVyLnJlc3VsdCk7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhwYXJzZWRTdmcpXHJcbiAgLy8gICBjb25zdCBwYXRocyA9IHBhcnNlZFN2Zy5jaGlsZHJlblswXS5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQudGFnTmFtZSA9PT0gJ3BhdGgnKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKHBhdGhzKTtcclxuICAvLyAgIHNldFBvc2l0aW9ucyhjcmVhdGVGbG9hdDMyQXJyYXlQb3NpdGlvbnNTdmdQYXRocyhwYXRocykpXHJcbiAgLy8gICB9O1xyXG5cclxuICAvLyAgIGlmIChmaWxlKSB7XHJcbiAgLy8gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgcmV0dXJuICgpID0+IHtcclxuXHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW2ZpbGVdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpY29uc1VybHMpO1xyXG4gICAgaWYgKGljb25zVXJscy5sZW5ndGggPiAwKSBsb2FkSWNvbihpY29uc1VybHNbMF0pO1xyXG4gICAgZWxzZSBzZXRQb3NpdGlvbnMobnVsbCk7XHJcbiAgfSwgW2ljb25zVXJsc10pO1xyXG5cclxuICBmdW5jdGlvbiBtZXJnZUZsb2F0MzJBcnJheXMoYXJyYXlzKSB7XHJcbiAgICBsZXQgdG90YWxMZW5ndGggPSBhcnJheXMucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjICsgdmFsLmxlbmd0aCwgMCk7XHJcbiAgICBsZXQgcmVzdWx0ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbExlbmd0aCk7XHJcbiAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgIGZvciAobGV0IGFycmF5IG9mIGFycmF5cykge1xyXG4gICAgICByZXN1bHQuc2V0KGFycmF5LCBvZmZzZXQpO1xyXG4gICAgICBvZmZzZXQgKz0gYXJyYXkubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgY29uc3QgbG9hZEljb24gPSAoaWNvblVybCkgPT4ge1xyXG4gICAgY29uc3QgbG9hZGVyID0gbmV3IFNWR0xvYWRlcigpO1xyXG5cclxuICAgIGxvYWRlci5sb2FkKFxyXG4gICAgICAvLyByZXNvdXJjZSBVUkxcclxuICAgICAgaWNvblVybCxcclxuICAgICAgLy8gY2FsbGVkIHdoZW4gdGhlIHJlc291cmNlIGlzIGxvYWRlZFxyXG4gICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHBhdGhzID0gZGF0YS5wYXRocztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coeyBwYXRocyB9KTtcclxuICAgICAgICBjcmVhdGVQb2ludHNGcm9tUGF0aHMocGF0aHMpO1xyXG5cclxuICAgICAgICBjcmVhdGVNb2RlbEZyb21QYXRocyhwYXRocyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIGNhbGxlZCB3aGVuIGxvYWRpbmcgaXMgaW4gcHJvZ3Jlc3Nlc1xyXG4gICAgICBmdW5jdGlvbiAoeGhyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coKHhoci5sb2FkZWQgLyB4aHIudG90YWwpICogMTAwICsgXCIlIGxvYWRlZFwiKTtcclxuICAgICAgfSxcclxuICAgICAgLy8gY2FsbGVkIHdoZW4gbG9hZGluZyBoYXMgZXJyb3JzXHJcbiAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQW4gZXJyb3IgaGFwcGVuZWRcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgY3JlYXRlRmxvYXQzMkFycmF5UG9zaXRpb25zU3ZnUGF0aHMgPSAocGF0aHMpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBhdGhzKVxyXG4gICAgLy8gY29uc29sZS5sb2coc2hhcGVzW3NlbGVjdGVkU2hhcGVdKVxyXG4gICAgY29uc3QgcG9pbnRzQXJyYXkgPSBbXTtcclxuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcclxuICAgICAgY29uc3QgcCA9IHBhdGgucHJvcGVydGllcy5kO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhwKVxyXG4gICAgICBjb25zdCBub3JtYWxpemVkUGF0aCA9IFNWR1BhdGhDb21tYW5kZXIubm9ybWFsaXplUGF0aChwKTtcclxuICAgICAgLy9yZW1vdmUgZmlyc3QgZWxlbWVudCBvZiBhcnJheVxyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2cobm9ybWFsaXplZFBhdGgpXHJcbiAgICAgIG5vcm1hbGl6ZWRQYXRoLmZvckVhY2goKHN0cm9rZSkgPT4ge1xyXG4gICAgICAgIHN0cm9rZS5zaGlmdCgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0cm9rZSlcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc3Ryb2tlLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgcG9pbnRzQXJyYXkucHVzaChzdHJva2VbaW5kZXhdKTtcclxuICAgICAgICAgIGlmIChpbmRleCAlIDIgIT09IDApIHtcclxuICAgICAgICAgICAgcG9pbnRzQXJyYXkucHVzaCgwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBjb25zdCB0cmFuc2Zvcm0gPSB7XHJcbiAgICAgIC8vICAgICB0cmFuc2xhdGU6IFsxNSwgMTUsIDE1XSwgLy8gYFsxNSwgMTVdYCB3b3VsZCBhcHBseSBhIDJEIHRyYW5zbGF0aW9uLCBhbmQgb25seSBgMTVgIGZvciBYIGF4aXMgdHJhbnNsYXRpb25cclxuICAgICAgLy8gICAgIHJvdGF0ZTogWzE1LCAxNSwgMTVdLCAvLyBvciBvbmx5IFwiMTVcIiBmb3IgMkQgcm90YXRpb24gb24gWiBheGlzXHJcbiAgICAgIC8vICAgICBzY2FsZTogWzAuNywgMC43NSwgMC44XSwgLy8gb3Igb25seSBcIjAuN1wiIGZvciAyRCBzY2FsZSBvbiBhbGwgWCwgWSwgWiBheGlzXHJcbiAgICAgIC8vICAgICBza2V3OiBbMTUsIDE1XSwgLy8gb3Igb25seSBcIjE1XCIgZm9yIHRoZSBYIGF4aXNcclxuICAgICAgLy8gICAgIG9yaWdpbjogWzE1LCAxNSwgMTVdIC8vIGZ1bGwgYHRyYW5zZm9ybS1vcmlnaW5gIGZvciBhIHR5cGljYWwgM0QgdHJhbnNmb3JtYXRpb25cclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBjb25zdCB0cmFuc2Zvcm1lZDNEUGF0aFN0cmluZyA9IG5ldyBTVkdQYXRoQ29tbWFuZGVyKG5vcm1hbGl6ZWRQYXRoKS50cmFuc2Zvcm0odHJhbnNmb3JtKTtcclxuICAgICAgLy8gY29uc29sZS5sb2codHJhbnNmb3JtZWQzRFBhdGhTdHJpbmcpXHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBvaW50c0FycmF5KVxyXG4gICAgY29uc3Qgbm9ybWFsaXplZEFycmF5ID0gbm9ybWFsaXplKHBvaW50c0FycmF5KTtcclxuICAgIGNvbnN0IGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkobm9ybWFsaXplZEFycmF5KTtcclxuICAgIHJldHVybiBmbG9hdDMyQXJyYXk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlUG9pbnRzRnJvbVNoYXBlID0gKHNoYXBlKSA9PiB7XHJcbiAgICBpZiAoc2hhcGUuY3VydmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgcG9zaXRpb25zQXJyYXlzLmN1cnJlbnQucHVzaChjcmVhdGVQb2ludHNGcm9tQ3VydmVzKHNoYXBlLmN1cnZlcywgMzApKTtcclxuICAgIH1cclxuICAgIGlmIChzaGFwZS5ob2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNoYXBlLmhvbGVzLmZvckVhY2goKGhvbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcG9zaXRpb25zQXJyYXlzLmN1cnJlbnQucHVzaChjcmVhdGVQb2ludHNGcm9tQ3VydmVzKGhvbGUuY3VydmVzLCAzMCkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGNyZWF0ZU1vZGVsRnJvbVBhdGhzID0gKHBhdGhzKSA9PiB7XHJcbiAgICBjb25zdCBncm91cCA9IG5ldyBHcm91cCgpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHBvc2l0aW9uc0FycmF5cy5jdXJyZW50KTtcclxuXHJcbiAgICBzY2VuZS5hZGQoZ3JvdXApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwYXRoID0gcGF0aHNbaV07XHJcbiAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IE1lc2hCYXNpY01hdGVyaWFsKHtcclxuICAgICAgICBjb2xvcjogcGF0aC5jb2xvcixcclxuICAgICAgICBzaWRlOiBEb3VibGVTaWRlLFxyXG4gICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHNoYXBlcyA9IFNWR0xvYWRlci5jcmVhdGVTaGFwZXMocGF0aCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHsgc2hhcGVzIH0pO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoYXBlcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGNvbnN0IHNoYXBlID0gc2hhcGVzW2pdO1xyXG4gICAgICAgIC8vIGNyZWF0ZVBvaW50c0Zyb21TaGFwZShzaGFwZSk7XHJcbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgU2hhcGVHZW9tZXRyeShzaGFwZSk7XHJcbiAgICAgICAgY29uc3QgeyBtaW4sIG1heCB9ID0gZ2V0TWluTWF4KGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXkpO1xyXG4gICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXkgPSBub3JtYWxpemUoXHJcbiAgICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5LFxyXG4gICAgICAgICAgbWluLFxyXG4gICAgICAgICAgbWF4XHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBwb3NpdGlvbnNBcnJheXMuY3VycmVudC5wdXNoKGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXkpXHJcbiAgICAgICAgY29uc3QgbWVzaCA9IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG4gICAgICAgIGdyb3VwLmFkZChtZXNoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ3JvdXAucG9zaXRpb24ueCA9IDJcclxuICAgIGdyb3VwUmVmLmN1cnJlbnQgPSBncm91cDtcclxuICB9O1xyXG4gIGNvbnN0IGNyZWF0ZVBvaW50c0Zyb21QYXRocyA9IChwYXRocykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coeyBwYXRocyB9KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcGF0aCA9IHBhdGhzW2ldO1xyXG4gICAgICBwb3NpdGlvbnNBcnJheXMuY3VycmVudC5wdXNoKFxyXG4gICAgICAgIGNyZWF0ZVBvaW50c0Zyb21DdXJ2ZXMocGF0aC5jdXJyZW50UGF0aC5jdXJ2ZXMsIDMwKVxyXG4gICAgICApO1xyXG4gICAgICBwYXRoLnN1YlBhdGhzLmZvckVhY2goKHN1YlBhdGgpID0+IHtcclxuICAgICAgICBwb3NpdGlvbnNBcnJheXMuY3VycmVudC5wdXNoKFxyXG4gICAgICAgICAgY3JlYXRlUG9pbnRzRnJvbUN1cnZlcyhzdWJQYXRoLmN1cnZlcywgMzApXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUZsb2F0MzJBcnJheXMocG9zaXRpb25zQXJyYXlzLmN1cnJlbnQpO1xyXG4gICAgY29uc3QgeyBtaW4sIG1heCB9ID0gZ2V0TWluTWF4KG1lcmdlZCk7XHJcbiAgICBjb25zdCBub3JtYWxpemVkQXJyYXkgPSBub3JtYWxpemUobWVyZ2VkLCBtaW4sIG1heCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZXJnZWQpXHJcbiAgICBzZXRQb3NpdGlvbnMobm9ybWFsaXplZEFycmF5KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVQb2ludHNGcm9tQ3VydmVzID0gKGN1cnZlcywgZGl2aXNpb25zKSA9PiB7XHJcbiAgICBjb25zdCBwb2ludHMgPSBbXTtcclxuICAgIGN1cnZlcy5mb3JFYWNoKChjdXJ2ZSkgPT4ge1xyXG4gICAgICBjb25zdCBwb2ludHNGcm9tQ3VydmUgPSBjcmVhdGVQb2ludHNGcm9tQ3VydmUoY3VydmUsIGRpdmlzaW9ucyk7XHJcbiAgICAgIHBvaW50cy5wdXNoKC4uLnBvaW50c0Zyb21DdXJ2ZSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBwb2ludHM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlUG9pbnRzRnJvbUN1cnZlID0gKGN1cnZlLCBkaXZpc2lvbnMgPSAxMCkgPT4ge1xyXG4gICAgY29uc3QgcG9pbnRzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdmlzaW9uczsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHBvaW50ID0gY3VydmUuZ2V0UG9pbnQoaSAvIGRpdmlzaW9ucyk7XHJcbiAgICAgIHBvaW50cy5wdXNoKHBvaW50LngsIHBvaW50LnksIDApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvaW50cztcclxuICB9O1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhwb3NpdGlvbnMpXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtwb3NpdGlvbnMgJiYgKFxyXG4gICAgICAgIDxQb2ludHNcclxuICAgICAgICAgIHBvc2l0aW9ucz17cG9zaXRpb25zfVxyXG4gICAgICAgICAgLy8gdGFyZ2V0UG9zaXRpb25zPXtzaGFwZXNbc2VsZWN0ZWRTaGFwZV19XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJY29uQ3JlYXRlcjtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUG9pbnRzIiwiU1ZHUGF0aENvbW1hbmRlciIsIlNWR0xvYWRlciIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJwYXJzZSIsIkRvdWJsZVNpZGUiLCJHcm91cCIsIk1lc2giLCJNZXNoQmFzaWNNYXRlcmlhbCIsIlNoYXBlR2VvbWV0cnkiLCJnZXRNaW5NYXgiLCJub3JtYWxpemUiLCJJY29uQ3JlYXRlciIsInNjZW5lIiwicG9zaXRpb25zIiwic2V0UG9zaXRpb25zIiwiZ3JvdXBSZWYiLCJwb3NpdGlvbnNBcnJheXMiLCJpY29uc1VybHMiLCJzdGF0ZSIsInNoYXBlcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJsb2FkSWNvbiIsIm1lcmdlRmxvYXQzMkFycmF5cyIsImFycmF5cyIsInRvdGFsTGVuZ3RoIiwicmVkdWNlIiwiYWNjIiwidmFsIiwicmVzdWx0IiwiRmxvYXQzMkFycmF5Iiwib2Zmc2V0IiwiYXJyYXkiLCJzZXQiLCJpY29uVXJsIiwibG9hZGVyIiwibG9hZCIsImRhdGEiLCJwYXRocyIsImNyZWF0ZVBvaW50c0Zyb21QYXRocyIsImNyZWF0ZU1vZGVsRnJvbVBhdGhzIiwieGhyIiwibG9hZGVkIiwidG90YWwiLCJlcnJvciIsImNyZWF0ZUZsb2F0MzJBcnJheVBvc2l0aW9uc1N2Z1BhdGhzIiwicG9pbnRzQXJyYXkiLCJmb3JFYWNoIiwicGF0aCIsInAiLCJwcm9wZXJ0aWVzIiwiZCIsIm5vcm1hbGl6ZWRQYXRoIiwibm9ybWFsaXplUGF0aCIsInN0cm9rZSIsInNoaWZ0IiwiaW5kZXgiLCJwdXNoIiwibm9ybWFsaXplZEFycmF5IiwiZmxvYXQzMkFycmF5IiwiY3JlYXRlUG9pbnRzRnJvbVNoYXBlIiwic2hhcGUiLCJjdXJ2ZXMiLCJjdXJyZW50IiwiY3JlYXRlUG9pbnRzRnJvbUN1cnZlcyIsImhvbGVzIiwiaG9sZSIsImdyb3VwIiwiYWRkIiwiaSIsIm1hdGVyaWFsIiwiY29sb3IiLCJzaWRlIiwiZGVwdGhXcml0ZSIsImNyZWF0ZVNoYXBlcyIsImoiLCJnZW9tZXRyeSIsIm1pbiIsIm1heCIsImF0dHJpYnV0ZXMiLCJwb3NpdGlvbiIsIm1lc2giLCJ4IiwiY3VycmVudFBhdGgiLCJzdWJQYXRocyIsInN1YlBhdGgiLCJtZXJnZWQiLCJkaXZpc2lvbnMiLCJwb2ludHMiLCJjdXJ2ZSIsInBvaW50c0Zyb21DdXJ2ZSIsImNyZWF0ZVBvaW50c0Zyb21DdXJ2ZSIsInBvaW50IiwiZ2V0UG9pbnQiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/IconCreater.js\n"));

/***/ })

});