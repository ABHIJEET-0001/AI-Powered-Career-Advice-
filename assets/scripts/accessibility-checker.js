// Accessibility Testing and Validation Script
// This script helps verify WCAG 2.1 AA compliance

class AccessibilityChecker {
  constructor() {
    this.issues = [];
    this.warnings = [];
  }

  // Check for proper heading hierarchy
  checkHeadingHierarchy() {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    
    headings.forEach((heading, index) => {
      const currentLevel = parseInt(heading.tagName.charAt(1));
      
      if (index === 0 && currentLevel !== 1) {
        this.issues.push('First heading should be h1');
      }
      
      if (currentLevel > previousLevel + 1) {
        this.issues.push(`Heading level skipped: ${heading.tagName} after h${previousLevel}`);
      }
      
      previousLevel = currentLevel;
    });
  }

  // Check for alt text on images
  checkImageAltText() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.hasAttribute('alt')) {
        this.issues.push(`Image missing alt attribute: ${img.src}`);
      }
    });
  }

  // Check for proper form labels
  checkFormLabels() {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      const id = input.id;
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = input.getAttribute('aria-label');
      const ariaLabelledby = input.getAttribute('aria-labelledby');
      
      if (!label && !ariaLabel && !ariaLabelledby) {
        this.issues.push(`Form control missing label: ${input.type || input.tagName}`);
      }
    });
  }

  // Check for keyboard accessibility
  checkKeyboardAccessibility() {
    const interactiveElements = document.querySelectorAll(
      'button, a, input, select, textarea, [tabindex], [onclick]'
    );
    
    interactiveElements.forEach(element => {
      const tabIndex = element.getAttribute('tabindex');
      if (tabIndex && parseInt(tabIndex) > 0) {
        this.warnings.push('Positive tabindex found - may disrupt tab order');
      }
      
      // Check if clickable elements are keyboard accessible
      if (element.hasAttribute('onclick') && !element.hasAttribute('onkeydown')) {
        const tagName = element.tagName.toLowerCase();
        if (tagName !== 'button' && tagName !== 'a' && tagName !== 'input') {
          this.issues.push('Clickable element not keyboard accessible');
        }
      }
    });
  }

  // Check color contrast (basic check)
  checkColorContrast() {
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
      const styles = window.getComputedStyle(element);
      const color = styles.color;
      const backgroundColor = styles.backgroundColor;
      
      // This is a simplified check - in production, you'd use a proper contrast ratio calculator
      if (color === backgroundColor) {
        this.issues.push('Text and background colors are the same');
      }
    });
  }

  // Check for ARIA attributes
  checkAriaAttributes() {
    const elementsWithAria = document.querySelectorAll('[aria-hidden="true"]');
    elementsWithAria.forEach(element => {
      if (element.textContent.trim() && !element.querySelector('*')) {
        this.warnings.push('Element with aria-hidden="true" contains visible text');
      }
    });

    // Check for proper ARIA roles
    const elementsWithRoles = document.querySelectorAll('[role]');
    const validRoles = ['button', 'link', 'menuitem', 'tab', 'tabpanel', 'dialog', 'alert', 'status', 'list', 'listitem', 'navigation', 'main', 'banner', 'contentinfo'];
    
    elementsWithRoles.forEach(element => {
      const role = element.getAttribute('role');
      if (!validRoles.includes(role)) {
        this.warnings.push(`Unknown or invalid ARIA role: ${role}`);
      }
    });
  }

  // Check for skip links
  checkSkipLinks() {
    const skipLink = document.querySelector('.skip-link');
    if (!skipLink) {
      this.issues.push('No skip link found');
    } else {
      const href = skipLink.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) {
        this.issues.push('Skip link target not found');
      }
    }
  }

  // Run all checks
  runAllChecks() {
    console.log('🔍 Running accessibility checks...');
    
    this.checkHeadingHierarchy();
    this.checkImageAltText();
    this.checkFormLabels();
    this.checkKeyboardAccessibility();
    this.checkColorContrast();
    this.checkAriaAttributes();
    this.checkSkipLinks();
    
    this.reportResults();
  }

  // Report results
  reportResults() {
    console.log('\n📊 Accessibility Check Results:');
    console.log('================================');
    
    if (this.issues.length === 0) {
      console.log('✅ No critical accessibility issues found!');
    } else {
      console.log(`❌ ${this.issues.length} accessibility issues found:`);
      this.issues.forEach((issue, index) => {
        console.log(`${index + 1}. ${issue}`);
      });
    }
    
    if (this.warnings.length > 0) {
      console.log(`\n⚠️ ${this.warnings.length} warnings:`);
      this.warnings.forEach((warning, index) => {
        console.log(`${index + 1}. ${warning}`);
      });
    }
    
    console.log('\n💡 Recommendations:');
    console.log('- Test with screen readers (NVDA, JAWS, VoiceOver)');
    console.log('- Test keyboard navigation (Tab, Enter, Escape, Arrow keys)');
    console.log('- Verify color contrast ratios meet WCAG AA standards (4.5:1)');
    console.log('- Test with users who have disabilities');
  }
}

// Keyboard testing helper
function testKeyboardNavigation() {
  console.log('⌨️ Keyboard Navigation Test Guide:');
  console.log('==================================');
  console.log('1. Tab through all interactive elements');
  console.log('2. Use Enter/Space to activate buttons');
  console.log('3. Use Escape to close modals');
  console.log('4. Use Arrow keys in assessment questions');
  console.log('5. Verify focus indicators are visible');
  console.log('6. Check that focus doesn\'t get trapped unexpectedly');
}

// Screen reader testing helper
function testScreenReaderAnnouncements() {
  console.log('🔊 Screen Reader Test Guide:');
  console.log('============================');
  console.log('1. Navigate pages and verify announcements');
  console.log('2. Check form validation messages are announced');
  console.log('3. Verify modal open/close announcements');
  console.log('4. Test assessment question navigation');
  console.log('5. Check that decorative icons are ignored');
}

// Export for use in console
window.AccessibilityChecker = AccessibilityChecker;
window.testKeyboardNavigation = testKeyboardNavigation;
window.testScreenReaderAnnouncements = testScreenReaderAnnouncements;

// Auto-run basic checks when script loads
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    const checker = new AccessibilityChecker();
    checker.runAllChecks();
  }, 2000);
});

console.log('🚀 Accessibility testing tools loaded!');
console.log('Run: new AccessibilityChecker().runAllChecks() to test');
console.log('Run: testKeyboardNavigation() for keyboard test guide');
console.log('Run: testScreenReaderAnnouncements() for screen reader guide');