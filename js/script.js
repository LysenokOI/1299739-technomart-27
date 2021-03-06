function writeUs() {
  var openPopupButton = document.querySelector(".about-us__btn");
  var popup = document.querySelector(".modal.write-us");
  var closePopupButton = popup.querySelector(".btn-modal-close");
  var form = popup.querySelector("form");
  var nameField = popup.querySelector("[name=name]");
  var emailField = popup.querySelector("[name=email]");
  var textField = popup.querySelector("[name=text]");
  var isStorageSupport = true;
  var nameStorage = "";
  var emailStorage = "";

  try {
    nameStorage = localStorage.getItem("nameField");
    emailStorage = localStorage.getItem("emailField");
  } catch (err) {
    isStorageSupport = false;
  }
  openPopupButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__show_flex");
    if (nameStorage) {
      nameField.value = nameStorage;
    } else {
      nameField.focus();
    }
    if (emailStorage) {
      emailField.value = emailStorage;
    }
    if (nameStorage && !emailStorage) {
      emailField.focus();
    }
    if (nameStorage && emailStorage) {
      textField.focus();
    }
  });
  closePopupButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show_flex");
    popup.classList.remove("modal-error");
  });
  form.addEventListener("submit", function (evt) {
    if (!nameField.value || !emailField.value || !textField.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      void popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("nameField", nameField.value);
        localStorage.setItem("emailField", emailField.value);
      }
    }
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal__show_flex")) {
        popup.classList.remove("modal__show_flex");
        popup.classList.remove("modal-error");
      }
    }
  });
}

function map() {
  var openMap = document.querySelector(".contacts__link_map");
  var popup = document.querySelector(".modal-map");
  var closePopupButton = popup.querySelector(".btn-modal-close");

  openMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__show_block");
  });
  closePopupButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show_block");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal__show_block")) {
        popup.classList.remove("modal__show_block");
      }
    }
  });
}

function goodsCardBasket() {
  var openPopupButtonList = document.querySelectorAll(".goods-card__link_buy");
  var popup = document.querySelector(".modal-add-basket");
  var closePopupButton = popup.querySelector(".btn-modal-close");
  var closePopupBigButton = popup.querySelector(".modal-add-basket__continue");

  for (var i = 0; i < openPopupButtonList.length; i++) {
    var openPopupButton = openPopupButtonList[i];

    openPopupButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal__show_flex");
    });
  }
  closePopupButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show_flex");
  });
  closePopupBigButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show_flex");
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal__show_flex")) {
        popup.classList.remove("modal__show_flex");
      }
    }
  });
}

if (document.querySelector(".about-us__btn") !== null && document.querySelector(".modal.write-us") !== null) {
  writeUs();
}

if (document.querySelector(".contacts__link_map") !== null && document.querySelector(".modal-map") !== null) {
  map();
}

if (document.querySelector(".goods-card__link_buy") !== null && document.querySelector(".modal-add-basket") !== null) {
  goodsCardBasket();
}