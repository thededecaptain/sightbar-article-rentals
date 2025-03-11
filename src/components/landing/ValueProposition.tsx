
import React from 'react';
import { Search, ExternalLink, BookOpen, CreditCard, Square, Circle, Triangle } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Your gateway to premium content, one article at a time</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Search className="text-white h-6 w-6" />}
            title="Rent articles instantly"
            description="Paste a URL, search, and rent articles from partnered publishers."
          />
          
          <FeatureCard 
            icon={<ExternalLink className="text-white h-6 w-6" />}
            title="Flexible access"
            description="Read for 24-72 hours, starting whenever you're ready."
          />
          
          <FeatureCard 
            icon={<BookOpen className="text-white h-6 w-6" />}
            title="Build your library"
            description="Save and organize rented articles for future access."
          />
          
          <FeatureCard 
            icon={<CreditCard className="text-white h-6 w-6" />}
            title="No subscriptions"
            description="Pay only for what you read, without long-term commitments."
          />
        </div>
        
        <div className="mt-12 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-sm relative h-64 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Square className="absolute w-32 h-32 text-gray-200 transform rotate-45" />
            <Circle className="absolute w-40 h-40 text-gray-300" />
            <Triangle className="absolute w-24 h-24 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ValueProposition;
