/**
 * WooCommerce Custom JavaScript for Clara Lumiere Theme
 */

(function($) {
    'use strict';

    $(document).ready(function() {
        
        // Custom add to cart button behavior
        $('body').on('click', '.ajax_add_to_cart', function(e) {
            var $button = $(this);
            var productId = $button.data('product_id');
            
            // Add loading state
            $button.addClass('loading').prop('disabled', true);
            $button.text('Adding...');
        });

        // Update cart count after AJAX add to cart
        $(document.body).on('added_to_cart', function(event, fragments, cart_hash, $button) {
            // Update cart icon count
            if (fragments && fragments['div.widget_shopping_cart_content']) {
                var $cartContent = $(fragments['div.widget_shopping_cart_content']);
                var cartCount = $cartContent.find('.cart-contents-count').text() || '0';
                
                // Update header cart count
                var $headerCart = $('header a[href*="cart"]');
                var $badge = $headerCart.find('span');
                
                if (parseInt(cartCount) > 0) {
                    if ($badge.length) {
                        $badge.text(cartCount);
                    } else {
                        $headerCart.append('<span class="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">' + cartCount + '</span>');
                    }
                }
            }
            
            // Show success message
            if ($button && $button.length) {
                $button.removeClass('loading').prop('disabled', false);
                $button.text('Added!');
                setTimeout(function() {
                    $button.text($button.data('original-text') || 'Add to Bag');
                }, 2000);
            }
        });

        // Product image hover effect
        $('.product-card').on('mouseenter', function() {
            $(this).find('img').addClass('scale-105');
        }).on('mouseleave', function() {
            $(this).find('img').removeClass('scale-105');
        });

        // Quantity buttons
        $('.quantity').each(function() {
            var $quantity = $(this);
            var $input = $quantity.find('input[type="number"]');
            var $decrease = $('<button type="button" class="quantity-decrease">-</button>');
            var $increase = $('<button type="button" class="quantity-increase">+</button>');
            
            $input.before($decrease);
            $input.after($increase);
            
            $decrease.on('click', function() {
                var currentVal = parseInt($input.val()) || 1;
                if (currentVal > 1) {
                    $input.val(currentVal - 1).trigger('change');
                }
            });
            
            $increase.on('click', function() {
                var currentVal = parseInt($input.val()) || 1;
                var max = $input.attr('max') ? parseInt($input.attr('max')) : 999;
                if (currentVal < max) {
                    $input.val(currentVal + 1).trigger('change');
                }
            });
        });

    });

})(jQuery);
