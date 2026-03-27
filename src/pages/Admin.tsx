import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import {
  Package, ShoppingCart, Users, TrendingUp, LogOut, Flower2,
  LayoutDashboard, Tag, BarChart3, Settings, Home
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Total Products", value: products.length, icon: Package, color: "bg-primary/10 text-primary" },
  { label: "Categories", value: [...new Set(products.map(p => p.category))].length, icon: Tag, color: "bg-accent text-accent-foreground" },
  { label: "Avg Price", value: `RWF ${Math.round(products.reduce((a, b) => a + b.price, 0) / products.length).toLocaleString()}`, icon: TrendingUp, color: "bg-secondary/20 text-secondary" },
  { label: "In Stock", value: products.filter(p => p.inStock !== false).length, icon: ShoppingCart, color: "bg-primary/10 text-primary" },
];

const Admin = () => {
  const { isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) navigate("/account");
  }, [isAdmin, navigate]);

  if (!isAdmin) return null;

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Flower2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">
              Flora<span className="text-primary">Belle</span>
              <span className="text-xs font-normal text-muted-foreground ml-2">Admin</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="ghost" size="sm"><Home className="w-4 h-4 mr-1" /> Store</Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={() => { logout(); navigate("/account"); }}>
              <LogOut className="w-4 h-4 mr-1" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-display font-bold text-foreground mb-1">Dashboard</h1>
          <p className="text-muted-foreground text-sm mb-8">Welcome back, Admin</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border p-5"
            >
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Products by category */}
        <h2 className="text-lg font-display font-bold text-foreground mb-4">Products by Category</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {categories.map((cat) => {
            const catProducts = products.filter(p => p.category === cat);
            return (
              <div key={cat} className="bg-card rounded-xl border border-border p-5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground capitalize">{cat}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">{catProducts.length} items</span>
                </div>
                <div className="space-y-2">
                  {catProducts.slice(0, 3).map(p => (
                    <div key={p.id} className="flex items-center justify-between text-sm">
                      <span className="text-foreground truncate mr-2">{p.name}</span>
                      <span className="text-muted-foreground whitespace-nowrap">RWF {p.price.toLocaleString()}</span>
                    </div>
                  ))}
                  {catProducts.length > 3 && (
                    <p className="text-xs text-muted-foreground">+{catProducts.length - 3} more</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* All products table */}
        <h2 className="text-lg font-display font-bold text-foreground mb-4">All Products</h2>
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left p-4 font-medium text-muted-foreground">Product</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Category</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Price</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p.id} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-medium text-foreground">{p.name}</td>
                    <td className="p-4 text-muted-foreground capitalize">{p.category}</td>
                    <td className="p-4 text-foreground">RWF {p.price.toLocaleString()}</td>
                    <td className="p-4">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${p.inStock !== false ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {p.inStock !== false ? "In Stock" : "Out of Stock"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
