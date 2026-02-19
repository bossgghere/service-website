import React, { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'sira-technologies-cookie-consent';

type ConsentState = 'accepted' | 'rejected' | 'custom' | null;

interface CookiePreferences {
  state: ConsentState;
  analytics: boolean;
  performance: boolean;
}

const defaultPreferences: CookiePreferences = {
  state: null,
  analytics: false,
  performance: false,
};

function loadPreferences(): CookiePreferences {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultPreferences;
    const parsed = JSON.parse(raw) as Partial<CookiePreferences>;
    return { ...defaultPreferences, ...parsed };
  } catch {
    return defaultPreferences;
  }
}

function savePreferences(prefs: CookiePreferences) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch (_) {}
}

const CATEGORIES = [
  {
    id: 'necessary' as const,
    title: 'Necessary',
    alwaysActive: true,
    description:
      'Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.',
  },
  {
    id: 'analytics' as const,
    title: 'Analytics',
    alwaysActive: false,
    description:
      'Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.',
  },
  {
    id: 'performance' as const,
    title: 'Performance',
    alwaysActive: false,
    description:
      'Performance cookies are used to understand and analyze the key performance indexes of the website which helps in delivering a better user experience for the visitors.',
  },
] as const;

const CookieConsent: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const prefs = loadPreferences();
    setPreferences(prefs);
    if (prefs.state === null) {
      setIsFirstVisit(true);
      setModalOpen(true);
    }
  }, []);

  useEffect(() => {
    if (modalOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
    } else {
      const y = scrollYRef.current;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      window.scrollTo(0, y);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
    };
  }, [modalOpen]);

  const setCategory = (id: 'analytics' | 'performance', value: boolean) => {
    setPreferences((p) => ({ ...p, [id]: value }));
  };

  const acceptAll = () => {
    const next: CookiePreferences = {
      state: 'accepted',
      analytics: true,
      performance: true,
    };
    savePreferences(next);
    setPreferences(next);
    setIsFirstVisit(false);
    setModalOpen(false);
  };

  const rejectAll = () => {
    const next: CookiePreferences = {
      state: 'rejected',
      analytics: false,
      performance: false,
    };
    savePreferences(next);
    setPreferences(next);
    setIsFirstVisit(false);
    setModalOpen(false);
  };

  const saveCustom = () => {
    const next: CookiePreferences = {
      ...preferences,
      state: 'custom',
    };
    savePreferences(next);
    setPreferences(next);
    setIsFirstVisit(false);
    setModalOpen(false);
  };

  const closeModal = () => {
    if (!isFirstVisit) setModalOpen(false);
  };

  return (
    <>
      {/* Floating cookie button - left side */}
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="fixed left-4 bottom-4 sm:left-6 sm:bottom-6 z-[199] w-12 h-12 flex items-center justify-center rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 shadow-lg text-neutral-600 dark:text-neutral-400 hover:text-[#2176ff] hover:border-[#2176ff]/50 transition-colors"
        aria-label="Cookie preferences"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22-2.98 1-5.77-1.59-5.19-4.56C6.95.71 2 6.58 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01zM8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15zm2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      </button>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 dark:bg-black/70 overflow-y-auto overscroll-none touch-none animate-in fade-in duration-300"
          style={{ touchAction: 'none' }}
          role="dialog"
          aria-modal="true"
          aria-label="Cookie consent"
        >
          <div
            className="relative w-full max-w-2xl my-8 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm border border-neutral-200/80 dark:border-neutral-700/80 shadow-xl rounded-none p-6 sm:p-8 animate-in fade-in slide-in-from-top-2 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {!isFirstVisit && (
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}

            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-black dark:text-white mb-4 pr-10">
              Customize Consent Preferences
            </h2>

            <div className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-6">
              <p>
                We use cookies to help you navigate and use the site. Details are under each category below.
              </p>
            </div>

            <div className="space-y-4 mb-8 max-h-[50vh] overflow-y-auto pr-2">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="pb-4 border-b border-neutral-200 dark:border-neutral-700 last:border-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-sm font-black uppercase tracking-wide text-black dark:text-white">
                        {cat.title}
                        {cat.alwaysActive && (
                          <span className="ml-2 text-xs font-normal normal-case text-neutral-500">Always Active</span>
                        )}
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                    {!cat.alwaysActive && cat.id !== 'necessary' && (
                      <label className="relative shrink-0 inline-flex w-11 h-6 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences[cat.id]}
                          onChange={(e) => setCategory(cat.id, e.target.checked)}
                          className="sr-only peer"
                        />
                        <span className="block w-11 h-6 rounded-full bg-neutral-300 dark:bg-neutral-600 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#2176ff] peer-focus-visible:ring-offset-2 peer-checked:bg-[#2176ff]" />
                        <span className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ease-out peer-checked:translate-x-5 pointer-events-none" />
                      </label>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 justify-end">
              <button
                type="button"
                onClick={rejectAll}
                className="px-5 py-3 min-h-[44px] border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 text-xs font-black uppercase tracking-[0.25em] hover:border-neutral-500 dark:hover:border-neutral-500 transition-colors"
              >
                Reject All
              </button>
              <button
                type="button"
                onClick={saveCustom}
                className="px-5 py-3 min-h-[44px] border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 text-xs font-black uppercase tracking-[0.25em] hover:border-[#2176ff] hover:border-2 hover:text-[#2176ff] transition-colors"
              >
                Save Preferences
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-5 py-3 min-h-[44px] bg-black dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-[0.25em] hover:bg-[#2176ff] dark:hover:bg-[#2176ff] dark:hover:text-white transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
