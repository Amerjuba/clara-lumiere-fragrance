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
    'nav.about': 'About Us',
    'nav.contact': 'Contact Us',
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
    // About Page
    'aboutPage.title': 'About Us',
    'aboutPage.subtitle': 'Exclusive agents for luxury fragrance brands in Scandinavia',
    'aboutPage.storyTitle': 'Our Story',
    'aboutPage.storyText1': 'Clara Lumiere is the exclusive agent for three prestigious luxury fragrance brands in Norway, Denmark, and Sweden: Royal Fragrance, Signature Scent, and Sea of Parfum.',
    'aboutPage.storyText2': 'We bring the finest French-Emirati fragrance artistry to Scandinavia, curating exceptional scents that embody luxury, craftsmanship, and timeless elegance.',
    'aboutPage.valuesTitle': 'Our Values',
    'aboutPage.value1Title': 'Excellence',
    'aboutPage.value1Text': 'We source only the finest ingredients and partner with master perfumers.',
    'aboutPage.value2Title': 'Authenticity',
    'aboutPage.value2Text': 'Every fragrance tells a genuine story of heritage and artistry.',
    'aboutPage.value3Title': 'Luxury',
    'aboutPage.value3Text': 'We deliver a premium experience in every interaction.',
    'aboutPage.visitTitle': 'Visit Us',
    // Contact Page
    'contactPage.title': 'Contact Us',
    'contactPage.subtitle': 'We would love to hear from you',
    'contactPage.formTitle': 'Send us a message',
    'contactPage.nameLabel': 'Name',
    'contactPage.namePlaceholder': 'Your name',
    'contactPage.phoneLabel': 'Phone',
    'contactPage.phonePlaceholder': 'Your phone number',
    'contactPage.emailLabel': 'Email',
    'contactPage.emailPlaceholder': 'Your email address',
    'contactPage.messageLabel': 'Message',
    'contactPage.messagePlaceholder': 'How can we help you?',
    'contactPage.submit': 'Send Message',
    'contactPage.sending': 'Sending...',
    'contactPage.successTitle': 'Message Sent',
    'contactPage.successMessage': 'Thank you for contacting us. We will get back to you soon.',
    'contactPage.infoTitle': 'Get in Touch',
    'contactPage.infoText': 'Have questions about our fragrances or services? We are here to help.',
    'contactPage.addressLabel': 'Address',
    'contactPage.phoneInfoLabel': 'Phone',
    'contactPage.emailInfoLabel': 'Email',
  },
  no: {
    'nav.home': 'Hjem',
    'nav.products': 'Produkter',
    'nav.about': 'Om Oss',
    'nav.contact': 'Kontakt Oss',
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
    // About Page
    'aboutPage.title': 'Om Oss',
    'aboutPage.subtitle': 'Eksklusive agenter for luksusparfymemerker i Skandinavia',
    'aboutPage.storyTitle': 'Vår Historie',
    'aboutPage.storyText1': 'Clara Lumiere er eksklusiv agent for tre prestisjetunge luksusparfymemerker i Norge, Danmark og Sverige: Royal Fragrance, Signature Scent og Sea of Parfum.',
    'aboutPage.storyText2': 'Vi bringer den fineste franske og emiratiske parfymekunsten til Skandinavia, med eksepsjonelle dufter som representerer luksus, håndverk og tidløs eleganse.',
    'aboutPage.valuesTitle': 'Våre Verdier',
    'aboutPage.value1Title': 'Eksellens',
    'aboutPage.value1Text': 'Vi bruker kun de fineste ingrediensene og samarbeider med mesterperfumører.',
    'aboutPage.value2Title': 'Autentisitet',
    'aboutPage.value2Text': 'Hver duft forteller en ekte historie om arv og kunstferdighet.',
    'aboutPage.value3Title': 'Luksus',
    'aboutPage.value3Text': 'Vi leverer en premium opplevelse i hver interaksjon.',
    'aboutPage.visitTitle': 'Besøk Oss',
    // Contact Page
    'contactPage.title': 'Kontakt Oss',
    'contactPage.subtitle': 'Vi vil gjerne høre fra deg',
    'contactPage.formTitle': 'Send oss en melding',
    'contactPage.nameLabel': 'Navn',
    'contactPage.namePlaceholder': 'Ditt navn',
    'contactPage.phoneLabel': 'Telefon',
    'contactPage.phonePlaceholder': 'Ditt telefonnummer',
    'contactPage.emailLabel': 'E-post',
    'contactPage.emailPlaceholder': 'Din e-postadresse',
    'contactPage.messageLabel': 'Melding',
    'contactPage.messagePlaceholder': 'Hvordan kan vi hjelpe deg?',
    'contactPage.submit': 'Send Melding',
    'contactPage.sending': 'Sender...',
    'contactPage.successTitle': 'Melding Sendt',
    'contactPage.successMessage': 'Takk for at du kontaktet oss. Vi tar kontakt snart.',
    'contactPage.infoTitle': 'Ta Kontakt',
    'contactPage.infoText': 'Har du spørsmål om våre dufter eller tjenester? Vi er her for å hjelpe.',
    'contactPage.addressLabel': 'Adresse',
    'contactPage.phoneInfoLabel': 'Telefon',
    'contactPage.emailInfoLabel': 'E-post',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.about': 'من نحن',
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
    // About Page
    'aboutPage.title': 'من نحن',
    'aboutPage.subtitle': 'وكلاء حصريون لعلامات العطور الفاخرة في الدول الاسكندنافية',
    'aboutPage.storyTitle': 'قصتنا',
    'aboutPage.storyText1': 'كلارا لوميير هي الوكيل الحصري لثلاث علامات تجارية فاخرة للعطور في النرويج والدنمارك والسويد: رويال فراجرانس، سيجنتشر سينت، وسي أوف بارفوم.',
    'aboutPage.storyText2': 'نقدم أرقى فنون العطور الفرنسية والإماراتية إلى الدول الاسكندنافية، مع روائح استثنائية تجسد الفخامة والحرفية والأناقة الخالدة.',
    'aboutPage.valuesTitle': 'قيمنا',
    'aboutPage.value1Title': 'التميز',
    'aboutPage.value1Text': 'نستخدم أجود المكونات فقط ونتعاون مع أمهر صانعي العطور.',
    'aboutPage.value2Title': 'الأصالة',
    'aboutPage.value2Text': 'كل عطر يروي قصة حقيقية من التراث والفن.',
    'aboutPage.value3Title': 'الفخامة',
    'aboutPage.value3Text': 'نقدم تجربة متميزة في كل تفاعل.',
    'aboutPage.visitTitle': 'زورونا',
    // Contact Page
    'contactPage.title': 'اتصل بنا',
    'contactPage.subtitle': 'نحب أن نسمع منك',
    'contactPage.formTitle': 'أرسل لنا رسالة',
    'contactPage.nameLabel': 'الاسم',
    'contactPage.namePlaceholder': 'اسمك',
    'contactPage.phoneLabel': 'الهاتف',
    'contactPage.phonePlaceholder': 'رقم هاتفك',
    'contactPage.emailLabel': 'البريد الإلكتروني',
    'contactPage.emailPlaceholder': 'بريدك الإلكتروني',
    'contactPage.messageLabel': 'الرسالة',
    'contactPage.messagePlaceholder': 'كيف يمكننا مساعدتك؟',
    'contactPage.submit': 'إرسال الرسالة',
    'contactPage.sending': 'جاري الإرسال...',
    'contactPage.successTitle': 'تم الإرسال',
    'contactPage.successMessage': 'شكراً لتواصلك معنا. سنعود إليك قريباً.',
    'contactPage.infoTitle': 'تواصل معنا',
    'contactPage.infoText': 'هل لديك أسئلة حول عطورنا أو خدماتنا؟ نحن هنا للمساعدة.',
    'contactPage.addressLabel': 'العنوان',
    'contactPage.phoneInfoLabel': 'الهاتف',
    'contactPage.emailInfoLabel': 'البريد الإلكتروني',
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
