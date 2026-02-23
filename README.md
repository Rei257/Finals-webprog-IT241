# Cyberpunk Terminal — Personal Portfolio


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

## Tables

### `projects`
| Column       | Type           | Description                     |
|--------------|----------------|---------------------------------|
| `id`         | UUID (PK)      | Auto-generated primary key      |
| `title`      | VARCHAR(255)   | Project title                   |
| `description`| TEXT           | Project description             |
| `tech_stack` | TEXT[]         | Array of technology names       |
| `link`       | VARCHAR(500)   | External URL (GitHub / demo)    |
| `image_url`  | VARCHAR(500)   | Optional thumbnail URL          |
| `created_at` | TIMESTAMPTZ    | Auto-set creation timestamp     |

### `messages`
| Column       | Type           | Description                     |
|--------------|----------------|---------------------------------|
| `id`         | UUID (PK)      | Auto-generated primary key      |
| `name`       | VARCHAR(255)   | Sender's name                   |
| `email`      | VARCHAR(255)   | Sender's email                  |
| `content`    | TEXT           | Message body                    |
| `created_at` | TIMESTAMPTZ    | Auto-set creation timestamp     |


## License

This project is submitted as a final examination for **IT241 — Web Programming**.  
(c) 2026 John Carl Gabriel — Asia Pacific College. All rights reserved.