import React, { useRef, useEffect, useState } from 'react';
import { quickStats, clientLogos, achievementTicker } from '../data/agencyData';
import { ArrowRight, ShieldCheck, Volume2, VolumeX } from 'lucide-react';
import { useReveal, useCountUp } from '../hooks/useReveal';

function StatItem({ stat }) {
  const [ref, isVisible] = useReveal(0.3);
  const count = useCountUp(stat.value, isVisible);

  return (
    <div ref={ref} className="text-left space-y-1">
      <div className="font-display font-normal text-3xl sm:text-4xl text-accent-strong tracking-tight">
        {count}
      </div>
      <div className="text-xs font-semibold uppercase tracking-wider text-ink-primary">
        {stat.label}
      </div>
      <div className="text-[11px] font-mono text-ink-tertiary">
        {stat.detail}
      </div>
    </div>
  );
}

export default function Hero() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-void">

      {/* ── Full-Screen Video Background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/comcom-bg.mp4"
          poster="/comcom-logo-wordmark.png"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className="absolute inset-0 bg-void" style={{ zIndex: -1 }} />

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-void/85 via-void/65 to-void/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/75 via-transparent to-void/75" />

        {/* Ambient aurora layer — signature background moment (paused via reduced-motion) */}
        <div className="aurora-layer pointer-events-none" aria-hidden="true" />

        {/* Mute toggle */}
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-3 py-2 rounded-sm bg-void/50 backdrop-blur-md border border-border-subtle text-ink-primary text-xs font-mono hover:border-border-default transition-all"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-ink-tertiary" />
          ) : (
            <Volume2 className="w-4 h-4 text-accent-strong" />
          )}
          <span className="hidden sm:inline">{isMuted ? 'Unmute' : 'Mute'}</span>
        </button>
      </div>

      {/* ── Hero Content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 my-auto">

        {/* Accreditation Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-sm badge-mono mb-8 max-w-[92vw] animate-fade-up">
          <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="whitespace-normal text-center leading-snug">UAE Free Zone Accredited International Holding · Dubai</span>
        </div>

        {/* Main Headline — mask-reveal signature moment */}
        <h1 className="font-display font-medium tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-[88px] text-ink-primary max-w-5xl mx-auto leading-[1.15] sm:leading-[1.05] mb-8">
          <span className="block pb-1 overflow-hidden animate-fade-up" style={{ animationDelay: '80ms' }}>
            A Global Ecosystem of
          </span>
          <span className="block pb-1 overflow-hidden animate-fade-up" style={{ animationDelay: '200ms' }}>
            <span className="text-accent-strong relative">
              Unforgettable
              <svg
                className="absolute -bottom-1 left-0 w-full h-[6px]"
                viewBox="0 0 300 6"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 4 Q150 0 298 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  className="text-accent"
                  style={{
                    strokeDasharray: 320,
                    strokeDashoffset: 320,
                    animation: 'draw-underline 0.9s 1.4s cubic-bezier(0.16,1,0.3,1) forwards',
                  }}
                />
              </svg>
            </span>{' '}
            Experiences.
          </span>
          <style>{`@keyframes draw-underline { to { stroke-dashoffset: 0; } } @media (prefers-reduced-motion: reduce) { svg path { animation: none !important; stroke-dashoffset: 0 !important; } }`}</style>
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-ink-secondary font-normal leading-relaxed mb-10 text-balance animate-fade-up" style={{ animationDelay: '320ms' }}>
          COMCOM Group is a premier international creative solutions holding based in the United Arab Emirates. We unite accredited specialized agencies in audiovisual production, large-scale world expos, multichannel advertising, venture academies, and digital publishing.
        </p>

        {/* Division Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '400ms' }}>
          {["COMCOM Studios", "COMCOM Events & Expo", "COMCOM Advertising & Media", "CIA Influencers Agency", "Enterprise Training & Trade"].map((d, i) => (
            <span key={i} className="font-mono text-xs px-3 py-1.5 rounded-sm border border-border-subtle text-ink-secondary">
              {d}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16 animate-fade-up" style={{ animationDelay: '480ms' }}>
          <a
            href="#divisions"
            className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 uppercase tracking-widest"
          >
            <span>Explore Operating Divisions</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-3 uppercase tracking-widest"
          >
            <span>Start a Project</span>
          </a>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-8 border-t border-border-subtle">
          {quickStats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>

      </div>

      {/* Achievement marquee ticker — signature moment #2, seamless CSS loop */}
      <div className="relative w-full border-t border-b border-border-subtle bg-surface-base py-4 mt-16 z-10 overflow-hidden">
        <div className="marquee-track">
          {[...achievementTicker, ...achievementTicker].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 sm:gap-12 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-ink-secondary whitespace-nowrap pr-8 sm:pr-12"
            >
              <span className="text-accent-strong">/</span> {item}
            </span>
          ))}
        </div>
      </div>

      {/* Partner Track Record bar */}
      <div className="relative w-full border-t border-border-subtle bg-void/60 backdrop-blur-sm py-5 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6 opacity-70">
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-tertiary">
            Proven Partner Track Record:
          </span>
          <div className="flex flex-wrap items-center gap-8 sm:gap-14">
            {clientLogos.map((logo) => (
              <span key={logo} className="font-display font-medium tracking-widest text-xs text-ink-secondary hover:text-ink-primary transition-colors cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
