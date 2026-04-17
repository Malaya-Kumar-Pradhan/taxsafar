import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, PhoneCall, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={`flex items-center justify-between rounded-full px-5 md:px-7 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-soft border border-border/60" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-9 w-9 rounded-xl bg-primary-gradient grid place-items-center shadow-elegant">
              <span className="font-display text-primary-foreground text-lg leading-none">T</span>
              <span className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full bg-gold-gradient ring-2 ring-background" />
            </div>
            <div className="leading-none">
              <div className="font-display text-xl tracking-tight">
                Tax<span className="text-primary">safar</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Compliance · Simplified
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              <LogIn className="h-4 w-4" /> Sign in
            </Link>
            <a
              href="tel:+919784818899"
              className="inline-flex items-center gap-2 rounded-full bg-primary-gradient text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              <PhoneCall className="h-4 w-4" />
              Talk to an expert
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-2 rounded-3xl glass border border-border/60 p-4 shadow-soft"
            >
              <div className="flex flex-col">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 rounded-xl hover:bg-muted text-foreground/90"
                    activeProps={{ className: "text-primary bg-muted" }}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="mt-2 px-3 py-3 rounded-xl border border-border text-center text-sm font-medium hover:bg-muted"
                >
                  Sign in
                </Link>
                <a
                  href="tel:+919784818899"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary-gradient text-primary-foreground px-5 py-3 text-sm font-medium"
                >
                  <PhoneCall className="h-4 w-4" /> +91 97848 18899
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
