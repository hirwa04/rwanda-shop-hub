import { Link } from "react-router-dom";
import { ShoppingBag, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background pt-12 pb-24 sm:pb-8">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight">
              Ifeza<span className="text-primary">.rw</span>
            </span>
          </Link>
          <p className="text-sm opacity-70 leading-relaxed">
            Your trusted online marketplace in Rwanda. Quality products, fast delivery, and exceptional customer service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-70">
            {["Shop", "About Us", "Contact", "FAQs"].map((l) => (
              <li key={l}>
                <Link to="/shop" className="hover:text-primary transition-colors">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2 text-sm opacity-70">
            {["Shipping Policy", "Returns & Refunds", "Privacy Policy", "Terms of Service"].map((l) => (
              <li key={l}>
                <Link to="/shop" className="hover:text-primary transition-colors">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm opacity-70">
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" /> Kigali, Rwanda</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> +250 788 000 000</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> info@ifeza.rw</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Ifeza.rw — All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
