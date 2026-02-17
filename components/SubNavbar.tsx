
import React from 'react';

interface Props {
  isSticky: boolean;
}

const SubNavbar: React.FC<Props> = ({ isSticky }) => {
  return (
    <div className={`${isSticky ? 'fixed top-20 left-0 right-0 animate-in slide-in-from-top duration-300 shadow-md' : 'relative'} bg-neutral-900 text-white h-12 z-50 flex items-center justify-between px-8 transition-all`}>
      <div className="flex items-center gap-10">
        <span className="font-extrabold text-xs tracking-widest uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#2176ff] rounded-full animate-pulse"></span>
          SERVICES SUITE
        </span>
        <div className="hidden lg:flex gap-6 text-[9px] font-bold tracking-[0.2em] uppercase opacity-50">
          <a href="#" className="hover:opacity-100 transition-opacity">Capabilites</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Expertise</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Case Studies</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Strategy</a>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="text-[9px] text-right leading-tight hidden md:block opacity-60">
          <p className="font-bold">Enterprise Solutions</p>
        </div>
        <button className="bg-[#2176ff] px-5 py-1.5 text-[10px] font-black tracking-widest uppercase hover:bg-blue-600 transition-all transform hover:scale-105 active:scale-95">Get a Quote</button>
      </div>
    </div>
  );
};

export default SubNavbar;
