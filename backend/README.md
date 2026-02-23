# Backend — Cyberpunk Terminal Portfolio API

> NestJS REST API with Supabase (PostgreSQL), configured for Vercel Serverless

## Setup

```bash
npm install
npm run start:dev
```

## Build

```bash
npm run build
```

## Environment Variables

Create a `.env` file:

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-or-service-role-key
```

## API Endpoints

| Method | Route       | Description                       |
|--------|-------------|-----------------------------------|
| GET    | `/projects` | Retrieve all portfolio projects   |
| POST   | `/contact`  | Submit a contact form message     |

### POST /contact — Request Body

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "content": "Hello, I'd like to collaborate!"
}
```

## File Structure

```
backend/
├── api/
│   └── index.ts            # Vercel serverless entry point
├── src/
│   ├── supabase/
│   │   ├── supabase.module.ts
│   │   └── supabase.service.ts    # Supabase client singleton
│   ├── profile/
│   │   ├── profile.module.ts
│   │   ├── profile.controller.ts  # GET /projects
│   │   └── profile.service.ts
│   ├── contact/
│   │   ├── contact.module.ts
│   │   ├── contact.controller.ts  # POST /contact
│   │   ├── contact.service.ts
│   │   └── dto/
│   │       └── create-message.dto.ts  # Validation DTO
│   ├── app.module.ts       # Root module
│   └── main.ts             # Application bootstrap
├── vercel.json             # Vercel routing config
├── nest-cli.json           # Nest CLI config
├── tsconfig.json           # TypeScript config
├── .env.example            # Environment variable template
└── package.json
```

## Deployment

See `DEPLOYMENT.md` in the project root for Vercel deployment instructions.
