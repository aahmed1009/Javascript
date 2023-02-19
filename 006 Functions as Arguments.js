//
//functions as arguments

const fiveTimesCall = function (func) {
  func();
  func();
  func();
  func();
  func();
};

function helloWorld() {
  console.log(" HELLO WOLRD ");
}

// fiveTimesCall(helloWorld);

function sad() {
  console.log(" I'm So Sad");
}
fiveTimesCall(sad);

//function as argument with number of actions

const repeatedActions = function (action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
};
repeatedActions(helloWorld, 100);
