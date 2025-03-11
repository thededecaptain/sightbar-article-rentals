
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, BarChart3, Users } from 'lucide-react';

const ForPublishers = () => {
  return (
    <section id="for-publishers" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Publisher content integration" 
              className="rounded-lg shadow-xl w-full" 
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Expand your reach and monetize your content</h2>
            <p className="text-xl text-gray-600">
              Partner with us to make your articles available to a wider audience while retaining full control over your content.
            </p>
            
            <div className="space-y-4 mt-6">
              <FeaturePoint 
                icon={<ExternalLink className="text-white h-4 w-4" />}
                title="Seamless integration"
                description="Readers access your articles through our platform, bypassing paywalls with a single account."
              />
              
              <FeaturePoint 
                icon={<BarChart3 className="text-white h-4 w-4" />}
                title="Data insights"
                description="Gain access to reader habits, email addresses, and names to grow your subscriber base."
              />
              
              <FeaturePoint 
                icon={<Users className="text-white h-4 w-4" />}
                title="Demand-driven partnerships"
                description="We prioritize partnerships based on reader demand, ensuring your content reaches the right audience."
              />
            </div>
            
            <div className="pt-4">
              <Button className="bg-black text-white hover:bg-gray-800">
                Partner with us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturePoint = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="flex gap-3">
      <div className="flex-shrink-0">
        <div className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ForPublishers;
