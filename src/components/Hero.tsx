import React, { useState, useEffect } from 'react';
import { ShieldCheck, ChevronRight, PhoneCall, Award, Clock } from 'lucide-react';
import { siteMeta } from '../data/siteConfig';

export const Hero: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = siteMeta.heroTypingPhrases;

  // Typing animation effect with reduced motion guard
  useEffect(() => {
    // If user prefers reduced motion, simply show first phrase
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(phrases[0]);
      return;
    }

    const currentPhrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentPhrase) {
      // Pause at full phrase
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText === '') {
      // Move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      // Type or delete character
      const speed = isDeleting ? 30 : 60;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentPhrase.substring(0, displayText.length - 1)
            : currentPhrase.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, phrases]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Photography with Sophisticated Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=2000&q=85"
          alt="Professional security command and perimeter surveillance"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.28] contrast-125"
        />
        {/* Subtle geometric security grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" 
        />
        {/* Dark edge gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Subtle Category Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-900/90 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Official Corporate Security Provider</span>
          </div>

          {/* Exact Primary Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 font-display">
            {siteMeta.heroHeadline}
          </h1>

          {/* Typing Supporting Phrase Container */}
          <div className="min-h-[32px] sm:min-h-[36px] flex items-center mb-6">
            <div className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-amber-400/95 tracking-wide bg-navy-900/60 px-3.5 py-1 rounded border border-slate-800">
              <span className="text-slate-400 text-xs font-mono">STATUS:</span>
              <span className="font-semibold">{displayText}</span>
              <span className="inline-block w-1.5 h-4 bg-amber-400 animate-pulse-subtle" />
            </div>
          </div>

          {/* Supporting Professional Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
            {siteMeta.heroSubheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded transition-all shadow-lg shadow-amber-500/15 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <span>Explore Our Services</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-200 bg-navy-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 rounded transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Contact Our Team</span>
            </a>
          </div>

          {/* Verified Trust Anchors Grid */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-navy-900 border border-slate-800 text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Rigorous Vetting</p>
                <p className="text-[11px] text-slate-400">NID & police record verification</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-navy-900 border border-slate-800 text-amber-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">24/7 Field Patrols</p>
                <p className="text-[11px] text-slate-400">Unannounced nocturnal audits</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-navy-900 border border-slate-800 text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Direct Accountability</p>
                <p className="text-[11px] text-slate-400">Executive supervisor liaison</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
