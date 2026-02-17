import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DiagonalSection from './components/DiagonalSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home');
  const [sliderIndex, setSliderIndex] = useState(0);

  const sliderImages = [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
  ];

  const nextSlide = () => setSliderIndex((prev) => (prev + 1) % sliderImages.length);
  const prevSlide = () => setSliderIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);

  return (
    <div className="min-h-screen bg-white selection:bg-[#2176ff] selection:text-white">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />
      
      <main className="relative">
        {currentView === 'home' ? (
          <>
            <Hero />
            
            {/* Intro Text Section */}
            <section className="bg-neutral-50 relative z-10 overflow-hidden border-b border-neutral-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                <div className="relative aspect-video lg:aspect-auto min-h-[400px] sm:min-h-[500px] overflow-hidden group lg:border-r border-neutral-200">
                  <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                    alt="Infrastructure" 
                    className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-[2000ms] lg:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                </div>

                <div className="px-8 py-20 sm:px-16 sm:py-32 lg:px-20 xl:px-32 flex flex-col justify-center">
                  <span className="text-[10px] font-black tracking-[0.5em] text-[#2176ff] uppercase mb-4 block">01 // Engineering</span>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">Unrivalled <br/> Engineering <br/> Quality</h2>
                  <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-10 font-light max-w-xl">
                    Our approach to DevOps and Cloud Architecture isn't just about implementation; it's about creating a living, breathing digital infrastructure that adapts to your needs. We utilize custom-built automation modules and predictive AI.
                  </p>
                  <div className="flex gap-8 mb-12">
                     <div>
                        <h4 className="font-black text-3xl sm:text-4xl tracking-tighter">99.9%</h4>
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 mt-1">SLA Guaranteed</p>
                     </div>
                     <div className="w-px h-10 sm:h-12 bg-neutral-200"></div>
                     <div>
                        <h4 className="font-black text-3xl sm:text-4xl tracking-tighter">24/7</h4>
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 mt-1">Active Monitoring</p>
                     </div>
                  </div>

                  <div className="relative mt-8">
                    <span className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-neutral-200/40 select-none">Infrastructure</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Feature Section / Services Section Anchor */}
            <div id="services-section">
              <DiagonalSection 
                bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
                title="The Future of Data Engineering"
                description="Orionis' trademark precision is unmistakable. We transform fragmented data silos into robust, actionable business intelligence pipelines using state-of-the-art modeling."
                ctaText="Learn About Our Data Stack"
              />
            </div>

            {/* REAKTOR CLONE SLIDER SECTION */}
            <section className="py-24 sm:py-48 bg-white text-black overflow-hidden relative z-30">
                <div className="max-w-5xl mx-auto px-6 text-center mb-16 sm:mb-24">
                    <span className="text-[10px] font-black tracking-[0.5em] text-[#2176ff] uppercase mb-6 block">Interface Explore</span>
                    <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">TRUE INFRASTRUCTURE PLAYGROUND</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-light">
                        ORIONIS 6 is the ultimate architectural toolkit for deep infrastructure exploration, featuring cutting-edge node orchestration and high-fidelity data processing.
                    </p>
                </div>

                <div className="relative bg-black py-12 sm:py-20 group">
                    {/* Navigation Arrows */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 z-40 text-white hover:text-[#2176ff] transition-all p-4 scale-90 hover:scale-110"
                    >
                        <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button 
                        onClick={nextSlide}
                        className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 z-40 text-white hover:text-[#2176ff] transition-all p-4 scale-90 hover:scale-110"
                    >
                        <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Main Image Viewport */}
                    <div className="max-w-7xl mx-auto px-16 sm:px-32 relative">
                        <div className="relative aspect-video overflow-hidden border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
                            <div 
                                className="flex transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1) h-full"
                                style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
                            >
                                {sliderImages.map((img, i) => (
                                    <div key={i} className="min-w-full h-full relative">
                                        <img 
                                            src={img} 
                                            className="w-full h-full object-cover grayscale brightness-75 hover:brightness-100 transition-all duration-1000" 
                                            alt={`Backbone View ${i}`} 
                                        />
                                        <div className="absolute top-8 left-8 flex gap-3">
                                            <div className="w-2.5 h-2.5 bg-[#2176ff] rounded-full"></div>
                                            <div className="w-2.5 h-2.5 bg-white/20 rounded-full"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Slider Progress Indicator */}
                        <div className="flex justify-center mt-16 gap-4">
                            {sliderImages.map((_, i) => (
                                <button 
                                    key={i}
                                    onClick={() => setSliderIndex(i)}
                                    className={`h-1.5 transition-all duration-700 ${sliderIndex === i ? 'w-24 bg-[#2176ff]' : 'w-6 bg-white/10 hover:bg-white/30'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 sm:py-48 bg-white px-6 border-t border-neutral-100 relative z-40">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-24">
                    <span className="text-[10px] font-black tracking-[0.5em] text-[#2176ff] uppercase mb-6 block">Capabilities</span>
                    <h2 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter text-center leading-none">SERVICES.</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
                  {[
                    { title: "Software Development", desc: "Scalable custom solutions built on modern tech stacks.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" },
                    { title: "AI & Machine Learning", desc: "Intelligent automation and predictive analytics.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" },
                    { title: "DevOps Solutions", desc: "Reliable CI/CD pipelines and infrastructure as code.", img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800" },
                    { title: "Data Engineering", desc: "Robust pipelines for high-velocity data environments.", img: "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=800" },
                    { title: "Digital Transformation", desc: "Modernizing legacy stacks for the future of enterprise.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
                    { title: "Cloud Architecture", desc: "Secure and scalable cloud-native infrastructure.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" }
                  ].map((service, i) => (
                    <div key={i} className="group relative bg-black h-[500px] sm:h-[600px] overflow-hidden">
                      <img src={service.img} className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:scale-110 transition-transform duration-[2000ms]" alt={service.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90"></div>
                      <div className="relative z-10 p-12 flex flex-col h-full text-white">
                        <span className="text-[10px] font-black tracking-widest text-neutral-500 mb-6 block uppercase">Module {i+1}</span>
                        <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4 leading-none">{service.title}</h3>
                        <p className="text-base text-neutral-400 font-light leading-relaxed max-w-xs">{service.desc}</p>
                        <button className="mt-auto self-start text-[10px] font-black tracking-widest uppercase px-10 py-5 border border-white/20 hover:bg-white hover:text-black transition-all duration-500">Explore Module</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div id="contact-section">
              <ContactSection />
            </div>
          </>
        ) : (
          <AboutPage />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;