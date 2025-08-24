/**
 * Macintosh 1984 Ghost Theme JavaScript
 */

(function() {
    'use strict';

    // Theme initialization
    function initTheme() {
        // Add smooth scrolling for anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Initialize retro effects
        initRetroEffects();
    }

    // Retro computer effects
    function initRetroEffects() {
        // Add Mac-style window dragging simulation (visual only)
        const windowControls = document.querySelector('.window-controls');
        if (windowControls) {
            windowControls.addEventListener('click', function() {
                // Add a subtle animation effect
                this.style.transform = 'translateY(-50%) scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-50%) scale(1)';
                }, 100);
            });
        }

        // Add typing effect for article titles on hover
        const articleTitles = document.querySelectorAll('.article-title a');
        articleTitles.forEach(title => {
            title.addEventListener('mouseenter', function() {
                this.style.letterSpacing = '1px';
                this.style.transition = 'letter-spacing 0.2s ease';
            });
            
            title.addEventListener('mouseleave', function() {
                this.style.letterSpacing = 'normal';
            });
        });

        // Add retro button press effect for navigation
        const buttons = document.querySelectorAll('.read-more, .nav-link a, .pagination a');
        buttons.forEach(button => {
            button.addEventListener('mousedown', function() {
                this.style.transform = 'translate(1px, 1px)';
            });
            
            button.addEventListener('mouseup', function() {
                this.style.transform = 'translate(0, 0)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0)';
            });
        });
    }

    // Initialize everything when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initTheme();
        });
    } else {
        initTheme();
    }

})();