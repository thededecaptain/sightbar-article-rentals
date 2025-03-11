
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, BookOpen, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F6F8FA] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-6 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-40"></div>
            <span className="inline-block px-4 py-2 rounded-full bg-[#F4EBFF] text-[#7E5BC2] text-sm font-medium mb-2">
              The future of article rentals
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Read beyond the paywall, <span className="text-[#7855C0]">one article at a time</span>
            </h1>
            <p className="text-xl text-gray-600">
              Rent individual articles from premium publishers without subscriptions. Pay for exactly what you read.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#7855C0] hover:bg-[#6745B0] text-white px-6 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all">
                Start reading <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-6 py-6 text-lg rounded-xl border-2 border-gray-200">
                For publishers
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full blur-3xl opacity-20"></div>
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-xl bg-white">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#9981F5] via-[#7855C0] to-[#5933A0]"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="mx-auto bg-gray-100 rounded-full px-4 py-1 text-sm text-gray-600">
                    <Search className="inline-block w-3 h-3 mr-1" /> sightbar.io
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#7855C0] flex items-center justify-center text-white mr-2">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div className="font-medium">Financial Times</div>
                    </div>
                    <div className="h-2 w-2/3 bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-1/2 bg-gray-200 rounded-full mt-1"></div>
                    <div className="mt-3 flex justify-end">
                      <span className="text-xs bg-[#F4EBFF] text-[#7E5BC2] px-2 py-1 rounded-md">Rent for $0.99</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#7855C0] flex items-center justify-center text-white mr-2">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div className="font-medium">The Economist</div>
                    </div>
                    <div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-2/3 bg-gray-200 rounded-full mt-1"></div>
                    <div className="mt-3 flex justify-end">
                      <span className="text-xs bg-[#F4EBFF] text-[#7E5BC2] px-2 py-1 rounded-md">Rent for $1.49</span>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#7855C0] flex items-center justify-center text-white mr-2">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="font-medium">The New York Times</div>
                    </div>
                    <div className="h-2 w-2/3 bg-gray-200 rounded-full"></div>
                    <div className="h-2 w-1/2 bg-gray-200 rounded-full mt-1"></div>
                    <div className="mt-3 flex justify-end">
                      <span className="text-xs bg-[#F4EBFF] text-[#7E5BC2] px-2 py-1 rounded-md">Rent for $0.79</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
