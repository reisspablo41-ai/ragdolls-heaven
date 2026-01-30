-- Drop the old constraint
ALTER TABLE public.kittens
DROP CONSTRAINT kittens_gender_check;

-- Add the new constraint with 'Mixed'
ALTER TABLE public.kittens
ADD CONSTRAINT kittens_gender_check
CHECK (gender IN ('Male', 'Female', 'Mixed'));
