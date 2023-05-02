const header = document.querySelector('.header');
const menuBtn = header.querySelector('.menu-btn');
const menuIcons = header.querySelector('.menu-icons');

menuBtn.addEventListener('click', () => {
  menuIcons.classList.toggle('show');
});

