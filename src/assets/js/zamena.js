const btnCall = document.querySelector(".link__on__tel");

if (window.innerWidth <= 575) {
  btnCall.innerHTML = "Записаться";
} else {
  btnCall.innerHTML = "Обратный звонок";
}
