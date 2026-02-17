import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-20 px-8 md:px-12 relative overflow-hidden text-white">
      {/* Subtle grid for dark background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ 
        backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <div className="w-3 h-3 bg-[#2176ff] rotate-45"></div>
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase text-white">ORIONIS</span>
            </div>
            <p className="text-sm text-white/60 font-light leading-relaxed">
              Nexus subscribes and follows a framework for decision making processes and that framework is the standard by which Nexus aims to conduct business with our customers, our co-workers and in our communities.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-white/40">Services</h5>
            <ul className="space-y-4 text-xs font-bold text-white/80 uppercase tracking-widest">
              <li><a href="#" className="hover:text-[#2176ff] transition-colors">Cyber Security</a></li>
              <li><a href="#" className="hover:text-[#2176ff] transition-colors">Cloud Services</a></li>
              <li><a href="#" className="hover:text-[#2176ff] transition-colors">Business Intelligence</a></li>
              <li><a href="#" className="hover:text-[#2176ff] transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-[#2176ff] transition-colors">Networking Services</a></li>
              <li><a href="#" className="hover:text-[#2176ff] transition-colors">IT Development</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-black uppercase tracking-[0.4em] mb-8 text-white/40">Industries</h5>
            <ul className="space-y-4 text-xs font-bold text-white/80 uppercase tracking-widest">
              <li><a href="#" className="hover:text-[#2176ff] transition-colors">Financial</a></li>
              <li><a href="#" className="hover:text-[#2176ff] transition-colors">Government</a></li>
              <li><a href="#" className="hover:text-[#2176ff] transition-colors">Insurance</a></li>
              <li><a href="#" className="hover:text-[#2176ff] transition-colors">Retail</a></li>
              <li><a href="#" className="hover:text-[#2176ff] transition-colors">Healthcare and Pharmaceutical</a></li>
              <li><a href="#" className="hover:text-[#2176ff] transition-colors">Logistics</a></li>
              <li><a href="#" className="hover:text-[#2176ff] transition-colors">Manufacturing</a></li>
              <li><a href="#" className="hover:text-[#2176ff] transition-colors">Telecom</a></li>
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
                <p className="text-xs font-bold text-white/80 uppercase">info@ciratek.com</p>
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