import React, { useState, useEffect, useRef } from 'react';

const STATS = [
  { value: 3, suffix: '', label: 'Decades' },
  { value: 125, suffix: '+', label: 'Fortune 500 clients' },
  { value: 5, suffix: '', label: 'Continents' },
  { value: 25, suffix: '+', label: 'Countries' },
  { value: 6500, suffix: '+', label: 'Consultants' },
];

function useCountUp(end: number, duration: number, start: boolean): number {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    startTime.current = null;

    const step = (timestamp: number) => {
      if (startTime.current === null) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [end, duration, start]);

  return count;
}

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const count = useCountUp(value, 1600, inView);
  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const ByTheNumbers: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 bg-black border-t border-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-w-0">
        <div className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-[10px] font-black tracking-[0.5em] text-[#2176ff] uppercase mb-4 sm:mb-6 block">
            Impact
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-center leading-none text-white">
            Sira Technologies by the Digits
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-baseline gap-x-8 sm:gap-x-12 md:gap-x-16 lg:gap-x-20 gap-y-10">
          {STATS.map((stat, i) => (
            <React.Fragment key={stat.label}>
              <div
                className={`text-center transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: inView ? `${i * 60}ms` : '0ms' }}
              >
                <h4 className="font-black text-3xl sm:text-4xl md:text-5xl tracking-tighter text-white">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
                </h4>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/70 mt-1">
                  {stat.label}
                </p>
              </div>
              {i < STATS.length - 1 && (
                <div
                  className="hidden lg:block w-px h-12 bg-white/20 self-center flex-shrink-0"
                  aria-hidden
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ByTheNumbers;
