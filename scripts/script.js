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



// Slide: Start
let sliderContainer = document.querySelector(".images-company");
let innerSlider = document.querySelector(".inner-slider");

let pressed = false;
let startX;
let x;

const checkBoundary = () => {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
    }

    if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
};

const gestureDown = (e)=> {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
}

const gestureEnter = ()=> {
    sliderContainer.style.cursor = "grab";
}

const gestureUp = ()=> {
    sliderContainer.style.cursor = "grab";
    pressed = false;
}

const gestureMove = (e)=> {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;
    checkBoundary();
}

if(window.PointerEvent) {
    window.addEventListener("pointerdown",gestureDown);
    window.addEventListener("pointerenter", gestureEnter);
    window.addEventListener("pointerup", gestureUp);
    window.addEventListener("pointermove", gestureMove);
} else {
    window.addEventListener("touchdown",gestureDown);
    window.addEventListener("mouseenter", gestureEnter);
    window.addEventListener("touchup", gestureUp);
    window.addEventListener("touchmove", gestureMove);

    window.addEventListener("mousedown",gestureDown);
    window.addEventListener("mouseenter", gestureEnter);
    window.addEventListener("mouseup", gestureUp);
    window.addEventListener("mousemove", gestureMove);
}


// Slide: End