const hamburgerIcon = document.querySelector(".image");
const navbar = document.querySelector(".navigator");
const upper = document.querySelector(".upper");

hamburgerIcon.addEventListener("click", () => {
  navbar.classList.toggle("menu-open");
  upper.classList.toggle("upper-menu-open");
  hamburgerIcon.classList.toggle("image-menu-open");
});
