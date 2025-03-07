import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { categories } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto py-8 px-6 lg:px-8">
        
      </div>
    </footer>
  );
}

export default Footer;
