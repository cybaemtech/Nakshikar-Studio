import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowUpRight, Loader2, Sparkles, CheckCircle2, XCircle, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import contactImg from "@/assets/painting.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get custom artworks and murals created | Nakshikar's Studio" },
      { name: "description", content: "Planning a mural, painting, wall art or custom design project? Contact Nakshikars Studio to discuss your residential, commercial or hospitality space in Pune, PCMC & Mumbai." },
      { property: "og:site_name", content: "Nakshikar's Studio" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Get custom artworks and murals created | Nakshikar's Studio" },
      { property: "og:description", content: "Planning a mural, painting, wall art or custom design project? Contact Nakshikars Studio to discuss your residential, commercial or hospitality space in Pune, PCMC & Mumbai." },
      { property: "og:image", content: "https://nakshikarsstudio.com/logo.png" },
      { property: "og:url", content: "https://nakshikarsstudio.com/contact" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              "@id": "https://nakshikarsstudio.com/contact#webpage",
              "url": "https://nakshikarsstudio.com/contact",
              "name": "Get custom artworks and murals created | Nakshikar's Studio",
              "description": "Planning a mural, painting, wall art or custom design project? Contact Nakshikars Studio to discuss your residential, commercial or hospitality space in Pune, PCMC & Mumbai.",
              "isPartOf": {
                "@id": "https://nakshikarsstudio.com/#website"
              },
              "about": {
                "@id": "https://nakshikarsstudio.com/#organization"
              }
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://nakshikarsstudio.com/contact#breadcrumb",
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
                  "name": "Contact Us",
                  "item": "https://nakshikarsstudio.com/contact"
                }
              ]
            }
          ]
        },
      },
    ],
    links: [
      { rel: "canonical", href: "https://nakshikarsstudio.com/contact" },
    ],
  }),
}).update({
  component: Contact,
});

type SubmitStatus = "idle" | "loading" | "success" | "error";

const EMPTY_FORM = { name: "", email: "", phone: "", service: "", message: "" };

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
      {/* Blurred backdrop */}
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
        {/* Card */}
        <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.22)]">

          {/* Top accent bar */}
          <div
            className={`h-1.5 w-full ${isSuccess ? "bg-gold-gradient" : "bg-gradient-to-r from-rose-400 to-rose-600"}`}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="px-10 pt-10 pb-10 text-center space-y-5">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 20, delay: 0.12 }}
              className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${
                isSuccess
                  ? "bg-[color:var(--gold)]/10 border-2 border-[color:var(--gold)]/30"
                  : "bg-rose-50 border-2 border-rose-200"
              }`}
            >
              {isSuccess ? (
                <CheckCircle2 className="w-10 h-10 text-[color:var(--gold-deep)]" strokeWidth={1.5} />
              ) : (
                <XCircle className="w-10 h-10 text-rose-500" strokeWidth={1.5} />
              )}
            </motion.div>

            {/* Heading */}
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

            {/* Details pill (success only) */}
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

            {/* Actions */}
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

function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState(EMPTY_FORM);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
        setErrorMessage(errData.error || `HTTP ${response.status} ${response.statusText}`);
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
    <div className="bg-background min-h-screen pt-24 pb-12 relative">
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

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-12 text-center max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-[color:var(--gold)]/30 shadow-soft">
            <Sparkles className="w-4 h-4 text-[color:var(--gold-deep)]" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[color:var(--royal-deep)]">
              Get In Touch
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight">
            Let's build your{" "}
            <span className="italic text-gradient-gold">masterpiece.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Whether you have a vision in mind or need help discovering one, our
            studio is ready to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch bg-white/90 rounded-[2.5rem] border border-white/50 p-2 sm:p-4 shadow-luxe">

          {/* Left Visual/Info */}
          <div className="relative rounded-[2rem] overflow-hidden group">
            <img
              src={contactImg}
              alt="Studio Art"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--royal-deep)]/90 via-[color:var(--royal-deep)]/40 to-transparent pointer-events-none" />

            <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white">
              <h3 className="font-display text-3xl md:text-4xl mb-6">
                Nakshikar's Studio
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:sandesh.j@nakshikarsstudio.com"
                  className="flex items-center gap-4 hover:text-[color:var(--gold-light)] transition-colors group/link"
                >
                  <div className="h-12 w-12 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-orange-500/30 group-hover/link:scale-110 transition-transform duration-200">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm md:text-base font-medium tracking-wide">
                    sandesh.j@nakshikarsstudio.com
                  </span>
                </a>
                <a
                  href="tel:+919890813587"
                  className="flex items-center gap-4 hover:text-[color:var(--gold-light)] transition-colors group/link"
                >
                  <div className="h-12 w-12 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/30 group-hover/link:scale-110 transition-transform duration-200">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm md:text-base font-medium tracking-wide">
                    +91 98908 13587
                  </span>
                </a>
                <a
                  href="https://share.google/5NnZyJ9qtAQzIplii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:text-[color:var(--gold-light)] transition-colors group/link"
                >
                  <div className="h-12 w-12 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-br from-violet-500 to-purple-700 shadow-lg shadow-purple-500/30 group-hover/link:scale-110 transition-transform duration-200">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm md:text-base font-medium tracking-wide leading-relaxed">
                    Pune, Maharashtra
                    <br />
                    India
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs uppercase tracking-widest font-semibold text-[color:var(--royal-deep)]"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    autoComplete="name"
                    className="w-full border-b-2 border-[color:var(--gold)]/50 px-2 py-3 text-base text-gray-800 outline-none focus:border-[color:var(--gold-deep)] transition-colors bg-white/40"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs uppercase tracking-widest font-semibold text-[color:var(--royal-deep)]"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    autoComplete="email"
                    className="w-full border-b-2 border-[color:var(--gold)]/50 px-2 py-3 text-base text-gray-800 outline-none focus:border-[color:var(--gold-deep)] transition-colors bg-white/40"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-phone"
                      className="text-xs uppercase tracking-widest font-semibold text-[color:var(--royal-deep)]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      autoComplete="tel"
                      className="w-full border-b-2 border-[color:var(--gold)]/50 px-2 py-3 text-base text-gray-800 outline-none focus:border-[color:var(--gold-deep)] transition-colors bg-white/40"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-service"
                      className="text-xs uppercase tracking-widest font-semibold text-[color:var(--royal-deep)]"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="contact-service"
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border-b-2 border-[color:var(--gold)]/50 px-2 py-3 text-base text-gray-800 outline-none focus:border-[color:var(--gold-deep)] transition-colors bg-white/40"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option>Interior Design</option>
                      <option>Branding &amp; Graphic Design</option>
                      <option>Art &amp; Murals</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs uppercase tracking-widest font-semibold text-[color:var(--royal-deep)]"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border-b-2 border-[color:var(--gold)]/50 px-2 py-3 text-base text-gray-800 outline-none focus:border-[color:var(--gold-deep)] transition-colors bg-white/40 resize-none"
                    placeholder="Tell us about your creative vision..."
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full relative overflow-hidden group rounded-2xl bg-[color:var(--royal-deep)] text-white px-8 py-5 text-xs uppercase tracking-[0.2em] font-medium transition-all hover:shadow-luxe disabled:opacity-70 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
