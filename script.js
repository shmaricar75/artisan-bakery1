/* ==========================================================================
   The Rustic Crumb - Interactive Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const currentYearSpan = document.getElementById('currentYear');

  // Set current copyright year
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Sticky header background styling when scrolling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

// Interactive Contact Form Handling
function handleFormSubmit() {
  const submitBtn = document.getElementById('submitBtn');
  const feedback = document.getElementById('formFeedback');
  const form = document.getElementById('contactForm');

  if (!submitBtn || !feedback || !form) return;

  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending Message...';

  // Simulate network request
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
    
    feedback.className = 'form-feedback success';
    feedback.innerHTML = '&#10004; Thank you for reaching out! We have received your inquiry and our bakers will get back to you shortly.';
    feedback.style.display = 'block';

    form.reset();

    // Auto fade feedback after 7 seconds
    setTimeout(() => {
      feedback.style.display = 'none';
    }, 7000);
  }, 900);
}
