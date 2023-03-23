// The mechanism the JS interpreter uses to keep track
// of its place in a script that calls multiple functions.
// How JS "knows" what function is currently being run
// and what functions are called from within that
// function, etc.
const multiply = function (x, y) {
  return x * y;
};
const square = (x) => {
  x * x;
};
const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};
console.log(isRightTriangle(3, 4, 5));
// When a script calls a function, the interpreter adds it to the
// call stack and then starts carrying out the function.
// Any functions that are called by that function are added to
// the call stack further up, and run where their calls are
// reached.
// When the current function is finished, the interpreter takes
// it off the stack and resumes execution where it left off in
// the last code listing.
