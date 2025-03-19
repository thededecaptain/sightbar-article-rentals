
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import Header from '@/components/landing/Header';
import FooterSection from '@/components/landing/FooterSection';

const ComingSoonPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission - in a real app, this would connect to a backend
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "We'll notify you when Sightbar launches.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F4EBFF] to-white overflow-hidden relative">
          <div className="absolute -z-10 top-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 opacity-30 blur-3xl"></div>
          <div className="absolute -z-10 bottom-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 opacity-30 blur-3xl"></div>
          
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-[#F4EBFF] text-[#7E5BC0] text-sm font-medium mb-6">
              Coming Soon
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Join the <span className="text-[#7855C0]">Sightbar</span> waitlist
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Be the first to know when Sightbar launches. Subscribe to receive updates and early access to our article rental platform.
            </p>
            
            <div className="glass-panel bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-100 shadow-lg max-w-xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-left text-gray-700 font-medium">
                    Email address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 h-12 text-base"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#7855C0] hover:bg-[#6745B0] text-white py-6 rounded-xl text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      Notify me <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  We'll never share your email with anyone else.
                </p>
              </form>
            </div>
            
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="h-5 w-5 text-[#7855C0]" />
                <span>info@sightbar.io</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default ComingSoonPage;
