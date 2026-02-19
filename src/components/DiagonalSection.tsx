import React from 'react';

interface Props {
  bgImage: string;
  title: string;
  description: string;
  ctaText?: string;
  isDark?: boolean;
  onCtaClick?: () => void;
}

const DiagonalSection: React.FC<Props> = ({ 
  bgImage, 
  title, 
  description, 
  ctaText, 
  isDark = true,
  onCtaClick 
}) => {
  return (
    <section className="group relative py-16 sm:py-24 md:py-32 lg:py-48 overflow-hidden z-20 flex items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] border-y border-neutral-100 bg-black">
      {/* Optimized Background Image Wrapper */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={bgImage} 
          alt=""
          className="w-full h-full object-cover transition-transform duration-[10000ms] ease-out group-hover:scale-110"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply pointer-events-none"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full min-w-0">
        <div className={`max-w-2xl ${isDark ? 'text-white' : 'text-black'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase mb-6 sm:mb-10 leading-[0.9] tracking-tighter">
            {title}
          </h2>
          
          <p className={`text-base sm:text-lg mb-12 leading-relaxed font-light ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
            {description}
          </p>
          
          {ctaText && (
            <button
              type="button"
              onClick={onCtaClick}
              className={`group/btn relative px-8 py-4 min-h-[44px] sm:px-10 sm:py-5 text-[10px] sm:text-xs font-black tracking-[0.4em] uppercase transition-all overflow-hidden border ${isDark ? 'border-white/20 text-white' : 'border-black/20 text-black'}`}
            >
              <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">{ctaText}</span>
              <div className={`absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ${isDark ? 'bg-white' : 'bg-black'}`}></div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default DiagonalSection;