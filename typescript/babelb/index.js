"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.replace.js");
require("./styles.css");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const hide = el => [...el].forEach(e => e.style.display = "none");
const show = el => [...el].forEach(e => e.style.display = "block");
const hasClass = (el, className) => el.classList.contains(className);
const toggleClass = (el, className) => el.classList.toggle(className);
const getScrollPosition = function getScrollPosition() {
  let el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  };
};
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
const elementContains = (parent, child) => parent !== child && parent.contains(child);
const elementIsVisibleInViewport = function elementIsVisibleInViewport(el) {
  let partiallyVisible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const {
    top,
    left,
    bottom,
    right
  } = el.getBoundingClientRect();
  const {
    innerHeight,
    innerWidth
  } = window;
  return partiallyVisible ? (top > 0 && top < innerHeight || bottom > 0 && bottom < innerHeight) && (left > 0 && left < innerWidth || right > 0 && right < innerWidth) : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
const getImages = function getImages(el) {
  let includeDuplicates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const images = [...el.getElementsByTagName("img")].map(img => img.getAttribute("src"));
  return includeDuplicates ? images : [...new Set(images)];
};
const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
const currentURL = () => window.location.href;
const getURLParameters = url => (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1), a), {});
const formToObject = form => Array.from(new FormData(form)).reduce((acc, _ref) => {
  let [key, value] = _ref;
  return _objectSpread(_objectSpread({}, acc), {}, {
    [key]: value
  });
}, {});
const get = function get(from) {
  for (var _len = arguments.length, selectors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    selectors[_key - 1] = arguments[_key];
  }
  return [...selectors].map(s => s.replace(/\[([^\[\]]*)\]/g, ".$1.").split(".").filter(t => t !== "").reduce((prev, cur) => prev && prev[cur], from));
};
const delay = function delay(fn, wait) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }
  return setTimeout(fn, wait, ...args);
};
const triggerEvent = (el, eventType, detail) => el.dispatchEvent(new CustomEvent(eventType, {
  detail
}));
const off = function off(el, evt, fn) {
  let opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return el.removeEventListener(evt, fn, opts);
};
const formatDuration = ms => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  return Object.entries(time).filter(val => val[1] !== 0).map(_ref2 => {
    let [key, val] = _ref2;
    return "".concat(val, " ").concat(key).concat(val !== 1 ? "s" : "");
  }).join(", ");
};
const getDaysDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24);
const httpGet = function httpGet(url, callback) {
  let err = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : console.error;
  const request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send();
};
const httpPost = function httpPost(url, data, callback) {
  let err = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : console.error;
  const request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send(data);
};
const counter = function counter(selector, start, end) {
  let step = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  let duration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2000;
  let current = start,
    _step = (end - start) * step < 0 ? -step : step,
    timer = setInterval(() => {
      current += _step;
      document.querySelector(selector).innerHTML = current;
      if (current >= end) document.querySelector(selector).innerHTML = end;
      if (current >= end) clearInterval(timer);
    }, Math.abs(Math.floor(duration / (end - start))));
  return timer;
};
const copyToClipboard = str => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};
const isBrowserTabFocused = () => !document.hidden;
const preBlocks = document.querySelectorAll("pre");
document.getElementById("hide-btn").addEventListener("click", () => hide(preBlocks));
document.getElementById("show-btn").addEventListener("click", () => show(preBlocks));