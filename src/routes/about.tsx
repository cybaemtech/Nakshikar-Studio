import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Play, Medal, Palette, Users, Building2, PhoneCall, LayoutGrid, Layers, Phone, Image as ImageIcon } from "lucide-react";
import aboutheader from "@/assets/aboutheader.webp";
import aboutFooter from "@/assets/about footer.webp";


import studioMural from "@/assets/services/services/hero-mural.webp";
import studioMurti from "@/assets/services/Fish.webp";
import studioPainting from "@/assets/services/services/hero-painting.webp";
import studioWallDesign from "@/assets/services/services/walldesign.webp";
import studioNameplate from "@/assets/services/services/nameplate.webp";
import studioInterior from "@/assets/services/services/interior-support.webp";

import aboutCollage1 from "@/assets/services/ChatGPT Image Aug 4, 2026, 12_22_34 PM.webp";
import aboutCollage2 from "@/assets/services/ChatGPT Image Aug 4, 2026, 12_04_23 PM.webp";
import aboutCollage3 from "@/assets/services/ChatGPT Image Aug 4, 2026, 12_15_09 PM.webp";
import { SectionEyebrow } from "@/components/SectionEyebrow";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Nakshikar's Studio - Where Art is Born" },
      { name: "description", content: "We are a Pune-Pimpri Chinchwad based artists, designers and craftspeople since 2011 crafting murals, sculptures & wall art. Discover our story, vision and creative process." },
      { property: "og:site_name", content: "Nakshikar's Studio" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Nakshikar's Studio - Where Art is Born" },
      { property: "og:description", content: "We are a Pune-Pimpri Chinchwad based artists, designers and craftspeople since 2011 crafting murals, sculptures & wall art. Discover our story, vision and creative process." },
      { property: "og:image", content: "https://nakshikarsstudio.com/logo.png" },
      { property: "og:url", content: "https://nakshikarsstudio.com/about" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "AboutPage",
              "@id": "https://nakshikarsstudio.com/about#webpage",
              "url": "https://nakshikarsstudio.com/about",
              "name": "Nakshikar's Studio - Where Art is Born",
              "description": "We are a Pune-Pimpri Chinchwad based artists, designers and craftspeople since 2011 crafting murals, sculptures & wall art. Discover our story, vision and creative process.",
              "isPartOf": {
                "@id": "https://nakshikarsstudio.com/#website"
              },
              "about": {
                "@id": "https://nakshikarsstudio.com/#organization"
              }
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://nakshikarsstudio.com/about#breadcrumb",
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
                  "name": "About Us",
                  "item": "https://nakshikarsstudio.com/about"
                }
              ]
            }
          ]
        },
      },
    ],
    links: [
      { rel: "canonical", href: "https://nakshikarsstudio.com/about" },
    ],
  }),
}).update({
  component: AboutPage,
});

/* ------------------------------ HERO ------------------------------ */

function AboutHero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden bg-white min-h-[85vh] flex items-start">
      <div className="absolute inset-0 z-0">
        <img
          src={aboutheader}
          alt="Paint brushes"
          width={1600}
          height={640}
          loading="lazy"
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 relative z-10 grid md:grid-cols-2 mt-1 lg:mt-1">
        <div className="space-y-6 max-w-[650px]">
          {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#cca651] flex items-center">
            <div className="flex flex-col gap-1.5 mr-3">
              <span className="w-10 h-[1.5px] bg-[#cca651]"></span>
              <span className="w-6 h-[1.5px] bg-[#cca651]"></span>
            </div>
            Art that speaks. Experience that delivers.
          </motion.div> */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-[clamp(2.4rem,3.8vw,3.4rem)] leading-[1.15] tracking-tight text-[#16213e]">
            Crafted with<br />
            <span className="text-[color:var(--gold)] text-[clamp(3rem,4.6vw,4.2rem)] inline-block my-0.5">Imagination.</span><br />
            Backed by{" "}
            <span className="text-[color:var(--gold)] text-[clamp(3rem,4.6vw,4.2rem)] inline-block my-0.5">Experience.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#4a4a4a] text-[15px] leading-relaxed max-w-sm font-medium">
            We blend imagination, craftsmanship and innovation to create evergreen artworks that inspire.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap items-center gap-4">
            <Link to="/contact" className="flex items-center justify-center gap-3 rounded-[4px] bg-[#1a224a] text-white px-7 py-3 text-sm font-medium hover:bg-opacity-90 transition-all shadow-md min-w-[145px]">
              <Phone className="h-4 w-4 text-white/80" /> Contact Us
            </Link>
            <Link to="/work" className="flex items-center justify-center gap-3 rounded-[4px] bg-[#cca651] text-white px-7 py-3 text-sm font-medium hover:bg-opacity-90 transition-all shadow-md min-w-[145px]">
              <ImageIcon className="h-4 w-4 text-white/80" /> Portfolio
            </Link>
            <Link to="/services" className="flex items-center justify-center gap-3 rounded-[4px] bg-black/5 backdrop-blur-sm border border-[#cca651] text-[#1a224a] px-7 py-3 text-sm font-semibold hover:bg-white/50 transition-all shadow-sm min-w-[145px]">
              <Palette className="h-4 w-4 text-[#cca651]" /> Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ OUR JOURNEY ------------------------------ */

function OurJourney() {
  const stats = [
    { num: "15+", text: "Years of Experience", icon: Medal, active: false },
    { num: "700+", text: "Customers Served", icon: Palette, active: true },
    { num: "500+", text: "Happy Clients", icon: Users, active: false },
    { num: "6", text: "Disciplines", icon: Building2, active: false },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[color:var(--cream)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=75&w=1200&auto=format&fit=crop" alt="Sketch texture" loading="lazy" decoding="async" width={1200} height={800} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--cream)] via-transparent to-[color:var(--cream)]" />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 space-y-6">
          <SectionEyebrow text="Our Journey" />
          <h2 className="font-display text-4xl sm:text-5xl leading-[1.1] tracking-tight text-[color:var(--royal-deep)]">
            From a Vision<br />To a Creative Legacy
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded in 2011, Nakshikar's Studio began with a simple belief: art has the power to transform spaces and touch lives.<br /><br />
            Today, we are a collective of thinkers, writers, designers and makers delivering meaningful artistic experiences across multiple disciplines.
          </p>

          <Link to="/work" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--royal-deep)] text-white px-8 py-3.5 text-sm font-medium hover:bg-[color:var(--gold)] transition-colors shadow-lg">
            Explore More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center border transition-all ${s.active
                ? "bg-[color:var(--royal-deep)] text-white border-transparent scale-105 shadow-2xl z-10 -translate-y-2"
                : "bg-white border-[color:var(--gold)]/20 text-[color:var(--charcoal)] shadow-soft"
                }`}
            >
              <s.icon className={`h-10 w-10 mb-5 ${s.active ? "text-[color:var(--gold)]" : "text-[color:var(--gold)]"}`} strokeWidth={1.5} />
              <div className="font-display text-4xl sm:text-5xl mb-3">{s.num}</div>
              <div className={`text-xs uppercase tracking-[0.2em] font-medium leading-relaxed ${s.active ? "text-white/80" : "text-muted-foreground"}`}>{s.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ EXISTING PRESERVED DATA ------------------------------ */

function ExistingAboutData() {
  return (
    <section className="py-20 sm:py-32 bg-white relative overflow-hidden h-full">
      <div className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-gold-gradient opacity-20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 space-y-8 relative z-10">
          <SectionEyebrow text="About the Studio" />
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.8rem)] leading-[1.02] tracking-tight text-[color:var(--charcoal)]">
            A house of artists,{" "}
            <span className="italic text-gradient-gold">designers</span> and{" "}
            <span className="italic text-[color:var(--royal-deep)]">craftspeople.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Born from a love for Indian craft and modern design, Nakshikar's Studio is where heritage technique meets contemporary vision. We collaborate with homeowners, Interior designers, architects, hoteliers and Company brands to translate ideas into objects that endure.          </p>
          <p className="font-devanagari text-xl text-[color:var(--royal-deep)] italic">
            जिथे नक्षी जन्मा येते. - <span className="text-[color:var(--gold-deep)]">Where art is born.</span>
          </p>

          <div className="grid grid-cols-3 gap-6 pt-4">
            {[
              { n: "15+", l: "Years of craft" },
              { n: "700+", l: "Customers served" },
              { n: "500+", l: "Happy clients" },
            ].map((s) => (
              <div key={s.l} className="border-l border-[color:var(--gold)]/40 pl-4">
                <div className="font-display text-3xl sm:text-4xl text-[color:var(--royal-deep)]">{s.n}</div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 relative h-[500px] sm:h-[600px] z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="absolute top-0 right-0 w-[72%] aspect-[16/9.5] rounded-3xl overflow-hidden shadow-luxe border border-[color:var(--gold)]/20">
            <img src={aboutCollage1} alt="5-panel tree artwork" loading="lazy" decoding="async" width={900} height={541} className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.15 }} className="absolute bottom-10 sm:bottom-14 left-0 w-[58%] aspect-[4/3] rounded-3xl overflow-hidden shadow-luxe border-4 border-white">
            <img src={aboutCollage2} alt="Lotus Garden Painting" loading="lazy" decoding="async" width={900} height={675} className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.3 }} className="absolute top-[42%] right-[2%] w-[32%] aspect-square rounded-3xl overflow-hidden shadow-luxe border-4 border-white animate-float z-20">
            <img src={aboutCollage3} alt="A small girl sitting in poarch" loading="lazy" decoding="async" width={900} height={900} className="h-full w-full object-cover object-center hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ MILESTONES ------------------------------ */

function Milestones() {
  const steps = [
    { year: "2011", desc: "Studio founded in Pune with a focus on identity design" },
    { year: "2015", desc: "We painted an entire children’s room with art" },
    { year: "2018", desc: "Collaborated with AMUL Cattle feed" },
    { year: "2022", desc: "Expanded into interior + architectural branding" },
    { year: "2026", desc: "Revamped studio presence & digital identity" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[color:var(--cream)] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-16">
          <SectionEyebrow text="Our Milestones" />
        </div>

        <div className="relative">
          {/* Subtle connecting gold timeline line on md+ */}
          <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-[color:var(--gold)]/40 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative text-center flex flex-col items-center group p-6 sm:p-7 rounded-2xl bg-white border border-[color:var(--gold)]/40 shadow-soft hover:border-[color:var(--gold)] hover:shadow-luxe hover:-translate-y-1 transition-all duration-300"
              >
                {/* Milestone dot */}
                <div className="h-3.5 w-3.5 rounded-full bg-gold-gradient mb-5 shadow-sm ring-4 ring-white group-hover:scale-125 transition-transform" />

                {/* Focused prominent Year */}
                <div className="font-display text-4xl lg:text-5xl text-[color:var(--charcoal)] tracking-tight mb-3 group-hover:text-[color:var(--gold-deep)] transition-colors">
                  {s.year}
                </div>

                {/* Bottom info */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ INSIDE THE STUDIO ------------------------------ */

function InsideStudio() {
  const images = [
    { src: studioMural, alt: "Bolava vitthal wall mural" },
    { src: studioMurti, alt: "Decorative fish wall Design" },
    { src: studioPainting, alt: "Autmn tree painting" },
    { src: studioWallDesign, alt: "Under water world wall design" },
    { src: studioNameplate, alt: "Custom artistic nameplate design" },
    { src: studioInterior, alt: "Interior Support" },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionEyebrow text="Inside the Studio" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mt-12">
          {images.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft group cursor-pointer border border-[color:var(--gold)]/20 hover:border-[color:var(--gold)]/60 transition-all duration-300 hover:shadow-luxe"
            >
              <img src={item.src} alt={item.alt} loading="lazy" decoding="async" className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700" />
              {i === images.length - 1 && (
                <div className="absolute inset-0 bg-black/50 flex items-end justify-center pb-8 backdrop-blur-[2px]">
                  <Link to="/work" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-[color:var(--royal-deep)] backdrop-blur-md border border-white/20 text-white px-6 py-2.5 text-xs tracking-wider uppercase font-medium transition-colors">
                    Explore More
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CTA ------------------------------ */

function FirstProjectCTA() {
  const cards = [
    { icon: PhoneCall, label: "Contact Us", sub: "Let's Talk", link: "/contact" },
    { icon: LayoutGrid, label: "Portfolio", sub: "See Our Projects", link: "/work" },
    { icon: Layers, label: "Our Services", sub: "What We Do", link: "/services" },
  ];

  return (
    <section className="px-[25px] pb-[100px] pt-10 bg-background">
      <div className="relative py-16 sm:py-20 overflow-hidden bg-[color:var(--charcoal)] rounded-[35px]">
        <div className="absolute inset-0">
          <img src={aboutFooter} alt="Realistic water painting" loading="lazy" decoding="async" width={1600} height={414} className="w-full h-full object-cover" />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[color:var(--gold)] text-sm tracking-[0.2em] uppercase font-medium mb-6">Start your first project</div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] text-white leading-[1.05] tracking-tight mb-8">
              Every Masterpiece<br />Starts with a Vision.
            </h2>
            <p className="text-white/80 text-xl font-light">Let's create something extraordinary together.</p>
          </div>

          <div className="flex flex-wrap items-center justify-start lg:justify-end gap-4">
            {cards.map((c, i) => (
              <Link to={c.link} key={i} className="glass-dark border border-[color:var(--gold)]/30 rounded-2xl p-5 w-36 sm:w-40 flex flex-col items-center text-center hover:bg-white/10 hover:border-[color:var(--gold)] hover:-translate-y-2 transition-all duration-300">
                <c.icon className="h-7 w-7 text-[color:var(--gold)] mb-3 stroke-[1.5]" />
                <div className="text-white text-sm font-medium mb-1">{c.label}</div>
                <div className="text-white/60 text-[10px] uppercase tracking-[0.15em]">{c.sub}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PAGE ------------------------------ */

function AboutPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <AboutHero />
      <OurJourney />
      <ExistingAboutData />
      <Milestones />
      <InsideStudio />
      <FirstProjectCTA />
    </main>
  );
}
