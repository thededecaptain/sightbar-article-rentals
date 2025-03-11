
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { ArrowRight, Mail, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const FooterSection = () => {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscription successful!",
        description: `We've added ${email} to our newsletter.`,
      });
      setEmail('');
    }
  };
  
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1A1626] text-white overflow-hidden relative">
      <div className="absolute -z-10 top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 opacity-30 blur-3xl"></div>
      <div className="absolute -z-10 bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-30 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-white">Sight</span>
              <span className="text-[#9b87f5]">bar</span>
              <div className="ml-1 w-2 h-2 rounded-full bg-[#9b87f5]"></div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The future of article rentals. Read beyond the paywall, one article at a time, without expensive subscriptions.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialIcon href="#" icon={<Instagram className="h-5 w-5" />} />
              <SocialIcon href="#" icon={<Github className="h-5 w-5" />} />
              <SocialIcon href="#" icon={<Linkedin className="h-5 w-5" />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Platform</h3>
            <ul className="space-y-4">
              <FooterLink href="#how-it-works">How it works</FooterLink>
              <FooterLink href="#for-publishers">For publishers</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Features</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for platform updates and content recommendations.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-3 rounded-l-lg w-full text-gray-900 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="bg-[#7855C0] hover:bg-[#6745B0] rounded-l-none">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-xs text-gray-500">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Sightbar. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <FooterSmallLink href="#">Privacy</FooterSmallLink>
            <FooterSmallLink href="#">Terms</FooterSmallLink>
            <FooterSmallLink href="#">Cookies</FooterSmallLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#7855C0] hover:text-white transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-white transition-colors">
        {children}
      </a>
    </li>
  );
};

const FooterSmallLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <a href={href} className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
      {children}
    </a>
  );
};

export default FooterSection;
