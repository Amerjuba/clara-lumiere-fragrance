import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProductsSection from '@/components/sections/ProductsSection';
import AboutSection from '@/components/sections/AboutSection';
import BrandsSection from '@/components/sections/BrandsSection';
import CartDrawer from '@/components/cart/CartDrawer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Clara Lumiere | Luxury Fragrances from France & Emirates</title>
        <meta 
          name="description" 
          content="Discover your signature scent at Clara Lumiere. Exclusive Nordic distributor of Royal Fragrance, Signature Scent, and Sea of Parfum luxury perfumes." 
        />
        <meta property="og:title" content="Clara Lumiere | Luxury Fragrances" />
        <meta property="og:description" content="Curated luxury fragrances from the finest French-Emirati artisans. Shop our exclusive collection." />
        <link rel="canonical" href="https://claralumiere.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <BrandsSection />
          <ProductsSection />
          <AboutSection />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </>
  );
};

export default Index;
