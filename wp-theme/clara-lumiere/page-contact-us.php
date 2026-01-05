<?php
/**
 * Template Name: Contact Us
 * The template for displaying the Contact Us page
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
                <?php echo esc_html(clara_lumiere_t('contactPage.title')); ?>
            </h1>
            <p class="text-lg text-accent/80 max-w-2xl mx-auto">
                <?php echo esc_html(clara_lumiere_t('contactPage.subtitle')); ?>
            </p>
        </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="py-20">
        <div class="container">
            <div class="grid md:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="bg-muted/30 p-8 rounded-lg">
                    <h2 class="text-2xl font-serif text-foreground mb-6">
                        <?php echo esc_html(clara_lumiere_t('contactPage.formTitle')); ?>
                    </h2>
                    <?php
                    // Use Contact Form 7 or custom form
                    if (function_exists('wpcf7_contact_form')) {
                        echo do_shortcode('[contact-form-7 id="1" title="Contact form"]');
                    } else {
                        // Fallback custom form
                        ?>
                        <form id="contact-form" class="space-y-6" method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>">
                            <?php wp_nonce_field('clara_lumiere_contact_form', 'contact_nonce'); ?>
                            <input type="hidden" name="action" value="clara_lumiere_contact_submit">
                            
                            <div>
                                <label for="contact_name" class="block text-sm font-medium text-foreground mb-2">
                                    <?php echo esc_html(clara_lumiere_t('contactPage.nameLabel')); ?>
                                </label>
                                <input 
                                    type="text" 
                                    id="contact_name" 
                                    name="contact_name" 
                                    required
                                    class="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                                    placeholder="<?php echo esc_attr(clara_lumiere_t('contactPage.namePlaceholder')); ?>"
                                />
                            </div>
                            
                            <div>
                                <label for="contact_phone" class="block text-sm font-medium text-foreground mb-2">
                                    <?php echo esc_html(clara_lumiere_t('contactPage.phoneLabel')); ?>
                                </label>
                                <input 
                                    type="tel" 
                                    id="contact_phone" 
                                    name="contact_phone"
                                    class="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                                    placeholder="<?php echo esc_attr(clara_lumiere_t('contactPage.phonePlaceholder')); ?>"
                                />
                            </div>
                            
                            <div>
                                <label for="contact_email" class="block text-sm font-medium text-foreground mb-2">
                                    <?php echo esc_html(clara_lumiere_t('contactPage.emailLabel')); ?>
                                </label>
                                <input 
                                    type="email" 
                                    id="contact_email" 
                                    name="contact_email" 
                                    required
                                    class="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                                    placeholder="<?php echo esc_attr(clara_lumiere_t('contactPage.emailPlaceholder')); ?>"
                                />
                            </div>
                            
                            <div>
                                <label for="contact_message" class="block text-sm font-medium text-foreground mb-2">
                                    <?php echo esc_html(clara_lumiere_t('contactPage.messageLabel')); ?>
                                </label>
                                <textarea 
                                    id="contact_message" 
                                    name="contact_message" 
                                    required
                                    rows="5"
                                    class="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                                    placeholder="<?php echo esc_attr(clara_lumiere_t('contactPage.messagePlaceholder')); ?>"
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                class="w-full px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
                            >
                                <?php echo esc_html(clara_lumiere_t('contactPage.submit')); ?>
                            </button>
                        </form>
                        <?php
                    }
                    ?>
                </div>

                <!-- Contact Info -->
                <div class="space-y-8">
                    <div>
                        <h2 class="text-2xl font-serif text-foreground mb-6">
                            <?php echo esc_html(clara_lumiere_t('contactPage.infoTitle')); ?>
                        </h2>
                        <p class="text-muted-foreground mb-8">
                            <?php echo esc_html(clara_lumiere_t('contactPage.infoText')); ?>
                        </p>
                    </div>

                    <div class="space-y-6">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-medium text-foreground mb-1"><?php echo esc_html(clara_lumiere_t('contactPage.addressLabel')); ?></h3>
                                <p class="text-muted-foreground">Nessvegen 21, 7550 Hommelvik, Norway</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-medium text-foreground mb-1"><?php echo esc_html(clara_lumiere_t('contactPage.phoneInfoLabel')); ?></h3>
                                <p class="text-muted-foreground">+47 972 878 89</p>
                            </div>
                        </div>

                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg class="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 class="font-medium text-foreground mb-1"><?php echo esc_html(clara_lumiere_t('contactPage.emailInfoLabel')); ?></h3>
                                <p class="text-muted-foreground">info@claralumiere.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php
get_footer();
