"use strict";

// import { createElement } from "./utils"
// hide & show
// const hideShowTxt = createElement('h1', 'hideShowTxt', 'Hide & Show', 'hide_and_show');

// const hide = (el) => [...el].forEach((e) => (e.style.display = "none"));
// const show = (el) => [...el].forEach((e) => (e.style.display = "block"));

// const hide = (el) => {

//     console.log(el);

//     [...el].forEach((e) => {
//         e.style.display = "none";
//     });
// }

// const text = document.getElementById('hideShowTxt');

// hideShow = () => {

//     hide(text);
//     // console.log(text);

//     // "none" === text.style.display ? show(text) : hide(text)
// }

// const hideShowBtn = createElement('button', 'counterBtn', 'HideShow', 'hide_and_show', {
//     click: () => {
//         hideShow();
//     }
// });

// document
//     .getElementById("hide-btn")
//     .addEventListener("click",
//         () => hide(text));
// document
//     .getElementById("show-btn")
//     .addEventListener("click",
//         () => show(preBlocks));

// count
var count = 0;
inc = function inc() {
  count += 1;
  document.getElementById('counterTxt').textContent = count;
};
var counterText = createElement('h1', 'counterTxt', '0', 'count_block');
var counterBtn = createElement('button', 'counterBtn', 'Click', 'count_block', {
  click: function click() {
    inc();
  }
});
console.log("red");