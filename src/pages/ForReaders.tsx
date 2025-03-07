import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Newspaper, Clock, Library, CreditCard } from 'lucide-react';

const ForReaders = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-6 md:px-8 max-w-screen-xl mx-auto mb-16 mt-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Read What Matters, <span className="text-accent-blue">Pay Per Article</span>
            </h1>
            <p className="text-lg md:text-xl text-sightbar-600 max-w-3xl mx-auto mb-8">
              Sightbar gives you access to premium content from top publishers without expensive subscriptions. Pay only for the articles you actually read.
            </p>
            <Button className="bg-black text-white hover:bg-sightbar-800 rounded-full px-8 py-6 text-lg button-effect">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </div>
          
          <div className="relative rounded-xl overflow-hidden h-64 md:h-80 lg:h-96 mb-8">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Person reading an article" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold">Freedom to Read Without Limits</h2>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="bg-gray-50 py-16 px-6 md:px-8">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How Sightbar Works for Readers</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center mb-4">
                  <Newspaper className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Find Articles</h3>
                <p className="text-sightbar-600">
                  Paste any article URL into Sightbar or browse our curated collection of premium content from top publishers.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Rent Articles</h3>
                <p className="text-sightbar-600">
                  Pay a small fee to rent articles for 24-72 hours. No subscriptions, no commitments - just pay for what you read.
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center mb-4">
                  <Library className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Build Your Library</h3>
                <p className="text-sightbar-600">
                  All rented articles are stored in your personal library. Start reading when you're ready - that's when the timer begins.
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Timed Access</h3>
                <p className="text-sightbar-600">
                  Enjoy full access to your rented articles until the rental period ends. Articles then move to your archive for future reference.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-6 md:px-8">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Reader Benefits</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-blue font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cost-Effective Reading</h3>
                    <p className="text-sightbar-600">Pay only for articles you actually read, not for entire subscriptions you barely use.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-blue font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Diverse Content Sources</h3>
                    <p className="text-sightbar-600">Access articles from multiple publications without managing multiple subscriptions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-blue font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Organized Library</h3>
                    <p className="text-sightbar-600">Keep all your important articles in one place, organized by publication, topic, or reading status.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-blue font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Flexible Reading Time</h3>
                    <p className="text-sightbar-600">Rent now, read later. The timer only starts when you're ready to begin reading.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-blue font-semibold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Request New Sources</h3>
                    <p className="text-sightbar-600">If we don't have a partnership with a publication you love, request it and we'll try to add it.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-blue font-semibold">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">User-Friendly Experience</h3>
                    <p className="text-sightbar-600">Simple interface designed for readers who value quality content and their time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-black text-white py-16 px-6 md:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Reading?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join Sightbar today and discover a smarter way to access premium content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent-blue text-white hover:bg-accent-blue/90 rounded-full px-8 py-6 text-lg button-effect">
                Sign Up Now
              </Button>
              <Link to="/for-publishers">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg button-effect">
                  For Publishers
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

export default ForReaders;
