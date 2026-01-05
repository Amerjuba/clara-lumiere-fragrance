/**
 * Main JavaScript for Clara Lumiere Theme
 */

(function($) {
    'use strict';

    $(document).ready(function() {
        
        // Mobile Menu Toggle
        $('#mobile-menu-toggle').on('click', function() {
            $('#mobile-menu').toggleClass('active hidden');
            $('#menu-icon').toggleClass('hidden');
            $('#close-icon').toggleClass('hidden');
        });

        // Mobile Products Menu Toggle
        $('#mobile-products-toggle').on('click', function() {
            $('#mobile-products-menu').toggleClass('hidden');
            $(this).find('svg').toggleClass('rotate-180');
        });

        // Smooth Scroll for Anchor Links
        $('a[href^="#"]').on('click', function(e) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                e.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
            }
        });

        // Language Switcher
        var lang = getUrlParameter('lang');
        if (lang) {
            // Store language preference
            localStorage.setItem('clara_lumiere_lang', lang);
            // Apply RTL if Arabic
            if (lang === 'ar') {
                $('html').attr('dir', 'rtl');
            } else {
                $('html').attr('dir', 'ltr');
            }
        } else {
            // Load saved preference
            var savedLang = localStorage.getItem('clara_lumiere_lang');
            if (savedLang === 'ar') {
                $('html').attr('dir', 'rtl');
            }
        }

        // Animate elements on scroll
        if (typeof IntersectionObserver !== 'undefined') {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-up');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
            });
        }

        // Cart Count Update (WooCommerce)
        if (typeof wc_add_to_cart_params !== 'undefined') {
            $(document.body).on('added_to_cart', function(event, fragments, cart_hash, $button) {
                // Update cart count in header
                if (fragments && fragments['div.widget_shopping_cart_content']) {
                    var cartCount = $(fragments['div.widget_shopping_cart_content']).find('.cart-contents-count').text();
                    if (cartCount) {
                        $('.cart-count').text(cartCount);
                    }
                }
            });
        }

    });

    // Helper function to get URL parameters
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

})(jQuery);
