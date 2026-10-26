import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom detailed paintbrush icon resembling a classic artist's brush
const ClassicBrushIcon = ({ size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(1, -1)">
      {/* Handle (Wood) */}
      <path d="M19.5 3.5C21 5 20.5 6.5 19.5 7.5L14 13L11 10L16.5 4.5C17.5 3.5 19 3.5 19.5 3.5Z" fill="#8D6E63" stroke="#5D4037" strokeWidth="0.5" />
      {/* Ferrule (Metal) */}
      <path d="M14 13L11 10L9 12L12 15L14 13Z" fill="#CFD8DC" stroke="#90A4AE" strokeWidth="0.5" />
      {/* Bristles */}
      <path d="M9 12L12 15C12 15 10.5 18 7.5 19C4 20 2 21 2 21C2 21 3 19 4 15.5C5 12.5 9 12 9 12Z" fill="#FFB74D" />
      {/* Paint Tip */}
      <path d="M7.5 19C4 20 2 21 2 21C2 21 3 19 4 15.5C4.8 14 6 13.5 7.5 14C6.5 15.5 6.5 17 8.5 17.5C8 18 7.8 18.5 7.5 19Z" fill="var(--gold-deep)" />
    </g>
  </svg>
);

interface Splatter {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
}

const colors = [
  'var(--gold)',
  'var(--gold-deep)',
  '#FFD700', // Classic Gold
  '#DAA520', // GoldenRod
  '#B8860B', // Dark GoldenRod
  '#FFC107', // Amber / Yellow
];

export function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [splatters, setSplatters] = useState<Splatter[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastTime = 0;

    const addSplatter = (clientX: number, clientY: number) => {
      const now = Date.now();
      if (now - lastTime > 40) { // Throttle splatters
        lastTime = now;
        // Add splatter sometimes for a more natural look
        if (Math.random() > 0.3) {
          const newSplatter: Splatter = {
            id: now,
            x: clientX + (Math.random() * 24 - 12),
            y: clientY + (Math.random() * 24 - 12),
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 6 + 3, // 3px to 9px dots
            rotation: Math.random() * 360,
          };
          setSplatters((prev) => [...prev.slice(-20), newSplatter]); // Keep last 20 dots
        }
      }
    };

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setMousePos({ x: e.clientX, y: e.clientY });
      addSplatter(e.clientX, e.clientY);
    };
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Touch handlers
    const handleTouchStart = (e: TouchEvent) => {
      setIsVisible(true);
      setMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      addSplatter(e.touches[0].clientX, e.touches[0].clientY);
    };
    const handleTouchMove = (e: TouchEvent) => {
      setMousePos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      addSplatter(e.touches[0].clientX, e.touches[0].clientY);
    };
    const handleTouchEnd = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);

      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [isVisible]);

  useEffect(() => {
    // Auto remove splatters slowly
    const interval = setInterval(() => {
      setSplatters((prev) => {
        if (prev.length > 0) {
          return prev.slice(1);
        }
        return prev;
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100000] overflow-hidden" style={{ display: isVisible ? 'block' : 'none' }}>
      <AnimatePresence>
        {splatters.map((splatter) => (
          <motion.div
            key={splatter.id}
            initial={{ opacity: 0.8, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8 }}
            className="absolute rounded-full"
            style={{
              left: splatter.x,
              top: splatter.y,
              width: splatter.size,
              height: splatter.size,
              backgroundColor: splatter.color,
              transform: `translate(-50%, -50%) rotate(${splatter.rotation}deg)`,
            }}
          />
        ))}
      </AnimatePresence>
      
      <motion.div
        className="absolute top-0 left-0 drop-shadow-md flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePos.x - 3, // Align the brush tip to cursor
          y: mousePos.y - 28,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.02 }}
      >
        {/* Classic Artist Brush icon */}
        <ClassicBrushIcon size={32} />
      </motion.div>
    </div>
  );
}
