
import React from 'react';
import { ArrowRight, Search, Library, Clock, CreditCard, Users, Newspaper, BarChart, FileText, FolderOpen, CreditCard as WalletIcon, ChevronDown, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Person reading on laptop"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Read What You Want, When You Want – <span className="text-accent-blue">Without the Commitment.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Rent individual articles from top newspapers and magazines for 24-72 hours. No subscriptions. No hassle. Just great content.
            </p>
            <Button className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-6 rounded-full text-lg">
              Start Reading Now <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Your Gateway to Premium Content, One Article at a Time.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-accent-blue" />,
                title: "Rent Articles Instantly",
                description: "Paste a URL, search, and rent articles from partnered publishers."
              },
              {
                icon: <Clock className="w-8 h-8 text-accent-blue" />,
                title: "Flexible Access",
                description: "Read for 24-72 hours, starting whenever you're ready."
              },
              {
                icon: <Library className="w-8 h-8 text-accent-blue" />,
                title: "Build Your Library",
                description: "Save and organize rented articles for future access."
              },
              {
                icon: <CreditCard className="w-8 h-8 text-accent-blue" />,
                title: "No Subscriptions",
                description: "Pay only for what you read, without long-term commitments."
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">How It Works for Readers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Search or Paste a URL",
                  description: "Paste the article's URL or search for it in our platform."
                },
                {
                  step: "2",
                  title: "Rent and Read",
                  description: "If the article is available, rent it for 24-72 hours. Start reading anytime – the timer begins when you open it."
                },
                {
                  step: "3",
                  title: "Organize and Revisit",
                  description: "Access your rented articles in your library. Re-rent them anytime if you need more time."
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-lg p-8 h-full shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-accent-blue text-white flex items-center justify-center mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="mt-12 bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-6 rounded-full text-lg">
              Try It Now <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* For Publishers Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Expand Your Reach and Monetize Your Content.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Partner with us to make your articles available to a wider audience while retaining full control over your content.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                icon: <Newspaper className="w-8 h-8 text-accent-blue" />,
                title: "Seamless Integration",
                description: "Readers access your articles through our platform, bypassing paywalls with a single account."
              },
              {
                icon: <BarChart className="w-8 h-8 text-accent-blue" />,
                title: "Data Insights",
                description: "Gain access to reader habits, email addresses, and names to grow your subscriber base."
              },
              {
                icon: <Users className="w-8 h-8 text-accent-blue" />,
                title: "Demand-Driven Partnerships",
                description: "We prioritize partnerships based on reader demand, ensuring your content reaches the right audience."
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button className="bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-6 rounded-full text-lg">
              Partner With Us <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Library and Credits Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Reading Hub and Wallet, All in One Place.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Manage your rented articles, organize your library, and top up credits effortlessly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <FileText className="w-8 h-8 text-accent-blue" />,
                title: "Active Rentals",
                description: "See articles you're currently reading and those you've rented but haven't started."
              },
              {
                icon: <FolderOpen className="w-8 h-8 text-accent-blue" />,
                title: "Categorize and Organize",
                description: "Sort articles by newspaper, topic, or reading length."
              },
              {
                icon: <WalletIcon className="w-8 h-8 text-accent-blue" />,
                title: "Easy Payments",
                description: "Add credits, update payment methods, and track your spending."
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow bg-white">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-12">What Readers and Publishers Are Saying</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-20 rounded-full bg-gray-200 border-4 border-white overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" 
                      alt="Sarah T."
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="pt-12">
                  <p className="text-gray-600 italic mb-4">
                    "I love how I can read articles from different newspapers without subscribing to each one. It's affordable and convenient!"
                  </p>
                  <p className="font-semibold">Sarah T.</p>
                  <p className="text-sm text-gray-500">Reader</p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-20 rounded-full bg-gray-200 border-4 border-white overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80" 
                      alt="John D."
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="pt-12">
                  <p className="text-gray-600 italic mb-4">
                    "Partnering with this platform has allowed us to reach new readers and monetize our content more effectively."
                  </p>
                  <p className="font-semibold">John D.</p>
                  <p className="text-sm text-gray-500">Editor at The Daily News</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="bg-white rounded-xl overflow-hidden">
                <AccordionItem value="item-1" className="border-b">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    Can I rent any article I find online?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    You can rent articles from our partnered publishers. If we don't have a partnership, you can request it, and we'll prioritize based on demand.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    What happens when my rental period ends?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    The article moves to your archive, where you can re-rent it anytime.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                    How do I pay for rented articles?
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    Add credits to your account using a stored card, and payments are deducted automatically when you rent an article.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400 mb-6">
                We're making premium content accessible one article at a time, without the commitment of subscriptions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">For Publishers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Mail size={16} className="text-gray-400" />
                  <a href="mailto:info@example.com" className="text-gray-400 hover:text-white transition-colors">info@example.com</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest articles and platform updates.</p>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 border-gray-700 text-white" 
                />
                <Button className="ml-2 bg-accent-blue hover:bg-accent-blue/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Article Rental Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
