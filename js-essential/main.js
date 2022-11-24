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

