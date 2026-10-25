import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { contactDetails } from '../data/siteConfig';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

export const FloatingContactBar: React.FC = () => {
  return (
    <>
      {/* Desktop Floating Vertical Bar (Right Side) */}
      <aside 
        aria-label="Direct Contact Actions"
        className="hidden md:flex fixed right-4 bottom-8 z-40 flex-col gap-2.5 p-2 rounded-lg bg-navy-900/90 backdrop-blur-md border border-slate-700/80 shadow-2xl"
      >
        {/* Phone Button */}
        <a
          href={contactDetails.phone.telLink}
          className="group relative w-11 h-11 rounded bg-navy-800 hover:bg-amber-500 border border-slate-700 hover:border-amber-400 flex items-center justify-center text-amber-400 hover:text-navy-950 transition-all shadow focus:outline-none focus:ring-2 focus:ring-amber-500"
          aria-label={`Call SSSL Hotline: ${contactDetails.phone.raw}`}
        >
          <Phone className="w-5 h-5 transition-transform group-hover:scale-110" />
          
          {/* Tooltip */}
          <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-navy-950 px-2.5 py-1 text-[11px] font-semibold text-slate-200 border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Call: {contactDetails.phone.raw}
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={contactDetails.whatsapp.chatUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-11 h-11 rounded bg-emerald-950/80 hover:bg-emerald-600 border border-emerald-800/80 hover:border-emerald-400 flex items-center justify-center text-emerald-400 hover:text-white transition-all shadow focus:outline-none focus:ring-2 focus:ring-emerald-500"
          aria-label="Chat on WhatsApp (+8801707059684)"
        >
          <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
          
          {/* Tooltip */}
          <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-navy-950 px-2.5 py-1 text-[11px] font-semibold text-slate-200 border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            WhatsApp Inquiry
          </span>
        </a>

        {/* Facebook Link */}
        <a
          href={contactDetails.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-11 h-11 rounded bg-blue-950/80 hover:bg-blue-600 border border-blue-800/80 hover:border-blue-400 flex items-center justify-center text-blue-400 hover:text-white transition-all shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Visit SSSL Official Facebook Page"
        >
          <FacebookIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
          
          {/* Tooltip */}
          <span className="pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-navy-950 px-2.5 py-1 text-[11px] font-semibold text-slate-200 border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            Official Facebook
          </span>
        </a>
      </aside>

      {/* Mobile Bottom Fixed Bar (Call & WhatsApp) */}
      <div 
        role="region"
        aria-label="Mobile quick contact bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 flex items-center gap-3 shadow-2xl"
      >
        <a
          href={contactDetails.phone.telLink}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-navy-900 border border-amber-500/40 text-amber-400 font-bold text-xs uppercase tracking-wider active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4" />
          <span>Call Desk</span>
        </a>

        <a
          href={contactDetails.whatsapp.chatUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider active:scale-95 transition-transform shadow"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};
