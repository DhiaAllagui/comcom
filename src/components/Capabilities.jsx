import React, { useState } from 'react';
import { technicalCapabilities } from '../data/agencyData';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Capabilities() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [headerRef, headerVisible] = useReveal();

  return (
    <section id="capabilities" className="relative py-28 bg-surface-base border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className={`reveal-blur ${headerVisible ? 'is-visible' : ''} flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20`}>
          <div className="max-w-2xl">
            <span className="eyebrow block mb-3">
              // Technical Infrastructure
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-ink-primary tracking-tight">
              Touring Hardware &amp; Cross-Border Execution
            </h2>
          </div>
          <p className="text-ink-secondary text-sm sm:text-base max-w-md leading-relaxed">
            We eliminate vendor fragmentation by owning, maintaining, and deploying arena-grade sound, visual, and broadcast infrastructure across the MENA region.
          </p>
        </div>

        {/* 2-Column Technical Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: Interactive Category Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {technicalCapabilities.map((cap, idx) => (
              <button
                key={cap.category}
                onClick={() => setActiveIdx(idx)}
                className={`w-full p-6 rounded-sm text-left transition-all border ${
                  activeIdx === idx
                    ? 'card-surface border-border-default'
                    : 'border-border-subtle opacity-70 hover:opacity-100'
                }`}
              >
                <div className="eyebrow mb-1">
                  0{idx + 1} / {cap.category}
                </div>
                <div className="font-display font-medium text-lg text-ink-primary">
                  {cap.title}
                </div>
              </button>
            ))}
          </div>

          {/* Right: Active Capability Deep-Dive Card */}
          <div className="lg:col-span-7 card-surface p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="badge-mono inline-flex">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Enterprise Specification</span>
              </div>

              <div>
                <h3 className="font-display font-medium text-2xl sm:text-3xl text-ink-primary mb-3">
                  {technicalCapabilities[activeIdx].title}
                </h3>
                <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
                  {technicalCapabilities[activeIdx].description}
                </p>
              </div>

              {/* Deployment Highlights */}
              <div className="space-y-3 pt-2">
                <div className="text-xs uppercase font-mono tracking-wider text-ink-tertiary font-medium">
                  Standard Deployment Specifications:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {technicalCapabilities[activeIdx].highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-sm border border-border-subtle text-xs text-ink-secondary">
                      <span className="text-accent-strong mt-0.5">—</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
              <span className="text-xs font-mono text-ink-tertiary">
                Hub Base: Downtown Dubai, UAE
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-ink-primary hover:text-accent-strong transition-colors"
              >
                <span>Request Technical Rider</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
