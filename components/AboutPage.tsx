import React from 'react';

const AboutPage: React.FC = () => {
  const coreValues = [
    {
      title: "Agility",
      desc: "We maintain our systems to move quickly and easily in response to change or challenge. This provides a clear outcome with a focused goal and in an incremental way."
    },
    {
      title: "Quality",
      desc: "We always committed to provide the best services. This will ensure that the new function has the required influence and can manage across the organization effectively. The small team of quality advocates will report directly to the quality executive."
    },
    {
      title: "Diversity",
      desc: "We create a better and safer environment that considers everyone, leading to better decision making and problem solving. Also, improves the bottom line of company and leads to unfettered discoveries and breakthrough innovations."
    },
    {
      title: "Innovation",
      desc: "We the team always strive for the unique solutions and ability to adopt and create a climate of reciprocal trust."
    },
    {
      title: "Integrity",
      desc: "We practice being honest and showing a consistent and uncompromising adherence to strong moral and ethical principles and values."
    },
    {
      title: "Collaboration",
      desc: "We Focus on Strengthening and Stretching Expertise to support the work between individuals."
    }
  ];

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      {/* Hero Header */}
      <section className="bg-black text-white pt-40 pb-24 px-8 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 wireframe-bg opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-[10px] font-black tracking-[0.5em] text-[#2176ff] uppercase mb-8 block">ESTABLISHED_STANDARD</span>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
            ABOUT <br /> THE MISSION.
          </h1>
          <p className="text-xl md:text-3xl font-light text-neutral-400 max-w-3xl leading-tight">
            Setting the global standard for architectural integrity and high-performance engineering in the enterprise sector.
          </p>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 px-8 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
             <h2 className="text-5xl font-black uppercase tracking-tighter">PROCESS.</h2>
             <div className="w-16 h-1 bg-[#2176ff] mt-6"></div>
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl md:text-2xl font-light text-neutral-600 leading-relaxed">
              Our engineering lifecycle is built on iterative refinement. From initial system initialization to global deployment, every packet of data follows a rigorous path of validation and optimization.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="py-32 px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20 border-b-2 border-black pb-8">
             <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Core Values.</h2>
             <span className="hidden md:block text-[10px] font-black tracking-[0.4em] text-neutral-300">SYSTEM_DNA_v4.2</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white p-12 hover:bg-black hover:text-white transition-all duration-500 group">
                <span className="text-[10px] font-black text-[#2176ff] mb-6 block uppercase tracking-[0.2em]">0{idx + 1} //</span>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6">{value.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed group-hover:text-neutral-400">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOALS SECTION */}
      <section className="py-32 px-8 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 wireframe-bg opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10">Our Goals.</h2>
              <p className="text-xl md:text-2xl font-light text-neutral-400 leading-relaxed mb-12">
                Our primary goal is to ensure that our customers succeed through shared core values. Orionis subscribes and follows a framework for decision making processes, and that framework is the standard by which we aim to conduct business with our customers, our co-workers, and in our communities.
              </p>
              <div className="flex gap-4">
                 <div className="w-12 h-1 bg-[#2176ff]"></div>
                 <div className="w-4 h-1 bg-white/20"></div>
                 <div className="w-4 h-1 bg-white/20"></div>
              </div>
            </div>
            <div className="aspect-square bg-neutral-900 border border-white/10 p-4">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Goals" className="w-full h-full object-cover grayscale brightness-50" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer for Page */}
      <section className="py-32 px-8 bg-white text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Ready to transform?</h2>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})} className="px-12 py-5 bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#2176ff] transition-all">
          Explore Infrastructure
        </button>
      </section>
    </div>
  );
};

export default AboutPage;