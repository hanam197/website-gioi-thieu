// Village Slider Script
const villagesSlider = document.getElementById('villagesSlider');
const villagesDots = document.getElementById('villagesDots');
const villageCards = document.querySelectorAll('.village-card-slider');
let currentVillageIndex = 0;

// Create dots
villageCards.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('slider-dot');
    if (index === 0) dot.classList.add('active');
    dot.onclick = () => goToVillageSlide(index);
    villagesDots.appendChild(dot);
});

function slideVillages(direction) {
    const newIndex = currentVillageIndex + direction;

    if (newIndex < 0 || newIndex >= villageCards.length) {
        return;
    }

    goToVillageSlide(newIndex);
}

function goToVillageSlide(index) {
    if (index < 0) index = 0;
    if (index >= villageCards.length) index = villageCards.length - 1;

    const cardWidth = villageCards[0].offsetWidth;
    const gap = 32; // 2rem = 32px
    const scrollPosition = (cardWidth + gap) * index;

    villagesSlider.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });

    currentVillageIndex = index;
    updateDots();
}

function updateDots() {
    const dots = villagesDots.querySelectorAll('.slider-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentVillageIndex);
    });
}

// Update dots on manual scroll
let scrollTimeout;
villagesSlider.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const cardWidth = villageCards[0].offsetWidth;
        const gap = 32;
        const scrollLeft = villagesSlider.scrollLeft;
        const newIndex = Math.round(scrollLeft / (cardWidth + gap));

        if (newIndex !== currentVillageIndex && newIndex >= 0 && newIndex < villageCards.length) {
            currentVillageIndex = newIndex;
            updateDots();
        }
    }, 100);
});