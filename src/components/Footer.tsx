import React from 'react';
import { useNavigate } from 'react-router-dom';

const logo = new URL('../assets/newlogo.png', import.meta.url).href;

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 200);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 relative overflow-hidden text-white">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <img src={logo} alt="Sira Technologies" className="h-7 w-auto object-contain brightness-0 invert" />
            <span className="hidden sm:block w-px h-4 bg-white/30" aria-hidden />
            <nav className="flex items-center gap-6">
              <button type="button" onClick={() => scrollTo('services-section')} className="text-xs font-black uppercase tracking-[0.3em] text-white/80 hover:text-[#2176ff] transition-colors">
                Services
              </button>
              <button type="button" onClick={() => navigate('/industries')} className="text-xs font-black uppercase tracking-[0.3em] text-white/80 hover:text-[#2176ff] transition-colors">
                Industries
              </button>
            </nav>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-8">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-xs font-bold text-white/80 uppercase tracking-wider">
              <a href="mailto:info@siratechnologies.com" className="hover:text-[#2176ff] transition-colors">info@siratechnologies.com</a>
              <span className="text-white/40">·</span>
              <a href="tel:+13462786004" className="hover:text-[#2176ff] transition-colors">+1 (346) 278-6004</a>
              <span className="text-white/40">·</span>
              <span>2509 W Iles Ave, Springfield IL</span>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://www.linkedin.com/company/siratechnologies" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#2176ff] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/siratechnologies" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#2176ff] transition-colors" aria-label="X (Twitter)">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
