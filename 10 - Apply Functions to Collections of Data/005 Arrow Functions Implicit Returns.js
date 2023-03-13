// const square = (x) => {
//   return x * x;
// };
// console.log(square(4));

//implicit return ()

//expression expected
const square = (x) => x * x;
console.log(square(4));

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const EvenOrOdd = nums.map((x) => (x % 2 === 0 ? "Even" : "Odd"));
console.log(EvenOrOdd);
