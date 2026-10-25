import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  AlertCircle, 
  CheckCircle,
  X
} from 'lucide-react';
import { trustCredentials } from '../data/siteConfig';

export const TrustCredentialsSection: React.FC = () => {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  return (
    <section id="credentials" className="py-20 bg-navy-900/40 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="sssl-section-heading">Institutional Governance</p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-display">
            Regulatory Compliance & Quality Standards
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Soldier Security Services Ltd. operates within statutory private security mandates in Bangladesh, maintaining high training standards and strict documentation compliance.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {trustCredentials.map((cred) => (
            <div
              key={cred.id}
              className="sssl-card p-6 flex flex-col justify-between border-slate-800"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-400" />
                    <span className="text-xs font-mono uppercase text-slate-400">
                      {cred.year}
                    </span>
                  </div>

                  {cred.isVerified ? (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {cred.status}
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {cred.status}
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  {cred.title}
                </h3>
                
                <p className="text-xs font-semibold text-slate-400 mb-3">
                  Authority: {cred.issuer}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cred.description}
                </p>
              </div>

              {cred.licenseNumber && (
                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  Ref: <span className="text-slate-300">{cred.licenseNumber}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Corporate Brochure & Direct Verification Box */}
        <div className="bg-gradient-to-r from-navy-950 to-navy-900 border border-slate-800 rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-lg font-bold text-white mb-2">
              Official SSSL Corporate Profile & Standard Operating Procedures
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Download our institutional briefing deck covering training syllabi, night inspection protocols, and corporate SLA parameters.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setBrochureModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-navy-950 bg-amber-400 hover:bg-amber-300 rounded transition-all shadow focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <Download className="w-4 h-4" />
              <span>Download Corporate Profile</span>
            </button>
          </div>
        </div>

      </div>

      {/* Brochure Request / Draft Modal */}
      {brochureModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-navy-900 border border-slate-700 rounded-lg max-w-md w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setBrochureModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded bg-navy-800 border border-slate-700 flex items-center justify-center mb-4 text-amber-400">
              <Download className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              Corporate Profile Deck
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              The updated 2026 Soldier Security Services Ltd. comprehensive profile PDF is currently in official publication. You can request a personalized digital copy directly from our operations desk via Phone or WhatsApp.
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={() => setBrochureModalOpen(false)}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-center text-navy-950 bg-amber-400 hover:bg-amber-300 rounded"
              >
                Request Profile via Contact Form
              </a>
              <button
                type="button"
                onClick={() => setBrochureModalOpen(false)}
                className="w-full py-2 px-4 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
