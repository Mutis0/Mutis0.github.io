initializePage();

const poster = documents.getElementById('poster');
const header = document.querySelector('.header');
const menuBtn = header.querySelector('.menu-btn');
const menuIcons = header.querySelector('.menu-icons');

function fetchShopProducts() {
  fetch ("http://localhost:3000/shop")
  .then(response => response.json()) 
  .then(products => {
    renderPosterDetails(products);
  })
}

menuBtn.addEventListener('click', () => {
  menuIcons.classList.toggle('show');
});

function initializePage(){
  fetchShopProducts();
}
