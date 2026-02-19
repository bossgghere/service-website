import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const logo = new URL('../assets/logo.png', import.meta.url).href;

const NAVBAR_MEDIA = typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)') : null;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(NAVBAR_MEDIA?.matches ?? true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const isAbout = pathname === '/about';
  const isIndustries = pathname === '/industries';

  const showLogoInFloating = !isDesktop; // mobile: always show logo in floating header

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!NAVBAR_MEDIA) return;
    const handler = () => setIsDesktop(NAVBAR_MEDIA.matches);
    NAVBAR_MEDIA.addEventListener('change', handler);
    return () => NAVBAR_MEDIA.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate({ pathname: '/', hash: id });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const goTo = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
    if (path === '/') {
      setTimeout(() => window.scrollTo(0, 0), 50);
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[100] w-full transition-[padding,background] duration-300 ease-out ${
        isScrolled ? 'bg-transparent pt-4 px-4 sm:pt-5 sm:px-6' : 'bg-white pt-0 px-0'
      }`}
    >
      <div
        className={`relative mx-auto flex flex-col md:flex-row md:items-center transition-all duration-300 ease-out ${
          isScrolled
            ? `min-h-12 rounded-full bg-white/95 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] backdrop-blur-xl border border-neutral-200 px-4 sm:px-6 ${isMobileMenuOpen ? 'w-full max-w-full rounded-none rounded-t-none' : 'max-w-lg'}`
            : 'min-h-16 sm:min-h-20 w-full max-w-full rounded-none border-b border-neutral-200 bg-white px-4 sm:px-6 lg:px-8'
        }`}
      >
        <div className={`flex w-full max-w-7xl mx-auto items-center justify-between md:justify-center md:gap-0 shrink-0 ${isScrolled ? 'h-12' : 'h-16 sm:h-20'}`}>
          {isScrolled && !showLogoInFloating ? (
            <div className="w-10 h-10 md:w-24 md:min-w-[6rem] shrink-0" aria-hidden />
          ) : (
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); goTo('/'); }}
              className="relative flex items-center shrink-0 md:static"
              aria-label="Orionis home"
            >
              <img src={logo} alt="Orionis" className="h-8 sm:h-9 md:h-10 w-auto object-contain" />
            </a>
          )}
          <div className="hidden md:flex flex-1 md:justify-center items-center gap-1">
            <NavLink onClick={() => goTo('/')} active={pathname === '/'} isScrolled={isScrolled}>
              Home
            </NavLink>
            <NavLink onClick={() => goTo('/about')} active={isAbout} isScrolled={isScrolled}>
              About
            </NavLink>
            <NavLink onClick={() => goTo('/industries')} active={isIndustries} isScrolled={isScrolled}>
              Industries
            </NavLink>
            <NavLink onClick={() => scrollToSection('services-section')} active={false} isScrolled={isScrolled}>
              Services
            </NavLink>
            <NavLink onClick={() => scrollToSection('contact-section')} active={false} isScrolled={isScrolled}>
              Contact
            </NavLink>
          </div>

          <div className="flex items-center justify-end shrink-0 w-12 h-12 md:w-24 md:min-w-[6rem]">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 group min-w-[44px] min-h-[44px] items-center justify-center -m-2"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-0.5 bg-black transition-all duration-700 ease-in-out transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-7'}`}
              />
              <div className={`w-5 h-0.5 bg-black transition-all duration-700 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <div
                className={`w-6 h-0.5 bg-black transition-all duration-700 ease-in-out transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-7'}`}
              />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden w-full bg-white border-t border-neutral-200 shadow-lg pb-6 pt-4 px-4 overflow-y-auto max-h-[calc(100vh-4rem)] animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-2">
              <MobileNavLink onClick={() => goTo('/')} active={pathname === '/'}>
                Home
              </MobileNavLink>
              <MobileNavLink onClick={() => goTo('/about')} active={isAbout}>
                About
              </MobileNavLink>
              <MobileNavLink onClick={() => goTo('/industries')} active={isIndustries}>
                Industries
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('services-section')} active={false}>
                Services
              </MobileNavLink>
              <MobileNavLink onClick={() => scrollToSection('contact-section')} active={false}>
                Contact
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({
  onClick,
  active,
  isScrolled,
  children,
}: {
  onClick: () => void;
  active: boolean;
  isScrolled: boolean;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`relative px-3 py-1 font-black tracking-wide uppercase group ${isScrolled ? 'text-xs' : 'text-sm'} ${
      active ? 'text-[#2176ff]' : 'text-neutral-600 hover:text-black'
    } transition-all duration-300 ease-out`}
  >
    {children}
    <span
      className={`absolute bottom-0 left-3 right-3 h-0.5 bg-[#2176ff] transform origin-left transition-transform duration-500 ease-in-out ${
        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`}
    />
  </button>
);

const MobileNavLink = ({
  onClick,
  active,
  children,
}: {
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-4 py-3 min-h-[44px] text-left text-sm font-black tracking-wide uppercase rounded-lg transition-all duration-300 ${
      active ? 'bg-[#2176ff] text-white' : 'text-neutral-700 bg-neutral-100 hover:bg-neutral-200'
    }`}
  >
    {children}
  </button>
);

export default Navbar;
