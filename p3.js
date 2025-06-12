document.addEventListener('DOMContentLoaded', function() {
  // Engine Slider Functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll('.engine-img');
  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (slides[index]) {
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      currentSlide = index;
    }
  }

  // Initialize first slide
  showSlide(0);

  // Auto-Slider
  const slideInterval = setInterval(() => {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }, 4000);

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      showSlide(index);
    });
  });

  // Hamburger Menu
  const hamburger = document.querySelector('.hamburger');
  const navSec = document.querySelector('.nav-sec');
  
  if (hamburger && navSec) {
    hamburger.addEventListener('click', () => {
      navSec.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      if (navSec.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
      } else {
        icon.classList.replace('fa-times', 'fa-bars');
      }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navSec.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.replace('fa-times', 'fa-bars');
      });
    });
  }

  // 3D Model Responsive Fix
  function adjustModelViewer() {
    const modelViewers = document.querySelectorAll('model-viewer');
    const isMobile = window.innerWidth <= 768;
    
    modelViewers.forEach(viewer => {
      if (isMobile) {
        viewer.style.height = '50vh';
      } else {
        viewer.style.height = '500px';
      }
      
      // Force reload if model isn't showing
      if (!viewer.loaded) {
        viewer.load();
      }
    });
  }

  // Run responsive adjustments
  adjustModelViewer();
  window.addEventListener('resize', adjustModelViewer);
});