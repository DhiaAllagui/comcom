import React, { useState, useEffect, useRef, useLayoutEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

// Fixed star layout (position + size + delay) around the rotating word.
// Kept as plain data so re-renders don't reshuffle the sparkle positions.
const STARS = [
  { top: '-22%', left: '2%', size: 12, delay: 0 },
  { top: '-10%', left: '97%', size: 10, delay: 0.3 },
  { top: '85%', left: '-5%', size: 9, delay: 0.6 },
  { top: '108%', left: '38%', size: 11, delay: 0.9 },
  { top: '5%', left: '103%', size: 13, delay: 1.2 },
  { top: '65%', left: '100%', size: 8, delay: 1.5 },
  { top: '-16%', left: '53%', size: 9, delay: 1.8 },
  { top: '95%', left: '78%', size: 10, delay: 2.1 },
];

function Sparkle({ top, left, size, delay, reduceMotion }) {
  return (
    <motion.span
      aria-hidden="true"
      className="absolute pointer-events-none"
      style={{ top, left, width: size, height: size }}
      initial={{ opacity: 0, scale: 0 }}
      animate={reduceMotion ? { opacity: 0.6, scale: 1 } : {
        opacity: [0, 1, 0],
        scale: [0, 1, 0.4],
        rotate: [0, 90],
      }}
      transition={reduceMotion ? {} : {
        duration: 1.8,
        repeat: Infinity,
        repeatDelay: 1.4,
        delay,
        ease: 'easeInOut',
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-[0_0_10px_rgba(227,26,148,1)]">
        <path
          d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z"
          fill="url(#sparkleGrad)"
        />
        <defs>
          <linearGradient id="sparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E31A94" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>
      </svg>
    </motion.span>
  );
}

export default function KineticHeadline({ className = "" }) {
  const { t, i18n } = useTranslation();
  // t(..., { returnObjects: true }) returns a new array reference on every render,
  // which would retrigger the effects below on every tick. Memoize on the active
  // language so the reference is stable until the user actually switches locale.
  const rotatingWords = useMemo(
    () => t('hero.title.rotating', { returnObjects: true }),
    [t, i18n.resolvedLanguage]
  );
  const prefix = t('hero.title.prefix');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [maxWidth, setMaxWidth] = useState(null);
  // Uniform scale-to-fit factor (<=1) applied to the whole first line so the
  // longest prefix+word combination in any language never wraps to a 2nd line.
  const [lineScale, setLineScale] = useState(1);
  const measureRef = useRef(null);
  const line1Ref = useRef(null);
  const line1InnerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Reset to the first word whenever the word list changes (e.g. on language switch)
  // so currentIndex never points past the end of a shorter translated list.
  useEffect(() => {
    setCurrentIndex(0);
  }, [rotatingWords]);

  // Measure the widest word, and scale the whole first line to fit its
  // available width using the widest (prefix + word) combination — recomputed
  // on language change and on viewport resize so it holds at every breakpoint.
  useLayoutEffect(() => {
    const recompute = () => {
      const measureEl = measureRef.current;
      const line1El = line1Ref.current;
      const innerEl = line1InnerRef.current;
      if (!measureEl || !line1El || !innerEl) return;

      let widest = 0;
      for (const span of measureEl.children) {
        widest = Math.max(widest, span.offsetWidth);
      }
      setMaxWidth(widest);

      // Reset scale before measuring natural (unscaled) width of the full line.
      innerEl.style.transform = 'scale(1)';
      const available = line1El.clientWidth;
      const natural = innerEl.scrollWidth;
      const scale = natural > available ? available / natural : 1;
      setLineScale(Math.min(1, scale));
    };

    recompute();
    window.addEventListener('resize', recompute);
    return () => window.removeEventListener('resize', recompute);
  }, [rotatingWords, prefix]);

  // Cycle the rotating words every 2.8s unless hovered or reduced motion
  useEffect(() => {
    if (shouldReduceMotion || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, isHovered, rotatingWords]);

  const currentWord = rotatingWords[currentIndex];

  return (
    <div className={`relative select-none pt-8 sm:pt-6 ${className}`}>

      {/* Background Ambient Glow */}
      <div className="absolute -inset-x-12 -inset-y-16 -z-10 pointer-events-none flex items-center justify-center overflow-visible">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [0.92, 1.08, 0.92],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-[380px] sm:w-[580px] h-[220px] bg-gradient-to-r from-purple-600/30 via-pink-500/25 to-accent/25 blur-3xl rounded-full"
        />
      </div>

      {/* Hidden measurement layer — renders every word once to find the widest, then never shown.
          Also includes the prefix + widest word combined, for the line-fit scale calc. */}
      <div
        ref={measureRef}
        aria-hidden="true"
        className="absolute -z-50 opacity-0 pointer-events-none font-body font-extrabold tracking-[-0.035em] text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[86px] whitespace-nowrap"
      >
        {rotatingWords.map((word) => (
          <span key={word} className="inline-block">{word}</span>
        ))}
      </div>

      <h1 className="font-body font-extrabold tracking-[-0.035em] text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[86px] text-ink-primary max-w-5xl mx-auto leading-[1.12] sm:leading-[1.06] mb-6">

        {/* Line 1: [prefix] [rotating word] — forced to a single line via scale-to-fit */}
        <span ref={line1Ref} className="block pb-2 sm:pb-3 w-full overflow-visible">
          <span
            ref={line1InnerRef}
            className="inline-flex items-center whitespace-nowrap origin-left rtl:origin-right"
            style={{ transform: `scale(${lineScale})` }}
          >
            <span className="text-ink-primary me-2 sm:me-3.5 inline-block">
              {prefix}
            </span>

            <span
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setCurrentIndex((prev) => (prev + 1) % rotatingWords.length)}
              className="relative inline-flex items-center align-baseline cursor-pointer"
              title="Click to cycle word"
            >
              {/* Sparkles — sit outside the clipped word box so they can float around its edges */}
              {!shouldReduceMotion && STARS.map((star, i) => (
                <Sparkle key={`${currentWord}-${i}`} {...star} reduceMotion={shouldReduceMotion} />
              ))}

              <span
                className="relative inline-block py-1 text-left overflow-visible"
                style={maxWidth ? { minWidth: maxWidth } : undefined}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={shouldReduceMotion ? { opacity: 1 } : { y: 24, opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { y: -24, opacity: 0, filter: "blur(6px)" }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="relative inline-block bg-gradient-to-r from-[#E31A94] via-[#f43f5e] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(227,26,148,0.35)] font-extrabold whitespace-nowrap"
                  >
                    {currentWord}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </span>
        </span>

        {/* Line 2 */}
        <span className="block pb-2 text-ink-primary overflow-hidden">
          <span className="relative inline-block hover:text-white transition-colors duration-300">
            {t('hero.title.line2')}
          </span>
        </span>

        {/* Line 3 */}
        <span className="block text-ink-primary/95 overflow-hidden">
          <span className="relative inline-block hover:text-white transition-colors duration-300">
            {t('hero.title.line3')}
          </span>
        </span>

      </h1>
    </div>
  );
}
