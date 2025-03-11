
import React from 'react';
import { ArrowRight, Search, Library, Clock, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    </div>
  );
};

export default LandingPage;
