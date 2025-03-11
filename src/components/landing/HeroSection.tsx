
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rainbow, Sun, Heart, Star, Sparkles } from 'lucide-react';

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
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-xl flex items-center justify-center relative overflow-hidden">
              <Sun className="absolute top-10 left-10 w-16 h-16 text-yellow-400 animate-pulse" />
              <Rainbow className="absolute center w-32 h-32 text-indigo-500 opacity-80" />
              <Star className="absolute bottom-12 right-12 w-14 h-14 text-amber-400" />
              <Sparkles className="absolute top-1/3 right-1/4 w-12 h-12 text-blue-400" />
              <Heart className="absolute bottom-1/4 left-1/4 w-12 h-12 text-rose-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
