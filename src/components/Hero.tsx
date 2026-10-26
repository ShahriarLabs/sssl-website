import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  ChevronRight, 
  PhoneCall, 
  Award, 
  Clock, 
  FileDown, 
  Building2,
  Film
} from 'lucide-react';
import { siteMeta } from '../data/siteConfig';
import { MagneticButton } from './MagneticButton';

// 4 Cinematic Visual Slides: 2 Authentic SSSL Squad Photos + 2 High-End Corporate Facility Visuals
const CINEMATIC_SLIDES = [
  {
    id: 'squad-deployment',
    image: '/images/sssl-guard-squad-1.jpg',
    label: 'Authentic Guard Squad Deployment',
    tag: 'Official Force Photo',
    caption: 'Disciplined SSSL security personnel stationed at industrial client facility in Savar.'
  },
  {
    id: 'corporate-tower',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
    label: 'Corporate & Commercial Protection',
    tag: 'Commercial Assets',
    caption: 'Access management, visitor reception security, and executive building protocols.'
  },
  {
    id: 'force-parade',
    image: '/images/sssl-guard-parade.jpg',
    label: 'Troop Parade Formation & Inspection',
    tag: 'Official Troop Roster',
    caption: 'Regular morning turnout inspection and operational readiness drills.'
  },
  {
    id: 'control-room',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=2000&q=85',
    label: '24/7 Command & Electronic Surveillance',
    tag: 'Operations Desk',
    caption: 'Round-the-clock supervisor oversight, gate logs, and rapid response coordination.'
  }
];

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = siteMeta.heroTypingPhrases;

  // Reduced-motion & touch check
  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      setIsReducedMotion(true);
    }
  }, []);

  // Automatic slow cinematic slide transition (every 7 seconds)
  useEffect(() => {
    if (isReducedMotion) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % CINEMATIC_SLIDES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isReducedMotion]);

  // Pointer spotlight & subtle parallax listener (zero React re-renders)
  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (isReducedMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    heroRef.current.style.setProperty('--spotlight-x', `${x}px`);
    heroRef.current.style.setProperty('--spotlight-y', `${y}px`);
  };

  // Subtle supporting phrase typing animation
  useEffect(() => {
    if (isReducedMotion) {
      setDisplayText(phrases[0]);
      return;
    }

    const currentPhrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), 2800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      const speed = isDeleting ? 25 : 55;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentPhrase.substring(0, displayText.length - 1)
            : currentPhrase.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, phrases, isReducedMotion]);

  return (
    <section
      ref={heroRef}
      onPointerMove={handlePointerMove}
      id="hero"
      className="relative min-h-[94vh] flex items-center pt-28 pb-16 overflow-hidden select-none"
    >
      {/* Multi-Layer Cinematic Video/Reel Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {CINEMATIC_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.label}
              className={`w-full h-full object-cover object-center filter brightness-[0.42] contrast-115 transition-transform duration-[7000ms] ease-out will-change-transform ${
                activeSlide === idx ? 'scale-105 translate-x-0.5' : 'scale-100'
              }`}
            />
          </div>
        ))}
        
        {/* Cinematic Vignette & Deep Royal Navy Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-900/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-steel-950/60" />
        
        {/* Subtle Horizontal Blue Anamorphic Light Bar */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent pointer-events-none" />

        {/* Dynamic pointer spotlight layer */}
        <div 
          className="absolute inset-0 opacity-70 pointer-events-none transition-opacity duration-300"
          style={{
            background: 'radial-gradient(700px circle at var(--spotlight-x, 50%) var(--spotlight-y, 40%), rgba(223, 177, 91, 0.09), rgba(27, 59, 126, 0.15), transparent 75%)'
          }}
        />

        {/* Subtle watermark of the official logo in the background */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-[460px] h-[460px] opacity-[0.035] rounded-full overflow-hidden pointer-events-none">
          <img
            src="/images/sssl-logo.jpg"
            alt="SSSL Watermark"
            className="w-full h-full object-contain filter invert"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full select-text">
        <div className="max-w-3xl">
          
          {/* Official Branded Corporate Crest */}
          <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-navy-900/90 border border-steel-700/80 backdrop-blur-md mb-6 shadow-lg shadow-black/30">
            {/* Real Logo Emblem Badge */}
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white p-0.5 border border-amber-500/50 flex items-center justify-center shrink-0">
              <img
                src="/images/sssl-logo.jpg"
                alt="SSSL Badge"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                Soldier Security Services Ltd.
              </span>
              <span className="text-[9px] font-mono text-amber-400">
                Reg. No. C-96185/11 • Established 2011
              </span>
            </div>
          </div>

          {/* Exact Primary Headline (Stable & High-Impact) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 font-display">
            {siteMeta.heroHeadline}
          </h1>

          {/* Typing Supporting Phrase Container */}
          <div className="min-h-[32px] sm:min-h-[36px] flex items-center mb-6">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-amber-300 tracking-wide bg-navy-900/80 px-3.5 py-1.5 rounded border border-steel-700 shadow-sm backdrop-blur-sm">
              <span className="text-slate-400 text-[11px] font-mono">MANDATE:</span>
              <span className="font-semibold">{displayText}</span>
              <span className="inline-block w-1.5 h-4 bg-amber-400 animate-pulse-subtle" />
            </div>
          </div>

          {/* Supporting Professional Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
            {siteMeta.heroSubheadline}
          </p>

          {/* Magnetic Primary CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <MagneticButton
              as="a"
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded transition-all shadow-lg shadow-amber-500/20 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <PhoneCall className="w-4 h-4 text-navy-950" />
              <span>Get Quotation</span>
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200 bg-navy-900/90 hover:bg-steel-800 border border-steel-700 hover:border-steel-500 rounded transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Explore 58+ Deployments</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </MagneticButton>

            <MagneticButton
              as="a"
              href={siteMeta.pdfProfileUrl}
              download={siteMeta.pdfDownloadFilename}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 hover:border-amber-400 rounded transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
              title="Download Official Soldier Security Services Ltd. Profile PDF"
            >
              <FileDown className="w-4 h-4 text-amber-400" />
              <span>Download Profile (PDF)</span>
            </MagneticButton>
          </div>

          {/* Verified Trust Anchors Grid */}
          <div className="mt-12 pt-8 border-t border-steel-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded bg-navy-900/90 border border-steel-700 text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">15+ Years Registered</p>
                <p className="text-[11px] text-slate-400 font-mono">Incorporation: C-96185/11</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded bg-navy-900/90 border border-steel-700 text-amber-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">24/7 Field Patrols</p>
                <p className="text-[11px] text-slate-400">Unannounced nocturnal audits</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded bg-navy-900/90 border border-steel-700 text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">58+ Active Facilities</p>
                <p className="text-[11px] text-slate-400">Verified factory & corporate roster</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Cinematic Slide Controller (Bottom Right) */}
      <div className="hidden lg:flex absolute bottom-8 right-8 z-20 items-center gap-3 p-2 rounded-lg bg-navy-950/85 backdrop-blur-md border border-steel-700/80 shadow-2xl">
        <Film className="w-4 h-4 text-amber-400" />
        <div className="flex items-center gap-1.5">
          {CINEMATIC_SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setActiveSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeSlide === i 
                  ? 'w-7 bg-amber-400' 
                  : 'w-2 bg-slate-600 hover:bg-slate-400'
              }`}
              title={slide.label}
              aria-label={`Slide ${i + 1}: ${slide.label}`}
            />
          ))}
        </div>
        <span className="text-[10px] font-mono text-slate-300 pl-1">
          {CINEMATIC_SLIDES[activeSlide].tag}
        </span>
      </div>
    </section>
  );
};
