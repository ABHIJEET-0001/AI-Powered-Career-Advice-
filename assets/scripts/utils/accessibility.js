// accessibility.js - Accessibility helpers

export function focusElement(element) {
    if (element) {
        element.focus();
    }
}

export function addAriaLabel(element, label) {
    if (element) {
        element.setAttribute('aria-label', label);
    }
}

// Moved from app.js
export function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

export function updatePageTitle(title) {
  document.title = `${title} - AI Career Advisor`;
}

export function manageFocus(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function setupKeyboardNavigation() {
  document.addEventListener('keydown', function(e) {
    // Escape key to close modals
    if (e.key === 'Escape') {
      const openModal = document.querySelector('.modal:not(.hidden)');
      if (openModal) {
        const modalId = openModal.id;
        closeModal(modalId);
        e.preventDefault();
      }
    }

    // Enter key for buttons and interactive elements
    if (e.key === 'Enter' && e.target.classList.contains('answer-option')) {
      e.target.click();
      e.preventDefault();
    }

    // Arrow key navigation for answer options
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      const answerOptions = document.querySelectorAll('.answer-option');
      const currentIndex = Array.from(answerOptions).indexOf(document.activeElement);

      if (currentIndex !== -1) {
        let nextIndex;
        if (e.key === 'ArrowDown') {
          nextIndex = (currentIndex + 1) % answerOptions.length;
        } else {
          nextIndex = (currentIndex - 1 + answerOptions.length) % answerOptions.length;
        }
        answerOptions[nextIndex].focus();
        e.preventDefault();
      }
    }
  });
}