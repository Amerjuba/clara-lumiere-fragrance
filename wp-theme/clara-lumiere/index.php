<?php
/**
 * The main template file
 *
 * @package Clara_Lumiere
 */

get_header();
?>

<main class="min-h-screen bg-background pt-20">
    <?php
    if (is_front_page()) {
        // Homepage template
        get_template_part('template-parts/home', 'hero');
        get_template_part('template-parts/home', 'brands');
        get_template_part('template-parts/home', 'products');
        get_template_part('template-parts/home', 'about');
    } else {
        // Default content
        if (have_posts()) {
            while (have_posts()) {
                the_post();
                ?>
                <div class="container py-12">
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <header class="entry-header mb-8">
                            <h1 class="text-4xl font-serif text-foreground"><?php the_title(); ?></h1>
                        </header>
                        <div class="entry-content prose prose-lg max-w-none">
                            <?php the_content(); ?>
                        </div>
                    </article>
                </div>
                <?php
            }
        }
    }
    ?>
</main>

<?php
get_footer();
