const servicesItems = document.querySelectorAll(".services__item");

const buttonsContainer = document.querySelector(".services__buttons");

/****************filter adaptive*************/

const buttonCategory = document.querySelector(".category");

buttonCategory.addEventListener("click", () => {
  buttonsContainer.classList.toggle("_active-category");
});

/**********************************************************/

buttonsContainer.addEventListener("click", (event) => {
  //проверяем кли только по кнопкам
  if (event.target.tagName !== "BUTTON") return false;
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
