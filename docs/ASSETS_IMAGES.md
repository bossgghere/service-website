# Site images – asset names and search terms

Put images in the **`public/assets/`** folder (create it if needed). Use the **Filename** below so the site can load them. You can use `.jpg` or `.png`.

Use the **Search for** column to find and download similar images (e.g. on Unsplash, Pexels, or your own assets).

---

## Home page

| # | Filename | Where it appears | Search for |
|---|----------|------------------|------------|
| 1 | `hero.jpg` | Hero section – large image behind “Strategic Infrastructure” (right side) | data center, server room, tech infrastructure, digital infrastructure |
| 2 | `hero-avatar1.jpg` | Hero – small circular team avatar 1 | professional headshot, team member portrait |
| 3 | `hero-avatar2.jpg` | Hero – small circular team avatar 2 | professional headshot, team member portrait |
| 4 | `hero-avatar3.jpg` | Hero – small circular team avatar 3 | professional headshot, team member portrait |
| 5 | `hero-avatar4.jpg` | Hero – small circular team avatar 4 | professional headshot, team member portrait |
| 6 | `slider1.jpg` | “TRUE INFRASTRUCTURE PLAYGROUND” – slide 1 | data center, servers, technology infrastructure |
| 7 | `slider2.jpg` | “TRUE INFRASTRUCTURE PLAYGROUND” – slide 2 | network cables, server rack, tech room |
| 8 | `slider3.jpg` | “TRUE INFRASTRUCTURE PLAYGROUND” – slide 3 | cloud computing, data analytics, digital |
| 9 | `intro.jpg` | “Unrivalled Engineering Quality” – left side image | engineering, teamwork, office technology |
| 10 | `diagonal.jpg` | “The Future of Data Engineering” – full-width background | earth from space, globe, world map, data global |
| 11 | `service-software.jpg` | Home – Software Development card | coding, software development, laptop code |
| 12 | `service-networking.jpg` | Home – Networking Services card | network cables, server room, networking |
| 13 | `service-cyber.jpg` | Home – Cyber Security card | cybersecurity, lock, security, firewall |
| 14 | `service-analytics.jpg` | Home – Data Analytics card | data analytics, charts, dashboard, big data |
| 15 | `service-bi.jpg` | Home – Business Intelligence card | business intelligence, reports, dashboard |
| 16 | `service-cloud.jpg` | Home – Cloud Architecture card | cloud computing, cloud servers, data center |

---

## About page

| # | Filename | Where it appears | Search for |
|---|----------|------------------|------------|
| 17 | `about-goals.jpg` | About – “Goals” / team section | team collaboration, meeting, office goals |

---

## Service detail pages (hero = top banner; section = in-page image)

| # | Filename | Where it appears | Search for |
|---|----------|------------------|------------|
| 18 | `service-software-development-hero.jpg` | Software Development page – hero | software development, coding, computer monitor |
| 19 | `service-software-development-section1.jpg` | Software Development – section image 1 | development process, code review, agile |
| 20 | `service-software-development-section2.jpg` | Software Development – section image 2 | requirements, planning, team meeting |
| 21 | `service-cloud-architecture-hero.jpg` | Cloud Architecture page – hero | cloud servers, data center, cloud computing |
| 22 | `service-cloud-architecture-section1.jpg` | Cloud Architecture – section 1 | cloud platforms, AWS, Azure, GCP |
| 23 | `service-cloud-architecture-section2.jpg` | Cloud Architecture – section 2 | infrastructure, servers, network |
| 24 | `service-data-analytics-hero.jpg` | Data Analytics page – hero | data analytics, charts, statistics |
| 25 | `service-data-analytics-section1.jpg` | Data Analytics – section 1 | data analysts, dashboard |
| 26 | `service-data-analytics-section2.jpg` | Data Analytics – section 2 | statistical analysis, data science |
| 27 | `service-business-intelligence-hero.jpg` | Business Intelligence page – hero | business intelligence, reports, BI dashboard |
| 28 | `service-business-intelligence-section1.jpg` | Business Intelligence – section 1 | analytics, KPIs, reporting |
| 29 | `service-cyber-security-hero.jpg` | Cyber Security page – hero | cybersecurity, lock, digital security |
| 30 | `service-cyber-security-section1.jpg` | Cyber Security – section 1 | firewall, network security |
| 31 | `service-cyber-security-section2.jpg` | Cyber Security – section 2 | security monitoring, SOC |
| 32 | `service-networking-services-hero.jpg` | Networking Services page – hero | networking, cables, server room |
| 33 | `service-networking-services-section1.jpg` | Networking Services – section 1 | WAN, network infrastructure |

---

## Already in assets (no need to replace)

- **`logo.png`** – Used in header, hero, and footer. Keep this file in your `assets/` folder (or `public/assets/` if you move to public).

---

## Quick checklist

- [ ] Create folder: `public/assets/`
- [ ] Download or add images with the **exact filenames** above (e.g. `hero.jpg`, `slider1.jpg`)
- [ ] After adding files, the app can be updated to load from `/assets/hero.jpg` etc. (or use the Admin page to paste URLs if you host images elsewhere)

---

## Image size tips

- **Hero / diagonal / service heroes:** at least 1200–2000px wide (landscape).
- **Slider:** same as hero; landscape works best.
- **Avatars:** square, ~200×200px or larger (they’re shown small and circular).
- **Service cards (home):** at least 800px wide.
- **Section images:** at least 1200px wide.

If you use different filenames, you can still point the site to them via **Admin → Images** by pasting the full URL (e.g. `https://yoursite.com/assets/your-name.jpg` or a CDN link).
