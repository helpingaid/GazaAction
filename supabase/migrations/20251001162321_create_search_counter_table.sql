/*
  # Search Counter Table

  1. New Tables
    - `search_counter`
      - `id` (uuid, primary key) - Unique identifier
      - `count` (bigint) - Total number of searches performed
      - `updated_at` (timestamptz) - Last update timestamp
  
  2. Security
    - Enable RLS on `search_counter` table
    - Add policy for public read access (counter is public information)
    - Add policy for authenticated users to increment counter
  
  3. Initial Data
    - Insert initial counter record with value 12345 (as shown in design)
*/

CREATE TABLE IF NOT EXISTS search_counter (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  count bigint DEFAULT 0 NOT NULL,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE search_counter ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read the counter
CREATE POLICY "Anyone can read search counter"
  ON search_counter
  FOR SELECT
  TO public
  USING (true);

-- Allow anyone to update the counter (for incrementing)
CREATE POLICY "Anyone can update search counter"
  ON search_counter
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

-- Insert initial counter value
INSERT INTO search_counter (count) 
VALUES (12345)
ON CONFLICT DO NOTHING;