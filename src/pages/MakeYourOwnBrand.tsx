import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { Button } from '@/components/ui/button';
import { Sparkles, Palette, Package, Award } from 'lucide-react';

const MakeYourOwnBrand = () => {
  return (
    <>
      <Helmet>
        <title>Make Your Own Brand | Clara Lumiere - Custom Fragrance Solutions</title>
        <meta name="description" content="Create your own signature fragrance brand with Clara Lumiere. Private label solutions for hotels, spas, and luxury retailers." />
      </Helmet>
      
      <Header />
      <CartDrawer />
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
              Make Your Own Brand
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partner with us to create bespoke fragrances that embody your brand's unique identity and vision.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="text-center p-8 bg-card rounded-lg border border-border/50">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">Custom Formulation</h3>
                <p className="text-muted-foreground">
                  Work with our master perfumers to create unique scent profiles tailored to your brand.
                </p>
              </div>
              
              <div className="text-center p-8 bg-card rounded-lg border border-border/50">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <Palette className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">Brand Design</h3>
                <p className="text-muted-foreground">
                  Full branding services including packaging design, labels, and marketing materials.
                </p>
              </div>
              
              <div className="text-center p-8 bg-card rounded-lg border border-border/50">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <Package className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">Production</h3>
                <p className="text-muted-foreground">
                  State-of-the-art manufacturing with flexible MOQs to suit your business needs.
                </p>
              </div>
              
              <div className="text-center p-8 bg-card rounded-lg border border-border/50">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Premium ingredients and rigorous testing to ensure exceptional quality standards.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-primary/5 rounded-2xl p-12">
              <h2 className="text-3xl font-serif font-semibold mb-4">Start Your Fragrance Journey</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Whether you're a boutique hotel, luxury spa, or retail brand, we'll help you create a signature scent that leaves a lasting impression.
              </p>
              <Button variant="luxury" size="lg" asChild>
                <a href="mailto:info@claralumiere.com">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default MakeYourOwnBrand;
