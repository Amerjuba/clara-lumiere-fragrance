<?php
/**
 * Template Name: Home Page
 * The template for displaying the homepage
 *
 * @package Clara_Lumiere
 */

get_header();
?>

<main class="min-h-screen bg-background">
    <?php get_template_part('template-parts/home', 'hero'); ?>
    <?php get_template_part('template-parts/home', 'brands'); ?>
    <?php get_template_part('template-parts/home', 'products'); ?>
    <?php get_template_part('template-parts/home', 'about'); ?>
</main>

<?php
get_footer();
