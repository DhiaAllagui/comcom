import React from 'react';
import { agencyInfo, navLinks, divisions, proprietaryLabels, digitalMagazines } from '../data/agencyData';
import { MessageCircle } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-[#070709] border-t border-white/[0.08] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white shadow-md p-1">
                <img
                  src="/comcom-emblem.webp"
                  alt="COMCOM Group Emblem"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-black tracking-tight text-lg text-white">
                    COMCOM
                  </span>
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/[0.08] text-slate-300 uppercase tracking-widest">
                    GROUP
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-mono text-slate-400">
                  Creative Solutions • UAE Holding
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              An international creative solutions holding based in the United Arab Emirates. Operating Free Zone accredited specialized agencies in audiovisual production, large-scale exhibitions, multichannel advertising, venture academies, and digital publishing.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={agencyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-emerald-950/60 border border-white/[0.08] hover:border-emerald-500/40 text-slate-400 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={agencyInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={agencyInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href={agencyInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Operating Divisions */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4">
              Operating Divisions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#divisions" className="hover:text-white transition-colors">
                  COMCOM Studios
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-white transition-colors">
                  COMCOM Events &amp; Expo
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-white transition-colors">
                  COMCOM Advertising &amp; Media
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-white transition-colors">
                  COMCOM Training
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-white transition-colors">
                  COMCOM Tourism
                </a>
              </li>
              <li>
                <a href="#divisions" className="hover:text-white transition-colors">
                  COMCOM Trading
                </a>
              </li>
            </ul>
          </div>

          {/* Proprietary Labels */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-4">
              Labels &amp; Academies
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#labels" className="hover:text-pink-300 transition-colors">
                  CIA (Central Influencers Agency)
                </a>
              </li>
              <li>
                <a href="#labels" className="hover:text-white transition-colors">
                  Influencers International Academy
                </a>
              </li>
              <li>
                <a href="#labels" className="hover:text-white transition-colors">
                  Start Up Academy
                </a>
              </li>
              <li>
                <a href="#labels" className="hover:text-white transition-colors">
                  IMS (Medical Services)
                </a>
              </li>
              <li>
                <a href="#labels" className="hover:text-white transition-colors">
                  ITS (Tourism Services)
                </a>
              </li>
            </ul>
          </div>

          {/* Digital Magazines & Headquarters */}
          <div className="space-y-4 font-mono text-xs text-slate-400">
            <div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-white mb-3">
                Digital Publishing
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li><a href="#media" className="hover:text-neon-cyan transition-colors">Influencers Mag</a></li>
                <li><a href="#media" className="hover:text-neon-cyan transition-colors">Start Up Mag</a></li>
                <li><a href="#media" className="hover:text-neon-cyan transition-colors">Mag Santé</a></li>
                <li><a href="#media" className="hover:text-neon-cyan transition-colors">Destinations Mag</a></li>
              </ul>
            </div>

            <div className="pt-2 border-t border-white/[0.08]">
              <div className="text-white font-semibold mb-1">Dubai Headquarters</div>
              <div>{agencyInfo.hq}</div>
              <div>Phone: {agencyInfo.phone}</div>
              <div>Email: {agencyInfo.email}</div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} COMCOM GROUP FZC LLC. All rights reserved. Free Zone Accredited, Dubai, UAE.
          </div>
          <div className="flex items-center gap-6">
            <span>comcomgroup.com</span>
            <span>•</span>
            <a href="#divisions" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
