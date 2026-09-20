import React from 'react';
import { divisions } from '../data/agencyData';
import { ArrowUpRight, Mail, Phone, Layers, CheckCircle2 } from 'lucide-react';

export default function Services() {
  return (
    <section id="divisions" className="relative py-28 bg-[#0A0A0D] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-neon-magenta font-semibold block mb-3">
              Operating Divisions
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Specialized Agencies Under COMCOM Group
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
            Each operating division is an accredited agency holding domain authority, specialized infrastructure, and multidisciplinary talent.
          </p>
        </div>

        {/* Division Cards */}
        <div className="space-y-12">
          {divisions.map((division, idx) => (
            <div
              key={division.id}
              className="p-8 sm:p-12 rounded-3xl bg-[#101016] border border-white/[0.08] hover:border-white/[0.2] transition-all duration-400 shadow-2xl flex flex-col lg:flex-row gap-10 items-stretch"
            >
              {/* Left Column: Details */}
              <div className="lg:w-7/12 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs font-bold text-neon-magenta uppercase tracking-widest">
                      DIVISION 0{idx + 1}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="font-mono text-xs text-slate-400">
                      {division.code}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-2">
                    {division.title}
                  </h3>

                  <p className="font-mono text-xs text-pink-300 mb-4 font-semibold">
                    "{division.tagline}"
                  </p>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {division.description}
                  </p>

                  {/* Core Services List */}
                  <div className="space-y-2.5">
                    <div className="font-mono text-xs uppercase text-slate-400 font-semibold tracking-wider mb-2">
                      Core Specialized Services:
                    </div>
                    {division.services.map((srv, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="text-neon-magenta font-bold">✦</span>
                        <span>{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Contact Bar for Division */}
                <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                    <a href={`mailto:${division.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                      <Mail className="w-3.5 h-3.5 text-neon-magenta" />
                      <span>{division.email}</span>
                    </a>
                    <span>•</span>
                    <a href={`tel:${division.phone.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5 text-neon-cyan" />
                      <span>{division.phone}</span>
                    </a>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-white hover:text-neon-magenta transition-colors"
                  >
                    <span>Inquire with Division</span>
                    <ArrowUpRight className="w-4 h-4 text-neon-magenta" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Preview */}
              <div className="lg:w-5/12 rounded-2xl overflow-hidden bg-black relative min-h-[260px]">
                <img
                  src={division.image}
                  alt={division.title}
                  className="w-full h-full object-cover filter brightness-90 saturate-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101016] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/[0.1] text-xs font-mono text-white flex items-center justify-between">
                  <span>{division.code}</span>
                  <span className="text-pink-400">UAE Accredited</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
