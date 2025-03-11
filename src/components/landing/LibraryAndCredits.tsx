import React from 'react';
import { BookOpen, FolderOpen, CreditCard, Square, Circle, Triangle } from 'lucide-react';

const LibraryAndCredits = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Your reading hub and wallet, all in one place</h2>
          <p className="text-xl text-gray-600 mt-4">
            Manage your rented articles, organize your library, and top up credits effortlessly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<BookOpen className="text-white h-6 w-6" />}
            title="Active rentals"
            description="See articles you're currently reading and those you've rented but haven't started."
          />
          
          <FeatureCard 
            icon={<FolderOpen className="text-white h-6 w-6" />}
            title="Categorize and organize"
            description="Sort articles by newspaper, topic, or reading length."
          />
          
          <FeatureCard 
            icon={<CreditCard className="text-white h-6 w-6" />}
            title="Easy payments"
            description="Add credits, update payment methods, and track your spending."
          />
        </div>
        
        <div className="mt-12 bg-gradient-to-br from-white to-gray-100 p-6 rounded-lg shadow-sm relative h-64 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Square className="absolute w-40 h-40 text-gray-200 transform -rotate-12" />
            <Circle className="absolute w-32 h-32 text-gray-300 transform translate-x-12" />
            <Triangle className="absolute w-28 h-28 text-gray-400 transform -translate-x-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default LibraryAndCredits;
