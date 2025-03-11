
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Read what you want, when you want – without the commitment
            </h1>
            <p className="text-xl text-gray-600">
              Rent individual articles from top newspapers and magazines for 24-72 hours. No subscriptions. No hassle. Just great content.
            </p>
            <div className="pt-4">
              <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 text-lg">
                Start reading now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1553739493-e1eb1e82ef3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Person reading on devices" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
