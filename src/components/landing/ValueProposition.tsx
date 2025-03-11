
import React from 'react';
import { Search, Clock, Library, CreditCard, Newspaper } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#F4EBFF] text-[#7E5BC0] text-sm font-medium mb-4">
            Your reading experience, reimagined
          </span>
          <h2 className="text-3xl font-bold text-gray-900">A smarter way to access premium content</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard 
            icon={<Search className="text-white h-6 w-6" />}
            title="Discover & Rent"
            description="Find articles by URL or browse our collection of partnered publishers."
            color="from-purple-500 to-blue-500"
          />
          
          <FeatureCard 
            icon={<Clock className="text-white h-6 w-6" />}
            title="Read on Your Schedule"
            description="Rent for 24-72 hours, with reading time starting when you're ready."
            color="from-blue-500 to-teal-500"
          />
          
          <FeatureCard 
            icon={<Library className="text-white h-6 w-6" />}
            title="Your Personal Library"
            description="Organize articles by publisher, length, topic, or create your own collections."
            color="from-teal-500 to-green-500"
          />
        </div>
        
        <div className="mt-20 relative bg-gradient-to-br from-[#F8F9FC] to-white p-8 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-200 to-green-200 rounded-full blur-3xl opacity-30"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">How credits work</h3>
              <p className="text-gray-600 mb-6">
                Add credits to your account and pay only for the articles you read. No subscriptions, no commitments.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 p-1 rounded-full bg-[#F4EBFF] text-[#7E5BC0]">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Flexible pricing</p>
                    <p className="text-sm text-gray-500">Articles typically range from $0.49 to $1.99</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 p-1 rounded-full bg-[#F4EBFF] text-[#7E5BC0]">
                    <Newspaper className="w-4 h-4" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Publisher partnerships</p>
                    <p className="text-sm text-gray-500">Growing network of premium content sources</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="mb-4 pb-4 border-b border-gray-100">
                <div className="text-sm text-gray-500 mb-1">Available Credits</div>
                <div className="text-3xl font-bold text-gray-900">$25.00</div>
              </div>
              <div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <CreditOption amount="$5" />
                  <CreditOption amount="$10" isSelected={true} />
                  <CreditOption amount="$20" />
                </div>
                <button className="w-full py-3 rounded-xl bg-[#7855C0] text-white font-medium hover:bg-[#6745B0] transition-colors">
                  Add Credits
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative overflow-hidden group">
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const CreditOption = ({ amount, isSelected = false }: { amount: string, isSelected?: boolean }) => {
  return (
    <div className={`py-2 rounded-lg border ${isSelected ? 'border-[#7855C0] bg-[#F4EBFF]' : 'border-gray-200'} text-center cursor-pointer`}>
      <span className={`font-medium ${isSelected ? 'text-[#7855C0]' : 'text-gray-900'}`}>{amount}</span>
    </div>
  );
};

export default ValueProposition;
