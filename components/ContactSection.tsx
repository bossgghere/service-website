import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      alert('Message transmitted to Orionis Command.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section className="py-20 sm:py-32 px-6 bg-white border-t border-neutral-100 relative overflow-hidden">
      <div className="absolute inset-0 wireframe-bg pointer-events-none opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div className="lg:sticky lg:top-32">
            <span className="text-[9px] sm:text-[10px] font-black tracking-[0.4em] sm:tracking-[0.5em] text-[#2176ff] uppercase mb-4 sm:mb-6 block">
              Global Connection
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6 sm:mb-8">
              Let's build <br />
              <span className="text-neutral-300">the future.</span>
            </h2>
            <div className="h-1 w-16 sm:w-24 bg-black mb-8 sm:mb-12"></div>
            <p className="text-lg sm:text-xl text-neutral-400 font-light max-w-md leading-relaxed mb-10 sm:mb-16">
              Reach out to our specialist engineering teams to discuss architecture, scalability, or enterprise-wide digital transformation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 pt-8 sm:pt-12 border-t border-neutral-100">
              <div className="group">
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-neutral-300 block mb-2">Technical Support</span>
                <a href="tel:+13092046360" className="text-sm font-bold hover:text-[#2176ff] transition-colors flex items-center gap-2">
                  +1 (309) 204 6360
                </a>
              </div>
              <div className="group">
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-neutral-300 block mb-2">Inquiries</span>
                <a href="mailto:info@ciratek.com" className="text-sm font-bold hover:text-[#2176ff] transition-colors flex items-center gap-2">
                  info@ciratek.com
                </a>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-neutral-300 block mb-2">Orionis HQ</span>
                <span className="text-xs sm:text-sm font-bold opacity-60 uppercase tracking-tighter">
                  2509 W Iles Avenue Suite 110, Springfield IL 62704
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-neutral-50 p-6 sm:p-10 md:p-16 relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 border-t-2 border-r-2 border-black/10"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-b-2 border-l-2 border-black/10"></div>
            
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-8 sm:mb-12">Initialize Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-10">
              <div className="relative group/field">
                <input 
                  type="text" 
                  required
                  placeholder="NAME // IDENTITY"
                  className="w-full bg-transparent border-b border-neutral-200 py-3 sm:py-4 text-[10px] sm:text-xs font-black tracking-widest uppercase focus:outline-none focus:border-black transition-colors placeholder:text-neutral-300"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="relative group/field">
                <input 
                  type="email" 
                  required
                  placeholder="EMAIL // ADDRESS"
                  className="w-full bg-transparent border-b border-neutral-200 py-3 sm:py-4 text-[10px] sm:text-xs font-black tracking-widest uppercase focus:outline-none focus:border-black transition-colors placeholder:text-neutral-300"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="relative group/field">
                <textarea 
                  rows={3}
                  required
                  placeholder="MESSAGE // PAYLOAD"
                  className="w-full bg-transparent border-b border-neutral-200 py-3 sm:py-4 text-[10px] sm:text-xs font-black tracking-widest uppercase focus:outline-none focus:border-black transition-colors resize-none placeholder:text-neutral-300"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSending}
                className="w-full py-4 sm:py-6 bg-black text-white text-[10px] sm:text-xs font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase hover:bg-[#2176ff] transition-all flex items-center justify-center gap-4 group"
              >
                {isSending ? (
                  <span className="animate-pulse">TRANSMITTING...</span>
                ) : (
                  <>
                    SEND MESSAGE
                    <div className="w-6 sm:w-8 h-[2px] bg-white group-hover:w-12 transition-all"></div>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;