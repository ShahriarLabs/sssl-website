import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { contactDetails } from '../data/siteConfig';
import { MagneticButton } from './MagneticButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Projects', href: '#projects' },
    { label: 'Industries', href: '#industries' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-slate-800/90 shadow-md shadow-black/25'
          : 'bg-navy-950/80 backdrop-blur-sm border-b border-slate-800/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Precise compact single-row flex container (72px desktop / 64px mobile) */}
        <div className="flex items-center justify-between h-[64px] sm:h-[72px]">
          
          {/* Primary Official Brand Logo (No duplicate text) */}
          <a
            href="#hero"
            className="flex items-center shrink-0 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md group"
            aria-label="Soldier Security Services Ltd."
          >
            <div className="h-11 sm:h-13 w-auto px-2 py-1 bg-white rounded-md border border-slate-700/60 shadow-sm flex items-center justify-center group-hover:border-amber-500/60 transition-all">
              <img
                src="/images/sssl-logo.jpg"
                alt="Soldier Security Services Ltd."
                className="h-full w-auto object-contain max-w-[160px] sm:max-w-[190px]"
                loading="eager"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 lg:gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-amber-400 transition-colors py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons (CTA) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={contactDetails.phone.telLink}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-navy-900 border border-slate-700/80 rounded hover:border-amber-500/50 hover:text-white transition-all"
              title="Call 24/7 Control Desk"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{contactDetails.phone.raw}</span>
            </a>

            <MagneticButton
              as="a"
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded transition-all shadow-md shadow-amber-500/10 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>

          {/* Mobile Quick Action & Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <a
              href={contactDetails.phone.telLink}
              className="p-2 rounded text-amber-400 hover:bg-navy-850 focus:outline-none focus:ring-1 focus:ring-amber-500"
              aria-label="Call Dispatch"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-300 hover:text-white hover:bg-navy-850 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-[64px] sm:top-[72px] left-0 right-0 bg-navy-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-1 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-1 border-b border-slate-800/80 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-amber-400 hover:bg-navy-900 rounded"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-1 flex flex-col gap-2">
            <a
              href={contactDetails.phone.telLink}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-200 bg-navy-900 border border-slate-700 rounded"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Call: {contactDetails.phone.raw}</span>
            </a>

            <a
              href="#contact"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 bg-amber-400 hover:bg-amber-300 rounded shadow"
            >
              <span>Request a Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
