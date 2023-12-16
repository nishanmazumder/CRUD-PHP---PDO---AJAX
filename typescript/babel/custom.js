"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// import { createElement } from "./utils"

// hide & show
var hideShowTxt = createElement('h1', 'hideShowTxt', 'Hide & Show', 'hide_and_show');
var hide = function hide(el) {
  return _toConsumableArray(el).forEach(function (e) {
    return e.style.display = "none";
  });
};
var show = function show(el) {
  return _toConsumableArray(el).forEach(function (e) {
    return e.style.display = "block";
  });
};
var hideShowFun = function hideShowFun() {
  var text = document.querySelectorAll('.hideShowTxt');
  _toConsumableArray(text).forEach(function (element) {
    "none" === element.style.display ? show([element]) : hide([element]);
  });
};
var hideShowBtn = createElement('button', 'counterBtn', 'HideShow', 'hide_and_show', {
  click: function click() {
    hideShowFun();
  }
});

// count
var count = 0;
var inc = function inc() {
  count += 1;
  document.getElementById('counterTxt').textContent = count;
};
var counterText = createElement('h1', 'counterTxt', '0', 'count_block');
var counterBtn = createElement('button', 'counterBtn', 'Click', 'count_block', {
  click: function click() {
    inc();
  }
});