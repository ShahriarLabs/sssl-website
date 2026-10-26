import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  UserCheck, 
  CheckCircle2, 
  ArrowRight,
  FileCheck
} from 'lucide-react';
import { siteMeta } from '../data/siteConfig';
import { MagneticButton } from './MagneticButton';

export const About: React.FC = () => {
  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'Lock': return <Lock className="w-5 h-5 text-amber-400" />;
      case 'Eye': return <Eye className="w-5 h-5 text-amber-400" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-amber-400" />;
      default: return <ShieldCheck className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-navy-950/80 via-steel-950/60 to-navy-950/80 relative overflow-hidden">
      {/* Clearly visible authentic brand logo watermark */}
      <div className="absolute right-8 bottom-8 w-72 h-72 sm:w-96 sm:h-96 opacity-15 pointer-events-none rounded-2xl overflow-hidden select-none">
        <img
          src="/images/sssl-logo.jpg"
          alt="SSSL Official Brand"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-navy-900/95 border border-steel-700 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
            <div className="w-5 h-5 rounded overflow-hidden bg-white p-0.5 border border-amber-400 flex items-center justify-center shrink-0">
              <img
                src="/images/sssl-logo.jpg"
                alt="SSSL Emblem"
                className="w-full h-full object-contain aspect-square"
              />
            </div>
            <span>Incorporation Record: C-96185/11</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-display">
            Institutional Discipline, Built on Vigilance & Integrity
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {siteMeta.aboutOverview}
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="sssl-card p-6 sm:p-8 relative overflow-hidden border-l-4 border-l-amber-500">
            <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-widest font-bold text-amber-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Our Mission</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              Safeguarding Assets, Empowering Confidence
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {siteMeta.mission}
            </p>
          </div>

          <div className="sssl-card p-6 sm:p-8 relative overflow-hidden border-l-4 border-l-brand-blue">
            <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-widest font-bold text-blue-400">
              <Eye className="w-4 h-4" />
              <span>Our Vision</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              Setting Bangladesh's Security Benchmark
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {siteMeta.vision}
            </p>
          </div>
        </div>

        {/* Core Values 4-Column Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-slate-400">Guiding Pillars</p>
              <h3 className="text-xl sm:text-2xl font-bold text-white">SSSL Core Operational Values</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteMeta.coreValues.map((val) => (
              <div 
                key={val.title}
                className="sssl-card sssl-card-hover p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-navy-800 border border-slate-700/80 flex items-center justify-center mb-4">
                    {getIcon(val.icon)}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{val.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Operational Approach */}
        <div className="bg-navy-950/90 border border-slate-800 rounded-lg p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="sssl-gold-badge mb-3">Standard Operating Procedure</span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">SSSL 4-Stage Deployment Methodology</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Every client engagement undergoes a structured onboarding framework ensuring zero operational ambiguity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {siteMeta.operationalApproach.map((step) => (
              <div key={step.step} className="p-4 rounded bg-navy-900/60 border border-slate-800/80 relative">
                <span className="text-3xl font-black text-amber-500/20 font-mono absolute top-3 right-4">
                  {step.step}
                </span>
                <p className="text-xs font-mono font-bold text-amber-400 mb-2">STAGE {step.step}</p>
                <h4 className="text-sm sm:text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Action Callout */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <FileCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Need a customized site risk evaluation for your facility or office?</span>
            </div>
            <MagneticButton
              as="a"
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy-950 bg-amber-400 hover:bg-amber-300 rounded transition-all shrink-0 shadow"
            >
              <span>Request Free Site Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </div>

      </div>
    </section>
  );
};
