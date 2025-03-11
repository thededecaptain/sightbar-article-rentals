
import React from 'react';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How it works for readers</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <StepCard 
            number={1}
            title="Search or paste a URL"
            description="Paste the article's URL or search for it in our platform."
          />
          
          <StepCard 
            number={2}
            title="Rent and read"
            description="If the article is available, rent it for 24-72 hours. Start reading anytime – the timer begins when you open it."
          />
          
          <StepCard 
            number={3}
            title="Organize and revisit"
            description="Access your rented articles in your library. Re-rent them anytime if you need more time."
          />
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-black text-white hover:bg-gray-800">
            Try it now
          </Button>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ number, title, description }: { number: number, title: string, description: string }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full text-2xl font-bold mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HowItWorks;
