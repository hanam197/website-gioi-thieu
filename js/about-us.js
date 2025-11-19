// IMAGE CAROUSEL
const carouselSlides = document.querySelectorAll('.image-carousel__slide');
const carouselPrevBtn = document.querySelector('.image-carousel__btn--prev');
const carouselNextBtn = document.querySelector('.image-carousel__btn--next');
let currentCarouselSlide = 0;

function showCarouselSlide(index) {
    carouselSlides.forEach(slide => slide.classList.remove('active'));
    carouselSlides[index].classList.add('active');
}

function nextCarouselSlide() {
    currentCarouselSlide = (currentCarouselSlide + 1) % carouselSlides.length;
    showCarouselSlide(currentCarouselSlide);
}

function prevCarouselSlide() {
    currentCarouselSlide = (currentCarouselSlide - 1 + carouselSlides.length) % carouselSlides.length;
    showCarouselSlide(currentCarouselSlide);
}

carouselNextBtn.addEventListener('click', nextCarouselSlide);
carouselPrevBtn.addEventListener('click', prevCarouselSlide);

// Auto-play carousel
setInterval(nextCarouselSlide, 5000);

// MISSION SLIDER
const missionSlides = document.querySelectorAll('.mission__slide');
const missionDots = document.querySelectorAll('.mission__slider-dot');
const missionPrevBtn = document.querySelector('.mission__slider-arrow--prev');
const missionNextBtn = document.querySelector('.mission__slider-arrow--next');
let currentMissionSlide = 0;

function showMissionSlide(index) {
    // Remove active class from all slides and dots
    missionSlides.forEach(slide => slide.classList.remove('mission__slide--active'));
    missionDots.forEach(dot => dot.classList.remove('mission__slider-dot--active'));

    // Add active class to current slide and dot
    missionSlides[index].classList.add('mission__slide--active');
    missionDots[index].classList.add('mission__slider-dot--active');

    currentMissionSlide = index;
}

function nextMissionSlide() {
    const nextIndex = (currentMissionSlide + 1) % missionSlides.length;
    showMissionSlide(nextIndex);
}

function prevMissionSlide() {
    const prevIndex = (currentMissionSlide - 1 + missionSlides.length) % missionSlides.length;
    showMissionSlide(prevIndex);
}

// Event listeners for arrows
missionNextBtn.addEventListener('click', nextMissionSlide);
missionPrevBtn.addEventListener('click', prevMissionSlide);

// Event listeners for dots
missionDots.forEach((dot, index) => {
    dot.addEventListener('click', () => showMissionSlide(index));
});

// Auto-play mission slider
setInterval(nextMissionSlide, 4000);