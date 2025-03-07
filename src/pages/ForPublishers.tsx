import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, DollarSign, Users, BarChart, Shield } from 'lucide-react';

const ForPublishers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 md:px-8 max-w-screen-xl mx-auto mb-16 mt-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Monetize Your Content, <span className="text-accent-blue">Article by Article</span>
            </h1>
            <p className="text-lg md:text-xl text-sightbar-600 max-w-3xl mx-auto mb-8">
              Unlock new revenue streams and reach readers who prefer pay-per-article access over traditional subscriptions.
            </p>
            <Button className="bg-black text-white hover:bg-sightbar-800 rounded-full px-8 py-6 text-lg button-effect">
              Partner With Us <ArrowRight className="ml-2" />
            </Button>
          </div>
          
          <div className="relative rounded-xl overflow-hidden h-64 md:h-80 lg:h-96 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Publisher dashboard" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold">Expand Your Audience, Increase Your Revenue</h2>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="bg-gray-50 py-16 px-6 md:px-8">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Publishers Choose Sightbar</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Additional Revenue</h3>
                <p className="text-sightbar-600">
                  Generate income from casual readers who would never commit to a full subscription.
                </p>
              </div>
              
              {/* Benefit 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center mb-4">
                  <Users className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Wider Audience</h3>
                <p className="text-sightbar-600">
                  Reach readers who are interested in your content but hesitant about subscription commitments.
                </p>
              </div>
              
              {/* Benefit 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center mb-4">
                  <BarChart className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Detailed Analytics</h3>
                <p className="text-sightbar-600">
                  Gain insights into reader behavior, popular articles, and content performance.
                </p>
              </div>
              
              {/* Benefit 4 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center mb-4">
                  <Shield className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Content Protection</h3>
                <p className="text-sightbar-600">
                  Our system ensures readers only access the articles they've paid for, maintaining your paywall integrity.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 px-6 md:px-8">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works For Publishers</h2>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Publisher dashboard" 
                  className="rounded-xl shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-accent-blue pl-6">
                  <h3 className="text-xl font-semibold mb-2">Simple Integration</h3>
                  <p className="text-sightbar-600">
                    We create a single sign-on system that works with your existing paywall infrastructure. No complex technical changes required.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent-blue pl-6">
                  <h3 className="text-xl font-semibold mb-2">Seamless Authentication</h3>
                  <p className="text-sightbar-600">
                    Readers access your content through Sightbar's secure authentication system, which verifies their article rental status.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent-blue pl-6">
                  <h3 className="text-xl font-semibold mb-2">Shared User Data</h3>
                  <p className="text-sightbar-600">
                    Gain valuable insights into reader behavior, preferences, and demographics to inform your content strategy.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent-blue pl-6">
                  <h3 className="text-xl font-semibold mb-2">Fair Revenue Sharing</h3>
                  <p className="text-sightbar-600">
                    We offer competitive revenue-sharing models that ensure you're fairly compensated for each article rental.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Publisher Testimonials */}
        <section className="bg-gray-50 py-16 px-6 md:px-8">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Publishers Say</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-sightbar-600 mb-6">
                  "Sightbar has opened up a new revenue stream for our publication. We're reaching readers who never would have subscribed otherwise."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-sightbar-500">Digital Director, The Daily Chronicle</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-sightbar-600 mb-6">
                  "The integration was surprisingly easy, and the analytics we're getting have been invaluable for our content strategy."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Michael Chang</h4>
                    <p className="text-sm text-sightbar-500">CTO, Tech Insights Magazine</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-sightbar-600 mb-6">
                  "Our premium investigative pieces get more visibility now. Sightbar readers are willing to pay for quality content when it matters to them."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Elena Rodriguez</h4>
                    <p className="text-sm text-sightbar-500">Editor-in-Chief, Global Affairs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-black text-white py-16 px-6 md:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Publisher Network</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Become a Sightbar partner and start monetizing your content in a new way. Our team is ready to answer your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent-blue text-white hover:bg-accent-blue/90 rounded-full px-8 py-6 text-lg button-effect">
                Contact Our Team
              </Button>
              <Link to="/for-readers">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg button-effect">
                  For Readers
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ForPublishers;
