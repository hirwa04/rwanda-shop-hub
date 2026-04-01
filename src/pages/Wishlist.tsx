import { Heart, Trash2, ShoppingCart } from "lucide-react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { toast } from "sonner";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground/40" />
          <h1 className="text-2xl font-display font-bold text-foreground mb-2">Your Wishlist is Empty</h1>
          <p className="text-muted-foreground text-sm mb-6">Save your favorite flowers to send later.</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
          >
            Browse Flowers
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-6 sm:py-10">
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-6">
          My Wishlist ({wishlist.length})
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-card rounded-xl border border-border overflow-hidden group">
              <Link to={`/product/${product.id}`}>
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="p-4 space-y-2">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-medium text-foreground text-sm line-clamp-1 hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-bold text-foreground">{formatPrice(product.price)}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      addToCart(product);
                      toast.success(`${product.name} added to cart`);
                    }}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      removeFromWishlist(product.id);
                      toast.success("Removed from wishlist");
                    }}
                    className="p-2 border border-border rounded-lg hover:bg-destructive/10 hover:text-destructive transition-colors text-muted-foreground"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Wishlist;
