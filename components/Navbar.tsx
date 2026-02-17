import React, { useState, useEffect } from 'react';

interface Props {
  onNavigate: (view: 'home' | 'about') => void;
  currentView: 'home' | 'about';
}

const Navbar: React.FC<Props> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
      isScrolled 
        ? 'top-6 w-[95%] max-w-5xl' 
        : 'top-0 w-full'
    }`}>
      <nav className={`relative h-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden ${
        isScrolled 
          ? 'glass-header rounded-full border border-neutral-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] py-3 px-8' 
          : 'bg-white border-b border-neutral-100 py-8 px-12 sm:px-24'
      }`}>
        {/* Centered Navigation Links */}
        <div className="flex items-center justify-center h-full">
          <div className="flex gap-4 sm:gap-8 md:gap-12 items-center">
            <button 
              onClick={() => onNavigate('home')} 
              className={`text-[9px] sm:text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-300 hover:text-black ${
                currentView === 'home' ? 'text-black' : 'text-neutral-400'
              }`}
            >
              Home
            </button>
            <div className="w-[1px] h-3 bg-neutral-200/60"></div>
            <button 
              onClick={() => onNavigate('about')} 
              className={`text-[9px] sm:text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-300 hover:text-black ${
                currentView === 'about' ? 'text-black' : 'text-neutral-400'
              }`}
            >
              About
            </button>
            <div className="hidden sm:block w-[1px] h-3 bg-neutral-200/60"></div>
            <button 
              onClick={() => scrollToSection('services-section')} 
              className="hidden sm:block text-[9px] sm:text-[10px] font-black tracking-[0.4em] uppercase text-neutral-400 hover:text-black transition-all duration-300"
            >
              Services
            </button>
            <div className="hidden md:block w-[1px] h-3 bg-neutral-200/60"></div>
            <button 
              className="hidden md:block text-[9px] sm:text-[10px] font-black tracking-[0.4em] uppercase text-neutral-400 hover:text-black transition-all duration-300"
            >
              Industries
            </button>
            <div className="w-[1px] h-3 bg-neutral-200/60"></div>
            <button 
              onClick={() => scrollToSection('contact-section')} 
              className="text-[9px] sm:text-[10px] font-black tracking-[0.4em] uppercase text-neutral-400 hover:text-black transition-all duration-300"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Dynamic Highlight Line (Animated when scrolled) */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2176ff]/20 to-transparent"></div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;