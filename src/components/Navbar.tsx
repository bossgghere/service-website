import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const logo = new URL('../assets/newlogo.png', import.meta.url).href;

const NAVBAR_MEDIA = typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)') : null;

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(NAVBAR_MEDIA?.matches ?? true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'top' | 'services' | 'contact'>('top');
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const isAbout = pathname === '/about';
  const isIndustries = pathname === '/industries';
  const isHome = pathname === '/';

  const showLogoInFloating = !isDesktop; // mobile: always show logo in floating header

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track which home-page section is in view for nav highlight
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('top');
      return;
    }

    const checkSections = () => {
      const servicesEl = document.getElementById('services-section');
      const contactEl = document.getElementById('contact-section');
      if (!servicesEl || !contactEl) return;
      const sRect = servicesEl.getBoundingClientRect();
      const cRect = contactEl.getBoundingClientRect();
      const trigger = window.innerHeight * 0.35;
      if (cRect.top <= trigger && cRect.bottom > 0) setActiveSection('contact');
      else if (sRect.top <= trigger && sRect.bottom > 0) setActiveSection('services');
      else setActiveSection('top');
    };

    const t = setTimeout(checkSections, 150);
    window.addEventListener('scroll', checkSections, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', checkSections);
    };
  }, [pathname]);

  useEffect(() => {
    if (!NAVBAR_MEDIA) return;
    const handler = () => {
      const nowDesktop = NAVBAR_MEDIA.matches;
      setIsDesktop(nowDesktop);
      if (nowDesktop) setIsMobileMenuOpen(false); // close menu when resizing to desktop so scroll is never stuck
    };
    NAVBAR_MEDIA.addEventListener('change', handler);
    return () => NAVBAR_MEDIA.removeEventListener('change', handler);
  }, []);

  // Only lock body scroll when mobile menu is open on small screens (never on desktop)
  useEffect(() => {
    if (isMobileMenuOpen && !isDesktop) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen, isDesktop]);

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
      className={`fixed left-0 right-0 top-0 z-[100] w-full transition-all duration-300 ease-out ${
        isScrolled ? 'bg-transparent pt-3 px-4 sm:pt-4 sm:px-6' : 'bg-white dark:bg-neutral-900 pt-0 px-0'
      }`}
    >
      <div
        className={`relative mx-auto flex flex-col md:flex-row md:items-center transition-all duration-300 ease-out ${
          isScrolled
            ? `min-h-[52px] rounded-full bg-white/90 dark:bg-neutral-900/90 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl border border-neutral-200/80 dark:border-neutral-700 px-5 sm:px-6 ${isMobileMenuOpen ? 'w-full max-w-full rounded-2xl rounded-b-none' : 'max-w-2xl lg:max-w-3xl'}`
            : 'min-h-[72px] sm:min-h-[80px] w-full max-w-full rounded-none border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 sm:px-6 lg:px-10'
        }`}
      >
        <div className={`flex w-full max-w-7xl mx-auto items-center justify-between md:justify-center md:gap-1 ${isScrolled ? 'h-[52px]' : 'h-[72px] sm:h-[80px]'}`}>
          {isScrolled && !showLogoInFloating ? (
            <div className="w-10 h-10 md:w-28 shrink-0" aria-hidden />
          ) : (
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); goTo('/'); }}
              className="relative flex items-center shrink-0 py-2 rounded-lg transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2176ff] focus-visible:ring-offset-2"
              aria-label="Sira Technologies home"
            >
              <img src={logo} alt="Sira Technologies" className="h-9 sm:h-10 md:h-11 w-auto object-contain dark:brightness-0 dark:invert" />
            </a>
          )}
          <div className="hidden md:flex flex-1 md:justify-center items-center gap-0.5 lg:gap-1">
            <NavLink onClick={() => goTo('/')} active={isHome && activeSection === 'top'} isScrolled={isScrolled}>
              Home
            </NavLink>
            <NavLink onClick={() => goTo('/about')} active={isAbout} isScrolled={isScrolled}>
              About
            </NavLink>
            <NavLink onClick={() => goTo('/industries')} active={isIndustries} isScrolled={isScrolled}>
              Industries
            </NavLink>
            <NavLink onClick={() => scrollToSection('services-section')} active={isHome && activeSection === 'services'} isScrolled={isScrolled}>
              Services
            </NavLink>
            <NavLink onClick={() => scrollToSection('contact-section')} active={isHome && activeSection === 'contact'} isScrolled={isScrolled}>
              Contact
            </NavLink>
          </div>

          <div className="flex items-center justify-end gap-0.5 shrink-0 w-12 h-12 md:w-28">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-95 transition-all duration-200 -m-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2176ff] focus-visible:ring-offset-2"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Light mode' : 'Dark mode'}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 group min-w-[44px] min-h-[44px] items-center justify-center -m-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-out transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'group-hover:w-7'}`}
              />
              <div className={`w-5 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <div
                className={`w-6 h-0.5 bg-black dark:bg-white transition-all duration-300 ease-out transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:w-7'}`}
              />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <>
            <div className="md:hidden fixed inset-0 top-[72px] sm:top-[80px] bg-black/20 dark:bg-black/40 backdrop-blur-sm z-[-1]" aria-hidden onClick={() => setIsMobileMenuOpen(false)} />
            <div className="md:hidden w-full bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 shadow-xl pb-8 pt-5 px-4 overflow-y-auto max-h-[calc(100vh-5rem)] animate-in fade-in slide-in-from-top-2 duration-300 rounded-b-2xl">
            <div className="flex flex-col gap-1">
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
          </>
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
    className={`relative px-4 py-2.5 rounded-md font-bold tracking-[0.08em] uppercase group ${isScrolled ? 'text-[11px] sm:text-xs' : 'text-xs sm:text-sm'} ${
      active
        ? 'text-[#2176ff]'
        : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/80'
    } transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2176ff] focus-visible:ring-offset-2`}
  >
    {children}
    <span
      className={`absolute bottom-1 left-4 right-4 h-px bg-[#2176ff] transform origin-left transition-transform duration-300 ease-out rounded-full ${
        active ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
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
    className={`px-5 py-3.5 min-h-[48px] text-left text-sm font-bold tracking-[0.08em] uppercase rounded-xl transition-all duration-200 ${
      active
        ? 'bg-[#2176ff] text-white shadow-sm'
        : 'text-neutral-700 dark:text-neutral-300 bg-neutral-50 dark:bg-neutral-800/80 hover:bg-neutral-100 dark:hover:bg-neutral-700/80 active:scale-[0.99]'
    }`}
  >
    {children}
  </button>
);

export default Navbar;
