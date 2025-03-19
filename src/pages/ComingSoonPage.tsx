
import React, { useEffect } from 'react';
import Header from '@/components/landing/Header';
import FooterSection from '@/components/landing/FooterSection';

const ComingSoonPage = () => {
  // Load Typeform script when component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F4EBFF] to-white overflow-hidden relative">
          <div className="absolute -z-10 top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 opacity-30 blur-3xl"></div>
          <div className="absolute -z-10 bottom-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-30 blur-3xl"></div>
          
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-[#F4EBFF] text-[#7E5BC0] text-sm font-medium mb-6">
              Coming Soon
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Join the <span className="text-[#7855C0]">Sightbar</span> waitlist
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Be the first to know when Sightbar launches. Subscribe to receive updates and early access to our article rental platform.
            </p>
            
            <div className="glass-panel bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-100 shadow-lg max-w-xl mx-auto">
              {/* Typeform Embed */}
              <div data-tf-live="01JPR7APE9F2J4N57DGA1A5KX3"></div>
            </div>
            
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7855C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>info@sightbar.io</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default ComingSoonPage;
