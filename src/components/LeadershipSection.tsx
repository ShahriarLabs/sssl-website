import React from 'react';
import { Award, Info } from 'lucide-react';
import { leadershipProfiles } from '../data/siteConfig';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 bg-gradient-to-b from-navy-950/80 via-steel-950/60 to-navy-950/80 relative overflow-hidden">
      {/* Clearly visible authentic brand watermark */}
      <div className="absolute left-6 top-6 w-72 h-72 sm:w-80 sm:h-80 opacity-15 pointer-events-none rounded-2xl overflow-hidden select-none">
        <img
          src="/images/sssl-logo.jpg"
          alt="SSSL Official Brand"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="sssl-section-heading">Executive Stewardship</p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-display">
            Board of Directors & Operational Leadership
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Soldier Security Services Ltd. is directed by seasoned leaders committed to instilling corporate governance, strict personnel accountability, and trustworthy security standards across Bangladesh.
          </p>
        </div>

        {/* Executive Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {leadershipProfiles.map((member) => (
            <div 
              key={member.id}
              className="sssl-card p-6 sm:p-8 flex flex-col sm:flex-row gap-6 border-slate-800 hover:border-slate-700 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gold decorative accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-transparent" />

              {/* Portrait Frame */}
              <div className="w-full sm:w-48 shrink-0 flex flex-col items-center">
                <div className="relative w-44 h-52 sm:w-48 sm:h-56 rounded-md overflow-hidden bg-navy-950 border border-slate-700/80 shadow-inner group">
                  <img
                    src={member.portrait}
                    alt={`${member.name} - ${member.designation}`}
                    className="w-full h-full object-cover object-center filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-2 left-2 right-2 text-center">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-navy-900/90 px-2 py-0.5 rounded border border-amber-500/30">
                      Official Record
                    </span>
                  </div>
                </div>

                {member.isPlaceholderBio && (
                  <p className="text-[10px] text-slate-400 text-center mt-2 flex items-center justify-center gap-1">
                    <Info className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>Configurable Profile</span>
                  </p>
                )}
              </div>

              {/* Profile Details */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="sssl-gold-badge">
                      {member.designation}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>

                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 pb-3 border-b border-slate-800">
                    {member.roleDescription}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 bg-navy-950/50 p-2.5 rounded">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{member.credentialsNotes}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Corporate Commitment Statement */}
        <div className="mt-12 p-4 rounded bg-navy-950/80 border border-slate-800 text-center text-xs text-slate-400">
          <p>
            SSSL leadership enforces strict compliance with national private security agency regulations, ethical labor standards, and continuous supervisory inspections.
          </p>
        </div>

      </div>
    </section>
  );
};
