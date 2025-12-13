import { useLanguage } from '@/context/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: 'French Artistry',
      description: 'Crafted by master perfumers in the heart of Grasse, France.',
    },
    {
      title: 'Emirati Heritage',
      description: 'Infused with rare oud and precious ingredients from the Arabian Peninsula.',
    },
    {
      title: 'Nordic Excellence',
      description: 'Exclusively curated for discerning tastes in Scandinavia.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block text-accent font-medium uppercase tracking-[0.3em] text-sm mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.subtitle')}. Clara Lumiere represents the pinnacle of luxury 
              fragrance curation, bringing together the finest creations from Royal Fragrance, 
              Signature Scent, and Sea of Parfum to the Nordic region.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Each fragrance in our collection tells a story — of ancient trade routes, 
              of artisans who have perfected their craft over generations, and of the 
              endless pursuit of olfactory perfection. We believe that a signature scent 
              is not merely worn; it is lived.
            </p>

            {/* Features */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 items-start animate-fade-up opacity-0"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-accent font-serif text-lg font-semibold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="aspect-[4/5] bg-primary/5 rounded-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-accent/30 flex items-center justify-center">
                    <span className="font-serif text-4xl text-accent">CL</span>
                  </div>
                  <blockquote className="font-serif text-xl text-foreground italic mb-4">
                    "Elegance is the only beauty that never fades."
                  </blockquote>
                  <cite className="text-sm text-muted-foreground not-italic">
                    — Audrey Hepburn
                  </cite>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-accent/20" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-accent/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
