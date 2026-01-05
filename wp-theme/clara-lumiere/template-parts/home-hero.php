<?php
/**
 * Template part for displaying the hero section
 *
 * @package Clara_Lumiere
 */
?>

<section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0 text-primary-foreground">
        <?php
        $hero_image = get_template_directory_uri() . '/assets/images/hero-perfume.jpg';
        if (file_exists(get_template_directory() . '/assets/images/hero-perfume.jpg')) {
            echo '<img alt="Luxury perfume on velvet" class="w-full h-full object-cover shadow-none rounded-none opacity-100" src="' . esc_url($hero_image) . '" />';
        } else {
            echo '<div class="w-full h-full bg-gradient-to-br from-primary to-primary/80"></div>';
        }
        ?>
    </div>

    <!-- Content -->
    <div class="container relative z-10 pt-20">
        <div class="max-w-2xl">
            <span class="inline-block text-accent font-medium uppercase tracking-[0.3em] text-sm mb-6 animate-fade-up" style="animation-delay: 0.2s; opacity: 0;">
                Luxury Fragrances
            </span>
            
            <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight mb-6 animate-fade-up" style="color: #f8f7f4; animation-delay: 0.4s; opacity: 0;">
                <?php echo esc_html(clara_lumiere_t('hero.title')); ?>
            </h1>
            
            <p class="text-lg md:text-xl mb-10 leading-relaxed max-w-xl animate-fade-up" style="color: rgba(248, 247, 244, 0.8); animation-delay: 0.6s; opacity: 0;">
                <?php echo esc_html(clara_lumiere_t('hero.subtitle')); ?>
            </p>
            
            <div class="flex flex-wrap gap-4 animate-fade-up" style="animation-delay: 0.8s; opacity: 0;">
                <a href="#products" class="px-8 py-4 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors">
                    <?php echo esc_html(clara_lumiere_t('hero.cta')); ?>
                </a>
                <a href="#about" class="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition-colors">
                    <?php echo esc_html(clara_lumiere_t('hero.explore')); ?>
                </a>
            </div>
        </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div class="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div class="w-1.5 h-3 rounded-full bg-white/50 animate-pulse"></div>
        </div>
    </div>
</section>
