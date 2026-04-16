import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 bg-ink text-cream" style={{ backgroundColor: "var(--ink)", color: "var(--cream)" }}>
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">
            Tax<span className="text-gold" style={{ color: "var(--gold)" }}>safar</span>
          </div>
          <p className="mt-4 max-w-md text-sm opacity-75 leading-relaxed">
            A tech-driven consultancy simplifying compliance for founders, professionals
            and growing businesses across India.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-full border border-white/10 hover:border-gold hover:text-gold transition-colors" style={{ borderColor: "color-mix(in oklab, white 12%, transparent)" }}>
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] opacity-60 mb-4">Explore</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] opacity-60 mb-4">Reach us</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 opacity-70" /> +91 97848 18899</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 opacity-70" /> support@taxsafar.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 opacity-70" /> Jaipur, Rajasthan, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Taxsafar. Crafted with care.
      </div>
    </footer>
  );
}
