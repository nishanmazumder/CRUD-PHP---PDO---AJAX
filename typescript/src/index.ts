let age: number = 20;

age = 50;

if (age < 50)
   age += 10


let number: number[] = [];

number[0] = 1;
number[1] = 2;

// number.forEach(el => console.log(el));

enum testEnum { AA, BB, CC }

// console.log(testEnum.CC);

function setMyNumber(params: number): number {
   const myNumber: number = 100 * params;

   return myNumber;
}


function noImpReturn(params: number, year?: number): string {

   let x: number;

   if ((year || 2020) < 2020)
      x = params * 1.3

   x = params * 1.2

   if (Math.floor(x) < 50)
      return "not possible";

   return "possible";

}

// setMyNumber(100);

// console.log(noImpReturn(50, 2016));

let person: {
   name: string,
   age: number,
   personFun: (date?: Date) => void
} = {
   name: "NNN",
   age: 30,
   personFun: (date?: Date) => {
      let x: Date;

      if (undefined === date) {
         x = new Date();
         return x;
      }

      return date
   }
}

person.name = "ontest";

// console.log(person);

type Person = {
   readonly name: string,
   age: number | string,
   personFun: (param: string | null) => void
}

const person2: Person = {
   name: "testName",
   age: '1111',
   personFun: () => {
      return person2.name + person2.age
   }
}

// console.log(person2.personFun('hello'));

type Birthday = {
   birthday: Date
}

function getBirthDay(id: number): Birthday | null {
   return 0 === id ? null : { birthday: new Date() };
}

const ABirth = getBirthDay(1);

// console.log(ABirth?.birthday?.getFullYear());

const log: any = null;

// console.log(log?.());

// const devide = (
//    { devidend, devisor }
//       : { devidend: number, devisor: number })
//    : number | undefined => {
//    return devidend / devisor;
// }

// console.log(devide({ devidend: 10, devisor: 5 }));


let greet: unknown = "hello";



console.log(typeof greet);


let word: unknown;

word = 2;

word = {
   setWord: () => {
      console.log("test word!");
   }
} as {
   setWord: () => void
}

if ('object' === typeof (word) && null !== word) {
   (word as { setWord: Function }).setWord();
}


interface Car {
   brand: string
}
class MyCar implements Car {
   brand;

   constructor(brand: string) {
      this.brand = brand
   }

   name = () => {
      console.log(this.brand);
   }
}

let car = new MyCar('BMW');

let carName = car.name();

export default carName;





