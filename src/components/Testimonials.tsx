import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionEyebrow } from "@/components/SectionEyebrow";

const TESTIMONIALS = [
  {
    name: "Rohit & Sneha Patil",
    role: "Private Residence, Pune",
    quote: "Our living room mural is the soul of the home. Every guest stops to admire it, the craftsmanship is impeccable.",
  },
  {
    name: "Aditya Sharma",
    role: "Founder, Aurum Hospitality",
    quote: "From the lobby murals to our brand identity, Nakshikar's translated our vision into something timeless and unmistakably premium.",
  },
  {
    name: "Priya Deshmukh",
    role: "Principal Architect",
    quote: "A rare studio that genuinely collaborates. Their attention to detail across mediums, paint, metal, print, is exceptional.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[i];

  return (
    <section className="pt-8 pb-28 sm:pt-12 sm:pb-36 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center mb-14">
          <div className="flex justify-center"><SectionEyebrow text="Client Stories" /></div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[1.02] tracking-tight max-w-3xl mx-auto">
            Loved by{" "}
            <span className="italic text-gradient-gold">homeowners,</span> hotels & brands.
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-3xl bg-[color:var(--cream)] border border-[color:var(--gold)]/30 p-8 sm:p-14 overflow-hidden shadow-soft">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold-gradient opacity-20 blur-3xl" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="relative text-center max-w-3xl mx-auto py-2"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-royal-gradient text-white shadow-luxe mb-6">
                <Quote className="h-6 w-6 text-[color:var(--gold)]" />
              </div>
              <p className="font-display text-xl sm:text-2xl lg:text-3xl leading-relaxed text-[color:var(--charcoal)] mb-8">
                "{t.quote}"
              </p>
              <div>
                <div className="font-display text-xl sm:text-2xl text-[color:var(--royal-deep)]">{t.name}</div>
                <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground mt-1">{t.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-2 mt-10">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-10 bg-royal-gradient" : "w-4 bg-[color:var(--gold)]/40"
                }`}
                aria-label={`Testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

