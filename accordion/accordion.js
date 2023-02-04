import accordion_items from "./data.js";

// get settings
const settings = {
  itemOpenOrder: 2,
};

const accWrapper = document.querySelector(".nm_acc");
let innerItem = "";

accordion_items.map((el, index) => {
  //display data
  innerItem += `<div class="acc_item"> <div class="acc_title">${el.title}</div>
                <div class="acc_des"><div class="content">${el.des}</div></div></div>`;
  return innerItem;
});

accWrapper.innerHTML = innerItem; // initiate

const items = document.querySelectorAll(".acc_item");
items[settings.itemOpenOrder - 1].classList.add("active");

items.forEach((el, i) => {
  const title = el.querySelector(".acc_title");
  const desc = title.nextElementSibling;
  const get_desc_height = desc.clientHeight;
  desc.style.height = 0;

  // set active class
  items[settings.itemOpenOrder - 1].querySelector(".acc_des").style.height =
    "auto";

  title.addEventListener("click", function (e) {
    //click
    e.preventDefault();

    const wrapper_class = this.closest(".acc_item");

    // if (wrapper_class.classList.contains("active")) {
    //   wrapper_class.classList.remove("active")
    // }else{
    //   wrapper_class.classList.add("active")
    // }

    wrapper_class.classList.toggle("active");

    if (wrapper_class.classList.contains("active")) {

      console.log("true")

      anime({
        targets: this.nextElementSibling,
        easing: "easeInOutQuad",
        duration: 250,
        endDelay: 0,
        delay: 0,
        height: get_desc_height,
      });
    } else {
      anime({
        targets: this.nextElementSibling,
        easing: "linear",
        duration: 250,
        endDelay: 0,
        delay: 0,
        height: 0,
      });
    }
  });
});

// function set_item_order_number() {}
