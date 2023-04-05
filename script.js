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

/*для отправки формы*/

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // остановить отправку формы по умолчанию
  const formData = new FormData(form); // получить данные формы
  const xhr = new XMLHttpRequest(); // создать объект XMLHttpRequest
  xhr.open('POST', 'send-form.php'); // настроить запрос
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Данные успешно отправлены!');
      form.reset(); // очистить данные формы
    } else {
      alert('Ошибка отправки данных!');
    }
  };
  xhr.send(formData); // отправить данные формы на сервер
});
