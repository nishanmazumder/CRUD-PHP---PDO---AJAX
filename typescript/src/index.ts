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

console.log(person.personFun(new Date("December 17, 1995 03:24:00")));

