// In JavaScript, the event.preventDefault() method is used to prevent the default action of an event from occurring. For example, when a user clicks on a link, the default action is for the browser to navigate to the URL specified in the link's href attribute. You can prevent this default behavior and take control of the event by calling event.preventDefault() in the event handler function.

// Here's an example of how to use event.preventDefault() to prevent the default behavior of a form submission:

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the form from submitting normally
  // handle the form submission here
});
// In this example, we're using the addEventListener() method to attach an event listener to the form's submit event. When the form is submitted, the event listener function is called with an event object that we can use to prevent the default behavior with event.preventDefault(). After preventing the default behavior, you can perform any custom behavior that you want in response to the event.
