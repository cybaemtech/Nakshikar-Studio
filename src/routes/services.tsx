import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Paintbrush, Brush, Palette, Tag, Building2, ArrowUpRight } from "lucide-react";

import graphicsImg from "@/assets/services/Ramalay2.webp";
import wallDesignImg from "@/assets/services/services/walldesign.webp";
import paintingImg from "@/assets/services/services/paintings.webp";
import muralImg from "@/assets/services/services/mrunal.webp";
import nameplateImg from "@/assets/services/services/nameplate.webp";
import interiorSupportImg from "@/assets/services/services/interior-support.webp";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { LazyImage } from "@/components/LazyImage";
import { categoryToSlug } from "@/lib/categorySlugs";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Murals, Paintings, Wall Art & Design Services | Nakshikar's Studio" },
      { name: "description", content: "We design custom murals, sculptures, wall art, paintings & nameplates for homes, offices, and cultural spaces in Pune, Pimpri Chinchwad, and Mumbai." },
      { property: "og:site_name", content: "Nakshikar's Studio" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Murals, Paintings, Wall Art & Design Services | Nakshikar's Studio" },
      { property: "og:description", content: "We design custom murals, sculptures, wall art, paintings & nameplates for homes, offices, and cultural spaces in Pune, Pimpri Chinchwad, and Mumbai." },
      { property: "og:image", content: "https://nakshikarsstudio.com/logo.png" },
      { property: "og:url", content: "https://nakshikarsstudio.com/services" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://nakshikarsstudio.com/services#webpage",
              "url": "https://nakshikarsstudio.com/services",
              "name": "Murals, Paintings, Wall Art & Design Services | Nakshikar's Studio",
              "description": "We design custom murals, sculptures, wall art, paintings & nameplates for homes, offices, and cultural spaces in Pune, Pimpri Chinchwad, and Mumbai.",
              "isPartOf": {
                "@id": "https://nakshikarsstudio.com/#website"
              },
              "about": {
                "@id": "https://nakshikarsstudio.com/#organization"
              }
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://nakshikarsstudio.com/services#breadcrumb",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://nakshikarsstudio.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://nakshikarsstudio.com/services"
                }
              ]
            }
          ]
        },
      },
    ],
    links: [
      { rel: "canonical", href: "https://nakshikarsstudio.com/services" },
    ],
  }),
}).update({
  component: Services,
});

const SERVICES = [
  {
    icon: Sparkles,
    title: "Graphics",
    category: "Graphics",
    img: graphicsImg,
    items: ["Logo & Brand Identity", "Brochures & Profiles", "Packaging Design", "Print & Media Design"],
  },
  {
    icon: Paintbrush,
    title: "Wall Design",
    category: "Wall Design",
    img: wallDesignImg,
    items: ["Custom Wall Art", "Textured Finishes", "3D Feature Wall", "Architectural Murals"],
  },
  {
    icon: Brush,
    title: "Paintings",
    category: "Paintings",
    img: paintingImg,
    items: ["Realistic Portraits", "Abstract Canvas", "Custom Commissions", "Fine Art Masterpieces"],
  },
  {
    icon: Palette,
    title: "Murals",
    category: "Murals",
    img: muralImg,
    items: ["Hand-painted Murals", "Large Scale Wall Murals", "Indoor & Outdoor Art", "Heritage & Theme Murals"],
  },
  {
    icon: Tag,
    title: "Nameplates",
    category: "Nameplates",
    img: nameplateImg,
    items: ["Custom Designer Nameplates", "Brass & Copper Art", "Wooden & Stone Plates", "Backlit 3D Nameplates"],
  },
  {
    icon: Building2,
    title: "Interior Support",
    category: "Interior Support",
    img: interiorSupportImg,
    items: ["Art Consultation", "Space Styling & Decor", "Installation Support", "Custom Architectural Accents"],
  },
];

function Services() {
  return (
    <div className="bg-background text-foreground min-h-screen pt-24">
      <section className="pt-8 pb-20 sm:pt-12 sm:pb-28 bg-white min-h-[calc(100vh-6rem)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center">
              <SectionEyebrow text="Our Services" />
            </div>
            <h1 className="font-display text-[clamp(2.2rem,5vw,4.4rem)] leading-[1.02] tracking-tight max-w-4xl mx-auto">
              From sketch to{" "}
              <span className="italic text-gradient-gold">Installation</span> —
              <br />
              a complete creative solution.
            </h1>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                >
                  <Link
                    to="/portfolio/$category"
                    params={{ category: categoryToSlug(s.category) }}
                    className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-[color:var(--cream)] border border-[color:var(--gold)]/20 hover:border-[color:var(--gold)]/60 transition-all duration-300 hover:shadow-luxe"
                  >
                    <div className="relative h-64 overflow-hidden bg-[#faf8f5] flex items-center justify-center p-3 border-b border-[color:var(--gold)]/10">
                      <LazyImage
                        src={s.img}
                        alt={s.title}
                        width={900}
                        height={900}
                        isPriority={i < 3}
                        className="h-full w-full object-contain transition-transform duration-[700ms] group-hover:scale-105"
                        containerClassName="h-full w-full flex items-center justify-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10" />
                      <div className="absolute top-4 left-4 h-11 w-11 rounded-full bg-gold-gradient flex items-center justify-center shadow-soft z-20">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="absolute bottom-4 left-4 text-white text-[11px] tracking-[0.2em] uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 z-20">
                        {s.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-display text-2xl mb-3 text-[color:var(--charcoal)]">{s.title}</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                          {s.items.map((it) => (
                            <li key={it} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" /> {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between text-[11px] tracking-[0.22em] uppercase text-[color:var(--royal-deep)] font-semibold border-t border-[color:var(--gold)]/20 pt-4">
                        <span>View {s.category} Portfolio</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[color:var(--gold)]" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
