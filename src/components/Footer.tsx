import React from 'react';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-blue-400">
              Anjesh<span className="text-gray-300">.dev</span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              A passionate Full Stack Developer specializing in building exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full mb-4 transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-6 w-6" />
            </button>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Venkata Anjesh Tummala. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;