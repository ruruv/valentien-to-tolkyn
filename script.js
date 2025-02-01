// Функция для увеличения кнопки "Да" при нажатии на "Нет"
function increaseSize() {
  let yesButton = document.getElementById('yesButton');
  let currentScale = yesButton.style.transform.match(/scale\(([^)]+)\)/);
  let scale = currentScale ? parseFloat(currentScale[1]) : 1;

  yesButton.style.transform = `scale(${scale + 0.1})`; // Увеличиваем кнопку "Да"
}



// Функция для принятия выбора (кнопка "Да")
function acceptChoice() {
  let choices = document.getElementById('choiceButtons'); // Контейнер с кнопками
  let bearGif = document.getElementById('bearGif');

  choices.remove(); // Полностью удаляем кнопки

  // Меняем фон на романтический
  document.body.style.backgroundColor = "#ffccdd";

  // Меняем гифку
  bearGif.src = "public/images/happy-bear.gif"; // Ставим радостного мишку

  // Показываем сообщение
  let message = document.createElement('p');
  message.textContent = 'Ура! Ты моя половинка! 💖';
  message.style.fontSize = "2em";
  message.style.color = "#ff3366";
  document.body.appendChild(message);
}
// Добавляем обработчики событий для кнопок
document.getElementById('noButton').addEventListener('click', increaseSize);
document.getElementById('yesButton').addEventListener('click', acceptChoice);
