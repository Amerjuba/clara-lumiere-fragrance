import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';

const OrientalOils = () => {
  const { t } = useLanguage();
  const oilProducts = products.filter(p => p.category === 'Oriental Oils');

  return (
    <>
      <Helmet>
        <title>Oriental Oils | Clara Lumiere - Luxury Perfume Oils</title>
        <meta name="description" content="Discover our collection of luxurious concentrated perfume oils. Opulent oriental fragrances inspired by ancient trade routes." />
      </Helmet>
      
      <Header />
      <CartDrawer />
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
              Oriental Oils
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Luxurious concentrated perfume oils that tell stories of ancient trade routes and timeless elegance.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {oilProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
            {oilProducts.length === 0 && (
              <p className="text-center text-muted-foreground py-12">
                No products available in this category yet.
              </p>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default OrientalOils;
