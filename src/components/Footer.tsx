import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  MessageSquare, 
  ArrowUp, 
  X, 
  FileText,
  FileDown,
  ShieldCheck
} from 'lucide-react';
import { siteMeta, contactDetails } from '../data/siteConfig';

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

export const Footer: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Company', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Executive Leadership', href: '#leadership' },
    { label: 'Project Portfolio', href: '#projects' },
    { label: 'Industries Served', href: '#industries' },
    { label: 'Credentials & Trust', href: '#credentials' },
    { label: 'Career Recruitment', href: '#careers' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-navy-950 via-[#071022] to-[#030712] border-t border-steel-800/80 pt-16 pb-20 md:pb-12 text-slate-400 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-500/20 to-navy-900 border border-amber-500/30 shrink-0 flex items-center justify-center text-amber-400 shadow-md">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
              </div>

              <div>
                <span className="text-sm font-bold text-white tracking-tight block font-display">
                  {siteMeta.companyName}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                  Private Security Services Ltd.
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Providing disciplined security personnel, commercial asset protection, and executive operational vigilance across corporate, industrial, and residential sectors in Bangladesh.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={contactDetails.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-navy-900 border border-slate-700 flex items-center justify-center text-blue-400 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="Facebook Page"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={contactDetails.whatsapp.chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-navy-900 border border-slate-700 flex items-center justify-center text-emerald-400 hover:text-white hover:border-emerald-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={contactDetails.phone.telLink}
                className="w-8 h-8 rounded bg-navy-900 border border-slate-700 flex items-center justify-center text-amber-400 hover:text-white hover:border-amber-500 transition-colors"
                aria-label="Telephone Link"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Cols 5-7) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Website Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={siteMeta.pdfProfileUrl}
                  download={siteMeta.pdfDownloadFilename}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold transition-colors py-0.5"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download Company Profile (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Operational Office
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                {contactDetails.officeAddress.registered}, {contactDetails.officeAddress.city}, {contactDetails.officeAddress.country}
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={contactDetails.phone.telLink} className="hover:text-amber-400 font-mono">
                {contactDetails.phone.raw} (24/7 Hotline)
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              <a 
                href={contactDetails.whatsapp.chatUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-emerald-400 font-mono"
              >
                {contactDetails.whatsapp.number} (WhatsApp Desk)
              </a>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400">
              <p>
                <strong>Unconfigured Channels:</strong> Official corporate email and Instagram channels will be activated upon publication of official domain accounts.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} {siteMeta.companyName} All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setPrivacyModalOpen(true)}
              className="text-slate-400 hover:text-white transition-colors underline"
            >
              Privacy & Regulatory Notice
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded bg-navy-900 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Privacy & Regulatory Notice Modal */}
      {privacyModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-navy-900 border border-slate-700 rounded-lg max-w-lg w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setPrivacyModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3 text-amber-400">
              <FileText className="w-5 h-5" />
              <h3 className="text-base font-bold text-white">
                Privacy & Operational Compliance Notice
              </h3>
            </div>

            <div className="space-y-3 text-xs text-slate-300 mb-6 leading-relaxed">
              <p>
                <strong>Information Handling:</strong> All contact inquiries and client premise details submitted to Soldier Security Services Ltd. are processed under strict commercial confidentiality and are never disclosed to third parties.
              </p>
              <p>
                <strong>Regulatory Alignment:</strong> SSSL personnel conduct operations in compliance with Bangladesh laws, relevant labor regulations, and private security agency licensing rules.
              </p>
              <p>
                <strong>Representative Materials:</strong> Portfolio representations are published for evaluation purposes. Specific client identities are withheld in accordance with non-disclosure covenants.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setPrivacyModalOpen(false)}
              className="w-full py-2 text-xs font-bold uppercase tracking-wider text-navy-950 bg-amber-400 hover:bg-amber-300 rounded"
            >
              Close Notice
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
