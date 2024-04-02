"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/bs58check";
exports.ids = ["vendor-chunks/bs58check"];
exports.modules = {

/***/ "(ssr)/./node_modules/bs58check/base.js":
/*!****************************************!*\
  !*** ./node_modules/bs58check/base.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar base58 = __webpack_require__(/*! bs58 */ \"(ssr)/./node_modules/bs58/index.js\")\n\nmodule.exports = function (checksumFn) {\n  // Encode a buffer as a base58-check encoded string\n  function encode (payload) {\n    var payloadU8 = Uint8Array.from(payload)\n    var checksum = checksumFn(payloadU8)\n    var length = payloadU8.length + 4\n    var both = new Uint8Array(length)\n    both.set(payloadU8, 0)\n    both.set(checksum.subarray(0, 4), payloadU8.length)\n    return base58.encode(both, length)\n  }\n\n  function decodeRaw (buffer) {\n    var payload = buffer.slice(0, -4)\n    var checksum = buffer.slice(-4)\n    var newChecksum = checksumFn(payload)\n\n    if (checksum[0] ^ newChecksum[0] |\n        checksum[1] ^ newChecksum[1] |\n        checksum[2] ^ newChecksum[2] |\n        checksum[3] ^ newChecksum[3]) return\n\n    return payload\n  }\n\n  // Decode a base58-check encoded string to a buffer, no result if checksum is wrong\n  function decodeUnsafe (string) {\n    var buffer = base58.decodeUnsafe(string)\n    if (!buffer) return\n\n    return decodeRaw(buffer)\n  }\n\n  function decode (string) {\n    var buffer = base58.decode(string)\n    var payload = decodeRaw(buffer, checksumFn)\n    if (!payload) throw new Error('Invalid checksum')\n    return payload\n  }\n\n  return {\n    encode: encode,\n    decode: decode,\n    decodeUnsafe: decodeUnsafe\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnM1OGNoZWNrL2Jhc2UuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLGdEQUFNOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc21hcnQtd2FsbGV0Ly4vbm9kZV9tb2R1bGVzL2JzNThjaGVjay9iYXNlLmpzP2U2NTgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNTggPSByZXF1aXJlKCdiczU4JylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY2hlY2tzdW1Gbikge1xuICAvLyBFbmNvZGUgYSBidWZmZXIgYXMgYSBiYXNlNTgtY2hlY2sgZW5jb2RlZCBzdHJpbmdcbiAgZnVuY3Rpb24gZW5jb2RlIChwYXlsb2FkKSB7XG4gICAgdmFyIHBheWxvYWRVOCA9IFVpbnQ4QXJyYXkuZnJvbShwYXlsb2FkKVxuICAgIHZhciBjaGVja3N1bSA9IGNoZWNrc3VtRm4ocGF5bG9hZFU4KVxuICAgIHZhciBsZW5ndGggPSBwYXlsb2FkVTgubGVuZ3RoICsgNFxuICAgIHZhciBib3RoID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIGJvdGguc2V0KHBheWxvYWRVOCwgMClcbiAgICBib3RoLnNldChjaGVja3N1bS5zdWJhcnJheSgwLCA0KSwgcGF5bG9hZFU4Lmxlbmd0aClcbiAgICByZXR1cm4gYmFzZTU4LmVuY29kZShib3RoLCBsZW5ndGgpXG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGVSYXcgKGJ1ZmZlcikge1xuICAgIHZhciBwYXlsb2FkID0gYnVmZmVyLnNsaWNlKDAsIC00KVxuICAgIHZhciBjaGVja3N1bSA9IGJ1ZmZlci5zbGljZSgtNClcbiAgICB2YXIgbmV3Q2hlY2tzdW0gPSBjaGVja3N1bUZuKHBheWxvYWQpXG5cbiAgICBpZiAoY2hlY2tzdW1bMF0gXiBuZXdDaGVja3N1bVswXSB8XG4gICAgICAgIGNoZWNrc3VtWzFdIF4gbmV3Q2hlY2tzdW1bMV0gfFxuICAgICAgICBjaGVja3N1bVsyXSBeIG5ld0NoZWNrc3VtWzJdIHxcbiAgICAgICAgY2hlY2tzdW1bM10gXiBuZXdDaGVja3N1bVszXSkgcmV0dXJuXG5cbiAgICByZXR1cm4gcGF5bG9hZFxuICB9XG5cbiAgLy8gRGVjb2RlIGEgYmFzZTU4LWNoZWNrIGVuY29kZWQgc3RyaW5nIHRvIGEgYnVmZmVyLCBubyByZXN1bHQgaWYgY2hlY2tzdW0gaXMgd3JvbmdcbiAgZnVuY3Rpb24gZGVjb2RlVW5zYWZlIChzdHJpbmcpIHtcbiAgICB2YXIgYnVmZmVyID0gYmFzZTU4LmRlY29kZVVuc2FmZShzdHJpbmcpXG4gICAgaWYgKCFidWZmZXIpIHJldHVyblxuXG4gICAgcmV0dXJuIGRlY29kZVJhdyhidWZmZXIpXG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGUgKHN0cmluZykge1xuICAgIHZhciBidWZmZXIgPSBiYXNlNTguZGVjb2RlKHN0cmluZylcbiAgICB2YXIgcGF5bG9hZCA9IGRlY29kZVJhdyhidWZmZXIsIGNoZWNrc3VtRm4pXG4gICAgaWYgKCFwYXlsb2FkKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY2hlY2tzdW0nKVxuICAgIHJldHVybiBwYXlsb2FkXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVuY29kZTogZW5jb2RlLFxuICAgIGRlY29kZTogZGVjb2RlLFxuICAgIGRlY29kZVVuc2FmZTogZGVjb2RlVW5zYWZlXG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/bs58check/base.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/bs58check/index.js":
/*!*****************************************!*\
  !*** ./node_modules/bs58check/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar { sha256 } = __webpack_require__(/*! @noble/hashes/sha256 */ \"(ssr)/./node_modules/@noble/hashes/sha256.js\")\nvar bs58checkBase = __webpack_require__(/*! ./base */ \"(ssr)/./node_modules/bs58check/base.js\")\n\n// SHA256(SHA256(buffer))\nfunction sha256x2 (buffer) {\n  return sha256(sha256(buffer))\n}\n\nmodule.exports = bs58checkBase(sha256x2)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYnM1OGNoZWNrL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaLE1BQU0sU0FBUyxFQUFFLG1CQUFPLENBQUMsMEVBQXNCO0FBQy9DLG9CQUFvQixtQkFBTyxDQUFDLHNEQUFROztBQUVwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0LXdhbGxldC8uL25vZGVfbW9kdWxlcy9iczU4Y2hlY2svaW5kZXguanM/MDhlZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxudmFyIHsgc2hhMjU2IH0gPSByZXF1aXJlKCdAbm9ibGUvaGFzaGVzL3NoYTI1NicpXG52YXIgYnM1OGNoZWNrQmFzZSA9IHJlcXVpcmUoJy4vYmFzZScpXG5cbi8vIFNIQTI1NihTSEEyNTYoYnVmZmVyKSlcbmZ1bmN0aW9uIHNoYTI1NngyIChidWZmZXIpIHtcbiAgcmV0dXJuIHNoYTI1NihzaGEyNTYoYnVmZmVyKSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiczU4Y2hlY2tCYXNlKHNoYTI1NngyKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/bs58check/index.js\n");

/***/ })

};
;