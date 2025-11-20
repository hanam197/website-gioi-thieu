// Banner Slider Auto-rotation with Hover Pause
(function() {
  let bannerSlider = null;
  let slides = null;
  let currentSlide = 0;
  let autoPlayInterval = null;
  const autoPlayDelay = 5000; // 5 seconds

  function initBannerSlider() {
    bannerSlider = document.querySelector('.banner-slider');
    if (!bannerSlider) return;

    slides = bannerSlider.querySelectorAll('.slide');
    if (slides.length === 0) return;

    // Set first slide as active
    slides[0].classList.add('active');

    // Start auto-play
    startAutoPlay();

    // Pause on hover, resume on mouse leave
    bannerSlider.addEventListener('mouseenter', stopAutoPlay);
    bannerSlider.addEventListener('mouseleave', startAutoPlay);
  }

  function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Ensure index is within bounds
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    // Add active class to current slide
    slides[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function startAutoPlay() {
    if (autoPlayInterval) return; // Don't start if already running
    
    autoPlayInterval = setInterval(nextSlide, autoPlayDelay);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  document.addEventListener('DOMContentLoaded', initBannerSlider);
})();

// Banner Overlay & Header Background Management
(function() {
  const body = document.body;
  const bannerHome = document.querySelector('.banner-home');
  
  if (!bannerHome) return;

  const bannerHeight = bannerHome.offsetHeight;

  function updateBannerState() {
    if (window.scrollY > bannerHeight * 0.5) {
      // Scroll past banner - add dark overlay
      body.classList.add('banner-scrolled');
    } else {
      // Still in banner area - light overlay
      body.classList.remove('banner-scrolled');
    }
  }

  // Update on scroll
  window.addEventListener('scroll', updateBannerState, { passive: true });
  
  // Initial check
  updateBannerState();
})();


// Handle both header scroll state and mobile menu
(function () {
  var header = null;
  var nav = null;
  var menuButton = null;
  var scrollThreshold = 80; // Trigger when scrolled down at least 80px

  function onScroll() {
    if (!header) return;
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  function toggleMenu() {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
    nav.setAttribute('aria-expanded', !isExpanded);
  }

  // Close mobile menu when clicking outside
  function handleOutsideClick(e) {
    if (window.innerWidth > 720) return; // Only on mobile
    if (!nav.contains(e.target) && !menuButton.contains(e.target)) {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-expanded', 'false');
    }
  }

  // Handle submenu toggles
  function setupSubmenus() {
    const submenus = document.querySelectorAll('.has-submenu > a');
    submenus.forEach(link => {
      link.addEventListener('click', function(e) {
        if (window.innerWidth <= 720) {
          e.preventDefault();
          const parent = this.parentElement;
          const isExpanded = parent.getAttribute('aria-expanded') === 'true';
          parent.setAttribute('aria-expanded', !isExpanded);
        }
      });
    });
  }

  // Close menu on escape key
  function handleEscape(e) {
    if (e.key === 'Escape') {
      menuButton.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-expanded', 'false');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    header = document.querySelector('.header');
    nav = document.querySelector('.nav-menu');
    menuButton = document.querySelector('.nav-toggle');

    if (!header) {
      console.warn('Header element not found!');
      return;
    }

    // Setup event listeners
    onScroll(); // Initial scroll check
    window.addEventListener('scroll', onScroll, { passive: true });
    menuButton.addEventListener('click', toggleMenu);
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    setupSubmenus();

    // Handle resize (in case of orientation change)
    window.addEventListener('resize', () => {
      if (window.innerWidth > 720) {
        menuButton.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-expanded', 'false');
      }
    });

    // Initialize back to top functionality
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        // Initially hide the button
        backToTop.classList.remove('visible');
        
        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, { passive: true });

        // Smooth scroll to top on click
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
  });
})();
