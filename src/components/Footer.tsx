
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { categories } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto py-12 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block text-2xl font-bold mb-4 tracking-tight">
              <span className="mr-1">Sight</span>
              <span className="text-accent-blue font-medium">bar</span>
            </Link>
            <p className="text-sm text-sightbar-600 mb-4 max-w-xs">
              Access premium journalism with our pay-per-article platform.
              No subscriptions, just quality content when you want it.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sightbar-400 hover:text-accent-blue transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-sightbar-400 hover:text-accent-blue transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-sightbar-400 hover:text-accent-blue transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-sightbar-400 hover:text-accent-blue transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="text-sightbar-400 hover:text-accent-blue transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-sightbar-900">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/browse/${category.slug}`} 
                    className="text-sm text-sightbar-600 hover:text-accent-blue transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-sightbar-900">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-sightbar-600 hover:text-accent-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-sightbar-600 hover:text-accent-blue transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-sightbar-600 hover:text-accent-blue transition-colors">
                  Publishers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-sightbar-600 hover:text-accent-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-sightbar-900">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm text-sightbar-600 hover:text-accent-blue transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-sightbar-600 hover:text-accent-blue transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-sightbar-600 hover:text-accent-blue transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm text-sightbar-600 hover:text-accent-blue transition-colors">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-sightbar-500">
          <p>© {currentYear} Sightbar. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="#" className="hover:text-accent-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-accent-blue transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-accent-blue transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
