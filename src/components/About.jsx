import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { agencyInfo } from '../data/agencyData';
import { ShieldCheck, Building2, Globe2, FileText, ArrowUpRight } from 'lucide-react';
import bg2 from '../images/bg2.webp';

const pillars = [
  { 
    num: '01', 
    title: 'Institutional Holding', 
    desc: 'Delaware jurisdiction with institutional IP protection and audited corporate governance.' 
  },
  { 
    num: '02', 
    title: 'Integrated Tri-Engine', 
    desc: 'Unifying production, live events, and commercial scale under single holding control.' 
  },
  { 
    num: '03', 
    title: 'In-House Execution', 
    desc: 'Direct execution via proprietary production suites, soundstages, and event rigs.' 
  },
];

export default function About() {
  const [leftRef, leftVisible] = useReveal();
  const [rightRef, rightVisible] = useReveal();

  return (
    <section id="about" className="relative py-28 bg-void border-t border-border-subtle overflow-hidden">
      {/* ── Background Image (bg2) ── */}
      <img
        src={bg2}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-void/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Corporate Narrative */}
          <div ref={leftRef} className={`reveal ${leftVisible ? 'is-visible' : ''} lg:col-span-7 space-y-6`}>
            <div className="flex items-center gap-2">
              <span className="eyebrow">
                // 05 Corporate Governance & Global Holding
              </span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-accent/15 text-accent-strong border border-accent/30 font-bold uppercase">
                Delaware #10321177
              </span>
            </div>

            <h2 className="font-display font-medium text-3xl sm:text-5xl text-ink-primary tracking-tight leading-tight">
              An Institutional Conglomerate Powering Global Culture &amp; Commerce.
            </h2>

            <p className="text-ink-secondary text-base sm:text-lg leading-relaxed">
              <strong className="text-ink-primary">COMCOM GROUP INTERNATIONAL (Comcom Group LLC)</strong> is a Delaware holding conglomerate uniting transcontinental media production, arena live experiences, and commercial venture growth across the USA, UAE, Tunisia, and Saudi Arabia.
            </p>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {pillars.map((p) => (
                <div key={p.num} className="card-surface p-4 space-y-1 border border-border-subtle hover:border-accent/30 transition-colors">
                  <div className="font-display font-medium text-sm text-ink-primary flex items-center gap-1.5">
                    <span className="text-accent-strong font-mono">{p.num}</span>
                    <span>{p.title}</span>
                  </div>
                  <p className="text-xs text-ink-tertiary leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Corporate Registrations Quick Row */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="btn-primary flex items-center gap-2 text-xs font-mono tracking-wider uppercase !py-2.5 !px-5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Contact Corporate Holding</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <span className="text-xs font-mono text-ink-tertiary flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-accent-strong" />
                Audited &amp; Good Standing
              </span>
            </div>
          </div>

          {/* Right Column: Holding Certificate Card */}
          <div ref={rightRef} className={`reveal ${rightVisible ? 'is-visible' : ''} lg:col-span-5 space-y-6`} style={{ transitionDelay: '120ms' }}>
            <div className="card-surface p-8 shadow-2xl flex flex-col items-center text-center relative overflow-hidden border border-border-default hover:border-accent/40 transition-colors group">

              {/* Ambient magenta/gold glow */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/35 transition-all" />

              {/* Official Brand Logo Lockup */}
              <div className="w-full max-w-[280px] rounded-sm bg-void/90 border border-border-subtle shadow-inner flex items-center justify-center p-4 mb-6 group-hover:border-accent/40 transition-all">
                <img
                  src="/comcom-brand-lockup-dark.png"
                  alt="COMCOM Group International Official Emblem"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="font-display font-medium text-xl text-ink-primary mb-1">
                COMCOM GROUP LLC
              </div>

              <div className="eyebrow mb-4 flex items-center gap-2">
                <span>Delaware Holding Company</span>
                <span className="text-accent-strong font-bold">· تقدم</span>
              </div>

              {/* Verified Legal Registry Box */}
              <div className="w-full bg-void/80 border border-border-subtle rounded-sm p-4 text-left font-mono text-xs space-y-2 mb-6">
                <div className="flex items-center justify-between border-b border-border-subtle pb-1.5">
                  <span className="text-ink-tertiary">Jurisdiction</span>
                  <span className="text-ink-primary font-semibold">Delaware, USA</span>
                </div>
                <div className="flex items-center justify-between border-b border-border-subtle pb-1.5">
                  <span className="text-ink-tertiary">File Number</span>
                  <span className="text-accent-strong font-bold">#10321177</span>
                </div>
                <div className="flex items-center justify-between border-b border-border-subtle pb-1.5">
                  <span className="text-ink-tertiary">IRS Tax EIN</span>
                  <span className="text-ink-primary">98-1880888</span>
                </div>
                <div className="flex items-center justify-between border-b border-border-subtle pb-1.5">
                  <span className="text-ink-tertiary">UAE Hub</span>
                  <span className="text-ink-primary">Ajman Free Zone #5643</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-ink-tertiary">Tunisia Hub</span>
                  <span className="text-ink-primary">Winkom SARL #1275760R</span>
                </div>
              </div>

              {/* Action */}
              <div className="w-full pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
                <span className="text-ink-tertiary">Statutory Documentation</span>
                <a
                  href="#contact"
                  className="text-accent-strong hover:text-ink-primary flex items-center gap-1.5 transition-colors font-medium"
                >
                  <span>Contact Legal Desk</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
