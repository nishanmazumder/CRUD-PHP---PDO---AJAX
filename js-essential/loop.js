// for (let a = 1; a <= 15; a += 5) {
//   for (let b = a; b < a + 5; b++) {
//     document.write(b);
//   }
//   document.write("<br>");
// }

// document.write("<hr>");

// for (let a = 1; a <= 5; a++) {
//   for (let b = 1; b <= a; b++) {
//     document.write(b);
//   }

//   document.write("<br>");
// }

// document.write("<hr>");

// for (let a = 1; a <= 5; a++) {
//   for (let b = 1; b <= a; b++) {
//     document.write(a);
//   }

//   document.write("<br>");
// }

// document.write("<hr>");

// for (let a = 5; a >= 1; a--) {
//   for (let b = a; b >= 1; b--) {
//     document.write(b);
//   }
//   // document.write(a)
//   document.write("<br>");
// }

// document.write("<hr>");

// for (let a = 5; a >= 1; a--) {
//   for (let b = 1; b <= a; b++) {
//     document.write(a);
//   }
//   document.write("<br>");
// }

// document.write("<hr>");

const desktop = "center";
const tablet = "left";
const mobile = "right";

let all_devices = [desktop, tablet, mobile];
const get_values = ["center", "left", "right"];
const set_values = ["center", "start", "end"];
const values = {};

for (i in get_values){
    values[get_values[i]] = set_values[i]
}

console.log(values[mobile])
