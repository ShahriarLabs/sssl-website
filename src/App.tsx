import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AnimatedCounters } from './components/AnimatedCounters';
import { About } from './components/About';
import { ServicesSection } from './components/ServicesSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { IndustriesSection } from './components/IndustriesSection';
import { TrustCredentialsSection } from './components/TrustCredentialsSection';
import { CareersSection } from './components/CareersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';
import { CursorGlow } from './components/CursorGlow';

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-navy-950 text-slate-200 selection:bg-amber-500/25 selection:text-amber-200 flex flex-col relative">
        {/* Subtle cursor following aura (desktop only, reduced-motion friendly) */}
        <CursorGlow />

        {/* Sticky Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1 w-full" id="main-content">
          <Hero />
          <AnimatedCounters />
          <About />
          <ServicesSection />
          <LeadershipSection />
          <ProjectsShowcase />
          <IndustriesSection />
          <TrustCredentialsSection />
          <CareersSection />
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
