const servicesItems = document.querySelectorAll(".services__item");

const buttonsContainer = document.querySelector(".services__buttons");

const buttonAllS = document.querySelectorAll(".services__button");

/****************filter adaptive*************/

const buttonCategory = document.querySelector(".category");

if (buttonCategory) {
  buttonCategory.addEventListener("click", () => {
    buttonsContainer.classList.toggle("_active-category");
  });
}

/**********************************************************/

if (buttonsContainer) {
  buttonsContainer.addEventListener("click", (event) => {
    //проверяем кли только по кнопкам
    if (event.target.tagName !== "BUTTON") {
      return false;
    }
    buttonAllS.forEach((item) => {
      item.classList.remove("_active-btn");
    });
    event.target.classList.add("_active-btn");
    buttonsContainer.classList.remove("_active-category");
    buttonCategory.innerHTML = event.target.value;
    //получаем дата атрибут с кнопки
    let filterClass = event.target.dataset["f"];

    servicesItems.forEach((elem) => {
      elem.style.display = "flex";
      if (!elem.classList.contains(filterClass) && filterClass !== "all") {
        elem.style.display = "none";
      }
    });
  });
}
