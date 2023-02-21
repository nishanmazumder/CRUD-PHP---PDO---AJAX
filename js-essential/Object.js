let Car = {
  speed : 1,
  color: "white",
  brand: "Bugatti",
  get carColor(){
    return this.color
  }
}

// console.log(Car.carColor);

for(el in Car){
  console.log(Car[el]);
}

function prototype(){
  return "this is proto"
}

// console.log(prototype.prototype);

function Person(age, eyecolor) {
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

let person = new Person(30, "black")

const myNumber = {}
const myNumberArr = [1, 2, 3]

myNumber[Symbol.iterator] = function () {
  let i = 0
  let done = false
  return{
    next(){
      i += 10
      if(i == 100) {done = true}
      return{
        value: i,
        done: done
      }
    }
  }
}

// for(number of myNumber){
//   console.log(number)
// }

console.log(Object.values(Car));


