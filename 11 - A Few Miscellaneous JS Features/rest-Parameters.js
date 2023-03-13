const sum = function () {
  argsArr = [...arguments];
  return argsArr.reduce((total, currVal) => {
    return total + currVal;
  });
};
console.log(sum(1, 2, 3));
