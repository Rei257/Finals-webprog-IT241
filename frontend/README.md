# Frontend — Cyberpunk Terminal Portfolio

> Vue 3 + Vite + Tailwind CSS + Lucide-Vue-Next

## Setup

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Environment Variables

Create a `.env` file:

```
VITE_API_BASE_URL=http://localhost:3000
```

## File Structure

```
frontend/
├── public/                # Static assets (favicon, images)
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── main.css       # Tailwind directives + CRT overlay + neon utilities
│   ├── components/
│   │   ├── NavBar.vue             # Fixed navigation with hamburger menu
│   │   ├── HeroSection.vue        # Full-viewport hero with typewriter animation
│   │   ├── AboutSection.vue       # Bio + tech stack tags + stats
│   │   ├── SectionHeader.vue      # Reusable terminal-prompt heading
│   │   ├── ProjectsSection.vue    # Fetches projects from API
│   │   ├── ProjectCard.vue        # 45° clipped corners + neon glow
│   │   ├── ContactSection.vue     # Contact info + form wrapper
│   │   ├── ContactForm.vue        # v-model form → POST /contact
│   │   └── FooterBar.vue          # Copyright + status bar
│   ├── services/
│   │   └── api.js          # Axios HTTP client
│   ├── App.vue             # Root component with CRT overlay
│   └── main.js             # Vue app entry point
├── index.html              # HTML shell
├── tailwind.config.js      # Cyberpunk color palette + custom animations
├── postcss.config.js       # PostCSS with Tailwind plugin
├── vite.config.js          # Vite config with API proxy
├── .env.example            # Environment variable template
└── package.json
```
