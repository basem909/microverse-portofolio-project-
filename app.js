const hamburgerIcon = document.querySelector('.image');
const xIcon = document.querySelector('.image2');
const navbar = document.querySelector('.navigator');
const upper = document.querySelector('.upper');
const linkMenu = document.querySelectorAll('.nav-link');

hamburgerIcon.addEventListener('click', () => {
  navbar.classList.toggle('menu-open');
  upper.classList.toggle('upper-menu-open');
  hamburgerIcon.classList.toggle('image-menu-open');
  upper.classList.toggle('link-menu-open');
  xIcon.classList.toggle('image-menu-appear');
});

const closeMenu = () => {
  navbar.classList.remove('menu-open');
  upper.classList.remove('upper-menu-open');
  hamburgerIcon.classList.remove('image-menu-open');
  upper.classList.remove('link-menu-open');
  xIcon.classList.remove('image-menu-appear');
};
xIcon.addEventListener('click', closeMenu);

linkMenu.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

const email = document.getElementById('mail');
const form = document.getElementById('contact-form');
const messageError = document.getElementById('error');

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    messageError.innerText = 'unfortunatlly the message was not submitted, The email address needs to be all small characters';
  }
});
