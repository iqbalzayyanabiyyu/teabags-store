// Menu Toggler: Start
const burgerMenu = document.querySelector(".burger-menu");
const open = document.querySelector(".links-mobile");

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("burger");
  open.classList.toggle("open");
});
// Menu Toggler: End




// Carousel: Start
const slides = document.getElementsByClassName('carousel-item');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;

prev.addEventListener("click", function() {
    prevSlide()
});

next.addEventListener("click", function() {
    nextSlide()
});

function prevSlide() {
    if (index == 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    changeSlide()
}

function nextSlide() {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeSlide()
}

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("open-slide");
    }
    slides[index].classList.add("open-slide");
}
// Carousel: End