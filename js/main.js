/* ==================== MAIN JAVASCRIPT ==================== */

// ==================== LOADING SCREEN ====================
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 800);
    }
});

// Show loading screen on page start
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    setupScrollAnimations();
    setupMobileMenu();
    setupNavbarScroll();
    setupFormValidation();
});

// ==================== NAVBAR SCROLL EFFECT ====================
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ==================== MOBILE MENU TOGGLE ====================
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.navbar-item a').forEach(link => {
            link.addEventListener('click', function() {
                navbarMenu.classList.remove('active');
            });
        });
    }
}

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== SCROLL ANIMATIONS ====================
function setupScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => {
        observer.observe(el);
    });
}

// ==================== FORM VALIDATION ====================
function setupFormValidation() {
    const form = document.querySelector('.contact-form form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.querySelector('input[name="name"]');
        const email = document.querySelector('input[name="email"]');
        const message = document.querySelector('textarea[name="message"]');

        // Basic validation
        if (!name.value.trim()) {
            showError(name, 'Vui lòng nhập tên của bạn');
            return;
        }

        if (!email.value.trim() || !isValidEmail(email.value)) {
            showError(email, 'Vui lòng nhập email hợp lệ');
            return;
        }

        if (!message.value.trim()) {
            showError(message, 'Vui lòng nhập nội dung tin nhắn');
            return;
        }

        // Success message
        alert('Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.');
        form.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(element, message) {
    element.style.borderColor = '#dc3545';
    element.style.boxShadow = '0 0 0 3px rgba(220, 53, 69, 0.1)';
    
    alert(message);
    
    // Reset after 3 seconds
    setTimeout(() => {
        element.style.borderColor = '';
        element.style.boxShadow = '';
    }, 3000);
}

// ==================== GALLERY MODAL ====================
function setupGalleryModal() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add modal functionality here if needed
            console.log('Gallery item clicked');
        });
    });
}

// ==================== HOVER EFFECTS ====================
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.feature-card, .member-card, .news-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
    });
});

// ==================== PAGE TRANSITION ====================
window.addEventListener('beforeunload', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.remove('hidden');
    }
});

// ==================== COUNTER ANIMATION ====================
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = +counter.innerText;
        const increment = target / 200;
        let current = 0;

        const updateCount = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
}

// ==================== OBSERVE ELEMENTS ON SCROLL ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// ==================== UTILITY FUNCTIONS ====================
function addAnimationClass(element, animation) {
    element.classList.add(animation);
    element.addEventListener('animationend', () => {
        element.classList.remove(animation);
   }, { once: true });
}

// Export functions for use
window.APP = {
    addAnimationClass,
    animateCounters
};
