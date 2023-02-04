import accordion_items from "./data.js";

const accWrapper = document.querySelector(".nm_acc");
let innerItem = "";

//display data
accordion_items.map((el, index) => {
  innerItem += `<div class="acc_item">
                  <div class="acc_title">${el.title}</div>
                  <div class="acc_des"><div class="content">${el.des}</div></div></div>`;
  return innerItem;
});

accWrapper.innerHTML = innerItem;
const items = document.querySelectorAll(".acc_item");

items.forEach((el) => {
  let title = el.querySelector(".acc_title");
  el.querySelector(".acc_des").style.height = 0

  title.addEventListener("click", function (e) {
    e.preventDefault()
    const wrapper_class = this.closest(".acc_item")
    wrapper_class.classList.toggle("active");

    if(wrapper_class.classList.contains("active")){
      // this.nextElementSibling.style.height = "200px"

      anime({
        targets: this.nextElementSibling,
        easing: "linear",
        duration: 500,
        endDelay: 0,
        delay: 0,
        height: 150,
      });


    }else{
      // this.nextElementSibling.style.height = 0

      anime({
        targets: this.nextElementSibling,
        easing: "linear",
        duration: 500,
        endDelay: 0,
        delay: 0,
        height: 0,
      });
    }
  });
});
