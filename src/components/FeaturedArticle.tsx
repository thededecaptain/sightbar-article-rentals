
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ChevronRight, Clock, DollarSign } from 'lucide-react';

interface FeaturedArticleProps {
  article: Article;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-xl glass-panel animate-fade-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="inline-flex items-center mb-6">
            <span className="bg-black/10 backdrop-blur text-black/80 text-xs rounded-full px-3 py-1 font-medium">
              Featured
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
          
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 leading-tight text-balance">
            {article.title}
          </h1>
          
          <h2 className="text-lg md:text-xl text-sightbar-600 mb-6 leading-relaxed text-balance">
            {article.subtitle}
          </h2>
          
          <p className="mb-8 text-sightbar-500 line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center space-x-6 mb-8">
            <div className="flex items-center">
              <img 
                src={article.author.avatar} 
                alt={article.author.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="text-sm font-medium">{article.author.name}</p>
                <p className="text-xs text-sightbar-500">{article.date}</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-sightbar-500">
              <Clock size={16} className="mr-1" />
              <span>{article.readTime} min read</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-black hover:bg-sightbar-800 text-white rounded-full px-8 py-6 button-effect"
            >
              <Link to={`/article/${article.id}`}>
                <span>Read for ${article.price.toFixed(2)}</span>
                <ChevronRight size={16} className="ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="rounded-full border-sightbar-300 hover:bg-sightbar-100 hover:border-sightbar-400 px-6 button-effect"
            >
              Save for later
            </Button>
          </div>
        </div>
        
        {/* Image */}
        <div className="relative h-[300px] lg:h-auto overflow-hidden order-first lg:order-last">
          <img
            src={article.image}
            alt={article.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              imageLoaded ? 'image-loaded' : 'image-loading'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-l"></div>
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-sightbar-800 flex items-center">
            <DollarSign size={14} className="mr-1" />
            ${article.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedArticle;
