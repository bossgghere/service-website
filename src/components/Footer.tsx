import React from 'react';
import { useNavigate } from 'react-router-dom';

const logo = new URL('../assets/logo.png', import.meta.url).href;

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
    <footer className="bg-black border-t border-white/10 py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 relative overflow-hidden text-white">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 min-w-0">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <img src={logo} alt="Orionis" className="h-9 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              Orionis subscribes and follows a framework for decision making processes, and that framework is the
              standard by which we aim to conduct business with our customers, our co-workers, and in our communities.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-white/40">Services</h5>
            <ul className="space-y-2 sm:space-y-4 text-xs font-bold text-white/80 uppercase tracking-widest">
              <li>
                <button type="button" onClick={() => scrollTo('services-section')} className="footer-tap-target hover:text-[#2176ff] transition-colors text-left block w-full text-left">
                  Cyber Security
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('services-section')} className="footer-tap-target hover:text-[#2176ff] transition-colors text-left block w-full text-left">
                  Cloud Services
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('services-section')} className="footer-tap-target hover:text-[#2176ff] transition-colors text-left block w-full text-left">
                  Business Intelligence
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('services-section')} className="footer-tap-target hover:text-[#2176ff] transition-colors text-left block w-full text-left">
                  Data Analytics
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('services-section')} className="footer-tap-target hover:text-[#2176ff] transition-colors text-left block w-full text-left">
                  Networking Services
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollTo('services-section')} className="footer-tap-target hover:text-[#2176ff] transition-colors text-left block w-full text-left">
                  IT Development
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-white/40">Industries</h5>
            <ul className="space-y-2 sm:space-y-4 text-xs font-bold text-white/80 uppercase tracking-widest">
              <li>
                <button type="button" onClick={() => navigate('/industries')} className="footer-tap-target hover:text-[#2176ff] transition-colors text-left block w-full text-left">
                  Financial
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/industries')} className="footer-tap-target hover:text-[#2176ff] transition-colors text-left block w-full text-left">
                  Government
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/industries')} className="footer-tap-target hover:text-[#2176ff] transition-colors text-left block w-full text-left">
                  Insurance
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/industries')} className="footer-tap-target hover:text-[#2176ff] transition-colors text-left block w-full text-left">
                  Retail
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/industries')} className="footer-tap-target hover:text-[#2176ff] transition-colors text-left block w-full text-left">
                  Healthcare and Pharmaceutical
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/industries')} className="footer-tap-target hover:text-[#2176ff] transition-colors text-left block w-full text-left">
                  Logistics
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/industries')} className="footer-tap-target hover:text-[#2176ff] transition-colors text-left block w-full text-left">
                  Manufacturing
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('/industries')} className="footer-tap-target hover:text-[#2176ff] transition-colors text-left block w-full text-left">
                  Telecom
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-white/40">Contact Info</h5>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-white/80 leading-relaxed uppercase">
                  2509 W Iles Avenue Suite 110,<br /> Springfield IL 62704
                </p>
              </div>
              <div>
                <a href="mailto:info@orionis.com" className="text-xs font-bold text-white/80 uppercase hover:text-[#2176ff] transition-colors">
                  info@orionis.com
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold text-white/80 uppercase tracking-widest">T: +1(309) 204 6360</p>
                <p className="text-xs font-bold text-white/80 uppercase tracking-widest">F: +1(309) 304 0242</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
