<?php
/**
 * Template part for displaying a product card
 *
 * @package Clara_Lumiere
 */

global $product;
$index = isset($args['index']) ? $args['index'] : 0;
$brand = get_post_meta(get_the_ID(), '_fragrance_brand', true);
$size = get_post_meta(get_the_ID(), '_fragrance_size', true);
?>

<article class="group relative animate-fade-up opacity-0" style="animation-delay: <?php echo esc_attr($index * 100); ?>ms; animation-fill-mode: forwards;">
    <!-- Image Container -->
    <div class="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
        <?php
        if (has_post_thumbnail()) {
            the_post_thumbnail('woocommerce_thumbnail', array(
                'class' => 'w-full h-full object-cover transition-transform duration-700 group-hover:scale-105',
                'alt' => get_the_title(),
            ));
        } else {
            echo '<div class="w-full h-full bg-secondary flex items-center justify-center">';
            echo '<span class="text-muted-foreground">No Image</span>';
            echo '</div>';
        }
        ?>
        
        <!-- Overlay on hover -->
        <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500"></div>
        
        <!-- Quick Add Button -->
        <div class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <?php
            echo apply_filters('woocommerce_loop_add_to_cart_link',
                sprintf('<a href="%s" data-quantity="1" class="%s w-full inline-flex items-center justify-center px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors" %s>%s</a>',
                    esc_url($product->add_to_cart_url()),
                    'button product_type_simple add_to_cart_button ajax_add_to_cart',
                    wc_implode_html_attributes(array(
                        'data-product_id' => $product->get_id(),
                        'data-product_sku' => $product->get_sku(),
                        'aria-label' => $product->add_to_cart_description(),
                        'rel' => 'nofollow',
                    )),
                    esc_html(clara_lumiere_t('products.addToBag'))
                ),
                $product
            );
            ?>
        </div>
        
        <!-- Brand Badge -->
        <?php if ($brand) : ?>
            <span class="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-xs uppercase tracking-wider font-medium">
                <?php echo esc_html($brand); ?>
            </span>
        <?php endif; ?>
    </div>

    <!-- Product Info -->
    <div class="space-y-2">
        <h3 class="font-serif text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h3>
        <p class="text-sm text-muted-foreground line-clamp-2">
            <?php echo wp_trim_words(get_the_excerpt(), 15); ?>
        </p>
        <div class="flex items-center justify-between pt-2">
            <span class="text-base font-medium text-foreground">
                <?php echo $product->get_price_html(); ?>
            </span>
            <?php if ($size) : ?>
                <span class="text-sm text-muted-foreground">
                    <?php echo esc_html($size); ?>
                </span>
            <?php endif; ?>
        </div>
    </div>
</article>
