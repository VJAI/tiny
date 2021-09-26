'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.readValue = exports.isVoid = void 0;
function isVoid(val) {
  return val === null || val === undefined;
}
exports.isVoid = isVoid;
// https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-and-arrays-by-string-path
function readValue(o, s) {
  s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  s = s.replace(/^\./, ''); // strip a leading dot
  const a = s.split('.');
  for (let i = 0, n = a.length; i < n; ++i) {
    const k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
}
exports.readValue = readValue;
//# sourceMappingURL=util.js.map
