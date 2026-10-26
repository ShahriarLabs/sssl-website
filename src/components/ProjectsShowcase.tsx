import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  ShieldCheck, 
  X, 
  LayoutGrid, 
  SlidersHorizontal,
  FileDown,
  UserCheck,
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import { projectData, siteMeta } from '../data/siteConfig';
import type { ProjectItem, ProjectCategory } from '../types';
import { MagneticButton } from './MagneticButton';

export const ProjectsShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Drag-to-scroll tracking
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const dragDistance = useRef(0);

  useEffect(() => {
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsTouchOrReduced(true);
    }
  }, []);

  // Verified categories directly matching official client portfolio
  const categories: ProjectCategory[] = [
    'All Projects',
    'Industrial & RMG',
    'EPZ & Special Zones',
    'Packaging & Accessories',
    'Agro & Food',
    'Engineering & Heavy',
    'Commercial & Estates'
  ];

  // Dynamically filter 58 verified projects
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

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject && e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  // Carousel Next / Prev buttons
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 360;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Mouse drag-to-scroll handlers
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
    const walk = (x - startX.current) * 1.5;
    dragDistance.current = Math.abs(walk);
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
    handleScroll();
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onCardClick = (project: ProjectItem) => {
    if (dragDistance.current < 6) {
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-navy-950/80 via-steel-950/50 to-navy-950/80 relative overflow-hidden">
      {/* Subtle brand watermark */}
      <div className="absolute right-4 top-1/3 w-80 h-80 opacity-[0.02] pointer-events-none rounded-full overflow-hidden">
        <img
          src="/images/sssl-logo.jpg"
          alt="SSSL Watermark"
          className="w-full h-full object-contain filter invert"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Official Company Profile Roster</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 font-display">
              Our Honorable Clients ({projectData.length} Verified Facilities)
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Directly documented from the official Soldier Security Services Ltd. client registry, encompassing factories, export processing zones, commercial plazas, and agricultural estates.
            </p>
          </div>

          {/* Controls: Prev/Next & Carousel/Grid Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={siteMeta.pdfProfileUrl}
              download={siteMeta.pdfDownloadFilename}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 bg-navy-900 border border-slate-700/80 hover:border-amber-500/50 hover:text-white rounded transition-all shadow-sm"
              title="Download Full Profile"
            >
              <FileDown className="w-3.5 h-3.5 text-amber-400" />
              <span>PDF Roster</span>
            </a>

            <div className="flex items-center bg-navy-900 border border-slate-800 p-1 rounded">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`p-1.5 rounded text-xs flex items-center gap-1 transition-colors ${
                  viewMode === 'carousel' ? 'bg-amber-400 text-navy-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
                title="Horizontal Swipe View"
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
              <div className="hidden sm:flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  className="p-2 rounded bg-navy-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                  aria-label="Previous client"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  className="p-2 rounded bg-navy-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                  aria-label="Next client"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Filter Pills with Count Indicators */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 hide-scrollbar touch-pan-x">
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
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 focus:outline-none focus:ring-2 focus:ring-amber-500 active:scale-95 ${
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
            {/* Horizontal Track with touch momentum */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 cursor-grab active:cursor-grabbing hide-scrollbar select-none scroll-smooth touch-pan-x snap-x snap-mandatory"
              tabIndex={0}
              aria-label="Clients horizontal carousel"
            >
              {filteredProjects.map((project) => (
                <ClientProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => onCardClick(project)}
                  isTouchOrReduced={isTouchOrReduced}
                  className="w-[280px] sm:w-[340px] shrink-0 snap-start"
                />
              ))}
            </div>

            {/* Scroll Progress Bar */}
            <div className="mt-3 flex items-center gap-3">
              <span className="text-[11px] font-mono text-slate-400">Roster Progress</span>
              <div className="flex-1 h-1 bg-navy-900 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-150"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                {filteredProjects.length} Facilities
              </span>
            </div>
          </div>
        ) : (
          /* Responsive Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ClientProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                isTouchOrReduced={isTouchOrReduced}
              />
            ))}
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-navy-900 border border-slate-700 rounded-lg max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl">
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
                alt={selectedProject.clientName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-400 text-navy-950">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono text-slate-300 bg-navy-950/90 px-2.5 py-0.5 rounded border border-slate-700">
                  Record #{String(selectedProject.serialNumber).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Title & Official Location */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {selectedProject.clientName}
              </h3>
              
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Authorized Facility Location:</strong> {selectedProject.location}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span><strong>Client Liaison:</strong> {selectedProject.clientLiaison}</span>
                </div>
              </div>
            </div>

            {/* Scope & Verified Terms */}
            <div className="space-y-4 mb-6">
              <div className="p-3.5 rounded bg-navy-950 border border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                  Guarding Scope & Service Type
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.serviceType} — 24/7 static sentry gates, material transit inspection, and shift-change crowd control.
                </p>
              </div>

              {selectedProject.fullDetails?.terms && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Contractual Terms & Governance Standards:
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.fullDetails.terms.map((term, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{term}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={siteMeta.pdfProfileUrl}
                download={siteMeta.pdfDownloadFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-200 bg-navy-800 hover:bg-slate-700 border border-slate-700 rounded transition-colors"
              >
                <FileDown className="w-4 h-4 text-amber-400" />
                <span>View in Official PDF</span>
              </a>

              <MagneticButton
                as="a"
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto py-2.5 px-5 text-xs font-bold uppercase tracking-wider text-navy-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors text-center shadow"
              >
                Request Quotation for Similar Facility
              </MagneticButton>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

interface ClientProjectCardProps {
  project: ProjectItem;
  onClick: () => void;
  isTouchOrReduced: boolean;
  className?: string;
}

const ClientProjectCard: React.FC<ClientProjectCardProps> = ({
  project,
  onClick,
  isTouchOrReduced,
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Subtle pointer lighting & micro-perspective on desktop
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isTouchOrReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty('--card-x', `${x}px`);
    cardRef.current.style.setProperty('--card-y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -1.2;
    const tiltY = ((x - centerX) / centerX) * 1.2;
    cardRef.current.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-2px)`;
  };

  const handlePointerLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    }
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={onClick}
      className={`sssl-card overflow-hidden flex flex-col justify-between group relative cursor-pointer transition-all duration-200 ease-out will-change-transform ${className}`}
    >
      {/* Subtle cursor-following spotlight glow */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(320px circle at var(--card-x, 50%) var(--card-y, 50%), rgba(217, 119, 6, 0.08), transparent 75%)'
        }}
      />

      {/* Card Image */}
      <div className="relative h-44 overflow-hidden bg-navy-900">
        <img
          src={project.image}
          alt={project.clientName}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
        
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-navy-950/90 border border-slate-700 text-amber-300">
            {project.category}
          </span>
          <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-emerald-950/90 border border-emerald-700 text-emerald-400">
            Verified
          </span>
        </div>

        <div className="absolute top-2.5 right-2.5 p-1 rounded-full bg-navy-950/80 text-slate-300 group-hover:text-amber-400 transition-colors">
          <Maximize2 className="w-3.5 h-3.5" />
        </div>

        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-slate-300">
          <span className="font-mono text-amber-400 text-[10px]">
            S/L #{String(project.serialNumber).padStart(2, '0')}
          </span>
          <span className="text-[10px] text-slate-400 truncate max-w-[170px]">
            {project.clientLiaison.split(',')[1] || project.clientLiaison}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex-1 flex flex-col justify-between relative z-20">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors line-clamp-1">
            {project.clientName}
          </h3>
          
          <div className="flex items-start gap-1 text-[11px] text-slate-400 mb-2 line-clamp-2">
            <MapPin className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
            <span>{project.location}</span>
          </div>

          <div className="p-2 rounded bg-navy-950/70 border border-slate-800 text-[11px] text-slate-300 mb-3">
            <span className="text-slate-400">Liaison: </span>
            <span className="font-medium text-slate-200">{project.clientLiaison}</span>
          </div>
        </div>

        <div className="pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <span className="text-[10px] font-mono text-slate-400">
            Manned Guarding
          </span>
          <span className="font-semibold text-amber-400 group-hover:underline">
            View Scope →
          </span>
        </div>
      </div>

    </div>
  );
};
