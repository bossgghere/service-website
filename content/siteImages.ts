/**
 * Site images: one flat map of id → URL.
 * All images from project assets/ folder only.
 */

/** Resolve asset in project assets folder (Vite will bundle and hash). */
function asset(path: string): string {
  return new URL(path, import.meta.url).href;
}

/** Single placeholder image (local) for any fallback. */
export const PLACEHOLDER_IMAGE = asset('../assets/intro.jpg');

/** All image ids and their URLs. Local assets only. */
export const DEFAULT_IMAGES: Record<string, string> = {
  // Home — Hero
  'home.hero': asset('../assets/intro.jpg'),
  'home.hero.avatar1': asset('../assets/goals-image.avif'),
  'home.hero.avatar2': asset('../assets/goals-image.avif'),
  'home.hero.avatar3': asset('../assets/goals-image.avif'),
  'home.hero.avatar4': asset('../assets/goals-image.avif'),
  // Home — Slider (TRUE INFRASTRUCTURE PLAYGROUND)
  'home.slider1': asset('../assets/ai.jpg'),
  'home.slider2': asset('../assets/data.jpg'),
  'home.slider3': asset('../assets/network.jpg'),
  // Home — Intro & Diagonal
  'home.intro': asset('../assets/intro-image.avif'),
  'home.diagonal': asset('../assets/The Future.jpg'),
  // Home — Service cards (card-2 = Networking → network.jpg)
  'home.service1': asset('../assets/card-1.avif'),
  'home.service2': asset('../assets/network.jpg'),
  'home.service3': asset('../assets/card-3.avif'),
  'home.service4': asset('../assets/card-4.avif'),
  'home.service5': asset('../assets/card-5.avif'),
  'home.service6': asset('../assets/card-6.avif'),
  // About
  'about.goals': asset('../assets/goals-image.avif'),
  // Service pages — Software Development
  'service.software-development.hero': asset('../assets/software.jpg'),
  'service.software-development.section1': asset('../assets/software-s1.avif'),
  'service.software-development.section2': asset('../assets/software-s2.avif'),
  // Cloud Architecture
  'service.cloud-architecture.hero': asset('../assets/cloud-computing.jpg'),
  'service.cloud-architecture.section1': asset('../assets/cloud-s1.avif'),
  'service.cloud-architecture.section2': asset('../assets/cloud-s1.avif'),
  // Data Analytics (data-analytics.jpg + data-s1)
  'service.data-analytics.hero': asset('../assets/data-analytics.jpg'),
  'service.data-analytics.section1': asset('../assets/data-s1.avif'),
  'service.data-analytics.section2': asset('../assets/data-analytics.jpg'),
  // Business Intelligence
  'service.business-intelligence.hero': asset('../assets/business-hero.avif'),
  'service.business-intelligence.section1': asset('../assets/business-hero.avif'),
  // Cyber Security
  'service.cyber-security.hero': asset('../assets/cyber-hero.avif'),
  'service.cyber-security.section1': asset('../assets/cyber-hero.avif'),
  'service.cyber-security.section2': asset('../assets/network.jpg'),
  // Networking Services
  'service.networking-services.hero': asset('../assets/network.jpg'),
  'service.networking-services.section1': asset('../assets/network.jpg'),
  // Industries page
  'industry.finance': asset('../assets/finance.jpg'),
  'industry.government': asset('../assets/govt.jpg'),
  'industry.healthcare': asset('../assets/healthcare.jpg'),
  'industry.insurance': asset('../assets/insurance.jpg'),
  'industry.retail': asset('../assets/retail.jpg'),
  'industry.telecom': asset('../assets/telecom.jpg'),
  'industry.manufacturing': asset('../assets/manifacture.jpg'),
  'industry.logistics': asset('../assets/Logistics.jpg'),
};

/** Current URL for an image. */
export function getImageUrl(id: string): string {
  return DEFAULT_IMAGES[id] ?? '';
}

/** Nested shape for components. */
export function getMergedImages() {
  const get = (id: string) => DEFAULT_IMAGES[id] ?? '';

  return {
    home: {
      hero: get('home.hero'),
      heroAvatars: [get('home.hero.avatar1'), get('home.hero.avatar2'), get('home.hero.avatar3'), get('home.hero.avatar4')],
      slider: [get('home.slider1'), get('home.slider2'), get('home.slider3')],
      intro: get('home.intro'),
      diagonal: get('home.diagonal'),
      serviceCards: [get('home.service1'), get('home.service2'), get('home.service3'), get('home.service4'), get('home.service5'), get('home.service6')],
    },
    about: { goals: get('about.goals') },
    services: {
      'software-development': { hero: get('service.software-development.hero'), sectionImages: [get('service.software-development.section1'), get('service.software-development.section2')] },
      'cloud-architecture': { hero: get('service.cloud-architecture.hero'), sectionImages: [get('service.cloud-architecture.section1'), get('service.cloud-architecture.section2')] },
      'data-analytics': { hero: get('service.data-analytics.hero'), sectionImages: [get('service.data-analytics.section1'), get('service.data-analytics.section2')] },
      'business-intelligence': { hero: get('service.business-intelligence.hero'), sectionImages: [get('service.business-intelligence.section1')] },
      'cyber-security': { hero: get('service.cyber-security.hero'), sectionImages: [get('service.cyber-security.section1'), get('service.cyber-security.section2')] },
      'networking-services': { hero: get('service.networking-services.hero'), sectionImages: [get('service.networking-services.section1')] },
    },
  };
}
