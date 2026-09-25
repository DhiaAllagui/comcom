import React from 'react';
import { useTranslation } from 'react-i18next';
import { agencyInfo, footerHubs } from '../data/agencyData';
import { MessageCircle } from 'lucide-react';
import comcomLogo from '../images/comcomadjutlogo.png';

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
  const { t } = useTranslation();

  return (
    <footer className="relative bg-void border-t border-border-subtle pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 4 Hub Pillars (USA, UAE, Tunisia, KSA) ── */}
        <div className="mb-16 pb-12 border-b border-border-subtle">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="eyebrow block mb-1">
                {t('footer.eyebrow')}
              </span>
              <h3 className="font-display font-medium text-2xl text-ink-primary">
                {t('footer.title')}
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
                  {t(`data.footerHubs.${idx}.title`, hub.title)}
                </div>
                <div className="font-display font-medium text-base text-ink-primary">
                  {t(`data.footerHubs.${idx}.entity`, hub.entity)}
                </div>
                <div className="font-mono text-[11px] text-ink-tertiary">
                  {t(`data.footerHubs.${idx}.address`, hub.address)}
                </div>
                <div className="pt-2 border-t border-border-subtle font-mono text-[10px] text-accent-strong">
                  {t(`data.footerHubs.${idx}.registration`, hub.registration)}
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
              <img
                src={comcomLogo}
                alt="COMCOM Group Emblem"
                loading="lazy"
                decoding="async"
                className="h-16 sm:h-20 w-auto object-contain shrink-0"
              />
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
                  {t('navbar.brandSubtitle')}
                </span>
              </div>
            </div>

            <p className="text-ink-tertiary text-xs sm:text-sm leading-relaxed max-w-sm">
              {t('footer.mission')}
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
              {t('footer.divisionsTitle')}
            </h4>
            <ul className="space-y-2 text-xs text-ink-tertiary">
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">{t('footer.divisions.d1')}</a></li>
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">{t('footer.divisions.d2')}</a></li>
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">{t('footer.divisions.d3')}</a></li>
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">{t('footer.divisions.d4')}</a></li>
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">{t('footer.divisions.d5')}</a></li>
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">{t('footer.divisions.d6')}</a></li>
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">{t('footer.divisions.d7')}</a></li>
              <li><a href="#divisions" className="hover:text-ink-primary transition-colors">{t('footer.divisions.d8')}</a></li>
            </ul>
          </div>

          {/* Proprietary Labels & Podcasts */}
          <div className="space-y-3">
            <h4 className="font-display font-medium text-xs uppercase tracking-widest text-ink-primary mb-4">
              {t('navbar.links.labelsMedia')}
            </h4>
            <ul className="space-y-2 text-xs text-ink-tertiary">
              <li><a href="#podcast" className="hover:text-accent-strong transition-colors font-medium text-ink-primary">★ Podcast: Drawers (أدراج)</a></li>
              <li><a href="#podcast" className="hover:text-accent-strong transition-colors">★ Podcast: Énergie +</a></li>
              <li><a href="#labels-publishing" className="hover:text-accent-strong transition-colors">CIA (Central Influencers Agency)</a></li>
              <li><a href="#labels-publishing" className="hover:text-ink-primary transition-colors">Influencers International Academy</a></li>
              <li><a href="#labels-publishing" className="hover:text-ink-primary transition-colors">Start Up Academy</a></li>
              <li><a href="#labels-publishing" className="hover:text-ink-primary transition-colors">IMS (Medical Services)</a></li>
              <li><a href="#tunisia-lab" className="hover:text-accent-strong transition-colors">{t('navbar.links.tunisiaLab')}</a></li>
            </ul>
          </div>

          {/* Digital Publishing & Corporate Contacts */}
          <div className="space-y-4 font-mono text-xs text-ink-tertiary">
            <div>
              <h4 className="font-display font-medium text-xs uppercase tracking-widest text-ink-primary mb-3">
                {t('ventures.magazinesTitle')}
              </h4>
              <ul className="space-y-1.5 text-xs text-ink-tertiary">
                <li><a href="#media" className="hover:text-accent-strong transition-colors">Influencers Mag</a></li>
                <li><a href="#media" className="hover:text-accent-strong transition-colors">Start Up Mag</a></li>
                <li><a href="#media" className="hover:text-accent-strong transition-colors">Mag Santé</a></li>
                <li><a href="#media" className="hover:text-accent-strong transition-colors">Destinations Mag</a></li>
              </ul>
            </div>

            <div className="pt-2 border-t border-border-subtle space-y-1">
              <div className="text-ink-primary font-semibold">{t('contact.title')}</div>
              <a href="mailto:contact@comcomgroupcompany.com" className="block text-ink-secondary hover:text-accent-strong transition-colors">
                contact@comcomgroupcompany.com
              </a>
              <a href="tel:+971553438881" className="block text-ink-secondary hover:text-accent-strong transition-colors">
                +971 55 343 8881
              </a>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-tertiary">
          <div>
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </div>
          <div className="flex items-center gap-6">
            <span className="text-ink-secondary">comcomgroupcompany.com</span>
            <span>·</span>
            <a href="#about" className="hover:text-ink-primary transition-colors">{t('hero.ctaSecondary')}</a>
            <span>·</span>
            <a href="#contact" className="hover:text-ink-primary transition-colors">{t('navbar.contact')}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
