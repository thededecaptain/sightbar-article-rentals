
import React from 'react';
import { User } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What readers and publishers are saying</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard 
            name="Sarah T."
            role="Reader"
            quote="I love how I can read articles from different newspapers without subscribing to each one. It's affordable and convenient!"
          />
          
          <TestimonialCard 
            name="John D."
            role="Editor at The Daily News"
            quote="Partnering with this platform has allowed us to reach new readers and monetize our content more effectively."
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, role, quote }: { name: string, role: string, quote: string }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-black/10 flex items-center justify-center mr-4">
          <User className="h-6 w-6 text-black/60" />
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">
        "{quote}"
      </p>
    </div>
  );
};

export default Testimonials;
