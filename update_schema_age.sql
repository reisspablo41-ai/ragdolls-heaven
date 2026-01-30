-- Drop the birth_date column
ALTER TABLE kittens DROP COLUMN birth_date;

-- Add the age_weeks column
ALTER TABLE kittens ADD COLUMN age_weeks integer DEFAULT 0;
