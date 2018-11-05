
const main = document.querySelector('#main');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.5;

const [first, ...rest] = imgs;
first.style.opacity = opacity;

const imgClick = (evt) => {
  imgs.forEach(img => (img.style.opacity = 1));
  main.src = evt.target.src;
  evt.target.style.opacity = opacity;
}

imgs.forEach(img => img.addEventListener('click', imgClick));
