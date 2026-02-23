# Cyberpunk Terminal — Personal Portfolio

> A full-stack personal portfolio with a **Cyberpunk Terminal** aesthetic.  
> Built with **Vue 3 + Tailwind CSS** (frontend) and **NestJS + Supabase** (backend), deployed on **Vercel**.

---

## Monorepo Structure

```
/
├── frontend/          # Vue 3 (Vite + Composition API + Tailwind CSS)
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── views/
│   │   ├── services/
│   │   ├── App.vue
│   │   └── main.js
│   ├── public/
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vite.config.js
│   └── package.json
│
├── backend/           # NestJS (REST API — Vercel Serverless)
│   ├── src/
│   │   ├── profile/
│   │   ├── contact/
│   │   ├── supabase/
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── api/
│   │   └── index.ts       # Vercel serverless entry point
│   ├── vercel.json
│   ├── tsconfig.json
│   └── package.json
│
├── database/
│   └── schema.sql          # Supabase SQL migration
│
└── README.md
```

---

## Tech Stack

| Layer      | Technology                                      |
|------------|--------------------------------------------------|
| Frontend   | Vue 3 (Composition API), Vite, Tailwind CSS, Lucide-Vue-Next |
| Backend    | NestJS (REST), `@supabase/supabase-js`          |
| Database   | Supabase (PostgreSQL)                            |
| Deployment | Vercel (Frontend + Serverless Functions)         |

---

## Local Development

### Prerequisites
- Node.js >= 18
- npm >= 9
- A Supabase project (free tier works)

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run start:dev
```

### Environment Variables

Create `.env` files in both `frontend/` and `backend/`:

**backend/.env**
```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key
```

**frontend/.env**
```
VITE_API_BASE_URL=http://localhost:3000
```

---

## Deployment Guide (Vercel)

See the `DEPLOYMENT.md` file for a full step-by-step guide on deploying to Vercel from GitHub.

---

## License

This project is submitted as a final examination for **IT241 — Web Programming**.  
(c) 2026 John Carl Gabriel — Asia Pacific College. All rights reserved.