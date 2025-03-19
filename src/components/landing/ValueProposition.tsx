
import React from 'react';
import { Search, Clock, Library } from 'lucide-react';

const ValueProposition = () => {
  return <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#F4EBFF] text-[#7E5BC0] text-sm font-medium mb-4">
            Your reading experience, reimagined
          </span>
          <h2 className="text-3xl font-bold text-gray-900">A smarter way to access premium content</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard icon={<Search className="text-white h-6 w-6" />} title="Discover & Rent" description="Find articles by URL or browse our collection of partnered publishers." color="from-purple-500 to-blue-500" />
          
          <FeatureCard icon={<Clock className="text-white h-6 w-6" />} title="Read on Your Schedule" description="Rent for 24-72 hours, with reading time starting when you're ready." color="from-blue-500 to-teal-500" />
          
          <FeatureCard icon={<Library className="text-white h-6 w-6" />} title="Your Personal Library" description="Organize articles by publisher, length, topic, or create your own collections." color="from-teal-500 to-green-500" />
        </div>
      </div>
    </section>;
};

const FeatureCard = ({
  icon,
  title,
  description,
  color
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) => {
  return <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative overflow-hidden group">
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
};

export default ValueProposition;
