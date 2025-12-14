import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: t('contactPage.successTitle'),
      description: t('contactPage.successMessage'),
    });
    
    setFormData({ name: '', phone: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Clara Lumiere</title>
        <meta name="description" content="Get in touch with Clara Lumiere. We'd love to hear from you about our luxury fragrances and services." />
      </Helmet>
      
      <Header />
      <CartDrawer />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-primary">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-accent mb-6">
              {t('contactPage.title')}
            </h1>
            <p className="text-lg text-accent/80 max-w-2xl mx-auto">
              {t('contactPage.subtitle')}
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-muted/30 p-8 rounded-lg">
                <h2 className="text-2xl font-serif text-foreground mb-6">
                  {t('contactPage.formTitle')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t('contactPage.nameLabel')}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contactPage.namePlaceholder')}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {t('contactPage.phoneLabel')}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t('contactPage.phonePlaceholder')}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t('contactPage.emailLabel')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contactPage.emailPlaceholder')}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t('contactPage.messageLabel')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contactPage.messagePlaceholder')}
                      className="bg-background"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="luxury" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('contactPage.sending') : t('contactPage.submit')}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-serif text-foreground mb-6">
                    {t('contactPage.infoTitle')}
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {t('contactPage.infoText')}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{t('contactPage.addressLabel')}</h3>
                      <p className="text-muted-foreground">Nessvegen 21, 7550 Hommelvik, Norway</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{t('contactPage.phoneInfoLabel')}</h3>
                      <p className="text-muted-foreground">+47 972 878 89</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{t('contactPage.emailInfoLabel')}</h3>
                      <p className="text-muted-foreground">info@claralumiere.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ContactUs;
