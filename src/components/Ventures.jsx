import React from 'react';
import { proprietaryLabels, digitalMagazines, podcastData } from '../data/agencyData';
import { ArrowUpRight, BookOpen, Mic, ExternalLink, Sparkles, Radio } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const SpotifyIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.485 17.306c-.215.353-.674.464-1.027.249-2.812-1.718-6.353-2.107-10.522-1.155-.403.093-.807-.16-.9-.564-.093-.404.16-.807.564-.9 4.567-1.042 8.49-.6 11.636 1.343.353.215.464.674.249 1.027zm1.464-3.256c-.27.44-.847.579-1.287.309-3.22-1.979-8.128-2.551-11.937-1.394-.497.151-1.026-.134-1.177-.631-.151-.497.134-1.026.631-1.177 4.356-1.323 9.774-.684 13.464 1.583.44.27.579.847.309 1.31zm.126-3.39c-3.86-2.292-10.228-2.503-13.897-1.389-.592.18-1.222-.153-1.402-.745-.18-.592.153-1.222.745-1.402 4.225-1.282 11.258-1.036 15.688 1.593.533.316.708 1.007.392 1.54-.316.533-1.007.708-1.526.403z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TikTokIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);


function LabelCard({ label, idx }) {
  const [ref, isVisible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} card-surface spotlight-card p-8 flex flex-col justify-between space-y-6 border border-border-default hover:border-accent/40 transition-all`}
      style={{ transitionDelay: `${idx * 60}ms` }}
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-display font-medium text-2xl text-ink-primary tracking-tight">
            {label.abbr}
          </span>
          <span className="badge-mono">
            {label.badge}
          </span>
        </div>

        <h3 className="font-display font-medium text-lg text-ink-primary mb-1">
          {label.name}
        </h3>

        <div className="text-xs font-mono text-accent-strong mb-4">
          {label.focus}
        </div>

        <p className="text-ink-secondary text-xs sm:text-sm leading-relaxed">
          {label.description}
        </p>
      </div>

      <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
        <span className="text-[11px] font-mono text-ink-tertiary">Proprietary IP</span>
        <a href="#contact" className="text-xs font-semibold uppercase tracking-widest text-ink-primary hover:text-accent-strong flex items-center gap-1 transition-colors">
          <span>Inquire</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

function MagazineCard({ mag, idx }) {
  const [ref, isVisible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} card-surface p-6 flex flex-col justify-between space-y-4 border border-border-subtle hover:border-accent/40 transition-all`}
      style={{ transitionDelay: `${idx * 60}ms` }}
    >
      <div>
        <div className="w-10 h-10 rounded-sm border border-border-subtle flex items-center justify-center text-accent-strong mb-4">
          <BookOpen className="w-5 h-5" />
        </div>

        <h3 className="font-display font-medium text-xl text-ink-primary mb-1">
          {mag.name}
        </h3>

        <div className="text-[11px] font-mono text-accent-strong mb-3">
          {mag.category}
        </div>

        <p className="text-ink-tertiary text-xs leading-relaxed">
          {mag.description}
        </p>
      </div>

      <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-ink-tertiary">
        <span>Digital Issue</span>
        <a href="#contact" className="hover:text-ink-primary transition-colors flex items-center gap-1">
          <span>Explore</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export default function Ventures() {
  const [headerRef1, headerVisible1] = useReveal();
  const [headerRef2, headerVisible2] = useReveal();

  return (
    <section id="labels-publishing" className="relative py-28 bg-surface-base border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Part 1: Proprietary Specialized Labels */}
        <div>
          <div ref={headerRef1} className={`reveal-blur ${headerVisible1 ? 'is-visible' : ''} max-w-3xl mb-16 space-y-3`}>
            <span className="eyebrow block">
              // 03 PROPRIETARY BRAND IP
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-ink-primary tracking-tight">
              Proprietary Labels &amp; International Academies
            </h2>
            <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
              Autonomous operating brands scaling influencer ecosystems, healthcare logistics, and venture acceleration across the MENA region and Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proprietaryLabels.map((label, idx) => (
              <LabelCard key={label.abbr} label={label} idx={idx} />
            ))}
          </div>
        </div>

        {/* Part 2: Digital Media Publishing Platforms & Podcast Network */}
        <div id="media">
          <div ref={headerRef2} className={`reveal-blur ${headerVisible2 ? 'is-visible' : ''} max-w-3xl mb-16 space-y-3`}>
            <span className="eyebrow block">
              // 04 DIGITAL MEDIA &amp; SYNDICATION
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-ink-primary tracking-tight">
              Digital Publishing &amp; Original Podcast Network
            </h2>
            <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
              COMCOM Group publishes digital media magazines and original narrative podcasts delivering high-value insights, cultural narratives, and sector-specific innovations.
            </p>
          </div>

          {/* 4 Magazines Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {digitalMagazines.map((mag, idx) => (
              <MagazineCard key={mag.name} mag={mag} idx={idx} />
            ))}
          </div>

          {/* Featured Podcast Production Banner: Drawers (أدراج) by Rola Khayat & Énergie + */}
          <div id="podcast" className="card-surface p-6 sm:p-8 lg:p-10 border border-accent/40 rounded-sm relative overflow-hidden shadow-2xl group">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/25 transition-all" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Podcast Cover Artwork using adraj.jpg */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-[320px] aspect-square rounded-sm overflow-hidden border border-border-default shadow-2xl group/img bg-void">
                  <img
                    src={podcastData.coverImage || "/adraj.jpg"}
                    alt={`${podcastData.flagshipTitle} Podcast with ${podcastData.host}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/10 to-transparent pointer-events-none" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="badge-mono text-[9px] bg-void/80 backdrop-blur-md text-accent-strong border border-accent/30">
                      OFFICIAL SHOW ARTWORK
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-ink-primary">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded-full bg-accent text-white">
                        <Mic className="w-3 h-3" />
                      </div>
                      <span className="font-semibold text-[11px] truncate">{podcastData.flagshipTitle}</span>
                    </div>
                    <span className="text-[10px] text-ink-tertiary font-mono">Season 01</span>
                  </div>
                </div>
              </div>

              {/* Podcast Details */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-sm bg-accent/20 border border-accent/40 text-accent-strong">
                    <Mic className="w-4 h-4" />
                  </div>
                  <span className="badge-mono text-[10px] text-accent-strong">
                    ORIGINAL NARRATIVE PODCAST NETWORK
                  </span>
                  <span className="text-xs font-mono text-ink-tertiary hidden sm:inline">
                    · {podcastData.producer}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-medium text-2xl sm:text-4xl text-ink-primary tracking-tight">
                    "{podcastData.flagshipTitle}" <span className="text-ink-secondary font-normal text-lg sm:text-xl block sm:inline">by {podcastData.host}</span>
                  </h3>
                  <div className="text-xs font-mono text-accent-strong mt-1">
                    Featured Master Series · Also producing "{podcastData.secondaryPodcast}"
                  </div>
                </div>

                {/* Poetic Arabic Quote */}
                <div className="p-4 rounded-sm bg-void/90 border border-border-subtle border-r-2 border-r-accent">
                  <p className="text-sm sm:text-base text-ink-primary font-serif italic text-right leading-relaxed font-arabic" dir="rtl">
                    "{podcastData.quoteAr}"
                  </p>
                  <p className="text-xs text-ink-tertiary mt-2 leading-relaxed">
                    "{podcastData.quoteEn}"
                  </p>
                </div>
              </div>

              {/* Streaming Badges with Branded Platform Icons */}
              <div className="lg:col-span-3 flex flex-col gap-2.5 w-full">
                <a
                  href={podcastData.links.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-sm bg-void hover:bg-emerald-600 hover:text-white border border-border-subtle text-xs font-mono text-ink-primary transition-all flex items-center justify-between gap-3 group/link shadow-sm"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <SpotifyIcon className="w-4 h-4 text-emerald-400 group-hover/link:text-white flex-shrink-0 transition-colors" />
                    <span className="font-semibold truncate">Listen on Spotify</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-400/80 group-hover/link:text-white flex-shrink-0 transition-transform group-hover/link:translate-x-0.5" />
                </a>

                <a
                  href={podcastData.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-sm bg-void hover:bg-pink-600 hover:text-white border border-border-subtle text-xs font-mono text-ink-primary transition-all flex items-center justify-between gap-3 group/link shadow-sm"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <InstagramIcon className="w-4 h-4 text-pink-400 group-hover/link:text-white flex-shrink-0 transition-colors" />
                    <span className="font-semibold truncate">Instagram @drawersofficiel</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-pink-400/80 group-hover/link:text-white flex-shrink-0 transition-transform group-hover/link:translate-x-0.5" />
                </a>

                <a
                  href={podcastData.links.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-sm bg-void hover:bg-cyan-600 hover:text-white border border-border-subtle text-xs font-mono text-ink-primary transition-all flex items-center justify-between gap-3 group/link shadow-sm"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <TikTokIcon className="w-4 h-4 text-cyan-400 group-hover/link:text-white flex-shrink-0 transition-colors" />
                    <span className="font-semibold truncate">TikTok @drawersofficiel</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400/80 group-hover/link:text-white flex-shrink-0 transition-transform group-hover/link:translate-x-0.5" />
                </a>

                <a
                  href={podcastData.links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-sm bg-void hover:bg-blue-600 hover:text-white border border-border-subtle text-xs font-mono text-ink-primary transition-all flex items-center justify-between gap-3 group/link shadow-sm"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <FacebookIcon className="w-4 h-4 text-blue-400 group-hover/link:text-white flex-shrink-0 transition-colors" />
                    <span className="font-semibold truncate">Facebook /drawersofficiel</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400/80 group-hover/link:text-white flex-shrink-0 transition-transform group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
