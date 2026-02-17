import React from 'react';

const BlocksGallery: React.FC = () => {
  const blocks = [
    { id: "01", name: "BENT OSCILLATOR", category: "BLOCKS", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600" },
    { id: "02", name: "DRUM SEQUENCER", category: "BLOCKS", img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600" },
    { id: "03", name: "DUAL FILTER", category: "BLOCKS", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600" },
    { id: "04", name: "MOD DELAY", category: "BLOCKS", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 border-b border-white/20 pb-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">THE BLOCKS ECOSYSTEM.</h2>
          <p className="text-[10px] font-black tracking-[0.5em] text-neutral-500 mt-4 md:mt-0 uppercase">40+ NEW COMPONENTS</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {blocks.map((block) => (
            <div key={block.id} className="group relative bg-neutral-900 border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20">
              <div className="p-6 flex justify-between items-center bg-black/40">
                <span className="text-[9px] font-black text-neutral-500">{block.id}</span>
                <span className="text-[9px] font-black text-white/40 tracking-widest">{block.category}</span>
              </div>
              <div className="aspect-square overflow-hidden transition-all duration-700">
                <img src={block.img} alt={block.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="p-8 bg-neutral-900/80 backdrop-blur-sm">
                <h4 className="text-lg font-black uppercase tracking-tight mb-2">{block.name}</h4>
                <div className="w-10 h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </div>
              <button className="w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">
                VIEW DETAILS
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlocksGallery;