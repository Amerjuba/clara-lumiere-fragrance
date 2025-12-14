import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { Button } from '@/components/ui/button';
import { Sparkles, Leaf, Building2, Flame, Heart } from 'lucide-react';
const Wholesale = () => {
  return <>
      <Helmet>
        <title>Wholesale Essential Oils | Clara Lumiere - Premium Bulk Orders</title>
        <meta name="description" content="Partner with Royal Fragrance for premium essential oils. Bulk orders and competitive pricing for retailers and distributors." />
      </Helmet>
      
      <Header />
      <CartDrawer />
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background text-primary">
          <div className="container text-center">
            <h1 className="text-4xl font-serif font-semibold mb-6 text-center md:text-6xl text-primary-foreground">Royal Fragrance</h1>
            <h1 className="text-4xl font-serif font-semibold mb-6 text-center text-primary md:text-4xl">Wholesale Essential Oils</h1>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-primary">
              Partner with Royal Fragrance for premium essential oils. Bulk orders and competitive pricing for retailers and distributors.
            </p>
            <Button variant="luxury" size="lg" asChild>
              <a href="mailto:info@claralumiere.com" className="rounded-xl">Request Quote</a>
            </Button>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-16 bg-card/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-4">
              Why Partner With Us?
            </h2>
            <h3 className="text-xl text-accent font-serif text-center mb-12">
              The Essence of Creation
            </h3>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-lg text-muted-foreground text-center">
                At Clara Lumiere, our commitment to excellence begins at the very source.
              </p>
              <p className="text-muted-foreground text-center">
                Beyond our curated collection of fine fragrances, we offer exclusive access to a premier portfolio of wholesale essential oils—the foundational elements of luxury perfumery.
              </p>
            </div>
          </div>
        </section>

        {/* Essence of Exceptional Fragrance */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold">
                  The Essence of Exceptional Fragrance
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our essential oils are meticulously sourced from esteemed growers and distillers around the world. Each selection is chosen for its purity, potency, and distinctive aromatic character, meeting the uncompromising standards of perfumers, artisans, and brands that accept nothing less than perfection. We believe every extraordinary fragrance begins with an impeccable essence.
              </p>
            </div>
          </div>
        </section>

        {/* Crafted for Industry Visionaries */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-center mb-12">
              Crafted for Industry Visionaries
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our wholesale services are tailored to professionals who value quality as deeply as we do:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4 p-6 bg-background rounded-lg border border-border/50">
                <div className="w-12 h-12 shrink-0 bg-accent/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold mb-2">Perfumers & Niche Brands</h3>
                  <p className="text-muted-foreground text-sm">
                    Develop signature creations with unparalleled raw materials.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 bg-background rounded-lg border border-border/50">
                <div className="w-12 h-12 shrink-0 bg-accent/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold mb-2">Product Developers</h3>
                  <p className="text-muted-foreground text-sm">
                    Formulate premium skincare, cosmetics, and wellness products.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 bg-background rounded-lg border border-border/50">
                <div className="w-12 h-12 shrink-0 bg-accent/10 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold mb-2">Hotels & Spas</h3>
                  <p className="text-muted-foreground text-sm">
                    Shape immersive sensory experiences that define your environment.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 bg-background rounded-lg border border-border/50">
                <div className="w-12 h-12 shrink-0 bg-accent/10 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold mb-2">Candlemakers & Aromatherapists</h3>
                  <p className="text-muted-foreground text-sm">
                    Enrich your offerings with exquisite, naturally derived aromas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Begin Your Creative Journey */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6">
                Begin Your Creative Journey
              </h2>
              <p className="text-muted-foreground mb-8">
                If you are a business looking to elevate your products with the world's finest essential oils, we invite you to connect with us. Let's explore your vision—and how the Clara Lumiere standard can become the heart of your brand.
              </p>
            </div>
          </div>
        </section>

        {/* Ready to Get Started CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-semibold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8">
                Contact us today to discuss your wholesale needs and receive a customized quote.
              </p>
              <Button variant="luxury" size="lg" asChild>
                <a href="mailto:info@claralumiere.com" className="rounded-xl">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-serif font-semibold mb-4">Contact</h2>
              <p className="text-muted-foreground mb-8">We'd love to hear from you!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="luxury" size="lg" asChild>
                  <a href="mailto:info@claralumiere.com">info@claralumiere.com</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+4797287889">+47 972 878 89</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>;
};
export default Wholesale;