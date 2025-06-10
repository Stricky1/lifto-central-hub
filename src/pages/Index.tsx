
import React from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import AboutSection from '@/components/AboutSection';
import HowToUseSection from '@/components/HowToUseSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import DownloadsSection from '@/components/DownloadsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <HeroBanner />
      <AboutSection />
      <HowToUseSection />
      <ApplicationsSection />
      <DownloadsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
