export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  badge?: string;
  shortDescription: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

const IMG = (seed: string) =>
  `https://images.unsplash.com/${seed}?w=600&h=600&fit=crop`;

export const categories: Category[] = [
  { id: "electronics", name: "Electronics", image: IMG("photo-1498049794561-7780e7231661"), productCount: 42 },
  { id: "fashion", name: "Fashion", image: IMG("photo-1445205170230-053b83016050"), productCount: 78 },
  { id: "home", name: "Home & Living", image: IMG("photo-1556909114-f6e7ad7d3136"), productCount: 35 },
  { id: "beauty", name: "Beauty & Health", image: IMG("photo-1596462502278-27bfdc403348"), productCount: 56 },
  { id: "sports", name: "Sports & Outdoors", image: IMG("photo-1461896836934-bd45ba4d2e97"), productCount: 29 },
  { id: "grocery", name: "Grocery", image: IMG("photo-1542838132-92c53300491e"), productCount: 64 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 45000,
    originalPrice: 55000,
    image: IMG("photo-1505740420928-5e560c06d30e"),
    images: [IMG("photo-1505740420928-5e560c06d30e"), IMG("photo-1484704849700-f032a568e944"), IMG("photo-1524678606370-a47ad25cb82a")],
    category: "electronics",
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    badge: "Sale",
    shortDescription: "Premium wireless headphones with noise cancellation.",
    description: "Experience crystal-clear audio with our premium wireless Bluetooth headphones. Featuring active noise cancellation, 30-hour battery life, and ultra-comfortable ear cushions. Perfect for music, calls, and everyday use.",
  },
  {
    id: "2",
    name: "Smart Watch Pro",
    price: 89000,
    image: IMG("photo-1523275335684-37898b6baf30"),
    images: [IMG("photo-1523275335684-37898b6baf30"), IMG("photo-1546868871-af0de0ae72be")],
    category: "electronics",
    rating: 4.7,
    reviewCount: 95,
    inStock: true,
    badge: "New",
    shortDescription: "Stay connected with advanced health tracking.",
    description: "Track your fitness, monitor your health, and stay connected with the Smart Watch Pro. Features heart rate monitoring, GPS, water resistance up to 50m, and a beautiful AMOLED display.",
  },
  {
    id: "3",
    name: "African Print Dress",
    price: 35000,
    originalPrice: 42000,
    image: IMG("photo-1590735213920-68192a487bc2"),
    images: [IMG("photo-1590735213920-68192a487bc2"), IMG("photo-1594938298603-c8148c4dae35")],
    category: "fashion",
    rating: 4.8,
    reviewCount: 67,
    inStock: true,
    badge: "Best Seller",
    shortDescription: "Beautiful handcrafted African print dress.",
    description: "Stunning African print dress made from premium Ankara fabric. Handcrafted by local artisans in Kigali. Available in multiple sizes. Perfect for both casual and formal occasions.",
  },
  {
    id: "4",
    name: "Organic Coffee Beans – 1kg",
    price: 12000,
    image: IMG("photo-1559056199-641a0ac8b55e"),
    images: [IMG("photo-1559056199-641a0ac8b55e"), IMG("photo-1497935586351-b67a49e012bf")],
    category: "grocery",
    rating: 4.9,
    reviewCount: 203,
    inStock: true,
    badge: "Top Rated",
    shortDescription: "Premium Rwandan single-origin coffee beans.",
    description: "Sourced from the highlands of Rwanda, these premium single-origin coffee beans are organically grown and carefully roasted to perfection. Rich, smooth, with notes of chocolate and citrus.",
  },
  {
    id: "5",
    name: "Leather Messenger Bag",
    price: 68000,
    originalPrice: 78000,
    image: IMG("photo-1553062407-98eeb64c6a62"),
    images: [IMG("photo-1553062407-98eeb64c6a62"), IMG("photo-1548036328-c9fa89d128fa")],
    category: "fashion",
    rating: 4.6,
    reviewCount: 44,
    inStock: true,
    shortDescription: "Handcrafted genuine leather messenger bag.",
    description: "Crafted from genuine full-grain leather by Rwandan artisans. Features multiple compartments, adjustable strap, and fits laptops up to 14 inches. Ages beautifully over time.",
  },
  {
    id: "6",
    name: "Portable Bluetooth Speaker",
    price: 28000,
    image: IMG("photo-1608043152269-423dbba4e7e1"),
    images: [IMG("photo-1608043152269-423dbba4e7e1")],
    category: "electronics",
    rating: 4.3,
    reviewCount: 89,
    inStock: true,
    shortDescription: "Waterproof portable speaker with 12-hour battery.",
    description: "Take your music anywhere with this waterproof Bluetooth speaker. 12-hour battery, 360° sound, and rugged design make it perfect for outdoor adventures.",
  },
  {
    id: "7",
    name: "Skincare Gift Set",
    price: 52000,
    originalPrice: 65000,
    image: IMG("photo-1556228578-0d85b1a4d571"),
    images: [IMG("photo-1556228578-0d85b1a4d571"), IMG("photo-1570194065650-d99fb4b38b17")],
    category: "beauty",
    rating: 4.4,
    reviewCount: 56,
    inStock: true,
    badge: "Sale",
    shortDescription: "Complete skincare routine with natural ingredients.",
    description: "A complete skincare gift set featuring cleanser, toner, serum, and moisturizer. Made with natural African ingredients including shea butter and marula oil.",
  },
  {
    id: "8",
    name: "Yoga Mat Premium",
    price: 18000,
    image: IMG("photo-1601925260368-ae2f83cf8b7f"),
    images: [IMG("photo-1601925260368-ae2f83cf8b7f")],
    category: "sports",
    rating: 4.2,
    reviewCount: 34,
    inStock: false,
    shortDescription: "Extra-thick non-slip yoga mat.",
    description: "Premium 6mm thick yoga mat with non-slip surface. Made from eco-friendly TPE material. Includes carrying strap. Perfect for yoga, Pilates, and stretching.",
  },
  {
    id: "9",
    name: "Decorative Woven Basket",
    price: 15000,
    image: IMG("photo-1567225591450-06036b3392a6"),
    images: [IMG("photo-1567225591450-06036b3392a6")],
    category: "home",
    rating: 4.8,
    reviewCount: 112,
    inStock: true,
    badge: "Local Craft",
    shortDescription: "Traditional Rwandan handwoven basket.",
    description: "Beautiful handwoven Agaseke basket, a symbol of Rwandan craftsmanship. Each basket is unique and takes several days to weave. Perfect as a decorative piece or gift.",
  },
  {
    id: "10",
    name: "Running Shoes Ultra",
    price: 75000,
    originalPrice: 95000,
    image: IMG("photo-1542291026-7eec264c27ff"),
    images: [IMG("photo-1542291026-7eec264c27ff"), IMG("photo-1460353581641-37baddab0fa2")],
    category: "sports",
    rating: 4.6,
    reviewCount: 78,
    inStock: true,
    badge: "Sale",
    shortDescription: "Lightweight running shoes with superior cushioning.",
    description: "Engineered for performance with responsive cushioning and breathable mesh upper. Ultra-lightweight design provides superior comfort for long-distance running.",
  },
  {
    id: "11",
    name: "Natural Honey – 500ml",
    price: 8000,
    image: IMG("photo-1587049352846-4a222e784d38"),
    images: [IMG("photo-1587049352846-4a222e784d38")],
    category: "grocery",
    rating: 4.7,
    reviewCount: 145,
    inStock: true,
    shortDescription: "Pure raw honey from Rwandan highlands.",
    description: "100% pure, unprocessed raw honey sourced from beekeepers in the Rwandan highlands. Rich in antioxidants and natural enzymes. No additives or preservatives.",
  },
  {
    id: "12",
    name: "Ceramic Dinner Set",
    price: 42000,
    image: IMG("photo-1603199506016-5d54bfc6d965"),
    images: [IMG("photo-1603199506016-5d54bfc6d965")],
    category: "home",
    rating: 4.5,
    reviewCount: 28,
    inStock: true,
    badge: "New",
    shortDescription: "Elegant 16-piece ceramic dinner set.",
    description: "Elegant 16-piece dinner set featuring minimalist design. Includes 4 dinner plates, 4 side plates, 4 bowls, and 4 mugs. Dishwasher and microwave safe.",
  },
];

export const formatPrice = (price: number): string => {
  return `RWF ${price.toLocaleString("en-RW")}`;
};
