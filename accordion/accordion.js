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

accWrapper.innerHTML = innerItem; // initiate

const settings = {
  itemOpenOrder: 2,
};

const items = document.querySelectorAll(".acc_item");

// items[settings.itemOpenOrder - 1].querySelector(".acc_des").style.height = 0

// console.log()

items[settings.itemOpenOrder - 1].classList.add("active");

// if(items[settings.itemOpenOrder - 1].classList.contains("active")){
//   items[settings.itemOpenOrder - 1].querySelector(".acc_des").style.height = "auto"
//   // console.log(items[settings.itemOpenOrder].querySelector(".acc_des"))
// }

// let desContainer = items.classList

// console.log(desContainer)

// if (items.classList.contains("active")) {
//   //let description = el.querySelector(".acc_des");
//     // el.querySelector(".acc_des").style.height = "auto";
//     //description.style.height = "auto";
//     // console.log(description)

//     console.log("true")
//   }

  // else {
  //   description.style.height = 0;
  // }


items.forEach((el, i) => {
  let title = el.querySelector(".acc_title");
  let desc = el.querySelector(".acc_des")

  // let activeItem = document.querySelector()

  console.log(el)

  // if(el.classList.contains("active")){
  //   desc.style.height = "auto";
  // }else{

  // }



  // el.querySelector(".acc_des").style.height = 0;

  // title.nextElementSibling.style.height = 0;
  // title.nextElementSibling.style.height = "auto";
  let get_desc_height = title.nextElementSibling.clientHeight;
  // title.nextElementSibling.style.height = 0;


  // title.parentNode.classList.add("active")

  // console.log(title)

  // settings.itemOpenOrder !== null
  //       ? (title[settings.itemOpenOrder].parentNode.classList.add = "active")
  //       : "";

  // title.parentNode.classList.contains("active") ? true : false

  // this.nextElementSibling.style.height = "200px";

  // get_desc_height === 0 ? get_desc_height : 0

  // console.log(get_desc_height)

  //click
  title.addEventListener("click", function (e) {
    e.preventDefault();
    const wrapper_class = this.closest(".acc_item");
    wrapper_class.classList.toggle("active");

    if (wrapper_class.classList.contains("active")) {
      anime({
        targets: this.nextElementSibling,
        easing: "easeInOutQuad",
        duration: 250,
        endDelay: 0,
        delay: 0,
        height: get_desc_height,
      });
    } else {
      // this.nextElementSibling.style.height = 0

      anime({
        targets: this.nextElementSibling,
        easing: "easeInOutQuad",
        duration: 250,
        endDelay: 0,
        delay: 0,
        height: 0,
      });
    }
  });
});

// function set_item_order_number() {}
