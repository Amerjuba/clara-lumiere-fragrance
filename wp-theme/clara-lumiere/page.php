<?php
/**
 * The template for displaying all pages
 *
 * @package Clara_Lumiere
 */

get_header();
?>

<main class="min-h-screen bg-background pt-20">
    <div class="container py-12">
        <?php
        while (have_posts()) {
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <header class="entry-header mb-8">
                    <h1 class="text-4xl font-serif text-foreground"><?php the_title(); ?></h1>
                </header>
                <div class="entry-content prose prose-lg max-w-none">
                    <?php the_content(); ?>
                </div>
            </article>
            <?php
        }
        ?>
    </div>
</main>

<?php
get_footer();
