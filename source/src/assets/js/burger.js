const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__menu");

iconMenu.addEventListener("click", function (e) {
  document.body.classList.toggle("_lock");
  iconMenu.classList.toggle("_active");
  menuBody.classList.toggle("_active");
});
