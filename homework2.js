// 2 Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

const modal = document.getElementById("myModal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const closeModalButton2 = document.getElementById("closeModalButton");

// Стилі для модального вікна
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.zIndex = "1000";
modal.style.left = "100";
modal.style.right = "100";
modal.style.width = "100%";
modal.style.height = "100%";
modal.style.backgroundColor = "rgb(0, 0, 0, 0.5)";

// Стилі для вмісту модального вікна
const modalContent = document.querySelector(".modal-content");
modalContent.style.position = "absolute";
modalContent.style.top = "50%";
modalContent.style.left = "50%";
modalContent.style.transform = "translate(-100%, -100%)";
modalContent.style.padding = "20px";
modalContent.style.borderRadius = "5px";
modalContent.style.width = "300px";
modalContent.style.backgroundColor = "white";
modalContent.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";


closeModalButton.style.cursor = "pointer"; 
closeModalButton.style.float = "right"; 
closeModalButton.style.fontSize = "20px";

 // Функція для відкриття модального вікна
openModalButton.onclick = function() {
  modal.style.display = "block";
}

// Функція для закриття модального вікна
function closeModal() {
  modal.style.display = "none";
}

// Додаємо обробники подій для закриття модального вікна
closeModalButton.onclick = closeModal;
closeModalButton2.onclick = closeModal;

// Закриття модального вікна при натисканні поза ним
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
}
