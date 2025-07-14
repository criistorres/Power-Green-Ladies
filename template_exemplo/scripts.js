/**
 * Power Green Ladies - JavaScript Module
 * Handles all interactive functionality for the website
 */

(function($) {
  'use strict';

  // Configuration
  const CONFIG = {
    scrollMaxDistance: 400,
    navbarSelector: '#navbar',
    mobileToggleSelector: '#mobile-toggle',
    menuSelector: '#navbar-menu',
    dropdownSelector: '.navbar__dropdown',
    languageSelector: '.language-selector__btn'
  };

  /**
   * Navbar Module - Handles navigation functionality
   */
  const NavbarModule = {
    init() {
      this.setupScrollEffects();
      this.setupMobileMenu();
      this.setupDropdowns();
      this.setupLanguageSelector();
      this.setupSmoothScrolling();
      this.setupOutsideClickHandlers();
    },

    /**
     * Progressive navbar solidification on scroll
     */
    setupScrollEffects() {
      $(window).on('scroll', () => {
        const scrollTop = $(window).scrollTop();
        const progress = Math.min(scrollTop / CONFIG.scrollMaxDistance, 1);
        
        // Calculate dynamic values based on scroll progress
        const bgOpacity = 0.1 + (0.95 - 0.1) * progress;
        const blurAmount = 2 + (20 - 2) * progress;
        const borderOpacity = progress;
        const shadowOpacity = progress * 0.2;
        
        // Apply background and backdrop filter changes
        $(CONFIG.navbarSelector).css({
          'background-color': `rgba(254, 247, 240, ${bgOpacity})`,
          'backdrop-filter': `blur(${blurAmount}px)`,
          '-webkit-backdrop-filter': `blur(${blurAmount}px)`,
          'border-bottom': `1px solid rgba(129, 199, 132, ${borderOpacity})`,
          'box-shadow': `0 2px 6px rgba(45, 125, 50, ${shadowOpacity})`
        });

        // Interpolate text color from white (255) to dark gray (51)
        const startColor = 255;    // white  
        const endColor = 51;       // dark gray
        const textColorValue = Math.round(startColor + (endColor - startColor) * progress);
        const textColor = `rgb(${textColorValue}, ${textColorValue}, ${textColorValue})`;
        
        // Apply text color to all navbar links
        $('#navbar .navbar__link, #navbar .language-selector__btn, #navbar .navbar__dropdown-toggle').css('color', textColor);
        
        // Update language selector border colors based on scroll
        if (progress < 0.5) {
          // When mostly transparent, keep white borders
          $('.language-selector__btn').css('border-color', `rgba(255, 255, 255, ${0.5 + progress * 0.3})`);
          $('.language-selector__btn--active, .language-selector__btn:hover').css({
            'background-color': `rgba(255, 255, 255, ${0.2 + progress * 0.1})`,
            'border-color': 'rgba(255, 255, 255, 0.8)'
          });
        } else {
          // When more solid, transition to green borders
          $('.language-selector__btn').css('border-color', `rgb(${textColorValue}, ${textColorValue}, ${textColorValue})`);
          $('.language-selector__btn--active, .language-selector__btn:hover').css({
            'background-color': `rgb(${textColorValue}, ${textColorValue}, ${textColorValue})`,
            'color': 'white',
            'border-color': `rgb(${textColorValue}, ${textColorValue}, ${textColorValue})`
          });
        }
      });
    },

    /**
     * Mobile menu toggle functionality
     */
    setupMobileMenu() {
      $(CONFIG.mobileToggleSelector).on('click', () => {
        const $menu = $(CONFIG.menuSelector);
        const $toggle = $(CONFIG.mobileToggleSelector);
        
        $menu.toggleClass('navbar__menu--open');
        $toggle.toggleClass('navbar__mobile-toggle--open');
      });

      // Close mobile menu when clicking on a link
      $('.navbar__link').on('click', () => {
        $(CONFIG.menuSelector).removeClass('navbar__menu--open');
        $(CONFIG.mobileToggleSelector).removeClass('navbar__mobile-toggle--open');
      });
    },

    /**
     * Dropdown menu functionality
     */
    setupDropdowns() {
      $('.navbar__dropdown-toggle').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const $dropdown = $(this).closest('.navbar__dropdown');
        const isOpen = $dropdown.hasClass('navbar__dropdown--open');
        
        // Close all other dropdowns first
        $('.navbar__dropdown').removeClass('navbar__dropdown--open');
        
        // Toggle current dropdown
        if (!isOpen) {
          $dropdown.addClass('navbar__dropdown--open');
        }
      });
    },

    /**
     * Language selector functionality
     */
    setupLanguageSelector() {
      $(CONFIG.languageSelector).on('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all language buttons
        $(CONFIG.languageSelector).removeClass('language-selector__btn--active');
        
        // Add active class to clicked button
        $(this).addClass('language-selector__btn--active');
        
        // Here you could add actual language switching logic
        console.log('Language switched to:', $(this).text());
      });
    },

    /**
     * Smooth scrolling for anchor links
     */
    setupSmoothScrolling() {
      $('a[href^="#"]').on('click', function(e) {
        const href = $(this).attr('href');
        const $target = $(href);
        
        if ($target.length) {
          e.preventDefault();
          
          $('html, body').animate({
            scrollTop: $target.offset().top - 80 // Account for fixed navbar
          }, 800, 'swing');
        }
      });
    },

    /**
     * Close dropdowns when clicking outside
     */
    setupOutsideClickHandlers() {
      $(document).on('click', (e) => {
        // Close dropdowns if clicked outside
        if (!$(e.target).closest('.navbar__dropdown').length) {
          $('.navbar__dropdown').removeClass('navbar__dropdown--open');
        }
        
        // Close mobile menu if clicked outside
        if (!$(e.target).closest('.navbar').length) {
          $(CONFIG.menuSelector).removeClass('navbar__menu--open');
          $(CONFIG.mobileToggleSelector).removeClass('navbar__mobile-toggle--open');
        }
      });
    }
  };

  /**
   * Performance Module - Optimizations and performance enhancements
   */
  const PerformanceModule = {
    init() {
      this.setupLazyLoading();
      this.optimizeScrollHandlers();
    },

    /**
     * Lazy loading for images (if needed in future)
     */
    setupLazyLoading() {
      // Placeholder for lazy loading implementation
      // Could be extended to handle video loading optimization
    },

    /**
     * Throttle scroll events for better performance
     */
    optimizeScrollHandlers() {
      let scrollTimeout;
      
      // Throttle scroll events to improve performance
      $(window).on('scroll', () => {
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
          // Additional scroll-based optimizations could go here
        }, 16); // ~60fps
      });
    }
  };

  /**
   * Accessibility Module - Enhanced accessibility features
   */
  const AccessibilityModule = {
    init() {
      this.setupKeyboardNavigation();
      this.setupFocusManagement();
    },

    /**
     * Keyboard navigation for dropdowns
     */
    setupKeyboardNavigation() {
      $('.navbar__dropdown-toggle').on('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          $(this).click();
        }
        
        if (e.key === 'Escape') {
          $('.navbar__dropdown').removeClass('navbar__dropdown--open');
          $(this).blur();
        }
      });
    },

    /**
     * Focus management for better UX
     */
    setupFocusManagement() {
      // Trap focus within mobile menu when open
      $(CONFIG.mobileToggleSelector).on('click', function() {
        setTimeout(() => {
          if ($(CONFIG.menuSelector).hasClass('navbar__menu--open')) {
            $(CONFIG.menuSelector).find('a').first().focus();
          }
        }, 100);
      });
    }
  };

  /**
   * Animation Module - Handle page animations and effects
   */
  const AnimationModule = {
    init() {
      this.setupIntersectionObserver();
      this.setupVideoOptimization();
    },

    /**
     * Intersection Observer for scroll animations (future enhancement)
     */
    setupIntersectionObserver() {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements that could benefit from scroll animations
        document.querySelectorAll('.mission__content, .video-card').forEach(el => {
          observer.observe(el);
        });
      }
    },

    /**
     * Video optimization and error handling
     */
    setupVideoOptimization() {
      const $video = $('.hero__video');
      
      if ($video.length) {
        $video.on('loadeddata', function() {
          console.log('Hero video loaded successfully');
        });
        
        $video.on('error', function() {
          console.warn('Hero video failed to load');
          // Fallback: could show a static background image
          $('.hero').css('background-image', 'url("path/to/fallback-image.jpg")');
        });
      }
    }
  };

  /**
   * Debug Module - Development utilities
   */
  const DebugModule = {
    init() {
      if (this.isDevelopment()) {
        this.setupConsoleUtils();
        this.setupPerformanceMonitoring();
      }
    },

    isDevelopment() {
      return window.location.hostname === 'localhost' || 
             window.location.hostname === '127.0.0.1' ||
             window.location.search.includes('debug=true');
    },

    setupConsoleUtils() {
      console.log('%c🌿 Power Green Ladies Debug Mode', 'color: #2d7d32; font-size: 16px; font-weight: bold;');
      
      // Expose modules to global scope for debugging
      window.PGL_Debug = {
        navbar: NavbarModule,
        performance: PerformanceModule,
        accessibility: AccessibilityModule,
        animation: AnimationModule
      };
    },

    setupPerformanceMonitoring() {
      // Monitor scroll performance
      let scrollCount = 0;
      $(window).on('scroll', () => {
        scrollCount++;
        if (scrollCount % 100 === 0) {
          console.log(`Scroll events fired: ${scrollCount}`);
        }
      });
    }
  };

  /**
   * Main App Initialization
   */
  const App = {
    init() {
      console.log('🌿 Power Green Ladies - Initializing...');
      
      // Initialize all modules
      NavbarModule.init();
      PerformanceModule.init();
      AccessibilityModule.init();
      AnimationModule.init();
      DebugModule.init();
      
      console.log('✅ Power Green Ladies - All modules loaded');
    }
  };

  // Initialize when DOM is ready
  $(document).ready(() => {
    App.init();
  });

  // Handle window load for additional optimizations
  $(window).on('load', () => {
    // Remove any loading classes or show content
    $('body').addClass('loaded');
    
    // Additional initialization that requires full page load
    console.log('🌿 Page fully loaded');
  });

  // Handle window resize events
  let resizeTimeout;
  $(window).on('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Handle responsive adjustments if needed
      console.log('Window resized');
    }, 250);
  });

})(jQuery);