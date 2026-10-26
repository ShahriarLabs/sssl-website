import React from 'react';
import { Shield } from 'lucide-react';

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
      <div className="mx-4 flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy-900/95 border border-steel-700 shadow-md">
        <div className="w-5 h-5 shrink-0 flex items-center justify-center text-amber-400">
          <Shield className="w-3.5 h-3.5 text-amber-400" />
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
