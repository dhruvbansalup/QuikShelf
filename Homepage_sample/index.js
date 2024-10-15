const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');   


prevBtn.addEventListener('click', () => {
  carousel.scrollLeft -= 200; // Adjust the scroll distance as needed
});

nextBtn.addEventListener('click', () => {
  carousel.scrollLeft += 200;
});