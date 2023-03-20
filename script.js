"use strict";

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

// Получаем нужные элементы из DOM
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementsByClassName("close")[0];
const modalBtns = document.getElementsByClassName("modal-button");


// Добавляем обработчик клика на каждую кнопку "Посмотреть"
for (let i = 0; i < modalBtns.length; i++) {
  modalBtns[i].onclick = function() {
    modal.style.display = "block"; // Открываем модальное окно
    modalImg.src = this.previousElementSibling.src; // Устанавливаем изображение в модальном окне
    document.body.style.overflow = "hidden";
  }
}

// Добавляем обработчик клика на крестик, чтобы закрыть модальное окно
closeBtn.onclick = function() {
  modal.style.display = "none"; // Закрываем модальное окно
  document.body.style.overflow = "auto";
}

// Добавляем обработчик клика на весь документ, чтобы закрыть модальное окно при клике вне его области
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Закрываем модальное окно
    document.body.style.overflow = "auto";
  }
}
