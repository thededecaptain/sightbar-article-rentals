
import React from 'react';
import { Search, ExternalLink, BookOpen, CreditCard } from 'lucide-react';

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
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-sm">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Platform screenshot" 
            className="w-full h-auto rounded-lg" 
          />
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
