import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { Button } from '@/components/ui/button';
import { Sparkles, Palette, Package, Award, MessageSquare, Droplets, Crown, Rocket } from 'lucide-react';

const MakeYourOwnBrand = () => {
  return (
    <>
      <Helmet>
        <title>Make Your Own Perfume Brand | Clara Lumiere - Custom Fragrance Creation</title>
        <meta name="description" content="Create your own luxury perfume brand with Clara Lumiere. From concept to launch, we partner with you to craft your signature fragrance." />
      </Helmet>
      
      <Header />
      <CartDrawer />
      
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
              Your Vision, Masterfully Crafted
            </h1>
            <p className="text-xl text-accent font-serif mb-4">
              We Believe Every Great Brand Begins with a Story. What's Yours?
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              You have a vision—a name, a feeling, a memory you want to bottle. The "Make Your Own Perfume Brand" service by Clara Lumiere is your dedicated partner in turning that inspiration into a complete, market-ready luxury product.
            </p>
            <p className="text-muted-foreground mt-6 italic">
              This is a collaborative journey where your creativity meets our industry expertise and unparalleled access.
            </p>
          </div>
        </section>

        {/* Royal Fragrance Partnership */}
        <section className="py-16 bg-card/50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                <Crown className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-2">
                The Foundation of Our Quality: The Royal Fragrance Partnership
              </h2>
              <p className="text-accent font-serif mb-8">
                The Unbeatable Advantage in Your Bottle.
              </p>
              <p className="text-muted-foreground mb-6">
                The heart of any great fragrance is the quality of its ingredients. That's why our service is built on a powerful foundation: our exclusive partnership with Royal Fragrance.
              </p>
              <p className="text-muted-foreground mb-6">
                This strategic alliance allows us to offer you wholesale essential oils of unmatched quality. Together, we serve a global standard of excellence, ensuring your brand is built on a palette of the purest, most potent, and beautifully aromatic raw materials from the very first step.
              </p>
              <p className="text-foreground font-medium">
                This means your fragrance will have the depth, complexity, and longevity that discerning retailers and customers demand.
              </p>
            </div>
          </div>
        </section>

        {/* Collaborative Process */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mb-16">
              Our Collaborative Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="relative p-8 bg-card rounded-lg border border-border/50">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="w-14 h-14 mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">Discover Your Scent Story</h3>
                <p className="text-muted-foreground">
                  We begin with your inspiration. In a deep-dive consultation with Clara Lumiere, we explore the soul of your future brand—the emotions, the audience, and the unique story you want to tell.
                </p>
              </div>
              
              <div className="relative p-8 bg-card rounded-lg border border-border/50">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="w-14 h-14 mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <Droplets className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">Design Your Signature Scent</h3>
                <p className="text-muted-foreground">
                  Leveraging our access to Royal Fragrance's premium materials, you will compose and refine your fragrance. This is the alchemy where your vision becomes a tangible, beautiful scent.
                </p>
              </div>
              
              <div className="relative p-8 bg-card rounded-lg border border-border/50">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="w-14 h-14 mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <Palette className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">Build Your Brand Identity</h3>
                <p className="text-muted-foreground">
                  Your perfume needs a face and a voice. We guide you through crafting your brand name, designing your elegant bottle and packaging, and writing the compelling narrative that will captivate your audience.
                </p>
              </div>
              
              <div className="relative p-8 bg-card rounded-lg border border-border/50">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <div className="w-14 h-14 mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">Launch with Confidence</h3>
                <p className="text-muted-foreground">
                  Receive the first samples of your finished, professionally crafted perfume. You'll have a complete brand asset kit and the confidence that comes from a product built with quality at its core.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold mb-4">Start Your Fragrance Journey</h2>
              <p className="text-muted-foreground mb-8">
                Ready to bring your fragrance vision to life? Contact us to begin your collaborative journey with Clara Lumiere.
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
