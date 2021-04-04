const prevButton = document.querySelector(".js-prevSlider");
const nextButton = document.querySelector(".js-nextSlider");
const sliderList = document.querySelector(".js-slderList");
const sliderContainer = document.querySelector(".js-sliderContainer");
const sliderArray = Array.from (document.querySelectorAll(".js-sliderList li"
));

console.log(sliderArray);

const totalSliderNumber = sliderArray.length;
const SLIDER_CLASS = "active";
let currentSlide = document.querySelector(".js-sliderList li:nth-child(1)");
let currentSlideNumber = 1;

let slideshowInterval = null;

currentSlide.classList.add(SLIDER_CLASS);

const handlePrevClick = () => {
    if(currentSlideNumber === 1) {
        currentSlideNumber = totalSliderNumber;
    }else {
        currentSlideNumber--;
    }
    transitionTo(currentSlideNumber);
}

const handleNextClick = () => {
    if(currentSlideNumber === totalSliderNumber) {
        currentSlideNumber = 1;
    } else {
        currentSlideNumber++;
    }
    transitionTo(currentSlideNumber);
}

const transitionTo = slideNumber => {
    currentSlide.classList.remove(SLIDER_CLASS);
    currentSlide = document.querySelector(`.js-sliderList li:nth-child(${slideNumber})`);
    currentSlide.classList.add(SLIDER_CLASS);
}

const handleMouseOver = () => {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
}

const createInterval = () => {
    slideshowInterval = setInterval(handleNextClick, 2000);
}

createInterval();
prevButton.addEventListener("click", handlePrevClick);
nextButton.addEventListener("click", handleNextClick);
sliderContainer.addEventListener("mouseover", handleMouseOver);
sliderContainer.addEventListener("mouseout", createInterval);