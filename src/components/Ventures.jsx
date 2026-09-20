import React from 'react';
import { proprietaryLabels, digitalMagazines } from '../data/agencyData';
import { ArrowUpRight, BookOpen, Users, Compass, HeartPulse, GraduationCap, Globe } from 'lucide-react';

export default function Ventures() {
  return (
    <section id="labels" className="relative py-28 bg-[#08080A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Part 1: Proprietary Labels & Academies */}
        <div>
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-neon-magenta font-semibold block mb-3">
              Venture Ecosystem
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
              Proprietary Labels &amp; International Academies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Beyond client services, COMCOM Group incubates proprietary venture labels in talent direction, entrepreneurship education, global medical services, and tourism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proprietaryLabels.map((label) => (
              <div
                key={label.abbr}
                className="p-8 rounded-3xl bg-[#101016] border border-white/[0.08] hover:border-white/[0.2] transition-all flex flex-col justify-between space-y-6 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-black text-2xl text-white tracking-tight">
                      {label.abbr}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.06] text-pink-300 font-semibold">
                      {label.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white mb-1">
                    {label.name}
                  </h3>
                  
                  <div className="text-xs font-mono text-slate-400 mb-4">
                    {label.focus}
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {label.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">COMCOM Label</span>
                  <a href="#contact" className="text-xs font-heading font-bold uppercase tracking-widest text-white hover:text-neon-magenta flex items-center gap-1 transition-colors">
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neon-magenta" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Digital Media Publishing Platforms */}
        <div id="media">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-neon-cyan font-semibold block mb-3">
              Media &amp; Publishing
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
              Digital Media Platforms &amp; Publications
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              COMCOM Group publishes digital media magazines delivering high-value insights, cultural narratives, and sector-specific innovations to international audiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalMagazines.map((mag) => (
              <div
                key={mag.name}
                className="p-6 rounded-2xl bg-[#0F0F14] border border-white/[0.08] hover:border-white/[0.2] transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neon-cyan mb-4">
                    <BookOpen className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading font-black text-xl text-white mb-1">
                    {mag.name}
                  </h3>

                  <div className="text-[11px] font-mono text-pink-300 mb-3">
                    {mag.category}
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {mag.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Digital Issue</span>
                  <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1">
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
