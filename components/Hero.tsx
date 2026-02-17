import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:h-[calc(100vh-6rem)] flex flex-col lg:grid lg:grid-cols-2 overflow-hidden bg-white border-b border-neutral-100">
      {/* Left Column: Brand & Artistic Technical Background */}
      <div className="relative flex flex-col justify-center px-8 py-20 sm:px-16 lg:px-24 border-b lg:border-b-0 lg:border-r border-neutral-100 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 wireframe-bg pointer-events-none opacity-40"></div>
        
        {/* Abstract "O" Graphic Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02] text-[50vw] font-black leading-none">
          O
        </div>

        {/* Floating Technical Elements */}
        <div className="absolute top-1/4 right-0 w-64 h-[1px] bg-gradient-to-l from-[#2176ff]/20 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-[1px] bg-gradient-to-r from-[#2176ff]/20 to-transparent"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-16 h-[1px] bg-black"></div>
            <span className="text-[10px] font-black tracking-[0.5em] text-[#2176ff] uppercase">Architecture_Lead_v6.1</span>
          </div>

          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-black uppercase tracking-tighter leading-[0.85] mb-12">
            ORIONIS
          </h1>
          
          <p className="text-xl sm:text-2xl font-light text-neutral-500 max-w-lg leading-relaxed">
            Engineered for the elite. Building the next generation of high-performance digital infrastructure for global enterprise architecture.
          </p>

          <div className="mt-24 flex items-center gap-6">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-neutral-100 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="avatar" />
                  </div>
                ))}
             </div>
             <div className="h-8 w-[1px] bg-neutral-200"></div>
             <div>
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-800">Operational Integrity</p>
               <p className="text-[9px] font-medium uppercase tracking-widest text-neutral-400">Global Cluster Network</p>
             </div>
          </div>
        </div>
      </div>

      {/* Right Column: Featured Image & Content Overlay */}
      <div className="relative h-[50vh] lg:h-full group overflow-hidden bg-black">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="Technical Interface" 
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.4] transition-transform duration-[15s] group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>

        <div className="absolute inset-0 flex flex-col justify-end p-12 sm:p-24">
          <div className="max-w-md">
            <span className="text-[10px] font-black tracking-[0.5em] text-[#2176ff] mb-6 block">SYSTEM_OVERVIEW</span>
            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Strategic <br /> Infrastructure.
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed mb-10">
              Distributed compute clusters engineered for real-time telemetry processing and zero-latency execution.
            </p>
            <button className="group/btn flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-white uppercase">
              <span className="border-b-2 border-white/20 pb-1 group-hover/btn:border-white transition-all">Explore Modules</span>
              <div className="w-12 h-[1px] bg-[#2176ff] group-hover/btn:w-16 transition-all"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;