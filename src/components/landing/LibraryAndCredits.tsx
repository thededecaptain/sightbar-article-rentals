import React from 'react';
import { BookOpen, FolderOpen, CreditCard, Tag, Clock, Layout } from 'lucide-react';
const LibraryAndCredits = () => {
  return <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8F9FC] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#F4EBFF] text-[#7E5BC0] text-sm font-medium mb-4">
            Personalized experience
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your reading hub and wallet, all in one place</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage your rented articles, organize your library, and top up credits effortlessly
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard icon={<BookOpen className="text-white h-6 w-6" />} title="Active rentals" description="Track articles you're currently reading and those you've rented but haven't started" color="from-purple-500 to-blue-500" />
          
          <FeatureCard icon={<FolderOpen className="text-white h-6 w-6" />} title="Custom collections" description="Organize articles into personal categories like 'Must-reads' or 'Finance'" color="from-blue-500 to-teal-500" />
          
          <FeatureCard icon={<Tag className="text-white h-6 w-6" />} title="Smart filters" description="Sort articles by publisher, topic, reading time, or create your own filters" color="from-teal-500 to-green-500" />
          
          <FeatureCard icon={<CreditCard className="text-white h-6 w-6" />} title="Flexible payments" description="Add credits, update payment methods, and track your spending in one place" color="from-green-500 to-yellow-500" />
          
          <FeatureCard icon={<Clock className="text-white h-6 w-6" />} title="Reading timer" description="See exactly how much time you have left on each rented article" color="from-orange-500 to-red-500" />
          
          <FeatureCard icon={<Layout className="text-white h-6 w-6" />} title="Reading history" description="Browse your complete reading history and re-rent previous articles" color="from-red-500 to-purple-500" />
        </div>
        
        <div className="mt-20 relative">
          
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
  return <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 relative overflow-hidden group">
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
};
const CreditOption = ({
  amount,
  isSelected = false
}: {
  amount: string;
  isSelected?: boolean;
}) => {
  return <div className={`py-3 rounded-lg border ${isSelected ? 'border-[#7855C0] bg-[#F4EBFF]' : 'border-gray-200'} text-center cursor-pointer hover:border-[#7855C0] transition-colors`}>
      <span className={`font-medium ${isSelected ? 'text-[#7855C0]' : 'text-gray-900'}`}>{amount}</span>
    </div>;
};
export default LibraryAndCredits;