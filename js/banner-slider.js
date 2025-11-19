class BannerSlider {
    constructor(sliderSelector, options = {}) {
        this.slider = document.querySelector(sliderSelector);
        this.slides = this.slider.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.interval = null;
        this.isHovered = false;
        
        // Default options
        this.options = {
            duration: 4000,
            ...options
        };

        this.init();
    }

    init() {
        // Show first slide
        if (this.slides.length > 0) {
            this.slides[0].classList.add('active');
        }

        // Start autoplay
        this.startAutoplay();

        // Add hover listeners
        this.slider.addEventListener('mouseenter', () => {
            this.isHovered = true;
            this.stopAutoplay();
        });

        this.slider.addEventListener('mouseleave', () => {
            this.isHovered = false;
            this.startAutoplay();
        });
    }

    startAutoplay() {
        if (!this.interval) {
            this.interval = setInterval(() => this.nextSlide(), this.options.duration);
        }
    }

    stopAutoplay() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    nextSlide() {
        // Remove active class from current slide
        this.slides[this.currentSlide].classList.remove('active');

        // Move to next slide
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;

        // Add active class to new slide
        this.slides[this.currentSlide].classList.add('active');
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BannerSlider('.banner-slider', {
        duration: 4000 // 4 seconds
    });
});