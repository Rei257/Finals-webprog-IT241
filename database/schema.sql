-- ============================================================
-- Cyberpunk Terminal Portfolio — Supabase Database Schema
-- Run this SQL in the Supabase SQL Editor (Dashboard > SQL)
-- ============================================================

-- ----------------------------------------------------------
-- TABLE: projects
-- Stores portfolio project entries displayed on the site.
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS projects (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title       VARCHAR(255)  NOT NULL,
  description TEXT          NOT NULL,
  tech_stack  TEXT[]        NOT NULL DEFAULT '{}',   -- e.g. {'Vue 3','Tailwind','NestJS'}
  link        VARCHAR(500),                          -- external URL (GitHub / live demo)
  image_url   VARCHAR(500),                          -- optional thumbnail URL
  created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

-- ----------------------------------------------------------
-- TABLE: messages
-- Stores contact-form submissions from visitors.
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS messages (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name        VARCHAR(255)  NOT NULL,
  email       VARCHAR(255)  NOT NULL,
  content     TEXT          NOT NULL,
  created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

-- ----------------------------------------------------------
-- Row-Level Security (RLS)
-- Enable RLS so data is protected on Supabase by default.
-- The backend uses the service_role key, which bypasses RLS.
-- ----------------------------------------------------------
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages  ENABLE ROW LEVEL SECURITY;

-- Allow anonymous reads on projects (public portfolio data)
CREATE POLICY "Allow public read on projects"
  ON projects FOR SELECT
  USING (true);

-- Allow anonymous inserts on messages (contact form submissions)
CREATE POLICY "Allow public insert on messages"
  ON messages FOR INSERT
  WITH CHECK (true);

-- Allow anonymous reads on messages (display comments)
CREATE POLICY "Allow public read on messages"
  ON messages FOR SELECT
  USING (true);

-- ----------------------------------------------------------
-- SEED DATA (Optional — remove for production)
-- ----------------------------------------------------------
INSERT INTO projects (title, description, tech_stack, link) VALUES
  (
    'Cyberpunk Portfolio',
    'A full-stack terminal-themed portfolio built with Vue 3, NestJS, and Supabase.',
    ARRAY['Vue 3', 'Tailwind CSS', 'NestJS', 'Supabase'],
    'https://github.com/johncarlgabriel/cyberpunk-portfolio'
  ),
  (
    'Task Tracker CLI',
    'A command-line task management tool with persistent storage and color-coded output.',
    ARRAY['Node.js', 'TypeScript', 'SQLite'],
    'https://github.com/johncarlgabriel/task-tracker-cli'
  ),
  (
    'Weather Dashboard',
    'Real-time weather dashboard consuming the OpenWeather API with animated chart visualizations.',
    ARRAY['React', 'Chart.js', 'OpenWeather API'],
    'https://github.com/johncarlgabriel/weather-dashboard'
  );
