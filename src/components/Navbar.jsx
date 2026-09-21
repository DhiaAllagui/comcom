import React, { useState, useEffect } from 'react';
import { agencyInfo, navLinks } from '../data/agencyData';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-void/90 backdrop-blur-md border-b border-border-subtle py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand */}
          <a href="#" className="flex items-center gap-3.5 group" aria-label="COMCOM Group Homepage">
            <div className="flex items-center justify-center h-10 w-10 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/comcom-logo-wordmark.png"
                alt="COMCOM Group Emblem"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="hidden sm:flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-medium tracking-tight text-lg text-ink-primary">
                  COMCOM
                </span>
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded-sm bg-white/[0.06] text-ink-secondary uppercase tracking-widest">
                  Group
                </span>
              </div>
              <span className="text-[10px] tracking-wider uppercase font-mono text-ink-tertiary">
                Creative Solutions · UAE Holding
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] uppercase tracking-widest font-medium text-ink-secondary hover:text-ink-primary transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-px bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            ))}
          </nav>

          {/* Direct Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={agencyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-sm text-xs font-mono font-medium text-ink-secondary border border-border-subtle hover:border-border-default hover:text-ink-primary transition-all"
              title="Direct WhatsApp Desk"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>+971 55 253 8556</span>
            </a>

            <a
              href="#contact"
              className="btn-primary flex items-center gap-2 !px-5 !py-2.5"
            >
              <span>Contact Group</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={agencyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-11 min-h-11 flex items-center justify-center rounded-sm border border-border-subtle text-ink-secondary"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-11 min-h-11 flex items-center justify-center rounded-sm border border-border-subtle text-ink-primary"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 top-0 bg-void flex flex-col justify-center px-8 z-40 overflow-y-auto">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-4 min-w-11 min-h-11 flex items-center justify-center rounded-sm border border-border-subtle text-ink-primary"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-3xl text-ink-primary hover:text-accent-strong transition-colors animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-8 border-t border-border-subtle flex flex-col gap-3 mt-4">
              <a
                href={agencyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +971 55 253 8556</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <span>Contact Group</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
