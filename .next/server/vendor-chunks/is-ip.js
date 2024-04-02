"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-ip";
exports.ids = ["vendor-chunks/is-ip"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-ip/index.js":
/*!*************************************!*\
  !*** ./node_modules/is-ip/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst ipRegex = __webpack_require__(/*! ip-regex */ \"(ssr)/./node_modules/ip-regex/index.js\");\n\nconst isIp = string => ipRegex({exact: true}).test(string);\nisIp.v4 = string => ipRegex.v4({exact: true}).test(string);\nisIp.v6 = string => ipRegex.v6({exact: true}).test(string);\nisIp.version = string => isIp(string) ? (isIp.v4(string) ? 4 : 6) : undefined;\n\nmodule.exports = isIp;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtaXAvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixnQkFBZ0IsbUJBQU8sQ0FBQyx3REFBVTs7QUFFbEMsZ0NBQWdDLFlBQVk7QUFDNUMsZ0NBQWdDLFlBQVk7QUFDNUMsZ0NBQWdDLFlBQVk7QUFDNUM7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbWFydC13YWxsZXQvLi9ub2RlX21vZHVsZXMvaXMtaXAvaW5kZXguanM/ODcwNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBpcFJlZ2V4ID0gcmVxdWlyZSgnaXAtcmVnZXgnKTtcblxuY29uc3QgaXNJcCA9IHN0cmluZyA9PiBpcFJlZ2V4KHtleGFjdDogdHJ1ZX0pLnRlc3Qoc3RyaW5nKTtcbmlzSXAudjQgPSBzdHJpbmcgPT4gaXBSZWdleC52NCh7ZXhhY3Q6IHRydWV9KS50ZXN0KHN0cmluZyk7XG5pc0lwLnY2ID0gc3RyaW5nID0+IGlwUmVnZXgudjYoe2V4YWN0OiB0cnVlfSkudGVzdChzdHJpbmcpO1xuaXNJcC52ZXJzaW9uID0gc3RyaW5nID0+IGlzSXAoc3RyaW5nKSA/IChpc0lwLnY0KHN0cmluZykgPyA0IDogNikgOiB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJcDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-ip/index.js\n");

/***/ })

};
;