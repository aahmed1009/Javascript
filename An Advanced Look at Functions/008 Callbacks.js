//callback function is a function passed into another function as argument, which is then invoked inside outer function
//one time thing
//just pass it as anonymous function

// setTimeout(function () {
//   alert("Hello ");
// }, 3000);

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("why did you click me");
});
