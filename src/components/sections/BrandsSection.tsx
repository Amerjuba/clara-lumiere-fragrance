import { brands } from '@/data/products';

const BrandsSection = () => {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-[0.2em] mb-12">
          Exclusive Nordic Distributor
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="text-center animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <h3 className="font-serif text-2xl text-foreground mb-2">{brand.name}</h3>
              <p className="text-sm text-muted-foreground">{brand.origin}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
