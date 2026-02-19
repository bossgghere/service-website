<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1RuKDK9yKYJA3X9jfPgTA7CrqlwouOgHr

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
## Project structure (deployment-ready)

```
services-site/
├── public/           # Static files (favicon, logo for OG)
├── src/
│   ├── main.tsx     # Entry point
│   ├── App.tsx      # Root component & routes
│   ├── index.css    # Global styles
│   ├── assets/      # Images (bundled by Vite)
│   ├── components/  # React components
│   ├── content/     # Data/config (e.g. siteImages.ts)
│   └── pages/       # Page components
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Build & deploy

1. **Install:** `npm install`
2. **Build:** `npm run build` → output in `dist/`
3. **Preview locally:** `npm run preview`
4. **Deploy:** Upload the **entire** `dist/` folder (including `dist/assets/`) to your host. Use **SPA routing**: redirect all routes to `index.html`.  
   - If the site is served from a **subpath** (e.g. `https://example.com/my-app/`), create `.env.production` with `VITE_BASE_PATH=/my-app/` and rebuild.
