import React, { useRef, useEffect, useState } from 'react';
import { quickStats, clientLogos, achievementTicker } from '../data/agencyData';
import { ArrowRight, ShieldCheck, Volume2, VolumeX } from 'lucide-react';
import { useReveal, useCountUp } from '../hooks/useReveal';
import KineticHeadline from './KineticHeadline';

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
    <section id="holding" className="relative min-h-[100vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-void">

      {/* ── Full-Screen Video Background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          poster="/comcom-video-poster.jpg"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setVideoLoaded(false)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        >
          <source src="/comcom-logo.mp4" type="video/mp4" />
          <source src="/comcom-logo-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
        </video>

        <div className="absolute inset-0 bg-void" style={{ zIndex: -1 }} />

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-void/90 via-void/70 to-void/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-transparent to-void/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,26,148,0.15),transparent_65%)] pointer-events-none" />

        <div className="aurora-layer pointer-events-none" aria-hidden="true" />

        {/* Video status and Mute toggle */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
          <a
            href="#tri-engine"
            className="flex items-center gap-2 px-3 py-2 rounded-sm bg-void/60 backdrop-blur-md border border-border-subtle text-ink-secondary hover:text-ink-primary hover:border-accent/40 text-xs font-mono transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="hidden sm:inline">Tri-Engine Model</span>
            <span className="text-accent-strong group-hover:translate-x-0.5 transition-transform">↓</span>
          </a>

          <button
            onClick={toggleMute}
            className="flex items-center gap-2 px-3 py-2 rounded-sm bg-void/60 backdrop-blur-md border border-border-subtle text-ink-primary text-xs font-mono hover:border-border-default transition-all"
            aria-label={isMuted ? 'Unmute background sound' : 'Mute background sound'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-ink-tertiary" />
            ) : (
              <Volume2 className="w-4 h-4 text-accent-strong" />
            )}
            <span className="hidden sm:inline">{isMuted ? 'Muted' : 'Sound On'}</span>
          </button>
        </div>
      </div>

      {/* ── Hero Content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 my-auto">

        {/* Overline & Accreditation */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-sm badge-mono mb-6 max-w-[95vw] animate-fade-up">
          <ShieldCheck className="w-3.5 h-3.5 text-accent-strong flex-shrink-0" />
          <span className="whitespace-normal text-center leading-snug">
            GLOBAL MEDIA, LIVE EXPERIENCES &amp; ENTERTAINMENT CONGLOMERATE · <span className="text-accent-strong font-semibold">DELAWARE #10321177</span>
          </span>
        </div>

        {/* Main Kinetic Headline with Selection Frame */}
        <KineticHeadline className="mb-6" />

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-ink-secondary font-normal leading-relaxed mb-8 text-balance animate-fade-up" style={{ animationDelay: '360ms' }}>
          Transcontinental media production, arena live events, and commercial growth across the USA, UAE, Tunisia, and Saudi Arabia.
        </p>

        {/* Global Jurisdictions Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '420ms' }}>
          {[
            "🇺🇸 Delaware Holding (Comcom Group LLC)",
            "🇦🇪 UAE Commercial Hub (License #5643)",
            "🇹🇳 Tunisia Lab & Studios (Winkom SARL)",
            "🇸🇦 KSA Vision 2030 Desk"
          ].map((d, i) => (
            <span key={i} className="font-mono text-xs px-3 py-1 rounded-sm border border-border-subtle bg-surface-base/80 backdrop-blur-sm text-ink-secondary">
              {d}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16 animate-fade-up" style={{ animationDelay: '480ms' }}>
          <a
            href="#tri-engine"
            className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 uppercase tracking-widest font-mono text-xs !py-3.5 !px-7"
          >
            <span>Explore Tri-Engine Operations</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#about"
            className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-3 uppercase tracking-widest font-mono text-xs !py-3.5 !px-7 group"
          >
            <ShieldCheck className="w-4 h-4 text-accent-strong" />
            <span>Corporate Governance</span>
          </a>
        </div>

        {/* Audited Impact Metrics (4 KPI Counters) */}
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
