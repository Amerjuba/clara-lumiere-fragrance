<?php
/**
 * The header template
 *
 * @package Clara_Lumiere
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class('min-h-screen bg-background'); ?>>
<?php wp_body_open(); ?>

<header class="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-md border-b border-border/50">
    <div class="container">
        <div class="flex items-center justify-between h-20">
            <!-- Logo -->
            <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center">
                <?php
                $logo = get_template_directory_uri() . '/assets/images/logo.png';
                if (file_exists(get_template_directory() . '/assets/images/logo.png')) {
                    echo '<img src="' . esc_url($logo) . '" alt="' . esc_attr(get_bloginfo('name')) . '" class="h-16 w-auto border-0 border-none object-contain" />';
                } else {
                    echo '<span class="text-2xl font-serif text-accent">' . esc_html(get_bloginfo('name')) . '</span>';
                }
                ?>
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center gap-8">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-300 uppercase tracking-wider">
                    <?php echo esc_html(clara_lumiere_t('nav.home')); ?>
                </a>
                
                <!-- Products Dropdown -->
                <div class="relative group">
                    <button class="flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-300 uppercase tracking-wider">
                        <?php echo esc_html(clara_lumiere_t('nav.products')); ?>
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <?php
                        $product_categories = array(
                            array('name' => 'Signature Scents', 'slug' => 'signature-scents'),
                            array('name' => 'Sea of Perfumes', 'slug' => 'sea-of-perfumes'),
                            array('name' => 'Oriental Oils', 'slug' => 'oriental-oils'),
                            array('name' => 'Make Your Own Brand', 'slug' => 'make-your-own-brand'),
                            array('name' => 'Wholesale', 'slug' => 'wholesale'),
                        );
                        foreach ($product_categories as $cat) {
                            $url = get_permalink(get_page_by_path($cat['slug']));
                            if (!$url) {
                                $url = home_url('/' . $cat['slug'] . '/');
                            }
                            echo '<a href="' . esc_url($url) . '" class="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 transition-colors">' . esc_html($cat['name']) . '</a>';
                        }
                        ?>
                    </div>
                </div>

                <a href="<?php echo esc_url(get_permalink(get_page_by_path('about-us'))); ?>" class="text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-300 uppercase tracking-wider">
                    <?php echo esc_html(clara_lumiere_t('nav.about')); ?>
                </a>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact-us'))); ?>" class="text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-300 uppercase tracking-wider">
                    <?php echo esc_html(clara_lumiere_t('nav.contact')); ?>
                </a>
            </nav>

            <!-- Actions -->
            <div class="flex items-center gap-4">
                <!-- Language Selector -->
                <div class="relative group hidden sm:block">
                    <button class="p-2 text-accent hover:text-accent/80 hover:bg-primary/80 rounded-md transition-colors">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </button>
                    <div class="absolute top-full right-0 mt-2 w-32 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <a href="?lang=en" class="block px-4 py-2 text-sm hover:bg-accent/10">English</a>
                        <a href="?lang=no" class="block px-4 py-2 text-sm hover:bg-accent/10">Norsk</a>
                        <a href="?lang=ar" class="block px-4 py-2 text-sm hover:bg-accent/10">عربي</a>
                    </div>
                </div>

                <!-- Cart -->
                <a href="<?php echo esc_url(wc_get_cart_url()); ?>" class="relative p-2 text-accent hover:text-accent/80 hover:bg-primary/80 rounded-md transition-colors">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                    </svg>
                    <?php if (class_exists('WooCommerce')) : ?>
                        <?php $cart_count = WC()->cart->get_cart_contents_count(); ?>
                        <?php if ($cart_count > 0) : ?>
                            <span class="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                                <?php echo esc_html($cart_count); ?>
                            </span>
                        <?php endif; ?>
                    <?php endif; ?>
                </a>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-toggle" class="md:hidden p-2 text-accent hover:text-accent/80 hover:bg-primary/80 rounded-md transition-colors">
                    <svg id="menu-icon" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <svg id="close-icon" class="h-5 w-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Navigation -->
        <nav id="mobile-menu" class="md:hidden hidden py-6 border-t border-accent/30">
            <div class="flex flex-col gap-4">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="text-base font-medium text-accent py-2 uppercase tracking-wider">
                    <?php echo esc_html(clara_lumiere_t('nav.home')); ?>
                </a>
                
                <div>
                    <button id="mobile-products-toggle" class="flex items-center justify-between w-full text-base font-medium text-accent py-2 uppercase tracking-wider">
                        <?php echo esc_html(clara_lumiere_t('nav.products')); ?>
                        <svg class="h-4 w-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <div id="mobile-products-menu" class="hidden pl-4 flex flex-col gap-2 mt-2">
                        <?php foreach ($product_categories as $cat) : ?>
                            <?php
                            $url = get_permalink(get_page_by_path($cat['slug']));
                            if (!$url) {
                                $url = home_url('/' . $cat['slug'] . '/');
                            }
                            ?>
                            <a href="<?php echo esc_url($url); ?>" class="text-sm text-accent/70 hover:text-accent py-2">
                                <?php echo esc_html($cat['name']); ?>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>
                
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('about-us'))); ?>" class="text-base font-medium text-accent py-2 uppercase tracking-wider">
                    <?php echo esc_html(clara_lumiere_t('nav.about')); ?>
                </a>
                <a href="<?php echo esc_url(get_permalink(get_page_by_path('contact-us'))); ?>" class="text-base font-medium text-accent py-2 uppercase tracking-wider">
                    <?php echo esc_html(clara_lumiere_t('nav.contact')); ?>
                </a>
                
                <div class="flex gap-2 pt-4 border-t border-accent/30">
                    <a href="?lang=en" class="px-4 py-2 text-sm border border-accent/30 rounded-md hover:bg-accent/10">English</a>
                    <a href="?lang=no" class="px-4 py-2 text-sm border border-accent/30 rounded-md hover:bg-accent/10">Norsk</a>
                    <a href="?lang=ar" class="px-4 py-2 text-sm border border-accent/30 rounded-md hover:bg-accent/10">عربي</a>
                </div>
            </div>
        </nav>
    </div>
</header>
