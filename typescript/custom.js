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
let count = 0;

let inc = () => {
    count += 1;
    document.getElementById('counterTxt').textContent = count;
}

const counterText = createElement('h1', 'counterTxt', '0', 'count_block')

const counterBtn = createElement('button', 'counterBtn', 'Click', 'count_block', {
    click: () => {
        inc();
    }
});


console.log("red");
