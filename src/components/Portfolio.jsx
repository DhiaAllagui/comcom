import React, { useState } from 'react';
import { majorAchievements } from '../data/agencyData';
import { ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { useReveal } from '../hooks/useReveal';

const categories = ['All', 'Events & Expo', 'Studios', 'Advertising'];

function ProjectCard({ project, idx, onSelect }) {
  const [ref, isVisible] = useReveal();
  // Bento layout: first card spans 2 columns on large screens
  const spanClass = idx === 0 ? 'lg:col-span-2' : '';

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
      {/* Thumbnail */}
      <div className={`relative w-full overflow-hidden bg-black ${idx === 0 ? 'h-72 sm:h-96' : 'h-64 sm:h-72'}`}>
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(6,7,10,0.75) 100%)' }} />

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="badge-mono">
            {project.division}
          </span>
          <span className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-void/90 text-ink-secondary border border-border-subtle">
            {project.location}
          </span>
        </div>
      </div>

      {/* Text */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-display font-medium text-xl text-ink-primary mb-2 group-hover:text-accent-strong transition-colors">
            {project.title}
          </h3>

          <p className="text-ink-secondary text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
            {project.summary}
          </p>

          <div className="space-y-1.5 pt-2 border-t border-border-subtle">
            {project.highlights.slice(0, 2).map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-ink-secondary">
                <span className="text-accent-strong mt-0.5">—</span>
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
          <span className="text-[11px] font-mono text-ink-tertiary">
            Verified Execution
          </span>

          <div className="flex items-center gap-1 text-xs uppercase tracking-widest font-semibold text-ink-secondary group-hover:text-ink-primary transition-colors">
            <span>View Case</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [headerRef, headerVisible] = useReveal();

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className={`reveal-blur ${headerVisible ? 'is-visible' : ''} flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16`}>
          <div className="max-w-2xl">
            <span className="eyebrow block mb-3">
              // 04 Proven Track Record
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl text-ink-primary tracking-tight">
              Major Achievements &amp; Global Milestones
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1 p-1 rounded-sm border border-border-subtle self-start md:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeCategory === category
                    ? 'bg-accent'
                    : 'text-ink-tertiary hover:text-ink-primary'
                }`}
                style={activeCategory === category ? { color: 'var(--text-on-accent)' } : undefined}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid — inside floating panel for consistency with Divisions */}
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
            deliverables: selectedProject.highlights
          }}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
