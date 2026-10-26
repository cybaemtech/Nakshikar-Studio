import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

export function WelcomeSplash() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Timer to finish animation and unveil website
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  const welcomeWords = ["Welcome", "to"];

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="welcome-splash"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", opacity: 0.9 }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
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
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + i * 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </div>

            {/* Logo replacing text */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="my-8 flex justify-center items-center w-full"
            >
              <img 
                src={logo} 
                alt="Nakshikar's Studio" 
                className="h-24 xs:h-32 sm:h-40 md:h-52 lg:h-64 w-auto object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)]" 
              />
            </motion.div>

            {/* Subline Tagline Devanagari Reveal */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.7 }}
              className="mt-6 font-devanagari text-lg sm:text-xl text-[color:var(--royal-deep)] tracking-wide opacity-90"
            >
              जिथे नक्षी जन्मा येते.
            </motion.p>

            {/* Subtle Progress Bar */}
            <div className="w-48 h-[2px] bg-[color:var(--charcoal)]/10 rounded-full mt-10 overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2.4, ease: "easeInOut" }}
                className="h-full bg-gold-gradient w-full"
              />
            </div>
          </div>

          {/* Quick Skip button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
            onClick={() => setShowSplash(false)}
            className="absolute bottom-8 right-8 text-[11px] uppercase tracking-[0.25em] text-[color:var(--charcoal)]/80 hover:text-[color:var(--charcoal)] transition-colors py-2 px-4 rounded-full border border-[color:var(--charcoal)]/10 glass"
          >
            Enter Studio ➔
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
