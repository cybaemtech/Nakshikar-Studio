import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Train,
  Bus,
  Navigation,
  Compass,
  Star,
  ChevronDown,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Palette,
  Layers,
  Frame,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";

import { SectionEyebrow } from "@/components/SectionEyebrow";

import heroMural from "@/assets/services/services/hero-mural.webp";
import heroPainting from "@/assets/services/services/paintings.webp";
import heroWalldesign from "@/assets/services/services/walldesign.webp";
import heroNameplate from "@/assets/services/services/nameplate.webp";
import interiorSupportImg from "@/assets/services/services/interior-support.webp";
import graphicImg from "@/assets/services/Ramalay2.webp";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Nakshikar's+studio/@18.647256,73.7811046,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b99d1ab9075d:0xb8061b85586d7fd2!8m2!3d18.647256!4d73.7811046!16s%2Fg%2F11rvh5j_5x?entry=ttu";

function GoogleMapsPin({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="#EA4335"
      />
      <circle cx="12" cy="9" r="2.8" fill="#FFFFFF" />
      <path
        d="M12 2c3.87 0 7 3.13 7 7 0 5.25-7 13-7 13V2z"
        fill="#4285F4"
      />
      <path
        d="M12 22s4.5-5 6.2-9.5L12 9v13z"
        fill="#34A853"
      />
      <path
        d="M5 9c0 3.5 2.5 8 7 13V9H5z"
        fill="#FBBC04"
      />
      <circle cx="12" cy="9" r="2.3" fill="#FFFFFF" />
    </svg>
  );
}

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nakshikar's studio",
  "image": "https://nakshikarsstudio.com/assets/logo-37ICZ1Uk.png",
  "@id": "https://nakshikarsstudio.com/#localbusiness",
  "url": "https://nakshikarsstudio.com/",
  "telephone": "98908 13587",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress":
      "Office. No A 22, World of Mother, behind Jai Ganesh Vision Near Aagan hotel, Akurdi, Pune, Maharashtra 411035",
    "addressLocality": "Pune",
    "postalCode": "411035",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.647256,
    "longitude": 73.7811046,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "10:00",
      "closes": "19:00",
    },
  ],
  "sameAs": [
    "https://www.facebook.com/nakshikars.studio/",
    "https://www.instagram.com/nakshikar_studio/",
    "https://www.youtube.com/@nakshikardesignsstudiopune8380",
    "https://www.linkedin.com/company/nakshikars-studio/",
    "https://in.pinterest.com/nakshikars_studio/",
    "https://nakshikarsstudio.com/",
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "home",
      "item": "https://nakshikarsstudio.com/art-studio-in-pune",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Art Studio in Pune",
      "item": "https://nakshikarsstudio.com/art-studio-in-pune",
    },
  ],
};

const FAQ_ITEMS = [
  {
    q: "What services Nakshikars Studio provide?",
    a: "We provide handmade paintings, mural wall paintings, 3D wall painting designs, customized name plates, interior art support, and graphics design.",
  },
  {
    q: "What are the official office hours?",
    a: "Our office is open Mon: 10:00–19:00 | Wed–Sat: 09:00–17:00 | Tue & Sun: Closed. Business days are affected by calendar events. So, we suggest booking an appointment call before you visit the office to make your visit.",
  },
  {
    q: "Which industries does Nakshikars Studio cater to?",
    a: "We cater to residential homes, private art collectors, commercial businesses, and corporate spaces across Pune and PCMC.",
  },
  {
    q: "How do I book an consultation call?",
    a: "You can book a consultation call by contacting us at +91 98908 13587, emailing sandesh.j@nakshikarsstudio.com, or visiting our contact page.",
  },
  {
    q: "Is visitor parking available at the studio?",
    a: "Yes. Dedicated two-wheeler and four-wheeler parking is available inside the World of Mother complex.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a,
    },
  })),
};

const REVIEWS = [
  {
    name: "Pratik Mane",
    initial: "P",
    rating: 5,
    text: "Design khup mast Sir aapla number bhetel ka",
    tag: "Verified Local Listing Review",
  },
  {
    name: "Mahesh J. Shrimali",
    initial: "M",
    rating: 5,
    text: "The studio which fulfill your all design and art work. Nice design, on time work",
    tag: "Verified Local Listing Review",
  },
  {
    name: "Sohel T",
    initial: "S",
    rating: 5,
    text: "business card designer",
    tag: "Verified Local Listing Review",
  },
];

const SPECIALTIES = [
  {
    title: "Handmade Paintings",
    category: "Paintings",
    desc: "Original custom paintings crafted on Belgian canvas using oil, acrylics, and gold leaf for homes and collectors.",
    img: heroPainting,
    keyword: "art gallery near me",
  },
  {
    title: "Mural Wall Painting",
    category: "Murals",
    desc: "Bespoke hand-painted wall murals that transform residential living rooms, cafes, and executive boardrooms.",
    img: heroMural,
    keyword: "mural wall painting",
  },
  {
    title: "3D Wall Painting Designs",
    category: "Wall Design",
    desc: "Sculptural reliefs, textured architectural finishes, and dynamic 3D wall art treatments.",
    img: heroWalldesign,
    keyword: "3D wall painting designs",
  },
  {
    title: "Customized Name Plates",
    category: "Nameplates",
    desc: "Handcrafted entrance signage in cast metal, acrylic, seasoned teakwood, and warm ambient LED backlighting.",
    img: heroNameplate,
    keyword: "customized name plates",
  },
  {
    title: "Interior Art Support & Architecture",
    category: "Interior Support",
    desc: "Turnkey art advisory, spatial installations, custom sculptures, and architectural accents for interior designers.",
    img: interiorSupportImg,
    keyword: "wall painter in pimpri chinchwad",
  },
  {
    title: "Graphic Design & Branding",
    category: "Graphics",
    desc: "Strategic visual identities, logo marks, corporate design systems, and premium packaging for modern businesses.",
    img: graphicImg,
    keyword: "custom art and painting studio in pune",
  },
];

export const Route = createFileRoute("/art-studio-in-pune")({
  head: () => ({
    meta: [
      { title: "Art Studio in Pune | Nakshikars Studio" },
      {
        name: "description",
        content:
          "Visit Nakshikars Studio, your custom art and painting studio in Pune. Discover mural wall painting, 3D wall painting designs, and customized name plates.",
      },
      {
        name: "keywords",
        content:
          "Art Studio in Pune, custom art and painting studio in pune, art gallery near me, mural wall painting, 3D wall painting designs, customized name plates, wall painter in pimpri chinchwad",
      },
      { property: "og:site_name", content: "Nakshikar's Studio" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Art Studio in Pune | Nakshikars Studio",
      },
      {
        property: "og:description",
        content:
          "Visit Nakshikars Studio, your custom art and painting studio in Pune. Discover mural wall painting, 3D wall painting designs, and customized name plates.",
      },
      {
        property: "og:image",
        content: "https://nakshikarsstudio.com/assets/logo-37ICZ1Uk.png",
      },
      {
        property: "og:url",
        content: "https://nakshikarsstudio.com/art-studio-in-pune",
      },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": [LOCAL_BUSINESS_SCHEMA, BREADCRUMB_SCHEMA, FAQ_SCHEMA],
        },
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://nakshikarsstudio.com/art-studio-in-pune",
      },
    ],
  }),
  component: ArtStudioPunePage,
});

function ArtStudioPunePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Fallback JSON-LD scripts for crawlers that read body script tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      {/* ----------------- HERO SECTION ----------------- */}
      <section className="relative min-h-[100svh] pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-mesh noise flex flex-col justify-center">
        {/* Ambient lighting glows */}
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-gold-gradient opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-royal-gradient opacity-15 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 w-full my-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-4 sm:space-y-5"
            >
              <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1 text-[11px] tracking-[0.25em] uppercase text-[color:var(--royal-deep)] font-medium border border-[color:var(--gold)]/30">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-gradient animate-pulse" />
                Akurdi, Pimpri Chinchwad • Pune Studio
              </div>

              {/* Primary Keyword H1 */}
              <h1 className="font-display font-medium text-[clamp(2.2rem,4.4vw,3.8rem)] leading-[1.05] tracking-tight text-[color:var(--charcoal)]">
                Art Studio <span className="italic text-gradient-gold">in Pune</span>
              </h1>

              {/* Document-exact Subheading & Core Content */}
              <div className="space-y-2">
                <h2 className="text-lg sm:text-xl font-display font-semibold text-[color:var(--royal-deep)] tracking-wide">
                  Custom Art and Painting Studio in Pune
                </h2>
                <p className="text-sm sm:text-[15px] text-foreground/80 leading-relaxed max-w-2xl font-light">
                  We, Nakshikars Studio, design and create handmade paintings,
                  mural wall painting, 3D wall painting designs, customized name
                  plates, interior art support, graphic design, and custom
                  architectural wall design for residences, collectors, and
                  businesses in Pune, Pimpri Chinchwad and Mumbai.
                </p>
              </div>

              {/* Document-specified Action Buttons in a single straight line */}
              <div className="flex items-center gap-2.5 sm:gap-3 pt-1 flex-nowrap overflow-x-auto sm:overflow-visible pb-1 sm:pb-0">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-royal-gradient text-white px-4 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs tracking-[0.14em] uppercase font-semibold shadow-soft hover:scale-[1.03] hover:shadow-luxe transition-all duration-300 group whitespace-nowrap shrink-0"
                >
                  Book an Art Consultation
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 sm:px-4.5 py-2.5 sm:py-3 text-[11px] sm:text-xs tracking-[0.14em] uppercase font-semibold text-[color:var(--royal-deep)] hover:bg-white hover:scale-[1.03] transition-all duration-300 border border-[color:var(--gold)]/40 group shadow-sm whitespace-nowrap shrink-0"
                >
                  <MapPin className="h-3.5 w-3.5 text-[color:var(--gold-deep)] transition-transform group-hover:scale-110" />
                  Open in Maps
                </a>

                <a
                  href="tel:9890813587"
                  className="inline-flex items-center gap-1.5 rounded-full glass px-3.5 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-xs tracking-wider uppercase font-semibold text-[color:var(--charcoal)] hover:bg-white hover:text-[color:var(--gold-deep)] hover:scale-[1.03] transition-all duration-300 border border-[color:var(--gold)]/40 shadow-sm whitespace-nowrap shrink-0"
                >
                  <Phone className="h-3.5 w-3.5 text-[color:var(--gold-deep)]" />
                  +91 98908 13587
                </a>
              </div>

              {/* Keyword Pills - Targeted Search Concepts */}
              {/* <div className="pt-3 border-t border-border/60">
                <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-2 font-semibold">
                  Popular Art Inquiries in Pune & PCMC:
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {[
                    "Custom art and painting studio in Pune",
                    "Art gallery near me",
                    "Mural wall painting",
                    "3D wall painting designs",
                    "Customized name plates",
                    "Wall painter in Pimpri Chinchwad",
                  ].map((kw) => (
                    <span
                      key={kw}
                      className="inline-flex items-center text-[11px] sm:text-xs px-2.5 py-0.5 sm:py-1 rounded-full bg-white/80 border border-[color:var(--gold)]/25 text-[color:var(--royal-deep)] shadow-2xs"
                    >
                      <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[color:var(--gold-deep)] mr-1" />
                      {kw}
                    </span>
                  ))}
                </div>
              </div> */}
            </motion.div>

            {/* Right Visual Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="relative max-w-sm sm:max-w-md mx-auto lg:max-w-none">
                {/* Decorative border frame */}
                <div className="relative rounded-3xl p-2.5 sm:p-3 bg-gradient-to-tr from-[color:var(--gold)]/30 via-white/50 to-[color:var(--royal)]/20 shadow-soft backdrop-blur-sm border border-white/60">
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group">
                      <img
                        src={heroMural}
                        alt="Mural wall painting by Nakshikars Studio Pune"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-2.5 sm:p-3">
                        <span className="text-[9px] tracking-widest uppercase text-[color:var(--gold-light)] font-medium">
                          Wall Murals
                        </span>
                        <span className="text-[11px] sm:text-xs font-semibold text-white">
                          Bespoke Architectural Art
                        </span>
                      </div>
                    </div>

                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group">
                      <img
                        src={heroPainting}
                        alt="Handmade canvas painting created in Pune art studio"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-2.5 sm:p-3">
                        <span className="text-[9px] tracking-widest uppercase text-[color:var(--gold-light)] font-medium">
                          Canvas Art
                        </span>
                        <span className="text-[11px] sm:text-xs font-semibold text-white">
                          Handmade Paintings
                        </span>
                      </div>
                    </div>

                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group">
                      <img
                        src={heroWalldesign}
                        alt="3D wall painting designs and architectural textures in Pune"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-2.5 sm:p-3">
                        <span className="text-[9px] tracking-widest uppercase text-[color:var(--gold-light)] font-medium">
                          Wall Design
                        </span>
                        <span className="text-[11px] sm:text-xs font-semibold text-white">
                          3D Relief Designs
                        </span>
                      </div>
                    </div>

                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group">
                      <img
                        src={heroNameplate}
                        alt="Customized name plates designed by Nakshikars Studio"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-2.5 sm:p-3">
                        <span className="text-[9px] tracking-widest uppercase text-[color:var(--gold-light)] font-medium">
                          Nameplates
                        </span>
                        <span className="text-[11px] sm:text-xs font-semibold text-white">
                          Customized Name Plates
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Studio Badge */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 rounded-xl sm:rounded-2xl glass p-2.5 sm:p-3 shadow-soft border border-[color:var(--gold)]/30 max-w-xs flex items-center gap-2.5 sm:gap-3 bg-white/95">
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-royal-gradient flex items-center justify-center shrink-0 text-[color:var(--gold)]">
                    <Compass className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-semibold text-[color:var(--charcoal)]">
                      Visit Nakshikars Studio
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      Akurdi, Pimpri Chinchwad, Pune
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ----------------- WHAT WE CREATE / SERVICES SECTION ----------------- */}
      <section className="py-20 sm:py-28 bg-white border-y border-border/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl mb-14">
            <SectionEyebrow text="Our Studio Specialties" />
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] tracking-tight text-[color:var(--charcoal)]">
              Crafted in Pune for residences, collectors, and businesses.
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              Every piece is conceived with deliberate artistry, combining
              traditional hand-skills with architectural modernism.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIALTIES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-3xl bg-[color:var(--cream)]/60 border border-[color:var(--gold)]/25 overflow-hidden p-6 hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-16/10 rounded-2xl overflow-hidden mb-5 bg-black/5 relative">
                    <img
                      src={item.img}
                      alt={`${item.title} - ${item.keyword}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/90 font-medium text-[color:var(--royal-deep)] shadow-xs">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[color:var(--royal-deep)] group-hover:text-[color:var(--gold-deep)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/75 mt-2 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[color:var(--gold)]/15 flex items-center justify-between">
                  {/* <span className="text-[11px] text-muted-foreground tracking-wide italic">
                    #{item.keyword}
                  </span> */}
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--royal-deep)] hover:text-[color:var(--gold-deep)] transition-colors"
                  >
                    View Work <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- LOCATION, CONTACT & HOW TO REACH ----------------- */}
      <section className="py-20 sm:py-28 bg-[color:var(--cream)]/40 relative">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center">
              <SectionEyebrow text="Studio Visit & Directions" />
            </div>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.08] tracking-tight text-[color:var(--charcoal)]">
              Plan your visit to Nakshikars Studio.
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              Centrally located in Akurdi, Pimpri Chinchwad, easily accessible from
              Pune city, Hinjewadi, Nigdi, and Mumbai-Pune Expressway.
            </p>
          </div>

          {/* 4 Information Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* 1. Contact Details & Official Hours */}
            <div className="rounded-3xl bg-white border border-[color:var(--gold)]/30 p-8 sm:p-10 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 rounded-2xl bg-royal-gradient text-[color:var(--gold)] flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[color:var(--charcoal)]">
                    Contact & Official Hours
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Connect with our artists
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <MapPin className="h-5 w-5 text-[color:var(--gold-deep)] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Studio Address:</div>
                    <div className="text-foreground/80 leading-relaxed mt-0.5">
                      Office. No A 22, World of Mother, behind Jai Ganesh Vision
                      Near Aagan hotel, Akurdi, Pune, Maharashtra 411035
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3.5">
                  <Phone className="h-5 w-5 text-[color:var(--gold-deep)] shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Phone Number:</div>
                    <a
                      href="tel:9890813587"
                      className="text-[color:var(--royal-deep)] font-semibold hover:underline"
                    >
                      +91 98908 13587
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5">
                  <Mail className="h-5 w-5 text-[color:var(--gold-deep)] shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Official Email:</div>
                    <a
                      href="mailto:sandesh.j@nakshikarsstudio.com"
                      className="text-[color:var(--royal-deep)] hover:underline"
                    >
                      sandesh.j@nakshikarsstudio.com
                    </a>
                  </div>
                </div>

                {/* Hours Box */}
                <div className="mt-4 p-5 rounded-2xl bg-[color:var(--cream)] border border-[color:var(--gold)]/20">
                  <div className="text-xs uppercase tracking-widest font-semibold text-[color:var(--gold-deep)] mb-3">
                    Weekly Schedule
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex items-center justify-between pb-1 border-b border-border/50">
                      <span className="font-medium text-foreground">Monday</span>
                      <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full text-xs">
                        10:00 – 19:00
                      </span>
                    </div>
                    <div className="flex items-center justify-between pb-1 border-b border-border/50">
                      <span className="font-medium text-foreground">Tuesday</span>
                      <span className="font-semibold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full text-xs">
                        Closed
                      </span>
                    </div>
                    <div className="flex items-center justify-between pb-1 border-b border-border/50">
                      <span className="font-medium text-foreground">Wednesday – Saturday</span>
                      <span className="font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full text-xs">
                        09:00 – 17:00
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">Sunday</span>
                      <span className="font-semibold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full text-xs">
                        Closed
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-muted-foreground leading-relaxed italic">
                    *Business days are affected by calendar events. We suggest
                    booking an appointment call before you visit.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. How to Reach Us */}
            <div className="rounded-3xl bg-white border border-[color:var(--gold)]/30 p-8 sm:p-10 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 rounded-2xl bg-royal-gradient text-[color:var(--gold)] flex items-center justify-center">
                  <Navigation className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[color:var(--charcoal)]">
                    How to Reach Us
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Transit routes & transport
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* By Road */}
                <div className="p-4 rounded-2xl bg-[color:var(--cream)]/60 border border-border/60">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[color:var(--royal-deep)]">
                    <Car className="h-4 w-4 text-[color:var(--gold-deep)]" />
                    By Road:
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 mt-1 leading-relaxed">
                    We are in Akurdi Pimpri Chinchwad, In World of Mother commercial
                    complex, Close to Hotel Angan, behind Jai Ganesh vision mall in
                    khandoba mal area.
                  </p>
                </div>

                {/* By Metro */}
                <div className="p-4 rounded-2xl bg-[color:var(--cream)]/60 border border-border/60">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[color:var(--royal-deep)]">
                    <Train className="h-4 w-4 text-[color:var(--gold-deep)]" />
                    By Metro:
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 mt-1 leading-relaxed">
                    PCMC Metro Station is approximately 3.5 to 4 km away.
                  </p>
                </div>

                {/* By Public Transport */}
                <div className="p-4 rounded-2xl bg-[color:var(--cream)]/60 border border-border/60">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[color:var(--royal-deep)]">
                    <Bus className="h-4 w-4 text-[color:var(--gold-deep)]" />
                    By Public Transport:
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 mt-1 leading-relaxed">
                    Nearest Bus Stops: Akurdi Chowk Bus Stop or Khandoba Mal / Jai
                    Ganesh Vision Bus Stop (both within 3 to 5 minutes walking
                    distance).
                  </p>
                </div>

                {/* By Cab or Auto */}
                <div className="p-4 rounded-2xl bg-[color:var(--cream)]/60 border border-border/60">
                  <div className="flex items-center gap-2 font-semibold text-sm text-[color:var(--royal-deep)]">
                    <Navigation className="h-4 w-4 text-[color:var(--gold-deep)]" />
                    By Cab or Auto:
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/80 mt-1 leading-relaxed">
                    Uber / Ola / Rapido serve in Akurdi Pimpri Chinchwad. Add{" "}
                    <strong>"World of Mother, Akurdi"</strong> as your dropoff
                    location.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Parking & Peak Traffic + Nearby Landmarks */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Parking Information */}
            <div className="rounded-3xl bg-white border border-[color:var(--gold)]/25 p-7 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-xl bg-gold-gradient text-white flex items-center justify-center">
                  <Car className="h-4 w-4" />
                </div>
                <h4 className="font-display text-xl font-semibold text-[color:var(--charcoal)]">
                  Parking Information
                </h4>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-foreground/80">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Dedicated two-wheeler and four-wheeler visitor parking is
                    available inside the World of Mother complex.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    In Akurdi, traffic peaks at{" "}
                    <strong>Morning Peak: 8:30 AM to 11:00 AM</strong>,{" "}
                    <strong>Evening Peak: 5:30 PM to 8:30 PM</strong> so plan
                    your visit accordingly.
                  </span>
                </li>
              </ul>
            </div>

            {/* Landmarks Nearby */}
            <div className="rounded-3xl bg-white border border-[color:var(--gold)]/25 p-7 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-xl bg-gold-gradient text-white flex items-center justify-center">
                  <Compass className="h-4 w-4" />
                </div>
                <h4 className="font-display text-xl font-semibold text-[color:var(--charcoal)]">
                  Landmarks Nearby
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                {[
                  "World of Mother commercial complex",
                  "Hotel Angan",
                  "Jai Ganesh vision mall",
                  "Khandoba Mal area",
                ].map((landmark) => (
                  <div
                    key={landmark}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[color:var(--cream)]/70 border border-border/50 text-[color:var(--charcoal)] font-medium"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold-deep)]" />
                    <span>{landmark}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- FIND US ON MAP ----------------- */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <SectionEyebrow text="Interactive Map" />
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.08] tracking-tight text-[color:var(--charcoal)]">
                Find Us on Map
              </h2>
              <p className="mt-2 text-muted-foreground text-sm sm:text-base">
                Easily navigate to Nakshikars Studio in Akurdi, Pune.
              </p>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full bg-royal-gradient text-white px-6 py-3 text-xs tracking-[0.16em] uppercase font-semibold hover:scale-105 transition-transform shadow-soft"
            >
              Get Driving Directions <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-[color:var(--gold)]/30 shadow-luxe bg-[color:var(--cream)] h-[450px] sm:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.3728826955303!2d73.7811045751948!3d18.647255982471012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b99d1ab9075d%3A0xb8061b85586d7fd2!2sNakshikar's%20studio!5e0!3m2!1sen!2sin!4v1793084270215!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Nakshikar's Studio Google Map Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ----------------- LOCAL REVIEWS ----------------- */}
      <section className="py-20 sm:py-28 bg-[#0a111e] text-white relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            {/* Header Eyebrow with gold flanking lines */}
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="w-14 sm:w-20 h-px bg-[#c59b48]/60" />
              <span className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#e6b349] font-medium">
                CLIENT TESTIMONIALS
              </span>
              <span className="w-14 sm:w-20 h-px bg-[#c59b48]/60" />
            </div>

            {/* Title with 'local listing' in italic gold */}
            <h2 className="font-display text-[clamp(2.4rem,4.8vw,4.1rem)] leading-[1.08] tracking-tight text-white mb-4">
              Reviews from our{" "}
              <span className="italic font-display text-[#e6b349]">
                local listing
              </span>
            </h2>

            {/* Sub-bar: 5 Stars | Rating description */}
            <div className="flex items-center justify-center gap-3 text-slate-300 text-xs sm:text-sm font-light tracking-wide">
              <div className="flex items-center gap-1 text-[#fbbf24]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24]"
                  />
                ))}
              </div>
              <span className="text-white/30">|</span>
              <span>5.0 Star Rating on Google Maps & Local Directory</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {REVIEWS.map((rev, idx) => (
              <motion.div
                key={rev.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative rounded-[22px] border border-[#c59b48]/45 bg-[#0a1220]/80 backdrop-blur-md p-7 sm:p-8 flex flex-col justify-between overflow-hidden shadow-soft hover:border-[#e6b349]/70 transition-all duration-300 group"
              >
                {/* Artistic corner glow accents matching design */}
                {idx === 0 && (
                  <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-gradient-to-tr from-[#d4af37]/40 via-[#d4af37]/15 to-transparent blur-md pointer-events-none" />
                )}
                {idx === 1 && (
                  <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-gradient-to-bl from-[#d4af37]/40 via-[#d4af37]/15 to-transparent blur-md pointer-events-none" />
                )}
                {idx === 2 && (
                  <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full border border-[#d4af37]/35 bg-gradient-to-tl from-[#d4af37]/30 to-transparent blur-[1px] pointer-events-none" />
                )}

                <div>
                  {/* Top Row: Avatar on Left, Details on Right */}
                  <div className="flex items-center gap-4">
                    <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-[#c59b48] via-[#fae09a] to-[#8a6828] shrink-0 shadow-md">
                      <div className="w-13 h-13 rounded-full bg-[#fcedd7] text-[#111827] font-semibold text-xl flex items-center justify-center font-display">
                        {rev.initial}
                      </div>
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-display font-medium text-lg sm:text-xl text-white tracking-wide">
                        {rev.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5 mb-1.5">
                        <GoogleMapsPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="text-xs text-slate-300 font-light whitespace-nowrap">
                          {rev.tag}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[#fbbf24]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 fill-[#fbbf24] text-[#fbbf24]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div className="border-t border-white/10 my-6" />

                  {/* Quote with gold vertical accent bar and big closing quotes */}
                  <div className="flex items-end justify-between gap-4">
                    <div className="border-l-2 border-[#d4af37] pl-3.5 py-0.5 min-h-[58px] flex items-center">
                      <blockquote className="font-display italic text-white/95 text-base sm:text-[17px] leading-relaxed font-light">
                        "{rev.text}"
                      </blockquote>
                    </div>

                    {/* Large Gold Closing Quotation Mark */}
                    <div className="text-[#c59b48] opacity-80 shrink-0 self-end -mb-1">
                      <svg
                        className="w-9 h-9 fill-current rotate-180"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- FREQUENTLY ASKED QUESTIONS ----------------- */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center mb-14">
            <div className="flex justify-center">
              <SectionEyebrow text="Common Inquiries" />
            </div>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.08] tracking-tight text-[color:var(--charcoal)]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-muted-foreground text-sm sm:text-base">
              Everything you need to know about visiting Nakshikars Studio and booking projects.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-[color:var(--gold)]/25 bg-[color:var(--cream)]/40 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-display text-lg sm:text-xl font-semibold text-[color:var(--royal-deep)] hover:text-[color:var(--gold-deep)] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>
                      {index + 1}. {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 text-[color:var(--gold-deep)] ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-foreground/80 leading-relaxed font-light border-t border-[color:var(--gold)]/15">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------- BOTTOM CTA BANNER ----------------- */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-[color:var(--cream)] via-white to-[color:var(--cream)] border-t border-[color:var(--gold)]/30">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[color:var(--gold-deep)] font-semibold">
            Pune & PCMC Architectural Artistry
          </span>
          <h2 className="mt-3 font-display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight text-[color:var(--charcoal)]">
            Ready to bring custom art into your home or commercial space?
          </h2>
          <p className="mt-4 text-foreground/75 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Schedule an in-person studio visit in Akurdi or request an on-site art
            consultation across Pune, Pimpri Chinchwad, and Mumbai.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-royal-gradient text-white px-8 py-4 text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold shadow-soft hover:scale-105 transition-all duration-300 group"
            >
              <CalendarCheck className="h-4 w-4" />
              Book an Art Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href="tel:9890813587"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold text-[color:var(--royal-deep)] hover:bg-white hover:scale-105 transition-all duration-300 border border-[color:var(--gold)]/40 shadow-sm"
            >
              <Phone className="h-4 w-4 text-[color:var(--gold-deep)]" />
              Call +91 98908 13587
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
