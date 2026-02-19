import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '../content/siteImages';

const INDUSTRIES_DATA = [
  { id: 'financial', title: 'Financial', summary: 'Technology drives accessibility, innovation, and convenience in finance. IT supports communication, automation, and data reporting—from robot-advisors and asset allocation to online banking and mobile payments. We help financial institutions adopt the latest security and software systems to handle billions of daily transactions reliably.' },
  { id: 'government', title: 'Government', summary: 'Government agencies need technology to serve constituents while protecting sensitive information and staying within budget. We provide managed public and private cloud solutions, modernize government IT, and deliver tailored support for municipal, county, and utility operations—from IT planning to telephony and field technology.' },
  { id: 'healthcare-pharmaceutical', title: 'Healthcare and Pharmaceutical', summary: 'We align healthcare and pharma IT with strict compliance (e.g. HIPAA) through assessments, strategic consulting, and security services. From cloud-based analytics and 3D printing in drug production to managing scope, scale, and security across devices and endpoints—we help simplify IT response and reduce risk.' },
  { id: 'insurance', title: 'Insurance', summary: 'Technology is indispensable for insurance agencies and customers alike. We support online quotes, mobile coverage management, and AI-driven underwriting and claims processing. Our solutions help improve operational efficiency, customer experience, and automation of claims through secure, cloud-based digital workflows.' },
  { id: 'retail', title: 'Retail', summary: 'We help retailers stay current in-store and online: data collection and analytics, inventory and workforce management software, point-of-sale systems, and emerging tools like AR. Our solutions support forecasting, stock control, customer experience, and marketing—so you can save costs and streamline operations.' },
  { id: 'telecom', title: 'Telecom', summary: 'We partner with telecom operators to modernize networks, improve reliability, and secure critical infrastructure. From core systems to customer-facing platforms, we deliver scalable, secure IT solutions that keep communications running.' },
  { id: 'manufacturing', title: 'Manufacturing', summary: 'Manufacturing demands robust, secure IT for production, supply chain, and automation. We help integrate systems, protect operational technology, and leverage data for efficiency and quality—so you can focus on building.' },
  { id: 'logistics', title: 'Logistics', summary: 'Logistics runs on visibility, accuracy, and speed. We support fleet and warehouse systems, real-time tracking, and integration across partners and modes—enabling smarter routing, inventory control, and customer delivery.' },
];

/** Map industry id to its image key in siteImages. */
const INDUSTRY_IMAGE_KEYS: Record<string, string> = {
  financial: 'industry.finance',
  government: 'industry.government',
  'healthcare-pharmaceutical': 'industry.healthcare',
  insurance: 'industry.insurance',
  retail: 'industry.retail',
  telecom: 'industry.telecom',
  manufacturing: 'industry.manufacturing',
  logistics: 'industry.logistics',
};

const IndustriesPage: React.FC = () => {
  const navigate = useNavigate();

  const industries = useMemo(
    () =>
      INDUSTRIES_DATA.map((item) => ({
        ...item,
        image: getImageUrl(INDUSTRY_IMAGE_KEYS[item.id] ?? 'industry.finance'),
      })),
    []
  );

  const heroImage = getImageUrl('home.intro');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-neutral-900 min-h-screen animate-in fade-in duration-700">
      {/* Hero */}
      <section className="bg-black dark:bg-neutral-950 text-white pt-32 sm:pt-40 pb-16 sm:pb-24 px-6 sm:px-8 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 wireframe-bg opacity-10 pointer-events-none" />
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 min-w-0">
          <span className="text-[10px] font-black tracking-[0.5em] text-[#2176ff] uppercase mb-6 sm:mb-8 block">
            Industries
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 sm:mb-8">
            Sectors we serve
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-neutral-300 max-w-2xl leading-relaxed">
            Tailored technology and managed services for financial, government, healthcare, insurance, retail, and more.
          </p>
        </div>
      </section>

      {/* Industry blocks */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-24 min-w-0">
        {industries.map((industry, idx) => (
          <section
            key={industry.id}
            id={industry.id}
            className={`scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 md:py-20 border-b border-neutral-100 dark:border-neutral-800 last:border-0 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className={idx % 2 === 1 ? 'md:col-start-2 md:row-start-1' : ''}>
                <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 shadow-lg aspect-[4/3] md:aspect-video">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={idx % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-black dark:text-white border-b-2 border-[#2176ff] pb-3 inline-block mb-6">
                  {industry.title}
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed text-base md:text-lg">
                  {industry.summary}
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-6 sm:px-8 bg-neutral-50 dark:bg-neutral-800/50 border-t border-neutral-100 dark:border-neutral-800 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 sm:mb-8 text-black dark:text-white">
          Ready to transform your industry?
        </h2>
        <button
          type="button"
          onClick={() => {
            navigate('/');
            setTimeout(() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' }), 200);
          }}
          className="min-h-[44px] px-8 sm:px-10 py-4 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#2176ff] dark:hover:bg-[#2176ff] dark:hover:text-white transition-all"
        >
          Get in touch
        </button>
      </section>
    </div>
  );
};

export default IndustriesPage;
