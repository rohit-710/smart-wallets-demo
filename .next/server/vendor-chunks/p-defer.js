"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-defer";
exports.ids = ["vendor-chunks/p-defer"];
exports.modules = {

/***/ "(ssr)/./node_modules/p-defer/index.js":
/*!***************************************!*\
  !*** ./node_modules/p-defer/index.js ***!
  \***************************************/
/***/ ((module) => {

eval("\n\nconst pDefer = () => {\n\tconst deferred = {};\n\n\tdeferred.promise = new Promise((resolve, reject) => {\n\t\tdeferred.resolve = resolve;\n\t\tdeferred.reject = reject;\n\t});\n\n\treturn deferred;\n};\n\nmodule.exports = pDefer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcC1kZWZlci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0LXdhbGxldC8uL25vZGVfbW9kdWxlcy9wLWRlZmVyL2luZGV4LmpzP2EwMWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwRGVmZXIgPSAoKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0ge307XG5cblx0ZGVmZXJyZWQucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRkZWZlcnJlZC5yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRkZWZlcnJlZC5yZWplY3QgPSByZWplY3Q7XG5cdH0pO1xuXG5cdHJldHVybiBkZWZlcnJlZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcERlZmVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/p-defer/index.js\n");

/***/ })

};
;