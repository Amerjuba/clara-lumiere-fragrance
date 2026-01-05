<?php
/**
 * Template part for displaying the about section
 *
 * @package Clara_Lumiere
 */
?>

<section id="about" class="py-24 bg-background">
    <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <span class="inline-block text-accent font-medium uppercase tracking-[0.3em] text-sm mb-4">
                    Our Story
                </span>
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6">
                    <?php echo esc_html(clara_lumiere_t('about.title')); ?>
                </h2>
                <p class="text-lg text-muted-foreground mb-6 leading-relaxed">
                    <?php echo esc_html(clara_lumiere_t('about.subtitle')); ?>
                </p>
                <p class="text-muted-foreground mb-8 leading-relaxed">
                    Clara Lumiere is the exclusive agent for three prestigious luxury fragrance brands in Norway, Denmark, and Sweden: Royal Fragrance, Signature Scent, and Sea of Parfum. We bring the finest French-Emirati fragrance artistry to Scandinavia, curating exceptional scents that embody luxury, craftsmanship, and timeless elegance.
                </p>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('about-us'))); ?>" class="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors">
                    Learn More
                </a>
            </div>
            <div class="relative">
                <?php
                $about_image = get_template_directory_uri() . '/assets/images/about-image.jpg';
                if (file_exists(get_template_directory() . '/assets/images/about-image.jpg')) {
                    echo '<img src="' . esc_url($about_image) . '" alt="About Clara Lumiere" class="w-full h-auto rounded-lg shadow-lg" />';
                } else {
                    echo '<div class="w-full aspect-square bg-gradient-to-br from-primary to-primary/80 rounded-lg"></div>';
                }
                ?>
            </div>
        </div>
    </div>
</section>
