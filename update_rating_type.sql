-- Update testimonials rating column to support decimals
ALTER TABLE public.testimonials 
ALTER COLUMN rating TYPE numeric;
