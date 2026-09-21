import React from 'react';
import { divisions } from '../data/agencyData';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { useReveal, useCountUp } from '../hooks/useReveal';

function RowStat({ stat, isVisible }) {
  const count = useCountUp(stat.value, isVisible);
  return (
    <div>
      <div className="font-display font-medium text-3xl sm:text-4xl text-ink-primary tracking-tight">
        {count}
      </div>
      <div className="font-mono text-[11px] uppercase tracking-wider text-ink-tertiary mt-1">
        {stat.label}
      </div>
    </div>
  );
}

function DivisionRow({ division, idx }) {
  const [ref, isVisible] = useReveal(0.2);
  const imageRight = idx % 2 === 0;

  const Copy = (
    <div className="flex flex-col justify-between gap-6">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="eyebrow">
            Division 0{idx + 1}
          </span>
          <span className="text-ink-tertiary">/</span>
          <span className="font-mono text-xs text-ink-tertiary">
            {division.code}
          </span>
        </div>

        <h3 className="font-display font-medium text-2xl sm:text-3xl text-ink-primary mb-2">
          {division.title}
        </h3>

        <p className="font-mono text-xs text-accent-strong mb-4 font-medium">
          "{division.tagline}"
        </p>

        <p className="text-ink-secondary text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
          {division.description}
        </p>

        {/* 3 inline stats — case-study row signature */}
        <div className="flex flex-wrap gap-8 mb-6">
          {division.stats.map((stat) => (
            <RowStat key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>

        <div className="space-y-2.5">
          <div className="font-mono text-xs uppercase text-ink-tertiary font-medium tracking-wider mb-2">
            Core Specialized Services
          </div>
          {division.services.map((srv, sIdx) => (
            <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-secondary">
              <span className="text-accent-strong mt-0.5">—</span>
              <span>{srv}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact + Explore */}
      <div className="pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-tertiary">
          <a href={`mailto:${division.email}`} className="flex items-center gap-1.5 hover:text-ink-primary transition-colors">
            <Mail className="w-3.5 h-3.5 text-accent-strong" />
            <span>{division.email}</span>
          </a>
          <span>·</span>
          <a href={`tel:${division.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-ink-primary transition-colors">
            <Phone className="w-3.5 h-3.5 text-accent-strong" />
            <span>{division.phone}</span>
          </a>
        </div>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ink-primary hover:text-accent-strong transition-colors"
        >
          <span>Explore Division</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      className={`row-reveal group ${isVisible ? 'is-visible' : ''} ${idx > 0 ? 'pt-12 mt-12 border-t border-border-subtle' : ''} flex flex-col lg:flex-row gap-10 items-stretch`}
    >
      {/* Mobile: copy always first (order-1), image second (order-2).
          Desktop: alternates via lg:order on each side — image never duplicated in the DOM. */}
      <div className={`order-1 lg:w-7/12 ${imageRight ? 'lg:order-1' : 'lg:order-2'}`}>
        {Copy}
      </div>
      <div className={`order-2 lg:w-5/12 ${imageRight ? 'lg:order-2' : 'lg:order-1'} rounded-2xl overflow-hidden bg-black relative min-h-[280px]`}>
        <img
          src={division.image}
          alt={division.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent, rgba(6,7,10,0.6))' }} />
        <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-void/90 border border-border-subtle text-xs font-mono text-ink-primary flex items-center justify-between">
          <span>{division.code}</span>
          <span className="text-accent-strong">UAE Accredited</span>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [headerRef, headerVisible] = useReveal();

  return (
    <section id="divisions" className="relative py-28 bg-surface-base border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className={`reveal-blur ${headerVisible ? 'is-visible' : ''} flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16`}>
          <div className="max-w-2xl">
            <span className="eyebrow block mb-3">
              // 01 Operating Divisions
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-ink-primary tracking-tight">
              Specialized Agencies Under COMCOM Group
            </h2>
          </div>
          <p className="text-ink-secondary text-sm sm:text-base max-w-md leading-relaxed">
            Each operating division is an accredited agency holding domain authority, specialized infrastructure, and multidisciplinary talent.
          </p>
        </div>

        {/* Floating panel containing all division rows */}
        <div className="panel-surface">
          {divisions.map((division, idx) => (
            <DivisionRow key={division.id} division={division} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
