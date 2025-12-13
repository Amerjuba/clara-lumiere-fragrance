import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Subcategory = 'all' | 'for-her' | 'for-him' | 'oriental' | 'grand-collection';

const subcategories = [
  { id: 'all' as Subcategory, label: 'All' },
  { id: 'for-her' as Subcategory, label: 'For Her' },
  { id: 'for-him' as Subcategory, label: 'For Him' },
  { id: 'oriental' as Subcategory, label: 'Oriental' },
  { id: 'grand-collection' as Subcategory, label: 'Grand Collection' },
];

const SignatureScents = () => {
  const [activeSubcategory, setActiveSubcategory] = useState<Subcategory>('all');
  const signatureProducts = products.filter(p => p.category === 'Signature Scents');

  return (
    <>
      <Helmet>
        <title>Signature Scents | Clara Lumiere - Luxury Fragrances</title>
        <meta name="description" content="Discover our curated collection of distinctive signature fragrances. Premium scents crafted for those who command attention." />
      </Helmet>
      
      <Header />
      <CartDrawer />
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
              Signature Scents
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our curated collection of distinctive fragrances, each telling a unique story of elegance and sophistication.
            </p>
          </div>
        </section>

        {/* Subcategory Filter */}
        <section className="py-8 border-b border-border/50">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2">
              {subcategories.map((sub) => (
                <Button
                  key={sub.id}
                  variant={activeSubcategory === sub.id ? 'luxury' : 'outline'}
                  size="sm"
                  onClick={() => setActiveSubcategory(sub.id)}
                  className={cn(
                    'min-w-[100px]',
                    activeSubcategory === sub.id && 'pointer-events-none'
                  )}
                >
                  {sub.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {signatureProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
            {signatureProducts.length === 0 && (
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

export default SignatureScents;
