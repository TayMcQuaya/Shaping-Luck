-- Shaping Luck Waitlist Subscribers Table
-- Run this ONCE in Supabase SQL Editor (https://app.supabase.com → SQL Editor)
-- This migration is idempotent - safe to run multiple times

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create the waitlist subscribers table
CREATE TABLE IF NOT EXISTS waitlist_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  company_name TEXT NOT NULL,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  unsubscribed_at TIMESTAMPTZ
);

-- Enable Row Level Security
ALTER TABLE waitlist_subscribers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (makes this idempotent)
DROP POLICY IF EXISTS "Allow public waitlist signups" ON waitlist_subscribers;
DROP POLICY IF EXISTS "Only authenticated can view waitlist" ON waitlist_subscribers;

-- Policy: Anonymous users can INSERT (sign up)
CREATE POLICY "Allow public waitlist signups"
  ON waitlist_subscribers FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Anonymous users CANNOT SELECT (no data exposure)
CREATE POLICY "Only authenticated can view waitlist"
  ON waitlist_subscribers FOR SELECT
  USING (false);

-- Performance indexes (IF NOT EXISTS makes these idempotent)
CREATE INDEX IF NOT EXISTS waitlist_subscribers_email_idx
  ON waitlist_subscribers(email);

CREATE INDEX IF NOT EXISTS waitlist_subscribers_created_at_idx
  ON waitlist_subscribers(created_at DESC);

-- Documentation
COMMENT ON TABLE waitlist_subscribers IS 'Email signups from website waitlist form';
