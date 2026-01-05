<?php
/**
 * Template Name: About Us
 * The template for displaying the About Us page
 *
 * @package Clara_Lumiere
 */

get_header();
?>

<main class="min-h-screen bg-background pt-20">
    <!-- Hero Section -->
    <section class="py-20 bg-primary">
        <div class="container text-center">
            <h1 class="text-4xl md:text-5xl font-serif text-accent mb-6">
                <?php echo esc_html(clara_lumiere_t('aboutPage.title')); ?>
            </h1>
            <p class="text-lg text-accent/80 max-w-2xl mx-auto">
                <?php echo esc_html(clara_lumiere_t('aboutPage.subtitle')); ?>
            </p>
        </div>
    </section>

    <!-- Story Section -->
    <section class="py-20">
        <div class="container">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl font-serif text-foreground mb-6">
                        <?php echo esc_html(clara_lumiere_t('aboutPage.storyTitle')); ?>
                    </h2>
                    <p class="text-muted-foreground mb-4 leading-relaxed">
                        <?php echo esc_html(clara_lumiere_t('aboutPage.storyText1')); ?>
                    </p>
                    <p class="text-muted-foreground leading-relaxed">
                        <?php echo esc_html(clara_lumiere_t('aboutPage.storyText2')); ?>
                    </p>
                </div>
                <div class="flex justify-center">
                    <div class="relative">
                        <div class="w-80 h-80 bg-primary rounded-lg flex items-center justify-center">
                            <?php
                            $logo = get_template_directory_uri() . '/assets/images/logo.png';
                            if (file_exists(get_template_directory() . '/assets/images/logo.png')) {
                                echo '<img src="' . esc_url($logo) . '" alt="Clara Lumiere" class="h-40 w-auto" />';
                            } else {
                                echo '<span class="text-4xl font-serif text-accent">' . esc_html(get_bloginfo('name')) . '</span>';
                            }
                            ?>
                        </div>
                        <div class="absolute -bottom-4 -right-4 w-80 h-80 border-2 border-accent rounded-lg -z-10"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-muted/30">
        <div class="container">
            <h2 class="text-3xl font-serif text-foreground text-center mb-12">
                <?php echo esc_html(clara_lumiere_t('aboutPage.valuesTitle')); ?>
            </h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center p-8 bg-background rounded-lg shadow-sm">
                    <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="text-2xl">✨</span>
                    </div>
                    <h3 class="text-xl font-serif text-foreground mb-4">
                        <?php echo esc_html(clara_lumiere_t('aboutPage.value1Title')); ?>
                    </h3>
                    <p class="text-muted-foreground">
                        <?php echo esc_html(clara_lumiere_t('aboutPage.value1Text')); ?>
                    </p>
                </div>
                <div class="text-center p-8 bg-background rounded-lg shadow-sm">
                    <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="text-2xl">🌿</span>
                    </div>
                    <h3 class="text-xl font-serif text-foreground mb-4">
                        <?php echo esc_html(clara_lumiere_t('aboutPage.value2Title')); ?>
                    </h3>
                    <p class="text-muted-foreground">
                        <?php echo esc_html(clara_lumiere_t('aboutPage.value2Text')); ?>
                    </p>
                </div>
                <div class="text-center p-8 bg-background rounded-lg shadow-sm">
                    <div class="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span class="text-2xl">💎</span>
                    </div>
                    <h3 class="text-xl font-serif text-foreground mb-4">
                        <?php echo esc_html(clara_lumiere_t('aboutPage.value3Title')); ?>
                    </h3>
                    <p class="text-muted-foreground">
                        <?php echo esc_html(clara_lumiere_t('aboutPage.value3Text')); ?>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Info -->
    <section class="py-20">
        <div class="container text-center">
            <h2 class="text-3xl font-serif text-foreground mb-8">
                <?php echo esc_html(clara_lumiere_t('aboutPage.visitTitle')); ?>
            </h2>
            <div class="text-muted-foreground space-y-2">
                <p>Nessvegen 21, 7550 Hommelvik, Norway</p>
                <p>+47 972 878 89</p>
                <p>info@claralumiere.com</p>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
