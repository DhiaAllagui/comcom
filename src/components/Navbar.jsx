import React, { useState, useEffect } from 'react';
import { agencyInfo, navLinks } from '../data/agencyData';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#08080A]/95 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl' 
          : 'bg-gradient-to-b from-[#08080A] via-[#08080A]/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official Brand Identity with User-Added Logo */}
          <a href="#" className="flex items-center gap-3.5 group" aria-label="COMCOM Group Homepage">
            <div className="flex items-center justify-center h-11 w-11 rounded-xl bg-white shadow-md group-hover:scale-105 transition-transform duration-300 p-1">
              <img 
                src="/comcom-emblem.webp" 
                alt="COMCOM Group Emblem" 
                className="h-full w-full object-contain"
              />
            </div>
            
            <div className="hidden sm:flex flex-col">
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
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest font-semibold text-slate-300 hover:text-white transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-neon-magenta transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Direct Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={agencyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/20 hover:border-emerald-400/50 hover:bg-emerald-900/30 transition-all"
              title="Direct WhatsApp Desk"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>+971 55 253 8556</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider bg-white hover:bg-neon-magenta text-black hover:text-white transition-all duration-300 shadow-md hover:scale-105"
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
              className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-emerald-400"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-3 px-6 pt-3 pb-8 bg-[#0C0C10] border-b border-white/[0.1] animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider uppercase text-slate-200 hover:text-neon-magenta py-1"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-white/[0.1] flex flex-col gap-3">
              <a
                href={agencyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +971 55 253 8556</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-heading font-bold text-xs uppercase tracking-wider"
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
