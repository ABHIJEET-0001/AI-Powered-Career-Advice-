// Advanced Loading System with Extraordinary Effects

class AdvancedLoader {
    constructor() {
        this.particles = [];
        this.isLoading = false;
        this.loadingMessages = [
            'Analyzing your potential...',
            'Crafting your future...',
            'Unlocking opportunities...',
            'Building your roadmap...',
            'Connecting the dots...',
            'Preparing magic...'
        ];
        this.init();
    }

    init() {
        this.createParticles();
        this.setupTransitionIcons();
    }

    // Create floating particles
    createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // Setup transition icons for different pages
    setupTransitionIcons() {
        this.pageIcons = {
            'home': 'fas fa-home',
            'careers': 'fas fa-briefcase',
            'learning': 'fas fa-graduation-cap',
            'community': 'fas fa-users',
            'dashboard': 'fas fa-tachometer-alt',
            'assessment': 'fas fa-clipboard-list',
            'resume': 'fas fa-file-alt',
            'auth': 'fas fa-user-lock'
        };
    }

    // Show advanced loading with dynamic messages
    show(message = null, type = 'default') {
        const spinner = document.getElementById('loading-spinner');
        const loadingText = document.getElementById('loading-text');
        
        if (!spinner) return;

        this.isLoading = true;
        
        // Set dynamic message
        if (message) {
            loadingText.textContent = message;
        } else {
            this.animateLoadingText(loadingText);
        }

        spinner.classList.add('show');
        
        // Add sound effect (optional)
        this.playLoadingSound();
        
        // Announce to screen readers
        if (window.announceToScreenReader) {
            window.announceToScreenReader(message || 'Loading content');
        }
    }

    // Hide loading with success animation
    hide(showSuccess = false) {
        const spinner = document.getElementById('loading-spinner');
        if (!spinner) return;

        if (showSuccess) {
            this.showSuccessAnimation(() => {
                spinner.classList.remove('show');
                this.isLoading = false;
            });
        } else {
            spinner.classList.remove('show');
            this.isLoading = false;
        }
    }

    // Animate loading text with typewriter effect
    animateLoadingText(element) {
        let messageIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        const typeWriter = () => {
            if (!this.isLoading) return;
            
            const currentMessage = this.loadingMessages[messageIndex];
            
            if (isDeleting) {
                element.textContent = currentMessage.substring(0, charIndex - 1);
                charIndex--;
            } else {
                element.textContent = currentMessage.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentMessage.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                messageIndex = (messageIndex + 1) % this.loadingMessages.length;
                typeSpeed = 500;
            }
            
            setTimeout(typeWriter, typeSpeed);
        };
        
        typeWriter();
    }

    // Show page transition with custom icon
    showPageTransition(pageName, callback) {
        const transition = document.getElementById('page-transition');
        const icon = document.getElementById('transition-icon');
        const text = document.getElementById('transition-text');
        
        if (!transition) {
            callback && callback();
            return;
        }

        // Set appropriate icon and text
        const iconClass = this.pageIcons[pageName] || 'fas fa-rocket';
        icon.innerHTML = `<i class="${iconClass}"></i>`;
        text.textContent = `Loading ${pageName.charAt(0).toUpperCase() + pageName.slice(1)}...`;
        
        transition.classList.add('active');
        
        setTimeout(() => {
            transition.classList.remove('active');
            callback && callback();
        }, 800);
    }

    // Show success animation
    showSuccessAnimation(callback) {
        const container = document.querySelector('.loading-container');
        if (!container) {
            callback && callback();
            return;
        }

        container.innerHTML = `
            <svg class="success-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="success-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="success-checkmark-check" fill="none" d="m14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
            <div class="loading-text-advanced">Success!</div>
        `;

        setTimeout(() => {
            callback && callback();
        }, 1500);
    }

    // Button loading with shimmer effect
    showButtonLoading(button, text = 'Loading...') {
        if (!button) return;
        
        button.classList.add('loading');
        button.disabled = true;
        button.setAttribute('data-original-text', button.textContent);
        button.textContent = text;
    }

    hideButtonLoading(button) {
        if (!button) return;
        
        button.classList.remove('loading');
        button.disabled = false;
        const originalText = button.getAttribute('data-original-text');
        if (originalText) {
            button.textContent = originalText;
            button.removeAttribute('data-original-text');
        }
    }

    // Play loading sound (optional)
    playLoadingSound() {
        try {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
            audio.volume = 0.1;
            audio.play().catch(() => {}); // Ignore errors
        } catch (e) {
            // Ignore audio errors
        }
    }

    // Preload next page content
    preloadContent(pageName) {
        // Simulate content preloading
        return new Promise(resolve => {
            setTimeout(resolve, Math.random() * 500 + 200);
        });
    }
}

// Initialize advanced loader
const advancedLoader = new AdvancedLoader();

// Enhanced loading functions
function showLoading(message = null, type = 'default') {
    advancedLoader.show(message, type);
}

function hideLoading(showSuccess = false) {
    advancedLoader.hide(showSuccess);
}

function showButtonLoading(button, text = 'Loading...') {
    advancedLoader.showButtonLoading(button, text);
}

function hideButtonLoading(button) {
    advancedLoader.hideButtonLoading(button);
}

function showPageTransition(pageName, callback) {
    advancedLoader.showPageTransition(pageName, callback);
}

// Enhanced page navigation with preloading
function showPageWithTransition(pageName) {
    showPageTransition(pageName, async () => {
        // Preload content
        await advancedLoader.preloadContent(pageName);
        
        // Show the page
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(`${pageName}-page`);
        if (targetPage) {
            targetPage.classList.add('active');
            
            // Update page title and announce
            const pageTitles = {
                'home': 'Home',
                'auth': 'Login & Registration',
                'profile-setup': 'Profile Setup',
                'assessment': 'Career Assessment',
                'careers': 'Explore Careers',
                'dashboard': 'Dashboard',
                'learning': 'Learning Hub',
                'community': 'Community',
                'resume': 'Resume Builder'
            };
            
            const pageTitle = pageTitles[pageName] || 'Page';
            document.title = `${pageTitle} - AI Career Advisor`;
            
            if (window.announceToScreenReader) {
                window.announceToScreenReader(`Navigated to ${pageTitle} page`);
            }
            
            // Focus management
            const mainHeading = targetPage.querySelector('h1, h2');
            if (mainHeading) {
                mainHeading.setAttribute('tabindex', '-1');
                setTimeout(() => {
                    mainHeading.focus();
                    mainHeading.removeAttribute('tabindex');
                }, 100);
            }
        }
    });
}

// Export functions for global use
window.showLoading = showLoading;
window.hideLoading = hideLoading;
window.showButtonLoading = showButtonLoading;
window.hideButtonLoading = hideButtonLoading;
window.showPageTransition = showPageTransition;
window.showPageWithTransition = showPageWithTransition;
window.advancedLoader = advancedLoader;