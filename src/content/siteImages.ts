/**
 * Site images: static imports so Vite bundles and hashes them for production.
 * All images from src/assets/ folder.
 */

// Home
import introJpg from '../assets/intro.jpg';
import goalsImageAvif from '../assets/goals-image.avif';
import aiJpg from '../assets/ai.jpg';
import dataJpg from '../assets/data.jpg';
import networkJpg from '../assets/network.jpg';
import introImageAvif from '../assets/intro-image.avif';
import theFutureJpg from '../assets/The Future.jpg';
import card1Avif from '../assets/card-1.avif';
import card3Avif from '../assets/card-3.avif';
import card4Avif from '../assets/card-4.avif';
import card5Avif from '../assets/card-5.avif';
import card6Avif from '../assets/card-6.avif';
// Services
import softwareJpg from '../assets/software.jpg';
import softwareS1Avif from '../assets/software-s1.avif';
import softwareS2Avif from '../assets/software-s2.avif';
import cloudComputingJpg from '../assets/cloud-computing.jpg';
import cloudS1Avif from '../assets/cloud-s1.avif';
import dataAnalyticsJpg from '../assets/data-analytics.jpg';
import dataS1Avif from '../assets/data-s1.avif';
import businessHeroAvif from '../assets/business-hero.avif';
import cyberHeroAvif from '../assets/cyber-hero.avif';
// Industries
import financeJpg from '../assets/finance.jpg';
import govtJpg from '../assets/govt.jpg';
import healthcareJpg from '../assets/healthcare.jpg';
import insuranceJpg from '../assets/insurance.jpg';
import retailJpg from '../assets/retail.jpg';
import telecomJpg from '../assets/telecom.jpg';
import manifactureJpg from '../assets/manifacture.jpg';
import logisticsJpg from '../assets/Logistics.jpg';

/** Single placeholder image for any fallback. */
export const PLACEHOLDER_IMAGE = introJpg;

/** All image ids and their URLs (bundled by Vite). */
export const DEFAULT_IMAGES: Record<string, string> = {
  'home.hero': introJpg,
  'home.hero.avatar1': goalsImageAvif,
  'home.hero.avatar2': goalsImageAvif,
  'home.hero.avatar3': goalsImageAvif,
  'home.hero.avatar4': goalsImageAvif,
  'home.slider1': aiJpg,
  'home.slider2': dataJpg,
  'home.slider3': networkJpg,
  'home.intro': introImageAvif,
  'home.diagonal': theFutureJpg,
  'home.service1': card1Avif,
  'home.service2': networkJpg,
  'home.service3': card3Avif,
  'home.service4': card4Avif,
  'home.service5': card5Avif,
  'home.service6': card6Avif,
  'about.goals': goalsImageAvif,
  'service.software-development.hero': softwareJpg,
  'service.software-development.section1': softwareS1Avif,
  'service.software-development.section2': softwareS2Avif,
  'service.cloud-architecture.hero': cloudComputingJpg,
  'service.cloud-architecture.section1': cloudS1Avif,
  'service.cloud-architecture.section2': cloudS1Avif,
  'service.data-analytics.hero': dataAnalyticsJpg,
  'service.data-analytics.section1': dataS1Avif,
  'service.data-analytics.section2': dataAnalyticsJpg,
  'service.business-intelligence.hero': businessHeroAvif,
  'service.business-intelligence.section1': businessHeroAvif,
  'service.cyber-security.hero': cyberHeroAvif,
  'service.cyber-security.section1': cyberHeroAvif,
  'service.cyber-security.section2': networkJpg,
  'service.networking-services.hero': networkJpg,
  'service.networking-services.section1': networkJpg,
  'industry.finance': financeJpg,
  'industry.government': govtJpg,
  'industry.healthcare': healthcareJpg,
  'industry.insurance': insuranceJpg,
  'industry.retail': retailJpg,
  'industry.telecom': telecomJpg,
  'industry.manufacturing': manifactureJpg,
  'industry.logistics': logisticsJpg,
};

export function getImageUrl(id: string): string {
  return DEFAULT_IMAGES[id] ?? '';
}

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
