
import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What readers and publishers are saying</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard 
            image="https://randomuser.me/api/portraits/women/44.jpg"
            name="Sarah T."
            role="Reader"
            quote="I love how I can read articles from different newspapers without subscribing to each one. It's affordable and convenient!"
          />
          
          <TestimonialCard 
            image="https://randomuser.me/api/portraits/men/32.jpg"
            name="John D."
            role="Editor at The Daily News"
            quote="Partnering with this platform has allowed us to reach new readers and monetize our content more effectively."
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ image, name, role, quote }: { image: string, name: string, role: string, quote: string }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name} 
            className="h-full w-full object-cover" 
          />
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
