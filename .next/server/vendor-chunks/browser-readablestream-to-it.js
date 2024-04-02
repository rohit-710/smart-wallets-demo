"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/browser-readablestream-to-it";
exports.ids = ["vendor-chunks/browser-readablestream-to-it"];
exports.modules = {

/***/ "(ssr)/./node_modules/browser-readablestream-to-it/index.js":
/*!************************************************************!*\
  !*** ./node_modules/browser-readablestream-to-it/index.js ***!
  \************************************************************/
/***/ ((module) => {

eval("\n\n/**\n * Turns a browser readable stream into an async iterable. Async iteration over\n * returned iterable will lock give stream, preventing any other consumer from\n * acquiring a reader. The lock will be released if iteration loop is broken. To\n * prevent stream cancelling optional `{ preventCancel: true }` could be passed\n * as a second argument.\n * @template T\n * @param {ReadableStream<T>} stream\n * @param {Object} [options]\n * @param {boolean} [options.preventCancel=boolean]\n * @returns {AsyncIterable<T>}\n */\nasync function * browserReadableStreamToIt (stream, options = {}) {\n  const reader = stream.getReader()\n\n  try {\n    while (true) {\n      const result = await reader.read()\n\n      if (result.done) {\n        return\n      }\n\n      yield result.value\n    }\n  } finally {\n    if (options.preventCancel !== true) {\n      reader.cancel()\n    }\n\n    reader.releaseLock()\n  }\n}\n\nmodule.exports = browserReadableStreamToIt\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnJvd3Nlci1yZWFkYWJsZXN0cmVhbS10by1pdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxxQkFBcUI7QUFDOUQ7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0EsZ0VBQWdFO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21hcnQtd2FsbGV0Ly4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItcmVhZGFibGVzdHJlYW0tdG8taXQvaW5kZXguanM/YjIxMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuLyoqXG4gKiBUdXJucyBhIGJyb3dzZXIgcmVhZGFibGUgc3RyZWFtIGludG8gYW4gYXN5bmMgaXRlcmFibGUuIEFzeW5jIGl0ZXJhdGlvbiBvdmVyXG4gKiByZXR1cm5lZCBpdGVyYWJsZSB3aWxsIGxvY2sgZ2l2ZSBzdHJlYW0sIHByZXZlbnRpbmcgYW55IG90aGVyIGNvbnN1bWVyIGZyb21cbiAqIGFjcXVpcmluZyBhIHJlYWRlci4gVGhlIGxvY2sgd2lsbCBiZSByZWxlYXNlZCBpZiBpdGVyYXRpb24gbG9vcCBpcyBicm9rZW4uIFRvXG4gKiBwcmV2ZW50IHN0cmVhbSBjYW5jZWxsaW5nIG9wdGlvbmFsIGB7IHByZXZlbnRDYW5jZWw6IHRydWUgfWAgY291bGQgYmUgcGFzc2VkXG4gKiBhcyBhIHNlY29uZCBhcmd1bWVudC5cbiAqIEB0ZW1wbGF0ZSBUXG4gKiBAcGFyYW0ge1JlYWRhYmxlU3RyZWFtPFQ+fSBzdHJlYW1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucHJldmVudENhbmNlbD1ib29sZWFuXVxuICogQHJldHVybnMge0FzeW5jSXRlcmFibGU8VD59XG4gKi9cbmFzeW5jIGZ1bmN0aW9uICogYnJvd3NlclJlYWRhYmxlU3RyZWFtVG9JdCAoc3RyZWFtLCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgcmVhZGVyID0gc3RyZWFtLmdldFJlYWRlcigpXG5cbiAgdHJ5IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVhZGVyLnJlYWQoKVxuXG4gICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHlpZWxkIHJlc3VsdC52YWx1ZVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAob3B0aW9ucy5wcmV2ZW50Q2FuY2VsICE9PSB0cnVlKSB7XG4gICAgICByZWFkZXIuY2FuY2VsKClcbiAgICB9XG5cbiAgICByZWFkZXIucmVsZWFzZUxvY2soKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnJvd3NlclJlYWRhYmxlU3RyZWFtVG9JdFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/browser-readablestream-to-it/index.js\n");

/***/ })

};
;