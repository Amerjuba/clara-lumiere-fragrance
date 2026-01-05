# Migration Guide: React to WordPress

This guide will help you migrate your React/Vite project to the WordPress theme.

## Step 1: Install WordPress and Required Plugins

1. Install WordPress (latest version recommended)
2. Install and activate the following plugins:
   - **WooCommerce** (required for e-commerce)
   - **Contact Form 7** (optional, for contact forms)

## Step 2: Install the Theme

1. Copy the entire `clara-lumiere` folder to your WordPress installation:
   ```
   /wp-content/themes/clara-lumiere/
   ```

2. Go to **Appearance > Themes** in WordPress admin
3. Activate the "Clara Lumiere" theme

## Step 3: Migrate Assets

Copy the following files from your React project to the WordPress theme:

### Images

From `src/assets/` to `wp-theme/clara-lumiere/assets/images/`:

```
logo.png → assets/images/logo.png
hero-perfume.jpg → assets/images/hero-perfume.jpg
product-oud.jpg → assets/images/product-oud.jpg
product-noir.jpg → assets/images/product-noir.jpg
product-sea.jpg → assets/images/product-sea.jpg
product-gold.jpg → assets/images/product-gold.jpg
product-riviera.jpg → assets/images/product-riviera.jpg
product-pearl.jpg → assets/images/product-pearl.jpg
```

### Public Assets

From `public/lovable-uploads/` to `wp-theme/clara-lumiere/assets/images/`:
- Copy all product images and other assets

## Step 4: Create Pages

Create the following pages in WordPress:

1. **Home Page**
   - Title: "Home"
   - Template: "Home Page"
   - Set as homepage (Settings > Reading)

2. **About Us**
   - Title: "About Us"
   - Template: "About Us"
   - Slug: `about-us`

3. **Contact Us**
   - Title: "Contact Us"
   - Template: "Contact Us"
   - Slug: `contact-us`

4. **Product Category Pages** (create as regular pages):
   - Signature Scents (slug: `signature-scents`)
   - Sea of Perfumes (slug: `sea-of-perfumes`)
   - Oriental Oils (slug: `oriental-oils`)
   - Make Your Own Brand (slug: `make-your-own-brand`)
   - Wholesale (slug: `wholesale`)

## Step 5: Set Up WooCommerce

1. Run the WooCommerce setup wizard
2. Configure:
   - Shop page (WooCommerce will create this automatically)
   - Currency: NOK (Norwegian Krone)
   - Payment gateways
   - Shipping options

## Step 6: Import Products

For each product from `src/data/products.ts`, create a WooCommerce product:

1. Go to **Products > Add New**
2. Fill in:
   - **Product Name**: e.g., "Midnight Oud"
   - **Description**: Product description
   - **Price**: e.g., 2490 (in NOK)
   - **Product Image**: Upload from `assets/images/`
   - **Featured**: Check if product should appear on homepage
   - **Categories**: Create/assign product categories

3. Fill in custom meta fields (scroll down to "Fragrance Notes" section):
   - **Brand**: e.g., "Royal Fragrance"
   - **Size**: e.g., "100ml"
   - **Top Notes**: Comma-separated, e.g., "Bergamot, Saffron, Pink Pepper"
   - **Heart Notes**: Comma-separated, e.g., "Oud, Rose, Jasmine"
   - **Base Notes**: Comma-separated, e.g., "Amber, Sandalwood, Musk"

### Product Mapping Reference

| React Product ID | Name | Brand | Price (NOK) | Size |
|-----------------|------|-------|------------|------|
| rf-midnight-oud | Midnight Oud | Royal Fragrance | 2490 | 100ml |
| ss-velvet-noir | Velvet Noir | Signature Scent | 1990 | 75ml |
| sop-azure-wave | Azure Wave | Sea of Parfum | 1790 | 100ml |
| rf-golden-elixir | Golden Elixir | Royal Fragrance | 3290 | 50ml |
| ss-french-riviera | French Riviera | Signature Scent | 1890 | 100ml |
| sop-pearl-mist | Pearl Mist | Sea of Parfum | 1690 | 75ml |

## Step 7: Configure Menus

1. Go to **Appearance > Menus**
2. Create a new menu called "Primary Menu"
3. Add pages:
   - Home
   - Products (with sub-items: Signature Scents, Sea of Perfumes, etc.)
   - About Us
   - Contact Us
4. Assign to "Primary Menu" location

## Step 8: Customize Theme

### Colors
Edit `assets/css/custom.css` to adjust brand colors if needed.

### Translations
Edit the `clara_lumiere_get_full_translations()` function in `functions.php` to add/modify translations.

### Language Switching
For production, consider:
- Installing **WPML** or **Polylang** for proper multi-language support
- Or use WordPress's built-in language features

## Step 9: Test Everything

1. **Homepage**: Check hero section, products, brands, about section
2. **Product Pages**: Verify product display, add to cart functionality
3. **Cart**: Test adding/removing products
4. **Checkout**: Complete a test order
5. **Contact Form**: Submit a test message
6. **Mobile**: Test responsive design on mobile devices
7. **Languages**: Test language switching (English, Norwegian, Arabic)

## Step 10: SEO Setup

1. Install an SEO plugin (Yoast SEO or Rank Math)
2. Configure:
   - Homepage meta title and description
   - Product meta descriptions
   - Sitemap
   - Social media tags

## Troubleshooting

### Products Not Showing
- Ensure WooCommerce is activated
- Check that products are published
- Verify featured products are set correctly

### Images Not Loading
- Check file paths in `assets/images/`
- Verify file permissions
- Clear browser cache

### Styles Not Loading
- Check that Tailwind CSS CDN is accessible
- Verify `custom.css` is enqueued correctly
- Clear WordPress cache if using a caching plugin

### Contact Form Not Working
- Install Contact Form 7 plugin
- Or check that the custom form handler in `functions.php` is working
- Verify email settings in WordPress

## Next Steps

- Set up payment gateways in WooCommerce
- Configure shipping zones and rates
- Set up email notifications
- Add Google Analytics
- Configure backups
- Set up SSL certificate

## Support

For issues or questions about the migration, refer to the theme documentation or contact support.
