import React from 'react';
import { tunisiaLabEntities } from '../data/agencyData';
import { useReveal } from '../hooks/useReveal';
import { Cpu, Film, GraduationCap, Box, MapPin, CheckCircle } from 'lucide-react';

export default function TunisiaLab() {
  const [headerRef, headerVisible] = useReveal();

  const getEntityIcon = (idx) => {
    switch (idx) {
      case 0: return <Cpu className="w-5 h-5 text-accent-strong" />;
      case 1: return <Film className="w-5 h-5 text-cyan-400" />;
      case 2: return <GraduationCap className="w-5 h-5 text-amber-400" />;
      case 3: default: return <Box className="w-5 h-5 text-accent-strong" />;
    }
  };

  return (
    <section id="tunisia-lab" className="relative py-28 bg-void border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div ref={headerRef} className={`reveal-blur ${headerVisible ? 'is-visible' : ''} max-w-3xl space-y-3`}>
          <span className="eyebrow block">
            // 05 REGIONAL PRODUCTION HUB
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-ink-primary tracking-tight">
            The Tunisia Lab &amp; Engineering Hub
          </h2>
          <p className="text-ink-secondary text-base sm:text-lg leading-relaxed font-normal">
            Our primary operational field engine delivering cinema-grade production, multilingual crews, and high-margin cost arbitrage for GCC and Western partners.
          </p>
        </div>

        {/* 4 Entities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tunisiaLabEntities.map((ent, idx) => (
            <div
              key={ent.name}
              className="card-surface p-6 flex flex-col justify-between space-y-6 border border-border-default hover:border-accent/40 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-sm bg-surface-elevated border border-border-subtle flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getEntityIcon(idx)}
                  </div>
                  <span className="badge-mono text-[10px]">
                    {ent.est}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-medium text-xl text-ink-primary">
                    {ent.name}
                  </h3>
                  <div className="font-mono text-xs text-accent-strong font-semibold mt-0.5">
                    {ent.cert}
                  </div>
                </div>

                <p className="text-xs text-ink-secondary leading-relaxed">
                  {ent.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle flex items-center gap-1.5 text-[11px] font-mono text-ink-tertiary">
                <MapPin className="w-3.5 h-3.5 text-accent-strong flex-shrink-0" />
                <span className="truncate">{ent.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Value Arbitrage Banner */}
        <div className="p-8 rounded-sm bg-surface-elevated border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-left">
            <div className="font-display font-medium text-lg text-ink-primary">
              The Transcontinental Cost-to-Quality Advantage
            </div>
            <p className="text-xs text-ink-secondary max-w-2xl">
              Synchronized studios across Dubai, Delaware, and Tunis deliver broadcast-grade media with up to 60% operational efficiency.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-primary whitespace-nowrap text-xs font-mono uppercase tracking-widest !py-3 !px-6"
          >
            Deploy The Lab
          </a>
        </div>

      </div>
    </section>
  );
}
