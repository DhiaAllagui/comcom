import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { majorAchievements } from '../data/agencyData';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { useReveal } from '../hooks/useReveal';

function ProjectCard({ project, idx, onSelect }) {
  const { t } = useTranslation();
  const [ref, isVisible] = useReveal();
  const [activeImg, setActiveImg] = useState(project.thumbnail);
  const spanClass = idx === 0 ? 'lg:col-span-2' : '';

  const projectTitle = t(`data.portfolio.${project.id}.title`, project.title);
  const projectDivision = t(`data.portfolio.${project.id}.division`, project.division);
  const projectLocation = t(`data.portfolio.${project.id}.location`, project.location);
  const projectSummary = t(`data.portfolio.${project.id}.summary`, project.summary);

  return (
    <div
      ref={ref}
      onClick={() => onSelect(project)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
      }}
      className={`reveal ${isVisible ? 'is-visible' : ''} spotlight-card group cursor-pointer rounded-sm overflow-hidden card-surface flex flex-col ${spanClass}`}
      style={{ transitionDelay: `${(idx % 3) * 80}ms` }}
    >
      {/* Thumbnail with interactive gallery */}
      <div className={`relative w-full overflow-hidden bg-black ${idx === 0 ? 'h-72 sm:h-96' : 'h-64 sm:h-72'}`}>
        <img
          src={activeImg || project.thumbnail}
          alt={projectTitle}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(6,7,10,0.85) 100%)' }} />

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="badge-mono">
            {projectDivision}
          </span>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-void/90 text-ink-secondary border border-border-subtle">
            {projectLocation}
          </span>
        </div>

        {/* Gallery Preview Badges if project has multiple images */}
        {project.gallery && project.gallery.length > 1 && (
          <div className="absolute bottom-3 left-4 flex items-center gap-1.5 z-10">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImg(img);
                }}
                className={`w-9 h-7 rounded-sm overflow-hidden border transition-all ${
                  activeImg === img ? 'border-accent ring-1 ring-accent' : 'border-white/30 opacity-70 hover:opacity-100'
                }`}
                title={`Preview image ${i + 1}`}
                aria-label={`Preview image ${i + 1} of ${project.gallery.length}`}
              >
                <img src={img} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </button>
            ))}
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-sm bg-void/80 text-ink-primary border border-border-subtle ml-1">
              {t('portfolio.imagesCount', { count: project.gallery.length })}
            </span>
          </div>
        )}
      </div>

      {/* Text */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-display font-medium text-xl text-ink-primary mb-2 group-hover:text-accent-strong transition-colors">
            {projectTitle}
          </h3>

          <p className="text-ink-secondary text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
            {projectSummary}
          </p>

          <div className="space-y-1.5 pt-2 border-t border-border-subtle">
            {project.highlights.slice(0, 2).map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-ink-secondary">
                <span className="text-accent-strong mt-0.5">—</span>
                <span className="line-clamp-1">{t(`data.portfolio.${project.id}.highlights.${i}`, item)}</span>
              </div>
            ))}
          </div>
        </div>

        {project.externalUrl && (
          <div className="pt-2">
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-accent/15 border border-accent/30 text-accent-strong hover:bg-accent hover:text-white text-[11px] font-mono transition-all"
            >
              <span>globalvillagetunisia.com</span>
              <ArrowUpRight className="w-3 h-3 rtl-flip" />
            </a>
          </div>
        )}

        <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
          <span className="text-[11px] font-mono text-ink-tertiary">
            {t('portfolio.verifiedExecution')}
          </span>

          <div className="flex items-center gap-1 text-xs uppercase tracking-widest font-semibold text-ink-secondary group-hover:text-ink-primary transition-colors">
            <span>{t('portfolio.viewCase')}</span>
            <ArrowUpRight className="w-3.5 h-3.5 rtl-flip" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default function Portfolio() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [headerRef, headerVisible] = useReveal();

  const categories = [
    { key: 'All', label: t('portfolio.filters.all') },
    { key: 'Events & Expo', label: t('portfolio.filters.events') },
    { key: 'Studios', label: t('portfolio.filters.studios') },
    { key: 'Advertising', label: t('portfolio.filters.advertising') },
  ];

  const filteredProjects = activeCategory === 'All'
    ? majorAchievements
    : majorAchievements.filter((p) => {
        if (activeCategory === 'Events & Expo') return p.division.includes('Events');
        if (activeCategory === 'Studios') return p.division.includes('Studios');
        if (activeCategory === 'Advertising') return p.division.includes('Advertising');
        return true;
      });

  return (
    <section id="portfolio" className="relative py-28 bg-surface-base border-t border-border-subtle">
      <div id="flagship" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className={`reveal-blur ${headerVisible ? 'is-visible' : ''} flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16`}>
          <div className="max-w-2xl">
            <span className="eyebrow block mb-3">
              {t('portfolio.eyebrow')}
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-ink-primary tracking-tight">
              {t('portfolio.title')}
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1 p-1 rounded-sm border border-border-subtle self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeCategory === cat.key
                    ? 'bg-accent'
                    : 'text-ink-tertiary hover:text-ink-primary'
                }`}
                style={activeCategory === cat.key ? { color: 'var(--text-on-accent)' } : undefined}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid — inside floating panel */}
        <div className="panel-surface">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} onSelect={setSelectedProject} />
            ))}
          </div>
        </div>

      </div>

      {/* Case Modal */}
      {selectedProject && (
        <ProjectModal
          project={{
            ...selectedProject,
            category: selectedProject.division,
            client: "COMCOM Group Portfolio",
            year: "Documented Achievement",
            deliverables: selectedProject.highlights,
            gallery: selectedProject.gallery,
            externalUrl: selectedProject.externalUrl
          }}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
