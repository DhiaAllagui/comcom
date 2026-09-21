import React from 'react';
import { proprietaryLabels, digitalMagazines } from '../data/agencyData';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

function LabelCard({ label, idx }) {
  const [ref, isVisible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} card-surface spotlight-card p-8 flex flex-col justify-between space-y-6`}
      style={{ transitionDelay: `${idx * 60}ms` }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
      }}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-display font-medium text-2xl text-ink-primary tracking-tight">
            {label.abbr}
          </span>
          <span className="badge-mono">
            {label.badge}
          </span>
        </div>

        <h3 className="font-display font-medium text-lg text-ink-primary mb-1">
          {label.name}
        </h3>

        <div className="text-xs font-mono text-ink-tertiary mb-4">
          {label.focus}
        </div>

        <p className="text-ink-secondary text-xs sm:text-sm leading-relaxed">
          {label.description}
        </p>
      </div>

      <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
        <span className="text-[11px] font-mono text-ink-tertiary">COMCOM Label</span>
        <a href="#contact" className="text-xs font-semibold uppercase tracking-widest text-ink-primary hover:text-accent-strong flex items-center gap-1 transition-colors">
          <span>Inquire</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

function MagazineCard({ mag, idx }) {
  const [ref, isVisible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} card-surface p-6 flex flex-col justify-between space-y-4`}
      style={{ transitionDelay: `${idx * 60}ms` }}
    >
      <div>
        <div className="w-10 h-10 rounded-sm border border-border-subtle flex items-center justify-center text-accent-strong mb-4">
          <BookOpen className="w-5 h-5" />
        </div>

        <h3 className="font-display font-medium text-xl text-ink-primary mb-1">
          {mag.name}
        </h3>

        <div className="text-[11px] font-mono text-accent-strong mb-3">
          {mag.category}
        </div>

        <p className="text-ink-tertiary text-xs leading-relaxed">
          {mag.description}
        </p>
      </div>

      <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-ink-tertiary">
        <span>Digital Issue</span>
        <a href="#contact" className="hover:text-ink-primary transition-colors flex items-center gap-1">
          <span>Explore</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export default function Ventures() {
  const [headerRef1, headerVisible1] = useReveal();
  const [headerRef2, headerVisible2] = useReveal();

  return (
    <section id="labels" className="relative py-28 bg-void border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Part 1: Proprietary Labels & Academies */}
        <div>
          <div ref={headerRef1} className={`reveal-blur ${headerVisible1 ? 'is-visible' : ''} max-w-3xl mb-16`}>
            <span className="eyebrow block mb-3">
              // 02 Venture Ecosystem
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-ink-primary tracking-tight mb-4">
              Proprietary Labels &amp; International Academies
            </h2>
            <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
              Beyond client services, COMCOM Group incubates proprietary venture labels in talent direction, entrepreneurship education, global medical services, and tourism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proprietaryLabels.map((label, idx) => (
              <LabelCard key={label.abbr} label={label} idx={idx} />
            ))}
          </div>
        </div>

        {/* Part 2: Digital Media Publishing Platforms */}
        <div id="media">
          <div ref={headerRef2} className={`reveal-blur ${headerVisible2 ? 'is-visible' : ''} max-w-3xl mb-16`}>
            <span className="eyebrow block mb-3">
              // 03 Media &amp; Publishing
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-ink-primary tracking-tight mb-4">
              Digital Media Platforms &amp; Publications
            </h2>
            <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
              COMCOM Group publishes digital media magazines delivering high-value insights, cultural narratives, and sector-specific innovations to international audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalMagazines.map((mag, idx) => (
              <MagazineCard key={mag.name} mag={mag} idx={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
