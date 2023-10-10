"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/socket/io";
exports.ids = ["pages/api/socket/io"];
exports.modules = {

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "(api)/./pages/api/socket/io.ts":
/*!********************************!*\
  !*** ./pages/api/socket/io.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst ioHandler = (req, res)=>{\n    if (!res.socket.server.io) {\n        const path = \"/api/socket/io\";\n        const httpServer = res.socket.server;\n        const io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(httpServer, {\n            path: path,\n            addTrailingSlash: false\n        });\n        res.socket.server.io = io;\n    }\n    res.end();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ioHandler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc29ja2V0L2lvLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFK0M7QUFJeEMsTUFBTUUsU0FBUztJQUNwQkMsS0FBSztRQUNIQyxZQUFZO0lBQ2Q7QUFDRixFQUFFO0FBRUYsTUFBTUMsWUFBWSxDQUFDQyxLQUFxQkM7SUFDdEMsSUFBSSxDQUFDQSxJQUFJQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsRUFBRSxFQUFFO1FBQ3pCLE1BQU1DLE9BQU87UUFDYixNQUFNQyxhQUF3QkwsSUFBSUMsTUFBTSxDQUFDQyxNQUFNO1FBQy9DLE1BQU1DLEtBQUssSUFBSVQsNkNBQVFBLENBQUNXLFlBQVk7WUFDbENELE1BQU1BO1lBQ05FLGtCQUFrQjtRQUNwQjtRQUNBTixJQUFJQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsRUFBRSxHQUFHQTtJQUN6QjtJQUVBSCxJQUFJTyxHQUFHO0FBQ1Q7QUFFQSxpRUFBZVQsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rpc2NvcmQtY2xvbmUvLi9wYWdlcy9hcGkvc29ja2V0L2lvLnRzP2Q5M2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmVyIGFzIE5ldFNlcnZlciB9IGZyb20gXCJodHRwXCI7XHJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0IH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgU2VydmVyIGFzIFNlcnZlcklPIH0gZnJvbSBcInNvY2tldC5pb1wiO1xyXG5cclxuaW1wb3J0IHsgTmV4dEFwaVJlc3BvbnNlU2VydmVySW8gfSBmcm9tIFwiQC90eXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaToge1xyXG4gICAgYm9keVBhcnNlcjogZmFsc2UsXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IGlvSGFuZGxlciA9IChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZVNlcnZlcklvKSA9PiB7XHJcbiAgaWYgKCFyZXMuc29ja2V0LnNlcnZlci5pbykge1xyXG4gICAgY29uc3QgcGF0aCA9IFwiL2FwaS9zb2NrZXQvaW9cIjtcclxuICAgIGNvbnN0IGh0dHBTZXJ2ZXI6IE5ldFNlcnZlciA9IHJlcy5zb2NrZXQuc2VydmVyIGFzIGFueTtcclxuICAgIGNvbnN0IGlvID0gbmV3IFNlcnZlcklPKGh0dHBTZXJ2ZXIsIHtcclxuICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgYWRkVHJhaWxpbmdTbGFzaDogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIHJlcy5zb2NrZXQuc2VydmVyLmlvID0gaW87XHJcbiAgfVxyXG5cclxuICByZXMuZW5kKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpb0hhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJTZXJ2ZXIiLCJTZXJ2ZXJJTyIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJpb0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJzb2NrZXQiLCJzZXJ2ZXIiLCJpbyIsInBhdGgiLCJodHRwU2VydmVyIiwiYWRkVHJhaWxpbmdTbGFzaCIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/socket/io.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/socket/io.ts"));
module.exports = __webpack_exports__;

})();