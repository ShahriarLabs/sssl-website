import React, { useState, useEffect, useRef } from 'react';
import { counterStatsData, projectData } from '../data/siteConfig';
import { ShieldCheck, Info } from 'lucide-react';

export const AnimatedCounters: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection observer to trigger counter when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-16 bg-gradient-to-r from-navy-950 via-steel-950/90 to-navy-950 border-t border-b border-steel-800/80 relative shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {counterStatsData.map((stat) => {
            // Calibrate project count dynamically to portfolio length if projects-completed
            const targetVal = stat.id === 'projects-completed' ? projectData.length : stat.value;

            return (
              <CounterItem 
                key={stat.id}
                stat={stat}
                targetValue={targetVal}
                shouldAnimate={isVisible}
              />
            );
          })}
        </div>

        {/* Responsible Compliance Footnote */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-center gap-2 text-center text-[11px] text-slate-400">
          <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>
            Operational metrics adhere to corporate reporting integrity. Representative capability metrics are subject to ongoing deployment audits.
          </span>
        </div>

      </div>
    </section>
  );
};

interface CounterItemProps {
  stat: typeof counterStatsData[0];
  targetValue: number;
  shouldAnimate: boolean;
}

const CounterItem: React.FC<CounterItemProps> = ({ stat, targetValue, shouldAnimate }) => {
  const [currentVal, setCurrentVal] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCurrentVal(targetValue);
      return;
    }

    let start = 0;
    const duration = 1800;
    const steps = 40;
    const increment = targetValue / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCurrentVal(targetValue);
        clearInterval(timer);
      } else {
        setCurrentVal(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [shouldAnimate, targetValue]);

  return (
    <div className="sssl-card p-6 border-slate-800 flex flex-col justify-between relative overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
          {stat.label}
        </span>
        {stat.isVerified ? (
          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-0.5">
            <ShieldCheck className="w-3 h-3" />
            Verified
          </span>
        ) : (
          <span className="text-[10px] font-mono text-slate-400">
            Capability
          </span>
        )}
      </div>

      <div className="my-3 flex items-baseline gap-1">
        <span className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
          {stat.prefix}{currentVal}
        </span>
        {stat.suffix && (
          <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">
            {stat.suffix}
          </span>
        )}
      </div>

      <div>
        <p className="text-xs text-slate-300 mb-2">
          {stat.description}
        </p>
        <p className="text-[10px] text-slate-400 font-mono leading-tight">
          {stat.sourceNote}
        </p>
      </div>
    </div>
  );
};
