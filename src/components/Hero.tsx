import React, { useState, useEffect } from 'react';
import { getMergedImages, getImageUrl } from '../content/siteImages';

const logo = new URL('../assets/logo.png', import.meta.url).href;

interface HeroProps {
  onExploreClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const images = getMergedImages().home;
  const heroImageUrl = images.hero || getImageUrl('home.hero');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:h-[calc(100vh-6rem)] flex flex-col lg:grid lg:grid-cols-2 overflow-hidden bg-white border-b border-neutral-100">
      {/* Left Column: Brand & Artistic Technical Background */}
      <div className="relative flex flex-col justify-center px-6 py-16 sm:px-8 sm:py-20 md:px-16 lg:px-24 border-b lg:border-b-0 lg:border-r border-neutral-100 overflow-hidden group">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 wireframe-bg pointer-events-none opacity-40"></div>
        
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2176ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        {/* Abstract "O" Graphic Element - Animated */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none transition-all duration-1000 ${isVisible ? 'opacity-[0.03]' : 'opacity-0'} text-[50vw] font-black leading-none`}>
          O
        </div>

        {/* Animated Floating Technical Lines */}
        <div className={`absolute top-1/4 right-0 w-64 h-[1px] bg-gradient-to-l from-[#2176ff]/20 to-transparent transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}></div>
        <div className={`absolute bottom-1/4 left-0 w-48 h-[1px] bg-gradient-to-r from-[#2176ff]/20 to-transparent transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-12'}`}></div>
        
        <div className="relative z-10">
          {/* Animated Main Title — Logo with Orionis below */}
          <div className={`flex flex-col items-start gap-2 sm:gap-3 mb-6 sm:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <img src={logo} alt="" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain" />
            <span className="text-2xl sm:text-3xl md:text-4xl font-black text-black uppercase tracking-tighter leading-none">
              Orionis
            </span>
          </div>
          
          {/* Animated Description */}
          <p className={`text-lg sm:text-xl md:text-2xl font-light text-neutral-500 max-w-lg leading-relaxed group-hover:text-neutral-700 transition-all duration-700 break-words ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} delay-300`}>
            Engineered for the elite. Building the next generation of high-performance digital infrastructure for global enterprise architecture.
          </p>

          {/* Animated Stats Section */}
          <div className={`mt-10 sm:mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="group/stats">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-800 group-hover/stats:text-[#2176ff] transition-colors duration-500">Operational Integrity</p>
              <p className="text-[9px] font-medium uppercase tracking-widest text-neutral-400 group-hover/stats:text-neutral-600 transition-colors duration-500">Global Cluster Network</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Featured Image & Content Overlay */}
      <div className="relative min-h-[45vh] h-[55vh] sm:h-[60vh] lg:h-full group overflow-hidden bg-neutral-900">
        {heroImageUrl ? (
          <img 
            src={heroImageUrl}
            alt="Data center infrastructure" 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.55] transition-all duration-[15s] group-hover:scale-110 group-hover:brightness-[0.65] will-change-transform"
            referrerPolicy="no-referrer"
            loading="eager"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10 mix-blend-multiply group-hover:via-black/30 transition-all duration-500"></div>

        {/* Animated Blue Accent Light */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2176ff]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-16 lg:p-24">
          <div className={`max-w-md transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6 sm:mb-8">
              Strategic <br /> Infrastructure.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-neutral-400 font-light leading-relaxed mb-8 sm:mb-10 group-hover:text-neutral-300 transition-colors duration-500">
              Distributed compute clusters engineered for real-time telemetry processing and zero-latency execution.
            </p>
            <button
              type="button"
              onClick={onExploreClick}
              className="group/btn flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-white uppercase hover:text-[#2176ff] transition-all duration-300 min-h-[44px] py-2"
            >
              <span className="border-b-2 border-white/20 pb-1 group-hover/btn:border-[#2176ff] transition-all">Explore Modules</span>
              <div className="w-12 h-[1px] bg-[#2176ff] group-hover/btn:w-16 transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;