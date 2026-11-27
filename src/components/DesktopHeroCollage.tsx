import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

import heroMural from "@/assets/services/services/hero-mural.webp";
import heroMurti from "@/assets/services/Fish.webp";
import heroPainting from "@/assets/services/services/hero-painting.webp";
import heroNameplate from "@/assets/services/services/nameplate.webp";

export default function DesktopHeroCollage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div ref={ref} className="lg:col-span-6 relative h-[520px] sm:h-[620px] lg:h-[680px]">
      <m.div style={{ y: y1 }} className="absolute top-0 right-0 w-[58%] h-[62%] rounded-3xl overflow-hidden shadow-luxe">
        <m.img
          src={heroMural}
          alt="Bolava vitthal wall mural"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </m.div>
      <m.div style={{ y: y2 }} className="absolute top-[18%] left-0 w-[54%] sm:w-[56%] h-[30%] sm:h-[34%] rounded-3xl overflow-hidden shadow-soft border-4 border-white animate-float">
        <img src={heroMurti} alt="Decorative fish wall Design" loading="eager" decoding="async" width={340} height={191} className="h-full w-full object-cover" />
      </m.div>
      <m.div style={{ y: y3 }} className="absolute bottom-0 left-[10%] w-[48%] h-[44%] rounded-3xl overflow-hidden shadow-luxe border-4 border-white">
        <img src={heroPainting} alt="Autmn tree painting" loading="eager" decoding="async" width={400} height={241} className="h-full w-full object-cover" />
      </m.div>
      <m.div style={{ y: y2 }} className="absolute bottom-[8%] right-0 w-[36%] h-[36%] rounded-3xl overflow-hidden shadow-soft border-4 border-white">
        <img src={heroNameplate} alt="Custom artistic nameplate design" loading="eager" decoding="async" className="h-full w-full object-cover" />
      </m.div>

      {/* floating badge */}
      <m.div
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
      </m.div>
    </div>
  );
}

