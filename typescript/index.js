const preBlocks = document.querySelectorAll("pre");

const hide = (el) => [...el].forEach((e) => (e.style.display = "none"));
const show = (el) => [...el].forEach((e) => (e.style.display = "block"));

document
    .getElementById("hide-btn")
    .addEventListener("click", () => hide(preBlocks));
document
    .getElementById("show-btn")
    .addEventListener("click", () => show(preBlocks));
