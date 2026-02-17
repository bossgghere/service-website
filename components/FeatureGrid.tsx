import React from 'react';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: "REAKTOR BLOCKS",
      desc: "Experience the speed and flexibility of modular synthesis. BLOCKS are the framework for building custom synths with drag-and-drop simplicity.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200",
      isReversed: false
    },
    {
      title: "CORE ENGINE",
      desc: "Dive deep into the primary layer. REAKTOR Core provides the building blocks for creating entirely new DSP architectures from scratch.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200",
      isReversed: true
    }
  ];

  return (
    <section className="bg-black">
      {features.map((feature, idx) => (
        <div key={idx} className={`flex flex-col lg:flex-row ${feature.isReversed ? 'lg:flex-row-reverse' : ''} border-b border-white/5`}>
          <div className="lg:w-1/2 relative aspect-video lg:aspect-auto min-h-[500px] overflow-hidden group">
            <img 
              src={feature.image} 
              alt={feature.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            />
          </div>
          <div className="lg:w-1/2 p-12 md:p-24 lg:p-32 flex flex-col justify-center bg-neutral-950">
            <span className="text-[10px] font-black tracking-[0.4em] text-neutral-500 mb-6 uppercase">Technical Insight</span>
            <h3 className="text-3xl md:text-5xl font-black uppercase mb-8 tracking-tighter">{feature.title}</h3>
            <p className="text-lg text-neutral-400 font-light leading-relaxed mb-10">
              {feature.desc}
            </p>
            <button className="self-start text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-white pb-2 hover:text-neutral-400 hover:border-neutral-400 transition-all">
              LEARN MORE
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureGrid;