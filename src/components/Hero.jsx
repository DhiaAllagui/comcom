import React from 'react';
import { quickStats, clientLogos } from '../data/agencyData';
import { ArrowRight, ArrowUpRight, ShieldCheck, Layers, Sparkles } from 'lucide-react';
import MotionPlayer from './MotionPlayer';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-32 pb-20 bg-[#08080A] overflow-hidden">
      
      {/* Cinematic Dark Background with Urban & Summit Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 filter saturate-125 brightness-75 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08080A] via-[#08080A]/85 to-[#08080A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080A] via-transparent to-[#08080A]" />
        
        {/* Architectural lighting bloom */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[400px] bg-neon-magenta/10 rounded-full blur-[170px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 my-auto">
        
        {/* Illuminated Official Emblem Insignia */}
        <div className="flex justify-center mb-6">
          <div className="relative p-2 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl group hover:scale-105 transition-all">
            <img 
              src="/comcom-emblem.webp" 
              alt="COMCOM Group Official Insignia" 
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-xl bg-white p-1"
            />
            <div className="absolute inset-0 rounded-2xl bg-neon-magenta/30 blur-xl -z-10 group-hover:bg-neon-magenta/60 transition-colors" />
          </div>
        </div>

        {/* Accreditation Overline Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-8">
          <ShieldCheck className="w-4 h-4 text-neon-magenta" />
          <span className="font-mono text-xs uppercase tracking-widest text-slate-300 font-semibold">
            UAE FREE ZONE ACCREDITED INTERNATIONAL HOLDING • DUBAI
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading font-black tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white max-w-5xl mx-auto leading-[1.05] mb-8">
          A Global Ecosystem of{' '}
          <span className="text-white relative">
            Creative Solutions
            <span className="block w-full h-[3px] bg-gradient-to-r from-neon-magenta via-pink-400 to-neon-cyan mt-1 rounded-full opacity-80"></span>
          </span>{' '}
          &amp; Media Production.
        </h1>

        {/* Subheadline from official document */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10 text-balance">
          COMCOM Group is a premier international creative solutions holding based in the United Arab Emirates. We unite accredited specialized agencies in audiovisual production, large-scale world expos, multichannel advertising, venture academies, and digital publishing.
        </p>

        {/* Division Quick Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mx-auto mb-12">
          {["COMCOM Studios", "COMCOM Events & Expo", "COMCOM Advertising & Media", "CIA Influencers Agency", "Enterprise Training & Trade"].map((d, i) => (
            <span key={i} className="font-mono text-xs px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300">
              {d}
            </span>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16">
          <a
            href="#divisions"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-neon-magenta text-black hover:text-white font-heading font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:scale-105 flex items-center justify-center gap-3"
          >
            <span>Explore Operating Divisions</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#brand-motion"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.1] text-white border border-white/[0.15] hover:border-white/[0.3] font-heading font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-neon-magenta" />
            <span>Watch Brand Motion Ident</span>
          </a>
        </div>

        {/* Brand Motion Video Ident Showcase */}
        <div id="brand-motion" className="max-w-4xl mx-auto mb-20 scroll-mt-28">
          <MotionPlayer className="aspect-video" />
        </div>

        {/* Verified Holding Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-8 border-t border-white/[0.08]">
          {quickStats.map((stat) => (
            <div key={stat.label} className="text-left space-y-1">
              <div className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Verified Partner Summits & Brands */}
      <div className="relative w-full border-t border-white/[0.08] bg-[#0A0A0E] py-5 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6 opacity-60">
          <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400">
            Proven Partner Track Record:
          </span>
          <div className="flex flex-wrap items-center gap-8 sm:gap-14">
            {clientLogos.map((logo) => (
              <span key={logo} className="font-heading font-black tracking-widest text-xs text-slate-300 hover:text-white transition-colors cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
