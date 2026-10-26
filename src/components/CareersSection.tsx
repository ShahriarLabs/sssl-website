import React, { useState } from 'react';
import { Briefcase, MapPin, CheckCircle, ArrowRight, X, UserPlus, Phone } from 'lucide-react';
import { careersData, contactDetails } from '../data/siteConfig';
import type { CareerItem } from '../types';

export const CareersSection: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<CareerItem | null>(null);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);

  return (
    <section id="careers" className="py-20 bg-gradient-to-b from-navy-950/90 via-steel-950/60 to-navy-950/90 relative overflow-hidden">
      {/* Clearly visible authentic brand watermark */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-72 h-72 sm:w-88 sm:h-88 opacity-15 pointer-events-none rounded-2xl overflow-hidden select-none">
        <img
          src="/images/sssl-logo.jpg"
          alt="SSSL Official Brand"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="sssl-section-heading">Join The SSSL Force</p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-display">
            Careers & Guard Recruitment Opportunities
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We are continuously building our roster of disciplined, honorable, and physically capable security personnel. All candidates undergo rigorous character vetting, physical drills, and ethical orientation.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {careersData.map((role) => (
            <div
              key={role.id}
              className="sssl-card sssl-card-hover p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-300">
                    {role.status}
                  </span>
                  <span className="text-xs text-slate-400">{role.employmentType}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {role.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{role.location}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {role.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Prerequisites:
                  </p>
                  {role.requirements.slice(0, 2).map((req, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedRole(role);
                    setApplicationModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Apply / Express Interest</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* General Recruitment Notice Callout */}
        <div className="bg-navy-900 border border-slate-800 rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h4 className="text-base font-bold text-white mb-1">
              General Candidate Pool Application
            </h4>
            <p className="text-xs text-slate-300">
              Discharged armed forces personnel, BGB, police veterans, or certified civilians seeking guarding careers are invited to register directly with our recruitment desk.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setSelectedRole(null);
              setApplicationModalOpen(true);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 bg-amber-400 hover:bg-amber-300 rounded shrink-0 shadow"
          >
            <UserPlus className="w-4 h-4" />
            <span>Join Candidate Roster</span>
          </button>
        </div>

      </div>

      {/* Career Application Modal */}
      {applicationModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-navy-900 border border-slate-700 rounded-lg max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setApplicationModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded bg-navy-800 border border-slate-700 text-amber-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest">
                  Candidate Registration
                </span>
                <h3 className="text-lg font-bold text-white">
                  {selectedRole ? selectedRole.title : 'General Security Roster Application'}
                </h3>
              </div>
            </div>

            <div className="p-3 rounded bg-navy-950 border border-slate-800 text-xs text-slate-300 mb-6 space-y-2">
              <p>
                <strong>Application Requirements:</strong> Please bring 2 copies of passport-size photos, national ID (NID) photocopy, chairman/ward commissioner certificate, and educational certificates to our Savar headquarters.
              </p>
              <p className="text-slate-400">
                Alternatively, candidates can submit their preliminary details by contacting our recruitment hotline directly:
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <a
                href={contactDetails.phone.telLink}
                className="flex items-center justify-between p-3 rounded bg-navy-800/80 border border-slate-700 text-slate-200 hover:border-amber-500/50"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold">Recruitment Phone</span>
                </div>
                <span className="text-xs font-mono text-amber-400">{contactDetails.phone.raw}</span>
              </a>

              <a
                href={contactDetails.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded bg-emerald-950/40 border border-emerald-800/50 text-slate-200 hover:border-emerald-500/50"
              >
                <span className="text-xs font-semibold">Send Bio via WhatsApp</span>
                <span className="text-xs font-mono text-emerald-400">+8801707059684</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setApplicationModalOpen(false)}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 bg-amber-400 hover:bg-amber-300 rounded"
            >
              Understood / Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
