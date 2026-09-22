import React from 'react';
import { audiencePaths } from '../data/agencyData';
import { Building2, Tv, Landmark, ArrowRight, ShieldCheck } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import bg4 from '../images/bg4.webp';

export default function AudienceRouter({ onSelectInquiry }) {
  const [headerRef, headerVisible] = useReveal();

  const getIcon = (action) => {
    switch (action) {
      case 'sponsorship':
        return <Building2 className="w-6 h-6 text-accent-strong" />;
      case 'studios':
        return <Tv className="w-6 h-6 text-cyan-400" />;
      default:
        return <Landmark className="w-6 h-6 text-amber-400" />;
    }
  };

  const handleAction = (path) => {
    if (onSelectInquiry) onSelectInquiry(path.category);
    const contactEl = document.getElementById('contact');
    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 bg-void border-t border-border-subtle overflow-hidden">
      {/* ── Background Image (bg4) ── */}
      <img
        src={bg4}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-void/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className={`reveal ${headerVisible ? 'is-visible' : ''} text-center max-w-3xl mx-auto mb-16 space-y-3`}>
          <span className="eyebrow block">
            // AUDIENCE SEGMENTATION ROUTER
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-5xl text-ink-primary tracking-tight">
            Partner With COMCOM Group
          </h2>
          <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
            Select your institutional profile to deploy dedicated operational capacity, technical production assets, or access certified investor governance.
          </p>
        </div>

        {/* 3 Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiencePaths.map((path, idx) => (
            <div
              key={path.category}
              className="card-surface p-8 flex flex-col justify-between space-y-6 border border-border-default hover:border-accent/40 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-sm bg-surface-elevated border border-border-subtle flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(path.action)}
                  </div>
                  <span className="badge-mono text-[10px]">
                    {path.badge}
                  </span>
                </div>

                <h3 className="font-display font-medium text-xl text-ink-primary">
                  {path.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-normal">
                  {path.desc}
                </p>
              </div>

              <button
                onClick={() => handleAction(path)}
                className="w-full py-3 px-4 rounded-sm bg-surface-elevated hover:bg-accent hover:text-white border border-border-subtle hover:border-accent text-xs font-mono font-semibold uppercase tracking-wider transition-all flex items-center justify-between group/btn text-ink-primary"
              >
                <span>{path.cta}</span>
                <ArrowRight className="w-4 h-4 text-accent-strong group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
