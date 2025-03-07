
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArticleCard } from '@/components/ArticleCard';
import { Button } from '@/components/ui/button';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { 
  getNonFeaturedArticles, 
  getArticlesByCategory, 
  categories as allCategories 
} from '@/lib/data';
import { cn } from '@/lib/utils';

const Browse = () => {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);
  
  const articles = categorySlug 
    ? getArticlesByCategory(categorySlug) 
    : getNonFeaturedArticles();
  
  const currentCategory = allCategories.find(c => c.slug === categorySlug);
  
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 px-6 md:px-8 max-w-screen-xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">
            {categorySlug 
              ? `${currentCategory?.name || 'Category'} Articles` 
              : 'Browse Articles'}
          </h1>
          <p className="text-sightbar-600">
            {categorySlug 
              ? `Explore our collection of ${currentCategory?.name.toLowerCase() || ''} articles` 
              : 'Discover quality journalism across various topics'}
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sightbar-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full py-2 pl-10 pr-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal size={16} />
              Filters
            </Button>
          </div>
          
          {/* Filter Options */}
          {showFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-white border border-gray-200 rounded-lg mb-6 animate-fade-in">
              <div>
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <select className="w-full p-2 border border-gray-200 rounded-lg">
                  <option>All Prices</option>
                  <option>Under $1</option>
                  <option>$1 - $2</option>
                  <option>$2 - $3</option>
                  <option>Over $3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Publication</label>
                <select className="w-full p-2 border border-gray-200 rounded-lg">
                  <option>All Publications</option>
                  <option>Tech Chronicle</option>
                  <option>Financial Times</option>
                  <option>Global Post</option>
                  <option>Health Science Journal</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Sort By</label>
                <select className="w-full p-2 border border-gray-200 rounded-lg">
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Popularity</option>
                </select>
              </div>
            </div>
          )}
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={!categorySlug ? "default" : "outline"}
              size="sm"
              className={cn(
                "rounded-full",
                !categorySlug ? "bg-black text-white" : ""
              )}
              asChild
            >
              <a href="/browse">All</a>
            </Button>
            {allCategories.map((category) => (
              <Button
                key={category.id}
                variant={categorySlug === category.slug ? "default" : "outline"}
                size="sm"
                className={cn(
                  "rounded-full",
                  categorySlug === category.slug ? "bg-black text-white" : ""
                )}
                asChild
              >
                <a href={`/browse/${category.slug}`}>{category.name}</a>
              </Button>
            ))}
          </div>
        </div>
        
        {/* Articles Grid */}
        <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredArticles.map((article) => (
                <ArticleCard 
                  key={article.id} 
                  article={article}
                  className="bg-white border border-gray-100 rounded-xl shadow-sm h-full"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-sightbar-50 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-sightbar-600 mb-4">
                We couldn't find any articles matching your search criteria.
              </p>
              <Button
                onClick={() => setSearchQuery('')}
                className="bg-black text-white hover:bg-sightbar-800 rounded-full px-6 button-effect"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Browse;
