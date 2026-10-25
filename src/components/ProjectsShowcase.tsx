import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  X, 
  LayoutGrid, 
  SlidersHorizontal,
  Info,
  Maximize2
} from 'lucide-react';
import { projectData } from '../data/siteConfig';
import type { ProjectItem, ProjectCategory } from '../types';

export const ProjectsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Drag-to-scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const dragDistance = useRef(0);

  // Available categories with counts
  const categories: ProjectCategory[] = [
    'All Projects',
    'Industrial',
    'Corporate',
    'Commercial',
    'Residential',
    'Event',
    'Access Control'
  ];

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') return projectData;
    return projectData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Update scroll progress indicator
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(100);
    } else {
      const progress = (scrollLeft / maxScroll) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    }
  }, []);

  // Reset scroll when category changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      setScrollProgress(0);
    }
  }, [activeCategory]);

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) {
        if (e.key === 'Escape') setSelectedProject(null);
        return;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  // Carousel Next / Prev handlers
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 380;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Mouse drag-to-scroll listeners
  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftStart.current = scrollRef.current.scrollLeft;
    dragDistance.current = 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // drag multiplier
    dragDistance.current = Math.abs(walk);
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
    handleScroll();
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onCardClick = (project: ProjectItem) => {
    // Only open if it wasn't a significant drag
    if (dragDistance.current < 5) {
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-20 bg-navy-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & View Mode Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <p className="sssl-section-heading">Operational Deployments</p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 font-display">
              Demonstrated Security Assignments ({projectData.length}+ Deployments)
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Explore our representative portfolio of industrial plant guarding, corporate office access, and high-density event cordons.
            </p>
          </div>

          {/* Controls: Prev/Next & View Toggle */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-navy-900 border border-slate-800 p-1 rounded">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                  viewMode === 'carousel' ? 'bg-amber-400 text-navy-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Horizontal Carousel View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Carousel</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                  viewMode === 'grid' ? 'bg-amber-400 text-navy-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid</span>
              </button>
            </div>

            {viewMode === 'carousel' && (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  className="p-2 rounded bg-navy-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  className="p-2 rounded bg-navy-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 hide-scrollbar">
          {categories.map((cat) => {
            const count = cat === 'All Projects' 
              ? projectData.length 
              : projectData.filter(p => p.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                  isActive
                    ? 'bg-amber-400 text-navy-950 shadow-md shadow-amber-500/10'
                    : 'bg-navy-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-navy-950/20 text-navy-950 font-bold' : 'bg-navy-800 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Content: Carousel or Grid */}
        {viewMode === 'carousel' ? (
          <div className="relative">
            {/* Horizontal Track */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              className="flex gap-6 overflow-x-auto pb-6 cursor-grab active:cursor-grabbing hide-scrollbar select-none scroll-smooth"
              tabIndex={0}
              aria-label="Projects horizontal carousel"
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => onCardClick(project)}
                  className="w-[300px] sm:w-[350px] shrink-0 sssl-card sssl-card-hover overflow-hidden flex flex-col justify-between group"
                >
                  {/* Card Image */}
                  <div className="relative h-48 overflow-hidden bg-navy-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-navy-950/90 border border-slate-700 text-amber-300">
                        {project.category}
                      </span>
                      {project.isDemo && (
                        <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-slate-400">
                          Sample Portfolio
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-navy-950/80 text-slate-300 group-hover:text-amber-400 transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300">
                      <span className="flex items-center gap-1 truncate">
                        <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </span>
                      <span className="flex items-center gap-1 shrink-0 text-slate-400">
                        <Calendar className="w-3 h-3" />
                        <span>{project.completionYear}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 2).map((tag, idx) => (
                          <span key={idx} className="text-[10px] text-slate-400 bg-navy-800 px-1.5 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-amber-400 group-hover:underline">
                        Details →
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Scroll Progress Bar */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-[11px] font-mono text-slate-400">Scroll</span>
              <div className="flex-1 h-1 bg-navy-900 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-150"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
              <span className="text-[11px] font-mono text-slate-400">{Math.round(scrollProgress)}%</span>
            </div>
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="sssl-card sssl-card-hover overflow-hidden flex flex-col justify-between group cursor-pointer"
              >
                <div className="relative h-44 overflow-hidden bg-navy-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-navy-950/90 border border-slate-700 text-amber-300">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300">
                    <span className="flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </span>
                    <span className="text-slate-400">{project.completionYear}</span>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                      {project.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex justify-between text-xs text-amber-400 font-semibold">
                    <span>View Specifications</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Demo Disclaimer notice */}
        <div className="mt-8 p-3 rounded bg-navy-900/60 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-400">
          <Info className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Portfolio Disclosure:</strong> Project entries represent deployment profiles and operational capability templates. Real corporate and industrial client identities are anonymized to protect confidentiality agreements.
          </span>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-navy-900 border border-slate-700 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-navy-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative h-56 rounded-md overflow-hidden mb-6 bg-navy-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-400 text-navy-950">
                  {selectedProject.category}
                </span>
                <span className="text-xs text-slate-300 bg-navy-950/80 px-2 py-0.5 rounded border border-slate-700">
                  Year {selectedProject.completionYear}
                </span>
              </div>
            </div>

            {/* Title & Metadata */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{selectedProject.location}</span>
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>Client: {selectedProject.client}</span>
                </span>
              </div>
            </div>

            {/* Scope & Challenge Breakdown */}
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Assignment Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.fullDetails && (
                <>
                  {selectedProject.fullDetails.challenge && (
                    <div className="p-3.5 rounded bg-navy-950 border border-slate-800">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                        Operational Challenge
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        {selectedProject.fullDetails.challenge}
                      </p>
                    </div>
                  )}

                  {selectedProject.fullDetails.deploymentScale && (
                    <div className="p-3.5 rounded bg-navy-950 border border-slate-800">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                        Deployment Force Scale
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300">
                        {selectedProject.fullDetails.deploymentScale}
                      </p>
                    </div>
                  )}

                  {selectedProject.fullDetails.solutionHighlights && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Tactical Execution Highlights
                      </h4>
                      <ul className="space-y-1.5">
                        {selectedProject.fullDetails.solutionHighlights.map((sol, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                            <span className="text-amber-400 font-bold">•</span>
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.fullDetails.result && (
                    <div className="p-3.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                        Verified Outcome
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-200">
                        {selectedProject.fullDetails.result}
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">
                Interested in a comparable deployment for your facility?
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto py-2 px-5 text-xs font-bold uppercase tracking-wider text-navy-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors text-center"
              >
                Inquire With Our Team
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
