/* Form validation */

var formElements = {
  form: document.getElementById("contact-form"),
  addendum1: document.getElementById("form__addendum_1"),
  addendum2: document.getElementById("form__addendum_2"),
  errorContainer: document.getElementById("form__error"),
};

formElements.form.addEventListener("submit", function (evt) {
  if (
    formElements.addendum1.checked ||
    formElements.addendum2.value.length > 0
  ) {
    formElements.errorContainer.innerHTML = "";
    evt.preventDefault();

    var msg = document.createElement("p");
    var msgText = document.createTextNode(
      "An error occurred whilst submitting the form. Please refresh the page to try again"
    );

    msg.appendChild(msgText);
    msg.setAttribute("role", "alert");

    formElements.errorContainer.appendChild(msg);
    return false;
  }
});
