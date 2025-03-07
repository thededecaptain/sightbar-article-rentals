
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FeaturedArticle } from '@/components/FeaturedArticle';
import { ArticleCard } from '@/components/ArticleCard';
import { Button } from '@/components/ui/button';
import { ChevronRight, Newspaper, CreditCard, Lock } from 'lucide-react';
import { getFeaturedArticle, getNonFeaturedArticles, categories } from '@/lib/data';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);
  
  const featuredArticle = getFeaturedArticle();
  const articles = getNonFeaturedArticles();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="px-6 md:px-8 max-w-screen-xl mx-auto mb-20">
          <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {featuredArticle && <FeaturedArticle article={featuredArticle} />}
          </div>
        </section>
        
        {/* Recent Articles Section */}
        <section className="px-6 md:px-8 max-w-screen-xl mx-auto mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Recent Articles</h2>
            <Button 
              variant="ghost" 
              className="font-medium text-accent-blue hover:text-accent-blue hover:bg-blue-50"
              asChild
            >
              <Link to="/browse">
                Browse all
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 delay-100 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {articles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="px-6 md:px-8 max-w-screen-xl mx-auto mb-20">
          <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 transition-opacity duration-500 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={`/browse/${category.slug}`}
                className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:border-accent-blue hover:shadow-md transition-all duration-200"
              >
                <h3 className="font-medium">{category.name}</h3>
              </Link>
            ))}
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="bg-sightbar-50 py-20 px-6 md:px-8 mb-20">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How Sightbar Works</h2>
              <p className="text-sightbar-600 max-w-2xl mx-auto">
                Access premium journalism without subscriptions. Pay only for the articles you want to read.
              </p>
            </div>
            
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-10 transition-opacity duration-500 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Newspaper size={24} className="text-accent-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Browse Articles</h3>
                <p className="text-sightbar-600">
                  Explore a diverse collection of premium content from trusted publishers.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard size={24} className="text-accent-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Pay Per Article</h3>
                <p className="text-sightbar-600">
                  Only pay for what you read. No subscriptions, no commitment.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock size={24} className="text-accent-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Instant Access</h3>
                <p className="text-sightbar-600">
                  Get immediate access to full articles with a simple payment process.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Trending Articles Section */}
        <section className="px-6 md:px-8 max-w-screen-xl mx-auto mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Trending Now</h2>
            <Button 
              variant="ghost" 
              className="font-medium text-accent-blue hover:text-accent-blue hover:bg-blue-50"
              asChild
            >
              <Link to="/browse">
                View all
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
          
          <div className={`space-y-6 transition-opacity duration-500 delay-400 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {articles.slice(3, 6).map((article) => (
              <ArticleCard 
                key={article.id} 
                article={article} 
                variant="horizontal" 
                className="bg-white border border-gray-100 rounded-xl shadow-sm"
              />
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-sightbar-900 to-black text-white py-16 px-6 md:px-8 mb-20">
          <div className="max-w-screen-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Reading Premium Articles Today</h2>
            <p className="text-sightbar-300 max-w-xl mx-auto mb-8">
              Join Sightbar and get access to thousands of articles from leading publishers.
              No subscriptions required.
            </p>
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 button-effect text-base">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
