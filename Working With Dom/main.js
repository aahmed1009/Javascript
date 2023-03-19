// document.body.addEventListener("keypress", function (e) {
//   console.log(e);
// }); //This error is caused when trying to access a property or method of a null value. In this case, it seems that the code is trying to add an event listener for the "keypress" event to the body element, but the body element is null or does not exist.
document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("keypress", function (e) {
    console.log(e);
  });
});
//This will ensure that the body element exists before trying to add the event listener, and should prevent the "Cannot read properties of null" error.
