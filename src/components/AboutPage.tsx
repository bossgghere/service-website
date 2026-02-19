import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMergedImages } from '../content/siteImages';
import { Reveal, RevealStagger } from './Reveal';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToServices = () => {
    navigate('/');
    setTimeout(() => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' }), 200);
  };
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
    <div className="bg-white dark:bg-neutral-900 min-h-screen animate-in fade-in duration-700">
      {/* Hero Header */}
      <section className="bg-black dark:bg-neutral-950 text-white pt-32 sm:pt-40 pb-16 sm:pb-24 px-6 sm:px-8 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 wireframe-bg opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 min-w-0">
          <Reveal delay={0}>
            <span className="text-[10px] font-black tracking-[0.5em] text-[#2176ff] uppercase mb-6 sm:mb-8 block">ESTABLISHED_STANDARD</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8 sm:mb-12">
              ABOUT <br /> THE MISSION.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg sm:text-xl md:text-3xl font-light text-neutral-400 max-w-3xl leading-tight">
              Setting the global standard for architectural integrity and high-performance engineering in the enterprise sector.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 border-b border-neutral-100 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 min-w-0">
          <Reveal className="lg:col-span-4" delay={0}>
             <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-black dark:text-white">PROCESS.</h2>
             <div className="w-16 h-1 bg-[#2176ff] mt-6"></div>
          </Reveal>
          <Reveal className="lg:col-span-8" delay={120}>
            <p className="text-xl md:text-2xl font-light text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Our engineering lifecycle is built on iterative refinement. From initial system initialization to global deployment, every packet of data follows a rigorous path of validation and optimization.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="py-16 sm:py-24 md:py-32 px-6 sm:px-8 bg-neutral-50 dark:bg-neutral-800/50">
        <div className="max-w-7xl mx-auto min-w-0">
          <Reveal>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12 sm:mb-20 border-b-2 border-black dark:border-white pb-6 sm:pb-8">
               <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-black dark:text-white">Core Values.</h2>
               <span className="hidden md:block text-[10px] font-black tracking-[0.4em] text-neutral-300 dark:text-neutral-500">SYSTEM_DNA_v4.2</span>
            </div>
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 dark:bg-neutral-700" staggerMs={80} as="div">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white dark:bg-neutral-800 p-6 sm:p-8 md:p-12 hover:bg-black dark:hover:bg-neutral-950 hover:text-white transition-all duration-500 group">
                <span className="text-[10px] font-black text-[#2176ff] mb-6 block uppercase tracking-[0.2em]">0{idx + 1} //</span>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-6 text-black dark:text-white group-hover:text-white">{value.title}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 font-light leading-relaxed group-hover:text-neutral-400">
                  {value.desc}
                </p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* GOALS SECTION */}
      <section className="py-16 sm:py-24 md:py-32 px-6 sm:px-8 bg-black dark:bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 wireframe-bg opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24 items-center">
            <div>
              <Reveal delay={0}>
                <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 sm:mb-10">Our Goals.</h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-lg sm:text-xl md:text-2xl font-light text-neutral-400 leading-relaxed mb-8 sm:mb-12">
                  Our primary goal is to ensure that our customers succeed through shared core values. Sira Technologies subscribes and follows a framework for decision making processes, and that framework is the standard by which we aim to conduct business with our customers, our co-workers, and in our communities.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex gap-4">
                   <div className="w-12 h-1 bg-[#2176ff]"></div>
                   <div className="w-4 h-1 bg-white/20"></div>
                   <div className="w-4 h-1 bg-white/20"></div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <div className="aspect-video lg:aspect-square bg-neutral-900 dark:bg-neutral-800 border border-white/10 p-4">
                 <img src={getMergedImages().about.goals} alt="Team and goals" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Footer for Page */}
      <section className="py-16 sm:py-24 md:py-32 px-6 sm:px-8 bg-white dark:bg-neutral-900 text-center">
        <Reveal delay={0}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 sm:mb-12 text-black dark:text-white">Ready to transform?</h2>
        </Reveal>
        <Reveal delay={120}>
          <button
            type="button"
            onClick={goToServices}
            className="min-h-[44px] px-8 sm:px-12 py-4 sm:py-5 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#2176ff] dark:hover:bg-[#2176ff] dark:hover:text-white transition-all"
          >
            Explore Infrastructure
          </button>
        </Reveal>
      </section>
    </div>
  );
};

export default AboutPage;