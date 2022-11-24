let person = {
  name: "Nishan",
  location: "Mirpur",
};

let available = {
  ...person,
  available: true,
};
console.log(available.name);

// Ternary Operator

x = 5;
y = 10;

let isOdd = 10 % 2 === 0 ? true : false;
console.log(isOdd);

makeString = "3" % "2";
console.log(makeString);

// arrow function
const arrowFun = (a, b) => {
  return a + b;
};
console.log(arrowFun(5, 10));

// Constructor SET - remove duplicate

let numArr = ["set", 1, 2, 3, 4, 5, 3, 1, 5];
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(1);

let newSet = [...numArr, ...mySet, 6, 8, 9];

console.log(...new Set(newSet));


