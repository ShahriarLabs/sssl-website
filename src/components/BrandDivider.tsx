import React from 'react';

interface BrandDividerProps {
  className?: string;
  label?: string;
}

export const BrandDivider: React.FC<BrandDividerProps> = ({ 
  className = '', 
  label 
}) => {
  return (
    <div 
      className={`relative flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}
      aria-hidden="true"
    >
      {/* Left tapered line */}
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-steel-700/60 to-amber-500/30" />

      {/* Center branded insignia badge */}
      <div className="mx-4 flex items-center gap-2.5 px-3 py-1 rounded-full bg-navy-900/90 border border-steel-700/80 shadow-md">
        <div className="w-5 h-5 rounded-full overflow-hidden bg-white p-0.5 border border-amber-500/40 flex items-center justify-center shrink-0">
          <img
            src="/images/sssl-logo.jpg"
            alt="SSSL Emblem"
            className="w-full h-full object-contain"
          />
        </div>
        {label ? (
          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-300 font-semibold">
            {label}
          </span>
        ) : (
          <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-bold">
            SOLDIER SECURITY SERVICES LTD.
          </span>
        )}
      </div>

      {/* Right tapered line */}
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-steel-700/60 to-amber-500/30" />
    </div>
  );
};
