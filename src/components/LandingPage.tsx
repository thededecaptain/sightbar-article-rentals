
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  ExternalLink, 
  Search, 
  BookOpen, 
  FolderOpen, 
  CreditCard, 
  BarChart3,
  Database,
  Users,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  const [openFaq, setOpenFaq] = React.useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span>Sight</span><span className="text-accent-blue">bar</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">How it works</a>
            <a href="#for-publishers" className="text-sm font-medium text-gray-600 hover:text-gray-900">For publishers</a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900">FAQ</a>
          </nav>
          <Button className="hidden sm:inline-flex bg-black text-white hover:bg-gray-800">
            Get started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                Read what you want, when you want – without the commitment
              </h1>
              <p className="text-xl text-gray-600">
                Rent individual articles from top newspapers and magazines for 24-72 hours. No subscriptions. No hassle. Just great content.
              </p>
              <div className="pt-4">
                <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 text-lg">
                  Start reading now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1553739493-e1eb1e82ef3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Person reading on devices" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Your gateway to premium content, one article at a time</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Search className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rent articles instantly</h3>
              <p className="text-gray-600">Paste a URL, search, and rent articles from partnered publishers.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <ExternalLink className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible access</h3>
              <p className="text-gray-600">Read for 24-72 hours, starting whenever you're ready.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Build your library</h3>
              <p className="text-gray-600">Save and organize rented articles for future access.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No subscriptions</h3>
              <p className="text-gray-600">Pay only for what you read, without long-term commitments.</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Platform screenshot" 
              className="w-full h-auto rounded-lg" 
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How it works for readers</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Search or paste a URL</h3>
              <p className="text-gray-600">Paste the article's URL or search for it in our platform.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Rent and read</h3>
              <p className="text-gray-600">If the article is available, rent it for 24-72 hours. Start reading anytime – the timer begins when you open it.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Organize and revisit</h3>
              <p className="text-gray-600">Access your rented articles in your library. Re-rent them anytime if you need more time.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-black text-white hover:bg-gray-800">
              Try it now
            </Button>
          </div>
        </div>
      </section>

      {/* For Publishers */}
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
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
                      <ExternalLink className="text-white h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Seamless integration</h3>
                    <p className="text-gray-600">Readers access your articles through our platform, bypassing paywalls with a single account.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
                      <BarChart3 className="text-white h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Data insights</h3>
                    <p className="text-gray-600">Gain access to reader habits, email addresses, and names to grow your subscriber base.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="bg-black w-8 h-8 rounded-full flex items-center justify-center">
                      <Users className="text-white h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Demand-driven partnerships</h3>
                    <p className="text-gray-600">We prioritize partnerships based on reader demand, ensuring your content reaches the right audience.</p>
                  </div>
                </div>
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

      {/* Library and Credits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Your reading hub and wallet, all in one place</h2>
            <p className="text-xl text-gray-600 mt-4">
              Manage your rented articles, organize your library, and top up credits effortlessly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Active rentals</h3>
              <p className="text-gray-600">See articles you're currently reading and those you've rented but haven't started.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FolderOpen className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Categorize and organize</h3>
              <p className="text-gray-600">Sort articles by newspaper, topic, or reading length.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-black w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="text-white h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy payments</h3>
              <p className="text-gray-600">Add credits, update payment methods, and track your spending.</p>
            </div>
          </div>
          
          <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1586380951230-e6703d9f6833?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Library and credits interface" 
              className="w-full h-auto rounded-lg" 
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What readers and publishers are saying</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Sarah T." 
                    className="h-full w-full object-cover" 
                  />
                </div>
                <div>
                  <p className="font-semibold">Sarah T.</p>
                  <p className="text-sm text-gray-600">Reader</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I love how I can read articles from different newspapers without subscribing to each one. It's affordable and convenient!"
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="John D." 
                    className="h-full w-full object-cover" 
                  />
                </div>
                <div>
                  <p className="font-semibold">John D.</p>
                  <p className="text-sm text-gray-600">Editor at The Daily News</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Partnering with this platform has allowed us to reach new readers and monetize our content more effectively."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently asked questions</h2>
          </div>
          
          <div className="space-y-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Can I rent any article I find online?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  You can rent articles from our partnered publishers. If we don't have a partnership, you can request it, and we'll prioritize based on demand.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-medium">
                  What happens when my rental period ends?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  The article moves to your archive, where you can re-rent it anytime.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-medium">
                  How do I pay for rented articles?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Add credits to your account using a stored card, and payments are deducted automatically when you rent an article.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span>Sight</span><span className="text-accent-blue">bar</span>
              </div>
              <p className="text-gray-400">
                Read what you want, when you want – without the commitment.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">For publishers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay updated</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest articles and platform updates.</p>
              <div className="flex">
                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-md w-full text-gray-900" />
                <Button className="bg-accent-blue hover:bg-blue-600 rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Sightbar. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
