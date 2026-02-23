# Database — Supabase Schema

> SQL migration file for the Cyberpunk Terminal Portfolio.
> Execute this in the **Supabase SQL Editor** (Dashboard → SQL).

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

## How to Run

1. Open your Supabase project dashboard.
2. Navigate to **SQL Editor**.
3. Paste the contents of `schema.sql`.
4. Click **Run**.
