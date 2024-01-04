const previous = document.querySelector(".prev");
const next = document.querySelector(".next");
const menu = document.querySelectorAll(".shortcut-images");
const n = menu.length;
previous.addEventListener("click", () => {
  for (let i = 0; i < 3; i++) {
    menu[i].style.display = "inline";
    menu[n - 1 - i].style.display = "none";
    previous.style.opacity = "0.5";
    next.style.opacity = "1.0";
  }
});

next.addEventListener("click", () => {
  for (let i = 0; i < 3; i++) {
    menu[i].style.display = "none";
    menu[n - 1 - i].style.display = "inline";
    previous.style.opacity = "1.0";
    next.style.opacity = "0.5";
  }
});
