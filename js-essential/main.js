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

// main(); // 10 20 30

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
// outerReturn() // 1
// outerReturn() // 2
// outerReturn() //3

// Cyrring

let cyrring_func = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

// console.log(cyrring_func(1)(2)(3)); // 6

// Prototype
function Person(fname, lname) {
  this.fisrtname = fname;
  this.lastname = lname;
}

Person.prototype.getFullname = function () {
  return this.fisrtname + " " + this.lastname;
};

// let person1 = new Person("Nishan", "M");

function checkAge(fname, lname) {
  Person.call(this, fname, lname);
  this.hasAge = true;
}

checkAge.prototype.hasAge = function () {
  console.log("Age available!");
};

checkAge.prototype = Object.create(Person.prototype);

let check = new checkAge("Nishan", "M");

// console.log(check.getFullname());

// class

class User {
  constructor(fname, lname) {
    this.fisrtname = fname;
    this.lastname = lname;
  }

  fullname() {
    return this.fisrtname + " " + this.lastname;
  }
}

class Employe extends User {
  constructor(fname, lname) {
    super(fname, lname);
    this.designation = "developer";
  }
  setDesignation() {
    return this.lastname + "join as" + this.designation;
  }
}

// let newEmploye = new Employe("Nishan -", "M-");
// console.log(newEmploye.fullname())

// Counter
like_counter = () => {
  let btn = document.getElementById("counter_btn");
  let i = 0;

  btn.onclick = (e) => {
    e.preventDefault();
    let count = (i += 1);
    document.getElementById("counter").innerHTML = count;
  };
};

// like_counter()

// Show data
show_user_data = (id) => {
  let todos = [
    { id: 1, title: "Work Name 1", desc: "Work details 1" },
    { id: 2, title: "Work Name 2", desc: "Work details 2" },
    { id: 3, title: "Work Name 3", desc: "Work details 3" },
  ];

  let user_data_section = document.getElementsByClassName("user_data");
  let user_data_dlt_btn = document.createElement("button");
  let user_data_dlt_show = document.createElement("div");
  user_data_dlt_btn.innerHTML = "Delete";
  user_data_section[0].appendChild(user_data_dlt_btn);

  user_data_dlt_btn.onclick = (e) => {
    e.preventDefault();
    // let index = todos.indexOf(id)
    todos.splice(id, 1)
    console.log(todos)
  };
};

// show_user_data(2); // 3 no data will delete
