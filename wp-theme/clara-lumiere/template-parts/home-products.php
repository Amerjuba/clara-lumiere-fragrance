<?php
/**
 * Template part for displaying the products section
 *
 * @package Clara_Lumiere
 */
?>

<section id="products" class="py-24 bg-background">
    <div class="container">
        <!-- Header -->
        <div class="text-center mb-16">
            <span class="inline-block text-accent font-medium uppercase tracking-[0.3em] text-sm mb-4">
                Our Selection
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
                <?php echo esc_html(clara_lumiere_t('products.featured')); ?>
            </h2>
            <p class="text-muted-foreground max-w-2xl mx-auto">
                Discover our curated collection of exceptional fragrances from the world's most prestigious houses.
            </p>
        </div>

        <!-- Products Grid -->
        <?php if (class_exists('WooCommerce')) : ?>
            <?php
            $args = array(
                'post_type' => 'product',
                'posts_per_page' => 4,
                'meta_key' => '_featured',
                'meta_value' => 'yes',
            );
            $products = new WP_Query($args);
            
            if ($products->have_posts()) :
            ?>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <?php
                    $index = 0;
                    while ($products->have_posts()) :
                        $products->the_post();
                        global $product;
                        get_template_part('template-parts/product', 'card', array('index' => $index));
                        $index++;
                    endwhile;
                    wp_reset_postdata();
                    ?>
                </div>
            <?php else : ?>
                <p class="text-center text-muted-foreground">No featured products found. Please add some products in WooCommerce.</p>
            <?php endif; ?>
        <?php else : ?>
            <p class="text-center text-muted-foreground">WooCommerce is required to display products.</p>
        <?php endif; ?>

        <!-- View All Button -->
        <div class="text-center">
            <a href="<?php echo esc_url(get_permalink(wc_get_page_id('shop'))); ?>" class="inline-flex items-center px-8 py-4 border-2 border-border text-foreground rounded-lg font-medium hover:bg-accent/10 transition-colors">
                <?php echo esc_html(clara_lumiere_t('products.viewAll')); ?>
            </a>
        </div>
    </div>
</section>
