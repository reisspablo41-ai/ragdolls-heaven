-- 1. Update column type to support decimal ratings
ALTER TABLE public.testimonials 
ALTER COLUMN rating TYPE numeric;

-- 2. Clear existing testimonials
DELETE FROM public.testimonials;

-- 3. Insert new diverse testimonials
INSERT INTO public.testimonials (client_name, location, content, rating, approved, created_at)
VALUES 
('Alice B.', 'New York, NY', 'Our experience with Ragdoll Heaven was exceptional. From the first inquiry to the day we brought Luna home, they were professional and caring. Luna is the most affectionate cat we''ve ever met!', 5.0, true, NOW() - INTERVAL '45 days'),
('Bob C.', 'Los Angeles, CA', 'Best breeder I''ve ever dealt with. The genetic health guarantee gave us so much peace of mind. Our little Milo is perfectly healthy and so well-socialized.', 5.0, true, NOW() - INTERVAL '12 days'),
('Charlie D.', 'Chicago, IL', 'I''ve had cats all my life, but nothing compares to the temperament of a Ragdoll from this cattery. Truly floppier and sweeter than I could have imagined.', 5.0, true, NOW() - INTERVAL '67 days'),
('Diana E.', 'Houston, TX', 'We flew across the country to pick up our kitten, and it was worth every mile. The care instructions provided were incredibly detailed and helpful.', 4.8, true, NOW() - INTERVAL '89 days'),
('Evan F.', 'Phoenix, AZ', 'Simply amazing. The kitten''s coat is like silk, and his eyes are like sapphires. He''s the star of our household!', 5.0, true, NOW() - INTERVAL '5 days'),
('Fiona G.', 'Philadelphia, PA', 'If you''re looking for a Ragdoll, look no further. This is the place. Honest, transparent, and clearly loves their animals.', 4.4, true, NOW() - INTERVAL '120 days'),
('George H.', 'San Antonio, TX', 'The socialization of these kittens is remarkable. Our new baby integrated into our multi-pet household in less than 48 hours.', 4.9, true, NOW() - INTERVAL '34 days'),
('Hannah I.', 'San Diego, CA', 'We were on the waitlist for six months, and the communication throughout was top-notch. It was absolutely worth the wait for such a high-quality kitten.', 4.7, true, NOW() - INTERVAL '150 days'),
('Ian J.', 'Dallas, TX', 'Every time someone visits, they can't believe how gentle and patient our Ragdoll is with our children. A perfect family pet.', 5.0, true, NOW() - INTERVAL '10 days'),
('Julia K.', 'San Jose, CA', 'High-end breeder for a high-end experience. You get what you pay for: a healthy, gorgeous, and well-adjusted companion.', 4.6, true, NOW() - INTERVAL '56 days'),
('Kevin L.', 'New York, NY', 'We love our new addition! She''s so playful yet so calm when it's time to cuddle. Ragdoll Heaven really knows what they''re doing.', 4.5, true, NOW() - INTERVAL '23 days'),
('Liam M.', 'Los Angeles, CA', 'The dedication to the breed's health and standards is evident in everything they do. I wouldn't go anywhere else.', 5.0, true, NOW() - INTERVAL '78 days'),
('Mia N.', 'Chicago, IL', 'A truly magical addition to our home. The personality of these kittens is unlike any other breed I''ve encountered.', 4.8, true, NOW() - INTERVAL '92 days'),
('Noah O.', 'Houston, TX', 'From start to finish, the process was seamless. The breeder's knowledge of Ragdoll genetics is truly impressive.', 4.9, true, NOW() - INTERVAL '11 days'),
('Olivia P.', 'Phoenix, AZ', 'We couldn''t be happier. Our new kitten is not just a pet, but a true family member. Thank you, Ragdoll Heaven!', 5.0, true, NOW() - INTERVAL '4 days'),
('Peter Q.', 'Philadelphia, PA', 'The attention to detail in the care package we received was beyond our expectations. Highly professional cattery.', 4.7, true, NOW() - INTERVAL '63 days'),
('Quinn R.', 'San Antonio, TX', 'Our kitten is so well-behaved and litter-trained. It shows how much work goes into raising them properly.', 4.6, true, NOW() - INTERVAL '81 days'),
('Rachel S.', 'San Diego, CA', 'The beauty of these cats is stunning, but their temperament is what truly makes them special. A perfect 10/10.', 5.0, true, NOW() - INTERVAL '19 days'),
('Sam T.', 'Dallas, TX', 'We appreciated the ongoing support even after we brought our kitten home. They really care about where their cats go.', 4.4, true, NOW() - INTERVAL '105 days'),
('Tina U.', 'San Jose, CA', 'Looking forward to getting a second kitten from here in the future. Best Ragdolls in the country, hands down.', 5.0, true, NOW() - INTERVAL '2 days'),
('Alice V.', 'New York, NY', 'Our veterinarian was impressed by the health certificate and the overall condition of the kitten. Top-tier quality.', 4.9, true, NOW() - INTERVAL '31 days'),
('Bob W.', 'Los Angeles, CA', 'The floppy nature of these cats is no myth. Our kitten is essentially a living plush toy. So much love!', 5.0, true, NOW() - INTERVAL '8 days'),
('Charlie X.', 'Chicago, IL', 'I recommend Ragdoll Heaven to all my friends. If you want a healthy, happy cat, this is the only place to go.', 4.5, true, NOW() - INTERVAL '47 days'),
('Diana Y.', 'Houston, TX', 'Absolutely delighted with our experience. The transition was smooth, and our kitten is absolutely thriving.', 4.8, true, NOW() - INTERVAL '15 days'),
('Evan Z.', 'Phoenix, AZ', 'The level of care and expertise shown by this breeder is unmatched. Our kitten is healthy, happy, and so charming.', 5.0, true, NOW() - INTERVAL '7 days'),
('Fiona A.', 'Philadelphia, PA', 'We were looking for a specific color pattern, and the breeder helped us find the perfect match. Excellent service.', 4.6, true, NOW() - INTERVAL '55 days'),
('George B.', 'San Antonio, TX', 'It''s rare to find a breeder who cares so much about the kittens after they leave. We felt supported every step of the way.', 4.9, true, NOW() - INTERVAL '28 days'),
('Hannah C.', 'San Diego, CA', 'Our new baby is a total purr-machine! So well-adjusted and friendly from day one. Highly recommend this cattery.', 4.7, true, NOW() - INTERVAL '12 days'),
('Ian D.', 'Dallas, TX', 'The documentation and health records provided were thorough and professional. A very trustworthy breeder.', 4.5, true, NOW() - INTERVAL '66 days'),
('Julia E.', 'San Jose, CA', 'We love how ''floppy'' our Ragdoll is. He truly lives up to the breed''s reputation. A perfect companion.', 5.0, true, NOW() - INTERVAL '3 days'),
('Kevin F.', 'New York, NY', 'The facility was clean and the cats were clearly well-treated. It made us very comfortable with our choice.', 4.8, true, NOW() - INTERVAL '44 days');
