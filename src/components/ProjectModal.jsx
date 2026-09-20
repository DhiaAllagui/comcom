import React, { useEffect, useState } from 'react';
import { X, MapPin, Calendar, ArrowRight, ChevronLeft, ChevronRight, MessageCircle, Check } from 'lucide-react';
import { agencyInfo } from '../data/agencyData';

export default function ProjectModal({ project, onClose }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, activeImageIdx]);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.thumbnail];

  const handleNext = () => setActiveImageIdx((prev) => (prev + 1) % images.length);
  const handlePrev = () => setActiveImageIdx((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl rounded-3xl bg-[#0F0F14] border border-white/[0.12] shadow-2xl overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0A0A0E]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/[0.06] text-slate-200 font-semibold">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Client: <strong className="text-white">{project.client}</strong>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.15] text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Photo Preview */}
          <div className="space-y-3">
            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-black group border border-white/[0.08]">
              <img
                src={images[activeImageIdx]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-all opacity-80 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-all opacity-80 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/[0.1] font-mono">
                <span>{project.title}</span>
                <span className="text-slate-400">{activeImageIdx + 1} / {images.length}</span>
              </div>
            </div>

            {images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIdx(i)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden border flex-shrink-0 transition-all ${
                      activeImageIdx === i ? 'border-neon-magenta scale-105' : 'border-white/[0.1] opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neon-magenta" />
                {project.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.year}
              </span>
            </div>

            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white mb-4">
              {project.title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {project.summary}
            </p>

            {project.scope && (
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-6">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Scope of Agency Delivery
                </div>
                <div className="text-sm font-semibold text-white">
                  {project.scope}
                </div>
              </div>
            )}
          </div>

          {/* Impact Stats */}
          {project.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#14141B] border border-white/[0.08]">
              {Object.entries(project.stats).map(([k, v]) => (
                <div key={k} className="space-y-1">
                  <div className="font-mono text-[10px] uppercase text-slate-400 tracking-wider">
                    {k}
                  </div>
                  <div className="font-heading font-bold text-lg text-white">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Deliverables */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white mb-3">
              Key Deliverables &amp; Execution
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm text-slate-300">
                  <span className="text-neon-magenta font-bold">✦</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-[#0A0A0E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono">
            Direct coordination available via Dubai Executive Desk.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/971552538556?text=Hello%20COMCOM%20Group%2C%20I%20am%20interested%20in%20a%20production%20similar%20to%20your%20case%20study%3A%20${encodeURIComponent(project.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold flex items-center justify-center gap-2 hover:bg-emerald-900/40 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Production Desk</span>
            </a>

            <a
              href="#contact"
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-white hover:bg-neon-magenta text-black hover:text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <span>Initiate Brief</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
