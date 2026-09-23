import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { agencyInfo, navLinks } from '../data/agencyData';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import comcomLogo from '../images/comcomadjutlogo.png';
import LanguageSwitcher from './LanguageSwitcher';
import { SUPPORTED_LOCALES, LOCALE_META } from '../i18n/config';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 start-0 end-0 z-50 transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? 'bg-void border-b border-white/[0.08] py-3 sm:py-3.5 shadow-xl'
            : isScrolled
            ? 'bg-void/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3 sm:py-3.5'
            : 'bg-void/40 backdrop-blur-md border-b border-white/[0.04] py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* ── Start: Brand Identity ── */}
            <a
              href="#holding"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 group shrink-0"
              aria-label="COMCOM Group International Homepage"
            >
              {/* Logo Emblem */}
              <img
                src={comcomLogo}
                alt="COMCOM Group Emblem"
                loading="eager"
                fetchPriority="high"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />

              {/* Brand Title & Subtitle */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-sans font-semibold tracking-tight text-[15px] sm:text-[16px] text-white group-hover:text-white/90 transition-colors">
                    {t('navbar.brandName')}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider font-mono font-medium px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-400">
                    {t('navbar.brandBadge')}
                  </span>
                </div>
                <span className="text-[11px] text-zinc-400 font-normal tracking-tight hidden sm:inline">
                  {t('navbar.brandSubtitle')}
                </span>
              </div>
            </a>

            {/* ── Center: Primary Navigation Links (Desktop >= lg) ── */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md shadow-inner shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.labelKey}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`whitespace-nowrap text-xs xl:text-sm font-medium px-2.5 xl:px-3.5 py-1.5 rounded-full transition-all duration-200 select-none ${
                    activeLink === link.href
                      ? 'text-white bg-white/[0.1] shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {t(`navbar.links.${link.labelKey}`)}
                </a>
              ))}
            </nav>

            {/* ── End: Action Items & CTAs (Desktop >= lg) ── */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              {/* Language Switcher Dropdown */}
              <LanguageSwitcher />

              {/* WhatsApp Quick Desk */}
              <a
                href={agencyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 shadow-sm"
                title={t('navbar.whatsappAria')}
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t('navbar.whatsapp')}</span>
              </a>

              {/* Primary High-Contrast Contact Button */}
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[12px] font-semibold text-black bg-white hover:bg-zinc-100 transition-all duration-200 shadow-[0_0_20px_-3px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_-2px_rgba(255,255,255,0.45)]"
              >
                <span>{t('navbar.contact')}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-black/70 rtl-flip group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>

            {/* ── Mobile Trigger (Clean burger toggle on screens < lg) ── */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-zinc-200 hover:text-white hover:bg-white/[0.08] transition-all focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={mobileMenuOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Mobile Slide-Over Drawer (Sibling of header to avoid backdrop-filter fixed clipping) ── */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-void/98 backdrop-blur-2xl overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={t('navbar.navigation')}
        >
          <div className="min-h-full flex flex-col justify-between pt-20 sm:pt-24 pb-8 px-6 sm:px-8 max-w-lg mx-auto">

            {/* Top Section: Language Segmented Bar + Nav Links */}
            <div className="flex flex-col gap-6">

              {/* Language Selector: Touch-Friendly Segmented Pill Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono font-medium">
                  {t('navbar.navigation')}
                </span>
                <div className="flex items-center gap-1 p-1 bg-white/[0.04] border border-white/10 rounded-full">
                  {SUPPORTED_LOCALES.map((loc) => {
                    const isActive = (i18n.resolvedLanguage || 'en') === loc;
                    return (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => i18n.changeLanguage(loc)}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${
                          isActive
                            ? 'bg-accent text-white shadow-sm'
                            : 'text-zinc-400 hover:text-white'
                        } ${loc === 'ar' ? 'font-arabic' : ''}`}
                      >
                        {LOCALE_META[loc]?.label || loc.toUpperCase()}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.labelKey}
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.href);
                      setMobileMenuOpen(false);
                    }}
                    className="text-lg font-medium text-zinc-200 hover:text-white px-3.5 py-3 rounded-xl hover:bg-white/[0.05] transition-all flex items-center justify-between group"
                  >
                    <span>{t(`navbar.links.${link.labelKey}`)}</span>
                    <span className="text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-1 rtl-flip transition-all text-sm">
                      →
                    </span>
                  </a>
                ))}
              </nav>

            </div>

            {/* Bottom Section: WhatsApp Direct Desk + High-Contrast Contact CTA */}
            <div className="pt-6 mt-6 border-t border-white/[0.08] flex flex-col gap-3">
              <a
                href={agencyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-sm font-medium text-emerald-400 bg-emerald-500/[0.08] border border-emerald-500/20 hover:bg-emerald-500/[0.15] transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{t('navbar.whatsappFull')}</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-full text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all shadow-lg"
              >
                <span>{t('navbar.contact')}</span>
                <ArrowUpRight className="w-4 h-4 rtl-flip" />
              </a>

              <div className="pt-2 text-center text-[11px] text-zinc-500 font-mono">
                {t('navbar.legalLine')}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
