import React, { useState } from 'react';
import { Reveal, RevealStagger } from './Reveal';

const CONTACT_EMAIL = 'info@sira-technologies.com';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name} (${formData.email})`);
    const body = encodeURIComponent(
      `${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 sm:py-32 px-6 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 relative overflow-hidden">
      <div className="absolute inset-0 wireframe-bg pointer-events-none opacity-20 dark:opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-32 space-y-0">
            <Reveal delay={0}>
              <span className="text-[9px] sm:text-[10px] font-black tracking-[0.4em] sm:tracking-[0.5em] text-[#2176ff] uppercase mb-4 sm:mb-6 block">
                Global Connection
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6 sm:mb-8 text-black dark:text-white">
                Let's build <br />
                <span className="text-neutral-300 dark:text-neutral-500">the future.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <div className="h-1 w-16 sm:w-24 bg-black dark:bg-white mb-8 sm:mb-12"></div>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-lg sm:text-xl text-neutral-400 dark:text-neutral-500 font-light max-w-md leading-relaxed mb-10 sm:mb-16">
                Reach out to our specialist engineering teams to discuss architecture, scalability, or enterprise-wide
                digital transformation.
              </p>
            </Reveal>

            <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 pt-8 sm:pt-12 border-t border-neutral-100 dark:border-neutral-700" staggerMs={100} as="div">
              <div className="group">
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-neutral-300 dark:text-neutral-500 block mb-2">
                  Inquiries
                </span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-bold text-black dark:text-white hover:text-[#2176ff] transition-colors flex items-center gap-2">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-neutral-300 dark:text-neutral-500 block mb-2">
                  Sira Technologies HQ
                </span>
                <span className="text-xs sm:text-sm font-bold opacity-60 uppercase tracking-tighter text-black dark:text-white">
                  2509 W Iles Avenue Suite 110, Springfield IL 62704
                </span>
              </div>
            </RevealStagger>
          </div>

          <Reveal delay={150}>
          <div className="bg-neutral-50 dark:bg-neutral-800 p-6 sm:p-10 md:p-16 relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-black/10 dark:border-white/20"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-black/10 dark:border-white/20"></div>

            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-8 sm:mb-12 text-black dark:text-white">
              Initialize Message
            </h3>

            {status === 'success' && (
              <p className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 text-sm font-medium" role="status">
                Your email client should open with the message ready to send to {CONTACT_EMAIL}. If it didn't open, <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-green-700 dark:hover:text-green-300">email us directly</a>.
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-10">
              <div className="relative group/field">
                <input
                  type="text"
                  required
                  placeholder="NAME // IDENTITY"
                  className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-600 py-3 sm:py-4 text-[10px] sm:text-xs font-black tracking-widest uppercase focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder:text-neutral-300 dark:placeholder:text-neutral-500 text-black dark:text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="relative group/field">
                <input
                  type="email"
                  required
                  placeholder="EMAIL // ADDRESS"
                  className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-600 py-3 sm:py-4 text-[10px] sm:text-xs font-black tracking-widest uppercase focus:outline-none focus:border-black dark:focus:border-white transition-colors placeholder:text-neutral-300 dark:placeholder:text-neutral-500 text-black dark:text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="relative group/field">
                <textarea
                  rows={3}
                  required
                  placeholder="MESSAGE // PAYLOAD"
                  className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-600 py-3 sm:py-4 text-[10px] sm:text-xs font-black tracking-widest uppercase focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none placeholder:text-neutral-300 dark:placeholder:text-neutral-500 text-black dark:text-white"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full min-h-[44px] py-4 sm:py-6 bg-black text-white text-[10px] sm:text-xs font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase hover:bg-[#2176ff] transition-all flex items-center justify-center gap-4 group"
              >
                SEND MESSAGE
                <div className="w-6 sm:w-8 h-[2px] bg-white group-hover:w-12 transition-all"></div>
              </button>
            </form>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
