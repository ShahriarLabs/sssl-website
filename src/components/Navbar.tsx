import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { contactDetails, siteMeta } from '../data/siteConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-2.5'
          : 'bg-navy-950/60 backdrop-blur-sm border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Company Brand */}
          <a href="#hero" className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-sm">
            <div className="relative w-11 h-11 rounded-full bg-white p-0.5 border border-amber-500/30 overflow-hidden shadow-sm shrink-0 flex items-center justify-center">
              <img
                src="/images/sssl-logo.jpg"
                alt="Soldier Security Services Ltd. Official Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to shield icon if image load fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <Shield className="w-6 h-6 text-brand-blue hidden" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors font-display">
                {siteMeta.companyName}
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-400 font-medium">
                Private Security Services
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-wider font-medium text-slate-300 hover:text-amber-400 transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-amber-500 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={contactDetails.phone.telLink}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-300 bg-navy-900 border border-slate-700/80 rounded hover:border-amber-500/50 hover:text-white transition-all"
              title="Call 24/7 Control Desk"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{contactDetails.phone.raw}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded transition-all shadow-md shadow-amber-500/10 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded text-slate-300 hover:text-white hover:bg-navy-850 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-navy-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2.5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 border-b border-slate-800/80 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-navy-900 rounded"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={contactDetails.phone.telLink}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-slate-200 bg-navy-900 border border-slate-700 rounded"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: {contactDetails.phone.raw}</span>
            </a>

            <a
              href="#contact"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold uppercase tracking-wider text-navy-950 bg-amber-400 hover:bg-amber-300 rounded shadow"
            >
              <span>Request a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
