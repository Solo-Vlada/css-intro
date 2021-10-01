//IIFE
//(function(){})();

(function(){
const slides = [
    '<img src="img/baby-yoda.svg" alt="BabyYoda">',
    '<img src="img/banana.svg" alt="Banana">',
    '<img src="img/girl.svg" alt="Girl">',
    '<img src="img/viking.svg" alt="Viking">'
]

let currentSlide = 0; 

function showCurrentSlide() {
    const slideContainer = document.querySelector('.slide-container');
    slideContainer.innerHTML = slides[currentSlide];

}

function nextSlide() {
    currentSlide ++; 
    if(currentSlide >= slides.length) currentSlide = 0;
    showCurrentSlide();
}

function prevSlide() {
    currentSlide --; 
    if(currentSlide < 0) currentSlide = slides.length - 1;
    showCurrentSlide();
}

//setInterval(nextSlide, 1000);
showCurrentSlide();

const btnNext = document.querySelector('.carousel .slide-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.carousel .slide-prev');
btnPrev.addEventListener('click', prevSlide);
})();
