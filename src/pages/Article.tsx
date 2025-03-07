
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArticleCard } from '@/components/ArticleCard';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Calendar, 
  Share2, 
  Bookmark, 
  ThumbsUp, 
  CreditCard,
  ChevronLeft 
} from 'lucide-react';
import { getArticleById, getNonFeaturedArticles } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);
  
  const article = id ? getArticleById(id) : undefined;
  const relatedArticles = getNonFeaturedArticles().slice(0, 3);
  
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 px-6 md:px-8 max-w-screen-xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/browse">
              <ChevronLeft size={16} className="mr-2" />
              Back to Articles
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handlePurchase = () => {
    toast({
      title: "Article Purchased",
      description: "You now have access to this article. Enjoy reading!",
    });
    setIsPurchased(true);
  };
  
  const handleSaveArticle = () => {
    toast({
      title: "Article Saved",
      description: "This article has been saved to your library.",
    });
  };
  
  const handleShareArticle = () => {
    toast({
      title: "Share Link Copied",
      description: "The link to this article has been copied to your clipboard.",
    });
  };
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-8">
          {/* Back Link */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="text-sightbar-600 hover:text-black -ml-2"
              asChild
            >
              <Link to="/browse">
                <ChevronLeft size={16} className="mr-1" />
                Back to Articles
              </Link>
            </Button>
          </div>
          
          {/* Article Header */}
          <div className={`mb-10 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center mb-6">
              <span className="bg-sightbar-100 text-sightbar-800 text-xs rounded-full px-3 py-1 font-medium">
                {article.category}
              </span>
              <span className="mx-2 text-sightbar-400">•</span>
              <div className="flex items-center">
                <img 
                  src={article.publication.logo} 
                  alt={article.publication.name}
                  className="w-5 h-5 rounded-full mr-2"
                />
                <span className="text-xs font-medium text-sightbar-600">{article.publication.name}</span>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight max-w-4xl">
              {article.title}
            </h1>
            
            <h2 className="text-xl text-sightbar-600 mb-6 max-w-3xl">
              {article.subtitle}
            </h2>
            
            <div className="flex flex-wrap items-center gap-y-4 gap-x-6 mb-8">
              <div className="flex items-center">
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="text-sm font-medium">{article.author.name}</p>
                  <div className="flex items-center text-xs text-sightbar-500">
                    <Calendar size={12} className="mr-1" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-sightbar-500">
                <Clock size={16} className="mr-1" />
                <span>{article.readTime} min read</span>
              </div>
              
              <div className="flex items-center gap-3 ml-auto">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sightbar-600 hover:text-black"
                  onClick={handleShareArticle}
                >
                  <Share2 size={16} className="mr-1" />
                  Share
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sightbar-600 hover:text-black"
                  onClick={handleSaveArticle}
                >
                  <Bookmark size={16} className="mr-1" />
                  Save
                </Button>
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="max-w-4xl mx-auto transition-opacity duration-500 delay-100">
            {!isPurchased ? (
              <div className={`glass-panel p-8 text-center ${isLoaded ? 'opacity-100 animate-fade-up' : 'opacity-0'}`}>
                <h3 className="text-xl font-bold mb-3">Premium Article</h3>
                <p className="text-sightbar-600 mb-6 max-w-lg mx-auto">
                  This article is available for ${article.price.toFixed(2)}. Purchase now to continue reading.
                </p>
                <Button
                  className="bg-black hover:bg-sightbar-800 text-white rounded-full px-8 py-6 button-effect"
                  onClick={handlePurchase}
                >
                  <CreditCard size={18} className="mr-2" />
                  Purchase for ${article.price.toFixed(2)}
                </Button>
              </div>
            ) : (
              <div className={isLoaded ? 'opacity-100' : 'opacity-0'}>
                {/* Featured Image */}
                <div className="mb-8 rounded-xl overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-auto max-h-[500px] object-cover"
                  />
                </div>
                
                {/* Article Body */}
                <div className="prose prose-lg max-w-none mb-12">
                  <p className="text-xl leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <p className="mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                  </p>
                  <h2 className="text-2xl font-bold mt-10 mb-4">Understanding the Impact</h2>
                  <p className="mb-6">
                    Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                  </p>
                  <p className="mb-6">
                    Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat.
                  </p>
                  <h2 className="text-2xl font-bold mt-10 mb-4">Key Findings</h2>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Morbi in sem quis dui placerat ornare. Pellentesque odio nisi</li>
                    <li className="mb-2">Praesent dapibus, neque id cursus faucibus</li>
                    <li className="mb-2">Phasellus ultrices nulla quis nibh. Quisque a lectus</li>
                    <li className="mb-2">Donec consectetuer ligula vulputate sem tristique cursus</li>
                  </ul>
                  <p className="mb-6">
                    Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque. Nunc dignissim risus id metus. Cras ornare semper ipsum. Fusce dapibus, tellus ac cursus commodo, tortor mauris.
                  </p>
                  <p>
                    Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc. Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna.
                  </p>
                </div>
                
                {/* Article Actions */}
                <div className="flex items-center justify-between py-6 border-t border-b border-gray-200 mb-12">
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm" className="rounded-full">
                      <ThumbsUp size={16} className="mr-2" />
                      Helpful
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Share2 size={16} className="mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Bookmark size={16} className="mr-2" />
                      Save
                    </Button>
                  </div>
                  <div className="text-sm text-sightbar-500">
                    Thank you for your purchase
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Articles */}
        <div className="bg-sightbar-50 py-16 px-6 md:px-8 mt-12">
          <div className="max-w-screen-xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-opacity duration-500 delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              {relatedArticles.map((article) => (
                <ArticleCard 
                  key={article.id} 
                  article={article}
                  className="bg-white border border-gray-100 rounded-xl shadow-sm h-full"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Article;
