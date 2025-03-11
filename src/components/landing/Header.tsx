
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span>Sight</span><span className="text-accent-blue">bar</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">How it works</a>
          <a href="#for-publishers" className="text-sm font-medium text-gray-600 hover:text-gray-900">For publishers</a>
          <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-gray-900">FAQ</a>
        </nav>
        <Button className="hidden sm:inline-flex bg-black text-white hover:bg-gray-800">
          Get started
        </Button>
      </div>
    </header>
  );
};

export default Header;
