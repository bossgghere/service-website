import React, { useState, useEffect } from 'react';
import { getMergedImages, getImageUrl } from '../content/siteImages';

const logo = new URL('../assets/newlogo.png', import.meta.url).href;

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
    <section className="relative min-h-[90vh] sm:min-h-[93vh] lg:min-h-[calc(100vh-3rem)] flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_auto] overflow-hidden bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
      {/* Left Column: Brand & Artistic Technical Background */}
      <div className="relative flex flex-col justify-center px-6 py-16 sm:px-8 sm:py-20 md:px-16 lg:px-24 border-b lg:border-b-0 lg:border-r border-neutral-100 dark:border-neutral-800 overflow-hidden group">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2176ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        {/* Abstract "S" Graphic Element - Animated */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none transition-all duration-1000 ${isVisible ? 'opacity-[0.03] dark:opacity-[0.025]' : 'opacity-0'} text-[50vw] font-black leading-none text-black dark:text-neutral-600`}>
          S
        </div>

        <div className="relative z-10">
          {/* Animated Main Title — Logo with Sira Technologies below */}
          <div
            className={`flex flex-col items-start gap-2 sm:gap-3 mb-6 sm:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <img src={logo} alt="" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain dark:brightness-0 dark:invert" />
            <span className="text-2xl sm:text-3xl md:text-4xl font-black text-black dark:text-white uppercase tracking-tighter leading-none">
              Sira Technologies
            </span>
          </div>
          
          {/* Animated Description */}
          <p
            className={`text-lg sm:text-xl md:text-2xl font-light text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-all duration-700 break-words ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: isVisible ? '150ms' : '0ms' }}
          >
            Engineered for the elite. Building the next generation of high-performance digital infrastructure for global enterprise architecture.
          </p>

          {/* Animated Stats Section */}
            <div
              className={`mt-10 sm:mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: isVisible ? '350ms' : '0ms' }}
            >
            <div className="group/stats">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-800 dark:text-neutral-200 group-hover/stats:text-[#2176ff] transition-colors duration-500">Operational Integrity</p>
              <p className="text-[9px] font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500 group-hover/stats:text-neutral-600 dark:group-hover/stats:text-neutral-400 transition-colors duration-500">Global Cluster Network</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Featured Image & Content Overlay */}
      <div className="relative min-h-[48vh] h-[58vh] sm:h-[65vh] lg:h-full group overflow-hidden bg-neutral-900">
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
          <div
            className={`max-w-md transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6 sm:mb-8">
              Strategic <br /> Infrastructure.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-neutral-400 font-light leading-relaxed mb-8 sm:mb-10 group-hover:text-neutral-300 transition-colors duration-500">
              Distributed compute clusters engineered for real-time telemetry processing and zero-latency execution.
            </p>
            <button
              type="button"
              onClick={onExploreClick}
              className="group/btn flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-white uppercase hover:text-[#2176ff] transition-all duration-300 min-h-[44px] py-2 hover:gap-6"
            >
              <span className="border-b-2 border-white/20 pb-1 group-hover/btn:border-[#2176ff] transition-all duration-300">Explore Modules</span>
              <div className="w-12 h-[1px] bg-[#2176ff] group-hover/btn:w-16 transition-all duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Services marquee bar — minimal gap below text */}
      <div className="marquee-wrap w-full lg:col-span-2 bg-neutral-50 dark:bg-black pt-3 pb-3 sm:pt-4 sm:pb-4 overflow-hidden border-y border-neutral-200 dark:border-neutral-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] dark:shadow-none leading-none" aria-hidden="true">
        <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.35em] text-neutral-400 dark:text-neutral-400 text-center mb-1 sm:mb-1.5 leading-none">
          Services
        </p>
        <div className="flex w-max animate-marquee-r2l items-center leading-none">
          {[
            'Software Development',
            'Networking Services',
            'Cyber Security',
            'Data Analytics',
            'Business Intelligence',
            'Cloud Architecture',
          ].flatMap((name, i) => [
            <span key={`a-${i}`} className="inline-flex items-center shrink-0 px-6 sm:px-8 md:px-10 text-base sm:text-lg font-black uppercase tracking-[0.22em] text-neutral-900 dark:text-white antialiased leading-none">
              {name}
            </span>,
            <span key={`d-${i}`} className="shrink-0 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-neutral-300 dark:bg-white/40 mx-1 sm:mx-2 align-middle" aria-hidden="true" />,
          ])}
          {[
            'Software Development',
            'Networking Services',
            'Cyber Security',
            'Data Analytics',
            'Business Intelligence',
            'Cloud Architecture',
          ].flatMap((name, i) => [
            <span key={`b-${i}`} className="inline-flex items-center shrink-0 px-6 sm:px-8 md:px-10 text-base sm:text-lg font-black uppercase tracking-[0.22em] text-neutral-900 dark:text-white antialiased leading-none">
              {name}
            </span>,
            <span key={`e-${i}`} className="shrink-0 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-neutral-300 dark:bg-white/40 mx-1 sm:mx-2 align-middle" aria-hidden="true" />,
          ])}
        </div>
      </div>
    </section>
  );
};

export default Hero;