
const main = document.querySelector('#main');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.5;

// const imgClick = evt => {
//     main.src = evt.target.src;
//     evt.target.style.opacity = opacity;
// }

function imgClick(evt) {
  main.src = evt.target.src;
  evt.target.style.opacity = opacity;
}

imgs.forEach(img => img.addEventListener('click', imgClick));
