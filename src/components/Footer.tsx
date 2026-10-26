import { Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

import painting from "@/assets/services/services/paintings.webp";
import mural from "@/assets/services/services/hero-mural.webp";
import sculpture from "@/assets/services/Fish.webp";
import signage from "@/assets/services/services/signage.webp";
import nameplate from "@/assets/services/services/nameplate.webp";
import walldesign from "@/assets/services/services/walldesign.webp";
import interiorsupport from "@/assets/services/services/interior-support.webp";
import graphics from "@/assets/services/Ramalay2.webp";
import { NAV } from "./Nav";

function ThreadsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c3.5 0 6.5 2.2 7.5 5.5" />
      <path d="M16 11.5c0 2.5-1.5 4.5-4 4.5s-3.5-1.5-3.5-3.5 1.8-4 4-4c1.8 0 3 .9 3.5 2.2v4.3c0 1.2.8 2 2 2" />
    </svg>
  );
}

function PinterestIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="8" y1="20" x2="12" y2="11" />
      <path d="M10.7 14c.437 1.263 1.43 2 2.55 2 2.071 0 3.75-1.554 3.75-4a5 5 0 1 0-9.7 1.7" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/nakshikars.studio/",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nakshikar_studio/",
    icon: Instagram,
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@nakshikars_design_studio",
    icon: ThreadsIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/nakshikars-studio/",
    icon: Linkedin,
  },
  {
    name: "Pinterest",
    href: "https://in.pinterest.com/nakshikars_studio/",
    icon: PinterestIcon,
  },
];

export function Footer() {
  const gallery = [
    { src: painting, alt: "Vertical multicolour abstract painting with gold lines" },
    { src: mural, alt: "Bolava vitthal wall mural" },
    { src: sculpture, alt: "Decorative fish wall Design" },
    { src: signage, alt: "Signage & Identity Art" },
    { src: nameplate, alt: "Custom artistic nameplate design" },
    { src: walldesign, alt: "Under water world wall design" },
    { src: interiorsupport, alt: "Interior Support" },
    { src: graphics, alt: "Ramalay 2 BHK and 3 BHK luxury flats in Taljai, Pune: real estate graphic design" },
  ];
  return (
    <footer className="bg-[color:var(--charcoal)] text-white relative overflow-hidden mt-auto">
      <div className="absolute inset-0 bg-mesh opacity-15" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <img src={logo} alt="Nakshikar's Studio" className="h-12 w-auto bg-white rounded-xl p-2" />
            <p className="text-white/70 leading-relaxed max-w-md">
              A premium art & design studio crafting heirloom paintings, murals, sculptures, signages, branding and digital experiences.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Nakshikar's Studio on ${social.name}`}
                    className="h-11 w-11 rounded-full bg-white/5 border border-white/10 hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)]/15 flex items-center justify-center transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] tracking-[0.25em] uppercase text-[color:var(--gold)] mb-5">Explore</div>
            <ul className="space-y-3 text-sm text-white/80">
              {NAV.map((n) => (
                <li key={n.href}><Link to={n.href} className="hover:text-[color:var(--gold-light)] transition-colors">{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[11px] tracking-[0.25em] uppercase text-[color:var(--gold)] mb-5">From the studio</div>
            <div className="grid grid-cols-4 gap-2 mb-6">
              {gallery.map((g, i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden">
                  <img src={g.src} alt={g.alt} loading="lazy" decoding="async" className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              ))}
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 rounded-full glass-dark p-1.5">
              <input placeholder="Subscribe to our journal" className="bg-transparent px-4 py-2 text-sm outline-none flex-1 text-white placeholder:text-white/40" />
              <button className="rounded-full bg-gold-gradient text-white px-4 py-2 text-[11px] tracking-[0.2em] uppercase">Join</button>
            </form>
          </div>
        </div>

        <div className="hairline-gold mt-14 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} Nakshikar's Studio. All rights reserved.{" "}
            <span className="mx-1">|</span>{" "}
            <a
              href="https://www.cybaemtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--gold-light)] transition-colors"
            >
              Designed by Cybaem Tech
            </a>
          </div>
          <div className="font-devanagari text-[color:var(--gold-light)]">जिथे नक्षी जन्मा येते.</div>
        </div>
      </div>
    </footer>
  );
}
