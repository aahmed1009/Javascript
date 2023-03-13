//Something I need to cover that you shouldn't stress about if it confuses you
//FIXME: HOISTING Behavior
console.log(animal); //undefined

var animal = "cat";

console.log(animal);

///variables with let are n't hoisted

//console.log(animal) //ERROR
let animals = "DOG";

//FIXME:Same behavior as let
// console.log(animal) //ERROR
// const animals = "DOG";

pets(); //function still  works
function pets() {
  console.log("AWOOOOOO");
}
pets(); //function works

//hoot();//ERROR
console.log(hoot); //undefined
var hoot = function () {
  console.log("HOO HOOOOOOOOOO");
};
hoot(); //works

hootTWo(); //ERROR
let hootTWo = function () {
  console.log("HOOOOO HOOOOOOOOOO");
};
hootTWo(); //works
