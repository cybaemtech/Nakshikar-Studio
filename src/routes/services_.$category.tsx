import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, Layers, Phone, Sparkles } from "lucide-react";
import { slugToCategory, isValidCategorySlug, categoryToSlug } from "@/lib/categorySlugs";
import { SERVICES_DETAIL_MAP } from "@/data/servicesData";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { LazyImage } from "@/components/LazyImage";

export const Route = createFileRoute("/services_/$category")({
  beforeLoad: ({ params }) => {
    const { category } = params;
    if (!isValidCategorySlug(category)) {
      const resolved = slugToCategory(category);
      if (resolved) {
        const slug = categoryToSlug(resolved);
        throw redirect({
          to: "/services/$category",
          params: { category: slug },
          replace: true,
        } as any);
      }
      throw redirect({
        to: "/services/$category",
        params: { category: "graphics" },
        replace: true,
      } as any);
    }
  },
  head: ({ params }) => {
    const matched = slugToCategory(params.category);
    const categorySlug = matched ? categoryToSlug(matched) : params.category.toLowerCase();
    const service = matched ? SERVICES_DETAIL_MAP[matched] : SERVICES_DETAIL_MAP["Graphics"];
    const canonicalUrl = `https://nakshikarsstudio.com/services/${categorySlug}`;

    return {
      meta: [
        { title: service.seoTitle },
        { name: "description", content: service.metaDescription },
        { property: "og:site_name", content: "Nakshikar's Studio" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: service.seoTitle },
        { property: "og:description", content: service.metaDescription },
        { property: "og:image", content: "https://nakshikarsstudio.com/logo.png" },
        { property: "og:url", content: canonicalUrl },
        {
          "script:ld+json": {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": `${canonicalUrl}#service`,
                name: service.heroTitle,
                description: service.metaDescription,
                provider: {
                  "@id": "https://nakshikarsstudio.com/#organization",
                },
                areaServed: "IN",
                serviceType: matched || "Art & Design Services",
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${canonicalUrl}#breadcrumb`,
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://nakshikarsstudio.com/",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://nakshikarsstudio.com/services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: matched || "Service Detail",
                    item: canonicalUrl,
                  },
                ],
              },
            ],
          },
        },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { category: slug } = Route.useParams();
  const matched = slugToCategory(slug) || "Graphics";
  const service = SERVICES_DETAIL_MAP[matched] || SERVICES_DETAIL_MAP["Graphics"];
  const portfolioSlug = categoryToSlug(matched);

  return (
    <div className="bg-[color:var(--cream)] text-foreground min-h-screen flex flex-col pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="bg-[color:var(--cream)] relative overflow-hidden flex-1 min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] flex items-center py-6 sm:py-8 lg:py-10">
        <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-royal-gradient opacity-15 blur-3xl pointer-events-none" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left Column: Minimalist Information */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <SectionEyebrow text={`Our Services • ${matched}`} />
            <h1 className="font-display text-[clamp(1.9rem,3.2vw,3rem)] leading-[1.12] tracking-tight text-[color:var(--charcoal)]">
              {service.heroTitle}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
              {service.heroSubtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                to="/portfolio/$category"
                params={{ category: portfolioSlug }}
                className="inline-flex items-center gap-2 rounded-full bg-royal-gradient text-white px-7 py-3 text-xs tracking-[0.18em] uppercase font-semibold shadow-luxe hover:scale-[1.03] transition-transform"
              >
                <Layers className="h-4 w-4" /> View {matched} Portfolio
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/60 bg-white/70 backdrop-blur-sm text-[color:var(--royal-deep)] px-7 py-3 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-[color:var(--gold)]/10 transition-colors shadow-soft"
              >
                <Phone className="h-4 w-4 text-[color:var(--gold)]" /> Book Consultation
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden bg-white p-2.5 sm:p-3 shadow-luxe border border-[color:var(--gold)]/25 group w-full max-w-md lg:max-w-none">
              <div className="h-[280px] sm:h-[350px] lg:h-[420px] max-h-[52vh] w-full rounded-2xl overflow-hidden bg-[#f7f5f0] flex items-center justify-center relative">
                <LazyImage
                  src={service.image}
                  alt={service.heroTitle}
                  width={900}
                  height={900}
                  isPriority={true}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  containerClassName="w-full h-full flex items-center justify-center"
                />
                <div className="absolute top-4 left-4 text-white text-[10px] tracking-[0.2em] uppercase bg-black/65 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 z-10">
                  {matched}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionEyebrow text="Core Disciplines" />
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.2rem)] leading-tight tracking-tight text-[color:var(--charcoal)] mb-4">
              What We Deliver in <span className="italic text-gradient-gold font-normal">{matched}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every deliverable is crafted in our Pune studio with custom specifications, premium materials, and meticulous finishing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.offerings.map((offering, idx) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl p-8 bg-[color:var(--cream)] border border-[color:var(--gold)]/20 hover:border-[color:var(--gold)]/60 transition-all duration-300 hover:shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-9 w-9 rounded-full bg-gold-gradient text-white flex items-center justify-center font-semibold text-xs shadow-soft">
                      {idx + 1}
                    </span>
                    <h3 className="font-display text-2xl text-[color:var(--charcoal)]">
                      {offering.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {offering.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[color:var(--gold)]/15">
                  {offering.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[11px] font-medium bg-white text-[color:var(--royal-deep)] border border-[color:var(--gold)]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-28 bg-[color:var(--charcoal)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[color:var(--gold)] font-semibold mb-3 inline-block">
              Our Process
            </span>
            <h2 className="font-display text-[clamp(2rem,3.8vw,3.2rem)] leading-tight tracking-tight text-white mb-4">
              From Concept to Flawless Completion
            </h2>
            <p className="text-white/70 leading-relaxed">
              A structured creative journey ensuring transparency, material fidelity, and impeccable execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-[color:var(--gold)]/40 transition-colors backdrop-blur-sm"
              >
                <div className="text-[color:var(--gold)] font-mono text-2xl font-bold mb-3">
                  {step.step}
                </div>
                <h4 className="font-display text-xl text-white mb-2">{step.title}</h4>
                <p className="text-white/70 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio CTA Strip */}
      <section className="py-16 bg-gold-gradient text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl text-white font-medium mb-2">
              Ready to see our {matched} artwork?
            </h3>
            <p className="text-white/90 text-sm sm:text-base max-w-xl">
              Browse our curated portfolio of completed {matched.toLowerCase()} projects created for clients across Pune and Mumbai.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/portfolio/$category"
              params={{ category: portfolioSlug }}
              className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--royal-deep)] px-7 py-3.5 text-xs tracking-[0.18em] uppercase font-bold shadow-luxe hover:bg-[#faf8f5] transition-colors"
            >
              Explore {matched} Gallery <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-black/25 border border-white/40 text-white px-7 py-3.5 text-xs tracking-[0.18em] uppercase font-semibold hover:bg-black/35 transition-colors"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
