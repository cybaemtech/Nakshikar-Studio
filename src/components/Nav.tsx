import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "glass rounded-full shadow-soft border border-[color:var(--gold)]/20"
            : ""
        }`}
        style={scrolled ? { paddingTop: 10, paddingBottom: 10 } : {}}
      >
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Nakshikar's Studio" className="h-9 sm:h-11 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <Link
              key={n.href}
              to={n.href}
              className="group relative text-[13px] tracking-[0.18em] uppercase font-medium text-[color:var(--royal-deep)]"
              activeProps={{ className: "text-gradient-gold" }}
            >
              {n.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-gold-gradient transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-royal-gradient text-white px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase font-medium shadow-soft hover:scale-[1.03] transition-transform"
        >
          Let's start <ArrowUpRight className="h-4 w-4" />
        </Link>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full glass"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-5 mt-3 rounded-3xl glass p-6 flex flex-col gap-4"
          >
            {NAV.map((n) => (
              <Link
                key={n.href}
                to={n.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.18em] uppercase font-medium"
                activeProps={{ className: "text-gradient-gold" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="rounded-full bg-royal-gradient text-white px-5 py-2.5 text-xs tracking-[0.18em] uppercase text-center">
              Let's start
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
