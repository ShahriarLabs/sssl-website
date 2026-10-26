import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AnimatedCounters } from './components/AnimatedCounters';
import { About } from './components/About';
import { ServicesSection } from './components/ServicesSection';
import { CinematicShowcase } from './components/CinematicShowcase';
import { LeadershipSection } from './components/LeadershipSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { IndustriesSection } from './components/IndustriesSection';
import { TrustCredentialsSection } from './components/TrustCredentialsSection';
import { CareersSection } from './components/CareersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';
import { CursorGlow } from './components/CursorGlow';
import { BrandDivider } from './components/BrandDivider';
import { CurvedScrollLogo } from './components/CurvedScrollLogo';

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen text-slate-200 selection:bg-amber-500/25 selection:text-amber-200 flex flex-col relative">
        {/* Subtle cursor following aura (desktop only, reduced-motion friendly) */}
        <CursorGlow />

        {/* Dynamic Curved / Zigzag Scroll-Driven Main Brand Logo */}
        <CurvedScrollLogo />

        {/* Sticky Compact Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1 w-full" id="main-content">
          <Hero />
          
          <AnimatedCounters />
          
          <BrandDivider label="ABOUT THE FORCE" />
          
          <About />
          
          <BrandDivider label="OPERATIONAL CAPABILITIES" />
          
          <ServicesSection />
          
          {/* Full-Width Cinematic Storytelling Section */}
          <CinematicShowcase />
          
          <BrandDivider label="EXECUTIVE STEWARDSHIP" />
          
          <LeadershipSection />
          
          <BrandDivider label="VERIFIED CLIENT ROSTER" />
          
          <ProjectsShowcase />
          
          <BrandDivider label="SECTORS WE SAFEGUARD" />
          
          <IndustriesSection />
          
          <BrandDivider label="REGULATORY GOVERNANCE" />
          
          <TrustCredentialsSection />
          
          <BrandDivider label="CAREERS & RECRUITMENT" />
          
          <CareersSection />
          
          <BrandDivider label="DIRECT LIAISON & QUOTATION" />
          
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Desktop & Mobile Floating Contact Actions */}
        <FloatingContactBar />
      </div>
    </ErrorBoundary>
  );
};

export default App;
