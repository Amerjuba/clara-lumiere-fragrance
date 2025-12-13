export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  currency: string;
  description: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  size: string;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "rf-midnight-oud",
    name: "Midnight Oud",
    brand: "Royal Fragrance",
    category: "Signature Scents",
    price: 2490,
    currency: "NOK",
    description: "A captivating blend of rare oud and midnight jasmine, evoking the mystique of Arabian nights.",
    notes: {
      top: ["Bergamot", "Saffron", "Pink Pepper"],
      heart: ["Oud", "Rose", "Jasmine"],
      base: ["Amber", "Sandalwood", "Musk"],
    },
    size: "100ml",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "ss-velvet-noir",
    name: "Velvet Noir",
    brand: "Signature Scent",
    category: "Signature Scents",
    price: 1990,
    currency: "NOK",
    description: "Deep, sensual, and utterly sophisticated. A fragrance for those who command attention.",
    notes: {
      top: ["Black Pepper", "Cardamom", "Bergamot"],
      heart: ["Iris", "Violet", "Leather"],
      base: ["Vetiver", "Tonka Bean", "Benzoin"],
    },
    size: "75ml",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "sop-azure-wave",
    name: "Azure Wave",
    brand: "Sea of Parfum",
    category: "Sea of Perfumes",
    price: 1790,
    currency: "NOK",
    description: "Fresh oceanic notes meet warm amber in this invigorating coastal escape.",
    notes: {
      top: ["Sea Salt", "Lemon", "Grapefruit"],
      heart: ["Jasmine", "Lily of the Valley", "Seaweed"],
      base: ["Driftwood", "Amber", "White Musk"],
    },
    size: "100ml",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "rf-golden-elixir",
    name: "Golden Elixir",
    brand: "Royal Fragrance",
    category: "Oriental Oils",
    price: 3290,
    currency: "NOK",
    description: "Liquid gold in a bottle. An opulent oriental oil that tells stories of ancient trade routes.",
    notes: {
      top: ["Honey", "Saffron", "Orange Blossom"],
      heart: ["Rose Absolute", "Oud", "Frankincense"],
      base: ["Amber", "Vanilla", "Sandalwood"],
    },
    size: "50ml",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    id: "ss-french-riviera",
    name: "French Riviera",
    brand: "Signature Scent",
    category: "Signature Scents",
    price: 1890,
    currency: "NOK",
    description: "Sun-kissed elegance. Capture the essence of Mediterranean luxury.",
    notes: {
      top: ["Neroli", "Mandarin", "Basil"],
      heart: ["Fig", "Lavender", "Geranium"],
      base: ["Cedarwood", "Musk", "Ambergris"],
    },
    size: "100ml",
    image: "/placeholder.svg",
  },
  {
    id: "sop-pearl-mist",
    name: "Pearl Mist",
    brand: "Sea of Parfum",
    category: "Sea of Perfumes",
    price: 1690,
    currency: "NOK",
    description: "Ethereal and luminous. Like morning dew on pearl-laden shores.",
    notes: {
      top: ["Water Lily", "Pear", "Green Tea"],
      heart: ["White Peony", "Lotus", "Magnolia"],
      base: ["White Musk", "Cashmere Wood", "Blonde Woods"],
    },
    size: "75ml",
    image: "/placeholder.svg",
  },
];

export const categories = [
  { id: "signature-scents", name: "Signature Scents", description: "Our curated collection of distinctive fragrances" },
  { id: "sea-of-perfumes", name: "Sea of Perfumes", description: "Ocean-inspired scents from Sea of Parfum" },
  { id: "oriental-oils", name: "Oriental Oils", description: "Luxurious concentrated perfume oils" },
  { id: "royal-fragrance", name: "Royal Fragrance", description: "Exclusive Royal Fragrance collection" },
];

export const brands = [
  { id: "royal-fragrance", name: "Royal Fragrance", origin: "United Arab Emirates" },
  { id: "signature-scent", name: "Signature Scent", origin: "France" },
  { id: "sea-of-parfum", name: "Sea of Parfum", origin: "France" },
];
