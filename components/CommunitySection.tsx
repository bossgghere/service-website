import React from 'react';

const SystemMatrix: React.FC = () => {
  return (
    <section className="py-24 sm:py-40 bg-black text-white overflow-hidden relative border-y border-white/10">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 h-full w-full" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Visual Core */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative group overflow-hidden border border-white/20 p-2 sm:p-4 bg-neutral-900/50 backdrop-blur-sm">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-[3000ms]" 
                  alt="Infrastructure Processor" 
                />
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#2176ff]"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#2176ff]"></div>
            </div>
          </div>

          {/* Right Column: Information */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-10">
              System <br /> Matrix.
            </h2>
            
            <p className="text-lg text-neutral-400 font-light leading-relaxed mb-12 max-w-lg">
              The Orionis Matrix is a self-optimizing neural layer that manages workload distribution across global nodes. Built for zero-latency execution and absolute algorithmic precision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-16 border-t border-white/10 pt-12">
              <div className="group cursor-default">
                <h4 className="text-sm font-black uppercase tracking-widest mb-2">Neural Routing</h4>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">Dynamic packet steering based on real-time node availability and latency metrics.</p>
              </div>

              <div className="group cursor-default">
                <h4 className="text-sm font-black uppercase tracking-widest mb-2">Atomic Scaling</h4>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">Sub-second resource allocation across multi-zone clusters without state loss.</p>
              </div>
            </div>

            <button className="group flex items-center gap-8 py-4 px-1 border border-transparent hover:gap-12 transition-all duration-500">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white">Learn More</span>
              <div className="w-16 h-[1px] bg-[#2176ff] group-hover:w-24 transition-all"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemMatrix;