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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Points_Points__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Points/Points */ \"./components/Points/Points.js\");\n/* harmony import */ var svg_path_commander__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! svg-path-commander */ \"./node_modules/svg-path-commander/dist/svg-path-commander.mjs\");\n/* harmony import */ var three_examples_jsm_loaders_SVGLoader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/examples/jsm/loaders/SVGLoader.js */ \"./node_modules/three/examples/jsm/loaders/SVGLoader.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.legacy-esm.js\");\n/* harmony import */ var svg_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! svg-parser */ \"./node_modules/svg-parser/dist/svg-parser.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _utils_utils3d__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils3d */ \"./utils/utils3d.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst IconCreater = (param)=>{\n    let { scene } = param;\n    _s();\n    const [positions, setPositions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const groupRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const positionsArrays = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const iconsUrls = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.shapes.iconsUrls);\n    //   const font = useLoader(FontLoader, './public/fonts/Montserrat Black_Italic.json');\n    // useEffect(() => {\n    //   if (url) {\n    //       fetch(url)\n    //       .then(response => response.text())\n    //       .then(svgString => {\n    //           const parsedSvg = parse(svgString);\n    //           // Now you can work with the parsed SVG\n    //           // console.log(parsedSvg)\n    //           const paths = parsedSvg.children[0].children.filter(child => child.tagName === 'path');\n    //           setPositions(createFloat32ArrayPositionsSvgPaths(paths))\n    //       });\n    //   }\n    //   return () => {\n    //   }\n    // }, [url])\n    // useEffect(() => {\n    //   console.log(file)\n    //   const reader = new FileReader();\n    //   reader.onloadend = () => {\n    //   const parsedSvg = parse(reader.result);\n    //   console.log(parsedSvg)\n    //   const paths = parsedSvg.children[0].children.filter(child => child.tagName === 'path');\n    //   console.log(paths);\n    //   setPositions(createFloat32ArrayPositionsSvgPaths(paths))\n    //   };\n    //   if (file) {\n    //    reader.readAsText(file);\n    //   }\n    //   return () => {\n    //   }\n    // }, [file])\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(iconsUrls);\n        if (iconsUrls.length > 0) loadIcon(iconsUrls[0]);\n        else setPositions(null);\n    }, [\n        iconsUrls\n    ]);\n    function mergeFloat32Arrays(arrays) {\n        let totalLength = arrays.reduce((acc, val)=>acc + val.length, 0);\n        let result = new Float32Array(totalLength);\n        let offset = 0;\n        for (let array of arrays){\n            result.set(array, offset);\n            offset += array.length;\n        }\n        return result;\n    }\n    const loadIcon = (iconUrl)=>{\n        const loader = new three_examples_jsm_loaders_SVGLoader_js__WEBPACK_IMPORTED_MODULE_7__.SVGLoader();\n        loader.load(// resource URL\n        iconUrl, // called when the resource is loaded\n        function(data) {\n            const paths = data.paths;\n            const group = new three__WEBPACK_IMPORTED_MODULE_8__.Group();\n            console.log({\n                paths\n            });\n            createPointsFromPaths(paths);\n            for(let i = 0; i < paths.length; i++){\n                const path = paths[i];\n                const material = new three__WEBPACK_IMPORTED_MODULE_8__.MeshBasicMaterial({\n                    color: path.color,\n                    side: three__WEBPACK_IMPORTED_MODULE_8__.DoubleSide,\n                    depthWrite: false\n                });\n                const shapes = three_examples_jsm_loaders_SVGLoader_js__WEBPACK_IMPORTED_MODULE_7__.SVGLoader.createShapes(path);\n                console.log({\n                    shapes\n                });\n                for(let j = 0; j < shapes.length; j++){\n                    const shape = shapes[j];\n                    // createPointsFromShape(shape);\n                    const geometry = new three__WEBPACK_IMPORTED_MODULE_8__.ShapeGeometry(shape);\n                    // console.log({geometry})\n                    geometry.attributes.position.array = (0,_utils_utils3d__WEBPACK_IMPORTED_MODULE_5__.normalize)(geometry.attributes.position.array);\n                    // positionsArrays.current.push(geometry.attributes.position.array)\n                    const mesh = new three__WEBPACK_IMPORTED_MODULE_8__.Mesh(geometry, material);\n                    group.add(mesh);\n                }\n            }\n            group.position.x = 2;\n            groupRef.current = group;\n            // console.log(positionsArrays.current);\n            scene.add(group);\n        }, // called when loading is in progresses\n        function(xhr) {\n            console.log(xhr.loaded / xhr.total * 100 + \"% loaded\");\n        }, // called when loading has errors\n        function(error) {\n            console.log(\"An error happened\", error);\n        });\n    };\n    const createFloat32ArrayPositionsSvgPaths = (paths)=>{\n        // console.log(paths)\n        // console.log(shapes[selectedShape])\n        const pointsArray = [];\n        paths.forEach((path)=>{\n            const p = path.properties.d;\n            // console.log(p)\n            const normalizedPath = svg_path_commander__WEBPACK_IMPORTED_MODULE_3__[\"default\"].normalizePath(p);\n            //remove first element of array\n            // console.log(normalizedPath)\n            normalizedPath.forEach((stroke)=>{\n                stroke.shift();\n                // console.log(stroke)\n                for(let index = 0; index < stroke.length; index++){\n                    pointsArray.push(stroke[index]);\n                    if (index % 2 !== 0) {\n                        pointsArray.push(0);\n                    }\n                }\n            });\n        // const transform = {\n        //     translate: [15, 15, 15], // `[15, 15]` would apply a 2D translation, and only `15` for X axis translation\n        //     rotate: [15, 15, 15], // or only \"15\" for 2D rotation on Z axis\n        //     scale: [0.7, 0.75, 0.8], // or only \"0.7\" for 2D scale on all X, Y, Z axis\n        //     skew: [15, 15], // or only \"15\" for the X axis\n        //     origin: [15, 15, 15] // full `transform-origin` for a typical 3D transformation\n        // }\n        // const transformed3DPathString = new SVGPathCommander(normalizedPath).transform(transform);\n        // console.log(transformed3DPathString)\n        });\n        // console.log(pointsArray)\n        const normalizedArray = (0,_utils_utils3d__WEBPACK_IMPORTED_MODULE_5__.normalize)(pointsArray);\n        const float32Array = new Float32Array(normalizedArray);\n        return float32Array;\n    };\n    const createPointsFromShape = (shape)=>{\n        if (shape.curves.length > 0) {\n            positionsArrays.current.push(createPointsFromCurves(shape.curves, 30));\n        }\n        if (shape.holes.length > 0) {\n            shape.holes.forEach((hole, index)=>{\n                positionsArrays.current.push(createPointsFromCurves(hole.curves, 30));\n            });\n        }\n    };\n    const createPointsFromPaths = (paths)=>{\n        console.log({\n            paths\n        });\n        for(let i = 0; i < paths.length; i++){\n            const path = paths[i];\n            positionsArrays.current.push(createPointsFromCurves(path.currentPath.curves, 30));\n            path.subPaths.forEach((subPath)=>{\n                positionsArrays.current.push(createPointsFromCurves(subPath.curves, 30));\n            });\n        }\n        const merged = mergeFloat32Arrays(positionsArrays.current);\n        const normalizedArray = (0,_utils_utils3d__WEBPACK_IMPORTED_MODULE_5__.normalize)(merged);\n        // console.log(merged)\n        setPositions(normalizedArray);\n    };\n    const createPointsFromCurves = (curves, divisions)=>{\n        const points = [];\n        curves.forEach((curve)=>{\n            const pointsFromCurve = createPointsFromCurve(curve, divisions);\n            points.push(...pointsFromCurve);\n        });\n        return points;\n    };\n    const createPointsFromCurve = function(curve) {\n        let divisions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;\n        const points = [];\n        for(let i = 0; i < divisions; i++){\n            const point = curve.getPoint(i / divisions);\n            points.push(point.x, point.y, 0);\n        }\n        return points;\n    };\n    // console.log(positions)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: positions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Points_Points__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            positions: positions\n        }, void 0, false, {\n            fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\components\\\\IconCreater.js\",\n            lineNumber: 221,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(IconCreater, \"b7tuASPRJzUuoS777AL5BJeWmqI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = IconCreater;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconCreater);\nvar _c;\n$RefreshReg$(_c, \"IconCreater\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ljb25DcmVhdGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ2Y7QUFDYTtBQUNrQjtBQUNiO0FBQ3BCO0FBT3BCO0FBQzhCO0FBQzdDLE1BQU1lLGNBQWM7UUFBQyxFQUVuQkMsS0FBSyxFQUVOOztJQUNDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHaEIsK0NBQVFBO0lBQzFDLE1BQU1pQixXQUFXbEIsNkNBQU1BO0lBQ3ZCLE1BQU1tQixrQkFBa0JuQiw2Q0FBTUEsQ0FBQyxFQUFFO0lBQ2pDLE1BQU1vQixZQUFZZix3REFBV0EsQ0FBQyxDQUFDZ0IsUUFBVUEsTUFBTUMsTUFBTSxDQUFDRixTQUFTO0lBQy9ELHVGQUF1RjtJQUN2RixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsNkJBQTZCO0lBQzdCLGdEQUFnRDtJQUNoRCxvREFBb0Q7SUFDcEQsc0NBQXNDO0lBQ3RDLG9HQUFvRztJQUVwRyxxRUFBcUU7SUFDckUsWUFBWTtJQUVaLE1BQU07SUFFTixtQkFBbUI7SUFFbkIsTUFBTTtJQUNOLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHFDQUFxQztJQUVyQywrQkFBK0I7SUFFL0IsNENBQTRDO0lBQzVDLDJCQUEyQjtJQUMzQiw0RkFBNEY7SUFDNUYsd0JBQXdCO0lBQ3hCLDZEQUE2RDtJQUM3RCxPQUFPO0lBRVAsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtJQUM5QixNQUFNO0lBRU4sbUJBQW1CO0lBRW5CLE1BQU07SUFDTixhQUFhO0lBQ2JyQixnREFBU0EsQ0FBQztRQUNSd0IsUUFBUUMsR0FBRyxDQUFDSjtRQUNaLElBQUlBLFVBQVVLLE1BQU0sR0FBRyxHQUFHQyxTQUFTTixTQUFTLENBQUMsRUFBRTthQUMxQ0gsYUFBYTtJQUNwQixHQUFHO1FBQUNHO0tBQVU7SUFFZCxTQUFTTyxtQkFBbUJDLE1BQU07UUFDaEMsSUFBSUMsY0FBY0QsT0FBT0UsTUFBTSxDQUFDLENBQUNDLEtBQUtDLE1BQVFELE1BQU1DLElBQUlQLE1BQU0sRUFBRTtRQUNoRSxJQUFJUSxTQUFTLElBQUlDLGFBQWFMO1FBQzlCLElBQUlNLFNBQVM7UUFDYixLQUFLLElBQUlDLFNBQVNSLE9BQVE7WUFDeEJLLE9BQU9JLEdBQUcsQ0FBQ0QsT0FBT0Q7WUFDbEJBLFVBQVVDLE1BQU1YLE1BQU07UUFDeEI7UUFDQSxPQUFPUTtJQUNUO0lBQ0EsTUFBTVAsV0FBVyxDQUFDWTtRQUNoQixNQUFNQyxTQUFTLElBQUluQyw4RUFBU0E7UUFFNUJtQyxPQUFPQyxJQUFJLENBQ1QsZUFBZTtRQUNmRixTQUNBLHFDQUFxQztRQUNyQyxTQUFVRyxJQUFJO1lBQ1osTUFBTUMsUUFBUUQsS0FBS0MsS0FBSztZQUN4QixNQUFNQyxRQUFRLElBQUlsQyx3Q0FBS0E7WUFDdkJjLFFBQVFDLEdBQUcsQ0FBQztnQkFBRWtCO1lBQU07WUFDcEJFLHNCQUFzQkY7WUFDdEIsSUFBSyxJQUFJRyxJQUFJLEdBQUdBLElBQUlILE1BQU1qQixNQUFNLEVBQUVvQixJQUFLO2dCQUNyQyxNQUFNQyxPQUFPSixLQUFLLENBQUNHLEVBQUU7Z0JBQ3JCLE1BQU1FLFdBQVcsSUFBSXBDLG9EQUFpQkEsQ0FBQztvQkFDckNxQyxPQUFPRixLQUFLRSxLQUFLO29CQUNqQkMsTUFBTXpDLDZDQUFVQTtvQkFDaEIwQyxZQUFZO2dCQUNkO2dCQUVBLE1BQU01QixTQUFTbEIsOEVBQVNBLENBQUMrQyxZQUFZLENBQUNMO2dCQUN0Q3ZCLFFBQVFDLEdBQUcsQ0FBQztvQkFBRUY7Z0JBQU87Z0JBQ3JCLElBQUssSUFBSThCLElBQUksR0FBR0EsSUFBSTlCLE9BQU9HLE1BQU0sRUFBRTJCLElBQUs7b0JBQ3RDLE1BQU1DLFFBQVEvQixNQUFNLENBQUM4QixFQUFFO29CQUN2QixnQ0FBZ0M7b0JBQ2hDLE1BQU1FLFdBQVcsSUFBSTFDLGdEQUFhQSxDQUFDeUM7b0JBQ25DLDBCQUEwQjtvQkFDMUJDLFNBQVNDLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDcEIsS0FBSyxHQUFHdkIseURBQVNBLENBQzVDeUMsU0FBU0MsVUFBVSxDQUFDQyxRQUFRLENBQUNwQixLQUFLO29CQUVwQyxtRUFBbUU7b0JBQ25FLE1BQU1xQixPQUFPLElBQUkvQyx1Q0FBSUEsQ0FBQzRDLFVBQVVQO29CQUVoQ0osTUFBTWUsR0FBRyxDQUFDRDtnQkFDWjtZQUNGO1lBQ0FkLE1BQU1hLFFBQVEsQ0FBQ0csQ0FBQyxHQUFHO1lBQ25CekMsU0FBUzBDLE9BQU8sR0FBR2pCO1lBQ25CLHdDQUF3QztZQUV4QzVCLE1BQU0yQyxHQUFHLENBQUVmO1FBQ2IsR0FDQSx1Q0FBdUM7UUFDdkMsU0FBVWtCLEdBQUc7WUFDWHRDLFFBQVFDLEdBQUcsQ0FBQyxJQUFLc0MsTUFBTSxHQUFHRCxJQUFJRSxLQUFLLEdBQUksTUFBTTtRQUMvQyxHQUNBLGlDQUFpQztRQUNqQyxTQUFVQyxLQUFLO1lBQ2J6QyxRQUFRQyxHQUFHLENBQUMscUJBQXFCd0M7UUFDbkM7SUFFSjtJQUNBLE1BQU1DLHNDQUFzQyxDQUFDdkI7UUFDM0MscUJBQXFCO1FBQ3JCLHFDQUFxQztRQUNyQyxNQUFNd0IsY0FBYyxFQUFFO1FBQ3RCeEIsTUFBTXlCLE9BQU8sQ0FBQyxDQUFDckI7WUFDYixNQUFNc0IsSUFBSXRCLEtBQUt1QixVQUFVLENBQUNDLENBQUM7WUFDM0IsaUJBQWlCO1lBQ2pCLE1BQU1DLGlCQUFpQnBFLHdFQUE4QixDQUFDaUU7WUFDdEQsK0JBQStCO1lBRS9CLDhCQUE4QjtZQUM5QkcsZUFBZUosT0FBTyxDQUFDLENBQUNNO2dCQUN0QkEsT0FBT0MsS0FBSztnQkFDWixzQkFBc0I7Z0JBQ3RCLElBQUssSUFBSUMsUUFBUSxHQUFHQSxRQUFRRixPQUFPaEQsTUFBTSxFQUFFa0QsUUFBUztvQkFDbERULFlBQVlVLElBQUksQ0FBQ0gsTUFBTSxDQUFDRSxNQUFNO29CQUM5QixJQUFJQSxRQUFRLE1BQU0sR0FBRzt3QkFDbkJULFlBQVlVLElBQUksQ0FBQztvQkFDbkI7Z0JBQ0Y7WUFDRjtRQUNBLHNCQUFzQjtRQUN0QixnSEFBZ0g7UUFDaEgsc0VBQXNFO1FBQ3RFLGlGQUFpRjtRQUNqRixxREFBcUQ7UUFDckQsc0ZBQXNGO1FBQ3RGLElBQUk7UUFDSiw2RkFBNkY7UUFDN0YsdUNBQXVDO1FBQ3pDO1FBQ0EsMkJBQTJCO1FBQzNCLE1BQU1DLGtCQUFrQmhFLHlEQUFTQSxDQUFDcUQ7UUFDbEMsTUFBTVksZUFBZSxJQUFJNUMsYUFBYTJDO1FBQ3RDLE9BQU9DO0lBQ1Q7SUFFQSxNQUFNQyx3QkFBd0IsQ0FBQzFCO1FBQzdCLElBQUlBLE1BQU0yQixNQUFNLENBQUN2RCxNQUFNLEdBQUcsR0FBRztZQUMzQk4sZ0JBQWdCeUMsT0FBTyxDQUFDZ0IsSUFBSSxDQUFDSyx1QkFBdUI1QixNQUFNMkIsTUFBTSxFQUFFO1FBQ3BFO1FBQ0EsSUFBSTNCLE1BQU02QixLQUFLLENBQUN6RCxNQUFNLEdBQUcsR0FBRztZQUMxQjRCLE1BQU02QixLQUFLLENBQUNmLE9BQU8sQ0FBQyxDQUFDZ0IsTUFBTVI7Z0JBQ3pCeEQsZ0JBQWdCeUMsT0FBTyxDQUFDZ0IsSUFBSSxDQUFDSyx1QkFBdUJFLEtBQUtILE1BQU0sRUFBRTtZQUNuRTtRQUNGO0lBQ0Y7SUFDQSxNQUFNcEMsd0JBQXdCLENBQUNGO1FBQzdCbkIsUUFBUUMsR0FBRyxDQUFDO1lBQUVrQjtRQUFNO1FBQ3BCLElBQUssSUFBSUcsSUFBSSxHQUFHQSxJQUFJSCxNQUFNakIsTUFBTSxFQUFFb0IsSUFBSztZQUNyQyxNQUFNQyxPQUFPSixLQUFLLENBQUNHLEVBQUU7WUFDckIxQixnQkFBZ0J5QyxPQUFPLENBQUNnQixJQUFJLENBQzFCSyx1QkFBdUJuQyxLQUFLc0MsV0FBVyxDQUFDSixNQUFNLEVBQUU7WUFFbERsQyxLQUFLdUMsUUFBUSxDQUFDbEIsT0FBTyxDQUFDLENBQUNtQjtnQkFDckJuRSxnQkFBZ0J5QyxPQUFPLENBQUNnQixJQUFJLENBQzFCSyx1QkFBdUJLLFFBQVFOLE1BQU0sRUFBRTtZQUUzQztRQUNGO1FBQ0EsTUFBTU8sU0FBUzVELG1CQUFtQlIsZ0JBQWdCeUMsT0FBTztRQUN6RCxNQUFNaUIsa0JBQWtCaEUseURBQVNBLENBQUMwRTtRQUNsQyxzQkFBc0I7UUFDdEJ0RSxhQUFhNEQ7SUFDZjtJQUVBLE1BQU1JLHlCQUF5QixDQUFDRCxRQUFRUTtRQUN0QyxNQUFNQyxTQUFTLEVBQUU7UUFDakJULE9BQU9iLE9BQU8sQ0FBQyxDQUFDdUI7WUFDZCxNQUFNQyxrQkFBa0JDLHNCQUFzQkYsT0FBT0Y7WUFDckRDLE9BQU9iLElBQUksSUFBSWU7UUFDakI7UUFDQSxPQUFPRjtJQUNUO0lBRUEsTUFBTUcsd0JBQXdCLFNBQUNGO1lBQU9GLDZFQUFZO1FBQ2hELE1BQU1DLFNBQVMsRUFBRTtRQUNqQixJQUFLLElBQUk1QyxJQUFJLEdBQUdBLElBQUkyQyxXQUFXM0MsSUFBSztZQUNsQyxNQUFNZ0QsUUFBUUgsTUFBTUksUUFBUSxDQUFDakQsSUFBSTJDO1lBQ2pDQyxPQUFPYixJQUFJLENBQUNpQixNQUFNbEMsQ0FBQyxFQUFFa0MsTUFBTUUsQ0FBQyxFQUFFO1FBQ2hDO1FBQ0EsT0FBT047SUFDVDtJQUVBLHlCQUF5QjtJQUN6QixxQkFDRTtrQkFDR3pFLDJCQUNDLDhEQUFDZCxzREFBTUE7WUFDTGMsV0FBV0E7Ozs7Ozs7QUFNckI7R0FyTk1GOztRQVFjVCxvREFBV0E7OztLQVJ6QlM7QUF1Tk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JY29uQ3JlYXRlci5qcz9jNTdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUG9pbnRzIGZyb20gXCIuL1BvaW50cy9Qb2ludHNcIjtcclxuaW1wb3J0IFNWR1BhdGhDb21tYW5kZXIgZnJvbSBcInN2Zy1wYXRoLWNvbW1hbmRlclwiO1xyXG5pbXBvcnQgeyBTVkdMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvU1ZHTG9hZGVyLmpzXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gXCJzdmctcGFyc2VyXCI7XHJcbmltcG9ydCB7XHJcbiAgRG91YmxlU2lkZSxcclxuICBHcm91cCxcclxuICBNZXNoLFxyXG4gIE1lc2hCYXNpY01hdGVyaWFsLFxyXG4gIFNoYXBlR2VvbWV0cnksXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gXCIuLi91dGlscy91dGlsczNkXCI7XHJcbmNvbnN0IEljb25DcmVhdGVyID0gKHtcclxuXHJcbiAgc2NlbmUsXHJcbiAgLy8gdXJsID0gJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYy9jMy9QeXRob24tbG9nby1ub3RleHQuc3ZnJ1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW3Bvc2l0aW9ucywgc2V0UG9zaXRpb25zXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgZ3JvdXBSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBwb3NpdGlvbnNBcnJheXMgPSB1c2VSZWYoW10pO1xyXG4gIGNvbnN0IGljb25zVXJscyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2hhcGVzLmljb25zVXJscyk7XHJcbiAgLy8gICBjb25zdCBmb250ID0gdXNlTG9hZGVyKEZvbnRMb2FkZXIsICcuL3B1YmxpYy9mb250cy9Nb250c2VycmF0IEJsYWNrX0l0YWxpYy5qc29uJyk7XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmICh1cmwpIHtcclxuICAvLyAgICAgICBmZXRjaCh1cmwpXHJcbiAgLy8gICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gIC8vICAgICAgIC50aGVuKHN2Z1N0cmluZyA9PiB7XHJcbiAgLy8gICAgICAgICAgIGNvbnN0IHBhcnNlZFN2ZyA9IHBhcnNlKHN2Z1N0cmluZyk7XHJcbiAgLy8gICAgICAgICAgIC8vIE5vdyB5b3UgY2FuIHdvcmsgd2l0aCB0aGUgcGFyc2VkIFNWR1xyXG4gIC8vICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwYXJzZWRTdmcpXHJcbiAgLy8gICAgICAgICAgIGNvbnN0IHBhdGhzID0gcGFyc2VkU3ZnLmNoaWxkcmVuWzBdLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC50YWdOYW1lID09PSAncGF0aCcpO1xyXG5cclxuICAvLyAgICAgICAgICAgc2V0UG9zaXRpb25zKGNyZWF0ZUZsb2F0MzJBcnJheVBvc2l0aW9uc1N2Z1BhdGhzKHBhdGhzKSlcclxuICAvLyAgICAgICB9KTtcclxuXHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgcmV0dXJuICgpID0+IHtcclxuXHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW3VybF0pXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGZpbGUpXHJcbiAgLy8gICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAvLyAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcblxyXG4gIC8vICAgY29uc3QgcGFyc2VkU3ZnID0gcGFyc2UocmVhZGVyLnJlc3VsdCk7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhwYXJzZWRTdmcpXHJcbiAgLy8gICBjb25zdCBwYXRocyA9IHBhcnNlZFN2Zy5jaGlsZHJlblswXS5jaGlsZHJlbi5maWx0ZXIoY2hpbGQgPT4gY2hpbGQudGFnTmFtZSA9PT0gJ3BhdGgnKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKHBhdGhzKTtcclxuICAvLyAgIHNldFBvc2l0aW9ucyhjcmVhdGVGbG9hdDMyQXJyYXlQb3NpdGlvbnNTdmdQYXRocyhwYXRocykpXHJcbiAgLy8gICB9O1xyXG5cclxuICAvLyAgIGlmIChmaWxlKSB7XHJcbiAgLy8gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgcmV0dXJuICgpID0+IHtcclxuXHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW2ZpbGVdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpY29uc1VybHMpXHJcbiAgICBpZiAoaWNvbnNVcmxzLmxlbmd0aCA+IDApIGxvYWRJY29uKGljb25zVXJsc1swXSk7XHJcbiAgICBlbHNlIHNldFBvc2l0aW9ucyhudWxsKTtcclxuICB9LCBbaWNvbnNVcmxzXSk7XHJcblxyXG4gIGZ1bmN0aW9uIG1lcmdlRmxvYXQzMkFycmF5cyhhcnJheXMpIHtcclxuICAgIGxldCB0b3RhbExlbmd0aCA9IGFycmF5cy5yZWR1Y2UoKGFjYywgdmFsKSA9PiBhY2MgKyB2YWwubGVuZ3RoLCAwKTtcclxuICAgIGxldCByZXN1bHQgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsTGVuZ3RoKTtcclxuICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICAgZm9yIChsZXQgYXJyYXkgb2YgYXJyYXlzKSB7XHJcbiAgICAgIHJlc3VsdC5zZXQoYXJyYXksIG9mZnNldCk7XHJcbiAgICAgIG9mZnNldCArPSBhcnJheS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBjb25zdCBsb2FkSWNvbiA9IChpY29uVXJsKSA9PiB7XHJcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgU1ZHTG9hZGVyKCk7XHJcblxyXG4gICAgbG9hZGVyLmxvYWQoXHJcbiAgICAgIC8vIHJlc291cmNlIFVSTFxyXG4gICAgICBpY29uVXJsLFxyXG4gICAgICAvLyBjYWxsZWQgd2hlbiB0aGUgcmVzb3VyY2UgaXMgbG9hZGVkXHJcbiAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aHMgPSBkYXRhLnBhdGhzO1xyXG4gICAgICAgIGNvbnN0IGdyb3VwID0gbmV3IEdyb3VwKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coeyBwYXRocyB9KTtcclxuICAgICAgICBjcmVhdGVQb2ludHNGcm9tUGF0aHMocGF0aHMpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGNvbnN0IHBhdGggPSBwYXRoc1tpXTtcclxuICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IE1lc2hCYXNpY01hdGVyaWFsKHtcclxuICAgICAgICAgICAgY29sb3I6IHBhdGguY29sb3IsXHJcbiAgICAgICAgICAgIHNpZGU6IERvdWJsZVNpZGUsXHJcbiAgICAgICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgY29uc3Qgc2hhcGVzID0gU1ZHTG9hZGVyLmNyZWF0ZVNoYXBlcyhwYXRoKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHsgc2hhcGVzIH0pO1xyXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGFwZXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBzaGFwZXNbal07XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZVBvaW50c0Zyb21TaGFwZShzaGFwZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFNoYXBlR2VvbWV0cnkoc2hhcGUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7Z2VvbWV0cnl9KVxyXG4gICAgICAgICAgICBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5ID0gbm9ybWFsaXplKFxyXG4gICAgICAgICAgICAgIGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gcG9zaXRpb25zQXJyYXlzLmN1cnJlbnQucHVzaChnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5KVxyXG4gICAgICAgICAgICBjb25zdCBtZXNoID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBncm91cC5hZGQobWVzaCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyb3VwLnBvc2l0aW9uLnggPSAyXHJcbiAgICAgICAgZ3JvdXBSZWYuY3VycmVudCA9IGdyb3VwO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHBvc2l0aW9uc0FycmF5cy5jdXJyZW50KTtcclxuXHJcbiAgICAgICAgc2NlbmUuYWRkKCBncm91cCApO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyBjYWxsZWQgd2hlbiBsb2FkaW5nIGlzIGluIHByb2dyZXNzZXNcclxuICAgICAgZnVuY3Rpb24gKHhocikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCh4aHIubG9hZGVkIC8geGhyLnRvdGFsKSAqIDEwMCArIFwiJSBsb2FkZWRcIik7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIGNhbGxlZCB3aGVuIGxvYWRpbmcgaGFzIGVycm9yc1xyXG4gICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFuIGVycm9yIGhhcHBlbmVkXCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG4gIGNvbnN0IGNyZWF0ZUZsb2F0MzJBcnJheVBvc2l0aW9uc1N2Z1BhdGhzID0gKHBhdGhzKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwYXRocylcclxuICAgIC8vIGNvbnNvbGUubG9nKHNoYXBlc1tzZWxlY3RlZFNoYXBlXSlcclxuICAgIGNvbnN0IHBvaW50c0FycmF5ID0gW107XHJcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHAgPSBwYXRoLnByb3BlcnRpZXMuZDtcclxuICAgICAgLy8gY29uc29sZS5sb2cocClcclxuICAgICAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBTVkdQYXRoQ29tbWFuZGVyLm5vcm1hbGl6ZVBhdGgocCk7XHJcbiAgICAgIC8vcmVtb3ZlIGZpcnN0IGVsZW1lbnQgb2YgYXJyYXlcclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKG5vcm1hbGl6ZWRQYXRoKVxyXG4gICAgICBub3JtYWxpemVkUGF0aC5mb3JFYWNoKChzdHJva2UpID0+IHtcclxuICAgICAgICBzdHJva2Uuc2hpZnQoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdHJva2UpXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHN0cm9rZS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgIHBvaW50c0FycmF5LnB1c2goc3Ryb2tlW2luZGV4XSk7XHJcbiAgICAgICAgICBpZiAoaW5kZXggJSAyICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHBvaW50c0FycmF5LnB1c2goMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgLy8gY29uc3QgdHJhbnNmb3JtID0ge1xyXG4gICAgICAvLyAgICAgdHJhbnNsYXRlOiBbMTUsIDE1LCAxNV0sIC8vIGBbMTUsIDE1XWAgd291bGQgYXBwbHkgYSAyRCB0cmFuc2xhdGlvbiwgYW5kIG9ubHkgYDE1YCBmb3IgWCBheGlzIHRyYW5zbGF0aW9uXHJcbiAgICAgIC8vICAgICByb3RhdGU6IFsxNSwgMTUsIDE1XSwgLy8gb3Igb25seSBcIjE1XCIgZm9yIDJEIHJvdGF0aW9uIG9uIFogYXhpc1xyXG4gICAgICAvLyAgICAgc2NhbGU6IFswLjcsIDAuNzUsIDAuOF0sIC8vIG9yIG9ubHkgXCIwLjdcIiBmb3IgMkQgc2NhbGUgb24gYWxsIFgsIFksIFogYXhpc1xyXG4gICAgICAvLyAgICAgc2tldzogWzE1LCAxNV0sIC8vIG9yIG9ubHkgXCIxNVwiIGZvciB0aGUgWCBheGlzXHJcbiAgICAgIC8vICAgICBvcmlnaW46IFsxNSwgMTUsIDE1XSAvLyBmdWxsIGB0cmFuc2Zvcm0tb3JpZ2luYCBmb3IgYSB0eXBpY2FsIDNEIHRyYW5zZm9ybWF0aW9uXHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gY29uc3QgdHJhbnNmb3JtZWQzRFBhdGhTdHJpbmcgPSBuZXcgU1ZHUGF0aENvbW1hbmRlcihub3JtYWxpemVkUGF0aCkudHJhbnNmb3JtKHRyYW5zZm9ybSk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRyYW5zZm9ybWVkM0RQYXRoU3RyaW5nKVxyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwb2ludHNBcnJheSlcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRBcnJheSA9IG5vcm1hbGl6ZShwb2ludHNBcnJheSk7XHJcbiAgICBjb25zdCBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KG5vcm1hbGl6ZWRBcnJheSk7XHJcbiAgICByZXR1cm4gZmxvYXQzMkFycmF5O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBvaW50c0Zyb21TaGFwZSA9IChzaGFwZSkgPT4ge1xyXG4gICAgaWYgKHNoYXBlLmN1cnZlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHBvc2l0aW9uc0FycmF5cy5jdXJyZW50LnB1c2goY3JlYXRlUG9pbnRzRnJvbUN1cnZlcyhzaGFwZS5jdXJ2ZXMsIDMwKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2hhcGUuaG9sZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBzaGFwZS5ob2xlcy5mb3JFYWNoKChob2xlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHBvc2l0aW9uc0FycmF5cy5jdXJyZW50LnB1c2goY3JlYXRlUG9pbnRzRnJvbUN1cnZlcyhob2xlLmN1cnZlcywgMzApKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBjcmVhdGVQb2ludHNGcm9tUGF0aHMgPSAocGF0aHMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHsgcGF0aHMgfSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHBhdGggPSBwYXRoc1tpXTtcclxuICAgICAgcG9zaXRpb25zQXJyYXlzLmN1cnJlbnQucHVzaChcclxuICAgICAgICBjcmVhdGVQb2ludHNGcm9tQ3VydmVzKHBhdGguY3VycmVudFBhdGguY3VydmVzLCAzMClcclxuICAgICAgKTtcclxuICAgICAgcGF0aC5zdWJQYXRocy5mb3JFYWNoKChzdWJQYXRoKSA9PiB7XHJcbiAgICAgICAgcG9zaXRpb25zQXJyYXlzLmN1cnJlbnQucHVzaChcclxuICAgICAgICAgIGNyZWF0ZVBvaW50c0Zyb21DdXJ2ZXMoc3ViUGF0aC5jdXJ2ZXMsIDMwKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWVyZ2VkID0gbWVyZ2VGbG9hdDMyQXJyYXlzKHBvc2l0aW9uc0FycmF5cy5jdXJyZW50KTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRBcnJheSA9IG5vcm1hbGl6ZShtZXJnZWQpO1xyXG4gICAgLy8gY29uc29sZS5sb2cobWVyZ2VkKVxyXG4gICAgc2V0UG9zaXRpb25zKG5vcm1hbGl6ZWRBcnJheSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY3JlYXRlUG9pbnRzRnJvbUN1cnZlcyA9IChjdXJ2ZXMsIGRpdmlzaW9ucykgPT4ge1xyXG4gICAgY29uc3QgcG9pbnRzID0gW107XHJcbiAgICBjdXJ2ZXMuZm9yRWFjaCgoY3VydmUpID0+IHtcclxuICAgICAgY29uc3QgcG9pbnRzRnJvbUN1cnZlID0gY3JlYXRlUG9pbnRzRnJvbUN1cnZlKGN1cnZlLCBkaXZpc2lvbnMpO1xyXG4gICAgICBwb2ludHMucHVzaCguLi5wb2ludHNGcm9tQ3VydmUpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcG9pbnRzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBvaW50c0Zyb21DdXJ2ZSA9IChjdXJ2ZSwgZGl2aXNpb25zID0gMTApID0+IHtcclxuICAgIGNvbnN0IHBvaW50cyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXZpc2lvbnM7IGkrKykge1xyXG4gICAgICBjb25zdCBwb2ludCA9IGN1cnZlLmdldFBvaW50KGkgLyBkaXZpc2lvbnMpO1xyXG4gICAgICBwb2ludHMucHVzaChwb2ludC54LCBwb2ludC55LCAwKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwb2ludHM7XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cocG9zaXRpb25zKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7cG9zaXRpb25zICYmIChcclxuICAgICAgICA8UG9pbnRzXHJcbiAgICAgICAgICBwb3NpdGlvbnM9e3Bvc2l0aW9uc31cclxuICAgICAgICAgIC8vIHRhcmdldFBvc2l0aW9ucz17c2hhcGVzW3NlbGVjdGVkU2hhcGVdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWNvbkNyZWF0ZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlBvaW50cyIsIlNWR1BhdGhDb21tYW5kZXIiLCJTVkdMb2FkZXIiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwicGFyc2UiLCJEb3VibGVTaWRlIiwiR3JvdXAiLCJNZXNoIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJTaGFwZUdlb21ldHJ5Iiwibm9ybWFsaXplIiwiSWNvbkNyZWF0ZXIiLCJzY2VuZSIsInBvc2l0aW9ucyIsInNldFBvc2l0aW9ucyIsImdyb3VwUmVmIiwicG9zaXRpb25zQXJyYXlzIiwiaWNvbnNVcmxzIiwic3RhdGUiLCJzaGFwZXMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibG9hZEljb24iLCJtZXJnZUZsb2F0MzJBcnJheXMiLCJhcnJheXMiLCJ0b3RhbExlbmd0aCIsInJlZHVjZSIsImFjYyIsInZhbCIsInJlc3VsdCIsIkZsb2F0MzJBcnJheSIsIm9mZnNldCIsImFycmF5Iiwic2V0IiwiaWNvblVybCIsImxvYWRlciIsImxvYWQiLCJkYXRhIiwicGF0aHMiLCJncm91cCIsImNyZWF0ZVBvaW50c0Zyb21QYXRocyIsImkiLCJwYXRoIiwibWF0ZXJpYWwiLCJjb2xvciIsInNpZGUiLCJkZXB0aFdyaXRlIiwiY3JlYXRlU2hhcGVzIiwiaiIsInNoYXBlIiwiZ2VvbWV0cnkiLCJhdHRyaWJ1dGVzIiwicG9zaXRpb24iLCJtZXNoIiwiYWRkIiwieCIsImN1cnJlbnQiLCJ4aHIiLCJsb2FkZWQiLCJ0b3RhbCIsImVycm9yIiwiY3JlYXRlRmxvYXQzMkFycmF5UG9zaXRpb25zU3ZnUGF0aHMiLCJwb2ludHNBcnJheSIsImZvckVhY2giLCJwIiwicHJvcGVydGllcyIsImQiLCJub3JtYWxpemVkUGF0aCIsIm5vcm1hbGl6ZVBhdGgiLCJzdHJva2UiLCJzaGlmdCIsImluZGV4IiwicHVzaCIsIm5vcm1hbGl6ZWRBcnJheSIsImZsb2F0MzJBcnJheSIsImNyZWF0ZVBvaW50c0Zyb21TaGFwZSIsImN1cnZlcyIsImNyZWF0ZVBvaW50c0Zyb21DdXJ2ZXMiLCJob2xlcyIsImhvbGUiLCJjdXJyZW50UGF0aCIsInN1YlBhdGhzIiwic3ViUGF0aCIsIm1lcmdlZCIsImRpdmlzaW9ucyIsInBvaW50cyIsImN1cnZlIiwicG9pbnRzRnJvbUN1cnZlIiwiY3JlYXRlUG9pbnRzRnJvbUN1cnZlIiwicG9pbnQiLCJnZXRQb2ludCIsInkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/IconCreater.js\n"));

/***/ })

});