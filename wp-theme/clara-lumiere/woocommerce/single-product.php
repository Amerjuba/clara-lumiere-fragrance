<?php
/**
 * The Template for displaying all single products
 *
 * @package Clara_Lumiere
 */

defined('ABSPATH') || exit;

get_header('shop');
?>

<main class="min-h-screen bg-background pt-20">
    <div class="container py-12">
        <?php
        while (have_posts()) {
            the_post();

            wc_get_template_part('content', 'single-product');
        }
        ?>
    </div>
</main>

<?php
get_footer('shop');
