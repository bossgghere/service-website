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
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-xs font-bold text-white/80 uppercase tracking-wider">
            <a href="mailto:info@sira-technologies.com" className="hover:text-[#2176ff] transition-colors">info@sira-technologies.com</a>
            <span className="text-white/40">·</span>
            <a href="tel:+13462786004" className="hover:text-[#2176ff] transition-colors">+1 (346) 278-6004</a>
            <span className="text-white/40">·</span>
            <span>2509 W Iles Ave, Springfield IL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
