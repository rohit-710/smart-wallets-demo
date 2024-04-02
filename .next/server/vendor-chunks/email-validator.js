"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/email-validator";
exports.ids = ["vendor-chunks/email-validator"];
exports.modules = {

/***/ "(ssr)/./node_modules/email-validator/index.js":
/*!***********************************************!*\
  !*** ./node_modules/email-validator/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\n\r\nvar tester = /^[-!#$%&'*+\\/0-9=?A-Z^_a-z{|}~](\\.?[-!#$%&'*+\\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\\.?[a-zA-Z0-9])*\\.[a-zA-Z](-?[a-zA-Z0-9])+$/;\r\n// Thanks to:\r\n// http://fightingforalostcause.net/misc/2006/compare-email-regex.php\r\n// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx\r\n// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378\r\nexports.validate = function(email)\r\n{\r\n\tif (!email)\r\n\t\treturn false;\r\n\t\t\r\n\tif(email.length>254)\r\n\t\treturn false;\r\n\r\n\tvar valid = tester.test(email);\r\n\tif(!valid)\r\n\t\treturn false;\r\n\r\n\t// Further checking of some things regex can't handle\r\n\tvar parts = email.split(\"@\");\r\n\tif(parts[0].length>64)\r\n\t\treturn false;\r\n\r\n\tvar domainParts = parts[1].split(\".\");\r\n\tif(domainParts.some(function(part) { return part.length>63; }))\r\n\t\treturn false;\r\n\r\n\treturn true;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW1haWwtdmFsaWRhdG9yL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQSx5Q0FBeUMsRUFBRSxpQ0FBaUMsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHdCQUF3QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NtYXJ0LXdhbGxldC8uL25vZGVfbW9kdWxlcy9lbWFpbC12YWxpZGF0b3IvaW5kZXguanM/ZjliZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciB0ZXN0ZXIgPSAvXlstISMkJSYnKitcXC8wLTk9P0EtWl5fYS16e3x9fl0oXFwuP1stISMkJSYnKitcXC8wLTk9P0EtWl5fYS16YHt8fX5dKSpAW2EtekEtWjAtOV0oLSpcXC4/W2EtekEtWjAtOV0pKlxcLlthLXpBLVpdKC0/W2EtekEtWjAtOV0pKyQvO1xyXG4vLyBUaGFua3MgdG86XHJcbi8vIGh0dHA6Ly9maWdodGluZ2ZvcmFsb3N0Y2F1c2UubmV0L21pc2MvMjAwNi9jb21wYXJlLWVtYWlsLXJlZ2V4LnBocFxyXG4vLyBodHRwOi8vdGhlZGFpbHl3dGYuY29tL0FydGljbGVzL1ZhbGlkYXRpbmdfRW1haWxfQWRkcmVzc2VzLmFzcHhcclxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMDEzMjMvd2hhdC1pcy10aGUtYmVzdC1yZWd1bGFyLWV4cHJlc3Npb24tZm9yLXZhbGlkYXRpbmctZW1haWwtYWRkcmVzc2VzLzIwMTM3OCMyMDEzNzhcclxuZXhwb3J0cy52YWxpZGF0ZSA9IGZ1bmN0aW9uKGVtYWlsKVxyXG57XHJcblx0aWYgKCFlbWFpbClcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFxyXG5cdGlmKGVtYWlsLmxlbmd0aD4yNTQpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdHZhciB2YWxpZCA9IHRlc3Rlci50ZXN0KGVtYWlsKTtcclxuXHRpZighdmFsaWQpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdC8vIEZ1cnRoZXIgY2hlY2tpbmcgb2Ygc29tZSB0aGluZ3MgcmVnZXggY2FuJ3QgaGFuZGxlXHJcblx0dmFyIHBhcnRzID0gZW1haWwuc3BsaXQoXCJAXCIpO1xyXG5cdGlmKHBhcnRzWzBdLmxlbmd0aD42NClcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0dmFyIGRvbWFpblBhcnRzID0gcGFydHNbMV0uc3BsaXQoXCIuXCIpO1xyXG5cdGlmKGRvbWFpblBhcnRzLnNvbWUoZnVuY3Rpb24ocGFydCkgeyByZXR1cm4gcGFydC5sZW5ndGg+NjM7IH0pKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/email-validator/index.js\n");

/***/ })

};
;