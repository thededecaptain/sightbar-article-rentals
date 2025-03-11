
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ValueProposition from './ValueProposition';
import HowItWorks from './HowItWorks';
import ForPublishers from './ForPublishers';
import LibraryAndCredits from './LibraryAndCredits';
import Testimonials from './Testimonials';
import FAQSection from './FAQSection';
import FooterSection from './FooterSection';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <ValueProposition />
      <HowItWorks />
      <ForPublishers />
      <LibraryAndCredits />
      <Testimonials />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
