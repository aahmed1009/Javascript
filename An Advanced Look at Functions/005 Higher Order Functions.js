const add = function (x, y) {
  return x + y;
};

const subtraction = function (x, y) {
  return x - y;
};

const multiply = function (x, y) {
  return x * y;
};

const divide = function (x, y) {
  return x / y;
};

const operations = [add, subtraction, multiply, divide];

for (let func of operations) {
  let result = func(30, 5);
  console.log(result);
}

const thing = {
  doSomething: add,
};
console.log(thing.doSomething(20, 10));
