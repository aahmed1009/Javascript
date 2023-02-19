//functions as return values

const multiply = function (num) {
  return function (x) {
    return num * x;
  };
};

const triple = multiply(3);
console.log(triple(3));

const double = multiply(2);
console.log(double(2));

//function  checks if variable isBetween two variables range
const isBetween = function (x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
};
let isChild = isBetween(0, 20);
console.log(isChild(30));

let isAge = isBetween(0, 20);
console.log(isAge(19));
