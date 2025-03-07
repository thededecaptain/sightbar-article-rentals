
export interface Article {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  publication: {
    name: string;
    logo: string;
  };
  image: string;
  category: string;
  readTime: number;
  date: string;
  price: number;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Technology",
    slug: "technology",
  },
  {
    id: "2",
    name: "Business",
    slug: "business",
  },
  {
    id: "3",
    name: "Politics",
    slug: "politics",
  },
  {
    id: "4",
    name: "Science",
    slug: "science",
  },
  {
    id: "5",
    name: "Health",
    slug: "health",
  },
  {
    id: "6",
    name: "Arts",
    slug: "arts",
  },
];

export const articles: Article[] = [
  {
    id: "1",
    title: "The Rise of AI in Modern Journalism",
    subtitle: "How artificial intelligence is transforming the way news is created and consumed",
    excerpt: "Artificial intelligence tools are rapidly changing the landscape of journalism, with newsrooms around the world adopting AI for content creation, curation, and distribution.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies...",
    author: {
      name: "Alex Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    publication: {
      name: "Tech Chronicle",
      logo: "https://placehold.co/32x32/222/fff?text=TC",
    },
    image: "https://images.unsplash.com/photo-1655720031554-a929595ffad7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Technology",
    readTime: 8,
    date: "2023-11-03",
    price: 1.99,
    isFeatured: true,
  },
  {
    id: "2",
    title: "Global Markets Face New Uncertainty",
    subtitle: "Analysts predict challenging quarter ahead as inflation concerns persist",
    excerpt: "Financial markets worldwide are grappling with new uncertainties as central banks continue to navigate the delicate balance between controlling inflation and supporting economic growth.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies...",
    author: {
      name: "Sarah Williams",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    publication: {
      name: "Financial Times",
      logo: "https://placehold.co/32x32/222/fff?text=FT",
    },
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Business",
    readTime: 6,
    date: "2023-11-02",
    price: 2.49,
  },
  {
    id: "3",
    title: "Climate Summit Reaches Historic Agreement",
    subtitle: "Nations pledge to accelerate carbon reduction efforts by 2030",
    excerpt: "In a landmark decision, world leaders at the Climate Action Summit have agreed to significantly increase their carbon emission reduction targets, marking a potential turning point in global climate policy.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies...",
    author: {
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    publication: {
      name: "Global Post",
      logo: "https://placehold.co/32x32/222/fff?text=GP",
    },
    image: "https://images.unsplash.com/photo-1569097780547-69c8d220e93a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Politics",
    readTime: 10,
    date: "2023-11-01",
    price: 1.99,
  },
  {
    id: "4",
    title: "Revolutionary Cancer Treatment Shows Promise",
    subtitle: "New immunotherapy approach demonstrates 70% success rate in clinical trials",
    excerpt: "A groundbreaking immunotherapy treatment developed by researchers at Stanford University has shown unprecedented success rates in treating aggressive forms of cancer, potentially transforming oncology care.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies...",
    author: {
      name: "Dr. Emily Rodriguez",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    publication: {
      name: "Health Science Journal",
      logo: "https://placehold.co/32x32/222/fff?text=HSJ",
    },
    image: "https://images.unsplash.com/photo-1579154341098-e4e158cc8d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Health",
    readTime: 7,
    date: "2023-10-28",
    price: 2.99,
  },
  {
    id: "5",
    title: "Silicon Valley's Next Tech Revolution",
    subtitle: "How quantum computing is poised to transform industries",
    excerpt: "As quantum computing moves from theoretical research to practical applications, tech giants and startups alike are racing to develop the first commercially viable quantum computers.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies...",
    author: {
      name: "David Foster",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    publication: {
      name: "Innovation Weekly",
      logo: "https://placehold.co/32x32/222/fff?text=IW",
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Technology",
    readTime: 9,
    date: "2023-10-25",
    price: 1.49,
  },
  {
    id: "6",
    title: "The Future of Remote Work",
    subtitle: "Major companies reveal long-term strategies for hybrid workplace models",
    excerpt: "As the post-pandemic era takes shape, leading corporations are finalizing their approaches to remote and hybrid work, with significant implications for urban planning, commercial real estate, and work-life balance.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies. Sed euismod, diam quis aliquam ultricies, nisl nunc ultricies nunc, quis ultricies nisl nunc quis ultricies...",
    author: {
      name: "Jennifer Parker",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    publication: {
      name: "Business Insider",
      logo: "https://placehold.co/32x32/222/fff?text=BI",
    },
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Business",
    readTime: 8,
    date: "2023-10-23",
    price: 0.99,
  },
];

// Get a featured article
export const getFeaturedArticle = (): Article | undefined => {
  return articles.find(article => article.isFeatured);
};

// Get all articles except featured
export const getNonFeaturedArticles = (): Article[] => {
  return articles.filter(article => !article.isFeatured);
};

// Get articles by category
export const getArticlesByCategory = (categorySlug: string): Article[] => {
  const categoryName = categories.find(cat => cat.slug === categorySlug)?.name;
  if (!categoryName) return [];
  return articles.filter(article => article.category === categoryName);
};

// Get article by ID
export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};
