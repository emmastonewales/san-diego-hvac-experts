/**
 * San Diego HVAC Experts - Vanilla JavaScript Interactivity
 * High-Converting, Accessible, Core Web Vitals Optimized
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initDropdowns();
  initFAQAccordion();
  initEstimateModal();
  initEstimateCalculator();
  initFormSubmissions();
  initSearchFilter();
  initSmoothScroll();
});

/* Navigation Dropdowns */
function initDropdowns() {
  const dropdownItems = document.querySelectorAll('.nav-item-dropdown');

  dropdownItems.forEach((item) => {
    const toggleBtn = item.querySelector('.dropdown-toggle-btn');
    const navLink = item.querySelector('.nav-link');
    const dropdownMenu = item.querySelector('.dropdown-menu');

    if (!toggleBtn || !dropdownMenu) return;

    // Toggle button click (Mobile & Desktop)
    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = item.classList.contains('is-open');

      // Close other dropdowns
      dropdownItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('is-open');
          const otherBtn = other.querySelector('.dropdown-toggle-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('is-open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('is-open');
        toggleBtn.setAttribute('aria-expanded', 'true');
      }
    });

    // Mobile: Clicking the main navLink when dropdown is closed expands it
    if (navLink) {
      navLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          if (!item.classList.contains('is-open')) {
            e.preventDefault();
            item.classList.add('is-open');
            toggleBtn.setAttribute('aria-expanded', 'true');
          }
        }
      });
    }

    // Mouseenter and mouseleave for Desktop
    let timer;

    item.addEventListener('mouseenter', () => {
      if (window.innerWidth > 768) {
        clearTimeout(timer);
        item.classList.add('is-open');
        toggleBtn.setAttribute('aria-expanded', 'true');
      }
    });

    item.addEventListener('mouseleave', () => {
      if (window.innerWidth > 768) {
        timer = setTimeout(() => {
          item.classList.remove('is-open');
          toggleBtn.setAttribute('aria-expanded', 'false');
        }, 120);
      }
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', (e) => {
    dropdownItems.forEach((item) => {
      if (!item.contains(e.target)) {
        item.classList.remove('is-open');
        const toggleBtn = item.querySelector('.dropdown-toggle-btn');
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close dropdowns on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdownItems.forEach((item) => {
        item.classList.remove('is-open');
        const toggleBtn = item.querySelector('.dropdown-toggle-btn');
        if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

/* Mobile Navigation */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* FAQ Accordion */
function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const button = item.querySelector('.faq-button');
    if (!button) return;

    button.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other open items
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          const otherBtn = other.querySelector('.faq-button');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('active');
      button.setAttribute('aria-expanded', !isActive);
    });
  });
}

/* Modal Popup for Free Estimate */
function initEstimateModal() {
  const modalOverlay = document.getElementById('estimateModal');
  const triggerBtns = document.querySelectorAll('.js-open-estimate-modal');
  const closeBtn = document.querySelector('.modal-close-btn');

  if (!modalOverlay) return;

  triggerBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay.classList.add('active');
      modalOverlay.setAttribute('aria-hidden', 'false');
      const firstInput = modalOverlay.querySelector('input');
      if (firstInput) firstInput.focus();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
  }
}

/* Dynamic Estimate Calculator Widget */
function initEstimateCalculator() {
  const calculatorForm = document.getElementById('hvacCalculatorForm');
  if (!calculatorForm) return;

  const resultBox = document.getElementById('calculatorResult');
  const estCostText = document.getElementById('calcEstimatedCost');

  calculatorForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const serviceType = document.getElementById('calcServiceType')?.value;
    const propertyType = document.getElementById('calcPropertyType')?.value;
    const sqFt = parseInt(document.getElementById('calcSqFt')?.value || '1500', 10);

    let baseCost = 150;
    let multiplier = 1.0;

    if (serviceType === 'ac-repair') baseCost = 180;
    else if (serviceType === 'ac-installation') baseCost = 3800;
    else if (serviceType === 'ac-maintenance') baseCost = 99;
    else if (serviceType === 'heating-repair') baseCost = 175;
    else if (serviceType === 'furnace-installation') baseCost = 3400;
    else if (serviceType === 'heat-pump-installation') baseCost = 4200;
    else if (serviceType === 'duct-cleaning') baseCost = 350;

    if (propertyType === 'commercial') multiplier = 1.4;

    if (sqFt > 2000) multiplier *= 1.25;
    else if (sqFt > 3000) multiplier *= 1.5;

    const minEstimate = Math.round(baseCost * multiplier * 0.9);
    const maxEstimate = Math.round(baseCost * multiplier * 1.15);

    if (resultBox && estCostText) {
      estCostText.textContent = `$${minEstimate.toLocaleString()} - $${maxEstimate.toLocaleString()}`;
      resultBox.style.display = 'block';
    }
  });
}

/* Form Submissions (AJAX to /api/estimate or /api/contact) */
function initFormSubmissions() {
  const forms = document.querySelectorAll('form[data-api-endpoint]');

  forms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const endpoint = form.getAttribute('data-api-endpoint') || '/api/estimate';
      const submitBtn = form.querySelector('button[type="submit"]');
      const alertSuccess = form.querySelector('.alert-success');
      const alertError = form.querySelector('.alert-error');

      if (alertSuccess) alertSuccess.style.display = 'none';
      if (alertError) alertError.style.display = 'none';

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      const originalBtnText = submitBtn ? submitBtn.textContent : 'Submitting...';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending Request...';
      }

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        const resData = await response.json();

        if (response.ok && resData.success) {
          if (alertSuccess) {
            alertSuccess.textContent = resData.message;
            alertSuccess.style.display = 'block';
          }
          form.reset();
        } else {
          if (alertError) {
            alertError.textContent = resData.message || 'Error processing request.';
            alertError.style.display = 'block';
          }
        }
      } catch (err) {
        if (alertError) {
          alertError.textContent = 'Network error. Please call us directly at (615) 555-0199.';
          alertError.style.display = 'block';
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }
      }
    });
  });
}

/* Instant Client-side Search & Filter for Services / Service Areas */
function initSearchFilter() {
  const searchInput = document.getElementById('searchBarInput');
  if (!searchInput) return;

  const targetCards = document.querySelectorAll('.js-search-target');

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    targetCards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      if (text.includes(query)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

/* Smooth Scrolling for anchor links */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
