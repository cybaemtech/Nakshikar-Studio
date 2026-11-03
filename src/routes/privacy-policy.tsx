import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";
import { Eye, Database, Lock, Cookie, ShieldCheck, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Nakshikar's Studio" },
      {
        name: "description",
        content:
          "Read the Privacy Policy of Nakshikar's Studio. Learn how we handle client consultations, protect personal information, and safeguard custom design inquiries across Pune, PCMC, and Mumbai.",
      },
      { property: "og:site_name", content: "Nakshikar's Studio" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Privacy Policy | Nakshikar's Studio" },
      {
        property: "og:description",
        content:
          "Read the Privacy Policy of Nakshikar's Studio. Learn how we handle client consultations, protect personal information, and safeguard custom design inquiries across Pune, PCMC, and Mumbai.",
      },
      { property: "og:image", content: "https://nakshikarsstudio.com/logo.png" },
      { property: "og:url", content: "https://nakshikarsstudio.com/privacy-policy" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Privacy Policy | Nakshikar's Studio" },
      {
        name: "twitter:description",
        content:
          "Read the Privacy Policy of Nakshikar's Studio. Learn how we handle client consultations, protect personal information, and safeguard custom design inquiries across Pune, PCMC, and Mumbai.",
      },
      { name: "twitter:image", content: "https://nakshikarsstudio.com/logo.png" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": "https://nakshikarsstudio.com/privacy-policy#webpage",
              "url": "https://nakshikarsstudio.com/privacy-policy",
              "name": "Privacy Policy | Nakshikar's Studio",
              "description":
                "Read the Privacy Policy of Nakshikar's Studio. Learn how we handle client consultations, protect personal information, and safeguard custom design inquiries across Pune, PCMC, and Mumbai.",
              "isPartOf": {
                "@id": "https://nakshikarsstudio.com/#website",
              },
              "about": {
                "@id": "https://nakshikarsstudio.com/#organization",
              },
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: "https://nakshikarsstudio.com/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [pathD, setPathD] = useState<string>("");

  const policySections = [
    {
      num: "01",
      icon: Eye,
      title: "Information We Collect",
      summary: "We only collect information necessary to understand your creative needs and deliver bespoke art and branding solutions.",
      offsetClass: "translate-x-3 sm:translate-x-5",
      points: [
        {
          label: "Contact Details",
          text: "Your name, email address, phone number, and city when submitted via inquiry forms or direct messages.",
        },
        {
          label: "Project Specifications",
          text: "Architectural floor plans, reference photographs, wall dimensions, and custom artistic preferences shared for estimates.",
        },
        {
          label: "Technical Analytics",
          text: "Anonymous device and browser data, general geolocation, and pages viewed to ensure smooth website performance.",
        },
      ],
    },
    {
      num: "02",
      icon: Database,
      title: "How We Use Your Information",
      summary: "Your data is used solely to provide consultations and fulfill commissioned artwork.",
      offsetClass: "translate-x-5 sm:translate-x-8",
      points: [
        {
          text: "Preparing personalized quotes, moodboards, and material proposals.",
        },
        {
          text: "Coordinating on-site measurements, painting installations, and logistics across Pune, PCMC, and Mumbai.",
        },
        {
          text: "Providing ongoing customer support and milestone updates during project execution.",
        },
        {
          text: "We never sell, rent, or trade your personal information to third-party advertisers or data brokers.",
        },
      ],
    },
    {
      num: "03",
      icon: Lock,
      title: "Design Confidentiality & Data Security",
      summary: "We protect both your personal records and your bespoke artistic concepts.",
      offsetClass: "translate-x-0 sm:translate-x-1",
      points: [
        {
          label: "Confidential Project Data",
          text: "Proprietary architectural drawings, private residential photography, and preliminary branding marks are kept strictly confidential.",
        },
        {
          label: "Security Measures",
          text: "Secure HTTPS encryption, restricted internal access, and regular digital reviews ensure your information remains protected.",
        },
      ],
    },
    {
      num: "04",
      icon: Cookie,
      title: "Cookies & Web Analytics",
      summary: "We employ minimal web technologies to maintain site performance and speed.",
      offsetClass: "translate-x-4 sm:translate-x-7",
      points: [
        {
          label: "Essential Cookies",
          text: "Facilitate seamless navigation, responsive layout scaling, and fast media delivery.",
        },
        {
          label: "Performance Analytics",
          text: "Aggregated insights via Google Analytics/Tag Manager to understand user journeys without identifying individuals.",
        },
        {
          text: "You may disable cookies at any time through your browser settings without losing access to our core website content.",
        },
      ],
    },
    {
      num: "05",
      icon: ShieldCheck,
      title: "Your Rights & Choices",
      summary: "You maintain full authority over the personal information you have shared with us.",
      offsetClass: "translate-x-0 sm:translate-x-2",
      points: [
        {
          label: "Review or Update",
          text: "You can request access to or updates of your contact details at any point.",
        },
        {
          label: "Data Deletion",
          text: "You can ask us to permanently delete your contact history or past inquiries from our database.",
        },
        {
          label: "Opt-Out",
          text: "You can unsubscribe from any periodic project updates or studio journals with a single message.",
        },
      ],
    },
  ];

  // Dynamically compute exact SVG spline passing through the true centers of all 5 badges
  const updateSplinePath = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const points: { x: number; y: number }[] = [];

    badgeRefs.current.forEach((badge) => {
      if (!badge) return;
      const rect = badge.getBoundingClientRect();
      points.push({
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top + rect.height / 2,
      });
    });

    if (points.length < 5) return;

    // Start gracefully from the top-left above badge 0
    const startX = points[0].x - 55;
    const startY = Math.max(0, points[0].y - 95);

    let d = `M ${startX.toFixed(1)} ${startY.toFixed(1)} `;
    d += `C ${(startX + 25).toFixed(1)} ${(startY + 40).toFixed(1)}, ${(points[0].x - 12).toFixed(1)} ${(points[0].y - 30).toFixed(1)}, ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)} `;

    // Spline through all points with organic wave flow
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const dy = p2.y - p1.y;

      // Gentle curve bulge matching reference image
      const waveBulge = i === 0 ? 18 : i === 1 ? -16 : i === 2 ? 18 : -14;
      const cp1x = (p1.x + waveBulge).toFixed(1);
      const cp1y = (p1.y + dy * 0.35).toFixed(1);
      const cp2x = (p2.x + waveBulge * 0.75).toFixed(1);
      const cp2y = (p1.y + dy * 0.72).toFixed(1);

      d += `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)} `;
    }

    // Gentle trail past badge 5
    const last = points[points.length - 1];
    d += `C ${(last.x - 6).toFixed(1)} ${(last.y + 40).toFixed(1)}, ${(last.x + 14).toFixed(1)} ${(last.y + 75).toFixed(1)}, ${(last.x + 22).toFixed(1)} ${(last.y + 110).toFixed(1)}`;

    setPathD(d);
  }, []);

  useEffect(() => {
    // Initial calculation with a slight delay to ensure layout has stabilized
    const timer = setTimeout(updateSplinePath, 50);
    window.addEventListener("resize", updateSplinePath);

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && containerRef.current) {
      ro = new ResizeObserver(updateSplinePath);
      ro.observe(containerRef.current);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateSplinePath);
      ro?.disconnect();
    };
  }, [updateSplinePath]);

  return (
    <div className="bg-[#fcfbfa] min-h-screen text-foreground relative overflow-hidden">
      {/* Top ambient warm gold glow */}
      <div className="absolute top-0 right-0 h-[450px] w-[450px] rounded-full bg-gold-gradient opacity-15 blur-3xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
        {/* Eyebrow Header with line */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] uppercase text-[#c59a3f]">
            TRANSPARENCY & TRUST
          </span>
          <div className="h-[1px] w-14 bg-[#c59a3f]/40" />
        </div>

        {/* Page Title */}
        <h1 className="font-display text-[clamp(2.5rem,4.8vw,3.8rem)] font-normal leading-[1.08] tracking-tight text-[color:var(--charcoal)] mb-4">
          Privacy Policy
        </h1>

        {/* Intro Paragraph */}
        <p className="text-[0.95rem] sm:text-[1.05rem] text-muted-foreground leading-relaxed max-w-3xl mb-4">
          At Nakshikar's Studio, we value the trust you place in us when sharing your project visions, floor plans, and contact details. This policy explains clearly and transparently how your information is respected and protected.
        </p>

        {/* Last Updated Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#e4ded3] px-3.5 py-1 text-xs text-[#555] shadow-xs mb-12 sm:mb-16">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c59a3f]" />
          <span>Last Updated: November 2026</span>
        </div>

        {/* Timeline & Policy List Container with exact dynamic curve */}
        <div ref={containerRef} className="relative">
          {/* Dynamic SVG Spline that pierces the exact center of every badge */}
          {pathD && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
              fill="none"
            >
              <path
                d={pathD}
                stroke="#dfb25e"
                strokeWidth="1.65"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          )}

          {/* Sections 01 to 05 */}
          <div className="space-y-0">
            {policySections.map((sec, idx) => {
              const Icon = sec.icon;
              const isLast = idx === policySections.length - 1;
              return (
                <div
                  key={sec.num}
                  className={`flex flex-col sm:flex-row items-start gap-5 sm:gap-8 pt-8 sm:pt-10 ${
                    !isLast ? "border-b border-[#ece7dc] pb-10 sm:pb-12" : "pb-6"
                  }`}
                >
                  {/* Glowing Circular Badge on the Timeline */}
                  <div className="relative z-10 flex sm:flex-col items-center shrink-0 w-16 sm:w-20">
                    <div
                      ref={(el) => {
                        badgeRefs.current[idx] = el;
                      }}
                      className={`w-12 h-12 rounded-full bg-[#fdfaf3] border border-[#e8dfcf] shadow-[0_0_24px_6px_rgba(230,165,45,0.22)] flex items-center justify-center text-[#c59a3f] shrink-0 transition-transform duration-300 hover:scale-105 ${sec.offsetClass}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="flex-1 space-y-2.5">
                    {/* Header: 01 / Title */}
                    <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1">
                      <span className="font-display italic text-4xl sm:text-5xl text-[#c59a3f] font-light select-none tracking-tight">
                        {sec.num}
                      </span>
                      <span className="font-display text-3xl sm:text-4xl text-[#d4af65]/70 font-light select-none">
                        /
                      </span>
                      <h2 className="font-display text-2xl sm:text-[1.95rem] font-medium text-[color:var(--charcoal)] tracking-tight">
                        {sec.title}
                      </h2>
                    </div>

                    {/* Summary */}
                    <p className="text-sm sm:text-[0.975rem] text-muted-foreground leading-relaxed max-w-4xl pt-0.5">
                      {sec.summary}
                    </p>

                    {/* Bullet Points with Solid Gold Checkmarks */}
                    <ul className="space-y-2.5 pt-2 max-w-4xl">
                      {sec.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2.5 text-sm sm:text-[0.975rem] text-[#383838] leading-relaxed"
                        >
                          <div className="h-4 w-4 rounded-full bg-[#f6a824] flex items-center justify-center shrink-0 mt-1 shadow-xs">
                            <svg
                              viewBox="0 0 12 12"
                              className="w-2.5 h-2.5 text-white stroke-[2.5] stroke-current fill-none"
                            >
                              <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                            </svg>
                          </div>
                          <span>
                            {pt.label && (
                              <strong className="font-semibold text-[color:var(--charcoal)]">
                                {pt.label}:{" "}
                              </strong>
                            )}
                            {pt.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section 06: Dark Royal Banner with Curved Organic Wave */}
      <div className="relative mt-8">
        {/* Organic Curved Wave Header */}
        <div className="relative w-full overflow-hidden leading-none -mb-[1px]">
          <svg
            viewBox="0 0 1440 110"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-14 sm:h-20 lg:h-24 block"
          >
            {/* Gold silk ribbon accent flourishing along the crest */}
            <path
              d="M0,65 C340,115 720,15 1100,45 C1260,56 1370,30 1440,20 L1440,110 L0,110 Z"
              fill="url(#goldSilkRibbon)"
              opacity="0.45"
            />
            {/* Main Dark Royal Deep Curve */}
            <path
              d="M0,72 C380,125 760,25 1120,52 C1270,62 1375,38 1440,28 L1440,110 L0,110 Z"
              fill="#07152b"
            />
            <defs>
              <linearGradient id="goldSilkRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#07152b" stopOpacity="0" />
                <stop offset="50%" stopColor="#d49929" stopOpacity="0.75" />
                <stop offset="85%" stopColor="#f5ca68" stopOpacity="1" />
                <stop offset="100%" stopColor="#d49929" stopOpacity="0.85" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Section 06 Body */}
        <div className="bg-[#07152b] text-white pt-2 pb-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* 06 / Title */}
            <div className="flex items-baseline flex-wrap gap-x-3 gap-y-1">
              <span className="font-display italic text-5xl sm:text-6xl text-[#c59a3f] font-light select-none tracking-tight">
                06
              </span>
              <span className="font-display text-3xl sm:text-4xl text-[#d4af65]/70 font-light select-none">
                /
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-white tracking-tight">
                Contact & Studio Inquiries
              </h2>
            </div>

            {/* Subtitles */}
            <div className="space-y-1.5">
              <p className="text-sm sm:text-[0.975rem] text-white/85">
                Have questions regarding your data or wish to update your records?
              </p>
              <p className="text-sm sm:text-[0.975rem] font-semibold text-[#f0b73c]">
                Reach out directly to the studio team. We are committed to resolving any privacy questions promptly.
              </p>
            </div>

            {/* Contact row with dividers */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-5 sm:gap-x-7 text-sm sm:text-[0.975rem] text-white/90 pt-2">
              <a
                href="mailto:sandesh.j@nakshikarsstudio.com"
                className="inline-flex items-center gap-2 hover:text-[#f0b73c] transition-colors"
              >
                <div className="h-6 w-6 rounded bg-white/10 flex items-center justify-center text-[#f0b73c] shrink-0">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span>sandesh.j@nakshikarstudio.com</span>
              </a>
              <span className="text-white/25 hidden sm:inline">|</span>
              <a
                href="tel:+919890813587"
                className="inline-flex items-center gap-2 hover:text-[#f0b73c] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#f0b73c] shrink-0" />
                <span>+91 9880813587</span>
              </a>
              <span className="text-white/25 hidden sm:inline">|</span>
              <div className="inline-flex items-center gap-2 text-white/85">
                <MapPin className="h-4 w-4 text-[#f0b73c] shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="border-t border-white/15 pt-6 mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 text-xs text-white/70">
                <div className="h-4 w-4 rounded-full bg-[#f6a824] flex items-center justify-center shrink-0 shadow-xs">
                  <svg
                    viewBox="0 0 12 12"
                    className="w-2.5 h-2.5 text-white stroke-[2.5] stroke-current fill-none"
                  >
                    <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                  </svg>
                </div>
                <span>Operating in full compliance with digital personal data protection standards.</span>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d49929] via-[#e5aa32] to-[#ecb33e] text-[#1a1205] font-bold px-7 py-2.5 text-xs tracking-wider uppercase hover:opacity-95 shadow-lg transition-opacity"
              >
                CONTACT STUDIO <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
