import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import heroImage from '@/assets/hero-perfume.jpg';
const HeroSection = () => {
  const {
    t
  } = useLanguage();
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img alt="Luxury perfume on velvet" className="w-full h-full object-cover shadow-none rounded-none opacity-100" src="/lovable-uploads/0526d54f-6c40-440c-847a-cd53d9ccf1f6.png" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b3531]/95 via-[#2b3531]/80 to-[#2b3531]/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl">
          <span className="inline-block text-accent font-medium uppercase tracking-[0.3em] text-sm mb-6" style={{
          animation: 'fadeUp 0.8s ease-out 0.2s forwards',
          opacity: 0
        }}>
            Luxury Fragrances
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight mb-6" style={{
          color: '#f8f7f4',
          animation: 'fadeUp 0.8s ease-out 0.4s forwards',
          opacity: 0
        }}>
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-xl" style={{
          color: 'rgba(248, 247, 244, 0.8)',
          animation: 'fadeUp 0.8s ease-out 0.6s forwards',
          opacity: 0
        }}>
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-wrap gap-4" style={{
          animation: 'fadeUp 0.8s ease-out 0.8s forwards',
          opacity: 0
        }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#products">{t('hero.cta')}</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#about">{t('hero.explore')}</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-white/50 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;