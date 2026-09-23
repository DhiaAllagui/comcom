import React from 'react';
import { agencyInfo, footerHubs } from '../data/agencyData';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);


const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative bg-void border-t border-border-subtle pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 4 Hub Pillars (USA, UAE, Tunisia, KSA) ── */}
        <div className="mb-16 pb-12 border-b border-border-subtle">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="eyebrow block mb-1">
                // Global Footprint Architecture
              </span>
              <h3 className="font-display font-medium text-2xl text-ink-primary">
                Four Strategic Jurisdictions. One Unified Operation.
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {footerHubs.map((hub, idx) => (
              <div
                key={idx}
                className="card-surface p-5 border border-border-subtle hover:border-accent/30 transition-all rounded-sm space-y-2"
              >
                <div className="text-xs font-mono text-accent-strong font-bold uppercase tracking-wider">
                  {hub.title}
                </div>
                <div className="font-display font-medium text-base text-ink-primary">
                  {hub.entity}
                </div>
                <div className="font-mono text-[11px] text-ink-tertiary">
                  {hub.address}
                </div>
                <div className="pt-2 border-t border-border-subtle font-mono text-[10px] text-accent-strong">
                  {hub.registration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main Sitemap Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="flex items-center justify-center h-11 w-11 rounded-sm bg-void/90 border border-border-subtle p-1 hover:border-accent/40 transition-colors">
                <img
                  src="/comcom-emblem-square.webp"
                  alt="COMCOM Group Emblem"
                  loading="lazy"
                  decoding="async"
                  width="44"
                  height="44"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-medium tracking-tight text-lg text-ink-primary">
                    COMCOM GROUP
                  </span>
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded-sm bg-accent/15 text-accent-strong font-bold uppercase tracking-widest border border-accent/30">
                    INTERNATIONAL
                  </span>
                </div>
                <span className="text-[10px] tracking-wider uppercase font-mono text-ink-tertiary">
                  Delaware Holding · Global Media Conglomerate
                </span>
              </div>
            </div>

            <p className="text-ink-tertiary text-xs sm:text-sm leading-relaxed max-w-sm">
              Conceiving, producing, amplifying, and scaling transformative media, world-class experiential summits, and commercial ventures across North America, the GCC, and North Africa.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={agencyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-sm border border-border-subtle hover:border-border-default text-ink-tertiary hover:text-ink-primary flex items-center justify-center transition-colors"
                aria-label="Direct WhatsApp Production Line"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={agencyInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-sm border border-border-subtle hover:border-border-default text-ink-tertiary hover:text-ink-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={agencyInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-sm border border-border-subtle hover:border-border-default text-ink-tertiary hover:text-ink-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={agencyInfo.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-sm border border-border-subtle hover:border-border-default text-ink-tertiary hover:text-ink-primary flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Operating Divisions */}
          <div className="space-y-3">
            <h4 className="font-display font-medium text-xs uppercase tracking-widest text-ink-primary mb-4">
              Operational Divisions
            </h4>
            <ul className="space-y-2 text-xs text-ink-tertiary">
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">1. Advertising &amp; Brand Motion</a></li>
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">2. Event &amp; Expo Megastructures</a></li>
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">3. Entertainment &amp; Concert Tours</a></li>
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">4. Consulting &amp; Public Affairs</a></li>
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">5. Executive Learning &amp; Academies</a></li>
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">6. Tourism &amp; Destination IP</a></li>
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">7. Trading &amp; Merchandising</a></li>
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">8. Strategic Communications &amp; PR</a></li>
            </ul>
          </div>

          {/* Proprietary Labels & Podcasts */}
          <div className="space-y-3">
            <h4 className="font-display font-medium text-xs uppercase tracking-widest text-ink-primary mb-4">
              Ventures &amp; Media
            </h4>
            <ul className="space-y-2 text-xs text-ink-tertiary">
              <li><a href="#podcast" className="hover:text-accent-strong transition-colors font-medium text-ink-primary">★ Podcast: Drawers (أدراج)</a></li>
              <li><a href="#podcast" className="hover:text-accent-strong transition-colors">★ Podcast: Énergie +</a></li>
              <li><a href="#labels-publishing" className="hover:text-accent-strong transition-colors">CIA (Central Influencers Agency)</a></li>
              <li><a href="#labels-publishing" className="hover:text-ink-primary transition-colors">Influencers International Academy</a></li>
              <li><a href="#labels-publishing" className="hover:text-ink-primary transition-colors">Start Up Academy</a></li>
              <li><a href="#labels-publishing" className="hover:text-ink-primary transition-colors">IMS (Medical Services)</a></li>
              <li><a href="#tunisia-lab" className="hover:text-accent-strong transition-colors">The Tunisia Production Lab</a></li>
            </ul>
          </div>

          {/* Digital Publishing & Corporate Contacts */}
          <div className="space-y-4 font-mono text-xs text-ink-tertiary">
            <div>
              <h4 className="font-display font-medium text-xs uppercase tracking-widest text-ink-primary mb-3">
                Digital Publishing
              </h4>
              <ul className="space-y-1.5 text-xs text-ink-tertiary">
                <li><a href="#media" className="hover:text-accent-strong transition-colors">Influencers Mag</a></li>
                <li><a href="#media" className="hover:text-accent-strong transition-colors">Start Up Mag</a></li>
                <li><a href="#media" className="hover:text-accent-strong transition-colors">Mag Santé</a></li>
                <li><a href="#media" className="hover:text-accent-strong transition-colors">Destinations Mag</a></li>
              </ul>
            </div>

            <div className="pt-2 border-t border-border-subtle space-y-1">
              <div className="text-ink-primary font-semibold">Institutional Inquiries</div>
              <div>holding@comcomgroupcompany.com</div>
              <div>UAE Desk: +971 55 253 8556</div>
              <div>Tunisia Desk: +216 29 271 278</div>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-tertiary">
          <div>
            © {new Date().getFullYear()} COMCOM GROUP LLC (Delaware #10321177, EIN 98-1880888). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-ink-secondary">comcomgroupcompany.com</span>
            <span>·</span>
            <a href="#about" className="hover:text-ink-primary transition-colors">Statutory Governance</a>
            <span>·</span>
            <a href="#contact" className="hover:text-ink-primary transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
