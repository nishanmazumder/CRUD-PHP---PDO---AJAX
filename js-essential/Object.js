let Car = {
  speed : 1,
  color: "white",
  brand: "Bugatti",
  get carColor(){
    return this.color
  }
}

console.log(Car.carColor);

for(el in Car){
  console.log(Car[el]);
}

function prototype(){
  return "this is proto"
}

console.log(prototype.prototype);

function Person(age, eyecolor) {
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

let person = new Person(30, "black")


