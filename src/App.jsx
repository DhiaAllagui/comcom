import React from 'react';
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
import { agencyInfo } from './data/agencyData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-void text-ink-primary selection:bg-accent selection:text-white relative">
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
