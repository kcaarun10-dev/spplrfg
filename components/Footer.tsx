
import React from 'react';
import { Terminal, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center space-x-2 text-2xl font-bold font-heading">
            <Terminal className="text-purple-500 w-6 h-6" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Arun.</span>
          </div>

          <div className="flex space-x-8">
            <a href="#about" className="text-sm text-gray-500 hover:text-white transition-colors">About</a>
            <a href="#portfolio" className="text-sm text-gray-500 hover:text-white transition-colors">Work</a>
            <a href="#services" className="text-sm text-gray-500 hover:text-white transition-colors">Services</a>
            <a href="#contact" className="text-sm text-gray-500 hover:text-white transition-colors">Contact</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-all group"
          >
            <ChevronUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Arun Regmi. All rights reserved. Built with Passion in Kathmandu.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-gray-600 hover:text-white uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-600 hover:text-white uppercase tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
