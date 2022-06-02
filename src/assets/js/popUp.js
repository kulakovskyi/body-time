const popUp = document.querySelector(".popup");
const popUpContent = document.querySelector(".popup__info");
const telPopUp = document.querySelector(".link__on__tel");
const popUpClose = document.querySelector(".popup__close");
const body = document.querySelector("body");

/*Фикс на отступ для фиксированных елементов*/

const lockPadFixEl = document.querySelectorAll(".lock-padding");

let open = function () {
  popupPaddingRight();
  popUp.classList.add("_open");
  popUpContent.classList.add("_open");
  document.body.classList.add("_lock");
};

let close = function () {
  popUp.classList.remove("_open");
  popUpContent.classList.remove("_open");
  document.body.classList.remove("_lock");
  popUpContent.classList.remove("_form-out");
  formSuccses.classList.remove("_form-out");
  body.style.paddingRight = 0 + "px";
  for (let i = 0; i < lockPadFixEl.length; i++) {
    let el = lockPadFixEl[i];
    el.style.paddingRight = 0 + "px";
  }
};

let popupPaddingRight = function () {
  let width = window.innerWidth - document.querySelector(".wrapper").clientWidth + "px";

  for (let i = 0; i < lockPadFixEl.length; i++) {
    let el = lockPadFixEl[i];
    el.style.paddingRight = width;
  }

  console.log(window.innerWidth);
  console.log(document.querySelector(".wrapper").clientWidth);
  body.style.paddingRight = width;
};

telPopUp.addEventListener("click", (e) => {
  open();
  window.onclick = function (e) {
    if (e.target == popUp) {
      close();
    }
  };
});

popUpClose.addEventListener("click", (e) => {
  close();
});

/******************FORM*****************************/

const formValid = document.querySelector(".popup__form");
const formInputs = document.querySelectorAll(".js-input");
const formSuccses = document.querySelector(".form__succsesfull");
const closeBtn = document.querySelector(".button__close");
const checkBox = document.querySelector(".js-check");
const labelCheck = document.querySelector(".label__check");

formValid.onsubmit = function (event) {
  event.preventDefault();
  emptyInputs = Array.from(formInputs).filter((input) => input.value === "");

  formInputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("_error");
    } else {
      input.classList.remove("_error");
    }
  });

  if (!checkBox.checked) {
    labelCheck.classList.add("_error");
  } else {
    labelCheck.classList.remove("_error");
  }

  if (emptyInputs.length !== 0 || !checkBox.checked) {
    console.log("inputs not filled");
    return false;
  }
  popUpContent.classList.add("_form-out");
  popUpContent.classList.remove("_open");
  formSuccses.classList.add("_form-out");
};

closeBtn.addEventListener("click", function () {
  close();
});
