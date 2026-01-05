# Clara Lumiere WordPress Theme

A luxury fragrance e-commerce WordPress theme converted from React/Vite to WordPress.

## Features

- **WooCommerce Integration**: Full e-commerce functionality for product management
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Multi-language Support**: English, Norwegian (Norsk), and Arabic (عربي)
- **Custom Product Meta Fields**: Fragrance notes (top, heart, base), brand, and size
- **Modern UI Components**: Elegant design matching the original React version
- **SEO Optimized**: Proper WordPress SEO structure

## Installation

1. Upload the `clara-lumiere` folder to `/wp-content/themes/` directory
2. Activate the theme through the 'Appearance' menu in WordPress
3. Install and activate WooCommerce plugin
4. (Optional) Install Contact Form 7 or use the built-in contact form handler

## Required Plugins

- **WooCommerce**: For e-commerce functionality
- **Contact Form 7** (Optional): For contact form functionality

## Setup Instructions

### 1. Create Pages

Create the following pages in WordPress:
- Home (use "Home Page" template)
- About Us (use "About Us" template)
- Contact Us (use "Contact Us" template)
- Signature Scents
- Sea of Perfumes
- Oriental Oils
- Make Your Own Brand
- Wholesale

### 2. Set Homepage

1. Go to Settings > Reading
2. Set "Homepage displays" to "A static page"
3. Select your Home page as the homepage

### 3. Add Products

1. Go to Products > Add New
2. Add product details including:
   - Product name, description, price
   - Product image
   - Set as "Featured" if you want it on the homepage
3. Fill in custom meta fields:
   - Brand (e.g., "Royal Fragrance", "Signature Scent", "Sea of Parfum")
   - Size (e.g., "100ml", "75ml", "50ml")
   - Top Notes (comma-separated)
   - Heart Notes (comma-separated)
   - Base Notes (comma-separated)

### 4. Upload Assets

Copy the following assets from the original project to the theme:
- `src/assets/logo.png` → `wp-theme/clara-lumiere/assets/images/logo.png`
- `src/assets/hero-perfume.jpg` → `wp-theme/clara-lumiere/assets/images/hero-perfume.jpg`
- `src/assets/product-*.jpg` → `wp-theme/clara-lumiere/assets/images/`

### 5. Configure WooCommerce

1. Go to WooCommerce > Settings
2. Configure shop page, cart, checkout pages
3. Set up payment gateways
4. Configure shipping options

## Customization

### Colors

The theme uses CSS custom properties defined in `assets/css/custom.css`. You can modify:
- Primary color (Deep Forest Green)
- Accent color (Chartreuse)
- Gold color
- And other brand colors

### Translations

Translations are handled in `functions.php` via the `clara_lumiere_t()` function. You can:
- Add more translation keys
- Integrate with WPML or Polylang for advanced multi-language support

### Language Switching

The theme includes basic language switching via URL parameter (`?lang=en`, `?lang=no`, `?lang=ar`). For production, consider:
- Installing WPML or Polylang
- Using WordPress's built-in language features

## File Structure

```
clara-lumiere/
├── assets/
│   ├── css/
│   │   └── custom.css
│   ├── js/
│   │   ├── main.js
│   │   └── woocommerce.js
│   └── images/
├── template-parts/
│   ├── home-hero.php
│   ├── home-brands.php
│   ├── home-products.php
│   ├── home-about.php
│   └── product-card.php
├── woocommerce/
│   ├── archive-product.php
│   ├── content-product.php
│   └── single-product.php
├── footer.php
├── functions.php
├── header.php
├── index.php
├── page.php
├── page-about-us.php
├── page-contact-us.php
├── page-home.php
├── style.css
└── README.md
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Support

For issues or questions, please contact the theme developer.

## License

GPL v2 or later
