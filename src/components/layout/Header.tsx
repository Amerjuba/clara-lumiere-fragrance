import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Globe, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const {
    totalItems,
    setIsCartOpen
  } = useCart();
  const {
    language,
    setLanguage,
    t
  } = useLanguage();
  const productCategories = [{
    name: 'Signature Scents',
    href: '/signature-scents'
  }, {
    name: 'Sea of Perfumes',
    href: '/sea-of-perfumes'
  }, {
    name: 'Oriental Oils',
    href: '/oriental-oils'
  }, {
    name: 'Make Your Own Brand',
    href: '/make-your-own-brand'
  }, {
    name: 'Wholesale',
    href: '/wholesale'
  }];
  const navigation = [{
    name: t('nav.home'),
    href: '/'
  }, {
    name: t('nav.about'),
    href: '/#about'
  }, {
    name: t('nav.contact'),
    href: '/#contact'
  }];
  const languages = [{
    code: 'en',
    name: 'English'
  }, {
    code: 'no',
    name: 'Norsk'
  }, {
    code: 'ar',
    name: 'عربي'
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-md border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Clara Lumiere" className="h-12 w-auto border-0 border-none object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-300 uppercase tracking-wider">
              {t('nav.home')}
            </Link>
            
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-300 uppercase tracking-wider">
                  {t('nav.products')}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 bg-background border border-border">
                {productCategories.map(category => <DropdownMenuItem key={category.href} asChild>
                    <Link to={category.href} className="w-full cursor-pointer">
                      {category.name}
                    </Link>
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="/#about" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-300 uppercase tracking-wider">
              {t('nav.about')}
            </a>
            <a href="/#contact" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-300 uppercase tracking-wider">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden sm:flex text-accent hover:text-accent/80 hover:bg-primary/80">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border border-border">
                {languages.map(lang => <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code as 'en' | 'no' | 'ar')} className={language === lang.code ? 'bg-accent/10' : ''}>
                    {lang.name}
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative text-accent hover:text-accent/80 hover:bg-primary/80" onClick={() => setIsCartOpen(true)}>
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                  {totalItems}
                </span>}
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden text-accent hover:text-accent/80 hover:bg-primary/80" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden py-6 border-t border-accent/30 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-base font-medium text-accent py-2 uppercase tracking-wider" onClick={() => setIsMenuOpen(false)}>
                {t('nav.home')}
              </Link>
              
              {/* Mobile Products Accordion */}
              <div>
                <button onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)} className="flex items-center justify-between w-full text-base font-medium text-accent py-2 uppercase tracking-wider">
                  {t('nav.products')}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileProductsOpen && <div className="pl-4 flex flex-col gap-2 mt-2">
                    {productCategories.map(category => <Link key={category.href} to={category.href} className="text-sm text-accent/70 hover:text-accent py-2" onClick={() => setIsMenuOpen(false)}>
                        {category.name}
                      </Link>)}
                  </div>}
              </div>
              
              <a href="/#about" className="text-base font-medium text-accent py-2 uppercase tracking-wider" onClick={() => setIsMenuOpen(false)}>
                {t('nav.about')}
              </a>
              <a href="/#contact" className="text-base font-medium text-accent py-2 uppercase tracking-wider" onClick={() => setIsMenuOpen(false)}>
                {t('nav.contact')}
              </a>
              
              <div className="flex gap-2 pt-4 border-t border-accent/30">
                {languages.map(lang => <Button key={lang.code} variant={language === lang.code ? 'default' : 'outline'} size="sm" onClick={() => {
              setLanguage(lang.code as 'en' | 'no' | 'ar');
              setIsMenuOpen(false);
            }}>
                    {lang.name}
                  </Button>)}
              </div>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;