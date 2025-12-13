import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { Button } from '@/components/ui/button';
import { Building2, Truck, BadgePercent, Handshake } from 'lucide-react';

const Wholesale = () => {
  return (
    <>
      <Helmet>
        <title>Wholesale | Clara Lumiere - B2B Fragrance Distribution</title>
        <meta name="description" content="Partner with Clara Lumiere for wholesale luxury fragrances. Competitive pricing, reliable supply, and premium support for retailers." />
      </Helmet>
      
      <Header />
      <CartDrawer />
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
              Wholesale Partnership
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our network of premium retailers and bring luxury fragrances to your customers.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="flex gap-6">
                <div className="w-14 h-14 shrink-0 bg-accent/10 rounded-full flex items-center justify-center">
                  <BadgePercent className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-3">Competitive Margins</h3>
                  <p className="text-muted-foreground">
                    Enjoy attractive wholesale pricing that ensures healthy profit margins for your business.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 shrink-0 bg-accent/10 rounded-full flex items-center justify-center">
                  <Truck className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-3">Reliable Delivery</h3>
                  <p className="text-muted-foreground">
                    Fast and dependable shipping across Norway, Denmark, and Sweden with tracking.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 shrink-0 bg-accent/10 rounded-full flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-3">Exclusive Access</h3>
                  <p className="text-muted-foreground">
                    Be among the select retailers offering Royal Fragrance, Signature Scent, and Sea of Parfum.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 shrink-0 bg-accent/10 rounded-full flex items-center justify-center">
                  <Handshake className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-3">Dedicated Support</h3>
                  <p className="text-muted-foreground">
                    Personal account management, marketing materials, and training for your team.
                  </p>
                </div>
              </div>
            </div>

            {/* Application Section */}
            <div className="text-center bg-primary/5 rounded-2xl p-12">
              <h2 className="text-3xl font-serif font-semibold mb-4">Become a Partner</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Apply today to join our exclusive network of luxury fragrance retailers across Scandinavia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="lg" asChild>
                  <a href="mailto:info@claralumiere.com">Apply Now</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+4797287889">Call +47 972 878 89</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Wholesale;
