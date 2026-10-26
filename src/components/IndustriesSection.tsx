import React from 'react';
import { 
  Building, 
  Factory, 
  Store, 
  Home, 
  GraduationCap, 
  PartyPopper,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { industriesData } from '../data/siteConfig';

export const IndustriesSection: React.FC = () => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building': return <Building className="w-5 h-5 text-amber-400" />;
      case 'Factory': return <Factory className="w-5 h-5 text-amber-400" />;
      case 'Store': return <Store className="w-5 h-5 text-amber-400" />;
      case 'Home': return <Home className="w-5 h-5 text-amber-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-amber-400" />;
      case 'PartyPopper': return <PartyPopper className="w-5 h-5 text-amber-400" />;
      default: return <Building className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-navy-950/90 via-steel-950/60 to-navy-950/90 relative overflow-hidden">
      {/* Subtle brand watermark */}
      <div className="absolute left-6 bottom-10 w-72 h-72 opacity-[0.02] pointer-events-none rounded-full overflow-hidden">
        <img
          src="/images/sssl-logo.jpg"
          alt="SSSL Watermark"
          className="w-full h-full object-contain filter invert"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="sssl-section-heading">Sectors We Safeguard</p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-display">
            Tailored Security Frameworks for Diverse Industries
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every operational sector presents distinct threat matrices. Soldier Security Services Ltd. crafts specialized post-orders and guard-selection profiles suited to each environment.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="sssl-card sssl-card-hover p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded bg-navy-800 border border-slate-700/80 flex items-center justify-center group-hover:border-amber-500/50 transition-colors">
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    Sector Scope
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {ind.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {ind.description}
                </p>

                {/* Key Scope Points */}
                <div className="space-y-2 mb-6">
                  {ind.scopePoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Request Sector Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
