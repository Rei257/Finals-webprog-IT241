# Deployment Guide — Cyberpunk Terminal Portfolio

> Step-by-step instructions for deploying the frontend (Vue 3) and backend (NestJS)
> from GitHub to **Vercel**, with Supabase environment variables.

---

## Prerequisites

1. A **GitHub** account with this repository pushed.
2. A **Vercel** account (free tier: [vercel.com](https://vercel.com)).
3. A **Supabase** project (free tier: [supabase.com](https://supabase.com)).
4. The SQL schema from `database/schema.sql` already executed in Supabase's SQL Editor.

---

## Step 1 — Set Up Supabase

1. Go to [app.supabase.com](https://app.supabase.com) and create a new project.
2. Navigate to **SQL Editor** and paste the contents of `database/schema.sql`. Click **Run**.
3. Navigate to **Settings → API** and copy:
   - **Project URL** → This is your `SUPABASE_URL`
   - **anon / public key** → This is your `SUPABASE_KEY`

---

## Step 2 — Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Cyberpunk Terminal Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cyberpunk-portfolio.git
git push -u origin main
```

---

## Step 3 — Deploy the Frontend to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and click **Import Git Repository**.
2. Select your GitHub repository.
3. Configure the project:
   - **Framework Preset**: Vue.js
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add **Environment Variables**:
   | Key                  | Value                                    |
   |----------------------|------------------------------------------|
   | `VITE_API_BASE_URL`  | `https://your-backend-deployment.vercel.app` |
5. Click **Deploy**.

---

## Step 4 — Deploy the Backend to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) again and import the **same repository**.
2. Configure the project:
   - **Root Directory**: `backend`
   - **Build Command**: `npm run build`
   - **Output Directory**: (leave empty — `vercel.json` handles routing)
3. Add **Environment Variables**:
   | Key              | Value                                        |
   |------------------|----------------------------------------------|
   | `SUPABASE_URL`   | `https://your-project-id.supabase.co`       |
   | `SUPABASE_KEY`   | `your-supabase-anon-or-service-role-key`     |
4. Click **Deploy**.

> **Note**: The `backend/vercel.json` file is already configured to route all
> requests to the NestJS compiled entry point (`dist/main.js`).

---

## Step 5 — Update Frontend API URL

After the backend is deployed, copy its production URL (e.g., `https://cyberpunk-api.vercel.app`).

1. Go to the **Frontend** project on Vercel → **Settings → Environment Variables**.
2. Update `VITE_API_BASE_URL` to the backend's production URL.
3. **Redeploy** the frontend (Vercel Dashboard → Deployments → Redeploy).

---

## Step 6 — Verify

1. Open the frontend production URL in a browser.
2. Confirm that:
   - The hero section loads with CRT scanline effects.
   - The **Projects** section fetches and displays data from Supabase.
   - The **Contact** form submits successfully (check Supabase Table Editor → `messages`).

---

## Environment Variables Summary

### Backend (NestJS on Vercel)

| Variable         | Description                          | Example                                |
|------------------|--------------------------------------|----------------------------------------|
| `SUPABASE_URL`   | Supabase project API URL             | `https://abcdefg.supabase.co`         |
| `SUPABASE_KEY`   | Supabase anon or service-role key    | `eyJhbGciOiJIUz...`                   |

### Frontend (Vue 3 on Vercel)

| Variable             | Description                      | Example                                    |
|----------------------|----------------------------------|--------------------------------------------|
| `VITE_API_BASE_URL`  | Backend API base URL             | `https://cyberpunk-api.vercel.app`        |

---

## Mapping Environment Variables in Vercel Dashboard

1. Open your project on the [Vercel Dashboard](https://vercel.com/dashboard).
2. Go to **Settings** → **Environment Variables**.
3. Click **Add New** for each variable.
4. Choose the environments: **Production**, **Preview**, and optionally **Development**.
5. Paste the key and value, then **Save**.

> Variables prefixed with `VITE_` are embedded at build time in the Vue frontend.
> Backend variables are available as `process.env.*` at runtime in serverless functions.

---

## Troubleshooting

| Issue                            | Solution                                                        |
|----------------------------------|-----------------------------------------------------------------|
| Projects not loading             | Check `SUPABASE_URL` and `SUPABASE_KEY` in backend env vars.  |
| CORS errors                      | Ensure the backend's `app.enableCors()` allows the frontend origin. |
| Contact form 500 error           | Verify the `messages` table exists and RLS policies are applied.|
| Build fails on Vercel            | Ensure Root Directory is set correctly (`frontend` or `backend`). |

---

*Guide written for IT241 — Web Programming Finals, Asia Pacific College, 2026.*
