import React from 'react';

const ModularSystems: React.FC = () => {
  const systems = [
    {
      id: "CYB-01",
      title: "Cyber Security",
      desc: "Neural-threat detection with active countermeasures. 2ms response latency.",
      tags: ["AES-256", "QUANTUM-SAFE"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "EDG-04",
      title: "Edge Node",
      desc: "Distributed compute clusters for real-time telemetry processing.",
      tags: ["LOW-LATENCY", "ARM-V9"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "SaaS-X",
      title: "Enterprise Cloud",
      desc: "High-availability orchestration for global-scale application deployment.",
      tags: ["KUBERNETES", "MULTI-AZ"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: "DATA-Z",
      title: "Predictive AI",
      desc: "Custom-modeled neural networks for complex pattern recognition.",
      tags: ["PYTORCH", "CUDA-X"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="py-32 px-6 bg-white border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-20 border-b-4 border-black pb-8">
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter">Modular Systems.</h2>
            <span className="hidden md:block text-[10px] font-black tracking-[0.5em] text-neutral-400">BUILDING_BLOCKS_v6.1</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {systems.map((sys) => (
            <div key={sys.id} className="group relative bg-neutral-50 border border-neutral-200 overflow-hidden flex flex-col h-[500px] transition-all duration-500 hover:shadow-2xl hover:z-10">
              {/* Header Info */}
              <div className="p-6 border-b border-neutral-200 bg-white flex justify-between items-center">
                <span className="text-[10px] font-black tracking-widest text-neutral-400">{sys.id}</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#2176ff] rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-neutral-200 rounded-full"></div>
                </div>
              </div>

              {/* Module Image */}
              <div className="relative h-48 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={sys.image} alt={sys.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col bg-white">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{sys.title}</h3>
                <p className="text-sm text-neutral-500 font-light leading-relaxed mb-8">{sys.desc}</p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {sys.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-black border border-neutral-100 px-2 py-1 text-neutral-400 tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Interaction */}
              <button className="w-full py-4 bg-black text-white text-[9px] font-black tracking-widest uppercase transition-all translate-y-full group-hover:translate-y-0">
                Configure Module
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModularSystems;