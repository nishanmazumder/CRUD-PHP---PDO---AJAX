// nested function

let a = 10;

const main = () => {
  let b = 20;
  const inner = () => {
    let c = 30;

    console.log(a, b, c);
  };

  inner();
};

// main();

// clouser

function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner;
}

// const outerReturn = outer();
// outerReturn()
// outerReturn()
// outerReturn()

// Cyrring

let person = {
  name: "Nishan",
  location: "Mirpur",
};

let userInfo = (obj) => {
  return function (info) {
    return obj[info];
  };
};

let getData = userInfo(person);

console.log(getData('name'));

// Prototype

