import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'no' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.title': 'Discover Your Signature Scent',
    'hero.subtitle': 'Curated luxury fragrances from the finest French-Emirati artisans',
    'hero.cta': 'Shop Collection',
    'hero.explore': 'Explore',
    'products.featured': 'Featured Collection',
    'products.viewAll': 'View All',
    'products.addToBag': 'Add to Bag',
    'about.title': 'The Art of Fragrance',
    'about.subtitle': 'A fusion of French elegance and Emirati opulence',
    'contact.title': 'Get in Touch',
    'footer.rights': 'All rights reserved',
    'cart.title': 'Your Bag',
    'cart.empty': 'Your bag is empty',
    'cart.checkout': 'Proceed to Checkout',
    'cart.total': 'Total',
  },
  no: {
    'nav.home': 'Hjem',
    'nav.products': 'Produkter',
    'nav.about': 'Om Oss',
    'nav.contact': 'Kontakt',
    'hero.title': 'Oppdag Din Signaturduft',
    'hero.subtitle': 'Kuraterte luksusparfymer fra de fineste franske og emiratiske kunstnere',
    'hero.cta': 'Se Kolleksjon',
    'hero.explore': 'Utforsk',
    'products.featured': 'Utvalgte Produkter',
    'products.viewAll': 'Se Alle',
    'products.addToBag': 'Legg i Handlekurv',
    'about.title': 'Parfymekunsten',
    'about.subtitle': 'En fusjon av fransk eleganse og emiratisk opulens',
    'contact.title': 'Ta Kontakt',
    'footer.rights': 'Alle rettigheter reservert',
    'cart.title': 'Din Handlekurv',
    'cart.empty': 'Handlekurven er tom',
    'cart.checkout': 'Gå til Kassen',
    'cart.total': 'Totalt',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.about': 'عنا',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'اكتشف عطرك المميز',
    'hero.subtitle': 'عطور فاخرة وزيوت عطرية، مصنوعة لتدلل الحواس،  مصممة لتضفي الأناقة. حيث تصبح الرائحة فنًا.',
    'hero.cta': 'تسوق المجموعة',
    'hero.explore': 'استكشف',
    'products.featured': 'المجموعة المميزة',
    'products.viewAll': 'عرض الكل',
    'products.addToBag': 'أضف إلى الحقيبة',
    'about.title': 'فن العطور',
    'about.subtitle': 'مزيج من الأناقة الفرنسية والفخامة الإماراتية',
    'contact.title': 'تواصل معنا',
    'footer.rights': 'جميع الحقوق محفوظة',
    'cart.title': 'حقيبتك',
    'cart.empty': 'حقيبتك فارغة',
    'cart.checkout': 'المتابعة للدفع',
    'cart.total': 'المجموع',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
