import React from 'react';
import { ShieldCheck, Flame, Eye, Scale, FileDown, ArrowRight } from 'lucide-react';
import { siteMeta } from '../data/siteConfig';
import { MagneticButton } from './MagneticButton';

export const CinematicShowcase: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-navy-950 via-steel-950 to-navy-950 border-t border-b border-steel-800/80 overflow-hidden">
      
      {/* Background authentic troop parade with deep cinematic grading */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <img
          src="/images/sssl-guard-parade.jpg"
          alt="SSSL Guard Parade"
          className="w-full h-full object-cover object-center filter contrast-125 saturate-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/90 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-navy-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Official Crest */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-navy-900/95 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4 shadow-md">
            <div className="w-5 h-5 rounded overflow-hidden bg-white p-0.5 border border-amber-400 flex items-center justify-center shrink-0">
              <img
                src="/images/sssl-logo.jpg"
                alt="SSSL Emblem"
                className="w-full h-full object-contain aspect-square"
              />
            </div>
            <span>Official Force Command • Established 2011</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Disciplined Force. Verified Standards.
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Soldier Security Services Ltd. blends military-inspired turnout inspections with modern commercial asset safeguarding across Bangladesh's most demanding industrial belts.
          </p>
        </div>

        {/* 2-Column Visual Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Column: Authentic Photography Reel Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Squad Inspection Card */}
            <div className="group relative rounded-lg overflow-hidden border border-steel-700 bg-navy-900 shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/sssl-guard-squad-1.jpg"
                  alt="SSSL Guard Squad Sentry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-navy-950/90 border border-amber-500/40 text-amber-300">
                  Turnout Inspection
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-white mb-1">
                  Static Guard Post Sentries
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Trained personnel stationed at gate barriers, visitor registers, and material checkpoints with full uniform gear.
                </p>
              </div>
            </div>

            {/* Female Guard Detachment Card */}
            <div className="group relative rounded-lg overflow-hidden border border-steel-700 bg-navy-900 shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/images/sssl-female-guards-drill.jpg"
                  alt="SSSL Female Security Officers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-navy-950/90 border border-blue-500/40 text-blue-300">
                  Specialized Force
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-white mb-1">
                  Female Security Personnel
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Dedicated female officers trained for garment floor inspections, female visitor screening, and corporate desks.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Pillar Governance Metrics */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="sssl-card p-5 border-steel-700/80 hover:border-amber-500/40 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-navy-800 border border-steel-600 text-amber-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Incorporation & Statutory Registration
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Duly registered under the laws of Bangladesh (Reg. No: <strong>C-96185/11</strong>, Registered <strong>16.10.2011</strong>) with over 15 years of uninterrupted compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className="sssl-card p-5 border-steel-700/80 hover:border-amber-500/40 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-navy-800 border border-steel-600 text-amber-400 shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Firefighting & Disaster Readiness
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Mandatory curriculum encompassing fire extinguisher operation, smoke hazard evacuation, and rapid emergency notification.
                  </p>
                </div>
              </div>
            </div>

            <div className="sssl-card p-5 border-steel-700/80 hover:border-amber-500/40 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-navy-800 border border-steel-600 text-amber-400 shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Unannounced Nocturnal Patrols
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Seasoned field supervisors conduct surprise night visits across all factory posts to audit guard alertness and logbook accuracy.
                  </p>
                </div>
              </div>
            </div>

            <div className="sssl-card p-5 border-steel-700/80 hover:border-amber-500/40 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-navy-800 border border-steel-600 text-amber-400 shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    Contractual Loss Governance
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Formal Deed of Agreement committing to full joint inquiries and loss compensation protocols in accordance with contractual terms.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Cinematic Callout Banner */}
        <div className="rounded-xl p-8 sm:p-10 bg-gradient-to-r from-navy-900 via-steel-900 to-navy-900 border border-steel-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
              Ready to Upgrade Your Facility's Security Posture?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Download our official 6-page corporate quotation and client portfolio, or consult with Director Md. Kamal Hossain directly.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <MagneticButton
              as="a"
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-navy-950 bg-amber-400 hover:bg-amber-300 rounded shadow transition-all"
            >
              <span>Get Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              as="a"
              href={siteMeta.pdfProfileUrl}
              download={siteMeta.pdfDownloadFilename}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-200 bg-navy-950 hover:bg-steel-800 border border-steel-600 rounded shadow transition-all"
            >
              <FileDown className="w-4 h-4 text-amber-400" />
              <span>Download Profile PDF</span>
            </MagneticButton>
          </div>
        </div>

      </div>
    </section>
  );
};
