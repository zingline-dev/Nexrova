-- ============================================================
-- NEXROVA — InsForge Database Schema
-- ============================================================

-- WAITLIST TABLE: Hero section email signups
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  source TEXT DEFAULT 'hero_form',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- CONTACT MESSAGES TABLE: Contact page form submissions
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- JOB APPLICATIONS TABLE: Career page applications
CREATE TABLE IF NOT EXISTS job_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  role TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to INSERT into waitlist (public signup)
CREATE POLICY "Allow public waitlist signup"
  ON waitlist FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anyone to INSERT contact messages (public form)
CREATE POLICY "Allow public contact submission"
  ON contact_messages FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anyone to INSERT job applications (public form)
CREATE POLICY "Allow public job application"
  ON job_applications FOR INSERT
  TO anon
  WITH CHECK (true);
