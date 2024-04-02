"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/it-map";
exports.ids = ["vendor-chunks/it-map"];
exports.modules = {

/***/ "(ssr)/./node_modules/it-map/index.js":
/*!**************************************!*\
  !*** ./node_modules/it-map/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("\n\n/**\n * Takes an (async) iterable and returns one with each item mapped by the passed\n * function.\n *\n * @template I,O\n * @param {AsyncIterable<I>|Iterable<I>} source\n * @param {function(I):O|Promise<O>} func\n * @returns {AsyncIterable<O>}\n */\nconst map = async function * (source, func) {\n  for await (const val of source) {\n    yield func(val)\n  }\n}\n\nmodule.exports = map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXQtbWFwL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhCQUE4QjtBQUN6QyxXQUFXLDBCQUEwQjtBQUNyQyxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21hcnQtd2FsbGV0Ly4vbm9kZV9tb2R1bGVzL2l0LW1hcC9pbmRleC5qcz9kNWJiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIFRha2VzIGFuIChhc3luYykgaXRlcmFibGUgYW5kIHJldHVybnMgb25lIHdpdGggZWFjaCBpdGVtIG1hcHBlZCBieSB0aGUgcGFzc2VkXG4gKiBmdW5jdGlvbi5cbiAqXG4gKiBAdGVtcGxhdGUgSSxPXG4gKiBAcGFyYW0ge0FzeW5jSXRlcmFibGU8ST58SXRlcmFibGU8ST59IHNvdXJjZVxuICogQHBhcmFtIHtmdW5jdGlvbihJKTpPfFByb21pc2U8Tz59IGZ1bmNcbiAqIEByZXR1cm5zIHtBc3luY0l0ZXJhYmxlPE8+fVxuICovXG5jb25zdCBtYXAgPSBhc3luYyBmdW5jdGlvbiAqIChzb3VyY2UsIGZ1bmMpIHtcbiAgZm9yIGF3YWl0IChjb25zdCB2YWwgb2Ygc291cmNlKSB7XG4gICAgeWllbGQgZnVuYyh2YWwpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/it-map/index.js\n");

/***/ })

};
;