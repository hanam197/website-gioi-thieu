// Handle both header scroll state and mobile menu
(function () {
  var header = null;
  var nav = null;
  var menuButton = null;
  var scrollThreshold = 30;

  function onScroll() {
    if (!header) return;
    if (window.scrollY > scrollThreshold) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
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
    }});
