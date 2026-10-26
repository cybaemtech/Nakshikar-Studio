import { motion } from 'framer-motion';
import heroMural from '@/assets/services/services/hero-mural.webp';
import walldesign from '@/assets/services/services/walldesign.webp';
import interiorSupport from '@/assets/services/services/interior-support.webp';

export const AboutSection = () => {
  return (
    <section className="pt-10 pb-24 sm:pt-20 sm:pb-32 bg-[color:var(--cream)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Stack Animation */}
          <div className="relative h-[500px] sm:h-[600px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute z-10 w-48 sm:w-64 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-luxe -left-4 sm:-left-8 top-10 border-2 border-white/80"
            >
              <img src={heroMural} alt="Bolava vitthal wall mural" loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-20 w-64 sm:w-80 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-luxe border-4 border-white"
            >
              <img src={walldesign} alt="Under water world wall design" loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute z-30 w-56 sm:w-72 h-64 sm:h-80 rounded-2xl overflow-hidden shadow-luxe -right-4 sm:-right-8 bottom-10 border-2 border-white/80"
            >
              <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop" alt="Paint Brushes" loading="lazy" decoding="async" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Text Content & Stats */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] tracking-[0.25em] uppercase text-[color:var(--royal-deep)] font-medium mb-4 block"
            >
              Interior & Architectural Artistry
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-[clamp(2.2rem,4vw,3.6rem)] text-[color:var(--charcoal)] mb-6 leading-[1.05] tracking-tight"
            >
              Elevating Spaces Through <span className="italic text-gradient-gold">Art & Architecture</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-base sm:text-lg mb-10 leading-relaxed"
            >
              At Nakshikar's Studio, we bridge fine art and architectural design. We collaborate closely with architects, interior designers, hoteliers, and homeowners to transform bare walls and structural spaces into breathtaking artistic statements. From bespoke murals and 3D architectural wall textures to custom sculptures and space styling, every piece is crafted to harmonize with your interior aesthetic.
            </motion.p>

            <div className="grid grid-cols-3 gap-6 sm:gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="font-display text-4xl sm:text-5xl text-gradient-gold mb-2">15+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--charcoal)]/60 font-semibold">Years Experience</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="font-display text-4xl sm:text-5xl text-gradient-gold mb-2">700+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--charcoal)]/60 font-semibold">Projects Completed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="font-display text-4xl sm:text-5xl text-gradient-gold mb-2">500+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--charcoal)]/60 font-semibold">Happy Clients</div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
