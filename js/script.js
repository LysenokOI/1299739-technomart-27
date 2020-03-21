/*var popup = document.querySelector(".feedback-modal");
var link = document.querySelector(".open-feedback");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");
var storage = localStorage.getItem("name");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function () {
  if (storage) {
    name.value = storage;
    email.value = storage;
  }
})

console.log(storage);

form.addEventListener("submit", function () {
  if (isStorageSupport) {
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
  }
  console.log(storage);
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    form.getElementsByClassName("modal-close-button").click();
  }
});

*/
var popup = document.querySelector(".feedback-modal");
var form = popup.querySelector("form");

if (window.localStorage) {
  var elements = form.querySelectorAll('[name]');

  for (var i = 0, length = elements.length; i < length; i++) {
    (function (element) {
      var name = element.getAttribute('name');

      element.value = localStorage.getItem(name) || '';

      element.onkeyup = function () {
        localStorage.setItem(name, element.value);
      };
    })(elements[i]);
  }
}