//spread for function calls
//spread in Array literals
//spread in object literals
//they behave differently depending on where you use it

//TODO:WE CAN SPREAD STRINGS !!!!!!!!!!!!!!!!!!!!!!!
console.log(..."ALAA AHMED GAMAL");
//TODO://spread for function calls
// console.log(Math.max(1, 2, 3, 5, 8, 24, 358, 78));
const nums = [1, 2, 3, 5, 8, 24, 358, 78];
// console.log(Math.max(nums)); //NAN >not a number
//instead we can use spread operator
//we are spreading nums array into individual argument
// console.log(Math.max(...nums));

function giveMeFour(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "orange", "yellow", "green"];
// Without spread:
giveMeFour(colors);
// a ["red", "orange", "yellow", "green"]
// b undefined
// c undefined
// d undefined

// WITH SPREAD!!!
// Values are passed as separate args:
giveMeFour(...colors);
// a 'red'
// b 'orange'
// c 'yellow'
// d 'green'

//We can also spread strings!
giveMeFour(..."GOAT");
// a G
// b O
// c A
// d T

//TODO:spread in Array literals
// Create a new array using
// an existing array. Spreads
// the elements from one
// array into a new array.
const cephalopods = [
  "dumbo octopus",
  "humboldt squid",
  "flamboyant cuttlefish",
];

const gastropods = ["giant african snail", "banana slug", "variable neon slug"];

const cnidaria = ["fire coral", "moon jelly"];

const mollusca = [...cephalopods, ...gastropods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

const inverts = [...cnidaria, ...gastropods, ...cephalopods];
//["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

const cephCopy = [...cephalopods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]
console.log(cephCopy);

//TODO:Copies propertiesfrom one objectinto another object literal.
function giveMeFour(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

// Without spread:
giveMeFour(colors);
// a ["red", "orange", "yellow", "green"]
// b undefined
// c undefined
// d undefined

// WITH SPREAD!!!
// Values are passed as separate args:
giveMeFour(...colors);
// a 'red'
// b 'orange'
// c 'yellow'
// d 'green'

//We can also spread strings!
giveMeFour(..."GOAT");
// a G
// b O
// c A
// d T
