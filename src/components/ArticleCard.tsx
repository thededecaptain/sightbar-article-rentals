
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Clock, DollarSign } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'horizontal';
  className?: string;
}

export function ArticleCard({ article, variant = 'default', className }: ArticleCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div 
      className={cn(
        'article-card rounded-lg overflow-hidden group',
        variant === 'horizontal' 
          ? 'flex flex-col md:flex-row gap-5' 
          : 'flex flex-col h-full',
        className
      )}
    >
      {/* Article Image */}
      <div 
        className={cn(
          'relative overflow-hidden',
          variant === 'horizontal' ? 'md:w-1/3 aspect-video md:aspect-square' : 'aspect-[4/3]'
        )}
      >
        <Link to={`/article/${article.id}`}>
          <img
            src={article.image}
            alt={article.title}
            className={cn(
              'w-full h-full object-cover article-card-image',
              !imageLoaded && 'image-loading'
            )}
            onLoad={handleImageLoad}
          />
        </Link>
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-sightbar-800 flex items-center">
          <DollarSign size={12} className="mr-1" />
          ${article.price.toFixed(2)}
        </div>
      </div>
      
      {/* Article Content */}
      <div className={cn(
        'flex flex-col flex-grow p-4 pt-5',
        variant === 'horizontal' && 'md:w-2/3'
      )}>
        {/* Publication and Category */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <img 
              src={article.publication.logo} 
              alt={article.publication.name}
              className="w-5 h-5 rounded-full"
            />
            <span className="text-xs font-medium text-sightbar-600">{article.publication.name}</span>
          </div>
          <span className="text-xs px-2 py-1 bg-sightbar-100 rounded-full text-sightbar-700">{article.category}</span>
        </div>
        
        {/* Title */}
        <Link to={`/article/${article.id}`}>
          <h3 className="text-lg font-semibold leading-tight mb-2 group-hover:text-accent-blue transition-colors duration-200">
            {article.title}
          </h3>
        </Link>
        
        {/* Excerpt */}
        <p className="text-sm text-sightbar-600 mb-4 line-clamp-2">{article.excerpt}</p>
        
        {/* Footer: Author, Date, Read Time */}
        <div className="mt-auto flex items-end justify-between">
          <div className="flex items-center">
            <img 
              src={article.author.avatar} 
              alt={article.author.name}
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="text-xs text-sightbar-600">{article.author.name}</span>
          </div>
          <div className="flex items-center text-xs text-sightbar-500">
            <Clock size={12} className="mr-1" />
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
