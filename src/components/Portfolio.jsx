import React, { useState } from 'react';
import { majorAchievements } from '../data/agencyData';
import { ArrowUpRight, MapPin, Award, Check } from 'lucide-react';
import ProjectModal from './ProjectModal';

const categories = ['All', 'Events & Expo', 'Studios', 'Advertising'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? majorAchievements
    : majorAchievements.filter((p) => {
        if (activeCategory === 'Events & Expo') return p.division.includes('Events');
        if (activeCategory === 'Studios') return p.division.includes('Studios');
        if (activeCategory === 'Advertising') return p.division.includes('Advertising');
        return true;
      });

  return (
    <section id="portfolio" className="relative py-28 bg-[#0A0A0D] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-neon-magenta font-semibold block mb-3">
              Proven Track Record
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Major Achievements &amp; Global Milestones
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1 rounded-full bg-[#121217] border border-white/[0.08] self-start md:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                  activeCategory === category
                    ? 'bg-white text-black shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-[#111116] border border-white/[0.08] hover:border-white/[0.25] transition-all duration-400 flex flex-col shadow-xl"
            >
              {/* Thumbnail */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/[0.1] text-pink-300 font-semibold">
                    {project.division}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-slate-300">
                    {project.location}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-neon-magenta transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                    {project.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-neon-magenta font-bold">✦</span>
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    Verified Execution
                  </span>

                  <div className="flex items-center gap-1 text-xs uppercase tracking-widest font-heading font-bold text-slate-300 group-hover:text-white transition-colors">
                    <span>View Case</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neon-magenta" />
                  </div>
                </div>
              </div>

            </div>
          ))}
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
