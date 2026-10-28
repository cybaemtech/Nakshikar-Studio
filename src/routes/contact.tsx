import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  ArrowUpRight,
  Loader2,
  Sparkles,
  CheckCircle2,
  XCircle,
  X,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import contactImg from "@/assets/painting.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get custom artworks and murals created | Nakshikar's Studio" },
      {
        name: "description",
        content:
          "Planning a mural, painting, wall art or custom design project? Contact Nakshikars Studio to discuss your residential, commercial or hospitality space in Pune, PCMC & Mumbai.",
      },
      { property: "og:site_name", content: "Nakshikar's Studio" },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content: "Get custom artworks and murals created | Nakshikar's Studio",
      },
      {
        property: "og:description",
        content:
          "Planning a mural, painting, wall art or custom design project? Contact Nakshikars Studio to discuss your residential, commercial or hospitality space in Pune, PCMC & Mumbai.",
      },
      { property: "og:image", content: "https://nakshikarsstudio.com/logo.png" },
      { property: "og:url", content: "https://nakshikarsstudio.com/contact" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              "@id": "https://nakshikarsstudio.com/contact#webpage",
              url: "https://nakshikarsstudio.com/contact",
              name: "Get custom artworks and murals created | Nakshikar's Studio",
              description:
                "Planning a mural, painting, wall art or custom design project? Contact Nakshikars Studio to discuss your residential, commercial or hospitality space in Pune, PCMC & Mumbai.",
              isPartOf: {
                "@id": "https://nakshikarsstudio.com/#website",
              },
              about: {
                "@id": "https://nakshikarsstudio.com/#organization",
              },
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://nakshikarsstudio.com/contact#breadcrumb",
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
                  name: "Contact Us",
                  item: "https://nakshikarsstudio.com/contact",
                },
              ],
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: "https://nakshikarsstudio.com/contact" }],
  }),
}).update({
  component: Contact,
});

type SubmitStatus = "idle" | "loading" | "success" | "error";

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function StatusPopup({
  status,
  errorMessage,
  onClose,
  onRetry,
}: {
  status: "success" | "error";
  errorMessage: string | null;
  onClose: () => void;
  onRetry: () => void;
}) {
  const isSuccess = status === "success";

  return (
    <motion.div
      key="popup-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[color:var(--royal-deep)]/60 backdrop-blur-sm" />

      <motion.div
        key="popup-card"
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 16 }}
        transition={{ type: "spring", stiffness: 340, damping: 28 }}
        className="relative z-10 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.22)]">
          <div
            className={`h-1.5 w-full ${isSuccess
                ? "bg-gold-gradient"
                : "bg-gradient-to-r from-rose-400 to-rose-600"
              }`}
          />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="px-10 pt-10 pb-10 text-center space-y-5">
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 20,
                delay: 0.12,
              }}
              className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${isSuccess
                  ? "bg-[color:var(--gold)]/10 border-2 border-[color:var(--gold)]/30"
                  : "bg-rose-50 border-2 border-rose-200"
                }`}
            >
              {isSuccess ? (
                <CheckCircle2
                  className="w-10 h-10 text-[color:var(--gold-deep)]"
                  strokeWidth={1.5}
                />
              ) : (
                <XCircle className="w-10 h-10 text-rose-500" strokeWidth={1.5} />
              )}
            </motion.div>

            <div className="space-y-2">
              <h3 className="font-display text-3xl text-[color:var(--royal-deep)]">
                {isSuccess ? "Inquiry Sent!" : "Sending Failed"}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {isSuccess
                  ? "Your message has been delivered to Nakshikar's Studio. Sandesh will review it and get back to you within 1 business day."
                  : "We couldn't deliver your message right now. Please try again or email us directly."}
              </p>
              {!isSuccess && errorMessage && (
                <div className="mt-2 p-3 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-xs font-mono text-left break-all max-h-36 overflow-y-auto">
                  <strong>Error details:</strong> {errorMessage}
                </div>
              )}
            </div>

            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="inline-flex items-center gap-2 bg-[color:var(--gold)]/8 border border-[color:var(--gold)]/20 rounded-full px-4 py-2"
              >
                <Mail className="w-3.5 h-3.5 text-[color:var(--gold-deep)]" />
                <span className="text-xs font-medium text-[color:var(--royal-deep)] tracking-wide">
                  sandesh.j@nakshikarsstudio.com
                </span>
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {isSuccess ? (
                <>
                  <button
                    onClick={onClose}
                    className="flex-1 bg-[color:var(--royal-deep)] text-white rounded-xl py-3.5 text-xs uppercase tracking-[0.15em] font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    Done
                  </button>
                  <button
                    onClick={onRetry}
                    className="flex-1 border border-[color:var(--gold)]/40 text-[color:var(--royal-deep)] rounded-xl py-3.5 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[color:var(--gold)]/5 transition-colors"
                  >
                    New Message
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={onRetry}
                    className="flex-1 bg-[color:var(--royal-deep)] text-white rounded-xl py-3.5 text-xs uppercase tracking-[0.15em] font-semibold hover:shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    Try Again
                  </button>
                  <a
                    href="mailto:sandesh.j@nakshikarsstudio.com"
                    className="flex-1 text-center border border-gray-200 text-gray-600 rounded-xl py-3.5 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Email Directly
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function LocationPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <mask id="contact-pin-hole-mask">
        <rect width="24" height="24" fill="white" />
        <circle cx="12" cy="9.5" r="3.2" fill="black" />
      </mask>
      <path
        d="M12 2C7.8 2 4.4 5.4 4.4 9.6c0 5.4 6.8 11.5 7.1 11.75.28.25.72.25 1 0 .3-.25 7.1-6.35 7.1-11.75C19.6 5.4 16.2 2 12 2Z"
        fill="currentColor"
        mask="url(#contact-pin-hole-mask)"
      />
    </svg>
  );
}

function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState(EMPTY_FORM);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        const errData = await response.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(
          errData.error || `HTTP ${response.status} ${response.statusText}`
        );
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Network request failed");
    }
  };

  const closePopup = () => {
    setStatus("idle");
    setErrorMessage(null);
  };

  const resetAndClose = () => {
    setFormData(EMPTY_FORM);
    setStatus("idle");
    setErrorMessage(null);
  };

  return (
    <div className="bg-[#fcfaf7] min-h-screen pt-28 pb-20 relative">
      {/* Status popup */}
      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <StatusPopup
            status={status}
            errorMessage={errorMessage}
            onClose={closePopup}
            onRetry={resetAndClose}
          />
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-12 text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[color:var(--gold)]/35 shadow-soft">
            <Sparkles className="w-3.5 h-3.5 text-[color:var(--gold)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[color:var(--royal-deep)]">
              Get In Touch
            </span>
          </div>

          <h1 className="font-display text-[clamp(1.75rem,4.2vw,3.6rem)] font-medium tracking-tight text-[color:var(--charcoal)] whitespace-nowrap">
            Let's build your{" "}
            <span className="italic font-serif text-gradient-gold">
              masterpiece.
            </span>
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Whether you have a vision in mind or need help discovering one, our
            studio is ready to bring your ideas to life.
          </p>
        </div>

        {/* Top Card: Visual + Inquiry Form */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-luxe border border-gray-100 grid lg:grid-cols-12 items-stretch">
          {/* Left Column: Full-Bleed Visual Card */}
          <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[460px] lg:min-h-full overflow-hidden group">
            <img
              src={contactImg}
              alt="Nakshikar's Studio Craftsmanship"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 text-white z-10">
              <h3 className="font-display text-3xl sm:text-4xl text-white tracking-tight">
                Nakshikar's{" "}
                <span className="italic font-serif text-gradient-gold">
                  Studio
                </span>
              </h3>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--gold-light)] mt-2" />
            </div>
          </div>

          {/* Right Column: Send Us A Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-12 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[color:var(--gold)]" />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[color:var(--gold)]">
                  Send Us A Message
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-[color:var(--charcoal)] tracking-tight">
                Tell us about your{" "}
                <span className="italic font-serif text-gradient-gold font-normal">
                  idea.
                </span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Share your project details and we'll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-gray-800"
                  >
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-[color:var(--royal-deep)] focus:ring-1 focus:ring-[color:var(--royal-deep)] outline-none transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-gray-800"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    autoComplete="email"
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-[color:var(--royal-deep)] focus:ring-1 focus:ring-[color:var(--royal-deep)] outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-semibold text-gray-800"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-[color:var(--royal-deep)] focus:ring-1 focus:ring-[color:var(--royal-deep)] outline-none transition-all shadow-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-semibold text-gray-800"
                  >
                    Service of Interest
                  </label>
                  <div className="relative">
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-[color:var(--royal-deep)] focus:ring-1 focus:ring-[color:var(--royal-deep)] outline-none transition-all shadow-sm pr-10 cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="Paintings">Paintings</option>
                      <option value="Murals">Murals</option>
                      <option value="Wall Design">Wall Design</option>
                      <option value="Graphics">Graphics & Branding</option>
                      <option value="Nameplates">Nameplates</option>
                      <option value="Interior Support">Interior Support</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-gray-800"
                >
                  Project Details
                </label>
                <div className="relative">
                  <textarea
                    id="contact-message"
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    maxLength={500}
                    placeholder="Tell us about your creative vision..."
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-[color:var(--royal-deep)] focus:ring-1 focus:ring-[color:var(--royal-deep)] outline-none transition-all shadow-sm resize-none pb-7"
                  />
                  <span className="absolute right-3 bottom-2.5 text-[11px] text-gray-400 font-mono">
                    {formData.message.length}/500
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full rounded-xl bg-[#09112a] hover:bg-[#121c40] text-white py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all hover:shadow-luxe disabled:opacity-70 cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Submit Inquiry <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section: Studio Visit & Map */}
        <div className="mt-16 sm:mt-20 space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[color:var(--gold)]" />
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[color:var(--gold)]">
                Visit Our Studio
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[color:var(--charcoal)] tracking-tight">
              Visit Our Studio in{" "}
              <span className="italic font-serif text-gradient-gold">
                Pune.
              </span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
              Visit our studio in Akurdi, Pune for personal consultations, live
              material previews, and custom artwork commissions.
            </p>
          </div>

          {/* Contact Info in 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Card 1: Office Address */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-soft hover:shadow-md transition-all flex flex-col gap-4">
              <div className="h-11 w-11 rounded-full bg-[#fdf3e2] text-[#d49938] flex items-center justify-center shrink-0 shadow-sm">
                <LocationPinIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--charcoal)] mb-1.5">
                  Office Address
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Akurdi, Pimpri-Chinchwad, Maharashtra, Pune-411035, India
                </p>
              </div>
            </div>

            {/* Card 2: Call Us */}
            <a
              href="tel:+919890813587"
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-soft hover:shadow-md transition-all flex flex-col gap-4 group hover:border-[color:var(--gold)]/40"
            >
              <div className="h-11 w-11 rounded-full bg-[#fdf3e2] text-[#d49938] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--charcoal)] mb-1.5">
                  Call Us
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-medium group-hover:text-[color:var(--gold-deep)] transition-colors">
                  +91 98908 13587
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Available Mon - Sat for inquiries
                </p>
              </div>
            </a>

            {/* Card 3: Email Us */}
            <a
              href="mailto:sandesh.j@nakshikarsstudio.com"
              className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-soft hover:shadow-md transition-all flex flex-col gap-4 group hover:border-[color:var(--gold)]/40"
            >
              <div className="h-11 w-11 rounded-full bg-[#fdf3e2] text-[#d49938] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--charcoal)] mb-1.5">
                  Email Us
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-medium group-hover:text-[color:var(--gold-deep)] transition-colors">
                  sandesh.j@nakshikarsstudio.com
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  We reply within 24 hours
                </p>
              </div>
            </a>
          </div>

          {/* Map Below Cards */}
          <div className="space-y-4 pt-2">
            <div className="rounded-3xl overflow-hidden border border-gray-200/90 shadow-luxe bg-white h-[380px] sm:h-[450px] w-full relative">
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

            <div className="flex justify-start">
              {/* <a
                href="https://maps.google.com/?q=Office.+No+A+22,+World+Of+Mother,+behind+JAI+GANESH+VISION,+near+Aagan+hotel,+Shubhashri+Residency,+Ganga+Nagar,+Akurdi,+Pimpri-Chinchwad,+Maharashtra+411035"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#e5aa42] hover:bg-[#d89d38] text-[color:var(--charcoal)] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] shadow-sm hover:shadow transition-all"
              >
                <ExternalLink className="h-4 w-4" /> Open in Google Maps ↗
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
