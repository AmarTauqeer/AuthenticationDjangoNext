"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account/reset_password/[uid]/[token]",{

/***/ "./pages/account/reset_password/[uid]/[token]/index.js":
/*!*************************************************************!*\
  !*** ./pages/account/reset_password/[uid]/[token]/index.js ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Index = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { uid, token } = router.query;\n    console.log(uid + \"\" + token);\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [reNewPassword, setReNewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleReset = async (e)=>{\n        e.preventDefault();\n        if (uid !== undefined && token !== undefined) {\n            const res = await fetch(\"http://127.0.0.1:8000/account/reset_password_confirm\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-type\": \"application/json; charset=UTF-8\"\n                },\n                credentials: \"include\",\n                body: JSON.stringify({\n                    uid,\n                    token\n                })\n            });\n            const response = setMessage(\"Password reset successful.\");\n        }\n    // // verify token\n    // const res = await fetch(`http://127.0.0.1:8000/token/`);\n    // const result = await res.json();\n    // console.log(result);\n    // console.log(token);\n    // if (token !== undefined) {\n    //   const filterToken = await result.filter((r) => r.token === token);\n    //   // console.log(filterToken[0].user);\n    //   const id=filterToken[0].user\n    //   const userData = async (id) => {\n    //     const udata = await fetch(`http://127.0.0.1:8000/users/`);\n    //     const res = await udata.json();\n    //     const filterUsers = res.filter((r) => r.id === id);\n    //     return filterUsers;\n    //   };\n    //   const users= await userData(id)\n    //   if (filterToken.length === 1) {\n    //     await fetch(`http://127.0.0.1:8000/update/${id}`, {\n    //       method: \"PATCH\",\n    //       headers: {\n    //         \"Content-type\": \"application/json; charset=UTF-8\",\n    //         // Authorization: `Bearer ${token}`,\n    //       },\n    //       body: JSON.stringify({\n    //         id,\n    //         name:users[0].name,\n    //         email:users[0].email,\n    //         password,\n    //         is_active: users[0].is_active,\n    //       }),\n    //     });\n    //     setMessage(`Password reset successfull.`);\n    //   }\n    // }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full items-center justify-center mb-5 text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-3xl font-bold mt-5 mb-5\",\n                    children: \"Reset Password\"\n                }, void 0, false, {\n                    fileName: \"/home/amar-tauqeer/D/Projects/nextjs-tutorial/AuthProject/frontend/pages/account/reset_password/[uid]/[token]/index.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        className: \"p-2 block w-[30%] h-[40px] rounded-md border-0\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value),\n                        placeholder: \"enter new password\"\n                    }, void 0, false, {\n                        fileName: \"/home/amar-tauqeer/D/Projects/nextjs-tutorial/AuthProject/frontend/pages/account/reset_password/[uid]/[token]/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/amar-tauqeer/D/Projects/nextjs-tutorial/AuthProject/frontend/pages/account/reset_password/[uid]/[token]/index.js\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        className: \"p-2 block w-[30%] h-[40px] rounded-md border-0\",\n                        value: reNewPassword,\n                        onChange: (e)=>setReNewPassword(e.target.value),\n                        placeholder: \"re enter new password\"\n                    }, void 0, false, {\n                        fileName: \"/home/amar-tauqeer/D/Projects/nextjs-tutorial/AuthProject/frontend/pages/account/reset_password/[uid]/[token]/index.js\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/amar-tauqeer/D/Projects/nextjs-tutorial/AuthProject/frontend/pages/account/reset_password/[uid]/[token]/index.js\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: handleReset,\n                        href: \"#\",\n                        className: \"w-[30%] ml-3 border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white\",\n                        children: \"Rest Password\"\n                    }, void 0, false, {\n                        fileName: \"/home/amar-tauqeer/D/Projects/nextjs-tutorial/AuthProject/frontend/pages/account/reset_password/[uid]/[token]/index.js\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/amar-tauqeer/D/Projects/nextjs-tutorial/AuthProject/frontend/pages/account/reset_password/[uid]/[token]/index.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[90%] flex items-center justify-center mt-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"bg-green-500 text-lg text-white text-center\",\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"/home/amar-tauqeer/D/Projects/nextjs-tutorial/AuthProject/frontend/pages/account/reset_password/[uid]/[token]/index.js\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/amar-tauqeer/D/Projects/nextjs-tutorial/AuthProject/frontend/pages/account/reset_password/[uid]/[token]/index.js\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/amar-tauqeer/D/Projects/nextjs-tutorial/AuthProject/frontend/pages/account/reset_password/[uid]/[token]/index.js\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/amar-tauqeer/D/Projects/nextjs-tutorial/AuthProject/frontend/pages/account/reset_password/[uid]/[token]/index.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"/6BHtUjfXzBaU/SNbls7vaKgf6k=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50L3Jlc2V0X3Bhc3N3b3JkL1t1aWRdL1t0b2tlbl0vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ1c7QUFFSjtBQUUvQyxNQUFNSyxRQUFROztJQUNaLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVPLEdBQUcsRUFBRUMsS0FBSyxFQUFFLEdBQUdGLE9BQU9HO0lBQzlCQyxRQUFRQyxJQUFJSixNQUFNLEtBQUtDO0lBQ3ZCLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYSxlQUFlQyxpQkFBaUIsR0FBR2QsK0NBQVFBLENBQUM7SUFFbkQsTUFBTWUsY0FBYyxPQUFPQztRQUN6QkEsRUFBRUM7UUFFRixJQUFJYixRQUFNYyxhQUFhYixVQUFRYSxXQUFXO1lBQ3hDLE1BQU1DLE1BQU0sTUFBTUMsTUFBTyx3REFBdUQ7Z0JBQzlFQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLGFBQVk7Z0JBQ1pDLE1BQU1DLEtBQUtDLFVBQVU7b0JBQ25CdEI7b0JBQ0FDO2dCQUNGO1lBQ0Y7WUFFQSxNQUFNc0IsV0FDTmYsV0FBWTtRQUNkO0lBRUEsa0JBQWtCO0lBQ2xCLDJEQUEyRDtJQUMzRCxtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsdUVBQXVFO0lBRXZFLHlDQUF5QztJQUN6QyxpQ0FBaUM7SUFFakMscUNBQXFDO0lBQ3JDLGlFQUFpRTtJQUNqRSxzQ0FBc0M7SUFDdEMsMERBQTBEO0lBQzFELDBCQUEwQjtJQUMxQixPQUFPO0lBRVAsb0NBQW9DO0lBRXBDLG9DQUFvQztJQUNwQywwREFBMEQ7SUFDMUQseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQiw2REFBNkQ7SUFDN0QsK0NBQStDO0lBQy9DLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsb0JBQW9CO0lBQ3BCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osVUFBVTtJQUVWLGlEQUFpRDtJQUNqRCxNQUFNO0lBQ04sSUFBSTtJQUNOO0lBQ0EscUJBQ0UsOERBQUNnQjtrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFHRCxXQUFVOzhCQUErQjs7Ozs7OzhCQUM3Qyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNFO3dCQUNDQyxNQUFLO3dCQUNMSCxXQUFVO3dCQUNWSSxPQUFPeEI7d0JBQ1B5QixVQUFVLENBQUNsQixJQUFNTixZQUFZTSxFQUFFbUIsT0FBT0Y7d0JBQ3RDRyxhQUFZOzs7Ozs7Ozs7Ozs4QkFHaEIsOERBQUNSO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRTt3QkFDQ0MsTUFBSzt3QkFDTEgsV0FBVTt3QkFDVkksT0FBT3BCO3dCQUNQcUIsVUFBVSxDQUFDbEIsSUFBTUYsaUJBQWlCRSxFQUFFbUIsT0FBT0Y7d0JBQzNDRyxhQUFZOzs7Ozs7Ozs7Ozs4QkFHaEIsOERBQUNSO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDUTt3QkFDQ0MsU0FBU3ZCO3dCQUNUd0IsTUFBSzt3QkFDTFYsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7OEJBSUgsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDVzt3QkFBRVgsV0FBVTtrQ0FDVmxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0EzR01UOztRQUNXTCxrREFBU0E7OztLQURwQks7QUE2R04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjb3VudC9yZXNldF9wYXNzd29yZC9bdWlkXS9bdG9rZW5dL2luZGV4LmpzP2VjMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBNZExvY2tPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB1aWQsIHRva2VuIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnNvbGUubG9nKHVpZCArIFwiXCIgKyB0b2tlbik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVOZXdQYXNzd29yZCwgc2V0UmVOZXdQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVSZXNldCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHVpZCE9PXVuZGVmaW5lZCAmJiB0b2tlbiE9PXVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hY2NvdW50L3Jlc2V0X3Bhc3N3b3JkX2NvbmZpcm1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIixcbiAgICAgICAgfSxcbiAgICAgICAgY3JlZGVudGlhbHM6J2luY2x1ZGUnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdWlkLFxuICAgICAgICAgIHRva2VuLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXNwb25zZT1cbiAgICAgIHNldE1lc3NhZ2UoYFBhc3N3b3JkIHJlc2V0IHN1Y2Nlc3NmdWwuYCk7XG4gICAgfVxuXG4gICAgLy8gLy8gdmVyaWZ5IHRva2VuXG4gICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC90b2tlbi9gKTtcbiAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgLy8gY29uc29sZS5sb2codG9rZW4pO1xuICAgIC8vIGlmICh0b2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gICBjb25zdCBmaWx0ZXJUb2tlbiA9IGF3YWl0IHJlc3VsdC5maWx0ZXIoKHIpID0+IHIudG9rZW4gPT09IHRva2VuKTtcblxuICAgIC8vICAgLy8gY29uc29sZS5sb2coZmlsdGVyVG9rZW5bMF0udXNlcik7XG4gICAgLy8gICBjb25zdCBpZD1maWx0ZXJUb2tlblswXS51c2VyXG4gICAgICBcbiAgICAvLyAgIGNvbnN0IHVzZXJEYXRhID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IHVkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC91c2Vycy9gKTtcbiAgICAvLyAgICAgY29uc3QgcmVzID0gYXdhaXQgdWRhdGEuanNvbigpO1xuICAgIC8vICAgICBjb25zdCBmaWx0ZXJVc2VycyA9IHJlcy5maWx0ZXIoKHIpID0+IHIuaWQgPT09IGlkKTtcbiAgICAvLyAgICAgcmV0dXJuIGZpbHRlclVzZXJzO1xuICAgIC8vICAgfTtcbiAgICAgIFxuICAgIC8vICAgY29uc3QgdXNlcnM9IGF3YWl0IHVzZXJEYXRhKGlkKVxuICAgICAgXG4gICAgLy8gICBpZiAoZmlsdGVyVG9rZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgLy8gICAgIGF3YWl0IGZldGNoKGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvdXBkYXRlLyR7aWR9YCwge1xuICAgIC8vICAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgIC8vICAgICAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiLFxuICAgIC8vICAgICAgICAgLy8gQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgLy8gICAgICAgICBpZCxcbiAgICAvLyAgICAgICAgIG5hbWU6dXNlcnNbMF0ubmFtZSxcbiAgICAvLyAgICAgICAgIGVtYWlsOnVzZXJzWzBdLmVtYWlsLFxuICAgIC8vICAgICAgICAgcGFzc3dvcmQsXG4gICAgLy8gICAgICAgICBpc19hY3RpdmU6IHVzZXJzWzBdLmlzX2FjdGl2ZSxcbiAgICAvLyAgICAgICB9KSxcbiAgICAvLyAgICAgfSk7XG5cbiAgICAvLyAgICAgc2V0TWVzc2FnZShgUGFzc3dvcmQgcmVzZXQgc3VjY2Vzc2Z1bGwuYCk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItNSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG10LTUgbWItNVwiPlJlc2V0IFBhc3N3b3JkPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJsb2NrIHctWzMwJV0gaC1bNDBweF0gcm91bmRlZC1tZCBib3JkZXItMFwiXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW50ZXIgbmV3IHBhc3N3b3JkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJsb2NrIHctWzMwJV0gaC1bNDBweF0gcm91bmRlZC1tZCBib3JkZXItMFwiXG4gICAgICAgICAgICB2YWx1ZT17cmVOZXdQYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVOZXdQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInJlIGVudGVyIG5ldyBwYXNzd29yZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVzZXR9XG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVszMCVdIG1sLTMgYm9yZGVyLTIgYm9yZGVyLWdyZWVuLTUwMCByb3VuZGVkLWZ1bGwgcHgtMTIgcHktMiBpbmxpbmUtYmxvY2sgZm9udC1zZW1pYm9sZCBob3ZlcjpiZy1ncmVlbi01MDAgaG92ZXI6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgUmVzdCBQYXNzd29yZFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTAlXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtdC0zXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtbGcgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1kTG9ja091dGxpbmUiLCJJbmRleCIsInJvdXRlciIsInVpZCIsInRva2VuIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwicmVOZXdQYXNzd29yZCIsInNldFJlTmV3UGFzc3dvcmQiLCJoYW5kbGVSZXNldCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVuZGVmaW5lZCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYSIsIm9uQ2xpY2siLCJocmVmIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/account/reset_password/[uid]/[token]/index.js\n"));

/***/ })

});