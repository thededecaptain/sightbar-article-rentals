
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-8 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight text-black transition-opacity duration-200 hover:opacity-80"
        >
          <span className="mr-1">Sight</span>
          <span className="text-accent-blue font-medium">bar</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/for-readers"
            className={cn(
              'text-sm font-medium nav-link',
              location.pathname === '/for-readers' && 'text-black font-semibold'
            )}
          >
            For Readers
          </Link>
          <Link
            to="/for-publishers"
            className={cn(
              'text-sm font-medium nav-link',
              location.pathname === '/for-publishers' && 'text-black font-semibold'
            )}
          >
            For Publishers
          </Link>
        </nav>

        {/* Action Button */}
        <Button className="bg-black text-white hover:bg-sightbar-800 rounded-full px-6 button-effect">
          Get Started
        </Button>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-sightbar-800 ml-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel animate-fade-in p-4 space-y-4">
          <nav className="flex flex-col space-y-3">
            <Link
              to="/for-readers"
              className={cn(
                'text-sm py-2 font-medium nav-link',
                location.pathname === '/for-readers' && 'text-black font-semibold'
              )}
            >
              For Readers
            </Link>
            <Link
              to="/for-publishers"
              className={cn(
                'text-sm py-2 font-medium nav-link',
                location.pathname === '/for-publishers' && 'text-black font-semibold'
              )}
            >
              For Publishers
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
