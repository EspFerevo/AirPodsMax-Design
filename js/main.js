const chooseColor = document.querySelectorAll(".choose-color__btn");
const contentItem = document.querySelectorAll(".content-item");

chooseColor.forEach(function (el) {
  el.addEventListener("click", open);
});

function open(evt) {
  const target = evt.currentTarget;
  const btn = target.dataset.button;

  const contentActive = document.querySelectorAll(`.${btn}`);

  // Убираем активный класс у всех кнопок
  chooseColor.forEach(function (item) {
    item.classList.remove("choose-color__btn--active");
  });

  // Добавляем активный класс на выбранную кнопку
  target.classList.add("choose-color__btn--active");

  // Убираем активный класс у всех изображений
  contentItem.forEach(function (item) {
    item.classList.remove("content-item__active");
  });

  // Добавляем активный класс нужным изображениям
  contentActive.forEach(function (item) {
    item.classList.add("content-item__active");
  });
}
