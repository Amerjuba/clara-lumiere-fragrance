import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import productOud from '@/assets/product-oud.jpg';
import productNoir from '@/assets/product-noir.jpg';
import productSea from '@/assets/product-sea.jpg';
import productGold from '@/assets/product-gold.jpg';
import productRiviera from '@/assets/product-riviera.jpg';
import productPearl from '@/assets/product-pearl.jpg';

interface ProductCardProps {
  product: Product;
  index: number;
}

const productImages: Record<string, string> = {
  'rf-midnight-oud': productOud,
  'ss-velvet-noir': productNoir,
  'sop-azure-wave': productSea,
  'rf-golden-elixir': productGold,
  'ss-french-riviera': productRiviera,
  'sop-pearl-mist': productPearl,
};

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { t } = useLanguage();

  const imageUrl = productImages[product.id] || productOud;

  return (
    <article
      className="group relative animate-fade-up opacity-0"
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
        
        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <Button
            variant="luxury"
            className="w-full"
            onClick={() => addToCart(product)}
          >
            {t('products.addToBag')}
          </Button>
        </div>
        
        {/* Brand Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-xs uppercase tracking-wider font-medium">
          {product.brand}
        </span>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-base font-medium text-foreground">
            {product.currency} {product.price.toLocaleString()}
          </span>
          <span className="text-sm text-muted-foreground">
            {product.size}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
