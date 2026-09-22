import React, { useEffect, useState } from 'react';
import { X, MapPin, Calendar, ArrowRight, ChevronLeft, ChevronRight, MessageCircle, ExternalLink } from 'lucide-react';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      style={{ background: 'var(--overlay-scrim)', backdropFilter: 'blur(12px)' }}
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl rounded-sm bg-surface-elevated border border-border-default shadow-lg overflow-hidden z-10 flex flex-col max-h-[92vh]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-void">
          <div className="flex items-center gap-3">
            <span className="badge-mono">
              {project.category}
            </span>
            <span className="text-xs text-ink-tertiary font-mono hidden sm:inline">
              Client: <strong className="text-ink-primary">{project.client}</strong>
            </span>
          </div>

          <button
            onClick={onClose}
            className="min-w-11 min-h-11 flex items-center justify-center rounded-sm border border-border-subtle hover:border-border-default text-ink-secondary hover:text-ink-primary transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">

          {/* Main Photo Preview */}
          <div className="space-y-3">
            <div className="relative w-full h-72 sm:h-96 rounded-sm overflow-hidden bg-black group border border-border-subtle">
              <img
                src={images[activeImageIdx]}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 min-w-11 min-h-11 flex items-center justify-center rounded-full bg-void/70 hover:bg-void text-ink-primary transition-all opacity-80 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 min-w-11 min-h-11 flex items-center justify-center rounded-full bg-void/70 hover:bg-void text-ink-primary transition-all opacity-80 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-ink-primary bg-void/90 px-4 py-2 rounded-sm border border-border-subtle font-mono">
                <span>{project.title}</span>
                <span className="text-ink-tertiary">{activeImageIdx + 1} / {images.length}</span>
              </div>
            </div>

            {images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIdx(i)}
                    aria-label={`View image ${i + 1} of ${images.length}`}
                    aria-current={activeImageIdx === i ? 'true' : undefined}
                    className={`relative w-20 h-14 rounded-sm overflow-hidden border flex-shrink-0 transition-all ${
                      activeImageIdx === i ? 'border-accent' : 'border-border-subtle opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Project Details */}
          <div>
            <div className="flex items-center gap-4 text-xs font-mono text-ink-tertiary mb-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-accent-strong" />
                {project.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.year}
              </span>
            </div>

            <h2 className="font-display font-medium text-2xl sm:text-3xl text-ink-primary mb-4">
              {project.title}
            </h2>

            <p className="text-ink-secondary text-sm sm:text-base leading-relaxed mb-6">
              {project.summary}
            </p>

            {project.scope && (
              <div className="p-4 rounded-sm border border-border-subtle mb-6">
                <div className="text-[11px] font-mono uppercase tracking-wider text-ink-tertiary mb-1">
                  Scope of Agency Delivery
                </div>
                <div className="text-sm font-semibold text-ink-primary">
                  {project.scope}
                </div>
              </div>
            )}
          </div>

          {/* Impact Stats */}
          {project.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-sm card-surface">
              {Object.entries(project.stats).map(([k, v]) => (
                <div key={k} className="space-y-1">
                  <div className="font-mono text-[10px] uppercase text-ink-tertiary tracking-wider">
                    {k}
                  </div>
                  <div className="font-display font-medium text-lg text-ink-primary">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Deliverables */}
          <div>
            <h3 className="font-display font-medium text-sm uppercase tracking-wider text-ink-primary mb-3">
              Key Deliverables &amp; Execution
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-sm border border-border-subtle text-xs sm:text-sm text-ink-secondary">
                  <span className="text-accent-strong mt-0.5">—</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-border-subtle bg-void flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-ink-tertiary font-mono">
            Direct coordination available via Dubai Executive Desk.
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 sm:flex-none flex items-center justify-center gap-2 !py-2.5 border-accent/40 text-accent-strong hover:bg-accent hover:text-white"
              >
                <span>Visit Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={`https://wa.me/971552538556?text=Hello%20COMCOM%20Group%2C%20I%20am%20interested%20in%20a%20production%20similar%20to%20your%20case%20study%3A%20${encodeURIComponent(project.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 sm:flex-none flex items-center justify-center gap-2 !py-2.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Production Desk</span>
            </a>

            <a
              href="#contact"
              onClick={onClose}
              className="btn-primary flex-1 sm:flex-none flex items-center justify-center gap-2 !py-2.5"
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
