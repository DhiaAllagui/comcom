import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Ventures from './components/Ventures';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { agencyInfo } from './data/agencyData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08080A] text-[#F3F4F6] selection:bg-neon-magenta selection:text-white relative">
      {/* Header */}
      <Navbar />

      {/* Main Agency Sections */}
      <main>
        <Hero />
        <Services />
        <Ventures />
        <Portfolio />
        <About />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Direct WhatsApp Action */}
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
