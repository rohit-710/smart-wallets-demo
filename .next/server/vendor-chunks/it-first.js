"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/it-first";
exports.ids = ["vendor-chunks/it-first"];
exports.modules = {

/***/ "(ssr)/./node_modules/it-first/index.js":
/*!****************************************!*\
  !*** ./node_modules/it-first/index.js ***!
  \****************************************/
/***/ ((module) => {

eval("\n\n/**\n * Returns the first result from an (async) iterable, unless empty, in which\n * case returns `undefined`.\n *\n * @template T\n * @param {AsyncIterable<T>|Iterable<T>} source\n */\nconst first = async (source) => {\n  for await (const entry of source) { // eslint-disable-line no-unreachable-loop\n    return entry\n  }\n\n  return undefined\n}\n\nmodule.exports = first\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXQtZmlyc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsOEJBQThCO0FBQ3pDO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21hcnQtd2FsbGV0Ly4vbm9kZV9tb2R1bGVzL2l0LWZpcnN0L2luZGV4LmpzPzI1ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgcmVzdWx0IGZyb20gYW4gKGFzeW5jKSBpdGVyYWJsZSwgdW5sZXNzIGVtcHR5LCBpbiB3aGljaFxuICogY2FzZSByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge0FzeW5jSXRlcmFibGU8VD58SXRlcmFibGU8VD59IHNvdXJjZVxuICovXG5jb25zdCBmaXJzdCA9IGFzeW5jIChzb3VyY2UpID0+IHtcbiAgZm9yIGF3YWl0IChjb25zdCBlbnRyeSBvZiBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnJlYWNoYWJsZS1sb29wXG4gICAgcmV0dXJuIGVudHJ5XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmlyc3RcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/it-first/index.js\n");

/***/ })

};
;