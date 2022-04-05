const hamburgerIcon = document.querySelector(".image");
const xIcon = document.querySelector(".image2");
const navbar = document.querySelector(".navigator");
const upper = document.querySelector(".upper");
const links = document.querySelectorAll(".nav-link");
hamburgerIcon.addEventListener("click", () => {
  navbar.classList.toggle("menu-open");
  upper.classList.toggle("upper-menu-open");
  hamburgerIcon.classList.toggle("image-menu-open");
  upper.classList.toggle("link-menu-open");
  xIcon.classList.toggle("image-menu-appear");
});

xIcon.addEventListener("click", () => {
  navbar.classList.remove("menu-open");
  upper.classList.remove("upper-menu-open");
  hamburgerIcon.classList.remove("image-menu-open");
  upper.classList.remove("link-menu-open");
  xIcon.classList.toggle("image-menu-appear");
});
links.addEventListener("click", () => {
  navbar.classList.remove("menu-open");
  upper.classList.remove("upper-menu-open");
  hamburgerIcon.classList.remove("image-menu-open");
  upper.classList.remove("link-menu-open");
});
