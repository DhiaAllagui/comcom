import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { quickStats, clientLogos, achievementTicker } from '../data/agencyData';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useReveal, useCountUp } from '../hooks/useReveal';
import KineticHeadline from './KineticHeadline';
import flagUSA from '../images/united-states.png';
import flagUAE from '../images/united-arab-emirates.png';
import flagTunisia from '../images/tunisia.png';
import flagKSA from '../images/ksa.png';
import bgv from '../images/bgv.mp4';

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
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduceMotion) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  }, [reduceMotion]);

  return (
    <section id="holding" className="relative min-h-[100vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-void">

      {/* ── Background Video (bgv) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-void" style={{ zIndex: -1 }} />

        <video
          ref={videoRef}
          src={bgv}
          autoPlay={!reduceMotion}
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay for text legibility over the video */}
        <div className="absolute inset-0 bg-void/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-transparent to-void/90" />

        {/* Quick jump to next section */}
        <div className="absolute bottom-6 end-6 z-20 flex items-center gap-2">
          <a
            href="#tri-engine"
            className="flex items-center gap-2 px-3 py-2 rounded-sm bg-void/60 backdrop-blur-md border border-border-subtle text-ink-secondary hover:text-ink-primary hover:border-accent/40 text-xs font-mono transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="hidden sm:inline">{t('hero.quickJump')}</span>
            <span className="text-accent-strong group-hover:translate-x-0.5 transition-transform">↓</span>
          </a>
        </div>
      </div>

      {/* ── Hero Content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 my-auto">

        {/* Main Kinetic Headline with Selection Frame */}
        <KineticHeadline className="mb-6" />

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-ink-secondary font-normal leading-relaxed mb-8 text-balance animate-fade-up" style={{ animationDelay: '360ms' }}>
          {t('hero.subheadline')}
        </p>

        {/* Global Jurisdictions Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '420ms' }}>
          {[
            { flag: flagUSA, label: t('hero.jurisdictions.usa') },
            { flag: flagUAE, label: t('hero.jurisdictions.uae') },
            { flag: flagTunisia, label: t('hero.jurisdictions.tunisia') },
            { flag: flagKSA, label: t('hero.jurisdictions.ksa') }
          ].map((d, i) => (
            <span key={i} className="flex items-center gap-2 font-mono text-xs px-3 py-1 rounded-sm border border-border-subtle bg-surface-base/80 backdrop-blur-sm text-ink-secondary">
              <img src={d.flag} alt="" className="w-4 h-4 rounded-full flex-shrink-0" />
              {d.label}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16 animate-fade-up" style={{ animationDelay: '480ms' }}>
          <a
            href="#tri-engine"
            className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 uppercase tracking-widest font-mono text-xs !py-3.5 !px-7"
          >
            <span>{t('hero.ctaPrimary')}</span>
            <ArrowRight className="w-4 h-4 rtl-flip" />
          </a>

          <a
            href="#about"
            className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-3 uppercase tracking-widest font-mono text-xs !py-3.5 !px-7 group"
          >
            <ShieldCheck className="w-4 h-4 text-accent-strong" />
            <span>{t('hero.ctaSecondary')}</span>
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
            {t('hero.partnerTrackRecord')}
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
