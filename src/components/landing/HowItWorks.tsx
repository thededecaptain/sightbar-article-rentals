
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, Clock, BookOpen } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F8F9FC] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-[#F4EBFF] text-[#7E5BC0] text-sm font-medium mb-4">
            Simple & intuitive
          </span>
          <h2 className="text-3xl font-bold text-gray-900">How Sightbar works for readers</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <StepCard 
            number={1}
            title="Find your article"
            description="Paste any article URL or browse through our curated collection"
            icon={<Globe className="h-6 w-6" />}
            color="from-purple-500 to-blue-500"
          />
          
          <StepCard 
            number={2}
            title="Rent and read on your terms"
            description="Pay for 24-72 hours of access. Timer starts only when you begin reading"
            icon={<Clock className="h-6 w-6" />}
            color="from-blue-500 to-pink-500"
          />
          
          <StepCard 
            number={3}
            title="Build your personal library"
            description="Organize your articles and re-rent favorites anytime"
            icon={<BookOpen className="h-6 w-6" />}
            color="from-pink-500 to-orange-500"
          />
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-[#7855C0] hover:bg-[#6745B0] px-6 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all">
            Start reading now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ number, title, description, icon, color }: { number: number, title: string, description: string, icon: React.ReactNode, color: string }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
      <div className="flex items-center mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${color} text-white mr-4`}>
          {icon}
        </div>
        <div className="h-8 w-8 flex items-center justify-center bg-[#F4EBFF] rounded-full text-[#7E5BC0] font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default HowItWorks;
