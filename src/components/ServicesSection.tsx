import React, { useState } from 'react';
import { 
  Shield, 
  Building2, 
  Factory, 
  Home, 
  Users, 
  Cctv, 
  Compass, 
  FileSpreadsheet, 
  Check, 
  ArrowRight, 
  X, 
  AlertCircle 
} from 'lucide-react';
import { servicesData } from '../data/siteConfig';
import type { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Icon resolver
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-6 h-6 text-amber-400" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-amber-400" />;
      case 'Factory': return <Factory className="w-6 h-6 text-amber-400" />;
      case 'Home': return <Home className="w-6 h-6 text-amber-400" />;
      case 'Users': return <Users className="w-6 h-6 text-amber-400" />;
      case 'Cctv': return <Cctv className="w-6 h-6 text-amber-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-amber-400" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6 text-amber-400" />;
      default: return <Shield className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 relative bg-gradient-to-b from-navy-950/90 via-steel-950/70 to-navy-950/90 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="sssl-section-heading">Operational Capabilities</p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 font-display">
              Comprehensive Security & Asset Protection Services
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Tailored guarding solutions designed to safeguard people, premises, and intellectual property. Configurable and subject to operational consultation.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 bg-navy-900 border border-slate-800 px-3 py-2 rounded">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span>Active Service Catalog ({servicesData.length} Offerings)</span>
          </div>
        </div>

        {/* Services Grid (8 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="sssl-card sssl-card-hover p-6 flex flex-col justify-between group relative cursor-pointer"
              onClick={() => setSelectedService(svc)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedService(svc);
                }
              }}
            >
              <div>
                {/* Header row with Icon & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded bg-navy-800 border border-slate-700/80 flex items-center justify-center group-hover:border-amber-500/50 transition-colors">
                    {renderIcon(svc.icon)}
                  </div>

                  {svc.isDraft ? (
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
                      Draft / Pending
                    </span>
                  ) : (
                    svc.badge && (
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-300">
                        {svc.badge}
                      </span>
                    )
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {svc.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {svc.shortDesc}
                </p>

                {/* Micro feature pills */}
                <div className="space-y-1.5 mb-6">
                  {svc.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                      <Check className="w-3 h-3 text-amber-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                <span>View Full Scope</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div className="bg-navy-900 border border-slate-700 rounded-lg max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-navy-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded bg-navy-800 border border-slate-700">
                {renderIcon(selectedService.icon)}
              </div>
              <div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest">
                  {selectedService.category}
                </span>
                <h3 id="service-modal-title" className="text-lg sm:text-xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {selectedService.isDraft && (
              <div className="mb-4 p-2.5 rounded bg-amber-500/10 border border-amber-500/30 flex items-center gap-2 text-xs text-amber-300">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>This service is a proposed offering subject to final confirmation by management.</span>
              </div>
            )}

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
                Key Operational Capabilities:
              </h4>
              <ul className="space-y-2">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-center text-navy-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
              >
                Inquire for this Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
