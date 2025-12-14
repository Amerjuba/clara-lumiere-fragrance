import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { useLanguage } from '@/context/LanguageContext';
import logo from '@/assets/logo.png';

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>About Us - Clara Lumiere</title>
        <meta name="description" content="Learn about Clara Lumiere - exclusive agents for luxury fragrance brands in Scandinavia. French-Emirati fragrance artistry." />
      </Helmet>
      
      <Header />
      <CartDrawer />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-primary">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-accent mb-6">
              {t('aboutPage.title')}
            </h1>
            <p className="text-lg text-accent/80 max-w-2xl mx-auto">
              {t('aboutPage.subtitle')}
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif text-foreground mb-6">
                  {t('aboutPage.storyTitle')}
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {t('aboutPage.storyText1')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('aboutPage.storyText2')}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-primary rounded-lg flex items-center justify-center">
                    <img src={logo} alt="Clara Lumiere" className="h-40 w-auto" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-80 h-80 border-2 border-accent rounded-lg -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-serif text-foreground text-center mb-12">
              {t('aboutPage.valuesTitle')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-background rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-serif text-foreground mb-4">
                  {t('aboutPage.value1Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('aboutPage.value1Text')}
                </p>
              </div>
              <div className="text-center p-8 bg-background rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-serif text-foreground mb-4">
                  {t('aboutPage.value2Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('aboutPage.value2Text')}
                </p>
              </div>
              <div className="text-center p-8 bg-background rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💎</span>
                </div>
                <h3 className="text-xl font-serif text-foreground mb-4">
                  {t('aboutPage.value3Title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('aboutPage.value3Text')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20">
          <div className="container text-center">
            <h2 className="text-3xl font-serif text-foreground mb-8">
              {t('aboutPage.visitTitle')}
            </h2>
            <div className="text-muted-foreground space-y-2">
              <p>Nessvegen 21, 7550 Hommelvik, Norway</p>
              <p>+47 972 878 89</p>
              <p>info@claralumiere.com</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AboutUs;
