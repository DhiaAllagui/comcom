import React, { useState, useEffect } from 'react';
import { agencyInfo, navLinks } from '../data/agencyData';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Navbar() {
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-void/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3 sm:py-3.5'
          : 'bg-void/40 backdrop-blur-md border-b border-white/[0.04] py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* ── Left: Brand Identity ── */}
          <a
            href="#"
            className="flex items-center gap-3 group shrink-0"
            aria-label="COMCOM Group International Homepage"
          >
            {/* Logo Emblem */}
            <div className="relative flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-xl overflow-hidden bg-white/[0.03] border border-white/10 shadow-inner transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <img
                src="/comcom-emblem-square.png"
                alt="COMCOM Group Emblem"
                className="h-full w-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Brand Title & Subtitle */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-sans font-semibold tracking-tight text-[15px] sm:text-[16px] text-white group-hover:text-white/90 transition-colors">
                  COMCOM GROUP
                </span>
                <span className="text-[9px] uppercase tracking-wider font-mono font-medium px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-400">
                  International
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 font-normal tracking-tight hidden sm:inline">
                Delaware Holding · Global Operations
              </span>
            </div>
          </a>

          {/* ── Center: Primary Navigation Links (Fintech Pill Dock) ── */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md shadow-inner shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`whitespace-nowrap text-xs xl:text-sm font-medium px-2.5 xl:px-3.5 py-1.5 rounded-full transition-all duration-200 select-none ${
                  activeLink === link.href
                    ? 'text-white bg-white/[0.1] shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Right: Action Items & CTAs ── */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* WhatsApp Quick Desk */}
            <a
              href={agencyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 shadow-sm"
              title="Direct WhatsApp Desk"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Primary High-Contrast Contact Button */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[12px] font-semibold text-black bg-white hover:bg-zinc-100 transition-all duration-200 shadow-[0_0_20px_-3px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_-2px_rgba(255,255,255,0.45)]"
            >
              <span>Contact Group</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>

          {/* ── Mobile Trigger ── */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={agencyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-white/10 bg-white/[0.03] text-emerald-400"
              aria-label="Direct WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile Slide-Over Sheet / Dropdown ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] sm:top-[73px] bg-void/95 backdrop-blur-2xl z-40 border-t border-white/[0.08] flex flex-col justify-between p-6 sm:p-8 animate-fadeIn">
          
          {/* Navigation Links */}
          <div className="flex flex-col gap-1 py-4">
            <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-mono font-medium px-3 mb-2">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-300 hover:text-white px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-zinc-600 text-sm">→</span>
              </a>
            ))}
          </div>

          {/* Mobile Bottom Actions */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
            <a
              href={agencyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-medium text-zinc-200 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Production Desk</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold text-black bg-white hover:bg-zinc-200 transition-all shadow-lg"
            >
              <span>Contact Group</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="pt-2 text-center text-xs text-zinc-400 font-mono">
              COMCOM GROUP LLC · Delaware #10321177
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
