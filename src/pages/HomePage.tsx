import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMergedImages } from '../content/siteImages';
import Hero from '../components/Hero';
import DiagonalSection from '../components/DiagonalSection';
import ByTheNumbers from '../components/ByTheNumbers';
import ContactSection from '../components/ContactSection';
import { Reveal } from '../components/Reveal';
import { useInView } from '../hooks/useInView';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const HomePage: React.FC = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const servicesInView = useInView();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
        return () => clearTimeout(t);
      }
    }
  }, [location.pathname, location.hash]);

  const images = getMergedImages().home;
  const sliderTitles: { title: string; subtitle: string }[] = [
    { title: 'AI', subtitle: 'Neural networks and intelligent automation' },
    { title: 'Big Data', subtitle: 'High-fidelity data processing at scale' },
    { title: 'Networking', subtitle: 'Zero-latency infrastructure backbone' },
  ];
  const sliderImages = (images.slider ?? []).filter(Boolean);
  const sliderCount = Math.max(1, sliderImages.length);
  const sliderItems = sliderImages.map((img, i) => ({ src: img, ...(sliderTitles[i] ?? { title: `View ${i + 1}`, subtitle: '' }) }));

  const nextSlide = () => setSliderIndex((prev) => (prev + 1) % sliderCount);
  const prevSlide = () => setSliderIndex((prev) => (prev - 1 + sliderCount) % sliderCount);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) { // min swipe distance
      if (delta > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <>
      <Hero onExploreClick={() => scrollToSection('services-section')} />

      <section className="bg-neutral-50 dark:bg-neutral-800/50 relative z-10 overflow-hidden border-b border-neutral-100 dark:border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-w-0">
          <div className="relative aspect-video lg:aspect-auto min-h-[280px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden group lg:border-r border-neutral-200 dark:border-neutral-700">
            <img
              src={images.intro}
              alt="Engineering and infrastructure"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out lg:group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-80"></div>
          </div>
          <div className="px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-32 lg:px-20 xl:px-32 flex flex-col justify-center min-w-0">
            <Reveal delay={0}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 sm:mb-8 leading-[0.9] text-black dark:text-white">
                Unrivalled <br /> Engineering <br /> Quality
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10 font-light max-w-xl">
                Our approach to DevOps and Cloud Architecture isn't just about implementation; it's about creating a
                living, breathing digital infrastructure that adapts to your needs. We utilize custom-built automation
                modules and predictive AI.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex gap-8 mb-12">
                <div className="transition-transform duration-300 hover:scale-105">
                  <h4 className="font-black text-3xl sm:text-4xl tracking-tighter text-black dark:text-white">99.9%</h4>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 mt-1">SLA Guaranteed</p>
                </div>
                <div className="w-px h-10 sm:h-12 bg-neutral-200 dark:bg-neutral-600"></div>
                <div className="transition-transform duration-300 hover:scale-105">
                  <h4 className="font-black text-3xl sm:text-4xl tracking-tighter text-black dark:text-white">24/7</h4>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 mt-1">Active Monitoring</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="relative mt-8 overflow-hidden">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-neutral-200/40 dark:text-neutral-600/50 select-none whitespace-nowrap">
                  Infrastructure
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div>
        <DiagonalSection
          bgImage={images.diagonal}
          title="The Future of Data Engineering"
          description="Sira Technologies' trademark precision is unmistakable. We transform fragmented data silos into robust, actionable business intelligence pipelines using state-of-the-art modeling."
          ctaText="Learn About Our Data Stack"
          onCtaClick={() => scrollToSection('services-section')}
        />
      </div>

      <section className="py-16 sm:py-24 md:py-32 bg-white dark:bg-neutral-900 text-black dark:text-white overflow-hidden relative z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-12 sm:mb-16 md:mb-24">
          <Reveal delay={0}>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-6 sm:mb-8">
              TRUE INFRASTRUCTURE PLAYGROUND
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-light">
              SIRA TECHNOLOGIES 6 is the ultimate architectural toolkit for deep infrastructure exploration, featuring cutting-edge
              node orchestration and high-fidelity data processing.
            </p>
          </Reveal>
        </div>
        <div className="relative bg-black py-12 sm:py-20 group">
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-4 md:left-12 top-1/2 -translate-y-1/2 z-40 text-white hover:text-[#2176ff] transition-all duration-300 p-2 sm:p-4 min-w-[44px] min-h-[44px] flex items-center justify-center bg-black/20 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none rounded hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-4 md:right-12 top-1/2 -translate-y-1/2 z-40 text-white hover:text-[#2176ff] transition-all duration-300 p-2 sm:p-4 min-w-[44px] min-h-[44px] flex items-center justify-center bg-black/20 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none rounded hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 sm:w-8 sm:h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 relative">
            <div
              className="relative aspect-video min-h-[260px] sm:min-h-[320px] md:min-h-[360px] overflow-hidden border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-neutral-900 cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${sliderIndex * 100}%)` }}
              >
                {sliderItems.length > 0 ? sliderItems.map((item, i) => (
                  <div key={i} className="min-w-full h-full relative flex-shrink-0">
                    <img
                      src={item.src}
                      className="w-full h-full object-cover hover:brightness-100 transition-all duration-1000"
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-white pointer-events-none">
                      <span className="text-[10px] font-black tracking-[0.4em] text-[#2176ff] uppercase block mb-2">
                        Infrastructure
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-1 sm:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/80 font-light max-w-md">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="absolute top-8 left-8 flex gap-3">
                      <div className="w-2.5 h-2.5 bg-[#2176ff] rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                )) : (
                  <div className="min-w-full h-full flex-shrink-0 flex items-center justify-center bg-neutral-800 text-white/50 text-sm uppercase tracking-widest">
                    Add slider images in Admin
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center mt-8 sm:mt-12 gap-4">
              {Array.from({ length: sliderCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSliderIndex(i)}
                  className={`h-1.5 transition-all duration-700 ${sliderIndex === i ? 'w-24 bg-[#2176ff]' : 'w-6 bg-white/10 hover:bg-white/30'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services-section" className="scroll-mt-20 sm:scroll-mt-24 pt-8 sm:pt-12 pb-16 sm:pb-24 md:pb-32 lg:pb-48 bg-white dark:bg-neutral-900 px-4 sm:px-6 border-t border-neutral-100 dark:border-neutral-800 relative z-40">
        <div className="max-w-7xl mx-auto min-w-0">
          <Reveal className="flex flex-col items-center mb-16 sm:mb-24">
            <span className="text-[10px] font-black tracking-[0.5em] text-[#2176ff] uppercase mb-4 sm:mb-6 block">
              Capabilities
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-center leading-none text-black dark:text-white">
              SERVICES.
            </h2>
          </Reveal>
          <div ref={servicesInView.ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 transition-all duration-700 ease-out" style={{ opacity: servicesInView.inView ? 1 : 0, transform: servicesInView.inView ? 'translateY(0)' : 'translateY(24px)' }}>
            {[
              { title: 'Software Development', desc: 'Scalable custom solutions built on modern tech stacks.', path: '/software-development' },
              { title: 'Networking Services', desc: 'Network infrastructure, SD-WAN, and managed network services.', path: '/networking-services' },
              { title: 'Cyber Security', desc: 'Protecting networks and data from malicious attacks.', path: '/cyber-security' },
              { title: 'Data Analytics', desc: 'Big data, IoT, and actionable reports for business use.', path: '/data-analytics' },
              { title: 'Business Intelligence', desc: 'Analyze and transform data into meaningful insights and reports.', path: '/business-intelligence' },
              { title: 'Cloud Architecture', desc: 'Secure and scalable cloud-native infrastructure.', path: '/cloud-architecture' },
            ].map((service, i) => (
              <div key={i} className="group relative bg-black h-[380px] sm:h-[500px] lg:h-[600px] overflow-hidden">
                <img
                  src={images.serviceCards[i]}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  alt={service.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/50"></div>
                <div className="relative z-10 p-6 sm:p-8 md:p-12 flex flex-col h-full text-white">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-3 sm:mb-4 leading-none text-white drop-shadow-sm">
                    {service.title}
                  </h3>
                  <p className="text-base text-white/90 font-light leading-relaxed max-w-xs drop-shadow-sm">{service.desc}</p>
                  <button
                    onClick={() => (service.path ? navigate(service.path) : scrollToSection('contact-section'))}
                    className="mt-auto self-start text-[10px] font-black tracking-widest uppercase px-8 py-4 min-h-[44px] border border-white/20 hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ByTheNumbers />

      <div id="contact-section" className="scroll-mt-24">
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
