// String
plusString = 10 + 10;
// console.log(String(plusString))
console.log(plusString.toString());

// Substring
let mytext = "I am Nishan-";
console.log(mytext.substring(1, 6));

//Math
let myMath = Math.random().toString(36).substring(2, 8);
console.log(myMath);

// NestedLoop
// for (let a = 1; a <= 100; a += 10) {
//   for (let b = a; b < a + 10; b++) {
//     console.log(b);
//   }
//   console.log("row");
// }

for(let odd = 1; odd <= 10; odd ++){
    if(odd % 2 == 0){
        console.log(odd)
    }
}
