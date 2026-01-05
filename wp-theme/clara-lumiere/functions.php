<?php
/**
 * Clara Lumiere Theme Functions
 *
 * @package Clara_Lumiere
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Theme Setup
 */
function clara_lumiere_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));
    
    // Add WooCommerce support
    add_theme_support('woocommerce');
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'clara-lumiere'),
        'footer' => __('Footer Menu', 'clara-lumiere'),
    ));
    
    // Set content width
    $GLOBALS['content_width'] = 1200;
}
add_action('after_setup_theme', 'clara_lumiere_setup');

/**
 * Enqueue scripts and styles
 */
function clara_lumiere_scripts() {
    // Tailwind CSS via CDN (or use compiled version)
    wp_enqueue_style('tailwindcss', 'https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css', array(), '3.4.1');
    
    // Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap', array(), null);
    
    // Theme styles
    wp_enqueue_style('clara-lumiere-style', get_stylesheet_uri(), array('tailwindcss'), '1.0.0');
    wp_enqueue_style('clara-lumiere-custom', get_template_directory_uri() . '/assets/css/custom.css', array('clara-lumiere-style'), '1.0.0');
    
    // Theme scripts
    wp_enqueue_script('clara-lumiere-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('clara-lumiere-main', 'claraLumiere', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('clara_lumiere_nonce'),
    ));
    
    // WooCommerce scripts
    if (class_exists('WooCommerce')) {
        wp_enqueue_script('clara-lumiere-woocommerce', get_template_directory_uri() . '/assets/js/woocommerce.js', array('jquery', 'clara-lumiere-main'), '1.0.0', true);
    }
}
add_action('wp_enqueue_scripts', 'clara_lumiere_scripts');

/**
 * Register widget areas
 */
function clara_lumiere_widgets_init() {
    register_sidebar(array(
        'name' => __('Footer Widget Area', 'clara-lumiere'),
        'id' => 'footer-1',
        'description' => __('Add widgets here to appear in your footer.', 'clara-lumiere'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'clara_lumiere_widgets_init');

/**
 * Custom product meta fields for fragrance notes
 */
function clara_lumiere_add_product_meta_boxes() {
    add_meta_box(
        'fragrance_notes',
        __('Fragrance Notes', 'clara-lumiere'),
        'clara_lumiere_fragrance_notes_callback',
        'product',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'clara_lumiere_add_product_meta_boxes');

function clara_lumiere_fragrance_notes_callback($post) {
    wp_nonce_field('clara_lumiere_save_fragrance_notes', 'fragrance_notes_nonce');
    
    $top_notes = get_post_meta($post->ID, '_top_notes', true);
    $heart_notes = get_post_meta($post->ID, '_heart_notes', true);
    $base_notes = get_post_meta($post->ID, '_base_notes', true);
    $brand = get_post_meta($post->ID, '_fragrance_brand', true);
    $size = get_post_meta($post->ID, '_fragrance_size', true);
    
    ?>
    <table class="form-table">
        <tr>
            <th><label for="fragrance_brand"><?php _e('Brand', 'clara-lumiere'); ?></label></th>
            <td><input type="text" id="fragrance_brand" name="fragrance_brand" value="<?php echo esc_attr($brand); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="fragrance_size"><?php _e('Size', 'clara-lumiere'); ?></label></th>
            <td><input type="text" id="fragrance_size" name="fragrance_size" value="<?php echo esc_attr($size); ?>" class="regular-text" /></td>
        </tr>
        <tr>
            <th><label for="top_notes"><?php _e('Top Notes (comma-separated)', 'clara-lumiere'); ?></label></th>
            <td><input type="text" id="top_notes" name="top_notes" value="<?php echo esc_attr($top_notes); ?>" class="large-text" /></td>
        </tr>
        <tr>
            <th><label for="heart_notes"><?php _e('Heart Notes (comma-separated)', 'clara-lumiere'); ?></label></th>
            <td><input type="text" id="heart_notes" name="heart_notes" value="<?php echo esc_attr($heart_notes); ?>" class="large-text" /></td>
        </tr>
        <tr>
            <th><label for="base_notes"><?php _e('Base Notes (comma-separated)', 'clara-lumiere'); ?></label></th>
            <td><input type="text" id="base_notes" name="base_notes" value="<?php echo esc_attr($base_notes); ?>" class="large-text" /></td>
        </tr>
    </table>
    <?php
}

function clara_lumiere_save_fragrance_notes($post_id) {
    if (!isset($_POST['fragrance_notes_nonce']) || !wp_verify_nonce($_POST['fragrance_notes_nonce'], 'clara_lumiere_save_fragrance_notes')) {
        return;
    }
    
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }
    
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }
    
    if (isset($_POST['fragrance_brand'])) {
        update_post_meta($post_id, '_fragrance_brand', sanitize_text_field($_POST['fragrance_brand']));
    }
    
    if (isset($_POST['fragrance_size'])) {
        update_post_meta($post_id, '_fragrance_size', sanitize_text_field($_POST['fragrance_size']));
    }
    
    if (isset($_POST['top_notes'])) {
        update_post_meta($post_id, '_top_notes', sanitize_text_field($_POST['top_notes']));
    }
    
    if (isset($_POST['heart_notes'])) {
        update_post_meta($post_id, '_heart_notes', sanitize_text_field($_POST['heart_notes']));
    }
    
    if (isset($_POST['base_notes'])) {
        update_post_meta($post_id, '_base_notes', sanitize_text_field($_POST['base_notes']));
    }
}
add_action('save_post', 'clara_lumiere_save_fragrance_notes');

/**
 * Customize WooCommerce
 */
function clara_lumiere_woocommerce_setup() {
    // Remove default WooCommerce wrappers
    remove_action('woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
    remove_action('woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);
    
    // Add custom wrappers
    add_action('woocommerce_before_main_content', 'clara_lumiere_wrapper_start', 10);
    add_action('woocommerce_after_main_content', 'clara_lumiere_wrapper_end', 10);
}
add_action('init', 'clara_lumiere_woocommerce_setup');

function clara_lumiere_wrapper_start() {
    echo '<main class="container py-12">';
}

function clara_lumiere_wrapper_end() {
    echo '</main>';
}

/**
 * Change number of products per row
 */
function clara_lumiere_loop_columns() {
    return 4;
}
add_filter('loop_shop_columns', 'clara_lumiere_loop_columns');

/**
 * Change number of products per page
 */
function clara_lumiere_products_per_page() {
    return 12;
}
add_filter('loop_shop_per_page', 'clara_lumiere_products_per_page', 20);

/**
 * Helper function to get translations
 */
function clara_lumiere_t($key, $lang = null) {
    if (!$lang) {
        // Check URL parameter first
        if (isset($_GET['lang'])) {
            $lang = sanitize_text_field($_GET['lang']);
        } else {
            $lang = get_locale();
            if (strpos($lang, '_') !== false) {
                $lang = substr($lang, 0, 2);
            }
        }
    }
    
    $translations = clara_lumiere_get_full_translations();
    
    if (isset($translations[$lang][$key])) {
        return $translations[$lang][$key];
    }
    
    return isset($translations['en'][$key]) ? $translations['en'][$key] : $key;
}

/**
 * Handle contact form submission
 */
function clara_lumiere_handle_contact_form() {
    // Verify nonce
    if (!isset($_POST['contact_nonce']) || !wp_verify_nonce($_POST['contact_nonce'], 'clara_lumiere_contact_form')) {
        wp_die('Security check failed');
    }
    
    // Sanitize input
    $name = sanitize_text_field($_POST['contact_name']);
    $phone = sanitize_text_field($_POST['contact_phone']);
    $email = sanitize_email($_POST['contact_email']);
    $message = sanitize_textarea_field($_POST['contact_message']);
    
    // Validate email
    if (!is_email($email)) {
        wp_redirect(add_query_arg('contact', 'invalid', wp_get_referer()));
        exit;
    }
    
    // Prepare email
    $to = get_option('admin_email');
    $subject = sprintf(__('New Contact Form Submission from %s', 'clara-lumiere'), $name);
    $body = sprintf(
        __("Name: %s\nPhone: %s\nEmail: %s\n\nMessage:\n%s", 'clara-lumiere'),
        $name,
        $phone,
        $email,
        $message
    );
    $headers = array('Content-Type: text/plain; charset=UTF-8', 'From: ' . $name . ' <' . $email . '>');
    
    // Send email
    $sent = wp_mail($to, $subject, $body, $headers);
    
    if ($sent) {
        wp_redirect(add_query_arg('contact', 'success', wp_get_referer()));
    } else {
        wp_redirect(add_query_arg('contact', 'error', wp_get_referer()));
    }
    exit;
}
add_action('admin_post_clara_lumiere_contact_submit', 'clara_lumiere_handle_contact_form');
add_action('admin_post_nopriv_clara_lumiere_contact_submit', 'clara_lumiere_handle_contact_form');

/**
 * Expand translations with all page content
 */
function clara_lumiere_get_full_translations() {
    return array(
        'en' => array(
            'nav.home' => 'Home',
            'nav.products' => 'Products',
            'nav.about' => 'About Us',
            'nav.contact' => 'Contact Us',
            'hero.title' => 'Discover Your Signature Scent',
            'hero.subtitle' => 'Curated luxury fragrances from the finest French-Emirati artisans',
            'hero.cta' => 'Shop Collection',
            'hero.explore' => 'Explore',
            'products.featured' => 'Featured Collection',
            'products.viewAll' => 'View All',
            'products.addToBag' => 'Add to Bag',
            'about.title' => 'The Art of Fragrance',
            'about.subtitle' => 'A fusion of French elegance and Emirati opulence',
            'contact.title' => 'Get in Touch',
            'footer.rights' => 'All rights reserved',
            'aboutPage.title' => 'About Us',
            'aboutPage.subtitle' => 'Exclusive agents for luxury fragrance brands in Scandinavia',
            'aboutPage.storyTitle' => 'Our Story',
            'aboutPage.storyText1' => 'Clara Lumiere is the exclusive agent for three prestigious luxury fragrance brands in Norway, Denmark, and Sweden: Royal Fragrance, Signature Scent, and Sea of Parfum.',
            'aboutPage.storyText2' => 'We bring the finest French-Emirati fragrance artistry to Scandinavia, curating exceptional scents that embody luxury, craftsmanship, and timeless elegance.',
            'aboutPage.valuesTitle' => 'Our Values',
            'aboutPage.value1Title' => 'Excellence',
            'aboutPage.value1Text' => 'We source only the finest ingredients and partner with master perfumers.',
            'aboutPage.value2Title' => 'Authenticity',
            'aboutPage.value2Text' => 'Every fragrance tells a genuine story of heritage and artistry.',
            'aboutPage.value3Title' => 'Luxury',
            'aboutPage.value3Text' => 'We deliver a premium experience in every interaction.',
            'aboutPage.visitTitle' => 'Visit Us',
            'contactPage.title' => 'Contact Us',
            'contactPage.subtitle' => 'We would love to hear from you',
            'contactPage.formTitle' => 'Send us a message',
            'contactPage.nameLabel' => 'Name',
            'contactPage.namePlaceholder' => 'Your name',
            'contactPage.phoneLabel' => 'Phone',
            'contactPage.phonePlaceholder' => 'Your phone number',
            'contactPage.emailLabel' => 'Email',
            'contactPage.emailPlaceholder' => 'Your email address',
            'contactPage.messageLabel' => 'Message',
            'contactPage.messagePlaceholder' => 'How can we help you?',
            'contactPage.submit' => 'Send Message',
            'contactPage.sending' => 'Sending...',
            'contactPage.successTitle' => 'Message Sent',
            'contactPage.successMessage' => 'Thank you for contacting us. We will get back to you soon.',
            'contactPage.infoTitle' => 'Get in Touch',
            'contactPage.infoText' => 'Have questions about our fragrances or services? We are here to help.',
            'contactPage.addressLabel' => 'Address',
            'contactPage.phoneInfoLabel' => 'Phone',
            'contactPage.emailInfoLabel' => 'Email',
        ),
        'no' => array(
            'nav.home' => 'Hjem',
            'nav.products' => 'Produkter',
            'nav.about' => 'Om Oss',
            'nav.contact' => 'Kontakt Oss',
            'hero.title' => 'Oppdag Din Signaturduft',
            'hero.subtitle' => 'Kuraterte luksusparfymer fra de fineste franske og emiratiske kunstnere',
            'hero.cta' => 'Se Kolleksjon',
            'hero.explore' => 'Utforsk',
            'products.featured' => 'Utvalgte Produkter',
            'products.viewAll' => 'Se Alle',
            'products.addToBag' => 'Legg i Handlekurv',
            'about.title' => 'Parfymekunsten',
            'about.subtitle' => 'En fusjon av fransk eleganse og emiratisk opulens',
            'contact.title' => 'Ta Kontakt',
            'footer.rights' => 'Alle rettigheter reservert',
            'aboutPage.title' => 'Om Oss',
            'aboutPage.subtitle' => 'Eksklusive agenter for luksusparfymemerker i Skandinavia',
            'aboutPage.storyTitle' => 'Vår Historie',
            'aboutPage.storyText1' => 'Clara Lumiere er eksklusiv agent for tre prestisjetunge luksusparfymemerker i Norge, Danmark og Sverige: Royal Fragrance, Signature Scent og Sea of Parfum.',
            'aboutPage.storyText2' => 'Vi bringer den fineste franske og emiratiske parfymekunsten til Skandinavia, med eksepsjonelle dufter som representerer luksus, håndverk og tidløs eleganse.',
            'aboutPage.valuesTitle' => 'Våre Verdier',
            'aboutPage.value1Title' => 'Eksellens',
            'aboutPage.value1Text' => 'Vi bruker kun de fineste ingrediensene og samarbeider med mesterperfumører.',
            'aboutPage.value2Title' => 'Autentisitet',
            'aboutPage.value2Text' => 'Hver duft forteller en ekte historie om arv og kunstferdighet.',
            'aboutPage.value3Title' => 'Luksus',
            'aboutPage.value3Text' => 'Vi leverer en premium opplevelse i hver interaksjon.',
            'aboutPage.visitTitle' => 'Besøk Oss',
            'contactPage.title' => 'Kontakt Oss',
            'contactPage.subtitle' => 'Vi vil gjerne høre fra deg',
            'contactPage.formTitle' => 'Send oss en melding',
            'contactPage.nameLabel' => 'Navn',
            'contactPage.namePlaceholder' => 'Ditt navn',
            'contactPage.phoneLabel' => 'Telefon',
            'contactPage.phonePlaceholder' => 'Ditt telefonnummer',
            'contactPage.emailLabel' => 'E-post',
            'contactPage.emailPlaceholder' => 'Din e-postadresse',
            'contactPage.messageLabel' => 'Melding',
            'contactPage.messagePlaceholder' => 'Hvordan kan vi hjelpe deg?',
            'contactPage.submit' => 'Send Melding',
            'contactPage.sending' => 'Sender...',
            'contactPage.successTitle' => 'Melding Sendt',
            'contactPage.successMessage' => 'Takk for at du kontaktet oss. Vi tar kontakt snart.',
            'contactPage.infoTitle' => 'Ta Kontakt',
            'contactPage.infoText' => 'Har du spørsmål om våre dufter eller tjenester? Vi er her for å hjelpe.',
            'contactPage.addressLabel' => 'Adresse',
            'contactPage.phoneInfoLabel' => 'Telefon',
            'contactPage.emailInfoLabel' => 'E-post',
        ),
        'ar' => array(
            'nav.home' => 'الرئيسية',
            'nav.products' => 'المنتجات',
            'nav.about' => 'من نحن',
            'nav.contact' => 'اتصل بنا',
            'hero.title' => 'اكتشف عطرك المميز',
            'hero.subtitle' => 'عطور فاخرة وزيوت عطرية، مصنوعة لتدلل الحواس',
            'hero.cta' => 'تسوق المجموعة',
            'hero.explore' => 'استكشف',
            'products.featured' => 'المجموعة المميزة',
            'products.viewAll' => 'عرض الكل',
            'products.addToBag' => 'أضف إلى الحقيبة',
            'about.title' => 'فن العطور',
            'about.subtitle' => 'مزيج من الأناقة الفرنسية والفخامة الإماراتية',
            'contact.title' => 'تواصل معنا',
            'footer.rights' => 'جميع الحقوق محفوظة',
            'aboutPage.title' => 'من نحن',
            'aboutPage.subtitle' => 'وكلاء حصريون لعلامات العطور الفاخرة في الدول الاسكندنافية',
            'aboutPage.storyTitle' => 'قصتنا',
            'aboutPage.storyText1' => 'كلارا لوميير هي الوكيل الحصري لثلاث علامات تجارية فاخرة للعطور في النرويج والدنمارك والسويد: رويال فراجرانس، سيجنتشر سينت، وسي أوف بارفوم.',
            'aboutPage.storyText2' => 'نقدم أرقى فنون العطور الفرنسية والإماراتية إلى الدول الاسكندنافية، مع روائح استثنائية تجسد الفخامة والحرفية والأناقة الخالدة.',
            'aboutPage.valuesTitle' => 'قيمنا',
            'aboutPage.value1Title' => 'التميز',
            'aboutPage.value1Text' => 'نستخدم أجود المكونات فقط ونتعاون مع أمهر صانعي العطور.',
            'aboutPage.value2Title' => 'الأصالة',
            'aboutPage.value2Text' => 'كل عطر يروي قصة حقيقية من التراث والفن.',
            'aboutPage.value3Title' => 'الفخامة',
            'aboutPage.value3Text' => 'نقدم تجربة متميزة في كل تفاعل.',
            'aboutPage.visitTitle' => 'زورونا',
            'contactPage.title' => 'اتصل بنا',
            'contactPage.subtitle' => 'نحب أن نسمع منك',
            'contactPage.formTitle' => 'أرسل لنا رسالة',
            'contactPage.nameLabel' => 'الاسم',
            'contactPage.namePlaceholder' => 'اسمك',
            'contactPage.phoneLabel' => 'الهاتف',
            'contactPage.phonePlaceholder' => 'رقم هاتفك',
            'contactPage.emailLabel' => 'البريد الإلكتروني',
            'contactPage.emailPlaceholder' => 'بريدك الإلكتروني',
            'contactPage.messageLabel' => 'الرسالة',
            'contactPage.messagePlaceholder' => 'كيف يمكننا مساعدتك؟',
            'contactPage.submit' => 'إرسال الرسالة',
            'contactPage.sending' => 'جاري الإرسال...',
            'contactPage.successTitle' => 'تم الإرسال',
            'contactPage.successMessage' => 'شكراً لتواصلك معنا. سنعود إليك قريباً.',
            'contactPage.infoTitle' => 'تواصل معنا',
            'contactPage.infoText' => 'هل لديك أسئلة حول عطورنا أو خدماتنا؟ نحن هنا للمساعدة.',
            'contactPage.addressLabel' => 'العنوان',
            'contactPage.phoneInfoLabel' => 'الهاتف',
            'contactPage.emailInfoLabel' => 'البريد الإلكتروني',
        ),
    );
}
