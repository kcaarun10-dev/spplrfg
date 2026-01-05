
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Full Stack Developer", "AI Engineer", "Digital Visionary", "Creative Coder"];
  
  useEffect(() => {
    let currentText = '';
    let isDeleting = false;
    let speed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        currentText = currentRole.substring(0, currentText.length - 1);
        speed = 50;
      } else {
        currentText = currentRole.substring(0, currentText.length + 1);
        speed = 100;
      }

      setText(currentText);

      if (!isDeleting && currentText === currentRole) {
        isDeleting = true;
        speed = 1500; // Pause at end
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        setRoleIndex((prev) => (prev + 1) % roles.length);
        speed = 500;
      }

      setTimeout(type, speed);
    };

    const typingTimer = setTimeout(type, 1000);
    return () => clearTimeout(typingTimer);
  }, [roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 border border-purple-500/30 bg-purple-500/10 rounded-full text-xs font-semibold tracking-widest text-purple-400 uppercase animate-pulse">
          Available for new opportunities
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black mb-8 leading-tight">
          <span className="block text-white">I'm Arun</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400">
            {text}<span className="text-white animate-pulse">|</span>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed">
          Crafting high-performance digital experiences where aesthetics meet functionality. Specialized in building the next generation of AI-powered web solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#portfolio" 
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:pr-12 active:scale-95"
          >
            View Portfolio
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border border-white/20 hover:border-white/50 bg-white/5 backdrop-blur-md font-bold rounded-full transition-all active:scale-95"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
        <a href="#about"><ChevronDown size={32} /></a>
      </div>
    </section>
  );
};

export default Hero;
