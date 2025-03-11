
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-5 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/90">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <span>Sight</span>
          <span className="text-[#7855C0]">bar</span>
          <div className="ml-1 w-2 h-2 rounded-full bg-[#7855C0]"></div>
        </div>
        
        <div className="hidden md:flex items-center space-x-1 bg-gray-100 rounded-full pl-4 pr-1 py-1">
          <Search className="w-4 h-4 text-gray-500" />
          <input 
            type="text" 
            placeholder="Paste article URL..." 
            className="bg-transparent border-none outline-none text-sm w-56 text-gray-700 placeholder-gray-500"
          />
          <Button className="rounded-full h-8 w-8 p-0 bg-[#7855C0]">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#how-it-works">How it works</NavLink>
            <NavLink href="#for-publishers">Publishers</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>
          
          <Button className="bg-[#7855C0] hover:bg-[#6745B0] text-white rounded-xl">
            Sign in
          </Button>
          
          <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <a 
      href={href} 
      className="text-sm font-medium text-gray-600 hover:text-[#7855C0] transition-colors"
    >
      {children}
    </a>
  );
};

export default Header;
