<?php
/**
 * Template part for displaying the brands section
 *
 * @package Clara_Lumiere
 */
?>

<section class="py-24 bg-secondary/30">
    <div class="container">
        <div class="text-center mb-16">
            <span class="inline-block text-accent font-medium uppercase tracking-[0.3em] text-sm mb-4">
                Our Brands
            </span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
                Exclusive Partnerships
            </h2>
            <p class="text-muted-foreground max-w-2xl mx-auto">
                We represent the finest fragrance houses from France and the Emirates.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <?php
            $brands = array(
                array(
                    'name' => 'Royal Fragrance',
                    'origin' => 'United Arab Emirates',
                    'description' => 'Luxurious fragrances inspired by Arabian heritage and opulence.',
                ),
                array(
                    'name' => 'Signature Scent',
                    'origin' => 'France',
                    'description' => 'Elegant French perfumery with timeless sophistication.',
                ),
                array(
                    'name' => 'Sea of Parfum',
                    'origin' => 'France',
                    'description' => 'Fresh, oceanic scents capturing coastal elegance.',
                ),
            );
            
            foreach ($brands as $brand) :
            ?>
                <div class="text-center p-8 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="text-2xl font-serif mb-2 text-foreground"><?php echo esc_html($brand['name']); ?></h3>
                    <p class="text-sm text-accent mb-4"><?php echo esc_html($brand['origin']); ?></p>
                    <p class="text-muted-foreground"><?php echo esc_html($brand['description']); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
