"use strict";
let age = 20;
age = 50;
if (age < 50)
    age += 10;
let number = [];
number[0] = 1;
number[1] = 2;
var testEnum;
(function (testEnum) {
    testEnum[testEnum["AA"] = 0] = "AA";
    testEnum[testEnum["BB"] = 1] = "BB";
    testEnum[testEnum["CC"] = 2] = "CC";
})(testEnum || (testEnum = {}));
function setMyNumber(params) {
    const myNumber = 100 * params;
    return myNumber;
}
function noImpReturn(params, year) {
    let x;
    if ((year || 2020) < 2020)
        x = params * 1.3;
    x = params * 1.2;
    if (Math.floor(x) < 50)
        return "not possible";
    return "possible";
}
let person = {
    name: "NNN",
    age: 30,
    personFun: (date) => {
        let x;
        if (undefined === date) {
            x = new Date();
            return x;
        }
        return date;
    }
};
console.log(person.personFun(new Date("December 17, 1995 03:24:00")));
//# sourceMappingURL=index.js.map