//creates a new array with a results of calling a callback on every element in the array
const numbers = [20, 40, 60, 80];

numbers.map(function (n) {
  return n * 2;
}); //map doesn't mutate the original array lazm

const doubles = numbers.map(function (n) {
  return n * 2;
});
console.log(doubles);

const numberss = [21, 22, 23, 24, 25, 26, 27];
const numDetails = numberss.map(function (n) {
  return {
    value: n,
    isEven: n % 2 == 0,
  };
});
console.log(numDetails);

const words = ["asap", "byob", "rsvp", "diy"];
let WORDD = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});
console.log(WORDD);
