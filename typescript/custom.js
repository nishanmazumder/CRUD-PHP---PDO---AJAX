import { createElement } from "./utils"

// hide & show
const hideShowTxt = createElement('h1', 'hideShowTxt', 'Hide & Show', 'hide_and_show');

const hide = (el) => [...el].forEach((e) => (e.style.display = "none"));
const show = (el) => [...el].forEach((e) => (e.style.display = "block"));

const hideShowFun = () => {
    const text = document.querySelectorAll('.hideShowTxt');

    [...text].forEach(element => {
        "none" === element.style.display
            ? show([element]) : hide([element])
    });
}

const hideShowBtn = createElement('button', 'counterBtn', 'HideShow', 'hide_and_show', {
    click: () => {
        hideShowFun();
    }
});


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
