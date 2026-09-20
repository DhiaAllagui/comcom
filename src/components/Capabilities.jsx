import React, { useState } from 'react';
import { technicalCapabilities } from '../data/agencyData';
import { ShieldCheck, ArrowUpRight, Check } from 'lucide-react';

export default function Capabilities() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="capabilities" className="relative py-28 bg-[#0A0A0E] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-neon-magenta font-semibold block mb-3">
              Technical Infrastructure
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Touring Hardware &amp; Cross-Border Execution
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
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
                className={`w-full p-6 rounded-2xl text-left transition-all border ${
                  activeIdx === idx
                    ? 'bg-[#14141B] border-white/[0.2] shadow-xl'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] opacity-70 hover:opacity-100'
                }`}
              >
                <div className="font-mono text-xs text-neon-magenta font-semibold uppercase tracking-wider mb-1">
                  0{idx + 1} / {cap.category}
                </div>
                <div className="font-heading font-bold text-lg text-white">
                  {cap.title}
                </div>
              </button>
            ))}
          </div>

          {/* Right: Active Capability Deep-Dive Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#121218] border border-white/[0.1] flex flex-col justify-between space-y-8 shadow-2xl">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-mono text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-neon-magenta" />
                <span>ENTERPRISE SPECIFICATION</span>
              </div>

              <div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-3">
                  {technicalCapabilities[activeIdx].title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {technicalCapabilities[activeIdx].description}
                </p>
              </div>

              {/* Verified Hardware Highlights */}
              <div className="space-y-3 pt-2">
                <div className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
                  Standard Deployment Specifications:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {technicalCapabilities[activeIdx].highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300">
                      <span className="text-neon-magenta font-bold">✦</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Hub Base: Downtown Dubai, UAE
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-heading font-bold text-white hover:text-neon-magenta transition-colors"
              >
                <span>Request Technical Rider</span>
                <ArrowUpRight className="w-4 h-4 text-neon-magenta" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
