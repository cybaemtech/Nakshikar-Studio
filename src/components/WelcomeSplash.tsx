import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.webp";
import logoSm from "@/assets/logo-sm.webp";

export function WelcomeSplash() {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window === "undefined") return false;
    const win = window as unknown as { __SPLASH_HANDLED_BY_HTML__?: boolean };
    if (win.__SPLASH_HANDLED_BY_HTML__) {
      return false;
    }
    const isHome = window.location.pathname === "/" || window.location.pathname === "";
    const hasSeen = sessionStorage.getItem("nakshikar_splash_seen");
    return isHome && !hasSeen;
  });

  useEffect(() => {
    if (!showSplash) return;
    try {
      sessionStorage.setItem("nakshikar_splash_seen", "true");
    } catch {
      // Ignore storage access errors in restricted browsing modes
    }
    // Timer to finish animation and unveil website (~1.85s total with 0.45s exit)
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, [showSplash]);

  const welcomeWords = ["Welcome", "to"];

  return (
    <AnimatePresence>
      {showSplash && (
        <m.div
          key="welcome-splash"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0.9 }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[color:var(--cream)] text-[color:var(--charcoal)] overflow-hidden select-none"
        >
          {/* Ambient decorative lighting blobs */}
          <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-gold-gradient opacity-20 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-[450px] w-[450px] rounded-full bg-royal-gradient opacity-25 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
            {/* Line 1: "Welcome to" Word by Word */}
            <div className="flex flex-wrap justify-center gap-3 mb-3 text-xs sm:text-sm tracking-[0.35em] uppercase font-semibold text-[color:var(--gold-deep)]">
              {welcomeWords.map((word, i) => (
                <span key={`w1-${i}`} className="inline-block overflow-hidden py-1">
                  <m.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.05 + i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {word}
                  </m.span>
                </span>
              ))}
            </div>

            {/* Logo replacing text */}
            <m.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.45,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="my-8 flex justify-center items-center w-full"
            >
              <img
                src={logoSm}
                srcSet={`${logoSm} 400w, ${logo} 640w`}
                sizes="(max-width: 639px) 320px, 560px"
                alt="Nakshikar's Studio"
                className="h-24 xs:h-32 sm:h-40 md:h-52 lg:h-64 w-auto object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
              />
            </m.div>

            {/* Subline Tagline Devanagari Reveal */}
            <m.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-6 font-devanagari text-lg sm:text-xl text-[color:var(--royal-deep)] tracking-wide"
            >
              जिथे नक्षी जन्मा येते.
            </m.p>

            {/* Subtle Progress Bar */}
            <div className="w-48 h-[2px] bg-[color:var(--charcoal)]/10 rounded-full mt-10 overflow-hidden relative">
              <m.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.15, delay: 0.1, ease: "easeInOut" }}
                className="h-full bg-gold-gradient w-full"
              />
            </div>
          </div>

          {/* Quick Skip button */}
          <m.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            onClick={() => setShowSplash(false)}
            className="absolute bottom-8 right-8 text-[11px] uppercase tracking-[0.25em] text-[color:var(--charcoal)]/80 hover:text-[color:var(--charcoal)] transition-colors py-2 px-4 rounded-full border border-[color:var(--charcoal)]/10 glass"
          >
            Enter Studio ➔
          </m.button>
        </m.div>
      )}
    </AnimatePresence>
  );
}
