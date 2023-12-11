var burger_icon = document.querySelector(".toggle_menu");
var close_btn = document.querySelector(".close");
var links = document.querySelector(".links");
var lis = document.querySelectorAll(".links li");

burger_icon.addEventListener("click", () => {
  links.classList.add("hide");
});

close_btn.addEventListener("click", () => {
  links.classList.remove("hide");
});

lis.forEach((n) =>
  n.addEventListener("click", () => {
    links.classList.remove("hide");
  })
);
