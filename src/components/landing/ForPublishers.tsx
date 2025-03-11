
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, BarChart3, Users, Globe, Star } from 'lucide-react';

const ForPublishers = () => {
  return (
    <section id="for-publishers" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute -z-10 top-40 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 opacity-20 blur-3xl"></div>
      <div className="absolute -z-10 bottom-20 left-0 w-80 h-80 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-6">
            <span className="inline-block px-4 py-2 rounded-full bg-[#F4EBFF] text-[#7E5BC0] text-sm font-medium mb-2">
              For publishers
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Expand your reach and monetize your content</h2>
            <p className="text-lg text-gray-600">
              Partner with us to make your articles available to a wider audience while retaining full control over your content.
            </p>
            
            <div className="space-y-6 mt-6">
              <FeaturePoint 
                icon={<Globe className="text-white h-4 w-4" />}
                title="Seamless integration"
                description="Readers access your articles through our secure gateway, bypassing paywalls with a single trusted account."
                color="from-purple-500 to-blue-500"
              />
              
              <FeaturePoint 
                icon={<BarChart3 className="text-white h-4 w-4" />}
                title="Valuable insights"
                description="Gain access to detailed reader analytics, demographics, and behavioral data to grow your subscriber base."
                color="from-blue-500 to-teal-500"
              />
              
              <FeaturePoint 
                icon={<Users className="text-white h-4 w-4" />}
                title="Demand-driven partnerships"
                description="We prioritize partnerships based on reader demand, ensuring your content reaches motivated audiences."
                color="from-teal-500 to-green-500"
              />
              
              <FeaturePoint 
                icon={<Star className="text-white h-4 w-4" />}
                title="Premium positioning"
                description="Featured placement for popular publishers, driving more traffic to your highest-value content."
                color="from-orange-500 to-pink-500"
              />
            </div>
            
            <div className="pt-4">
              <Button className="bg-[#7855C0] hover:bg-[#6745B0] px-6 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all">
                Partner with us
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Publisher content integration" 
                className="rounded-2xl shadow-xl w-full relative z-10 transform -rotate-2" 
              />
              
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-[#F4EBFF] rounded-full flex items-center justify-center z-20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#7855C0]">50+</div>
                  <div className="text-sm text-[#7E5BC0]">Publisher partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturePoint = ({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) => {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${color} group-hover:shadow-md transition-shadow`}>
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ForPublishers;
