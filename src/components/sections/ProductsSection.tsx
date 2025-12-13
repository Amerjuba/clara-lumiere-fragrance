import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';

const ProductsSection = () => {
  const { t } = useLanguage();
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium uppercase tracking-[0.3em] text-sm mb-4">
            Our Selection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            {t('products.featured')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of exceptional fragrances from the world's most prestigious houses.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            {t('products.viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
