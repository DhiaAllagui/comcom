import React from 'react';
import { agencyInfo } from '../data/agencyData';
import { ShieldCheck, Globe, Users, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-[#08080A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Holding Story */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-neon-magenta font-semibold block">
              About COMCOM Group
            </span>

            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              An International Creative Solutions Holding in the UAE.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              <strong className="text-white">COMCOM Group (Creative Solutions)</strong> is an international holding company based in the United Arab Emirates. With agencies accredited by the Free Zone, we provide leading expertise across advertising, media, training, events &amp; expos, tourism, and global trading.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Our multidisciplinary team comprises film directors, editors, animators, cinematographers, marketing strategists, and event logistics experts. By operating specialized agencies in synergy, we deliver innovative solutions tailored to the diverse needs of global clients.
            </p>

            {/* Strategic Pillars from Document */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#111116] border border-white/[0.08] space-y-1">
                <div className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                  <span className="text-neon-magenta font-bold">01</span>
                  <span>Innovation</span>
                </div>
                <p className="text-xs text-slate-400">
                  Leveraging cutting-edge technologies to captivate global audiences.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#111116] border border-white/[0.08] space-y-1">
                <div className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                  <span className="text-neon-cyan font-bold">02</span>
                  <span>Client Focus</span>
                </div>
                <p className="text-xs text-slate-400">
                  Customized, flexible solutions designed around unique project needs.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#111116] border border-white/[0.08] space-y-1">
                <div className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                  <span className="text-pink-300 font-bold">03</span>
                  <span>Excellence</span>
                </div>
                <p className="text-xs text-slate-400">
                  Rigorous, transparent process delivering projects on time to highest standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Official Logo & Insignia Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#121217] border border-white/[0.1] shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
              
              {/* Dual Emblem & Logo Display */}
              <div className="w-full flex flex-col sm:flex-row items-center gap-4 mb-6">
                <div className="w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center p-2 flex-shrink-0">
                  <img
                    src="/comcom-emblem.webp"
                    alt="COMCOM Group Insignia Emblem"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-full h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center p-3">
                  <img
                    src="/comcom-logo-full.jpeg"
                    alt="COMCOM Group FZC LLC Official Brand Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="font-heading font-black text-xl text-white mb-1">
                COMCOM GROUP (CREATIVE SOLUTIONS)
              </div>

              <div className="font-mono text-xs text-neon-magenta uppercase tracking-widest font-semibold mb-3">
                UAE Free Zone Accredited Holding
              </div>

              <p className="text-xs text-slate-400 font-mono leading-relaxed mb-6">
                Registered in Dubai, United Arab Emirates, overseeing specialized subsidiaries: COMCOM Studios, COMCOM Events &amp; Expo, COMCOM Advertising &amp; Media, and proprietary venture academies.
              </p>

              {/* Verified Motion Ident Link */}
              <div className="w-full pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Motion Architecture</span>
                <a href="#brand-motion" className="text-pink-400 hover:text-white flex items-center gap-1 transition-colors">
                  <span>Play Brand Film</span>
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
