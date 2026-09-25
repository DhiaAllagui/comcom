import React, { useEffect, useState, Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import { quickStats, clientLogos, achievementTicker } from '../data/agencyData';
import { ArrowRight } from 'lucide-react';
import { useReveal, useCountUp } from '../hooks/useReveal';
import KineticHeadline from './KineticHeadline';
import comcomLogo from '../images/comcomadjutlogo.png';

// Code-split: three.js + @react-three/fiber pull in ~900kb, so the shader
// gradient loads as its own chunk instead of blocking the main bundle.
const HeroShaderGradient = lazy(() => import('./HeroShaderGradient'));

function StatItem({ stat, statKey }) {
  const { t } = useTranslation();
  const [ref, isVisible] = useReveal(0.3);
  const count = useCountUp(stat.value, isVisible);

  const label = statKey ? t(`hero.stats.${statKey}.label`, stat.label) : stat.label;
  const detail = statKey ? t(`hero.stats.${statKey}.detail`, stat.detail) : stat.detail;

  return (
    <div ref={ref} className="text-left space-y-1 rtl:text-right">
      <div className="font-display font-normal text-3xl sm:text-4xl text-accent-strong tracking-tight">
        {count}
      </div>
      <div className="text-xs font-semibold uppercase tracking-wider text-ink-primary">
        {label}
      </div>
      <div className="text-[11px] font-mono text-ink-tertiary">
        {detail}
      </div>
    </div>
  );
}

const STAT_KEYS = ['attendees', 'audience', 'presence', 'inHouse'];

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const rawTicker = t('hero.ticker', { returnObjects: true });
  const tickerItems = Array.isArray(rawTicker) ? rawTicker : achievementTicker;

  return (
    <section id="holding" className="relative min-h-[100vh] flex flex-col justify-center pt-32 pb-0 overflow-hidden bg-void">

      {/* ── Background Shader Gradient ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-void" style={{ zIndex: -1 }} />

        <div aria-hidden="true" className="absolute inset-0">
          <Suspense fallback={null}>
            <HeroShaderGradient reduceMotion={reduceMotion} />
          </Suspense>
        </div>

        {/* Dark overlay for text legibility over the gradient */}
        <div className="absolute inset-0 bg-void/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-transparent to-void/90" />

        {/* Quick jump to next section */}
        <div className="absolute bottom-6 end-6 z-20 flex items-center gap-2">
          <a
            href="#what-we-do"
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

        {/* Brand mark */}
        <img
          src={comcomLogo}
          alt="COMCOM Group"
          loading="eager"
          fetchPriority="high"
          className="mx-auto h-20 sm:h-24 md:h-28 w-auto object-contain mb-8 drop-shadow-[0_8px_32px_rgba(227,26,148,0.25)] animate-fade-up"
        />

        {/* Plain-language eyebrow: says what the company is before any branding */}
        <p className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-ink-tertiary mb-5 animate-fade-up">
          {t('hero.eyebrow')}
        </p>

        {/* Main Kinetic Headline with Selection Frame */}
        <KineticHeadline className="mb-6" />

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-ink-secondary font-normal leading-relaxed mb-8 text-balance animate-fade-up" style={{ animationDelay: '360ms' }}>
          {t('hero.subheadline')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16 animate-fade-up" style={{ animationDelay: '400ms' }}>
          <a
            href="#what-we-do"
            className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 uppercase tracking-widest font-mono text-xs !py-3.5 !px-7"
          >
            <span>{t('hero.ctaPrimary')}</span>
            <ArrowRight className="w-4 h-4 rtl-flip" />
          </a>

          <a
            href="#contact"
            className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-3 uppercase tracking-widest font-mono text-xs !py-3.5 !px-7 group"
          >
            <span>{t('hero.ctaSecondary')}</span>
          </a>
        </div>

        {/* Brand statement — kept as signature, not as the explanation */}
        <p className="font-display text-sm sm:text-base tracking-[0.2em] uppercase text-ink-tertiary mb-10 animate-fade-up" style={{ animationDelay: '440ms' }}>
          {t('hero.brandStatement')}
        </p>

        {/* Audited Impact Metrics (4 KPI Counters) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-8 border-t border-border-subtle">
          {quickStats.map((stat, idx) => (
            <StatItem key={stat.label} stat={stat} statKey={STAT_KEYS[idx]} />
          ))}
        </div>

      </div>

      {/* Achievement marquee ticker */}
      <div className="relative w-full border-t border-b border-border-subtle bg-surface-base py-4 mt-20 z-10 overflow-hidden">
        <div className="marquee-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
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
