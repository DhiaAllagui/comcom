import React from 'react';
import { useTranslation } from 'react-i18next';
import { triEngines, divisions } from '../data/agencyData';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import bg6 from '../images/bg6.webp';

function EngineCard({ engine, idx }) {
  const { t } = useTranslation();
  const [ref, isVisible] = useReveal(0.2);

  const engineTitle = t(`data.triEngines.${engine.num}.title`, engine.engine);
  const engineSubtitle = t(`data.triEngines.${engine.num}.subtitle`, engine.subtitle);
  const engineBadge = t(`data.triEngines.${engine.num}.badge`, engine.badge);
  const engineDesc = t(`data.triEngines.${engine.num}.description`, engine.description);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} card-surface p-8 flex flex-col justify-between space-y-6 border border-border-default hover:border-accent/40 transition-all`}
      style={{ transitionDelay: `${idx * 80}ms` }}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-accent-strong uppercase tracking-wider">
            {t('services.engineNumber', { num: engine.num })}
          </span>
          <span className="badge-mono text-[10px]">
            {engineBadge}
          </span>
        </div>

        <div>
          <h3 className="font-display font-medium text-2xl text-ink-primary">
            {engineTitle}
          </h3>
          <div className="font-mono text-xs text-ink-tertiary mt-1">
            {engineSubtitle}
          </div>
        </div>

        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
          {engineDesc}
        </p>

        {/* Core Capabilities */}
        <div className="space-y-2 pt-2 border-t border-border-subtle">
          <div className="font-mono text-[11px] uppercase tracking-wider text-ink-primary font-semibold">
            {t('services.capabilities')}
          </div>
          <ul className="space-y-2">
            {engine.coreOps.map((op, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-ink-secondary">
                <span className="text-accent-strong mt-0.5">•</span>
                <span>{t(`data.triEngines.${engine.num}.coreOps.${i}`, op)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
        <span className="font-mono text-[10px] text-ink-tertiary">{t('services.infrastructure')}</span>
        <a
          href="#contact"
          className="text-xs font-mono font-semibold uppercase tracking-wider text-accent-strong hover:text-ink-primary flex items-center gap-1 transition-colors"
        >
          <span>{t('services.deployEngine')}</span>
          <ChevronRight className="w-3.5 h-3.5 rtl-flip" />
        </a>
      </div>
    </div>
  );
}

function DivisionGridCard({ division, idx }) {
  const { t } = useTranslation();
  const [ref, isVisible] = useReveal(0.15);

  const divisionCode = t(`data.divisions.${division.id}.code`, division.code);
  const divisionTitle = t(`data.divisions.${division.id}.title`, division.title);
  const divisionTagline = t(`data.divisions.${division.id}.tagline`, division.tagline);
  const divisionDesc = t(`data.divisions.${division.id}.description`, division.description);

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} card-surface p-6 flex flex-col justify-between space-y-4 border border-border-subtle hover:border-accent/40 transition-all group`}
      style={{ transitionDelay: `${idx * 40}ms` }}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] text-accent-strong font-bold">
            {divisionCode}
          </span>
          <span className="w-2 h-2 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
        </div>

        <h4 className="font-display font-medium text-lg text-ink-primary group-hover:text-accent-strong transition-colors">
          {divisionTitle}
        </h4>

        <p className="font-mono text-[11px] text-ink-tertiary font-medium">
          "{divisionTagline}"
        </p>

        <p className="text-xs text-ink-secondary leading-relaxed">
          {divisionDesc}
        </p>

        {/* Services List */}
        <div className="pt-2 border-t border-border-subtle space-y-1.5">
          {division.services.slice(0, 3).map((srv, sIdx) => (
            <div key={sIdx} className="flex items-start gap-1.5 text-[11px] text-ink-tertiary">
              <span className="text-accent-strong mt-0.5">—</span>
              <span className="line-clamp-1">{t(`data.divisions.${division.id}.services.${sIdx}`, srv)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
        <span className="text-ink-tertiary text-[11px]">{t('services.corePillarsLabel')}</span>
        <a
          href="#contact"
          className="text-ink-primary group-hover:text-accent-strong flex items-center gap-1 transition-colors uppercase tracking-wider text-[11px] font-semibold"
        >
          <span>{t('ventures.inquire')}</span>
          <ArrowUpRight className="w-3.5 h-3.5 rtl-flip" />
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const { t } = useTranslation();
  const [headerRef1, headerVisible1] = useReveal();
  const [headerRef2, headerVisible2] = useReveal();

  return (
    <div className="space-y-0">
      
      {/* ================= SECTION: TRI-ENGINE MODEL ================= */}
      <section id="what-we-do" className="relative py-28 bg-surface-base border-t border-border-subtle overflow-hidden">
        {/* ── Background Image (bg6) ── */}
        <img
          src={bg6}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-surface-base/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div ref={headerRef1} className={`reveal-blur ${headerVisible1 ? 'is-visible' : ''} max-w-3xl space-y-3`}>
            <span className="eyebrow block">
              {t('services.engineEyebrow')}
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-ink-primary tracking-tight">
              {t('services.engineTitle')}
            </h2>
            <p className="text-ink-secondary text-base sm:text-lg leading-relaxed font-normal">
              {t('services.engineDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {triEngines.map((engine, idx) => (
              <EngineCard key={engine.num} engine={engine} idx={idx} />
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION: 8 OPERATIONAL DIVISIONS ================= */}
      <section id="divisions" className="relative py-28 bg-void border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div ref={headerRef2} className={`reveal-blur ${headerVisible2 ? 'is-visible' : ''} text-center max-w-3xl mx-auto space-y-3`}>
            <span className="eyebrow block">
              {t('services.divisionsEyebrow')}
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-ink-primary tracking-tight">
              {t('services.divisionsTitle')}
            </h2>
            <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
              {t('services.divisionsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((division, idx) => (
              <DivisionGridCard key={division.id} division={division} idx={idx} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
