function changeColor() {
            // Генерирует случайный цвет в шестнадцатеричной системе счисления с помощью Math.random() и Math.floor().
            const randomColor = Math.floor(Math.random()*16777215).toString(16);

            // Задает сгенерированный цвет в качестве цвета фона документа.
            document.body.style.backgroundColor = "#" + randomColor;
        }


const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// При прокрутке страницы более чем на 20 пикселей показывает кнопку возврат вверх (scrollToTopBtn).
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Прокручивает страницу к самому верху, устанавливая scrollTop документа на 0.
function goUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};