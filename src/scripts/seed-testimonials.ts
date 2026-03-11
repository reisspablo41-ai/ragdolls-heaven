
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceRoleKey) {
    console.error("Missing Supabase URL or Service Role Key");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

const firstNames = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah", "Ian", "Julia", "Kevin", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quinn", "Rachel", "Sam", "Tina"];
const catNames = ["Luna", "Milo", "Oliver", "Bella", "Leo", "Loki", "Simba", "Nala", "Chloe", "Max"];
const locations = ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Phoenix, AZ", "Philadelphia, PA", "San Antonio, TX", "San Diego, CA", "Dallas, TX", "San Jose, CA"];
const testimonialsData = [
    {
        content: "Our experience with Ragdoll Heaven was exceptional. From the first inquiry to the day we brought Luna home, they were professional and caring. Luna is the most affectionate cat we've ever met!",
        rating: 5
    },
    {
        content: "Best breeder I've ever dealt with. The genetic health guarantee gave us so much peace of mind. Our little Milo is perfectly healthy and so well-socialized.",
        rating: 5
    },
    {
        content: "I've had cats all my life, but nothing compares to the temperament of a Ragdoll from this cattery. Truly floppier and sweeter than I could have imagined.",
        rating: 5
    },
    {
        content: "We flew across the country to pick up our kitten, and it was worth every mile. The care instructions provided were incredibly detailed and helpful.",
        rating: 4.8
    },
    {
        content: "Simply amazing. The kitten's coat is like silk, and his eyes are like sapphires. He's the star of our household!",
        rating: 5
    },
    {
        content: "If you're looking for a Ragdoll, look no further. This is the place. Honest, transparent, and clearly loves their animals.",
        rating: 4.4
    },
    {
        content: "The socialization of these kittens is remarkable. Our new baby integrated into our multi-pet household in less than 48 hours.",
        rating: 4.9
    },
    {
        content: "We were on the waitlist for six months, and the communication throughout was top-notch. It was absolutely worth the wait for such a high-quality kitten.",
        rating: 4.7
    },
    {
        content: "Every time someone visits, they can't believe how gentle and patient our Ragdoll is with our children. A perfect family pet.",
        rating: 5
    },
    {
        content: "High-end breeder for a high-end experience. You get what you pay for: a healthy, gorgeous, and well-adjusted companion.",
        rating: 4.6
    },
    {
        content: "We love our new addition! She's so playful yet so calm when it's time to cuddle. Ragdoll Heaven really knows what they're doing.",
        rating: 4.5
    },
    {
        content: "The dedication to the breed's health and standards is evident in everything they do. I wouldn't go anywhere else.",
        rating: 5
    },
    {
        content: "A truly magical addition to our home. The personality of these kittens is unlike any other breed I've encountered.",
        rating: 4.8
    },
    {
        content: "From start to finish, the process was seamless. The breeder's knowledge of Ragdoll genetics is truly impressive.",
        rating: 4.9
    },
    {
        content: "We couldn't be happier. Our new kitten is not just a pet, but a true family member. Thank you, Ragdoll Heaven!",
        rating: 5
    },
    {
        content: "The attention to detail in the care package we received was beyond our expectations. Highly professional cattery.",
        rating: 4.7
    },
    {
        content: "Our kitten is so well-behaved and litter-trained. It shows how much work goes into raising them properly.",
        rating: 4.6
    },
    {
        content: "The beauty of these cats is stunning, but their temperament is what truly makes them special. A perfect 10/10.",
        rating: 5
    },
    {
        content: "We appreciated the ongoing support even after we brought our kitten home. They really care about where their cats go.",
        rating: 4.4
    },
    {
        content: "Looking forward to getting a second kitten from here in the future. Best Ragdolls in the country, hands down.",
        rating: 5
    },
    {
        content: "Our veterinarian was impressed by the health certificate and the overall condition of the kitten. Top-tier quality.",
        rating: 4.9
    },
    {
        content: "The floppy nature of these cats is no myth. Our kitten is essentially a living plush toy. So much love!",
        rating: 5
    },
    {
        content: "I recommend Ragdoll Heaven to all my friends. If you want a healthy, happy cat, this is the only place to go.",
        rating: 4.5
    },
    {
        content: "Absolutely delighted with our experience. The transition was smooth, and our kitten is absolutely thriving.",
        rating: 4.8
    },
    {
        content: "The level of care and expertise shown by this breeder is unmatched. Our kitten is healthy, happy, and so charming.",
        rating: 5.0
    },
    {
        content: "We were looking for a specific color pattern, and the breeder helped us find the perfect match. Excellent service.",
        rating: 4.6
    },
    {
        content: "It's rare to find a breeder who cares so much about the kittens after they leave. We felt supported every step of the way.",
        rating: 4.9
    },
    {
        content: "Our new baby is a total purr-machine! So well-adjusted and friendly from day one. Highly recommend this cattery.",
        rating: 4.7
    },
    {
        content: "The documentation and health records provided were thorough and professional. A very trustworthy breeder.",
        rating: 4.5
    },
    {
        content: "We love how 'floppy' our Ragdoll is. He truly lives up to the breed's reputation. A perfect companion.",
        rating: 5.0
    },
    {
        content: "The facility was clean and the cats were clearly well-treated. It made us very comfortable with our choice.",
        rating: 4.8
    }
];

async function seedTestimonials() {
    console.log("Seeding testimonials...");

    const testimonials = [];

    for (let i = 0; i < 80; i++) {
        const name = firstNames[Math.floor(Math.random() * firstNames.length)] + " " + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + ".";
        const city = locations[Math.floor(Math.random() * locations.length)];
        const data = testimonialsData[i % testimonialsData.length];

        testimonials.push({
            client_name: name,
            location: city,
            content: data.content,
            rating: data.rating,
            approved: true,
            created_at: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString()
        });
    }

    const { error } = await supabase.from("testimonials").insert(testimonials);

    if (error) {
        console.error("Error seeding testimonials:", error);
    } else {
        console.log("Successfully seeded 70 testimonials!");
    }
}

seedTestimonials();
