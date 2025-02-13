const chooseColor = document.querySelectorAll(".choose-color__btn");
const contentItem = document.querySelectorAll(".content-item ");

chooseColor.forEach(function (el) {
  el.addEventListener("click", open);
});

function open(evt) {
  const target = evt.currentTarget;

  chooseColor.forEach(function (item) {
    item.classList.remove("choose-color__btn--active");
  });

  target.classList.add("choose-color__btn--active");
}
