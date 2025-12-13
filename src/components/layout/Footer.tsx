import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground" id="contact">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif mb-4">Clara Lumiere</h3>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              Exclusive distributor of Royal Fragrance, Signature Scent, and Sea of Parfum 
              in Norway, Denmark, and Sweden. Bringing the finest French-Emirati fragrance 
              artistry to the Nordic region.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">Collections</h4>
            <ul className="space-y-3">
              {['Signature Scents', 'Sea of Perfumes', 'Oriental Oils', 'Royal Fragrance'].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6">{t('contact.title')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 shrink-0" />
                <a href="tel:+4797287889" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +47 972 878 89
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 shrink-0" />
                <a href="mailto:info@claralumiere.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  info@claralumiere.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0" />
                <span className="text-primary-foreground/70">
                  Nessvegen 21<br />
                  7550 Hommelvik, Norway
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Clara Lumiere. {t('footer.rights')}.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
