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

/***/ "./pages/playground/Scene.js":
/*!***********************************!*\
  !*** ./pages/playground/Scene.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Points_Points__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Points/Points */ \"./components/Points/Points.js\");\n/* harmony import */ var flatten_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatten-svg */ \"./node_modules/flatten-svg/dist/index.js\");\n/* harmony import */ var _public_hdr_maps_studio_small_06_1k_hdr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/hdr_maps/studio_small_06_1k.hdr */ \"./public/hdr_maps/studio_small_06_1k.hdr\");\n/* harmony import */ var _components_MyText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MyText */ \"./components/MyText.js\");\n/* harmony import */ var _components_IconCreater__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/IconCreater */ \"./components/IconCreater.js\");\n/* harmony import */ var _components_RFModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/RFModel */ \"./components/RFModel.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @react-three/drei */ \"./node_modules/@react-three/drei/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.legacy-esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst Scene = (param)=>{\n    let { // selectedShape,\n    shapes, showPoints, logId, iconFile, modelUrl } = param;\n    _s();\n    const { gl: renderer, scene, camera } = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_8__.useThree)();\n    const modelsUrls = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.models.modelUrls);\n    const selectedShape = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.shapes.selectedShape);\n    const positions = shapes[selectedShape];\n    const hdrMap = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_10__.useEnvironment)({\n        files: _public_hdr_maps_studio_small_06_1k_hdr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        camera.position.set(0, 0, -3); // replace x, y, z with your desired position\n        camera.lookAt(0, 0, 0); // adjust this as needed\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (logId) {\n            createMP4FromScene();\n        }\n        return ()=>{};\n    }, [\n        logId\n    ]);\n    const createImageFromScene = ()=>{\n        // Manually render a frame\n        renderer.render(scene, camera);\n        const dataURL = renderer.domElement.toDataURL(\"image/png\");\n        const link = document.createElement(\"a\");\n        link.download = \"screenshot.png\";\n        link.href = dataURL;\n        link.click();\n    };\n    const createMP4FromScene = ()=>{\n        let chunks = [];\n        let recorder;\n        const startRecording = ()=>{\n            let stream = renderer.domElement.captureStream(60); // 25 FPS\n            recorder = new MediaRecorder(stream);\n            recorder.ondataavailable = (event)=>chunks.push(event.data);\n            recorder.start();\n        };\n        const stopRecording = ()=>{\n            recorder.onstop = (event)=>{\n                let blob = new Blob(chunks, {\n                    type: \"video/mp4\"\n                });\n                let url = URL.createObjectURL(blob);\n                let link = document.createElement(\"a\");\n                link.href = url;\n                link.download = \"output.mp4\";\n                link.click();\n            };\n            recorder.stop();\n        };\n        startRecording();\n        // Stop recording after 5 seconds\n        setTimeout(stopRecording, 5000);\n    };\n    const Models = (param)=>{\n        let { urls } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"group\", {\n            children: urls.map((url, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RFModel__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    scene: scene,\n                    modelUrl: url\n                }, index, false, {\n                    fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\pages\\\\playground\\\\Scene.js\",\n                    lineNumber: 86,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\pages\\\\playground\\\\Scene.js\",\n            lineNumber: 84,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_IconCreater__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                scene: scene,\n                url: iconFile\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\pages\\\\playground\\\\Scene.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Models, {\n                urls: modelsUrls\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\pages\\\\playground\\\\Scene.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_10__.Environment, {\n                map: hdrMap\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\pages\\\\playground\\\\Scene.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            positions && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Points_Points__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                selectedShape: selectedShape,\n                positions: shapes[selectedShape]\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\Ticketing\\\\client\\\\pages\\\\playground\\\\Scene.js\",\n                lineNumber: 100,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Scene, \"9jBTdPyD9Az5/OHEyqEnFyb6SOE=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_8__.useThree,\n        react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector,\n        _react_three_drei__WEBPACK_IMPORTED_MODULE_10__.useEnvironment\n    ];\n});\n_c = Scene;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\nvar _c;\n$RefreshReg$(_c, \"Scene\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzRELEtBQUt6Qzs7Ozs7O1lBQ2pCRCwyQkFDQyw4REFBQ3hCLGlFQUFNQTtnQkFDTHVCLGVBQWVBO2dCQUNmQyxXQUFXZCxNQUFNLENBQUNhLGNBQWM7Ozs7Ozs7O0FBTTFDO0dBL0ZNZDs7UUFRb0NkLHdEQUFRQTtRQUM3QmEsb0RBQVdBO1FBQ1JBLG9EQUFXQTtRQUVsQkQsOERBQWNBOzs7S0FaekJFO0FBaUdOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BsYXlncm91bmQvU2NlbmUuanM/MzdkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNoLCBCb3hHZW9tZXRyeSwgTWVzaEJhc2ljTWF0ZXJpYWwgfSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgdXNlRnJhbWUsIHVzZVRocmVlLCB1c2VMb2FkZXIgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUG9pbnRzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BvaW50cy9Qb2ludHNcIjtcclxuXHJcbmltcG9ydCB7IGZsYXR0ZW5TVkcgfSBmcm9tIFwiZmxhdHRlbi1zdmdcIjtcclxuaW1wb3J0IGVudmlyb21lbnRNYXAgZnJvbSAnLi4vLi4vcHVibGljL2hkcl9tYXBzL3N0dWRpb19zbWFsbF8wNl8xay5oZHInXHJcbmltcG9ydCBNeVRleHQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTXlUZXh0XCI7XHJcbmltcG9ydCBJY29uQ3JlYXRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9JY29uQ3JlYXRlclwiO1xyXG5pbXBvcnQgUkZNb2RlbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SRk1vZGVsXCI7XHJcbmltcG9ydCB7IEVudmlyb25tZW50LCB1c2VFbnZpcm9ubWVudCB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZHJlaVwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5jb25zdCBTY2VuZSA9ICh7XHJcbiAgLy8gc2VsZWN0ZWRTaGFwZSxcclxuICBzaGFwZXMsXHJcbiAgc2hvd1BvaW50cyxcclxuICBsb2dJZCxcclxuICBpY29uRmlsZSxcclxuICBtb2RlbFVybCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgZ2w6IHJlbmRlcmVyLCBzY2VuZSwgY2FtZXJhIH0gPSB1c2VUaHJlZSgpO1xyXG4gIGNvbnN0IG1vZGVsc1VybHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLm1vZGVscy5tb2RlbFVybHMpO1xyXG4gIGNvbnN0IHNlbGVjdGVkU2hhcGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNoYXBlcy5zZWxlY3RlZFNoYXBlKTtcclxuICBjb25zdCBwb3NpdGlvbnMgPSBzaGFwZXNbc2VsZWN0ZWRTaGFwZV07XHJcbiAgY29uc3QgaGRyTWFwID0gdXNlRW52aXJvbm1lbnQoe1xyXG4gICAgZmlsZXM6IGVudmlyb21lbnRNYXAsXHJcbiAgfSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgMCwgLTMpOyAvLyByZXBsYWNlIHgsIHksIHogd2l0aCB5b3VyIGRlc2lyZWQgcG9zaXRpb25cclxuICAgIGNhbWVyYS5sb29rQXQoMCwgMCwgMCk7IC8vIGFkanVzdCB0aGlzIGFzIG5lZWRlZFxyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvZ0lkKSB7XHJcbiAgICAgIGNyZWF0ZU1QNEZyb21TY2VuZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7fTtcclxuICB9LCBbbG9nSWRdKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlSW1hZ2VGcm9tU2NlbmUgPSAoKSA9PiB7XHJcbiAgICAvLyBNYW51YWxseSByZW5kZXIgYSBmcmFtZVxyXG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG5cclxuICAgIGNvbnN0IGRhdGFVUkwgPSByZW5kZXJlci5kb21FbGVtZW50LnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGxpbmsuZG93bmxvYWQgPSBcInNjcmVlbnNob3QucG5nXCI7XHJcbiAgICBsaW5rLmhyZWYgPSBkYXRhVVJMO1xyXG4gICAgbGluay5jbGljaygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNyZWF0ZU1QNEZyb21TY2VuZSA9ICgpID0+IHtcclxuICAgIGxldCBjaHVua3MgPSBbXTtcclxuICAgIGxldCByZWNvcmRlcjtcclxuXHJcbiAgICBjb25zdCBzdGFydFJlY29yZGluZyA9ICgpID0+IHtcclxuICAgICAgbGV0IHN0cmVhbSA9IHJlbmRlcmVyLmRvbUVsZW1lbnQuY2FwdHVyZVN0cmVhbSg2MCk7IC8vIDI1IEZQU1xyXG4gICAgICByZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSk7XHJcbiAgICAgIHJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChldmVudCkgPT4gY2h1bmtzLnB1c2goZXZlbnQuZGF0YSk7XHJcbiAgICAgIHJlY29yZGVyLnN0YXJ0KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN0b3BSZWNvcmRpbmcgPSAoKSA9PiB7XHJcbiAgICAgIHJlY29yZGVyLm9uc3RvcCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoY2h1bmtzLCB7IHR5cGU6IFwidmlkZW8vbXA0XCIgfSk7XHJcbiAgICAgICAgbGV0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgbGluay5kb3dubG9hZCA9IFwib3V0cHV0Lm1wNFwiO1xyXG4gICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgfTtcclxuICAgICAgcmVjb3JkZXIuc3RvcCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdGFydFJlY29yZGluZygpO1xyXG5cclxuICAgIC8vIFN0b3AgcmVjb3JkaW5nIGFmdGVyIDUgc2Vjb25kc1xyXG4gICAgc2V0VGltZW91dChzdG9wUmVjb3JkaW5nLCA1MDAwKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IE1vZGVscyA9ICh7XHJcbiAgICB1cmxzXHJcbiAgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGdyb3VwPlxyXG4gICAgICAgIHt1cmxzLm1hcCgodXJsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFJGTW9kZWwga2V5PXtpbmRleH0gc2NlbmU9e3NjZW5lfSBtb2RlbFVybD17dXJsfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2dyb3VwPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSAvPiAqL31cclxuICAgICAgey8qIDxNeVRleHQgc2NlbmU9e3NjZW5lfSAvPiAqL31cclxuICAgICAgPEljb25DcmVhdGVyIHNjZW5lPXtzY2VuZX0gdXJsPXtpY29uRmlsZX0gLz5cclxuICAgICAgPE1vZGVscyB1cmxzPXttb2RlbHNVcmxzfSAvPlxyXG4gICAgICB7Lyoge21vZGVsVXJsICYmIDxSRk1vZGVsIHNjZW5lPXtzY2VuZX0gbW9kZWxVcmw9e21vZGVsVXJsfSAvPn0gKi99XHJcbiAgICAgIDxFbnZpcm9ubWVudCBtYXA9e2hkck1hcH0gLz5cclxuICAgICAge3Bvc2l0aW9ucyAmJiAoXHJcbiAgICAgICAgPFBvaW50c1xyXG4gICAgICAgICAgc2VsZWN0ZWRTaGFwZT17c2VsZWN0ZWRTaGFwZX1cclxuICAgICAgICAgIHBvc2l0aW9ucz17c2hhcGVzW3NlbGVjdGVkU2hhcGVdfVxyXG4gICAgICAgICAgLy8gdGFyZ2V0UG9zaXRpb25zPXtzaGFwZXNbc2VsZWN0ZWRTaGFwZV19XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY2VuZTtcclxuIl0sIm5hbWVzIjpbIk1lc2giLCJCb3hHZW9tZXRyeSIsIk1lc2hCYXNpY01hdGVyaWFsIiwidXNlRnJhbWUiLCJ1c2VUaHJlZSIsInVzZUxvYWRlciIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUG9pbnRzIiwiZmxhdHRlblNWRyIsImVudmlyb21lbnRNYXAiLCJNeVRleHQiLCJJY29uQ3JlYXRlciIsIlJGTW9kZWwiLCJFbnZpcm9ubWVudCIsInVzZUVudmlyb25tZW50IiwidXNlU2VsZWN0b3IiLCJTY2VuZSIsInNoYXBlcyIsInNob3dQb2ludHMiLCJsb2dJZCIsImljb25GaWxlIiwibW9kZWxVcmwiLCJnbCIsInJlbmRlcmVyIiwic2NlbmUiLCJjYW1lcmEiLCJtb2RlbHNVcmxzIiwic3RhdGUiLCJtb2RlbHMiLCJtb2RlbFVybHMiLCJzZWxlY3RlZFNoYXBlIiwicG9zaXRpb25zIiwiaGRyTWFwIiwiZmlsZXMiLCJwb3NpdGlvbiIsInNldCIsImxvb2tBdCIsImNyZWF0ZU1QNEZyb21TY2VuZSIsImNyZWF0ZUltYWdlRnJvbVNjZW5lIiwicmVuZGVyIiwiZGF0YVVSTCIsImRvbUVsZW1lbnQiLCJ0b0RhdGFVUkwiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZG93bmxvYWQiLCJocmVmIiwiY2xpY2siLCJjaHVua3MiLCJyZWNvcmRlciIsInN0YXJ0UmVjb3JkaW5nIiwic3RyZWFtIiwiY2FwdHVyZVN0cmVhbSIsIk1lZGlhUmVjb3JkZXIiLCJvbmRhdGFhdmFpbGFibGUiLCJldmVudCIsInB1c2giLCJkYXRhIiwic3RhcnQiLCJzdG9wUmVjb3JkaW5nIiwib25zdG9wIiwiYmxvYiIsIkJsb2IiLCJ0eXBlIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic3RvcCIsInNldFRpbWVvdXQiLCJNb2RlbHMiLCJ1cmxzIiwiZ3JvdXAiLCJtYXAiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/playground/Scene.js\n"));

/***/ })

});