import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Sparkles, Plus, Minus, ArrowUpRight, ArrowRight, Lightbulb, PencilRuler, Monitor, Paintbrush, Settings, Landmark } from "lucide-react";

import heroMural from "@/assets/services/services/hero-mural.webp";
import heroMurti from "@/assets/services/Fish.webp";
import heroPainting from "@/assets/services/services/hero-painting.webp";
import heroNameplate from "@/assets/services/services/nameplate.webp";
import print from "@/assets/print.jpg";
import graphic from "@/assets/graphic.jpg";
import uiux from "@/assets/uiux.jpg";
import wallart from "@/assets/wallart.jpg";
import processImg from "@/assets/girl.png";

import serviceGraphics from "@/assets/services/Ramalay2.webp";
import serviceWallDesign from "@/assets/services/services/walldesign.webp";
import servicePainting from "@/assets/services/services/paintings.webp";
import serviceMural from "@/assets/services/services/mrunal.webp";
import serviceNameplate from "@/assets/services/services/nameplate.webp";
import serviceInteriorSupport from "@/assets/services/services/interior-support.webp";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";
import { categoryToSlug } from "@/lib/categorySlugs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Custom Art & Painting Studio in Pune | Nakshikars Studio" },
      { name: "description", content: "We create custom paintings, wall murals, sculptures, signage and interior art for homes, hotels, offices and brands across Pune, Pimpri Chinchwad and Mumbai" },
      { property: "og:site_name", content: "Nakshikar's Studio" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Custom Art & Painting Studio in Pune | Nakshikars Studio" },
      { property: "og:description", content: "We create custom paintings, wall murals, sculptures, signage and interior art for homes, hotels, offices and brands across Pune, Pimpri Chinchwad and Mumbai" },
      { property: "og:image", content: "https://nakshikarsstudio.com/logo.png" },
      { property: "og:url", content: "https://nakshikarsstudio.com/" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
              "@id": "https://nakshikarsstudio.com/#organization",
              "name": "Nakshikar's Studio",
              "url": "https://nakshikarsstudio.com/",
              "logo": "https://nakshikarsstudio.com/logo.png",
              "image": "https://nakshikarsstudio.com/logo.png",
              "description": "Nakshikar's Studio crafts paintings, murals, sculptures, signages, branding and digital design for residential, commercial and luxury spaces.",
              "telephone": "+919890813587",
              "email": "sandesh.j@nakshikarsstudio.com",
              "priceRange": "₹₹₹",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919890813587",
                "contactType": "customer service",
                "email": "sandesh.j@nakshikarsstudio.com",
                "areaServed": "IN",
                "availableLanguage": ["English", "Marathi", "Hindi"]
              },
              "sameAs": [
                "https://www.facebook.com/nakshikars.studio/",
                "https://www.instagram.com/nakshikar_studio/",
                "https://www.threads.com/@nakshikars_design_studio",
                "https://www.linkedin.com/company/nakshikars-studio/",
                "https://in.pinterest.com/nakshikars_studio/"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://nakshikarsstudio.com/#website",
              "url": "https://nakshikarsstudio.com/",
              "name": "Nakshikar's Studio",
              "description": "Nakshikar's Studio crafts paintings, murals, sculptures, signages, branding and digital design for residential, commercial and luxury spaces.",
              "publisher": {
                "@id": "https://nakshikarsstudio.com/#organization"
              }
            },
            {
              "@type": "WebPage",
              "@id": "https://nakshikarsstudio.com/#webpage",
              "url": "https://nakshikarsstudio.com/",
              "name": "Custom Art & Painting Studio in Pune | Nakshikars Studio",
              "description": "We create custom paintings, wall murals, sculptures, signage and interior art for homes, hotels, offices and brands across Pune, Pimpri Chinchwad and Mumbai",
              "isPartOf": {
                "@id": "https://nakshikarsstudio.com/#website"
              },
              "about": {
                "@id": "https://nakshikarsstudio.com/#organization"
              }
            }
          ]
        },
      },
    ],
    links: [
      { rel: "canonical", href: "https://nakshikarsstudio.com/" },
    ],
  }),
}).update({
  component: Home,
});

/* ------------------------------ HERO ------------------------------ */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] pt-20 lg:pt-24 pb-16 overflow-hidden bg-mesh noise">
      {/* floating decorative blobs */}
      <div className="absolute -top-20 -left-20 h-[420px] w-[420px] rounded-full bg-gold-gradient opacity-30 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-[520px] w-[520px] rounded-full bg-royal-gradient opacity-25 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-center">
        {/* Left */}
        <div className="lg:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 rounded-full glass px-4 py-2 text-[11px] tracking-[0.25em] uppercase text-[color:var(--royal-deep)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-gradient" />
            Design • Art
          </motion.div>

          <h1 className="font-display font-medium leading-[0.95] tracking-tight text-[clamp(2rem,4.2vw,3.6rem)] text-[color:var(--charcoal)]">
            <SplitReveal text="Where" />{" "}
            <SplitReveal text="art" delay={0.15} />{" "}
            <span className="text-gradient-gold"><SplitReveal text="is born." delay={0.3} /></span>
            <br />
            <SplitReveal text="Crafted" delay={0.45} />{" "}
            <SplitReveal text="by hand," delay={0.6} />
            <br />
            <span className="text-[color:var(--royal-deep)]"><SplitReveal text="loved forever." delay={0.75} /></span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-base sm:text-lg text-[color:var(--muted-foreground)] max-w-xl leading-relaxed"
          >
            Nakshikar's Studio is a creative atelier crafting <em>paintings, murals, sculptures, signages, branding</em> and digital design for homes, hotels, corporates and cultural spaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link to="/portfolio" className="group inline-flex items-center gap-2 rounded-full bg-royal-gradient text-white px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-medium shadow-luxe hover:scale-[1.03] transition-transform">
              Explore Portfolio <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
            <a href="/services" className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/60 px-7 py-4 text-[12px] tracking-[0.22em] uppercase font-medium text-[color:var(--royal-deep)] hover:bg-[color:var(--gold)]/10 transition-colors">
              Our Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="flex items-center gap-8 pt-4"
          >
            {[
              { n: "15+", l: "Years" },
              { n: "700+", l: "Customers" },
              { n: "500+", l: "Happy Clients" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-gradient-gold">{s.n}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right collage */}
        <div className="lg:col-span-6 relative h-[520px] sm:h-[620px] lg:h-[680px]">
          <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[58%] h-[62%] rounded-3xl overflow-hidden shadow-luxe">
            <motion.img
              src={heroMural}
              alt="Bolava vitthal wall mural"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute top-[18%] left-0 w-[54%] sm:w-[56%] h-[30%] sm:h-[34%] rounded-3xl overflow-hidden shadow-soft border-4 border-white animate-float">
            <img src={heroMurti} alt="Decorative fish wall Design" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div style={{ y: y3 }} className="absolute bottom-0 left-[10%] w-[48%] h-[44%] rounded-3xl overflow-hidden shadow-luxe border-4 border-white">
            <img src={heroPainting} alt="Autmn tree painting" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute bottom-[8%] right-0 w-[36%] h-[36%] rounded-3xl overflow-hidden shadow-soft border-4 border-white">
            <img src={heroNameplate} alt="Custom artistic nameplate design" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </motion.div>

          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="absolute top-[55%] left-[35%] -translate-x-1/2 -translate-y-1/2 h-28 w-28 rounded-full bg-gold-gradient flex items-center justify-center shadow-luxe animate-float"
          >
            <div className="text-center">
              <Sparkles className="h-5 w-5 mx-auto text-white" />
              <div className="text-[9px] tracking-[0.3em] uppercase text-white mt-1 font-semibold">Custom</div>
              <div className="text-[9px] tracking-[0.3em] uppercase text-white">Artwork</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SplitReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-baseline">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  );
}

/* ------------------------------ MARQUEE ------------------------------ */

function Marquee() {
  const items = ["Paintings", "Murals", "Sculptures", "Signages", "Print", "Branding", "UI / UX", "Wall Art", "Sketching", "Installations"];
  return (
    <div className="relative border-y border-[#cca651] bg-[#16213e] py-3 sm:py-4 overflow-hidden">
      <div className="flex marquee whitespace-nowrap gap-12 items-center">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-wide flex items-center">
            <span className="text-white">{it}</span>
            <span className="ml-12 text-[#cca651]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ WHAT WE CREATE ------------------------------ */

const CATEGORIES = [
  { label: "Graphics", category: "Graphics", img: serviceGraphics, sub: "Logo • Identity • Branding" },
  { label: "Wall Design", category: "Wall Design", img: serviceWallDesign, sub: "Custom • Textured • 3D" },
  { label: "Paintings", category: "Paintings", img: servicePainting, sub: "Realistic • Portrait • Abstract" },
  { label: "Murals", category: "Murals", img: serviceMural, sub: "Hand-painted • Large Scale" },
  { label: "Nameplates", category: "Nameplates", img: serviceNameplate, sub: "Custom • Brass • Wood" },
  { label: "Interior Support", category: "Interior Support", img: serviceInteriorSupport, sub: "Styling • Installation • Accents" },
];

function WhatWeCreate() {
  return (
    <section className="py-28 sm:py-36 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionEyebrow text="What We Create" />
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <h2 className="font-display text-[clamp(2rem,5vw,4.2rem)] leading-[1] tracking-tight max-w-3xl">
            Six disciplines.{" "}
            <span className="italic text-gradient-gold">One studio.</span>
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Every category below is hand-crafted in-house{" "}
            <span className="sm:block">from the first sketch to the final installation.</span>
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.07 }}
            >
              <Link
                to="/portfolio/$category"
                params={{ category: categoryToSlug(c.category) }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[4/5] lg:aspect-square block shadow-soft hover:shadow-luxe transition-shadow"
              >
                <img src={c.img} alt={c.label} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--charcoal)]/90 via-[color:var(--charcoal)]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                  <div className="text-[10px] tracking-[0.25em] uppercase opacity-80 mb-1">{c.sub}</div>
                  <div className="flex items-end justify-between gap-3">
                    <h3 className="font-display text-2xl sm:text-3xl leading-none">{c.label}</h3>
                    <span className="h-9 w-9 rounded-full bg-gold-gradient flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4 text-white" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PROCESS ------------------------------ */

const PROCESS = [
  { n: "01", t: "Concept", d: "We begin with a conversation to understand your ideas, goals and the story behind your space.", icon: Lightbulb },
  { n: "02", t: "Sketch", d: "Ideas take shape on paper. We sketch, experiment and refine until the vision feels right.", icon: PencilRuler },
  { n: "03", t: "Design", d: "We bring the concept to life with detailed renders, color studies and material selections.", icon: Monitor },
  { n: "04", t: "Production", d: "Our skilled artists and craftsmen transform the design using premium materials and techniques.", icon: Paintbrush },
  { n: "05", t: "Execution", d: "Every detail is carefully executed with precision, quality checks and passion at every step.", icon: Settings },
  { n: "06", t: "Installation", d: "We deliver and install the artwork with care, ensuring a flawless and lasting impression.", icon: Landmark },
];

function Process() {
  return (
    <section className="py-11 sm:py-20 bg-[#F7F4EE] relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full pl-[8%] pr-5 sm:pr-8 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
        {/* Left Side */}
        <div className="flex flex-col">
          <div className="text-[12px] font-bold tracking-[0.2em] uppercase text-[#cca651] mb-4">
            THE PROCESS
          </div>
          <h2 className="font-display text-[clamp(2.5rem,4vw,3.8rem)] leading-[1.05] tracking-tight text-[#16213e] mb-2">
            From a Single Thought<br />
            to a Finished <span className="text-[#cca651] italic">Masterpiece.</span>
          </h2>

          <div className="relative w-full max-w-[750px] mx-auto mt-12 flex flex-col items-center justify-center">
            <img src={processImg} alt="Krishna canvas painting" loading="lazy" decoding="async" className="w-full h-auto object-contain" />

            {/* Tagline */}

          </div>
        </div>

        {/* Right Side */}
        <div className="relative pl-2 lg:pl-12 pt-0">
          {/* Vertical dotted line */}
          <div className="absolute left-[26px] lg:left-[72px] top-[24px] bottom-8 w-[2px] border-l-[3px] border-dotted border-[#16213e]/15" />

          <div className="flex flex-col gap-4">
            {PROCESS.map((p, i) => (
              <div key={p.n} className="flex gap-6 relative z-10">
                {/* Icon Circle */}
                <div className="shrink-0 w-[48px] h-[48px] rounded-full border border-[#cca651]/50 bg-white flex items-center justify-center relative shadow-sm">
                  <p.icon className="h-5 w-5 text-[#cca651]" />
                </div>

                {/* Content Box */}
                <div className="flex-1 pb-4 border-b border-[#16213e]/10 relative">
                  <div className="text-[#cca651] font-bold text-[16px] mb-0">{p.n}</div>
                  <h3 className="text-[#16213e] font-display text-[22px] mb-1">{p.t}</h3>
                  <p className="text-[#4a4a4a] text-[13px] leading-[1.5]">
                    {p.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FAQ ------------------------------ */

const FAQS = [
  { q: "What kinds of projects do you take on?", a: "Residences, hotels, restaurants, corporates, schools and cultural spaces, from a single commissioned painting to full interior art programs." },
  { q: "Do you handle on-site installation?", a: "Yes. Our team manages the entire process, from sketch to white-glove on-site installation, including lighting and finishing." },
  { q: "How long does a typical commission take?", a: "Smaller paintings start at 2–3 weeks. Large murals and sculptural installs range from 4 to 12 weeks depending on scale and material." },
  { q: "Can you match a specific style or palette?", a: "Absolutely. Every commission begins with a brief, color study and material samples tailored to your space and story." },
  { q: "Do you also offer branding and digital design?", a: "Yes, we are a full creative studio. Logo, identity, packaging, print, UI/UX and websites are all crafted in-house." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 sm:py-36 bg-[color:var(--cream)]">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center"><SectionEyebrow text="Frequently Asked" /></div>
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.02] tracking-tight">
            Questions, <span className="italic text-gradient-gold">answered.</span>
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="rounded-2xl bg-white border border-[color:var(--gold)]/25 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 text-left p-6"
              >
                <span className="font-display text-lg sm:text-xl">{f.q}</span>
                <span className="shrink-0 h-9 w-9 rounded-full bg-gold-gradient flex items-center justify-center text-white">
                  {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PAGE ------------------------------ */

function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Marquee />
      <WhatWeCreate />
      <AboutSection />
      <Process />
      <FAQ />
      <Testimonials />
    </div>
  );
}
