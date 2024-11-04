// 3 Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.
// Змінні для трьох кольорів
const redLight = document.getElementById("red");
const yellowLight = document.getElementById("yellow");
const greenLight = document.getElementById("green");

// Функція для скидання кольорів
function resetLights() {
  redLight.classList.remove("red");
  yellowLight.classList.remove("yellow");
  greenLight.classList.remove("green");
}

// Лічильник для кольорів світлофора
let currentLight = 0;


// Функція для зміни кольорів
function changeLight() {
  resetLights();

  // Змінюємо колір відповідно до значення лічильника
  if(currentLight === 0) {
    redLight.classList.add("red");
    setTimeout(() => {
      currentLight = 1;
      changeLight();
    }, 5000);
  } else if (currentLight === 1) {
    yellowLight.classList.add("yellow");
    setTimeout(() => {
      currentLight = 2;
      changeLight();
    }, 2000);

  } else if (currentLight === 2) {
    greenLight.classList.add("green");
    setTimeout(() => {
      currentLight = 3;
      changeLight();
    }, 3000);
  } else if (currentLight === 3) {
    yellowLight.classList.add("yellow");
    setTimeout(() => {
      currentLight = 0;
      changeLight();
    }, 2000);
  }
}
changeLight()

