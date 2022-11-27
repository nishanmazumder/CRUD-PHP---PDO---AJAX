let arr = [4, 9, 16, 25];

// Array Map
function outer(arr) {
  let after_count = [];

  arr.map((val) => {
    after_count.push(Math.sqrt(val));
  });

  return after_count;
}

// let outer_cehck = outer(arr);
// console.log(outer_cehck); // [2, 3, 4, 5]

// Array Filter
let filter = arr.filter((val)=>{
    return val > 9
})

// console.log(filter) // [16, 25]

// Index Of
let indexof = arr.indexOf(4)
// console.log(indexof) // 0

// Splice
let spliceArr = arr.splice(2, 2, 36, 49)
// console.log(arr) // [ 4, 9, 36, 49 ]



