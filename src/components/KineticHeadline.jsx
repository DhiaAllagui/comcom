import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const ROTATING_WORDS = [
  "Experiences.",
  "Ecosystems.",
  "Enterprises.",
];

export default function KineticHeadline({ className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [boxWidth, setBoxWidth] = useState(null);
  const wordRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Cycle the rotating words every 3.6s unless hovered or reduced motion
  useEffect(() => {
    if (shouldReduceMotion || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 3600);
    return () => clearInterval(interval);
  }, [shouldReduceMotion, isHovered]);

  // Track dynamic width of current word for Figma dimensions badge
  useEffect(() => {
    if (wordRef.current) {
      setBoxWidth(Math.round(wordRef.current.offsetWidth));
    }
  }, [currentIndex]);

  const currentWord = ROTATING_WORDS[currentIndex];

  return (
    <div className={`relative select-none pt-8 sm:pt-6 ${className}`}>
      
      {/* Background Ambient Glow & Blueprint Grid Field */}
      <div className="absolute -inset-x-12 -inset-y-16 -z-10 pointer-events-none flex items-center justify-center overflow-visible">
        {/* Soft Radial Gradient Glow */}
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [0.92, 1.08, 0.92],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-[380px] sm:w-[580px] h-[220px] bg-gradient-to-r from-purple-600/30 via-pink-500/25 to-accent/25 blur-3xl rounded-full"
        />
      </div>

      <h1 className="font-body font-extrabold tracking-[-0.035em] text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[86px] text-ink-primary max-w-5xl mx-auto leading-[1.12] sm:leading-[1.06] mb-6">
        
        {/* Line 1: Architects of [Dynamic Selection Frame] */}
        <span className="block pb-2 sm:pb-3">
          <span className="text-ink-primary mr-2 sm:mr-3.5 inline-block">
            Architects of
          </span>

          {/* ACTIVE SELECTION FRAME CONTAINER */}
          <motion.span
            layout={!shouldReduceMotion}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setCurrentIndex((prev) => (prev + 1) % ROTATING_WORDS.length)}
            className="relative inline-flex items-center align-baseline px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-md cursor-pointer group/frame"
            title="Click to cycle word"
          >
            {/* Blueprint Dot Matrix Inside Selection */}
            <div className="absolute inset-0 rounded-md opacity-20 pointer-events-none bg-[radial-gradient(#E31A94_1.2px,transparent_1.2px)] [background-size:10px_10px]" />

            {/* SVG Animated Bounding Box Outline */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E31A94" />
                  <stop offset="50%" stopColor="#d946ef" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <motion.rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                rx="6"
                fill="rgba(227, 26, 148, 0.06)"
                stroke="url(#frameGrad)"
                strokeWidth="1.75"
                strokeDasharray="6 4"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>

            {/* Corner Vector Nodes / Anchor Handles */}
            {/* Top-Left */}
            <motion.span
              initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 500, damping: 22 }}
              className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] bg-[#06070A] border-[1.75px] border-[#E31A94] shadow-[0_0_8px_rgba(227,26,148,0.8)] z-20 group-hover/frame:scale-125 transition-transform"
            />
            {/* Top-Right */}
            <motion.span
              initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 500, damping: 22 }}
              className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] bg-[#06070A] border-[1.75px] border-[#d946ef] shadow-[0_0_8px_rgba(217,70,239,0.8)] z-20 group-hover/frame:scale-125 transition-transform"
            />
            {/* Bottom-Left */}
            <motion.span
              initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 500, damping: 22 }}
              className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] bg-[#06070A] border-[1.75px] border-[#E31A94] shadow-[0_0_8px_rgba(227,26,148,0.8)] z-20 group-hover/frame:scale-125 transition-transform"
            />
            {/* Bottom-Right */}
            <motion.span
              initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 500, damping: 22 }}
              className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] bg-[#06070A] border-[1.75px] border-[#a855f7] shadow-[0_0_8px_rgba(168,85,247,0.8)] z-20 group-hover/frame:scale-125 transition-transform"
            />

            {/* Mid-edge Anchor Guides */}
            <span className="hidden sm:block absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-1 rounded-[1px] bg-[#E31A94]/80 z-20" />
            <span className="hidden sm:block absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 rounded-[1px] bg-[#a855f7]/80 z-20" />

            {/* Figma-Style Dimension & Inspector Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="absolute -top-7 sm:-top-8 left-0 flex items-center gap-1.5 px-2 py-0.5 rounded-[3px] bg-[#E31A94] text-white text-[9px] sm:text-[10px] font-mono font-semibold tracking-wide shadow-[0_4px_12px_rgba(227,26,148,0.4)] pointer-events-none z-30"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>ComCom Design · {boxWidth ? `w:${boxWidth}px` : 'w:240px'}</span>
            </motion.div>

            {/* Morphing Word with Blur & Spring Slide */}
            <span ref={wordRef} className="relative inline-block overflow-hidden py-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={shouldReduceMotion ? { opacity: 1 } : { y: 28, opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { y: -28, opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block bg-gradient-to-r from-[#E31A94] via-[#f43f5e] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(227,26,148,0.35)] font-extrabold"
                >
                  {currentWord}
                </motion.span>
              </AnimatePresence>
            </span>

            {/* Ambient Floating Cursor Simulation */}
            {!shouldReduceMotion && (
              <motion.div
                initial={{ x: 80, y: 60, opacity: 0 }}
                animate={{
                  x: [80, 20, 10, 10, 60],
                  y: [60, 25, 12, 12, 40],
                  scale: [1, 1, 0.86, 1, 1],
                  opacity: [0, 1, 1, 1, 0.75],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatDelay: 2,
                  times: [0, 0.35, 0.48, 0.62, 1],
                  ease: "easeInOut",
                }}
                className="absolute right-0 bottom-0 pointer-events-none z-40 hidden sm:block"
              >
                {/* SVG Vector Cursor */}
                <div className="relative">
                  <svg
                    className="w-5 h-5 text-[#a855f7] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] filter"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.45 0 .67-.54.35-.85L6.35 2.85a.5.5 0 0 0-.85.36z" />
                  </svg>
                  {/* Cursor User Tag */}
                  <div className="absolute left-4 top-2 flex items-center gap-1 px-1.5 py-0.5 rounded-[3px] bg-[#a855f7] text-white text-[9px] font-mono tracking-tight shadow-md whitespace-nowrap">
                    <span>comcom.director</span>
                  </div>
                </div>
              </motion.div>
            )}

          </motion.span>
        </span>

        {/* Line 2: Content Creators. */}
        <span className="block pb-2 text-ink-primary overflow-hidden">
          <span className="relative inline-block hover:text-white transition-colors duration-300">
            Content Creators.
          </span>
        </span>

        {/* Line 3: Impact Accelerators. */}
        <span className="block text-ink-primary/95 overflow-hidden">
          <span className="relative inline-block hover:text-white transition-colors duration-300">
            Impact Accelerators.
          </span>
        </span>

      </h1>
    </div>
  );
}
