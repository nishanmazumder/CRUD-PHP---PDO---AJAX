// Callback

const employee = [
  { name: "Nishan", location: "Mirpur" },
  { name: "Zim", location: "Badda" },
];

// function get_data_callback() {
//     setTimeout(() => {
//         let output = "<ul>";
//         employee.forEach((data, index) => {
//             output += "<li>Name: " + data.name + "</li>";
//         });
//         output += "</ul>";

//         document.body.innerHTML = output
//     }, 1000);
// }

// function push_data(data, callback) {
//     setTimeout(() => {
//         employee.push(data)
//         callback()
//     }, 2000)
// }

// push_data({name: "Push", location: "Unknowon"}, get_data_callback)

// Promise

// function get_data_promise() {
//     setTimeout(() => {
//         let output = "<ul>";
//         employee.forEach(data => {
//             output += "<li>Name: " + data.name + "</li>";
//         });
//         output += "</ul>";

//         document.body.innerHTML = output
//     }, 1000)
// }

// function new_data(newdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             employee.push(newdata)

//             let err = false
//             err ? reject("error") : resolve()
//         }, 2000)
//     })
// }

// new_data({ name: "Push", location: "Unknowon" }).then(get_data_promise).catch(err=>console.log(err))

// Async & Await

let get_data_async = () => {
  setTimeout(() => {
    let output = "<ul>";
    employee.forEach((data) => {
      output += "<li>Name: " + data.name + "</li>";
    });
    output += "</ul>";

    document.body.innerHTML = output;
  }, 1000);
};

let push_new_data = (newdata) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      employee.push(newdata);
      let err = false;
      err ? reject("error") : resolve();
    }, 2000);
  });
};

async function display_data() {
  await push_new_data({ name: "Push", location: "Unknowon" });
  get_data_async();
}

// get_data_async()

display_data();
