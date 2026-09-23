import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AudienceRouter from './components/AudienceRouter';
import Services from './components/Services';
import Ventures from './components/Ventures';
import TunisiaLab from './components/TunisiaLab';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HourglassSpinner from './components/HourglassSpinner';
import { agencyInfo } from './data/agencyData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 1900);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-void text-ink-primary selection:bg-accent selection:text-white relative">
      {/* ── Brand Preloader with Animated Hourglass ── */}
      {!removed && (
        <div
          className={`fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center transition-all duration-700 ${
            loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none scale-95'
          }`}
          aria-hidden={!loading}
        >
          <div className="flex flex-col items-center gap-6">
            <HourglassSpinner size={56} color="#E31A94" glow={true} />
            <div className="text-center space-y-1.5 animate-pulse">
              <div className="font-display font-medium text-lg tracking-wider text-ink-primary">
                COMCOM GROUP
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent-strong font-semibold">
                Delaware Holding · Global Media Conglomerate
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header Navigation */}
      <Navbar />

      {/* Main Agency & Conglomerate Architecture */}
      <main>
        {/* 1. Global Holding & Tri-Engine Hero with Transcoded Video Background */}
        <Hero />

        {/* 2. Three Intent Pathways (Investors, Brands & Governments, Talent) */}
        <AudienceRouter />

        {/* 3. The Tri-Engine Model & 8 Operational Divisions */}
        <Services />

        {/* 4. Proprietary Labels, Digital Magazines & Featured Podcast ("Drawers — أدراج") */}
        <Ventures />

        {/* 5. "The Lab" & Regional Production Hub (Tunisia: Winkom, COM COM, Pro Skills, Magic Box) */}
        <TunisiaLab />

        {/* 6. Proven Track Record & Global Summits (AAIC Riyadh, Street Food Fest Tunis, Rap Tour) */}
        <Portfolio />

        {/* 7. Institutional Corporate Governance & Delaware Holding */}
        <About />

        {/* 8. Global Briefing & Institutional Inquiries */}
        <ContactSection />
      </main>

      {/* 9. Global Footprint 4-Hub Pillars & Unified Footer */}
      <Footer />

      {/* Scroll to Top */}
      <ScrollToTop />

      {/* Direct WhatsApp Action Button */}
      <aside aria-label="Direct contact" className="fixed bottom-6 right-6 z-40">
        <a
          href={agencyInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 transition-all"
          aria-label="Direct WhatsApp Production Line"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          <span className="hidden sm:inline font-mono">WhatsApp Desk</span>
        </a>
      </aside>
    </div>
  );
}
