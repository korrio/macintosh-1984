/**
 * Macintosh 1984 Theme JavaScript Effects
 * Adds retro Mac-style interactions and animations
 */

(function() {
    'use strict';

    // Initialize theme when DOM is ready
    function initMacintoshTheme() {
        addWindowControls();
        addRetroEffects();
        addTypingEffects();
        addLoadingEffects();
    }

    // Add functional window controls
    function addWindowControls() {
        const header = document.querySelector('.gh-head');
        if (header) {
            const controls = header.querySelector('::before') || 
                           document.createElement('div');
            
            // Add click events to window controls
            header.addEventListener('click', function(e) {
                if (e.target.closest('.gh-head') && 
                    e.clientX > this.offsetWidth - 60) {
                    // Animate window control click
                    this.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 100);
                }
            });
        }
    }

    // Add retro Mac-style effects
    function addRetroEffects() {
        // Add button press effects
        const buttons = document.querySelectorAll(
            '.gh-btn, .gh-head-btn, .gh-search, .gh-pagination a'
        );
        
        buttons.forEach(button => {
            button.addEventListener('mousedown', function() {
                this.style.transform = 'translate(1px, 1px)';
                this.style.boxShadow = 'none';
            });
            
            button.addEventListener('mouseup', function() {
                this.style.transform = 'translate(0, 0)';
                this.style.boxShadow = '1px 1px 2px rgba(0, 0, 0, 0.3)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0)';
                this.style.boxShadow = '1px 1px 2px rgba(0, 0, 0, 0.3)';
            });
        });

        // Add hover effects for cards
        const cards = document.querySelectorAll('.gh-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translate(1px, 1px)';
                this.style.boxShadow = '1px 1px 2px rgba(0, 0, 0, 0.3)';
                this.style.transition = 'all 0.1s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0)';
                this.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.3)';
            });
        });
    }

    // Add typing effects for titles
    function addTypingEffects() {
        const titles = document.querySelectorAll('.gh-card-title a');
        
        titles.forEach(title => {
            title.addEventListener('mouseenter', function() {
                this.style.letterSpacing = '1px';
                this.style.transition = 'letter-spacing 0.2s ease';
            });
            
            title.addEventListener('mouseleave', function() {
                this.style.letterSpacing = 'normal';
            });
        });
    }

    // Add classic Mac loading effects
    function addLoadingEffects() {
        // Add blinking cursor to search inputs
        const searchInputs = document.querySelectorAll('input[type="search"], input[type="email"]');
        
        searchInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.borderColor = 'var(--mac-black)';
                this.style.boxShadow = 'inset 0 0 5px rgba(0, 0, 0, 0.2)';
            });
            
            input.addEventListener('blur', function() {
                this.style.borderColor = 'var(--mac-dark-gray)';
                this.style.boxShadow = 'none';
            });
        });
    }

    // Add classic Mac system sounds (optional)
    function playSystemSound(type) {
        // Create audio context for retro beeps
        if (window.AudioContext || window.webkitAudioContext) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            let frequency = 800; // Default beep
            let duration = 100;
            
            switch(type) {
                case 'click':
                    frequency = 1000;
                    duration = 50;
                    break;
                case 'error':
                    frequency = 400;
                    duration = 200;
                    break;
                case 'success':
                    frequency = 1200;
                    duration = 150;
                    break;
            }
            
            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
            oscillator.type = 'square'; // Classic Mac sound
            
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.01);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration/1000);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + duration/1000);
        }
    }

    // Add sound effects to buttons (optional, can be enabled/disabled)
    function addSoundEffects() {
        const soundButtons = document.querySelectorAll('.gh-btn, .gh-head-btn');
        
        soundButtons.forEach(button => {
            button.addEventListener('click', function() {
                playSystemSound('click');
            });
        });
    }

    // Classic Mac menu behavior
    function addMenuEffects() {
        const menuItems = document.querySelectorAll('.gh-head-menu a');
        
        menuItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.background = 'var(--mac-white)';
                this.style.color = 'var(--mac-black)';
                this.style.padding = '4px 8px';
                this.style.transition = 'all 0.1s ease';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.background = 'transparent';
                this.style.color = 'var(--mac-white)';
                this.style.padding = '0';
            });
        });
    }

    // Initialize everything when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initMacintoshTheme();
            addMenuEffects();
            // Uncomment next line to enable system sounds
            // addSoundEffects();
        });
    } else {
        initMacintoshTheme();
        addMenuEffects();
        // Uncomment next line to enable system sounds
        // addSoundEffects();
    }

    // Add classic Mac startup message
    console.log('Macintosh 1984 Theme v1.0.1 - Welcome to System 1.0');
    console.log('Built with System.css - Honoring the Classic Mac Experience');

})();